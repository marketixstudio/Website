"use client";

import { motion, useReducedMotion } from "framer-motion";

type Step = { title: string; body: string };

/**
 * Numbered steps on a connector rail: vertical on small screens, horizontal on
 * large. Node-by-node reveal is the page's single orchestrated entrance;
 * reduced motion shows it static.
 */
export function StepRail({ steps }: { steps: Step[] }) {
  const reduce = useReducedMotion();
  const cols = steps.length >= 5 ? "lg:grid-cols-5" : steps.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4";

  return (
    <div className="relative">
      <span aria-hidden="true" className="absolute bottom-8 left-[1.375rem] top-8 w-px bg-line lg:hidden" />
      <span aria-hidden="true" className="absolute left-[12%] right-[12%] top-[1.375rem] hidden h-px bg-line lg:block" />
      {/* The rail inks in violet as the steps arrive. */}
      <motion.span
        aria-hidden="true"
        className="absolute left-[12%] right-[12%] top-[1.375rem] hidden h-px origin-left bg-accent/70 lg:block"
        initial={reduce ? false : { scaleX: 0 }}
        whileInView={reduce ? undefined : { scaleX: 1 }}
        viewport={{ once: true, margin: "0px 0px -15% 0px" }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      />
      <ol className={`relative grid grid-cols-[minmax(0,1fr)] gap-4 ${cols}`}>
        {steps.map((step, i) => (
          <motion.li
            key={step.title}
            initial={reduce ? false : { opacity: 0, y: 14 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -12% 0px" }}
            transition={{ duration: 0.55, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex gap-4 lg:block"
          >
            <span className="relative z-10 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-accent bg-bg text-sm font-bold text-accent lg:mx-auto lg:flex">
              {i + 1}
            </span>
            <div className="mx-card min-w-0 flex-1 p-6 transition-colors hover:border-accent/60 lg:mt-5">
              <h3 className="font-display text-xl font-bold text-ink">{step.title}</h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{step.body}</p>
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
