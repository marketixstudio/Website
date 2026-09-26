"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Indian city centrepiece: the areas we target, arranged around the city.
 * Schematic, not geographic (it says so), so no position is ever wrong.
 * Spokes ink in once: the page's single orchestrated entrance.
 */
export function AreaMap({ city, areas }: { city: string; areas: string[] }) {
  const reduce = useReducedMotion();
  const W = 620;
  const H = 400;
  const cx = W / 2;
  const cy = H / 2;
  const r = 150;

  const nodes = areas.map((name, i) => {
    const a = (i / areas.length) * Math.PI * 2 - Math.PI / 2;
    const x = cx + Math.cos(a) * r * 1.2;
    const y = cy + Math.sin(a) * r;
    const anchor: "start" | "end" | "middle" = Math.abs(x - cx) < 20 ? "middle" : x > cx ? "start" : "end";
    const dx = anchor === "start" ? 14 : anchor === "end" ? -14 : 0;
    const dy = anchor === "middle" ? (y < cy ? -14 : 24) : 5;
    return { name, x, y, anchor, dx, dy };
  });

  return (
    <figure className="mx-card p-4 sm:p-8">
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`Areas we target around ${city}: ${areas.join(", ")}`} className="h-auto w-full">
        <circle cx={cx} cy={cy} r={r * 0.55} fill="none" stroke="rgb(var(--line))" strokeDasharray="3 6" />
        <circle cx={cx} cy={cy} r={r * 1.05} fill="none" stroke="rgb(var(--line))" strokeDasharray="3 6" />
        {nodes.map((n, i) => (
          <motion.line
            key={`l-${n.name}`}
            x1={cx}
            y1={cy}
            x2={n.x}
            y2={n.y}
            stroke="rgb(var(--accent))"
            strokeOpacity={0.55}
            strokeWidth={1.25}
            initial={reduce ? false : { pathLength: 0 }}
            whileInView={reduce ? undefined : { pathLength: 1 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 0.7, delay: 0.1 + i * 0.07, ease: EASE }}
          />
        ))}
        {nodes.map((n, i) => (
          <motion.g
            key={`n-${n.name}`}
            initial={reduce ? false : { opacity: 0 }}
            whileInView={reduce ? undefined : { opacity: 1 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 0.4, delay: 0.5 + i * 0.07 }}
          >
            <circle cx={n.x} cy={n.y} r={6} fill="rgb(var(--bg))" stroke="rgb(var(--accent))" strokeWidth={2} />
            <text
              x={n.x + n.dx}
              y={n.y + n.dy}
              textAnchor={n.anchor}
              fill="rgb(var(--ink-2))"
              style={{ fontSize: 15, fontWeight: 600 }}
            >
              {n.name}
            </text>
          </motion.g>
        ))}
        <circle cx={cx} cy={cy} r={44} fill="rgb(var(--bg))" stroke="rgb(var(--accent))" strokeWidth={2} />
        <circle cx={cx} cy={cy} r={52} fill="none" stroke="rgb(var(--accent))" strokeOpacity={0.18} strokeWidth={6} />
        <text x={cx} y={cy + 6} textAnchor="middle" fill="rgb(var(--ink))" style={{ fontSize: 17, fontWeight: 800 }}>
          {city}
        </text>
      </svg>
      <figcaption className="mt-3 text-center text-xs text-muted">
        Schematic, not to scale. Each area can get its own targeting and landing page.
      </figcaption>
    </figure>
  );
}

type Span = [number, number];

/** Split a window in IST hours (may run past 24) into same-day segments. */
function wrap([a, b]: Span): Span[] {
  const s = ((a % 24) + 24) % 24;
  const e = s + (b - a);
  return e <= 24 ? [[s, e]] : [[s, 24], [0, e - 24]];
}

function overlap(x: Span[], y: Span[]) {
  let total = 0;
  for (const [a, b] of x) for (const [c, d] of y) total += Math.max(0, Math.min(b, d) - Math.max(a, c));
  return total;
}

const fmt = (h: number) => {
  const hh = Math.floor(h) % 24;
  const mm = Math.round((h - Math.floor(h)) * 60);
  return `${String(hh).padStart(2, "0")}:${String(mm).padStart(2, "0")}`;
};

/**
 * International centrepiece: our office hours and theirs on one 24-hour IST axis,
 * computed from the real offset, with the shared window called out.
 */
export function HoursOverlap({
  place,
  zone,
  offset,
  note,
}: {
  /** e.g. "Dubai" */
  place: string;
  /** e.g. "GST" */
  zone: string;
  /** Local time minus IST, in hours (Dubai = -1.5). Standard time. */
  offset: number;
  note?: string;
}) {
  const reduce = useReducedMotion();
  const ours: Span[] = [[10, 19]];
  const theirs = wrap([9 - offset, 18 - offset]);
  const shared = overlap(ours, theirs);
  const pct = (h: number) => `${(h / 24) * 100}%`;

  const Row = ({ label, spans, tone }: { label: string; spans: Span[]; tone: "accent" | "ink" }) => (
    <div>
      <p className="mb-2 text-sm font-semibold text-ink-2">{label}</p>
      <div className="relative h-9 overflow-hidden rounded-full border border-line bg-bg/60">
        {spans.map(([a, b], i) => (
          <motion.span
            key={i}
            className={`absolute inset-y-1 rounded-full ${tone === "accent" ? "bg-accent/80" : "bg-ink-2/70"}`}
            style={{ left: pct(a), width: pct(b - a) }}
            initial={reduce ? false : { scaleX: 0, originX: 0 }}
            whileInView={reduce ? undefined : { scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: tone === "accent" ? 0.1 : 0.35, ease: EASE }}
          />
        ))}
      </div>
    </div>
  );

  return (
    <figure className="mx-card p-6 sm:p-8">
      <div className="space-y-5">
        <Row label="Marketix Studio, Pune (IST), 10:00 to 19:00" spans={ours} tone="accent" />
        <Row
          label={`${place} (${zone}), 09:00 to 18:00 local, shown in IST`}
          spans={theirs}
          tone="ink"
        />
      </div>
      <div aria-hidden="true" className="mt-3 flex justify-between text-xs text-muted">
        {[0, 6, 12, 18, 24].map((h) => (
          <span key={h}>{fmt(h === 24 ? 0 : h)}</span>
        ))}
      </div>
      <figcaption className="mt-6 border-t border-line pt-5">
        <p className="font-display text-2xl font-bold text-ink">
          {shared > 0 ? `${shared % 1 ? shared.toFixed(1) : shared} hours of shared office time` : "No shared office hours"}
        </p>
        <p className="mt-1.5 text-sm leading-relaxed text-muted">
          {note ??
            (shared > 0
              ? "Calls fit inside both working days."
              : "Calls are scheduled at the edge of both days, and written updates cover the rest.")}{" "}
          Standard time shown; daylight saving shifts it by an hour.
        </p>
      </figcaption>
    </figure>
  );
}

/**
 * Locations index centrepiece: every market's working day on one IST axis, so
 * the shared hours with our Pune office are visible at a glance.
 */
export function MarketBoard({
  markets,
}: {
  markets: { place: string; zone: string; offset: number; href: string }[];
}) {
  const reduce = useReducedMotion();
  const ours: Span[] = [[10, 19]];
  const pct = (h: number) => `${(h / 24) * 100}%`;

  return (
    <figure className="mx-card p-5 sm:p-8">
      {/* Our office window, drawn behind every row. */}
      <div className="relative">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 rounded-xl bg-accent/[0.07] ring-1 ring-inset ring-accent/25"
          style={{ left: `calc(7.5rem + (100% - 7.5rem) * ${10 / 24})`, width: `calc((100% - 7.5rem) * ${9 / 24})` }}
        />
        <ul className="relative space-y-3">
          {markets.map((m, i) => {
            const spans = wrap([9 - m.offset, 18 - m.offset]);
            const shared = overlap(ours, spans);
            return (
              <li key={m.place} className="grid grid-cols-[7.5rem_minmax(0,1fr)] items-center gap-0">
                <Link href={m.href} className="truncate pr-3 text-sm font-semibold text-ink transition-colors hover:text-accent">
                  {m.place}
                  <span className="block text-xs font-normal text-muted">
                    {shared > 0 ? `${shared % 1 ? shared.toFixed(1) : shared}h shared` : "Edge of day"}
                  </span>
                </Link>
                <div className="relative h-7 rounded-full border border-line bg-bg/60">
                  {spans.map(([a, b], j) => (
                    <motion.span
                      key={j}
                      className="absolute inset-y-1 rounded-full bg-ink-2/70"
                      style={{ left: pct(a), width: pct(b - a) }}
                      initial={reduce ? false : { scaleX: 0, originX: 0 }}
                      whileInView={reduce ? undefined : { scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: 0.1 + i * 0.08, ease: EASE }}
                    />
                  ))}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div aria-hidden="true" className="mt-3 flex justify-between pl-[7.5rem] text-xs text-muted">
        {[0, 6, 12, 18, 24].map((h) => (
          <span key={h} className={h === 6 || h === 18 ? "hidden sm:inline" : undefined}>
            {fmt(h === 24 ? 0 : h)}
          </span>
        ))}
      </div>
      <figcaption className="mt-5 border-t border-line pt-4 text-sm leading-relaxed text-muted">
        Grey bars: 09:00 to 18:00 local time in each market, shown in IST. Violet band: our Pune office hours,
        10:00 to 19:00 IST. Standard time; daylight saving shifts some markets by an hour.
      </figcaption>
    </figure>
  );
}
