/* Hallmark · genre: atmospheric · template: contact · centrepiece: three-route chooser (call, WhatsApp, form)
 * honest: pass (46: removed invented pricing, "a third international" and response-time promises) · eyebrows: none
 */
import { Eyebrow } from "@/components/ui/section-heading";
import type { Metadata } from "next";
import { ArrowRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { JsonLd } from "@/components/seo/json-ld";
import { ContactForm } from "@/components/forms/contact-form";
import { IndexHero } from "@/components/v2/index-hero";
import { FaqList, TextLink } from "@/components/v2/primitives";
import type { QA } from "@/lib/content-types";
import { buildMetadata, siteUrl } from "@/lib/seo";
import { business, fullAddress } from "@/lib/site-config";
import { breadcrumbSchema, faqSchema, graph } from "@/lib/structured-data";
import { ElectricMonogram } from "@/components/v2/electric-monogram";

export const metadata: Metadata = buildMetadata({
  title: "Contact Marketix Studio, Pune",
  description: `Contact Marketix Studio on Balewadi High Street, Pune. Call or WhatsApp ${business.phoneDisplay}, email ${business.email}, or send an enquiry.`,
  path: "/contact",
});

const whatsappText = encodeURIComponent("Hi Marketix Studio, I'd like to talk about marketing for my business.");
const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${business.name}, ${fullAddress}`)}`;

const routes = [
  {
    icon: Phone,
    title: "Call us",
    body: "Best when you want to talk it through now.",
    action: business.phoneDisplay,
    href: `tel:${business.phone}`,
    external: false,
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    body: "Best for a quick question, a link or a screenshot.",
    action: "Start a chat",
    href: `https://wa.me/${business.whatsapp}?text=${whatsappText}`,
    external: true,
  },
  {
    icon: Mail,
    title: "Send an enquiry",
    body: "Best when there's context to share. No brief needed.",
    action: "Open the form",
    href: "#contact-form",
    external: false,
  },
];

const faqs: QA[] = [
  {
    q: "What is Marketix Studio's phone number?",
    a: `Call or WhatsApp Marketix Studio on ${business.phoneDisplay}, or email ${business.email}.`,
  },
  {
    q: "Where is Marketix Studio located?",
    a: `At ${fullAddress}, India. We are open Monday to Saturday, ${business.openingHours.opens} to ${business.openingHours.closes} IST.`,
  },
  {
    q: "Should I use this form or request a growth audit?",
    a: "Use this form for a general question, a partnership or a quick enquiry. Request the free growth audit when you want us to review your ads, website and tracking and tell you what we would fix first.",
  },
  {
    q: "What does working with you cost?",
    a: "It depends on the channels and work in scope, so we quote once we understand what you need. Advertising budget is separate and paid directly to the platforms.",
  },
  {
    q: "Do you work with businesses outside India?",
    a: "Yes. Besides clients across India, we plan campaigns for brands selling into the UAE, the UK, the US, Australia, Canada and Singapore.",
  },
];

export default function Page() {
  return (
    <>
      <JsonLd
        data={graph([
          {
            "@type": "ContactPage",
            "@id": `${siteUrl}/contact#contactpage`,
            url: `${siteUrl}/contact`,
            name: "Contact Marketix Studio",
            about: { "@id": `${siteUrl}/#organization` },
            mainEntity: { "@id": `${siteUrl}/#organization` },
          },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
          faqSchema(faqs),
        ])}
      />

      <IndexHero
        crumbs={[ { name: "Home", path: "/" }, { name: "Contact", path: "/contact" }, ]}
        label="Contact, Marketix Studio Pune"
        title="Tell us what needs to"
        accent="work better"
        lede="Tell us what is happening with your marketing today and what should be happening instead. We'll give you a straight answer about whether we can help."
        cta={null}
        visual={<ElectricMonogram className="h-[200px] w-full sm:h-[240px]" />}
      />

      {/* 1 · Three ways in: the page's centrepiece. */}
      <section aria-label="Ways to contact us" className="pb-20">
        <div className="container-edge">
          <ul className="grid grid-cols-[minmax(0,1fr)] gap-3 md:grid-cols-3">
            {routes.map((r, i) => (
              <li
                key={r.title}
                className={`mx-card group relative flex flex-col p-7 transition-colors hover:border-accent/60 focus-within:border-accent/60 ${
                  i === 1 ? "md:-translate-y-3" : ""
                }`}
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/60 text-accent">
                  <r.icon className="h-6 w-6" strokeWidth={1.8} aria-hidden="true" />
                </span>
                <h2 className="mt-6 font-display text-2xl font-bold text-ink">{r.title}</h2>
                <p className="mt-2 flex-1 text-[0.9375rem] leading-relaxed text-muted">{r.body}</p>
                <a
                  href={r.href}
                  {...(r.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="mt-6 inline-flex items-center gap-2 whitespace-nowrap font-semibold text-ink after:absolute after:inset-0 after:rounded-[24px] after:content-[''] group-hover:text-accent"
                >
                  {r.action}
                  <span className="mx-row-go" aria-hidden="true">
                    <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 2 · The form, with the office alongside. */}
      <section id="contact-form" className="scroll-mt-28 py-24 sm:py-28">
        <div className="container-edge grid grid-cols-[minmax(0,1fr)] gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <div>
            <Eyebrow>Before we talk</Eyebrow>
            <h2 className="mt-6 max-w-[16ch] font-display text-h2 font-bold leading-[1.18] tracking-[-0.01em] text-ink">
              Start with the real problem
            </h2>
            <p className="mt-5 max-w-[44ch] text-[1.0625rem] leading-relaxed text-muted">
              You don&apos;t need a finished brief. Tell us what is happening today, what should happen instead, and any tools
              already involved.
            </p>
            <div className="mx-card mt-10 p-6">
              <p className="flex items-start gap-3 text-[0.9375rem] leading-relaxed text-ink-2">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" strokeWidth={1.9} aria-hidden="true" />
                {fullAddress}
              </p>
              <p className="mt-2 pl-8 text-sm text-muted">
                Monday to Saturday, {business.openingHours.opens} to {business.openingHours.closes} IST
              </p>
              <p className="mt-4 pl-8">
                <a href={mapsHref} target="_blank" rel="noopener noreferrer" className="mx-link text-sm">
                  Open in Google Maps
                  <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.25} aria-hidden="true" />
                </a>
              </p>
              <p className="mt-4 border-t border-line pt-4 pl-8 text-sm">
                <a href={`mailto:${business.email}`} className="font-semibold text-ink transition-colors hover:text-accent">
                  {business.email}
                </a>
              </p>
            </div>
            <div className="mt-8">
              <TextLink href="/growth-audit">Or get a free growth audit</TextLink>
            </div>
          </div>
          <div className="mx-card p-6 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* 3 · Questions. */}
      <section className="py-24 sm:py-28">
        <div className="container-edge grid grid-cols-[minmax(0,1fr)] gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <div>
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="mt-6 font-display text-h2 font-bold leading-[1.18] tracking-[-0.01em] text-ink">Before you get in touch</h2>
            <div className="mt-6 flex flex-col items-start gap-4">
              <TextLink href="/faq">All questions</TextLink>
              <TextLink href="/pricing">How we price</TextLink>
            </div>
          </div>
          <FaqList items={faqs} />
        </div>
      </section>
    </>
  );
}
