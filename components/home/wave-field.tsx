"use client";

import { useEffect, useRef } from "react";
import { THEME_EVENT } from "@/lib/theme";

/**
 * The hero's visual: a field of fine violet wave lines drifting slowly, the
 * live site's signature mood, drawn in code (the live site used the WordPress
 * theme's demo video, which we can't reuse). Canvas 2D, ~30fps, pauses when
 * off-screen or the tab is hidden; reduced motion draws one still frame.
 * Line colour follows the current accent and theme (lib/theme.ts).
 */
export function WaveField({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const LINES = 72;
    let w = 0;
    let h = 0;
    let raf = 0;
    let last = 0;
    let t = 0;
    let visible = true;
    let rgb = "200, 42, 239";
    let boost = 1;

    const readColour = () => {
      const root = document.documentElement;
      const v = getComputedStyle(root).getPropertyValue("--accent").trim().split(/\s+/);
      if (v.length === 3) rgb = v.join(", ");
      // Thin lines read lighter on a white card, so they get a little more ink.
      boost = root.classList.contains("dark") ? 1 : 1.35;
    };
    readColour();

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (time: number) => {
      ctx.clearRect(0, 0, w, h);
      ctx.lineWidth = 1;
      for (let i = 0; i < LINES; i++) {
        const p = i / (LINES - 1);
        // Lines fan out from a band that sits low and to the right, away from the headline.
        const baseY = h * (0.42 + p * 0.62);
        const amp = h * (0.05 + 0.1 * Math.sin(p * Math.PI));
        const freq = 1.6 + p * 0.9;
        const speed = 0.00018 + p * 0.00008;
        const alpha = 0.04 + 0.24 * Math.sin(p * Math.PI) ** 2;
        ctx.strokeStyle = `rgba(${rgb}, ${Math.min(1, alpha * boost).toFixed(3)})`;
        ctx.beginPath();
        for (let x = 0; x <= w + 8; x += 8) {
          const u = x / w;
          // Two sine layers give the woven, fabric-like look of the live hero.
          const y =
            baseY -
            u * h * 0.35 +
            Math.sin(u * Math.PI * freq + time * speed * 6 + p * 5) * amp +
            Math.sin(u * Math.PI * 4.2 - time * speed * 4 + p * 9) * amp * 0.28;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
    };

    const loop = (now: number) => {
      raf = requestAnimationFrame(loop);
      if (!visible || document.hidden || now - last < 33) return;
      t += now - last > 200 ? 33 : now - last;
      last = now;
      draw(t);
    };

    resize();
    draw(4000);
    const ro = new ResizeObserver(() => {
      resize();
      draw(t || 4000);
    });
    ro.observe(canvas);
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting), { threshold: 0 });
    io.observe(canvas);
    if (!reduce) raf = requestAnimationFrame(loop);
    const onTheme = () => {
      readColour();
      draw(t || 4000);
    };
    window.addEventListener(THEME_EVENT, onTheme);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener(THEME_EVENT, onTheme);
    };
  }, []);

  return <canvas ref={ref} aria-hidden="true" className={`pointer-events-none h-full w-full ${className}`} />;
}
