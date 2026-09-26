"use client";

import { useState } from "react";
import Script from "next/script";
import { ArrowRight, Loader2 } from "lucide-react";

type Props = {
  productSlug: string;
  priceInr: number;
  priceUsd?: number;
  compareAtInr?: number;
};

declare global {
  interface Window {
    Razorpay?: new (options: Record<string, unknown>) => { open: () => void };
  }
}

export function BuyButton({ productSlug, priceInr, priceUsd, compareAtInr }: Props) {
  const [gateway, setGateway] = useState<"razorpay" | "stripe">("razorpay");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function checkout() {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productSlug, gateway }),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Could not start checkout.");
        setLoading(false);
        return;
      }

      if (data.gateway === "stripe") {
        window.location.href = data.url;
        return;
      }

      if (!window.Razorpay) {
        setError("Payment library failed to load. Please refresh and try again.");
        setLoading(false);
        return;
      }

      new window.Razorpay({
        key: data.keyId,
        amount: data.amount,
        currency: data.currency,
        name: "Marketix Studio",
        description: data.name,
        order_id: data.orderId,
        theme: { color: "#C82AEF" },
        handler: () => {
          window.location.href = `/${productSlug}?purchase=success`;
        },
        modal: { ondismiss: () => setLoading(false) },
      }).open();
    } catch {
      setError("Network error. Please try again.");
      setLoading(false);
    }
  }

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="lazyOnload" />

      <div className="mx-card p-7">
        <div className="flex items-baseline gap-3">
          <span className="font-display text-4xl font-extrabold tracking-tight text-ink">
            {gateway === "razorpay" ? `₹${priceInr.toLocaleString("en-IN")}` : `$${priceUsd}`}
          </span>
          {gateway === "razorpay" && compareAtInr && (
            <span className="font-sans text-lg text-muted line-through">
              ₹{compareAtInr.toLocaleString("en-IN")}
            </span>
          )}
        </div>
        <p className="mt-1.5 font-sans text-sm text-muted">
          One-time payment. Instant download.
        </p>

        {priceUsd ? (
        <div
          role="radiogroup"
          aria-label="Payment region"
          className="mt-5 inline-flex rounded-full border border-line p-1"
        >
          {(
            [
              { id: "razorpay", label: "India (₹)" },
              { id: "stripe", label: "International ($)" },
            ] as const
          ).map((option) => (
            <button
              key={option.id}
              type="button"
              role="radio"
              aria-checked={gateway === option.id}
              onClick={() => setGateway(option.id)}
              className={`rounded-full px-4 py-1.5 font-sans text-xs font-semibold transition-colors ${
                gateway === option.id
                  ? "bg-accent text-accent-ink"
                  : "text-muted hover:text-ink"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
        ) : null}

        <button
          type="button"
          onClick={checkout}
          disabled={loading}
          className="mx-cta mt-6 w-full justify-between disabled:opacity-60"
        >
          {loading ? "Starting checkout" : "Get the toolkit"}
          <span className="mx-cta__arrow">
            {loading ? (
              <Loader2 className="h-4 w-4 animate-spin" strokeWidth={2.5} aria-hidden="true" />
            ) : (
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
            )}
          </span>
        </button>

        {error && (
          <p role="alert" className="mt-3 font-sans text-sm text-error">
            {error}
          </p>
        )}

        <p className="mt-4 font-sans text-xs leading-relaxed text-muted">
          Secure payment via {gateway === "razorpay" ? "Razorpay" : "Stripe"}. Digital
          download: no refunds once accessed.
        </p>
      </div>
    </>
  );
}
