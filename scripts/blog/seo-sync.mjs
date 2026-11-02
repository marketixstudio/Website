#!/usr/bin/env node
/**
 * Keeps the content calendar sheet in step with what is live and how it performs.
 * Run by .github/workflows/blog-seo-sync.yml after a post is merged and every Monday.
 *  1. Resubmits the sitemap in Search Console so new posts get crawled.
 *  2. For every published post: marks its row Published with the live URL (adds a row if the
 *     post was never logged), asks Search Console whether Google has indexed it, and fills in
 *     clicks, impressions and average position (Search Console) and views (GA4), last 28 days.
 * Each part is skipped if its env (GSC_SITE, GA4_PROPERTY_ID) isn't set, so it works step by step.
 */
import { readFileSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { appendRow, googleConfigured, inspectUrl, pageSearchStats, pageViews, readRows, submitSitemap, updateRow } from "./google.mjs";

const SITE = "https://www.marketixstudio.com";
if (!googleConfigured() || !process.env.CALENDAR_SHEET_ID) {
  console.log("Google not configured; skipping.");
  process.exit(0);
}
const root = fileURLToPath(new URL("../../", import.meta.url));
const read = (p) => readFileSync(root + p, "utf8");

// Published posts: hand-written ones in content/blog.ts plus the daily JSON posts.
const handWritten = read("content/blog.ts").split("const handWrittenPosts")[1] ?? "";
const posts = [
  ...[...handWritten.matchAll(/slug: "([^"]+)",\s*\n\s*title: "([^"]+)",[\s\S]*?category: "([^"]+)",[\s\S]*?date: "([^"]+)",[\s\S]*?focusKeyword: "([^"]+)"/g)].map((m) => ({
    slug: m[1], title: m[2], category: m[3], date: m[4], focusKeyword: m[5],
  })),
  ...readdirSync(root + "content/blog-posts").filter((f) => f.endsWith(".json")).map((f) => JSON.parse(read(`content/blog-posts/${f}`))),
];

const gsc = Boolean(process.env.GSC_SITE);
const ga = Boolean(process.env.GA4_PROPERTY_ID);
if (gsc) {
  await submitSitemap(`${SITE}/sitemap.xml`).then(() => console.log("Sitemap submitted."), (e) => console.log(`Sitemap submit failed: ${e.message}`));
}
const stats = gsc ? await pageSearchStats().catch((e) => (console.log(`Search stats failed: ${e.message}`), new Map())) : new Map();
const views = ga ? await pageViews().catch((e) => (console.log(`GA4 failed: ${e.message}`), new Map())) : new Map();

const rows = await readRows();
const today = new Date(Date.now() + 5.5 * 36e5).toISOString().slice(0, 10);
for (const p of posts) {
  const url = `${SITE}/blog/${p.slug}`;
  const existing = rows.find((r) => r.values[6] === url || r.values[3] === p.title || r.values[5].includes(p.slug));
  const v = existing ? [...existing.values] : [p.date, p.category, p.focusKeyword ?? "", p.title, "", "", "", "", "", "", "", "", "", ""];
  v[4] = "Published";
  v[6] = url;
  if (gsc) {
    const r = await inspectUrl(url).catch((e) => ({ verdict: "CHECK FAILED", coverage: e.message.slice(0, 80) }));
    v[7] = r.verdict === "PASS" ? "Yes" : `No: ${r.coverage || r.verdict}`;
    const s = stats.get(url);
    v[8] = s ? Math.round(s.clicks) : 0;
    v[9] = s ? Math.round(s.impressions) : 0;
    v[10] = s ? s.position.toFixed(1) : "";
  }
  if (ga) v[11] = views.get(`/blog/${p.slug}`) ?? 0;
  v[12] = today;
  if (existing) await updateRow(existing.row, v);
  else await appendRow(v);
  console.log(`${p.slug}: indexed ${v[7] || "-"}, clicks ${v[8] || 0}, views ${v[11] || 0}`);
}
