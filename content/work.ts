import type { CaseStudy } from "@/lib/content-types";

/**
 * Case studies. Two rules, because these emit Article + Review schema:
 *  - Never publish a metric without the `period` it was measured over.
 *  - Never publish a client name without their written approval; use
 *    `anonymised: true` with a sector descriptor instead.
 * Entries marked `draft: true` are placeholders - they are excluded from the
 * index, the sitemap and all cross-links until the real numbers land.
 */

export const workOverview = {
  eyebrow: "Case Studies",
  title: "The campaigns, the numbers,",
  highlight: "and what we actually changed",
  subtitle:
    "Every study states the baseline, the period measured and what we did. Where a client cannot be named, the sector and the numbers stay intact.",
  metaTitle: "Case Studies and Client Results",
  metaDescription:
    "Case studies from Marketix Studio in Pune: the problem, what we changed and what happened, published only with the client's approval.",
};

export const caseStudies: Record<string, CaseStudy> = {
  "jayganesh-review-system": {
    slug: "jayganesh-review-system",
    client: "Jay Ganesh Car Accessories",
    anonymised: false,
    logo: "/clients/jayganesh-logo.png",
    industry: "Automotive",
    industrySlug: "automotive",
    locationSlug: "pune",
    locationLabel: "Pune",
    // Client quotes belong on case studies, never on service pages (design.md).
    testimonialId: "maruti-kalbhor",
    headline: "An AI review page that turns happy customers into Google reviews",
    highlight: "in seconds",
    summary:
      "A car accessories business with genuinely satisfied customers and almost no Google reviews. We removed the friction between the two.",
    metaTitle: "Jay Ganesh Case Study: Google Reviews",
    metaDescription:
      "How Marketix Studio built a review page that helps Jay Ganesh Car Accessories in Pune turn happy customers into Google reviews, within Google's rules.",
    period: "TODO: add the measurement window, e.g. 'March to September 2026'",
    challenge: {
      title: "Plenty of happy customers. Almost none of them reviewing.",
      body: "Jay Ganesh had a strong walk-in trade and customers who were visibly pleased with the work. What they did not have was a review profile that reflected any of it, because leaving a review means opening Google, finding the business, thinking of something to say, and typing it on a phone while standing in a workshop.",
      points: [
        "Review volume far below what the customer base justified",
        "No systematic moment where customers were actually asked",
        "Staff uncomfortable pushing for reviews at the counter",
        "Local map pack visibility suffering as a result",
      ],
    },
    approach: [
      {
        title: "Removed the writing problem",
        body: "A branded page where the customer picks a star rating, selects the service they used, and types a few words about how it went. That is the entire input.",
      },
      {
        title: "Drafted from their own words",
        body: "The page turns those few words into a natural review the customer can edit freely. Nothing is invented: it only rephrases what they told us.",
      },
      {
        title: "Kept it inside Google's rules",
        body: "No review gating, no incentives, no auto-posting. Every rating reaches the same review link and the customer submits it themselves.",
      },
      {
        title: "Put it where customers already are",
        body: "A QR code at the counter and a WhatsApp link sent after the job, so the ask happens while the experience is still fresh.",
      },
    ],
    results: [
      { value: "TODO", label: "Increase in monthly reviews", note: "Add the before and after counts" },
      { value: "TODO", label: "Average rating", note: "Add the current Google rating" },
      { value: "Seconds", label: "Time to leave a review", note: "A star rating and a few words, instead of typing a whole review" },
    ],
    detail: [
      {
        heading: "Why this works where review requests usually fail",
        paragraphs: [
          "Most review campaigns fail at the same point. The customer is willing, and then confronted with an empty text box. Composing something articulate about seat covers is a surprisingly high barrier, and the request quietly dies there.",
          "Moving the effort from composition to confirmation changes the completion rate more than any amount of asking harder does. The customer still supplies the substance and still posts in their own words; they just are not staring at a blank field.",
        ],
      },
      {
        heading: "Staying compliant",
        paragraphs: [
          "Google prohibits fake reviews, reviews from non-customers, incentivised reviews, and review gating, which means filtering unhappy customers away from the form. It is worth being precise about this because the shortcuts are tempting and the penalties land on the client's profile, not the agency's.",
          "This system does none of those things. A one-star customer reaches exactly the same Google link as a five-star customer, the draft matches the sentiment they actually expressed, and the text is fully editable before it is submitted.",
        ],
      },
    ],
    services: [
      { label: "Local SEO & Google Business", href: "/services/local-seo-gmb" },
      { label: "Web Design & Development", href: "/services/web-design-development" },
    ],
    featured: true,
  },

  "pune-real-estate-site-visits": {
    slug: "pune-real-estate-site-visits",
    client: "A Pune residential developer",
    anonymised: true,
    industry: "Real Estate",
    industrySlug: "real-estate",
    locationSlug: "pune",
    locationLabel: "Pune",
    headline: "PLACEHOLDER — Cutting cost per site visit",
    highlight: "by optimising to visits, not leads",
    summary:
      "PLACEHOLDER. Replace with the real engagement: the project, the price bracket, the lead-to-visit problem and what changed.",
    metaTitle: "Case Study: Real Estate Lead Generation in Pune",
    metaDescription:
      "PLACEHOLDER — replace with a real description of the engagement, the baseline and the measured outcome.",
    period: "TODO: add the measurement window",
    challenge: {
      title: "PLACEHOLDER — describe where they started.",
      body: "Replace with the real starting position, including the baseline numbers. A case study without a baseline is just a claim.",
      points: [
        "PLACEHOLDER — the specific problem, with numbers",
        "PLACEHOLDER — what they had tried before",
        "PLACEHOLDER — where the funnel was leaking",
        "PLACEHOLDER — what it was costing them",
      ],
    },
    approach: [
      { title: "PLACEHOLDER — first thing you did", body: "Replace with the actual first move and why." },
      { title: "PLACEHOLDER — second", body: "Replace with what you changed and the reasoning." },
      { title: "PLACEHOLDER — third", body: "Replace with the next intervention." },
      { title: "PLACEHOLDER — fourth", body: "Replace with how it was scaled or sustained." },
    ],
    results: [
      { value: "TODO", label: "Cost per site visit", note: "Add baseline and final figure" },
      { value: "TODO", label: "Lead-to-visit rate", note: "Add baseline and final figure" },
      { value: "TODO", label: "Bookings attributed", note: "Add the period measured" },
    ],
    services: [
      { label: "Performance Marketing", href: "/services/performance-marketing" },
      { label: "Meta Ads", href: "/services/meta-ads" },
      { label: "Landing Pages & Funnels", href: "/services/landing-pages-funnels" },
    ],
    draft: true,
  },

  "d2c-roas-scale": {
    slug: "d2c-roas-scale",
    client: "PLACEHOLDER — client name or sector descriptor",
    anonymised: true,
    industry: "eCommerce & D2C",
    industrySlug: "ecommerce-d2c",
    headline: "PLACEHOLDER — Scaling spend without losing margin",
    summary:
      "PLACEHOLDER. Replace with the real engagement: the category, the margin structure and what was fixed.",
    metaTitle: "Case Study: D2C eCommerce ROAS and Scale",
    metaDescription:
      "PLACEHOLDER — replace with a real description of the engagement, the baseline and the measured outcome.",
    period: "TODO: add the measurement window",
    challenge: {
      title: "PLACEHOLDER — describe where they started.",
      body: "Replace with the real starting position and baseline numbers.",
      points: [
        "PLACEHOLDER — the specific problem, with numbers",
        "PLACEHOLDER — what happened when they tried to scale",
        "PLACEHOLDER — what the reporting was hiding",
        "PLACEHOLDER — the margin reality",
      ],
    },
    approach: [
      { title: "PLACEHOLDER — first thing you did", body: "Replace with the actual first move and why." },
      { title: "PLACEHOLDER — second", body: "Replace with what you changed." },
      { title: "PLACEHOLDER — third", body: "Replace with the next intervention." },
      { title: "PLACEHOLDER — fourth", body: "Replace with how it was scaled." },
    ],
    results: [
      { value: "TODO", label: "Blended ROAS", note: "Add baseline and final figure" },
      { value: "TODO", label: "Monthly ad spend", note: "Add the scale achieved" },
      { value: "TODO", label: "Repeat purchase rate", note: "Add the period measured" },
    ],
    services: [
      { label: "Meta Ads", href: "/services/meta-ads" },
      { label: "Google Ads & PPC", href: "/services/google-ads-ppc" },
      { label: "Email Marketing & Automation", href: "/services/email-marketing-automation" },
    ],
    draft: true,
  },
};

export const caseStudyList = Object.values(caseStudies);
/** Everything published - drafts stay out of the index, sitemap and cross-links. */
export const publishedCaseStudies = caseStudyList.filter((study) => !study.draft);
export const caseStudySlugs = Object.keys(caseStudies);
export const publishedCaseStudySlugs = publishedCaseStudies.map((study) => study.slug);

export function caseStudiesForIndustry(industrySlug: string) {
  return publishedCaseStudies.filter((study) => study.industrySlug === industrySlug);
}

export function caseStudiesForLocation(locationSlug: string) {
  return publishedCaseStudies.filter((study) => study.locationSlug === locationSlug);
}

/** Industry facets for the index filter, built from what is actually published. */
export const caseStudyIndustries = Array.from(
  new Map(publishedCaseStudies.map((s) => [s.industrySlug, s.industry])).entries(),
).map(([slug, label]) => ({ slug, label }));
