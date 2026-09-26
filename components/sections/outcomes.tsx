import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export type Outcome = { stat: string; label: string; body?: string };

/**
 * Full-width metric band. The numbers carry the section - oversized display
 * numerals on rules, no cards, no centring.
 */
export function Outcomes({
  eyebrow = "Outcomes",
  title = "What good looks like",
  items,
}: {
  eyebrow?: string;
  title?: string;
  items: Outcome[];
}) {
  return (
    <section className="border-y border-line py-section">
      <div className="container-edge">
        <SectionHeading eyebrow={eyebrow} title={title} className="mb-12" />
        <dl className="grid gap-x-12 gap-y-10 sm:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.08}>
              <div className="border-t border-line pt-6">
                <dd className="font-display text-metric leading-none text-gradient-brand">
                  {item.stat}
                </dd>
                <dt className="mt-4 font-sans text-sm font-bold text-ink">{item.label}</dt>
                {item.body && (
                  <p className="mt-2 font-sans text-sm leading-relaxed text-muted">{item.body}</p>
                )}
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}

/** Tool and platform list - a rule-separated inline index, not pills. */
export function Chips({
  eyebrow = "Tools & integrations",
  title = "Fits your existing stack",
  items,
}: {
  eyebrow?: string;
  title?: string;
  items: string[];
}) {
  return (
    <section className="py-section">
      <div className="container-edge">
        <div className="grid gap-x-10 gap-y-6 lg:grid-cols-[auto_1fr] lg:items-start">
          <div className="lg:w-40">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-accent-strong">
              {eyebrow}
            </p>
            <h2 className="mt-3 font-display text-lg font-bold text-ink">{title}</h2>
          </div>
          <ul className="flex flex-wrap gap-x-7 gap-y-3 border-t border-line pt-6">
            {items.map((item) => (
              <li key={item} className="font-sans text-[15px] font-medium text-ink-2">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
