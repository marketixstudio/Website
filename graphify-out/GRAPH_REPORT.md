# Graph Report - MARKETIX WEBSITE  (2026-10-08)

## Corpus Check
- 179 files · ~142,283 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 5 file(s) not represented in the graph (top: (none) 2, .example 1, .ico 1)

## Summary
- 1100 nodes · 2756 edges · 71 communities (65 shown, 6 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 36 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `75d44259`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- ElectricLogo.tsx
- accent-switcher.tsx
- admin-auth.ts
- graph
- review-generator.tsx
- review/route.ts
- gmb-toolkit/page.tsx
- team/page.tsx
- components.json
- package.json
- compilerOptions
- WebThreads.tsx
- framer-motion
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
- pricing/page.tsx
- next
- app/not-found.tsx
- work/[slug]/page.tsx
- nav.tsx
- Accent violet #C82AEF
- vercel.json
- review-report.ts
- next.config.mjs
- about/page.tsx
- shadcn
- postcss.config.mjs
- demand-map.tsx
- footer.tsx
- AccentSwitcher
- chat-widget.tsx
- blog/page.tsx
- import-demo-site.py
- PeekRating.tsx
- reports/page.tsx
- locations/page.tsx
- Overnight redesign plan (started 2026-09-24)
- legal-page.tsx
- react
- Buyer questions by topic (as searched)
- seo.ts
- market-visuals.tsx
- pune-areas.ts
- industries/page.tsx
- app/layout.tsx
- globe.tsx
- sitemap.ts
- newsletter-form.tsx
- hasAdminAccess
- Google review replies and the review report
- service-finder.tsx
- (site)/page.tsx
- marketixstudio.com DNS records
- blog-post-page.tsx
- trackLead
- buy-button.tsx
- analytics.ts
- dependencies
- structured-data.ts
- devDependencies
- scripts
- tailwind.config.ts

## God Nodes (most connected - your core abstractions)
1. `next` - 76 edges
2. `lucide-react` - 65 edges
3. `graph()` - 57 edges
4. `breadcrumbSchema()` - 54 edges
5. `buildMetadata()` - 42 edges
6. `faqSchema()` - 40 edges
7. `react` - 37 edges
8. `answerSchema()` - 32 edges
9. `JsonLd()` - 29 edges
10. `TextLink()` - 27 edges

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

## Communities (71 total, 6 thin omitted)

### Community 0 - "ElectricLogo.tsx"
Cohesion: 0.15
Nodes (19): blurGrid(), blurLine(), ElectricLogo(), ElectricLogoProps, Focus, hexToRgb(), Point, Pulse (+11 more)

### Community 1 - "accent-switcher.tsx"
Cohesion: 0.16
Nodes (16): choose(), Bounds, DragState, Side, currentAccent(), ELECTRIC, ElectricMonogram(), ThemeToggle() (+8 more)

### Community 2 - "admin-auth.ts"
Cohesion: 0.18
Nodes (18): attempts, createFirstLogin(), signIn(), startSession(), LoginForm(), dynamic, metadata, Page() (+10 more)

### Community 3 - "graph"
Cohesion: 0.19
Nodes (31): Page(), Page(), Page(), Page(), Page(), Page(), Page(), Page() (+23 more)

### Community 5 - "review/route.ts"
Cohesion: 0.13
Nodes (30): dynamic, GET(), maxDuration, runtime, POST(), runtime, hits, pickStyle() (+22 more)

### Community 6 - "gmb-toolkit/page.tsx"
Cohesion: 0.11
Nodes (18): runtime, agreed, answer, metadata, principles, steps, countOf(), metadata (+10 more)

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

### Community 11 - "WebThreads.tsx"
Cohesion: 0.21
Nodes (10): HeroThreads(), toHex(), ctxMap, FAN_MODE, FanMode, hexToRgb(), WebThreads(), WebThreadsCtx (+2 more)

### Community 12 - "framer-motion"
Cohesion: 0.20
Nodes (8): Funnel(), Step, loops, queries, SearchJourney(), Stage, stages, framer-motion

### Community 13 - "design.md (locked design system)"
Cohesion: 0.13
Nodes (17): design.md (locked design system), Atmospheric genre, CTA voice (dark pill + accent ring + arrow circle), Hallmark gate 22, Honest content rule (overrides every skill), Live-site elements not to carry over, No gradient text / accent on one word, Plus Jakarta Sans only typography (+9 more)

### Community 14 - "content-types.ts"
Cohesion: 0.05
Nodes (36): generateMetadata(), SummaryGroup, CtaBand(), Faq(), Feature, FeatureCards(), LinkCardGrid(), Outcome (+28 more)

### Community 15 - "CLAUDE.md (project instructions)"
Cohesion: 0.14
Nodes (15): .claude/CLAUDE.md (graphify skill pointer), graphify skill (/graphify trigger), CLAUDE.md (project instructions), graphify query/path/explain usage rules, grep aliased to ugrep gotcha, marketix-dev launch config (port 3000), npm run build while dev corrupts .next, No hand-drawn browser/phone/dashboard chrome (+7 more)

### Community 16 - "README.md"
Cohesion: 0.15
Nodes (14): Content in code, no CMS, lib/blog.ts async blog API, Multi-tenant review tool /r/[client], WordPress 301 redirects (next.config.mjs), Claude API client review generator (app/api/review), content/ typed TS content directory, Framer Motion, lucide-react icons (+6 more)

### Community 17 - "emails.ts"
Cohesion: 0.09
Nodes (52): clean(), getSystemPrompt(), IncomingMessage, isRateLimited(), POST(), replySchema, requestLog, runtime (+44 more)

### Community 18 - "growth-audit-form.tsx"
Cohesion: 0.14
Nodes (15): Errors, nextSteps, services, Status, Field(), Input(), Select(), Textarea() (+7 more)

### Community 19 - "LogoLoop.tsx"
Cohesion: 0.23
Nodes (11): ClientLogoLoop(), Logo, ANIMATION_CONFIG, cx(), LogoItem, LogoLoop, LogoLoopProps, toCssLength() (+3 more)

### Community 20 - "review-autoreply.ts"
Cohesion: 0.14
Nodes (28): esc(), GET(), page(), runtime, GET(), runtime, POST(), runtime (+20 more)

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
Cohesion: 0.32
Nodes (6): answer, drivers, faqs, metadata, ScopeBuilder(), ScopeOption

### Community 25 - "next"
Cohesion: 0.16
Nodes (29): routes, answer, audiences, hero, metadata, hero, metadata, workGroups (+21 more)

### Community 26 - "app/not-found.tsx"
Cohesion: 0.19
Nodes (10): metadata, NotFound(), CardSpotlight(), SiteFooter(), SiteNav(), topics, waLink(), WhatsAppFloat() (+2 more)

### Community 27 - "work/[slug]/page.tsx"
Cohesion: 0.16
Nodes (13): metadata, generateMetadata(), isTodo(), livePreview, Page(), Breadcrumbs(), Crumb, clientLogos (+5 more)

### Community 28 - "nav.tsx"
Cohesion: 0.18
Nodes (11): LOGO, LOGO_LIGHT, Wordmark(), aboutLinks, aboutMatch, industriesNav, PanelId, plainLinks (+3 more)

### Community 29 - "Accent violet #C82AEF"
Cohesion: 0.33
Nodes (6): Card surface (radial gradient, 24px radius), Accent violet #C82AEF, Static violet light pool + grain, Neon ring (hover/focus only), Aurora hero removed (static light pool), Rejected: gold/yellow structural accent

### Community 30 - "vercel.json"
Cohesion: 0.33
Nodes (5): buildCommand, crons, framework, installCommand, $schema

### Community 31 - "review-report.ts"
Cohesion: 0.15
Nodes (24): POST(), runtime, Bar, buildReport(), monthName(), Period, periodDays(), stars() (+16 more)

### Community 33 - "about/page.tsx"
Cohesion: 0.12
Nodes (22): GET(), line(), revalidate, answer, faqs, metadata, values, archivedVistrowPosts (+14 more)

### Community 36 - "demand-map.tsx"
Cohesion: 0.25
Nodes (8): DemandMap(), EASE, Method, methods, SourceCard(), sources, START_MS, useTypingLoop()

### Community 37 - "footer.tsx"
Cohesion: 0.20
Nodes (9): columns, group(), icons, footerNav, NavChild, NavGroup, NavItem, NavLinkRow (+1 more)

### Community 38 - "AccentSwitcher"
Cohesion: 0.47
Nodes (8): AccentSwitcher(), begin(), finish(), move(), onMouseDown(), onTouchStart(), snap(), clamp()

### Community 39 - "chat-widget.tsx"
Cohesion: 0.22
Nodes (8): ChatMessage, fallback, greeting, LinkAction, Prompt, questions, topics, assistant

### Community 40 - "blog/page.tsx"
Cohesion: 0.29
Nodes (9): generateMetadata(), Page(), revalidate, generateMetadata(), generateStaticParams(), Page(), revalidate, getBlogPost() (+1 more)

### Community 41 - "import-demo-site.py"
Cohesion: 0.22
Nodes (7): glob, os, pil, re, Imports a finished static website (plain HTML/CSS/JS + images) as a demo at…, shutil, sys

### Community 42 - "PeekRating.tsx"
Cohesion: 0.32
Nodes (7): clamp(), GestureState, PeekRating(), PeekRatingProps, PeekRatingShape, reducedMotion(), SHAPES

### Community 43 - "reports/page.tsx"
Cohesion: 0.13
Nodes (14): Chart(), chip(), dynamic, metadata, Page(), QueueItem(), call(), draft() (+6 more)

### Community 44 - "locations/page.tsx"
Cohesion: 0.18
Nodes (12): answer, metadata, zones, globalLocations, globalProcess, globalServices, indiaLocations, indiaProcess (+4 more)

### Community 45 - "Overnight redesign plan (started 2026-09-24)"
Cohesion: 0.25
Nodes (7): Log, Morning summary (2026-09-24, ~07:00), Overnight redesign plan (started 2026-09-24), Phase 2: Pages (redesign each in the new system), Phase 3: Site-wide verification, Progress, The creative bar

### Community 46 - "legal-page.tsx"
Cohesion: 0.17
Nodes (10): metadata, metadata, metadata, metadata, metadata, formatDate(), LegalPage(), slugify() (+2 more)

### Community 47 - "react"
Cohesion: 0.22
Nodes (7): BlogIndex(), Card, formatDate(), ReadingProgress(), Magnet(), MagnetProps, react

### Community 48 - "Buyer questions by topic (as searched)"
Cohesion: 0.07
Nodes (26): automotive, branding-design, Buyer questions by topic (as searched), content-marketing, conversion-rate-optimisation, ecommerce-d2c, education, email-marketing-automation (+18 more)

### Community 49 - "seo.ts"
Cohesion: 0.13
Nodes (9): generateMetadata(), generateMetadata(), CUSTOM_PAGES, generateMetadata(), industries, buildMetadata(), SeoMetadata, siteTagline (+1 more)

### Community 50 - "market-visuals.tsx"
Cohesion: 0.39
Nodes (7): EASE, fmt(), HoursOverlap(), MarketBoard(), overlap(), Span, wrap()

### Community 51 - "pune-areas.ts"
Cohesion: 0.24
Nodes (6): dynamicParams, generateMetadata(), PuneArea, puneAreaBySlug, puneAreas, s

### Community 52 - "industries/page.tsx"
Cohesion: 0.38
Nodes (5): answer, goals, metadata, ExplorerItem, IndustryExplorer()

### Community 53 - "app/layout.tsx"
Cohesion: 0.22
Nodes (8): app_globals, jakarta, metadata, RootLayout(), viewport, GoogleAnalytics(), organizationSchema, websiteSchema

### Community 54 - "globe.tsx"
Cohesion: 0.33
Nodes (7): facing(), Globe(), readColours(), cityCoords, LatLng, PUNE, cobe

### Community 55 - "sitemap.ts"
Cohesion: 0.14
Nodes (11): Entry, sitemap(), legalSlugs, locationSlugs, caseStudies, caseStudyIndustries, caseStudyList, caseStudySlugs (+3 more)

### Community 57 - "hasAdminAccess"
Cohesion: 0.10
Nodes (20): GET(), runtime, dynamic, metadata, Page(), ReplyHelper(), draft(), hasAdminAccess() (+12 more)

### Community 58 - "Google review replies and the review report"
Cohesion: 0.33
Nodes (5): Google review replies and the review report, Rules the replies follow (lib/review-reply.ts), Setup, once, Signing in, What runs

### Community 59 - "service-finder.tsx"
Cohesion: 0.40
Nodes (5): FinderCard, GoalId, goals, ServiceFinder(), slugOf()

### Community 60 - "(site)/page.tsx"
Cohesion: 0.22
Nodes (8): answer, faqs, groupIcons, industryIcons, industryMeasures, metadata, serviceBlurbs, serviceIcons

### Community 61 - "marketixstudio.com DNS records"
Cohesion: 0.50
Nodes (3): If the zone has to be recreated at MilesWeb, marketixstudio.com DNS records, When the new site moves to Vercel

### Community 62 - "blog-post-page.tsx"
Cohesion: 0.48
Nodes (5): ShareRow(), BlogPostPage(), headingId(), renderInlineLinks(), articleSchema()

### Community 63 - "trackLead"
Cohesion: 0.38
Nodes (6): ContactForm(), GrowthAuditForm(), ChatWidget(), onSubmit(), send(), trackLead()

### Community 64 - "buy-button.tsx"
Cohesion: 0.40
Nodes (3): BuyButton(), Props, Window

### Community 65 - "analytics.ts"
Cohesion: 0.50
Nodes (3): GtagCommand, LeadSource, Window

### Community 67 - "dependencies"
Cohesion: 0.18
Nodes (11): dependencies, @anthropic-ai/sdk, cobe, framer-motion, gsap, lucide-react, motion, next (+3 more)

### Community 68 - "structured-data.ts"
Cohesion: 0.09
Nodes (26): include, metadata, faqs, metadata, routes, whatsappText, groups, metadata (+18 more)

### Community 69 - "devDependencies"
Cohesion: 0.25
Nodes (8): devDependencies, autoprefixer, postcss, tailwindcss, @types/node, @types/react, @types/react-dom, typescript

### Community 70 - "scripts"
Cohesion: 0.29
Nodes (7): scripts, build, dev, lint, preview, report-login, start

## Knowledge Gaps
- **364 isolated node(s):** `npx`, `metadata`, `answer`, `values`, `faqs` (+359 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 446 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `next` to `admin-auth.ts`, `graph`, `review-generator.tsx`, `gmb-toolkit/page.tsx`, `team/page.tsx`, `package.json`, `framer-motion`, `content-types.ts`, `emails.ts`, `LogoLoop.tsx`, `pricing/page.tsx`, `app/not-found.tsx`, `work/[slug]/page.tsx`, `nav.tsx`, `about/page.tsx`, `demand-map.tsx`, `footer.tsx`, `chat-widget.tsx`, `blog/page.tsx`, `reports/page.tsx`, `locations/page.tsx`, `legal-page.tsx`, `react`, `seo.ts`, `market-visuals.tsx`, `pune-areas.ts`, `industries/page.tsx`, `app/layout.tsx`, `sitemap.ts`, `hasAdminAccess`, `service-finder.tsx`, `(site)/page.tsx`, `blog-post-page.tsx`, `buy-button.tsx`, `structured-data.ts`?**
  _High betweenness centrality (0.252) - this node is a cross-community bridge._
- **Why does `Multi-tenant review tool /r/[client]` connect `README.md` to `review-autoreply.ts`, `Macrostructure family`, `PROJECT_CONTEXT.md`?**
  _High betweenness centrality (0.100) - this node is a cross-community bridge._
- **Why does `lucide-react` connect `next` to `accent-switcher.tsx`, `admin-auth.ts`, `review-generator.tsx`, `gmb-toolkit/page.tsx`, `package.json`, `framer-motion`, `content-types.ts`, `growth-audit-form.tsx`, `pricing/page.tsx`, `app/not-found.tsx`, `work/[slug]/page.tsx`, `nav.tsx`, `about/page.tsx`, `demand-map.tsx`, `footer.tsx`, `chat-widget.tsx`, `blog/page.tsx`, `PeekRating.tsx`, `reports/page.tsx`, `locations/page.tsx`, `react`, `industries/page.tsx`, `newsletter-form.tsx`, `hasAdminAccess`, `service-finder.tsx`, `(site)/page.tsx`, `blog-post-page.tsx`, `buy-button.tsx`, `structured-data.ts`?**
  _High betweenness centrality (0.096) - this node is a cross-community bridge._
- **What connects `npx`, `metadata`, `answer` to the rest of the system?**
  _364 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `ElectricLogo.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.14736842105263157 - nodes in this community are weakly interconnected._
- **Should `review/route.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.12698412698412698 - nodes in this community are weakly interconnected._
- **Should `gmb-toolkit/page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.10869565217391304 - nodes in this community are weakly interconnected._