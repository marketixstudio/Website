"use client";

import { useEffect, useRef, useState } from "react";

/*
 * Marketix monogram, vectorized from public/brand/marketix-monogram.png (640x594).
 * The mark is three separate strokes, so there is no single route around it: the trace
 * runs along each stroke's own outline at once (TRACE_PATHS). That keeps every corner and
 * gap exact, and the fill lands precisely on the traced line.
 * The viewBox is padded so the stroke is never clipped at the edges.
 */
const LOGO_VIEW_BOX = "-16 -16 672 626";
/** viewBox width, used to keep strokeWidth in screen pixels at any size. */
const VIEW_BOX_WIDTH = 672;

const FILL_PATHS = [
  "M9.6 2.0 L15.0 1.0 L18.0 1.5 L27.0 5.9 L250.7 145.0 L282.8 166.0 L285.0 168.3 L286.5 172.0 L286.3 177.0 L285.0 179.4 L283.0 181.2 L205.0 232.3 L201.0 234.3 L198.0 234.6 L193.0 234.3 L191.0 233.2 L113.0 182.9 L104.0 177.4 L103.0 177.6 L102.9 480.0 L102.4 483.0 L100.0 486.9 L97.0 489.4 L94.0 490.6 L90.0 490.5 L87.0 489.4 L17.4 444.0 L10.0 436.8 L6.9 432.0 L3.7 425.0 L2.0 418.3 L1.3 396.0 L1.2 15.0 L2.0 10.0 L3.3 7.0 L6.0 4.0Z",
  "M619.3 2.0 L623.0 1.2 L627.0 1.4 L632.0 3.4 L636.0 8.2 L637.4 14.0 L637.2 97.0 L636.0 103.0 L633.5 109.0 L629.3 115.0 L624.6 120.0 L577.2 152.0 L431.0 248.3 L164.0 423.3 L151.0 431.7 L149.6 432.0 L148.1 427.0 L145.6 411.0 L145.2 403.0 L144.5 400.0 L144.4 384.0 L145.2 381.0 L145.8 370.0 L150.7 348.0 L157.0 330.0 L162.9 318.0 L176.5 298.0 L192.0 281.4 L201.0 273.6 L216.2 263.0 L611.0 6.4Z",
  "M571.4 204.0 L587.0 203.4 L597.0 204.2 L605.0 205.6 L617.8 210.0 L626.0 214.9 L631.0 220.0 L634.3 225.0 L636.9 233.0 L637.1 412.0 L634.6 425.0 L630.0 435.5 L622.2 447.0 L612.0 457.0 L590.0 472.4 L450.0 565.3 L433.0 574.3 L411.0 583.0 L397.0 586.6 L377.0 590.1 L356.0 591.4 L330.0 590.4 L311.0 587.4 L297.0 584.1 L275.0 576.6 L260.9 570.0 L260.6 569.0 L265.0 565.9 L525.0 394.2 L528.0 390.7 L530.5 386.0 L532.0 378.0 L532.0 345.0 L531.0 343.4 L295.0 499.7 L226.0 546.1 L224.0 546.5 L221.0 544.6 L208.7 535.0 L198.6 525.0 L190.9 516.0 L179.0 500.3 L171.6 488.0 L162.8 471.0 L160.7 466.0 L161.0 464.9 L542.0 213.6 L555.0 207.7 L564.7 205.0Z",
] as const;

const TRACE_PATHS = FILL_PATHS;

/** Duration of the "trace closes into a full outline" step. */
const CLOSE_SECONDS = 0.6;
/** Extra time before a timeout fallback forces the next phase. */
const FALLBACK_SLACK_MS = 150;

type LoaderPhase = "loop" | "closingOutline" | "fadingFill" | "done";

type LogoTraceLoaderProps = {
  loading?: boolean;
  isComplete?: boolean;
  size?: number;
  strokeWidth?: number;
  loopDurationSeconds?: number;
  fillFadeSeconds?: number;
  className?: string;
  ariaLabel?: string;
  onDone?: () => void;
};

export function LogoTraceLoader({
  loading = true,
  isComplete = false,
  size = 48,
  strokeWidth = 2,
  loopDurationSeconds = 1.6,
  fillFadeSeconds = 0.4,
  className,
  ariaLabel = "Loading",
  onDone,
}: LogoTraceLoaderProps) {
  const [phase, setPhase] = useState<LoaderPhase>("loop");
  const doneRef = useRef(false);
  const onDoneRef = useRef(onDone);
  onDoneRef.current = onDone;

  const finished = isComplete || !loading;

  // Reduced motion: skip the trace, show the filled mark straight away.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setPhase("done");
  }, []);

  // Loading finished: close the outline.
  useEffect(() => {
    if (finished && phase === "loop") setPhase("closingOutline");
  }, [finished, phase]);

  // Timeout fallbacks, so the sequence never depends on animation events alone.
  useEffect(() => {
    if (phase === "closingOutline") {
      const t = setTimeout(() => setPhase((p) => (p === "closingOutline" ? "fadingFill" : p)), CLOSE_SECONDS * 1000 + FALLBACK_SLACK_MS);
      return () => clearTimeout(t);
    }
    if (phase === "fadingFill") {
      const t = setTimeout(() => setPhase((p) => (p === "fadingFill" ? "done" : p)), fillFadeSeconds * 1000 + FALLBACK_SLACK_MS);
      return () => clearTimeout(t);
    }
    return undefined;
  }, [phase, fillFadeSeconds]);

  // onDone fires exactly once, after the filled mark is visible.
  useEffect(() => {
    if (phase === "done" && !doneRef.current) {
      doneRef.current = true;
      onDoneRef.current?.();
    }
  }, [phase]);

  // strokeWidth is given in screen pixels; convert it to viewBox units.
  const unit = VIEW_BOX_WIDTH / size;
  const stroke = strokeWidth * unit;
  const trackStroke = Math.max(1, strokeWidth / 2) * unit;

  const showTrack = phase === "loop" || phase === "closingOutline";
  const showFill = phase === "fadingFill" || phase === "done";

  return (
    <svg
      role="status"
      aria-label={ariaLabel}
      aria-busy={phase !== "done"}
      viewBox={LOGO_VIEW_BOX}
      width={size}
      height={size}
      className={className}
      style={{ flexShrink: 0 }}
    >
      {showTrack ? (
        <g opacity="0.18" fill="none" stroke="currentColor" strokeWidth={trackStroke} strokeLinejoin="round">
          {TRACE_PATHS.map((path) => (
            <path key={path} d={path} />
          ))}
        </g>
      ) : null}

      {phase === "loop" ? (
        <g fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
          {TRACE_PATHS.map((path) => (
            <path
              key={path}
              d={path}
              pathLength={1}
              strokeDasharray="0.16 0.84"
              style={{ animation: `logo-trace-loader-loop ${loopDurationSeconds}s linear infinite` }}
            />
          ))}
        </g>
      ) : null}

      {phase === "closingOutline" ? (
        <g fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
          {TRACE_PATHS.map((path, i) => (
            <path
              key={path}
              d={path}
              pathLength={1}
              strokeDasharray="1 1"
              style={{ animation: `logo-trace-loader-close ${CLOSE_SECONDS}s ease-out forwards` }}
              onAnimationEnd={i === 0 ? () => setPhase((p) => (p === "closingOutline" ? "fadingFill" : p)) : undefined}
            />
          ))}
        </g>
      ) : null}

      {showFill ? (
        <g
          style={phase === "fadingFill" ? { animation: `logo-trace-loader-fill ${fillFadeSeconds}s ease-out forwards` } : undefined}
          onAnimationEnd={() => setPhase((p) => (p === "fadingFill" ? "done" : p))}
        >
          {FILL_PATHS.map((path) => (
            <path key={path} d={path} fill="currentColor" />
          ))}
        </g>
      ) : null}
    </svg>
  );
}

export default LogoTraceLoader;
