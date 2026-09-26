/* Hallmark · genre: atmospheric · template: index · centrepiece: IndustryExplorer (tabbed sector panels)
 * design-system: design.md · honest: pass (46: invented history and exclusivity claims removed) · eyebrows: none
 */
import type { Metadata } from "next";
import { Check } from "lucide-react";
import { JsonLd } from "@/components/seo/json-ld";
import { IndustryExplorer, type ExplorerItem } from "@/components/industries/industry-explorer";
import { FillHeading } from "@/components/v2/fill-heading";
import { AnswerCard, Cta, FaqList, TextLink } from "@/components/v2/primitives";
import { industries, industriesOverview } from "@/content/industries";
import type { AnswerBlock } from "@/lib/content-types";
import { buildMetadata } from "@/lib/seo";
import { answerSchema, breadcrumbSchema, collectionSchema, faqSchema, graph } from "@/lib/structured-data";
import { Breadcrumbs } from "@/components/v2/breadcrumbs";

const path = "/industries";

export const metadata: Metadata = buildMetadata({
  title: industriesOverview.metaTitle,
  description: industriesOverview.metaDescription,
  path,
});

const goals: Record<string, string> = {
  "real-estate": "Site visits and bookings, not raw form fills",
  "ecommerce-d2c": "Profit after shipping, returns and discounts",
  "saas-startups": "Qualified demos and payback on acquisition cost",
  healthcare: "Appointments, within advertising rules",
  education: "Enrolments, timed to the intake calendar",
  hospitality: "Direct bookings instead of OTA commission",
  "interior-architecture": "Consultations with clients who fit your budget",
  automotive: "Test drives, showroom visits and service bookings",
};

const answer: AnswerBlock = {
  question: "Which industries does Marketix Studio work with?",
  answer:
    "Marketix Studio plans marketing for eight sectors from its Pune office: real estate, eCommerce and D2C, SaaS and startups, healthcare, education, hospitality, interiors and architecture, and automotive. Each sector gets campaigns built around how its customers actually decide, and a clear measure of success such as site visits, enrolments or bookings.",
  keyFacts: [
    "Real estate campaigns are measured on site visits",
    "eCommerce is measured on profit, not platform ROAS alone",
    "Healthcare ads are written within platform and Indian advertising rules",
    "Education campaigns follow the intake calendar",
  ],
};

export default function Page() {
  const { cards, intro, faqs = [] } = industriesOverview;
  const items: ExplorerItem[] = cards.map(({ icon: Icon, label, href }) => {
    const slug = href.replace("/industries/", "");
    const c = industries[slug];
    return {
      slug,
      label,
      href,
      icon: Icon ? <Icon className="h-5 w-5 text-accent" strokeWidth={1.8} aria-hidden="true" /> : undefined,
      goal: goals[slug] ?? label,
      problem: { title: c.challenges[0].title, body: c.challenges[0].body },
      steps: c.workflow.map((w) => w.title),
      services: c.services,
    };
  });

  return (
    <>
      <JsonLd
        data={graph([
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Industries", path },
          ]),
          collectionSchema({
            name: "Industries served by Marketix Studio",
            description: industriesOverview.metaDescription,
            path,
            items: cards.map((c) => ({ name: c.label, path: c.href })),
          }),
          answerSchema({ ...answer, path }),
          faqSchema(faqs),
        ])}
      />

      {/* 1 · Hero. */}
      <section className="mx-pool pb-16 pt-36 sm:pt-44">
        <div className="container-edge">
          <Breadcrumbs items={[ { name: "Home", path: "/" }, { name: "Industries", path }, ]} />
          <div className="mt-5 grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-end">
            <h1 className="mx-display max-w-[16ch] font-display text-display text-ink">
              {industriesOverview.title}{" "}
              <span className="text-ink-hi sm:whitespace-nowrap">{industriesOverview.highlight}</span>
            </h1>
            <div>
              <p className="max-w-[46ch] text-[1.0625rem] leading-relaxed text-muted sm:text-lg">
                {industriesOverview.subtitle}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-5">
                <Cta href="/growth-audit">Get a free growth audit</Cta>
                <TextLink href="#explorer">Explore by sector</TextLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2 · The explorer: the page's centrepiece. */}
      <section id="explorer" aria-label="Explore industries" className="scroll-mt-28 pb-24">
        <div className="container-edge">
          <IndustryExplorer items={items} />
        </div>
      </section>

      {/* 3 · The answer, for people and for AI search. */}
      <div className="container-edge pb-24">
        <AnswerCard block={answer} id="answer" />
      </div>

      {/* 4 · Why sector matters. */}
      {intro && (
        <section className="border-t border-line py-24 sm:py-32">
          <div className="container-edge grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
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
        </section>
      )}

      {/* 5 · Questions, with the next step alongside. */}
      <section className="border-t border-line py-24 sm:py-28">
        <div className="container-edge grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <div>
            <h2 className="font-display text-h2 font-bold leading-[1.18] tracking-[-0.01em] text-ink">
              Questions people ask first
            </h2>
            <p className="mt-5 max-w-[40ch] text-[0.9375rem] leading-relaxed text-muted">
              Not in the list? Tell us how you sell and we&apos;ll say honestly whether we can help.
            </p>
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
