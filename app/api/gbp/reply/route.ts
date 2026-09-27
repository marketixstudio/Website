import { reviewClients } from "@/content/review-clients";
import { accessToken, getReview, postReply, STARS } from "@/lib/gbp";
import { hasAdminAccess } from "@/lib/admin-auth";
import { resolveLocation, reviewerFirstName } from "@/lib/review-autoreply";
import { recordStat } from "@/lib/review-stats";

export const runtime = "nodejs";

/** Private: posts a reply written or edited on the report page. { key, client, reviewId, comment } */
export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  if (!hasAdminAccess(body.key)) return Response.json({ error: "Not allowed." }, { status: 403 });
  const client = typeof body.client === "string" ? reviewClients[body.client] : undefined;
  const reviewId = typeof body.reviewId === "string" ? body.reviewId : "";
  const comment = typeof body.comment === "string" ? body.comment.trim() : "";
  if (!client || !reviewId) return Response.json({ error: "Unknown review." }, { status: 404 });
  if (comment.length < 2 || comment.length > 4000) return Response.json({ error: "Write the reply first." }, { status: 400 });
  try {
    const token = await accessToken();
    const loc = await resolveLocation(client, token);
    if (!loc) return Response.json({ error: "Google listing not found." }, { status: 404 });
    const review = await getReview(token, loc.accountId, loc.locationId, reviewId);
    await postReply(token, loc.accountId, loc.locationId, reviewId, comment);
    const rating = STARS[review.starRating ?? ""] ?? 0;
    await recordStat(client.slug, "manual_reply", { rating, log: { kind: "manual", rating, reviewer: reviewerFirstName(review), reply: comment } });
    return Response.json({ ok: true });
  } catch (e) {
    return Response.json({ error: e instanceof Error ? e.message : "Couldn't post the reply." }, { status: 502 });
  }
}
