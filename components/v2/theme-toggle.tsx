"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { announceThemeChange, THEME_EVENT, THEME_KEY } from "@/lib/theme";

/**
 * Light/dark switch for the header (behaviour adapted from the Vistrow toggle).
 * The site ships dark; the choice is saved and re-applied before paint by
 * lib/theme.ts. Renders a stable icon until mounted to avoid a hydration mismatch.
 */
export function ThemeToggle({ className = "" }: { className?: string }) {
  const [dark, setDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const sync = () => setDark(document.documentElement.classList.contains("dark"));
    sync();
    // Keeps the header and drawer toggles in step with each other.
    window.addEventListener(THEME_EVENT, sync);
    return () => window.removeEventListener(THEME_EVENT, sync);
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    const root = document.documentElement;
    root.classList.toggle("dark", next);
    root.style.colorScheme = next ? "dark" : "light";
    try {
      localStorage.setItem(THEME_KEY, next ? "dark" : "light");
    } catch {}
    announceThemeChange();
  }

  const label = mounted ? `Switch to ${dark ? "light" : "dark"} mode` : "Switch colour theme";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line text-ink-2 transition-colors hover:border-accent hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent ${className}`}
    >
      {mounted && !dark ? (
        <Moon className="h-[18px] w-[18px]" strokeWidth={2} aria-hidden="true" />
      ) : (
        <Sun className="h-[18px] w-[18px]" strokeWidth={2} aria-hidden="true" />
      )}
    </button>
  );
}
