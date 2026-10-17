import { redis, statsStorage } from "@/lib/review-stats";

/**
 * Recent review drafts and owner replies per business, for the no-repeat checks. Kept in
 * Redis when it is set up, so every serverless instance sees the same history (an in-memory
 * list resets on every cold start and lets near-identical drafts through). Without Redis it
 * falls back to memory. Never breaks a request.
 */

const KEEP = 60;
const local = new Map<string, string[]>();

export async function recentTexts(key: string): Promise<string[]> {
  if (statsStorage() === "redis") {
    try {
      const [res] = await redis([["LRANGE", `rv:recent:${key}`, 0, KEEP - 1]]);
      return ((res.result as string[]) ?? []).reverse(); // oldest first
    } catch (e) {
      console.error("Recent drafts not read", e);
    }
  }
  return local.get(key) ?? [];
}

export async function rememberText(key: string, text: string) {
  local.set(key, [...(local.get(key) ?? []), text].slice(-KEEP));
  if (statsStorage() !== "redis") return;
  try {
    await redis([
      ["LPUSH", `rv:recent:${key}`, text],
      ["LTRIM", `rv:recent:${key}`, 0, KEEP - 1],
    ]);
  } catch (e) {
    console.error("Recent draft not saved", e);
  }
}
