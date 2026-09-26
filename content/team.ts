import type { TeamMember } from "@/lib/content-types";

/**
 * Names, roles and photos pulled from the live marketixstudio.com/team page.
 * Bios describe each person's remit only - no years of experience, past
 * employers or credentials, because inventing those would be fabrication.
 * Replace each `bio` with the person's own wording before launch.
 */
export const team: TeamMember[] = [
  {
    slug: "abhishek-ghadge",
    name: "Abhishek Ghadge",
    role: "Founder & CEO",
    bio: "Founded Marketix Studio and leads strategy across the agency's paid media, SEO and creative work. Sits on the first call for every new engagement.",
    image: "/team/abhishek-ghadge.webp",
    expertise: ["Performance marketing", "Growth strategy", "Media planning"],
  },
  {
    slug: "shalini-dhumal",
    name: "Shalini Dhumal",
    role: "Senior SEO Specialist",
    bio: "Owns technical SEO, content strategy and local search programmes across client accounts, from crawl audits through to map pack rankings.",
    image: "/team/shalini-dhumal.webp",
    expertise: ["Technical SEO", "Local SEO", "Content strategy"],
  },
  {
    slug: "sakshi-kshirsagar",
    name: "Sakshi Kshirsagar",
    role: "Performance Marketing Lead",
    bio: "Runs Google and Meta campaign strategy day to day: account structure, creative testing and the regular optimisation calls.",
    image: "/team/sakshi-kshirsagar.webp",
    expertise: ["Google Ads", "Meta Ads", "Conversion tracking"],
  },
  {
    slug: "chinmay-lohokare",
    name: "Chinmay Lohokare",
    role: "Creative Director",
    bio: "Leads brand identity, campaign creative and web design, and sets the creative testing direction that keeps paid accounts from stalling.",
    image: "/team/chinmay-lohokare.webp",
    expertise: ["Brand identity", "Campaign creative", "Web design"],
  },
  {
    slug: "gururaj-dangare",
    name: "Gururaj Dangare",
    role: "Client Success Manager",
    bio: "Point of contact across active engagements: reporting, escalations and making sure what was scoped is what actually ships.",
    image: "/team/gururaj-dangare.webp",
    expertise: ["Account management", "Reporting", "Client strategy"],
  },
  {
    slug: "prakash-sharma",
    name: "Prakash Sharma",
    role: "Social Media Manager",
    // TODO: photo not found on the live site under the expected filename - send it over.
    bio: "Plans and runs organic social across client accounts, including the content calendar, community management and creator coordination.",
    expertise: ["Social media strategy", "Community management", "Content production"],
  },
];

export const teamBySlug = Object.fromEntries(team.map((m) => [m.slug, m]));
