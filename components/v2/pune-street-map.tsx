"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import "maplibre-gl/dist/maplibre-gl.css";
import { PUNE, type LatLng } from "@/lib/geo";
import { punePlaces } from "@/lib/pune-places";
import { THEME_EVENT } from "@/lib/theme";

/**
 * Real street map for the Pune step of the location zoom. MapLibre GL (BSD-3) with
 * OpenFreeMap tiles (free, no key, OpenStreetMap data; dark style in dark mode,
 * positron in light mode). The focus neighbourhood and the nearby areas are marked,
 * with lines from the centre. Loaded on demand (next/dynamic) only when a visitor
 * reaches this step. Scroll-wheel and one-finger gestures need Ctrl/two fingers so the
 * page keeps scrolling. Falls back to `fallback` (the SVG diagram) if WebGL fails.
 */

const styleUrl = () =>
  `https://tiles.openfreemap.org/styles/${document.documentElement.classList.contains("dark") ? "dark" : "positron"}`;
const accentHex = () => {
  const v = getComputedStyle(document.documentElement).getPropertyValue("--accent").trim().split(/\s+/).map(Number);
  return v.length === 3 && v.every((n) => !Number.isNaN(n)) ? `rgb(${v.join(",")})` : "#C82AEF";
};

export default function PuneStreetMap({ area, nearby, fallback }: { area?: string; nearby: string[]; fallback: ReactNode }) {
  const boxRef = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let map: import("maplibre-gl").Map | null = null;
    let cancelled = false;
    const focus: LatLng = (area && punePlaces[area]) || PUNE;
    const named = nearby.filter((n) => punePlaces[n]);

    (async () => {
      try {
        const maplibregl = await import("maplibre-gl");
        // The worker is served from public/ (copied by scripts/copy-maplibre-worker.mjs).
        maplibregl.setWorkerUrl("/vendor/maplibre/maplibre-gl-worker.mjs");
        if (cancelled || !boxRef.current) return;
        const lngLats = [focus, ...named.map((n) => punePlaces[n])].map(([lat, lng]) => [lng, lat] as [number, number]);
        const bounds = lngLats.reduce((b, p) => b.extend(p), new maplibregl.LngLatBounds(lngLats[0], lngLats[0]));

        const m = new maplibregl.Map({
          container: boxRef.current,
          style: styleUrl(),
          bounds,
          fitBoundsOptions: { padding: 70, maxZoom: 13.5 },
          // OpenFreeMap styles carry their own OpenStreetMap / OpenMapTiles credits.
          attributionControl: { compact: true },
          cooperativeGestures: true,
          dragRotate: false,
          pitchWithRotate: false,
          touchPitch: false,
        });
        map = m;
        m.touchZoomRotate.disableRotation();

        const addLines = () => {
          if (!map || map.getSource("mx-links")) return;
          map.addSource("mx-links", {
            type: "geojson",
            data: {
              type: "FeatureCollection",
              features: named.map((n) => ({
                type: "Feature",
                properties: {},
                geometry: { type: "LineString", coordinates: [[focus[1], focus[0]], [punePlaces[n][1], punePlaces[n][0]]] },
              })),
            },
          });
          map.addLayer({ id: "mx-links", type: "line", source: "mx-links", paint: { "line-color": accentHex(), "line-width": 2, "line-opacity": 0.75, "line-dasharray": [2, 2] } });
        };
        m.on("style.load", addLines);

        // Markers as HTML so they use the site's type and colours.
        const dot = (label: string, strong: boolean) => {
          const el = document.createElement("div");
          el.className = "pointer-events-none flex flex-col items-center";
          el.innerHTML = strong
            ? `<span class="rounded-full border-2 border-accent bg-card px-3 py-1 text-sm font-bold text-ink shadow-[0_0_0_6px_rgb(var(--accent)/0.18)]">${label}</span>`
            : `<span class="mb-1 whitespace-nowrap rounded-full bg-card/90 px-2 py-0.5 text-xs font-semibold text-ink-2">${label}</span><span class="h-3 w-3 rounded-full border-[3px] border-accent bg-card"></span>`;
          return el;
        };
        named.forEach((n) =>
          new maplibregl.Marker({ element: dot(n, false), anchor: "bottom" }).setLngLat([punePlaces[n][1], punePlaces[n][0]]).addTo(m),
        );
        new maplibregl.Marker({ element: dot(area ?? "Pune", true), anchor: "center" }).setLngLat([focus[1], focus[0]]).addTo(m);

        m.on("error", (e) => {
          // Tile hiccups are recoverable; only a failed style means no map at all.
          if (!m.isStyleLoaded() && String(e.error?.message || "").toLowerCase().includes("style")) setFailed(true);
        });
      } catch {
        if (!cancelled) setFailed(true);
      }
    })();

    const onTheme = () => {
      if (!map) return;
      map.setStyle(styleUrl());
    };
    window.addEventListener(THEME_EVENT, onTheme);

    return () => {
      cancelled = true;
      window.removeEventListener(THEME_EVENT, onTheme);
      map?.remove();
    };
  }, [area, nearby]);

  if (failed) return <>{fallback}</>;
  return <div ref={boxRef} className="h-full w-full overflow-hidden rounded-[18px]" />;
}
