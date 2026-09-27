"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";

type Card = { slug: string; title: string; excerpt: string; category: string; date: string; readTime: string };

const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });

/**
 * Blog index centrepiece (structure from the Vistrow blog hub, restyled): search and
 * topic filters, the newest post as a featured card, the rest in a grid.
 */
export function BlogIndex({ posts }: { posts: Card[] }) {
  const [query, setQuery] = useState("");
  const [topic, setTopic] = useState("All");
  const topics = useMemo(() => ["All", ...Array.from(new Set(posts.map((p) => p.category)))], [posts]);
  const q = query.trim().toLowerCase();
  const visible = posts.filter(
    (p) => (topic === "All" || p.category === topic) && (!q || `${p.title} ${p.excerpt} ${p.category}`.toLowerCase().includes(q)),
  );
  const [featured, ...rest] = visible;
  const filtering = topic !== "All" || q.length > 0;

  return (
    <div>
      <div className="mx-card flex flex-col gap-4 p-4 sm:p-5 lg:flex-row lg:items-center">
        <label className="relative block flex-1">
          <span className="sr-only">Search articles</span>
          <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" strokeWidth={1.9} aria-hidden="true" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles, e.g. Google Maps, ROAS"
            className="h-12 w-full rounded-full border border-line bg-bg/60 pl-12 pr-4 text-[0.9375rem] text-ink placeholder:text-muted/70 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40"
          />
        </label>
        <div role="group" aria-label="Filter by topic" className="flex flex-wrap gap-2">
          {topics.map((t) => (
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
        {visible.length === 0 ? "No articles match. Try another word." : `${visible.length} article${visible.length === 1 ? "" : "s"}`}
      </p>

      {featured && !filtering && (
        <article className="mx-card group relative mt-8 grid grid-cols-[minmax(0,1fr)] gap-8 p-8 transition-colors hover:border-accent/60 sm:p-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)] lg:items-end">
          <div>
            <p className="text-sm font-semibold text-muted">
              Latest · {featured.category}
            </p>
            <h2 className="mt-4 font-display text-[clamp(1.75rem,3vw,2.6rem)] font-bold leading-[1.18] text-ink">
              <Link href={`/blog/${featured.slug}`} className="after:absolute after:inset-0 after:rounded-[24px] after:content-['']">
                {featured.title}
              </Link>
            </h2>
            <p className="mt-4 max-w-[60ch] text-[1.0625rem] leading-relaxed text-muted">{featured.excerpt}</p>
          </div>
          <p className="flex items-center justify-between gap-4 border-t border-line pt-4 text-sm text-muted lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <span>
              {formatDate(featured.date)} · {featured.readTime}
            </span>
            <span className="mx-row-go" aria-hidden="true">
              <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
            </span>
          </p>
        </article>
      )}

      <ul className="mt-5 grid grid-cols-[minmax(0,1fr)] gap-4 md:grid-cols-2 lg:grid-cols-3">
        {(filtering ? visible : rest).map((p) => (
          <li key={p.slug} className="mx-card group relative flex flex-col p-6 transition-colors hover:border-accent/60 focus-within:border-accent/60">
            <p className="text-sm font-semibold text-muted">{p.category}</p>
            <h2 className="mt-3 font-display text-xl font-bold leading-snug text-ink">
              <Link href={`/blog/${p.slug}`} className="after:absolute after:inset-0 after:rounded-[24px] after:content-['']">
                {p.title}
              </Link>
            </h2>
            <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-muted">{p.excerpt}</p>
            <p className="mt-5 flex items-center justify-between border-t border-line pt-4 text-sm text-muted">
              <span>
                {formatDate(p.date)} · {p.readTime}
              </span>
              <span className="mx-row-go" aria-hidden="true">
                <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
              </span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
