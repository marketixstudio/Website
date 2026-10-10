/**
 * Hero photography for service, industry and location pages (user choice, 2026-10-10):
 * one topic photo per page, shown in the notched frame with a small card.
 *
 * All photos are from Unsplash under the Unsplash License (free for commercial use, no
 * attribution required); credits are kept here anyway. Only free photos were used, never
 * Unsplash+ (paid). Files live in public/heroes/, resized to 1400px WebP.
 * Swap any of these for the client's own photography whenever it exists.
 */
export type HeroImage = { src: string; alt: string; credit: string; unsplashId: string };

const img = (file: string, alt: string, credit: string, unsplashId: string): HeroImage => ({
  src: `/heroes/${file}.webp`,
  alt,
  credit,
  unsplashId,
});

export const heroImages: Record<string, HeroImage> = {
  // Industries
  "/industries/real-estate": img("real-estate", "High-rise apartment buildings beside a green corridor in an Indian city", "Sirav Talwar", "x2i-8elwwjo"),
  "/industries/ecommerce-d2c": img("ecommerce-d2c", "A small business owner checking an order on her phone beside packed parcels", "Rifki Kurniawan", "k63Or81F8-M"),
  "/industries/saas-startups": img("saas-startups", "A startup team working together on laptops in an office", "Creatopy", "E3LsanLgkLM"),
  "/industries/healthcare": img("healthcare", "A doctor consulting with a patient at her clinic desk", "Vitaly Gariev", "iyeUwItlIPk"),
  "/industries/education": img("education", "A college campus building across a green lawn", "Shashank Raghuvanshi", "PJHeL-Cy8rM"),
  "/industries/hospitality": img("hospitality", "A modern hotel lobby with lounge seating and wood panelling", "Frames For Your Heart", "zSG-kd-L6vw"),
  "/industries/interior-architecture": img("interior-architecture", "A bright, styled living room with a sofa, plants and a kitchen behind", "Spacejoy", "trG8989WjFA"),
  "/industries/automotive": img("automotive", "A red car on display inside a dealership showroom", "Crosby Hinze", "bC5NNbwuoB0"),

  // Services
  "/services/performance-marketing": img("performance-marketing", "Performance analytics charts on a laptop screen", "Luke Chesser", "JKUTrJ4vK00"),
  "/services/google-ads-ppc": img("google-ads-ppc", "Hands typing a search on a laptop beside a phone", "Benjamin Dada", "EDZTb2SQ6j0"),
  "/services/meta-ads": img("meta-ads", "A hand scrolling an image feed on a smartphone", "Georgia de Lotz", "rncny1536Xs"),
  "/services/seo-services": img("seo-services", "A laptop open on a search page with a phone beside it", "sarah b", "DF0C0Lbs9qE"),
  "/services/local-seo-gmb": img("local-seo-gmb", "A phone showing a map with nearby businesses pinned", "henry perks", "BJXAxQ1L7dI"),
  "/services/content-marketing": img("content-marketing", "An article open on a phone resting on a laptop keyboard", "Ngital", "fcNMuWbM5MQ"),
  "/services/web-design-development": img("web-design-development", "A website design system on a desktop monitor with plants on the desk", "Balazs Ketyi", "_x335IZXxfc"),
  "/services/landing-pages-funnels": img("landing-pages-funnels", "A web page open on a laptop and the same page on a phone", "Walls.io", "VkhP-zriXZQ"),
  "/services/branding-design": img("branding-design", "A brand moodboard of photos, colour swatches and ribbon on a table", "Fiona Murray-deGraaff", "HszbGgaGjOg"),
  "/services/social-media-marketing": img("social-media-marketing", "A creator recording a video on a phone mounted on a tripod", "Afffect", "3FTq0q3QZc8"),
  "/services/email-marketing-automation": img("email-marketing-automation", "Someone working in an email marketing dashboard on a laptop", "Kit", "rH8YFkrCIYI"),
  "/services/whatsapp-marketing": img("whatsapp-marketing", "A hand holding a phone with a messaging app open", "Dimitri Karastelev", "ynJaWgrwSlM"),
  "/services/conversion-rate-optimisation": img("conversion-rate-optimisation", "A designer arranging sticky notes on a glass wall while planning a page", "Vitaly Gariev", "jfYazFxTqTQ"),

  // Locations
  "/locations/pune": img("pune", "A tree-lined road in Pune with auto rickshaws and scooters", "onkar gotale", "3Z8s_-Qh9GY"),
  "/locations/mumbai": img("mumbai", "The Bandra–Worli Sea Link leading towards the Mumbai skyline", "Previn Samuel", "vr6nMSlyTJs"),
  "/locations/bangalore": img("bangalore", "The Bangalore skyline over green neighbourhoods on a clear day", "Mahadev Ittina", "sEDewKyq6YM"),
  "/locations/delhi-ncr": img("delhi-ncr", "India Gate in New Delhi under an evening sky", "shalender kumar", "XjKaPInYVCM"),
  "/locations/hyderabad": img("hyderabad", "The Charminar in Hyderabad against a blue sky", "Kanishq Kancharla", "pWH7AigRk18"),
  "/locations/ahmedabad": img("ahmedabad", "A pedestrian bridge with an orange canopy in Ahmedabad", "Mrugesh Shah", "LP-iUrOi5T0"),
  "/locations/dubai-uae": img("dubai-uae", "The Burj Khalifa and Dubai skyline above a highway interchange", "David Rodrigo", "Fr6zexbmjmc"),
  "/locations/london-uk": img("london-uk", "Tower Bridge over the River Thames with the City of London behind", "Charles Postiaux", "Q6UehpkBSnQ"),
  "/locations/usa": img("usa", "The Empire State Building and the New York skyline at sunset", "Michael Discenza", "5omwAMDxmkU"),
  "/locations/australia": img("australia", "Sydney Opera House and Harbour Bridge from the water", "Dan Freeman", "7Zb7kUyQg1E"),
  "/locations/canada": img("canada", "The Toronto skyline and CN Tower across Lake Ontario at golden hour", "Berkay Gumustekin", "hRg1KL4-AUE"),
  "/locations/singapore": img("singapore", "Marina Bay Sands and the Singapore waterfront from above", "Hu Chen", "__cBlRzLSTg"),
};

/** Pune neighbourhood pages share a Pune city view (accurate per-area photos are rare). */
export const puneAreaImage = img("pune-city", "An aerial view of Pune's neighbourhoods and green hills", "Anand Dhumal", "stfokPzxn-M");

export const heroImage = (path: string): HeroImage | undefined =>
  heroImages[path] ?? (path.startsWith("/locations/pune/") ? puneAreaImage : undefined);

/** The hero's photo plus its small card, or nothing when the page has no photo yet. */
export function heroPhoto(path: string, cardLabel: string, cardText: string) {
  const image = heroImage(path);
  return image ? { src: image.src, alt: image.alt, cardLabel, cardText } : undefined;
}
