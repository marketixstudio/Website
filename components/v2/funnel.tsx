"use client";

import { motion, useReducedMotion } from "framer-motion";

type Step = { title: string; body: string };

/**
 * Industry centrepiece: the sector's own workflow drawn as a narrowing funnel,
 * widest at the top. Layers settle in one after another (the page's single
 * orchestrated entrance); reduced motion shows it static.
 */
export function Funnel({ steps, outcome }: { steps: Step[]; outcome: string }) {
  const reduce = useReducedMotion();
  const widths = ["100%", "90%", "80%", "70%", "60%"];

  return (
    <figure aria-label="How we work, step by step" className="flex flex-col items-center gap-2">
      <ol className="flex w-full flex-col items-center gap-2">
        {steps.map((step, i) => (
          <motion.li
            key={step.title}
            initial={reduce ? false : { opacity: 0, scaleX: 0.92 }}
            whileInView={reduce ? undefined : { opacity: 1, scaleX: 1 }}
            viewport={{ once: true, margin: "0px 0px -12% 0px" }}
            transition={{ duration: 0.55, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            style={{ width: `min(100%, ${widths[i] ?? "60%"})` }}
            className="mx-card flex min-w-0 gap-4 p-5 transition-colors hover:border-accent/60 sm:min-w-[15rem] sm:p-6"
          >
            <span
              aria-hidden="true"
              className="w-12 shrink-0 font-display text-[2.25rem] font-bold leading-none text-transparent [-webkit-text-stroke:1.5px_rgb(var(--accent))]"
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="min-w-0">
              <span className="block font-display text-lg font-bold text-ink">{step.title}</span>
              <span className="mt-1 block text-sm leading-relaxed text-muted">{step.body}</span>
            </span>
          </motion.li>
        ))}
      </ol>
      <motion.figcaption
        initial={reduce ? false : { opacity: 0 }}
        whileInView={reduce ? undefined : { opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: steps.length * 0.12 + 0.1 }}
        className="mt-2 rounded-full border border-accent/70 px-5 py-2.5 text-sm font-semibold text-ink shadow-[0_0_0_4px_rgb(var(--accent)/0.08)]"
      >
        {outcome}
      </motion.figcaption>
    </figure>
  );
}
