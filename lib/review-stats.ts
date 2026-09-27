import { promises as fs } from "node:fs";
import path from "node:path";

/**
 * Counts for the private review report (/r/reports). Stored in Upstash Redis over its REST
 * API (KV_REST_API_URL / KV_REST_API_TOKEN, set by the Vercel Upstash integration). In local
 * development without Redis it falls back to .data/review-stats.json; on Vercel without
 * Redis nothing is recorded and the report says so. Recording never breaks a request.
 *
 * Buckets: one hash per day (kept 120 days, for "last 7/30 days") and one per month (kept
 * for good, for month-wise and all-time). Fields are event names plus "<event>_<stars>".
 */

export type StatEvent = "generated" | "google_click" | "auto_reply" | "manual_reply";
export type Counts = Record<string, number>;
export type ReplyLog = { at: string; kind: "auto" | "manual"; rating: number; reviewer: string; reply: string };

const KEEP_DAYS = 120;
const LOG_SIZE = 100;

const redisUrl = () => process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
const redisToken = () => process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
export const statsStorage = (): "redis" | "file" | "none" =>
  redisUrl() && redisToken() ? "redis" : process.env.NODE_ENV !== "production" ? "file" : "none";

/** Dates in India time, so "today" and "this month" match the owner's calendar. */
export const dayKey = (d = new Date()) => new Date(d.getTime() + 5.5 * 36e5).toISOString().slice(0, 10);
export const monthKey = (d = new Date()) => dayKey(d).slice(0, 7);

async function redis(commands: (string | number)[][]) {
  const res = await fetch(`${redisUrl()}/pipeline`, {
    method: "POST",
    headers: { Authorization: `Bearer ${redisToken()}`, "Content-Type": "application/json" },
    body: JSON.stringify(commands),
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`Redis ${res.status}`);
  return (await res.json()) as { result: unknown }[];
}

// Local file store (development only).
type FileData = Record<string, { days: Record<string, Counts>; months: Record<string, Counts>; log: ReplyLog[] }>;
const FILE = path.join(process.cwd(), ".data", "review-stats.json");
async function readFile(): Promise<FileData> {
  try {
    return JSON.parse(await fs.readFile(FILE, "utf8"));
  } catch {
    return {};
  }
}

export async function recordStat(slug: string, event: StatEvent, opts: { rating?: number; log?: Omit<ReplyLog, "at"> } = {}) {
  const fields = [event, ...(opts.rating ? [`${event}_${opts.rating}`] : [])];
  const entry = opts.log ? { at: new Date().toISOString(), ...opts.log } : undefined;
  try {
    const storage = statsStorage();
    if (storage === "redis") {
      const day = `rv:${slug}:d:${dayKey()}`;
      const month = `rv:${slug}:m:${monthKey()}`;
      const cmds: (string | number)[][] = fields.flatMap((f) => [
        ["HINCRBY", day, f, 1],
        ["HINCRBY", month, f, 1],
      ]);
      cmds.push(["EXPIRE", day, KEEP_DAYS * 86400], ["SADD", `rv:${slug}:months`, monthKey()]);
      if (entry) cmds.push(["LPUSH", `rv:${slug}:log`, JSON.stringify(entry)], ["LTRIM", `rv:${slug}:log`, 0, LOG_SIZE - 1]);
      await redis(cmds);
    } else if (storage === "file") {
      const data = await readFile();
      const c = (data[slug] ??= { days: {}, months: {}, log: [] });
      c.months ??= {};
      const d = (c.days[dayKey()] ??= {});
      const m = (c.months[monthKey()] ??= {});
      for (const f of fields) {
        d[f] = (d[f] ?? 0) + 1;
        m[f] = (m[f] ?? 0) + 1;
      }
      if (entry) c.log = [entry, ...c.log].slice(0, LOG_SIZE);
      await fs.mkdir(path.dirname(FILE), { recursive: true });
      await fs.writeFile(FILE, JSON.stringify(data, null, 2));
    }
  } catch (e) {
    console.error("Review stat not recorded", e);
  }
}

export type RawStats = { days: Record<string, Counts>; months: Record<string, Counts>; log: ReplyLog[] };

/** Everything the report needs for one business: the last 120 days, every month, the reply log. */
export async function readStats(slug: string): Promise<RawStats> {
  const dates = Array.from({ length: KEEP_DAYS }, (_, i) => dayKey(new Date(Date.now() - i * 864e5)));
  const storage = statsStorage();
  if (storage === "file") {
    const c = (await readFile())[slug];
    return { days: c?.days ?? {}, months: c?.months ?? {}, log: c?.log ?? [] };
  }
  if (storage === "none") return { days: {}, months: {}, log: [] };

  const toCounts = (r: unknown) => {
    const a = (r as string[]) ?? []; // Upstash returns HGETALL as [field, value, ...]
    const o: Counts = {};
    for (let i = 0; i < a.length; i += 2) o[a[i]] = Number(a[i + 1]) || 0;
    return o;
  };
  const [monthList, log, ...dayRes] = await redis([
    ["SMEMBERS", `rv:${slug}:months`],
    ["LRANGE", `rv:${slug}:log`, 0, LOG_SIZE - 1],
    ...dates.map((d) => ["HGETALL", `rv:${slug}:d:${d}`]),
  ]);
  const months = ((monthList.result as string[]) ?? []).sort();
  const monthRes = months.length ? await redis(months.map((m) => ["HGETALL", `rv:${slug}:m:${m}`])) : [];
  const out: RawStats = { days: {}, months: {}, log: ((log.result as string[]) ?? []).map((s) => JSON.parse(s) as ReplyLog) };
  dates.forEach((d, i) => {
    const c = toCounts(dayRes[i].result);
    if (Object.keys(c).length) out.days[d] = c;
  });
  months.forEach((m, i) => (out.months[m] = toCounts(monthRes[i].result)));
  return out;
}
