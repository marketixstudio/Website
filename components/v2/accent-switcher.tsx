"use client";

import {
  type MouseEvent as ReactMouseEvent,
  type TouchEvent as ReactTouchEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { animate, motion, useMotionValue } from "framer-motion";
import { Palette } from "lucide-react";
import { ACCENT_KEY, accents, announceThemeChange, type AccentKey } from "@/lib/theme";

/**
 * Floating accent colour picker (behaviour cloned from the Vistrow switcher):
 * a small button that can be dragged anywhere and snaps to the nearest side
 * edge, remembering its position. Clicking opens a row of swatches; the choice
 * sets [data-accent] on <html> and is saved. Restyled to design.md (card
 * surface, no glass); it stays clear of the header and the bottom-corner
 * WhatsApp and chat buttons.
 */

const POS_Y_KEY = "marketix-accent-switcher-y";
const SIDE_KEY = "marketix-accent-switcher-side";

const BTN = 44;
const MARGIN = 16;
const TOP_CLEARANCE = 112; // below the floating header
const BOTTOM_CLEARANCE = 104; // above the WhatsApp and chat buttons

type Side = "left" | "right";
type Bounds = { left: number; right: number; top: number; bottom: number };
type DragState = { pointerId: number; startPointerX: number; startPointerY: number; startX: number; startY: number; moved: boolean };

const clamp = (v: number, min: number, max: number) => Math.min(Math.max(v, min), Math.max(min, max));

export function AccentSwitcher() {
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false);
  const [accent, setAccent] = useState<AccentKey>("violet");
  const [side, setSide] = useState<Side>("right");
  const [bounds, setBounds] = useState<Bounds>({ left: MARGIN, right: MARGIN, top: TOP_CLEARANCE, bottom: TOP_CLEARANCE });
  const rootRef = useRef<HTMLDivElement>(null);
  const sideRef = useRef<Side>("right");
  const dragRef = useRef<DragState | null>(null);
  const cleanupRef = useRef<(() => void) | null>(null);
  const suppressClickRef = useRef(false);
  const x = useMotionValue(MARGIN);
  const y = useMotionValue(TOP_CLEARANCE);

  useEffect(() => () => cleanupRef.current?.(), []);

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-accent") as AccentKey | null;
    setAccent(current || "violet");

    const compute = (): Bounds => ({
      left: MARGIN,
      right: window.innerWidth - BTN - MARGIN,
      top: TOP_CLEARANCE,
      bottom: window.innerHeight - BTN - BOTTOM_CLEARANCE,
    });

    const initial = compute();
    setBounds(initial);

    let storedSide: Side = "right";
    let storedY = initial.top + (initial.bottom - initial.top) * 0.55;
    try {
      const s = localStorage.getItem(SIDE_KEY);
      if (s === "left" || s === "right") storedSide = s;
      const yv = localStorage.getItem(POS_Y_KEY);
      if (yv && !Number.isNaN(parseFloat(yv))) storedY = parseFloat(yv);
    } catch {}

    setSide(storedSide);
    sideRef.current = storedSide;
    x.set(storedSide === "right" ? initial.right : initial.left);
    y.set(clamp(storedY, initial.top, initial.bottom));
    setReady(true);

    const onResize = () => {
      const next = compute();
      setBounds(next);
      x.set(sideRef.current === "right" ? next.right : next.left);
      y.set(clamp(y.get(), next.top, next.bottom));
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [x, y]);

  useEffect(() => {
    if (!open) return;
    const onAway = (e: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("pointerdown", onAway);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("pointerdown", onAway);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function snap() {
    const newSide: Side = x.get() + BTN / 2 < window.innerWidth / 2 ? "left" : "right";
    const targetX = newSide === "left" ? bounds.left : bounds.right;
    const targetY = clamp(y.get(), bounds.top, bounds.bottom);
    setSide(newSide);
    sideRef.current = newSide;
    animate(x, targetX, { type: "spring", stiffness: 500, damping: 42 });
    animate(y, targetY, { type: "spring", stiffness: 500, damping: 42 });
    try {
      localStorage.setItem(SIDE_KEY, newSide);
      localStorage.setItem(POS_Y_KEY, String(targetY));
    } catch {}
  }

  function begin(clientX: number, clientY: number, pointerId: number) {
    cleanupRef.current?.();
    dragRef.current = { pointerId, startPointerX: clientX, startPointerY: clientY, startX: x.get(), startY: y.get(), moved: false };
  }

  function move(clientX: number, clientY: number, pointerId: number) {
    const d = dragRef.current;
    if (!d || d.pointerId !== pointerId) return;
    const dx = clientX - d.startPointerX;
    const dy = clientY - d.startPointerY;
    if (!d.moved && Math.hypot(dx, dy) < 4) return;
    if (!d.moved) setOpen(false);
    d.moved = true;
    x.set(clamp(d.startX + dx, bounds.left, bounds.right));
    y.set(clamp(d.startY + dy, bounds.top, bounds.bottom));
  }

  function finish(pointerId: number) {
    const d = dragRef.current;
    if (!d || d.pointerId !== pointerId) return;
    dragRef.current = null;
    if (!d.moved) return;
    suppressClickRef.current = true;
    window.setTimeout(() => (suppressClickRef.current = false), 0);
    snap();
  }

  function onMouseDown(e: ReactMouseEvent<HTMLButtonElement>) {
    if (e.button !== 0) return;
    begin(e.clientX, e.clientY, -1);
    const onMove = (ev: MouseEvent) => {
      ev.preventDefault();
      move(ev.clientX, ev.clientY, -1);
    };
    const onUp = () => {
      cleanup();
      finish(-1);
    };
    const cleanup = () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      cleanupRef.current = null;
    };
    cleanupRef.current = cleanup;
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp, { once: true });
  }

  function onTouchStart(e: ReactTouchEvent<HTMLButtonElement>) {
    const touch = e.changedTouches[0];
    if (!touch) return;
    begin(touch.clientX, touch.clientY, touch.identifier);
    const onMove = (ev: TouchEvent) => {
      const t = Array.from(ev.touches).find((i) => i.identifier === touch.identifier);
      if (!t) return;
      ev.preventDefault();
      move(t.clientX, t.clientY, touch.identifier);
    };
    const onEnd = (ev: TouchEvent) => {
      if (!Array.from(ev.changedTouches).some((i) => i.identifier === touch.identifier)) return;
      cleanup();
      finish(touch.identifier);
    };
    const cleanup = () => {
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onEnd);
      window.removeEventListener("touchcancel", onEnd);
      cleanupRef.current = null;
    };
    cleanupRef.current = cleanup;
    window.addEventListener("touchmove", onMove, { passive: false });
    window.addEventListener("touchend", onEnd);
    window.addEventListener("touchcancel", onEnd);
  }

  function onClick() {
    if (suppressClickRef.current) {
      suppressClickRef.current = false;
      return;
    }
    setOpen((v) => !v);
  }

  function choose(key: AccentKey) {
    setAccent(key);
    setOpen(false);
    const root = document.documentElement;
    if (key === "violet") root.removeAttribute("data-accent");
    else root.setAttribute("data-accent", key);
    try {
      localStorage.setItem(ACCENT_KEY, key);
    } catch {}
    announceThemeChange();
  }

  const current = accents.find((a) => a.key === accent) ?? accents[0];

  return (
    <div className="pointer-events-none fixed inset-0 z-[44] print:hidden">
      <motion.div
        ref={rootRef}
        style={{ x, y, opacity: ready ? 1 : 0 }}
        className="pointer-events-auto absolute left-0 top-0 cursor-grab active:cursor-grabbing"
      >
        <button
          type="button"
          onMouseDown={onMouseDown}
          onTouchStart={onTouchStart}
          onClick={onClick}
          aria-label={`Choose accent colour (current: ${current.label}). Drag to move.`}
          title="Accent colour"
          aria-expanded={open}
          className="flex h-11 w-11 touch-none select-none items-center justify-center rounded-full border border-line bg-card shadow-[0_10px_30px_-10px_rgb(10_10_12/0.16)] dark:shadow-[0_10px_30px_-10px_rgb(0_0_0/0.6)] transition-[border-color,box-shadow] hover:border-accent hover:shadow-[0_0_0_5px_rgb(var(--accent)/0.12),0_10px_30px_-10px_rgb(0_0_0/0.6)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <Palette className="h-5 w-5" strokeWidth={2} style={{ color: current.swatch }} aria-hidden="true" />
        </button>

        {open && (
          <div
            role="group"
            aria-label="Accent colours"
            className={`absolute top-1/2 flex -translate-y-1/2 items-center gap-1.5 rounded-full border border-line bg-card p-1.5 shadow-[0_16px_40px_-12px_rgb(10_10_12/0.16)] dark:shadow-[0_16px_40px_-12px_rgb(0_0_0/0.6)] ${
              side === "left" ? "left-full ml-2" : "right-full mr-2"
            }`}
          >
            {accents.map((a) => (
              <button
                key={a.key}
                type="button"
                onClick={() => choose(a.key)}
                aria-label={a.label}
                aria-pressed={accent === a.key}
                title={a.label}
                className={`flex h-8 w-8 items-center justify-center rounded-full transition-transform hover:scale-110 motion-reduce:hover:scale-100 ${
                  accent === a.key ? "ring-2 ring-offset-2 ring-offset-card" : ""
                }`}
                style={accent === a.key ? ({ "--tw-ring-color": a.swatch } as React.CSSProperties) : undefined}
              >
                <span aria-hidden="true" className="h-6 w-6 rounded-full border border-black/10" style={{ backgroundColor: a.swatch }} />
              </button>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}
