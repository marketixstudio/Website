import type { Feature, QA, Step, AnswerBlock } from "@/lib/content-types";
import {
  CalendarCheck,
  FileSpreadsheet,
  ListChecks,
  MapPin,
  MessageSquareQuote,
  Rocket,
  Search,
  Star,
  Target,
} from "lucide-react";

export type DigitalProduct = {
  slug: string;
  name: string;
  shortDescription: string;
  metaTitle: string;
  metaDescription: string;
  tagline: string;
  subtitle: string;
  /** Prices are the source of truth for both the page and the checkout route. */
  /** False takes it off sale everywhere: no buy card, no price, no Product schema, checkout refused. */
  onSale: boolean;
  priceInr: number;
  /** Omit until a USD price is confirmed — the international (Stripe) option hides without it. */
  priceUsd?: number;
  compareAtInr?: number;
  answerBlock: AnswerBlock;
  includes: Feature[];
  whoFor: string[];
  howItWorks: Step[];
  faqs: QA[];
};

/**
 * Contents and price come from the live marketixstudio.com/gmb-toolkit page
 * (2026-09-24). Claims on that page NOT carried over until confirmed:
 * "used by 500+ local businesses" and "rank in 30 days".
 */
export const products: Record<string, DigitalProduct> = {
  "gmb-toolkit": {
    slug: "gmb-toolkit",
    name: "Google Maps Ranking Toolkit",
    shortDescription:
      "One Excel file, 12 sheets: the checklists, post templates and review scripts for ranking a business on Google Maps.",
    metaTitle: "Google Maps Ranking Toolkit (GMB)",
    metaDescription:
      "The Google Maps ranking toolkit from Marketix Studio: audit checklists, local SEO checks, 30 post templates and review scripts in Hindi, English and Marathi.",
    tagline: "Rank your business on Google Maps",
    subtitle:
      "A single Excel file with 12 sheets. Open it, work through the steps, and fix what's holding your Google Business Profile back, without running ads.",
    // Off sale since 2026-10-09 (user: "we are dropping the plan currently for the ebook").
    onSale: false,
    priceInr: 99,
    compareAtInr: 999,
    answerBlock: {
      question: "How do you rank higher on Google Maps?",
      answer:
        "Google ranks local results on relevance, distance and prominence. The levers you control are a complete Google Business Profile with the right categories, consistent business details everywhere you are listed, a steady flow of recent reviews, and regular posts that keep the profile active.",
      keyFacts: [
        "Relevance: categories and keywords that match what customers search",
        "Distance: a correctly set service area and location signals",
        "Prominence: reviews, citations, backlinks and local mentions",
        "Activity: regular posts, offers and events on the profile",
      ],
    },
    includes: [
      { icon: ListChecks, title: "GMB basic audit checklist", body: "20 steps to set the profile up properly: listing basics, digital assets and profile completion." },
      { icon: Search, title: "Local SEO checklist", body: "A 30-point audit from schema markup to Google Search Console." },
      { icon: Star, title: "Prominence sheet", body: "12 ways to build authority through reviews, backlinks, citations and local media mentions." },
      { icon: MapPin, title: "Distance optimisation", body: "10 strategies for showing up across your service area, including coverage zones and geo-targeted content." },
      { icon: Target, title: "Relevance framework", body: "Keyword mapping, category strategy and content alignment, matched to what your customers search." },
      { icon: Rocket, title: "37 ranking boosters", body: "Advanced tactics including voice search, seasonal content and virtual tours." },
      { icon: CalendarCheck, title: "Posting checklist", body: "A 22-item checklist for updates, offers and events, so the profile stays active." },
      { icon: FileSpreadsheet, title: "30 post templates", body: "Copy-paste posts for offers, events, tips, testimonials, festivals and FAQs." },
      { icon: MessageSquareQuote, title: "Review request scripts", body: "12 scripts for WhatsApp (Hindi, English, Marathi), SMS, email and in person, plus replies for negative reviews." },
    ],
    whoFor: [
      "Local businesses that customers find on Google Maps",
      "Owners who know the profile needs work but not what to fix first",
      "Businesses paying for ads when the map listing could bring enquiries for free",
    ],
    howItWorks: [
      { title: "Download", body: "Instant access to the Excel file after payment." },
      { title: "Audit", body: "Work through the basic audit and local SEO checklists to see what's missing." },
      { title: "Fix", body: "Use the relevance, distance and prominence sheets to close the gaps." },
      { title: "Stay active", body: "Post from the templates and ask for reviews with the scripts." },
    ],
    faqs: [
      { q: "What format is it in?", a: "One Excel file with 12 sheets." },
      { q: "Does it work for my type of business?", a: "It is written for any local business with a Google Business Profile: shops, clinics, showrooms, service businesses and more." },
      // The next answer is true while onSale is false; remove it when the toolkit goes back on sale.
      { q: "Is the toolkit available to buy now?", a: "Not at the moment. We can run the same Google Business Profile checks for you in a free growth audit, or manage local SEO for you." },
      { q: "How is the toolkit different from your local SEO service?", a: "The toolkit is a do-it-yourself checklist. The local SEO service is us doing the work: optimising your Google Business Profile, building local pages, collecting reviews and reporting on calls and direction requests." },
      { q: "Which languages are the review scripts in?", a: "The WhatsApp scripts come in Hindi, English and Marathi. The SMS, email and in-person scripts are in English." },
    ],
  },
};

export const productList = Object.values(products);
