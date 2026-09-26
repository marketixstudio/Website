/* Hallmark · genre: atmospheric · template: index · centrepiece: featured case study card with real client proof
 * honest: pass (46: one published study, shown as one; client quotes are real and approved)
 * testimonials: allowed here (the case-study hub) · eyebrows: none
 */
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { JsonLd } from "@/components/seo/json-ld";
import { Cta, TextLink } from "@/components/v2/primitives";
import { clientLogos, testimonials } from "@/content/testimonials";
import { publishedCaseStudies, workOverview } from "@/content/work";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, collectionSchema, graph, reviewSchema } from "@/lib/structured-data";

const path = "/work";

export const metadata: Metadata = buildMetadata({
  title: workOverview.metaTitle,
  description: workOverview.metaDescription,
  path,
});

export default function Page() {
  const [lead, ...rest] = publishedCaseStudies;
  // Quotes from clients whose work isn't yet written up as a full study.
  const studied = new Set(publishedCaseStudies.map((s) => s.testimonialId).filter(Boolean));
  const quotes = testimonials.filter((t) => !studied.has(t.id));

  return (
    <>
      <JsonLd
        data={graph([
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Case Studies", path },
          ]),
          collectionSchema({
            name: "Marketix Studio case studies",
            description: workOverview.metaDescription,
            path,
            items: publishedCaseStudies.map((s) => ({ name: s.headline, path: `/work/${s.slug}` })),
          }),
          ...reviewSchema(quotes),
        ])}
      />

      {/* 1 · Hero. */}
      <section className="mx-pool pb-16 pt-36 sm:pt-44">
        <div className="container-edge grid grid-cols-[minmax(0,1fr)] gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-end">
          <div>
            <p className="text-base font-semibold text-ink-2 sm:text-lg">Case studies, Marketix Studio Pune</p>
            <h1 className="mx-display mt-5 max-w-[17ch] font-display text-display text-ink">
              {workOverview.title} <span className="text-ink-hi">{workOverview.highlight}</span>
            </h1>
          </div>
          <div>
            <p className="max-w-[46ch] text-[1.0625rem] leading-relaxed text-muted sm:text-lg">{workOverview.subtitle}</p>
            <div className="mt-8">
              <Cta href="/growth-audit">Get a free growth audit</Cta>
            </div>
          </div>
        </div>
      </section>

      {/* 2 · The lead study: the page's centrepiece. */}
      {lead && (
        <section aria-label="Featured case study" className="pb-24">
          <div className="container-edge">
            <article className="mx-card group relative grid grid-cols-[minmax(0,1fr)] gap-10 overflow-clip [overflow-clip-margin:24px] p-8 transition-colors hover:border-accent/60 sm:p-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-center">
              <div>
                <div className="flex items-center gap-3">
                  {lead.logo && (
                    <Image src={lead.logo} alt="" width={48} height={48} className="h-12 w-12 rounded-full border border-line object-cover" />
                  )}
                  <p className="text-sm font-semibold text-muted">
                    {lead.client}
                    <span className="block font-medium">{[lead.industry, lead.locationLabel].filter(Boolean).join(", ")}</span>
                  </p>
                </div>
                <h2 className="mt-6 max-w-[22ch] font-display text-3xl font-bold leading-[1.2] tracking-[-0.01em] text-ink sm:text-4xl">
                  <Link href={`/work/${lead.slug}`} className="after:absolute after:inset-0 after:rounded-[24px] after:content-['']">
                    {lead.headline} {lead.highlight && <span className="text-ink-hi">{lead.highlight}</span>}
                  </Link>
                </h2>
                <p className="mt-5 max-w-[54ch] text-[1.0625rem] leading-relaxed text-muted">{lead.summary}</p>
                <span className="mx-link mt-8 text-[0.9375rem] font-semibold">
                  Read the case study
                  <ArrowRight className="h-4 w-4" strokeWidth={2.25} aria-hidden="true" />
                </span>
              </div>
              <ol className="grid grid-cols-[minmax(0,1fr)] gap-2">
                {lead.approach.map((step, i) => (
                  <li key={step.title} className="flex items-center gap-4 rounded-2xl border border-line bg-bg/50 p-4">
                    <span
                      aria-hidden="true"
                      className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent/60 text-sm font-bold text-accent"
                    >
                      {i + 1}
                    </span>
                    <span className="text-[0.9375rem] font-semibold text-ink">{step.title}</span>
                  </li>
                ))}
              </ol>
            </article>

            {rest.length > 0 && (
              <ul className="mt-5 grid grid-cols-[minmax(0,1fr)] gap-5 md:grid-cols-2">
                {rest.map((s) => (
                  <li key={s.slug} className="mx-card group relative p-8 transition-colors hover:border-accent/60">
                    <p className="text-sm font-semibold text-muted">{[s.industry, s.locationLabel].filter(Boolean).join(", ")}</p>
                    <h2 className="mt-3 font-display text-2xl font-bold leading-[1.15] text-ink">
                      <Link href={`/work/${s.slug}`} className="after:absolute after:inset-0 after:rounded-[24px] after:content-['']">
                        {s.headline}
                      </Link>
                    </h2>
                    <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">{s.summary}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      )}

      {/* 3 · Clients in their own words. */}
      {quotes.length > 0 && (
        <section className="border-t border-line py-24 sm:py-28">
          <div className="container-edge">
            <h2 className="font-display text-h2 font-bold leading-[1.18] tracking-[-0.01em] text-ink">In our clients&apos; words</h2>
            <ul className="mt-12 grid grid-cols-[minmax(0,1fr)] gap-5 md:grid-cols-2 xl:grid-cols-3">
              {quotes.map((t) => (
                <li key={t.id}>
                  <figure className="mx-card flex h-full flex-col p-7 transition-colors hover:border-accent/50">
                    {t.rating && (
                      <p className="flex gap-1" aria-label={`${t.rating} out of 5`}>
                        {Array.from({ length: t.rating }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-[#F5B301] text-[#F5B301]" strokeWidth={1.5} aria-hidden="true" />
                        ))}
                      </p>
                    )}
                    <blockquote className="mt-5 flex-1 text-[1.0625rem] leading-relaxed text-ink-2">
                      <p>&ldquo;{t.quote}&rdquo;</p>
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                      {t.image && (
                        <Image src={t.image} alt="" width={44} height={44} className="h-11 w-11 rounded-full border border-line object-cover" />
                      )}
                      <span>
                        <span className="block font-semibold text-ink">{t.company}</span>
                        <span className="block text-sm text-muted">
                          {t.role}
                          {t.industry ? `, ${t.industry}` : ""}
                        </span>
                      </span>
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* 4 · Everyone we've worked with. */}
      <section className="border-t border-line py-20">
        <div className="container-edge">
          <h2 className="text-base font-semibold text-ink-2">Brands we&apos;ve worked with</h2>
          <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {clientLogos.map((logo) => (
              <li key={logo.name} className="flex h-28 items-center justify-center rounded-2xl border border-line bg-card-2/60 px-5" title={logo.name}>
                <Image src={logo.src} alt={logo.name} width={200} height={96} className="max-h-20 w-auto object-contain" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5 · Next step. */}
      <section className="border-t border-line py-24 sm:py-28">
        <div className="container-edge flex flex-col items-start gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="max-w-[20ch] font-display text-h2 font-bold leading-[1.18] tracking-[-0.01em] text-ink">
              More write-ups are on the way
            </h2>
            <p className="mt-5 max-w-[52ch] text-[1.0625rem] leading-relaxed text-muted">
              We publish a case study only once the client has approved the numbers. Meanwhile, the free audit shows what
              we would change for you.
            </p>
          </div>
          <div className="flex flex-col items-start gap-5">
            <Cta href="/growth-audit">Get a free growth audit</Cta>
            <TextLink href="/services">Our services</TextLink>
          </div>
        </div>
      </section>
    </>
  );
}
