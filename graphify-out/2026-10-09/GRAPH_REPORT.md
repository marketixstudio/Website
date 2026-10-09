# Graph Report - MARKETIX WEBSITE  (2026-10-09)

## Corpus Check
- 186 files · ~147,562 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 5 file(s) not represented in the graph (top: (none) 2, .example 1, .ico 1)

## Summary
- 1133 nodes · 2881 edges · 70 communities (65 shown, 5 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 36 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `bd52a557`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- ElectricLogo.tsx
- app/not-found.tsx
- admin-auth.ts
- graph
- review-generator.tsx
- review/route.ts
- services/page.tsx
- team/page.tsx
- components.json
- package.json
- compilerOptions
- reports/page.tsx
- accent-switcher.tsx
- design.md (locked design system)
- tools/[slug]/page.tsx
- CLAUDE.md (project instructions)
- README.md
- emails.ts
- growth-audit-form.tsx
- LogoLoop.tsx
- review-autoreply.ts
- Positioning guardrail (Marketix vs Vistrow)
- Macrostructure family
- PROJECT_CONTEXT.md
- products-catalog.ts
- lucide-react
- content-types.ts
- (site)/page.tsx
- hasAdminAccess
- Accent violet #C82AEF
- vercel.json
- review-report.ts
- next.config.mjs
- locations.ts
- shadcn
- postcss.config.mjs
- legal-page.tsx
- tools/page.tsx
- blog/page.tsx
- next
- app/layout.tsx
- import-demo-site.py
- blog-post-page.tsx
- chat-widget.tsx
- search-journey.tsx
- Overnight redesign plan (started 2026-09-24)
- dependencies
- react
- Buyer questions by topic (as searched)
- AccentSwitcher
- globe.tsx
- calculators.tsx
- devDependencies
- structured-data.ts
- scripts
- chat-knowledge.ts
- demand-map.tsx
- callback/route.ts
- Google review replies and the review report
- service-finder.tsx
- nav.tsx
- marketixstudio.com DNS records
- market-visuals.tsx
- tailwind.config.ts
- industry-path.tsx
- sitemap.ts
- pricing/page.tsx
- scene-3d.tsx
- buildMetadata
- link-card-grid.tsx

## God Nodes (most connected - your core abstractions)
1. `next` - 76 edges
2. `lucide-react` - 68 edges
3. `graph()` - 57 edges
4. `breadcrumbSchema()` - 54 edges
5. `react` - 44 edges
6. `buildMetadata()` - 42 edges
7. `faqSchema()` - 40 edges
8. `answerSchema()` - 32 edges
9. `JsonLd()` - 29 edges
10. `TextLink()` - 27 edges

## Surprising Connections (you probably didn't know these)
- `Phase 2: Pages (redesign each in the new system)` --references--> `ServiceHero()`  [INFERRED]
  docs/REDESIGN_PLAN.md → components/v2/service-hero.tsx
- `SEO / AEO / GEO checklist (every indexable page)` --references--> `AnswerCard()`  [INFERRED]
  docs/REDESIGN_PLAN.md → components/v2/primitives.tsx
- `SEO / AEO / GEO checklist (every indexable page)` --references--> `buildMetadata()`  [INFERRED]
  docs/REDESIGN_PLAN.md → lib/seo.ts
- `Never fabricate metrics/testimonials/clients rule` --semantically_similar_to--> `Honest content rule (overrides every skill)`  [INFERRED] [semantically similar]
  CLAUDE.md → design.md
- `Non-negotiable rules` --references--> `FillHeading()`  [INFERRED]
  docs/REDESIGN_PLAN.md → components/v2/fill-heading.tsx

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **v2 pilot rebuild in new design system** — docs_project_context_v2_rebuild, design_map_diagram, design_quote_led, design_n5_floating_pill_nav, design_ft5_statement_footer [EXTRACTED 1.00]
- **Anti-AI-slop design decisions (Aurora, eyebrows, column footer removed)** — docs_project_context_aurora_removed, docs_project_context_eyebrows_removed, docs_project_context_statement_footer_decision, design_light_pool, design_section_labels_off, design_ft5_statement_footer [INFERRED 0.85]
- **Differentiation from sister brand Vistrow** — claude_not_like_vistrow_rule, design_positioning_guardrail, docs_project_context_keyword_territory_split, docs_project_context_unpublish_vistrow_blog, docs_project_context_rejected_vistrow_copy [INFERRED 0.85]

## Communities (70 total, 5 thin omitted)

### Community 0 - "ElectricLogo.tsx"
Cohesion: 0.09
Nodes (29): HeroThreads(), toHex(), blurGrid(), blurLine(), ElectricLogo(), ElectricLogoProps, Focus, hexToRgb() (+21 more)

### Community 1 - "app/not-found.tsx"
Cohesion: 0.19
Nodes (8): metadata, NotFound(), routes, CardSpotlight(), topics, waLink(), WhatsAppFloat(), onSubmit()

### Community 2 - "admin-auth.ts"
Cohesion: 0.11
Nodes (25): attempts, createFirstLogin(), signIn(), startSession(), LoginForm(), dynamic, metadata, Page() (+17 more)

### Community 3 - "graph"
Cohesion: 0.21
Nodes (30): Page(), Page(), Page(), Page(), Page(), Page(), Page(), Page() (+22 more)

### Community 4 - "review-generator.tsx"
Cohesion: 0.15
Nodes (9): ReviewGenerator(), Status, clamp(), GestureState, PeekRating(), PeekRatingProps, PeekRatingShape, reducedMotion() (+1 more)

### Community 5 - "review/route.ts"
Cohesion: 0.16
Nodes (25): POST(), runtime, hits, pickStyle(), POST(), rateLimited(), recentReviews, remember() (+17 more)

### Community 6 - "services/page.tsx"
Cohesion: 0.13
Nodes (19): agreed, answer, metadata, principles, steps, countOf(), metadata, Page() (+11 more)

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

### Community 11 - "reports/page.tsx"
Cohesion: 0.13
Nodes (14): Chart(), chip(), dynamic, metadata, Page(), QueueItem(), call(), draft() (+6 more)

### Community 12 - "accent-switcher.tsx"
Cohesion: 0.18
Nodes (15): choose(), Bounds, DragState, Side, currentAccent(), ELECTRIC, ElectricMonogram(), ThemeToggle() (+7 more)

### Community 13 - "design.md (locked design system)"
Cohesion: 0.13
Nodes (17): design.md (locked design system), Atmospheric genre, CTA voice (dark pill + accent ring + arrow circle), Hallmark gate 22, Honest content rule (overrides every skill), Live-site elements not to carry over, No gradient text / accent on one word, Plus Jakarta Sans only typography (+9 more)

### Community 14 - "tools/[slug]/page.tsx"
Cohesion: 0.18
Nodes (8): generateMetadata(), SummaryGroup, FeatureCards(), Step, Steps(), Reveal(), RevealProps, SectionHeading()

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
Cohesion: 0.12
Nodes (18): Errors, nextSteps, services, Status, Field(), Input(), Select(), Textarea() (+10 more)

### Community 19 - "LogoLoop.tsx"
Cohesion: 0.23
Nodes (11): ClientLogoLoop(), Logo, ANIMATION_CONFIG, cx(), LogoItem, LogoLoop, LogoLoopProps, toCssLength() (+3 more)

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

### Community 24 - "products-catalog.ts"
Cohesion: 0.22
Nodes (6): runtime, Feature, DigitalProduct, productList, lib_content_types_feature, lib_content_types_step

### Community 25 - "lucide-react"
Cohesion: 0.14
Nodes (27): answer, audiences, hero, metadata, hero, metadata, workGroups, CUSTOM_PAGES (+19 more)

### Community 26 - "content-types.ts"
Cohesion: 0.12
Nodes (13): Outcome, archivedVistrowPosts, toolList, tools, toolSlugs, BlogPost, BlogSection, BlogSeoImage (+5 more)

### Community 27 - "(site)/page.tsx"
Cohesion: 0.15
Nodes (11): answer, averageRating, bestAt, coreServices, delay(), faqs, metadata, pillars (+3 more)

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
Cohesion: 0.17
Nodes (22): Bar, buildReport(), monthName(), Period, periodDays(), stars(), Counts, dayKey() (+14 more)

### Community 33 - "locations.ts"
Cohesion: 0.14
Nodes (11): generateMetadata(), globalLocations, globalProcess, globalServices, indiaLocations, indiaProcess, indiaServices, locations (+3 more)

### Community 36 - "legal-page.tsx"
Cohesion: 0.17
Nodes (10): metadata, metadata, metadata, metadata, metadata, formatDate(), LegalPage(), slugify() (+2 more)

### Community 37 - "tools/page.tsx"
Cohesion: 0.20
Nodes (8): metadata, CtaBand(), Faq(), CtaLink, PageHero(), Breadcrumb(), Crumb, toolsOverview

### Community 38 - "blog/page.tsx"
Cohesion: 0.30
Nodes (9): generateMetadata(), Page(), revalidate, generateMetadata(), generateStaticParams(), Page(), revalidate, getBlogPost() (+1 more)

### Community 39 - "next"
Cohesion: 0.24
Nodes (4): generateMetadata(), SeoMetadata, siteTagline, next

### Community 40 - "app/layout.tsx"
Cohesion: 0.20
Nodes (9): app_globals, jakarta, metadata, RootLayout(), viewport, GoogleAnalytics(), organizationSchema, websiteSchema (+1 more)

### Community 41 - "import-demo-site.py"
Cohesion: 0.22
Nodes (7): glob, os, pil, re, Imports a finished static website (plain HTML/CSS/JS + images) as a demo at…, shutil, sys

### Community 42 - "blog-post-page.tsx"
Cohesion: 0.36
Nodes (6): ReadingProgress(), ShareRow(), BlogPostPage(), headingId(), renderInlineLinks(), articleSchema()

### Community 43 - "chat-widget.tsx"
Cohesion: 0.12
Nodes (17): ContactForm(), GrowthAuditForm(), ChatMessage, ChatWidget(), onSubmit(), send(), fallback, greeting (+9 more)

### Community 44 - "search-journey.tsx"
Cohesion: 0.33
Nodes (5): loops, queries, SearchJourney(), Stage, stages

### Community 45 - "Overnight redesign plan (started 2026-09-24)"
Cohesion: 0.25
Nodes (7): Log, Morning summary (2026-09-24, ~07:00), Overnight redesign plan (started 2026-09-24), Phase 2: Pages (redesign each in the new system), Phase 3: Site-wide verification, Progress, The creative bar

### Community 46 - "dependencies"
Cohesion: 0.18
Nodes (11): dependencies, @anthropic-ai/sdk, cobe, framer-motion, gsap, lucide-react, motion, next (+3 more)

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

### Community 51 - "calculators.tsx"
Cohesion: 0.25
Nodes (6): AdBudgetCalculator(), RoasCalculator(), slug(), SOURCE_PRESETS, UtmBuilder(), draft()

### Community 52 - "devDependencies"
Cohesion: 0.25
Nodes (8): devDependencies, autoprefixer, postcss, tailwindcss, @types/node, @types/react, @types/react-dom, typescript

### Community 53 - "structured-data.ts"
Cohesion: 0.08
Nodes (39): answer, faqs, metadata, values, include, metadata, faqs, metadata (+31 more)

### Community 54 - "scripts"
Cohesion: 0.29
Nodes (7): scripts, build, dev, lint, preview, report-login, start

### Community 55 - "chat-knowledge.ts"
Cohesion: 0.10
Nodes (19): GET(), line(), revalidate, dynamicParams, generateMetadata(), blogPosts, industriesOverview, industryList (+11 more)

### Community 56 - "demand-map.tsx"
Cohesion: 0.14
Nodes (11): DemandMap(), EASE, Method, methods, SourceCard(), sources, START_MS, useTypingLoop() (+3 more)

### Community 57 - "callback/route.ts"
Cohesion: 0.20
Nodes (14): esc(), GET(), page(), runtime, GET(), runtime, exchangeCode(), oauthUrl() (+6 more)

### Community 58 - "Google review replies and the review report"
Cohesion: 0.33
Nodes (5): Google review replies and the review report, Rules the replies follow (lib/review-reply.ts), Setup, once, Signing in, What runs

### Community 59 - "service-finder.tsx"
Cohesion: 0.40
Nodes (5): FinderCard, GoalId, goals, ServiceFinder(), slugOf()

### Community 60 - "nav.tsx"
Cohesion: 0.08
Nodes (25): LOGO, LOGO_LIGHT, Wordmark(), columns, group(), icons, SiteFooter(), aboutLinks (+17 more)

### Community 61 - "marketixstudio.com DNS records"
Cohesion: 0.50
Nodes (3): If the zone has to be recreated at MilesWeb, marketixstudio.com DNS records, When the new site moves to Vercel

### Community 62 - "market-visuals.tsx"
Cohesion: 0.39
Nodes (7): EASE, fmt(), HoursOverlap(), MarketBoard(), overlap(), Span, wrap()

### Community 64 - "industry-path.tsx"
Cohesion: 0.28
Nodes (7): IndustryPath(), industryScene(), Path, paths, sectorScenes, PathExplorer(), PathStep

### Community 65 - "sitemap.ts"
Cohesion: 0.15
Nodes (10): Entry, sitemap(), legalSlugs, reviewClientSlugs, serviceSlugs, caseStudyIndustries, caseStudyList, caseStudySlugs (+2 more)

### Community 66 - "pricing/page.tsx"
Cohesion: 0.32
Nodes (6): answer, drivers, faqs, metadata, ScopeBuilder(), ScopeOption

### Community 67 - "scene-3d.tsx"
Cohesion: 0.29
Nodes (5): BoxProps, Scene3D(), SceneKind, scenes, Tilt3D()

### Community 68 - "buildMetadata"
Cohesion: 0.10
Nodes (23): answer, goals, metadata, generateMetadata(), metadata, generateMetadata(), isTodo(), livePreview (+15 more)

## Knowledge Gaps
- **376 isolated node(s):** `npx`, `metadata`, `answer`, `values`, `faqs` (+371 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 460 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `next` to `app/not-found.tsx`, `admin-auth.ts`, `review-generator.tsx`, `services/page.tsx`, `team/page.tsx`, `package.json`, `reports/page.tsx`, `tools/[slug]/page.tsx`, `emails.ts`, `LogoLoop.tsx`, `lucide-react`, `content-types.ts`, `(site)/page.tsx`, `hasAdminAccess`, `locations.ts`, `legal-page.tsx`, `tools/page.tsx`, `blog/page.tsx`, `app/layout.tsx`, `blog-post-page.tsx`, `chat-widget.tsx`, `search-journey.tsx`, `react`, `structured-data.ts`, `chat-knowledge.ts`, `demand-map.tsx`, `service-finder.tsx`, `nav.tsx`, `market-visuals.tsx`, `sitemap.ts`, `pricing/page.tsx`, `buildMetadata`, `link-card-grid.tsx`?**
  _High betweenness centrality (0.227) - this node is a cross-community bridge._
- **Why does `Multi-tenant review tool /r/[client]` connect `README.md` to `hasAdminAccess`, `Macrostructure family`, `PROJECT_CONTEXT.md`?**
  _High betweenness centrality (0.124) - this node is a cross-community bridge._
- **Why does `react` connect `react` to `ElectricLogo.tsx`, `app/not-found.tsx`, `review-generator.tsx`, `services/page.tsx`, `team/page.tsx`, `package.json`, `reports/page.tsx`, `accent-switcher.tsx`, `growth-audit-form.tsx`, `LogoLoop.tsx`, `lucide-react`, `content-types.ts`, `hasAdminAccess`, `tools/page.tsx`, `app/layout.tsx`, `blog-post-page.tsx`, `chat-widget.tsx`, `globe.tsx`, `calculators.tsx`, `structured-data.ts`, `demand-map.tsx`, `service-finder.tsx`, `nav.tsx`, `industry-path.tsx`, `pricing/page.tsx`, `scene-3d.tsx`, `buildMetadata`?**
  _High betweenness centrality (0.109) - this node is a cross-community bridge._
- **What connects `npx`, `metadata`, `answer` to the rest of the system?**
  _376 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `ElectricLogo.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.08669354838709678 - nodes in this community are weakly interconnected._
- **Should `admin-auth.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.11229946524064172 - nodes in this community are weakly interconnected._
- **Should `review-generator.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.14705882352941177 - nodes in this community are weakly interconnected._