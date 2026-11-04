#!/usr/bin/env node
/**
 * Tells IndexNow (Bing, Yandex, Seznam, Naver) about today's post and the sitemap. Google does
 * not use IndexNow; it is told through the sitemap resubmit in seo-sync.mjs.
 * Usage: node scripts/blog/indexnow.mjs <url> [url...]
 * The key file lives at public/cbd2583e54cdc25037a8311388cf543f.txt, as the protocol requires.
 */
const KEY = "cbd2583e54cdc25037a8311388cf543f";
const HOST = "www.marketixstudio.com";
const urls = process.argv.slice(2);
if (!urls.length) {
  console.log("No URLs to submit.");
  process.exit(0);
}
const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList: urls }),
});
console.log(`IndexNow: ${res.status} for ${urls.join(", ")}`);
