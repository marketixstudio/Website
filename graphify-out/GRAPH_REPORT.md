# Graph Report - MARKETIX WEBSITE  (2026-10-10)

## Corpus Check
- 186 files · ~151,222 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 5 file(s) not represented in the graph (top: (none) 2, .example 1, .ico 1)

## Summary
- 1142 nodes · 3054 edges · 72 communities (68 shown, 4 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 36 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `425fe8bc`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- ElectricLogo.tsx
- app/not-found.tsx
- admin-auth.ts
- graph
- review-generator.tsx
- review/route.ts
- (site)/page.tsx
- team/page.tsx
- components.json
- package.json
- compilerOptions
- reports/page.tsx
- accent-switcher.tsx
- design.md (locked design system)
- lucide-react
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
- google-ads-ppc/page.tsx
- content-types.ts
- about/page.tsx
- buildMetadata
- Accent violet #C82AEF
- vercel.json
- review-report.ts
- next.config.mjs
- locations.ts
- shadcn
- postcss.config.mjs
- next
- dependencies
- getBlogPosts
- electric-monogram.tsx
- seo.ts
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
- framer-motion
- structured-data.ts
- PeekRating.tsx
- chat-knowledge.ts
- demand-map.tsx
- hasAdminAccess
- Google review replies and the review report
- service-finder.tsx
- nav.tsx
- marketixstudio.com DNS records
- industry-path.tsx
- sitemap.ts
- market-visuals.tsx
- pricing/page.tsx
- industries.ts
- report-login.mjs
- buy-button.tsx
- trackLead
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
- `Phase 1: Chrome and routing` --references--> `serviceHref()`  [INFERRED]
  docs/REDESIGN_PLAN.md → components/v2/primitives.tsx
- `Non-negotiable rules` --references--> `Cta()`  [INFERRED]
  docs/REDESIGN_PLAN.md → components/v2/primitives.tsx
- `Non-negotiable rules` --references--> `TextLink()`  [INFERRED]
  docs/REDESIGN_PLAN.md → components/v2/primitives.tsx

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **v2 pilot rebuild in new design system** — docs_project_context_v2_rebuild, design_map_diagram, design_quote_led, design_n5_floating_pill_nav, design_ft5_statement_footer [EXTRACTED 1.00]
- **Anti-AI-slop design decisions (Aurora, eyebrows, column footer removed)** — docs_project_context_aurora_removed, docs_project_context_eyebrows_removed, docs_project_context_statement_footer_decision, design_light_pool, design_section_labels_off, design_ft5_statement_footer [INFERRED 0.85]
- **Differentiation from sister brand Vistrow** — claude_not_like_vistrow_rule, design_positioning_guardrail, docs_project_context_keyword_territory_split, docs_project_context_unpublish_vistrow_blog, docs_project_context_rejected_vistrow_copy [INFERRED 0.85]

## Communities (72 total, 4 thin omitted)

### Community 0 - "ElectricLogo.tsx"
Cohesion: 0.09
Nodes (29): HeroThreads(), toHex(), blurGrid(), blurLine(), ElectricLogo(), ElectricLogoProps, Focus, hexToRgb() (+21 more)

### Community 1 - "app/not-found.tsx"
Cohesion: 0.21
Nodes (8): metadata, CardSpotlight(), SiteNav(), topics, waLink(), WhatsAppFloat(), onSubmit(), Phase 1: Chrome and routing

### Community 2 - "admin-auth.ts"
Cohesion: 0.17
Nodes (19): attempts, createFirstLogin(), signIn(), startSession(), LoginForm(), dynamic, metadata, Page() (+11 more)

### Community 3 - "graph"
Cohesion: 0.23
Nodes (37): Page(), Page(), Page(), revalidate, Page(), Page(), Page(), Page() (+29 more)

### Community 4 - "review-generator.tsx"
Cohesion: 0.22
Nodes (3): ReviewGenerator(), Status, ReviewClient

### Community 5 - "review/route.ts"
Cohesion: 0.16
Nodes (25): POST(), runtime, hits, pickStyle(), POST(), rateLimited(), recentReviews, remember() (+17 more)

### Community 6 - "(site)/page.tsx"
Cohesion: 0.09
Nodes (31): agreed, answer, faqs, metadata, principles, steps, countOf(), metadata (+23 more)

### Community 7 - "team/page.tsx"
Cohesion: 0.15
Nodes (15): chromaItems, initials(), initialsImage(), metadata, Page(), shades, ChromaGrid(), ChromaGridProps (+7 more)

### Community 8 - "components.json"
Cohesion: 0.11
Nodes (18): aliases, components, hooks, lib, ui, utils, registries, @react-bits (+10 more)

### Community 9 - "package.json"
Cohesion: 0.14
Nodes (13): name, private, version, @anthropic-ai/sdk, autoprefixer, gsap, motion, postcss (+5 more)

### Community 10 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 11 - "reports/page.tsx"
Cohesion: 0.13
Nodes (13): Chart(), chip(), dynamic, metadata, Page(), ReplyQueue(), reviewClientList, reviewClients (+5 more)

### Community 12 - "accent-switcher.tsx"
Cohesion: 0.21
Nodes (12): choose(), Bounds, DragState, Side, ThemeToggle(), toggle(), ACCENT_KEY, accents (+4 more)

### Community 13 - "design.md (locked design system)"
Cohesion: 0.13
Nodes (17): design.md (locked design system), Atmospheric genre, CTA voice (dark pill + accent ring + arrow circle), Hallmark gate 22, Honest content rule (overrides every skill), Live-site elements not to carry over, No gradient text / accent on one word, Plus Jakarta Sans only typography (+9 more)

### Community 14 - "lucide-react"
Cohesion: 0.06
Nodes (34): runtime, generateMetadata(), SummaryGroup, CtaBand(), Faq(), Feature, FeatureCards(), LinkCardGrid() (+26 more)

### Community 15 - "CLAUDE.md (project instructions)"
Cohesion: 0.14
Nodes (15): .claude/CLAUDE.md (graphify skill pointer), graphify skill (/graphify trigger), CLAUDE.md (project instructions), graphify query/path/explain usage rules, grep aliased to ugrep gotcha, marketix-dev launch config (port 3000), npm run build while dev corrupts .next, No hand-drawn browser/phone/dashboard chrome (+7 more)

### Community 16 - "README.md"
Cohesion: 0.15
Nodes (14): Content in code, no CMS, lib/blog.ts async blog API, Multi-tenant review tool /r/[client], WordPress 301 redirects (next.config.mjs), Claude API client review generator (app/api/review), content/ typed TS content directory, Framer Motion, lucide-react icons (+6 more)

### Community 17 - "emails.ts"
Cohesion: 0.08
Nodes (53): clean(), getSystemPrompt(), IncomingMessage, isRateLimited(), POST(), replySchema, requestLog, runtime (+45 more)

### Community 18 - "growth-audit-form.tsx"
Cohesion: 0.14
Nodes (15): Errors, nextSteps, services, Status, Field(), Input(), Select(), Textarea() (+7 more)

### Community 19 - "LogoLoop.tsx"
Cohesion: 0.23
Nodes (11): ClientLogoLoop(), Logo, ANIMATION_CONFIG, cx(), LogoItem, LogoLoop, LogoLoopProps, toCssLength() (+3 more)

### Community 20 - "review-autoreply.ts"
Cohesion: 0.14
Nodes (28): dynamic, GET(), maxDuration, runtime, esc(), GET(), page(), runtime (+20 more)

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

### Community 25 - "google-ads-ppc/page.tsx"
Cohesion: 0.10
Nodes (23): answer, audiences, hero, metadata, hero, metadata, workGroups, FillHeading() (+15 more)

### Community 26 - "content-types.ts"
Cohesion: 0.11
Nodes (16): metadata, clientLogos, clientStats, NOTE: the old WordPress /testimonials/ page still carries the theme's demo, testimonials, toolList, tools, toolSlugs (+8 more)

### Community 27 - "about/page.tsx"
Cohesion: 0.15
Nodes (23): answer, faqs, metadata, values, groups, metadata, answer, goals (+15 more)

### Community 28 - "buildMetadata"
Cohesion: 0.14
Nodes (11): generateMetadata(), CUSTOM_PAGES, generateMetadata(), generateMetadata(), isTodo(), livePreview, Page(), locations (+3 more)

### Community 29 - "Accent violet #C82AEF"
Cohesion: 0.33
Nodes (6): Card surface (radial gradient, 24px radius), Accent violet #C82AEF, Static violet light pool + grain, Neon ring (hover/focus only), Aurora hero removed (static light pool), Rejected: gold/yellow structural accent

### Community 30 - "vercel.json"
Cohesion: 0.33
Nodes (5): buildCommand, crons, framework, installCommand, $schema

### Community 31 - "review-report.ts"
Cohesion: 0.15
Nodes (24): POST(), runtime, listReviews(), Bar, buildReport(), monthName(), Period, periodDays() (+16 more)

### Community 33 - "locations.ts"
Cohesion: 0.20
Nodes (9): globalLocations, globalProcess, globalServices, indiaLocations, indiaProcess, indiaServices, locationSlugs, locationsOverview (+1 more)

### Community 36 - "next"
Cohesion: 0.18
Nodes (11): metadata, metadata, metadata, metadata, metadata, formatDate(), LegalPage(), slugify() (+3 more)

### Community 37 - "dependencies"
Cohesion: 0.18
Nodes (11): dependencies, @anthropic-ai/sdk, cobe, framer-motion, gsap, lucide-react, motion, next (+3 more)

### Community 38 - "getBlogPosts"
Cohesion: 0.23
Nodes (11): generateMetadata(), generateMetadata(), generateStaticParams(), Page(), revalidate, sitemap(), archivedVistrowPosts, blogPosts (+3 more)

### Community 39 - "electric-monogram.tsx"
Cohesion: 0.32
Nodes (6): NotFound(), routes, currentAccent(), ELECTRIC, ElectricMonogram(), AccentKey

### Community 40 - "seo.ts"
Cohesion: 0.12
Nodes (15): app_globals, jakarta, metadata, RootLayout(), viewport, aiCrawlers, disallow, GoogleAnalytics() (+7 more)

### Community 41 - "import-demo-site.py"
Cohesion: 0.22
Nodes (7): glob, os, pil, re, Imports a finished static website (plain HTML/CSS/JS + images) as a demo at…, shutil, sys

### Community 42 - "blog-post-page.tsx"
Cohesion: 0.36
Nodes (6): ReadingProgress(), ShareRow(), BlogPostPage(), headingId(), renderInlineLinks(), articleSchema()

### Community 43 - "chat-widget.tsx"
Cohesion: 0.17
Nodes (10): ChatMessage, fallback, greeting, LinkAction, Prompt, questions, topics, GtagCommand (+2 more)

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
Nodes (6): RevealRoot(), ExplorerItem, IndustryExplorer(), Magnet(), MagnetProps, react

### Community 48 - "Buyer questions by topic (as searched)"
Cohesion: 0.07
Nodes (26): automotive, branding-design, Buyer questions by topic (as searched), content-marketing, conversion-rate-optimisation, ecommerce-d2c, education, email-marketing-automation (+18 more)

### Community 49 - "AccentSwitcher"
Cohesion: 0.47
Nodes (8): AccentSwitcher(), begin(), finish(), move(), onMouseDown(), onTouchStart(), snap(), clamp()

### Community 50 - "globe.tsx"
Cohesion: 0.33
Nodes (7): facing(), Globe(), readColours(), cityCoords, LatLng, PUNE, cobe

### Community 52 - "framer-motion"
Cohesion: 0.20
Nodes (8): Funnel(), Step, loops, queries, SearchJourney(), Stage, stages, framer-motion

### Community 53 - "structured-data.ts"
Cohesion: 0.09
Nodes (24): include, metadata, faqs, metadata, routes, whatsappText, checks, faqs (+16 more)

### Community 54 - "PeekRating.tsx"
Cohesion: 0.32
Nodes (7): clamp(), GestureState, PeekRating(), PeekRatingProps, PeekRatingShape, reducedMotion(), SHAPES

### Community 55 - "chat-knowledge.ts"
Cohesion: 0.12
Nodes (18): GET(), line(), revalidate, dynamicParams, generateMetadata(), industryList, locationList, PuneArea (+10 more)

### Community 56 - "demand-map.tsx"
Cohesion: 0.25
Nodes (8): DemandMap(), EASE, Method, methods, SourceCard(), sources, START_MS, useTypingLoop()

### Community 57 - "hasAdminAccess"
Cohesion: 0.18
Nodes (13): GET(), runtime, dynamic, metadata, Page(), ReplyHelper(), hasAdminAccess(), oauthUrl() (+5 more)

### Community 58 - "Google review replies and the review report"
Cohesion: 0.33
Nodes (5): Google review replies and the review report, Rules the replies follow (lib/review-reply.ts), Setup, once, Signing in, What runs

### Community 59 - "service-finder.tsx"
Cohesion: 0.40
Nodes (5): FinderCard, GoalId, goals, ServiceFinder(), slugOf()

### Community 60 - "nav.tsx"
Cohesion: 0.18
Nodes (10): LOGO, LOGO_LIGHT, Wordmark(), aboutLinks, aboutMatch, industriesNav, PanelId, plainLinks (+2 more)

### Community 61 - "marketixstudio.com DNS records"
Cohesion: 0.50
Nodes (3): If the zone has to be recreated at MilesWeb, marketixstudio.com DNS records, When the new site moves to Vercel

### Community 64 - "industry-path.tsx"
Cohesion: 0.38
Nodes (5): IndustryPath(), Path, paths, PathExplorer(), PathStep

### Community 65 - "sitemap.ts"
Cohesion: 0.20
Nodes (7): Entry, legalSlugs, caseStudyIndustries, caseStudyList, caseStudySlugs, publishedCaseStudySlugs, workOverview

### Community 66 - "market-visuals.tsx"
Cohesion: 0.39
Nodes (7): EASE, fmt(), HoursOverlap(), MarketBoard(), overlap(), Span, wrap()

### Community 67 - "pricing/page.tsx"
Cohesion: 0.16
Nodes (11): answer, drivers, faqs, metadata, ScopeBuilder(), ScopeOption, focusKeywords, localRanking (+3 more)

### Community 68 - "industries.ts"
Cohesion: 0.25
Nodes (5): generateMetadata(), industries, industriesOverview, industrySlugs, IndustryContent

### Community 69 - "report-login.mjs"
Cohesion: 0.25
Nodes (6): ref_node_crypto, ref_node_fs, ref_node_readline, email, kept, salt

### Community 70 - "buy-button.tsx"
Cohesion: 0.40
Nodes (3): BuyButton(), Props, Window

### Community 71 - "trackLead"
Cohesion: 0.38
Nodes (6): ContactForm(), GrowthAuditForm(), ChatWidget(), onSubmit(), send(), trackLead()

### Community 73 - "LogoTraceLoader.tsx"
Cohesion: 0.40
Nodes (3): FILL_PATHS, LoaderPhase, LogoTraceLoaderProps

### Community 74 - "blog-index.tsx"
Cohesion: 0.67
Nodes (3): BlogIndex(), Card, formatDate()

## Knowledge Gaps
- **385 isolated node(s):** `npx`, `metadata`, `answer`, `values`, `faqs` (+380 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 469 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `next` to `app/not-found.tsx`, `admin-auth.ts`, `graph`, `review-generator.tsx`, `(site)/page.tsx`, `team/page.tsx`, `package.json`, `reports/page.tsx`, `lucide-react`, `emails.ts`, `LogoLoop.tsx`, `footer.tsx`, `google-ads-ppc/page.tsx`, `content-types.ts`, `about/page.tsx`, `buildMetadata`, `getBlogPosts`, `electric-monogram.tsx`, `seo.ts`, `blog-post-page.tsx`, `chat-widget.tsx`, `react`, `framer-motion`, `structured-data.ts`, `chat-knowledge.ts`, `demand-map.tsx`, `hasAdminAccess`, `service-finder.tsx`, `nav.tsx`, `sitemap.ts`, `market-visuals.tsx`, `pricing/page.tsx`, `industries.ts`, `buy-button.tsx`, `blog-index.tsx`?**
  _High betweenness centrality (0.222) - this node is a cross-community bridge._
- **Why does `Multi-tenant review tool /r/[client]` connect `README.md` to `reports/page.tsx`, `Macrostructure family`, `PROJECT_CONTEXT.md`?**
  _High betweenness centrality (0.107) - this node is a cross-community bridge._
- **Why does `react` connect `react` to `ElectricLogo.tsx`, `app/not-found.tsx`, `review-generator.tsx`, `(site)/page.tsx`, `team/page.tsx`, `package.json`, `reports/page.tsx`, `accent-switcher.tsx`, `lucide-react`, `growth-audit-form.tsx`, `LogoLoop.tsx`, `footer.tsx`, `content-types.ts`, `about/page.tsx`, `electric-monogram.tsx`, `seo.ts`, `blog-post-page.tsx`, `chat-widget.tsx`, `globe.tsx`, `PeekRating.tsx`, `demand-map.tsx`, `hasAdminAccess`, `service-finder.tsx`, `nav.tsx`, `industry-path.tsx`, `pricing/page.tsx`, `buy-button.tsx`, `LogoTraceLoader.tsx`, `blog-index.tsx`?**
  _High betweenness centrality (0.103) - this node is a cross-community bridge._
- **What connects `npx`, `metadata`, `answer` to the rest of the system?**
  _385 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `ElectricLogo.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.08669354838709678 - nodes in this community are weakly interconnected._
- **Should `(site)/page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.09487179487179487 - nodes in this community are weakly interconnected._
- **Should `components.json` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._