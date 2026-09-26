"use client";

import { useMemo, useState } from "react";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { Cta } from "@/components/v2/primitives";

export type ScopeOption = { slug: string; label: string; group: string; covers: string[] };

/**
 * Pricing centrepiece. No invented prices: the visitor picks what they need,
 * sees what each part typically covers, and sends that exact scope to us.
 */
export function ScopeBuilder({ options, whatsapp }: { options: ScopeOption[]; whatsapp: string }) {
  const [picked, setPicked] = useState<string[]>([]);
  const groups = useMemo(() => Array.from(new Set(options.map((o) => o.group))), [options]);
  const chosen = options.filter((o) => picked.includes(o.slug));

  const toggle = (slug: string) =>
    setPicked((cur) => (cur.includes(slug) ? cur.filter((s) => s !== slug) : [...cur, slug]));

  const message = encodeURIComponent(
    chosen.length
      ? `Hi Marketix Studio, I'd like a quote for: ${chosen.map((c) => c.label).join(", ")}.`
      : "Hi Marketix Studio, I'd like a quote.",
  );

  return (
    <div className="grid grid-cols-[minmax(0,1fr)] gap-5 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
      <div className="mx-card p-6 sm:p-8">
        <h3 className="font-display text-xl font-bold text-ink">1. Pick what you need</h3>
        <div className="mt-6 space-y-6">
          {groups.map((group) => (
            <fieldset key={group}>
              <legend className="text-sm font-semibold text-muted">{group}</legend>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {options
                  .filter((o) => o.group === group)
                  .map((o) => {
                    const on = picked.includes(o.slug);
                    return (
                      <button
                        key={o.slug}
                        type="button"
                        aria-pressed={on}
                        onClick={() => toggle(o.slug)}
                        className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border px-3.5 py-2 text-sm font-medium transition-colors ${
                          on ? "border-accent bg-accent/15 text-ink" : "border-line text-ink-2 hover:border-accent/60 hover:text-ink"
                        }`}
                      >
                        {on && <Check className="h-3.5 w-3.5 text-accent" strokeWidth={3} aria-hidden="true" />}
                        {o.label}
                      </button>
                    );
                  })}
              </div>
            </fieldset>
          ))}
        </div>
      </div>

      <div className="mx-card flex flex-col p-6 sm:p-8 lg:sticky lg:top-28" aria-live="polite">
        <h3 className="font-display text-xl font-bold text-ink">2. Your scope</h3>
        {chosen.length === 0 ? (
          <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted">
            Pick one or more services and a summary of what they cover appears here, ready to send.
          </p>
        ) : (
          <ul className="mt-5 space-y-4">
            {chosen.map((c) => (
              <li key={c.slug}>
                <p className="font-semibold text-ink">{c.label}</p>
                <ul className="mt-1.5 space-y-1">
                  {c.covers.map((item) => (
                    <li key={item} className="flex gap-2 text-sm leading-snug text-muted">
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" strokeWidth={2.5} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        )}
        <div className="mt-8 flex flex-col items-start gap-4 border-t border-line pt-6">
          <a
            href={`https://wa.me/${whatsapp}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold text-ink transition-colors hover:text-accent"
          >
            <MessageCircle className="h-5 w-5 text-accent" strokeWidth={1.9} aria-hidden="true" />
            {chosen.length ? "Send this scope on WhatsApp" : "Ask for a quote on WhatsApp"}
            <ArrowRight className="h-4 w-4 text-accent" strokeWidth={2} aria-hidden="true" />
          </a>
          <Cta href="/growth-audit">Or get a free growth audit</Cta>
        </div>
      </div>
    </div>
  );
}
