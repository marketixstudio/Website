/* Hallmark · genre: atmospheric · template: industry page · hero: shared ServiceHero (sector labels)
 * centrepiece: Funnel of the sector's workflow · honest: pass (46: invented prices and stats removed from content/industries.ts)
 * testimonials: none (case study card links out instead) · eyebrows: none
 */
import Link from "next/link";
import { Eyebrow } from "@/components/ui/section-heading";
import { ArrowRight, TriangleAlert } from "lucide-react";
import { JsonLd } from "@/components/seo/json-ld";
import { FillHeading } from "@/components/v2/fill-heading";
import { Funnel } from "@/components/v2/funnel";
import { IndustryPath, industryScene } from "@/components/v2/industry-path";
import { ServiceHero, type ServiceHeroContent } from "@/components/v2/service-hero";
import { AnswerCard, Cta, FaqList, TextLink } from "@/components/v2/primitives";
import { servicesOverview } from "@/content/services";
import { caseStudies } from "@/content/work";
import type { IndustryContent } from "@/lib/content-types";
import { footerNav } from "@/lib/nav";
import { answerSchema, breadcrumbSchema, faqSchema, graph, serviceSchema } from "@/lib/structured-data";

const framing: Record<string, { title: ServiceHeroContent["title"]; outcome: string; sector: string }> = {
  "real-estate": { title: { before: "Real estate marketing measured in", accent: "site visits" }, outcome: "Site visits and bookings", sector: "real estate" },
  "ecommerce-d2c": { title: { before: "eCommerce growth measured on", accent: "margin" }, outcome: "Profitable first and repeat orders", sector: "eCommerce and D2C" },
  "saas-startups": { title: { before: "SaaS marketing built for", accent: "pipeline" }, outcome: "Qualified demos and paying customers", sector: "SaaS and startups" },
  healthcare: { title: { before: "Healthcare marketing that patients", accent: "trust" }, outcome: "Appointments booked", sector: "healthcare" },
  education: { title: { before: "Admissions marketing timed to the", accent: "intake" }, outcome: "Enrolments before the deadline", sector: "education" },
  hospitality: { title: { before: "More direct bookings, less", accent: "commission" }, outcome: "Direct bookings", sector: "hospitality" },
  "interior-architecture": { title: { before: "Design enquiries worth", accent: "your time" }, outcome: "Qualified consultations", sector: "interiors and architecture" },
  automotive: { title: { before: "Automotive marketing measured at the", accent: "showroom" }, outcome: "Test drives and service bookings", sector: "automotive" },
};

const cardBody = new Map(servicesOverview.cards.map((c) => [c.href, c.body]));
const locationLinks = footerNav.find((g) => g.title === "Locations")?.items ?? [];

export function IndustryDetail({ content }: { content: IndustryContent }) {
  const path = `/industries/${content.slug}`;
  const f = framing[content.slug] ?? {
    title: { before: "", accent: content.title },
    outcome: "Qualified enquiries",
    sector: content.title.toLowerCase(),
  };
  const study = Object.values(caseStudies).find((c) => c.industrySlug === content.slug && !c.draft);

  const hero: ServiceHeroContent = {
    crumbs: [ { name: "Home", path: "/" }, { name: "Industries", path: "/industries" }, { name: content.title, path }, ],
    label: `${content.title}, Pune`,
    title: f.title,
    lede: content.subtitle,
    cta: { label: "Get a free growth audit", href: "/growth-audit" },
    secondary: { label: "How we work", href: "#how" },
    included: content.solution.points.slice(0, 5),
    bestFor: content.services.map((s) => ({ label: s.label, href: s.href })),
    includedLabel: "What we focus on",
    bestForLabel: "Services we use",
    scene: industryScene(content.slug),
    aside: <IndustryPath slug={content.slug} sector={f.sector} outcome={f.outcome} />,
  };

  return (
    <>
      <JsonLd
        data={graph([
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Industries", path: "/industries" },
            { name: content.title, path },
          ]),
          serviceSchema({
            name: content.title,
            description: content.metaDescription,
            path,
            category: `Marketing for ${f.sector}`,
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

      {/* 2 · What usually goes wrong. */}
      <section className="py-24 sm:py-32">
        <div className="container-edge">
          <Eyebrow>The problem</Eyebrow>
          <FillHeading className="mt-6 max-w-[20ch] font-display text-h2 font-bold leading-[1.18] tracking-[-0.01em] text-ink">
            {`What usually goes wrong in ${f.sector} marketing`}
          </FillHeading>
          <ul className="mt-12 grid grid-cols-[minmax(0,1fr)] gap-3 md:grid-cols-2">
            {content.challenges.map((c) => (
              <li key={c.title} className="mx-card flex gap-4 p-6 sm:p-7">
                <TriangleAlert className="mt-1 h-5 w-5 shrink-0 text-accent" strokeWidth={1.9} aria-hidden="true" />
                <span>
                  <span className="block font-display text-lg font-bold text-ink">{c.title}</span>
                  <span className="mt-1.5 block text-[0.9375rem] leading-relaxed text-muted">{c.body}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3 · The approach, drawn as a funnel: the page's centrepiece. */}
      <section id="how" className="scroll-mt-28 py-24 sm:py-32">
        <div className="container-edge grid items-center gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div>
            <Eyebrow>Our approach</Eyebrow>
            <h2 className="mt-6 max-w-[18ch] font-display text-h2 font-bold leading-[1.18] tracking-[-0.01em] text-ink">
              {content.solution.title}
            </h2>
            <p className="mt-6 max-w-[52ch] text-[1.0625rem] leading-relaxed text-muted">{content.solution.body}</p>
            <div className="mt-8">
              <Cta href="/growth-audit">Get a free growth audit</Cta>
            </div>
          </div>
          <Funnel steps={content.workflow} outcome={f.outcome} />
        </div>
      </section>

      {/* 4 · Services used for this sector. */}
      <section className="py-24 sm:py-28">
        <div className="container-edge">
          <Eyebrow>Services</Eyebrow>
          <h2 className="mt-6 font-display text-h2 font-bold leading-[1.18] tracking-[-0.01em] text-ink">
            Services we use for {f.sector}
          </h2>
          <ul className="mt-10 grid grid-cols-[minmax(0,1fr)] gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {content.services.map((s) => (
              <li key={s.href} className="mx-card group relative p-6 transition-colors hover:border-accent/60 focus-within:border-accent/60">
                <Link
                  href={s.href}
                  className="font-display text-lg font-bold text-ink after:absolute after:inset-0 after:rounded-[24px] after:content-['']"
                >
                  {s.label}
                </Link>
                {cardBody.get(s.href) && <p className="mt-2 text-sm leading-relaxed text-muted">{cardBody.get(s.href)}</p>}
                <span className="mx-row-go mt-4 ml-0" aria-hidden="true">
                  <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5 · Proof where it exists, and where we run these campaigns. */}
      <section className="py-24 sm:py-28">
        <div className="container-edge grid gap-5 lg:grid-cols-2">
          {study ? (
            <article className="mx-card group relative flex flex-col p-8 transition-colors hover:border-accent/60">
              <p className="text-sm font-semibold text-muted">Case study · {study.locationLabel}</p>
              <h2 className="mt-3 font-display text-2xl font-bold leading-[1.15] text-ink">
                <Link href={`/work/${study.slug}`} className="after:absolute after:inset-0 after:rounded-[24px] after:content-['']">
                  {study.headline} {study.highlight}
                </Link>
              </h2>
              <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-muted">{study.summary}</p>
              <span className="mx-link mt-6 text-sm">
                Read the case study
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.25} aria-hidden="true" />
              </span>
            </article>
          ) : (
            <div className="mx-card flex flex-col p-8">
              <h2 className="font-display text-2xl font-bold leading-[1.15] text-ink">See the work behind the results</h2>
              <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-muted">
                Our case studies show what we changed, what happened and over what period.
              </p>
              <div className="mt-6">
                <TextLink href="/work">Browse case studies</TextLink>
              </div>
            </div>
          )}
          <div className="mx-card p-8">
            <h2 className="font-display text-2xl font-bold leading-[1.15] text-ink">
              {`Marketing for ${f.sector}, wherever you sell`}
            </h2>
            <ul className="mt-6 flex flex-wrap gap-2">
              {locationLinks.map((loc) => (
                <li key={loc.href}>
                  <Link
                    href={loc.href}
                    className="inline-block whitespace-nowrap rounded-full border border-line px-4 py-2 text-sm text-ink-2 transition-colors hover:border-accent hover:text-ink"
                  >
                    {loc.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 6 · Questions, with the next step alongside. */}
      <section className="py-24 sm:py-28">
        <div className="container-edge grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <div>
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="mt-6 font-display text-h2 font-bold leading-[1.18] tracking-[-0.01em] text-ink">
              Questions people ask first
            </h2>
            <p className="mt-5 max-w-[40ch] text-[0.9375rem] leading-relaxed text-muted">
              Tell us about your business and we&apos;ll show you where enquiries are being lost.
            </p>
            <div className="mt-8 flex flex-col items-start gap-5">
              <Cta href="/growth-audit">Get a free growth audit</Cta>
              <TextLink href="/industries">All industries</TextLink>
            </div>
          </div>
          <FaqList items={content.faqs} />
        </div>
      </section>
    </>
  );
}
