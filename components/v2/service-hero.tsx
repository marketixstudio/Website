import type { ReactNode } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { Breadcrumbs, type Crumb } from "@/components/v2/breadcrumbs";
import { Scene3D, type SceneKind } from "@/components/v2/scene-3d";
import { Cta, TextLink } from "@/components/v2/primitives";

export type ServiceHeroContent = {
  /** Short line above the title, e.g. "Google Ads management, Pune". */
  label: string;
  /** Title split so one phrase can carry the accent colour. */
  title: { before: string; accent: string; after?: string };
  lede: string;
  cta: { label: string; href: string };
  secondary?: { label: string; href: string };
  included: string[];
  bestFor: { label: string; href?: string }[];
  /** Card headings; default to the service wording. Industry and location pages reuse this hero. */
  includedLabel?: string;
  bestForLabel?: string;
  /** Breadcrumb trail shown above the title (replaces the label). */
  crumbs?: Crumb[];
  /** The 3D scene on the right of the hero: towers, bars, tiles, layers or pins. */
  scene?: SceneKind;
  /** Replaces the at-a-glance container below the hero (industry pages: the buyer's path). */
  aside?: ReactNode;
};

/**
 * The hero every service, industry and location page uses. Left: the promise and the action.
 * Right: one live 3D scene (components/v2/scene-3d.tsx) and nothing else. The at-a-glance details
 * (what's included, who it suits) sit in their own wide container just below.
 */
export function ServiceHero({ content }: { content: ServiceHeroContent }) {
  const { label, title, lede, cta, secondary, included, bestFor } = content;
  const includedLabel = content.includedLabel ?? "What’s included";
  const bestForLabel = content.bestForLabel ?? "Best for";

  return (
    <>
      <section className="mx-pool pb-20 pt-36 sm:pb-24 sm:pt-44">
        <div className="container-edge grid items-center gap-12 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)] lg:gap-16">
          <div>
            {content.crumbs && content.crumbs.length > 1 ? (
              <Breadcrumbs items={content.crumbs} />
            ) : (
              <p className="text-base font-semibold text-ink-2 sm:text-lg">{label}</p>
            )}
            <h1 className="mx-display mt-5 max-w-[16ch] font-display text-display text-ink">
              {title.before} <span className="whitespace-nowrap text-ink-hi">{title.accent}</span>
              {title.after ? ` ${title.after}` : null}
            </h1>
            <p className="mt-7 max-w-[52ch] text-[1.0625rem] leading-relaxed text-muted sm:text-lg">{lede}</p>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
              <Cta href={cta.href}>{cta.label}</Cta>
              {secondary && <TextLink href={secondary.href}>{secondary.label}</TextLink>}
            </div>
          </div>

          {content.scene && (
            <div className="flex justify-center">
              <Scene3D kind={content.scene} className="max-w-[300px] sm:max-w-[360px]" />
            </div>
          )}
        </div>
      </section>

      <div className="container-edge pb-16">
        {content.aside ?? (
          <aside aria-label="At a glance" className="mx-card grid gap-8 p-7 sm:p-9 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:gap-12">
            <div>
              <h2 className="text-sm font-semibold text-muted">{includedLabel}</h2>
              <ul className="mt-5 grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
                {included.map((item) => (
                  <li key={item} className="flex gap-3 text-[0.9375rem] leading-snug text-ink-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2.5} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:border-l lg:border-line lg:pl-12">
              <h2 className="text-sm font-semibold text-muted">{bestForLabel}</h2>
              <ul className="mt-5 flex flex-wrap gap-2">
                {bestFor.map((item) => (
                  <li key={item.label}>
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="inline-block whitespace-nowrap rounded-full border border-line px-3.5 py-1.5 text-sm text-ink-2 transition-colors hover:border-accent hover:text-ink"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span className="inline-block whitespace-nowrap rounded-full border border-line px-3.5 py-1.5 text-sm text-ink-2">
                        {item.label}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        )}
      </div>
    </>
  );
}
