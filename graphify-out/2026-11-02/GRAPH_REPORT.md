# Graph Report - MARKETIX WEBSITE  (2026-11-02)

## Corpus Check
- 199 files · ~168,971 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 5 file(s) not represented in the graph (top: (none) 2, .example 1, .ico 1)

## Summary
- 1253 nodes · 3276 edges · 78 communities (73 shown, 5 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 38 edges (avg confidence: 0.89)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `03d606f1`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- ElectricLogo.tsx
- app/not-found.tsx
- admin-auth.ts
- graph
- draft-post.mjs
- review/route.ts
- sitemap.ts
- llms.txt/route.ts
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
- growth-audit-form.tsx
- google.mjs
- review-autoreply.ts
- Positioning guardrail (Marketix vs Vistrow)
- Macrostructure family
- PROJECT_CONTEXT.md
- review-clients.ts
- google-ads-ppc/page.tsx
- about/page.tsx
- products-catalog.ts
- location-detail.tsx
- Accent violet #C82AEF
- vercel.json
- structured-data.ts
- next.config.mjs
- content-types.ts
- shadcn
- postcss.config.mjs
- next
- buildMetadata
- blog-index-page.tsx
- tools/[slug]/page.tsx
- chat-widget.tsx
- import-demo-site.py
- dependencies
- review-stats.ts
- app/layout.tsx
- Overnight redesign plan (started 2026-09-24)
- pune-areas.ts
- lucide-react
- Buyer questions by topic (as searched)
- AccentSwitcher
- globe.tsx
- seo.ts
- footer.tsx
- (site)/page.tsx
- email-logo.ts
- review-generator.tsx
- tools/page.tsx
- callback/route.ts
- Google review replies and the review report
- electric-monogram.tsx
- nav.tsx
- marketixstudio.com DNS records
- LogoLoop.tsx
- reply-helper.tsx
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
- `Non-negotiable rules` --references--> `Cta()`  [INFERRED]
  docs/REDESIGN_PLAN.md → components/v2/primitives.tsx
- `Non-negotiable rules` --references--> `TextLink()`  [INFERRED]
  docs/REDESIGN_PLAN.md → components/v2/primitives.tsx
- `SEO / AEO / GEO checklist (every indexable page)` --references--> `AnswerCard()`  [INFERRED]
  docs/REDESIGN_PLAN.md → components/v2/primitives.tsx

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **v2 pilot rebuild in new design system** — docs_project_context_v2_rebuild, design_map_diagram, design_quote_led, design_n5_floating_pill_nav, design_ft5_statement_footer [EXTRACTED 1.00]
- **Anti-AI-slop design decisions (Aurora, eyebrows, column footer removed)** — docs_project_context_aurora_removed, docs_project_context_eyebrows_removed, docs_project_context_statement_footer_decision, design_light_pool, design_section_labels_off, design_ft5_statement_footer [INFERRED 0.85]
- **Differentiation from sister brand Vistrow** — claude_not_like_vistrow_rule, design_positioning_guardrail, docs_project_context_keyword_territory_split, docs_project_context_unpublish_vistrow_blog, docs_project_context_rejected_vistrow_copy [INFERRED 0.85]

## Communities (78 total, 5 thin omitted)

### Community 0 - "ElectricLogo.tsx"
Cohesion: 0.09
Nodes (29): HeroThreads(), toHex(), blurGrid(), blurLine(), ElectricLogo(), ElectricLogoProps, Focus, hexToRgb() (+21 more)

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
Cohesion: 0.08
Nodes (25): ref_node_url, allowedHrefs, allText(), blogPost, categories, categoriesSrc, category, clean() (+17 more)

### Community 5 - "review/route.ts"
Cohesion: 0.14
Nodes (29): runtime, applyHabits(), carModelOnly(), clean(), draftIssues(), hits, lastWords(), pickStyle() (+21 more)

### Community 6 - "sitemap.ts"
Cohesion: 0.15
Nodes (12): Entry, legalSlugs, globalLocations, globalProcess, globalServices, indiaLocations, indiaProcess, indiaServices (+4 more)

### Community 7 - "llms.txt/route.ts"
Cohesion: 0.15
Nodes (11): GET(), line(), revalidate, generateMetadata(), industries, industriesOverview, industryList, industrySlugs (+3 more)

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
Cohesion: 0.14
Nodes (19): Chart(), chip(), dynamic, metadata, Page(), ReplyQueue(), Bar, buildReport() (+11 more)

### Community 12 - "accent-switcher.tsx"
Cohesion: 0.21
Nodes (12): choose(), Bounds, DragState, Side, ThemeToggle(), toggle(), ACCENT_KEY, accents (+4 more)

### Community 13 - "design.md (locked design system)"
Cohesion: 0.13
Nodes (17): design.md (locked design system), Atmospheric genre, CTA voice (dark pill + accent ring + arrow circle), Hallmark gate 22, Honest content rule (overrides every skill), Live-site elements not to carry over, No gradient text / accent on one word, Plus Jakarta Sans only typography (+9 more)

### Community 14 - "reveal.tsx"
Cohesion: 0.15
Nodes (9): SummaryGroup, Feature, FeatureCards(), Outcome, Step, Steps(), Reveal(), RevealProps (+1 more)

### Community 15 - "CLAUDE.md (project instructions)"
Cohesion: 0.14
Nodes (15): .claude/CLAUDE.md (graphify skill pointer), graphify skill (/graphify trigger), CLAUDE.md (project instructions), graphify query/path/explain usage rules, grep aliased to ugrep gotcha, marketix-dev launch config (port 3000), npm run build while dev corrupts .next, No hand-drawn browser/phone/dashboard chrome (+7 more)

### Community 16 - "README.md"
Cohesion: 0.15
Nodes (14): Content in code, no CMS, lib/blog.ts async blog API, Multi-tenant review tool /r/[client], WordPress 301 redirects (next.config.mjs), Claude API client review generator (app/api/review), content/ typed TS content directory, Framer Motion, lucide-react icons (+6 more)

### Community 17 - "emails.ts"
Cohesion: 0.06
Nodes (66): clean(), getSystemPrompt(), IncomingMessage, isRateLimited(), POST(), replySchema, requestLog, runtime (+58 more)

### Community 18 - "growth-audit-form.tsx"
Cohesion: 0.13
Nodes (17): ContactForm(), Errors, isPhone(), nextSteps, services, Status, Field(), Input() (+9 more)

### Community 19 - "google.mjs"
Cohesion: 0.26
Nodes (13): appendRow(), call(), COLUMNS, inspectUrl(), pageSearchStats(), pageViews(), readRows(), SCOPES (+5 more)

### Community 20 - "review-autoreply.ts"
Cohesion: 0.16
Nodes (27): dynamic, GET(), maxDuration, runtime, GET(), runtime, POST(), runtime (+19 more)

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
Cohesion: 0.29
Nodes (6): dynamic, metadata, Page(), reviewClientList, reviewClients, reviewClientSlugs

### Community 25 - "google-ads-ppc/page.tsx"
Cohesion: 0.11
Nodes (24): answer, audiences, hero, metadata, hero, metadata, workGroups, FillHeading() (+16 more)

### Community 26 - "about/page.tsx"
Cohesion: 0.11
Nodes (31): answer, faqs, metadata, values, faqs, metadata, routes, whatsappText (+23 more)

### Community 27 - "products-catalog.ts"
Cohesion: 0.25
Nodes (5): runtime, DigitalProduct, productList, lib_content_types_feature, lib_content_types_step

### Community 28 - "location-detail.tsx"
Cohesion: 0.11
Nodes (31): agreed, answer, faqs, metadata, principles, steps, countOf(), metadata (+23 more)

### Community 29 - "Accent violet #C82AEF"
Cohesion: 0.33
Nodes (6): Card surface (radial gradient, 24px radius), Accent violet #C82AEF, Static violet light pool + grain, Neon ring (hover/focus only), Aurora hero removed (static light pool), Rejected: gold/yellow structural accent

### Community 30 - "vercel.json"
Cohesion: 0.33
Nodes (5): buildCommand, crons, framework, installCommand, $schema

### Community 31 - "structured-data.ts"
Cohesion: 0.09
Nodes (22): include, metadata, checks, faqs, metadata, steps, metadata, who (+14 more)

### Community 33 - "content-types.ts"
Cohesion: 0.18
Nodes (10): toolList, tools, toolSlugs, BlogSection, BlogSeoImage, CaseStudy, CaseStudyResult, OverviewContent (+2 more)

### Community 36 - "next"
Cohesion: 0.18
Nodes (11): metadata, metadata, metadata, metadata, metadata, formatDate(), LegalPage(), slugify() (+3 more)

### Community 37 - "buildMetadata"
Cohesion: 0.20
Nodes (6): generateMetadata(), CUSTOM_PAGES, generateMetadata(), generateMetadata(), locations, buildMetadata()

### Community 38 - "blog-index-page.tsx"
Cohesion: 0.09
Nodes (38): generateMetadata(), generateStaticParams(), Page(), revalidate, generateMetadata(), Page(), revalidate, generateMetadata() (+30 more)

### Community 39 - "tools/[slug]/page.tsx"
Cohesion: 0.23
Nodes (6): generateMetadata(), AdBudgetCalculator(), RoasCalculator(), slug(), SOURCE_PRESETS, UtmBuilder()

### Community 40 - "chat-widget.tsx"
Cohesion: 0.13
Nodes (16): GrowthAuditForm(), ChatMessage, ChatWidget(), onSubmit(), send(), fallback, greeting, LinkAction (+8 more)

### Community 41 - "import-demo-site.py"
Cohesion: 0.15
Nodes (10): glob, json, os, pathlib, pil, re, Build content/blog-queue.json from docs/SEARCH_DEMAND.md (real Google…, Imports a finished static website (plain HTML/CSS/JS + images) as a demo at… (+2 more)

### Community 42 - "dependencies"
Cohesion: 0.18
Nodes (11): dependencies, @anthropic-ai/sdk, cobe, framer-motion, gsap, lucide-react, motion, next (+3 more)

### Community 43 - "review-stats.ts"
Cohesion: 0.17
Nodes (18): POST(), runtime, local, recentTexts(), rememberText(), Counts, FILE, FileData (+10 more)

### Community 44 - "app/layout.tsx"
Cohesion: 0.22
Nodes (8): app_globals, jakarta, metadata, RootLayout(), viewport, GoogleAnalytics(), organizationSchema, websiteSchema

### Community 45 - "Overnight redesign plan (started 2026-09-24)"
Cohesion: 0.25
Nodes (7): Log, Morning summary (2026-09-24, ~07:00), Overnight redesign plan (started 2026-09-24), Phase 2: Pages (redesign each in the new system), Phase 3: Site-wide verification, Progress, The creative bar

### Community 46 - "pune-areas.ts"
Cohesion: 0.24
Nodes (6): dynamicParams, generateMetadata(), PuneArea, puneAreaBySlug, puneAreas, s

### Community 47 - "lucide-react"
Cohesion: 0.31
Nodes (5): CtaBand(), CtaLink, Breadcrumb(), Crumb, lucide-react

### Community 48 - "Buyer questions by topic (as searched)"
Cohesion: 0.07
Nodes (26): automotive, branding-design, Buyer questions by topic (as searched), content-marketing, conversion-rate-optimisation, ecommerce-d2c, education, email-marketing-automation (+18 more)

### Community 49 - "AccentSwitcher"
Cohesion: 0.47
Nodes (8): AccentSwitcher(), begin(), finish(), move(), onMouseDown(), onTouchStart(), snap(), clamp()

### Community 50 - "globe.tsx"
Cohesion: 0.33
Nodes (7): facing(), Globe(), readColours(), cityCoords, LatLng, PUNE, cobe

### Community 51 - "seo.ts"
Cohesion: 0.25
Nodes (6): aiCrawlers, disallow, SeoMetadata, siteName, siteTagline, siteUrl

### Community 52 - "footer.tsx"
Cohesion: 0.16
Nodes (10): columns, icons, NewsletterForm(), Status, footerNav, NavChild, NavGroup, NavItem (+2 more)

### Community 53 - "(site)/page.tsx"
Cohesion: 0.12
Nodes (16): answer, averageRating, bestAt, coreServices, delay(), faqs, metadata, pillars (+8 more)

### Community 55 - "review-generator.tsx"
Cohesion: 0.11
Nodes (16): CarChoice, carLabel(), CarPicker(), ReviewGenerator(), generate(), Status, clamp(), GestureState (+8 more)

### Community 56 - "tools/page.tsx"
Cohesion: 0.28
Nodes (6): metadata, Faq(), LinkCardGrid(), PageHero(), toolsOverview, OverviewCard

### Community 57 - "callback/route.ts"
Cohesion: 0.22
Nodes (13): esc(), GET(), page(), runtime, GET(), runtime, exchangeCode(), oauthUrl() (+5 more)

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

### Community 63 - "reply-helper.tsx"
Cohesion: 0.29
Nodes (6): ReplyHelper(), draft(), QueueItem(), call(), draft(), post()

### Community 64 - "team/page.tsx"
Cohesion: 0.14
Nodes (16): chromaItems, initials(), initialsImage(), metadata, Page(), shades, ChromaGrid(), ChromaGridProps (+8 more)

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

### Community 79 - "Blog page, categories and daily-post automation (plan, 2026-11-02)"
Cohesion: 0.29
Nodes (6): APIs and accounts, Blog page, categories and daily-post automation (plan, 2026-11-02), Blog page layout (/blog), Built (2026-11-02), Categories (from real searches), Daily post automation

## Knowledge Gaps
- **422 isolated node(s):** `npx`, `metadata`, `answer`, `values`, `faqs` (+417 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 515 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `next` to `app/not-found.tsx`, `admin-auth.ts`, `graph`, `sitemap.ts`, `llms.txt/route.ts`, `package.json`, `review-report.ts`, `emails.ts`, `review-clients.ts`, `google-ads-ppc/page.tsx`, `about/page.tsx`, `location-detail.tsx`, `structured-data.ts`, `content-types.ts`, `buildMetadata`, `blog-index-page.tsx`, `tools/[slug]/page.tsx`, `chat-widget.tsx`, `app/layout.tsx`, `pune-areas.ts`, `lucide-react`, `seo.ts`, `footer.tsx`, `(site)/page.tsx`, `review-generator.tsx`, `tools/page.tsx`, `electric-monogram.tsx`, `nav.tsx`, `LogoLoop.tsx`, `team/page.tsx`, `react`, `service-finder.tsx`, `framer-motion`, `demand-map.tsx`, `market-visuals.tsx`, `buy-button.tsx`?**
  _High betweenness centrality (0.230) - this node is a cross-community bridge._
- **Why does `Multi-tenant review tool /r/[client]` connect `README.md` to `review-clients.ts`, `Macrostructure family`, `PROJECT_CONTEXT.md`?**
  _High betweenness centrality (0.116) - this node is a cross-community bridge._
- **Why does `lucide-react` connect `lucide-react` to `app/not-found.tsx`, `admin-auth.ts`, `graph`, `sitemap.ts`, `llms.txt/route.ts`, `package.json`, `review-report.ts`, `accent-switcher.tsx`, `reveal.tsx`, `growth-audit-form.tsx`, `google-ads-ppc/page.tsx`, `about/page.tsx`, `products-catalog.ts`, `location-detail.tsx`, `structured-data.ts`, `content-types.ts`, `blog-index-page.tsx`, `tools/[slug]/page.tsx`, `chat-widget.tsx`, `footer.tsx`, `(site)/page.tsx`, `review-generator.tsx`, `tools/page.tsx`, `electric-monogram.tsx`, `nav.tsx`, `reply-helper.tsx`, `react`, `service-finder.tsx`, `framer-motion`, `demand-map.tsx`, `industry-path.tsx`, `buy-button.tsx`?**
  _High betweenness centrality (0.092) - this node is a cross-community bridge._
- **What connects `npx`, `metadata`, `answer` to the rest of the system?**
  _422 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `ElectricLogo.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.08669354838709678 - nodes in this community are weakly interconnected._
- **Should `draft-post.mjs` be split into smaller, more focused modules?**
  _Cohesion score 0.07635467980295567 - nodes in this community are weakly interconnected._
- **Should `review/route.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.14260249554367202 - nodes in this community are weakly interconnected._