import { reviewClientList } from "@/content/review-clients";
import type { ReviewClient } from "@/lib/content-types";
import { accessToken, listLocations, listReviews, postReply, STARS, type GbpReview } from "@/lib/gbp";
import { generateReply } from "@/lib/review-reply";
import { recordStat } from "@/lib/review-stats";

/**
 * The daily automatic replier (app/api/cron/review-replies). For every active review client,
 * 4 to 5 star reviews with no reply yet, from the last 7 days, get a reply written and posted.
 * 1 to 3 star reviews are never answered automatically: they wait on the report page
 * (/r/reports) with a draft to edit and post. GBP_AUTO_REPLY=on posts for real; anything
 * else is a dry run that only reports what it would do.
 */

const POST_WINDOW_DAYS = 7;
const MAX_POSTS_PER_BUSINESS = 10;

export type RunResult = {
  business: string;
  location?: string;
  posted: { reviewer: string; rating: number; reply: string }[];
  waiting: number;
  error?: string;
};

const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();

/** Ids from the client config, or found by matching the business name on the connected account. */
export async function resolveLocation(client: ReviewClient, token: string) {
  if (client.gbp) return client.gbp;
  const name = norm(client.businessName);
  const match = (await listLocations(token)).find((l) => {
    const title = norm(l.title);
    return Boolean(title) && (title.includes(name) || name.includes(title));
  });
  return match ? { accountId: match.accountId, locationId: match.locationId } : undefined;
}

export const reviewerFirstName = (r: GbpReview) => (r.reviewer?.displayName ?? "").split(/\s+/)[0] ?? "";
const ageDays = (r: GbpReview) => (Date.now() - new Date(r.createTime).getTime()) / 864e5;

export async function runAutoReplies({ live }: { live: boolean }) {
  const token = await accessToken();
  const results: RunResult[] = [];

  for (const client of reviewClientList) {
    const result: RunResult = { business: client.businessName, posted: [], waiting: 0 };
    results.push(result);
    try {
      const loc = await resolveLocation(client, token);
      if (!loc) {
        result.error = "No matching Google listing on the connected account. Add gbp ids in content/review-clients.ts.";
        continue;
      }
      result.location = `${loc.accountId}/${loc.locationId}`;
      for (const review of await listReviews(token, loc.accountId, loc.locationId)) {
        const rating = STARS[review.starRating ?? ""] ?? 0;
        if (!rating || review.reviewReply || ageDays(review) > POST_WINDOW_DAYS) continue;
        if (rating <= 3) {
          result.waiting++;
          continue;
        }
        if (result.posted.length >= MAX_POSTS_PER_BUSINESS) break;
        const reviewer = reviewerFirstName(review);
        const reply = await generateReply({ client, rating, text: review.comment ?? "", reviewerName: reviewer });
        if (!reply) continue;
        if (live) {
          await postReply(token, loc.accountId, loc.locationId, review.reviewId, reply);
          await recordStat(client.slug, "auto_reply", { rating, log: { kind: "auto", rating, reviewer, reply } });
        }
        result.posted.push({ reviewer, rating, reply });
      }
    } catch (e) {
      result.error = e instanceof Error ? e.message : String(e);
    }
  }
  return results;
}
