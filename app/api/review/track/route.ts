import { reviewClients } from "@/content/review-clients";
import { recordStat } from "@/lib/review-stats";

export const runtime = "nodejs";

/** Public beacon from the review page: the customer tapped "Post on Google". Counts only, no personal data. */
export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const client = typeof body.client === "string" ? reviewClients[body.client] : undefined;
  if (client?.active) await recordStat(client.slug, "google_click");
  return new Response(null, { status: 204 });
}
