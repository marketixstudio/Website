/* Hallmark · genre: atmospheric · template: case study · centrepiece: StepRail + the live client page in a figure
 * honest: pass (46: TODO results render as "to confirm" blocks, never as numbers) · chrome: pass (47: real page, no drawn device)
 * testimonials: yes, here only (design.md) · eyebrows: none
 */
import { Eyebrow } from "@/components/ui/section-heading";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, Clock } from "lucide-react";
import { JsonLd } from "@/components/seo/json-ld";
import { StepRail } from "@/components/v2/step-rail";
import { Cta, TextLink } from "@/components/v2/primitives";
import { industries } from "@/content/industries";
import { locations } from "@/content/locations";
import { testimonials } from "@/content/testimonials";
import { caseStudies, publishedCaseStudies } from "@/content/work";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, caseStudySchema, graph } from "@/lib/structured-data";
import { Breadcrumbs } from "@/components/v2/breadcrumbs";

/** Real, working client pages that can be shown as proof (rendered inert). */
const livePreview: Record<string, { src: string; title: string; caption: string }> = {
  "jayganesh-review-system": {
    src: "/r/jayganesh",
    title: "Jay Ganesh Car Accessories review page, live",
    caption: "The live page Jay Ganesh's customers use. Shown for reference and not clickable here.",
  },
};

const isTodo = (v?: string) => !v || v.trim().toUpperCase().startsWith("TODO");

export function generateStaticParams() {
  return publishedCaseStudies.map((study) => ({ slug: study.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const study = caseStudies[params.slug];
  if (!study) return {};
  return buildMetadata({
    title: study.metaTitle,
    description: study.metaDescription,
    path: `/work/${study.slug}`,
    robots: study.draft ? { index: false, follow: false } : undefined,
  });
}

export default function Page({ params }: { params: { slug: string } }) {
  const study = caseStudies[params.slug];
  if (!study || study.draft) notFound();

  const path = `/work/${study.slug}`;
  const testimonial = study.testimonialId ? testimonials.find((t) => t.id === study.testimonialId) : undefined;
  const preview = livePreview[study.slug];
  const industry = industries[study.industrySlug];
  const location = study.locationSlug ? locations[study.locationSlug] : undefined;
  const related = publishedCaseStudies.filter((s) => s.slug !== study.slug).slice(0, 2);

  return (
    <>
      <JsonLd
        data={graph([
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Case Studies", path: "/work" },
            { name: study.client, path },
          ]),
          caseStudySchema({
            name: study.headline,
            description: study.metaDescription,
            path,
            client: study.anonymised ? undefined : study.client,
            image: study.image,
          }),
        ])}
      />

      {/* 1 · Hero: who, what changed, in one line. */}
      <section className="mx-pool pb-20 pt-36 sm:pt-44">
        <div className="container-edge">
          <Breadcrumbs items={[ { name: "Home", path: "/" }, { name: "Case Studies", path: "/work" }, { name: study.client, path }, ]} className="mb-8" />
          <div className="flex items-center gap-4">
            {study.logo && (
              <Image
                src={study.logo}
                alt={study.client}
                width={56}
                height={56}
                priority
                className="h-14 w-14 rounded-full border border-line object-cover"
              />
            )}
            <p className="text-base font-semibold text-ink-2 sm:text-lg">
              {study.anonymised ? study.client : `Case study: ${study.client}`}
              <span className="block text-sm font-medium text-muted">
                {[study.industry, study.locationLabel].filter(Boolean).join(", ")}
              </span>
            </p>
          </div>
          <h1 className="mx-display mt-8 max-w-[20ch] font-display text-[clamp(2.4rem,4.6vw+0.5rem,4.6rem)] font-bold leading-[1.14] tracking-[-0.01em] text-ink">
            {study.headline} {study.highlight && <span className="text-ink-hi">{study.highlight}</span>}
          </h1>
          <p className="mt-7 max-w-[60ch] text-[1.0625rem] leading-relaxed text-muted sm:text-lg">{study.summary}</p>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
            <Cta href="/growth-audit">Get a free growth audit</Cta>
            <TextLink href="#results">See the results</TextLink>
          </div>
        </div>
      </section>

      {/* 2 · Results, honestly: unconfirmed numbers are labelled, never guessed. */}
      <section id="results" className="scroll-mt-28 pb-24">
        <div className="container-edge">
          <ul className="grid grid-cols-[minmax(0,1fr)] gap-3 md:grid-cols-3">
            {study.results.map((r) =>
              isTodo(r.value) ? (
                <li key={r.label} className="mx-todo flex flex-col justify-center p-6">
                  <p className="font-semibold text-ink-2">{r.label}</p>
                  <p className="mt-1 text-sm">Result to confirm with the client before publishing.</p>
                </li>
              ) : (
                <li key={r.label} className="mx-card p-6">
                  <p className="font-display text-4xl font-bold text-accent">{r.value}</p>
                  <p className="mt-2 font-semibold text-ink">{r.label}</p>
                  {r.note && <p className="mt-1 text-sm leading-relaxed text-muted">{r.note}</p>}
                </li>
              ),
            )}
          </ul>
          <p className="mt-4 flex items-center gap-2 text-sm text-muted">
            <Clock className="h-4 w-4 text-accent" strokeWidth={2} aria-hidden="true" />
            {isTodo(study.period) ? "Measurement period to be confirmed." : `Measured over ${study.period}.`}
          </p>
        </div>
      </section>

      {/* 3 · Where they started. */}
      <section className="py-24 sm:py-28">
        <div className="container-edge grid grid-cols-[minmax(0,1fr)] gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div>
            <Eyebrow>The challenge</Eyebrow>
            <h2 className="mt-6 max-w-[18ch] font-display text-h2 font-bold leading-[1.18] tracking-[-0.01em] text-ink">
              {study.challenge.title}
            </h2>
            <p className="mt-6 max-w-[54ch] text-[1.0625rem] leading-relaxed text-muted">{study.challenge.body}</p>
          </div>
          <ul className="grid grid-cols-[minmax(0,1fr)] gap-3 sm:grid-cols-2">
            {study.challenge.points.map((point) => (
              <li key={point} className="mx-card p-6 text-[0.9375rem] leading-relaxed text-ink-2">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4 · What we did: the centrepiece, beside the real thing where there is one. */}
      <section className="py-24 sm:py-28">
        <div className="container-edge">
          <Eyebrow>What we did</Eyebrow>
          <h2 className="mb-12 mt-6 font-display text-h2 font-bold leading-[1.18] tracking-[-0.01em] text-ink">What we did</h2>
          {preview ? (
            <div className="grid grid-cols-[minmax(0,1fr)] items-start gap-12 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)]">
              <ol className="grid grid-cols-[minmax(0,1fr)] gap-3">
                {study.approach.map((step, i) => (
                  <li key={step.title} className="mx-card flex gap-5 p-6">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent text-sm font-bold text-accent">
                      {i + 1}
                    </span>
                    <span>
                      <span className="block font-display text-lg font-bold text-ink">{step.title}</span>
                      <span className="mt-1.5 block text-[0.9375rem] leading-relaxed text-muted">{step.body}</span>
                    </span>
                  </li>
                ))}
              </ol>
              <figure className="mx-auto w-full max-w-[22rem] lg:sticky lg:top-28">
                {/* The real page, not a mockup. Inert so visitors can't start a review for a business they haven't used. */}
                <div
                  {...({ inert: "" } as object)}
                  className="relative aspect-[9/17] overflow-hidden rounded-[24px] border border-line bg-ink"
                >
                  <iframe
                    src={preview.src}
                    title={preview.title}
                    loading="lazy"
                    scrolling="no"
                    tabIndex={-1}
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 h-full w-full select-none"
                  />
                </div>
                <figcaption className="mt-4 text-sm leading-relaxed text-muted">{preview.caption}</figcaption>
              </figure>
            </div>
          ) : (
            <StepRail steps={study.approach} />
          )}
        </div>
      </section>

      {/* 5 · The longer story. */}
      {study.detail && study.detail.length > 0 && (
        <section className="py-24 sm:py-28">
          <div className="container-edge">
            <div className="mx-auto max-w-[68ch] space-y-14">
              {study.detail.map((block) => (
                <div key={block.heading}>
                  <h2 className="font-display text-3xl font-bold leading-[1.15] tracking-[-0.01em] text-ink">{block.heading}</h2>
                  {block.paragraphs.map((para) => (
                    <p key={para.slice(0, 40)} className="mt-5 text-[1.0625rem] leading-[1.75] text-ink-2">
                      {para}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6 · In the client's words. */}
      {testimonial && (
        <section className="py-24 sm:py-28">
          <div className="container-edge">
            <figure className="mx-card mx-auto max-w-[62rem] p-8 sm:p-12">
              <blockquote className="font-display text-[clamp(1.5rem,2.2vw+0.6rem,2.4rem)] font-bold leading-[1.25] tracking-[-0.01em] text-ink">
                <p>&ldquo;{testimonial.quote}&rdquo;</p>
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4">
                {testimonial.image && (
                  <Image
                    src={testimonial.image}
                    alt=""
                    width={52}
                    height={52}
                    className="rounded-full border border-line object-cover"
                    style={{ width: 52, height: 52 }}
                  />
                )}
                <span>
                  <span className="block font-semibold text-ink">{testimonial.author}</span>
                  <span className="block text-sm text-muted">
                    {testimonial.role}, {testimonial.company}
                  </span>
                </span>
              </figcaption>
            </figure>
          </div>
        </section>
      )}

      {/* 7 · Services used, and where to go next. */}
      <section className="py-24 sm:py-28">
        <div className="container-edge grid grid-cols-[minmax(0,1fr)] gap-5 lg:grid-cols-2">
          <div className="mx-card p-8">
            <h2 className="font-display text-2xl font-bold text-ink">Services used</h2>
            <ul className="mt-6 grid grid-cols-[minmax(0,1fr)] gap-2">
              {study.services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="mx-row pl-4">
                    <Check className="h-4 w-4 shrink-0 text-accent" strokeWidth={2.5} aria-hidden="true" />
                    <span className="min-w-0 flex-1 text-balance text-[0.9375rem] font-semibold leading-snug text-ink">{s.label}</span>
                    <span className="mx-row-go" aria-hidden="true">
                      <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mx-card p-8">
            <h2 className="font-display text-2xl font-bold text-ink">Related</h2>
            <ul className="mt-6 space-y-3">
              {industry && (
                <li>
                  <TextLink href={`/industries/${industry.slug}`}>{industry.title}</TextLink>
                </li>
              )}
              {location && (
                <li>
                  <TextLink href={`/locations/${location.slug}`}>{`Marketing in ${location.area}`}</TextLink>
                </li>
              )}
              {related.map((r) => (
                <li key={r.slug}>
                  <TextLink href={`/work/${r.slug}`}>{r.headline}</TextLink>
                </li>
              ))}
              <li>
                <TextLink href="/work">All case studies</TextLink>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 8 · Next step. */}
      <section className="py-24 sm:py-28">
        <div className="container-edge flex flex-col items-start gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Eyebrow>Work with us</Eyebrow>
            <h2 className="mt-6 max-w-[20ch] font-display text-h2 font-bold leading-[1.18] tracking-[-0.01em] text-ink">
              Want the same kind of result for your business?
            </h2>
          </div>
          <Cta href="/growth-audit">Get a free growth audit</Cta>
        </div>
      </section>
    </>
  );
}
