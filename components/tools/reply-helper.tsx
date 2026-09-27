"use client";

import { useState, type FormEvent } from "react";
import { Check, Copy, Loader2, RefreshCw } from "lucide-react";

/**
 * Private reply helper for the owner or Marketix: paste a Google review, pick its stars,
 * get a short personal reply to copy into Google. "Another version" asks for a fresh one.
 */
export function ReplyHelper({ slug, businessName, adminKey }: { slug: string; businessName: string; adminKey: string }) {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(5);
  const [name, setName] = useState("");
  const [reply, setReply] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  async function draft(event?: FormEvent) {
    event?.preventDefault();
    setBusy(true);
    setError("");
    setCopied(false);
    try {
      const res = await fetch("/api/review-reply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key: adminKey, client: slug, rating, text, reviewerName: name }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.reply) throw new Error(data.error || "Couldn't write a reply.");
      setReply(data.reply);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Couldn't write a reply.");
    } finally {
      setBusy(false);
    }
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(reply);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setError("Couldn't copy. Select the text and copy it.");
    }
  }

  return (
    <div className="min-h-screen bg-neutral-50 px-5 py-12 text-[#0A0A0C]">
      <div className="mx-auto w-full max-w-xl">
        <p className="text-sm font-semibold text-neutral-500">Private tool</p>
        <h1 className="mt-1 text-2xl font-extrabold">Reply to a review: {businessName}</h1>
        <p className="mt-2 text-sm text-neutral-500">
          Paste a Google review and get a short, personal reply to copy into Google. Each reply is written fresh.
        </p>

        <form onSubmit={draft} className="mt-8 space-y-5 rounded-2xl border border-neutral-200 bg-white p-6">
          <div>
            <p className="text-sm font-semibold">Stars</p>
            <div className="mt-2 flex gap-2">
              {[1, 2, 3, 4, 5].map((s) => (
                <button
                  key={s}
                  type="button"
                  aria-pressed={rating === s}
                  onClick={() => setRating(s)}
                  className={`h-10 w-10 rounded-full border text-sm font-bold ${rating === s ? "border-[#0A0A0C] bg-[#0A0A0C] text-white" : "border-neutral-300 text-neutral-600"}`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label htmlFor="rname" className="text-sm font-semibold">
              Reviewer&apos;s name <span className="font-normal text-neutral-400">(optional)</span>
            </label>
            <input id="rname" value={name} onChange={(e) => setName(e.target.value)} className="mt-2 w-full rounded-xl bg-neutral-100 px-4 py-3 text-[15px]" />
          </div>
          <div>
            <label htmlFor="rtext" className="text-sm font-semibold">
              The review <span className="font-normal text-neutral-400">(leave empty for rating-only reviews)</span>
            </label>
            <textarea id="rtext" rows={5} value={text} onChange={(e) => setText(e.target.value)} className="mt-2 w-full resize-none rounded-xl bg-neutral-100 px-4 py-3 text-[15px]" />
          </div>
          <button type="submit" disabled={busy} className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#C82AEF] px-5 py-3 font-semibold text-white disabled:opacity-60">
            {busy && <Loader2 className="h-4 w-4 animate-spin" />}
            Write a reply
          </button>
          {error && <p role="alert" className="text-sm font-medium text-red-600">{error}</p>}
        </form>

        {reply && (
          <div className="mt-6 rounded-2xl border border-neutral-200 bg-white p-6">
            <p className="whitespace-pre-line text-[15px] leading-relaxed">{reply}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <button type="button" onClick={copy} className="inline-flex items-center gap-2 rounded-full bg-[#0A0A0C] px-4 py-2 text-sm font-semibold text-white">
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                {copied ? "Copied" : "Copy reply"}
              </button>
              <button type="button" onClick={() => draft()} disabled={busy} className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-4 py-2 text-sm font-semibold">
                <RefreshCw className="h-4 w-4" />
                Another version
              </button>
            </div>
            {rating <= 3 && (
              <p className="mt-4 text-xs text-neutral-500">Low rating: read it carefully and adjust anything before posting.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
