"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowRight, Check, ClipboardList, MapPin, MessageCircle, Phone, Search, Users, type LucideIcon } from "lucide-react";

/**
 * Home centrepiece: where a customer comes from and where they end up. Left alone, all
 * three channels run at once: each types its own example searches, a pulse travels down
 * every connector, and every contact method is lit. Hover, focus or tap one channel to
 * follow just that path: the others fade, the enquiry node shows how that channel's
 * customers usually get in touch, and the caption says how we track it. Moving away
 * (or tapping it again) brings all three back.
 * The connectors ink in once on load, which is the page's single orchestrated entrance.
 * Connectors are measured from the real card positions, so they meet the cards at any width.
 */

type Method = "Call" | "WhatsApp" | "Form";

const sources: {
  icon: LucideIcon;
  channel: string;
  via: string;
  examples: string[];
  methods: Method[];
  tracking: string;
  link: { label: string; href: string };
}[] = [
  {
    icon: Search,
    channel: "Search",
    via: "Google Ads and SEO",
    examples: ["2 bhk flats in baner", "seat covers for creta", "digital marketing agency pune"],
    methods: ["Call", "Form"],
    tracking: "Every search enquiry is tied to the keyword and ad that brought it in, so budget moves to the searches that turn into customers.",
    link: { label: "How we run Google Ads", href: "/services/google-ads-ppc" },
  },
  {
    icon: Users,
    channel: "Social",
    via: "Meta and Instagram ads",
    examples: ["A reel, then a lead form", "A carousel, then a WhatsApp chat", "A story ad, then a call"],
    methods: ["WhatsApp", "Form"],
    tracking: "Lead-form and WhatsApp enquiries are matched to the ad and audience behind them, so we know which creative earned the conversation.",
    link: { label: "How we run Meta ads", href: "/services/meta-ads" },
  },
  {
    icon: MapPin,
    channel: "Maps",
    via: "Google Business Profile",
    examples: ["car accessories near me", "interior designer open now", "best cafe in kharadi"],
    methods: ["Call", "WhatsApp"],
    tracking: "Calls, direction requests and website clicks from your Google profile are tracked and compared month to month.",
    link: { label: "How we run Google Maps", href: "/services/local-seo-gmb" },
  },
];

const methods: { name: Method; icon: LucideIcon }[] = [
  { name: "Call", icon: Phone },
  { name: "WhatsApp", icon: MessageCircle },
  { name: "Form", icon: ClipboardList },
];

const EASE = [0.16, 1, 0.3, 1] as const;
const TYPE_MS = 45;
const HOLD_MS = 2200;
/** Staggered starts so the three cards never type in lockstep. */
const START_MS = [0, 900, 1800];

const ALL_CAPTION = "We run all three and track each enquiry back to the channel, campaign and search that produced it.";

/**
 * Types a channel's example searches one after another: type, hold, next. Runs only while
 * `running` (visible and not faded out); otherwise the current example shows whole.
 */
function useTypingLoop(examples: string[], running: boolean, startDelay: number) {
  const [idx, setIdx] = useState(0);
  const [shown, setShown] = useState(examples[0]);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    if (!running) {
      setShown(examples[idx]);
      setTyping(false);
      return;
    }
    let timer = 0;
    let cancelled = false;
    let current = idx;
    const typeOne = () => {
      const text = examples[current];
      let n = 0;
      setTyping(true);
      setShown("");
      const step = () => {
        if (cancelled) return;
        n++;
        setShown(text.slice(0, n));
        if (n < text.length) timer = window.setTimeout(step, TYPE_MS);
        else {
          setTyping(false);
          timer = window.setTimeout(() => {
            current = (current + 1) % examples.length;
            setIdx(current);
            typeOne();
          }, HOLD_MS);
        }
      };
      timer = window.setTimeout(step, TYPE_MS);
    };
    timer = window.setTimeout(typeOne, startDelay);
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [running]);

  return { shown, typing };
}

function SourceCard({
  source,
  index,
  lit,
  running,
  focus,
  setFocus,
  cardRef,
}: {
  source: (typeof sources)[number];
  index: number;
  lit: boolean;
  running: boolean;
  focus: number | null;
  setFocus: (i: number | null) => void;
  cardRef: (el: HTMLButtonElement | null) => void;
}) {
  const { shown, typing } = useTypingLoop(source.examples, running, START_MS[index]);
  const lastPointer = useRef<string>("mouse");
  const Icon = source.icon;
  const isFocus = focus === index;
  return (
    <button
      ref={cardRef}
      type="button"
      aria-pressed={isFocus}
      onPointerDown={(e) => (lastPointer.current = e.pointerType)}
      onPointerEnter={(e) => e.pointerType === "mouse" && setFocus(index)}
      onFocus={(e) => e.currentTarget.matches(":focus-visible") && setFocus(index)}
      // Touch and pen: tap to follow this channel, tap again for all three.
      onClick={() => lastPointer.current !== "mouse" && setFocus(isFocus ? null : index)}
      className={`w-full min-w-0 rounded-2xl border p-3 text-left transition-[border-color,background-color,opacity,box-shadow] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 sm:p-4 ${
        lit
          ? `border-accent/60 bg-accent/[0.06] opacity-100 ${isFocus ? "shadow-[0_0_0_4px_rgb(var(--accent)/0.08)]" : ""}`
          : "border-line bg-bg/60 opacity-50"
      }`}
    >
      <span className="flex items-center gap-2 text-sm font-semibold text-ink">
        <Icon className="h-4 w-4 shrink-0 text-accent" strokeWidth={2} aria-hidden="true" />
        {source.channel}
      </span>
      <span className="mt-1 block text-xs leading-snug text-muted">{source.via}</span>
      <span className="mt-2.5 flex min-h-[2rem] items-center break-words rounded-lg border border-line bg-card px-2.5 py-1.5 text-xs leading-snug text-ink-2">
        {source.channel !== "Social" && <Search className="mr-1.5 h-3 w-3 shrink-0 text-muted" strokeWidth={2} aria-hidden="true" />}
        <span>
          {shown}
          {typing && <span aria-hidden="true" className="ml-px inline-block h-3 w-px translate-y-0.5 animate-pulse bg-accent" />}
        </span>
      </span>
    </button>
  );
}

export function DemandMap() {
  const reduce = useReducedMotion();
  const figureRef = useRef<HTMLElement>(null);
  const inView = useInView(figureRef, { amount: 0.3 });

  /** null = all three channels working; a number = following that one channel. */
  const [focus, setFocus] = useState<number | null>(null);
  const lit = (i: number) => focus === null || focus === i;

  // Measure the cards so the connectors meet them exactly.
  const gridRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const nodeRef = useRef<HTMLDivElement>(null);
  const [geo, setGeo] = useState<{ w: number; h: number; paths: string[] } | null>(null);

  useLayoutEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const measure = () => {
      const g = grid.getBoundingClientRect();
      const node = nodeRef.current?.getBoundingClientRect();
      if (!node) return;
      const x1 = node.left - g.left;
      const y1 = node.top - g.top + node.height / 2;
      const paths = cardRefs.current.map((el) => {
        if (!el) return "";
        const r = el.getBoundingClientRect();
        const x0 = r.right - g.left;
        const y0 = r.top - g.top + r.height / 2;
        const dx = (x1 - x0) * 0.55;
        return `M${x0} ${y0} C ${x0 + dx} ${y0}, ${x1 - dx} ${y1}, ${x1} ${y1}`;
      });
      setGeo({ w: g.width, h: g.height, paths });
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(grid);
    return () => ro.disconnect();
  }, []);

  const reveal = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: EASE },
        };

  const current = focus === null ? null : sources[focus];
  const animate = !reduce && inView;

  return (
    <figure
      ref={figureRef}
      className="mx-card relative p-5 sm:p-7"
      aria-label="How demand from search, social and maps becomes an enquiry"
      // Leaving the whole diagram (not just a card) brings all three back, so the pointer
      // or keyboard can travel from a card to its service link in the caption.
      onPointerLeave={(e) => e.pointerType === "mouse" && setFocus(null)}
      onBlur={(e) => !e.currentTarget.contains(e.relatedTarget as Node | null) && setFocus(null)}
    >
      <p className="mb-4 text-xs font-medium text-muted">Hover or tap a channel to follow its path</p>
      <div
        ref={gridRef}
        className="relative grid grid-cols-[minmax(0,1fr)_2.5rem_minmax(0,0.8fr)] items-center sm:grid-cols-[minmax(0,1fr)_3.5rem_minmax(0,0.8fr)]"
      >
        {/* Sources */}
        <ul className="col-start-1 grid min-w-0 grid-cols-[minmax(0,1fr)] gap-3">
          {sources.map((s, i) => (
            <motion.li key={s.channel} {...reveal(0.1 + i * 0.12)} className="min-w-0">
              <SourceCard
                source={s}
                index={i}
                lit={lit(i)}
                running={animate && lit(i)}
                focus={focus}
                setFocus={setFocus}
                cardRef={(el) => {
                  cardRefs.current[i] = el;
                }}
              />
            </motion.li>
          ))}
        </ul>

        {/* Enquiry node */}
        <motion.div {...reveal(0.95)} className="col-start-3 min-w-0">
          <div
            ref={nodeRef}
            className="rounded-2xl border border-accent/70 bg-bg/70 p-3 text-center shadow-[0_0_0_4px_rgb(var(--accent)/0.08)] sm:p-4"
          >
            <p className="font-display text-lg font-bold text-ink">Enquiry</p>
            <ul
              className="mt-3 space-y-1.5 text-left text-xs"
              aria-label={current ? `Usual ways ${current.channel.toLowerCase()} customers get in touch` : "Ways customers get in touch"}
            >
              {methods.map((m) => {
                const on = !current || current.methods.includes(m.name);
                return (
                  <li
                    key={m.name}
                    className={`flex items-center gap-2 rounded-lg px-1.5 py-1 transition-[background-color,color,opacity] duration-300 ${
                      on ? "bg-accent/10 font-semibold text-ink" : "text-ink-2 opacity-50"
                    }`}
                  >
                    <m.icon className="h-3.5 w-3.5 shrink-0 text-accent" strokeWidth={2} aria-hidden="true" />
                    <span className="flex-1">{m.name}</span>
                    {current && on && <Check className="hidden h-3.5 w-3.5 shrink-0 text-accent sm:block" strokeWidth={2.5} aria-hidden="true" />}
                  </li>
                );
              })}
            </ul>
          </div>
        </motion.div>

        {/* Connectors, drawn over the grid from measured positions. */}
        {geo && (
          <svg
            aria-hidden="true"
            width={geo.w}
            height={geo.h}
            viewBox={`0 0 ${geo.w} ${geo.h}`}
            className="pointer-events-none absolute inset-0 overflow-visible"
          >
            {geo.paths.map((d, i) =>
              d ? (
                <motion.path
                  key={i}
                  d={d}
                  fill="none"
                  stroke="rgb(var(--accent))"
                  strokeWidth={focus === i ? 2 : 1.5}
                  strokeLinecap="round"
                  initial={reduce ? false : { pathLength: 0, opacity: 0.75 }}
                  animate={{ pathLength: 1, opacity: lit(i) ? (focus === i ? 1 : 0.7) : 0.2 }}
                  transition={{
                    pathLength: { duration: 0.9, delay: 0.45 + i * 0.12, ease: EASE },
                    opacity: { duration: 0.3 },
                  }}
                />
              ) : null,
            )}
            {animate &&
              geo.paths.map((d, i) =>
                d && lit(i) ? (
                  <circle key={`dot-${i}-${focus ?? "all"}`} r={4} fill="rgb(var(--accent))">
                    <animateMotion
                      dur="1.8s"
                      begin={focus === null ? `${i * 0.6}s` : "0s"}
                      repeatCount="indefinite"
                      path={d}
                      keyPoints="0;1"
                      keyTimes="0;1"
                      calcMode="spline"
                      keySplines="0.4 0 0.2 1"
                    />
                  </circle>
                ) : null,
              )}
          </svg>
        )}
      </div>

      <motion.figcaption {...reveal(1.1)} className="mt-5 border-t border-line pt-4">
        <p aria-live="polite" className="min-h-[3.5rem] text-sm leading-relaxed text-muted">
          {current ? (
            <>
              <span className="font-semibold text-ink">{current.channel}: </span>
              {current.tracking}
            </>
          ) : (
            ALL_CAPTION
          )}
        </p>
        {current && (
          <Link href={current.link.href} className="mx-link mt-3 inline-flex text-sm font-semibold">
            {current.link.label}
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.25} aria-hidden="true" />
          </Link>
        )}
      </motion.figcaption>
    </figure>
  );
}
