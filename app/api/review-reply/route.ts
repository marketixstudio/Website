import { reviewClients } from "@/content/review-clients";
import { aiProvider, AiRateLimitError, AiRefusalError } from "@/lib/ai";
import { generateReply } from "@/lib/review-reply";
import { hasAdminAccess } from "@/lib/admin-auth";

export const runtime = "nodejs";

/** Private: drafts an owner reply for the reply helper page. Requires REVIEW_ADMIN_KEY. */
export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }
  if (!hasAdminAccess(body.key)) return Response.json({ error: "Not allowed." }, { status: 403 });

  const client = typeof body.client === "string" ? reviewClients[body.client] : undefined;
  if (!client) return Response.json({ error: "Unknown business." }, { status: 404 });
  const rating = Number(body.rating);
  if (!Number.isInteger(rating) || rating < 1 || rating > 5) return Response.json({ error: "Choose the star rating." }, { status: 400 });
  const text = typeof body.text === "string" ? body.text.trim().slice(0, 2000) : "";
  const reviewerName = typeof body.reviewerName === "string" ? body.reviewerName.slice(0, 80) : "";
  if (!aiProvider()) return Response.json({ error: "AI is not configured." }, { status: 503 });

  try {
    const reply = await generateReply({ client, rating, text, reviewerName });
    if (!reply) return Response.json({ error: "Couldn't write a reply. Try again." }, { status: 502 });
    return Response.json({ reply });
  } catch (error) {
    if (error instanceof AiRateLimitError) return Response.json({ error: "Busy, try again in a moment." }, { status: 429 });
    if (error instanceof AiRefusalError) return Response.json({ error: "Couldn't write a reply for this one." }, { status: 422 });
    console.error("Reply generation failed", error);
    return Response.json({ error: "Something went wrong." }, { status: 500 });
  }
}
