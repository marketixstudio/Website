import type { ReviewClient } from "@/lib/content-types";
import { accessToken, gbpConfigured, listReviews, STARS } from "@/lib/gbp";
import { resolveLocation } from "@/lib/review-autoreply";
import { dayKey, monthKey, readStats, statsStorage, type Counts, type ReplyLog } from "@/lib/review-stats";

/** Builds the private review report (/r/reports) for one business and one period. */

export type Period = "7d" | "30d" | "all" | `${number}-${number}`;
export const parsePeriod = (p?: string): Period => (p === "7d" || p === "all" || (p && /^\d{4}-\d{2}$/.test(p)) ? (p as Period) : "30d");

export type Bar = { label: string; drafts: number; google: number };
export type WaitingReview = { reviewId: string; reviewer: string; rating: number; text: string; date: string };
export type Report = {
  period: Period;
  periodLabel: string;
  storage: ReturnType<typeof statsStorage>;
  page: { generated: number; googleClicks: number; byStars: number[] };
  replies: { auto: number; manual: number; log: ReplyLog[] };
  google:
    | { connected: false; reason: string }
    | {
        connected: true;
        total: number;
        average: number;
        received: number;
        periodAverage: number;
        replied: number;
        byStars: number[];
        waiting: WaitingReview[];
        /** Reviews older than what was fetched are not in the period figures. */
        partial: boolean;
      };
  bars: Bar[];
  months: string[];
};

const monthName = (m: string) => new Date(`${m}-01T00:00:00Z`).toLocaleString("en-IN", { month: "long", year: "numeric", timeZone: "UTC" });
const shortDay = (d: string) => new Date(`${d}T00:00:00Z`).toLocaleString("en-IN", { day: "numeric", month: "short", timeZone: "UTC" });

function periodDays(period: Period): string[] | null {
  if (period === "all") return null;
  if (period === "7d" || period === "30d") {
    const n = period === "7d" ? 7 : 30;
    return Array.from({ length: n }, (_, i) => dayKey(new Date(Date.now() - (n - 1 - i) * 864e5)));
  }
  const [y, m] = period.split("-").map(Number);
  const last = new Date(Date.UTC(y, m, 0)).getUTCDate();
  const today = dayKey();
  return Array.from({ length: last }, (_, i) => `${period}-${String(i + 1).padStart(2, "0")}`).filter((d) => d <= today);
}

const sum = (list: Counts[]) => list.reduce<Counts>((acc, c) => {
  for (const [k, v] of Object.entries(c)) acc[k] = (acc[k] ?? 0) + v;
  return acc;
}, {});
const stars = (c: Counts, event: string) => [1, 2, 3, 4, 5].map((s) => c[`${event}_${s}`] ?? 0);

export async function buildReport(client: ReviewClient, period: Period): Promise<Report> {
  const raw = await readStats(client.slug);
  const days = periodDays(period);
  const isMonth = /^\d{4}-\d{2}$/.test(period);
  // A whole month comes from its month bucket (kept for good); rolling windows from day buckets.
  const counts = period === "all" ? sum(Object.values(raw.months)) : isMonth ? raw.months[period] ?? {} : sum(days!.map((d) => raw.days[d] ?? {}));
  const inPeriod = (iso: string) => {
    if (period === "all") return true;
    const d = dayKey(new Date(iso));
    return isMonth ? d.startsWith(period) : d >= days![0];
  };

  const bars: Bar[] =
    period === "all"
      ? [...Object.keys(raw.months)].sort().slice(-12).map((m) => ({ label: m, drafts: raw.months[m].generated ?? 0, google: 0 }))
      : days!.map((d) => ({ label: d, drafts: raw.days[d]?.generated ?? 0, google: 0 }));

  const report: Report = {
    period,
    periodLabel: period === "7d" ? "Last 7 days" : period === "30d" ? "Last 30 days" : period === "all" ? "All time" : monthName(period),
    storage: statsStorage(),
    page: { generated: counts.generated ?? 0, googleClicks: counts.google_click ?? 0, byStars: stars(counts, "generated") },
    replies: { auto: counts.auto_reply ?? 0, manual: counts.manual_reply ?? 0, log: raw.log.filter((l) => inPeriod(l.at)) },
    google: { connected: false, reason: "Google is not connected yet. Once it is, reviews received, ratings and replies from Google show here." },
    bars,
    months: [],
  };

  const monthSet = new Set(Object.keys(raw.months));
  if (gbpConfigured()) {
    try {
      const token = await accessToken();
      const loc = await resolveLocation(client, token);
      if (!loc) throw new Error("No matching Google listing on the connected account.");
      const reviews = await listReviews(token, loc.accountId, loc.locationId, 6);
      const byStars = [0, 0, 0, 0, 0];
      let replied = 0;
      let total = 0;
      const waiting: WaitingReview[] = [];
      for (const r of reviews) {
        const rating = STARS[r.starRating ?? ""] ?? 0;
        monthSet.add(monthKey(new Date(r.createTime)));
        const bar = report.bars.find((b) => b.label === (period === "all" ? monthKey(new Date(r.createTime)) : dayKey(new Date(r.createTime))));
        if (bar) bar.google++;
        if (!inPeriod(r.createTime) || !rating) continue;
        byStars[rating - 1]++;
        total += rating;
        if (r.reviewReply) replied++;
        else waiting.push({ reviewId: r.reviewId, reviewer: r.reviewer?.displayName ?? "", rating, text: r.comment ?? "", date: dayKey(new Date(r.createTime)) });
      }
      const received = byStars.reduce((a, b) => a + b, 0);
      const oldest = reviews.at(-1);
      report.google = {
        connected: true,
        total: reviews.totalReviewCount,
        average: reviews.averageRating,
        received,
        periodAverage: received ? total / received : 0,
        replied,
        byStars,
        // Low ratings first, then oldest first, so nothing sits unanswered.
        waiting: waiting.sort((a, b) => a.rating - b.rating || a.date.localeCompare(b.date)),
        partial: Boolean(oldest && reviews.length < reviews.totalReviewCount && inPeriod(oldest.createTime)),
      };
    } catch (e) {
      report.google = { connected: false, reason: `Couldn't read Google: ${e instanceof Error ? e.message : String(e)}` };
    }
  }
  report.months = [...monthSet].sort().reverse().slice(0, 12);
  if (!report.months.includes(monthKey())) report.months.unshift(monthKey());
  return report;
}

export { shortDay, monthName };
