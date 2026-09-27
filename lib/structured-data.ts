import { siteName, siteUrl } from "@/lib/seo";
import type { QA, TeamMember, Testimonial } from "@/lib/content-types";
import { socialProfiles } from "@/lib/social-links";
import { business } from "@/lib/site-config";

export type JsonLdValue = Record<string, unknown>;

export const businessPhone = business.phoneDisplay;

export const businessAddress: JsonLdValue = {
  "@type": "PostalAddress",
  streetAddress: business.address.street,
  addressLocality: business.address.locality,
  addressRegion: business.address.region,
  postalCode: business.address.postalCode,
  addressCountry: business.address.country,
};

export const businessGeo: JsonLdValue = {
  "@type": "GeoCoordinates",
  latitude: business.geo.latitude,
  longitude: business.geo.longitude,
};

/** Localities targeted for local search, beyond Pune city and India-wide reach. */
export const serviceLocalities = [
  "Pune",
  "Balewadi",
  "Baner",
  "Kharadi",
  "Mumbai",
  "Bangalore",
  "Delhi NCR",
  "Hyderabad",
  "Ahmedabad",
];

const openingHoursSchema: JsonLdValue = {
  "@type": "OpeningHoursSpecification",
  dayOfWeek: business.openingHours.days,
  opens: business.openingHours.opens,
  closes: business.openingHours.closes,
};

export const organizationSchema: JsonLdValue = {
  "@type": ["Organization", "ProfessionalService", "MarketingAgency"],
  "@id": `${siteUrl}/#organization`,
  name: business.legalName,
  alternateName: siteName,
  slogan: business.tagline,
  url: siteUrl,
  foundingDate: business.foundingDate,
  logo: {
    "@type": "ImageObject",
    url: `${siteUrl}/icon.png`,
    width: 512,
    height: 512,
  },
  image: `${siteUrl}/og.png`,
  telephone: business.phoneDisplay,
  email: business.email,
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: business.phoneDisplay,
      email: business.email,
      contactType: "sales",
      areaServed: ["IN", "AE", "GB", "US", "AU", "CA", "SG"],
      availableLanguage: ["English", "Hindi", "Marathi"],
    },
    {
      "@type": "ContactPoint",
      telephone: business.phoneDisplay,
      email: business.email,
      contactType: "customer support",
      areaServed: ["IN", "Worldwide"],
      availableLanguage: ["English", "Hindi"],
    },
  ],
  address: businessAddress,
  geo: businessGeo,
  openingHoursSpecification: openingHoursSchema,
  priceRange: business.priceRange,
  sameAs: socialProfiles.map((profile) => profile.href),
  description: business.description,
  areaServed: [...serviceLocalities, "Maharashtra", ...business.areaServed],
  knowsAbout: [
    "Performance marketing",
    "Google Ads",
    "Meta Ads",
    "Search engine optimisation",
    "Local SEO",
    "Conversion rate optimisation",
    "Real estate lead generation",
    "eCommerce marketing",
    "Landing page design",
    "Marketing automation",
  ],
};

export const websiteSchema: JsonLdValue = {
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: siteName,
  alternateName: business.legalName,
  publisher: { "@id": `${siteUrl}/#organization` },
  inLanguage: "en",
};

export function graph(items: JsonLdValue[]): JsonLdValue {
  return { "@context": "https://schema.org", "@graph": items };
}

export function breadcrumbSchema(items: { name: string; path: string }[]): JsonLdValue {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path === "/" ? siteUrl : `${siteUrl}${item.path}`,
    })),
  };
}

export function faqSchema(items: QA[]): JsonLdValue {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

/**
 * Answer-first block marked up as a standalone Question so assistants can lift it verbatim.
 * Pairs with the visible TL;DR at the top of the page. Deliberately not QAPage: Google
 * reserves that for pages where users post answers (forums), and misuse counts as spam.
 */
export function answerSchema(input: {
  question: string;
  answer: string;
  path: string;
}): JsonLdValue {
  return {
    "@type": "Question",
    "@id": `${siteUrl}${input.path}#answer`,
    name: input.question,
    url: `${siteUrl}${input.path}`,
    acceptedAnswer: {
      "@type": "Answer",
      text: input.answer,
      url: `${siteUrl}${input.path}`,
    },
  };
}

export function localBusinessSchema(input: {
  name: string;
  description: string;
  path: string;
  areaServed: string[];
  countryCode?: string;
}): JsonLdValue {
  return {
    "@type": "ProfessionalService",
    "@id": `${siteUrl}${input.path}#localbusiness`,
    name: input.name,
    description: input.description,
    url: `${siteUrl}${input.path}`,
    telephone: business.phoneDisplay,
    email: business.email,
    address: businessAddress,
    geo: businessGeo,
    openingHoursSpecification: openingHoursSchema,
    parentOrganization: { "@id": `${siteUrl}/#organization` },
    areaServed: input.areaServed.map((name) => ({ "@type": "City", name })),
    priceRange: business.priceRange,
  };
}

export function serviceSchema(input: {
  name: string;
  description: string;
  path: string;
  category: string;
  areaServed?: string[];
}): JsonLdValue {
  return {
    "@type": "Service",
    "@id": `${siteUrl}${input.path}#service`,
    name: input.name,
    description: input.description,
    serviceType: input.category,
    url: `${siteUrl}${input.path}`,
    provider: { "@id": `${siteUrl}/#organization` },
    areaServed: input.areaServed || business.areaServed,
  };
}

export function productSchema(input: {
  name: string;
  description: string;
  path: string;
  image?: string;
  price?: string;
  priceCurrency?: string;
  availability?: "InStock" | "OutOfStock" | "PreOrder";
  rating?: { value: number; count: number };
  externalUrl?: string;
}): JsonLdValue {
  return {
    "@type": "Product",
    "@id": `${siteUrl}${input.path}#product`,
    name: input.name,
    description: input.description,
    url: `${siteUrl}${input.path}`,
    brand: { "@type": "Brand", name: siteName },
    manufacturer: { "@id": `${siteUrl}/#organization` },
    ...(input.image ? { image: input.image } : {}),
    ...(input.price
      ? {
          offers: {
            "@type": "Offer",
            price: input.price,
            priceCurrency: input.priceCurrency || "INR",
            availability: `https://schema.org/${input.availability || "InStock"}`,
            url: `${siteUrl}${input.path}`,
            seller: { "@id": `${siteUrl}/#organization` },
          },
        }
      : {}),
    ...(input.rating
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: input.rating.value,
            reviewCount: input.rating.count,
          },
        }
      : {}),
    ...(input.externalUrl ? { sameAs: input.externalUrl } : {}),
  };
}

/** Free browser tools (calculators, generators) index better as SoftwareApplication. */
export function softwareAppSchema(input: {
  name: string;
  description: string;
  path: string;
}): JsonLdValue {
  return {
    "@type": "SoftwareApplication",
    "@id": `${siteUrl}${input.path}#app`,
    name: input.name,
    description: input.description,
    url: `${siteUrl}${input.path}`,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    publisher: { "@id": `${siteUrl}/#organization` },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
    },
  };
}

export function personSchema(member: TeamMember): JsonLdValue {
  return {
    "@type": "Person",
    "@id": `${siteUrl}/team#${member.slug}`,
    name: member.name,
    jobTitle: member.role,
    description: member.bio,
    worksFor: { "@id": `${siteUrl}/#organization` },
    ...(member.image ? { image: `${siteUrl}${member.image}` } : {}),
    ...(member.linkedin ? { sameAs: [member.linkedin] } : {}),
    ...(member.expertise?.length ? { knowsAbout: member.expertise } : {}),
  };
}

export function reviewSchema(items: Testimonial[]): JsonLdValue[] {
  return items.map((item) => ({
    "@type": "Review",
    "@id": `${siteUrl}/testimonials#${item.id}`,
    reviewBody: item.quote,
    author: { "@type": "Person", name: item.author },
    itemReviewed: { "@id": `${siteUrl}/#organization` },
    ...(item.rating
      ? {
          reviewRating: {
            "@type": "Rating",
            ratingValue: item.rating,
            bestRating: 5,
            worstRating: 1,
          },
        }
      : {}),
  }));
}

export function aggregateRatingSchema(input: {
  value: number;
  count: number;
}): JsonLdValue {
  return {
    "@type": "AggregateRating",
    "@id": `${siteUrl}/#rating`,
    itemReviewed: { "@id": `${siteUrl}/#organization` },
    ratingValue: input.value,
    reviewCount: input.count,
    bestRating: 5,
    worstRating: 1,
  };
}

export function caseStudySchema(input: {
  name: string;
  description: string;
  path: string;
  client?: string;
  image?: string;
}): JsonLdValue {
  return {
    "@type": "Article",
    "@id": `${siteUrl}${input.path}#casestudy`,
    headline: input.name,
    description: input.description,
    url: `${siteUrl}${input.path}`,
    author: { "@id": `${siteUrl}/#organization` },
    publisher: { "@id": `${siteUrl}/#organization` },
    isPartOf: { "@id": `${siteUrl}/#website` },
    ...(input.client ? { about: { "@type": "Organization", name: input.client } } : {}),
    ...(input.image ? { image: input.image } : {}),
  };
}

export function articleSchema(input: {
  title: string;
  description: string;
  path: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  schemaType?: "BlogPosting" | "Article" | "NewsArticle";
  image?: string;
  keywords?: string[];
  articleSection?: string;
}): JsonLdValue {
  return {
    "@type": input.schemaType || "BlogPosting",
    "@id": `${siteUrl}${input.path}#article`,
    headline: input.title,
    description: input.description,
    url: `${siteUrl}${input.path}`,
    datePublished: input.datePublished,
    dateModified: input.dateModified || input.datePublished,
    author: { "@type": "Organization", name: input.author },
    publisher: { "@id": `${siteUrl}/#organization` },
    isPartOf: { "@id": `${siteUrl}/#website` },
    mainEntityOfPage: `${siteUrl}${input.path}`,
    ...(input.image ? { image: input.image } : {}),
    ...(input.keywords?.length ? { keywords: input.keywords.join(", ") } : {}),
    ...(input.articleSection ? { articleSection: input.articleSection } : {}),
  };
}

export function collectionSchema(input: {
  name: string;
  description: string;
  path: string;
  items: { name: string; path: string }[];
}): JsonLdValue {
  return {
    "@type": "CollectionPage",
    "@id": `${siteUrl}${input.path}#collection`,
    name: input.name,
    description: input.description,
    url: `${siteUrl}${input.path}`,
    isPartOf: { "@id": `${siteUrl}/#website` },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: input.items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        url: `${siteUrl}${item.path}`,
      })),
    },
  };
}
