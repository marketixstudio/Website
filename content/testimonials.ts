import type { Testimonial } from "@/lib/content-types";

/**
 * Transcribed from the live marketixstudio.com homepage - these are real,
 * published client quotes. They emit Review schema, so nothing goes in here
 * without the client having approved it in writing.
 *
 * NOTE: the old WordPress /testimonials/ page still carries the theme's demo
 * content ("Marko", Emma Richard / Nexatech, David Mont, Sophia Lewis). Those
 * are fabricated and are deliberately NOT carried over.
 */
export const testimonials: Testimonial[] = [
  {
    id: "pibm",
    quote:
      "MarketiX Studio has been handling our social media and college event posts consistently. The content is always delivered on time, looks professional, and gets solid engagement from our students and community. They understand our brand tone really well.",
    author: "Pratibha Institute of Business Management",
    role: "Social Media & College Events",
    company: "PIBM",
    industry: "Education",
    rating: 5,
    image: "/clients/pibm.png",
  },
  {
    id: "reviveup-drinks",
    quote:
      "MarketiX Studio built our website and it perfectly captures the energy of our brand. The design stands out, the pages load fast, and it looks great on mobile. Our customers regularly compliment the site and it has made a real difference to how people perceive ReviveUp.",
    author: "ReviveUp Drinks",
    role: "Website Development",
    company: "ReviveUp Drinks",
    industry: "eCommerce & D2C",
    rating: 5,
    image: "/clients/reviveup-drinks.png",
  },
  {
    id: "maruti-kalbhor",
    quote:
      "MarketiX Studio completely transformed our local visibility. After their Google My Business optimisation, we started appearing in the top 3 results for car accessories in Pune. Footfall and enquiries have gone up significantly.",
    author: "Maruti Kalbhor",
    role: "Owner",
    company: "Jay Ganesh Car Accessories",
    industry: "Automotive",
    rating: 5,
    image: "/clients/maruti-kalbhor.png",
    metric: { value: "Top 3", label: "Local map pack" },
  },
  {
    id: "urbanrise-infra",
    quote:
      "We needed a brand identity that matched the scale of our projects. MarketiX Studio delivered a logo and visual identity that instantly communicates premium and trust. Our clients' first impressions have never been better.",
    author: "UrbanRise Infra",
    role: "Brand Identity",
    company: "UrbanRise Infra",
    industry: "Real Estate & Infrastructure",
    rating: 5,
    image: "/clients/urbanrise-infra.png",
  },
  {
    id: "dostii-delight",
    quote:
      "From building our website to managing our social media, MarketiX Studio handled everything seamlessly. Our Instagram following grew 3x and the new website has been getting us consistent online orders. Highly recommend!",
    author: "Dostii Delight",
    role: "Website & Social Media",
    company: "Dostii Delight",
    industry: "Food & Beverage",
    rating: 5,
    image: "/clients/dostii-food-products.png",
  },
  {
    id: "bingle-india",
    // Live quote uses an em dash after "outstanding"; changed to a colon (site copy rule), words unchanged.
    quote:
      "MarketiX Studio designed our company brochure and website from scratch. The quality of work was outstanding: premium design, fast delivery, and they truly understood our brand vision. Will work with them again.",
    author: "Bingle India",
    role: "Brochure & Website",
    company: "Bingle India",
    industry: "Glass Partitions",
    rating: 5,
    image: "/clients/bingle-india.png",
  },
  {
    id: "shree-saraswati-optics",
    quote:
      "MarketiX Studio completely changed how we show up on Google. After they optimised our Business profile, we started appearing in local searches around Phaltan that we never ranked for before. Walk-ins and calls have increased noticeably since then.",
    author: "Shree Saraswati Optics",
    role: "Google Business Profile",
    company: "Shree Saraswati Optics, Phaltan",
    industry: "Retail",
    rating: 5,
    image: "/clients/saraswati-optics.png",
  },
  {
    id: "kleawip",
    quote:
      "MarketiX Studio built our eCommerce website and product catalogue exactly the way we envisioned it. The site is clean, fast, and easy for customers to navigate. Orders started coming in shortly after launch and the whole experience was smooth from start to finish.",
    author: "Kleawip",
    role: "eCommerce Website",
    company: "Kleawip",
    industry: "eCommerce",
    rating: 5,
    image: "/clients/kleawip.png",
  },
];

/** Real client logos, used in the homepage trust strip. */
export const clientLogos = [
  { name: "Pratibha Institute of Business Management", src: "/clients/pibm.png" },
  { name: "ReviveUp Drinks", src: "/clients/reviveup-drinks.png" },
  { name: "Jay Ganesh Car Accessories", src: "/clients/jayganesh-logo.png" },
  { name: "Dostii Food Products", src: "/clients/dostii-food-products.png" },
  { name: "Kleawip", src: "/clients/kleawip.png" },
  { name: "Urbanrise Infra", src: "/clients/urbanrise-infra.png" },
  { name: "Bingle India", src: "/clients/bingle-india.png" },
  { name: "Shree Saraswati Optics, Phaltan", src: "/clients/saraswati-optics.png" },
];

/**
 * Figures published on the current site. Only emit AggregateRating schema once
 * the review count can be evidenced from the Google Business Profile.
 */
export const clientStats = {
  satisfaction: 95,
  brandsServed: 25,
};
