# Marketix Studio website — project context

The durable record of what has been decided, why, and what is still open.
Read this first in any new session. Code facts live in the code and in
`graphify-out/`; this file holds the decisions and history the code can't show.

Last updated: 2026-09-23

---

## 1. The business

- **Marketix Studio** — performance marketing agency, Pune. Tagline "Marketing That Clicks".
- NAP (must match Google Business Profile exactly): Balewadi High Street, Balewadi,
  Pune, Maharashtra 411045 · +91 90217 53876 · contact@marketixstudio.com
- Live site: https://marketixstudio.com — WordPress + Elementor on Hostinger (being replaced).
- Sister brand **Vistrow** (vistrow.com), same owner. Codebase at
  `/Users/mac15/BRANDS/VISTROW NEW WEBSITE`. This project was cloned from its architecture.
- Team (from live /team page): Abhishek Ghadge (Founder & CEO), Shalini Dhumal (Senior SEO
  Specialist), Sakshi Kshirsagar (Performance Marketing Lead), Chinmay Lohokare (Creative
  Director), Gururaj Dangare (Client Success Manager), Prakash Sharma (Social Media Manager).
- Real clients: Jay Ganesh Car Accessories (owner Maruti Kalbhor), PIBM (Pratibha Institute
  of Business Management), ReviveUp Drinks, Dostii Food Products, Kleawip, Urbanrise Infra,
  Bingle India, Shree Saraswati Optics (Phaltan).

## 2. The goal

Rebuild marketixstudio.com as a custom Next.js site that ranks in India and internationally
(SEO + AEO + GEO), feels creative and premium, and **does not look AI-generated or like Vistrow**.

## 3. Locked decisions (with why)

| Date | Decision | Why |
|---|---|---|
| 2026-09-22 | **Split keyword territory with Vistrow.** Marketix = performance marketing + creative for real estate / eCommerce / D2C, Pune + metros + international (UAE, UK, US, AU, CA, SG). Vistrow = AI automation + hyperlocal Pune micro-areas. | Both are Pune agencies; without a split they cannibalise each other's rankings. |
| 2026-09-22 | **Content in code, no CMS** (typed TS in `content/`, blog via `lib/blog.ts`). | User chose speed + zero monthly cost. `lib/blog.ts` keeps an async API so a CMS can be added later. |
| 2026-09-22 | **Sell the Google Maps Ranking Toolkit** via Razorpay (INR) + Stripe (USD) over REST (`app/api/checkout`). | Keep the existing revenue product. |
| 2026-09-22 | **Review tool is multi-tenant** at `/r/[client]`, config in `content/review-clients.ts`. Jay Ganesh = client #1 (was WordPress `/review/`). Noindexed. | Productise an asset a client already uses daily. |
| 2026-09-22 | Old WordPress URLs 301-redirect (`next.config.mjs`). | Preserve existing SEO equity. |
| 2026-09-23 | **Design system locked in `design.md`** (Hallmark study of the live site). | Build from the brand's real DNA, not Vistrow's or a catalog theme. |
| 2026-09-23 | Hero = static violet light pool + grain (no WebGL Aurora). | Aurora is a named AI-slop tell. |
| 2026-09-23 | Section labels ("◉ OUR CORE SERVICES") removed. | "Eyebrow on every section" is a named AI tell. |
| 2026-09-23 | Footer = statement + newsletter + compact links (no column footer). | Column footer is the "AI footer" fingerprint. |
| 2026-09-23 | **Unpublish the 6 blog posts** — they are Vistrow's articles (CRM, AI voice, automation). | Duplicate content with vistrow.com; breaks the keyword split. Keep the file, don't delete. |
| 2026-09-25 | **Light mode + accent picker added** (header toggle, floating palette). Site still ships dark by default. | User request. All UI must stay token-based so both themes and six accents work. |
| 2026-09-25 | **Keyword split partly reversed: Pune neighbourhood pages added** at `/locations/pune/<area>` (12: Balewadi, Baner, Aundh, Hinjewadi, Wakad, Pimpri Chinchwad, Pimple Saudagar, Kharadi, Viman Nagar, Hadapsar, Koregaon Park, Kothrud), content in `content/pune-areas.ts`. Titles worded differently from Vistrow's area pages but carrying the searched phrases. AI automation stays Vistrow's. | User request: rank for "digital marketing agency in Baner" style searches. Guard rails: each page written separately (doorway-page risk), no Vistrow copy, no invented results, example searches labelled. Both brands now compete for these terms. |

## 4. Directions the user REJECTED — don't repeat

1. **Copying Vistrow's sections/chrome.** "It should not look similar when someone scrolls both
   websites." Header, mega menu, breadcrumb, announcement bar, theme toggle, scroll-progress,
   page templates and blog were all Vistrow's.
2. **"Editorial ledger"** (hairline rules, numbered 01/02 rows, text-only). My recommendation;
   user: "too static… text heavy, not proper containers, visuals". Hallmark later named it
   *Specimen fall-through*.
3. **Gold/yellow as a structural accent.** "Don't use that yellow rainbow like colours." Gold is
   for star ratings only.
4. **Overusing react-bits.** "There are too many things we can use but don't use everything."
5. **Low-star/random GitHub tools.** User wants only highly-starred, proven repos.
6. **A different hero template per service page** (2026-09-24). "The services page hero section
   should be same and proper, not any random template." Every service page uses
   `components/v2/service-hero.tsx`; only the content changes.
7. **Testimonials on service pages** (2026-09-24). Client quotes go on the matching case study
   (`testimonialId` in `content/work.ts`), never on a service page.
8. **"Tools" in the header** (2026-09-24). "We don't have any tools right now." Header follows the
   market-standard agency order: Services ▾ · Industries ▾ · Case Studies · About · Contact ·
   Free audit. Tools also removed from the footers, the about page and the sitemap; the
   `/tools` pages still exist in `app/(site)/tools` and need a decision (unpublish or keep).

## 5. Working rules

- **Never fabricate.** No invented metrics, testimonials, clients, logos, prices or results.
  Unknown → "metric to confirm". This overrides every skill (incl. Taste-Skill's excluded
  `redesign-skill`, which tells the AI to invent "organic" numbers).
- Real screenshots in `<figure>` only — never hand-drawn browser/phone/dashboard chrome.
- Check `design.md` before any UI work. Run Hallmark's slop test before shipping.
- Vet any third-party tool before installing (licence, scripts, network calls, scope).
  Install project-scoped, never global.
- Dev gotchas: running `npm run build` while `npm run dev` is up corrupts `.next` →
  stop dev, `rm -rf .next`, restart. Every react-bits component needs `"use client"`.
- The shell aliases `grep` to ugrep; use `/usr/bin/grep` or Python for code searches.

## 6. Tooling installed (all project-scoped)

| Tool | Where | Notes |
|---|---|---|
| Hallmark (Nutlope, 29k★) | `.claude/skills/hallmark` | study / audit / redesign / 58-gate slop test |
| Taste-Skill (Leonxlnx, 89k★) | `.claude/skills/taste-skill` | main skill only; `redesign-skill` excluded |
| Graphify 0.9.66 (Graphify-Labs, 120k★) | `uv tool` + `.claude/skills/graphify` + hooks in `.claude/settings.json` | knowledge graph in `graphify-out/`; `graphify update .` after code changes |
| shadcn MCP | `.mcp.json` | registry `@react-bits` in `components.json` |
| react-bits | `components/ui/bits/` | CountUp, ScrollFloat, ScrollVelocity, Aurora (to be removed), SpotlightCard, LogoLoop |

Provenance of skills: `.claude/skills/SOURCES.md`.

## 7. Site map (59 routes, 79 static pages)

- `/` home · `/services` + 13 services · `/industries` + 8 · `/locations` + 12 (6 India, 6 intl)
- `/work` (case studies; Jay Ganesh live, 2 drafts hidden) · `/tools` + 4 (ROAS, ad budget,
  UTM, review-generator page) · `/gmb-toolkit` (checkout)
- Company: about, team, approach, pricing, faq, testimonials, contact, careers, partners,
  growth-audit · Legal: privacy, terms, refund, cookie, disclaimer · `/blog`
- `/r/[client]` review tool (outside the `(site)` route group — no chrome)
- `llms.txt`, `sitemap.xml`, `robots.txt`; JSON-LD schema on every page

## 8. Hallmark audit of the current build (2026-09-23): 9 critical · 8 major · 7 minor

Critical — AI nav (`header.tsx`, 100 % Vistrow) · AI footer (`footer.tsx`) · 33 pages on one
template (service/industry/location, 91–95 % Vistrow) · Aurora hero (`hero.tsx:22`) ·
gradient text (9 places) · Specimen fall-through (numbered 01/02 rows in 5 components) ·
floating orb blobs (3) · pure white · Vistrow blog content.

Major — 98 unsourced numeric claims (services.ts 41, pricing 17, industries 13, locations 10,
tools 9, hero dashboard 5) · 102 eyebrows + label-beside-heading (`answer-summary.tsx:29`) ·
54 scroll-fade wrappers · icon-tile 3-col grid (`services.tsx:73`) · glow-on-dark ·
48 glassmorphism uses (see-through mega menu) · fake analytics dashboard in hero ·
48 inline colours outside tokens.

Minor — transition-all ×17 · hover-scale · 6 low-contrast texts (white/25–40) · JS animations
ignore reduced-motion · identical section padding ×53 · " - " as a dash ×218 · zero-chroma greys.

**Found by the Graphify pass (2026-09-24), not yet fixed:**
- `vercel.json` still schedules Vistrow's daily cron `/api/cron/daily-blog` (06:00) — that
  route was deleted, so production would hit a 404 every day. Remove the `crons` block.
- `package.json` carries 5 dead Vistrow scripts (`studio:*`, `sanity:*`) and 6 dependencies
  nothing imports: `three`, `@react-three/fiber|drei|rapier`, `meshline`, `lenis`. Remove
  (needs the user's OK — it's a package change).
- `Reveal()` is the 6th-most-connected node in the graph (31 edges) — the code-level shape
  of the "scroll animation on everything" audit finding.

## 9. Status (2026-09-24 overnight rollout, see docs/REDESIGN_PLAN.md Log)

DONE: every page is on the new system. The (v2) preview group is gone; the site layout
uses SiteNav/SiteFooter. 54 sitemap URLs: all 200, every internal link resolves, zero
dashes, one H1 each, titles <= 60 chars, descriptions 50 to 160, unique, no orphans.
20+ Vistrow components deleted, ogl uninstalled, theme toggle and light-theme script gone.
Invented claims removed site-wide (all 13 service "outcomes" stat blocks, retainer ranges,
pricing tiers, minimum budgets, timelines, open-rate and CPC stats, exclusivity, notice
periods, "a third international", language capabilities, "15 seconds").
Factual fixes: UAE week is Mon to Fri; India is 1.5h ahead of UAE; US/Canada overlap is
the Indian evening (Eastern morning).

Next:
1. `git init` + first commit (recommended; the folder still has no history). Backup at
   `/Users/mac15/Marketix/MARKETIX WEBSITE BACKUP 2026-09-24/`.
2. Blog is live (3 posts). Keep publishing 2 to 4 posts a month on target searches.
3. Decide on the /tools pages (noindexed, unlinked, still reachable).
4. Deploy once the user has reviewed.

## 10. Waiting on the user

Confirmed by the user on 2026-10-09: all 12 location pages stay live; Bingle India gave
permission for the /demo/bingle-india page; go-ahead on the legal pages (the privacy policy's
provider list was corrected to what the site actually uses). A formal legal review is still
advisable before scaling paid traffic.

- Real creatives: 10 to 20 ads / social posts / reels + website screenshots (Chinmay).
- Jay Ganesh: review counts before/after, current rating, measurement period (the case study
  shows "result to confirm" blocks until then). Spelling
  confirmed 2026-09-25: "Jay Ganesh" everywhere (URL slug /r/jayganesh kept for printed QR codes).
- Prakash Sharma's photo (shown as a "PS" placeholder).
- Pricing: no prices are published. The ₹99 toolkit was taken off sale on 2026-10-09 (user:
  dropping the ebook plan for now); flip `onSale` in content/products-catalog.ts to sell it again.
  If you want package prices on /pricing, send them.
- API keys: OpenAI and Resend are live on Vercel (2026-10-08). Still missing: the GA4
  measurement ID (Razorpay/Stripe only needed if the toolkit goes back on sale).
- GMB toolkit claims "500+ businesses" and "rank in 30 days" were NOT carried over; need
  evidence first.
- Optional: a brand video for the hero.

## On-page SEO (Rank Math style), 2026-10-10

Every indexable page has one focus keyword in `lib/focus-keywords.ts` (plus one official
outside reference per page in `pageSources`). Templates use it for: the start of the title,
the meta description, a label above the H1 (hidden when the H1 already contains it), one
subheading (usually the FAQ heading), and the "Official guide" link in the answer card.
Scored with a Rank Math-style checker: average 89, most pages 90. The last 10 points are two
checks skipped on purpose: keyword in the URL (renaming live URLs costs ranking) and keyword
in image alt text (most pages have no images; alt text must describe the image, not repeat a
keyword). Contact, growth audit and blog index stay short by design.
