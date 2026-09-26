import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export type Feature = { icon?: LucideIcon; title: string; body: string };

/**
 * Ledger rows rather than a card grid: hairline rules, inline icons, numbered.
 * `columns` is kept for API compatibility and now controls rule density only.
 */
export function FeatureCards({
  eyebrow,
  title,
  description,
  items,
  columns = 3,
  surface = false,
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  items: Feature[];
  columns?: 2 | 3 | 4;
  surface?: boolean;
}) {
  const cols = columns === 2 ? "md:grid-cols-2" : "md:grid-cols-2";

  return (
    <section className={`py-section ${surface ? "border-y border-line bg-surface" : ""}`}>
      <div className="container-edge">
        {(title || eyebrow) && (
          <SectionHeading eyebrow={eyebrow} title={title} description={description} className="mb-12" />
        )}
        <div className={`grid grid-cols-1 gap-x-14 ${cols}`}>
          {items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 2) * 0.06}>
              <article className="flex gap-5 border-t border-line py-7">
                <span
                  aria-hidden="true"
                  className="shrink-0 font-display text-xs font-bold tabular-nums text-accent-strong"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <h3 className="flex items-center gap-2.5 font-display text-lg font-bold text-ink">
                    {item.icon && (
                      <item.icon
                        className="h-[18px] w-[18px] shrink-0 text-accent-strong"
                        strokeWidth={1.75}
                        aria-hidden="true"
                      />
                    )}
                    {item.title}
                  </h3>
                  <p className="mt-2.5 font-sans text-[15px] leading-relaxed text-muted">
                    {item.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
