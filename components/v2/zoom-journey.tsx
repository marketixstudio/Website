"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { RotateCcw } from "lucide-react";
import { Globe } from "@/components/v2/globe";
import { cityCoords, PUNE } from "@/lib/geo";
import { MH_PATH, MH_VIEWBOX, mhProject } from "@/lib/maharashtra";
import { punePlaces } from "@/lib/pune-places";

/**
 * Location zoom: the spinning Earth turns to face India, zooms into a Maharashtra
 * outline (Natural Earth, public domain) with Pune marked, then, for Pune pages,
 * into a real street map of Pune (MapLibre + OpenFreeMap, loaded on demand) with the
 * neighbourhoods marked. Plays once
 * when scrolled into view; the step chips jump between stages; Replay restarts.
 * Reduced motion: no auto-play, the final stage is shown and the chips still work.
 */

type Stage = 0 | 1 | 2;

// The real street map (MapLibre, ~800 KB) loads only when the Pune step is first reached.
const PuneStreetMap = dynamic(() => import("@/components/v2/pune-street-map"), { ssr: false });
const STEP_MS = 2600;

// Square viewBox around the Maharashtra outline, with breathing room.
const PAD = 70;
const SIDE = MH_VIEWBOX.width + PAD * 2;
const Y_OFF = (MH_VIEWBOX.width - MH_VIEWBOX.height) / 2;
const mh = (lat: number, lng: number): [number, number] => {
  const [x, y] = mhProject(lat, lng);
  return [x + PAD, y + Y_OFF + PAD];
};

export function ZoomJourney({
  city = "pune",
  area,
  nearby,
}: {
  /** "pune" (Pune city and area pages) or "mumbai" (also in Maharashtra). */
  city?: "pune" | "mumbai";
  /** A Pune neighbourhood to centre the last step on, e.g. "Baner". */
  area?: string;
  /** Neighbourhoods to name in the last step. */
  nearby: string[];
}) {
  const hasPune = city === "pune";
  const lastStage: Stage = hasPune ? 2 : 1;
  const [stage, setStage] = useState<Stage>(0);
  const [auto, setAuto] = useState(false);
  const [run, setRun] = useState(0);
  const boxRef = useRef<HTMLDivElement>(null);
  const reduceRef = useRef(false);
  /** Once the visitor picks a step, auto-play never takes over again. */
  const userRef = useRef(false);
  const [reachedPune, setReachedPune] = useState(false);
  useEffect(() => {
    if (stage === 2) setReachedPune(true);
  }, [stage]);

  // Start once, when the figure is on screen.
  useEffect(() => {
    reduceRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceRef.current) {
      setStage(lastStage);
      return;
    }
    const el = boxRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          if (!userRef.current) setAuto(true);
          io.disconnect();
        }
      },
      { threshold: 0.45 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [lastStage]);

  // Auto-advance through the stages.
  useEffect(() => {
    if (!auto) return;
    setStage(0);
    const timers = [window.setTimeout(() => setStage(1), STEP_MS)];
    if (lastStage === 2) timers.push(window.setTimeout(() => setStage(2), STEP_MS * 2));
    timers.push(window.setTimeout(() => setAuto(false), STEP_MS * (lastStage + 1)));
    return () => timers.forEach(clearTimeout);
  }, [auto, run, lastStage]);

  const jump = (s: Stage) => {
    userRef.current = true;
    setAuto(false);
    setStage(s);
  };
  const replay = () => {
    if (reduceRef.current) return setStage(0);
    setRun((r) => r + 1);
    setAuto(true);
  };

  // Maharashtra markers.
  const pune = mh(PUNE[0], PUNE[1]);
  const mumbai = mh(cityCoords.mumbai[0], cityCoords.mumbai[1]);
  const origin = city === "mumbai" ? mumbai : pune;
  const originPct = `${(origin[0] / SIDE) * 100}% ${(origin[1] / SIDE) * 100}%`;

  const steps = hasPune ? ["Earth", "Maharashtra", area ?? "Pune"] : ["Earth", "Maharashtra"];
  const label = hasPune
    ? `Zoom from the Earth to Maharashtra to ${area ? `${area}, Pune` : "Pune"}, showing ${nearby.join(", ")}`
    : "Zoom from the Earth to Maharashtra, showing Mumbai and our team in Pune";

  const t = (on: boolean, off: string) =>
    ({
      opacity: on ? 1 : 0,
      transform: on ? "scale(1)" : off,
      transition: "opacity 900ms cubic-bezier(0.16,1,0.3,1), transform 1100ms cubic-bezier(0.16,1,0.3,1)",
      pointerEvents: on ? "auto" : "none",
    }) as React.CSSProperties;

  return (
    <figure className="mx-card flex flex-col items-center p-5 sm:p-8">
      <div ref={boxRef} role="img" aria-label={label} className="relative aspect-square w-full max-w-[560px]">
        {/* 0 · Earth */}
        <div className="absolute inset-0 flex items-center justify-center" style={{ ...t(stage === 0, "scale(2.6)"), transformOrigin: "50% 50%" }}>
          <Globe focus={cityCoords[city]} spin={false} startOffset={2.4} label="" className="max-w-none" key={run} />
        </div>

        {/* 1 · Maharashtra */}
        <svg
          viewBox={`0 0 ${SIDE} ${SIDE}`}
          className="absolute inset-0 h-full w-full"
          style={{ ...t(stage === 1, stage === 0 ? "scale(0.45)" : "scale(5)"), transformOrigin: originPct }}
          aria-hidden="true"
        >
          <defs>
            <pattern id="mx-mh-dots" width="16" height="16" patternUnits="userSpaceOnUse">
              <circle cx="8" cy="8" r="2.4" fill="rgb(var(--ink) / 0.28)" />
            </pattern>
            <clipPath id="mx-mh-clip">
              <path d={MH_PATH} transform={`translate(${PAD} ${Y_OFF + PAD})`} />
            </clipPath>
          </defs>
          <g transform={`translate(${PAD} ${Y_OFF + PAD})`}>
            <path d={MH_PATH} fill="rgb(var(--accent) / 0.07)" stroke="rgb(var(--accent))" strokeWidth="2.5" strokeLinejoin="round" />
          </g>
          <rect width={SIDE} height={SIDE} fill="url(#mx-mh-dots)" clipPath="url(#mx-mh-clip)" />
          {city === "mumbai" && (
            <path
              d={`M${pune[0]} ${pune[1]} Q${(pune[0] + mumbai[0]) / 2} ${Math.min(pune[1], mumbai[1]) - 90} ${mumbai[0]} ${mumbai[1]}`}
              fill="none"
              stroke="rgb(var(--accent))"
              strokeWidth="3"
              strokeDasharray="8 8"
            />
          )}
          <Marker x={mumbai[0]} y={mumbai[1]} label="Mumbai" strong={city === "mumbai"} side="top" />
          <Marker x={pune[0]} y={pune[1]} label="Pune" strong side="right" />
          <text x={SIDE / 2} y={SIDE - 30} textAnchor="middle" fontSize="30" fontWeight="600" fill="rgb(var(--muted))">
            Maharashtra
          </text>
        </svg>

        {/* 2 · Pune */}
        {hasPune && (
          <div className="absolute inset-0" style={{ ...t(stage === 2, "scale(0.55)"), transformOrigin: "50% 50%" }}>
            {reachedPune ? (
              <PuneStreetMap area={area} nearby={nearby} fallback={<PuneMap area={area} nearby={nearby} />} />
            ) : (
              <PuneMap area={area} nearby={nearby} />
            )}
          </div>
        )}
      </div>

      <figcaption className="mt-5 flex w-full flex-wrap items-center justify-center gap-2 border-t border-line pt-5">
        {steps.map((s, i) => (
          <button
            key={s}
            type="button"
            onClick={() => jump(i as Stage)}
            aria-pressed={stage === i}
            className={`rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
              stage === i ? "border-accent bg-accent/15 text-ink" : "border-line text-ink-2 hover:border-accent/60 hover:text-ink"
            }`}
          >
            {s}
          </button>
        ))}
        <button
          type="button"
          onClick={replay}
          aria-label="Replay the zoom"
          className="ml-1 inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink-2 transition-colors hover:border-accent/60 hover:text-ink"
        >
          <RotateCcw className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
        </button>
      </figcaption>
      {hasPune && <p className="mt-3 text-center text-xs text-muted">Neighbourhood markers show approximate centres.</p>}
    </figure>
  );
}

function Marker({ x, y, label, strong, side }: { x: number; y: number; label: string; strong?: boolean; side: "left" | "right" | "top" }) {
  return (
    <g>
      {strong && (
        <circle cx={x} cy={y} r="14" fill="none" stroke="rgb(var(--accent))" strokeWidth="3" className="motion-safe:animate-ping" style={{ transformOrigin: `${x}px ${y}px`, transformBox: "view-box" }} />
      )}
      <circle cx={x} cy={y} r={strong ? 13 : 9} fill={strong ? "rgb(var(--accent))" : "rgb(var(--ink-2))"} stroke="rgb(var(--card))" strokeWidth="4" />
      <text
        x={side === "right" ? x + 24 : side === "left" ? x - 24 : x}
        y={side === "top" ? y - 28 : y + 10}
        textAnchor={side === "right" ? "start" : side === "left" ? "end" : "start"}
        fontSize="34"
        fontWeight="700"
        fill="rgb(var(--ink))"
      >
        {label}
      </text>
    </g>
  );
}

/** Pune step: the focus neighbourhood (or the city centre), lines to the named areas, faint dots for the rest. */
function PuneMap({ area, nearby }: { area?: string; nearby: string[] }) {
  const focus = (area && punePlaces[area]) || PUNE;
  const named = nearby.filter((n) => punePlaces[n]);

  const frame = useMemo(() => {
    const pts = [focus, ...named.map((n) => punePlaces[n])];
    const lats = pts.map((p) => p[0]);
    const lngs = pts.map((p) => p[1]);
    const k = Math.cos((18.55 * Math.PI) / 180);
    const cx = (Math.min(...lngs) + Math.max(...lngs)) / 2;
    const cy = (Math.min(...lats) + Math.max(...lats)) / 2;
    const span = Math.max((Math.max(...lngs) - Math.min(...lngs)) * k, Math.max(...lats) - Math.min(...lats), 0.03);
    const s = 620 / span;
    return (lat: number, lng: number): [number, number] => [500 + (lng - cx) * k * s, 500 - (lat - cy) * s];
  }, [focus, named]);

  const [fx, fy] = frame(focus[0], focus[1]);
  const focusName = area ?? "Pune";

  return (
    <svg viewBox="0 0 1000 1000" className="h-full w-full">
      <circle cx={fx} cy={fy} r="150" fill="none" stroke="rgb(var(--line))" strokeWidth="2" strokeDasharray="4 10" />
      <circle cx={fx} cy={fy} r="300" fill="none" stroke="rgb(var(--line))" strokeWidth="2" strokeDasharray="4 10" />
      {Object.entries(punePlaces).map(([name, [lat, lng]]) => {
        const [x, y] = frame(lat, lng);
        if (x < 20 || x > 980 || y < 20 || y > 980 || name === focusName || named.includes(name)) return null;
        return <circle key={name} cx={x} cy={y} r="5" fill="rgb(var(--ink) / 0.22)" />;
      })}
      {named.map((n) => {
        const [x, y] = frame(punePlaces[n][0], punePlaces[n][1]);
        return <line key={`l-${n}`} x1={fx} y1={fy} x2={x} y2={y} stroke="rgb(var(--accent))" strokeOpacity="0.5" strokeWidth="2.5" />;
      })}
      {named.map((n) => {
        const [x, y] = frame(punePlaces[n][0], punePlaces[n][1]);
        const right = x >= fx;
        return (
          <g key={n}>
            <circle cx={x} cy={y} r="11" fill="rgb(var(--card))" stroke="rgb(var(--accent))" strokeWidth="4" />
            <text x={right ? x + 22 : x - 22} y={y + 10} textAnchor={right ? "start" : "end"} fontSize="30" fontWeight="600" fill="rgb(var(--ink-2))">
              {n}
            </text>
          </g>
        );
      })}
      <circle cx={fx} cy={fy} r="64" fill="rgb(var(--accent) / 0.12)" stroke="rgb(var(--accent) / 0.35)" strokeWidth="2" />
      <circle cx={fx} cy={fy} r="46" fill="rgb(var(--card))" stroke="rgb(var(--accent))" strokeWidth="4" />
      <text x={fx} y={fy + 11} textAnchor="middle" fontSize={focusName.length > 10 ? 22 : 30} fontWeight="700" fill="rgb(var(--ink))">
        {focusName}
      </text>
    </svg>
  );
}
