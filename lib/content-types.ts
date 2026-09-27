import type { LucideIcon } from "lucide-react";
import type { Feature } from "@/components/sections/feature-cards";
import type { Step } from "@/components/sections/steps";
import type { Outcome } from "@/components/sections/outcomes";
import type { QA } from "@/components/sections/faq";

export type { Feature, Step, Outcome, QA };

/**
 * Answer-first block rendered directly under the H1 on every indexable page.
 * `answer` is written to stand alone as a 40-60 word extractable response for
 * AI Overviews / ChatGPT / Perplexity; `keyFacts` become the citable bullets.
 */
export type AnswerBlock = {
  question: string;
  answer: string;
  keyFacts?: string[];
};

export type ServiceContent = {
  slug: string;
  title: string;
  highlight?: string;
  eyebrow: string;
  subtitle: string;
  metaTitle: string;
  metaDescription: string;
  answerBlock: AnswerBlock;
  problem: { title: string; body: string; points: string[] };
  /** Deprecated: invented stats removed. Real results live on case studies. */
  outcomes?: Outcome[];
  included: string[];
  features?: Feature[];
  steps: Step[];
  tools: string[];
  faqs: QA[];
};

export type IndustryContent = {
  slug: string;
  title: string;
  highlight?: string;
  eyebrow: string;
  subtitle: string;
  metaTitle: string;
  metaDescription: string;
  answerBlock: AnswerBlock;
  challenges: Feature[];
  solution: { title: string; body: string; points: string[] };
  services: { label: string; href: string }[];
  workflow: Step[];
  faqs: QA[];
};

export type LocationContent = {
  slug: string;
  title: string;
  area: string;
  nearby: string[];
  eyebrow: string;
  subtitle: string;
  metaTitle: string;
  metaDescription: string;
  answerBlock: AnswerBlock;
  /** ISO 3166-1 alpha-2. Drives LocalBusiness/Service `areaServed` + currency copy. */
  countryCode: string;
  countryName: string;
  reasons: Feature[];
  solution: { title: string; body: string; points: string[] };
  services: { label: string; href: string }[];
  process: Step[];
  faqs: QA[];
};

export type ProductContent = {
  slug: string;
  name: string;
  tagline: string;
  subtitle: string;
  metaTitle: string;
  metaDescription: string;
  useCases: Feature[];
  features: Feature[];
  howItWorks: Step[];
  integrations: string[];
  security: Feature[];
  demoCta?: string;
  externalUrl?: string;
  externalLabel?: string;
  faqs?: QA[];
  preview?: {
    stats: { value: string; label: string }[];
    rows: { label: string; value: string }[];
  };
};

export type OverviewCard = {
  label: string;
  href: string;
  body: string;
  icon?: LucideIcon;
};

export type OverviewContent = {
  eyebrow: string;
  title: string;
  highlight?: string;
  subtitle: string;
  metaTitle: string;
  metaDescription: string;
  cards: OverviewCard[];
  cardsTitle?: string;
  intro?: { eyebrow?: string; title: string; body: string; points: string[] };
  process?: Step[];
  faqs?: QA[];
};

export type LegalContent = {
  slug: string;
  title: string;
  updated: string;
  intro: string;
  sections: { heading: string; body: string[] }[];
};

export type CaseStudyResult = {
  value: string;
  label: string;
  /** Baseline or caveat, e.g. "vs 1.8x before" - keeps the claim honest. */
  note?: string;
};

export type CaseStudy = {
  slug: string;
  /** Real name when approved, otherwise a descriptor like "A Pune real estate developer". */
  client: string;
  anonymised: boolean;
  logo?: string;
  industry: string;
  /** Must match a slug in content/industries.ts so the industry page can surface this. */
  industrySlug: string;
  /** Must match a slug in content/locations.ts so the location page can surface this. */
  locationSlug?: string;
  locationLabel?: string;
  headline: string;
  highlight?: string;
  summary: string;
  metaTitle: string;
  metaDescription: string;
  /** The window the results were measured over - required for any published metric. */
  period: string;
  challenge: { title: string; body: string; points: string[] };
  approach: Step[];
  results: CaseStudyResult[];
  detail?: { heading: string; paragraphs: string[] }[];
  /** id from content/testimonials.ts - rendered inline on the study. */
  testimonialId?: string;
  services: { label: string; href: string }[];
  image?: string;
  featured?: boolean;
  /** Placeholder content - hidden from the index, sitemap and cross-links. */
  draft?: boolean;
};

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  image?: string;
  linkedin?: string;
  /** Feeds Person schema - helps entity recognition for E-E-A-T. */
  expertise?: string[];
};

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  industry?: string;
  rating?: 1 | 2 | 3 | 4 | 5;
  image?: string;
  /** Headline metric to show alongside the quote, e.g. "4.2x ROAS". */
  metric?: { value: string; label: string };
};

export type ToolContent = {
  slug: string;
  name: string;
  tagline: string;
  subtitle: string;
  metaTitle: string;
  metaDescription: string;
  answerBlock: AnswerBlock;
  /** Which interactive component to mount inside the tool page shell. */
  widget: "roas" | "ad-budget" | "utm" | "review-demo" | "none";
  howItWorks: Step[];
  features: Feature[];
  faqs: QA[];
  relatedServices?: { label: string; href: string }[];
};

/**
 * One deployed instance of the AI review generator, served at /r/[client].
 * Adding a client is a config entry - no new code, no new deploy pipeline.
 */
export type ReviewClient = {
  slug: string;
  businessName: string;
  logo?: string;
  /** Google "write a review" deep link, e.g. https://g.page/r/XXXX/review */
  googleReviewUrl: string;
  headline: string;
  highlight: string;
  subheadline: string;
  /** Options in the "what did you use?" dropdown. */
  services: string[];
  placeholder: string;
  /** Brand accent for this client's page, any valid CSS color. */
  accent: string;
  accentInk: string;
  /** Tone hints passed to the model when drafting the review. */
  tone?: string;
  active: boolean;
  /** Optional "What stood out?" chips on the review page; the customer taps up to 3. */
  highlights?: string[];
  /** Shown in replies to low ratings so the customer can reach the shop, e.g. a phone number. */
  replyContact?: string;
  /**
   * Google Business Profile ids for automatic replies (from /api/gbp/locations after the
   * one-time sign-in). Leave unset to keep automatic replies off for this client.
   */
  gbp?: { accountId: string; locationId: string };
};

export type BlogSection = { heading?: string; paragraphs: string[]; points?: string[] };

export type BlogSeoImage = {
  url: string;
  alt?: string;
  width?: number;
  height?: number;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  metaTitle: string;
  metaDescription: string;
  focusKeyword?: string;
  secondaryKeywords?: string[];
  breadcrumbTitle?: string;
  canonicalUrl?: string;
  schemaType?: "BlogPosting" | "Article" | "NewsArticle";
  dateModified?: string;
  featuredImage?: BlogSeoImage;
  openGraphTitle?: string;
  openGraphDescription?: string;
  openGraphImage?: BlogSeoImage;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: BlogSeoImage;
  twitterCard?: "summary" | "summary_large_image";
  robotsIndex?: boolean;
  robotsFollow?: boolean;
  robotsNoArchive?: boolean;
  robotsNoImageIndex?: boolean;
  robotsNoSnippet?: boolean;
  robotsMaxSnippet?: number;
  robotsMaxVideoPreview?: number;
  robotsMaxImagePreview?: "none" | "standard" | "large";
  excludeFromSitemap?: boolean;
  redirectUrl?: string;
  redirectPermanent?: boolean;
  sections: BlogSection[];
  /** Rendered as a visible FAQ and FAQPage schema (answer-engine friendly). */
  faqs?: QA[];
};
