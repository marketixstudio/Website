# Graph Report - MARKETIX WEBSITE  (2026-10-13)

## Corpus Check
- 187 files · ~152,852 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 5 file(s) not represented in the graph (top: (none) 2, .example 1, .ico 1)

## Summary
- 1150 nodes · 3061 edges · 73 communities (68 shown, 5 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 36 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `23194dbd`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- ElectricLogo.tsx
- app/not-found.tsx
- admin-auth.ts
- graph
- review-generator.tsx
- review/route.ts
- lucide-react
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
- growth-audit-form.tsx
- (site)/page.tsx
- review-autoreply.ts
- Positioning guardrail (Marketix vs Vistrow)
- Macrostructure family
- PROJECT_CONTEXT.md
- footer.tsx
- google-ads-ppc/page.tsx
- content-types.ts
- about/page.tsx
- industries/page.tsx
- Accent violet #C82AEF
- vercel.json
- review-report.ts
- next.config.mjs
- locations/page.tsx
- shadcn
- postcss.config.mjs
- next
- dependencies
- llms.txt/route.ts
- tools/[slug]/page.tsx
- app/layout.tsx
- import-demo-site.py
- blog-post-page.tsx
- chat-widget.tsx
- devDependencies
- Overnight redesign plan (started 2026-09-24)
- scripts
- react
- Buyer questions by topic (as searched)
- AccentSwitcher
- globe.tsx
- tailwind.config.ts
- tools/page.tsx
- structured-data.ts
- PeekRating.tsx
- pune-areas.ts
- hasAdminAccess
- callback/route.ts
- Google review replies and the review report
- service-finder.tsx
- site-config.ts
- marketixstudio.com DNS records
- products-catalog.ts
- seo.ts
- industry-path.tsx
- sitemap.ts
- Hero image prompts (Marketix Studio)
- pricing/page.tsx
- buildMetadata
- QueueItem
- buy-button.tsx
- LogoTraceLoader.tsx
- blog-index.tsx

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

## Communities (73 total, 5 thin omitted)

### Community 0 - "ElectricLogo.tsx"
Cohesion: 0.09
Nodes (27): blurGrid(), blurLine(), ElectricLogo(), ElectricLogoProps, Focus, hexToRgb(), Point, Pulse (+19 more)

### Community 1 - "app/not-found.tsx"
Cohesion: 0.19
Nodes (8): metadata, NotFound(), routes, CardSpotlight(), topics, waLink(), WhatsAppFloat(), onSubmit()

### Community 2 - "admin-auth.ts"
Cohesion: 0.11
Nodes (26): attempts, createFirstLogin(), signIn(), startSession(), LoginForm(), dynamic, metadata, Page() (+18 more)

### Community 3 - "graph"
Cohesion: 0.24
Nodes (36): Page(), Page(), Page(), revalidate, Page(), Page(), Page(), Page() (+28 more)

### Community 5 - "review/route.ts"
Cohesion: 0.16
Nodes (25): POST(), runtime, hits, pickStyle(), POST(), rateLimited(), recentReviews, remember() (+17 more)

### Community 6 - "lucide-react"
Cohesion: 0.16
Nodes (20): agreed, answer, faqs, metadata, principles, steps, countOf(), metadata (+12 more)

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
Cohesion: 0.16
Nodes (10): Chart(), chip(), dynamic, metadata, Page(), ReplyQueue(), parsePeriod(), Report (+2 more)

### Community 12 - "accent-switcher.tsx"
Cohesion: 0.14
Nodes (18): HeroThreads(), toHex(), choose(), Bounds, DragState, Side, currentAccent(), ELECTRIC (+10 more)

### Community 13 - "design.md (locked design system)"
Cohesion: 0.13
Nodes (17): design.md (locked design system), Atmospheric genre, CTA voice (dark pill + accent ring + arrow circle), Hallmark gate 22, Honest content rule (overrides every skill), Live-site elements not to carry over, No gradient text / accent on one word, Plus Jakarta Sans only typography (+9 more)

### Community 14 - "reveal.tsx"
Cohesion: 0.19
Nodes (6): SummaryGroup, Step, Steps(), Reveal(), RevealProps, SectionHeading()

### Community 15 - "CLAUDE.md (project instructions)"
Cohesion: 0.14
Nodes (15): .claude/CLAUDE.md (graphify skill pointer), graphify skill (/graphify trigger), CLAUDE.md (project instructions), graphify query/path/explain usage rules, grep aliased to ugrep gotcha, marketix-dev launch config (port 3000), npm run build while dev corrupts .next, No hand-drawn browser/phone/dashboard chrome (+7 more)

### Community 16 - "README.md"
Cohesion: 0.15
Nodes (14): Content in code, no CMS, lib/blog.ts async blog API, Multi-tenant review tool /r/[client], WordPress 301 redirects (next.config.mjs), Claude API client review generator (app/api/review), content/ typed TS content directory, Framer Motion, lucide-react icons (+6 more)

### Community 17 - "emails.ts"
Cohesion: 0.06
Nodes (60): clean(), getSystemPrompt(), IncomingMessage, isRateLimited(), POST(), replySchema, requestLog, runtime (+52 more)

### Community 18 - "growth-audit-form.tsx"
Cohesion: 0.06
Nodes (36): ContactForm(), Errors, nextSteps, services, Status, Field(), Input(), Select() (+28 more)

### Community 19 - "(site)/page.tsx"
Cohesion: 0.06
Nodes (36): answer, averageRating, bestAt, coreServices, delay(), faqs, metadata, pillars (+28 more)

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
Cohesion: 0.12
Nodes (15): LOGO, LOGO_LIGHT, Wordmark(), columns, group(), icons, SiteFooter(), NewsletterForm() (+7 more)

### Community 25 - "google-ads-ppc/page.tsx"
Cohesion: 0.12
Nodes (28): answer, audiences, hero, metadata, hero, metadata, workGroups, FillHeading() (+20 more)

### Community 26 - "content-types.ts"
Cohesion: 0.15
Nodes (12): Outcome, toolList, tools, toolSlugs, BlogSection, BlogSeoImage, CaseStudy, CaseStudyResult (+4 more)

### Community 27 - "about/page.tsx"
Cohesion: 0.11
Nodes (23): answer, faqs, metadata, values, faqs, metadata, routes, whatsappText (+15 more)

### Community 28 - "industries/page.tsx"
Cohesion: 0.17
Nodes (12): answer, goals, metadata, isTodo(), livePreview, Page(), Breadcrumbs(), Crumb (+4 more)

### Community 29 - "Accent violet #C82AEF"
Cohesion: 0.33
Nodes (6): Card surface (radial gradient, 24px radius), Accent violet #C82AEF, Static violet light pool + grain, Neon ring (hover/focus only), Aurora hero removed (static light pool), Rejected: gold/yellow structural accent

### Community 30 - "vercel.json"
Cohesion: 0.33
Nodes (5): buildCommand, crons, framework, installCommand, $schema

### Community 31 - "review-report.ts"
Cohesion: 0.15
Nodes (24): POST(), runtime, listReviews(), Bar, buildReport(), monthName(), Period, periodDays() (+16 more)

### Community 33 - "locations/page.tsx"
Cohesion: 0.13
Nodes (14): answer, metadata, zones, generateMetadata(), globalLocations, globalProcess, globalServices, indiaLocations (+6 more)

### Community 36 - "next"
Cohesion: 0.18
Nodes (11): metadata, metadata, metadata, metadata, metadata, formatDate(), LegalPage(), slugify() (+3 more)

### Community 37 - "dependencies"
Cohesion: 0.18
Nodes (11): dependencies, @anthropic-ai/sdk, cobe, framer-motion, gsap, lucide-react, motion, next (+3 more)

### Community 38 - "llms.txt/route.ts"
Cohesion: 0.20
Nodes (13): GET(), line(), revalidate, generateMetadata(), generateMetadata(), generateStaticParams(), Page(), revalidate (+5 more)

### Community 39 - "tools/[slug]/page.tsx"
Cohesion: 0.17
Nodes (9): generateMetadata(), Faq(), AdBudgetCalculator(), RoasCalculator(), slug(), SOURCE_PRESETS, UtmBuilder(), draft() (+1 more)

### Community 40 - "app/layout.tsx"
Cohesion: 0.22
Nodes (8): app_globals, jakarta, metadata, RootLayout(), viewport, GoogleAnalytics(), organizationSchema, websiteSchema

### Community 41 - "import-demo-site.py"
Cohesion: 0.22
Nodes (7): glob, os, pil, re, Imports a finished static website (plain HTML/CSS/JS + images) as a demo at…, shutil, sys

### Community 42 - "blog-post-page.tsx"
Cohesion: 0.48
Nodes (5): ShareRow(), BlogPostPage(), headingId(), renderInlineLinks(), articleSchema()

### Community 43 - "chat-widget.tsx"
Cohesion: 0.17
Nodes (11): ChatMessage, ChatWidget(), onSubmit(), send(), fallback, greeting, LinkAction, Prompt (+3 more)

### Community 44 - "devDependencies"
Cohesion: 0.25
Nodes (8): devDependencies, autoprefixer, postcss, tailwindcss, @types/node, @types/react, @types/react-dom, typescript

### Community 45 - "Overnight redesign plan (started 2026-09-24)"
Cohesion: 0.25
Nodes (7): Log, Morning summary (2026-09-24, ~07:00), Overnight redesign plan (started 2026-09-24), Phase 2: Pages (redesign each in the new system), Phase 3: Site-wide verification, Progress, The creative bar

### Community 46 - "scripts"
Cohesion: 0.29
Nodes (7): scripts, build, dev, lint, preview, report-login, start

### Community 47 - "react"
Cohesion: 0.22
Nodes (6): ReadingProgress(), ExplorerItem, IndustryExplorer(), Magnet(), MagnetProps, react

### Community 48 - "Buyer questions by topic (as searched)"
Cohesion: 0.07
Nodes (26): automotive, branding-design, Buyer questions by topic (as searched), content-marketing, conversion-rate-optimisation, ecommerce-d2c, education, email-marketing-automation (+18 more)

### Community 49 - "AccentSwitcher"
Cohesion: 0.47
Nodes (8): AccentSwitcher(), begin(), finish(), move(), onMouseDown(), onTouchStart(), snap(), clamp()

### Community 50 - "globe.tsx"
Cohesion: 0.33
Nodes (7): facing(), Globe(), readColours(), cityCoords, LatLng, PUNE, cobe

### Community 52 - "tools/page.tsx"
Cohesion: 0.21
Nodes (8): metadata, CtaBand(), LinkCardGrid(), CtaLink, PageHero(), Breadcrumb(), Crumb, toolsOverview

### Community 53 - "structured-data.ts"
Cohesion: 0.11
Nodes (18): include, metadata, checks, faqs, metadata, steps, metadata, who (+10 more)

### Community 54 - "PeekRating.tsx"
Cohesion: 0.32
Nodes (7): clamp(), GestureState, PeekRating(), PeekRatingProps, PeekRatingShape, reducedMotion(), SHAPES

### Community 55 - "pune-areas.ts"
Cohesion: 0.24
Nodes (6): dynamicParams, generateMetadata(), PuneArea, puneAreaBySlug, puneAreas, s

### Community 56 - "hasAdminAccess"
Cohesion: 0.19
Nodes (9): dynamic, metadata, Page(), ReplyHelper(), reviewClientList, reviewClients, reviewClientSlugs, hasAdminAccess() (+1 more)

### Community 57 - "callback/route.ts"
Cohesion: 0.22
Nodes (13): esc(), GET(), page(), runtime, GET(), runtime, exchangeCode(), oauthUrl() (+5 more)

### Community 58 - "Google review replies and the review report"
Cohesion: 0.33
Nodes (5): Google review replies and the review report, Rules the replies follow (lib/review-reply.ts), Setup, once, Signing in, What runs

### Community 59 - "service-finder.tsx"
Cohesion: 0.40
Nodes (5): FinderCard, GoalId, goals, ServiceFinder(), slugOf()

### Community 60 - "site-config.ts"
Cohesion: 0.18
Nodes (12): aboutLinks, aboutMatch, industriesNav, PanelId, plainLinks, serviceGroups, servicesNav, SiteNav() (+4 more)

### Community 61 - "marketixstudio.com DNS records"
Cohesion: 0.50
Nodes (3): If the zone has to be recreated at MilesWeb, marketixstudio.com DNS records, When the new site moves to Vercel

### Community 62 - "products-catalog.ts"
Cohesion: 0.18
Nodes (7): runtime, Feature, FeatureCards(), DigitalProduct, productList, lib_content_types_feature, lib_content_types_step

### Community 63 - "seo.ts"
Cohesion: 0.29
Nodes (5): aiCrawlers, disallow, SeoMetadata, siteTagline, siteUrl

### Community 64 - "industry-path.tsx"
Cohesion: 0.38
Nodes (5): IndustryPath(), Path, paths, PathExplorer(), PathStep

### Community 65 - "sitemap.ts"
Cohesion: 0.22
Nodes (8): Entry, sitemap(), industriesOverview, industryList, industrySlugs, legalSlugs, serviceSlugs, IndustryContent

### Community 66 - "Hero image prompts (Marketix Studio)"
Cohesion: 0.25
Nodes (7): Format (same for every image), Hero image prompts (Marketix Studio), Industries, Locations, Negative prompt (if your tool supports one), Services, Style block (paste at the start of every prompt)

### Community 67 - "pricing/page.tsx"
Cohesion: 0.32
Nodes (6): answer, drivers, faqs, metadata, ScopeBuilder(), ScopeOption

### Community 68 - "buildMetadata"
Cohesion: 0.22
Nodes (5): generateMetadata(), CUSTOM_PAGES, generateMetadata(), generateMetadata(), buildMetadata()

### Community 69 - "QueueItem"
Cohesion: 0.83
Nodes (4): QueueItem(), call(), draft(), post()

### Community 70 - "buy-button.tsx"
Cohesion: 0.40
Nodes (3): BuyButton(), Props, Window

### Community 73 - "LogoTraceLoader.tsx"
Cohesion: 0.40
Nodes (3): FILL_PATHS, LoaderPhase, LogoTraceLoaderProps

### Community 74 - "blog-index.tsx"
Cohesion: 0.67
Nodes (3): BlogIndex(), Card, formatDate()

## Knowledge Gaps
- **391 isolated node(s):** `npx`, `metadata`, `answer`, `values`, `faqs` (+386 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 476 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `next` to `app/not-found.tsx`, `admin-auth.ts`, `graph`, `review-generator.tsx`, `lucide-react`, `team/page.tsx`, `package.json`, `reports/page.tsx`, `reveal.tsx`, `emails.ts`, `growth-audit-form.tsx`, `(site)/page.tsx`, `footer.tsx`, `google-ads-ppc/page.tsx`, `content-types.ts`, `about/page.tsx`, `industries/page.tsx`, `locations/page.tsx`, `llms.txt/route.ts`, `tools/[slug]/page.tsx`, `app/layout.tsx`, `blog-post-page.tsx`, `chat-widget.tsx`, `react`, `tools/page.tsx`, `structured-data.ts`, `pune-areas.ts`, `hasAdminAccess`, `service-finder.tsx`, `site-config.ts`, `seo.ts`, `sitemap.ts`, `pricing/page.tsx`, `buildMetadata`, `buy-button.tsx`, `blog-index.tsx`?**
  _High betweenness centrality (0.225) - this node is a cross-community bridge._
- **Why does `Multi-tenant review tool /r/[client]` connect `README.md` to `hasAdminAccess`, `Macrostructure family`, `PROJECT_CONTEXT.md`?**
  _High betweenness centrality (0.108) - this node is a cross-community bridge._
- **Why does `react` connect `react` to `ElectricLogo.tsx`, `app/not-found.tsx`, `review-generator.tsx`, `lucide-react`, `team/page.tsx`, `package.json`, `reports/page.tsx`, `accent-switcher.tsx`, `growth-audit-form.tsx`, `(site)/page.tsx`, `footer.tsx`, `google-ads-ppc/page.tsx`, `content-types.ts`, `about/page.tsx`, `industries/page.tsx`, `tools/[slug]/page.tsx`, `app/layout.tsx`, `blog-post-page.tsx`, `chat-widget.tsx`, `globe.tsx`, `PeekRating.tsx`, `hasAdminAccess`, `service-finder.tsx`, `site-config.ts`, `industry-path.tsx`, `pricing/page.tsx`, `buy-button.tsx`, `LogoTraceLoader.tsx`, `blog-index.tsx`?**
  _High betweenness centrality (0.103) - this node is a cross-community bridge._
- **What connects `npx`, `metadata`, `answer` to the rest of the system?**
  _391 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `ElectricLogo.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.09359605911330049 - nodes in this community are weakly interconnected._
- **Should `admin-auth.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.10756302521008404 - nodes in this community are weakly interconnected._
- **Should `components.json` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._