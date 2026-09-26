/**
 * Knowledge for the site assistant (/api/chat), built from the same typed
 * content the pages render, so the bot can only repeat what the site says.
 * Adapted from the Vistrow assistant's structure; content is Marketix-only.
 */
import { industryList } from "@/content/industries";
import { locationList } from "@/content/locations";
import { puneAreas } from "@/content/pune-areas";
import { serviceList, servicesOverview } from "@/content/services";
import { publishedCaseStudies } from "@/content/work";
import { blogPosts } from "@/content/blog";
import { business, fullAddress } from "@/lib/site-config";

const keyPages: { label: string; href: string; body: string }[] = [
  { label: "Free growth audit", href: "/growth-audit", body: "A free, no-obligation review of ads, website, tracking, Google profile and lead handling, with recommended priorities. Short form." },
  { label: "Contact", href: "/contact", body: "Call, WhatsApp or send an enquiry." },
  { label: "Pricing", href: "/pricing", body: "How work is quoted: on scope, after the free growth audit. No published packages." },
  { label: "All services", href: "/services", body: "Every service Marketix Studio offers." },
  { label: "Industries", href: "/industries", body: "The sectors Marketix Studio works in." },
  { label: "Locations", href: "/locations", body: "Pune, Indian metros and international markets served." },
  { label: "Case studies", href: "/work", body: "Client work and testimonials." },
  { label: "About", href: "/about", body: "Who Marketix Studio is." },
  { label: "Our approach", href: "/approach", body: "Audit, plan, build and improve." },
  { label: "Team", href: "/team", body: "The people who deliver the work." },
  { label: "Careers", href: "/careers", body: "Working at Marketix Studio." },
  { label: "FAQ", href: "/faq", body: "Common questions about scope, pricing and process." },
  { label: "Blog", href: "/blog", body: "Practical guides on ads, SEO, Google Maps and eCommerce." },
  { label: "Google Maps Ranking Toolkit", href: "/gmb-toolkit", body: "A ₹99 Excel toolkit of checklists, post templates and review scripts for ranking on Google Maps." },
];

export function buildChatKnowledge(): string {
  const lines: string[] = [];

  lines.push(`Company: ${business.name} ("${business.tagline}")`);
  lines.push(business.description);
  lines.push(`Office: ${fullAddress}. Open Monday to Saturday, ${business.openingHours.opens} to ${business.openingHours.closes} IST.`);
  lines.push(`Phone and WhatsApp: ${business.phoneDisplay}. Email: ${business.email}.`);
  lines.push(`Markets: ${business.areaServed.join(", ")}.`);
  lines.push("");

  lines.push("SERVICES:");
  for (const s of serviceList) lines.push(`- ${s.title} (/services/${s.slug}): ${s.metaDescription}`);
  lines.push("");

  lines.push("INDUSTRIES:");
  for (const i of industryList) lines.push(`- ${i.title} (/industries/${i.slug}): ${i.metaDescription}`);
  lines.push("");

  lines.push("LOCATIONS:");
  for (const l of locationList) lines.push(`- ${l.area} (/locations/${l.slug})`);
  lines.push("PUNE NEIGHBOURHOODS:");
  for (const a of puneAreas) lines.push(`- ${a.area} (/locations/pune/${a.slug}): ${a.metaDescription}`);
  lines.push("");

  lines.push("CASE STUDIES (describe in words; do not quote any numbers):");
  for (const c of publishedCaseStudies) lines.push(`- ${c.client}, ${c.industry} (/work/${c.slug}): ${c.headline}`);
  lines.push("");

  if (blogPosts.length) {
    lines.push("BLOG ARTICLES:");
    for (const p of blogPosts) lines.push(`- ${p.title} (/blog/${p.slug}): ${p.excerpt}`);
    lines.push("");
  }

  lines.push("OTHER KEY PAGES:");
  for (const p of keyPages) lines.push(`- ${p.label} (${p.href}): ${p.body}`);
  lines.push("");

  if (servicesOverview.faqs?.length) {
    lines.push("COMMON QUESTIONS:");
    for (const f of servicesOverview.faqs) lines.push(`Q: ${f.q}\nA: ${f.a}`);
    lines.push("");
  }

  lines.push(
    "PRICING POLICY: Marketix Studio does not publish package prices. Every engagement is quoted on scope after a free growth audit, and ad spend is paid directly to Google or Meta. The only public price is the ₹99 Google Maps toolkit. Never invent a number.",
  );

  return lines.join("\n");
}

export const VALID_CHAT_LINKS: Set<string> = (() => {
  const set = new Set<string>(["/"]);
  for (const p of keyPages) set.add(p.href);
  for (const s of serviceList) set.add(`/services/${s.slug}`);
  for (const i of industryList) set.add(`/industries/${i.slug}`);
  for (const l of locationList) set.add(`/locations/${l.slug}`);
  for (const a of puneAreas) set.add(`/locations/pune/${a.slug}`);
  for (const c of publishedCaseStudies) set.add(`/work/${c.slug}`);
  for (const p of blogPosts) set.add(`/blog/${p.slug}`);
  return set;
})();
