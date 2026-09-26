/**
 * Single source of truth for NAP (name / address / phone) and business facts.
 * Local-SEO consistency depends on these values matching the Google Business
 * Profile character-for-character, so change them here and nowhere else.
 */

export const business = {
  legalName: "Marketix Studio",
  name: "Marketix Studio",
  tagline: "Marketing That Clicks",
  description:
    "Marketix Studio is a performance marketing agency in Pune helping real estate, eCommerce and D2C brands grow with paid media, SEO and conversion-led creative across India, the UAE, the UK and the US.",
  foundingDate: "2023",
  email: "contact@marketixstudio.com",
  phone: "+919021753876",
  phoneDisplay: "+91 90217 53876",
  whatsapp: "919021753876",
  address: {
    street: "Balewadi High Street",
    locality: "Balewadi",
    city: "Pune",
    region: "Maharashtra",
    postalCode: "411045",
    country: "IN",
    countryName: "India",
  },
  geo: { latitude: 18.5747, longitude: 73.7699 },
  /** Markets we actively sell into - mirrored into schema `areaServed`. */
  areaServed: [
    "India",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Australia",
    "Canada",
    "Singapore",
  ],
  openingHours: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "10:00",
    closes: "19:00",
  },
  priceRange: "₹₹",
} as const;

export const fullAddress = `${business.address.street}, ${business.address.locality}, ${business.address.city}, ${business.address.region} ${business.address.postalCode}`;

/** The site's AI assistant (chat widget bottom right, /api/chat). Always presented as an AI, never as a person. */
export const assistant = {
  name: "Shalz",
  avatar: "/brand/assistant-shalz.webp",
} as const;
