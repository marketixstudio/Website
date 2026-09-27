"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import Image from "next/image";
import { ArrowRight, X } from "lucide-react";
import { business } from "@/lib/site-config";

/** Official WhatsApp glyph (Simple Icons, CC0). */
const WHATSAPP_PATH =
  "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z";

const Glyph = ({ className }: { className: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
    <path d={WHATSAPP_PATH} />
  </svg>
);

/** Quick topics: each opens WhatsApp with a message written for that topic. */
const topics = [
  { label: "Free growth audit", text: "Hi Marketix Studio, I'd like a free growth audit for my business." },
  { label: "Google Ads", text: "Hi Marketix Studio, I'd like to talk about Google Ads for my business." },
  { label: "Meta ads", text: "Hi Marketix Studio, I'd like to talk about Meta (Facebook and Instagram) ads for my business." },
  { label: "SEO and Google Maps", text: "Hi Marketix Studio, I'd like to talk about SEO and ranking on Google Maps." },
  { label: "Website", text: "Hi Marketix Studio, I'd like to talk about a new website." },
];

const DEFAULT_TEXT = "Hi Marketix Studio, I'd like to talk about marketing for my business.";
const waLink = (text: string) => `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(text)}`;

/**
 * Floating WhatsApp widget, bottom left on every site page. The button floats
 * gently (off under reduced motion); clicking it opens a small chat card with
 * quick topics and a message box, each opening WhatsApp with a prefilled message.
 * Sits below the nav (z-50) so the mobile drawer covers it. Closes on Escape
 * or a click outside, and returns focus to the button.
 */
export function WhatsAppFloat() {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const panelId = useId();
  const { opens, closes } = business.openingHours;

  useEffect(() => {
    if (!open) return;
    panelRef.current?.querySelector<HTMLElement>("a, button, textarea")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const onPointer = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    window.open(waLink(draft.trim() || DEFAULT_TEXT), "_blank", "noopener,noreferrer");
    setDraft("");
    setOpen(false);
  }

  return (
    <div
      ref={rootRef}
      className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] left-4 z-40 print:hidden sm:bottom-6 sm:left-6"
    >
      {/* Chat card */}
      <div
        ref={panelRef}
        id={panelId}
        role="dialog"
        aria-label="Chat with Marketix Studio on WhatsApp"
        hidden={!open}
        className="absolute bottom-[4.5rem] left-0 w-[min(22rem,calc(100vw-2rem))] origin-bottom-left overflow-hidden rounded-[20px] border border-line bg-card shadow-[0_24px_60px_-16px_rgb(10_10_12/0.16)] dark:shadow-[0_24px_60px_-16px_rgb(0_0_0/0.85)] motion-safe:animate-[mx-pop_220ms_cubic-bezier(0.16,1,0.3,1)]"
      >
        <div className="flex items-center gap-3 bg-[#075E54] px-4 py-3.5 text-white">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white">
            <Image src="/brand/marketix-mark.png" alt="" width={28} height={28} className="h-7 w-7 object-contain" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-[0.9375rem] font-bold">Marketix Studio</p>
            <p className="truncate text-xs text-white/80">
              Mon to Sat, {opens} to {closes} IST
            </p>
          </div>
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              buttonRef.current?.focus();
            }}
            aria-label="Close chat"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-white/85 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
          >
            <X className="h-4 w-4" strokeWidth={2.25} aria-hidden="true" />
          </button>
        </div>

        <div className="space-y-4 p-4">
          <p className="max-w-[88%] rounded-[16px] rounded-tl-[4px] border border-line bg-bg/60 px-3.5 py-2.5 text-sm leading-relaxed text-ink-2">
            Hi there. What would you like to talk about? Pick a topic or write your own message.
          </p>

          <ul className="flex flex-wrap gap-2" aria-label="Quick topics">
            {topics.map((t) => (
              <li key={t.label}>
                <a
                  href={waLink(t.text)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="inline-block whitespace-nowrap rounded-full border border-line px-3 py-1.5 text-sm text-ink-2 transition-colors hover:border-[#25D366] hover:text-ink focus-visible:border-[#25D366] focus-visible:outline-none"
                >
                  {t.label}
                </a>
              </li>
            ))}
          </ul>

          <form onSubmit={onSubmit} className="flex items-end gap-2 border-t border-line pt-4">
            <label htmlFor={`${panelId}-msg`} className="sr-only">
              Your message
            </label>
            <textarea
              id={`${panelId}-msg`}
              rows={2}
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  e.currentTarget.form?.requestSubmit();
                }
              }}
              placeholder="Type a message"
              className="min-h-[2.75rem] flex-1 resize-none rounded-[14px] border border-line bg-bg/60 px-3.5 py-2.5 text-sm text-ink placeholder:text-muted focus:border-[#25D366] focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Send on WhatsApp"
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] motion-reduce:hover:scale-100"
            >
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
            </button>
          </form>
          <p className="text-xs text-muted">Opens WhatsApp. We reply during office hours.</p>
        </div>
      </div>

      {/* Floating button */}
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Close WhatsApp chat" : "Chat with us on WhatsApp"}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-8px_rgb(10_10_12/0.16)] dark:shadow-[0_10px_30px_-8px_rgb(0_0_0/0.7)] ring-1 ring-black/10 transition-shadow duration-200 hover:shadow-[0_0_0_6px_rgb(37_211_102/0.18),0_12px_32px_-8px_rgb(37_211_102/0.55)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25D366] motion-safe:animate-[mx-float_3.2s_ease-in-out_infinite] motion-safe:hover:[animation-play-state:paused]"
      >
        {open ? <X className="h-6 w-6" strokeWidth={2.25} aria-hidden="true" /> : <Glyph className="h-7 w-7" />}
        {!open && (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-full ml-3 hidden whitespace-nowrap rounded-full border border-line bg-card px-3.5 py-1.5 text-sm font-semibold text-ink opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 sm:block"
          >
            Chat on WhatsApp
          </span>
        )}
      </button>
    </div>
  );
}
