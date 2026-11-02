/**
 * Hero photography for service, industry and location pages: one topic photo per page, shown
 * in the notched frame with chips and a small card. Generated for Marketix with OpenAI's image
 * model through the Codex CLI (2026-11-02) from docs/HERO_IMAGE_PROMPTS.md: realistic, violet
 * accent light, no text, logos or readable screens. Files live in public/heroes/ as 1400px-tall
 * 4:5 WebP. Swap any of these for the client's own photography whenever it exists.
 */
export type HeroImage = { src: string; alt: string };

const img = (file: string, alt: string): HeroImage => ({ src: `/heroes/${file}.webp`, alt });

export const heroImages: Record<string, HeroImage> = {
  // Industries
  "/industries/real-estate": img("real-estate", "A couple on a show-flat balcony looking at modern residential towers in Pune at golden hour"),
  "/industries/ecommerce-d2c": img("ecommerce-d2c", "A young founder packing an order in a kraft box in her home studio, a phone on a stand beside her"),
  "/industries/saas-startups": img("saas-startups", "A product team discussing work around a standing desk in a modern Pune office"),
  "/industries/healthcare": img("healthcare", "A doctor listening to a patient in a calm, modern clinic consultation room"),
  "/industries/education": img("education", "College students walking and talking on a green campus path at golden hour"),
  "/industries/hospitality": img("hospitality", "A receptionist welcoming a guest at the stone desk of a boutique hotel lobby at dusk"),
  "/industries/interior-architecture": img("interior-architecture", "An interior designer in a styled high-rise living room with a city view"),
  "/industries/automotive": img("automotive", "A salesperson handing car keys to a customer in a modern car showroom at night"),

  // Services
  "/services/performance-marketing": img("performance-marketing", "A marketer reviewing an ad campaign at her desk at dusk, a moodboard of violet swatches behind her"),
  "/services/google-ads-ppc": img("google-ads-ppc", "Two colleagues at a café table, one typing on a laptop beside a phone"),
  "/services/meta-ads": img("meta-ads", "A young woman on a sofa scrolling an image feed on her phone"),
  "/services/seo-services": img("seo-services", "A marketer in reading glasses researching on a laptop with a notebook of keyword ideas"),
  "/services/local-seo-gmb": img("local-seo-gmb", "A hand holding a phone showing a map with nearby businesses outside a local shop"),
  "/services/content-marketing": img("content-marketing", "A writer drafting in a notebook beside an open laptop and printed article proofs"),
  "/services/web-design-development": img("web-design-development", "A designer arranging colourful page layout blocks on a large monitor"),
  "/services/landing-pages-funnels": img("landing-pages-funnels", "The same web page open on a laptop and a phone side by side on a desk"),
  "/services/branding-design": img("branding-design", "Hands arranging a brand moodboard of photos and violet colour swatches on a table"),
  "/services/social-media-marketing": img("social-media-marketing", "A creator filming a short video on a phone mounted on a tripod with a ring light"),
  "/services/email-marketing-automation": img("email-marketing-automation", "A marketing manager reading on a laptop at a tidy desk, a phone beside her"),
  "/services/whatsapp-marketing": img("whatsapp-marketing", "A shop owner smiling while replying to a customer chat on his phone at the counter"),
  "/services/conversion-rate-optimisation": img("conversion-rate-optimisation", "A UX designer arranging sticky notes and page sketches on a glass wall"),

  // Locations
  "/locations/pune": img("pune", "The Pune skyline at golden hour from a rooftop, with green hills behind"),
  "/locations/mumbai": img("mumbai", "The Bandra–Worli Sea Link and the Mumbai skyline at blue hour"),
  "/locations/bangalore": img("bangalore", "Glass office towers among trees in Bangalore at dusk"),
  "/locations/delhi-ncr": img("delhi-ncr", "India Gate at dusk with people walking along the lawns"),
  "/locations/hyderabad": img("hyderabad", "The Charminar at blue hour with street life around it"),
  "/locations/ahmedabad": img("ahmedabad", "A woman on the Sabarmati riverfront promenade in Ahmedabad at dusk"),
  "/locations/dubai-uae": img("dubai-uae", "The Burj Khalifa and Dubai skyline at blue hour"),
  "/locations/london-uk": img("london-uk", "Tower Bridge and the River Thames at blue hour"),
  "/locations/usa": img("usa", "The Empire State Building and the New York skyline at dusk"),
  "/locations/australia": img("australia", "Sydney Opera House and Harbour Bridge from the water at blue hour"),
  "/locations/canada": img("canada", "The Toronto skyline and CN Tower across Lake Ontario at dusk"),
  "/locations/singapore": img("singapore", "Marina Bay Sands and the Singapore waterfront at blue hour"),
};

/** Pune neighbourhood pages share a Pune city view until each has its own image. */
export const puneAreaImage = img("pune-city", "A lively Pune street at dusk with cafés, scooters and people walking");

export const heroImage = (path: string): HeroImage | undefined =>
  heroImages[path] ?? (path.startsWith("/locations/pune/") ? puneAreaImage : undefined);

/** The hero's photo plus its small card, or nothing when the page has no photo yet. */
export function heroPhoto(path: string, cardLabel: string, cardText: string) {
  const image = heroImage(path);
  return image ? { src: image.src, alt: image.alt, cardLabel, cardText } : undefined;
}
