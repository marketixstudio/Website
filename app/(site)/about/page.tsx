/* Hallmark · genre: atmospheric · template: company · centrepiece: "studio at a glance" board, every number counted from content
 * honest: pass (46: removed invented retainer range, flat-fee and exclusivity claims, 90-day review) · eyebrows: none
 */
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, Layers, LineChart, ShieldCheck } from "lucide-react";
import { JsonLd } from "@/components/seo/json-ld";
import { IndexHero } from "@/components/v2/index-hero";
import { AnswerCard, Cta, FaqList, TextLink } from "@/components/v2/primitives";
import { industryList } from "@/content/industries";
import { locationList } from "@/content/locations";
import { serviceList } from "@/content/services";
import { team } from "@/content/team";
import { clientLogos } from "@/content/testimonials";
import type { AnswerBlock, QA } from "@/lib/content-types";
import { buildMetadata } from "@/lib/seo";
import { business, fullAddress } from "@/lib/site-config";
import { answerSchema, breadcrumbSchema, faqSchema, graph, localBusinessSchema } from "@/lib/structured-data";

const path = "/about";

export const metadata: Metadata = buildMetadata({
  title: "About Marketix Studio, Marketing Agency in Pune",
  description:
    "Marketix Studio is a performance marketing agency on Balewadi High Street, Pune, serving real estate, startups and eCommerce brands since 2023.",
  path,
});

const answer: AnswerBlock = {
  question: "Who is Marketix Studio?",
  answer: `Marketix Studio is a performance marketing agency on Balewadi High Street in Pune, serving brands since ${business.foundingDate}. A team of ${team.length} plans and runs paid ads, SEO, websites, creative and social media for real estate developers, startups and eCommerce brands, and measures the work on enquiries and sales.`,
  keyFacts: [
    `Founded in ${business.foundingDate}, based in ${business.address.locality}, ${business.address.city}`,
    `${serviceList.length} services, from Google Ads to branding`,
    `Campaigns planned for ${locationList.length} markets in India and abroad`,
    "Tagline: Marketing That Clicks",
  ],
};

const values = [
  { icon: LineChart, title: "Outcomes over activity", body: "We report on enquiries, bookings and sales. Impressions and clicks are diagnostics, not results." },
  { icon: ShieldCheck, title: "Honest about limits", body: "No guaranteed rankings or revenue. Targets are agreed in writing before work starts." },
  { icon: Layers, title: "One team, every channel", body: "Ads, SEO, web and creative sit together, so the pieces are planned to fit." },
  { icon: Compass, title: "Say it plainly", body: "Reports and advice in plain language, with the reasoning shown, so you can check our work." },
];

const faqs: QA[] = [
  {
    q: "What does Marketix Studio do?",
    a: "We plan and run the marketing that brings a business enquiries: Google and Meta ads, SEO and local SEO, landing pages and websites, branding and creative, and the email and WhatsApp follow-up. Each campaign is measured on enquiries, bookings or sales rather than clicks.",
  },
  {
    q: "Where is Marketix Studio based?",
    a: `Our only office is at ${fullAddress}. We meet Pune clients in person and work remotely with brands across India and abroad.`,
  },
  {
    q: "How do you charge?",
    a: "Fees depend on the channels and work in scope, so we quote after a free growth audit. Your advertising budget is separate and paid directly to Google, Meta or the platform you use.",
  },
  {
    q: "Do you guarantee results?",
    a: "No. Outcomes depend on your market, offer, budget and how your team follows up on enquiries, so any guarantee would be a guess. We agree clear targets before starting and report honestly against them.",
  },
  {
    q: "Can you work alongside our in-house team?",
    a: "Yes. A common setup is that we run paid media and measurement while your team owns brand and content, with shared reporting so everyone sees the same numbers.",
  },
];

export default function Page() {
  const glance = [
    { value: business.foundingDate, label: "Founded", href: undefined },
    { value: String(team.length), label: "People on the team", href: "/team" },
    { value: String(serviceList.length), label: "Services", href: "/services" },
    { value: String(industryList.length), label: "Industries", href: "/industries" },
    { value: String(locationList.length), label: "Markets", href: "/locations" },
    { value: String(clientLogos.length), label: "Client brands shown here", href: "/work" },
  ];

  return (
    <>
      <JsonLd
        data={graph([
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path },
          ]),
          localBusinessSchema({
            name: business.legalName,
            description: business.description,
            path,
            areaServed: ["Pune", "Mumbai", "Bangalore", "Delhi NCR", "Hyderabad"],
          }),
          answerSchema({ ...answer, path }),
          faqSchema(faqs),
        ])}
      />

      <IndexHero
        label="About Marketix Studio"
        title="A performance marketing agency that shows its"
        accent="working"
        lede={`We have worked from Balewadi High Street, Pune since ${business.foundingDate}, planning and running ads, SEO, websites and creative for real estate, startups and eCommerce brands.`}
        secondary={{ label: "Meet the team", href: "/team" }}
      />

      {/* 1 · The studio at a glance: the page's centrepiece. Every number is counted from content. */}
      <section aria-label="The studio at a glance" className="pb-24">
        <div className="container-edge">
          <ul className="grid grid-cols-2 gap-3 md:grid-cols-3">
            {glance.map((g) => {
              const inner = (
                <>
                  <span className="block font-display text-[clamp(2.5rem,5vw,4rem)] font-bold leading-none tracking-[-0.01em] text-ink">
                    {g.value}
                  </span>
                  <span className="mt-3 flex items-center gap-2 text-sm font-semibold text-muted">
                    {g.label}
                    {g.href && (
                      <ArrowRight className="h-4 w-4 text-accent transition-transform duration-200 group-hover:translate-x-1" strokeWidth={2} aria-hidden="true" />
                    )}
                  </span>
                </>
              );
              return (
                <li
                  key={g.label}
                  className={`mx-card group relative p-6 transition-colors sm:p-8 ${g.href ? "hover:border-accent/60 focus-within:border-accent/60" : ""}`}
                >
                  {g.href ? (
                    <Link href={g.href} className="after:absolute after:inset-0 after:rounded-[24px] after:content-['']">
                      {inner}
                    </Link>
                  ) : (
                    inner
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* 2 · The answer, for people and for AI search. */}
      <div className="container-edge pb-24">
        <AnswerCard block={answer} id="answer" />
      </div>

      {/* 3 · How we work. */}
      <section className="border-t border-line py-24 sm:py-28">
        <div className="container-edge">
          <h2 className="font-display text-h2 font-bold leading-[1.18] tracking-[-0.01em] text-ink">What we believe</h2>
          <ul className="mt-12 grid grid-cols-[minmax(0,1fr)] gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <li key={v.title} className="mx-card p-6">
                <v.icon className="h-6 w-6 text-accent" strokeWidth={1.8} aria-hidden="true" />
                <p className="mt-4 font-display text-lg font-bold text-ink">{v.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{v.body}</p>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <TextLink href="/approach">How an engagement runs</TextLink>
          </div>
        </div>
      </section>

      {/* 4 · The people. */}
      <section className="border-t border-line py-24 sm:py-28">
        <div className="container-edge grid grid-cols-[minmax(0,1fr)] items-center gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <div>
            <h2 className="max-w-[14ch] font-display text-h2 font-bold leading-[1.18] tracking-[-0.01em] text-ink">
              The team behind the work
            </h2>
            <p className="mt-5 max-w-[44ch] text-[1.0625rem] leading-relaxed text-muted">
              Strategy, ads, SEO, creative, social and client success, from one office in Pune.
            </p>
            <div className="mt-8 flex flex-col items-start gap-4">
              <TextLink href="/team">Meet the team</TextLink>
              <TextLink href="/careers">Careers</TextLink>
              <TextLink href="/partners">Partner with us</TextLink>
            </div>
          </div>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {team.map((m) => (
              <li key={m.slug} className="mx-card flex items-center gap-3 p-4">
                {m.image ? (
                  <Image src={m.image} alt="" width={44} height={44} className="h-11 w-11 shrink-0 rounded-full border border-line object-cover" />
                ) : (
                  <span aria-hidden="true" className="mx-todo inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-bold">
                    {m.name.split(" ").map((w) => w[0]).join("")}
                  </span>
                )}
                <span className="min-w-0">
                  <span className="block truncate text-sm font-semibold text-ink">{m.name}</span>
                  <span className="block truncate text-xs text-muted">{m.role}</span>
                </span>
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
              Questions people ask first
            </h2>
            <div className="mt-8 flex flex-col items-start gap-5">
              <Cta href="/growth-audit">Get a free growth audit</Cta>
              <TextLink href="/contact">Contact us</TextLink>
            </div>
          </div>
          <FaqList items={faqs} />
        </div>
      </section>
    </>
  );
}
