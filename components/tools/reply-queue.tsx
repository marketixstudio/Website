"use client";

import { useState } from "react";
import { Check, Loader2, Send, Sparkles } from "lucide-react";
import type { WaitingReview } from "@/lib/review-report";

/** Reviews on Google with no reply yet: write a draft, edit it, post it. Nothing posts without a click. */
export function ReplyQueue({ slug, adminKey, reviews }: { slug: string; adminKey: string; reviews: WaitingReview[] }) {
  if (!reviews.length) return <p className="text-sm text-neutral-500">Every review in this period has a reply.</p>;
  return (
    <ul className="space-y-4">
      {reviews.map((r) => (
        <QueueItem key={r.reviewId} slug={slug} adminKey={adminKey} review={r} />
      ))}
    </ul>
  );
}

function QueueItem({ slug, adminKey, review }: { slug: string; adminKey: string; review: WaitingReview }) {
  const [reply, setReply] = useState("");
  const [busy, setBusy] = useState<"" | "draft" | "post">("");
  const [posted, setPosted] = useState(false);
  const [error, setError] = useState("");

  async function call(url: string, body: object) {
    const res = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ key: adminKey, client: slug, ...body }) });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data.error || "Something went wrong.");
    return data;
  }

  async function draft() {
    setBusy("draft");
    setError("");
    try {
      setReply((await call("/api/review-reply", { rating: review.rating, text: review.text, reviewerName: review.reviewer })).reply);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Couldn't write a draft.");
    } finally {
      setBusy("");
    }
  }

  async function post() {
    setBusy("post");
    setError("");
    try {
      await call("/api/gbp/reply", { reviewId: review.reviewId, comment: reply });
      setPosted(true);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Couldn't post.");
    } finally {
      setBusy("");
    }
  }

  const low = review.rating <= 3;
  return (
    <li className={`rounded-2xl border bg-white p-5 ${low ? "border-red-200" : "border-neutral-200"}`}>
      <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
        <span className="font-semibold">{review.reviewer || "Google user"}</span>
        <span className={low ? "font-semibold text-red-600" : "text-amber-500"}>
          {"★".repeat(review.rating)}
          <span className="text-neutral-300">{"★".repeat(5 - review.rating)}</span>
          <span className="ml-2 text-neutral-400">{review.date}</span>
        </span>
      </div>
      <p className="mt-2 whitespace-pre-line text-[15px] leading-relaxed text-neutral-700">{review.text || <em className="text-neutral-400">Rating only, no text.</em>}</p>
      {posted ? (
        <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-green-700">
          <Check className="h-4 w-4" /> Reply posted on Google
        </p>
      ) : (
        <div className="mt-4">
          {reply && (
            <textarea
              value={reply}
              onChange={(e) => setReply(e.target.value)}
              rows={4}
              aria-label="Reply"
              className="mb-3 w-full resize-y rounded-xl bg-neutral-100 px-4 py-3 text-[15px]"
            />
          )}
          <div className="flex flex-wrap gap-2">
            <button type="button" onClick={draft} disabled={!!busy} className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-4 py-2 text-sm font-semibold disabled:opacity-60">
              {busy === "draft" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}
              {reply ? "Another version" : "Write a reply"}
            </button>
            {reply && (
              <button type="button" onClick={post} disabled={!!busy} className="inline-flex items-center gap-2 rounded-full bg-[#C82AEF] px-4 py-2 text-sm font-semibold text-white disabled:opacity-60">
                {busy === "post" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                Post on Google
              </button>
            )}
          </div>
          {low && reply && <p className="mt-2 text-xs text-neutral-500">Low rating: read it carefully and change anything that isn&apos;t right before posting.</p>}
          {error && <p role="alert" className="mt-2 text-sm font-medium text-red-600">{error}</p>}
        </div>
      )}
    </li>
  );
}
