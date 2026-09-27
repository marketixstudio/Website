import { aiProvider } from "@/lib/ai";
import { gbpConfigured } from "@/lib/gbp";
import { hasAdminAccess } from "@/lib/admin-auth";
import { runAutoReplies } from "@/lib/review-autoreply";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;

/**
 * Daily automatic Google review replies (schedule in vercel.json).
 * Vercel Cron calls it with "Authorization: Bearer <CRON_SECRET>". For a manual check,
 * open /api/cron/review-replies?key=<REVIEW_ADMIN_KEY>: always a dry run, nothing is posted
 * or emailed. Real posting needs GBP_AUTO_REPLY=on.
 */
export async function GET(request: Request) {
  const url = new URL(request.url);
  const secret = process.env.CRON_SECRET;
  const fromCron = Boolean(secret) && request.headers.get("authorization") === `Bearer ${secret}`;
  const manual = hasAdminAccess(url.searchParams.get("key"));
  if (!fromCron && !manual) return new Response("Not found", { status: 404 });

  if (!gbpConfigured()) return Response.json({ ok: false, reason: "Google is not connected yet (see docs/REVIEW_REPLIES.md)." });
  if (!aiProvider()) return Response.json({ ok: false, reason: "No AI key configured." });

  const live = fromCron && process.env.GBP_AUTO_REPLY === "on";
  try {
    const results = await runAutoReplies({ live });
    return Response.json({ ok: true, mode: live ? "live" : "dry run", results });
  } catch (e) {
    console.error("Review auto-reply run failed", e);
    return Response.json({ ok: false, reason: e instanceof Error ? e.message : String(e) }, { status: 502 });
  }
}
