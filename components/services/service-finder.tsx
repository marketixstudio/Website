"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * Services index centrepiece. Pick the goal and the services that serve it light
 * up; the rest dim but stay clickable, so nothing is hidden from people or crawlers.
 */
const goals = [
  {
    id: "enquiries",
    label: "More enquiries now",
    note: "Paid campaigns start bringing enquiries as soon as they go live.",
    slugs: ["performance-marketing", "google-ads-ppc", "meta-ads", "landing-pages-funnels"],
  },
  {
    id: "found",
    label: "Get found on Google",
    note: "Rank for the searches your buyers make, on Google and on Maps.",
    slugs: ["seo-services", "local-seo-gmb", "content-marketing"],
  },
  {
    id: "convert",
    label: "Convert more visitors",
    note: "Turn the traffic you already have into more calls and forms.",
    slugs: ["conversion-rate-optimisation", "web-design-development", "landing-pages-funnels"],
  },
  {
    id: "follow-up",
    label: "Follow up and stay visible",
    note: "Keep in touch with leads and past customers until they buy again.",
    slugs: ["email-marketing-automation", "whatsapp-marketing", "social-media-marketing"],
  },
  {
    id: "brand",
    label: "Look the part",
    note: "An identity and website that match the size of your ambition.",
    slugs: ["branding-design", "web-design-development", "social-media-marketing"],
  },
] as const;

type GoalId = (typeof goals)[number]["id"] | "all";

const slugOf = (href: string) => href.replace("/services/", "");

/** Icons arrive pre-rendered: component functions can't cross the server/client boundary. */
export type FinderCard = { label: string; href: string; body: string; icon?: ReactNode };

export function ServiceFinder({ cards }: { cards: FinderCard[] }) {
  const [goal, setGoal] = useState<GoalId>("all");
  const active = goals.find((g) => g.id === goal);
  const matches = (href: string) => !active || (active.slugs as readonly string[]).includes(slugOf(href));

  return (
    <div>
      <div role="group" aria-label="Filter services by goal" className="flex flex-wrap gap-2">
        {[{ id: "all" as const, label: "All services" }, ...goals].map((g) => {
          const on = goal === g.id;
          return (
            <button
              key={g.id}
              type="button"
              aria-pressed={on}
              onClick={() => setGoal(g.id)}
              className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                on
                  ? "border-accent bg-accent/15 text-ink"
                  : "border-line text-ink-2 hover:border-accent/60 hover:text-ink"
              }`}
            >
              {g.label}
            </button>
          );
        })}
      </div>

      <p aria-live="polite" className="mt-5 min-h-[1.5rem] text-[0.9375rem] text-muted">
        {active ? active.note : "Thirteen services, planned together and measured on enquiries."}
      </p>

      <ul className="mt-8 grid grid-cols-[minmax(0,1fr)] gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => {
          const on = matches(card.href);
          return (
            <li
              key={card.href}
              className={`mx-card group relative flex flex-col p-6 transition-[opacity,border-color] duration-300 hover:border-accent/60 focus-within:border-accent/60 ${
                on ? (active ? "border-accent/60" : "") : "opacity-40 hover:opacity-100 focus-within:opacity-100"
              }`}
            >
              {card.icon}
              <Link
                href={card.href}
                className="mt-4 font-display text-lg font-bold text-ink after:absolute after:inset-0 after:rounded-[24px] after:content-['']"
              >
                {card.label}
              </Link>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{card.body}</p>
              <ArrowRight
                className="mt-5 h-5 w-5 text-accent transition-transform duration-200 group-hover:translate-x-1"
                strokeWidth={2}
                aria-hidden="true"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
