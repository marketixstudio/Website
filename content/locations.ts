import { Building2, Globe2, MapPin, Users, Clock, TrendingUp } from "lucide-react";
import type { LocationContent, OverviewContent } from "@/lib/content-types";

export const locationsOverview: OverviewContent = {
  eyebrow: "Locations",
  title: "Based in Pune, planning campaigns for",
  highlight: "twelve markets",
  subtitle:
    "Campaigns planned around each market's currency, language and buying habits, from Pune to Dubai Marina.",
  metaTitle: "Locations We Serve | Marketing Agency Pune & International",
  metaDescription:
    "Marketix Studio serves Pune, Mumbai, Bangalore, Delhi NCR, Hyderabad and Ahmedabad in India, plus Dubai, London, the US, Australia, Canada and Singapore.",
  cardsTitle: "Where we work",
  cards: [
    { label: "Pune", href: "/locations/pune", body: "Our home city, where the team is based.", icon: MapPin },
    { label: "Mumbai", href: "/locations/mumbai", body: "Real estate, finance and media brands at national scale.", icon: Building2 },
    { label: "Bangalore", href: "/locations/bangalore", body: "SaaS, startups and D2C brands selling globally.", icon: TrendingUp },
    { label: "Delhi NCR", href: "/locations/delhi-ncr", body: "Education, real estate and manufacturing across the capital region.", icon: Building2 },
    { label: "Hyderabad", href: "/locations/hyderabad", body: "Pharma, real estate and enterprise technology.", icon: Building2 },
    { label: "Ahmedabad", href: "/locations/ahmedabad", body: "Manufacturing, textiles and fast-growing D2C brands.", icon: Building2 },
    { label: "Dubai, UAE", href: "/locations/dubai-uae", body: "Property, luxury retail and professional services.", icon: Globe2 },
    { label: "London, UK", href: "/locations/london-uk", body: "eCommerce, professional services and hospitality.", icon: Globe2 },
    { label: "United States", href: "/locations/usa", body: "D2C, SaaS and service businesses across US time zones.", icon: Globe2 },
    { label: "Australia", href: "/locations/australia", body: "Local services, trades and eCommerce.", icon: Globe2 },
    { label: "Canada", href: "/locations/canada", body: "Professional services, real estate and D2C.", icon: Globe2 },
    { label: "Singapore", href: "/locations/singapore", body: "B2B, fintech and regional headquarters.", icon: Globe2 },
  ],
  intro: {
    title: "Same team, local execution.",
    body:
      "An Indian agency running a UK campaign with Indian assumptions produces poor results. We research keywords in the target market, price in the target currency, schedule calls in the target time zone and build authority with sources that market recognises.",
    points: [
      "Keyword research conducted in the target market, not translated",
      "Reporting in the currency you budget in",
      "Calls scheduled inside your working hours",
      "Local citations and authority building per country",
    ],
  },
  faqs: [
    { q: "Do you have offices in all these cities?", a: "No. We are based in Pune and work remotely with clients elsewhere. We are straightforward about that because claiming virtual offices is both misleading and, for Google Business Profile purposes, against the rules." },
    { q: "How do you handle time zone differences?", a: "The UAE and Singapore overlap closely with Indian hours, the UK morning is the Indian afternoon, and calls with the US and Canada are scheduled at a time that suits both sides. Reports and written updates cover the rest." },
  ],
};

const indiaServices = [
  { label: "Performance Marketing", href: "/services/performance-marketing" },
  { label: "Google Ads & PPC", href: "/services/google-ads-ppc" },
  { label: "Meta Ads", href: "/services/meta-ads" },
  { label: "SEO Services", href: "/services/seo-services" },
  { label: "Local SEO & Google Business", href: "/services/local-seo-gmb" },
  { label: "Web Design & Development", href: "/services/web-design-development" },
];

const globalServices = [
  { label: "Performance Marketing", href: "/services/performance-marketing" },
  { label: "Google Ads & PPC", href: "/services/google-ads-ppc" },
  { label: "Meta Ads", href: "/services/meta-ads" },
  { label: "SEO Services", href: "/services/seo-services" },
  { label: "Conversion Rate Optimisation", href: "/services/conversion-rate-optimisation" },
  { label: "Email Marketing & Automation", href: "/services/email-marketing-automation" },
];

const indiaProcess = [
  { title: "Local audit", body: "We map who you compete against in this city and what they are spending to win." },
  { title: "Market-fit plan", body: "Channel mix and offer built for how buyers in this market actually decide." },
  { title: "Launch", body: "Campaigns, pages and tracking shipped together, with local landing pages where they help." },
  { title: "Scale", body: "Weekly optimisation, monthly review, budget concentrated into what proves out." },
];

const globalProcess = [
  { title: "Market research", body: "Keyword, competitor and pricing research conducted inside the target market." },
  { title: "Localise", body: "Currency, spelling conventions, compliance and cultural references adapted properly." },
  { title: "Launch", body: "Campaigns go live with local tracking, local payment flows and local support hours." },
  { title: "Optimise", body: "Weekly iteration during your business hours, reported in your currency." },
];

export const locations: Record<string, LocationContent> = {
  pune: {
    slug: "pune",
    title: "Digital Marketing Agency in Pune",
    area: "Pune",
    nearby: ["Balewadi", "Baner", "Hinjewadi", "Wakad", "Kharadi", "Viman Nagar", "Kothrud", "Hadapsar"],
    eyebrow: "Locations",
    countryCode: "IN",
    countryName: "India",
    subtitle:
      "Our home city, where the whole team is based.",
    metaTitle: "Digital Marketing Agency in Pune",
    metaDescription:
      "Performance marketing agency in Pune. Google Ads, Meta Ads, SEO and web design for real estate, eCommerce and D2C brands across Pune.",
    answerBlock: {
      question: "How much does a digital marketing agency in Pune cost?",
      answer:
        "It depends on scope: which channels, how many campaigns and whether creative and web work are included. Ad spend is separate and paid directly to Google or Meta. Marketix Studio quotes after a free growth audit, so the fee matches the work your business actually needs.",
      keyFacts: [
        "Fees depend on the channels and work in scope",
        "Ad spend is separate from management fees and paid directly to platforms",
        "A free growth audit comes before any quote",
        "Based in Pune, working across the whole city",
      ],
    },
    reasons: [
      { icon: MapPin, title: "Based in Pune", body: "The whole team works from Pune and knows how each part of the city buys." },
      { icon: Building2, title: "Real estate depth", body: "Hinjewadi, Baner, Kharadi and Wakad attract different buyers, so we plan each corridor separately." },
      { icon: Users, title: "Local buyer knowledge", body: "IT-corridor buyers, Pune Camp businesses and Kothrud retail each need a different approach." },
      { icon: Clock, title: "Same time zone, same day", body: "No overnight lag. Issues get resolved in hours, not on tomorrow's call." },
    ],
    solution: {
      title: "Pune is competitive. Generic campaigns do not survive here.",
      body: "Pune has a dense agency market and sophisticated advertisers, particularly in real estate and education. Winning here requires tight geographic targeting, offers that account for corridor-level differences, and measurement good enough to prove what worked.",
      points: [
        "Corridor-level targeting rather than city-wide blanket campaigns",
        "Locality landing pages for Baner, Hinjewadi, Kharadi and Wakad",
        "Google Business Profile optimisation per location",
        "Marathi and Hindi creative variants where the audience calls for it",
        "In-person strategy sessions when a call will not do",
      ],
    },
    services: indiaServices,
    process: indiaProcess,
    faqs: [
      { q: "Where are you based?", a: "In Pune. Our full address is on the contact page. Most work runs on calls, WhatsApp and shared reporting, and we meet when it helps." },
      { q: "Do you only work with Pune businesses?", a: "No. Pune is our home market, and we also work with brands across India and plan campaigns for the UAE, the UK and the US." },
      { q: "Which Pune areas do you cover?", a: "All of it: Balewadi, Baner, Hinjewadi, Wakad, Kharadi, Viman Nagar, Kothrud, Hadapsar, Pimpri-Chinchwad and the rest. For local SEO we build area-specific pages and targeting for whichever corridors matter to you." },
      { q: "Do you work with Pune real estate developers?", a: "Yes. We optimise those campaigns for site visits rather than form fills, which matters in a market where many leads never turn into a visit." },
    ],
  },

  mumbai: {
    slug: "mumbai",
    title: "Digital Marketing Agency in Mumbai",
    area: "Mumbai",
    nearby: ["Andheri", "Bandra", "Lower Parel", "Powai", "Thane", "Navi Mumbai", "Borivali"],
    eyebrow: "Locations",
    countryCode: "IN",
    countryName: "India",
    subtitle:
      "India's most expensive ad auction. We work in Mumbai by being sharper about targeting, not by outspending everyone.",
    metaTitle: "Digital Marketing Agency in Mumbai",
    metaDescription:
      "Performance marketing for Mumbai brands. Google Ads, Meta Ads and SEO for real estate, finance, retail and D2C businesses across Mumbai and Navi Mumbai.",
    answerBlock: {
      question: "Why are digital ads more expensive in Mumbai?",
      answer:
        "Mumbai has India's highest advertising costs because it concentrates the country's largest advertisers, in finance, real estate, media and retail, competing for the same audience. Clicks in competitive Mumbai categories cost more than in most Indian cities, which makes targeting precision and conversion rate more important than budget size.",
      keyFacts: [
        "Competitive Mumbai categories have some of India's highest click costs",
        "Finance, real estate and retail drive the most competitive auctions",
        "Micro-market targeting materially outperforms city-wide campaigns",
        "Conversion rate improvements matter more where traffic is expensive",
      ],
    },
    reasons: [
      { icon: TrendingUp, title: "Built for expensive auctions", body: "When clicks cost more, conversion rate is where the money is made, so landing pages get as much attention as the ads." },
      { icon: Building2, title: "Micro-market targeting", body: "Bandra, Powai, Thane and Navi Mumbai are separate markets. We treat them that way." },
      { icon: Users, title: "Premium positioning", body: "Mumbai audiences respond to quality signals. Cheap-looking creative underperforms badly here." },
      { icon: Clock, title: "Fast iteration", body: "At Mumbai CPCs, a slow optimisation cycle is genuinely expensive. We review weekly." },
    ],
    solution: {
      title: "In the most expensive market in India, efficiency beats budget.",
      body: "You are unlikely to outbid a national brand in Mumbai. You can beat them on relevance, page speed, message match and follow-up speed, all of which lower cost per acquisition without raising spend.",
      points: [
        "Micro-market targeting by suburb and corridor",
        "Quality Score work to reduce cost per click structurally",
        "Landing pages built to load fast on mobile",
        "Retargeting ladders that keep expensive traffic from being wasted",
        "Speed-to-lead automation, critical in a competitive market",
      ],
    },
    services: indiaServices,
    process: indiaProcess,
    faqs: [
      { q: "Do you have an office in Mumbai?", a: "No. We are headquartered in Pune and work with Mumbai clients remotely, with in-person visits arranged when a project warrants it. Pune to Mumbai is a manageable trip and we make it when it matters." },
      { q: "What budget works for Mumbai campaigns?", a: "Enough for the campaigns to collect conversion data quickly, which costs more in Mumbai than elsewhere because clicks are pricier. We work out a sensible figure for your category during the free growth audit." },
      { q: "Which Mumbai industries do you work with?", a: "Mainly real estate, retail and D2C brands. Mumbai real estate in particular rewards micro-market targeting more than most cities." },
      { q: "Can you handle Navi Mumbai and Thane separately?", a: "Yes, and you should. Buyer profiles, price expectations and competitive sets differ substantially between island city, suburbs, Thane and Navi Mumbai. We build separate campaigns and pages for each." },
    ],
  },

  bangalore: {
    slug: "bangalore",
    title: "Digital Marketing Agency in Bangalore",
    area: "Bangalore",
    nearby: ["Koramangala", "Indiranagar", "Whitefield", "HSR Layout", "Electronic City", "Hebbal"],
    eyebrow: "Locations",
    countryCode: "IN",
    countryName: "India",
    subtitle:
      "India's startup capital, where the buyers are technical, sceptical of marketing language, and comparing you against three alternatives.",
    metaTitle: "Digital Marketing Agency in Bangalore",
    metaDescription:
      "Performance marketing for Bangalore startups, SaaS and D2C brands. Paid acquisition, SEO and CRO measured on CAC payback and pipeline.",
    answerBlock: {
      question: "How is marketing to a Bangalore audience different?",
      answer:
        "Bangalore's buyer base skews technical and startup-employed, which changes what works. Audiences here research thoroughly, compare alternatives directly and respond poorly to vague claims. Campaigns perform better with specific numbers, transparent pricing, product detail and comparison content than with aspirational brand messaging.",
      keyFacts: [
        "High concentration of technical and startup-employed buyers",
        "Comparison and pricing pages convert strongly in this market",
        "Many Bangalore brands sell internationally from day one",
        "Vague benefit claims underperform specific, verifiable ones",
      ],
    },
    reasons: [
      { icon: TrendingUp, title: "SaaS and startup fluency", body: "We speak CAC, payback and cohort retention because that is how these buyers evaluate everything." },
      { icon: Globe2, title: "India plus global", body: "Many Bangalore brands sell domestically and internationally at once. We run both plans together." },
      { icon: Users, title: "Technical audiences", body: "Specific, verifiable claims. Transparent pricing. No marketing fog." },
      { icon: Building2, title: "Tech corridor targeting", body: "Whitefield, Electronic City and Koramangala behave as distinct local markets." },
    ],
    solution: {
      title: "A sceptical audience needs proof, not adjectives.",
      body: "Bangalore buyers will read your pricing page, look for a comparison, check your documentation and ask a peer before converting. We build that entire path rather than optimising a single landing page in isolation.",
      points: [
        "Comparison and alternative pages targeting competitor searches",
        "Transparent pricing pages rather than contact-us-for-pricing walls",
        "Technical content aimed at evaluators, not just decision makers",
        "Full-journey attribution across long B2B consideration cycles",
        "Parallel India and international campaign structures",
      ],
    },
    services: [
      { label: "Performance Marketing", href: "/services/performance-marketing" },
      { label: "SEO Services", href: "/services/seo-services" },
      { label: "Content Marketing", href: "/services/content-marketing" },
      { label: "Conversion Rate Optimisation", href: "/services/conversion-rate-optimisation" },
      { label: "Google Ads & PPC", href: "/services/google-ads-ppc" },
      { label: "Landing Pages & Funnels", href: "/services/landing-pages-funnels" },
    ],
    process: indiaProcess,
    faqs: [
      { q: "Do you work with early-stage startups?", a: "Yes, though we will tell you honestly if we think you are too early for paid acquisition. Before product-market fit, spending on ads usually just buys you a faster answer to a question you could have answered more cheaply." },
      { q: "Can you run India and US campaigns simultaneously?", a: "Yes, and for many Bangalore SaaS brands that is the actual requirement. They run as separate campaign structures with different messaging, pricing presentation and landing pages, reported together." },
      { q: "Do you understand SaaS metrics?", a: "Yes. We report on CAC payback, LTV to CAC and pipeline by channel rather than lead counts, because lead counts tell a SaaS business almost nothing useful." },
      { q: "Do you have a Bangalore office?", a: "No, we work with Bangalore clients remotely from our Pune office, with regular calls and shared reporting." },
    ],
  },

  "delhi-ncr": {
    slug: "delhi-ncr",
    title: "Digital Marketing Agency in Delhi NCR",
    area: "Delhi NCR",
    nearby: ["Gurugram", "Noida", "Greater Noida", "Faridabad", "Ghaziabad", "South Delhi"],
    eyebrow: "Locations",
    countryCode: "IN",
    countryName: "India",
    subtitle:
      "Five distinct markets wearing one name. Gurugram does not behave like Noida, and campaigns that ignore that underperform.",
    metaTitle: "Digital Marketing Agency in Delhi NCR",
    metaDescription:
      "Performance marketing across Delhi, Gurugram, Noida and Faridabad. Campaigns for real estate, education, manufacturing and D2C brands.",
    answerBlock: {
      question: "Should Delhi NCR campaigns be targeted as one market?",
      answer:
        "No. Delhi NCR contains several distinct markets with different income profiles, industries and buying behaviour. Gurugram skews corporate and premium, Noida skews technology and education, and Delhi proper spans an extremely wide range. Campaigns segmented by sub-market consistently outperform single NCR-wide targeting.",
      keyFacts: [
        "NCR spans multiple states with different regulations and buyer profiles",
        "Gurugram, Noida and Delhi have materially different income distributions",
        "Real estate and education are the region's most competitive categories",
        "Hindi-English mixed creative often outperforms English-only here",
      ],
    },
    reasons: [
      { icon: Building2, title: "Sub-market segmentation", body: "Gurugram, Noida, Faridabad and Delhi run as separate campaigns with separate messaging." },
      { icon: Users, title: "Language mix", body: "Hindi and Hinglish creative frequently outperforms English-only across large NCR segments." },
      { icon: TrendingUp, title: "High-competition categories", body: "Education and real estate in NCR are national-scale auctions. We plan for that." },
      { icon: Clock, title: "Seasonal intensity", body: "Admission cycles and property launch windows drive severe demand spikes we plan around." },
    ],
    solution: {
      title: "One NCR campaign is four campaigns fighting each other.",
      body: "Running a single NCR-wide campaign means your Gurugram budget subsidises your Faridabad clicks and neither audience gets the right message. We split by sub-market, then by intent within it.",
      points: [
        "Separate campaign structures per NCR sub-market",
        "Hindi and Hinglish creative variants tested against English",
        "Locality landing pages for Gurugram, Noida and Delhi",
        "Seasonal budget planning around admission and launch cycles",
        "Cross-state compliance handled where regulations differ",
      ],
    },
    services: indiaServices,
    process: indiaProcess,
    faqs: [
      { q: "Do you work with Gurugram-based companies?", a: "Yes. Gurugram, Noida, Faridabad and Delhi each get their own campaign structure and messaging." },
      { q: "Is Hindi creative necessary in NCR?", a: "Often yes. For many categories Hindi or Hinglish creative outperforms English-only, though it varies by audience and price point, so we test rather than assume." },
      { q: "How do you handle NCR real estate campaigns?", a: "Strictly segmented by micro-market and price bracket, with the price stated openly in creative and site visits as the optimisation target rather than form fills." },
      { q: "Do you have a Delhi office?", a: "No. We work with NCR clients remotely from Pune. If a project needs in-person presence for a launch or a shoot, we travel." },
    ],
  },

  hyderabad: {
    slug: "hyderabad",
    title: "Digital Marketing Agency in Hyderabad",
    area: "Hyderabad",
    nearby: ["HITEC City", "Gachibowli", "Madhapur", "Banjara Hills", "Jubilee Hills", "Kondapur"],
    eyebrow: "Locations",
    countryCode: "IN",
    countryName: "India",
    subtitle:
      "A fast-growing market where advertising costs are still reasonable, which makes it a good place to scale efficiently.",
    metaTitle: "Digital Marketing Agency in Hyderabad",
    metaDescription:
      "Performance marketing for Hyderabad businesses. Paid media, SEO and web development for real estate, pharma, technology and retail brands.",
    answerBlock: {
      question: "Is digital advertising cheaper in Hyderabad than Mumbai or Bangalore?",
      answer:
        "Generally yes. Hyderabad's advertising auctions are usually less crowded than Mumbai's or Bangalore's, so clicks in comparable categories tend to cost less. Combined with strong growth in real estate, pharmaceuticals and technology, that makes it an efficient market for brands scaling beyond their home city.",
      keyFacts: [
        "Clicks usually cost less than in Mumbai for comparable categories",
        "Real estate, pharma and IT are the dominant advertising categories",
        "Telugu creative significantly expands reach beyond English-only campaigns",
        "HITEC City and Gachibowli form a distinct high-income corridor",
      ],
    },
    reasons: [
      { icon: TrendingUp, title: "Efficient auctions", body: "Lower competition means your budget reaches further than in Mumbai or Bangalore." },
      { icon: Users, title: "Telugu and English", body: "Bilingual creative widens reach across large parts of the market." },
      { icon: Building2, title: "Corridor targeting", body: "HITEC City and Gachibowli behave very differently from the old city." },
      { icon: Globe2, title: "Pharma and tech depth", body: "Two categories with specific compliance and buyer-behaviour requirements we handle." },
    ],
    solution: {
      title: "A growth market rewards moving early.",
      body: "Hyderabad's auctions are still reasonably priced, which means brands establishing presence now lock in lower acquisition costs and organic authority before the market saturates the way Bangalore already has.",
      points: [
        "Telugu and English creative tested in parallel",
        "Corridor-level targeting across HITEC City, Gachibowli and Banjara Hills",
        "Local SEO built early while competition is still manageable",
        "Pharma advertising compliance handled where relevant",
        "Budget efficiency benchmarked against Mumbai and Bangalore equivalents",
      ],
    },
    services: indiaServices,
    process: indiaProcess,
    faqs: [
      { q: "Do you create Telugu language creative?", a: "Yes, written by native Telugu speakers rather than machine translation, which reads poorly in advertising and audiences notice immediately." },
      { q: "Is Hyderabad a good market to expand into?", a: "For many brands, yes. Acquisition costs are usually lower than Mumbai or Bangalore while purchasing power in the tech corridors is strong, which makes it a sensible second or third city." },
      { q: "Do you work with pharmaceutical companies?", a: "Yes, within the applicable advertising restrictions. Prescription drug promotion to consumers is heavily restricted in India, so that work focuses on corporate brand, B2B and recruitment rather than product advertising." },
      { q: "Do you have a Hyderabad office?", a: "No, we work with Hyderabad clients remotely from Pune." },
    ],
  },

  ahmedabad: {
    slug: "ahmedabad",
    title: "Digital Marketing Agency in Ahmedabad",
    area: "Ahmedabad",
    nearby: ["SG Highway", "Prahlad Nagar", "Satellite", "Bodakdev", "Maninagar", "Gandhinagar"],
    eyebrow: "Locations",
    countryCode: "IN",
    countryName: "India",
    subtitle:
      "A manufacturing and trading economy going digital fast, where B2B buyers still want a phone call and the website's job is to earn it.",
    metaTitle: "Digital Marketing Agency in Ahmedabad",
    metaDescription:
      "Performance marketing for Ahmedabad businesses. B2B lead generation, eCommerce growth and SEO for manufacturing, textile and D2C brands.",
    answerBlock: {
      question: "How does B2B marketing work for Ahmedabad manufacturers?",
      answer:
        "Ahmedabad B2B buyers typically research online but transact over the phone or in person. Effective campaigns therefore optimise for qualified enquiry calls rather than online purchases, using search ads against product and specification terms, credibility-focused websites, and WhatsApp as the primary follow-up channel.",
      keyFacts: [
        "Phone and WhatsApp remain the dominant B2B closing channels",
        "Specification and product-term search carries the highest intent",
        "Gujarati creative expands reach in local and regional B2B segments",
        "Export-oriented businesses need separate international campaigns",
      ],
    },
    reasons: [
      { icon: Building2, title: "B2B and manufacturing fluency", body: "Long specification-driven sales cycles that close on a call, not a cart." },
      { icon: Globe2, title: "Export market experience", body: "Many Ahmedabad businesses sell abroad, and export campaigns need their own plan." },
      { icon: Users, title: "Gujarati and Hindi creative", body: "Regional language expands reach considerably in local B2B segments." },
      { icon: TrendingUp, title: "Cost-efficient market", body: "Lower auction costs than the metros, with strong purchasing intent." },
    ],
    solution: {
      title: "Optimise for the call, because that is where deals close.",
      body: "Chasing online conversions in a market that transacts by phone produces a dashboard disconnected from reality. We track calls as the primary conversion and build the credibility assets that make a buyer willing to dial.",
      points: [
        "Call tracking as the primary conversion event",
        "Product and specification-level search targeting",
        "Credibility-first website with certifications and capability detail",
        "WhatsApp Business as the core follow-up channel",
        "Separate export campaigns for international buyers",
      ],
    },
    services: indiaServices,
    process: indiaProcess,
    faqs: [
      { q: "Do you work with manufacturers and exporters?", a: "Yes. That work usually splits into two campaign sets: domestic B2B optimised for calls and WhatsApp, and international campaigns for buyer markets with different messaging." },
      { q: "Is IndiaMART enough for B2B leads?", a: "It generates volume but you compete purely on price alongside everyone else in the listing. Your own search presence and website produce better-qualified buyers who are choosing you specifically rather than comparing quotes." },
      { q: "Do you create Gujarati content?", a: "Yes, written by native Gujarati speakers where the audience and category call for it." },
      { q: "What budget suits an Ahmedabad B2B campaign?", a: "B2B search campaigns can work on modest budgets because the audience is narrow and searching with clear intent. We size the budget for your products during the free growth audit." },
    ],
  },

  "dubai-uae": {
    slug: "dubai-uae",
    title: "Digital Marketing Agency for Dubai & UAE",
    area: "Dubai",
    nearby: ["Dubai Marina", "Downtown Dubai", "Business Bay", "JLT", "Abu Dhabi", "Sharjah"],
    eyebrow: "Locations",
    countryCode: "AE",
    countryName: "United Arab Emirates",
    subtitle:
      "A high-value, multilingual and competitive market, only 1.5 hours behind India.",
    metaTitle: "Digital Marketing Agency for Dubai & UAE",
    metaDescription:
      "Performance marketing for Dubai and UAE businesses. Arabic and English campaigns for property, luxury retail, hospitality and professional services.",
    answerBlock: {
      question: "What should businesses know about digital marketing in the UAE?",
      answer:
        "The UAE is a high-cost, multilingual advertising market with a largely expatriate audience. Effective campaigns usually run Arabic and English in parallel, account for the Monday-to-Friday working week with a short Friday, comply with National Media Council advertising rules, and recognise that Instagram and TikTok carry unusually high influence in the region.",
      keyFacts: [
        "Arabic and English campaigns typically run in parallel, not as translations",
        "The UAE working week runs Monday to Friday, with a short Friday",
        "Advertising is regulated by National Media Council guidelines",
        "Instagram and TikTok penetration is among the highest globally",
      ],
    },
    reasons: [
      { icon: Clock, title: "Only 1.5 hours apart", body: "UAE working hours overlap almost completely with India's." },
      { icon: Globe2, title: "Arabic and English", body: "Parallel campaigns with native Arabic copy, not translated English." },
      { icon: TrendingUp, title: "High-value transactions", body: "Property and luxury categories justify sophisticated funnels and longer nurture." },
      { icon: Users, title: "Expat-heavy audience", body: "Nationality-segmented targeting significantly outperforms broad UAE campaigns." },
    ],
    solution: {
      title: "Dubai rewards precision and punishes generic creative.",
      body: "The UAE audience is fragmented by nationality, language and income in ways that a single campaign cannot address. We segment properly, run Arabic natively, and build the longer nurture that high-ticket property and luxury purchases require.",
      points: [
        "Native Arabic creative alongside English, not machine translation",
        "Nationality and language segmentation within campaigns",
        "Compliance with National Media Council advertising rules",
        "AED reporting and local payment gateway integration",
        "WhatsApp-first follow-up, which dominates UAE business communication",
      ],
    },
    services: globalServices,
    process: globalProcess,
    faqs: [
      { q: "Can an India-based agency run UAE campaigns effectively?", a: "Yes. India is only 1.5 hours ahead of the UAE, so working hours overlap almost completely. What matters most is native Arabic copywriting and careful audience segmentation by nationality and language." },
      { q: "Do we need Arabic campaigns?", a: "It depends on the audience. For Emirati nationals and Arab expatriates, yes, Arabic campaigns tend to perform better. For Western expatriate and South Asian segments, English is typically sufficient. Most clients end up running both." },
      { q: "How do you handle UAE real estate marketing?", a: "UAE property campaigns segment heavily by nationality and investment intent, since a buyer purchasing for residence behaves very differently from one buying for yield or for a golden visa. Creative and landing pages differ for each." },
      { q: "Do you bill in AED or INR?", a: "Either. We report performance in AED so the numbers match your internal planning, and invoice in whichever currency suits your accounting." },
    ],
  },

  "london-uk": {
    slug: "london-uk",
    title: "Digital Marketing Agency for London & UK",
    area: "London",
    nearby: ["Greater London", "Manchester", "Birmingham", "Leeds", "Bristol", "Edinburgh"],
    eyebrow: "Locations",
    countryCode: "GB",
    countryName: "United Kingdom",
    subtitle:
      "A mature, well-regulated market where audiences are marketing-literate and unearned claims get ignored or reported.",
    metaTitle: "Digital Marketing Agency for London & UK",
    metaDescription:
      "Performance marketing for UK businesses. Google Ads, Meta Ads and SEO for eCommerce, professional services and hospitality brands across the UK.",
    answerBlock: {
      question: "What are the rules for advertising in the UK?",
      answer:
        "UK advertising is governed by the CAP Code and enforced by the Advertising Standards Authority. Claims must be substantiated before publication, pricing must include VAT for consumer audiences, and comparative claims need evidence. UK GDPR also requires a lawful basis and genuine consent for marketing communications and tracking.",
      keyFacts: [
        "The ASA enforces the CAP Code and can require ads to be withdrawn",
        "Consumer pricing must be displayed inclusive of VAT",
        "UK GDPR governs consent for tracking and email marketing",
        "British English spelling and tone materially affect ad performance",
      ],
    },
    reasons: [
      { icon: Globe2, title: "Native British English", body: "Spelling, tone and cultural register matter. American English reads as foreign and converts worse." },
      { icon: Users, title: "Marketing-literate audience", body: "UK consumers recognise and distrust hype. Restrained, specific claims perform better." },
      { icon: TrendingUp, title: "Compliance handled", body: "ASA and CAP Code requirements built into creative review before anything launches." },
      { icon: Clock, title: "Afternoon overlap", body: "UK mornings are our afternoons. Daily communication windows work comfortably." },
    ],
    solution: {
      title: "Restraint outperforms hype in the UK.",
      body: "Creative that works well in India or the US frequently underperforms in the UK, where audiences read exclamation marks and superlatives as a warning sign. We write to local register and substantiate every claim before it runs.",
      points: [
        "British English copywriting, reviewed for tone and register",
        "ASA and CAP Code compliance check before launch",
        "VAT-inclusive pricing displayed for consumer audiences",
        "UK GDPR-compliant consent and tracking configuration",
        "GBP reporting aligned to your internal targets",
      ],
    },
    services: globalServices,
    process: globalProcess,
    faqs: [
      { q: "Will UK customers care that you are based in India?", a: "What UK customers notice is poor English, American spelling and unsubstantiated claims, not where the agency sits. We write in British English, substantiate claims and are upfront about being based in Pune." },
      { q: "Do you understand UK GDPR requirements?", a: "Yes. We configure consent management, cookie banners and tracking to meet UK GDPR, and we can work alongside your data protection advisor. We implement compliance requirements, but we are not a substitute for legal advice." },
      { q: "What are your working hours for UK clients?", a: "The UK morning is the Indian afternoon, which gives a solid daily overlap for calls. Reports and written updates cover the rest of the day." },
      { q: "Do you handle VAT and pricing display correctly?", a: "Yes. Consumer-facing pricing runs VAT-inclusive as UK rules require, and B2B pricing is displayed appropriately for business audiences." },
    ],
  },

  usa: {
    slug: "usa",
    title: "Digital Marketing Agency for the United States",
    area: "United States",
    nearby: ["New York", "California", "Texas", "Florida", "Illinois", "Washington"],
    eyebrow: "Locations",
    countryCode: "US",
    countryName: "United States",
    subtitle:
      "The largest and most competitive digital market in the world, where an offshore team has to prove its value.",
    metaTitle: "Digital Marketing Agency for US Businesses",
    metaDescription:
      "Performance marketing for US businesses. Google Ads, Meta Ads, SEO and CRO for D2C, SaaS and service brands across US time zones.",
    answerBlock: {
      question: "What makes US digital advertising different from other markets?",
      answer:
        "The US is the most expensive and most sophisticated digital advertising market, with some of the highest click costs in the world in competitive categories. It is also fragmented by state-level regulation, spans six time zones, and requires compliance with state privacy laws such as the CCPA for California residents.",
      keyFacts: [
        "Competitive US categories have some of the highest click costs anywhere",
        "State privacy laws including CCPA apply to consumer marketing",
        "Six time zones affect ad scheduling and speed-to-lead expectations",
        "State-level targeting usually outperforms nationwide campaigns",
      ],
    },
    reasons: [
      { icon: TrendingUp, title: "Efficiency under high CPCs", body: "When clicks are this expensive, conversion rate optimisation pays for itself quickly." },
      { icon: Globe2, title: "State-level targeting", body: "Nationwide campaigns waste budget. We segment by state and metro." },
      { icon: Clock, title: "Evening IST, morning Eastern", body: "The Indian evening is the US Eastern morning, which is when we schedule calls." },
      { icon: Users, title: "American English and register", body: "Copy written natively for a US audience, not adapted from British or Indian English." },
    ],
    solution: {
      title: "Expensive traffic makes conversion work non-optional.",
      body: "In the US the difference between a 2 percent and a 6 percent conversion rate is often the difference between a business that scales and one that cannot. We put disproportionate effort into the post-click experience.",
      points: [
        "State and metro-level campaign segmentation",
        "Heavy investment in landing page and checkout optimisation",
        "CCPA-compliant consent and data handling",
        "Ad scheduling aligned to each target time zone",
        "USD reporting with cohort-based CAC analysis",
      ],
    },
    services: globalServices,
    process: globalProcess,
    faqs: [
      { q: "Why hire an Indian agency for US marketing?", a: "Cost is the usual reason. The honest caveat is that you should judge any agency on its work and references rather than price, because poor results in an expensive-click market cost far more than the fee saves." },
      { q: "How do you handle the time difference?", a: "The Indian evening overlaps with the US Eastern and Central morning, so that is when calls happen. Pacific time clients usually get a scheduled weekly call plus written updates. Campaign alerts run automatically, so nothing waits for a call." },
      { q: "Do you understand US privacy regulations?", a: "We implement CCPA-compliant consent management and configure tracking accordingly, and we stay current on state-level privacy developments. For legal interpretation you should still use US counsel: we handle implementation, not advice." },
      { q: "What US industries do you work with?", a: "D2C eCommerce, SaaS and service businesses. Highly regulated categories such as healthcare, legal and finance carry compliance requirements we assess case by case." },
    ],
  },

  australia: {
    slug: "australia",
    title: "Digital Marketing Agency for Australia",
    area: "Australia",
    nearby: ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide", "Gold Coast"],
    eyebrow: "Locations",
    countryCode: "AU",
    countryName: "Australia",
    subtitle:
      "A concentrated, high-value market where local trades and service businesses win on Google Business Profile and reviews more than on paid media.",
    metaTitle: "Digital Marketing Agency for Australia",
    metaDescription:
      "Performance marketing for Australian businesses. Local SEO, Google Ads and Meta Ads for trades, services and eCommerce brands across Australia.",
    answerBlock: {
      question: "What works best for marketing a local Australian business?",
      answer:
        "For Australian local and trade businesses, Google Business Profile optimisation and review generation typically outperform paid advertising on cost per enquiry. Most Australian consumers select local services from the map pack, making profile completeness, review volume and recency, and suburb-level service pages the highest-return investments.",
      keyFacts: [
        "Google Business Profile drives the majority of local service enquiries",
        "Australian consumers weigh review volume and recency heavily",
        "Suburb-level service pages outperform single city-wide pages",
        "Australian Consumer Law governs advertising claims and pricing",
      ],
    },
    reasons: [
      { icon: MapPin, title: "Local SEO focus", body: "For Australian trades and services, the map pack matters more than the ad auction." },
      { icon: Clock, title: "Morning IST, afternoon AEST", body: "A workable daily overlap with Sydney and Melbourne hours." },
      { icon: Users, title: "Australian English and tone", body: "Direct, understated, no hype. Overselling reads badly here." },
      { icon: TrendingUp, title: "Review-driven selection", body: "Review programmes usually beat additional ad spend on cost per enquiry." },
    ],
    solution: {
      title: "Win the map pack before you buy more clicks.",
      body: "Australian local service businesses consistently get better returns from profile optimisation, review generation and suburb pages than from increasing ad budget. We build that foundation first and layer paid media on top of it.",
      points: [
        "Google Business Profile optimisation per service area",
        "Systematic review generation and response",
        "Suburb-level service pages for each area covered",
        "Australian Consumer Law compliance on claims and pricing",
        "AUD reporting with GST-inclusive consumer pricing",
      ],
    },
    services: [
      { label: "Local SEO & Google Business", href: "/services/local-seo-gmb" },
      { label: "Google Ads & PPC", href: "/services/google-ads-ppc" },
      { label: "SEO Services", href: "/services/seo-services" },
      { label: "Web Design & Development", href: "/services/web-design-development" },
      { label: "Meta Ads", href: "/services/meta-ads" },
      { label: "Conversion Rate Optimisation", href: "/services/conversion-rate-optimisation" },
    ],
    process: globalProcess,
    faqs: [
      { q: "How do you manage the time difference with Australia?", a: "Australian eastern time is 4.5 to 5.5 hours ahead of India, so our mornings cover your afternoons. That gives a comfortable daily window for calls, and reporting runs asynchronously." },
      { q: "Do you understand Australian Consumer Law?", a: "We implement to its requirements on advertising claims, pricing display and comparative statements. As always, we handle implementation rather than legal advice." },
      { q: "Is local SEO really better than ads for trades?", a: "For most trades, yes, at least as the starting point. A tradesperson ranking in the map pack for their suburbs generates enquiries continuously at no marginal cost, whereas ads stop the moment the budget does. We usually build the organic base first." },
      { q: "Do you work with Australian eCommerce brands?", a: "Yes. Australian eCommerce has particular considerations around shipping cost expectations and a smaller domestic market, which often makes retention and lifetime value more important than in larger markets." },
    ],
  },

  canada: {
    slug: "canada",
    title: "Digital Marketing Agency for Canada",
    area: "Canada",
    nearby: ["Toronto", "Vancouver", "Montreal", "Calgary", "Ottawa", "Edmonton"],
    eyebrow: "Locations",
    countryCode: "CA",
    countryName: "Canada",
    subtitle:
      "A bilingual market with some of the strictest anti-spam legislation anywhere, which makes doing it properly a real advantage.",
    metaTitle: "Digital Marketing Agency for Canada",
    metaDescription:
      "Performance marketing for Canadian businesses. CASL-compliant email, Google Ads, SEO and bilingual campaigns for Toronto, Vancouver and Montreal.",
    answerBlock: {
      question: "What is CASL and how does it affect marketing in Canada?",
      answer:
        "CASL is Canada's Anti-Spam Legislation, which requires express or implied consent before sending commercial electronic messages. It mandates clear sender identification and a working unsubscribe mechanism, and penalties can reach one million dollars for individuals and ten million for organisations, making consent documentation essential.",
      keyFacts: [
        "Express or implied consent is required before commercial email",
        "Consent records must be documented and retained",
        "Penalties reach up to CAD 10 million for organisations",
        "Quebec requires French-language marketing under Bill 96",
      ],
    },
    reasons: [
      { icon: Globe2, title: "English and French", body: "Quebec campaigns run in French, which Bill 96 increasingly requires rather than suggests." },
      { icon: TrendingUp, title: "CASL-compliant by default", body: "Consent capture and documentation built into every form we ship." },
      { icon: Users, title: "Province-level targeting", body: "Ontario, British Columbia and Quebec behave as distinct markets." },
      { icon: Clock, title: "Evening IST, morning Eastern", body: "The Indian evening is the Toronto and Montreal morning." },
    ],
    solution: {
      title: "Compliance is not an obstacle here. It is a moat.",
      body: "Because CASL penalties are severe, many competitors avoid email marketing in Canada or do it badly. A properly consented, well-segmented list is therefore unusually valuable in this market.",
      points: [
        "CASL-compliant consent capture with documented records",
        "French-language campaigns and landing pages for Quebec",
        "Province-level campaign segmentation",
        "CAD reporting with provincial tax display handled correctly",
        "PIPEDA-aligned data handling and tracking consent",
      ],
    },
    services: globalServices,
    process: globalProcess,
    faqs: [
      { q: "Do we need French versions of everything?", a: "For Quebec, effectively yes. Bill 96 strengthened French-language requirements for commercial communication. Outside Quebec, English is generally sufficient, though bilingual campaigns often improve performance in Ottawa and parts of New Brunswick." },
      { q: "How strict is CASL really?", a: "Strict, and actively enforced with substantial penalties. We build consent capture and record-keeping into every form from the outset rather than retrofitting it, because reconstructing consent evidence after the fact is close to impossible." },
      { q: "Can you handle Canadian tax display requirements?", a: "Yes. GST, HST and provincial sales taxes vary by province and we configure pricing display accordingly on eCommerce and service pages." },
      { q: "What are your hours for Canadian clients?", a: "The Indian evening overlaps with the Eastern morning, which suits Toronto, Montreal and Ottawa. Vancouver clients usually get a scheduled weekly call plus written updates." },
    ],
  },

  singapore: {
    slug: "singapore",
    title: "Digital Marketing Agency for Singapore",
    area: "Singapore",
    nearby: ["CBD", "Orchard", "Jurong", "Tampines", "Woodlands", "Southeast Asia"],
    eyebrow: "Locations",
    countryCode: "SG",
    countryName: "Singapore",
    subtitle:
      "A small, affluent, extremely competitive market that doubles as the regional headquarters for most of Southeast Asia.",
    metaTitle: "Digital Marketing Agency for Singapore",
    metaDescription:
      "Performance marketing for Singapore businesses. B2B lead generation, PDPA-compliant campaigns and regional Southeast Asia expansion support.",
    answerBlock: {
      question: "What should businesses consider when marketing in Singapore?",
      answer:
        "Singapore is a small, high-income market with limited audience size, which pushes advertising costs up and makes precision essential. Marketing must comply with the Personal Data Protection Act, including the Do Not Call registry, and many campaigns are structured to serve Singapore alongside the wider Southeast Asian region.",
      keyFacts: [
        "Small population means audiences saturate quickly and frequency rises",
        "PDPA governs data collection and the Do Not Call registry restricts outreach",
        "English is the primary business language across the market",
        "Singapore frequently serves as the hub for regional SEA campaigns",
      ],
    },
    reasons: [
      { icon: Globe2, title: "Regional hub strategy", body: "Singapore campaigns often extend into Malaysia, Indonesia and Thailand." },
      { icon: Users, title: "High-value B2B", body: "A dense concentration of regional headquarters and financial services buyers." },
      { icon: Clock, title: "2.5 hours ahead", body: "Near-complete working hours overlap with India." },
      { icon: TrendingUp, title: "Saturation management", body: "A small audience means frequency control matters more than in larger markets." },
    ],
    solution: {
      title: "A small market rewards precision over volume.",
      body: "You can saturate a Singapore audience in weeks, at which point frequency climbs and performance degrades. We manage reach carefully and use Singapore as the base for regional expansion rather than trying to squeeze more from one market.",
      points: [
        "Frequency capping and audience rotation to avoid burnout",
        "PDPA-compliant data collection and Do Not Call handling",
        "Regional expansion into Malaysia, Indonesia and Thailand",
        "SGD reporting with regional currency comparisons",
        "B2B and account-based targeting for regional headquarters",
      ],
    },
    services: globalServices,
    process: globalProcess,
    faqs: [
      { q: "Is Singapore too small a market to advertise in?", a: "Not too small, but small enough that it saturates quickly. We plan for that with frequency management and audience rotation, and most clients pair Singapore with regional campaigns to sustain growth." },
      { q: "Do you handle PDPA compliance?", a: "Yes. We build consent capture that meets PDPA requirements and account for Do Not Call registry restrictions in any telephone follow-up flows." },
      { q: "Can you expand our campaigns into Southeast Asia?", a: "Yes. Singapore is a natural base for regional expansion, though Malaysia, Indonesia, Thailand and Vietnam each need genuinely local research, because language, payment methods and platform preferences all differ." },
      { q: "What languages do you work in for Singapore?", a: "English is the primary business language and covers most campaigns. Mandarin creative is worth testing for certain consumer categories, and we bring in native writers where it is warranted." },
    ],
  },
};

export const locationList = Object.values(locations);
export const locationSlugs = Object.keys(locations);
export const indiaLocations = locationList.filter((l) => l.countryCode === "IN");
export const globalLocations = locationList.filter((l) => l.countryCode !== "IN");
