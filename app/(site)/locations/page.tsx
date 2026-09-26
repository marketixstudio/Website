/* Hallmark · genre: atmospheric · template: index · centrepiece: MarketBoard (all markets on one IST axis)
 * design-system: design.md · honest: pass (46: "eight markets" and "deepest network" claims removed) · eyebrows: none
 */
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, MapPin } from "lucide-react";
import { JsonLd } from "@/components/seo/json-ld";
import { MarketBoard } from "@/components/v2/market-visuals";
import { AnswerCard, Cta, FaqList, TextLink } from "@/components/v2/primitives";
import { globalLocations, indiaLocations, locationsOverview } from "@/content/locations";
import { puneAreas } from "@/content/pune-areas";
import type { AnswerBlock } from "@/lib/content-types";
import { buildMetadata } from "@/lib/seo";
import { business } from "@/lib/site-config";
import { answerSchema, breadcrumbSchema, collectionSchema, faqSchema, graph } from "@/lib/structured-data";
import { Breadcrumbs } from "@/components/v2/breadcrumbs";

const path = "/locations";

export const metadata: Metadata = buildMetadata({
  title: "Where We Work: Pune, India and Abroad",
  description:
    "Marketix Studio works from Pune with brands across India, and plans campaigns for the UAE, the UK, the US, Australia, Canada and Singapore.",
  path,
});

const zones: Record<string, { place: string; zone: string; offset: number }> = {
  "dubai-uae": { place: "Dubai", zone: "GST", offset: -1.5 },
  singapore: { place: "Singapore", zone: "SGT", offset: 2.5 },
  australia: { place: "Sydney", zone: "AEST", offset: 4.5 },
  "london-uk": { place: "London", zone: "GMT", offset: -5.5 },
  usa: { place: "New York", zone: "EST", offset: -10.5 },
  canada: { place: "Toronto", zone: "EST", offset: -10.5 },
};

const answer: AnswerBlock = {
  question: "Where does Marketix Studio work?",
  answer: `Marketix Studio is based in Pune. It works with brands in Pune and across India, including Mumbai, Bangalore, Delhi NCR, Hyderabad and Ahmedabad, and plans campaigns for businesses selling into the UAE, the UK, the US, Australia, Canada and Singapore. There are no other offices; everything runs from Pune.`,
  keyFacts: [
    "Based in Pune, with one team for every market",
    "In-person meetings in Pune, remote work everywhere else",
    "Campaigns planned in each market's language and currency",
    `Office hours ${business.openingHours.opens} to ${business.openingHours.closes} IST, Monday to Saturday`,
  ],
};

export default function Page() {
  const { intro, faqs = [] } = locationsOverview;
  const markets = globalLocations
    .filter((l) => zones[l.slug])
    .map((l) => ({ ...zones[l.slug], href: `/locations/${l.slug}` }));
  const all = [...indiaLocations, ...globalLocations];

  return (
    <>
      <JsonLd
        data={graph([
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Locations", path },
          ]),
          collectionSchema({
            name: "Markets served by Marketix Studio",
            description: answer.answer,
            path,
            items: all.map((l) => ({ name: l.area, path: `/locations/${l.slug}` })),
          }),
          answerSchema({ ...answer, path }),
          faqSchema(faqs),
        ])}
      />

      {/* 1 · Hero. */}
      <section className="mx-pool pb-16 pt-36 sm:pt-44">
        <div className="container-edge">
          <Breadcrumbs items={[ { name: "Home", path: "/" }, { name: "Locations", path }, ]} />
          <div className="mt-5 grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-end">
            <h1 className="mx-display max-w-[16ch] font-display text-display text-ink">
              {locationsOverview.title}{" "}
              <span className="text-ink-hi sm:whitespace-nowrap">{locationsOverview.highlight}</span>
            </h1>
            <div>
              <p className="max-w-[46ch] text-[1.0625rem] leading-relaxed text-muted sm:text-lg">{locationsOverview.subtitle}</p>
              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-5">
                <Cta href="/growth-audit">Get a free growth audit</Cta>
                <TextLink href="/contact">Visit the office</TextLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2 · India, and our office. */}
      <section aria-labelledby="india" className="pb-20">
        <div className="container-edge grid grid-cols-[minmax(0,1fr)] gap-5 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <div className="mx-card flex flex-col p-8">
            <MapPin className="h-7 w-7 text-accent" strokeWidth={1.8} aria-hidden="true" />
            <h2 className="mt-5 font-display text-2xl font-bold text-ink">Based in Pune</h2>
            <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-2">Our team plans and runs every campaign from Pune, for clients across India and abroad.</p>
            <p className="mt-2 text-sm text-muted">
              Monday to Saturday, {business.openingHours.opens} to {business.openingHours.closes} IST
            </p>
            <div className="mt-auto pt-8">
              <Link href="/contact" className="mx-link text-sm">
                Contact details
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.25} aria-hidden="true" />
              </Link>
            </div>
          </div>
          <div>
            <h2 id="india" className="font-display text-2xl font-bold text-ink">
              India
            </h2>
            <ul className="mt-5 grid grid-cols-[minmax(0,1fr)] gap-3 sm:grid-cols-2">
              {indiaLocations.map((l) => (
                <li key={l.slug} className="mx-card group relative p-5 transition-colors hover:border-accent/60 focus-within:border-accent/60">
                  <Link
                    href={`/locations/${l.slug}`}
                    className="font-display text-lg font-bold text-ink after:absolute after:inset-0 after:rounded-[24px] after:content-['']"
                  >
                    {l.area}
                  </Link>
                  <p className="mt-1 truncate text-sm text-muted">{l.nearby.slice(0, 3).join(", ")}</p>
                </li>
              ))}
            </ul>
            <h3 className="mt-10 text-sm font-semibold text-ink">Pune neighbourhoods</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {puneAreas.filter((a) => a.slug !== "balewadi").map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/locations/pune/${a.slug}`}
                    className="inline-block whitespace-nowrap rounded-full border border-line px-4 py-2 text-sm text-ink-2 transition-colors hover:border-accent hover:text-ink"
                  >
                    {a.area}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 3 · International: the working-hours board is the page's centrepiece. */}
      <section aria-labelledby="international" className="border-t border-line py-24 sm:py-28">
        <div className="container-edge grid grid-cols-[minmax(0,1fr)] items-center gap-12 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)]">
          <div>
            <h2 id="international" className="max-w-[16ch] font-display text-h2 font-bold leading-[1.18] tracking-[-0.01em] text-ink">
              International, from Pune
            </h2>
            <p className="mt-5 max-w-[44ch] text-[1.0625rem] leading-relaxed text-muted">
              We plan campaigns for brands selling into six markets abroad. This is how each market&apos;s working day lines
              up with ours.
            </p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {globalLocations.map((l) => (
                <li key={l.slug}>
                  <Link
                    href={`/locations/${l.slug}`}
                    className="inline-block whitespace-nowrap rounded-full border border-line px-4 py-2 text-sm text-ink-2 transition-colors hover:border-accent hover:text-ink"
                  >
                    {l.area}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <MarketBoard markets={markets} />
        </div>
      </section>

      {/* 4 · The answer, for people and for AI search. */}
      <div className="container-edge pb-24">
        <AnswerCard block={answer} id="answer" />
      </div>

      {/* 5 · How we work across markets. */}
      {intro && (
        <section className="border-t border-line py-24 sm:py-28">
          <div className="container-edge grid grid-cols-[minmax(0,1fr)] gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            <h2 className="max-w-[16ch] font-display text-h2 font-bold leading-[1.18] tracking-[-0.01em] text-ink">
              {intro.title}
            </h2>
            <div>
              <p className="max-w-[54ch] text-[1.0625rem] leading-relaxed text-muted">{intro.body}</p>
              <ul className="mt-6 space-y-3">
                {intro.points.map((point) => (
                  <li key={point} className="flex gap-3 text-[0.9375rem] text-ink-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2.5} aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* 6 · Questions, with the next step alongside. */}
      <section className="border-t border-line py-24 sm:py-28">
        <div className="container-edge grid grid-cols-[minmax(0,1fr)] gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <div>
            <h2 className="font-display text-h2 font-bold leading-[1.18] tracking-[-0.01em] text-ink">
              Questions people ask first
            </h2>
            <div className="mt-8 flex flex-col items-start gap-5">
              <Cta href="/growth-audit">Get a free growth audit</Cta>
              <TextLink href="/services">All services</TextLink>
            </div>
          </div>
          <FaqList items={faqs} />
        </div>
      </section>
    </>
  );
}
