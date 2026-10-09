"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";

export type PathStep = { buyer: string; we: string };

/**
 * The buyer's path, interactive: the stages advance on their own (paused on hover, focus or
 * once the visitor picks a stage), the line fills up to the active stage, and the panel shows
 * what the buyer does and what we do at that point. Example searches open real Google results.
 * Reduced motion: no auto-advance. Horizontal on desktop, stacked on phones and tablets.
 */
export function PathExplorer({
  who,
  sector,
  outcome,
  steps,
  searches,
}: {
  who: string;
  sector: string;
  outcome: string;
  steps: PathStep[];
  searches: string[];
}) {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);
  const [paused, setPaused] = useState(false);
  const rootRef = useRef<HTMLElement>(null);
  const inView = useRef(false);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setAuto(false);
    const io = new IntersectionObserver(([e]) => (inView.current = e.isIntersecting), { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!auto || paused) return;
    const t = setInterval(() => {
      if (inView.current) setActive((a) => (a + 1) % steps.length);
    }, 3200);
    return () => clearInterval(t);
  }, [auto, paused, steps.length]);

  const pick = (i: number) => {
    setAuto(false);
    setActive((i + steps.length) % steps.length);
  };
  const fill = steps.length > 1 ? (active / (steps.length - 1)) * 100 : 100;
  const step = steps[active];

  return (
    <section
      ref={rootRef}
      aria-label={`How a ${who} becomes a customer`}
      className="mx-glow-card p-6 sm:p-9"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="flex flex-wrap items-end justify-between gap-5">
        <div>
          <p className="text-sm font-semibold text-muted">Your {who}&apos;s path</p>
          <h2 className="mt-1 font-display text-2xl font-bold leading-snug text-ink sm:text-3xl">How {sector} customers decide</h2>
        </div>
        <p className="inline-flex rounded-full border border-accent/60 px-4 py-2 text-sm font-semibold text-ink shadow-[0_0_18px_-6px_rgb(var(--accent)/0.6)]">
          We measure: {outcome.toLowerCase()}
        </p>
      </div>

      {/* Stages: horizontal with a filling line on large screens, a vertical list below. */}
      <div className="relative mt-9">
        <span aria-hidden="true" className="absolute left-3 right-3 top-3 hidden h-px bg-accent/25 lg:block" />
        <span
          aria-hidden="true"
          className="absolute left-3 top-3 hidden h-px bg-accent transition-[width] duration-500 ease-out lg:block"
          style={{ width: `calc((100% - 1.5rem) * ${fill / 100})` }}
        />
        <span aria-hidden="true" className="absolute bottom-3 left-3 top-3 w-px bg-accent/25 lg:hidden" />
        <ol className="relative grid gap-2 lg:grid-cols-5 lg:gap-5">
          {steps.map((s, i) => {
            const on = i === active;
            const done = i < active;
            return (
              <li key={s.buyer}>
                <button
                  type="button"
                  onClick={() => pick(i)}
                  aria-pressed={on}
                  aria-controls="path-detail"
                  className="group flex w-full items-start gap-4 rounded-2xl p-1 text-left outline-none transition-colors focus-visible:ring-2 focus-visible:ring-accent lg:block lg:p-0"
                >
                  <span
                    aria-hidden="true"
                    className={`relative z-10 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-[1.5px] text-[0.6875rem] font-bold transition-all duration-300 ${
                      on
                        ? "scale-125 border-accent bg-accent text-accent-ink shadow-[0_0_14px_rgb(var(--accent)/0.7)]"
                        : done
                          ? "border-accent bg-accent/20 text-accent"
                          : "border-accent/60 bg-card text-accent group-hover:border-accent"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <span
                    className={`block text-[0.9375rem] leading-snug transition-colors lg:mt-4 ${
                      on ? "font-semibold text-ink" : "text-muted group-hover:text-ink-2"
                    }`}
                  >
                    {s.buyer}
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
      </div>

      {/* Detail for the active stage. */}
      <div id="path-detail" aria-live="polite" className="mt-8 grid gap-5 rounded-2xl border border-line bg-bg/60 p-5 sm:p-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)_auto] md:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
            Stage {active + 1} of {steps.length} · the {who}
          </p>
          <p className="mt-2 font-display text-lg font-bold leading-snug text-ink">{step.buyer}</p>
        </div>
        <div className="md:border-l md:border-line md:pl-6">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">What we do here</p>
          <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-2">{step.we}</p>
        </div>
        <div className="flex gap-2 md:flex-col">
          <button type="button" onClick={() => pick(active - 1)} aria-label="Previous stage" className="mx-row-go h-10 w-10">
            <ChevronLeft className="h-4 w-4" strokeWidth={2.2} aria-hidden="true" />
          </button>
          <button type="button" onClick={() => pick(active + 1)} aria-label="Next stage" className="mx-row-go h-10 w-10">
            <ChevronRight className="h-4 w-4" strokeWidth={2.2} aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-3 border-t border-line pt-6">
        <p className="text-sm font-semibold text-muted">Searches they make (examples)</p>
        <ul className="flex flex-wrap gap-2">
          {searches.map((q) => (
            <li key={q}>
              <a
                href={`https://www.google.com/search?q=${encodeURIComponent(q)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-sm text-ink-2 transition-colors hover:border-accent hover:text-ink"
              >
                <Search className="h-3.5 w-3.5 text-accent" strokeWidth={2.2} aria-hidden="true" />
                {q}
                <span className="sr-only"> (opens Google in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
