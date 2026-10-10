/* Hallmark · genre: atmospheric · template: service page · hero: shared ServiceHero (design.md) · body centrepiece: search-journey diagram
 * design-system: design.md · designed-as-app · theme: studied-DNA (source: url https://marketixstudio.com)
 * nav: N5 · footer: Ft5 · honest: pass (46 — every claim traced to the live PPC page) · chrome: pass (47) · eyebrows: none
 * pre-emit critique: P5 H4 E4 S5 R4 V5
 */
import { focusKeyword, pageSource, sentenceCase } from "@/lib/focus-keywords";
import { Eyebrow } from "@/components/ui/section-heading";
import type { Metadata } from "next";
import Link from "next/link";
import { Building2, Rocket, ShoppingBag, TrendingUp } from "lucide-react";
import { JsonLd } from "@/components/seo/json-ld";
import { FillHeading } from "@/components/v2/fill-heading";
import { SearchJourney } from "@/components/v2/search-journey";
import { ServiceHero, type ServiceHeroContent } from "@/components/v2/service-hero";
import { AnswerCard, Cta, FaqList, TextLink, serviceHref } from "@/components/v2/primitives";
import type { AnswerBlock, QA } from "@/lib/content-types";
import { services } from "@/content/services";
import { buildMetadata } from "@/lib/seo";
import { answerSchema, breadcrumbSchema, faqSchema, graph, serviceSchema } from "@/lib/structured-data";

const path = "/services/google-ads-ppc";

/** Sourced from marketixstudio.com/ppc-advertising-agency — no invented prices or metrics. */
const answer: AnswerBlock = {
  question: "What does Google Ads management include?",
  answer:
    "It covers the whole path from a search to an enquiry: researching the searches your customers make, writing ads for them, managing bids every day, sending clicks to landing pages built to convert, tracking calls and forms, and reporting every month on cost per lead, conversion rate and return on ad spend.",
  keyFacts: [
    "Search ads appear for searches you choose, so the intent is visible in the keyword",
    "Negative keywords stop spend on searches that will never convert",
    "Google rewards ads and landing pages that closely match the search",
    "Tracking calls and form fills lets bidding optimise for enquiries rather than clicks",
  ],
};

const hero: ServiceHeroContent = {
  keyword: focusKeyword(path),
    crumbs: [ { name: "Home", path: "/" }, { name: "Services", path: "/services" }, { name: "Google Ads & PPC", path }, ],
  label: "Google Ads management, Pune",
  title: { before: "Google Ads that turn searches into", accent: "enquiries" },
  lede: "We run Google Ads around your audience, your budget and the enquiries you want. Every rupee is tracked, optimised and accounted for.",
  cta: { label: "Get a free ads audit", href: "/growth-audit" },
  secondary: { label: "Follow one search", href: "#journey" },
  included: [
    "Google Search and Shopping ads",
    "Audience research and targeting",
    "Remarketing and retargeting",
    "Landing page optimisation",
    "Monthly performance reporting",
  ],
  bestFor: [
    { label: "Real estate", href: "/industries/real-estate" },
    { label: "SaaS", href: "/industries/saas-startups" },
    { label: "eCommerce", href: "/industries/ecommerce-d2c" },
  ],
};

// Questions people actually search about Google Ads (shared with content/services.ts).
const faqs: QA[] = services["google-ads-ppc"].faqs;

const audiences = [
  {
    icon: Building2,
    name: "Real estate developers",
    goal: "Site visit enquiries from people searching for your location and budget.",
    href: "/industries/real-estate",
  },
  {
    icon: Rocket,
    name: "SaaS brands",
    goal: "Free trial sign-ups from people searching for the problem you solve.",
    href: "/industries/saas-startups",
  },
  {
    icon: ShoppingBag,
    name: "eCommerce stores",
    goal: "Sales from Shopping ads shown to people searching for your products.",
    href: "/industries/ecommerce-d2c",
  },
];

export const metadata: Metadata = {
  ...buildMetadata({
    title: "Google Ads Management in Pune",
    description:
      "Google Ads management in Pune: keyword research, ad copy, daily bids, landing pages and monthly reports on cost per lead and return on ad spend.",
    path,
  }),
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={graph([
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Google Ads & PPC", path },
          ]),
          serviceSchema({
            name: "Google Ads Management",
            description: answer.answer,
            path,
            category: "Pay-per-click advertising",
          }),
          answerSchema({ ...answer, path }),
          faqSchema(faqs),
        ])}
      />

      <ServiceHero content={hero} />

      {/* The search journey, from query to report. */}
      <section id="journey" className="scroll-mt-28 py-24 sm:py-28">
        <div className="container-edge">
          <Eyebrow>How it works</Eyebrow>
          <FillHeading className="mt-6 max-w-[20ch] font-display text-h2 font-bold leading-[1.18] tracking-[-0.01em] text-ink">
            Follow one search from Google to your inbox
          </FillHeading>
          <p className="mb-10 mt-5 max-w-[60ch] text-[1.0625rem] leading-relaxed text-muted">
            Someone in Pune looking for a flat, and what we manage at each step between their search
            and your sales team&apos;s phone ringing.
          </p>
          <SearchJourney />
        </div>
      </section>

      {/* 2 · The answer, for people and for AI search. */}
      <div className="container-edge pb-24">
        <AnswerCard block={answer} id="answer" source={pageSource(path)} />
      </div>

      {/* 3 · Who it's for — stacked, not a three-card grid. */}
      <section className="py-24 sm:py-32">
        <div className="container-edge grid gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div>
            <Eyebrow>Our approach</Eyebrow>
            <FillHeading className="mt-6 max-w-[16ch] font-display text-h2 font-bold leading-[1.18] tracking-[-0.01em] text-ink">
              Built around the enquiry your business needs
            </FillHeading>
          </div>
          <ul className="space-y-4">
            {audiences.map((a) => (
              <li key={a.name}>
                <Link
                  href={a.href}
                  className="mx-card group flex items-start gap-5 p-6 transition-colors hover:border-accent/60 sm:p-7"
                >
                  <a.icon className="mt-1 h-6 w-6 shrink-0 text-accent" strokeWidth={1.8} aria-hidden="true" />
                  <span className="min-w-0">
                    <span className="block font-display text-xl font-bold text-ink">{a.name}</span>
                    <span className="mt-1.5 block text-[0.9375rem] leading-relaxed text-muted">{a.goal}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4 · Proof slot — waiting on a real Google Ads result. */}
      <section className="pb-24">
        <div className="container-edge">
          <figure className="mx-todo flex min-h-[13rem] flex-col items-center justify-center gap-3 p-8 text-center">
            <TrendingUp className="h-7 w-7 text-muted" strokeWidth={1.5} aria-hidden="true" />
            <p className="font-semibold text-ink-2">Result to supply</p>
            <figcaption className="max-w-[50ch] text-sm leading-relaxed">
              One Google Ads result you can publish: the client (or its sector), the metric, the
              before and after, and the period measured. This slot only appears in the preview.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* 5 · Questions, with the next step alongside. */}
      <section className="py-24 sm:py-28">
        <div className="container-edge grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <div>
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="mt-6 font-display text-h2 font-bold leading-[1.18] tracking-[-0.01em] text-ink">
              {`${sentenceCase(focusKeyword(path) ?? "")}: before you spend a rupee`}
            </h2>
            <p className="mt-5 max-w-[40ch] text-[0.9375rem] leading-relaxed text-muted">
              Send us your current account and we&apos;ll tell you where the budget is leaking.
            </p>
            <div className="mt-8 flex flex-col items-start gap-5">
              <Cta href="/growth-audit">Get a free ads audit</Cta>
              <TextLink href={serviceHref("meta-ads")}>Meta ads</TextLink>
            </div>
          </div>
          <FaqList items={faqs} />
        </div>
      </section>
    </>
  );
}
