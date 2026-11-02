#!/usr/bin/env node
/**
 * Adds today's draft to the content calendar sheet (run by daily-blog.yml after the PR opens).
 * Env: SLUG, PR_URL, plus the Google env in google.mjs. Skips quietly if Google isn't set up.
 */
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { appendRow, googleConfigured } from "./google.mjs";

if (!googleConfigured()) {
  console.log("Google not configured; skipping sheet log.");
  process.exit(0);
}
const root = fileURLToPath(new URL("../../", import.meta.url));
const post = JSON.parse(readFileSync(`${root}content/blog-posts/${process.env.SLUG}.json`, "utf8"));
await appendRow([post.date, post.category, post.focusKeyword, post.title, "Draft: PR open", process.env.PR_URL ?? "", "", "", "", "", "", "", "", ""]);
console.log(`Logged "${post.title}" to the content calendar.`);
