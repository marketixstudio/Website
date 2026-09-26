import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Breadcrumb, type Crumb } from "@/components/ui/breadcrumb";

export type CtaLink = { label: string; href: string; external?: boolean };

/**
 * Editorial masthead. Left-aligned, rule-separated, asymmetric two-column.
 * Deliberately not a centred hero - the headline and the supporting text sit on
 * different columns so the page opens like a publication rather than a pitch.
 */
export function PageHero({
  breadcrumb,
  eyebrow,
  title,
  highlight,
  subtitle,
  primaryCta = { label: "Get a Free Growth Audit", href: "/growth-audit" },
  secondaryCta,
  aside,
}: {
  breadcrumb: Crumb[];
  eyebrow?: string;
  title: string;
  highlight?: string;
  subtitle: string;
  primaryCta?: CtaLink;
  secondaryCta?: CtaLink;
  aside?: React.ReactNode;
}) {
  return (
    <section className="border-b border-line">
      <div className="container-edge pb-14 pt-10">
        <Breadcrumb items={breadcrumb} />

        <div className="mt-10 grid gap-x-10 gap-y-8 lg:grid-cols-[1.35fr_1fr] lg:items-end">
          <div>
            {eyebrow && (
              <p className="flex items-center gap-3 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-accent-strong">
                <span aria-hidden="true" className="h-px w-8 bg-accent" />
                {eyebrow}
              </p>
            )}
            <h1 className="mt-5 max-w-3xl font-display text-[clamp(2.25rem,4.4vw,3.6rem)] font-extrabold leading-[1.04] tracking-[-0.035em] text-ink">
              {title}
              {highlight && <span className="text-gradient-brand"> {highlight}</span>}
            </h1>
          </div>

          <div className="lg:pb-2">
            <p className="max-w-xl font-sans text-base leading-[1.7] text-muted">{subtitle}</p>
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
              <ActionLink cta={primaryCta} className="btn-primary" />
              {secondaryCta && <ActionLink cta={secondaryCta} className="btn-ghost" />}
            </div>
          </div>
        </div>

        {aside && <div className="mt-14">{aside}</div>}
      </div>
    </section>
  );
}

function ActionLink({ cta, className }: { cta: CtaLink; className: string }) {
  const content = (
    <>
      {cta.label}
      {cta.external ? (
        <ExternalLink className="h-4 w-4" strokeWidth={2} />
      ) : (
        <ArrowRight className="h-4 w-4" strokeWidth={2} />
      )}
    </>
  );

  if (cta.external) {
    return (
      <a href={cta.href} target="_blank" rel="noreferrer" className={className}>
        {content}
      </a>
    );
  }

  return (
    <Link href={cta.href} className={className}>
      {content}
    </Link>
  );
}
