# Graph Report - MARKETIX WEBSITE  (2026-10-10)

## Corpus Check
- 187 files · ~151,044 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 5 file(s) not represented in the graph (top: (none) 2, .example 1, .ico 1)

## Summary
- 1146 nodes · 3054 edges · 68 communities (63 shown, 5 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 36 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `2743b71e`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- ElectricLogo.tsx
- app/not-found.tsx
- admin-auth.ts
- graph
- review-clients.ts
- review/route.ts
- (site)/page.tsx
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
- location-detail.tsx
- buildMetadata
- work/page.tsx
- hasAdminAccess
- Accent violet #C82AEF
- vercel.json
- review-report.ts
- next.config.mjs
- locations/page.tsx
- shadcn
- postcss.config.mjs
- next
- WebThreads.tsx
- getBlogPosts
- dependencies
- seo.ts
- import-demo-site.py
- blog-post-page.tsx
- site-config.ts
- lucide-react
- Overnight redesign plan (started 2026-09-24)
- structured-data.ts
- react
- Buyer questions by topic (as searched)
- AccentSwitcher
- globe.tsx
- devDependencies
- electric-monogram.tsx
- about/page.tsx
- PeekRating.tsx
- llms.txt/route.ts
- scripts
- callback/route.ts
- Google review replies and the review report
- service-finder.tsx
- nav.tsx
- marketixstudio.com DNS records
- tailwind.config.ts
- checkout/route.ts
- industry-path.tsx
- work/[slug]/page.tsx
- sitemap.ts
- buy-button.tsx

## God Nodes (most connected - your core abstractions)
1. `next` - 77 edges
2. `lucide-react` - 68 edges
3. `graph()` - 57 edges
4. `breadcrumbSchema()` - 54 edges
5. `faqSchema()` - 44 edges
6. `react` - 44 edges
7. `sentenceCase()` - 43 edges
8. `buildMetadata()` - 42 edges
9. `focusKeyword()` - 41 edges
10. `pageSource()` - 39 edges

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

## Communities (68 total, 5 thin omitted)

### Community 0 - "ElectricLogo.tsx"
Cohesion: 0.15
Nodes (19): blurGrid(), blurLine(), ElectricLogo(), ElectricLogoProps, Focus, hexToRgb(), Point, Pulse (+11 more)

### Community 1 - "app/not-found.tsx"
Cohesion: 0.18
Nodes (9): metadata, CardSpotlight(), ChatWidget(), onSubmit(), send(), topics, waLink(), WhatsAppFloat() (+1 more)

### Community 2 - "admin-auth.ts"
Cohesion: 0.11
Nodes (26): attempts, createFirstLogin(), signIn(), startSession(), LoginForm(), dynamic, metadata, Page() (+18 more)

### Community 3 - "graph"
Cohesion: 0.24
Nodes (36): Page(), Page(), Page(), revalidate, Page(), Page(), Page(), Page() (+28 more)

### Community 4 - "review-clients.ts"
Cohesion: 0.18
Nodes (6): ReviewGenerator(), Status, reviewClientList, reviewClients, reviewClientSlugs, ReviewClient

### Community 5 - "review/route.ts"
Cohesion: 0.16
Nodes (25): POST(), runtime, hits, pickStyle(), POST(), rateLimited(), recentReviews, remember() (+17 more)

### Community 6 - "(site)/page.tsx"
Cohesion: 0.08
Nodes (28): agreed, answer, faqs, metadata, principles, steps, countOf(), metadata (+20 more)

### Community 7 - "team/page.tsx"
Cohesion: 0.15
Nodes (15): chromaItems, initials(), initialsImage(), metadata, Page(), shades, ChromaGrid(), ChromaGridProps (+7 more)

### Community 8 - "components.json"
Cohesion: 0.11
Nodes (18): aliases, components, hooks, lib, ui, utils, registries, @react-bits (+10 more)

### Community 9 - "package.json"
Cohesion: 0.15
Nodes (12): name, private, version, @anthropic-ai/sdk, autoprefixer, gsap, motion, postcss (+4 more)

### Community 10 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 11 - "reports/page.tsx"
Cohesion: 0.13
Nodes (14): Chart(), chip(), dynamic, metadata, Page(), QueueItem(), call(), draft() (+6 more)

### Community 12 - "accent-switcher.tsx"
Cohesion: 0.23
Nodes (11): choose(), Bounds, DragState, Side, ThemeToggle(), toggle(), ACCENT_KEY, AccentKey (+3 more)

### Community 13 - "design.md (locked design system)"
Cohesion: 0.13
Nodes (17): design.md (locked design system), Atmospheric genre, CTA voice (dark pill + accent ring + arrow circle), Hallmark gate 22, Honest content rule (overrides every skill), Live-site elements not to carry over, No gradient text / accent on one word, Plus Jakarta Sans only typography (+9 more)

### Community 14 - "content-types.ts"
Cohesion: 0.05
Nodes (41): metadata, generateMetadata(), SummaryGroup, CtaBand(), Faq(), Feature, FeatureCards(), LinkCardGrid() (+33 more)

### Community 15 - "CLAUDE.md (project instructions)"
Cohesion: 0.14
Nodes (15): .claude/CLAUDE.md (graphify skill pointer), graphify skill (/graphify trigger), CLAUDE.md (project instructions), graphify query/path/explain usage rules, grep aliased to ugrep gotcha, marketix-dev launch config (port 3000), npm run build while dev corrupts .next, No hand-drawn browser/phone/dashboard chrome (+7 more)

### Community 16 - "README.md"
Cohesion: 0.15
Nodes (14): Content in code, no CMS, lib/blog.ts async blog API, Multi-tenant review tool /r/[client], WordPress 301 redirects (next.config.mjs), Claude API client review generator (app/api/review), content/ typed TS content directory, Framer Motion, lucide-react icons (+6 more)

### Community 17 - "emails.ts"
Cohesion: 0.09
Nodes (51): clean(), getSystemPrompt(), IncomingMessage, isRateLimited(), POST(), replySchema, requestLog, runtime (+43 more)

### Community 18 - "growth-audit-form.tsx"
Cohesion: 0.05
Nodes (44): ContactForm(), Errors, nextSteps, services, Status, Field(), Input(), Select() (+36 more)

### Community 19 - "LogoLoop.tsx"
Cohesion: 0.23
Nodes (11): ClientLogoLoop(), Logo, ANIMATION_CONFIG, cx(), LogoItem, LogoLoop, LogoLoopProps, toCssLength() (+3 more)

### Community 20 - "review-autoreply.ts"
Cohesion: 0.26
Nodes (16): POST(), runtime, accessToken(), GbpReview, getReview(), gget(), listReviews(), postReply() (+8 more)

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
Cohesion: 0.14
Nodes (28): answer, audiences, hero, metadata, hero, metadata, workGroups, Eyebrow() (+20 more)

### Community 26 - "buildMetadata"
Cohesion: 0.22
Nodes (5): generateMetadata(), CUSTOM_PAGES, generateMetadata(), locations, buildMetadata()

### Community 27 - "work/page.tsx"
Cohesion: 0.19
Nodes (10): faqs, metadata, Breadcrumbs(), Crumb, clientLogos, focusKeywords, localRanking, pageSources (+2 more)

### Community 28 - "hasAdminAccess"
Cohesion: 0.16
Nodes (13): dynamic, GET(), maxDuration, runtime, GET(), runtime, dynamic, metadata (+5 more)

### Community 29 - "Accent violet #C82AEF"
Cohesion: 0.33
Nodes (6): Card surface (radial gradient, 24px radius), Accent violet #C82AEF, Static violet light pool + grain, Neon ring (hover/focus only), Aurora hero removed (static light pool), Rejected: gold/yellow structural accent

### Community 30 - "vercel.json"
Cohesion: 0.33
Nodes (5): buildCommand, crons, framework, installCommand, $schema

### Community 31 - "review-report.ts"
Cohesion: 0.16
Nodes (23): POST(), runtime, Bar, buildReport(), monthName(), Period, periodDays(), stars() (+15 more)

### Community 33 - "locations/page.tsx"
Cohesion: 0.18
Nodes (12): answer, metadata, zones, globalLocations, globalProcess, globalServices, indiaLocations, indiaProcess (+4 more)

### Community 36 - "next"
Cohesion: 0.18
Nodes (11): metadata, metadata, metadata, metadata, metadata, formatDate(), LegalPage(), slugify() (+3 more)

### Community 37 - "WebThreads.tsx"
Cohesion: 0.19
Nodes (11): HeroThreads(), toHex(), ctxMap, FAN_MODE, FanMode, hexToRgb(), WebThreads(), WebThreadsCtx (+3 more)

### Community 38 - "getBlogPosts"
Cohesion: 0.23
Nodes (11): generateMetadata(), generateMetadata(), generateStaticParams(), Page(), revalidate, sitemap(), archivedVistrowPosts, blogPosts (+3 more)

### Community 39 - "dependencies"
Cohesion: 0.18
Nodes (11): dependencies, @anthropic-ai/sdk, cobe, framer-motion, gsap, lucide-react, motion, next (+3 more)

### Community 40 - "seo.ts"
Cohesion: 0.12
Nodes (14): app_globals, jakarta, metadata, RootLayout(), viewport, aiCrawlers, disallow, GoogleAnalytics() (+6 more)

### Community 41 - "import-demo-site.py"
Cohesion: 0.22
Nodes (7): glob, os, pil, re, Imports a finished static website (plain HTML/CSS/JS + images) as a demo at…, shutil, sys

### Community 42 - "blog-post-page.tsx"
Cohesion: 0.36
Nodes (6): ReadingProgress(), ShareRow(), BlogPostPage(), headingId(), renderInlineLinks(), articleSchema()

### Community 43 - "site-config.ts"
Cohesion: 0.20
Nodes (9): ChatMessage, fallback, greeting, LinkAction, Prompt, questions, topics, assistant (+1 more)

### Community 44 - "lucide-react"
Cohesion: 0.36
Nodes (6): answer, goals, metadata, ExplorerItem, IndustryExplorer(), lucide-react

### Community 45 - "Overnight redesign plan (started 2026-09-24)"
Cohesion: 0.25
Nodes (7): Log, Morning summary (2026-09-24, ~07:00), Overnight redesign plan (started 2026-09-24), Phase 2: Pages (redesign each in the new system), Phase 3: Site-wide verification, Progress, The creative bar

### Community 46 - "structured-data.ts"
Cohesion: 0.12
Nodes (17): include, metadata, checks, faqs, metadata, steps, metadata, who (+9 more)

### Community 47 - "react"
Cohesion: 0.14
Nodes (10): BlogIndex(), Card, formatDate(), RevealRoot(), FILL_PATHS, LoaderPhase, LogoTraceLoaderProps, Magnet() (+2 more)

### Community 48 - "Buyer questions by topic (as searched)"
Cohesion: 0.07
Nodes (26): automotive, branding-design, Buyer questions by topic (as searched), content-marketing, conversion-rate-optimisation, ecommerce-d2c, education, email-marketing-automation (+18 more)

### Community 49 - "AccentSwitcher"
Cohesion: 0.47
Nodes (8): AccentSwitcher(), begin(), finish(), move(), onMouseDown(), onTouchStart(), snap(), clamp()

### Community 50 - "globe.tsx"
Cohesion: 0.33
Nodes (7): facing(), Globe(), readColours(), cityCoords, LatLng, PUNE, cobe

### Community 51 - "devDependencies"
Cohesion: 0.25
Nodes (8): devDependencies, autoprefixer, postcss, tailwindcss, @types/node, @types/react, @types/react-dom, typescript

### Community 52 - "electric-monogram.tsx"
Cohesion: 0.38
Nodes (5): NotFound(), routes, currentAccent(), ELECTRIC, ElectricMonogram()

### Community 53 - "about/page.tsx"
Cohesion: 0.11
Nodes (27): answer, faqs, metadata, values, faqs, metadata, routes, whatsappText (+19 more)

### Community 54 - "PeekRating.tsx"
Cohesion: 0.32
Nodes (7): clamp(), GestureState, PeekRating(), PeekRatingProps, PeekRatingShape, reducedMotion(), SHAPES

### Community 55 - "llms.txt/route.ts"
Cohesion: 0.17
Nodes (10): GET(), line(), revalidate, dynamicParams, generateMetadata(), locationList, PuneArea, puneAreaBySlug (+2 more)

### Community 56 - "scripts"
Cohesion: 0.29
Nodes (7): scripts, build, dev, lint, preview, report-login, start

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

### Community 64 - "industry-path.tsx"
Cohesion: 0.15
Nodes (11): IndustryPath(), industryScene(), Path, paths, sectorScenes, PathExplorer(), PathStep, BoxProps (+3 more)

### Community 65 - "work/[slug]/page.tsx"
Cohesion: 0.12
Nodes (15): generateMetadata(), isTodo(), livePreview, Page(), caseStudies, caseStudyIndustries, caseStudyList, caseStudySlugs (+7 more)

### Community 68 - "sitemap.ts"
Cohesion: 0.16
Nodes (9): generateMetadata(), Entry, industries, industriesOverview, industryList, industrySlugs, legalSlugs, serviceSlugs (+1 more)

### Community 70 - "buy-button.tsx"
Cohesion: 0.40
Nodes (3): BuyButton(), Props, Window

## Knowledge Gaps
- **385 isolated node(s):** `npx`, `metadata`, `answer`, `values`, `faqs` (+380 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 469 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `next` to `app/not-found.tsx`, `admin-auth.ts`, `graph`, `review-clients.ts`, `(site)/page.tsx`, `team/page.tsx`, `package.json`, `reports/page.tsx`, `content-types.ts`, `emails.ts`, `growth-audit-form.tsx`, `LogoLoop.tsx`, `footer.tsx`, `location-detail.tsx`, `buildMetadata`, `work/page.tsx`, `hasAdminAccess`, `locations/page.tsx`, `getBlogPosts`, `seo.ts`, `blog-post-page.tsx`, `site-config.ts`, `lucide-react`, `structured-data.ts`, `react`, `electric-monogram.tsx`, `about/page.tsx`, `llms.txt/route.ts`, `service-finder.tsx`, `nav.tsx`, `work/[slug]/page.tsx`, `sitemap.ts`, `buy-button.tsx`?**
  _High betweenness centrality (0.217) - this node is a cross-community bridge._
- **Why does `react` connect `react` to `ElectricLogo.tsx`, `app/not-found.tsx`, `review-clients.ts`, `(site)/page.tsx`, `team/page.tsx`, `package.json`, `reports/page.tsx`, `accent-switcher.tsx`, `content-types.ts`, `growth-audit-form.tsx`, `LogoLoop.tsx`, `footer.tsx`, `location-detail.tsx`, `work/page.tsx`, `hasAdminAccess`, `WebThreads.tsx`, `seo.ts`, `blog-post-page.tsx`, `site-config.ts`, `lucide-react`, `globe.tsx`, `electric-monogram.tsx`, `about/page.tsx`, `PeekRating.tsx`, `service-finder.tsx`, `nav.tsx`, `industry-path.tsx`, `buy-button.tsx`?**
  _High betweenness centrality (0.110) - this node is a cross-community bridge._
- **Why does `Multi-tenant review tool /r/[client]` connect `README.md` to `review-clients.ts`, `Macrostructure family`, `PROJECT_CONTEXT.md`?**
  _High betweenness centrality (0.107) - this node is a cross-community bridge._
- **What connects `npx`, `metadata`, `answer` to the rest of the system?**
  _385 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `ElectricLogo.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.14736842105263157 - nodes in this community are weakly interconnected._
- **Should `admin-auth.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.10756302521008404 - nodes in this community are weakly interconnected._
- **Should `(site)/page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.08235294117647059 - nodes in this community are weakly interconnected._