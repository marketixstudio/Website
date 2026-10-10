/* Hallmark · genre: atmospheric · template: pricing · centrepiece: ScopeBuilder (pick services, send the scope)
 * honest: pass (46: the old tiers, prices, minimum spends and "no setup fee" were invented and are removed;
 * the only public price is the ₹99 toolkit) · eyebrows: none
 */
import { focusKeyword, pageSource, sentenceCase } from "@/lib/focus-keywords";
import { GlossIcon } from "@/components/home-v2/gloss-icon";
import { Eyebrow } from "@/components/ui/section-heading";
import type { Metadata } from "next";
import { Layers, MapPin, Megaphone, PenTool, Search } from "lucide-react";
import { JsonLd } from "@/components/seo/json-ld";
import { ScopeBuilder, type ScopeOption } from "@/components/services/scope-builder";
import { IndexHero } from "@/components/v2/index-hero";
import { AnswerCard, FaqList, TextLink } from "@/components/v2/primitives";
import { products } from "@/content/products-catalog";
import { services } from "@/content/services";
import type { AnswerBlock, QA } from "@/lib/content-types";
import { primaryNav } from "@/lib/nav";
import { buildMetadata } from "@/lib/seo";
import { business } from "@/lib/site-config";
import { answerSchema, breadcrumbSchema, faqSchema, graph } from "@/lib/structured-data";

const path = "/pricing";
const toolkit = products["gmb-toolkit"];

export const metadata: Metadata = buildMetadata({
  title: "Digital Marketing Agency Pricing: How We Quote",
  description:
    "Digital marketing agency pricing at Marketix Studio: quoted on scope after a free audit, with ad spend paid directly to the platforms. Build your scope online.",
  path,
});

const answer: AnswerBlock = {
  question: "How much does a digital marketing agency cost?",
  answer:
    "It depends on scope: which channels you need, how many campaigns and markets, how much creative, and whether SEO or web work is included. Advertising budget is separate and paid directly to Google, Meta or the platform. Marketix Studio quotes after a free growth audit, so the fee matches the work your business actually needs.",
  keyFacts: [
    "Fees are quoted on scope, after a free audit",
    "Ad spend is paid directly to the platforms",
    "Single services and one-off projects are both possible",
    ...(toolkit.onSale ? [`The Google Maps toolkit costs ₹${toolkit.priceInr}`] : []),
  ],
};

const drivers = [
  { icon: Megaphone, title: "Channels", body: "Google, Meta, or both, and how many campaigns run in each." },
  { icon: MapPin, title: "Markets", body: "One city, several cities, or brands selling abroad." },
  { icon: PenTool, title: "Creative", body: "How many new ads, posts or videos each month." },
  { icon: Search, title: "SEO and content", body: "Technical fixes, local SEO, and how much content is written." },
  { icon: Layers, title: "Build work", body: "Websites, landing pages or brand identity, usually as projects." },
];

const faqs: QA[] = [
  {
    q: "Why don't you publish package prices?",
    a: "Because two businesses asking for 'Google Ads' can need very different amounts of work. A quote based on your actual scope is fairer than a package that makes you pay for things you don't need.",
  },
  {
    q: "Is ad spend included?",
    a: "No. Advertising budget is paid from your own account directly to Google, Meta or the platform you use.",
  },
  {
    q: "Do you do one-off projects?",
    a: "Yes. Websites, landing pages, brand identity and SEO audits can all be done as standalone projects.",
  },
  {
    q: "How do I get a quote?",
    a: `Build your scope on this page and send it on WhatsApp, request a free growth audit, or call ${business.phoneDisplay}.`,
  },
  {
    q: "Is the growth audit really free?",
    a: "Yes. We review your ads, website, Google Business Profile, tracking and follow-up and tell you plainly what to fix first. There is no obligation to work with us afterwards.",
  },
  {
    q: "What does the cost of digital marketing depend on?",
    a: "Mainly the number of channels, campaigns and markets, how much creative and content is needed, and whether a website or landing pages are part of the work. Ad budget is separate and paid straight to Google, Meta or the platform.",
  },
  {
    q: "What affects the cost of a website?",
    a: "The number of pages and templates, features such as booking or payments, who writes the content, and any integrations with your CRM or WhatsApp. A focused landing page costs far less than a full website with many sections.",
  },
  {
    q: "Can I start small and add channels later?",
    a: "Yes. Many clients start with one channel, such as Google Ads or local SEO, and add others once tracking shows what works. The plan is built so each new channel fits the one before it.",
  },
  {
    q: "How is a monthly marketing retainer different from a project fee?",
    a: "A retainer covers ongoing work such as managing ads, SEO or social media month after month, and is reviewed against results. A project fee covers a defined piece of work, such as a website or a landing page, delivered once.",
  },
];

export default function Page() {
  const groups = primaryNav.find((i) => i.label === "Services")?.groups ?? [];
  const options: ScopeOption[] = groups.flatMap((g) =>
    g.items.map((item) => {
      const slug = item.href.replace("/services/", "");
      return { slug, label: item.label, group: g.title, covers: (services[slug]?.included ?? []).slice(0, 3) };
    }),
  );

  return (
    <>
      <JsonLd
        data={graph([
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Pricing", path },
          ]),
          answerSchema({ ...answer, path }),
          faqSchema(faqs),
        ])}
      />

      <IndexHero
        keyword={focusKeyword(path)}
        crumbs={[ { name: "Home", path: "/" }, { name: "Pricing", path }, ]}
        label="Pricing, Marketix Studio Pune"
        title="Priced on the work you"
        accent="actually need"
        lede="No packages stuffed with extras. Tell us what you need, we quote the scope, and your ad budget goes straight to the platforms."
        cta={{ label: "Build your scope", href: "#scope" }}
        secondary={{ label: "Get a free growth audit", href: "/growth-audit" }}
      />

      {/* 1 · The scope builder: the page's centrepiece. */}
      <section id="scope" aria-label="Build your scope" className="scroll-mt-28 pb-24">
        <div className="container-edge">
          <ScopeBuilder options={options} whatsapp={business.whatsapp} />
        </div>
      </section>

      {/* 2 · The answer, for people and for AI search. */}
      <div className="container-edge pb-24">
        <AnswerCard block={answer} id="answer" source={pageSource(path)} />
      </div>

      {/* 3 · What shapes a quote. */}
      <section className="py-24 sm:py-28">
        <div className="container-edge">
          <Eyebrow>How we price</Eyebrow>
          <h2 className="mt-6 font-display text-h2 font-bold leading-[1.18] tracking-[-0.01em] text-ink">What shapes a quote</h2>
          <ul className="mt-12 grid grid-cols-[minmax(0,1fr)] gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {drivers.map((d) => (
              <li key={d.title} className="mx-card p-6">
                <GlossIcon icon={d.icon} size="sm" />
                <p className="mt-4 font-display text-lg font-bold text-ink">{d.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{d.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4 · The one fixed price we have (only while the toolkit is on sale). */}
      {toolkit.onSale && (
      <section className="py-24 sm:py-28">
        <div className="container-edge">
          <div className="mx-card grid grid-cols-[minmax(0,1fr)] items-center gap-8 p-8 sm:p-10 lg:grid-cols-[minmax(0,1fr)_auto]">
            <div>
              <h2 className="font-display text-2xl font-bold text-ink">Prefer to do it yourself?</h2>
              <p className="mt-3 max-w-[58ch] text-[0.9375rem] leading-relaxed text-muted">{toolkit.shortDescription}</p>
            </div>
            <div className="flex items-center gap-6">
              <p className="whitespace-nowrap text-ink">
                <span className="font-display text-3xl font-bold">₹{toolkit.priceInr}</span>
                {toolkit.compareAtInr && <span className="ml-2 text-sm text-muted line-through">₹{toolkit.compareAtInr}</span>}
              </p>
              <TextLink href="/gmb-toolkit">See the toolkit</TextLink>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* 5 · Questions. */}
      <section className="py-24 sm:py-28">
        <div className="container-edge grid grid-cols-[minmax(0,1fr)] gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <div>
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="mt-6 font-display text-h2 font-bold leading-[1.18] tracking-[-0.01em] text-ink">{`${sentenceCase(focusKeyword(path) ?? "")}: common questions`}</h2>
            <div className="mt-6">
              <TextLink href="/services">See all services</TextLink>
            </div>
          </div>
          <FaqList items={faqs} />
        </div>
      </section>
    </>
  );
}
