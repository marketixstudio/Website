"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export type ExplorerItem = {
  slug: string;
  label: string;
  href: string;
  icon?: ReactNode;
  goal: string;
  problem: { title: string; body: string };
  steps: string[];
  services: { label: string; href: string }[];
};

/**
 * Industries index centrepiece: pick a sector, see how its campaigns run.
 * Every panel is in the HTML (inactive ones use `hidden`), so crawlers and
 * no-JS visitors still get each sector's summary and links.
 */
export function IndustryExplorer({ items }: { items: ExplorerItem[] }) {
  const [active, setActive] = useState(items[0]?.slug);

  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)]">
      <div role="tablist" aria-label="Industries" aria-orientation="vertical" className="grid grid-cols-2 gap-2 lg:grid-cols-1">
        {items.map((item) => {
          const on = item.slug === active;
          return (
            <button
              key={item.slug}
              id={`tab-${item.slug}`}
              role="tab"
              type="button"
              aria-selected={on}
              aria-controls={`panel-${item.slug}`}
              onClick={() => setActive(item.slug)}
              className={`flex min-w-0 items-center gap-3 rounded-2xl border px-4 py-3 text-left transition-colors ${
                on ? "border-accent/70 bg-card-2 text-ink" : "border-line text-ink-2 hover:border-accent/50 hover:text-ink"
              }`}
            >
              <span className="shrink-0">{item.icon}</span>
              <span className="truncate text-sm font-semibold sm:text-[0.9375rem]">{item.label}</span>
            </button>
          );
        })}
      </div>

      {items.map((item) => (
        <div
          key={item.slug}
          id={`panel-${item.slug}`}
          role="tabpanel"
          aria-labelledby={`tab-${item.slug}`}
          hidden={item.slug !== active}
          className="mx-card p-7 sm:p-9"
        >
          <p className="text-sm font-semibold text-muted">What we optimise for</p>
          <h3 className="mt-2 font-display text-2xl font-bold leading-[1.15] text-ink sm:text-3xl">{item.goal}</h3>

          <div className="mt-7 rounded-2xl border border-line bg-bg/50 p-5">
            <p className="text-sm font-semibold text-accent">The usual problem</p>
            <p className="mt-1.5 font-semibold text-ink">{item.problem.title}</p>
            <p className="mt-1 text-sm leading-relaxed text-muted">{item.problem.body}</p>
          </div>

          <p className="mt-7 text-sm font-semibold text-muted">How we run it</p>
          <ol className="mt-3 grid grid-cols-[minmax(0,1fr)] gap-2 sm:grid-cols-2">
            {item.steps.map((step, i) => (
              <li key={step} className="flex items-center gap-3 rounded-xl border border-line px-3.5 py-2.5">
                <span
                  aria-hidden="true"
                  className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-accent/70 text-xs font-bold text-accent"
                >
                  {i + 1}
                </span>
                <span className="min-w-0 text-sm font-medium text-ink-2">{step}</span>
              </li>
            ))}
          </ol>

          <p className="mt-7 text-sm font-semibold text-muted">Services we use</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {item.services.map((s) => (
              <li key={s.href}>
                <Link
                  href={s.href}
                  className="inline-block whitespace-nowrap rounded-full border border-line px-3.5 py-1.5 text-sm text-ink-2 transition-colors hover:border-accent hover:text-ink"
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link href={item.href} className="mx-link mt-8 text-[0.9375rem] font-semibold">
            {`${item.label} marketing`}
            <ArrowRight className="h-4 w-4" strokeWidth={2.25} aria-hidden="true" />
          </Link>
        </div>
      ))}
    </div>
  );
}
