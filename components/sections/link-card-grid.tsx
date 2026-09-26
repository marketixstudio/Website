import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import type { OverviewCard } from "@/lib/content-types";

/**
 * Index list: numbered, rule-separated rows that read like a contents page.
 * `columns` is retained for API compatibility but no longer changes the layout.
 */
export function LinkCardGrid({
  eyebrow,
  title,
  cards,
  surface = false,
}: {
  eyebrow?: string;
  title?: string;
  cards: OverviewCard[];
  columns?: 2 | 3;
  surface?: boolean;
}) {
  return (
    <section className={`py-section ${surface ? "border-y border-line bg-surface" : ""}`}>
      <div className="container-edge">
        {title && <SectionHeading eyebrow={eyebrow ?? "Explore"} title={title} className="mb-10" />}
        <ol>
          {cards.map((card, i) => (
            <Reveal key={card.href} delay={Math.min(i, 6) * 0.04}>
              <li>
                <Link
                  href={card.href}
                  className="group grid grid-cols-[auto_1fr_auto] items-baseline gap-5 border-t border-line py-6 transition-colors hover:bg-card/60 sm:gap-8 lg:px-3"
                >
                  <span
                    aria-hidden="true"
                    className="font-display text-xs font-bold tabular-nums text-muted transition-colors group-hover:text-accent-strong"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="min-w-0 sm:grid sm:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] sm:items-baseline sm:gap-8">
                    <h3 className="flex items-center gap-2.5 font-display text-lg font-bold leading-snug text-ink transition-colors group-hover:text-accent-strong">
                      {card.icon && (
                        <card.icon
                          className="h-[18px] w-[18px] shrink-0 text-accent-strong"
                          strokeWidth={1.75}
                          aria-hidden="true"
                        />
                      )}
                      {card.label}
                    </h3>
                    <p className="mt-2 font-sans text-sm leading-relaxed text-muted sm:mt-0">
                      {card.body}
                    </p>
                  </div>

                  <ArrowUpRight
                    className="h-4 w-4 shrink-0 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-strong"
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </Link>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
