# Graph Report - MARKETIX WEBSITE  (2026-10-09)

## Corpus Check
- 186 files · ~148,235 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 5 file(s) not represented in the graph (top: (none) 2, .example 1, .ico 1)

## Summary
- 1137 nodes · 2897 edges · 72 communities (69 shown, 3 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 36 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `a1f75e61`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- ElectricLogo.tsx
- app/not-found.tsx
- admin-auth.ts
- graph
- review-generator.tsx
- review/route.ts
- location-detail.tsx
- team/page.tsx
- components.json
- package.json
- compilerOptions
- reports/page.tsx
- accent-switcher.tsx
- design.md (locked design system)
- content-types.ts
- CLAUDE.md (project instructions)
- README.md
- emails.ts
- growth-audit-form.tsx
- LogoLoop.tsx
- review-autoreply.ts
- Positioning guardrail (Marketix vs Vistrow)
- Macrostructure family
- PROJECT_CONTEXT.md
- footer.tsx
- next
- chat/route.ts
- (site)/page.tsx
- hasAdminAccess
- Accent violet #C82AEF
- vercel.json
- review-report.ts
- next.config.mjs
- locations/page.tsx
- shadcn
- postcss.config.mjs
- legal-page.tsx
- WebThreads.tsx
- getBlogPosts
- siteUrl
- app/layout.tsx
- import-demo-site.py
- lucide-react
- site-config.ts
- framer-motion
- Overnight redesign plan (started 2026-09-24)
- structured-data.ts
- react
- Buyer questions by topic (as searched)
- AccentSwitcher
- globe.tsx
- chat-knowledge.ts
- contact-form.tsx
- pricing/page.tsx
- PeekRating.tsx
- pune-areas.ts
- demand-map.tsx
- callback/route.ts
- Google review replies and the review report
- service-finder.tsx
- nav.tsx
- marketixstudio.com DNS records
- market-visuals.tsx
- trackLead
- industry-path.tsx
- sitemap.ts
- contact/page.tsx
- scene-3d.tsx
- about/page.tsx
- LogoTraceLoader.tsx
- buy-button.tsx
- analytics.ts

## God Nodes (most connected - your core abstractions)
1. `next` - 76 edges
2. `lucide-react` - 68 edges
3. `graph()` - 57 edges
4. `breadcrumbSchema()` - 54 edges
5. `faqSchema()` - 44 edges
6. `react` - 44 edges
7. `buildMetadata()` - 42 edges
8. `answerSchema()` - 32 edges
9. `JsonLd()` - 29 edges
10. `Cta()` - 27 edges

## Surprising Connections (you probably didn't know these)
- `Phase 2: Pages (redesign each in the new system)` --references--> `ServiceHero()`  [INFERRED]
  docs/REDESIGN_PLAN.md → components/v2/service-hero.tsx
- `Phase 1: Chrome and routing` --references--> `SiteFooter()`  [INFERRED]
  docs/REDESIGN_PLAN.md → components/v2/footer.tsx
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

## Communities (72 total, 3 thin omitted)

### Community 0 - "ElectricLogo.tsx"
Cohesion: 0.15
Nodes (19): blurGrid(), blurLine(), ElectricLogo(), ElectricLogoProps, Focus, hexToRgb(), Point, Pulse (+11 more)

### Community 1 - "app/not-found.tsx"
Cohesion: 0.25
Nodes (6): metadata, NotFound(), CardSpotlight(), waLink(), WhatsAppFloat(), onSubmit()

### Community 2 - "admin-auth.ts"
Cohesion: 0.11
Nodes (26): attempts, createFirstLogin(), signIn(), startSession(), LoginForm(), dynamic, metadata, Page() (+18 more)

### Community 3 - "graph"
Cohesion: 0.22
Nodes (29): Page(), Page(), Page(), Page(), Page(), Page(), Page(), Page() (+21 more)

### Community 4 - "review-generator.tsx"
Cohesion: 0.22
Nodes (3): ReviewGenerator(), Status, ReviewClient

### Community 5 - "review/route.ts"
Cohesion: 0.16
Nodes (25): POST(), runtime, hits, pickStyle(), POST(), rateLimited(), recentReviews, remember() (+17 more)

### Community 6 - "location-detail.tsx"
Cohesion: 0.14
Nodes (22): agreed, answer, faqs, metadata, principles, steps, countOf(), metadata (+14 more)

### Community 7 - "team/page.tsx"
Cohesion: 0.15
Nodes (15): chromaItems, initials(), initialsImage(), metadata, Page(), shades, ChromaGrid(), ChromaGridProps (+7 more)

### Community 8 - "components.json"
Cohesion: 0.11
Nodes (18): aliases, components, hooks, lib, ui, utils, registries, @react-bits (+10 more)

### Community 9 - "package.json"
Cohesion: 0.05
Nodes (40): dependencies, @anthropic-ai/sdk, cobe, framer-motion, gsap, lucide-react, motion, next (+32 more)

### Community 10 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 11 - "reports/page.tsx"
Cohesion: 0.16
Nodes (11): Chart(), chip(), dynamic, metadata, Page(), ReplyQueue(), monthName(), parsePeriod() (+3 more)

### Community 12 - "accent-switcher.tsx"
Cohesion: 0.18
Nodes (15): choose(), Bounds, DragState, Side, currentAccent(), ELECTRIC, ElectricMonogram(), ThemeToggle() (+7 more)

### Community 13 - "design.md (locked design system)"
Cohesion: 0.13
Nodes (17): design.md (locked design system), Atmospheric genre, CTA voice (dark pill + accent ring + arrow circle), Hallmark gate 22, Honest content rule (overrides every skill), Live-site elements not to carry over, No gradient text / accent on one word, Plus Jakarta Sans only typography (+9 more)

### Community 14 - "content-types.ts"
Cohesion: 0.05
Nodes (42): metadata, generateMetadata(), Page(), SummaryGroup, CtaBand(), Faq(), Feature, FeatureCards() (+34 more)

### Community 15 - "CLAUDE.md (project instructions)"
Cohesion: 0.14
Nodes (15): .claude/CLAUDE.md (graphify skill pointer), graphify skill (/graphify trigger), CLAUDE.md (project instructions), graphify query/path/explain usage rules, grep aliased to ugrep gotcha, marketix-dev launch config (port 3000), npm run build while dev corrupts .next, No hand-drawn browser/phone/dashboard chrome (+7 more)

### Community 16 - "README.md"
Cohesion: 0.15
Nodes (14): Content in code, no CMS, lib/blog.ts async blog API, Multi-tenant review tool /r/[client], WordPress 301 redirects (next.config.mjs), Claude API client review generator (app/api/review), content/ typed TS content directory, Framer Motion, lucide-react icons (+6 more)

### Community 17 - "emails.ts"
Cohesion: 0.13
Nodes (38): GET(), clean(), cleanList(), Inquiry, isRateLimited(), POST(), requestLog, runtime (+30 more)

### Community 18 - "growth-audit-form.tsx"
Cohesion: 0.21
Nodes (9): Field(), Input(), Select(), Textarea(), auditSteps, budgets, channelOptions, industries (+1 more)

### Community 19 - "LogoLoop.tsx"
Cohesion: 0.23
Nodes (11): ClientLogoLoop(), Logo, ANIMATION_CONFIG, cx(), LogoItem, LogoLoop, LogoLoopProps, toCssLength() (+3 more)

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
Cohesion: 0.16
Nodes (11): columns, group(), icons, SiteFooter(), NewsletterForm(), Status, footerNav, NavChild (+3 more)

### Community 25 - "next"
Cohesion: 0.11
Nodes (30): revalidate, routes, answer, audiences, hero, metadata, hero, metadata (+22 more)

### Community 26 - "chat/route.ts"
Cohesion: 0.21
Nodes (13): clean(), getSystemPrompt(), IncomingMessage, isRateLimited(), POST(), replySchema, requestLog, runtime (+5 more)

### Community 27 - "(site)/page.tsx"
Cohesion: 0.11
Nodes (18): answer, averageRating, bestAt, coreServices, delay(), faqs, metadata, pillars (+10 more)

### Community 28 - "hasAdminAccess"
Cohesion: 0.17
Nodes (10): POST(), runtime, dynamic, metadata, Page(), ReplyHelper(), reviewClientList, reviewClients (+2 more)

### Community 29 - "Accent violet #C82AEF"
Cohesion: 0.33
Nodes (6): Card surface (radial gradient, 24px radius), Accent violet #C82AEF, Static violet light pool + grain, Neon ring (hover/focus only), Aurora hero removed (static light pool), Rejected: gold/yellow structural accent

### Community 30 - "vercel.json"
Cohesion: 0.33
Nodes (5): buildCommand, crons, framework, installCommand, $schema

### Community 31 - "review-report.ts"
Cohesion: 0.19
Nodes (20): Bar, buildReport(), Period, periodDays(), stars(), Counts, dayKey(), FILE (+12 more)

### Community 33 - "locations/page.tsx"
Cohesion: 0.14
Nodes (13): answer, metadata, zones, generateMetadata(), globalLocations, globalProcess, globalServices, indiaLocations (+5 more)

### Community 36 - "legal-page.tsx"
Cohesion: 0.16
Nodes (11): metadata, metadata, metadata, metadata, metadata, formatDate(), LegalPage(), slugify() (+3 more)

### Community 37 - "WebThreads.tsx"
Cohesion: 0.21
Nodes (10): HeroThreads(), toHex(), ctxMap, FAN_MODE, FanMode, hexToRgb(), WebThreads(), WebThreadsCtx (+2 more)

### Community 38 - "getBlogPosts"
Cohesion: 0.26
Nodes (10): Page(), generateMetadata(), generateStaticParams(), Page(), revalidate, archivedVistrowPosts, blogPosts, getBlogPost() (+2 more)

### Community 39 - "siteUrl"
Cohesion: 0.40
Nodes (3): aiCrawlers, disallow, siteUrl

### Community 40 - "app/layout.tsx"
Cohesion: 0.20
Nodes (9): app_globals, jakarta, metadata, RootLayout(), viewport, GoogleAnalytics(), organizationSchema, websiteSchema (+1 more)

### Community 41 - "import-demo-site.py"
Cohesion: 0.22
Nodes (7): glob, os, pil, re, Imports a finished static website (plain HTML/CSS/JS + images) as a demo at…, shutil, sys

### Community 42 - "lucide-react"
Cohesion: 0.16
Nodes (15): include, metadata, metadata, who, BlogIndex(), Card, formatDate(), ShareRow() (+7 more)

### Community 43 - "site-config.ts"
Cohesion: 0.18
Nodes (10): ChatMessage, fallback, greeting, LinkAction, Prompt, questions, topics, topics (+2 more)

### Community 44 - "framer-motion"
Cohesion: 0.20
Nodes (8): Funnel(), Step, loops, queries, SearchJourney(), Stage, stages, framer-motion

### Community 45 - "Overnight redesign plan (started 2026-09-24)"
Cohesion: 0.25
Nodes (7): Log, Morning summary (2026-09-24, ~07:00), Overnight redesign plan (started 2026-09-24), Phase 2: Pages (redesign each in the new system), Phase 3: Site-wide verification, Progress, The creative bar

### Community 46 - "structured-data.ts"
Cohesion: 0.18
Nodes (8): siteName, socialProfiles, businessAddress, businessGeo, businessPhone, JsonLdValue, openingHoursSchema, serviceLocalities

### Community 47 - "react"
Cohesion: 0.25
Nodes (5): ReadingProgress(), RevealRoot(), Magnet(), MagnetProps, react

### Community 48 - "Buyer questions by topic (as searched)"
Cohesion: 0.07
Nodes (26): automotive, branding-design, Buyer questions by topic (as searched), content-marketing, conversion-rate-optimisation, ecommerce-d2c, education, email-marketing-automation (+18 more)

### Community 49 - "AccentSwitcher"
Cohesion: 0.47
Nodes (8): AccentSwitcher(), begin(), finish(), move(), onMouseDown(), onTouchStart(), snap(), clamp()

### Community 50 - "globe.tsx"
Cohesion: 0.33
Nodes (7): facing(), Globe(), readColours(), cityCoords, LatLng, PUNE, cobe

### Community 51 - "chat-knowledge.ts"
Cohesion: 0.24
Nodes (8): GET(), line(), revalidate, locationList, serviceList, chatPuneAreas, keyPages, VALID_CHAT_LINKS

### Community 52 - "contact-form.tsx"
Cohesion: 0.25
Nodes (6): Errors, nextSteps, services, Status, confettiDots, SuccessCelebration()

### Community 53 - "pricing/page.tsx"
Cohesion: 0.10
Nodes (22): runtime, groups, metadata, checks, faqs, metadata, steps, answer (+14 more)

### Community 54 - "PeekRating.tsx"
Cohesion: 0.32
Nodes (7): clamp(), GestureState, PeekRating(), PeekRatingProps, PeekRatingShape, reducedMotion(), SHAPES

### Community 55 - "pune-areas.ts"
Cohesion: 0.24
Nodes (6): dynamicParams, generateMetadata(), PuneArea, puneAreaBySlug, puneAreas, s

### Community 56 - "demand-map.tsx"
Cohesion: 0.25
Nodes (8): DemandMap(), EASE, Method, methods, SourceCard(), sources, START_MS, useTypingLoop()

### Community 57 - "callback/route.ts"
Cohesion: 0.22
Nodes (13): esc(), GET(), page(), runtime, GET(), runtime, exchangeCode(), oauthUrl() (+5 more)

### Community 58 - "Google review replies and the review report"
Cohesion: 0.33
Nodes (5): Google review replies and the review report, Rules the replies follow (lib/review-reply.ts), Setup, once, Signing in, What runs

### Community 59 - "service-finder.tsx"
Cohesion: 0.40
Nodes (5): FinderCard, GoalId, goals, ServiceFinder(), slugOf()

### Community 60 - "nav.tsx"
Cohesion: 0.16
Nodes (13): LOGO, LOGO_LIGHT, Wordmark(), aboutLinks, aboutMatch, industriesNav, PanelId, plainLinks (+5 more)

### Community 61 - "marketixstudio.com DNS records"
Cohesion: 0.50
Nodes (3): If the zone has to be recreated at MilesWeb, marketixstudio.com DNS records, When the new site moves to Vercel

### Community 62 - "market-visuals.tsx"
Cohesion: 0.39
Nodes (7): EASE, fmt(), HoursOverlap(), MarketBoard(), overlap(), Span, wrap()

### Community 63 - "trackLead"
Cohesion: 0.38
Nodes (6): ContactForm(), GrowthAuditForm(), ChatWidget(), onSubmit(), send(), trackLead()

### Community 64 - "industry-path.tsx"
Cohesion: 0.28
Nodes (7): IndustryPath(), industryScene(), Path, paths, sectorScenes, PathExplorer(), PathStep

### Community 65 - "sitemap.ts"
Cohesion: 0.15
Nodes (10): Entry, sitemap(), locationSlugs, serviceSlugs, caseStudyIndustries, caseStudyList, caseStudySlugs, publishedCaseStudies (+2 more)

### Community 66 - "contact/page.tsx"
Cohesion: 0.33
Nodes (5): faqs, metadata, routes, whatsappText, fullAddress

### Community 67 - "scene-3d.tsx"
Cohesion: 0.29
Nodes (5): BoxProps, Scene3D(), SceneKind, scenes, Tilt3D()

### Community 68 - "about/page.tsx"
Cohesion: 0.09
Nodes (25): answer, faqs, metadata, values, generateMetadata(), answer, goals, metadata (+17 more)

### Community 69 - "LogoTraceLoader.tsx"
Cohesion: 0.40
Nodes (3): FILL_PATHS, LoaderPhase, LogoTraceLoaderProps

### Community 70 - "buy-button.tsx"
Cohesion: 0.40
Nodes (3): BuyButton(), Props, Window

### Community 71 - "analytics.ts"
Cohesion: 0.50
Nodes (3): GtagCommand, LeadSource, Window

## Knowledge Gaps
- **380 isolated node(s):** `npx`, `metadata`, `answer`, `values`, `faqs` (+375 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 464 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `next` to `app/not-found.tsx`, `admin-auth.ts`, `review-generator.tsx`, `location-detail.tsx`, `team/page.tsx`, `package.json`, `reports/page.tsx`, `content-types.ts`, `emails.ts`, `LogoLoop.tsx`, `footer.tsx`, `chat/route.ts`, `(site)/page.tsx`, `hasAdminAccess`, `locations/page.tsx`, `legal-page.tsx`, `getBlogPosts`, `siteUrl`, `app/layout.tsx`, `lucide-react`, `site-config.ts`, `framer-motion`, `pricing/page.tsx`, `pune-areas.ts`, `demand-map.tsx`, `service-finder.tsx`, `nav.tsx`, `market-visuals.tsx`, `sitemap.ts`, `contact/page.tsx`, `about/page.tsx`, `buy-button.tsx`?**
  _High betweenness centrality (0.222) - this node is a cross-community bridge._
- **Why does `Multi-tenant review tool /r/[client]` connect `README.md` to `hasAdminAccess`, `Macrostructure family`, `PROJECT_CONTEXT.md`?**
  _High betweenness centrality (0.116) - this node is a cross-community bridge._
- **Why does `react` connect `react` to `ElectricLogo.tsx`, `app/not-found.tsx`, `review-generator.tsx`, `location-detail.tsx`, `team/page.tsx`, `package.json`, `reports/page.tsx`, `accent-switcher.tsx`, `content-types.ts`, `growth-audit-form.tsx`, `LogoLoop.tsx`, `footer.tsx`, `next`, `hasAdminAccess`, `WebThreads.tsx`, `app/layout.tsx`, `lucide-react`, `site-config.ts`, `globe.tsx`, `contact-form.tsx`, `pricing/page.tsx`, `PeekRating.tsx`, `demand-map.tsx`, `service-finder.tsx`, `nav.tsx`, `industry-path.tsx`, `scene-3d.tsx`, `about/page.tsx`, `LogoTraceLoader.tsx`, `buy-button.tsx`?**
  _High betweenness centrality (0.109) - this node is a cross-community bridge._
- **What connects `npx`, `metadata`, `answer` to the rest of the system?**
  _380 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `ElectricLogo.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.14736842105263157 - nodes in this community are weakly interconnected._
- **Should `admin-auth.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.10756302521008404 - nodes in this community are weakly interconnected._
- **Should `location-detail.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.13793103448275862 - nodes in this community are weakly interconnected._