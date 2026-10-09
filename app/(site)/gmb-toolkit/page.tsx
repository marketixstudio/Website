/* Hallmark · genre: atmospheric · template: product · centrepiece: contents board (real counts from the live product page)
 * honest: pass (46: ₹99 / ₹999 and contents from the live page; "500+ businesses" and "30 days" NOT carried over)
 * chrome: pass (47: no drawn spreadsheet UI) · eyebrows: none
 */
import { GlossIcon } from "@/components/home-v2/gloss-icon";
import { Eyebrow } from "@/components/ui/section-heading";
import type { Metadata } from "next";
import { Check } from "lucide-react";
import { JsonLd } from "@/components/seo/json-ld";
import { BuyButton } from "@/components/tools/buy-button";
import { ProcessPanel, StepRail } from "@/components/v2/step-rail";
import { AnswerCard, Cta, FaqList, TextLink } from "@/components/v2/primitives";
import { products } from "@/content/products-catalog";
import { buildMetadata } from "@/lib/seo";
import { answerSchema, breadcrumbSchema, faqSchema, graph, productSchema } from "@/lib/structured-data";
import { Breadcrumbs } from "@/components/v2/breadcrumbs";

const product = products["gmb-toolkit"];
const path = "/gmb-toolkit";

export const metadata: Metadata = buildMetadata({
  title: product.metaTitle,
  description: product.metaDescription,
  path,
});

/** The first number in an item's title or body, e.g. "20 steps" → "20". */
const countOf = (title: string, body: string) => (title.match(/\d+/) ?? body.match(/\d+/))?.[0];

export default function Page() {
  return (
    <>
      <JsonLd
        data={graph([
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: product.name, path },
          ]),
          ...(product.onSale
            ? [
                productSchema({
                  name: product.name,
                  description: product.metaDescription,
                  path,
                  price: String(product.priceInr),
                  priceCurrency: "INR",
                  availability: "InStock",
                }),
              ]
            : []),
          answerSchema({ ...product.answerBlock, path }),
          faqSchema(product.faqs),
        ])}
      />

      {/* 1 · Hero with the buy card: this page has one job. */}
      <section className="mx-pool pb-20 pt-36 sm:pt-44">
        <div className="container-edge grid grid-cols-[minmax(0,1fr)] items-center gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-16">
          <div>
            <Breadcrumbs items={[ { name: "Home", path: "/" }, { name: product.name, path }, ]} />
            <h1 className="mx-display mt-5 max-w-[14ch] font-display text-display text-ink">
              Rank your business on <span className="whitespace-nowrap text-ink-hi">Google Maps</span>
            </h1>
            <p className="mt-7 max-w-[52ch] text-[1.0625rem] leading-relaxed text-muted sm:text-lg">{product.subtitle}</p>
            <ul className="mt-8 space-y-2.5">
              {product.whoFor.map((item) => (
                <li key={item} className="flex gap-3 text-[0.9375rem] text-ink-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2.5} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:sticky lg:top-28">
            {product.onSale ? (
              <BuyButton
                productSlug={product.slug}
                priceInr={product.priceInr}
                priceUsd={product.priceUsd}
                compareAtInr={product.compareAtInr}
              />
            ) : (
              <div className="mx-glow-card p-7 sm:p-8">
                <p className="text-sm font-semibold text-muted">Not on sale right now</p>
                <p className="mt-2 font-display text-2xl font-bold leading-snug text-ink">Want help ranking on Google Maps?</p>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">
                  The toolkit is not available to buy at the moment. We can run the same checks on your Google
                  Business Profile in a free growth audit.
                </p>
                <div className="mt-7 flex flex-col items-start gap-4">
                  <Cta href="/growth-audit">Get a free growth audit</Cta>
                  <TextLink href="/services/local-seo-gmb">Local SEO and Google Business</TextLink>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 2 · What's inside: the page's centrepiece. */}
      <section aria-labelledby="inside" className="py-24 sm:py-28">
        <div className="container-edge">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Eyebrow>What you get</Eyebrow>
              <h2 id="inside" className="mt-6 font-display text-h2 font-bold leading-[1.18] tracking-[-0.01em] text-ink">
                What&apos;s inside the file
              </h2>
            </div>
            <p className="text-[0.9375rem] text-muted">One Excel file, 12 sheets. No course, no videos.</p>
          </div>
          <ul className="mt-12 grid grid-cols-[minmax(0,1fr)] gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {product.includes.map((item) => {
              const n = countOf(item.title, item.body);
              return (
                <li key={item.title} className="mx-card flex gap-5 p-6">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-accent/50">
                    {n ? (
                      <span className="font-display text-xl font-bold text-accent">{n}</span>
                    ) : (
                      item.icon && <GlossIcon icon={item.icon} size="sm" />
                    )}
                  </span>
                  <span className="min-w-0">
                    <span className="block font-display text-lg font-bold text-ink">{item.title}</span>
                    <span className="mt-1.5 block text-sm leading-relaxed text-muted">{item.body}</span>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* 3 · How to use it. */}
      <ProcessPanel title="How to use it">
        <StepRail steps={product.howItWorks} />
      </ProcessPanel>

      {/* 4 · The answer, for people and for AI search. */}
      <div className="container-edge pb-24">
        <AnswerCard block={product.answerBlock} id="answer" />
      </div>

      {/* 5 · Questions, and the done-for-you option. */}
      <section className="py-24 sm:py-28">
        <div className="container-edge grid grid-cols-[minmax(0,1fr)] gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <div>
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="mt-6 font-display text-h2 font-bold leading-[1.18] tracking-[-0.01em] text-ink">Questions</h2>
            <p className="mt-5 max-w-[40ch] text-[0.9375rem] leading-relaxed text-muted">
              Rather have us do it for you? That is our local SEO service.
            </p>
            <div className="mt-6">
              <TextLink href="/services/local-seo-gmb">Local SEO and Google Business</TextLink>
            </div>
          </div>
          <FaqList items={product.faqs} />
        </div>
      </section>
    </>
  );
}
