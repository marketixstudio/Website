"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MapPin, MessageCircle, Phone, Search, ClipboardList, Users } from "lucide-react";

/**
 * Home hero centrepiece: where a customer comes from and where they end up.
 * Three demand sources converge on one enquiry. Hand-built (no drawn UI chrome);
 * the connectors ink in once on load, which is the page's single orchestrated entrance.
 */
const sources = [
  {
    icon: Search,
    channel: "Search",
    via: "Google Ads and SEO",
    example: "2 bhk flats in baner",
  },
  {
    icon: Users,
    channel: "Social",
    via: "Meta and Instagram ads",
    example: "A reel, then a lead form",
  },
  {
    icon: MapPin,
    channel: "Maps",
    via: "Google Business Profile",
    example: "car accessories near me",
  },
];

const EASE = [0.16, 1, 0.3, 1] as const;

export function DemandMap() {
  const reduce = useReducedMotion();

  const reveal = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: EASE },
        };

  return (
    <figure className="mx-card relative p-5 sm:p-7" aria-label="How demand from search, social and maps becomes an enquiry">
      <div className="grid grid-cols-[minmax(0,1fr)_2.5rem_minmax(0,0.8fr)] items-center gap-y-3 sm:grid-cols-[minmax(0,1fr)_3.5rem_minmax(0,0.8fr)]">
        {/* Sources */}
        <ul className="col-start-1 row-span-3 row-start-1 grid min-w-0 grid-cols-[minmax(0,1fr)] gap-3">
          {sources.map((s, i) => (
            <motion.li
              key={s.channel}
              {...reveal(0.1 + i * 0.12)}
              className="min-w-0 rounded-2xl border border-line bg-bg/60 p-3 sm:p-4"
            >
              <p className="flex items-center gap-2 text-sm font-semibold text-ink">
                <s.icon className="h-4 w-4 shrink-0 text-accent" strokeWidth={2} aria-hidden="true" />
                {s.channel}
              </p>
              <p className="mt-1 text-xs leading-snug text-muted">{s.via}</p>
              <p className="mt-2.5 break-words rounded-lg border border-line px-2.5 py-1.5 text-xs leading-snug text-ink-2">
                {s.example}
              </p>
            </motion.li>
          ))}
        </ul>

        {/* Connectors: three curves meeting at the enquiry node */}
        <svg
          viewBox="0 0 100 300"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="col-start-2 row-span-3 row-start-1 h-full w-full overflow-visible"
        >
          {[50, 150, 250].map((y, i) => (
            <motion.path
              key={y}
              d={`M0 ${y} C 55 ${y}, 45 150, 100 150`}
              fill="none"
              stroke="rgb(var(--accent))"
              strokeOpacity={0.75}
              strokeWidth={1.5}
              vectorEffect="non-scaling-stroke"
              initial={reduce ? false : { pathLength: 0 }}
              animate={reduce ? undefined : { pathLength: 1 }}
              transition={{ duration: 0.9, delay: 0.45 + i * 0.12, ease: EASE }}
            />
          ))}
        </svg>

        {/* Enquiry node */}
        <motion.div {...reveal(0.95)} className="col-start-3 row-span-3 row-start-1 min-w-0">
          <div className="rounded-2xl border border-accent/70 bg-bg/70 p-3 text-center sm:p-4 shadow-[0_0_0_4px_rgb(var(--accent)/0.08)]">
            <p className="font-display text-lg font-bold text-ink">Enquiry</p>
            <ul className="mt-3 space-y-1.5 text-left text-xs text-ink-2">
              <li className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 shrink-0 text-accent" strokeWidth={2} aria-hidden="true" />
                Call
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="h-3.5 w-3.5 shrink-0 text-accent" strokeWidth={2} aria-hidden="true" />
                WhatsApp
              </li>
              <li className="flex items-center gap-2">
                <ClipboardList className="h-3.5 w-3.5 shrink-0 text-accent" strokeWidth={2} aria-hidden="true" />
                Form
              </li>
            </ul>
          </div>
        </motion.div>
      </div>

      <motion.figcaption {...reveal(1.1)} className="mt-5 border-t border-line pt-4 text-sm leading-relaxed text-muted">
        We run all three and track each enquiry back to the channel, campaign and search that
        produced it.
      </motion.figcaption>
    </figure>
  );
}
