import { oauthUrl } from "@/lib/gbp";
import { adminState, isReviewAdmin } from "@/lib/review-admin";

export const runtime = "nodejs";

/** Step 1 of the one-time Google sign-in: /api/gbp/connect?key=<REVIEW_ADMIN_KEY>. */
export function GET(request: Request) {
  const url = new URL(request.url);
  if (!isReviewAdmin(url.searchParams.get("key"))) return new Response("Not found", { status: 404 });
  if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {
    return new Response("Add GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET first (see docs/REVIEW_REPLIES.md).", { status: 503 });
  }
  return Response.redirect(oauthUrl(`${url.origin}/api/gbp/callback`, adminState()), 302);
}
