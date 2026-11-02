import type { ReactNode } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { Eyebrow } from "@/components/ui/section-heading";
import { Breadcrumbs, type Crumb } from "@/components/v2/breadcrumbs";
import { sentenceCase } from "@/lib/focus-keywords";
import Image from "next/image";
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
  /** The page's focus keyword, shown as a label above the title (Rank Math: keyword up front). */
  keyword?: string;
  /** The page's topic photo (lib/hero-images.ts), shown in the notched frame with a small card. */
  photo?: { src: string; alt: string; cardLabel: string; cardText: string };
  /** Replaces the at-a-glance container below the hero (industry pages: the buyer's path). */
  aside?: ReactNode;
};

/**
 * The hero every service, industry and location page uses. Left: the promise and the action.
 * Right: the page's topic photo with a small card set into its corner (when one is set). The at-a-glance details
 * (what's included, who it suits) sit in their own wide container just below.
 */
export function ServiceHero({ content }: { content: ServiceHeroContent }) {
  const { label, title, lede, cta, secondary, included, bestFor } = content;
  const includedLabel = content.includedLabel ?? "What’s included";
  const bestForLabel = content.bestForLabel ?? "Best for";
  // Up to three short "what's included" items float over the photo as chips.
  const fromIncluded = included.map(chipLabel).filter((c): c is string => Boolean(c));
  // Industry pages list long sentences; their short "best for" labels read better as chips.
  const chips = (fromIncluded.length >= 2 ? fromIncluded : bestFor.map((b) => b.label).filter((l) => l.length <= 34)).slice(0, 3);

  return (
    <>
      <section className="mx-pool pb-20 pt-36 sm:pb-24 sm:pt-44">
        <div className={`container-edge grid items-center gap-12 lg:gap-14 ${content.photo ? "lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]" : ""}`}>
          <div>
            {content.crumbs && content.crumbs.length > 1 ? (
              <Breadcrumbs items={content.crumbs} />
            ) : (
              <p className="text-base font-semibold text-ink-2 sm:text-lg">{label}</p>
            )}
            {content.keyword && !`${title.before} ${title.accent} ${title.after ?? ""}`.toLowerCase().includes(content.keyword.toLowerCase()) && (
              <div className="mt-7">
                <Eyebrow>{sentenceCase(content.keyword)}</Eyebrow>
              </div>
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

          {content.photo && (
            <div className="relative">
              {/* 4:5 on phones (photos are generated portrait), 5:6 from lg: little is cropped either way. */}
              <div className="mx-notch-photo aspect-[4/5] sm:aspect-[5/6]">
                <Image
                  src={content.photo.src}
                  alt={content.photo.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
              {/* What the page offers, as chips over the photo: real items from `included`, never figures. */}
              {chips.length > 0 && (
                <ul aria-hidden="true" className="pointer-events-none absolute left-3 top-4 flex flex-col items-start gap-2 sm:left-0 sm:top-8 lg:-left-6">
                  {chips.map((chip, i) => (
                    <li
                      key={chip}
                      className={`flex max-w-[20rem] items-center gap-2.5 whitespace-nowrap rounded-2xl border border-white/15 bg-[rgb(10_8_12/0.72)] px-3 py-2 text-[13px] font-semibold leading-snug text-[#F5F2F6] backdrop-blur-md sm:text-sm ${i === 1 ? "sm:ml-6" : i === 2 ? "max-sm:hidden sm:ml-2" : ""}`}
                    >
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent text-white">
                        <Check className="h-3.5 w-3.5" strokeWidth={3} />
                      </span>
                      {chip}
                    </li>
                  ))}
                </ul>
              )}
              <div className="mx-notch mx-notch--br max-sm:w-auto w-[min(19rem,calc(100%-3rem))]">
                <div className="mx-glow-card p-5 sm:p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">{content.photo.cardLabel}</p>
                  <p className="mt-2 font-display text-lg font-bold leading-snug text-ink">{content.photo.cardText}</p>
                </div>
              </div>
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

/** A short chip label from a "what's included" item: its leading phrase, never reworded. */
function chipLabel(item: string) {
  if (item.length <= 34) return item;
  // Full sentences (industry pages) don't cut cleanly; only shorten short phrases.
  if (item.split(/\s+/).length >= 8) return null;
  const head = item.split(/,| and | with | mapped | across | for | to /)[0].trim();
  return head.length <= 34 && head.split(/\s+/).length >= 2 ? head : null;
}
