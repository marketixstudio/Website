"use client";

import { useEffect, useState } from "react";
import WebThreads from "@/components/ui/bits/WebThreads";
import { THEME_EVENT } from "@/lib/theme";

/**
 * Home hero background: the React Bits WebThreads shader in the brand colours. Thread
 * colour follows the current accent (violet by default); switches to light mode with
 * the site theme. Pauses off-screen and when the tab is hidden (built into WebThreads).
 */
const toHex = (rgb: string) => {
  const v = rgb.trim().split(/\s+/).map(Number);
  if (v.length !== 3 || v.some(Number.isNaN)) return "#C82AEF";
  return `#${v.map((n) => n.toString(16).padStart(2, "0")).join("")}`;
};

export function HeroThreads() {
  const [look, setLook] = useState({ accent: "#C82AEF", light: false });

  useEffect(() => {
    const read = () => {
      const root = document.documentElement;
      setLook({
        accent: toHex(getComputedStyle(root).getPropertyValue("--accent")),
        light: !root.classList.contains("dark"),
      });
    };
    read();
    window.addEventListener(THEME_EVENT, read);
    return () => window.removeEventListener(THEME_EVENT, read);
  }, []);

  return (
    <WebThreads
      color1={look.accent}
      color2="#E7B6F7"
      color3="#FFFFFF"
      speed={0.2}
      threadCount={6}
      frequency={5.0}
      spread={0.18}
      taper={1.0}
      position={0.5}
      fanMode="center"
      glow={0.02}
      falloff={0.6}
      thickness={1.1}
      brightness={0.6}
      opacity={1.0}
      mirror
      shimmer={false}
      grain
      grainIntensity={0.05}
      mouseInteraction
      mouseStrength={0.3}
      backgroundColor={look.light ? "#FFFFFF" : "#0E0E0E"}
      lightMode={look.light}
    />
  );
}
