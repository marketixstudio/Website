import Anthropic from "@anthropic-ai/sdk";

/**
 * One place for the site's AI calls (review drafts at /r/[client], owner replies, the
 * Riya assistant at /api/chat). OpenAI is used first when OPENAI_API_KEY is set, and is
 * called over REST, so no extra package is needed. When ANTHROPIC_API_KEY is also set,
 * Anthropic takes over for any call OpenAI cannot serve: no credits left on the account,
 * a rate limit, an outage or a network failure. With only one key, that provider is used.
 */

export type AiTurn = { role: "user" | "assistant"; content: string };
export type AiProvider = "openai" | "anthropic";

const OPENAI_MODEL = process.env.OPENAI_MODEL || "gpt-5-nano";
// Haiku 5.5: the cheapest current Claude model; plenty for a review line or a chat reply.
const ANTHROPIC_MODEL = process.env.ANTHROPIC_MODEL || "claude-haiku-5-5";

export function aiProvider(): AiProvider | null {
  if (process.env.OPENAI_API_KEY) return "openai";
  if (process.env.ANTHROPIC_API_KEY) return "anthropic";
  return null;
}

/** Thrown for provider rate limits, so routes can answer 429. */
export class AiRateLimitError extends Error {}
/** Thrown when the provider account has no credits left: a billing problem, not a passing limit. */
export class AiQuotaError extends Error {}
/** Thrown when the model declines to answer. */
export class AiRefusalError extends Error {}

/** OpenAI answered with an HTTP error (status 0 = request never got through). */
class OpenAiError extends Error {
  constructor(
    public status: number,
    message: string,
  ) {
    super(message);
  }
}

/**
 * After OpenAI fails in a way the fallback covers, skip it for a while so a request that
 * calls the model several times (review drafts retry up to twice) does not pay the wait
 * on every call. Per server instance; resets on cold start, which is fine.
 */
let openaiPausedUntil = 0;
const PAUSE_QUOTA_MS = 10 * 60_000;
const PAUSE_OTHER_MS = 30_000;

function canFallBack(error: unknown) {
  if (!process.env.ANTHROPIC_API_KEY) return false;
  if (error instanceof AiQuotaError) return true;
  if (error instanceof AiRateLimitError) return true;
  return error instanceof OpenAiError && (error.status === 0 || error.status >= 500);
}

/** Run `primary` on OpenAI; on a covered failure, log it loudly and run `fallback` on Anthropic. */
async function withFallback<T>(primary: () => Promise<T>, fallback: () => Promise<T>): Promise<T> {
  if (aiProvider() !== "openai") return fallback();
  if (Date.now() < openaiPausedUntil && process.env.ANTHROPIC_API_KEY) return fallback();
  try {
    return await primary();
  } catch (error) {
    if (!canFallBack(error)) throw error;
    openaiPausedUntil = Date.now() + (error instanceof AiQuotaError ? PAUSE_QUOTA_MS : PAUSE_OTHER_MS);
    console.error(`OpenAI unavailable (${error instanceof Error ? error.message : String(error)}); using Anthropic instead`);
    return fallback();
  }
}

/** Plain-text completion. */
export async function aiText({
  system,
  messages,
  maxTokens = 400,
  temperature = 0.6,
  openaiModel,
}: {
  system: string;
  messages: AiTurn[];
  maxTokens?: number;
  /** Higher = more varied wording (0 to 1). OpenAI only: current Claude models reject sampling settings. */
  temperature?: number;
  /** OpenAI model for this call only; defaults to OPENAI_MODEL. */
  openaiModel?: string;
}) {
  return withFallback(
    async () => {
      const data = await openai({ messages: [{ role: "system", content: system }, ...messages], max_tokens: maxTokens, temperature }, openaiModel);
      const choice = data?.choices?.[0];
      if (choice?.message?.refusal) throw new AiRefusalError(choice.message.refusal);
      return String(choice?.message?.content ?? "").trim();
    },
    async () => {
      const message = await anthropicCall(() =>
        anthropic().messages.create({
          model: ANTHROPIC_MODEL,
          max_tokens: maxTokens,
          system,
          messages,
          // Short, cheap outputs: no deep reasoning needed for a review line or a chat reply.
          output_config: { effort: "low" },
        }),
      );
      if (message.stop_reason === "refusal") throw new AiRefusalError("refused");
      return message.content
        .filter((b): b is Anthropic.TextBlock => b.type === "text")
        .map((b) => b.text)
        .join("")
        .trim();
    },
  );
}

/**
 * Structured completion: returns an object matching `schema`. The schema must
 * be written in strict form (every property required, additionalProperties
 * false) so it is valid for both providers.
 */
export async function aiStructured<T>({
  system,
  messages,
  name,
  schema,
  maxTokens = 600,
}: {
  system: string;
  messages: AiTurn[];
  name: string;
  description: string;
  schema: Record<string, unknown>;
  maxTokens?: number;
}): Promise<Partial<T>> {
  return withFallback(
    async () => {
      const data = await openai({
        messages: [{ role: "system", content: system }, ...messages],
        max_tokens: maxTokens,
        temperature: 0.4,
        response_format: { type: "json_schema", json_schema: { name, strict: true, schema } },
      });
      const raw = data?.choices?.[0]?.message?.content;
      return typeof raw === "string" ? (JSON.parse(raw) as Partial<T>) : {};
    },
    async () => {
      // Structured outputs rather than a forced tool call: forced tool use is gone on the
      // newest Claude models, and this works on every current one.
      const message = await anthropicCall(() =>
        anthropic().messages.create({
          model: ANTHROPIC_MODEL,
          max_tokens: maxTokens,
          system,
          messages,
          output_config: { effort: "low", format: { type: "json_schema", schema } },
        }),
      );
      if (message.stop_reason === "refusal") throw new AiRefusalError("refused");
      const raw = message.content
        .filter((b): b is Anthropic.TextBlock => b.type === "text")
        .map((b) => b.text)
        .join("")
        .trim();
      return raw ? (JSON.parse(raw) as Partial<T>) : {};
    },
  );
}

let anthropicClient: Anthropic | undefined;
const anthropic = () => (anthropicClient ??= new Anthropic());

/** Maps the SDK's typed errors onto the site's own, so routes answer 429 the same for both providers. */
async function anthropicCall<T>(call: () => Promise<T>): Promise<T> {
  try {
    return await call();
  } catch (error) {
    if (error instanceof Anthropic.RateLimitError) throw new AiRateLimitError("Anthropic rate limited");
    throw error;
  }
}

async function openai(body: Record<string, unknown>, model = OPENAI_MODEL) {
  let res: Response;
  try {
    res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify(openaiBody(body, model)),
    });
  } catch (error) {
    throw new OpenAiError(0, `OpenAI unreachable: ${error instanceof Error ? error.message : String(error)}`);
  }
  if (res.status === 429) {
    // OpenAI answers 429 both for a passing rate limit and for an empty credit balance.
    const text = await res.text();
    if (/insufficient_quota|credit_balance_exhausted/.test(text)) throw new AiQuotaError("OpenAI account has no credits left");
    throw new AiRateLimitError("OpenAI rate limited");
  }
  if (!res.ok) throw new OpenAiError(res.status, `OpenAI request failed: ${res.status} ${await res.text()}`);
  return res.json();
}

/**
 * GPT-5 models take max_completion_tokens instead of max_tokens. From 5.1 on, reasoning
 * "none" keeps them fast and allows a custom temperature; plain gpt-5 / gpt-5-mini only
 * accept the default temperature.
 */
function openaiBody(body: Record<string, unknown>, model: string) {
  const m = model.match(/^gpt-5(?:\.(\d+))?/);
  if (!m) return { model, ...body };
  const { max_tokens, temperature, ...rest } = body;
  const out: Record<string, unknown> = { model, ...rest, max_completion_tokens: max_tokens };
  if (m[1]) Object.assign(out, { reasoning_effort: "none", temperature });
  else out.reasoning_effort = "minimal";
  return out;
}
