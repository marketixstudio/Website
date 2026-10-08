/* Hallmark · genre: atmospheric · template: FAQ · centrepiece: FaqExplorer (search + topic filters)
 * honest: pass (46: invented retainer range, minimum term, notice period, budgets, weekly updates,
 * exclusivity, "a third international" and language claims removed) · eyebrows: none
 */
import { Eyebrow } from "@/components/ui/section-heading";
import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";
import { FaqExplorer } from "@/components/v2/faq-explorer";
import { IndexHero } from "@/components/v2/index-hero";
import { Cta, TextLink } from "@/components/v2/primitives";
import { products } from "@/content/products-catalog";
import type { QA } from "@/lib/content-types";
import { buildMetadata } from "@/lib/seo";
import { business } from "@/lib/site-config";
import { breadcrumbSchema, faqSchema, graph } from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({
  title: "FAQ: Questions About Working With Us",
  description:
    "Straight answers about pricing, results, reporting, locations and how Marketix Studio in Pune works, before you get on a call.",
  path: "/faq",
});

const toolkit = products["gmb-toolkit"];

const groups: { title: string; items: QA[] }[] = [
  {
    title: "Pricing",
    items: [
      {
        q: "How much does Marketix Studio cost?",
        a: "It depends on the channels and work in scope, so we quote after a free growth audit. Project work such as a website or brand identity is quoted as a project.",
      },
      {
        q: "Is ad spend included in your fee?",
        a: "No. Advertising budget is paid from your own account directly to Google, Meta or the platform you use.",
      },
      {
        q: "Do you do one-off projects?",
        a: "Yes. Websites, landing pages, brand identity and SEO audits can all be done as standalone projects.",
      },
      {
        q: "Is there anything with a fixed price?",
        a: `Yes, the Google Maps Ranking Toolkit, a do-it-yourself Excel file, costs ₹${toolkit.priceInr}.`,
      },
    ],
  },
  {
    title: "How we work",
    items: [
      {
        q: "Who will I work with?",
        a: "The team on our Team page: strategy, performance marketing, SEO, creative, social media and client success, all from our Pune office.",
      },
      {
        q: "Can you work with our in-house team?",
        a: "Yes. A common split is that we run paid media and measurement while your team owns brand and content, with shared reporting.",
      },
      {
        q: "How does an engagement start?",
        a: "With an audit. We look at your ads, website, Google Business Profile and tracking, agree a plan, then build and launch campaigns, pages and tracking together.",
      },
    ],
  },
  {
    title: "Results",
    items: [
      {
        q: "Do you guarantee results?",
        a: "No, and be wary of anyone who does. Outcomes depend on your market, offer, budget and how your team follows up on enquiries. We agree clear targets before starting and report honestly against them.",
      },
      {
        q: "How quickly will I see results?",
        a: "Paid campaigns can bring enquiries as soon as they go live and usually get cheaper as they collect data. SEO takes months rather than weeks, depending on the competition.",
      },
      {
        q: "What do you report on?",
        a: "Where the budget went and what it produced: cost per lead, conversion rate and return on ad spend, plus what we changed and why. Clicks and impressions are diagnostics, not results.",
      },
    ],
  },
  {
    title: "Location",
    items: [
      {
        q: "Where is Marketix Studio based?",
        a: `We are based in Pune, Maharashtra. Our full address and hours are on the contact page, and we are open Monday to Saturday, ${business.openingHours.opens} to ${business.openingHours.closes} IST.`,
      },
      {
        q: "Do you have offices in other cities?",
        a: "No. Pune is our only office, and we work with clients elsewhere remotely. We say so plainly because listing virtual offices is misleading and against Google Business Profile rules.",
      },
      {
        q: "Do you work with businesses outside India?",
        a: "Yes. We plan campaigns for brands selling into the UAE, the UK, the US, Australia, Canada and Singapore.",
      },
    ],
  },
];

export default function Page() {
  const all = groups.flatMap((g) => g.items);

  return (
    <>
      <JsonLd
        data={graph([
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "FAQ", path: "/faq" },
          ]),
          faqSchema(all),
        ])}
      />

      <IndexHero
        crumbs={[ { name: "Home", path: "/" }, { name: "FAQ", path: "/faq" }, ]}
        label="FAQ, Marketix Studio Pune"
        title="Straight answers,"
        accent="before the call"
        lede="Pricing, results, reporting and how we work. Search below, or ask us directly if your question isn't here."
        cta={null}
        secondary={{ label: "Ask us directly", href: "/contact" }}
      />

      <section aria-label="Frequently asked questions" className="pb-24">
        <div className="container-edge">
          <FaqExplorer groups={groups} />
        </div>
      </section>

      <section className="py-24 sm:py-28">
        <div className="container-edge flex flex-col items-start gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Eyebrow>Get in touch</Eyebrow>
            <h2 className="mt-6 max-w-[20ch] font-display text-h2 font-bold leading-[1.18] tracking-[-0.01em] text-ink">
              Still have a question?
            </h2>
          </div>
          <div className="flex flex-col items-start gap-5">
            <Cta href="/contact">Ask us directly</Cta>
            <TextLink href="/growth-audit">Or get a free growth audit</TextLink>
          </div>
        </div>
      </section>
    </>
  );
}
