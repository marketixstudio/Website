"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { FaqList } from "@/components/v2/primitives";
import type { QA } from "@/lib/content-types";

/**
 * FAQ page centrepiece: live search plus topic filters. Every answer stays in
 * the HTML (filtered items are removed only after the visitor types or picks a topic).
 */
export function FaqExplorer({ groups }: { groups: { title: string; items: QA[] }[] }) {
  const [query, setQuery] = useState("");
  const [topic, setTopic] = useState<string>("All");
  const q = query.trim().toLowerCase();

  const visible = useMemo(
    () =>
      groups
        .filter((g) => topic === "All" || g.title === topic)
        .map((g) => ({
          ...g,
          items: q ? g.items.filter((i) => `${i.q} ${i.a}`.toLowerCase().includes(q)) : g.items,
        }))
        .filter((g) => g.items.length > 0),
    [groups, topic, q],
  );
  const count = visible.reduce((n, g) => n + g.items.length, 0);

  return (
    <div>
      <div className="mx-card flex flex-col gap-4 p-4 sm:p-5 lg:flex-row lg:items-center">
        <label className="relative block flex-1">
          <span className="sr-only">Search questions</span>
          <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" strokeWidth={1.9} aria-hidden="true" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search, e.g. cost, reviews, Dubai"
            className="h-12 w-full rounded-full border border-line bg-bg/60 pl-12 pr-4 text-[0.9375rem] text-ink placeholder:text-muted/70 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40"
          />
        </label>
        <div role="group" aria-label="Filter by topic" className="flex flex-wrap gap-2">
          {["All", ...groups.map((g) => g.title)].map((t) => (
            <button
              key={t}
              type="button"
              aria-pressed={topic === t}
              onClick={() => setTopic(t)}
              className={`whitespace-nowrap rounded-full border px-3.5 py-2 text-sm font-medium transition-colors ${
                topic === t ? "border-accent bg-accent/15 text-ink" : "border-line text-ink-2 hover:border-accent/60 hover:text-ink"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <p aria-live="polite" className="mt-4 text-sm text-muted">
        {count === 0 ? "No questions match. Try another word, or ask us directly." : `${count} question${count === 1 ? "" : "s"}`}
      </p>

      <div className="mt-8 space-y-14">
        {visible.map((g) => (
          <section key={g.title} className="grid grid-cols-[minmax(0,1fr)] gap-6 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1.4fr)]">
            <h2 className="font-display text-2xl font-bold text-ink">{g.title}</h2>
            <FaqList items={g.items} />
          </section>
        ))}
      </div>
    </div>
  );
}
