/* Hallmark · genre: atmospheric · template: index · centrepiece: goal-based service finder
 * design-system: design.md · nav: N5 · footer: Ft5 · honest: pass (46: invented claims removed from servicesOverview)
 * chrome: pass (47) · eyebrows: none
 */
import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { JsonLd } from "@/components/seo/json-ld";
import { FillHeading } from "@/components/v2/fill-heading";
import { AnswerCard, Cta, FaqList, TextLink } from "@/components/v2/primitives";
import { ServiceFinder, type FinderCard } from "@/components/services/service-finder";
import { servicesOverview } from "@/content/services";
import type { AnswerBlock } from "@/lib/content-types";
import { primaryNav } from "@/lib/nav";
import { buildMetadata } from "@/lib/seo";
import { answerSchema, breadcrumbSchema, collectionSchema, faqSchema, graph } from "@/lib/structured-data";

const path = "/services";

export const metadata: Metadata = buildMetadata({
  title: servicesOverview.metaTitle,
  description: servicesOverview.metaDescription,
  path,
});

const answer: AnswerBlock = {
  question: "What services does Marketix Studio offer?",
  answer:
    "Marketix Studio offers thirteen marketing services from its Pune office: performance marketing, Google Ads, Meta ads, SEO, local SEO, content, web design, landing pages, branding, social media, email automation, WhatsApp marketing and conversion rate optimisation. They can be hired singly or planned together.",
  keyFacts: [
    "Paid ads on Google, Facebook and Instagram",
    "SEO for Google search and Google Maps",
    "Websites, landing pages and brand identity",
    "Email, WhatsApp and social follow-up",
  ],
};

const industries = primaryNav.find((i) => i.label === "Industries")?.children ?? [];

export default function Page() {
  const { cards, intro, process, faqs = [] } = servicesOverview;
  const finderCards: FinderCard[] = cards.map(({ icon: Icon, ...card }) => ({
    ...card,
    icon: Icon ? <Icon className="h-6 w-6 text-accent" strokeWidth={1.8} aria-hidden="true" /> : undefined,
  }));

  return (
    <>
      <JsonLd
        data={graph([
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path },
          ]),
          collectionSchema({
            name: "Marketing services from Marketix Studio",
            description: servicesOverview.metaDescription,
            path,
            items: cards.map((card) => ({ name: card.label, path: card.href })),
          }),
          answerSchema({ ...answer, path }),
          faqSchema(faqs),
        ])}
      />

      {/* 1 · Hero, with the finder straight underneath. */}
      <section className="mx-pool pb-16 pt-36 sm:pt-44">
        <div className="container-edge">
          <p className="text-base font-semibold text-ink-2 sm:text-lg">Services, Marketix Studio Pune</p>
          <div className="mt-5 grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-end">
            <h1 className="mx-display max-w-[15ch] font-display text-display text-ink">
              {servicesOverview.title}{" "}
              <span className="whitespace-nowrap text-ink-hi">{servicesOverview.highlight}</span>
            </h1>
            <div>
              <p className="max-w-[46ch] text-[1.0625rem] leading-relaxed text-muted sm:text-lg">
                {servicesOverview.subtitle}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-5">
                <Cta href="/growth-audit">Get a free growth audit</Cta>
                <TextLink href="#finder">Find your service</TextLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="finder" aria-label="Find a service by goal" className="scroll-mt-28 pb-24">
        <div className="container-edge">
          <h2 className="mb-6 font-display text-2xl font-bold text-ink">What do you need most right now?</h2>
          <ServiceFinder cards={finderCards} />
        </div>
      </section>

      {/* 2 · The answer, for people and for AI search. */}
      <div className="container-edge pb-24">
        <AnswerCard block={answer} id="answer" />
      </div>

      {/* 3 · Why plan them together, and how an engagement runs. */}
      {intro && process && (
        <section className="border-t border-line py-24 sm:py-32">
          <div className="container-edge">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
              <FillHeading className="max-w-[16ch] font-display text-h2 font-bold leading-[1.18] tracking-[-0.01em] text-ink">
                {intro.title}
              </FillHeading>
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

            <div className="relative mt-16">
              <span aria-hidden="true" className="absolute bottom-6 left-[1.375rem] top-6 w-px bg-line lg:hidden" />
              <span aria-hidden="true" className="absolute left-[12%] right-[12%] top-[1.375rem] hidden h-px bg-line lg:block" />
              <ol className="relative grid gap-4 lg:grid-cols-4">
                {process.map((step, i) => (
                  <li key={step.title} className="relative flex gap-4 lg:block">
                    <span className="relative z-10 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-accent bg-bg text-sm font-bold text-accent lg:mx-auto lg:flex">
                      {i + 1}
                    </span>
                    <div className="mx-card min-w-0 flex-1 p-6 lg:mt-5">
                      <h3 className="font-display text-xl font-bold text-ink">{step.title}</h3>
                      <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>
      )}

      {/* 4 · Same services, by industry. */}
      <section className="border-t border-line py-24 sm:py-28">
        <div className="container-edge">
          <div className="mx-card grid gap-8 p-8 sm:p-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
            <div>
              <h2 className="font-display text-3xl font-bold leading-[1.2] tracking-[-0.01em] text-ink">
                The same services, shaped for your industry
              </h2>
              <p className="mt-4 max-w-[46ch] text-[0.9375rem] leading-relaxed text-muted">
                A site visit, a free trial and a checkout need different campaigns. See how we plan for yours.
              </p>
            </div>
            <ul className="flex flex-wrap gap-2 lg:justify-end">
              {industries.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-block whitespace-nowrap rounded-full border border-line px-4 py-2 text-sm text-ink-2 transition-colors hover:border-accent hover:text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 5 · Questions, with the next step alongside. */}
      <section className="border-t border-line py-24 sm:py-28">
        <div className="container-edge grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <div>
            <h2 className="font-display text-h2 font-bold leading-[1.18] tracking-[-0.01em] text-ink">
              Not sure where to start?
            </h2>
            <p className="mt-5 max-w-[40ch] text-[0.9375rem] leading-relaxed text-muted">
              The free growth audit looks at your ads, website and Google profile, and tells you which
              service would make the biggest difference first.
            </p>
            <div className="mt-8 flex flex-col items-start gap-5">
              <Cta href="/growth-audit">Get a free growth audit</Cta>
              <TextLink href="/work">See our case studies</TextLink>
              <TextLink href="/pricing">How we price our work</TextLink>
            </div>
          </div>
          <FaqList items={faqs} />
        </div>
      </section>
    </>
  );
}
