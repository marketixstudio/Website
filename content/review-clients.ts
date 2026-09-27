import type { ReviewClient } from "@/lib/content-types";

/**
 * Each entry publishes a live review page at /r/[slug].
 * Onboarding a client is a config change - no new route, no new component.
 */
export const reviewClients: Record<string, ReviewClient> = {
  jayganesh: {
    slug: "jayganesh",
    businessName: "Jay Ganesh Car Accessories",
    logo: "/clients/jayganesh-logo.png",
    googleReviewUrl: "https://g.page/r/CWgw7ZdNJSlhEBM/review",
    headline: "Tell Us About Your",
    highlight: "Car Experience",
    subheadline: "We'll help you write your review in seconds",
    services: [
      "Car Seat Covers",
      "Floor Mats",
      "LED & Projector Lights",
      "Music System & Speakers",
      "Sun Film & Tinting",
      "Dash Cam & Cameras",
      "Coating & Protection",
      "Car Interior Styling",
      "Car Care & Detailing",
      "Accessories & Add-ons",
      "Something else",
    ],
    placeholder: "e.g. Got seat covers installed, very clean work, staff was helpful...",
    accent: "#FFD400",
    accentInk: "#0A0A0C",
    // Taken from what real customers praise in this listing's Google reviews (2026-09-27).
    highlights: [
      "Fast fitting",
      "Neat, careful work",
      "Good quality products",
      "Reasonable rates",
      "Good discount",
      "Polite, helpful staff",
      "Good suggestions",
      "Lots of options",
    ],
    tone: "Like this shop's real customers: short and plain, everyday Indian English (grammar need not be perfect), product or brand names when the customer gave them. Never exaggerated.",
    active: true,
  },
};

export const reviewClientList = Object.values(reviewClients).filter((c) => c.active);
export const reviewClientSlugs = Object.keys(reviewClients);
