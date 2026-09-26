import type { ReactNode } from "react";
import { Breadcrumbs, type Crumb } from "@/components/v2/breadcrumbs";
import { Cta, TextLink } from "@/components/v2/primitives";

/**
 * Hero for index and company pages (services, industries, about, contact...).
 * Service, industry and location detail pages use ServiceHero instead.
 * Split: the promise left, the lede and actions right, on the static violet pool.
 */
export function IndexHero({
  label,
  title,
  accent,
  lede,
  cta = { label: "Get a free growth audit", href: "/growth-audit" },
  secondary,
  crumbs,
  visual,
  children,
}: {
  label: string;
  title: string;
  /** Accent phrase appended to the title. Short phrases stay on one line from `sm` up. */
  accent?: string;
  lede: string;
  cta?: { label: string; href: string } | null;
  secondary?: { label: string; href: string };
  /** Breadcrumb trail shown above the title (replaces the label). */
  crumbs?: Crumb[];
  /** Optional decorative visual shown above the lede (e.g. the electric monogram). */
  visual?: ReactNode;
  /** Optional content under the lede, e.g. contact details. */
  children?: ReactNode;
}) {
  return (
    <section className="mx-pool pb-16 pt-36 sm:pt-44">
      <div className="container-edge">
        {crumbs && crumbs.length > 1 ? <Breadcrumbs items={crumbs} /> : <p className="text-base font-semibold text-ink-2 sm:text-lg">{label}</p>}
        <div className="mt-5 grid grid-cols-[minmax(0,1fr)] gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-end">
          <h1 className="mx-display max-w-[16ch] font-display text-display text-ink">
            {title}
            {accent && (
              <>
                {" "}
                <span className={`text-ink-hi ${accent.length <= 14 ? "sm:whitespace-nowrap" : ""}`}>{accent}</span>
              </>
            )}
          </h1>
          <div>
            {visual && <div className="mb-6">{visual}</div>}
            <p className="max-w-[46ch] text-[1.0625rem] leading-relaxed text-muted sm:text-lg">{lede}</p>
            {children}
            {(cta || secondary) && (
              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-5">
                {cta && <Cta href={cta.href}>{cta.label}</Cta>}
                {secondary && <TextLink href={secondary.href}>{secondary.label}</TextLink>}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
