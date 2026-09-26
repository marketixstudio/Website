import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { FeatureCards } from "@/components/sections/feature-cards";
import { Steps } from "@/components/sections/steps";
import { Faq } from "@/components/sections/faq";
import { CtaBand } from "@/components/sections/cta-band";
import { Reveal } from "@/components/ui/reveal";
import { JsonLd } from "@/components/seo/json-ld";
import { RoasCalculator, AdBudgetCalculator, UtmBuilder } from "@/components/tools/calculators";
import { tools } from "@/content/tools";
import { buildMetadata } from "@/lib/seo";
import {
  answerSchema,
  breadcrumbSchema,
  faqSchema,
  graph,
  softwareAppSchema,
} from "@/lib/structured-data";

export function generateStaticParams() {
  return Object.keys(tools).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const tool = tools[params.slug];
  if (!tool) return {};
  // Not linked anywhere and kept out of search until the user decides whether tools ship.
  return {
    ...buildMetadata({
      title: tool.metaTitle,
      description: tool.metaDescription,
      path: `/tools/${tool.slug}`,
    }),
    robots: { index: false, follow: false },
  };
}

function Widget({ type }: { type: string }) {
  if (type === "roas") return <RoasCalculator />;
  if (type === "ad-budget") return <AdBudgetCalculator />;
  if (type === "utm") return <UtmBuilder />;
  if (type === "review-demo") {
    return (
      <div className="rounded-xl border border-line bg-card p-8 text-center">
        <h3 className="font-display text-h3 text-ink">See it running live</h3>
        <p className="mx-auto mt-3 max-w-lg font-sans text-sm leading-relaxed text-muted">
          One of our clients uses this on their shop counter. Open their page to see
          exactly what your customers would experience.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/r/jayganesh" className="btn-primary">
            View a live example
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </Link>
          <Link href="/contact" className="btn-secondary">
            Get one for my business
          </Link>
        </div>
      </div>
    );
  }
  return null;
}

export default function Page({ params }: { params: { slug: string } }) {
  const tool = tools[params.slug];
  if (!tool) notFound();

  const path = `/tools/${tool.slug}`;

  return (
    <>
      <JsonLd
        data={graph([
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Free Tools", path: "/tools" },
            { name: tool.name, path },
          ]),
          softwareAppSchema({ name: tool.name, description: tool.metaDescription, path }),
          answerSchema({ ...tool.answerBlock, path }),
          faqSchema(tool.faqs),
        ])}
      />

      <PageHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Free Tools", href: "/tools" },
          { label: tool.name },
        ]}
        eyebrow="Free Tool"
        title={tool.name}
        highlight={tool.tagline}
        subtitle={tool.subtitle}
      />

      <section className="py-section">
        <div className="container-edge">
          <div className="mx-auto max-w-3xl">
            <Widget type={tool.widget} />
          </div>
        </div>
      </section>

      {/* Answer-first block - written to be extractable by AI answer engines. */}
      <section className="border-y border-line bg-surface py-section">
        <div className="container-edge">
          <Reveal>
            <div className="mx-auto max-w-reading">
              <span className="eyebrow">Quick answer</span>
              <h2 className="mt-3 font-display text-h2 text-ink">{tool.answerBlock.question}</h2>
              <p className="mt-5 font-sans text-lg leading-relaxed text-ink-2">
                {tool.answerBlock.answer}
              </p>
              {tool.answerBlock.keyFacts && (
                <ul className="mt-6 space-y-3">
                  {tool.answerBlock.keyFacts.map((fact) => (
                    <li key={fact} className="flex gap-3 font-sans text-sm text-muted">
                      <span aria-hidden="true" className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {fact}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <Steps eyebrow="How it works" title="Four steps" steps={tool.howItWorks} />

      <FeatureCards eyebrow="Details" title="What it does" items={tool.features} columns={3} surface />

      {tool.relatedServices && (
        <section className="py-section">
          <div className="container-edge">
            <Reveal>
              <div className="glass flex flex-col items-start justify-between gap-6 rounded-lg p-8 sm:flex-row sm:items-center">
                <div>
                  <span className="eyebrow">Want this done for you?</span>
                  <h3 className="mt-2 font-display text-lg font-bold text-ink">
                    We run this work as a service
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {tool.relatedServices.map((service) => (
                    <Link key={service.href} href={service.href} className="btn-secondary">
                      {service.label}
                    </Link>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      <section className="border-t border-line bg-surface py-section">
        <div className="container-edge">
          <Faq items={tool.faqs} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
