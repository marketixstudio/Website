/* Hallmark · genre: atmospheric · template: location page · hero: shared ServiceHero (market labels)
 * centrepiece: AreaMap (India) or HoursOverlap (international), computed from real offsets
 * honest: pass (46: invented prices, capabilities and wrong time-zone claims fixed in content/locations.ts)
 */
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { JsonLd } from "@/components/seo/json-ld";
import { AreaMap, HoursOverlap } from "@/components/v2/market-visuals";
import { ServiceHero, type ServiceHeroContent } from "@/components/v2/service-hero";
import { AnswerCard, Cta, FaqList, TextLink } from "@/components/v2/primitives";
import { locationList } from "@/content/locations";
import { puneAreas } from "@/content/pune-areas";
import type { LocationContent } from "@/lib/content-types";
import { primaryNav } from "@/lib/nav";
import { business } from "@/lib/site-config";
import { answerSchema, breadcrumbSchema, faqSchema, graph, localBusinessSchema } from "@/lib/structured-data";

/** Market framing: H1 split, and for international markets the real offset from IST. */
const framing: Record<string, { title: ServiceHeroContent["title"]; zone?: { place: string; zone: string; offset: number } }> = {
  pune: { title: { before: "Digital marketing agency in", accent: "Pune" } },
  mumbai: { title: { before: "Digital marketing agency for", accent: "Mumbai" } },
  bangalore: { title: { before: "Digital marketing agency for", accent: "Bangalore" } },
  "delhi-ncr": { title: { before: "Digital marketing agency for", accent: "Delhi NCR" } },
  hyderabad: { title: { before: "Digital marketing agency for", accent: "Hyderabad" } },
  ahmedabad: { title: { before: "Digital marketing agency for", accent: "Ahmedabad" } },
  "dubai-uae": { title: { before: "Digital marketing for", accent: "Dubai", after: "and the UAE" }, zone: { place: "Dubai", zone: "GST", offset: -1.5 } },
  "london-uk": { title: { before: "Digital marketing for", accent: "London", after: "and the UK" }, zone: { place: "London", zone: "GMT", offset: -5.5 } },
  usa: { title: { before: "Digital marketing for", accent: "US", after: "businesses" }, zone: { place: "New York", zone: "EST", offset: -10.5 } },
  australia: { title: { before: "Digital marketing for", accent: "Australian", after: "businesses" }, zone: { place: "Sydney", zone: "AEST", offset: 4.5 } },
  canada: { title: { before: "Digital marketing for", accent: "Canadian", after: "businesses" }, zone: { place: "Toronto", zone: "EST", offset: -10.5 } },
  singapore: { title: { before: "Digital marketing for", accent: "Singapore" }, zone: { place: "Singapore", zone: "SGT", offset: 2.5 } },
};

const industries = primaryNav.find((i) => i.label === "Industries")?.children ?? [];

export function LocationDetail({ content }: { content: LocationContent }) {
  const path = `/locations/${content.slug}`;
  const f = framing[content.slug] ?? { title: { before: "Digital marketing for", accent: content.area } };
  const isIndia = content.countryCode === "IN";
  const siblings = locationList.filter((l) => l.slug !== content.slug && (l.countryCode === "IN") === isIndia);

  const hero: ServiceHeroContent = {
    label: isIndia ? `${content.area}, ${content.countryName}` : `${content.area}, from our office in Pune`,
    title: f.title,
    lede: content.subtitle,
    cta: { label: "Get a free growth audit", href: "/growth-audit" },
    secondary: { label: isIndia ? "Areas we target" : "Working hours", href: "#market" },
    included: content.solution.points.slice(0, 5),
    bestFor: content.services.map((s) => ({ label: s.label, href: s.href })),
    includedLabel: `How we work in ${content.area}`,
    bestForLabel: "Services",
  };

  return (
    <>
      <JsonLd
        data={graph([
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Locations", path: "/locations" },
            { name: content.area, path },
          ]),
          localBusinessSchema({
            name: `${business.legalName}, ${content.area}`,
            description: content.metaDescription,
            path,
            areaServed: [content.area, ...content.nearby],
            countryCode: content.countryCode,
          }),
          answerSchema({ ...content.answerBlock, path }),
          faqSchema(content.faqs),
        ])}
      />

      <ServiceHero content={hero} />

      {/* 1 · The answer, for people and for AI search. */}
      <div className="container-edge pb-24">
        <AnswerCard block={content.answerBlock} id="answer" />
      </div>

      {/* 2 · The market, drawn: the page's centrepiece. */}
      <section id="market" className="scroll-mt-28 border-t border-line py-24 sm:py-28">
        <div className="container-edge grid grid-cols-[minmax(0,1fr)] items-center gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <div>
            <h2 className="max-w-[16ch] font-display text-h2 font-bold leading-[1.18] tracking-[-0.01em] text-ink">
              {isIndia ? `Areas we target around ${content.area}` : `Your working day and ours`}
            </h2>
            <p className="mt-5 max-w-[46ch] text-[1.0625rem] leading-relaxed text-muted">
              {isIndia
                ? `${content.area} is not one market. Buyers in ${content.nearby.slice(0, 3).join(", ")} behave differently, so campaigns and landing pages can be planned area by area.`
                : `We work from Pune. Here is how our office hours line up with a normal working day in ${f.zone?.place ?? content.area}.`}
            </p>
          </div>
          {isIndia || !f.zone ? (
            <AreaMap city={content.area} areas={content.nearby.slice(0, 8)} />
          ) : (
            <HoursOverlap place={f.zone.place} zone={f.zone.zone} offset={f.zone.offset} />
          )}
        </div>
      </section>

      {/* 2b · Pune only: the neighbourhood pages. */}
      {content.slug === "pune" && (
        <section aria-labelledby="pune-areas" className="border-t border-line py-24 sm:py-28">
          <div className="container-edge">
            <h2 id="pune-areas" className="max-w-[22ch] font-display text-h2 font-bold leading-[1.18] tracking-[-0.01em] text-ink">
              Digital marketing across Pune&apos;s neighbourhoods
            </h2>
            <p className="mt-5 max-w-[60ch] text-[1.0625rem] leading-relaxed text-muted">
              Each part of the city has its own customers and competition. These pages cover what we would focus on in each one.
            </p>
            <ul className="mt-12 grid grid-cols-[minmax(0,1fr)] gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {puneAreas.map((a) => (
                <li key={a.slug} className="mx-card group relative p-5 transition-colors hover:border-accent/60 focus-within:border-accent/60">
                  <Link
                    href={`/locations/pune/${a.slug}`}
                    className="flex items-center justify-between gap-3 font-display text-lg font-bold text-ink after:absolute after:inset-0 after:rounded-[24px] after:content-['']"
                  >
                    {a.area}
                    <ArrowRight className="h-4 w-4 shrink-0 text-accent transition-transform duration-200 group-hover:translate-x-1" strokeWidth={2} aria-hidden="true" />
                  </Link>
                  <p className="mt-1 truncate text-sm text-muted">{a.nearby.slice(0, 3).join(", ")}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* 3 · Why this market needs its own plan. */}
      <section className="border-t border-line py-24 sm:py-28">
        <div className="container-edge">
          <h2 className="max-w-[22ch] font-display text-h2 font-bold leading-[1.18] tracking-[-0.01em] text-ink">
            {content.solution.title}
          </h2>
          <p className="mt-5 max-w-[60ch] text-[1.0625rem] leading-relaxed text-muted">{content.solution.body}</p>
          <ul className="mt-12 grid grid-cols-[minmax(0,1fr)] gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {content.reasons.map((r) => (
              <li key={r.title} className="mx-card p-6">
                {r.icon && <r.icon className="h-6 w-6 text-accent" strokeWidth={1.8} aria-hidden="true" />}
                <p className="mt-4 font-display text-lg font-bold text-ink">{r.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{r.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4 · How an engagement runs here (static; the centrepiece carries the motion). */}
      <section className="border-t border-line py-24 sm:py-28">
        <div className="container-edge">
          <h2 className="font-display text-h2 font-bold leading-[1.18] tracking-[-0.01em] text-ink">How it runs</h2>
          <ol className="mt-10 grid grid-cols-[minmax(0,1fr)] gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {content.process.map((step, i) => (
              <li key={step.title} className="mx-card p-6">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-accent text-sm font-bold text-accent">
                  {i + 1}
                </span>
                <p className="mt-4 font-display text-lg font-bold text-ink">{step.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 5 · Where to go next. */}
      <section className="border-t border-line py-24 sm:py-28">
        <div className="container-edge grid grid-cols-[minmax(0,1fr)] gap-5 lg:grid-cols-2">
          <div className="mx-card p-8">
            <h2 className="font-display text-2xl font-bold leading-[1.15] text-ink">Services in {content.area}</h2>
            <ul className="mt-6 grid grid-cols-[minmax(0,1fr)] gap-1">
              {content.services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="group flex items-center justify-between gap-4 rounded-xl px-3 py-2.5 text-[0.9375rem] font-semibold text-ink transition-colors hover:bg-bg/50"
                  >
                    <span className="truncate">{s.label}</span>
                    <ArrowRight className="h-4 w-4 shrink-0 text-accent transition-transform duration-200 group-hover:translate-x-1" strokeWidth={2} aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mx-card p-8">
            <h2 className="font-display text-2xl font-bold leading-[1.15] text-ink">
              {isIndia ? "Other cities we work in" : "Other markets we plan for"}
            </h2>
            <ul className="mt-6 flex flex-wrap gap-2">
              {siblings.map((l) => (
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
            <h3 className="mt-8 border-t border-line pt-6 text-sm font-semibold text-muted">Industries</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {industries.map((i) => (
                <li key={i.href}>
                  <Link
                    href={i.href}
                    className="inline-block whitespace-nowrap rounded-full border border-line px-4 py-2 text-sm text-ink-2 transition-colors hover:border-accent hover:text-ink"
                  >
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 6 · Questions, with the next step alongside. */}
      <section className="border-t border-line py-24 sm:py-28">
        <div className="container-edge grid grid-cols-[minmax(0,1fr)] gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <div>
            <h2 className="font-display text-h2 font-bold leading-[1.18] tracking-[-0.01em] text-ink">
              Questions people ask first
            </h2>
            <p className="mt-5 max-w-[40ch] text-[0.9375rem] leading-relaxed text-muted">
              Tell us what you sell in {content.area} and we&apos;ll show you where enquiries are being lost.
            </p>
            <div className="mt-8 flex flex-col items-start gap-5">
              <Cta href="/growth-audit">Get a free growth audit</Cta>
              <TextLink href="/locations">All locations</TextLink>
            </div>
          </div>
          <FaqList items={content.faqs} />
        </div>
      </section>
    </>
  );
}
