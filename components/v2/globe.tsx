"use client";

import { useEffect, useRef } from "react";
import createGlobe, { type Arc, type Marker } from "cobe";
import { THEME_EVENT } from "@/lib/theme";
import { PUNE, type LatLng } from "@/lib/geo";

/**
 * A real, slowly spinning 3D Earth (cobe, MIT, ~20 KB, WebGL) that replaces the old
 * schematic area map. It starts facing `focus`, marks Pune and the focus city, can
 * draw an arc from Pune to the focus city, and can be dragged to spin.
 * Pauses when off-screen; reduced-motion users get a still globe facing the focus.
 * Colours follow the current theme and accent (lib/theme.ts).
 */

/** cobe's rotation angles that put a lat/lng in front of the viewer. */
const facing = ([lat, lng]: LatLng) => ({ phi: Math.PI - ((lng * Math.PI) / 180 - Math.PI / 2), theta: (lat * Math.PI) / 180 });

function readColours() {
  const root = document.documentElement;
  const dark = root.classList.contains("dark");
  const acc = getComputedStyle(root).getPropertyValue("--accent").trim().split(/\s+/).map((v) => Number(v) / 255);
  const accent: [number, number, number] = acc.length === 3 && acc.every((n) => !Number.isNaN(n)) ? [acc[0], acc[1], acc[2]] : [0.78, 0.16, 0.94];
  return dark
    ? { dark: 1, baseColor: [0.16, 0.16, 0.16] as [number, number, number], glowColor: [accent[0] * 0.35, accent[1] * 0.35, accent[2] * 0.35] as [number, number, number], mapBrightness: 5, accent }
    : { dark: 0, baseColor: [1, 1, 1] as [number, number, number], glowColor: [1, 1, 1] as [number, number, number], mapBrightness: 4, accent };
}

export function Globe({
  focus = PUNE,
  arcFromPune = false,
  label,
  className = "",
  spin = true,
  startOffset = 0,
}: {
  /** false: instead of spinning, the globe turns smoothly to face `focus` and stops. */
  spin?: boolean;
  /** Start rotated this many radians away from `focus` (used by the zoom sequence). */
  startOffset?: number;
  focus?: LatLng;
  /** Draw an arc from Pune to the focus city (for cities other than Pune). */
  arcFromPune?: boolean;
  /** Accessible description of what the globe shows. */
  label: string;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const drag = useRef<{ x: number; phi: number } | null>(null);
  const spinRef = useRef(spin);
  spinRef.current = spin;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const start = facing(focus);
    let phi = start.phi + startOffset;
    let visible = true;
    let width = canvas.offsetWidth;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const markers: Marker[] = [{ location: PUNE, size: 0.08 }];
    if (arcFromPune) markers.push({ location: focus, size: 0.06 });
    const arcs: Arc[] = arcFromPune ? [{ from: PUNE, to: focus }] : [];

    const c = readColours();
    const globe = createGlobe(canvas, {
      devicePixelRatio: dpr,
      width: width * dpr,
      height: width * dpr,
      phi,
      theta: start.theta * 0.6,
      dark: c.dark,
      diffuse: 1.4,
      mapSamples: 16000,
      mapBrightness: c.mapBrightness,
      baseColor: c.baseColor,
      markerColor: c.accent,
      glowColor: c.glowColor,
      arcColor: c.accent,
      arcWidth: 0.6,
      arcHeight: 0.25,
      markerElevation: 0.02,
      markers,
      arcs,
    });

    let raf = 0;
    const loop = () => {
      raf = requestAnimationFrame(loop);
      if (!visible || document.hidden) return;
      if (!drag.current) {
        if (spinRef.current && !reduce) phi += 0.0025;
        else if (!spinRef.current) {
          // Ease toward the nearest full turn that faces the focus city.
          const target = start.phi + 2 * Math.PI * Math.round((phi - start.phi) / (2 * Math.PI));
          phi += (target - phi) * (reduce ? 1 : 0.035);
        }
      }
      globe.update({ phi, width: width * dpr, height: width * dpr });
    };
    raf = requestAnimationFrame(loop);

    const ro = new ResizeObserver(() => (width = canvas.offsetWidth));
    ro.observe(canvas);
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting));
    io.observe(canvas);

    const onDown = (e: PointerEvent) => {
      drag.current = { x: e.clientX, phi };
      canvas.setPointerCapture(e.pointerId);
      canvas.style.cursor = "grabbing";
    };
    const onMove = (e: PointerEvent) => {
      if (!drag.current) return;
      phi = drag.current.phi + (e.clientX - drag.current.x) / 180;
    };
    const onUp = () => {
      drag.current = null;
      canvas.style.cursor = "grab";
    };
    canvas.addEventListener("pointerdown", onDown);
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerup", onUp);
    canvas.addEventListener("pointercancel", onUp);

    const onTheme = () => {
      const n = readColours();
      globe.update({ dark: n.dark, baseColor: n.baseColor, glowColor: n.glowColor, mapBrightness: n.mapBrightness, markerColor: n.accent, arcColor: n.accent });
    };
    window.addEventListener(THEME_EVENT, onTheme);

    // Fade in once the first frame is drawn (no layout shift: the canvas box is fixed).
    requestAnimationFrame(() => (canvas.style.opacity = "1"));

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener(THEME_EVENT, onTheme);
      canvas.removeEventListener("pointerdown", onDown);
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerup", onUp);
      canvas.removeEventListener("pointercancel", onUp);
      globe.destroy();
    };
  }, [focus, arcFromPune]);

  return (
    <canvas
      ref={canvasRef}
      role="img"
      aria-label={label}
      className={`aspect-square w-full max-w-[560px] cursor-grab touch-pan-y opacity-0 transition-opacity duration-700 motion-reduce:transition-none ${className}`}
    />
  );
}

/** The globe in a live-site card, with the nearby areas named underneath (they are too close together to mark on a globe). */
export function AreaGlobe({
  city,
  areas,
  focus = PUNE,
  arcFromPune = false,
}: {
  city: string;
  areas: string[];
  focus?: LatLng;
  arcFromPune?: boolean;
}) {
  const label = arcFromPune ? `Globe showing ${city}, linked to our team in Pune` : `Globe showing ${city}, where our team is based`;
  return (
    <figure className="mx-card flex flex-col items-center p-5 sm:p-8">
      <Globe focus={focus} arcFromPune={arcFromPune} label={label} />
      <figcaption className="mt-4 w-full border-t border-line pt-5">
        <p className="text-center text-sm text-muted">
          {arcFromPune ? `${city} and nearby areas we target from Pune` : `Areas we target around ${city}`}
        </p>
        <ul className="mt-3 flex flex-wrap justify-center gap-2">
          {areas.map((a) => (
            <li key={a} className="rounded-full border border-line px-3 py-1 text-sm text-ink-2">
              {a}
            </li>
          ))}
        </ul>
      </figcaption>
    </figure>
  );
}
