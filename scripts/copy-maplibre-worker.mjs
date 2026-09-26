// Copies MapLibre's web worker (and the shared chunk it imports) into public/ so the
// browser can load it: bundlers don't serve it on their own. Runs after npm install.
import { copyFileSync, mkdirSync, existsSync } from "node:fs";

const src = "node_modules/maplibre-gl/dist";
const dest = "public/vendor/maplibre";
if (existsSync(src)) {
  mkdirSync(dest, { recursive: true });
  for (const f of ["maplibre-gl-worker.mjs", "maplibre-gl-shared.mjs"]) copyFileSync(`${src}/${f}`, `${dest}/${f}`);
  console.log("maplibre worker copied to", dest);
}
