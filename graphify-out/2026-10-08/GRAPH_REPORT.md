# Graph Report - MARKETIX WEBSITE  (2026-10-08)

## Corpus Check
- 183 files · ~146,652 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 5 file(s) not represented in the graph (top: (none) 2, .example 1, .ico 1)

## Summary
- 1124 nodes · 2813 edges · 68 communities (62 shown, 6 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 36 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `50e66eea`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- ElectricLogo.tsx
- app/not-found.tsx
- next
- graph
- review-generator.tsx
- review/route.ts
- gmb-toolkit/page.tsx
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
- home/page.tsx
- review-autoreply.ts
- Positioning guardrail (Marketix vs Vistrow)
- Macrostructure family
- PROJECT_CONTEXT.md
- content-types.ts
- lucide-react
- WebThreads.tsx
- (site)/page.tsx
- hasAdminAccess
- Accent violet #C82AEF
- vercel.json
- review-report.ts
- next.config.mjs
- pune-areas.ts
- shadcn
- postcss.config.mjs
- industries.ts
- nav.tsx
- locations/page.tsx
- chat-widget.tsx
- blog/page.tsx
- import-demo-site.py
- LogoTraceLoader.tsx
- QueueItem
- locations.ts
- Overnight redesign plan (started 2026-09-24)
- dependencies
- react
- Buyer questions by topic (as searched)
- AccentSwitcher
- globe.tsx
- electric-monogram.tsx
- devDependencies
- structured-data.ts
- scripts
- chat-knowledge.ts
- llms.txt/route.ts
- callback/route.ts
- Google review replies and the review report
- service-finder.tsx
- footer.tsx
- marketixstudio.com DNS records
- sitemap.ts
- tailwind.config.ts
- buy-button.tsx
- checkout/route.ts
- industry-explorer.tsx
- about/page.tsx

## God Nodes (most connected - your core abstractions)
1. `next` - 77 edges
2. `lucide-react` - 67 edges
3. `graph()` - 57 edges
4. `breadcrumbSchema()` - 54 edges
5. `buildMetadata()` - 42 edges
6. `faqSchema()` - 40 edges
7. `react` - 39 edges
8. `answerSchema()` - 32 edges
9. `JsonLd()` - 29 edges
10. `TextLink()` - 28 edges

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

## Communities (68 total, 6 thin omitted)

### Community 0 - "ElectricLogo.tsx"
Cohesion: 0.15
Nodes (19): blurGrid(), blurLine(), ElectricLogo(), ElectricLogoProps, Focus, hexToRgb(), Point, Pulse (+11 more)

### Community 1 - "app/not-found.tsx"
Cohesion: 0.19
Nodes (10): metadata, CardSpotlight(), group(), SiteFooter(), SiteNav(), topics, waLink(), WhatsAppFloat() (+2 more)

### Community 2 - "next"
Cohesion: 0.05
Nodes (45): app_globals, jakarta, metadata, RootLayout(), viewport, attempts, createFirstLogin(), signIn() (+37 more)

### Community 3 - "graph"
Cohesion: 0.21
Nodes (30): Page(), Page(), Page(), Page(), Page(), Page(), Page(), Page() (+22 more)

### Community 4 - "review-generator.tsx"
Cohesion: 0.14
Nodes (10): ReviewGenerator(), Status, clamp(), GestureState, PeekRating(), PeekRatingProps, PeekRatingShape, reducedMotion() (+2 more)

### Community 5 - "review/route.ts"
Cohesion: 0.16
Nodes (25): POST(), runtime, hits, pickStyle(), POST(), rateLimited(), recentReviews, remember() (+17 more)

### Community 6 - "gmb-toolkit/page.tsx"
Cohesion: 0.17
Nodes (12): agreed, answer, metadata, principles, steps, countOf(), metadata, Page() (+4 more)

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

### Community 11 - "reports/page.tsx"
Cohesion: 0.13
Nodes (13): Chart(), chip(), dynamic, metadata, Page(), ReplyQueue(), reviewClientList, reviewClients (+5 more)

### Community 12 - "accent-switcher.tsx"
Cohesion: 0.23
Nodes (11): choose(), Bounds, DragState, Side, ThemeToggle(), toggle(), ACCENT_KEY, accents (+3 more)

### Community 13 - "design.md (locked design system)"
Cohesion: 0.13
Nodes (17): design.md (locked design system), Atmospheric genre, CTA voice (dark pill + accent ring + arrow circle), Hallmark gate 22, Honest content rule (overrides every skill), Live-site elements not to carry over, No gradient text / accent on one word, Plus Jakarta Sans only typography (+9 more)

### Community 14 - "tools/[slug]/page.tsx"
Cohesion: 0.07
Nodes (30): metadata, generateMetadata(), SummaryGroup, CtaBand(), Faq(), FeatureCards(), LinkCardGrid(), Outcome (+22 more)

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
Cohesion: 0.06
Nodes (36): ContactForm(), Errors, nextSteps, services, Status, Field(), Input(), Select() (+28 more)

### Community 19 - "home/page.tsx"
Cohesion: 0.06
Nodes (35): answer, averageRating, bestAt, coreServices, delay(), faqs, HomePreviewPage(), metadata (+27 more)

### Community 20 - "review-autoreply.ts"
Cohesion: 0.27
Nodes (15): POST(), runtime, accessToken(), GbpReview, getReview(), gget(), listReviews(), postReply() (+7 more)

### Community 21 - "Positioning guardrail (Marketix vs Vistrow)"
Cohesion: 0.22
Nodes (11): Must not look or read like Vistrow rule, Positioning guardrail (Marketix vs Vistrow), Keyword territory split with Vistrow, Marketix Studio, NAP (Balewadi High Street, Pune), Rejected: copying Vistrow sections/chrome, Rebuild goal: SEO + AEO + GEO, not AI-looking, Marketix team (+3 more)

### Community 22 - "Macrostructure family"
Cohesion: 0.20
Nodes (11): Ft5 Statement footer, Long Document macrostructure (blog, legal), Macrostructure family, Map / Diagram macrostructure (google-ads-ppc), N5 Floating pill nav, Quote-Led macrostructure (local-seo-gmb), Split Studio macrostructure, Jay Ganesh Car Accessories (Maruti Kalbhor) (+3 more)

### Community 23 - "PROJECT_CONTEXT.md"
Cohesion: 0.31
Nodes (9): Hallmark slop test before shipping UI, Never fabricate metrics/testimonials/clients rule, Design system locked decision, Rejected: Editorial ledger (Specimen fall-through), Google Maps Ranking Toolkit, Hallmark skill (Nutlope), Hallmark audit 2026-09-23 (9 critical, 8 major, 7 minor), Site map (59 routes, 79 static pages) (+1 more)

### Community 24 - "content-types.ts"
Cohesion: 0.12
Nodes (21): groups, metadata, answer, drivers, faqs, metadata, QA, Feature (+13 more)

### Community 25 - "lucide-react"
Cohesion: 0.15
Nodes (29): answer, audiences, hero, metadata, hero, metadata, workGroups, answer (+21 more)

### Community 26 - "WebThreads.tsx"
Cohesion: 0.21
Nodes (10): HeroThreads(), toHex(), ctxMap, FAN_MODE, FanMode, hexToRgb(), WebThreads(), WebThreadsCtx (+2 more)

### Community 27 - "(site)/page.tsx"
Cohesion: 0.09
Nodes (22): answer, faqs, groupIcons, industryIcons, industryMeasures, metadata, serviceBlurbs, serviceIcons (+14 more)

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
Cohesion: 0.15
Nodes (24): POST(), runtime, Bar, buildReport(), monthName(), Period, periodDays(), stars() (+16 more)

### Community 33 - "pune-areas.ts"
Cohesion: 0.24
Nodes (6): dynamicParams, generateMetadata(), PuneArea, puneAreaBySlug, puneAreas, s

### Community 36 - "industries.ts"
Cohesion: 0.22
Nodes (6): generateMetadata(), industries, industriesOverview, industryList, industrySlugs, IndustryContent

### Community 37 - "nav.tsx"
Cohesion: 0.18
Nodes (10): LOGO, LOGO_LIGHT, Wordmark(), aboutLinks, aboutMatch, industriesNav, PanelId, plainLinks (+2 more)

### Community 38 - "locations/page.tsx"
Cohesion: 0.22
Nodes (8): answer, goals, metadata, answer, metadata, zones, Breadcrumbs(), Crumb

### Community 39 - "chat-widget.tsx"
Cohesion: 0.17
Nodes (11): ChatMessage, ChatWidget(), onSubmit(), send(), fallback, greeting, LinkAction, Prompt (+3 more)

### Community 40 - "blog/page.tsx"
Cohesion: 0.22
Nodes (12): generateMetadata(), Page(), revalidate, generateMetadata(), generateStaticParams(), Page(), revalidate, archivedVistrowPosts (+4 more)

### Community 41 - "import-demo-site.py"
Cohesion: 0.22
Nodes (7): glob, os, pil, re, Imports a finished static website (plain HTML/CSS/JS + images) as a demo at…, shutil, sys

### Community 42 - "LogoTraceLoader.tsx"
Cohesion: 0.40
Nodes (3): FILL_PATHS, LoaderPhase, LogoTraceLoaderProps

### Community 43 - "QueueItem"
Cohesion: 0.83
Nodes (4): QueueItem(), call(), draft(), post()

### Community 44 - "locations.ts"
Cohesion: 0.15
Nodes (10): generateMetadata(), globalLocations, globalProcess, globalServices, indiaLocations, indiaProcess, indiaServices, locations (+2 more)

### Community 45 - "Overnight redesign plan (started 2026-09-24)"
Cohesion: 0.25
Nodes (7): Log, Morning summary (2026-09-24, ~07:00), Overnight redesign plan (started 2026-09-24), Phase 2: Pages (redesign each in the new system), Phase 3: Site-wide verification, Progress, The creative bar

### Community 46 - "dependencies"
Cohesion: 0.18
Nodes (11): dependencies, @anthropic-ai/sdk, cobe, framer-motion, gsap, lucide-react, motion, next (+3 more)

### Community 47 - "react"
Cohesion: 0.14
Nodes (9): BlogIndex(), Card, formatDate(), ReadingProgress(), ShareRow(), Magnet(), MagnetProps, CaseStudy (+1 more)

### Community 48 - "Buyer questions by topic (as searched)"
Cohesion: 0.07
Nodes (26): automotive, branding-design, Buyer questions by topic (as searched), content-marketing, conversion-rate-optimisation, ecommerce-d2c, education, email-marketing-automation (+18 more)

### Community 49 - "AccentSwitcher"
Cohesion: 0.47
Nodes (8): AccentSwitcher(), begin(), finish(), move(), onMouseDown(), onTouchStart(), snap(), clamp()

### Community 50 - "globe.tsx"
Cohesion: 0.29
Nodes (8): AreaGlobe(), facing(), Globe(), readColours(), cityCoords, LatLng, PUNE, cobe

### Community 51 - "electric-monogram.tsx"
Cohesion: 0.32
Nodes (6): NotFound(), routes, currentAccent(), ELECTRIC, ElectricMonogram(), AccentKey

### Community 52 - "devDependencies"
Cohesion: 0.25
Nodes (8): devDependencies, autoprefixer, postcss, tailwindcss, @types/node, @types/react, @types/react-dom, typescript

### Community 53 - "structured-data.ts"
Cohesion: 0.11
Nodes (20): checks, faqs, metadata, steps, BlogPostPage(), headingId(), renderInlineLinks(), BlogSeoImage (+12 more)

### Community 54 - "scripts"
Cohesion: 0.29
Nodes (7): scripts, build, dev, lint, preview, report-login, start

### Community 55 - "chat-knowledge.ts"
Cohesion: 0.15
Nodes (10): serviceList, caseStudyIndustries, caseStudyList, caseStudySlugs, publishedCaseStudies, publishedCaseStudySlugs, workOverview, chatPuneAreas (+2 more)

### Community 56 - "llms.txt/route.ts"
Cohesion: 0.50
Nodes (4): GET(), line(), revalidate, locationList

### Community 57 - "callback/route.ts"
Cohesion: 0.20
Nodes (14): esc(), GET(), page(), runtime, GET(), runtime, exchangeCode(), oauthUrl() (+6 more)

### Community 58 - "Google review replies and the review report"
Cohesion: 0.33
Nodes (5): Google review replies and the review report, Rules the replies follow (lib/review-reply.ts), Setup, once, Signing in, What runs

### Community 59 - "service-finder.tsx"
Cohesion: 0.40
Nodes (5): FinderCard, GoalId, goals, ServiceFinder(), slugOf()

### Community 60 - "footer.tsx"
Cohesion: 0.16
Nodes (10): columns, icons, NewsletterForm(), Status, footerNav, NavChild, NavGroup, NavItem (+2 more)

### Community 61 - "marketixstudio.com DNS records"
Cohesion: 0.50
Nodes (3): If the zone has to be recreated at MilesWeb, marketixstudio.com DNS records, When the new site moves to Vercel

### Community 62 - "sitemap.ts"
Cohesion: 0.40
Nodes (4): Entry, sitemap(), locationSlugs, serviceSlugs

### Community 64 - "buy-button.tsx"
Cohesion: 0.40
Nodes (3): BuyButton(), Props, Window

### Community 68 - "about/page.tsx"
Cohesion: 0.16
Nodes (16): answer, faqs, metadata, values, include, metadata, faqs, metadata (+8 more)

## Knowledge Gaps
- **378 isolated node(s):** `npx`, `metadata`, `answer`, `values`, `faqs` (+373 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 461 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `next` to `app/not-found.tsx`, `review-generator.tsx`, `gmb-toolkit/page.tsx`, `team/page.tsx`, `package.json`, `reports/page.tsx`, `tools/[slug]/page.tsx`, `emails.ts`, `growth-audit-form.tsx`, `home/page.tsx`, `content-types.ts`, `lucide-react`, `(site)/page.tsx`, `hasAdminAccess`, `pune-areas.ts`, `industries.ts`, `nav.tsx`, `locations/page.tsx`, `chat-widget.tsx`, `blog/page.tsx`, `locations.ts`, `react`, `electric-monogram.tsx`, `structured-data.ts`, `service-finder.tsx`, `footer.tsx`, `sitemap.ts`, `buy-button.tsx`, `industry-explorer.tsx`, `about/page.tsx`?**
  _High betweenness centrality (0.220) - this node is a cross-community bridge._
- **Why does `Multi-tenant review tool /r/[client]` connect `README.md` to `reports/page.tsx`, `Macrostructure family`, `PROJECT_CONTEXT.md`?**
  _High betweenness centrality (0.114) - this node is a cross-community bridge._
- **Why does `lucide-react` connect `lucide-react` to `app/not-found.tsx`, `next`, `review-generator.tsx`, `gmb-toolkit/page.tsx`, `package.json`, `reports/page.tsx`, `accent-switcher.tsx`, `tools/[slug]/page.tsx`, `growth-audit-form.tsx`, `home/page.tsx`, `content-types.ts`, `(site)/page.tsx`, `hasAdminAccess`, `industries.ts`, `nav.tsx`, `locations/page.tsx`, `chat-widget.tsx`, `blog/page.tsx`, `locations.ts`, `react`, `electric-monogram.tsx`, `structured-data.ts`, `service-finder.tsx`, `footer.tsx`, `buy-button.tsx`, `industry-explorer.tsx`, `about/page.tsx`?**
  _High betweenness centrality (0.114) - this node is a cross-community bridge._
- **What connects `npx`, `metadata`, `answer` to the rest of the system?**
  _378 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `ElectricLogo.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.14736842105263157 - nodes in this community are weakly interconnected._
- **Should `next` be split into smaller, more focused modules?**
  _Cohesion score 0.05300207039337474 - nodes in this community are weakly interconnected._
- **Should `review-generator.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.13725490196078433 - nodes in this community are weakly interconnected._