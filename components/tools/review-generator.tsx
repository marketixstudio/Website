"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Check, Copy, Loader2, RefreshCw } from "lucide-react";
import type { ReviewClient } from "@/lib/content-types";
import PeekRating from "@/components/ui/bits/PeekRating";

type Status = "idle" | "loading" | "ready" | "error";

export function ReviewGenerator({ config }: { config: ReviewClient }) {
  const [rating, setRating] = useState(0);
  const [service, setService] = useState("");
  const [feedback, setFeedback] = useState("");
  const [review, setReview] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const accentStyle = { backgroundColor: config.accent, color: config.accentInk };

  async function generate() {
    if (!rating) {
      setError("Please choose a star rating.");
      setStatus("error");
      return;
    }
    if (feedback.trim().length < 3) {
      setError("Tell us a little about your experience.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setError("");

    try {
      const res = await fetch("/api/review", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ client: config.slug, rating, service, feedback }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }
      setReview(data.review);
      setStatus("ready");
    } catch {
      setError("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  }

  async function copyReview() {
    try {
      await navigator.clipboard.writeText(review);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setError("Couldn't copy automatically. Please select the text and copy it.");
    }
  }

  return (
    <div className="min-h-screen bg-white px-5 py-12 text-[#0A0A0C] sm:py-16">
      <div className="mx-auto w-full max-w-xl">
        <header className="text-center">
          {config.logo && (
            <Image
              src={config.logo}
              alt={config.businessName}
              width={88}
              height={88}
              priority
              className="mx-auto h-[88px] w-[88px] rounded-full object-cover"
            />
          )}
          <h1 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
            {config.headline}{" "}
            <span style={{ color: config.accent }}>{config.highlight}</span>
          </h1>
          <p className="mt-3 text-base text-neutral-500">{config.subheadline}</p>
        </header>

        <div className="mt-10 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-400">
            Your experience
          </p>
          <div className="mt-4 border-t border-neutral-100 pt-6">
            <fieldset>
              <legend className="text-sm font-semibold">How would you rate us?</legend>
              {/* React Bits PeekRating. Starts empty on purpose: a preset rating would nudge
                  customers, and the rating must be their own choice. */}
              <div className="mt-3">
                <PeekRating
                  value={rating}
                  count={5}
                  shape="star"
                  labels={["Poor", "Fair", "Good", "Great", "Superb"]}
                  activeColor="#f5b400"
                  idleColor="#52525b"
                  tipColor="#27272a"
                  tipTextColor="#f5f5f5"
                  size={32}
                  lift={7}
                  magnify={1.15}
                  riseDuration={320}
                  popScale={1.3}
                  showTip
                  allowClear
                  onChange={setRating}
                  ariaLabel="How would you rate us?"
                />
              </div>
            </fieldset>

            <div className="mt-6">
              <label htmlFor="service" className="text-sm font-semibold">
                What service did you use?
              </label>
              <select
                id="service"
                value={service}
                onChange={(event) => setService(event.target.value)}
                className="mt-2 w-full rounded-xl border-0 bg-neutral-100 px-4 py-3.5 text-[15px] text-neutral-800 focus:outline focus:outline-2 focus:outline-offset-2"
              >
                <option value="">Choose a service...</option>
                {config.services.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-6">
              <label htmlFor="feedback" className="text-sm font-semibold">
                Tell us about your experience
              </label>
              <textarea
                id="feedback"
                rows={4}
                maxLength={600}
                value={feedback}
                onChange={(event) => setFeedback(event.target.value)}
                placeholder={config.placeholder}
                className="mt-2 w-full resize-none rounded-xl border-0 bg-neutral-100 px-4 py-3.5 text-[15px] text-neutral-800 placeholder:text-neutral-400 focus:outline focus:outline-2 focus:outline-offset-2"
              />
              <p className="mt-1.5 text-right text-xs text-neutral-400">
                {feedback.length}/600
              </p>
            </div>

            {error && (
              <p role="alert" className="mt-4 text-sm font-medium text-red-600">
                {error}
              </p>
            )}

            <button
              type="button"
              onClick={generate}
              disabled={status === "loading"}
              style={accentStyle}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-base font-bold transition-transform hover:-translate-y-0.5 disabled:translate-y-0 disabled:opacity-60"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" strokeWidth={2.5} />
                  Writing your review...
                </>
              ) : (
                <>
                  {review ? "Rewrite My Review" : "Write My Review"}
                  <ArrowRight className="h-5 w-5" strokeWidth={2.5} />
                </>
              )}
            </button>
          </div>
        </div>

        {status === "ready" && review && (
          <div className="mt-6 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-400">
              Your review
            </p>
            <label htmlFor="review-text" className="sr-only">
              Your review - edit it however you like
            </label>
            <textarea
              id="review-text"
              rows={5}
              value={review}
              onChange={(event) => setReview(event.target.value)}
              className="mt-4 w-full resize-none rounded-xl bg-neutral-50 p-4 text-[15px] leading-relaxed text-neutral-800 focus:outline focus:outline-2 focus:outline-offset-2"
            />
            <p className="mt-2 text-xs text-neutral-400">
              Edit it freely - it&apos;s your review, in your words.
            </p>

            <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
              <button
                type="button"
                onClick={copyReview}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-neutral-200 px-5 py-3.5 text-sm font-semibold transition-colors hover:bg-neutral-50"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4" strokeWidth={2.5} /> Copied
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" strokeWidth={2} /> Copy
                  </>
                )}
              </button>
              <a
                href={config.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={copyReview}
                style={accentStyle}
                className="inline-flex flex-[2] items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-bold transition-transform hover:-translate-y-0.5"
              >
                Post on Google
                <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
              </a>
            </div>

            <button
              type="button"
              onClick={generate}
              className="mt-4 inline-flex w-full items-center justify-center gap-1.5 text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-800"
            >
              <RefreshCw className="h-3.5 w-3.5" strokeWidth={2} />
              Try a different wording
            </button>
          </div>
        )}

        <p className="mt-8 text-center text-xs leading-relaxed text-neutral-400">
          This tool helps you put your own experience into words. You review and edit
          everything before posting, and your review is submitted by you on Google.
        </p>
      </div>
    </div>
  );
}
