/* Hallmark · genre: atmospheric · template: service page · hero: shared ServiceHero (design.md)
 * centrepiece: StepRail (the page's one entrance) · honest: pass (46: invented stats removed from content/services.ts)
 * testimonials: none (design.md: client quotes live on case studies) · eyebrows: none
 */
import { focusKeyword, pageSource, sentenceCase } from "@/lib/focus-keywords";
import Link from "next/link";
import { Eyebrow } from "@/components/ui/section-heading";
import { AlertTriangle, ArrowRight, Check } from "lucide-react";
import { JsonLd } from "@/components/seo/json-ld";
import { FillHeading } from "@/components/v2/fill-heading";
import { ServiceHero, type ServiceHeroContent } from "@/components/v2/service-hero";
import { ProcessPanel, StepRail } from "@/components/v2/step-rail";
import { AnswerCard, Cta, FaqList, TextLink, serviceHref } from "@/components/v2/primitives";
import { services } from "@/content/services";
import type { ServiceContent } from "@/lib/content-types";
import { answerSchema, breadcrumbSchema, faqSchema, graph, serviceSchema } from "@/lib/structured-data";

type Link2 = { label: string; href: string };

const ind = {
  realEstate: { label: "Real estate", href: "/industries/real-estate" },
  ecommerce: { label: "eCommerce and D2C", href: "/industries/ecommerce-d2c" },
  saas: { label: "SaaS and startups", href: "/industries/saas-startups" },
  healthcare: { label: "Healthcare", href: "/industries/healthcare" },
  education: { label: "Education", href: "/industries/education" },
  hospitality: { label: "Hospitality", href: "/industries/hospitality" },
  interiors: { label: "Interiors and architecture", href: "/industries/interior-architecture" },
  automotive: { label: "Automotive", href: "/industries/automotive" },
} satisfies Record<string, Link2>;

/** Per-service framing: a promise for the H1, who it suits, and where to go next. */
const framing: Record<
  string,
  { title: ServiceHeroContent["title"]; bestFor: Link2[]; related: string[]; category: string }
> = {
  "performance-marketing": {
    title: { before: "Paid media measured on", accent: "revenue" },
    bestFor: [ind.realEstate, ind.ecommerce, ind.saas],
    related: ["google-ads-ppc", "meta-ads", "landing-pages-funnels"],
    category: "Performance marketing",
  },
  "meta-ads": {
    title: { before: "Facebook and Instagram ads that", accent: "convert" },
    bestFor: [ind.ecommerce, ind.realEstate, ind.education],
    related: ["performance-marketing", "social-media-marketing", "landing-pages-funnels"],
    category: "Social media advertising",
  },
  "seo-services": {
    title: { before: "SEO for the searches that bring", accent: "customers" },
    bestFor: [ind.saas, ind.ecommerce, ind.healthcare],
    related: ["local-seo-gmb", "content-marketing", "web-design-development"],
    category: "Search engine optimisation",
  },
  "content-marketing": {
    title: { before: "Content that answers your buyers'", accent: "questions" },
    bestFor: [ind.saas, ind.education, ind.healthcare],
    related: ["seo-services", "email-marketing-automation", "social-media-marketing"],
    category: "Content marketing",
  },
  "web-design-development": {
    title: { before: "Websites built to turn visits into", accent: "enquiries" },
    bestFor: [ind.realEstate, ind.ecommerce, ind.interiors],
    related: ["landing-pages-funnels", "conversion-rate-optimisation", "branding-design"],
    category: "Web design and development",
  },
  "landing-pages-funnels": {
    title: { before: "Landing pages built around one", accent: "action" },
    bestFor: [ind.realEstate, ind.education, ind.saas],
    related: ["google-ads-ppc", "meta-ads", "conversion-rate-optimisation"],
    category: "Landing page design",
  },
  "branding-design": {
    title: { before: "A brand that looks the same", accent: "everywhere" },
    bestFor: [ind.ecommerce, ind.hospitality, ind.interiors],
    related: ["web-design-development", "social-media-marketing", "content-marketing"],
    category: "Branding and design",
  },
  "social-media-marketing": {
    title: { before: "Social media that keeps your brand", accent: "visible" },
    bestFor: [ind.education, ind.hospitality, ind.ecommerce],
    related: ["meta-ads", "branding-design", "content-marketing"],
    category: "Social media marketing",
  },
  "email-marketing-automation": {
    title: { before: "Automated emails that bring customers", accent: "back" },
    bestFor: [ind.ecommerce, ind.saas, ind.education],
    related: ["whatsapp-marketing", "conversion-rate-optimisation", "content-marketing"],
    category: "Email marketing",
  },
  "whatsapp-marketing": {
    title: { before: "Reach customers where they already", accent: "chat" },
    bestFor: [ind.realEstate, ind.ecommerce, ind.healthcare],
    related: ["email-marketing-automation", "landing-pages-funnels", "meta-ads"],
    category: "WhatsApp marketing",
  },
  "conversion-rate-optimisation": {
    title: { before: "More enquiries from the traffic you", accent: "have" },
    bestFor: [ind.ecommerce, ind.saas, ind.realEstate],
    related: ["landing-pages-funnels", "web-design-development", "google-ads-ppc"],
    category: "Conversion rate optimisation",
  },
};

export function ServiceDetail({ content }: { content: ServiceContent }) {
  const path = `/services/${content.slug}`;
  const f = framing[content.slug] ?? {
    title: { before: "", accent: content.title },
    bestFor: [ind.realEstate, ind.ecommerce, ind.saas],
    related: ["google-ads-ppc", "seo-services", "web-design-development"],
    category: content.title,
  };
  const related = f.related.map((slug) => services[slug]).filter(Boolean);

  const hero: ServiceHeroContent = {
    keyword: focusKeyword(path),
    crumbs: [ { name: "Home", path: "/" }, { name: "Services", path: "/services" }, { name: content.title, path }, ],
    label: `${content.title}, Pune`,
    title: f.title,
    lede: content.subtitle,
    cta: { label: "Get a free growth audit", href: "/growth-audit" },
    secondary: { label: "How it works", href: "#how" },
    included: content.included.slice(0, 5),
    bestFor: f.bestFor,
  };

  return (
    <>
      <JsonLd
        data={graph([
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: content.title, path },
          ]),
          serviceSchema({
            name: content.title,
            description: content.metaDescription,
            path,
            category: f.category,
          }),
          answerSchema({ ...content.answerBlock, path }),
          faqSchema(content.faqs),
        ])}
      />

      <ServiceHero content={hero} />

      {/* 1 · The answer, for people and for AI search. */}
      <div className="container-edge pb-24">
        <AnswerCard block={content.answerBlock} id="answer" source={pageSource(path)} />
      </div>

      {/* 2 · The problem this service fixes. */}
      <section className="py-24 sm:py-32">
        <div className="container-edge grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div>
            <Eyebrow>The problem</Eyebrow>
            <FillHeading className="mt-6 max-w-[18ch] font-display text-h2 font-bold leading-[1.18] tracking-[-0.01em] text-ink">
              {content.problem.title}
            </FillHeading>
            <p className="mt-6 max-w-[50ch] text-[1.0625rem] leading-relaxed text-muted">{content.problem.body}</p>
          </div>
          <ul className="grid grid-cols-[minmax(0,1fr)] gap-3 sm:grid-cols-2">
            {content.problem.points.map((point) => (
              <li key={point} className="mx-card flex gap-4 p-6">
                <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-accent" strokeWidth={1.9} aria-hidden="true" />
                <span className="text-[0.9375rem] leading-relaxed text-ink-2">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3 · How it works: the page's centrepiece. */}
      <ProcessPanel
        id="how"
        title={`How we run ${content.title.toLowerCase().startsWith("seo") ? "SEO" : content.title.replace(/ & /g, " and ")}`}
        intro="A clear path from where you are to where you want to be, built around your goals. No guesswork, no wasted budget."
        aside={<TextLink href="/growth-audit">Get a free strategy call</TextLink>}
      >
        <StepRail steps={content.steps} />
      </ProcessPanel>

      {/* 4 · Everything included, and the platforms we work in. */}
      <section className="py-24 sm:py-28">
        <div className="container-edge grid gap-5 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)]">
          <div className="mx-card p-8 sm:p-10">
            <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">What&apos;s included</h2>
            <ul className="mt-7 grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
              {content.included.map((item) => (
                <li key={item} className="flex gap-3 text-[0.9375rem] leading-snug text-ink-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2.5} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="mx-card p-8">
            <h2 className="font-display text-xl font-bold text-ink">Platforms we work in</h2>
            <ul className="mt-6 flex flex-wrap gap-2">
              {content.tools.map((tool) => (
                <li key={tool} className="rounded-full border border-line px-3.5 py-1.5 text-sm text-ink-2">
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 5 · Where to go next: related services, industries, proof. */}
      <section className="py-24 sm:py-28">
        <div className="container-edge">
          <Eyebrow>Related services</Eyebrow>
          <h2 className="mt-6 font-display text-h2 font-bold leading-[1.18] tracking-[-0.01em] text-ink">
            Works well with
          </h2>
          <ul className="mt-10 grid grid-cols-[minmax(0,1fr)] gap-3 md:grid-cols-3">
            {related.map((r) => (
              <li key={r.slug} className="mx-card group relative p-6 transition-colors hover:border-accent/60 focus-within:border-accent/60">
                <Link
                  href={serviceHref(r.slug)}
                  className="font-display text-lg font-bold text-ink after:absolute after:inset-0 after:rounded-[24px] after:content-['']"
                >
                  {r.title}
                </Link>
                <p className="mt-2 text-sm leading-relaxed text-muted">{r.answerBlock.question}</p>
                <span className="mx-row-go mt-4 ml-0" aria-hidden="true">
                  <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
            {f.bestFor.map((i) => (
              <TextLink key={i.href} href={i.href}>
                {`${i.label} marketing`}
              </TextLink>
            ))}
            <TextLink href="/work">Case studies</TextLink>
          </div>
        </div>
      </section>

      {/* 6 · Questions, with the next step alongside. */}
      <section className="py-24 sm:py-28">
        <div className="container-edge grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <div>
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="mt-6 font-display text-h2 font-bold leading-[1.18] tracking-[-0.01em] text-ink">
              {`${sentenceCase(focusKeyword(path) ?? "")}: questions people ask`}
            </h2>
            <p className="mt-5 max-w-[40ch] text-[0.9375rem] leading-relaxed text-muted">
              Tell us what you sell and where. The free audit shows where enquiries are being lost.
            </p>
            <div className="mt-8 flex flex-col items-start gap-5">
              <Cta href="/growth-audit">Get a free growth audit</Cta>
              <TextLink href="/services">All services</TextLink>
            </div>
          </div>
          <FaqList items={content.faqs} />
        </div>
      </section>
    </>
  );
}
