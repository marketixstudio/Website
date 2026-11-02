import type { TeamMember } from "@/lib/content-types";

/**
 * Names and photos from the live marketixstudio.com/team page; roles updated by the user on 2026-11-02.
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
    role: "Business Development Manager",
    bio: "Leads new business: first conversations with prospective clients, understanding what they need and putting together the proposal for each engagement.",
    image: "/team/shalini-dhumal.webp",
    expertise: ["Business development", "Client relationships", "Proposals"],
  },
  {
    slug: "sakshi-kshirsagar",
    name: "Sakshi Kshirsagar",
    role: "Finance Manager",
    bio: "Manages the studio's finances: billing, payments, budgets and the financial side of every client engagement.",
    image: "/team/sakshi-kshirsagar.webp",
    expertise: ["Finance", "Billing and payments", "Budgeting"],
  },
  {
    slug: "chinmay-lohokare",
    name: "Chinmay Lohokare",
    role: "Creative Director & Finance",
    bio: "Leads brand identity, campaign creative and web design, and also supports the studio's finance work alongside the Finance Manager.",
    image: "/team/chinmay-lohokare.webp",
    expertise: ["Brand identity", "Campaign creative", "Finance"],
  },
  {
    slug: "gururaj-dangare",
    name: "Gururaj Dangare",
    role: "Mentor",
    bio: "Mentors the Marketix Studio team, guiding how the studio works with clients and how the team grows.",
    image: "/team/gururaj-dangare.webp",
    expertise: ["Mentorship", "Team guidance", "Client strategy"],
  },
  {
    slug: "prakash-sharma",
    name: "Prakash Sharma",
    role: "Digital Marketing Head",
    // TODO: photo not found on the live site under the expected filename - send it over.
    bio: "Heads digital marketing across client accounts, from planning paid ads and social to checking that each campaign brings in enquiries.",
    expertise: ["Digital marketing strategy", "Paid ads", "Social media"],
  },
];

export const teamBySlug = Object.fromEntries(team.map((m) => [m.slug, m]));
