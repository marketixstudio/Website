# Overnight redesign plan (started 2026-09-24)

The user asked (verbatim intent): after the usage limit resets, keep working automatically on
**all remaining pages** in the new design, while they sleep. Every page must be SEO, AEO and GEO
friendly, contain **no em dashes**, have **every button working**, and have **proper internal
linking**. "When I wake up make sure I see the best creative website that ever existed."

Read first, every run: `CLAUDE.md`, `design.md`, `docs/PROJECT_CONTEXT.md`, then this file.
Pick up at the first unticked item in **Progress**. Tick items as you finish them and append a
line to the **Log**. Never redo ticked work.

Safety net: a full snapshot (minus node_modules/.next) is at
`/Users/mac15/Marketix/MARKETIX WEBSITE BACKUP 2026-09-24/`. Don't touch it.

---

## The creative bar

"Best creative website" means *designed*, not decorated. The user rejected: Vistrow look-alikes,
text-heavy editorial ledgers, gold accents, react-bits overuse, AI-generic layouts. They asked for:
containers, visuals, interaction, the live site's violet-neon-on-carbon feel.

For every page:
- **One signature centrepiece** built for that page's job, like the Google Ads search-journey
  diagram or the live review page on Local SEO. Examples: an industries page with a funnel
  diagram specific to that sector; a location page with a hand-built SVG map of the areas served;
  the work index as a filterable grid of real case-study cards; the approach page as an
  interactive step timeline; contact with a clear three-route chooser (call, WhatsApp, form).
  Hand-built SVG/CSS only. No stock imagery, no redrawn browser or phone chrome.
- **One orchestrated entrance per page** (design.md), plus at most two FillHeadings. Hover and
  focus states on every card and link (glow only on hover/focus).
- Containers: `.mx-card` surfaces, varied grid rhythm (unequal columns, a large lead card),
  never three identical cards in a row as the only layout.
- Real proof only: testimonials on case studies only, client logos from `content/testimonials.ts`
  `clientLogos`, "metric to confirm" placeholders (`.mx-todo`) where numbers are missing.
- Run Hallmark's slop test (`.claude/skills/hallmark/references/slop-test.md`) on each page.
  Fix every failing gate before ticking the page.

## Non-negotiable rules

1. **Honest content.** Never invent metrics, clients, testimonials, prices, awards or results.
2. **No em dashes** (—) or en dashes used as dashes (–), and no spaced hyphen used as a dash
   (" - ") in any visible copy, metadata, alt text or JSON-LD. Rewrite with a comma, colon, full
   stop or brackets. Code comments may keep them. Check with:
   `/usr/bin/grep -rn -e "—" -e "–" -e " - " app content components lib --include='*.ts' --include='*.tsx'`
   and judge each hit (" - " inside code expressions is fine).
3. **Service pages share one hero**: `components/v2/service-hero.tsx`. No testimonials on service
   pages. No "Tools" anywhere in navigation.
4. **Every button and link must resolve.** No links to `/tools`, `/v2/...`, or any route that
   doesn't exist. Forms post to `/api/inquiries`.
5. **Design system**: `design.md` tokens and classes only (`mx-card`, `mx-cta`/`Cta`, `mx-link`/
   `TextLink`, `mx-pool`, `mx-todo`, `text-display`, `FillHeading`). Plus Jakarta Sans only. No
   gradient text, no eyebrows, no Aurora, no `transition-all`, no italic headings.
6. Don't: deploy, push, send email, install new packages, or change API keys/env. Removing unused
   dependencies (ogl/Aurora) is fine. Deleting obsolete Vistrow components is fine once nothing
   imports them (there's a backup).
7. Don't run `npm run build` while the dev server runs (corrupts `.next`). For a final build:
   stop the dev server, `rm -rf .next`, build, then restart the dev server.
8. After each page: `npx tsc --noEmit -p .`, then
   `export PATH="$HOME/.local/bin:$PATH"; graphify update .`.
9. The user's name for the 5-hour limit is "usage limit". If you are cut off, the next scheduled
   run continues from this file, so keep **Progress** accurate after every page.

## SEO / AEO / GEO checklist (every indexable page)

- `buildMetadata` with a unique title (≤ 60 chars) and description (≤ 155 chars), canonical
  path. No `robots: noindex` on real pages (only on /r/*, drafts, and the /tools pages).
- JSON-LD via `graph([...])`: `breadcrumbSchema` always; plus `serviceSchema` / `faqSchema` /
  `answerSchema` / Article / LocalBusiness as fits. The FAQ in schema must match visible FAQs.
- **AEO**: an `AnswerCard` near the top: the page's main question as an H2 and a direct
  40 to 60 word answer, plus key facts. Real FAQs (4 to 6) answered plainly.
- **GEO**: specific, quotable, factual sentences; consistent NAP from `lib/site-config.ts`;
  named places (Balewadi, Baner, Hinjewadi, Wakad, Pune, the metros, Dubai, London, the US);
  entity-rich copy about what Marketix does and for whom. No fluff superlatives.
- One H1. Logical H2/H3 order. Descriptive link text (never "click here").
- **Internal linking**: every page links to at least 3 relevant pages, in the body, not only in
  nav/footer: service ↔ related services ↔ industries it suits ↔ locations ↔ case studies.
  Every service, industry and location page must be reachable from at least one other body
  page. No orphans.
- Images: real assets, `alt` text, `next/image`.

---

## Progress

### Phase 1: Chrome and routing
- [x] `app/(site)/layout.tsx`: use `SiteNav` + `SiteFooter` from `components/v2/`, with a skip
      link and `<main id="main">`. Remove the old header, footer, announcement bar, theme
      toggle, scroll-progress bar and any Aurora background from the site layout.
- [x] Make `serviceHref()` in `components/v2/primitives.tsx` always return `/services/{slug}`.
- [x] Move the two finished v2 service pages to their real routes (`/services/google-ads-ppc`,
      `/services/local-seo-gmb`) as indexable pages. Remove `robots: noindex`. Remove the
      `(v2)` route group afterwards (fold `(v2)/layout.tsx` behaviour into the site layout).
- [x] Remove Aurora/ogl and other unused Vistrow components and dependencies. (Aurora is still
      imported by `components/sections/hero.tsx` on the home page: do this right after Home.)
- [x] `/tools` and `/tools/[slug]`: set `robots: noindex, nofollow`, don't link to them
      anywhere. (User hasn't decided whether to unpublish; don't delete.)

### Phase 2: Pages (redesign each in the new system)
- [x] Home `/`: hero in the atmospheric genre (static violet pool + grain), real client logos,
      services overview, industries, one case study, FAQ, answer block, CTA.
- [x] Services index `/services`
- [x] Service detail template `/services/[slug]` for all other services: shared `ServiceHero`,
      answer block, a centrepiece per service where one fits, related services, industries,
      FAQs, CTA. Content from `content/services.ts` (fix any invented claims you find).
- [x] Industries index `/industries`
- [x] Industry detail `/industries/[slug]`
- [x] Locations index `/locations`
- [x] Location detail `/locations/[slug]`
- [x] Work index `/work` (filterable grid; only published case studies)
- [x] Case study `/work/[slug]` (testimonial shown when `testimonialId` is set)
- [x] About `/about`
- [x] Approach `/approach`
- [x] Team `/team` (real people only; "photo to supply" placeholders where missing)
- [x] Contact `/contact` (call, WhatsApp, form; NAP; map link)
- [x] Growth audit `/growth-audit` (form works end to end against `/api/inquiries`)
- [x] GMB toolkit `/gmb-toolkit` (₹99, compare-at ₹999, from `content/products-catalog.ts`)
- [x] Pricing `/pricing` (flag invented tiers with `.mx-todo`; don't publish invented prices)
- [x] FAQ `/faq`
- [x] Testimonials `/testimonials` (real three only)
- [x] Careers `/careers`, Partners `/partners`
- [x] Blog `/blog` (no posts published: an honest "articles coming soon" state, noindex while
      empty, removed from the nav/footer until it has posts)
- [x] Legal pages (privacy, terms, refund, cookie, disclaimer): Long Document template,
      typography only
- [x] `not-found.tsx`: a designed 404 with links to services, work and contact

### Phase 3: Site-wide verification
- [x] Em-dash sweep across app/content/components/lib (rule 2). Zero visible hits.
- [x] Link and button crawl: write a small Node script in the scratchpad that fetches every
      URL in `/sitemap.xml` from the dev server, extracts every internal `href`, and requests
      each one. Every result must be 200 (or a deliberate 301). Fix every failure.
- [x] Orphan check: every sitemap URL is linked from at least one other page's body.
- [x] Metadata check: unique titles and descriptions, lengths within limits, one H1 per page.
- [x] Visual check in the browser pane at 375, 768 and 1280 on every page template: no
      horizontal scroll, no two-line clickable text, hero fits the 1280×800 fold.
- [x] `npx tsc --noEmit -p .` and `npm run lint` clean. Final `npm run build` (see rule 7).
- [x] Update `design.md`, `docs/PROJECT_CONTEXT.md` (what changed, what needs the user) and
      write a short morning summary at the top of the Log.
- [x] When everything above is ticked: delete the overnight cron job (CronDelete) so it stops.

---

## Log

## Morning summary (2026-09-24, ~07:00)

Every page on the site is rebuilt in the new design and verified. Nothing was deployed or pushed.

- 54 live URLs (sitemap): all return 200; all 56 unique internal links resolve; zero em or en
  dashes in visible copy; exactly one H1 per page; every title <= 60 chars and unique; every
  description 50 to 160 chars; no orphan pages; no horizontal scroll at 320, 375, 768 or 1280.
- `npm run build` passes (72 static pages). ESLint was never configured in this repo and
  `next lint` wants to install packages, so it was not run; `tsc` is clean.
- Each page has its own designed centrepiece (listed in design.md "Macrostructure family").
- Removed a large amount of invented content (prices, tiers, stats, timelines, policies,
  capability claims) and fixed factual errors (UAE week, India/UAE offset, US overlap).
- Vistrow leftovers removed: old header/footer/hero/Aurora and 20+ components, ogl, theme
  toggle, Vistrow services in the audit form, lime email colours, package name vistrow-web.

Decisions and inputs needed from you are collected in docs/PROJECT_CONTEXT.md section 10.

<!-- newest first: date/time, what was done, anything the user must decide -->
- 2026-09-24 (user request): Blog live with 3 posts in content/blog.ts (how-to-rank-higher-on-google-maps, real-estate-lead-generation-pune, break-even-roas-calculation). No invented stats; Google and MahaRERA facts linked to source; examples labelled. Blog structure taken from the Vistrow blog (reading progress, share row, contents list, key-point boxes, related posts, Article schema) and restyled; added per-post FAQ + FAQPage schema. New components/blog/blog-index.tsx (search + topic filters + featured). Removed Vistrow blog-hub/blog-explorer. Blog index now indexable and in the sitemap. Crawl: 58 pages, 0 problems. USER: author is 'Marketix Studio'; say if a named person should be credited (better for E-E-A-T).
- 2026-09-24 (user review): Nav now Services / Industries / About (dropdown: About us, Team, Approach, Case studies, Careers, Partners + featured case study) / Blog / Contact / Free audit. Case Studies moved under About; Blog added to nav and footer (blog index is still empty and noindexed until the first post).
- 2026-09-24 (user review): Footer rebuilt: CTA card + brand column + three short link columns + legal row (user: no giant statement, don't list every page). Newsletter copy no longer promises 'every week'.
- 2026-09-24 (user review): Home industries section rebuilt: heading row on top, even 4x2 grid (no orphan card), icon tile on every sector, 'Measured on' line per sector, hover border + arrow.
- 2026-09-24 (user review): Home hero rebuilt as the live site's composition (hero card + canvas wave field + wide left H1 + lede/CTA offset right). Removed the pill (user: 'AI slop'). DemandMap moved to its own section after the answer card.
- 2026-09-24 (user review): Typography and colour matched to the live site site-wide: headings 700 (was 800), tracking -0.01em (was -0.03 to -0.035em), roomier line-height, balanced wraps, heading colour #D8D5D9, emphasis phrases bright white (ink-hi) instead of violet, body weight 500. Gradients cut: FillHeading static, mx-pool at 0.08, glows removed from testimonials and about. Home hero centred with the live H1. Crawl: 54 pages, 0 problems.
- 2026-09-24 (user review): Added 5 real testimonials transcribed from the live homepage (UrbanRise Infra, Dostii Delight, Bingle India, Shree Saraswati Optics, Kleawip) to content/testimonials.ts; /work now shows 7 quotes in a 3-column glow grid. Per user: client logos are small local brands, so the marquee no longer sits after the hero; it is now a single quiet row after the case study ('Some of the businesses we work with').
- 2026-09-24 (user review): Home 'Brands we've worked with' replaced with a two-row logo marquee (components/home/logo-marquee.tsx; pauses on hover, static for reduced motion). 'Everything between a search and a sale' rebuilt as a 2x2 grid with live-site-style icon tiles on every service (.mx-icon-tile) and a violet corner glow on each card (.mx-glow, per user request). New CSS utilities in globals.css: .mx-glow, .mx-glow--tl, .mx-icon-tile, .mx-marquee.
- 2026-09-24 07:00: Phase 3 done. Dash sweep (also emails, review tool messages, /tools copy), full crawl 0 problems 0 orphans, responsive sweep 110/110 clean, production build passes. Fixed llms.txt (invented pricing and account-ownership facts, 'Certified' Google Ads claim, links to hidden /tools, empty sections, 'United States, United States'), removed Google Ads 'from Rs 35,000' pricing and US '$20 CPC' stats from content, rebranded enquiry emails to violet with the real monogram and fixed 'Visit marketix.com'. Plan complete; overnight cron removed.
- 2026-09-24 06:35: Blog (honest empty state, noindex + out of the sitemap until the first post; switches to the post list automatically), legal Long Document template (sticky contents, typography only), designed 404 with routes back in (root app/not-found.tsx so unmatched URLs get the site chrome) done. USER: legal pages were cloned from Vistrow and need your legal review: the privacy policy mentions a 'site chat' and storing 'theme and accent colour' (neither exists on this site) and several pages mention 'automation' results. Old WordPress URLs like /hello-world and /category/blog still 301 to /blog, which is noindexed while empty.
- 2026-09-24 06:15: FAQ rebuilt (FaqExplorer: live search + topic filters) with honest answers; removed invented retainer range, 3-month minimum, 30-day notice, ad budget minimums, weekly updates/live dashboard, account ownership, exclusivity, 'a third international', language claims. /testimonials now 308-redirects to /work (all quotes live on the case studies hub; removed from sitemap, nav, llms.txt). Careers and Partners rebuilt without invented perks or programmes ('remote-first', white-label, Vistrow automation/product roles).
- 2026-09-24 05:55: Pricing rebuilt with NO invented prices. The old page's three tiers (Rs 25k / 65k / 1.2L+), minimum ad spends, feature lists and 'no setup fee' were invented and are gone. New centrepiece: ScopeBuilder (pick services, see what each covers, send that scope on WhatsApp or book the audit). Only public price: the Rs 99 toolkit. USER: if you want published package prices, send them and they can be added.
- 2026-09-24 05:40: GMB toolkit rebuilt (buy card in the hero, contents board with the real counts from the live page, StepRail, answer, FAQ, link to the local SEO service). Fixed 'Six components' (there are nine), removed 'working material our own team opens' and 'Lifetime updates' (unsourced), dashes. Buy button restyled; checkout NOT clicked (payment). USER: confirm 'no refunds once accessed' matches your refund policy.
- 2026-09-24 05:25: Growth audit rebuilt (what-the-audit-checks board beside the form). The audit form listed VISTROW services (AI Voice Calling, CRM & Lead Management, Custom SaaS, Automation): replaced with Marketix services; industries now match the 8 sectors; en-dash budgets now 'to'; transition-all removed; restyled buttons. Step validation verified; nothing submitted.
- 2026-09-24 05:05: Contact rebuilt (three-route chooser: call, WhatsApp with a prefilled message, form; office card with Google Maps link). Contact form restyled (mx-cta button, no eyebrow or glass), en-dash budget ranges now 'to', removed three 'reply within one business day' promises and the invented FAQ pricing. Validation verified in the browser; no real enquiry was sent.
- 2026-09-24 04:45: About (studio-at-a-glance board, every number counted from content), Approach (StepRail method, principles) and Team (founder lead card, real photos, Prakash as a 'photo to supply' placeholder) rebuilt with the new shared IndexHero. Removed invented claims from About: Rs 25k-1.5L retainers, flat-fee, category exclusivity, 90-day review, 'you own everything'. All 200, 0 dashes, no overflow at 320.
- 2026-09-24 04:15: Work index (featured study, real quotes from PIBM and ReviveUp, logo wall) and case study template (results with 'to confirm' blocks for TODO metrics, challenge, approach beside the live /r/jayganesh page, long read, Maruti Kalbhor quote, services and related links) done. Filter UI skipped: only one study is published. Removed the tools link, the unmeasured '~15s' and 'about fifteen seconds' claims, and renamed Jayganesh to Jay Ganesh in content/work.ts. USER: supply Jay Ganesh review counts, rating and measurement period; confirm the spelling on the /r/jayganesh page (content/review-clients.ts still says 'Jayganesh').
- 2026-09-24 03:40: Locations index (MarketBoard: all markets on one IST axis) and location template (components/v2/location-detail.tsx: AreaMap for Indian cities, HoursOverlap for international, computed from real UTC offsets) done. 13 pages 200, 0 dashes, titles <= 60, no overflow at 320. Fixed in content/locations.ts: invented retainer range Rs 25k-1.5L and 'flat retainer', budget minimums, 'native Arabic/Telugu/Gujarati writers, both of which we have', 'most active sub-market', CPC % stats, and FACTUAL ERRORS: UAE week is Mon-Fri (was Sun-Thu), India is 1.5h AHEAD of UAE (was 'behind'), US/Canada overlap is Indian evening = Eastern morning (was 'our mornings cover US afternoons'). USER: confirm you want all 12 location pages live, especially Australia/Canada/Singapore.
- 2026-09-24 02:55: Industries index (IndustryExplorer tabbed centrepiece) and industry template (components/v2/industry-detail.tsx: shared hero with sector labels, challenges, Funnel centrepiece, services, case study or work link, location chips, FAQ) done. All 9 pages 200, 0 dashes, titles <= 60, no overflow at 320. Removed invented claims from content/industries.ts: cost per site visit Rs 3-8k, Rs 2 lakh/$3,000 minimums, 'most common among our clients', 'migrated several brands', OTA commission %, exclusivity policy, 'we have run it before'.
- 2026-09-24 02:20: Service template rebuilt (components/v2/service-detail.tsx: ServiceHero, answer, problem, StepRail centrepiece, included + platforms, related services/industries, FAQ). All 11 pages 200, 0 dashes, titles <= 60. Deleted all 13 invented `outcomes` stat blocks (4.2x ROAS, -38% CPL etc.) and rewrote invented claims in content/services.ts: minimum budgets, delivery timelines, '72 hours', open-rate and conversion-rate stats, WhatsApp prices, 'we inherit/audit' claims.
- 2026-09-24 01:50: Services index rebuilt with a goal-based ServiceFinder centrepiece. Rewrote servicesOverview copy (removed invented: sub-2s load times, 'a third of work is international', 3-month minimum, flat retainer, 'highest open rate'). buildMetadata now skips the brand suffix when a title already names the brand; shortened titles/descriptions on home and both service pages. Checker script: scratchpad check.py (links, dashes, H1, title/desc length).
- 2026-09-24 01:15: Home rebuilt (DemandMap hero centrepiece, real logos, answer block, services/industries/case study/locations, honest FAQ). Removed invented pricing (Rs 25k to 1.5L), 3-month minimum and 90-day review claims. 42/42 links 200, 0 dashes, 1 H1, no overflow at 320/375/768. Deleted 20 unused Vistrow components (old header/footer/hero/Aurora/CountUp/theme toggle), uninstalled ogl, removed the light-theme script (site is dark-only).
- 2026-09-24 00:50: /tools pages set to noindex, nofollow (already out of nav and sitemap).
- 2026-09-24 00:45: Phase 1 steps 1-3 done. Site layout now uses SiteNav/SiteFooter; Google Ads and Local SEO pages live at /services/*, indexable; /v2 removed (404). Claude Code restarted once at ~00:40, killing the cron, caffeinate and the dev server; all re-armed.
- 2026-09-24: Plan written. Backup taken. Nav, logo, mobile drawer, two service pages done.
- 2026-09-25 (user request): 8 Pune neighbourhood pages at /locations/pune/<area> (content/pune-areas.ts, components/v2/pune-area-detail.tsx, route app/(site)/locations/[slug]/[area]). Each: ServiceHero, answer block, neighbourhood profile beside the AreaMap, labelled example searches, 4 focus services, other areas, FAQ. Schema: breadcrumb (Home > Locations > Pune > Area), ProfessionalService with areaServed, answer, FAQPage. Linked from the Pune page (new neighbourhoods grid), the locations index, sitemap and llms.txt. Titles differ from Vistrow's (Agency/Company/Services variants), all <= 60 with suffix. Crawl: 65 pages, 0 problems, 0 orphans; no overflow at 360/768. USER: note both brands now target these terms; if you prefer, point Vistrow's area pages at automation instead.
- 2026-09-25 (user request): 4 more Pune areas (Pimple Saudagar, Viman Nagar, Hadapsar, Koregaon Park), 12 in total so the Pune page grid fills evenly. Crawl: 70 pages, 0 problems, 0 orphans; no overflow at 320/360/768.
- 2026-09-25 (user request): Newsletter moved into the footer CTA card (right half, divider), removed from the brand column.
- 2026-09-25 (user request): Floating WhatsApp widget, bottom left on every site page (components/v2/whatsapp-float.tsx, mounted in the (site) layout and app/not-found.tsx). Gentle idle float (motion-safe only, pauses on hover); click opens a chat card with office hours, quick topics (audit, Google Ads, Meta ads, SEO and Google Maps, website) each with its own prefilled message, and a free-text box that opens WhatsApp with what was typed. Escape and outside click close; focus returns to the button. User asked for NO page URL in the message. Uses WhatsApp green (#25D366 / #075E54) as the one exception to the violet palette, for recognisability.
- 2026-09-25 (user request): AI chat assistant "Mira", bottom right on every site page (components/v2/chat-widget.tsx, app/api/chat/route.ts, lib/chat-knowledge.ts; avatar public/brand/assistant-avatar.webp from the user). Structure cloned from the Vistrow assistant (topics, suggested questions, link chips, typing state, lead capture emailed via Resend), restyled to design.md and written for Marketix. Uses Claude (claude-sonnet-5) through the existing ANTHROPIC_API_KEY with a forced tool call for structured replies; answers only from the site's own content (about 2.6k tokens), links whitelisted to 64 real pages, no invented prices or results, dashes stripped. Always labelled "AI assistant", never presented as a person. Without the key it replies "not switched on yet" with WhatsApp and Contact links (verified). USER: add ANTHROPIC_API_KEY (and RESEND_* for chat leads) in .env.local / Vercel to switch it on; confirm the name "Mira".

- 2026-09-25 (user has an OpenAI key): new lib/ai.ts runs the review drafts and Mira on OpenAI (gpt-4o-mini, override with OPENAI_MODEL) when OPENAI_API_KEY is set, otherwise Claude (claude-sonnet-5, override with ANTHROPIC_MODEL). OpenAI over REST, no new package. The review route's old model id "claude-opus-5" was replaced by the shared default. .env.local created with blank slots for the user to fill; both routes return a clean "not switched on" message while blank (verified).
- 2026-09-25: User added OPENAI_API_KEY. Verified live: Mira answers pricing honestly with /pricing and /growth-audit links, asks for name and phone on buying intent; review drafts match the rating (5-star positive, 2-star genuinely mixed). Chat lead emails still need RESEND_API_KEY + CONTACT_FROM_EMAIL.
- 2026-09-25 (user confirmed): spelling is "Jay Ganesh". Fixed businessName in content/review-clients.ts (shown on /r/jayganesh and used in AI review drafts). URL slugs unchanged.
- 2026-09-25 (user request): assistant renamed from Mira to "Shalz" with a new avatar (public/brand/assistant-shalz.webp; old avatar removed). Name and avatar live in lib/site-config.ts `assistant`.
- 2026-09-25 (user request): Light/dark switch in the header (components/v2/theme-toggle.tsx; desktop pill before Free audit, mobile bar from 360px up, and in the drawer footer for smaller phones) plus a floating, draggable accent colour picker cloned from Vistrow's (components/v2/accent-switcher.tsx: Violet brand default, Blue, Teal, Orange, Pink, Gold; snaps to a side edge, remembers position, stays clear of header and bottom-corner buttons). Choices saved in localStorage and applied before paint (lib/theme.ts themeScript in app/layout.tsx). Site still ships dark by default. Accent tokens in globals.css [data-accent]; hero WaveField follows accent and theme; menu button and chat bubble use --accent-ink.
- 2026-09-25 (user supplied Favicon.zip): full logo lockups for dark and light. Tab icon made from the violet mark (app/icon.png 512, app/favicon.ico 16/32/48) since the full lockup is unreadable at tab size; light-mode header logo is now the user's "Light mode.png" (cropped). FIXED: app/apple-icon.png was VISTROW's lime V logo; now the Marketix mark on carbon. Originals kept in scratchpad/favicon/old.

- 2026-09-26: Resend live (domain verified, key in .env.local). New branded email templates in lib/emails.ts (lead, visitor confirmation, Shalz chat lead, newsletter), used by /api/inquiries and /api/chat; dev preview at /api/dev/email-preview. Removed false 'Remote-first' footer, the 'reply within one business day' promise and Vistrow CRM wording. Leads go to CONTACT_TO_EMAIL=marketixstudio@gmail.com,abhighadge1509@gmail.com (comma list supported). Cards now neutral #0E0E0E/#1F1F1F with #282828 border and no violet corner glow (user request). Email logo loads from marketixstudio.com, so it shows after launch.
- 2026-09-26: Email logo now embedded as an inline CID attachment (lib/email-logo.ts, emailAttachments) so it shows before launch. Address: user confirmed Balewadi High Street is kept but must not be repeated (GBP is a Pune service-area listing). Removed all 'our office on Balewadi High Street / visit / meet in person' claims from the 12 Pune area pages and from emails; address stays in footer and contact page only. TODO: same clean-up on home hero label, about, team, faq, careers, locations, llms.txt, chat knowledge.
- 2026-09-26: Email buttons: WhatsApp = official green #25D366 with embedded white WhatsApp icon (cid:wa-icon, public/brand/whatsapp-white.png for preview); Call = violet gradient with solid fallback. Test sent to abhighadge1509@gmail.com.
- 2026-09-26 (user): visitor confirmation email no longer shows the 1-2-3 process. Now: thank-you, WhatsApp/Call buttons, (audit) 'reply with these to start sooner' checklist, copy of their message, 'While you wait' links to the Jay Ganesh case study and the Google Maps guide.
- 2026-09-26: Cards now use values read from the live site's CSS: radial-gradient(at 0% 0%, #1F1F1F, #0E0E0E 60%), 1px #1F1F1F border, page #040404; violet glow border on hover/focus (0 0 10px rgba(200,42,239,.44)).
- 2026-09-26 (user): card glow now follows the cursor (components/v2/card-spotlight.tsx sets --mx-x/--mx-y; globals.css .mx-card::after lit border ring 420px, ::before outer glow 380px blur 14px), widened on request; touch screens skip it; keyboard focus shows a full violet border. Chat panel now uses .mx-card too (live gradient + cursor glow border), overflow-hidden removed so the glow isn't clipped. Featured case study cards use overflow-clip with a 24px clip margin.
- 2026-09-26 (user): headings use the live-site silver fade (h1, text-h2, text-display: linear-gradient 322deg to #D1D1D1 at 70%, 18% floor), normal letter spacing, 1.2 line height. Visible breadcrumbs on all inner pages (components/v2/breadcrumbs.tsx; same list as BreadcrumbList schema; Home violet underlined). Mega menu panels opt out of the cursor glow (data-no-spot). Crawl 70 pages, 0 problems.
- 2026-09-26 (user): Spinning 3D Earth (cobe 2.0.1, MIT, 5.9k stars, 19 KB, vetted) replaces the schematic AreaMap on Pune area pages and Indian city pages (components/v2/globe.tsx: Pune marker, arc from Pune to other cities, drag to spin, pauses off-screen, theme/accent aware). Full-width layout like the live site: container max 1880px with 16-24px side padding; desktop header is a full-width bar (logo / centred menu / actions).
- 2026-09-26 (user): only header and home hero are wide (.container-wide, max 1880, 16-24px padding); content sections use .container-edge (max 1320, padding 20/40/64/80px) like the live site.
- 2026-09-26 (user rule): say 'Pune' everywhere; the full Balewadi High Street address appears ONLY in the footer and on the contact page (incl. its map link and FAQ). Updated home (hero label, answer, FAQ, markets section), about, team, careers, faq, locations (office card now 'Based in Pune' + contact link; 'not a virtual address' claim removed), local SEO page, blog author note, Pune area CTA, Shalz prompt and knowledge, llms.txt. Fixed /locations/* 500: coordinates moved to lib/geo.ts (server/client safe). Crawl 70 pages, 0 problems.
- 2026-09-26 (user): Location zoom (components/v2/zoom-journey.tsx): Earth (cobe globe eases to face the city) -> Maharashtra outline (lib/maharashtra.ts, Natural Earth 10m admin-1, public domain, simplified to 604 points, 8 KB; source file deleted) with Pune and Mumbai -> the Pune neighbourhood with nearby areas at approximate positions (lib/pune-places.ts, labelled approximate). Plays once in view, chips jump between steps, replay button, reduced motion shows the last step. Used on all 12 Pune area pages, Pune and Mumbai; other cities keep the globe with an arc from Pune.
- 2026-09-26 (user): Pune step of the zoom is now a real street map: MapLibre GL 6.11.2 (BSD-3, 11.7k stars) + OpenFreeMap tiles (free, no key, OSM data; dark style / positron in light mode), loaded with next/dynamic only when the Pune step is reached; cooperative gestures so the page still scrolls; SVG diagram kept as the fallback if WebGL fails. Worker served from public/vendor/maplibre (copied by scripts/copy-maplibre-worker.mjs, run on postinstall). Visitor step choice now stops auto-play.
- 2026-09-26 (user: too slow): removed the zoom and street map entirely (zoom-journey, pune-street-map, lib/maharashtra.ts, lib/pune-places.ts, maplibre-gl, worker files, postinstall script). Location pages keep only the spinning globe (AreaGlobe). Cleared .next and temp files.
- 2026-09-26 (user): footer shows 'Pune, Maharashtra'; the full Balewadi address is now on the contact page only. Home/About key facts say 'Based in Pune'.
- 2026-09-26 (user): Shalz never mentions Balewadi: Balewadi area page left out of lib/chat-knowledge.ts and a location rule added to the prompt (say Pune; address is on the contact page). Tested live.
- 2026-09-26 (user): home hero background is now React Bits WebThreads (components/ui/bits/WebThreads.tsx from reactbits.dev registry; ogl 1.0.11, Unlicense, 4.6k stars) via components/home/hero-threads.tsx: user's settings, colours = current accent + #E7B6F7 + white, light mode aware; dpr capped 1.5, reduced motion = still frame, pauses off-screen. Old WaveField canvas removed.
- 2026-09-26 (user: text merging, mobile messed up): hero threads brightness 0.5; desktop radial shades behind headline (top-left) and lede (bottom-right); phones/tablets: threads at 45% opacity plus an even vertical shade. Checked at 375 and 1440.
- 2026-09-26 (user): mobile hero threads brighter (70% opacity, lighter shade 45/60/78%).
- 2026-09-26 (user): electric monogram (React Bits ElectricLogo from the official registry, components/ui/bits/ElectricLogo.tsx; wrapper components/v2/electric-monogram.tsx with the user's settings; image public/brand/marketix-monogram.png from the user's monogram) on the About hero, Contact hero (IndexHero 'visual' prop), 404 page, and the footer CTA card (large screens only, keeps phones light). Pauses off-screen, respects reduced motion.
- 2026-09-26 (user: square border visible): electric monogram wrapper now uses dark:mix-blend-screen plus a radial edge mask so the canvas box never shows; footer monogram scale 0.6 so the fade doesn't clip it.
- 2026-09-26 (user): GlareHover-style shine built into .mx-card (white 30%, -30deg, 300%, 800ms; light mode faint ink; excluded: nav panels, chat panel via data-no-glare; reduced motion no sweep). Team page: one equal 3-column grid for all 6 members (founder included). Home client strip now React Bits LogoLoop (components/ui/bits/LogoLoop.tsx; wrapper components/home/client-logo-loop.tsx; speed 120, stop + scale on hover, faded edges in page bg); old logo-marquee.tsx removed. NOT yet visually checked in browser: logo loop + glare (renders 24 items).
- 2026-09-26 (user): no glow/glare on the client logo strip chips (data-no-spot).
- 2026-09-26 (user): removed unused marquee CSS (.logo-marquee*, .mx-marquee*, both keyframes).
- 2026-09-26 (user): Balewadi removed from other pages: nearby lists (Baner, Aundh, Hinjewadi, Wakad, Pune city), other-area chips on area pages, Locations chips, Pune FAQ, blog sentence (now Baner and Aundh). Balewadi page kept, linked only from the Pune page grid; its H1 now 'Digital marketing agency in Balewadi'. Full address remains only on /contact.
- 2026-09-26 (user): glare is opt-in (.mx-card.mx-glare), used only on team member cards. Every main pill button (Cta) wrapped in React Bits Magnet (components/ui/bits/Magnet.tsx, padding 50, strength 50; local speed fix: state only updates near the cursor; off on touch and reduced motion). Verified: moves toward cursor, resets on leave.
- 2026-09-26 (user): magnet strength 10 (about 10 to 15px pull).
- 2026-09-27 (user): team cards are now React Bits ChromaGrid (components/ui/bits/ChromaGrid.tsx; local changes: responsive 1/2/3 columns, 4:5 photos, stacked footer name / role + Pune / bio, colour border on hover, keyboard-accessible when linked). Violet-family shade per member; Prakash gets an initials image until his photo arrives. Uses existing gsap. Team .mx-glare cards removed.
- 2026-09-27 (user): /r review page star picker is now React Bits PeekRating (components/ui/bits/PeekRating.tsx; icons swapped to lucide-react instead of adding 2 Hugeicons packages), user's settings, but NO default rating (a preset would nudge the customer; Google review rules). Fixed: heading silver fade scoped to #main so /r pages keep solid headings (was near-invisible on white).
- 2026-09-27 (user): /r review page: stars pulled up (-mt-5) so PeekRating's tip room no longer leaves a gap; added a 'Powered by Marketix Studio' footer (light logo) with 'Want more Google reviews for your business?' pitch, Get a free growth audit button and case study link. Links open in a new tab and carry utm_source=review-page&utm_medium=referral&utm_campaign=<client slug>. Links point at www.marketixstudio.com, so they work fully once the new site is live.
- 2026-09-27 (user): review drafting rebuilt from a study of 118 recent Google reviews of the listing (4.9, 664 reviews; ~half were repetitive drafts from the old tool, left as they are). Per-draft random style (length sized to the customer's note, weighted short; varied opening; business name only 15% of the time; register), temperature 0.9, cliche + listing-template phrase ban, no city/keyword stuffing, no exclamation marks; no-repeat check (trigram overlap > 0.25 or same first 3 words vs last 25 drafts -> rewrite). Language detected server-side from the notes (Devanagari / romanised Marathi-Hindi kept untranslated / English) so the Pune location never pushes Marathi onto English notes. New 'What stood out?' chips from real praise (fast fitting, neat work, quality, reasonable rates, good discount, polite staff, good suggestions, lots of options); services list gains LED & Projector Lights, Dash Cam & Cameras, Coating & Protection. Language hint under the text box.
- 2026-09-27 (user): review replies + report. No emails (user: "just build something where I can see the reports"). /r/reports?key= : per business, period 7d / 30d / any month / all time; drafts written (+ stars chosen), "Post on Google" taps, new Google reviews + stars + average, replied %, waiting queue (draft, edit, post; lowest stars first), reply log, day/month chart. Counts in Upstash Redis REST (KV_REST_API_*; no package), day buckets 120 days + month buckets forever; local dev falls back to .data/ (gitignored). Daily Vercel cron 10:00 IST auto-posts 4-5 star replies (last 7 days, max 10/business), 1-3 stars never auto. Dry run unless GBP_AUTO_REPLY=on and called by Vercel Cron. Setup: docs/REVIEW_REPLIES.md.
- 2026-09-27 (user): review report sign-in with email + password (/r/login, lib/admin-auth.ts). npm run report-login writes REPORT_LOGINS (email:scrypt salt.hash) to .env.local; 30-day signed httpOnly cookie (HMAC with REVIEW_ADMIN_KEY), POST /r/logout, 5 tries / 15 min per IP. Private pages redirect to sign-in; APIs accept the session or the old ?key.
- 2026-09-27 (user: light mode felt off/undone): light-only refinements, dark untouched. Page bg #F7F6F9 with pure white cards (was white on white, no depth); --card-2 white so .mx-card has no grey corner smudge; soft two-layer shadow on light .mx-card; heading fade floor 0.62 in light (0.18 read as greyed-out text on white); dark-tuned black shadows (nav, megamenu, drawer, chat, WhatsApp, accent switcher) now get a light rgb(10 10 12 / .12-.16) twin with the original under dark:; hero threads in light use accent + accent-deep (pale pink/white threads washed out) at brightness 0.75.
- 2026-09-27 (user: service links looked like bullet points): new .mx-row / .mx-row-go (globals.css) on the home service group lists. Resting tile (bg 55% + 1px line), 56px min height, arrow in a 36px round button that fills with the accent on hover/focus and nudges 2px, accent border + 5% tint on hover, 0.985 press, focus ring, reduced-motion safe. Labels wrap (text-balance) instead of truncating.
- 2026-09-27 (user: apply to all pages): .mx-row on the remaining link lists (case study 'Services used', location 'Services in <city>'); every clickable card's bare arrow is now the round .mx-row-go, which fills when its .group card is hovered/focused (home industries, 404, contact options, industry + service related cards, service finder, Pune area cards, blog index + related posts, location area cards, link-card grid). Text links (mx-link 'Read the case study', footer lists) stay text by design.
- 2026-09-27 (user): footer link columns now compact row buttons (.mx-row--sm: 44px, 28px arrow button; 'All services' row in semibold), columns stack full width on phones (two across from sm). Desktop header gains 'Home' as the first link (active only on /); mobile drawer already had it.
- 2026-09-27 (user): mobile drawer on row buttons. Home/Blog/Contact = .mx-row; Services/Industries/About accordion headers = .mx-row summary with the chevron in .mx-row-go (named group/sec so it flips on open); links inside = .mx-row--sm. Current page: aria-current row gets accent border + tint (.mx-row[aria-current=page]).
- 2026-09-27 (user): assistant renamed from Shalz to "Riya" (same avatar, file renamed to public/brand/assistant-riya.webp). Name and avatar come from lib/site-config.ts assistant.
- 2026-09-27 (user: make the demand map interactive and working): components/home/demand-map.tsx. Channel cards are buttons (tap/hover/focus); active one types an example search (3 per channel, rotates), its connector brightens with a pulse (SVG animateMotion) travelling to Enquiry, others fade to 25%; Enquiry highlights the usual contact methods (Search: Call+Form, Social: WhatsApp+Form, Maps: Call+WhatsApp); caption (aria-live) says how that channel is tracked + link to its service page. Auto-cycles every 5.2s while in view until the visitor picks. Connectors measured from real card positions (ResizeObserver). Reduced motion: no typing, pulse or cycling. Entrance ink-in kept (page's one entrance).
- 2026-09-27 (user: 'if we don't hover make all 3 working'): demand map default is now all three channels live at once (each types its own examples on a staggered loop, a pulse on every connector, every contact method lit, general caption). Hover (mouse) / keyboard focus / tap (touch, tap again to release) follows one channel; leaving the whole diagram (not just the card) returns to all three, so the caption's service link stays reachable. Auto-cycling removed. Typing only runs while in view and lit.
- 2026-09-27 (user: are we ready with full SEO/AEO/GEO?): full audit of 70 sitemap pages: all 200, 1 canonical + 1 H1 each, no duplicate titles/descriptions, 0 broken internal links, og:image everywhere, /r/* noindex and out of sitemap. Fixed: QAPage (forum-only type, spam risk) -> plain Question entity in answerSchema; removed self-serving Review markup of own testimonials on /work and case studies (quotes stay visible); removed WebSite SearchAction (retired by Google, and /blog never read ?q=); cookie-policy + disclaimer descriptions lengthened; /content-marketing-seo now 301s to /services/content-marketing. All 29 live WordPress URLs checked: every one lands on a 200 page (max 2 hops). Open for launch: deploy, GA4 ID, Search Console + Bing verification and sitemap submit, update GBP website link.
- 2026-09-27 (user: site feels slow when clicking pages): measured. Dev server compiles each route on first visit (0.4-1.6s per route, 6s on a fresh start) and ships unminified JS without link prefetch; that is the slowness. Production build: pages served in 6-20ms, all static/SSG, 87KB shared JS, client-side page changes 80-520ms in a throttled background tab. Added npm run preview (builds to .next-preview via NEXT_DIST_DIR distDir, next start -p 3001) + launch config marketix-preview, safe alongside dev.
- 2026-09-27 (user: AEO/GEO from what people actually search, not 'Where is Marketix Studio based?'): researched ~5,800 Google autocomplete suggestions (India) per service, industry and Pune; kept buyer questions (docs/SEARCH_DEMAND.md). Rewrote FAQs on all 13 services + 8 industries (6 each, 75 new answers, strongest agency-centric ones kept), home (4 new: agency cost in India, worth it, how to choose, how long) and About (agency vs in-house replaces 'where based'); 6 answer blocks retuned to searched wording (Meta: 'Are Facebook and Instagram ads worth it?', Maps: 'How do I rank higher on Google Maps?', social, education, interior, automotive). Google Ads page now reads FAQs from content/services.ts. No invented prices: cost answers explain what drives the cost. Fixed stale fact: WhatsApp green tick is now a blue verified badge. FAQ schema = visible questions on every page.
- 2026-09-27 (user: add these FAQs to the Pune area pages): researched local Google autocomplete for all 12 areas (docs/SEARCH_DEMAND.md, Pune areas section). Area FAQs now mix agency-finding questions people search ('best digital marketing company in Hinjewadi', 'seo services in PCMC', website design) with each area's own economy (Pimple Saudagar clinics, Koregaon Park cafes and pubs, Hinjewadi/Wakad/Kharadi real estate and IT parks, Aundh salons, Balewadi gyms and restaurants, Kothrud schools and real estate). Dropped every 'How do we get started?/Can you work with us in X?' filler. Rewrote 4 older answers that were near copies across areas (Hadapsar SEO + residential, Viman Nagar and Baner cost), so no two areas share an answer over 30% trigram overlap.
