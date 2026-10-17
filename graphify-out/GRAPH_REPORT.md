# Graph Report - MARKETIX WEBSITE  (2026-10-17)

## Corpus Check
- 190 files · ~156,775 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 5 file(s) not represented in the graph (top: (none) 2, .example 1, .ico 1)

## Summary
- 1174 nodes · 3127 edges · 84 communities (77 shown, 7 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 36 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `625c615a`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- ElectricLogo.tsx
- app/not-found.tsx
- admin-auth.ts
- graph
- industries.ts
- review/route.ts
- chat-knowledge.ts
- team/page.tsx
- components.json
- package.json
- compilerOptions
- reports/page.tsx
- accent-switcher.tsx
- design.md (locked design system)
- reveal.tsx
- CLAUDE.md (project instructions)
- README.md
- emails.ts
- contact-form.tsx
- industries/page.tsx
- review-autoreply.ts
- Positioning guardrail (Marketix vs Vistrow)
- Macrostructure family
- PROJECT_CONTEXT.md
- pricing/page.tsx
- location-detail.tsx
- products-catalog.ts
- approach/page.tsx
- (site)/page.tsx
- Accent violet #C82AEF
- vercel.json
- structured-data.ts
- next.config.mjs
- locations.ts
- shadcn
- postcss.config.mjs
- next
- dependencies
- getBlogPosts
- tools/[slug]/page.tsx
- site-config.ts
- import-demo-site.py
- blog-post-page.tsx
- review-report.ts
- devDependencies
- Overnight redesign plan (started 2026-09-24)
- scripts
- sitemap.ts
- Buyer questions by topic (as searched)
- AccentSwitcher
- globe.tsx
- tailwind.config.ts
- footer.tsx
- content-types.ts
- email-logo.ts
- review-generator.tsx
- hasAdminAccess
- callback/route.ts
- Google review replies and the review report
- lucide-react
- nav.tsx
- marketixstudio.com DNS records
- LogoLoop.tsx
- WebThreads.tsx
- ChromaGrid.tsx
- growth-audit-form.tsx
- Hero image prompts (Marketix Studio)
- LogoTraceLoader.tsx
- react
- ai.ts
- trackLead
- framer-motion
- demand-map.tsx
- market-visuals.tsx
- industry-path.tsx
- service-finder.tsx
- app/layout.tsx
- pune-areas.ts
- buy-button.tsx
- QueueItem
- report-login.mjs
- services/[slug]/page.tsx
- blog-index.tsx
- reply-helper.tsx

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
- `Phase 1: Chrome and routing` --references--> `SiteFooter()`  [INFERRED]
  docs/REDESIGN_PLAN.md → components/v2/footer.tsx
- `Phase 1: Chrome and routing` --references--> `serviceHref()`  [INFERRED]
  docs/REDESIGN_PLAN.md → components/v2/primitives.tsx
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

## Communities (84 total, 7 thin omitted)

### Community 0 - "ElectricLogo.tsx"
Cohesion: 0.15
Nodes (19): blurGrid(), blurLine(), ElectricLogo(), ElectricLogoProps, Focus, hexToRgb(), Point, Pulse (+11 more)

### Community 1 - "app/not-found.tsx"
Cohesion: 0.27
Nodes (5): metadata, NotFound(), CardSpotlight(), SiteNav(), Phase 1: Chrome and routing

### Community 2 - "admin-auth.ts"
Cohesion: 0.18
Nodes (19): attempts, createFirstLogin(), signIn(), startSession(), LoginForm(), dynamic, metadata, Page() (+11 more)

### Community 3 - "graph"
Cohesion: 0.26
Nodes (34): Page(), Page(), revalidate, Page(), Page(), Page(), Page(), Page() (+26 more)

### Community 4 - "industries.ts"
Cohesion: 0.22
Nodes (6): generateMetadata(), industries, industriesOverview, industryList, industrySlugs, IndustryContent

### Community 5 - "review/route.ts"
Cohesion: 0.18
Nodes (23): applyHabits(), carModelOnly(), clean(), draftIssues(), hits, lastWords(), pickStyle(), POST() (+15 more)

### Community 6 - "chat-knowledge.ts"
Cohesion: 0.26
Nodes (9): GET(), line(), revalidate, locationList, serviceList, servicesOverview, chatPuneAreas, keyPages (+1 more)

### Community 7 - "team/page.tsx"
Cohesion: 0.36
Nodes (7): chromaItems, initials(), initialsImage(), metadata, Page(), shades, personSchema()

### Community 8 - "components.json"
Cohesion: 0.11
Nodes (18): aliases, components, hooks, lib, ui, utils, registries, @react-bits (+10 more)

### Community 9 - "package.json"
Cohesion: 0.15
Nodes (12): name, private, version, @anthropic-ai/sdk, autoprefixer, motion, postcss, react-dom (+4 more)

### Community 10 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 11 - "reports/page.tsx"
Cohesion: 0.16
Nodes (11): Chart(), chip(), dynamic, metadata, Page(), ReplyQueue(), monthName(), parsePeriod() (+3 more)

### Community 12 - "accent-switcher.tsx"
Cohesion: 0.20
Nodes (13): choose(), Bounds, DragState, Side, ThemeToggle(), toggle(), ACCENT_KEY, AccentKey (+5 more)

### Community 13 - "design.md (locked design system)"
Cohesion: 0.13
Nodes (17): design.md (locked design system), Atmospheric genre, CTA voice (dark pill + accent ring + arrow circle), Hallmark gate 22, Honest content rule (overrides every skill), Live-site elements not to carry over, No gradient text / accent on one word, Plus Jakarta Sans only typography (+9 more)

### Community 14 - "reveal.tsx"
Cohesion: 0.16
Nodes (8): SummaryGroup, Feature, FeatureCards(), LinkCardGrid(), Reveal(), RevealProps, SectionHeading(), OverviewCard

### Community 15 - "CLAUDE.md (project instructions)"
Cohesion: 0.14
Nodes (15): .claude/CLAUDE.md (graphify skill pointer), graphify skill (/graphify trigger), CLAUDE.md (project instructions), graphify query/path/explain usage rules, grep aliased to ugrep gotcha, marketix-dev launch config (port 3000), npm run build while dev corrupts .next, No hand-drawn browser/phone/dashboard chrome (+7 more)

### Community 16 - "README.md"
Cohesion: 0.15
Nodes (14): Content in code, no CMS, lib/blog.ts async blog API, Multi-tenant review tool /r/[client], WordPress 301 redirects (next.config.mjs), Claude API client review generator (app/api/review), content/ typed TS content directory, Framer Motion, lucide-react icons (+6 more)

### Community 17 - "emails.ts"
Cohesion: 0.09
Nodes (54): clean(), getSystemPrompt(), IncomingMessage, isRateLimited(), POST(), replySchema, requestLog, runtime (+46 more)

### Community 18 - "contact-form.tsx"
Cohesion: 0.22
Nodes (10): ContactForm(), Errors, isPhone(), nextSteps, services, Status, Field(), Input() (+2 more)

### Community 19 - "industries/page.tsx"
Cohesion: 0.15
Nodes (14): answer, goals, metadata, answer, metadata, zones, Breadcrumbs(), Crumb (+6 more)

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

### Community 24 - "pricing/page.tsx"
Cohesion: 0.17
Nodes (12): countOf(), metadata, answer, drivers, faqs, metadata, GlossIcon(), SIZES (+4 more)

### Community 25 - "location-detail.tsx"
Cohesion: 0.12
Nodes (35): answer, audiences, hero, metadata, hero, metadata, workGroups, answer (+27 more)

### Community 26 - "products-catalog.ts"
Cohesion: 0.18
Nodes (7): runtime, Step, Steps(), DigitalProduct, productList, lib_content_types_feature, lib_content_types_step

### Community 27 - "approach/page.tsx"
Cohesion: 0.11
Nodes (20): agreed, answer, faqs, metadata, principles, steps, faqs, metadata (+12 more)

### Community 28 - "(site)/page.tsx"
Cohesion: 0.15
Nodes (11): answer, averageRating, bestAt, coreServices, delay(), faqs, metadata, pillars (+3 more)

### Community 29 - "Accent violet #C82AEF"
Cohesion: 0.33
Nodes (6): Card surface (radial gradient, 24px radius), Accent violet #C82AEF, Static violet light pool + grain, Neon ring (hover/focus only), Aurora hero removed (static light pool), Rejected: gold/yellow structural accent

### Community 30 - "vercel.json"
Cohesion: 0.33
Nodes (5): buildCommand, crons, framework, installCommand, $schema

### Community 31 - "structured-data.ts"
Cohesion: 0.08
Nodes (31): answer, faqs, metadata, values, include, metadata, metadata, who (+23 more)

### Community 33 - "locations.ts"
Cohesion: 0.15
Nodes (10): generateMetadata(), globalLocations, globalProcess, globalServices, indiaLocations, indiaProcess, indiaServices, locations (+2 more)

### Community 36 - "next"
Cohesion: 0.15
Nodes (12): metadata, metadata, metadata, metadata, metadata, formatDate(), LegalPage(), slugify() (+4 more)

### Community 37 - "dependencies"
Cohesion: 0.18
Nodes (11): dependencies, @anthropic-ai/sdk, cobe, framer-motion, gsap, lucide-react, motion, next (+3 more)

### Community 38 - "getBlogPosts"
Cohesion: 0.21
Nodes (12): generateMetadata(), Page(), generateMetadata(), generateStaticParams(), Page(), revalidate, sitemap(), archivedVistrowPosts (+4 more)

### Community 39 - "tools/[slug]/page.tsx"
Cohesion: 0.18
Nodes (9): generateMetadata(), Page(), AdBudgetCalculator(), RoasCalculator(), slug(), SOURCE_PRESETS, UtmBuilder(), draft() (+1 more)

### Community 40 - "site-config.ts"
Cohesion: 0.14
Nodes (14): ChatMessage, fallback, greeting, LinkAction, Prompt, questions, topics, topics (+6 more)

### Community 41 - "import-demo-site.py"
Cohesion: 0.22
Nodes (7): glob, os, pil, re, Imports a finished static website (plain HTML/CSS/JS + images) as a demo at…, shutil, sys

### Community 42 - "blog-post-page.tsx"
Cohesion: 0.20
Nodes (9): aiCrawlers, disallow, ReadingProgress(), ShareRow(), BlogPostPage(), headingId(), renderInlineLinks(), siteUrl (+1 more)

### Community 43 - "review-report.ts"
Cohesion: 0.18
Nodes (21): local, Bar, buildReport(), Period, periodDays(), stars(), Counts, dayKey() (+13 more)

### Community 44 - "devDependencies"
Cohesion: 0.25
Nodes (8): devDependencies, autoprefixer, postcss, tailwindcss, @types/node, @types/react, @types/react-dom, typescript

### Community 45 - "Overnight redesign plan (started 2026-09-24)"
Cohesion: 0.25
Nodes (7): Log, Morning summary (2026-09-24, ~07:00), Overnight redesign plan (started 2026-09-24), Phase 2: Pages (redesign each in the new system), Phase 3: Site-wide verification, Progress, The creative bar

### Community 46 - "scripts"
Cohesion: 0.29
Nodes (7): scripts, build, dev, lint, preview, report-login, start

### Community 47 - "sitemap.ts"
Cohesion: 0.14
Nodes (11): Entry, locationSlugs, reviewClientSlugs, serviceSlugs, caseStudies, caseStudyIndustries, caseStudyList, caseStudySlugs (+3 more)

### Community 48 - "Buyer questions by topic (as searched)"
Cohesion: 0.07
Nodes (26): automotive, branding-design, Buyer questions by topic (as searched), content-marketing, conversion-rate-optimisation, ecommerce-d2c, education, email-marketing-automation (+18 more)

### Community 49 - "AccentSwitcher"
Cohesion: 0.47
Nodes (8): AccentSwitcher(), begin(), finish(), move(), onMouseDown(), onTouchStart(), snap(), clamp()

### Community 50 - "globe.tsx"
Cohesion: 0.29
Nodes (8): AreaGlobe(), facing(), Globe(), readColours(), cityCoords, LatLng, PUNE, cobe

### Community 52 - "footer.tsx"
Cohesion: 0.11
Nodes (16): routes, currentAccent(), ELECTRIC, ElectricMonogram(), columns, group(), icons, SiteFooter() (+8 more)

### Community 53 - "content-types.ts"
Cohesion: 0.12
Nodes (15): Outcome, TODO: photo not found on the live site under the expected filename - send it…, team, teamBySlug, toolList, tools, toolSlugs, BlogSection (+7 more)

### Community 55 - "review-generator.tsx"
Cohesion: 0.11
Nodes (15): CarChoice, carLabel(), CarPicker(), ReviewGenerator(), generate(), Status, clamp(), GestureState (+7 more)

### Community 56 - "hasAdminAccess"
Cohesion: 0.21
Nodes (9): POST(), runtime, dynamic, metadata, Page(), reviewClientList, reviewClients, hasAdminAccess() (+1 more)

### Community 57 - "callback/route.ts"
Cohesion: 0.20
Nodes (14): esc(), GET(), page(), runtime, GET(), runtime, exchangeCode(), oauthUrl() (+6 more)

### Community 58 - "Google review replies and the review report"
Cohesion: 0.29
Nodes (6): Google review replies and the review report, Repeat protection (drafts and replies), Rules the replies follow (lib/review-reply.ts), Setup, once, Signing in, What runs

### Community 59 - "lucide-react"
Cohesion: 0.21
Nodes (9): metadata, CtaBand(), Faq(), CtaLink, PageHero(), Breadcrumb(), Crumb, toolsOverview (+1 more)

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
Cohesion: 0.21
Nodes (10): HeroThreads(), toHex(), ctxMap, FAN_MODE, FanMode, hexToRgb(), WebThreads(), WebThreadsCtx (+2 more)

### Community 64 - "ChromaGrid.tsx"
Cohesion: 0.33
Nodes (5): ChromaGrid(), ChromaGridProps, ChromaItem, SetterFn, gsap

### Community 65 - "growth-audit-form.tsx"
Cohesion: 0.20
Nodes (7): auditSteps, budgets, channelOptions, industries, serviceOptions, confettiDots, SuccessCelebration()

### Community 66 - "Hero image prompts (Marketix Studio)"
Cohesion: 0.25
Nodes (7): Format (same for every image), Hero image prompts (Marketix Studio), Industries, Locations, Negative prompt (if your tool supports one), Services, Style block (paste at the start of every prompt)

### Community 67 - "LogoTraceLoader.tsx"
Cohesion: 0.40
Nodes (3): FILL_PATHS, LoaderPhase, LogoTraceLoaderProps

### Community 68 - "react"
Cohesion: 0.22
Nodes (6): RevealRoot(), ExplorerItem, IndustryExplorer(), Magnet(), MagnetProps, react

### Community 69 - "ai.ts"
Cohesion: 0.33
Nodes (10): POST(), runtime, aiProvider, AiRateLimitError, AiRefusalError, aiStructured(), aiText(), AiTurn (+2 more)

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

### Community 76 - "app/layout.tsx"
Cohesion: 0.22
Nodes (8): app_globals, jakarta, metadata, RootLayout(), viewport, GoogleAnalytics(), organizationSchema, websiteSchema

### Community 77 - "pune-areas.ts"
Cohesion: 0.24
Nodes (6): dynamicParams, generateMetadata(), PuneArea, puneAreaBySlug, puneAreas, s

### Community 78 - "buy-button.tsx"
Cohesion: 0.40
Nodes (3): BuyButton(), Props, Window

### Community 79 - "QueueItem"
Cohesion: 0.83
Nodes (4): QueueItem(), call(), draft(), post()

### Community 80 - "report-login.mjs"
Cohesion: 0.25
Nodes (6): ref_node_crypto, ref_node_fs, ref_node_readline, email, kept, salt

### Community 82 - "blog-index.tsx"
Cohesion: 0.67
Nodes (3): BlogIndex(), Card, formatDate()

## Knowledge Gaps
- **394 isolated node(s):** `npx`, `metadata`, `answer`, `values`, `faqs` (+389 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 479 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **7 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `next` to `app/not-found.tsx`, `admin-auth.ts`, `graph`, `industries.ts`, `team/page.tsx`, `package.json`, `reports/page.tsx`, `reveal.tsx`, `emails.ts`, `industries/page.tsx`, `pricing/page.tsx`, `location-detail.tsx`, `approach/page.tsx`, `(site)/page.tsx`, `structured-data.ts`, `locations.ts`, `getBlogPosts`, `tools/[slug]/page.tsx`, `site-config.ts`, `blog-post-page.tsx`, `sitemap.ts`, `footer.tsx`, `content-types.ts`, `review-generator.tsx`, `hasAdminAccess`, `lucide-react`, `nav.tsx`, `LogoLoop.tsx`, `react`, `framer-motion`, `demand-map.tsx`, `market-visuals.tsx`, `service-finder.tsx`, `app/layout.tsx`, `pune-areas.ts`, `buy-button.tsx`, `services/[slug]/page.tsx`, `blog-index.tsx`?**
  _High betweenness centrality (0.217) - this node is a cross-community bridge._
- **Why does `Multi-tenant review tool /r/[client]` connect `README.md` to `hasAdminAccess`, `Macrostructure family`, `PROJECT_CONTEXT.md`?**
  _High betweenness centrality (0.120) - this node is a cross-community bridge._
- **Why does `lucide-react` connect `lucide-react` to `admin-auth.ts`, `graph`, `industries.ts`, `chat-knowledge.ts`, `package.json`, `reports/page.tsx`, `accent-switcher.tsx`, `reveal.tsx`, `contact-form.tsx`, `industries/page.tsx`, `pricing/page.tsx`, `location-detail.tsx`, `products-catalog.ts`, `approach/page.tsx`, `(site)/page.tsx`, `structured-data.ts`, `locations.ts`, `tools/[slug]/page.tsx`, `site-config.ts`, `blog-post-page.tsx`, `footer.tsx`, `content-types.ts`, `review-generator.tsx`, `nav.tsx`, `growth-audit-form.tsx`, `react`, `framer-motion`, `demand-map.tsx`, `industry-path.tsx`, `service-finder.tsx`, `buy-button.tsx`, `blog-index.tsx`, `reply-helper.tsx`?**
  _High betweenness centrality (0.111) - this node is a cross-community bridge._
- **What connects `npx`, `metadata`, `answer` to the rest of the system?**
  _394 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `ElectricLogo.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.14736842105263157 - nodes in this community are weakly interconnected._
- **Should `components.json` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._