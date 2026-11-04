/**
 * Blog categories, built from what people in India actually search (docs/SEARCH_DEMAND.md,
 * grouped in docs/BLOG_AUTOMATION_PLAN.md). Order = order on the page. Each category has a
 * page at /blog/category/<slug> once it has at least one post. `image` is the matching
 * service or industry photo, used as the cover for posts without their own image.
 */

export type BlogCategory = {
  slug: string;
  name: string;
  /** One or two sentences for the category page, written for the topic itself. */
  intro: string;
  image: string;
  /** The service page readers of this category usually need next. */
  service: { label: string; href: string };
};

export const blogCategories: BlogCategory[] = [
  {
    slug: "ai-marketing",
    name: "AI Marketing",
    intro:
      "How AI is changing ads, SEO and search for Indian businesses: what it does well, where it wastes budget, and how to get found in ChatGPT and Google AI Overviews.",
    image: "/blog/category-ai-marketing.jpg",
    service: { label: "Performance marketing", href: "/services/performance-marketing" },
  },
  {
    slug: "google-ads",
    name: "Google Ads",
    intro:
      "What Google Ads costs in India, how long campaigns take to work, and how to tell whether your spend is turning into enquiries.",
    image: "/heroes/google-ads-ppc.webp",
    service: { label: "Google Ads management", href: "/services/google-ads-ppc" },
  },
  {
    slug: "meta-instagram-ads",
    name: "Meta & Instagram Ads",
    intro: "Facebook and Instagram ads in practice: budgets, boosting versus real campaigns, and creative that gets leads.",
    image: "/heroes/meta-ads.webp",
    service: { label: "Meta ads", href: "/services/meta-ads" },
  },
  {
    slug: "seo-google-maps",
    name: "SEO & Google Maps",
    intro: "Ranking on Google search and the map pack: how long SEO takes, what a Google Business Profile needs, and what to avoid.",
    image: "/heroes/local-seo-gmb.webp",
    service: { label: "Local SEO and Google Maps", href: "/services/local-seo-gmb" },
  },
  {
    slug: "websites-landing-pages",
    name: "Websites & Landing Pages",
    intro: "Websites and landing pages that turn visits into enquiries: what they cost, how long they take, and what to test.",
    image: "/heroes/landing-pages-funnels.webp",
    service: { label: "Website design", href: "/services/web-design-development" },
  },
  {
    slug: "social-media-content",
    name: "Social Media & Content",
    intro: "Social media, content and branding that build demand before the ad click, and how to judge whether it is working.",
    image: "/heroes/social-media-marketing.webp",
    service: { label: "Social media marketing", href: "/services/social-media-marketing" },
  },
  {
    slug: "whatsapp-email",
    name: "WhatsApp & Email",
    intro: "WhatsApp Business API and email: what messages cost, what customers accept, and how to follow up leads without spamming.",
    image: "/heroes/whatsapp-marketing.webp",
    service: { label: "WhatsApp marketing", href: "/services/whatsapp-marketing" },
  },
  {
    slug: "industry-playbooks",
    name: "Industry Playbooks",
    intro: "Marketing for specific sectors, from real estate and D2C brands to clinics, hotels and interior designers.",
    image: "/heroes/real-estate.webp",
    service: { label: "Industries we work with", href: "/industries" },
  },
  {
    slug: "costs-budgets",
    name: "Costs & Budgets",
    intro:
      "How much to spend and how to know it is paying back. We explain what drives the cost rather than quoting made-up prices.",
    image: "/heroes/performance-marketing.webp",
    service: { label: "Pricing", href: "/pricing" },
  },
];

export const blogCategoryNames = blogCategories.map((c) => c.name);
