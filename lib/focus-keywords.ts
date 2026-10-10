/**
 * One focus keyword per indexable page (Rank Math style), chosen from what people search
 * (docs/SEARCH_DEMAND.md) and matched to the page's title. Templates read it to place the
 * keyword where it counts: start of the title, meta description, a label at the top of the
 * page, one subheading. URLs are deliberately left as they are (renaming live URLs costs more
 * than the keyword-in-URL check is worth).
 */
export const focusKeywords: Record<string, string> = {
  "/": "performance marketing agency in Pune",
  "/about": "marketing agency in Pune",
  "/approach": "digital marketing process",
  "/services": "digital marketing services in Pune",
  "/industries": "marketing by industry",
  "/locations": "digital marketing agency in India",
  "/work": "digital marketing case studies",
  "/pricing": "digital marketing agency pricing",
  "/growth-audit": "free marketing audit",
  "/contact": "contact Marketix Studio",
  "/faq": "marketing agency FAQ",
  "/gmb-toolkit": "Google Maps ranking toolkit",
  "/blog": "digital marketing blog",

  "/services/performance-marketing": "performance marketing services in Pune",
  "/services/google-ads-ppc": "Google Ads management in Pune",
  "/services/meta-ads": "Meta ads agency",
  "/services/seo-services": "SEO services in Pune",
  "/services/local-seo-gmb": "local SEO in Pune",
  "/services/content-marketing": "content marketing agency in Pune",
  "/services/web-design-development": "web design in Pune",
  "/services/landing-pages-funnels": "landing page design in Pune",
  "/services/branding-design": "branding agency in Pune",
  "/services/social-media-marketing": "social media marketing agency in Pune",
  "/services/email-marketing-automation": "email marketing agency in Pune",
  "/services/whatsapp-marketing": "WhatsApp marketing agency",
  "/services/conversion-rate-optimisation": "conversion rate optimisation agency",

  "/industries/real-estate": "real estate marketing agency in Pune",
  "/industries/ecommerce-d2c": "eCommerce marketing agency",
  "/industries/saas-startups": "SaaS marketing agency",
  "/industries/healthcare": "healthcare marketing agency",
  "/industries/education": "education marketing agency",
  "/industries/hospitality": "hospitality marketing agency",
  "/industries/interior-architecture": "marketing for interior designers",
  "/industries/automotive": "automotive marketing agency",

  // Locations and Pune areas: the phrase their title leads with (from search demand).
  "/locations/ahmedabad": "digital marketing agency in Ahmedabad",
  "/locations/australia": "digital marketing agency for Australia",
  "/locations/bangalore": "digital marketing agency in Bangalore",
  "/locations/canada": "digital marketing agency for Canada",
  "/locations/delhi-ncr": "digital marketing agency in Delhi NCR",
  "/locations/dubai-uae": "digital marketing agency in Dubai",
  "/locations/hyderabad": "digital marketing agency in Hyderabad",
  "/locations/london-uk": "digital marketing agency in London",
  "/locations/mumbai": "digital marketing agency in Mumbai",
  "/locations/pune": "digital marketing agency in Pune",
  "/locations/pune/aundh": "digital marketing services in Aundh",
  "/locations/pune/balewadi": "digital marketing agency in Balewadi",
  "/locations/pune/baner": "digital marketing company in Baner",
  "/locations/pune/hadapsar": "digital marketing company in Hadapsar",
  "/locations/pune/hinjewadi": "digital marketing agency in Hinjewadi",
  "/locations/pune/kharadi": "digital marketing services in Kharadi",
  "/locations/pune/koregaon-park": "digital marketing services in Koregaon Park",
  "/locations/pune/kothrud": "digital marketing company in Kothrud",
  "/locations/pune/pimple-saudagar": "digital marketing agency in Pimple Saudagar",
  "/locations/pune/pimpri-chinchwad": "digital marketing agency in Pimpri Chinchwad",
  "/locations/pune/viman-nagar": "digital marketing agency in Viman Nagar",
  "/locations/pune/wakad": "digital marketing company in Wakad",
  "/locations/singapore": "digital marketing agency for Singapore",
  "/locations/usa": "digital marketing agency for US businesses",
};

/** Location and Pune-area pages: "digital marketing agency in <place>". */
export function focusKeyword(path: string, place?: string): string | undefined {
  if (focusKeywords[path]) return focusKeywords[path];
  if (place) return `digital marketing agency in ${place}`;
  return undefined;
}

/** "SEO services in Pune" -> "SEO services in Pune" (first letter up, the rest as written). */
export const sentenceCase = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

/**
 * One authoritative outside reference per page (the "external link" check, and genuinely
 * useful): an official guide from the platform or regulator the page talks about.
 */
type Source = { label: string; href: string };
const localRanking: Source = { label: "Google: how local ranking works", href: "https://support.google.com/business/answer/7091" };
const searchStarter: Source = { label: "Google Search Central: SEO starter guide", href: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide" };

export const pageSources: Record<string, Source> = {
  "/": { label: "Think with Google: marketing research", href: "https://www.thinkwithgoogle.com" },
  "/about": { label: "Think with Google: marketing research", href: "https://www.thinkwithgoogle.com" },
  "/approach": { label: "Google Analytics help: measuring conversions", href: "https://support.google.com/analytics" },
  "/services": searchStarter,
  "/industries": { label: "Think with Google: how people decide", href: "https://www.thinkwithgoogle.com" },
  "/locations": localRanking,
  "/work": { label: "Google: review policy for businesses", href: "https://support.google.com/business/answer/3474122" },
  "/pricing": { label: "Google Ads help: how costs work", href: "https://support.google.com/google-ads" },
  "/growth-audit": { label: "web.dev: Core Web Vitals", href: "https://web.dev/articles/vitals" },
  "/faq": searchStarter,
  "/gmb-toolkit": localRanking,

  "/services/performance-marketing": { label: "Google Ads help centre", href: "https://support.google.com/google-ads" },
  "/services/google-ads-ppc": { label: "Google Ads help: landing page experience", href: "https://support.google.com/google-ads/answer/2404197" },
  "/services/meta-ads": { label: "Meta Business Help Centre", href: "https://www.facebook.com/business/help" },
  "/services/seo-services": searchStarter,
  "/services/local-seo-gmb": localRanking,
  "/services/content-marketing": { label: "Google: creating helpful, people-first content", href: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content" },
  "/services/web-design-development": { label: "web.dev: Core Web Vitals", href: "https://web.dev/articles/vitals" },
  "/services/landing-pages-funnels": { label: "Google Ads help: landing page experience", href: "https://support.google.com/google-ads/answer/2404197" },
  "/services/branding-design": { label: "Think with Google: brand research", href: "https://www.thinkwithgoogle.com" },
  "/services/social-media-marketing": { label: "Instagram for Business", href: "https://business.instagram.com" },
  "/services/email-marketing-automation": { label: "Google: email sender guidelines", href: "https://support.google.com/a/answer/81126" },
  "/services/whatsapp-marketing": { label: "WhatsApp Business platform", href: "https://business.whatsapp.com" },
  "/services/conversion-rate-optimisation": { label: "web.dev: Core Web Vitals", href: "https://web.dev/articles/vitals" },

  "/industries/real-estate": { label: "MahaRERA: project registration", href: "https://maharera.maharashtra.gov.in" },
  "/industries/ecommerce-d2c": { label: "Google Merchant Center help", href: "https://support.google.com/merchants" },
  "/industries/saas-startups": { label: "Google: creating helpful, people-first content", href: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content" },
  "/industries/healthcare": { label: "Google Ads policy: healthcare and medicines", href: "https://support.google.com/adspolicy/answer/176031" },
  "/industries/education": { label: "UGC: recognised institutions", href: "https://www.ugc.gov.in" },
  "/industries/hospitality": { label: "Google Hotel Center help", href: "https://support.google.com/hotelprices" },
  "/industries/interior-architecture": { label: "Instagram for Business", href: "https://business.instagram.com" },
  "/industries/automotive": { label: "Google: review policy for businesses", href: "https://support.google.com/business/answer/3474122" },
};

export const pageSource = (path: string): Source =>
  pageSources[path] ?? (path.startsWith("/locations") ? localRanking : searchStarter);
