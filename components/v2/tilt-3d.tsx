"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Pointer tilt for the 3D scenes: sets --rx / --ry on its root while it is on screen, so the
 * CSS transform can lean the scene toward the pointer. Touch and reduced motion: no tilt
 * (the scene's own idle animation, or a still view, takes over). Decorative.
 */
export function Tilt3D({ className = "", children }: { className?: string; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let visible = false;
    let frame = 0;
    const io = new IntersectionObserver(([entry]) => (visible = entry.isIntersecting));
    io.observe(el);
    const onMove = (e: PointerEvent) => {
      if (!visible || e.pointerType === "touch") return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const dx = Math.max(-1, Math.min(1, (e.clientX - (r.left + r.width / 2)) / (window.innerWidth / 2)));
        const dy = Math.max(-1, Math.min(1, (e.clientY - (r.top + r.height / 2)) / (window.innerHeight / 2)));
        el.style.setProperty("--ry", `${dx * 14}deg`);
        el.style.setProperty("--rx", `${-dy * 9}deg`);
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <div ref={ref} aria-hidden="true" className={className}>
      {children}
    </div>
  );
}
