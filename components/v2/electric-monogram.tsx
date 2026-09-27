"use client";

import { useEffect, useState } from "react";
import ElectricLogo from "@/components/ui/bits/ElectricLogo";
import { THEME_EVENT, type AccentKey } from "@/lib/theme";

/** Core (bright stroke) and glow per accent. Violet is the user's tuned original. */
const ELECTRIC: Record<AccentKey, { color: string; glowColor: string }> = {
  violet: { color: "#ecc7ff", glowColor: "#ad6dff" },
  blue: { color: "#cfdcff", glowColor: "#3d7bff" },
  teal: { color: "#c4f5f8", glowColor: "#17c3cf" },
  orange: { color: "#ffd9bd", glowColor: "#ff7a1a" },
  pink: { color: "#ffc6df", glowColor: "#ff2e8a" },
  gold: { color: "#fbeabb", glowColor: "#efbc2a" },
};

function currentAccent(): AccentKey {
  const a = document.documentElement.getAttribute("data-accent") as AccentKey | null;
  return a && a in ELECTRIC ? a : "violet";
}

/**
 * The Marketix monogram as live electricity (React Bits ElectricLogo, the user's settings).
 * Used on the About and Contact heroes, the 404 page and the footer call-to-action card.
 * ElectricLogo pauses when off-screen and respects reduced motion on its own; the
 * container must have a height.
 */
export function ElectricMonogram({ className = "", scale = 0.7 }: { className?: string; scale?: number }) {
  // Follows the accent switcher; ElectricLogo eases between colours on its own.
  const [accent, setAccent] = useState<AccentKey>("violet");
  useEffect(() => {
    const sync = () => setAccent(currentAccent());
    sync();
    window.addEventListener(THEME_EVENT, sync);
    return () => window.removeEventListener(THEME_EVENT, sync);
  }, []);

  return (
    <div
      role="img"
      aria-label="Marketix monogram"
      // The effect paints faint grain over its whole canvas, which read as a dark square on
      // cards. Screen blending drops the dark pixels (only light is added), and a radial
      // mask fades the canvas edges so no box edge can show.
      className={`dark:mix-blend-screen [mask-image:radial-gradient(closest-side,#000_72%,transparent)] ${className}`}
    >
      <ElectricLogo
        src="/brand/marketix-monogram.png"
        color={ELECTRIC[accent].color}
        glowColor={ELECTRIC[accent].glowColor}
        scale={scale}
        strands={4}
        bend={0.6}
        crackle={1.5}
        arcs={1}
        speed={2.5}
        interactive
      />
    </div>
  );
}
