# Graph Report - MARKETIX WEBSITE  (2026-10-13)

## Corpus Check
- 187 files · ~153,482 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 5 file(s) not represented in the graph (top: (none) 2, .example 1, .ico 1)

## Summary
- 1155 nodes · 3074 edges · 63 communities (58 shown, 5 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 36 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `f50a5460`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- ElectricLogo.tsx
- app/not-found.tsx
- admin-auth.ts
- graph
- react
- review/route.ts
- services/page.tsx
- team/page.tsx
- components.json
- package.json
- compilerOptions
- review-report.ts
- accent-switcher.tsx
- design.md (locked design system)
- lucide-react
- CLAUDE.md (project instructions)
- README.md
- emails.ts
- growth-audit-form.tsx
- (site)/page.tsx
- review-autoreply.ts
- Positioning guardrail (Marketix vs Vistrow)
- Macrostructure family
- PROJECT_CONTEXT.md
- footer.tsx
- location-detail.tsx
- content-types.ts
- about/page.tsx
- work/page.tsx
- Accent violet #C82AEF
- vercel.json
- review-stats.ts
- next.config.mjs
- locations/page.tsx
- shadcn
- postcss.config.mjs
- next
- dependencies
- sitemap.ts
- tools/[slug]/page.tsx
- app/layout.tsx
- import-demo-site.py
- blog-post-page.tsx
- electric-monogram.tsx
- devDependencies
- Overnight redesign plan (started 2026-09-24)
- scripts
- work.ts
- Buyer questions by topic (as searched)
- AccentSwitcher
- globe.tsx
- tailwind.config.ts
- report-login.mjs
- structured-data.ts
- email-logo.ts
- review-clients.ts
- hasAdminAccess
- Google review replies and the review report
- nav.tsx
- marketixstudio.com DNS records
- seo.ts
- industries.ts
- Hero image prompts (Marketix Studio)

## God Nodes (most connected - your core abstractions)
1. `next` - 77 edges
2. `lucide-react` - 68 edges
3. `graph()` - 57 edges
4. `breadcrumbSchema()` - 54 edges
5. `faqSchema()` - 44 edges
6. `sentenceCase()` - 43 edges
7. `buildMetadata()` - 42 edges
8. `react` - 42 edges
9. `focusKeyword()` - 41 edges
10. `pageSource()` - 39 edges

## Surprising Connections (you probably didn't know these)
- `Phase 2: Pages (redesign each in the new system)` --references--> `ServiceHero()`  [INFERRED]
  docs/REDESIGN_PLAN.md → components/v2/service-hero.tsx
- `Non-negotiable rules` --references--> `FillHeading()`  [INFERRED]
  docs/REDESIGN_PLAN.md → components/v2/fill-heading.tsx
- `Phase 1: Chrome and routing` --references--> `SiteFooter()`  [INFERRED]
  docs/REDESIGN_PLAN.md → components/v2/footer.tsx
- `SEO / AEO / GEO checklist (every indexable page)` --references--> `AnswerCard()`  [INFERRED]
  docs/REDESIGN_PLAN.md → components/v2/primitives.tsx
- `SEO / AEO / GEO checklist (every indexable page)` --references--> `buildMetadata()`  [INFERRED]
  docs/REDESIGN_PLAN.md → lib/seo.ts

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **v2 pilot rebuild in new design system** — docs_project_context_v2_rebuild, design_map_diagram, design_quote_led, design_n5_floating_pill_nav, design_ft5_statement_footer [EXTRACTED 1.00]
- **Anti-AI-slop design decisions (Aurora, eyebrows, column footer removed)** — docs_project_context_aurora_removed, docs_project_context_eyebrows_removed, docs_project_context_statement_footer_decision, design_light_pool, design_section_labels_off, design_ft5_statement_footer [INFERRED 0.85]
- **Differentiation from sister brand Vistrow** — claude_not_like_vistrow_rule, design_positioning_guardrail, docs_project_context_keyword_territory_split, docs_project_context_unpublish_vistrow_blog, docs_project_context_rejected_vistrow_copy [INFERRED 0.85]

## Communities (63 total, 5 thin omitted)

### Community 0 - "ElectricLogo.tsx"
Cohesion: 0.09
Nodes (27): blurGrid(), blurLine(), ElectricLogo(), ElectricLogoProps, Focus, hexToRgb(), Point, Pulse (+19 more)

### Community 1 - "app/not-found.tsx"
Cohesion: 0.24
Nodes (6): metadata, CardSpotlight(), topics, waLink(), WhatsAppFloat(), onSubmit()

### Community 2 - "admin-auth.ts"
Cohesion: 0.17
Nodes (19): attempts, createFirstLogin(), signIn(), startSession(), LoginForm(), dynamic, metadata, Page() (+11 more)

### Community 3 - "graph"
Cohesion: 0.24
Nodes (36): Page(), Page(), Page(), revalidate, Page(), Page(), Page(), Page() (+28 more)

### Community 4 - "react"
Cohesion: 0.05
Nodes (30): BlogIndex(), Card, formatDate(), ExplorerItem, IndustryExplorer(), FILL_PATHS, LoaderPhase, LogoTraceLoaderProps (+22 more)

### Community 5 - "review/route.ts"
Cohesion: 0.16
Nodes (25): POST(), runtime, hits, pickStyle(), POST(), rateLimited(), recentReviews, remember() (+17 more)

### Community 6 - "services/page.tsx"
Cohesion: 0.18
Nodes (13): answer, metadata, framing, ind, Link2, serviceCards, ProcessPanel(), Step (+5 more)

### Community 7 - "team/page.tsx"
Cohesion: 0.14
Nodes (16): chromaItems, initials(), initialsImage(), metadata, Page(), shades, ChromaGrid(), ChromaGridProps (+8 more)

### Community 8 - "components.json"
Cohesion: 0.11
Nodes (18): aliases, components, hooks, lib, ui, utils, registries, @react-bits (+10 more)

### Community 9 - "package.json"
Cohesion: 0.17
Nodes (11): name, private, version, @anthropic-ai/sdk, autoprefixer, motion, postcss, @types/node (+3 more)

### Community 10 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 11 - "review-report.ts"
Cohesion: 0.14
Nodes (18): Chart(), chip(), dynamic, metadata, Page(), ReplyQueue(), Bar, buildReport() (+10 more)

### Community 12 - "accent-switcher.tsx"
Cohesion: 0.18
Nodes (14): HeroThreads(), toHex(), choose(), Bounds, DragState, Side, ThemeToggle(), toggle() (+6 more)

### Community 13 - "design.md (locked design system)"
Cohesion: 0.13
Nodes (17): design.md (locked design system), Atmospheric genre, CTA voice (dark pill + accent ring + arrow circle), Hallmark gate 22, Honest content rule (overrides every skill), Live-site elements not to carry over, No gradient text / accent on one word, Plus Jakarta Sans only typography (+9 more)

### Community 14 - "lucide-react"
Cohesion: 0.16
Nodes (11): countOf(), metadata, SummaryGroup, BuyButton(), Props, Window, Reveal(), RevealProps (+3 more)

### Community 15 - "CLAUDE.md (project instructions)"
Cohesion: 0.14
Nodes (15): .claude/CLAUDE.md (graphify skill pointer), graphify skill (/graphify trigger), CLAUDE.md (project instructions), graphify query/path/explain usage rules, grep aliased to ugrep gotcha, marketix-dev launch config (port 3000), npm run build while dev corrupts .next, No hand-drawn browser/phone/dashboard chrome (+7 more)

### Community 16 - "README.md"
Cohesion: 0.15
Nodes (14): Content in code, no CMS, lib/blog.ts async blog API, Multi-tenant review tool /r/[client], WordPress 301 redirects (next.config.mjs), Claude API client review generator (app/api/review), content/ typed TS content directory, Framer Motion, lucide-react icons (+6 more)

### Community 17 - "emails.ts"
Cohesion: 0.06
Nodes (71): clean(), getSystemPrompt(), IncomingMessage, isRateLimited(), POST(), replySchema, requestLog, runtime (+63 more)

### Community 18 - "growth-audit-form.tsx"
Cohesion: 0.07
Nodes (33): ContactForm(), Errors, isPhone(), nextSteps, services, Status, Field(), Input() (+25 more)

### Community 19 - "(site)/page.tsx"
Cohesion: 0.06
Nodes (36): answer, averageRating, bestAt, coreServices, delay(), faqs, metadata, pillars (+28 more)

### Community 20 - "review-autoreply.ts"
Cohesion: 0.17
Nodes (24): dynamic, GET(), maxDuration, runtime, GET(), runtime, POST(), runtime (+16 more)

### Community 21 - "Positioning guardrail (Marketix vs Vistrow)"
Cohesion: 0.22
Nodes (11): Must not look or read like Vistrow rule, Positioning guardrail (Marketix vs Vistrow), Keyword territory split with Vistrow, Marketix Studio, NAP (Balewadi High Street, Pune), Rejected: copying Vistrow sections/chrome, Rebuild goal: SEO + AEO + GEO, not AI-looking, Marketix team (+3 more)

### Community 22 - "Macrostructure family"
Cohesion: 0.20
Nodes (11): Ft5 Statement footer, Long Document macrostructure (blog, legal), Macrostructure family, Map / Diagram macrostructure (google-ads-ppc), N5 Floating pill nav, Quote-Led macrostructure (local-seo-gmb), Split Studio macrostructure, Jay Ganesh Car Accessories (Maruti Kalbhor) (+3 more)

### Community 23 - "PROJECT_CONTEXT.md"
Cohesion: 0.31
Nodes (9): Hallmark slop test before shipping UI, Never fabricate metrics/testimonials/clients rule, Design system locked decision, Rejected: Editorial ledger (Specimen fall-through), Google Maps Ranking Toolkit, Hallmark skill (Nutlope), Hallmark audit 2026-09-23 (9 critical, 8 major, 7 minor), Site map (59 routes, 79 static pages) (+1 more)

### Community 24 - "footer.tsx"
Cohesion: 0.15
Nodes (12): columns, group(), icons, SiteFooter(), NewsletterForm(), Status, footerNav, NavChild (+4 more)

### Community 25 - "location-detail.tsx"
Cohesion: 0.10
Nodes (26): answer, audiences, hero, metadata, hero, metadata, workGroups, FillHeading() (+18 more)

### Community 26 - "content-types.ts"
Cohesion: 0.11
Nodes (13): runtime, Feature, Outcome, Step, DigitalProduct, productList, BlogSection, CaseStudy (+5 more)

### Community 27 - "about/page.tsx"
Cohesion: 0.08
Nodes (43): answer, faqs, metadata, values, agreed, answer, faqs, metadata (+35 more)

### Community 28 - "work/page.tsx"
Cohesion: 0.19
Nodes (15): metadata, who, faqs, metadata, isTodo(), livePreview, Page(), Eyebrow() (+7 more)

### Community 29 - "Accent violet #C82AEF"
Cohesion: 0.33
Nodes (6): Card surface (radial gradient, 24px radius), Accent violet #C82AEF, Static violet light pool + grain, Neon ring (hover/focus only), Aurora hero removed (static light pool), Rejected: gold/yellow structural accent

### Community 30 - "vercel.json"
Cohesion: 0.33
Nodes (5): buildCommand, crons, framework, installCommand, $schema

### Community 31 - "review-stats.ts"
Cohesion: 0.19
Nodes (16): POST(), runtime, Counts, FILE, FileData, RawStats, readFile(), readStats() (+8 more)

### Community 33 - "locations/page.tsx"
Cohesion: 0.07
Nodes (27): answer, metadata, zones, dynamicParams, generateMetadata(), generateMetadata(), EASE, fmt() (+19 more)

### Community 36 - "next"
Cohesion: 0.18
Nodes (11): metadata, metadata, metadata, metadata, metadata, formatDate(), LegalPage(), slugify() (+3 more)

### Community 37 - "dependencies"
Cohesion: 0.18
Nodes (11): dependencies, @anthropic-ai/sdk, cobe, framer-motion, gsap, lucide-react, motion, next (+3 more)

### Community 38 - "sitemap.ts"
Cohesion: 0.18
Nodes (14): generateMetadata(), generateMetadata(), generateStaticParams(), Page(), revalidate, Entry, sitemap(), archivedVistrowPosts (+6 more)

### Community 39 - "tools/[slug]/page.tsx"
Cohesion: 0.07
Nodes (27): metadata, generateMetadata(), CtaBand(), Faq(), FeatureCards(), LinkCardGrid(), CtaLink, PageHero() (+19 more)

### Community 40 - "app/layout.tsx"
Cohesion: 0.22
Nodes (8): app_globals, jakarta, metadata, RootLayout(), viewport, GoogleAnalytics(), organizationSchema, websiteSchema

### Community 41 - "import-demo-site.py"
Cohesion: 0.22
Nodes (7): glob, os, pil, re, Imports a finished static website (plain HTML/CSS/JS + images) as a demo at…, shutil, sys

### Community 42 - "blog-post-page.tsx"
Cohesion: 0.36
Nodes (6): ReadingProgress(), ShareRow(), BlogPostPage(), headingId(), renderInlineLinks(), articleSchema()

### Community 43 - "electric-monogram.tsx"
Cohesion: 0.32
Nodes (6): NotFound(), routes, currentAccent(), ELECTRIC, ElectricMonogram(), AccentKey

### Community 44 - "devDependencies"
Cohesion: 0.25
Nodes (8): devDependencies, autoprefixer, postcss, tailwindcss, @types/node, @types/react, @types/react-dom, typescript

### Community 45 - "Overnight redesign plan (started 2026-09-24)"
Cohesion: 0.25
Nodes (7): Log, Morning summary (2026-09-24, ~07:00), Overnight redesign plan (started 2026-09-24), Phase 2: Pages (redesign each in the new system), Phase 3: Site-wide verification, Progress, The creative bar

### Community 46 - "scripts"
Cohesion: 0.29
Nodes (7): scripts, build, dev, lint, preview, report-login, start

### Community 47 - "work.ts"
Cohesion: 0.25
Nodes (5): caseStudyIndustries, caseStudyList, caseStudySlugs, publishedCaseStudySlugs, workOverview

### Community 48 - "Buyer questions by topic (as searched)"
Cohesion: 0.07
Nodes (26): automotive, branding-design, Buyer questions by topic (as searched), content-marketing, conversion-rate-optimisation, ecommerce-d2c, education, email-marketing-automation (+18 more)

### Community 49 - "AccentSwitcher"
Cohesion: 0.47
Nodes (8): AccentSwitcher(), begin(), finish(), move(), onMouseDown(), onTouchStart(), snap(), clamp()

### Community 50 - "globe.tsx"
Cohesion: 0.33
Nodes (7): facing(), Globe(), readColours(), cityCoords, LatLng, PUNE, cobe

### Community 52 - "report-login.mjs"
Cohesion: 0.25
Nodes (6): ref_node_crypto, ref_node_fs, ref_node_readline, email, kept, salt

### Community 53 - "structured-data.ts"
Cohesion: 0.20
Nodes (7): siteName, businessAddress, businessGeo, businessPhone, JsonLdValue, openingHoursSchema, serviceLocalities

### Community 56 - "review-clients.ts"
Cohesion: 0.20
Nodes (8): dynamic, metadata, Page(), ReplyHelper(), reviewClientList, reviewClients, reviewClientSlugs, ReviewClient

### Community 57 - "hasAdminAccess"
Cohesion: 0.21
Nodes (14): esc(), GET(), page(), runtime, GET(), runtime, hasAdminAccess(), exchangeCode() (+6 more)

### Community 58 - "Google review replies and the review report"
Cohesion: 0.33
Nodes (5): Google review replies and the review report, Rules the replies follow (lib/review-reply.ts), Setup, once, Signing in, What runs

### Community 60 - "nav.tsx"
Cohesion: 0.16
Nodes (13): LOGO, LOGO_LIGHT, Wordmark(), aboutLinks, aboutMatch, industriesNav, PanelId, plainLinks (+5 more)

### Community 61 - "marketixstudio.com DNS records"
Cohesion: 0.50
Nodes (3): If the zone has to be recreated at MilesWeb, marketixstudio.com DNS records, When the new site moves to Vercel

### Community 63 - "seo.ts"
Cohesion: 0.15
Nodes (8): aiCrawlers, disallow, CUSTOM_PAGES, generateMetadata(), BlogSeoImage, SeoMetadata, siteTagline, siteUrl

### Community 65 - "industries.ts"
Cohesion: 0.22
Nodes (6): generateMetadata(), industries, industriesOverview, industrySlugs, IndustryContent, OverviewContent

### Community 66 - "Hero image prompts (Marketix Studio)"
Cohesion: 0.25
Nodes (7): Format (same for every image), Hero image prompts (Marketix Studio), Industries, Locations, Negative prompt (if your tool supports one), Services, Style block (paste at the start of every prompt)

## Knowledge Gaps
- **393 isolated node(s):** `npx`, `metadata`, `answer`, `values`, `faqs` (+388 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 478 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `next` to `app/not-found.tsx`, `admin-auth.ts`, `graph`, `react`, `services/page.tsx`, `team/page.tsx`, `package.json`, `review-report.ts`, `lucide-react`, `emails.ts`, `growth-audit-form.tsx`, `(site)/page.tsx`, `footer.tsx`, `location-detail.tsx`, `content-types.ts`, `about/page.tsx`, `work/page.tsx`, `locations/page.tsx`, `sitemap.ts`, `tools/[slug]/page.tsx`, `app/layout.tsx`, `blog-post-page.tsx`, `electric-monogram.tsx`, `review-clients.ts`, `nav.tsx`, `seo.ts`, `industries.ts`?**
  _High betweenness centrality (0.226) - this node is a cross-community bridge._
- **Why does `Multi-tenant review tool /r/[client]` connect `README.md` to `review-clients.ts`, `Macrostructure family`, `PROJECT_CONTEXT.md`?**
  _High betweenness centrality (0.113) - this node is a cross-community bridge._
- **Why does `lucide-react` connect `lucide-react` to `app/not-found.tsx`, `admin-auth.ts`, `graph`, `react`, `services/page.tsx`, `package.json`, `review-report.ts`, `accent-switcher.tsx`, `emails.ts`, `growth-audit-form.tsx`, `(site)/page.tsx`, `footer.tsx`, `location-detail.tsx`, `content-types.ts`, `about/page.tsx`, `work/page.tsx`, `locations/page.tsx`, `tools/[slug]/page.tsx`, `blog-post-page.tsx`, `electric-monogram.tsx`, `review-clients.ts`, `nav.tsx`, `industries.ts`?**
  _High betweenness centrality (0.096) - this node is a cross-community bridge._
- **What connects `npx`, `metadata`, `answer` to the rest of the system?**
  _393 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `ElectricLogo.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.09359605911330049 - nodes in this community are weakly interconnected._
- **Should `react` be split into smaller, more focused modules?**
  _Cohesion score 0.05217391304347826 - nodes in this community are weakly interconnected._
- **Should `team/page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.14035087719298245 - nodes in this community are weakly interconnected._