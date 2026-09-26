"use client";

import ElectricLogo from "@/components/ui/bits/ElectricLogo";

/**
 * The Marketix monogram as live electricity (React Bits ElectricLogo, the user's settings).
 * Used on the About and Contact heroes, the 404 page and the footer call-to-action card.
 * ElectricLogo pauses when off-screen and respects reduced motion on its own; the
 * container must have a height.
 */
export function ElectricMonogram({ className = "", scale = 0.7 }: { className?: string; scale?: number }) {
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
        color="#ecc7ff"
        glowColor="#ad6dff"
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
