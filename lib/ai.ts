import Anthropic from "@anthropic-ai/sdk";

/**
 * One place for the site's AI calls (review drafts at /r/[client], the Riya
 * assistant at /api/chat). Works with either provider, whichever key is set:
 * OPENAI_API_KEY (preferred when present) or ANTHROPIC_API_KEY. OpenAI is
 * called over REST, so no extra package is needed.
 */

export type AiTurn = { role: "user" | "assistant"; content: string };
export type AiProvider = "openai" | "anthropic";

const OPENAI_MODEL = process.env.OPENAI_MODEL || "gpt-5-nano";
const ANTHROPIC_MODEL = process.env.ANTHROPIC_MODEL || "claude-sonnet-5";

export function aiProvider(): AiProvider | null {
  if (process.env.OPENAI_API_KEY) return "openai";
  if (process.env.ANTHROPIC_API_KEY) return "anthropic";
  return null;
}

/** Thrown for provider rate limits, so routes can answer 429. */
export class AiRateLimitError extends Error {}
/** Thrown when the model declines to answer. */
export class AiRefusalError extends Error {}

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
  /** Higher = more varied wording (0 to 1). */
  temperature?: number;
  /** OpenAI model for this call only; defaults to OPENAI_MODEL. */
  openaiModel?: string;
}) {
  if (aiProvider() === "openai") {
    const data = await openai({ messages: [{ role: "system", content: system }, ...messages], max_tokens: maxTokens, temperature }, openaiModel);
    const choice = data?.choices?.[0];
    if (choice?.message?.refusal) throw new AiRefusalError(choice.message.refusal);
    return String(choice?.message?.content ?? "").trim();
  }

  try {
    const message = await new Anthropic().messages.create({ model: ANTHROPIC_MODEL, max_tokens: maxTokens, system, messages, temperature });
    if (message.stop_reason === "refusal") throw new AiRefusalError("refused");
    return message.content
      .filter((b): b is Anthropic.TextBlock => b.type === "text")
      .map((b) => b.text)
      .join("")
      .trim();
  } catch (error) {
    if (error instanceof Anthropic.RateLimitError) throw new AiRateLimitError("rate limited");
    throw error;
  }
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
  description,
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
  if (aiProvider() === "openai") {
    const data = await openai({
      messages: [{ role: "system", content: system }, ...messages],
      max_tokens: maxTokens,
      temperature: 0.4,
      response_format: { type: "json_schema", json_schema: { name, strict: true, schema } },
    });
    const raw = data?.choices?.[0]?.message?.content;
    return typeof raw === "string" ? (JSON.parse(raw) as Partial<T>) : {};
  }

  try {
    const message = await new Anthropic().messages.create({
      model: ANTHROPIC_MODEL,
      max_tokens: maxTokens,
      system,
      messages,
      tools: [{ name, description, input_schema: schema as Anthropic.Tool["input_schema"] }],
      tool_choice: { type: "tool", name },
    });
    const call = message.content.find((b): b is Anthropic.ToolUseBlock => b.type === "tool_use");
    return (call?.input ?? {}) as Partial<T>;
  } catch (error) {
    if (error instanceof Anthropic.RateLimitError) throw new AiRateLimitError("rate limited");
    throw error;
  }
}

async function openai(body: Record<string, unknown>, model = OPENAI_MODEL) {
  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify(openaiBody(body, model)),
  });
  if (res.status === 429) throw new AiRateLimitError("rate limited");
  if (!res.ok) throw new Error(`OpenAI request failed: ${res.status} ${await res.text()}`);
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
