#!/usr/bin/env node
/**
 * Daily blog draft (run by .github/workflows/daily-blog.yml on GitHub's servers).
 *
 * 1. Takes the next queued topic from content/blog-queue.json (real Google searches, India),
 *    skipping topics that already have an open draft PR (SKIP_TOPICS, comma separated).
 * 2. Writes the post with OpenAI as structured JSON in the site's BlogPost shape.
 * 3. Checks it: no invented links (only our own pages), no em dashes, no stock phrases;
 *    every number is listed in the PR body for a human to confirm before merging.
 * 4. Saves content/blog-posts/<slug>.json, regenerates content/blog-posts/index.ts and marks
 *    the topic drafted.
 *
 * Env: OPENAI_API_KEY (required), BLOG_MODEL (default gpt-5.4-mini), SKIP_TOPICS,
 * PR_BODY_FILE (where to write the PR description), GITHUB_OUTPUT (set by Actions).
 * Local dry run: node scripts/blog/draft-post.mjs --dry   (prints, writes nothing)
 */
import { appendFileSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("../../", import.meta.url));
const read = (p) => readFileSync(join(ROOT, p), "utf8");
const DRY = process.argv.includes("--dry");
const MODEL = process.env.BLOG_MODEL || "gpt-5.4-mini";
const KEY = process.env.OPENAI_API_KEY;
if (!KEY) throw new Error("OPENAI_API_KEY is not set");

// ---------- inputs ----------
const queue = JSON.parse(read("content/blog-queue.json"));
const skip = new Set((process.env.SKIP_TOPICS || "").split(",").map((s) => s.trim()).filter(Boolean));
const topic = queue.find((t) => t.status === "queued" && !skip.has(t.id));
if (!topic) {
  console.log("No queued topics left.");
  process.exit(0);
}

const categoriesSrc = read("content/blog-categories.ts");
const categories = [...categoriesSrc.matchAll(/slug: "([^"]+)",\s*name: "([^"]+)"/g)].map((m) => ({ slug: m[1], name: m[2] }));
const category = categories.find((c) => c.slug === topic.category);
if (!category) throw new Error(`Unknown category ${topic.category}`);

// Our own pages the post may link to (the only links allowed).
const pageLinks = [
  ...[...read("content/services.ts").matchAll(/slug: "([a-z0-9-]+)",\s*\n\s*title: "([^"]+)"/g)].map((m) => ({ href: `/services/${m[1]}`, label: m[2] })),
  ...[...read("content/industries.ts").matchAll(/slug: "([a-z0-9-]+)",\s*\n\s*(?:title|name): "([^"]+)"/g)].map((m) => ({ href: `/industries/${m[1]}`, label: m[2] })),
  { href: "/growth-audit", label: "Free growth audit" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];
const existingPosts = [
  ...[...read("content/blog.ts").matchAll(/slug: "([^"]+)",\s*\n\s*title: "([^"]+)"/g)].map((m) => ({ slug: m[1], title: m[2] })),
  ...readdirSync(join(ROOT, "content/blog-posts"))
    .filter((f) => f.endsWith(".json"))
    .map((f) => JSON.parse(read(`content/blog-posts/${f}`)))
    .map((p) => ({ slug: p.slug, title: p.title })),
];
const allowedHrefs = new Set([...pageLinks.map((l) => l.href), ...existingPosts.map((p) => `/blog/${p.slug}`)]);

// ---------- prompt ----------
const system = `You write one blog post for Marketix Studio, a performance marketing agency in Pune, India (Google Ads, Meta ads, SEO, Google Maps, websites, WhatsApp and email) that works with real estate, eCommerce, D2C and local businesses.

Readers are Indian business owners and marketing managers who typed the searches below into Google. Answer what they asked, plainly, in Indian English, like an experienced practitioner explaining it to a client. Specific and useful, never padded.

Hard rules:
- Never invent facts. No statistics, percentages, survey results, client results, case studies, testimonials, prices or rupee figures unless they are well-established, official platform facts (e.g. a Google or Meta policy). For cost questions, explain what the cost depends on, how to estimate it for your own business, and give a worked example clearly labelled "Example" with round illustrative numbers that are obviously an illustration, not a market rate.
- Do not claim Marketix did or achieved anything specific.
- Links: only use links from the allowed list below, written as markdown [text](/path). No external links.
- No em dashes or en dashes. No exclamation marks. No emoji.
- Avoid filler and stock phrases: "in today's digital landscape", "game-changer", "unlock", "leverage", "seamless", "dive in", "it's important to note", "in conclusion", "elevate", "navigate the complexities", "robust", "plethora".
- Use the focus keyword in the title, the first paragraph and one heading. Searches are often typed ungrammatically ("how much seo cost"); write them the way a person would say them ("how much SEO costs"), never paste a broken phrase. No keyword stuffing; no "near me".
- 1,000 to 1,600 words across 5 to 8 sections. Short paragraphs (2 to 4 sentences). Use "points" for checklists or steps.
- 4 to 6 FAQs drawn from the other real searches, each answered in 2 to 4 sentences.
- The last section points readers to the most relevant service page from the allowed list.

Allowed links:
${pageLinks.map((l) => `- [${l.label}](${l.href})`).join("\n")}
${existingPosts.map((p) => `- [${p.title}](/blog/${p.slug})`).join("\n")}

Existing posts (do not repeat their topic):
${existingPosts.map((p) => `- ${p.title}`).join("\n")}`;

const user = `Category: ${category.name}
Focus keyword: ${topic.focusKeyword}
Real Google searches this post must answer (India, autocomplete, most popular first):
${topic.searches.map((s) => `- ${s}`).join("\n")}`;

const schema = {
  type: "object",
  additionalProperties: false,
  required: ["title", "slug", "excerpt", "metaTitle", "metaDescription", "secondaryKeywords", "sections", "faqs"],
  properties: {
    title: { type: "string", description: "Clear question-answering title, under 70 characters." },
    slug: { type: "string", description: "lowercase-hyphenated, 3 to 7 words, from the focus keyword." },
    excerpt: { type: "string", description: "One or two sentences, under 200 characters." },
    metaTitle: { type: "string", description: "Under 60 characters." },
    metaDescription: { type: "string", description: "Under 155 characters." },
    secondaryKeywords: { type: "array", items: { type: "string" }, description: "3 to 5 of the real searches." },
    sections: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        required: ["heading", "paragraphs", "points"],
        properties: {
          heading: { type: "string", description: "Empty string for the opening section only." },
          paragraphs: { type: "array", items: { type: "string" } },
          points: { type: "array", items: { type: "string" }, description: "Empty array if none." },
        },
      },
    },
    faqs: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        required: ["question", "answer"],
        properties: { question: { type: "string" }, answer: { type: "string" } },
      },
    },
  },
};

async function draft(extra = []) {
  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: { Authorization: `Bearer ${KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      model: MODEL,
      reasoning_effort: "low",
      max_completion_tokens: 12000,
      messages: [{ role: "system", content: system }, { role: "user", content: user }, ...extra],
      response_format: { type: "json_schema", json_schema: { name: "blog_post", strict: true, schema } },
    }),
  });
  if (!res.ok) throw new Error(`OpenAI ${res.status}: ${await res.text()}`);
  const data = await res.json();
  const msg = data.choices?.[0]?.message;
  if (msg?.refusal) throw new Error(`Model refused: ${msg.refusal}`);
  return { post: JSON.parse(msg.content), raw: msg.content };
}

// ---------- checks ----------
const STOCK = /in today's digital|game[- ]changer|\bunlock\b|\bleverage\b|seamless|dive in|it's important to note|in conclusion|\belevate\b|navigate the complexities|\brobust\b|plethora/i;
const allText = (p) => [p.title, p.excerpt, ...p.sections.flatMap((s) => [s.heading ?? "", ...s.paragraphs, ...(s.points ?? [])]), ...p.faqs.flatMap((f) => [f.question, f.answer])];

function problems(p) {
  const out = [];
  const text = allText(p).join("\n");
  const badLinks = [...text.matchAll(/\]\(([^)]+)\)/g)].map((m) => m[1]).filter((h) => !allowedHrefs.has(h));
  if (badLinks.length) out.push(`it links to pages that are not on the allowed list: ${badLinks.join(", ")}`);
  if (/[—–]/.test(text)) out.push("it uses em or en dashes");
  if (/!/.test(text.replace(/\]\([^)]*\)/g, ""))) out.push("it uses exclamation marks");
  const stock = text.match(STOCK);
  if (stock) out.push(`it uses the stock phrase "${stock[0]}"`);
  const words = text.split(/\s+/).length;
  if (words < 900) out.push(`it is too short (${words} words); answer the searches more fully`);
  if (!new RegExp(topic.focusKeyword.split(" ").slice(0, 3).join(" "), "i").test(p.title + " " + p.sections[0]?.paragraphs.join(" ")))
    out.push("the focus keyword is missing from the title and opening");
  return out;
}

let { post, raw } = await draft();
for (let i = 0; i < 2; i++) {
  const issues = problems(post);
  if (!issues.length) break;
  console.log(`Rewrite ${i + 1}: ${issues.join("; ")}`);
  ({ post, raw } = await draft([
    { role: "assistant", content: raw },
    { role: "user", content: `Fix these and return the full post again: ${issues.join("; ")}.` },
  ]));
}
const remaining = problems(post);

// Last-resort cleanup so a bad link or dash never ships even if the model kept it.
const fixLinks = (s) => s.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (m, t, h) => (allowedHrefs.has(h) ? m : t)).replace(/\s*[—–]\s*/g, ", ");
const clean = (s) => fixLinks(s).trim();

// ---------- build the BlogPost ----------
const today = new Date(Date.now() + 5.5 * 36e5).toISOString().slice(0, 10); // IST
let slug = post.slug.toLowerCase().replace(/[^a-z0-9-]+/g, "-").replace(/^-|-$/g, "");
if (existingPosts.some((p) => p.slug === slug)) slug = `${slug}-${today}`;
const sections = post.sections.map((s) => ({
  ...(s.heading ? { heading: clean(s.heading) } : {}),
  paragraphs: s.paragraphs.map(clean),
  ...(s.points.length ? { points: s.points.map(clean) } : {}),
}));
const wordCount = allText(post).join(" ").split(/\s+/).length;
const blogPost = {
  slug,
  title: clean(post.title),
  excerpt: clean(post.excerpt),
  category: category.name,
  author: "Marketix Studio",
  date: today,
  readTime: `${Math.max(3, Math.round(wordCount / 220))} min read`,
  metaTitle: clean(post.metaTitle),
  metaDescription: clean(post.metaDescription),
  focusKeyword: topic.focusKeyword,
  secondaryKeywords: post.secondaryKeywords,
  sections,
  faqs: post.faqs.map((f) => ({ question: clean(f.question), answer: clean(f.answer) })),
};

// Every number in the post, for the reviewer to confirm (CLAUDE.md: never fabricate).
const numbers = [...new Set(allText(blogPost).flatMap((s) => s.split(/(?<=[.?])\s+/)).filter((s) => /\d|₹|\blakh\b|\bcrore\b/i.test(s)))];

const prBody = `Daily blog draft for **${category.name}**: "${blogPost.title}"

Focus keyword: \`${topic.focusKeyword}\`
Real searches it answers: ${topic.searches.map((s) => `\`${s}\``).join(", ")}
${wordCount} words · ${blogPost.readTime} · model ${MODEL}

**Before merging, please check:**
- [ ] It reads well and is correct for our clients
- [ ] The title and headings read naturally (searches are often typed ungrammatically, e.g. "cost" for "costs")
- [ ] To fix wording, edit `content/blog-posts/${slug}.json` in this PR (pencil icon on the Files tab)
- [ ] Every sentence with a number below is true or clearly labelled as an example
- [ ] Open the Vercel preview link below and look at /blog/${slug}

${numbers.length ? `**Sentences with numbers (${numbers.length}):**\n${numbers.map((n) => `- ${n}`).join("\n")}` : "No numbers in this post."}
${remaining.length ? `\n**Automatic checks still flagging:** ${remaining.join("; ")}` : ""}

Merge to publish. Close without merging to skip this topic.

<!-- topic-id: ${topic.id} -->`;

if (DRY) {
  console.log(JSON.stringify(blogPost, null, 2));
  console.log("\n----- PR body -----\n" + prBody);
  process.exit(0);
}

writeFileSync(join(ROOT, `content/blog-posts/${slug}.json`), JSON.stringify(blogPost, null, 2) + "\n");
const files = readdirSync(join(ROOT, "content/blog-posts")).filter((f) => f.endsWith(".json")).sort();
const ident = (f) => "p_" + f.replace(/\.json$/, "").replace(/[^a-z0-9]/gi, "_");
writeFileSync(
  join(ROOT, "content/blog-posts/index.ts"),
  `// Generated by scripts/blog/draft-post.mjs. Each daily post is a JSON file in this folder.
import type { BlogPost } from "@/lib/content-types";
${files.map((f) => `import ${ident(f)} from "./${f}";`).join("\n")}

export const generatedPosts: BlogPost[] = [${files.map((f) => `${ident(f)} as unknown as BlogPost`).join(", ")}];
`,
);
Object.assign(topic, { status: "drafted", slug, draftedOn: today });
writeFileSync(join(ROOT, "content/blog-queue.json"), JSON.stringify(queue, null, 2) + "\n");
if (process.env.PR_BODY_FILE) writeFileSync(process.env.PR_BODY_FILE, prBody);
if (process.env.GITHUB_OUTPUT) appendFileSync(process.env.GITHUB_OUTPUT, `slug=${slug}\ntitle=${blogPost.title.replace(/\n/g, " ")}\ntopic=${topic.id}\n`);
console.log(`Drafted ${slug} (${wordCount} words) for topic ${topic.id}`);
