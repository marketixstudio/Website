import { accessToken, gbpConfigured, listLocations } from "@/lib/gbp";
import { isReviewAdmin } from "@/lib/review-admin";

export const runtime = "nodejs";

/** Private: lists every business the connected account manages, with ids. ?key=<REVIEW_ADMIN_KEY> */
export async function GET(request: Request) {
  if (!isReviewAdmin(new URL(request.url).searchParams.get("key"))) return new Response("Not found", { status: 404 });
  if (!gbpConfigured()) return Response.json({ error: "Google is not connected yet." }, { status: 503 });
  try {
    return Response.json({ locations: await listLocations(await accessToken()) });
  } catch (e) {
    return Response.json({ error: e instanceof Error ? e.message : String(e) }, { status: 502 });
  }
}
