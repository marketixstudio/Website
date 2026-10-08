/* Hallmark · genre: atmospheric · template: company · honest: pass (46: "remote-first" and automation/product
 * roles were invented or Vistrow's; no open roles are claimed) · eyebrows: none
 */
import { GlossIcon } from "@/components/home-v2/gloss-icon";
import type { Metadata } from "next";
import { Heart, Mail, Sparkles, TrendingUp } from "lucide-react";
import { JsonLd } from "@/components/seo/json-ld";
import { IndexHero } from "@/components/v2/index-hero";
import { TextLink } from "@/components/v2/primitives";
import { buildMetadata } from "@/lib/seo";
import { business } from "@/lib/site-config";
import { breadcrumbSchema, graph } from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({
  title: "Careers at Marketix Studio, Pune",
  description:
    "Careers at Marketix Studio in Pune: performance marketing, SEO, creative and social media. No open roles right now; introductions welcome.",
  path: "/careers",
});

const include = [
  { icon: TrendingUp, title: "Show the outcome", body: "What changed because of your work, how it was measured, and what you personally owned." },
  { icon: Sparkles, title: "Show the craft", body: "One campaign, design, site or piece of writing we can talk through in detail." },
  { icon: Heart, title: "Show the judgement", body: "A trade-off you made, or a time you chose the honest answer over the easy one." },
];

export default function Page() {
  const mailto = `mailto:${business.email}?subject=${encodeURIComponent("Introduction: careers at Marketix Studio")}`;

  return (
    <>
      <JsonLd data={graph([breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Careers", path: "/careers" }])])} />

      <IndexHero
        crumbs={[{ name: "Home", path: "/" }, { name: "Careers", path: "/careers" }]}
        label="Careers, Marketix Studio Pune"
        title="Careers at"
        accent="Marketix Studio"
        lede="We are a small team in Pune, working on ads, SEO, websites, creative and social media for brands across India and abroad."
        cta={null}
        secondary={{ label: "Meet the team", href: "/team" }}
      />

      <section aria-labelledby="roles" className="pb-24">
        <div className="container-edge grid grid-cols-[minmax(0,1fr)] gap-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="mx-card flex flex-col p-8 sm:p-10">
            <h2 id="roles" className="font-display text-3xl font-bold text-ink">No open roles right now</h2>
            <p className="mt-4 max-w-[46ch] text-[1.0625rem] leading-relaxed text-muted">
              If you are good at performance marketing, SEO, design or social media, send a short introduction with one
              piece of work. We keep it on file and get in touch when something opens up.
            </p>
            <a href={mailto} className="mx-cta mt-8 self-start">
              Email an introduction
              <span className="mx-cta__arrow">
                <Mail className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
              </span>
            </a>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold text-ink">What to include</h2>
            <ul className="mt-6 grid grid-cols-[minmax(0,1fr)] gap-3">
              {include.map((i) => (
                <li key={i.title} className="mx-card flex gap-5 p-6">
                  <GlossIcon icon={i.icon} size="sm" />
                  <span>
                    <span className="block font-display text-lg font-bold text-ink">{i.title}</span>
                    <span className="mt-1 block text-[0.9375rem] leading-relaxed text-muted">{i.body}</span>
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <TextLink href="/about">About the studio</TextLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
