"use client";

import { useEffect } from "react";

/**
 * Drives the cursor-following border glow on every .mx-card (styles in globals.css).
 * One pointer listener for the whole page: it finds the card under the pointer, writes
 * the pointer position into --mx-x / --mx-y, and marks it with data-spot. Mouse and pen
 * only; touch screens have no hover, so they never see it. Cards marked data-no-spot
 * (the nav mega menu panels) never get it.
 */
export function CardSpotlight() {
  useEffect(() => {
    if (!window.matchMedia("(hover: hover)").matches) return;
    let active: HTMLElement | null = null;
    let frame = 0;
    let lastX = 0;
    let lastY = 0;

    const clear = () => {
      if (active) active.removeAttribute("data-spot");
      active = null;
    };

    const paint = () => {
      frame = 0;
      const el = document.elementFromPoint(lastX, lastY);
      const card = el instanceof Element ? (el.closest(".mx-card:not([data-no-spot])") as HTMLElement | null) : null;
      if (card !== active) {
        clear();
        active = card;
        if (active) active.setAttribute("data-spot", "");
      }
      if (active) {
        const r = active.getBoundingClientRect();
        active.style.setProperty("--mx-x", `${lastX - r.left}px`);
        active.style.setProperty("--mx-y", `${lastY - r.top}px`);
      }
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      lastX = e.clientX;
      lastY = e.clientY;
      if (!frame) frame = requestAnimationFrame(paint);
    };
    const onLeave = () => clear();

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    window.addEventListener("scroll", clear, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("scroll", clear);
      clear();
    };
  }, []);

  return null;
}
