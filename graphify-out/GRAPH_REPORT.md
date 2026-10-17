# Graph Report - MARKETIX WEBSITE  (2026-10-17)

## Corpus Check
- 188 files · ~154,401 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 5 file(s) not represented in the graph (top: (none) 2, .example 1, .ico 1)

## Summary
- 1164 nodes · 3106 edges · 81 communities (72 shown, 9 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 36 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `fa30e512`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- ElectricLogo.tsx
- app/not-found.tsx
- admin-auth.ts
- graph
- review-generator.tsx
- review/route.ts
- chat-knowledge.ts
- team/page.tsx
- components.json
- package.json
- compilerOptions
- review-report.ts
- accent-switcher.tsx
- design.md (locked design system)
- reveal.tsx
- CLAUDE.md (project instructions)
- README.md
- emails.ts
- contact-form.tsx
- lucide-react
- review-autoreply.ts
- Positioning guardrail (Marketix vs Vistrow)
- Macrostructure family
- PROJECT_CONTEXT.md
- footer.tsx
- location-detail.tsx
- products-catalog.ts
- pricing/page.tsx
- structured-data.ts
- Accent violet #C82AEF
- vercel.json
- industries/page.tsx
- next.config.mjs
- locations.ts
- shadcn
- postcss.config.mjs
- legal-page.tsx
- dependencies
- getBlogPosts
- tools/[slug]/page.tsx
- next
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
- content-types.ts
- email-logo.ts
- chat/route.ts
- hasAdminAccess
- callback/route.ts
- Google review replies and the review report
- tools/page.tsx
- nav.tsx
- marketixstudio.com DNS records
- LogoLoop.tsx
- seo.ts
- WebThreads.tsx
- industries/[slug]/page.tsx
- Hero image prompts (Marketix Studio)
- growth-audit-form.tsx
- react
- pune-areas.ts
- trackLead
- framer-motion
- demand-map.tsx
- market-visuals.tsx
- industry-path.tsx
- service-finder.tsx
- locations/[slug]/page.tsx
- services/[slug]/page.tsx
- buy-button.tsx
- QueueItem
- industry-explorer.tsx

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
- `Phase 1: Chrome and routing` --references--> `serviceHref()`  [INFERRED]
  docs/REDESIGN_PLAN.md → components/v2/primitives.tsx
- `SEO / AEO / GEO checklist (every indexable page)` --references--> `AnswerCard()`  [INFERRED]
  docs/REDESIGN_PLAN.md → components/v2/primitives.tsx
- `SEO / AEO / GEO checklist (every indexable page)` --references--> `buildMetadata()`  [INFERRED]
  docs/REDESIGN_PLAN.md → lib/seo.ts
- `Never fabricate metrics/testimonials/clients rule` --semantically_similar_to--> `Honest content rule (overrides every skill)`  [INFERRED] [semantically similar]
  CLAUDE.md → design.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **v2 pilot rebuild in new design system** — docs_project_context_v2_rebuild, design_map_diagram, design_quote_led, design_n5_floating_pill_nav, design_ft5_statement_footer [EXTRACTED 1.00]
- **Anti-AI-slop design decisions (Aurora, eyebrows, column footer removed)** — docs_project_context_aurora_removed, docs_project_context_eyebrows_removed, docs_project_context_statement_footer_decision, design_light_pool, design_section_labels_off, design_ft5_statement_footer [INFERRED 0.85]
- **Differentiation from sister brand Vistrow** — claude_not_like_vistrow_rule, design_positioning_guardrail, docs_project_context_keyword_territory_split, docs_project_context_unpublish_vistrow_blog, docs_project_context_rejected_vistrow_copy [INFERRED 0.85]

## Communities (81 total, 9 thin omitted)

### Community 0 - "ElectricLogo.tsx"
Cohesion: 0.15
Nodes (19): blurGrid(), blurLine(), ElectricLogo(), ElectricLogoProps, Focus, hexToRgb(), Point, Pulse (+11 more)

### Community 1 - "app/not-found.tsx"
Cohesion: 0.19
Nodes (10): metadata, CardSpotlight(), group(), SiteFooter(), SiteNav(), topics, waLink(), WhatsAppFloat() (+2 more)

### Community 2 - "admin-auth.ts"
Cohesion: 0.18
Nodes (18): attempts, createFirstLogin(), signIn(), startSession(), LoginForm(), dynamic, metadata, Page() (+10 more)

### Community 3 - "graph"
Cohesion: 0.26
Nodes (34): Page(), Page(), revalidate, Page(), Page(), Page(), Page(), Page() (+26 more)

### Community 4 - "review-generator.tsx"
Cohesion: 0.14
Nodes (10): ReviewGenerator(), Status, clamp(), GestureState, PeekRating(), PeekRatingProps, PeekRatingShape, reducedMotion() (+2 more)

### Community 5 - "review/route.ts"
Cohesion: 0.14
Nodes (32): POST(), runtime, applyHabits(), clean(), draftIssues(), hits, lastWords(), pickStyle() (+24 more)

### Community 6 - "chat-knowledge.ts"
Cohesion: 0.17
Nodes (13): GET(), line(), revalidate, industriesOverview, industryList, industrySlugs, locationList, serviceList (+5 more)

### Community 7 - "team/page.tsx"
Cohesion: 0.14
Nodes (16): chromaItems, initials(), initialsImage(), metadata, Page(), shades, ChromaGrid(), ChromaGridProps (+8 more)

### Community 8 - "components.json"
Cohesion: 0.11
Nodes (18): aliases, components, hooks, lib, ui, utils, registries, @react-bits (+10 more)

### Community 9 - "package.json"
Cohesion: 0.15
Nodes (12): name, private, version, @anthropic-ai/sdk, autoprefixer, motion, postcss, react-dom (+4 more)

### Community 10 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 11 - "review-report.ts"
Cohesion: 0.10
Nodes (32): Chart(), chip(), dynamic, metadata, Page(), ReplyQueue(), listReviews(), Bar (+24 more)

### Community 12 - "accent-switcher.tsx"
Cohesion: 0.23
Nodes (11): choose(), Bounds, DragState, Side, ThemeToggle(), toggle(), ACCENT_KEY, accents (+3 more)

### Community 13 - "design.md (locked design system)"
Cohesion: 0.13
Nodes (17): design.md (locked design system), Atmospheric genre, CTA voice (dark pill + accent ring + arrow circle), Hallmark gate 22, Honest content rule (overrides every skill), Live-site elements not to carry over, No gradient text / accent on one word, Plus Jakarta Sans only typography (+9 more)

### Community 14 - "reveal.tsx"
Cohesion: 0.15
Nodes (9): SummaryGroup, Feature, FeatureCards(), LinkCardGrid(), Outcome, Reveal(), RevealProps, SectionHeading() (+1 more)

### Community 15 - "CLAUDE.md (project instructions)"
Cohesion: 0.14
Nodes (15): .claude/CLAUDE.md (graphify skill pointer), graphify skill (/graphify trigger), CLAUDE.md (project instructions), graphify query/path/explain usage rules, grep aliased to ugrep gotcha, marketix-dev launch config (port 3000), npm run build while dev corrupts .next, No hand-drawn browser/phone/dashboard chrome (+7 more)

### Community 16 - "README.md"
Cohesion: 0.15
Nodes (14): Content in code, no CMS, lib/blog.ts async blog API, Multi-tenant review tool /r/[client], WordPress 301 redirects (next.config.mjs), Claude API client review generator (app/api/review), content/ typed TS content directory, Framer Motion, lucide-react icons (+6 more)

### Community 17 - "emails.ts"
Cohesion: 0.09
Nodes (50): GET(), clean(), cleanList(), Inquiry, isRateLimited(), POST(), requestLog, runtime (+42 more)

### Community 18 - "contact-form.tsx"
Cohesion: 0.22
Nodes (10): ContactForm(), Errors, isPhone(), nextSteps, services, Status, Field(), Input() (+2 more)

### Community 19 - "lucide-react"
Cohesion: 0.09
Nodes (30): agreed, answer, faqs, metadata, principles, steps, include, metadata (+22 more)

### Community 20 - "review-autoreply.ts"
Cohesion: 0.17
Nodes (23): dynamic, GET(), maxDuration, runtime, GET(), runtime, POST(), runtime (+15 more)

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
Cohesion: 0.16
Nodes (10): columns, icons, NewsletterForm(), Status, footerNav, NavChild, NavGroup, NavItem (+2 more)

### Community 25 - "location-detail.tsx"
Cohesion: 0.13
Nodes (30): answer, audiences, hero, metadata, hero, metadata, workGroups, Eyebrow() (+22 more)

### Community 26 - "products-catalog.ts"
Cohesion: 0.18
Nodes (7): runtime, Step, Steps(), DigitalProduct, productList, lib_content_types_feature, lib_content_types_step

### Community 27 - "pricing/page.tsx"
Cohesion: 0.10
Nodes (27): faqs, metadata, routes, whatsappText, groups, metadata, checks, faqs (+19 more)

### Community 28 - "structured-data.ts"
Cohesion: 0.09
Nodes (22): answer, faqs, metadata, values, faqs, metadata, isTodo(), livePreview (+14 more)

### Community 29 - "Accent violet #C82AEF"
Cohesion: 0.33
Nodes (6): Card surface (radial gradient, 24px radius), Accent violet #C82AEF, Static violet light pool + grain, Neon ring (hover/focus only), Aurora hero removed (static light pool), Rejected: gold/yellow structural accent

### Community 30 - "vercel.json"
Cohesion: 0.33
Nodes (5): buildCommand, crons, framework, installCommand, $schema

### Community 31 - "industries/page.tsx"
Cohesion: 0.15
Nodes (14): answer, goals, metadata, answer, metadata, zones, Breadcrumbs(), Crumb (+6 more)

### Community 33 - "locations.ts"
Cohesion: 0.15
Nodes (12): Entry, legalSlugs, globalLocations, globalProcess, globalServices, indiaLocations, indiaProcess, indiaServices (+4 more)

### Community 36 - "legal-page.tsx"
Cohesion: 0.17
Nodes (10): metadata, metadata, metadata, metadata, metadata, formatDate(), LegalPage(), slugify() (+2 more)

### Community 37 - "dependencies"
Cohesion: 0.18
Nodes (11): dependencies, @anthropic-ai/sdk, cobe, framer-motion, gsap, lucide-react, motion, next (+3 more)

### Community 38 - "getBlogPosts"
Cohesion: 0.21
Nodes (12): generateMetadata(), Page(), generateMetadata(), generateStaticParams(), Page(), revalidate, sitemap(), archivedVistrowPosts (+4 more)

### Community 39 - "tools/[slug]/page.tsx"
Cohesion: 0.18
Nodes (9): generateMetadata(), Page(), AdBudgetCalculator(), RoasCalculator(), slug(), SOURCE_PRESETS, UtmBuilder(), draft() (+1 more)

### Community 40 - "next"
Cohesion: 0.15
Nodes (13): app_globals, jakarta, metadata, RootLayout(), viewport, GoogleAnalytics(), BlogIndex(), Card (+5 more)

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
Cohesion: 0.22
Nodes (6): caseStudies, caseStudyIndustries, caseStudyList, caseStudySlugs, publishedCaseStudySlugs, workOverview

### Community 48 - "Buyer questions by topic (as searched)"
Cohesion: 0.07
Nodes (26): automotive, branding-design, Buyer questions by topic (as searched), content-marketing, conversion-rate-optimisation, ecommerce-d2c, education, email-marketing-automation (+18 more)

### Community 49 - "AccentSwitcher"
Cohesion: 0.47
Nodes (8): AccentSwitcher(), begin(), finish(), move(), onMouseDown(), onTouchStart(), snap(), clamp()

### Community 50 - "globe.tsx"
Cohesion: 0.29
Nodes (8): AreaGlobe(), facing(), Globe(), readColours(), cityCoords, LatLng, PUNE, cobe

### Community 52 - "report-login.mjs"
Cohesion: 0.25
Nodes (6): ref_node_crypto, ref_node_fs, ref_node_readline, email, kept, salt

### Community 53 - "content-types.ts"
Cohesion: 0.16
Nodes (11): toolList, tools, toolSlugs, toolsOverview, BlogSection, BlogSeoImage, CaseStudy, CaseStudyResult (+3 more)

### Community 55 - "chat/route.ts"
Cohesion: 0.21
Nodes (13): clean(), getSystemPrompt(), IncomingMessage, isRateLimited(), POST(), replySchema, requestLog, runtime (+5 more)

### Community 56 - "hasAdminAccess"
Cohesion: 0.17
Nodes (10): POST(), runtime, dynamic, metadata, Page(), ReplyHelper(), reviewClientList, reviewClients (+2 more)

### Community 57 - "callback/route.ts"
Cohesion: 0.20
Nodes (14): esc(), GET(), page(), runtime, GET(), runtime, exchangeCode(), oauthUrl() (+6 more)

### Community 58 - "Google review replies and the review report"
Cohesion: 0.29
Nodes (6): Google review replies and the review report, Repeat protection (drafts and replies), Rules the replies follow (lib/review-reply.ts), Setup, once, Signing in, What runs

### Community 59 - "tools/page.tsx"
Cohesion: 0.22
Nodes (7): metadata, CtaBand(), Faq(), CtaLink, PageHero(), Breadcrumb(), Crumb

### Community 60 - "nav.tsx"
Cohesion: 0.18
Nodes (10): LOGO, LOGO_LIGHT, Wordmark(), aboutLinks, aboutMatch, industriesNav, PanelId, plainLinks (+2 more)

### Community 61 - "marketixstudio.com DNS records"
Cohesion: 0.50
Nodes (3): If the zone has to be recreated at MilesWeb, marketixstudio.com DNS records, When the new site moves to Vercel

### Community 62 - "LogoLoop.tsx"
Cohesion: 0.23
Nodes (11): ClientLogoLoop(), Logo, ANIMATION_CONFIG, cx(), LogoItem, LogoLoop, LogoLoopProps, toCssLength() (+3 more)

### Community 63 - "seo.ts"
Cohesion: 0.25
Nodes (6): aiCrawlers, disallow, SeoMetadata, siteName, siteTagline, siteUrl

### Community 64 - "WebThreads.tsx"
Cohesion: 0.21
Nodes (10): HeroThreads(), toHex(), ctxMap, FAN_MODE, FanMode, hexToRgb(), WebThreads(), WebThreadsCtx (+2 more)

### Community 66 - "Hero image prompts (Marketix Studio)"
Cohesion: 0.25
Nodes (7): Format (same for every image), Hero image prompts (Marketix Studio), Industries, Locations, Negative prompt (if your tool supports one), Services, Style block (paste at the start of every prompt)

### Community 67 - "growth-audit-form.tsx"
Cohesion: 0.20
Nodes (7): auditSteps, budgets, channelOptions, industries, serviceOptions, confettiDots, SuccessCelebration()

### Community 68 - "react"
Cohesion: 0.18
Nodes (7): RevealRoot(), FILL_PATHS, LoaderPhase, LogoTraceLoaderProps, Magnet(), MagnetProps, react

### Community 69 - "pune-areas.ts"
Cohesion: 0.24
Nodes (6): dynamicParams, generateMetadata(), PuneArea, puneAreaBySlug, puneAreas, s

### Community 70 - "trackLead"
Cohesion: 0.24
Nodes (8): GrowthAuditForm(), ChatWidget(), onSubmit(), send(), GtagCommand, LeadSource, trackLead(), Window

### Community 71 - "framer-motion"
Cohesion: 0.20
Nodes (8): Funnel(), Step, loops, queries, SearchJourney(), Stage, stages, framer-motion

### Community 72 - "demand-map.tsx"
Cohesion: 0.25
Nodes (8): DemandMap(), EASE, Method, methods, SourceCard(), sources, START_MS, useTypingLoop()

### Community 73 - "market-visuals.tsx"
Cohesion: 0.39
Nodes (7): EASE, fmt(), HoursOverlap(), MarketBoard(), overlap(), Span, wrap()

### Community 74 - "industry-path.tsx"
Cohesion: 0.38
Nodes (5): IndustryPath(), Path, paths, PathExplorer(), PathStep

### Community 75 - "service-finder.tsx"
Cohesion: 0.40
Nodes (5): FinderCard, GoalId, goals, ServiceFinder(), slugOf()

### Community 78 - "buy-button.tsx"
Cohesion: 0.40
Nodes (3): BuyButton(), Props, Window

### Community 79 - "QueueItem"
Cohesion: 0.83
Nodes (4): QueueItem(), call(), draft(), post()

## Knowledge Gaps
- **393 isolated node(s):** `npx`, `metadata`, `answer`, `values`, `faqs` (+388 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 478 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **9 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `next` to `app/not-found.tsx`, `admin-auth.ts`, `graph`, `review-generator.tsx`, `team/page.tsx`, `package.json`, `review-report.ts`, `reveal.tsx`, `emails.ts`, `lucide-react`, `footer.tsx`, `location-detail.tsx`, `pricing/page.tsx`, `structured-data.ts`, `industries/page.tsx`, `locations.ts`, `legal-page.tsx`, `getBlogPosts`, `tools/[slug]/page.tsx`, `blog-post-page.tsx`, `electric-monogram.tsx`, `content-types.ts`, `chat/route.ts`, `hasAdminAccess`, `tools/page.tsx`, `nav.tsx`, `LogoLoop.tsx`, `seo.ts`, `industries/[slug]/page.tsx`, `pune-areas.ts`, `framer-motion`, `demand-map.tsx`, `market-visuals.tsx`, `service-finder.tsx`, `locations/[slug]/page.tsx`, `services/[slug]/page.tsx`, `buy-button.tsx`, `industry-explorer.tsx`?**
  _High betweenness centrality (0.238) - this node is a cross-community bridge._
- **Why does `Multi-tenant review tool /r/[client]` connect `README.md` to `hasAdminAccess`, `Macrostructure family`, `PROJECT_CONTEXT.md`?**
  _High betweenness centrality (0.113) - this node is a cross-community bridge._
- **Why does `lucide-react` connect `lucide-react` to `app/not-found.tsx`, `admin-auth.ts`, `graph`, `review-generator.tsx`, `chat-knowledge.ts`, `package.json`, `review-report.ts`, `accent-switcher.tsx`, `reveal.tsx`, `emails.ts`, `contact-form.tsx`, `footer.tsx`, `location-detail.tsx`, `products-catalog.ts`, `pricing/page.tsx`, `structured-data.ts`, `industries/page.tsx`, `locations.ts`, `tools/[slug]/page.tsx`, `next`, `blog-post-page.tsx`, `electric-monogram.tsx`, `content-types.ts`, `hasAdminAccess`, `tools/page.tsx`, `nav.tsx`, `growth-audit-form.tsx`, `framer-motion`, `demand-map.tsx`, `industry-path.tsx`, `service-finder.tsx`, `buy-button.tsx`, `industry-explorer.tsx`?**
  _High betweenness centrality (0.106) - this node is a cross-community bridge._
- **What connects `npx`, `metadata`, `answer` to the rest of the system?**
  _393 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `ElectricLogo.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.14736842105263157 - nodes in this community are weakly interconnected._
- **Should `review-generator.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.13725490196078433 - nodes in this community are weakly interconnected._
- **Should `review/route.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.13513513513513514 - nodes in this community are weakly interconnected._