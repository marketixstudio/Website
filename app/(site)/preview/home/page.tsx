/* Home page v2 PREVIEW (noindex, not in the sitemap). The user asked (2026-10-08) for the
 * live marketixstudio.com homepage's style and section order: photo/visual splits with
 * violet gradient overlay cards, section labels, glossy icons, a testimonial row, a
 * 4-step process and fade-ins. Honest-content rules still apply: only the 3 verified
 * testimonials, no counters, our own glossy icons. The two photos are the live site's own, shown whole (no crop).
 * Compare with "/" and promote once approved.
 */
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Check,
  FileText,
  Mail,
  Map,
  MonitorSmartphone,
  MousePointerClick,
  Palette,
  Quote,
  Rocket,
  Search,
  Share2,
  Sparkles,
  Star,
  TrendingUp,
} from "lucide-react";
import { ClientLogoLoop } from "@/components/home/client-logo-loop";
import { DemandMap } from "@/components/home/demand-map";
import { HeroThreads } from "@/components/home/hero-threads";
import { GlossIcon } from "@/components/home-v2/gloss-icon";
import { RevealRoot } from "@/components/home-v2/reveal-root";
import { Eyebrow } from "@/components/ui/section-heading";
import { AnswerCard, Cta, FaqList, TextLink } from "@/components/v2/primitives";
import { clientLogos, testimonials } from "@/content/testimonials";
import { getBlogPosts } from "@/lib/blog";
import type { AnswerBlock, QA } from "@/lib/content-types";
import { business } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Home page preview",
  robots: { index: false, follow: false },
};

/** Only the quotes recorded as verified in design.md (user choice 2026-10-08). */
const VERIFIED = ["maruti-kalbhor", "pibm", "reviveup-drinks"];
const proof = VERIFIED.map((id) => testimonials.find((t) => t.id === id)).filter((t): t is NonNullable<typeof t> => Boolean(t));

const bestAt = [
  { label: "Performance marketing", href: "/services/performance-marketing" },
  { label: "Real estate lead generation", href: "/industries/real-estate" },
  { label: "SEO and content strategy", href: "/services/seo-services" },
  { label: "Paid ads on Google and Meta", href: "/services/google-ads-ppc" },
  { label: "Brand strategy", href: "/services/branding-design" },
  { label: "Conversion optimisation", href: "/services/conversion-rate-optimisation" },
];

const pillars = [
  {
    icon: BarChart3,
    title: "Data-driven decisions",
    body: "Every campaign is steered by tracked enquiries and sales, so the budget goes where it actually converts.",
    link: { label: "How we work", href: "/approach" },
  },
  {
    icon: Sparkles,
    title: "Creative that converts",
    body: "Bold creative written to a performance brief, because good marketing has to look right and sell.",
    link: { label: "Branding and design", href: "/services/branding-design" },
  },
  {
    icon: FileText,
    title: "Transparent reporting",
    body: "A plain monthly report on what worked, what we changed and what it produced. No jargon, no vanity numbers.",
    link: { label: "About the studio", href: "/about" },
  },
];

const coreServices = [
  {
    icon: Share2,
    title: "Social media marketing",
    body: "Turn followers into customers with platform-specific content for Instagram, Facebook and LinkedIn that builds trust and brings real enquiries.",
    href: "/services/social-media-marketing",
  },
  {
    icon: Search,
    title: "Content marketing and SEO",
    body: "Rank for the searches your buyers make, with SEO-led articles, landing pages and authority content that bring steady organic leads.",
    href: "/services/seo-services",
  },
  {
    icon: MousePointerClick,
    title: "Google Ads and PPC",
    body: "Reach people the moment they search. Google and Meta campaigns focused on conversions, not clicks, so every rupee of budget is accountable.",
    href: "/services/google-ads-ppc",
  },
  {
    icon: Mail,
    title: "Email marketing and automation",
    body: "Follow-up that nurtures leads, wakes up cold prospects and recovers abandoned carts, from real estate sequences to eCommerce flows.",
    href: "/services/email-marketing-automation",
  },
  {
    icon: Palette,
    title: "Branding and design",
    body: "Logo, visual identity and messaging that help a brand stand out, earn trust quickly and justify a premium price.",
    href: "/services/branding-design",
  },
  {
    icon: MonitorSmartphone,
    title: "Web design and development",
    body: "Fast, mobile-first websites built to rank on Google and turn visitors into enquiries around the clock.",
    href: "/services/web-design-development",
  },
];

/** Same four steps as /approach, so the two pages never disagree. */
const process = [
  { icon: Search, title: "Audit and strategy call", body: "We look at your ads, website, Google Business Profile and tracking in a free growth audit, and find where enquiries leak." },
  { icon: Map, title: "A written growth plan", body: "We agree the channels, the offer, the creative direction and what success is measured on before any budget goes live." },
  { icon: Rocket, title: "Build and launch", body: "Campaigns, landing pages, creative and tracking go live together, not one at a time." },
  { icon: TrendingUp, title: "Report, improve, scale", body: "Every month you see what changed and what it produced. We double down on what works and cut what doesn't." },
];

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
    q: "How much do digital marketing agencies charge in India?",
    a: "Most charge a monthly management fee, and the ad budget is paid separately, straight to Google or Meta. Fees depend on the channels, the number of campaigns and the content involved, so fixed packages rarely fit. We quote after a free growth audit, based on what your business actually needs.",
  },
  {
    q: "Are digital marketing agencies worth it?",
    a: "They are when they are accountable for business results rather than activity. A good agency brings skills across ads, SEO, websites and tracking that are expensive to hire in-house, and reports on leads and revenue. Before you sign, ask any agency how it tracks enquiries back to campaigns.",
  },
  {
    q: "How do I choose a digital marketing agency?",
    a: "Ask to see work in your industry, how leads and sales are tracked, who will run your account day to day and what you will see in each report. Be wary of guaranteed rankings or results, and of arrangements that keep your ad accounts in the agency's name: your accounts and data should always belong to you.",
  },
  {
    q: "How long does digital marketing take to show results?",
    a: "Paid ads can bring enquiries within days of going live and improve over the first months as data builds. SEO and content take longer; Google itself says SEO usually needs four months to a year to show its benefit. A good plan uses ads for early results while the slower channels build.",
  },
];

/** Whole years since the studio started (2023 → "3+" in 2026). */
const yearsActive = new Date().getFullYear() - Number(business.foundingDate);

/** Live-site section heading size. */
const H2 = "font-display text-[clamp(2.3rem,4.2vw,4rem)] font-bold leading-[1.12] tracking-[-0.01em] text-ink";

/** Computed from the verified quotes shown, never typed in. */
const averageRating = (proof.reduce((sum, t) => sum + (t.rating ?? 5), 0) / Math.max(1, proof.length)).toFixed(1);

const delay = (ms: number) => ({ ["--mx-delay" as string]: `${ms}ms` }) as React.CSSProperties;

function Stars() {
  return (
    <span className="flex gap-1 text-gold" aria-label="5 out of 5">
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} className="h-4 w-4 fill-current" strokeWidth={0} aria-hidden="true" />
      ))}
    </span>
  );
}

export default async function HomePreviewPage() {
  const posts = (await getBlogPosts()).slice(0, 3);

  return (
    <>
      <RevealRoot />

      {/* 1 · Hero, unchanged: the live site's composition (the page's one designed entrance). */}
      <section className="pb-20 pt-24 sm:pb-24 sm:pt-28 lg:pt-36">
        <div className="container-wide">
          <div className="relative isolate flex min-h-[min(86vh,780px)] flex-col justify-between overflow-hidden rounded-[28px] border border-line bg-card px-6 pb-8 pt-12 sm:px-12 sm:pb-12 sm:pt-16 lg:px-16 lg:pb-16">
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 opacity-70 lg:opacity-100">
                <HeroThreads />
              </div>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgb(var(--card)/0.45)_0%,rgb(var(--card)/0.6)_45%,rgb(var(--card)/0.78)_100%)] lg:hidden"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 hidden bg-[radial-gradient(ellipse_75%_65%_at_18%_28%,rgb(var(--card)/0.92)_0%,rgb(var(--card)/0.6)_45%,transparent_75%),radial-gradient(ellipse_55%_45%_at_78%_82%,rgb(var(--card)/0.9)_0%,rgb(var(--card)/0.5)_50%,transparent_80%)] lg:block"
              />
            </div>
            <h1 className="max-w-[18ch] font-display text-[clamp(2.6rem,6.4vw+0.2rem,6.25rem)] font-bold leading-[1.1] tracking-[-0.015em] text-ink">
              Performance Marketing Agency for Real Estate, Startups &amp; eCommerce
            </h1>
            <div className="mt-12 grid grid-cols-[minmax(0,1fr)] gap-8 lg:grid-cols-2">
              <p className="hidden self-end text-sm font-medium text-muted lg:block">Pune, India</p>
              <div>
                <p className="max-w-[46ch] text-lg leading-[1.6] text-ink-2">
                  We help real estate developers, startups, SaaS companies and eCommerce brands grow with
                  performance marketing and conversion-focused execution. Based in Pune, working with brands
                  across India and abroad.
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

      {/* 2 · Our expertise, matched to the live site's sizes: a tall photo (about 40% of the row)
       * with a card set into its cut-out corner; the heading, copy, checklist and years card. */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto grid w-full max-w-[1480px] grid-cols-[minmax(0,1fr)] items-start gap-14 px-5 sm:px-10 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:gap-14 lg:px-12">
          <div className="mx-reveal relative">
            <div className="mx-notch-photo aspect-[4/3] sm:aspect-[5/4] lg:aspect-[4/5]">
              <Image
                src="/home/team-creative-review.jpg"
                alt="A creative team reviewing campaign visuals at their desks"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="mx-notch mx-notch--tl max-sm:w-auto sm:w-[66%]">
              <div className="mx-glow-card p-6 sm:p-7">
                <h3 className="font-display text-xl font-bold leading-snug text-ink sm:text-[1.6rem] sm:leading-[1.3]">
                  Ready to grow your digital marketing presence?
                </h3>
                <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted sm:text-base">
                  Let&apos;s build a marketing plan aligned with your goals.
                </p>
                <div className="mt-6">
                  <TextLink href="/growth-audit">Get a free consultation</TextLink>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-reveal" style={delay(120)}>
            <Eyebrow>Our expertise</Eyebrow>
            <h2 className="mt-6 font-display text-[clamp(2.4rem,4.7vw,4.6rem)] font-bold leading-[1.12] tracking-[-0.01em] text-ink">
              Data-driven marketing, measurable business results
            </h2>
            <p className="mt-7 max-w-[64ch] text-[1.0625rem] leading-relaxed text-muted">
              At Marketix Studio, every plan starts from your numbers: who is already searching, what an enquiry
              is worth to you and where leads are slipping away.
            </p>
            <p className="mt-5 max-w-[64ch] text-[1.0625rem] leading-relaxed text-muted">
              Whether you are a real estate developer filling inventory, a SaaS brand growing its pipeline or an
              eCommerce store chasing profitable ROAS, the work is judged on what it brings in.
            </p>
            <div className="mt-10 grid grid-cols-[minmax(0,1fr)] items-start gap-8 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
              <div>
                <h3 className="font-display text-2xl font-bold text-ink">What we do best</h3>
                <ul className="mt-6 grid grid-cols-[minmax(0,1fr)] gap-3.5">
                  {bestAt.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="group inline-flex items-center gap-3.5 text-base font-medium text-ink-2 transition-colors hover:text-ink">
                        <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-[1.5px] border-accent text-accent transition-colors group-hover:bg-accent group-hover:text-accent-ink">
                          <Check className="h-3.5 w-3.5" strokeWidth={2.75} aria-hidden="true" />
                        </span>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mx-glow-card p-7 sm:p-8">
                <div className="flex items-center gap-4">
                  <span aria-hidden="true" className="font-display text-[5.5rem] font-bold leading-none text-transparent [-webkit-text-stroke:2px_rgb(var(--accent))]">
                    {yearsActive}
                  </span>
                  <span aria-hidden="true" className="font-display text-4xl font-bold leading-none text-transparent [-webkit-text-stroke:1.5px_rgb(var(--accent))]">
                    +
                  </span>
                  <p className="font-display text-xl font-bold leading-snug text-ink">
                    <span className="sr-only">{yearsActive}+ </span>Years delivering results for growing brands
                  </p>
                </div>
                <p className="mt-6 text-base leading-relaxed text-muted">
                  Helping businesses grow online since {business.foundingDate}, with marketing focused on leads,
                  conversions and long-term growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 · Who we grow, with the real client logos. */}
      <section className="py-20 sm:py-24">
        <div className="container-edge mx-reveal grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end">
          <h2 className="max-w-[18ch] font-display text-h2 font-bold leading-[1.15] text-ink">
            Digital marketing that drives real business growth
          </h2>
          <p className="max-w-[52ch] text-[1.0625rem] leading-relaxed text-muted lg:justify-self-end">
            We partner with real estate developers, growing startups and eCommerce brands to build visibility,
            bring in quality leads and grow revenue, not just online activity.
          </p>
        </div>
        <div className="mx-reveal mt-12" style={delay(120)}>
          <ClientLogoLoop logos={clientLogos} />
        </div>
      </section>

      {/* 4 · Why choose us, as on the live site: three staggered pillar cards with the icon set
       * into their left edge, and the promise with a notched photo and card on the right. */}
      <section className="py-24 sm:py-32">
        <div className="container-edge grid grid-cols-[minmax(0,1fr)] items-center gap-16 lg:grid-cols-2 lg:gap-16">
          <ul className="order-2 grid grid-cols-[minmax(0,1fr)] gap-5 lg:order-1">
            {pillars.map((p, i) => (
              <li
                key={p.title}
                className={`mx-reveal mx-card relative p-7 sm:py-8 sm:pl-28 sm:pr-8 ${i === 2 ? "" : "sm:ml-10"} ${i === 1 ? "lg:ml-20" : ""}`}
                style={delay(i * 120)}
              >
                <div className="sm:mx-edge-icon">
                  <GlossIcon icon={p.icon} size="lg" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold text-ink sm:mt-0">{p.title}</h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">{p.body}</p>
                <div className="mt-5">
                  <TextLink href={p.link.href}>{p.link.label}</TextLink>
                </div>
              </li>
            ))}
          </ul>

          <div className="mx-reveal order-1 lg:order-2" style={delay(120)}>
            <Eyebrow>Why choose Marketix Studio</Eyebrow>
            <h2 className="mt-5 max-w-[16ch] font-display text-h2 font-bold leading-[1.15] text-ink">Your growth is our only brief</h2>
            <p className="mt-5 max-w-[60ch] text-[1.0625rem] leading-relaxed text-muted">
              The right agency can make or break a year of growth. We build each plan around your business, your
              buyers and your numbers, run the channels together and stay accountable for the enquiries they bring.
              Based in Pune, working with brands across India and abroad.
            </p>
            <div className="relative mt-10">
              <div className="mx-notch-photo aspect-[3/2]">
                <Image
                  src="/home/team-planning-table.jpg"
                  alt="A team reviewing marketing reports around a meeting table"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="mx-notch max-sm:w-auto mx-notch--br w-[min(20rem,calc(100%-3rem))]">
                <div className="mx-glow-card p-6">
                  <p className="font-display text-lg font-bold leading-snug text-ink">
                    Partner with Marketix Studio and turn your marketing into a steady source of enquiries.
                  </p>
                  <div className="mt-4">
                    <TextLink href="/growth-audit">Let&apos;s build your strategy</TextLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5 · Core services, as on the live site: centred heading, cards with the icon beside the
       * title, a full-width "View details" button, and the custom-solution line. */}
      <section className="py-24 sm:py-32">
        <div className="container-edge">
          <div className="mx-reveal mx-auto max-w-4xl text-center">
            <Eyebrow>Our core services</Eyebrow>
            <h2 className={`mt-6 ${H2}`}>Digital solutions that drive real results</h2>
          </div>
          <ul className="mt-16 grid grid-cols-[minmax(0,1fr)] gap-6 md:grid-cols-2 lg:grid-cols-3">
            {coreServices.map((s, i) => (
              <li key={s.href} className="mx-reveal mx-card mx-glow group flex flex-col p-7 transition-colors hover:border-accent/50 sm:p-8" style={delay((i % 3) * 120)}>
                <div className="flex items-center gap-5">
                  <GlossIcon icon={s.icon} size="lg" />
                  <h3 className="font-display text-2xl font-bold leading-snug text-ink">{s.title}</h3>
                </div>
                <p className="mt-6 flex-1 text-base leading-relaxed text-muted">{s.body}</p>
                <Link href={s.href} className="mx-cta mt-8 w-full" aria-label={`View details: ${s.title}`}>
                  <span className="flex-1 text-center">View details</span>
                  <span className="mx-cta__arrow" aria-hidden="true">
                    <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mx-reveal mt-12 text-center text-base font-medium text-ink-2">
            Need a custom solution? Let&apos;s build a marketing strategy tailored to your business.{" "}
            <Link href="/growth-audit" className="whitespace-nowrap font-semibold text-accent underline-offset-4 hover:underline">
              Get a free strategy call &rarr;
            </Link>
          </p>
        </div>
      </section>

      {/* 6 · Where customers come from: our interactive demand map, in the slot where the live
       * site shows template case studies (those numbers were not ours to publish). */}
      <section className="py-24 sm:py-28">
        <div className="container-edge grid grid-cols-[minmax(0,1fr)] items-center gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <div className="mx-reveal">
            <Eyebrow>Where customers come from</Eyebrow>
            <h2 className={`mt-6 max-w-[14ch] ${H2}`}>Search, social and maps, working as one</h2>
            <p className="mt-6 max-w-[46ch] text-[1.0625rem] leading-relaxed text-muted">
              Most customers find you in one of three places: a Google search, a social feed or Google Maps. This is
              how each of them turns into an enquiry.
            </p>
            <div className="mt-8">
              <TextLink href="/services">How we run each channel</TextLink>
            </div>
          </div>
          <div className="mx-reveal" style={delay(120)}>
            <DemandMap />
          </div>
        </div>
      </section>

      {/* 7 · What our clients say, as on the live site: a stats card beside the headline card (with
       * its violet base), then the quotes. Verified quotes only; every number is computed from them. */}
      <section className="py-24 sm:py-32">
        <div className="container-edge">
          <div className="grid grid-cols-[minmax(0,1fr)] gap-6 lg:grid-cols-[minmax(0,0.36fr)_minmax(0,0.64fr)]">
            <div className="mx-reveal mx-glow-card flex flex-col p-7 sm:p-8">
              <div className="flex items-center justify-center gap-4">
                <div className="flex -space-x-3">
                  {proof.map((t) => (
                    <Image key={t.id} src={t.image ?? ""} alt="" width={48} height={48} className="h-12 w-12 rounded-full border-2 border-accent bg-white object-contain" />
                  ))}
                </div>
                <p className="font-display text-lg font-bold leading-tight text-ink">
                  Verified
                  <br />
                  client reviews
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 divide-x divide-line text-center">
                <div>
                  <p className="font-display text-5xl font-bold text-ink">{averageRating}</p>
                  <p className="mt-2 text-sm text-muted">Average rating</p>
                </div>
                <div>
                  <p className="font-display text-5xl font-bold text-ink">{clientLogos.length}</p>
                  <p className="mt-2 text-sm text-muted">Brands we work with</p>
                </div>
              </div>
              <ul className="mt-8 grid gap-3">
                {["Social media growth", "Performance marketing"].map((chip) => (
                  <li key={chip} className="flex items-center justify-center gap-2.5 rounded-2xl border border-line bg-bg px-4 py-3.5 text-[0.9375rem] font-medium text-ink-2">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border-[1.5px] border-accent text-accent">
                      <Check className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
                    </span>
                    {chip}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mx-reveal rounded-[28px] bg-accent pb-6" style={delay(120)}>
              <div className="mx-card h-full p-8 sm:p-10">
                <Eyebrow>What our clients say</Eyebrow>
                <h2 className={`mt-6 ${H2}`}>Real clients. Real results. Real growth.</h2>
                <p className="mt-6 max-w-[60ch] text-[1.0625rem] leading-relaxed text-muted">
                  How businesses in education, food and drink and car accessories grew their social media, websites
                  and Google presence with Marketix Studio.
                </p>
              </div>
            </div>
          </div>

          <ul className="mt-6 grid grid-cols-[minmax(0,1fr)] gap-6 lg:grid-cols-3">
            {proof.map((t, i) => (
              <li key={t.id} className="mx-reveal mx-card flex flex-col p-7 sm:p-8" style={delay(i * 120)}>
                <Stars />
                <div className="mt-6 flex items-start gap-4">
                  <Image src={t.image ?? ""} alt="" width={56} height={56} className="h-14 w-14 shrink-0 rounded-full bg-white object-contain" />
                  <div className="min-w-0 flex-1">
                    <p className="font-display text-lg font-bold leading-snug text-ink">{t.author}</p>
                    <p className="mt-0.5 text-sm text-muted">{t.role}</p>
                  </div>
                  <Quote className="h-10 w-10 shrink-0 rotate-180 text-accent" strokeWidth={1.75} aria-hidden="true" />
                </div>
                <blockquote className="mt-6 flex-1 text-base leading-relaxed text-ink-2">&ldquo;{t.quote}&rdquo;</blockquote>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 8 · How it works, as on the live site: one large panel, the heading beside the intro,
       * and the four steps as columns divided by violet lines. Same steps as /approach. */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto w-full max-w-[1480px] px-4 sm:px-6 lg:px-8">
          <div className="mx-reveal mx-card relative overflow-hidden rounded-[32px] px-6 py-14 sm:px-12 sm:py-20 lg:px-16">
            <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-[radial-gradient(45%_60%_at_50%_100%,rgb(var(--accent)/0.22),transparent_75%)]" />
            <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end">
              <div>
                <Eyebrow>How it works</Eyebrow>
                <h2 className={`mt-6 max-w-[14ch] ${H2}`}>Our 4-step digital marketing process</h2>
              </div>
              <div className="lg:pb-2">
                <p className="max-w-[52ch] text-[1.0625rem] leading-relaxed text-muted">
                  A clear path built around your business goals, from strategy to execution to scale. No guesswork, no
                  wasted budget.
                </p>
                <div className="mt-6">
                  <TextLink href="/growth-audit">Get a free strategy call</TextLink>
                </div>
              </div>
            </div>

            <ol className="relative mt-12 grid grid-cols-[minmax(0,1fr)] gap-8 rounded-[24px] border border-accent/60 bg-bg/60 p-6 sm:p-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-0">
              {process.map((step, i) => (
                <li key={step.title} className={`flex flex-col ${i > 0 ? "lg:border-l lg:border-accent/35" : ""} lg:px-7 ${i === 0 ? "lg:pl-0" : ""} ${i === 3 ? "lg:pr-0" : ""}`}>
                  <div className="flex items-start justify-between">
                    <GlossIcon icon={step.icon} size="sm" />
                    <span aria-hidden="true" className="font-display text-sm font-bold text-ink-2">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold leading-snug text-ink">
                    <span className="sr-only">Step {i + 1}: </span>
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* 9 · Insights, as on the live site: the heading beside the intro, then the latest articles. */}
      {posts.length > 0 && (
        <section className="py-24 sm:py-32">
          <div className="container-edge">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
              <div className="mx-reveal">
                <Eyebrow>Insights and strategies</Eyebrow>
                <h2 className={`mt-6 max-w-[16ch] ${H2}`}>Marketing strategies that actually work</h2>
              </div>
              <div className="mx-reveal" style={delay(120)}>
                <p className="max-w-[48ch] text-[1.0625rem] leading-relaxed text-muted">
                  Practical guides on ads, SEO and Google Maps for real estate developers, startups and growing brands,
                  written from the work we do for clients.
                </p>
                <div className="mt-6">
                  <TextLink href="/blog">View all articles</TextLink>
                </div>
              </div>
            </div>
            <ul className="mt-14 grid grid-cols-[minmax(0,1fr)] gap-6 md:grid-cols-3">
              {posts.map((post, i) => (
                <li key={post.slug} className="mx-reveal mx-card group relative flex flex-col p-7 transition-colors hover:border-accent/60 focus-within:border-accent/60" style={delay(i * 120)}>
                  <p className="text-sm font-semibold text-accent">{post.category}</p>
                  <h3 className="mt-3 font-display text-xl font-bold leading-snug text-ink">
                    <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0 after:rounded-[24px] after:content-['']">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-muted">{post.excerpt}</p>
                  <p className="mt-5 flex items-center justify-between border-t border-line pt-4 text-sm text-muted">
                    {post.readTime}
                    <span className="mx-row-go" aria-hidden="true">
                      <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
                    </span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* 10 · The answer for AI search, then the questions people ask first. */}
      <section className="py-24 sm:py-28">
        <div className="container-edge">
          <div className="mx-reveal">
            <AnswerCard block={answer} id="answer" />
          </div>
          <div className="mt-16 grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
            <div className="mx-reveal">
              <Eyebrow>FAQ</Eyebrow>
              <h2 className="mt-5 font-display text-h2 font-bold leading-[1.18] text-ink">Questions people ask first</h2>
              <div className="mt-8 flex flex-col items-start gap-5">
                <Cta href="/growth-audit">Get a free growth audit</Cta>
                <TextLink href="/faq">More answers in the FAQ</TextLink>
              </div>
            </div>
            <div className="mx-reveal" style={delay(120)}>
              <FaqList items={faqs} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
