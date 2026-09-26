"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Loader2 } from "lucide-react";

type Status = "idle" | "sending" | "done" | "error";

export function NewsletterForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setStatus("sending");
    setMessage("");
    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "newsletter",
          email: data.get("email"),
          _gotcha: data.get("company_site"),
        }),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus("error");
        setMessage(body.error || "Something went wrong. Please try again.");
        return;
      }
      setStatus("done");
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  if (status === "done") {
    return <p className="text-base text-ink-2">You're on the list. Thanks for subscribing.</p>;
  }

  return (
    <form onSubmit={onSubmit} noValidate className="w-full">
      <label htmlFor="newsletter-email" className="text-sm font-semibold text-ink">
        Marketing notes by email
      </label>
      <div className="mt-3 flex items-center gap-2 rounded-full border border-line bg-card p-1.5 pl-5 focus-within:border-accent">
        <input
          id="newsletter-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@company.com"
          aria-describedby="newsletter-help"
          className="h-10 min-w-0 flex-1 bg-transparent text-[0.9375rem] text-ink placeholder:text-muted focus:outline-none"
        />
        {/* Honeypot: hidden from people, filled in by bots. */}
        <input type="text" name="company_site" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
        <button
          type="submit"
          disabled={status === "sending"}
          aria-label="Subscribe"
          className="mx-cta__arrow disabled:cursor-not-allowed disabled:opacity-55"
        >
          {status === "sending" ? (
            <Loader2 className="h-4 w-4 animate-spin" strokeWidth={2.5} />
          ) : (
            <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
          )}
        </button>
      </div>
      <p id="newsletter-help" className="mt-2 min-h-[1.5em] text-sm text-muted" role={status === "error" ? "alert" : undefined}>
        {status === "error" ? message : "Ads, SEO and Google Maps tactics. Unsubscribe any time."}
      </p>
    </form>
  );
}
