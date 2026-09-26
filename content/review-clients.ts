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
      "Car Interior Styling",
      "Sun Film & Tinting",
      "Music System & Speakers",
      "Car Care & Detailing",
      "Accessories & Add-ons",
      "Something else",
    ],
    placeholder: "e.g. Got seat covers installed, very clean work, staff was helpful...",
    accent: "#FFD400",
    accentInk: "#0A0A0C",
    tone: "Warm, casual Indian English. Mention the specific service. Keep it natural and believable - never exaggerated.",
    active: true,
  },
};

export const reviewClientList = Object.values(reviewClients).filter((c) => c.active);
export const reviewClientSlugs = Object.keys(reviewClients);
