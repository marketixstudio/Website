"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import { PostCard, type PostCardData } from "@/components/blog/post-card";

type CategoryLink = { slug: string; name: string; count: number };

const PAGE = 12;

/**
 * The post grid with its category sidebar (sticky on desktop; a scrollable chip row on
 * phones), a search over every post on the page, and "Load more" in steps of 12.
 */
export function BlogBrowser({
  posts,
  categories,
  activeSlug,
}: {
  posts: PostCardData[];
  categories: CategoryLink[];
  /** The category page this grid sits on, if any. */
  activeSlug?: string;
}) {
  const [query, setQuery] = useState("");
  const [shown, setShown] = useState(PAGE);
  const q = query.trim().toLowerCase();
  const matches = q ? posts.filter((p) => `${p.title} ${p.excerpt} ${p.category}`.toLowerCase().includes(q)) : posts;
  const visible = matches.slice(0, shown);

  const chip = (active: boolean) =>
    `shrink-0 whitespace-nowrap rounded-full border px-3.5 py-2 text-sm font-medium transition-colors ${
      active ? "border-accent bg-accent/15 text-ink" : "border-line text-ink-2 hover:border-accent/60 hover:text-ink"
    }`;

  const searchBox = (
    <label className="relative block">
      <span className="sr-only">Search posts</span>
      <Search className="pointer-events-none absolute left-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-muted" strokeWidth={1.9} aria-hidden="true" />
      <input
        type="search"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setShown(PAGE);
        }}
        placeholder="Search posts"
        className="h-11 w-full rounded-full border border-line bg-[var(--color-paper)] pl-11 pr-4 text-[0.9375rem] text-ink placeholder:text-muted/80 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40"
      />
    </label>
  );

  return (
    <div className="grid grid-cols-[minmax(0,1fr)] gap-10 lg:grid-cols-[minmax(0,1fr)_17rem]">
      <div>
        {/* Phones and tablets: categories as a chip row, search under it. */}
        <div className="lg:hidden">
          <nav aria-label="Blog categories" className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
            <Link href="/blog" className={chip(!activeSlug)} aria-current={!activeSlug ? "page" : undefined}>
              All
            </Link>
            {categories.map((c) => (
              <Link key={c.slug} href={`/blog/category/${c.slug}`} className={chip(c.slug === activeSlug)} aria-current={c.slug === activeSlug ? "page" : undefined}>
                {c.name}
              </Link>
            ))}
          </nav>
          <div className="mt-4">{searchBox}</div>
        </div>

        <p aria-live="polite" className={q ? "mt-6 text-sm text-muted lg:mt-0" : "sr-only"}>
          {q ? (matches.length ? `${matches.length} ${matches.length === 1 ? "post matches" : "posts match"} "${query.trim()}"` : `Nothing matches "${query.trim()}". Try another word.`) : ""}
        </p>

        <div className="mt-6 grid grid-cols-[minmax(0,1fr)] gap-5 sm:grid-cols-2 lg:mt-0 xl:grid-cols-3">
          {visible.map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>

        {matches.length > shown && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setShown((n) => n + PAGE)}
              className="rounded-full border border-line px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Load more posts
            </button>
          </div>
        )}
      </div>

      {/* Desktop sidebar. */}
      <aside className="hidden lg:block">
        <div className="sticky top-28 space-y-6">
          {searchBox}
          <nav aria-label="Blog categories" className="rounded-[24px] border border-line bg-[var(--color-paper-3)] p-5">
            <h2 className="font-display text-base font-bold text-ink">Categories</h2>
            <ul className="mt-3 space-y-0.5">
              <li>
                <Link
                  href="/blog"
                  aria-current={!activeSlug ? "page" : undefined}
                  className={`flex items-center justify-between rounded-xl px-3 py-2 text-[0.9375rem] transition-colors ${!activeSlug ? "bg-accent/15 text-ink" : "text-ink-2 hover:text-ink"}`}
                >
                  All posts
                </Link>
              </li>
              {categories.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/blog/category/${c.slug}`}
                    aria-current={c.slug === activeSlug ? "page" : undefined}
                    className={`flex items-center justify-between gap-3 rounded-xl px-3 py-2 text-[0.9375rem] transition-colors ${
                      c.slug === activeSlug ? "bg-accent/15 text-ink" : "text-ink-2 hover:text-ink"
                    }`}
                  >
                    {c.name}
                    <span className="text-sm text-muted">{c.count}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="rounded-[24px] border border-line bg-[var(--color-paper-3)] p-5">
            <p className="font-display text-base font-bold text-ink">Want this done for your business?</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">We review your ads, website and Google profile, then tell you plainly what to fix first.</p>
            <Link href="/growth-audit" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-ink">
              Get a free growth audit
              <ArrowRight className="h-4 w-4" strokeWidth={2.25} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </aside>
    </div>
  );
}
