import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import type { CtaLink } from "@/components/sections/page-hero";
import { business } from "@/lib/site-config";

/**
 * Full-bleed closing band. Split layout with the headline left and the actions
 * right - no floating glass panel, no radial glow.
 */
export function CtaBand({
  title = "Find out exactly where your marketing budget is leaking.",
  subtitle = "The free audit covers your ad spend, funnel, tracking and lead handling, and names the specific gaps, whether or not you work with us afterwards.",
  primaryCta = { label: "Get a Free Growth Audit", href: "/growth-audit" },
  secondaryCta = { label: "Talk to us", href: "/contact" },
}: {
  title?: string;
  subtitle?: string;
  primaryCta?: CtaLink;
  secondaryCta?: CtaLink;
}) {
  return (
    <section className="border-t border-line bg-surface">
      <div className="container-edge py-section">
        <Reveal>
          <div className="grid gap-x-10 gap-y-8 lg:grid-cols-[1.25fr_1fr] lg:items-end">
            <div>
              <p className="flex items-center gap-3 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-accent-strong">
                <span aria-hidden="true" className="h-px w-8 bg-accent" />
                Next step
              </p>
              <h2 className="mt-5 max-w-2xl font-display text-h2 leading-tight text-ink">
                {title}
              </h2>
            </div>
            <div className="lg:pb-1">
              <p className="max-w-xl font-sans text-base leading-relaxed text-muted">{subtitle}</p>
              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
                <CtaAction cta={primaryCta} primary />
                <CtaAction cta={secondaryCta} />
              </div>
              <p className="mt-6 border-t border-line pt-5 font-sans text-sm text-muted">
                Or call{" "}
                <a
                  href={`tel:${business.phone}`}
                  className="font-semibold text-ink transition-colors hover:text-accent-strong"
                >
                  {business.phoneDisplay}
                </a>
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CtaAction({ cta, primary = false }: { cta: CtaLink; primary?: boolean }) {
  const className = primary ? "btn-primary" : "btn-ghost";
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
