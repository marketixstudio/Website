/* Hallmark · genre: atmospheric · template: company · centrepiece: StepRail of the method
 * honest: pass (46: principles describe process, no invented guarantees) · eyebrows: none
 */
import { GlossIcon } from "@/components/home-v2/gloss-icon";
import { Eyebrow } from "@/components/ui/section-heading";
import type { Metadata } from "next";
import { FileCheck2, Map, Search, ShieldCheck, TrendingUp, Wrench } from "lucide-react";
import { JsonLd } from "@/components/seo/json-ld";
import { IndexHero } from "@/components/v2/index-hero";
import { ProcessPanel, StepRail } from "@/components/v2/step-rail";
import { AnswerCard, Cta, TextLink } from "@/components/v2/primitives";
import type { AnswerBlock } from "@/lib/content-types";
import { buildMetadata } from "@/lib/seo";
import { answerSchema, breadcrumbSchema, graph } from "@/lib/structured-data";

const path = "/approach";

export const metadata: Metadata = buildMetadata({
  title: "Our Approach: Audit, Plan, Build, Improve",
  description:
    "How Marketix Studio runs every engagement: an audit first, a written plan, campaigns and pages built together, then steady improvement against enquiries.",
  path,
});

const steps = [
  { title: "Audit", body: "We look at your ads, website, Google Business Profile and tracking, and find where enquiries leak." },
  { title: "Plan", body: "We agree the channels, the offer, the creative direction and what success is measured on." },
  { title: "Build", body: "Campaigns, landing pages, creative and tracking go live together, not one at a time." },
  { title: "Improve", body: "We keep adjusting against enquiries and sales, and report what changed every month." },
];

const principles = [
  { icon: Search, title: "Start with the gaps", body: "We audit before we act, so effort goes where it matters most." },
  { icon: Map, title: "Plan channels together", body: "Ads, pages and follow-up are planned as one path, not as separate jobs." },
  { icon: Wrench, title: "Track before launch", body: "Calls, forms and sales are tracked before any budget goes live." },
  { icon: TrendingUp, title: "Improve on evidence", body: "Changes are made because the data says so, not because it is Monday." },
];

const agreed = [
  { icon: FileCheck2, title: "A written scope", body: "What we will deliver, who owns what on each side, and the timeline, agreed before work starts." },
  { icon: ShieldCheck, title: "Evidence before claims", body: "Baselines and how each number is measured are agreed before we report any results." },
];

const answer: AnswerBlock = {
  question: "How does Marketix Studio run a marketing engagement?",
  answer:
    "Every engagement follows four steps. An audit finds where enquiries are being lost. A written plan sets the channels, offer and measures of success. Campaigns, pages and tracking are then built and launched together. After launch the work is improved continuously, with a plain monthly report on what changed and why.",
  keyFacts: ["Audit first, always", "Tracking set up before launch", "Channels planned together", "Monthly reporting in plain language"],
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={graph([
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Our Approach", path },
          ]),
          answerSchema({ ...answer, path }),
        ])}
      />

      <IndexHero
        crumbs={[ { name: "Home", path: "/" }, { name: "Our Approach", path }, ]}
        label="Our approach, Marketix Studio Pune"
        title="Audit. Plan. Build."
        accent="Improve."
        lede="A simple method we use on every engagement, so growth is planned, measured and improved rather than left to chance."
        secondary={{ label: "About Marketix Studio", href: "/about" }}
      />

      {/* 1 · The method: the page's centrepiece. */}
      <ProcessPanel
        eyebrow="Our method"
        title="How every engagement runs"
        intro="The same four steps on every engagement, so growth is planned, measured and improved rather than left to chance."
      >
        <StepRail steps={steps} />
      </ProcessPanel>

      {/* 2 · The answer, for people and for AI search. */}
      <div className="container-edge pb-24">
        <AnswerCard block={answer} id="answer" />
      </div>

      {/* 3 · Principles. */}
      <section className="py-24 sm:py-28">
        <div className="container-edge">
          <Eyebrow>Our principles</Eyebrow>
          <h2 className="mt-6 font-display text-h2 font-bold leading-[1.18] tracking-[-0.01em] text-ink">What guides the work</h2>
          <ul className="mt-12 grid grid-cols-[minmax(0,1fr)] gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((p) => (
              <li key={p.title} className="mx-card p-6">
                <GlossIcon icon={p.icon} size="sm" />
                <p className="mt-4 font-display text-lg font-bold text-ink">{p.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4 · Agreed before work starts. */}
      <section className="py-24 sm:py-28">
        <div className="container-edge grid grid-cols-[minmax(0,1fr)] gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <div>
            <Eyebrow>Clear terms</Eyebrow>
            <h2 className="mt-6 max-w-[16ch] font-display text-h2 font-bold leading-[1.18] tracking-[-0.01em] text-ink">
              Agreed before the work begins
            </h2>
          </div>
          <ul className="grid grid-cols-[minmax(0,1fr)] gap-3 sm:grid-cols-2">
            {agreed.map((a) => (
              <li key={a.title} className="mx-card p-7">
                <a.icon className="h-6 w-6 text-accent" strokeWidth={1.8} aria-hidden="true" />
                <p className="mt-4 font-display text-xl font-bold text-ink">{a.title}</p>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{a.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-24 sm:py-28">
        <div className="container-edge flex flex-col items-start gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Eyebrow>Free growth audit</Eyebrow>
            <h2 className="mt-6 max-w-[20ch] font-display text-h2 font-bold leading-[1.18] tracking-[-0.01em] text-ink">
              Step one is free
            </h2>
          </div>
          <div className="flex flex-col items-start gap-5">
            <Cta href="/growth-audit">Get a free growth audit</Cta>
            <TextLink href="/services">See our services</TextLink>
          </div>
        </div>
      </section>
    </>
  );
}
