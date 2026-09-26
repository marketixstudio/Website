/* Hallmark · genre: atmospheric · template: service page · hero: shared ServiceHero (design.md) · body centrepiece: live review page
 * design-system: design.md · designed-as-app · theme: studied-DNA (source: url https://marketixstudio.com)
 * nav: N5 · footer: Ft5 · honest: pass (46) · chrome: pass (47 — live page in a figure, no drawn device) · eyebrows: none
 * testimonials: none on service pages — the Jay Ganesh quote lives on its case study
 */
import type { Metadata } from "next";
import { FileSpreadsheet, MapPin, MessageSquareQuote, Star } from "lucide-react";
import { JsonLd } from "@/components/seo/json-ld";
import { FillHeading } from "@/components/v2/fill-heading";
import { ServiceHero, type ServiceHeroContent } from "@/components/v2/service-hero";
import { AnswerCard, Cta, FaqList, TextLink } from "@/components/v2/primitives";
import { services } from "@/content/services";
import { products } from "@/content/products-catalog";
import { buildMetadata } from "@/lib/seo";
import { answerSchema, breadcrumbSchema, faqSchema, graph, serviceSchema } from "@/lib/structured-data";

const service = services["local-seo-gmb"];
const toolkit = products["gmb-toolkit"];
const path = "/services/local-seo-gmb";

const hero: ServiceHeroContent = {
  label: "Local SEO & Google Business Profile, Pune",
  title: { before: "Get found by the customers searching", accent: "near you" },
  lede: "We optimise your Google Business Profile, keep reviews coming in and clean up your listings everywhere else, so people nearby find you on Google Maps and call, visit or ask for directions.",
  cta: { label: "Get a free local SEO audit", href: "/growth-audit" },
  secondary: { label: "See how reviews get easier", href: "#review-page" },
  included: [
    "Google Business Profile audit and optimisation",
    "A review page that makes reviewing take seconds",
    "Citation and NAP clean-up across directories",
    "Location pages for the areas you serve",
    "Rank tracking area by area",
  ],
  bestFor: [
    { label: "Shops and showrooms" },
    { label: "Clinics", href: "/industries/healthcare" },
    { label: "Restaurants and hotels", href: "/industries/hospitality" },
    { label: "Service businesses" },
  ],
};

export const metadata: Metadata = {
  ...buildMetadata({
    title: "Local SEO & Google Business Profile, Pune",
    description:
      "Local SEO and Google Business Profile management in Pune. Show up in the map pack, collect more reviews and turn nearby searches into enquiries.",
    path,
  }),
};

const workGroups = [
  {
    icon: MapPin,
    title: "Your Google Business Profile",
    body: "The listing is where most local customers decide. We treat it like a shop front.",
    items: [
      "A full audit of the profile, then every field completed properly",
      "Primary and secondary categories, services and attributes chosen for how people search",
      "Google Posts, offers and products kept current so the profile stays active",
    ],
  },
  {
    icon: MessageSquareQuote,
    title: "Reviews",
    body: "A steady flow of recent reviews, asked for at the right moment.",
    items: [
      "A branded review page like the one Jay Ganesh uses",
      "Reply templates for every star rating, including the hard ones",
    ],
  },
  {
    icon: Star,
    title: "Everywhere else you're listed",
    body: "Google checks that you are who and where you say you are.",
    items: [
      "Name, address and phone cleaned up so they match on every directory",
      "Location pages on your website for the areas you serve",
      "Local business schema, and rank tracking area by area",
    ],
  },
];

export default function Page() {
  return (
    <>
      <JsonLd
        data={graph([
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Local SEO & Google Business", path },
          ]),
          serviceSchema({
            name: "Local SEO & Google Business Profile Management",
            description: service.metaDescription,
            path,
            category: "Local SEO",
            areaServed: ["Pune", "Maharashtra", "India"],
          }),
          answerSchema({ ...service.answerBlock, path }),
          faqSchema(service.faqs),
        ])}
      />

      <ServiceHero content={hero} />

      {/* 2 · The answer, early, for people and for AI search. */}
      <div className="container-edge pb-20">
        <AnswerCard block={service.answerBlock} id="answer" />
      </div>

      {/* 3 · The real tool, shown live. */}
      <section id="review-page" className="scroll-mt-28 border-t border-line py-24 sm:py-32">
        <div className="container-edge grid items-center gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div>
            <FillHeading className="font-display text-h2 font-bold leading-[1.18] tracking-[-0.01em] text-ink">
              Happy customers rarely write reviews. We made it take seconds.
            </FillHeading>
            <p className="mt-6 max-w-[58ch] text-[1.0625rem] leading-relaxed text-muted">
              Most satisfied customers would leave a review if it took less effort. Opening Google,
              finding the business and typing on a phone is where it usually stops. So we built Jay
              Ganesh a page that does the fiddly part.
            </p>
            <ol className="mt-10 space-y-6">
              {[
                ["Rate and pick", "The customer taps a star rating and chooses the service they came in for."],
                ["Say a few words", "A line about how it went, in their own words. That's all the typing."],
                ["Edit and post", "They get a readable draft, change anything they like, and post it to Google themselves."],
              ].map(([title, body], i) => (
                <li key={title} className="flex gap-5">
                  <span
                    aria-hidden="true"
                    className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-accent/60 text-sm font-bold text-accent"
                  >
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-ink">{title}</p>
                    <p className="mt-1 text-[0.9375rem] leading-relaxed text-muted">{body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-10 max-w-[58ch] border-l-2 border-accent pl-5 text-[0.9375rem] leading-relaxed text-ink-2">
              Every rating goes to the same Google review link. Nothing filters out unhappy customers
              and nothing is offered in return, which is what keeps it within Google&apos;s rules.
            </p>
            <div className="mt-10">
              <TextLink href="/work/jayganesh-review-system">Read the Jay Ganesh case study</TextLink>
            </div>
          </div>

          <figure className="mx-auto w-full max-w-[22rem]">
            {/* The real page, not a mockup. Made non-interactive so site visitors can't
                start a Google review for a business they haven't used. */}
            <div
              {...({ inert: "" } as object)}
              className="relative aspect-[9/17] overflow-hidden rounded-[24px] border border-line bg-ink"
            >
              <iframe
                src="/r/jayganesh"
                title="Jay Ganesh Car Accessories review page, live"
                loading="lazy"
                scrolling="no"
                tabIndex={-1}
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 h-full w-full select-none"
              />
            </div>
            <figcaption className="mt-4 text-sm leading-relaxed text-muted">
              The live page Jay Ganesh&apos;s customers use. Shown for reference and not clickable here.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* 4 · Scope, in three unequal groups rather than a card grid. */}
      <section className="border-t border-line py-24 sm:py-32">
        <div className="container-edge">
          <FillHeading className="max-w-[18ch] font-display text-h2 font-bold leading-[1.18] tracking-[-0.01em] text-ink">
            What the work involves
          </FillHeading>
          <div className="mt-14 grid gap-5 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
            {(() => {
              const [first, ...rest] = workGroups;
              const renderGroup = (group: (typeof workGroups)[number], large: boolean) => (
                <div key={group.title} className={`mx-card p-8 ${large ? "sm:p-10 lg:row-span-2" : ""}`}>
                  <h3 className="flex items-center gap-3 font-display text-xl font-bold text-ink sm:text-2xl">
                    <group.icon className="h-5 w-5 text-accent" strokeWidth={1.9} aria-hidden="true" />
                    {group.title}
                  </h3>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">{group.body}</p>
                  <ul className={`mt-6 space-y-3 ${large ? "sm:mt-8 sm:space-y-4" : ""}`}>
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-3 text-[0.9375rem] leading-relaxed text-ink-2">
                        <span aria-hidden="true" className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
              return [renderGroup(first, true), ...rest.map((g) => renderGroup(g, false))];
            })()}
          </div>
        </div>
      </section>

      {/* 5 · Do-it-yourself option, from the live toolkit page. */}
      <section className="pb-24">
        <div className="container-edge">
          <div className="mx-card grid gap-8 p-8 sm:p-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
            <div className="flex gap-5">
              <FileSpreadsheet className="mt-1 h-7 w-7 shrink-0 text-accent" strokeWidth={1.6} aria-hidden="true" />
              <div>
                <h2 className="font-display text-2xl font-bold text-ink">Rather do it yourself?</h2>
                <p className="mt-3 max-w-[60ch] text-[0.9375rem] leading-relaxed text-muted">
                  The {toolkit.name} is the same checklist thinking in one Excel file: 12 sheets, 30 post
                  templates and review request scripts in Hindi, English and Marathi.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6 lg:justify-end">
              <p className="whitespace-nowrap text-ink">
                <span className="font-display text-3xl font-bold">₹{toolkit.priceInr}</span>
                {toolkit.compareAtInr && (
                  <span className="ml-2 text-sm text-muted line-through">₹{toolkit.compareAtInr}</span>
                )}
              </p>
              <TextLink href="/gmb-toolkit">See the toolkit</TextLink>
            </div>
          </div>
        </div>
      </section>

      {/* 6 · Questions. */}
      <section className="border-t border-line py-24 sm:py-28">
        <div className="container-edge grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <div>
            <h2 className="font-display text-h2 font-bold leading-[1.18] tracking-[-0.01em] text-ink">
              Questions people ask first
            </h2>
            <p className="mt-5 max-w-[40ch] text-[0.9375rem] leading-relaxed text-muted">
              Anything else, ask us directly. We&apos;re on Balewadi High Street.
            </p>
            <div className="mt-8">
              <Cta href="/contact">Ask a question</Cta>
            </div>
          </div>
          <FaqList items={service.faqs} />
        </div>
      </section>
    </>
  );
}
