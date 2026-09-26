"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, RotateCcw } from "lucide-react";

type Stage = {
  title: string;
  happens: string;
  manage: string[];
  link?: { label: string; href: string };
};

/** Example searches for one Pune real estate project, from browsing to ready to visit. */
const queries = [
  { text: "2 bhk flats hinjewadi", intent: "Browsing", strength: "opacity-45" },
  { text: "2 bhk hinjewadi under 80 lakh", intent: "Comparing", strength: "opacity-75" },
  { text: "book site visit hinjewadi 2 bhk", intent: "Ready to act", strength: "opacity-100" },
];

const stages: Stage[] = [
  {
    title: "Search",
    happens: "Someone types what they want into Google.",
    manage: ["Keyword research", "Match types", "Negative keywords"],
  },
  {
    title: "Ad",
    happens: "Your ad answers that exact search.",
    manage: ["Ad copy for each group of searches", "Audience targeting", "Daily bid management"],
  },
  {
    title: "Landing page",
    happens: "The click lands on a page built for that one search.",
    manage: ["Landing page optimisation", "One clear next step"],
    link: { label: "Landing pages", href: "/services/landing-pages-funnels" },
  },
  {
    title: "Enquiry",
    happens: "They call, WhatsApp or fill in the form.",
    manage: ["Call and form tracking", "Remarketing to visitors who didn't enquire"],
  },
  {
    title: "Report",
    happens: "Every rupee traced to the enquiries it produced.",
    manage: ["Cost per lead", "Conversion rate", "Return on ad spend"],
  },
];

const loops = [
  { label: "Remarketing", body: "People who visit without enquiring see your ads again." },
  { label: "Monthly report", body: "What converted shapes next month's keywords, ads and bids." },
];

/**
 * Map / Diagram centrepiece. Node-by-node ink-on is the page's single
 * orchestrated entrance (capped at five nodes); reduced motion shows it static.
 */
export function SearchJourney() {
  const reduce = useReducedMotion();

  return (
    <div>
      <div className="relative">
        {/* Connector: vertical rail on small screens, horizontal on large. */}
        <span aria-hidden="true" className="absolute bottom-8 left-[1.375rem] top-8 w-px bg-line lg:hidden" />
        <span aria-hidden="true" className="absolute left-[10%] right-[10%] top-[1.375rem] hidden h-px bg-line lg:block" />
      <ol className="relative grid gap-4 lg:grid-cols-5">

        {stages.map((stage, i) => (
          <motion.li
            key={stage.title}
            initial={reduce ? false : { opacity: 0, y: 14 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -12% 0px" }}
            transition={{ duration: 0.55, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex gap-4 lg:block"
          >
            <span className="relative z-10 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-accent bg-bg text-sm font-bold text-accent lg:mx-auto lg:flex">
              {i + 1}
            </span>
            <div className="mx-card group min-w-0 flex-1 p-6 transition-colors hover:border-accent/60 focus-within:border-accent/60 lg:mt-5">
              <h3 className="font-display text-xl font-bold text-ink">{stage.title}</h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-2">{stage.happens}</p>

              {i === 0 && (
                <ul className="mt-5 space-y-2" aria-label="Example searches, least to most ready">
                  {queries.map((q) => (
                    <li key={q.text} className="rounded-xl border border-line bg-bg/60 px-3 py-2">
                      <p className="break-words text-[0.875rem] font-medium leading-snug text-ink">
                        {q.text}
                      </p>
                      <p className="mt-0.5 flex items-center gap-1.5 text-xs text-muted">
                        <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full bg-accent ${q.strength}`} />
                        {q.intent}
                      </p>
                    </li>
                  ))}
                </ul>
              )}

              <p className="mt-5 text-xs font-semibold text-muted">We manage</p>
              <ul className="mt-2 space-y-1.5">
                {stage.manage.map((item) => (
                  <li key={item} className="flex gap-2 text-sm leading-snug text-ink-2">
                    <span aria-hidden="true" className="mt-[0.5em] h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
              {stage.link && (
                <Link href={stage.link.href} className="mx-link mt-5 text-sm">
                  {stage.link.label}
                  <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.25} aria-hidden="true" />
                </Link>
              )}
            </div>
          </motion.li>
        ))}
      </ol>
      </div>

      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {loops.map((loop) => (
          <li key={loop.label} className="flex gap-4 rounded-2xl border border-dashed border-line px-5 py-4">
            <RotateCcw className="mt-0.5 h-5 w-5 shrink-0 text-accent" strokeWidth={1.9} aria-hidden="true" />
            <p className="text-[0.9375rem] leading-relaxed text-muted">
              <span className="font-semibold text-ink">{loop.label}.</span> {loop.body}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
