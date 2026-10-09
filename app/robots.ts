import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

/** API routes only. The private /r pages stay crawlable so crawlers can see their noindex tag. */
const disallow = ["/api/"];

/**
 * Everyone may crawl the marketing pages. AI search and assistant crawlers are named too, so
 * answer engines (ChatGPT, Claude, Perplexity, Gemini, Apple) can read and cite the site.
 */
const aiCrawlers = [
  "OAI-SearchBot",
  "GPTBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "Bingbot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow },
      ...aiCrawlers.map((userAgent) => ({ userAgent, allow: "/", disallow })),
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
