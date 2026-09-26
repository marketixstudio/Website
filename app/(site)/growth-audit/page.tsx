/* Hallmark · genre: atmospheric · template: conversion · centrepiece: "what the audit checks" board beside the form
 * honest: pass (46: Vistrow CRM/automation framing removed; describes only what the audit looks at) · eyebrows: none
 */
import type { Metadata } from "next";
import { BarChart3, CalendarCheck, ListChecks, MapPin, MessagesSquare, MonitorSmartphone, Search } from "lucide-react";
import { JsonLd } from "@/components/seo/json-ld";
import { GrowthAuditForm } from "@/components/forms/growth-audit-form";
import { IndexHero } from "@/components/v2/index-hero";
import { FaqList } from "@/components/v2/primitives";
import type { QA } from "@/lib/content-types";
import { buildMetadata, siteUrl } from "@/lib/seo";
import { breadcrumbSchema, faqSchema, graph } from "@/lib/structured-data";

const path = "/growth-audit";

export const metadata: Metadata = buildMetadata({
  title: "Free Growth Audit for Your Marketing",
  description:
    "A free growth audit from Marketix Studio, Pune: we review your ads, website, Google profile, tracking and follow-up, and tell you what to fix first.",
  path,
});

const checks = [
  { icon: Search, area: "Ads", items: ["Where the budget goes", "Searches and audiences wasting spend"] },
  { icon: MonitorSmartphone, area: "Website and landing pages", items: ["Speed and mobile experience", "How easy it is to enquire"] },
  { icon: MapPin, area: "Google Business Profile", items: ["Profile completeness", "Reviews and map visibility"] },
  { icon: BarChart3, area: "Tracking", items: ["Calls and forms recorded", "Which channel gets the credit"] },
  { icon: MessagesSquare, area: "Follow-up", items: ["How fast enquiries hear back", "Where leads go quiet"] },
];

const steps = [
  { icon: CalendarCheck, title: "You send the request", body: "Two short steps. You don't need a brief, just the problem as you see it." },
  { icon: Search, title: "We look first", body: "We review what is public, and anything you choose to share access to." },
  { icon: ListChecks, title: "You get the priorities", body: "What is costing you enquiries, and what we would fix first, in order." },
];

const faqs: QA[] = [
  {
    q: "Is the growth audit really free?",
    a: "Yes. There is no charge and no obligation. If you want us to do the work afterwards, that is quoted separately.",
  },
  {
    q: "What do I need to share?",
    a: "Your website and a short description of the problem is enough to start. Access to your ad accounts or analytics makes the audit deeper, but it's optional.",
  },
  {
    q: "Who is the audit for?",
    a: "Businesses spending on ads or relying on Google to bring customers, especially real estate, eCommerce, SaaS and local businesses in Pune and beyond.",
  },
  {
    q: "What happens after I submit the form?",
    a: "We review your request and contact you by your preferred channel to arrange the audit and ask anything we need.",
  },
];

export default function Page() {
  return (
    <>
      <JsonLd
        data={graph([
          {
            "@type": "WebPage",
            "@id": `${siteUrl}${path}#webpage`,
            url: `${siteUrl}${path}`,
            name: "Free growth audit",
            about: { "@id": `${siteUrl}/#organization` },
          },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Growth audit", path },
          ]),
          faqSchema(faqs),
        ])}
      />

      <IndexHero
        label="Free growth audit"
        title="Find out where your enquiries are"
        accent="leaking"
        lede="We review your ads, website, Google Business Profile, tracking and follow-up, then tell you plainly what to fix first. Free, with no obligation."
        cta={{ label: "Start the request", href: "#audit-form" }}
        secondary={{ label: "Talk to us first", href: "/contact" }}
      />

      {/* 1 · What the audit checks (centrepiece) beside the form. */}
      <section id="audit-form" className="scroll-mt-28 pb-24">
        <div className="container-edge grid grid-cols-[minmax(0,1fr)] items-start gap-5 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <div className="mx-card p-7 sm:p-9 lg:sticky lg:top-28">
            <h2 className="font-display text-2xl font-bold text-ink">What the audit checks</h2>
            <ol className="mt-7 space-y-5">
              {checks.map((c, i) => (
                <li key={c.area} className="flex gap-4">
                  <span className="relative flex flex-col items-center">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent/70 text-accent">
                      <c.icon className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
                    </span>
                    {i < checks.length - 1 && <span aria-hidden="true" className="mt-1 w-px flex-1 bg-line" />}
                  </span>
                  <span className="pb-1">
                    <span className="block font-semibold text-ink">{c.area}</span>
                    <span className="mt-1 block text-sm leading-relaxed text-muted">{c.items.join(". ")}.</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
          <div className="mx-card p-6 sm:p-8">
            <h2 className="font-display text-2xl font-bold text-ink">Request your audit</h2>
            <p className="mb-7 mt-2 text-sm leading-relaxed text-muted">
              We only ask what we need to prepare. It takes about a minute.
            </p>
            <GrowthAuditForm />
          </div>
        </div>
      </section>

      {/* 2 · What happens next. */}
      <section className="border-t border-line py-24 sm:py-28">
        <div className="container-edge">
          <h2 className="font-display text-h2 font-bold leading-[1.18] tracking-[-0.01em] text-ink">What happens next</h2>
          <ol className="mt-12 grid grid-cols-[minmax(0,1fr)] gap-3 md:grid-cols-3">
            {steps.map((s, i) => (
              <li key={s.title} className="mx-card p-7">
                <span className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-accent text-sm font-bold text-accent">
                    {i + 1}
                  </span>
                  <s.icon className="h-5 w-5 text-muted" strokeWidth={1.8} aria-hidden="true" />
                </span>
                <p className="mt-5 font-display text-xl font-bold text-ink">{s.title}</p>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 3 · Questions. */}
      <section className="border-t border-line py-24 sm:py-28">
        <div className="container-edge grid grid-cols-[minmax(0,1fr)] gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <h2 className="font-display text-h2 font-bold leading-[1.18] tracking-[-0.01em] text-ink">About the audit</h2>
          <FaqList items={faqs} />
        </div>
      </section>
    </>
  );
}
