export type NavChild = { label: string; href: string; desc?: string };
export type NavGroup = { title: string; items: NavChild[] };
export type NavLinkRow = { label: string; cta: string; href: string };
export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
  groups?: NavGroup[];
  /** Extra compact link rows shown under a grouped mega-menu. */
  linkRows?: NavLinkRow[];
  /** Extra path prefixes that should also mark this item active (defaults to [href]). */
  activeMatch?: string[];
};

export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    activeMatch: ["/services"],
    linkRows: [
      { label: "Browse services by industry", cta: "Explore Industries", href: "/industries" },
      { label: "Not sure where to start?", cta: "Get a Free Growth Audit", href: "/growth-audit" },
    ],
    groups: [
      {
        title: "Performance",
        items: [
          { label: "Performance Marketing", href: "/services/performance-marketing" },
          { label: "Google Ads & PPC", href: "/services/google-ads-ppc" },
          { label: "Meta Ads", href: "/services/meta-ads" },
          { label: "Conversion Rate Optimisation", href: "/services/conversion-rate-optimisation" },
        ],
      },
      {
        title: "SEO & Content",
        items: [
          { label: "SEO Services", href: "/services/seo-services" },
          { label: "Local SEO & Google Business", href: "/services/local-seo-gmb" },
          { label: "Content Marketing", href: "/services/content-marketing" },
        ],
      },
      {
        title: "Web & Brand",
        items: [
          { label: "Web Design & Development", href: "/services/web-design-development" },
          { label: "Landing Pages & Funnels", href: "/services/landing-pages-funnels" },
          { label: "Branding & Design", href: "/services/branding-design" },
        ],
      },
      {
        title: "Social & Lifecycle",
        items: [
          { label: "Social Media Marketing", href: "/services/social-media-marketing" },
          { label: "Email Marketing & Automation", href: "/services/email-marketing-automation" },
          { label: "WhatsApp Marketing", href: "/services/whatsapp-marketing" },
        ],
      },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    children: [
      { label: "Real Estate", href: "/industries/real-estate", desc: "Site visits & inventory sales" },
      { label: "eCommerce & D2C", href: "/industries/ecommerce-d2c", desc: "ROAS and repeat revenue" },
      { label: "SaaS & Startups", href: "/industries/saas-startups", desc: "Demos, trials and MRR" },
      { label: "Healthcare", href: "/industries/healthcare", desc: "Patient acquisition" },
      { label: "Education", href: "/industries/education", desc: "Admissions and enrolments" },
      { label: "Hospitality", href: "/industries/hospitality", desc: "Direct bookings" },
      { label: "Interior & Architecture", href: "/industries/interior-architecture", desc: "High-ticket enquiries" },
      { label: "Automotive", href: "/industries/automotive", desc: "Showroom footfall" },
    ],
  },
  {
    label: "Work",
    href: "/work",
    activeMatch: ["/work"],
    children: [
      { label: "Case Studies", href: "/work" },
      { label: "Client Results", href: "/work/client-results" },
    ],
  },
  {
    label: "Company",
    href: "/about",
    activeMatch: [
      "/about",
      "/approach",
      "/team",
      "/careers",
      "/partners",
      "/contact",
      "/blog",
      "/pricing",
      "/faq",
      "/locations",
    ],
    children: [
      { label: "About Marketix", href: "/about" },
      { label: "Our Approach", href: "/approach" },
      { label: "Team", href: "/team" },
      { label: "Pricing", href: "/pricing" },
      { label: "Locations", href: "/locations" },
      { label: "Blog", href: "/blog" },
      { label: "FAQ", href: "/faq" },
      { label: "Careers", href: "/careers" },
      { label: "Partners", href: "/partners" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

/** Footer link columns. Kept separate from primaryNav so the footer can surface
 *  deep SEO pages (locations, long-tail services) that don't belong in the header. */
export const footerNav: NavGroup[] = [
  {
    title: "Services",
    items: [
      { label: "Performance Marketing", href: "/services/performance-marketing" },
      { label: "Google Ads & PPC", href: "/services/google-ads-ppc" },
      { label: "Meta Ads", href: "/services/meta-ads" },
      { label: "Conversion Rate Optimisation", href: "/services/conversion-rate-optimisation" },
      { label: "SEO Services", href: "/services/seo-services" },
      { label: "Local SEO & Google Business", href: "/services/local-seo-gmb" },
      { label: "Content Marketing", href: "/services/content-marketing" },
      { label: "Web Design & Development", href: "/services/web-design-development" },
      { label: "Landing Pages & Funnels", href: "/services/landing-pages-funnels" },
      { label: "Branding & Design", href: "/services/branding-design" },
      { label: "Social Media Marketing", href: "/services/social-media-marketing" },
      { label: "Email Marketing & Automation", href: "/services/email-marketing-automation" },
      { label: "WhatsApp Marketing", href: "/services/whatsapp-marketing" },
    ],
  },
  {
    title: "Industries",
    items: [
      { label: "Real Estate", href: "/industries/real-estate" },
      { label: "eCommerce & D2C", href: "/industries/ecommerce-d2c" },
      { label: "SaaS & Startups", href: "/industries/saas-startups" },
      { label: "Healthcare", href: "/industries/healthcare" },
      { label: "Education", href: "/industries/education" },
      { label: "Hospitality", href: "/industries/hospitality" },
      { label: "Interior & Architecture", href: "/industries/interior-architecture" },
      { label: "Automotive", href: "/industries/automotive" },
    ],
  },
  {
    title: "Locations",
    items: [
      { label: "Pune", href: "/locations/pune" },
      { label: "Mumbai", href: "/locations/mumbai" },
      { label: "Bangalore", href: "/locations/bangalore" },
      { label: "Delhi NCR", href: "/locations/delhi-ncr" },
      { label: "Hyderabad", href: "/locations/hyderabad" },
      { label: "Dubai, UAE", href: "/locations/dubai-uae" },
      { label: "London, UK", href: "/locations/london-uk" },
      { label: "United States", href: "/locations/usa" },
      { label: "Ahmedabad", href: "/locations/ahmedabad" },
      { label: "Australia", href: "/locations/australia" },
      { label: "Canada", href: "/locations/canada" },
      { label: "Singapore", href: "/locations/singapore" },
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "Free Growth Audit", href: "/growth-audit" },
      { label: "Google Maps Ranking Toolkit", href: "/gmb-toolkit" },
      { label: "Pricing", href: "/pricing" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About Us", href: "/about" },
      { label: "Our Approach", href: "/approach" },
      { label: "Team", href: "/team" },
      { label: "Case Studies", href: "/work" },
      { label: "Careers", href: "/careers" },
      { label: "Partners", href: "/partners" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    items: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Refund Policy", href: "/refund-policy" },
      { label: "Cookie Policy", href: "/cookie-policy" },
      { label: "Disclaimer", href: "/disclaimer" },
    ],
  },
];
