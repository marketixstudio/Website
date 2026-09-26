/* Hallmark · genre: atmospheric · template: company · honest: pass (46: invented white-label programme,
 * technology integrations and "never approach your clients" promise removed) · eyebrows: none
 */
import type { Metadata } from "next";
import { Handshake, Megaphone, Users } from "lucide-react";
import { JsonLd } from "@/components/seo/json-ld";
import { IndexHero } from "@/components/v2/index-hero";
import { Cta, TextLink } from "@/components/v2/primitives";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, graph } from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({
  title: "Partner With Marketix Studio",
  description:
    "Agencies, freelancers and people who know businesses that need marketing: talk to Marketix Studio in Pune about working together.",
  path: "/partners",
});

const who = [
  { icon: Users, title: "Agencies", body: "Need extra hands on ads, SEO or web work for your own clients? Tell us what you have." },
  { icon: Megaphone, title: "Freelancers and specialists", body: "Designers, writers, video editors and developers we might work alongside." },
  { icon: Handshake, title: "People who refer", body: "You know a business that needs marketing and want to introduce us." },
];

export default function Page() {
  return (
    <>
      <JsonLd data={graph([breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Partners", path: "/partners" }])])} />

      <IndexHero
        crumbs={[{ name: "Home", path: "/" }, { name: "Partners", path: "/partners" }]}
        label="Partners, Marketix Studio Pune"
        title="Let's work"
        accent="together"
        lede="If you're an agency, a freelancer, or someone who knows businesses that need better marketing, tell us what you have in mind and we'll work out an arrangement that suits both sides."
        cta={{ label: "Get in touch", href: "/contact" }}
        secondary={{ label: "Our services", href: "/services" }}
      />

      <section aria-label="Who we partner with" className="pb-24">
        <div className="container-edge">
          <ul className="grid grid-cols-[minmax(0,1fr)] gap-3 md:grid-cols-3">
            {who.map((w) => (
              <li key={w.title} className="mx-card p-7">
                <w.icon className="h-7 w-7 text-accent" strokeWidth={1.8} aria-hidden="true" />
                <p className="mt-5 font-display text-xl font-bold text-ink">{w.title}</p>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{w.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-line py-24 sm:py-28">
        <div className="container-edge flex flex-col items-start gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="max-w-[20ch] font-display text-h2 font-bold leading-[1.18] tracking-[-0.01em] text-ink">
              Start with a conversation
            </h2>
            <p className="mt-5 max-w-[52ch] text-[1.0625rem] leading-relaxed text-muted">
              Every arrangement is agreed in writing before any client work starts.
            </p>
          </div>
          <div className="flex flex-col items-start gap-5">
            <Cta href="/contact">Get in touch</Cta>
            <TextLink href="/work">See our work</TextLink>
          </div>
        </div>
      </section>
    </>
  );
}
