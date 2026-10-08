"use client";

import { useEffect } from "react";

/**
 * Fades .mx-reveal blocks in as they scroll into view. Content stays visible in the HTML
 * (crawlers, AI search and no-JS visitors see everything): only once this runs are the
 * blocks still below the fold hidden, and they appear on arrival. Blocks already on screen
 * are marked first, so nothing flickers. Off for reduced motion.
 */
export function RevealRoot() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const blocks = Array.from(document.querySelectorAll<HTMLElement>(".mx-reveal"));
    const fold = window.innerHeight * 0.92;
    for (const el of blocks) if (el.getBoundingClientRect().top < fold) el.classList.add("is-in");
    const root = document.documentElement;
    root.classList.add("mx-reveal-on");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    for (const el of blocks) if (!el.classList.contains("is-in")) io.observe(el);
    return () => {
      io.disconnect();
      root.classList.remove("mx-reveal-on");
    };
  }, []);
  return null;
}
