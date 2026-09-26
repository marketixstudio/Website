/* Hallmark · genre: atmospheric · template: Pune neighbourhood page · hero: shared ServiceHero
 * centrepiece: ZoomJourney (Earth, then Maharashtra, then this neighbourhood in Pune)
 * honest: local facts are general knowledge; searches are labelled as examples; no invented results
 */
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import { JsonLd } from "@/components/seo/json-ld";
import { ZoomJourney } from "@/components/v2/zoom-journey";
import { ServiceHero, type ServiceHeroContent } from "@/components/v2/service-hero";
import { AnswerCard, Cta, FaqList, TextLink } from "@/components/v2/primitives";
import { puneAreas, type PuneArea } from "@/content/pune-areas";
import { business } from "@/lib/site-config";
import { answerSchema, breadcrumbSchema, faqSchema, graph, localBusinessSchema } from "@/lib/structured-data";

export function PuneAreaDetail({ content }: { content: PuneArea }) {
  const path = `/locations/pune/${content.slug}`;
  const others = puneAreas.filter((a) => a.slug !== content.slug);

  const hero: ServiceHeroContent = {
    crumbs: [ { name: "Home", path: "/" }, { name: "Locations", path: "/locations" }, { name: "Pune", path: "/locations/pune" }, { name: content.area, path }, ],
    label: `${content.area}, Pune`,
    title: content.title,
    lede: content.lede,
    cta: { label: "Get a free growth audit", href: "/growth-audit" },
    secondary: { label: `Where we'd start in ${content.area}`, href: "#start" },
    included: content.answer.keyFacts ?? [],
    bestFor: content.focus.map(({ label, href }) => ({ label, href })),
    includedLabel: `Working with ${content.area} businesses`,
    bestForLabel: "Services",
  };

  return (
    <>
      <JsonLd
        data={graph([
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Locations", path: "/locations" },
            { name: "Pune", path: "/locations/pune" },
            { name: content.area, path },
          ]),
          localBusinessSchema({
            name: `${business.legalName}, ${content.area}`,
            description: content.metaDescription,
            path,
            areaServed: [content.area, ...content.nearby],
            countryCode: "IN",
          }),
          answerSchema({ ...content.answer, path }),
          faqSchema(content.faqs),
        ])}
      />

      <ServiceHero content={hero} />

      {/* 1 · The answer, for people and for AI search. */}
      <div className="container-edge pb-24">
        <AnswerCard block={content.answer} id="answer" />
      </div>

      {/* 2 · The neighbourhood: profile beside the area map (the centrepiece). */}
      <section className="border-t border-line py-24 sm:py-28">
        <div className="container-edge grid grid-cols-[minmax(0,1fr)] items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div>
            <h2 className="max-w-[20ch] font-display text-h2 font-bold leading-[1.18] tracking-[-0.01em] text-ink">
              {content.profile.title}
            </h2>
            <div className="mt-5 max-w-[56ch] space-y-4 text-[1.0625rem] leading-relaxed text-muted">
              {content.profile.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <h3 className="mt-8 text-sm font-semibold text-ink">Businesses we help in {content.area}</h3>
            <ul className="mt-4 space-y-2.5">
              {content.profile.points.map((point) => (
                <li key={point} className="flex gap-3 text-[0.9375rem] leading-snug text-ink-2">
                  <span aria-hidden="true" className="mt-[0.45em] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <ZoomJourney city="pune" area={content.area} nearby={content.nearby} />
        </div>
      </section>

      {/* 3 · Where we'd start: services chosen for this area, with the searches behind them. */}
      <section id="start" className="scroll-mt-28 border-t border-line py-24 sm:py-28">
        <div className="container-edge">
          <div className="grid grid-cols-[minmax(0,1fr)] gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end">
            <h2 className="max-w-[20ch] font-display text-h2 font-bold leading-[1.18] tracking-[-0.01em] text-ink">
              Where we&apos;d start in {content.area}
            </h2>
            <div>
              <p className="text-sm font-semibold text-muted">Examples of local searches we&apos;d plan for</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {content.searches.map((q) => (
                  <li
                    key={q}
                    className="inline-flex max-w-full items-center gap-2 rounded-full border border-line px-3.5 py-1.5 text-sm text-ink-2"
                  >
                    <Search className="h-3.5 w-3.5 shrink-0 text-accent" strokeWidth={2.25} aria-hidden="true" />
                    <span className="truncate">{q}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <ul className="mt-12 grid grid-cols-[minmax(0,1fr)] gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {content.focus.map((f) => (
              <li key={f.href} className="mx-card group relative flex flex-col p-6 transition-colors hover:border-accent/60 focus-within:border-accent/60">
                <h3 className="font-display text-lg font-bold leading-snug text-ink">
                  <Link href={f.href} className="after:absolute after:inset-0 after:rounded-[24px] after:content-['']">
                    {f.label}
                  </Link>
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{f.why}</p>
                <ArrowRight className="mt-5 h-4 w-4 text-accent transition-transform duration-200 group-hover:translate-x-1" strokeWidth={2} aria-hidden="true" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4 · Other Pune neighbourhoods, and the city page. */}
      <section className="border-t border-line py-24 sm:py-28">
        <div className="container-edge">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-display text-h2 font-bold leading-[1.18] tracking-[-0.01em] text-ink">Other Pune areas we cover</h2>
            <TextLink href="/locations/pune">Digital marketing in Pune</TextLink>
          </div>
          <ul className="mt-10 flex flex-wrap gap-2">
            {others.map((a) => (
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
      </section>

      {/* 5 · Questions, with the next step alongside. */}
      <section className="border-t border-line py-24 sm:py-28">
        <div className="container-edge grid grid-cols-[minmax(0,1fr)] gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <div>
            <h2 className="font-display text-h2 font-bold leading-[1.18] tracking-[-0.01em] text-ink">
              Questions from {content.area} businesses
            </h2>
            <p className="mt-5 max-w-[40ch] text-[0.9375rem] leading-relaxed text-muted">
              Tell us what you sell in {content.area} and we&apos;ll show you where enquiries are being lost.
            </p>
            <div className="mt-8 flex flex-col items-start gap-5">
              <Cta href="/growth-audit">Get a free growth audit</Cta>
              <TextLink href="/contact">Contact us</TextLink>
            </div>
          </div>
          <FaqList items={content.faqs} />
        </div>
      </section>
    </>
  );
}
