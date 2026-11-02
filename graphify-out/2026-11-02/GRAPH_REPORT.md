# Graph Report - MARKETIX WEBSITE  (2026-11-02)

## Corpus Check
- 201 files · ~170,469 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 5 file(s) not represented in the graph (top: (none) 2, .example 1, .ico 1)

## Summary
- 1271 nodes · 3310 edges · 79 communities (74 shown, 5 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 38 edges (avg confidence: 0.89)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `2151ca15`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- ElectricLogo.tsx
- app/not-found.tsx
- admin-auth.ts
- graph
- draft-post.mjs
- review/route.ts
- locations.ts
- sitemap.ts
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
- google.mjs
- review-autoreply.ts
- Positioning guardrail (Marketix vs Vistrow)
- Macrostructure family
- PROJECT_CONTEXT.md
- review-clients.ts
- location-detail.tsx
- pricing/page.tsx
- work/[slug]/page.tsx
- services/page.tsx
- Accent violet #C82AEF
- vercel.json
- lucide-react
- next.config.mjs
- content-types.ts
- shadcn
- postcss.config.mjs
- buildMetadata
- industries/page.tsx
- blog-index-page.tsx
- calculators.tsx
- chat-widget.tsx
- import-demo-site.py
- dependencies
- review-stats.ts
- seo.ts
- Overnight redesign plan (started 2026-09-24)
- ai.ts
- next
- Buyer questions by topic (as searched)
- AccentSwitcher
- globe.tsx
- growth-audit-form.tsx
- footer.tsx
- (site)/page.tsx
- email-logo.ts
- review-generator.tsx
- blog-post-page.tsx
- callback/route.ts
- Google review replies and the review report
- electric-monogram.tsx
- nav.tsx
- marketixstudio.com DNS records
- LogoLoop.tsx
- WebThreads.tsx
- team/page.tsx
- devDependencies
- Hero image prompts (Marketix Studio)
- report-login.mjs
- react
- scripts
- service-finder.tsx
- framer-motion
- demand-map.tsx
- market-visuals.tsx
- industry-path.tsx
- buy-button.tsx
- tailwind.config.ts
- sheet-log.mjs
- Blog page, categories and daily-post automation (plan, 2026-11-02)

## God Nodes (most connected - your core abstractions)
1. `next` - 79 edges
2. `lucide-react` - 69 edges
3. `graph()` - 59 edges
4. `breadcrumbSchema()` - 56 edges
5. `buildMetadata()` - 44 edges
6. `faqSchema()` - 44 edges
7. `react` - 42 edges
8. `sentenceCase()` - 41 edges
9. `focusKeyword()` - 39 edges
10. `pageSource()` - 37 edges

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

## Communities (79 total, 5 thin omitted)

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
Cohesion: 0.27
Nodes (34): Page(), Page(), Page(), Page(), Page(), Page(), Page(), Page() (+26 more)

### Community 4 - "draft-post.mjs"
Cohesion: 0.07
Nodes (30): ref_node_path, allowedHrefs, allText(), blogPost, categories, categoriesSrc, category, clean() (+22 more)

### Community 5 - "review/route.ts"
Cohesion: 0.17
Nodes (24): applyHabits(), carModelOnly(), clean(), draftIssues(), hits, lastWords(), pickStyle(), POST() (+16 more)

### Community 6 - "locations.ts"
Cohesion: 0.15
Nodes (10): generateMetadata(), globalLocations, globalProcess, globalServices, indiaLocations, indiaProcess, indiaServices, locations (+2 more)

### Community 7 - "sitemap.ts"
Cohesion: 0.15
Nodes (10): generateMetadata(), Entry, industries, industriesOverview, industryList, industrySlugs, locationSlugs, reviewClientSlugs (+2 more)

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
Cohesion: 0.12
Nodes (22): Chart(), chip(), dynamic, metadata, Page(), ReplyQueue(), reviewClientList, listReviews() (+14 more)

### Community 12 - "accent-switcher.tsx"
Cohesion: 0.18
Nodes (14): HeroThreads(), toHex(), choose(), Bounds, DragState, Side, ThemeToggle(), toggle() (+6 more)

### Community 13 - "design.md (locked design system)"
Cohesion: 0.13
Nodes (17): design.md (locked design system), Atmospheric genre, CTA voice (dark pill + accent ring + arrow circle), Hallmark gate 22, Honest content rule (overrides every skill), Live-site elements not to carry over, No gradient text / accent on one word, Plus Jakarta Sans only typography (+9 more)

### Community 14 - "reveal.tsx"
Cohesion: 0.13
Nodes (11): SummaryGroup, Feature, FeatureCards(), LinkCardGrid(), Outcome, Step, Steps(), Reveal() (+3 more)

### Community 15 - "CLAUDE.md (project instructions)"
Cohesion: 0.14
Nodes (15): .claude/CLAUDE.md (graphify skill pointer), graphify skill (/graphify trigger), CLAUDE.md (project instructions), graphify query/path/explain usage rules, grep aliased to ugrep gotcha, marketix-dev launch config (port 3000), npm run build while dev corrupts .next, No hand-drawn browser/phone/dashboard chrome (+7 more)

### Community 16 - "README.md"
Cohesion: 0.15
Nodes (14): Content in code, no CMS, lib/blog.ts async blog API, Multi-tenant review tool /r/[client], WordPress 301 redirects (next.config.mjs), Claude API client review generator (app/api/review), content/ typed TS content directory, Framer Motion, lucide-react icons (+6 more)

### Community 17 - "emails.ts"
Cohesion: 0.06
Nodes (73): clean(), getSystemPrompt(), IncomingMessage, isRateLimited(), POST(), replySchema, requestLog, runtime (+65 more)

### Community 18 - "contact-form.tsx"
Cohesion: 0.22
Nodes (10): ContactForm(), Errors, isPhone(), nextSteps, services, Status, Field(), Input() (+2 more)

### Community 19 - "google.mjs"
Cohesion: 0.19
Nodes (18): appendRow(), call(), COLUMNS, inspectUrl(), pageSearchStats(), pageViews(), readRows(), SCOPES (+10 more)

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

### Community 24 - "review-clients.ts"
Cohesion: 0.24
Nodes (6): dynamic, metadata, Page(), ReplyHelper(), reviewClients, ReviewClient

### Community 25 - "location-detail.tsx"
Cohesion: 0.13
Nodes (29): answer, audiences, hero, metadata, hero, metadata, workGroups, Eyebrow() (+21 more)

### Community 26 - "pricing/page.tsx"
Cohesion: 0.32
Nodes (6): answer, drivers, faqs, metadata, ScopeBuilder(), ScopeOption

### Community 27 - "work/[slug]/page.tsx"
Cohesion: 0.12
Nodes (15): isTodo(), livePreview, Page(), clientLogos, clientStats, NOTE: the old WordPress /testimonials/ page still carries the theme's demo, testimonials, caseStudies (+7 more)

### Community 28 - "services/page.tsx"
Cohesion: 0.13
Nodes (18): agreed, answer, faqs, metadata, principles, steps, countOf(), metadata (+10 more)

### Community 29 - "Accent violet #C82AEF"
Cohesion: 0.33
Nodes (6): Card surface (radial gradient, 24px radius), Accent violet #C82AEF, Static violet light pool + grain, Neon ring (hover/focus only), Aurora hero removed (static light pool), Rejected: gold/yellow structural accent

### Community 30 - "vercel.json"
Cohesion: 0.33
Nodes (5): buildCommand, crons, framework, installCommand, $schema

### Community 31 - "lucide-react"
Cohesion: 0.09
Nodes (36): answer, faqs, metadata, values, Page(), revalidate, include, metadata (+28 more)

### Community 33 - "content-types.ts"
Cohesion: 0.09
Nodes (17): runtime, DigitalProduct, productList, TODO: photo not found on the live site under the expected filename - send it…, teamBySlug, toolList, tools, toolSlugs (+9 more)

### Community 36 - "buildMetadata"
Cohesion: 0.15
Nodes (14): metadata, metadata, metadata, metadata, metadata, generateMetadata(), generateMetadata(), formatDate() (+6 more)

### Community 37 - "industries/page.tsx"
Cohesion: 0.15
Nodes (14): answer, goals, metadata, answer, metadata, zones, Breadcrumbs(), Crumb (+6 more)

### Community 38 - "blog-index-page.tsx"
Cohesion: 0.10
Nodes (33): generateMetadata(), generateStaticParams(), Page(), revalidate, generateMetadata(), generateMetadata(), generateStaticParams(), Page() (+25 more)

### Community 39 - "calculators.tsx"
Cohesion: 0.19
Nodes (10): AdBudgetCalculator(), RoasCalculator(), slug(), SOURCE_PRESETS, UtmBuilder(), draft(), QueueItem(), call() (+2 more)

### Community 40 - "chat-widget.tsx"
Cohesion: 0.14
Nodes (15): GrowthAuditForm(), ChatMessage, ChatWidget(), onSubmit(), send(), fallback, greeting, LinkAction (+7 more)

### Community 41 - "import-demo-site.py"
Cohesion: 0.15
Nodes (10): glob, json, os, pathlib, pil, re, Build content/blog-queue.json from docs/SEARCH_DEMAND.md (real Google…, Imports a finished static website (plain HTML/CSS/JS + images) as a demo at… (+2 more)

### Community 42 - "dependencies"
Cohesion: 0.18
Nodes (11): dependencies, @anthropic-ai/sdk, cobe, framer-motion, gsap, lucide-react, motion, next (+3 more)

### Community 43 - "review-stats.ts"
Cohesion: 0.25
Nodes (13): POST(), runtime, FILE, FileData, RawStats, readFile(), readStats(), recordStat() (+5 more)

### Community 44 - "seo.ts"
Cohesion: 0.09
Nodes (17): app_globals, jakarta, metadata, RootLayout(), viewport, aiCrawlers, disallow, CUSTOM_PAGES (+9 more)

### Community 45 - "Overnight redesign plan (started 2026-09-24)"
Cohesion: 0.25
Nodes (7): Log, Morning summary (2026-09-24, ~07:00), Overnight redesign plan (started 2026-09-24), Phase 2: Pages (redesign each in the new system), Phase 3: Site-wide verification, Progress, The creative bar

### Community 46 - "ai.ts"
Cohesion: 0.33
Nodes (10): POST(), runtime, aiProvider, AiRateLimitError, AiRefusalError, aiStructured(), aiText(), AiTurn (+2 more)

### Community 47 - "next"
Cohesion: 0.20
Nodes (9): metadata, CtaBand(), Faq(), CtaLink, PageHero(), Breadcrumb(), Crumb, toolsOverview (+1 more)

### Community 48 - "Buyer questions by topic (as searched)"
Cohesion: 0.07
Nodes (26): automotive, branding-design, Buyer questions by topic (as searched), content-marketing, conversion-rate-optimisation, ecommerce-d2c, education, email-marketing-automation (+18 more)

### Community 49 - "AccentSwitcher"
Cohesion: 0.47
Nodes (8): AccentSwitcher(), begin(), finish(), move(), onMouseDown(), onTouchStart(), snap(), clamp()

### Community 50 - "globe.tsx"
Cohesion: 0.33
Nodes (7): facing(), Globe(), readColours(), cityCoords, LatLng, PUNE, cobe

### Community 51 - "growth-audit-form.tsx"
Cohesion: 0.20
Nodes (7): auditSteps, budgets, channelOptions, industries, serviceOptions, confettiDots, SuccessCelebration()

### Community 52 - "footer.tsx"
Cohesion: 0.16
Nodes (10): columns, icons, NewsletterForm(), Status, footerNav, NavChild, NavGroup, NavItem (+2 more)

### Community 53 - "(site)/page.tsx"
Cohesion: 0.15
Nodes (11): answer, averageRating, bestAt, coreServices, delay(), faqs, metadata, pillars (+3 more)

### Community 55 - "review-generator.tsx"
Cohesion: 0.11
Nodes (15): CarChoice, carLabel(), CarPicker(), ReviewGenerator(), generate(), Status, clamp(), GestureState (+7 more)

### Community 56 - "blog-post-page.tsx"
Cohesion: 0.36
Nodes (6): ReadingProgress(), ShareRow(), BlogPostPage(), headingId(), renderInlineLinks(), articleSchema()

### Community 57 - "callback/route.ts"
Cohesion: 0.21
Nodes (14): esc(), GET(), page(), runtime, GET(), runtime, exchangeCode(), listLocations() (+6 more)

### Community 58 - "Google review replies and the review report"
Cohesion: 0.29
Nodes (6): Google review replies and the review report, Repeat protection (drafts and replies), Rules the replies follow (lib/review-reply.ts), Setup, once, Signing in, What runs

### Community 59 - "electric-monogram.tsx"
Cohesion: 0.32
Nodes (6): NotFound(), routes, currentAccent(), ELECTRIC, ElectricMonogram(), AccentKey

### Community 60 - "nav.tsx"
Cohesion: 0.18
Nodes (10): LOGO, LOGO_LIGHT, Wordmark(), aboutLinks, aboutMatch, industriesNav, PanelId, plainLinks (+2 more)

### Community 61 - "marketixstudio.com DNS records"
Cohesion: 0.50
Nodes (3): If the zone has to be recreated at MilesWeb, marketixstudio.com DNS records, When the new site moves to Vercel

### Community 62 - "LogoLoop.tsx"
Cohesion: 0.23
Nodes (11): ClientLogoLoop(), Logo, ANIMATION_CONFIG, cx(), LogoItem, LogoLoop, LogoLoopProps, toCssLength() (+3 more)

### Community 63 - "WebThreads.tsx"
Cohesion: 0.25
Nodes (8): ctxMap, FAN_MODE, FanMode, hexToRgb(), WebThreads(), WebThreadsCtx, WebThreadsProps, ogl

### Community 64 - "team/page.tsx"
Cohesion: 0.18
Nodes (13): chromaItems, initials(), initialsImage(), metadata, Page(), shades, ChromaGrid(), ChromaGridProps (+5 more)

### Community 65 - "devDependencies"
Cohesion: 0.25
Nodes (8): devDependencies, autoprefixer, postcss, tailwindcss, @types/node, @types/react, @types/react-dom, typescript

### Community 66 - "Hero image prompts (Marketix Studio)"
Cohesion: 0.25
Nodes (7): Format (same for every image), Hero image prompts (Marketix Studio), Industries, Locations, Negative prompt (if your tool supports one), Services, Style block (paste at the start of every prompt)

### Community 67 - "report-login.mjs"
Cohesion: 0.25
Nodes (6): ref_node_crypto, ref_node_fs, ref_node_readline, email, kept, salt

### Community 68 - "react"
Cohesion: 0.14
Nodes (9): RevealRoot(), ExplorerItem, IndustryExplorer(), FILL_PATHS, LoaderPhase, LogoTraceLoaderProps, Magnet(), MagnetProps (+1 more)

### Community 69 - "scripts"
Cohesion: 0.29
Nodes (7): scripts, build, dev, lint, preview, report-login, start

### Community 70 - "service-finder.tsx"
Cohesion: 0.40
Nodes (5): FinderCard, GoalId, goals, ServiceFinder(), slugOf()

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

### Community 75 - "buy-button.tsx"
Cohesion: 0.40
Nodes (3): BuyButton(), Props, Window

### Community 77 - "sheet-log.mjs"
Cohesion: 0.40
Nodes (4): ref_node_url, googleConfigured(), post, root

### Community 79 - "Blog page, categories and daily-post automation (plan, 2026-11-02)"
Cohesion: 0.22
Nodes (8): APIs and accounts, Blog page, categories and daily-post automation (plan, 2026-11-02), Blog page layout (/blog), Built (2026-11-02), Categories (from real searches), Daily post automation, Google Cloud (2026-11-02), Writing structure (2026-11-02)

## Knowledge Gaps
- **435 isolated node(s):** `npx`, `metadata`, `answer`, `values`, `faqs` (+430 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 528 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `next` to `app/not-found.tsx`, `admin-auth.ts`, `locations.ts`, `sitemap.ts`, `package.json`, `review-report.ts`, `reveal.tsx`, `emails.ts`, `review-clients.ts`, `location-detail.tsx`, `pricing/page.tsx`, `work/[slug]/page.tsx`, `services/page.tsx`, `lucide-react`, `content-types.ts`, `buildMetadata`, `industries/page.tsx`, `blog-index-page.tsx`, `chat-widget.tsx`, `seo.ts`, `footer.tsx`, `(site)/page.tsx`, `review-generator.tsx`, `blog-post-page.tsx`, `electric-monogram.tsx`, `nav.tsx`, `LogoLoop.tsx`, `team/page.tsx`, `react`, `service-finder.tsx`, `framer-motion`, `demand-map.tsx`, `market-visuals.tsx`, `buy-button.tsx`?**
  _High betweenness centrality (0.227) - this node is a cross-community bridge._
- **Why does `Multi-tenant review tool /r/[client]` connect `README.md` to `review-clients.ts`, `Macrostructure family`, `PROJECT_CONTEXT.md`?**
  _High betweenness centrality (0.122) - this node is a cross-community bridge._
- **Why does `lucide-react` connect `lucide-react` to `app/not-found.tsx`, `admin-auth.ts`, `locations.ts`, `sitemap.ts`, `package.json`, `review-report.ts`, `accent-switcher.tsx`, `reveal.tsx`, `emails.ts`, `contact-form.tsx`, `review-clients.ts`, `location-detail.tsx`, `pricing/page.tsx`, `work/[slug]/page.tsx`, `services/page.tsx`, `content-types.ts`, `industries/page.tsx`, `blog-index-page.tsx`, `calculators.tsx`, `chat-widget.tsx`, `next`, `growth-audit-form.tsx`, `footer.tsx`, `(site)/page.tsx`, `review-generator.tsx`, `blog-post-page.tsx`, `electric-monogram.tsx`, `nav.tsx`, `react`, `service-finder.tsx`, `framer-motion`, `demand-map.tsx`, `industry-path.tsx`, `buy-button.tsx`?**
  _High betweenness centrality (0.089) - this node is a cross-community bridge._
- **What connects `npx`, `metadata`, `answer` to the rest of the system?**
  _435 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `ElectricLogo.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.14736842105263157 - nodes in this community are weakly interconnected._
- **Should `draft-post.mjs` be split into smaller, more focused modules?**
  _Cohesion score 0.06554621848739496 - nodes in this community are weakly interconnected._
- **Should `components.json` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._