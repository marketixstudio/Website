"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Lock } from "lucide-react";
import type { CaseStudy } from "@/lib/content-types";

/**
 * Editorial "results ledger" - numbered full-width rows rather than a card grid.
 * Reads like an index of work, and deliberately avoids the glass-card language.
 */
export function CaseStudyGrid({
  studies,
  industries,
}: {
  studies: CaseStudy[];
  industries: { slug: string; label: string }[];
}) {
  const [active, setActive] = useState("all");
  const visible = active === "all" ? studies : studies.filter((s) => s.industrySlug === active);

  return (
    <div>
      {industries.length > 1 && (
        <div
          role="group"
          aria-label="Filter by industry"
          className="flex flex-wrap items-center gap-x-6 gap-y-2 border-b border-line pb-5"
        >
          {[{ slug: "all", label: "All work" }, ...industries].map((facet) => (
            <button
              key={facet.slug}
              type="button"
              aria-pressed={active === facet.slug}
              onClick={() => setActive(facet.slug)}
              className={`font-sans text-sm font-semibold transition-colors ${
                active === facet.slug
                  ? "text-accent-strong underline decoration-accent decoration-2 underline-offset-[6px]"
                  : "text-muted hover:text-ink"
              }`}
            >
              {facet.label}
            </button>
          ))}
        </div>
      )}

      <ol className="mt-2">
        {visible.map((study, index) => (
          <li key={study.slug}>
            <Link
              href={`/work/${study.slug}`}
              className="group grid grid-cols-1 items-start gap-6 border-b border-line py-10 transition-colors hover:bg-surface/40 lg:grid-cols-[auto_1fr_auto] lg:gap-10 lg:px-4"
            >
              <span
                aria-hidden="true"
                className="font-display text-sm font-bold tabular-nums text-muted lg:pt-2"
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="min-w-0">
                <div className="flex items-center gap-2.5">
                  {study.logo ? (
                    <Image
                      src={study.logo}
                      alt=""
                      aria-hidden="true"
                      width={24}
                      height={24}
                      className="h-6 w-6 rounded-full object-cover"
                    />
                  ) : (
                    <Lock className="h-3.5 w-3.5 text-muted" strokeWidth={2} aria-hidden="true" />
                  )}
                  <p className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                    {study.client}
                    <span className="mx-2 text-line">/</span>
                    {study.industry}
                    {study.locationLabel && (
                      <>
                        <span className="mx-2 text-line">/</span>
                        {study.locationLabel}
                      </>
                    )}
                  </p>
                </div>

                <h3 className="mt-4 max-w-2xl font-display text-h3 leading-tight text-ink">
                  {study.headline}
                  {study.highlight && (
                    <span className="text-gradient-brand"> {study.highlight}</span>
                  )}
                </h3>
                <p className="mt-3 max-w-xl font-sans text-sm leading-relaxed text-muted">
                  {study.summary}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 font-sans text-sm font-semibold text-accent-strong transition-all group-hover:gap-2.5">
                  Read the case study
                  <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
                </span>
              </div>

              <dl className="flex gap-8 lg:flex-col lg:gap-5 lg:border-l lg:border-line lg:pl-10">
                {study.results.slice(0, 3).map((result) => (
                  <div key={result.label} className="lg:min-w-[140px]">
                    <dt className="sr-only">{result.label}</dt>
                    <dd className="font-display text-3xl font-extrabold tracking-tight text-ink">
                      {result.value}
                    </dd>
                    <p className="mt-1 font-sans text-[10px] font-semibold uppercase leading-tight tracking-[0.12em] text-muted">
                      {result.label}
                    </p>
                  </div>
                ))}
              </dl>
            </Link>
          </li>
        ))}
      </ol>

      {visible.length === 0 && (
        <p className="mt-10 font-sans text-sm text-muted">
          No case studies published in this category yet.
        </p>
      )}
    </div>
  );
}
