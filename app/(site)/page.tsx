/* Hallmark · genre: atmospheric · template: home · hero: split (promise left, demand map right)
 * design-system: design.md · theme: studied-DNA (source: url https://marketixstudio.com)
 * nav: N5 · footer: Ft5 · honest: pass (46: hero copy from the live homepage, no invented metrics or prices)
 * chrome: pass (47) · eyebrows: none · entrance: DemandMap only
 */
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Brush,
  Building2,
  Car,
  GraduationCap,
  HeartPulse,
  Hotel,
  Rocket,
  ShoppingBag,
  Sofa,
  Globe2,
  LayoutTemplate,
  Mail,
  MapPin,
  Megaphone,
  MessageCircle,
  MonitorSmartphone,
  MousePointerClick,
  Palette,
  PenLine,
  Search,
  Share2,
  Target,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { JsonLd } from "@/components/seo/json-ld";
import { DemandMap } from "@/components/home/demand-map";
import { LogoMarquee } from "@/components/home/logo-marquee";
import { HeroThreads } from "@/components/home/hero-threads";
import { FillHeading } from "@/components/v2/fill-heading";
import { AnswerCard, Cta, FaqList, TextLink } from "@/components/v2/primitives";
import { caseStudies } from "@/content/work";
import { clientLogos } from "@/content/testimonials";
import type { AnswerBlock, QA } from "@/lib/content-types";
import { footerNav, primaryNav } from "@/lib/nav";
import { buildMetadata } from "@/lib/seo";
import { business } from "@/lib/site-config";
import {
  answerSchema,
  faqSchema,
  graph,
  localBusinessSchema,
  organizationSchema,
} from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({
  title: "Performance Marketing Agency in Pune | Marketix Studio",
  description:
    "Performance marketing agency in Pune for real estate, startups and eCommerce: Google and Meta ads, SEO, websites and creative, measured on enquiries.",
  path: "/",
});

const answer: AnswerBlock = {
  question: "What does Marketix Studio do?",
  answer:
    "Marketix Studio is a performance marketing agency in Pune. We help real estate developers, startups, SaaS companies and eCommerce brands grow with Google and Meta ads, SEO and local SEO, websites, landing pages and creative, and we judge the work on the enquiries and sales it brings in.",
  keyFacts: [
    `Based in ${business.address.city}, serving brands since ${business.foundingDate}`,
    "Clients across India, with campaigns for the UAE, the UK and the US",
    "Paid ads, SEO, websites and creative under one roof",
    "Every enquiry tracked back to the channel that produced it",
  ],
};

const faqs: QA[] = [
  {
    q: "Where is Marketix Studio based?",
    a: `We are based in Pune and work with brands across India and run campaigns for clients in the UAE, the UK and the US.`,
  },
  {
    q: "Which industries do you work with?",
    a: "Mostly real estate, startups and SaaS, and eCommerce and D2C brands. We also work with healthcare, education, hospitality, interior and architecture firms, and automotive businesses.",
  },
  {
    q: "Can you handle ads, SEO and the website together?",
    a: "Yes. Most growth problems sit between channels: good ads sent to a slow page, or strong rankings with no way to enquire. Running them together means one plan, one set of tracking and one report.",
  },
  {
    q: "Do you guarantee results?",
    a: "No honest agency can guarantee rankings or revenue, because both depend on your market, offer and budget. What we commit to is clear targets agreed before we start and reporting you can check against them.",
  },
  {
    q: "How do we start?",
    a: "Book a free growth audit. We look at your current ads, website and Google Business Profile, then tell you where enquiries are being lost and what we would fix first.",
  },
];

const serviceBlurbs: Record<string, string> = {
  Performance: "Paid campaigns built around the enquiry or sale, not the click.",
  "SEO & Content": "Rankings on Google and Maps for the searches your buyers make.",
  "Web & Brand": "Websites, landing pages and identity that turn visits into leads.",
  "Social & Lifecycle": "Content and follow-up that keeps you in front of people until they buy.",
};

const groupIcons: Record<string, LucideIcon> = {
  Performance: TrendingUp,
  "SEO & Content": Search,
  "Web & Brand": Palette,
  "Social & Lifecycle": Share2,
};

const serviceIcons: Record<string, LucideIcon> = {
  "/services/performance-marketing": Target,
  "/services/google-ads-ppc": MousePointerClick,
  "/services/meta-ads": Megaphone,
  "/services/conversion-rate-optimisation": BarChart3,
  "/services/seo-services": Search,
  "/services/local-seo-gmb": MapPin,
  "/services/content-marketing": PenLine,
  "/services/web-design-development": MonitorSmartphone,
  "/services/landing-pages-funnels": LayoutTemplate,
  "/services/branding-design": Brush,
  "/services/social-media-marketing": Share2,
  "/services/email-marketing-automation": Mail,
  "/services/whatsapp-marketing": MessageCircle,
};

const industryIcons: Record<string, LucideIcon> = {
  "/industries/real-estate": Building2,
  "/industries/ecommerce-d2c": ShoppingBag,
  "/industries/saas-startups": Rocket,
  "/industries/healthcare": HeartPulse,
  "/industries/education": GraduationCap,
  "/industries/hospitality": Hotel,
  "/industries/interior-architecture": Sofa,
  "/industries/automotive": Car,
};

/** What each sector's campaigns are optimised for (same framing as /industries). */
const industryMeasures: Record<string, string> = {
  "/industries/real-estate": "Site visits and bookings",
  "/industries/ecommerce-d2c": "Profit after shipping and returns",
  "/industries/saas-startups": "Qualified demos and paying customers",
  "/industries/healthcare": "Appointments booked",
  "/industries/education": "Enrolments before the deadline",
  "/industries/hospitality": "Direct bookings, not OTA commission",
  "/industries/interior-architecture": "Consultations that fit your budget",
  "/industries/automotive": "Test drives and service bookings",
};

const serviceGroups = primaryNav.find((i) => i.label === "Services")?.groups ?? [];
const industryLinks = primaryNav.find((i) => i.label === "Industries")?.children ?? [];
const locationLinks = footerNav.find((g) => g.title === "Locations")?.items ?? [];
const featured = caseStudies["jayganesh-review-system"];

export default function HomePage() {

  return (
    <>
      <JsonLd
        data={graph([
          organizationSchema,
          localBusinessSchema({
            name: business.legalName,
            description: business.description,
            path: "/",
            areaServed: ["Pune", "Mumbai", "Bangalore", "Delhi NCR", "Hyderabad", "Dubai", "London"],
          }),
          answerSchema({ ...answer, path: "/" }),
          faqSchema(faqs),
        ])}
      />

      {/* 1 · Hero: the live site's composition. One large card with the wave visual,
          a wide left-aligned headline, and the lede + action offset to the right. */}
      <section className="pb-20 pt-24 sm:pb-24 sm:pt-28">
        <div className="container-wide">
          <div className="relative isolate flex min-h-[min(86vh,780px)] flex-col justify-between overflow-hidden rounded-[28px] border border-line bg-card px-6 pb-8 pt-12 sm:px-12 sm:pb-12 sm:pt-16 lg:px-16 lg:pb-16">
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 opacity-45 lg:opacity-100">
                <HeroThreads />
              </div>
              {/* Readability: soft shade behind the headline (top-left) and the lede (bottom-right)
                  so the threads glow in the open space instead of running through the text. */}
              {/* Phones and tablets: the text fills the card, so an even shade keeps every line readable. */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgb(var(--card)/0.55)_0%,rgb(var(--card)/0.7)_45%,rgb(var(--card)/0.85)_100%)] lg:hidden"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 hidden lg:block bg-[radial-gradient(ellipse_75%_65%_at_18%_28%,rgb(var(--card)/0.92)_0%,rgb(var(--card)/0.6)_45%,transparent_75%),radial-gradient(ellipse_55%_45%_at_78%_82%,rgb(var(--card)/0.9)_0%,rgb(var(--card)/0.5)_50%,transparent_80%)]"
              />
            </div>
            <h1 className="max-w-[18ch] font-display text-[clamp(2.6rem,6.4vw+0.2rem,6.25rem)] font-bold leading-[1.1] tracking-[-0.015em] text-ink">
              Performance Marketing Agency for Real Estate, Startups &amp; eCommerce
            </h1>
            <div className="mt-12 grid grid-cols-[minmax(0,1fr)] gap-8 lg:grid-cols-2">
              <p className="hidden self-end text-sm font-medium text-muted lg:block">
                Pune, India
              </p>
              <div>
                <p className="max-w-[46ch] text-lg leading-[1.6] text-ink-2">
                  We help real estate developers, startups, SaaS companies and eCommerce brands grow
                  with performance marketing and conversion-focused execution. Based in Pune, working
                  with brands across India and abroad.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-5">
                  <Cta href="/growth-audit">Get a free growth audit</Cta>
                  <TextLink href="/work">See our work</TextLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 · The answer, for people and for AI search. */}
      <div className="container-edge pb-24">
        <AnswerCard block={answer} id="answer" />
      </div>

      {/* 3b · Where customers come from: the demand map, now its own section. */}
      <section className="border-t border-line py-24 sm:py-28">
        <div className="container-edge grid grid-cols-[minmax(0,1fr)] items-center gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <div>
            <h2 className="max-w-[16ch] font-display text-h2 font-bold text-ink">
              Search, social and maps, working as one
            </h2>
            <p className="mt-5 max-w-[46ch] text-lg leading-[1.6] text-muted">
              Most customers find you in one of three places: a Google search, a social feed or Google
              Maps. This is how each of them turns into an enquiry.
            </p>
            <div className="mt-8">
              <TextLink href="/services">How we run each channel</TextLink>
            </div>
          </div>
          <DemandMap />
        </div>
      </section>

      {/* 4 · Services: four groups, every service with its icon, corner glow on each card. */}
      <section className="border-t border-line py-24 sm:py-32">
        <div className="container-edge">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end">
            <FillHeading className="max-w-[16ch] font-display text-h2 font-bold leading-[1.18] tracking-[-0.01em] text-ink">
              Everything between a search and a sale
            </FillHeading>
            <p className="max-w-[52ch] text-[1.0625rem] leading-relaxed text-muted lg:justify-self-end">
              Pick one service or hand us the whole path. Either way the tracking is shared, so you can
              see which part is working.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-[minmax(0,1fr)] gap-5 md:grid-cols-2">
            {serviceGroups.map((group, gi) => {
              const GroupIcon = groupIcons[group.title] ?? Target;
              return (
                <div
                  key={group.title}
                  className={`mx-card mx-glow flex flex-col p-5 transition-colors hover:border-accent/50 sm:p-9 ${gi % 2 ? "mx-glow--tl" : ""}`}
                >
                  <div className="flex items-start gap-4">
                    <span className="mx-icon-tile h-12 w-12 border-accent/50">
                      <GroupIcon className="h-6 w-6" strokeWidth={1.7} aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-display text-2xl font-bold text-ink">{group.title}</h3>
                      <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-muted">{serviceBlurbs[group.title]}</p>
                    </div>
                  </div>
                  <ul className="mt-7 grid grid-cols-[minmax(0,1fr)] gap-1 border-t border-line pt-5">
                    {group.items.map((item) => {
                      const Icon = serviceIcons[item.href] ?? ArrowRight;
                      return (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className="group flex items-center gap-3 rounded-2xl px-1.5 py-2.5 transition-colors hover:bg-bg/60 sm:gap-4 sm:px-2"
                          >
                            <span className="mx-icon-tile">
                              <Icon className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
                            </span>
                            <span className="min-w-0 flex-1 text-base font-semibold leading-snug text-ink sm:truncate sm:text-[1.0625rem]">{item.label}</span>
                            <ArrowRight
                              className="h-5 w-5 shrink-0 text-accent transition-transform duration-200 group-hover:translate-x-1"
                              strokeWidth={2}
                              aria-hidden="true"
                            />
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
          <div className="mt-8">
            <TextLink href="/services">All services</TextLink>
          </div>
        </div>
      </section>

      {/* 5 · Industries: even 4 x 2 grid, every sector with its icon and what we measure. */}
      <section className="border-t border-line py-24 sm:py-32">
        <div className="container-edge">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end">
            <h2 className="max-w-[16ch] font-display text-h2 font-bold text-ink">Marketing that knows your buyer</h2>
            <div className="lg:justify-self-end">
              <p className="max-w-[48ch] text-lg leading-[1.6] text-muted">
                A flat buyer, a SaaS trial and a first-time online shopper decide in different ways. We
                plan for the way your customer actually decides.
              </p>
              <div className="mt-5">
                <TextLink href="/industries">All industries</TextLink>
              </div>
            </div>
          </div>

          <ul className="mt-14 grid grid-cols-[minmax(0,1fr)] gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {industryLinks.map((item) => {
              const Icon = industryIcons[item.href] ?? Building2;
              return (
                <li
                  key={item.href}
                  className="mx-card group relative flex flex-col p-6 transition-colors hover:border-accent/60 focus-within:border-accent/60"
                >
                  <span className="mx-icon-tile">
                    <Icon className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <Link
                    href={item.href}
                    className="mt-5 font-display text-xl font-bold text-ink after:absolute after:inset-0 after:rounded-[24px] after:content-['']"
                  >
                    {item.label}
                  </Link>
                  <p className="mt-4 flex-1 border-t border-line pt-4 text-sm leading-relaxed text-muted">
                    <span className="block text-xs font-semibold text-ink-2">Measured on</span>
                    {industryMeasures[item.href] ?? item.desc}
                  </p>
                  <ArrowRight
                    className="mt-4 h-5 w-5 text-accent transition-transform duration-200 group-hover:translate-x-1"
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* 6 · One real result, told properly on its own page. */}
      {featured && !featured.draft && (
        <section className="border-t border-line py-24 sm:py-28">
          <div className="container-edge">
            <article className="mx-card grid gap-10 overflow-clip [overflow-clip-margin:24px] p-8 sm:p-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
              <div>
                <p className="text-sm font-semibold text-muted">
                  Case study · {featured.industry} · {featured.locationLabel}
                </p>
                <h2 className="mt-4 max-w-[20ch] font-display text-3xl font-bold leading-[1.2] tracking-[-0.01em] text-ink sm:text-4xl">
                  {featured.headline}{" "}
                  {featured.highlight && <span className="text-ink-hi">{featured.highlight}</span>}
                </h2>
                <p className="mt-5 max-w-[52ch] text-[1.0625rem] leading-relaxed text-muted">{featured.summary}</p>
                <div className="mt-8">
                  <Cta href={`/work/${featured.slug}`}>Read the case study</Cta>
                </div>
              </div>
              <ol className="grid gap-3">
                {featured.approach.map((step, i) => (
                  <li key={step.title} className="flex gap-4 rounded-2xl border border-line bg-bg/50 p-4">
                    <span
                      aria-hidden="true"
                      className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent/60 text-sm font-bold text-accent"
                    >
                      {i + 1}
                    </span>
                    <span className="pt-1 text-[0.9375rem] font-semibold text-ink">{step.title}</span>
                  </li>
                ))}
              </ol>
            </article>
            <div className="mt-8">
              <TextLink href="/work">All case studies</TextLink>
            </div>
          </div>
        </section>
      )}

      {/* 6b · The businesses behind that proof: small, real, local. Supporting, not headline. */}
      <section aria-labelledby="clients" className="pb-24">
        <div className="container-edge flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <h2 id="clients" className="text-base font-semibold text-ink-2">
            Some of the businesses we work with
          </h2>
          <TextLink href="/work">What they say about us</TextLink>
        </div>
        <div className="mt-6">
          <LogoMarquee logos={clientLogos} rows={1} />
        </div>
      </section>

      {/* 7 · Where we work. */}
      <section className="border-t border-line py-24 sm:py-28">
        <div className="container-edge grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center">
          <div>
            <h2 className="max-w-[16ch] font-display text-h2 font-bold leading-[1.18] tracking-[-0.01em] text-ink">
              Pune first, then wherever your customers are
            </h2>
            <p className="mt-5 max-w-[48ch] text-[1.0625rem] leading-relaxed text-muted">
              Our team works from Pune. We plan and run campaigns for the Indian metros
              and for brands selling into the UAE, the UK and the US.
            </p>
            <p className="mt-6 flex items-start gap-3 text-[0.9375rem] text-ink-2">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" strokeWidth={1.9} aria-hidden="true" />
              Pune, Maharashtra, India
            </p>
          </div>
          <div className="mx-card p-7 sm:p-8">
            <p className="flex items-center gap-2 text-sm font-semibold text-muted">
              <Globe2 className="h-4 w-4 text-accent" strokeWidth={2} aria-hidden="true" />
              Markets we plan campaigns for
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {locationLinks.map((loc) => (
                <li key={loc.href}>
                  <Link
                    href={loc.href}
                    className="inline-block whitespace-nowrap rounded-full border border-line px-4 py-2 text-sm text-ink-2 transition-colors hover:border-accent hover:text-ink"
                  >
                    {loc.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 border-t border-line pt-5">
              <TextLink href="/locations">All locations</TextLink>
            </div>
          </div>
        </div>
      </section>

      {/* 8 · Questions, with the next step alongside. */}
      <section className="border-t border-line py-24 sm:py-28">
        <div className="container-edge grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <div>
            <h2 className="font-display text-h2 font-bold leading-[1.18] tracking-[-0.01em] text-ink">
              Questions people ask first
            </h2>
            <p className="mt-5 max-w-[40ch] text-[0.9375rem] leading-relaxed text-muted">
              Tell us what you sell and where. We&apos;ll show you where your enquiries are being lost.
            </p>
            <div className="mt-8 flex flex-col items-start gap-5">
              <Cta href="/growth-audit">Get a free growth audit</Cta>
              <TextLink href="/contact">Contact us</TextLink>
              <TextLink href="/faq">More answers in the FAQ</TextLink>
            </div>
          </div>
          <FaqList items={faqs} />
        </div>
      </section>
    </>
  );
}
