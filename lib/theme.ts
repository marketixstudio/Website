/**
 * Theme (light/dark) and accent colour preferences. The site ships dark; a
 * visitor's choice is kept in localStorage and applied before paint by
 * `themeScript` (app/layout.tsx), so there is no flash of the wrong theme.
 * Accent tokens for each option live in app/globals.css under [data-accent].
 */

export const THEME_KEY = "marketix-theme";
export const ACCENT_KEY = "marketix-accent";

export type AccentKey = "violet" | "blue" | "teal" | "orange" | "pink" | "gold";

/** Violet is the brand default; the rest are visitor options. */
export const accents: { key: AccentKey; label: string; swatch: string }[] = [
  { key: "violet", label: "Violet (brand)", swatch: "#C82AEF" },
  { key: "blue", label: "Blue", swatch: "#3D7BFF" },
  { key: "teal", label: "Teal", swatch: "#17C3CF" },
  { key: "orange", label: "Orange", swatch: "#FF7A1A" },
  { key: "pink", label: "Pink", swatch: "#FF2E8A" },
  { key: "gold", label: "Gold", swatch: "#EFBC2A" },
];

export const themeScript = `(function(){try{
var d=document.documentElement;
var t=localStorage.getItem('${THEME_KEY}');
d.classList.toggle('dark',t!=='light');
d.style.colorScheme=t==='light'?'light':'dark';
var a=localStorage.getItem('${ACCENT_KEY}');
if(a&&a!=='violet'&&/^(blue|teal|orange|pink|gold)$/.test(a))d.setAttribute('data-accent',a);
}catch(e){}})();`;

/** Tell interested components (e.g. the hero canvas) that colours changed. */
export const THEME_EVENT = "marketix-theme-change";
export function announceThemeChange() {
  window.dispatchEvent(new Event(THEME_EVENT));
}
