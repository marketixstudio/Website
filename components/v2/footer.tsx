import Link from "next/link";
import { ArrowRight, Clock, Facebook, Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone, Youtube } from "lucide-react";
import { Wordmark } from "@/components/ui/wordmark";
import { Cta } from "@/components/v2/primitives";
import { NewsletterForm } from "@/components/v2/newsletter-form";
import { footerNav } from "@/lib/nav";
import { socialProfiles } from "@/lib/social-links";
import { business } from "@/lib/site-config";
import { ElectricMonogram } from "@/components/v2/electric-monogram";

const icons = { Instagram, LinkedIn: Linkedin, Facebook, YouTube: Youtube } as const;

const group = (title: string) => footerNav.find((g) => g.title === title)?.items ?? [];

/** Key links only (user: don't list every page). Everything else is one click away in the header. */
const columns = [
  {
    title: "Services",
    items: [
      { label: "Performance Marketing", href: "/services/performance-marketing" },
      { label: "Google Ads & PPC", href: "/services/google-ads-ppc" },
      { label: "Meta Ads", href: "/services/meta-ads" },
      { label: "SEO Services", href: "/services/seo-services" },
      { label: "Local SEO & Google Business", href: "/services/local-seo-gmb" },
      { label: "Web Design & Development", href: "/services/web-design-development" },
    ],
    all: { label: "All services", href: "/services" },
  },
  {
    title: "Company",
    items: [
      { label: "About", href: "/about" },
      { label: "Case Studies", href: "/work" },
      { label: "Team", href: "/team" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "Free growth audit", href: "/growth-audit" },
      { label: "Pricing", href: "/pricing" },
      { label: "Blog", href: "/blog" },
      { label: "FAQ", href: "/faq" },
      { label: "Industries", href: "/industries" },
      { label: "Locations", href: "/locations" },
      { label: "Google Maps toolkit", href: "/gmb-toolkit" },
    ],
  },
] as { title: string; items: { label: string; href: string }[]; all?: { label: string; href: string } }[];

/**
 * Site footer: a call-to-action card (audit, call, WhatsApp, newsletter), the brand
 * column (contact details, socials), three short link columns (each a <nav>) and the legal row.
 * On phones the link columns sit two across.
 */
export function SiteFooter() {
  const whatsapp = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent("Hi Marketix Studio, I'd like to talk about marketing for my business.")}`;

  return (
    <footer className="border-t border-line bg-bg">
      {/* 1 · Call to action */}
      <div className="container-edge pt-20 sm:pt-24">
        <div className="mx-card grid grid-cols-[minmax(0,1fr)] gap-10 p-8 sm:p-10 lg:grid-cols-[160px_minmax(0,1.35fr)_minmax(0,1fr)] lg:items-center lg:gap-12">
          <ElectricMonogram className="hidden h-[170px] w-full lg:block" scale={0.6} />
          <div>
            <h2 className="max-w-[24ch] font-display text-3xl font-bold leading-[1.2] text-ink sm:text-4xl">
              Find out where your enquiries are being lost
            </h2>
            <p className="mt-3 text-[0.9375rem] text-muted">A free growth audit of your ads, website and Google profile. No obligation.</p>
            <div className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-7">
              <Cta href="/growth-audit">Get a free growth audit</Cta>
              <div className="flex items-center gap-5">
                <a href={`tel:${business.phone}`} className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-semibold text-ink-2 transition-colors hover:text-ink">
                  <Phone className="h-4 w-4 text-accent" strokeWidth={2} aria-hidden="true" />
                  Call
                </a>
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-semibold text-ink-2 transition-colors hover:text-ink"
                >
                  <MessageCircle className="h-4 w-4 text-accent" strokeWidth={2} aria-hidden="true" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-line pt-8 lg:border-l lg:border-t-0 lg:pl-14 lg:pt-0">
            <NewsletterForm />
          </div>
        </div>
      </div>

      {/* 2 · Brand + link columns */}
      <div className="container-edge grid grid-cols-2 gap-x-8 gap-y-12 py-16 sm:py-20 md:grid-cols-3 lg:grid-cols-[minmax(0,1.6fr)_repeat(3,minmax(0,1fr))]">
        <div className="col-span-2 md:col-span-3 lg:col-span-1 lg:pr-10">
          <Wordmark height={40} />
          <p className="mt-5 max-w-[40ch] text-[0.9375rem] leading-relaxed text-muted">
            Performance marketing agency in Pune for real estate, startups and eCommerce brands, across India and abroad.
          </p>
          <ul className="mt-6 space-y-3 text-[0.9375rem]">
            <li className="flex gap-3 text-ink-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2} aria-hidden="true" />
              <address className="not-italic">
                {business.address.city}, {business.address.region}
              </address>
            </li>
            <li className="flex gap-3 text-ink-2">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2} aria-hidden="true" />
              Mon to Sat, {business.openingHours.opens} to {business.openingHours.closes} IST
            </li>
            <li>
              <a href={`tel:${business.phone}`} className="flex gap-3 text-ink-2 transition-colors hover:text-ink">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2} aria-hidden="true" />
                {business.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${business.email}`} className="flex gap-3 text-ink-2 transition-colors hover:text-ink">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2} aria-hidden="true" />
                {business.email}
              </a>
            </li>
          </ul>
          <ul className="mt-6 flex gap-2" aria-label="Social media">
            {socialProfiles.map((profile) => {
              const Icon = icons[profile.platform];
              return (
                <li key={profile.href}>
                  <a
                    href={profile.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={profile.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink-2 transition-colors hover:border-accent hover:text-ink"
                  >
                    <Icon className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {columns.map((col) => (
          <nav key={col.title} aria-labelledby={`footer-${col.title.toLowerCase()}`}>
            <h2 id={`footer-${col.title.toLowerCase()}`} className="text-sm font-semibold text-ink">
              {col.title}
            </h2>
            {/* Plain links (a footer is a directory to scan, not a stack of buttons). The arrow
                appears on hover/focus; rows are 40px tall so they stay easy to tap. */}
            <ul className="mt-3">
              {col.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex min-h-10 items-center gap-1.5 text-[0.9375rem] leading-snug text-ink-2 transition-colors hover:text-ink focus-visible:text-ink"
                  >
                    {item.label}
                    <ArrowRight
                      className="h-3.5 w-3.5 shrink-0 -translate-x-1 text-accent opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100"
                      strokeWidth={2.25}
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
              {col.all && (
                <li>
                  <Link href={col.all.href} className="mx-link mt-2 inline-flex min-h-10 items-center text-sm font-semibold">
                    {col.all.label}
                    <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.25} aria-hidden="true" />
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        ))}

      </div>

      {/* 3 · Legal row */}
      <div className="border-t border-line">
        <div className="container-edge flex flex-col gap-4 py-6 text-sm text-muted md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {business.legalName}. {business.tagline}.
          </p>
          <nav aria-label="Legal">
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {group("Legal").map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-ink">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
