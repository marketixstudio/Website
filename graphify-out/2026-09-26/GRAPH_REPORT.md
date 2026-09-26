# Graph Report - MARKETIX WEBSITE  (2026-09-26)

## Corpus Check
- 145 files · ~107,356 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 5 file(s) not represented in the graph (top: (none) 2, .example 1, .ico 1)

## Summary
- 847 nodes · 2218 edges · 49 communities (44 shown, 5 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 34 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `62db9969`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- chat-knowledge.ts
- accent-switcher.tsx
- content-types.ts
- growth-audit-form.tsx
- blog/[slug]/page.tsx
- review/route.ts
- buildMetadata
- structured-data.ts
- components.json
- package.json
- compilerOptions
- next
- google-ads-ppc/page.tsx
- design.md (locked design system)
- reveal.tsx
- CLAUDE.md (project instructions)
- README.md
- emails.ts
- gmb-toolkit/page.tsx
- pune-areas.ts
- work/[slug]/page.tsx
- Positioning guardrail (Marketix vs Vistrow)
- Macrostructure family
- PROJECT_CONTEXT.md
- industries.ts
- location-detail.tsx
- lucide-react
- (site)/page.tsx
- Overnight redesign plan (started 2026-09-24)
- Accent violet #C82AEF
- vercel.json
- ref_node_fs
- next.config.mjs
- AccentSwitcher
- shadcn
- postcss.config.mjs
- locations/page.tsx
- react
- sitemap.ts
- service-finder.tsx
- locations.ts
- tools/[slug]/page.tsx
- WebThreads.tsx
- graph
- primitives.tsx
- products-catalog.ts
- app/layout.tsx
- buy-button.tsx
- industry-explorer.tsx

## God Nodes (most connected - your core abstractions)
1. `next` - 69 edges
2. `lucide-react` - 62 edges
3. `graph()` - 57 edges
4. `breadcrumbSchema()` - 54 edges
5. `buildMetadata()` - 42 edges
6. `faqSchema()` - 40 edges
7. `answerSchema()` - 32 edges
8. `JsonLd()` - 29 edges
9. `react` - 28 edges
10. `TextLink()` - 27 edges

## Surprising Connections (you probably didn't know these)
- `Phase 2: Pages (redesign each in the new system)` --references--> `ServiceHero()`  [INFERRED]
  docs/REDESIGN_PLAN.md → components/v2/service-hero.tsx
- `Phase 1: Chrome and routing` --references--> `serviceHref()`  [INFERRED]
  docs/REDESIGN_PLAN.md → components/v2/primitives.tsx
- `Non-negotiable rules` --references--> `Cta()`  [INFERRED]
  docs/REDESIGN_PLAN.md → components/v2/primitives.tsx
- `Non-negotiable rules` --references--> `TextLink()`  [INFERRED]
  docs/REDESIGN_PLAN.md → components/v2/primitives.tsx
- `SEO / AEO / GEO checklist (every indexable page)` --references--> `buildMetadata()`  [INFERRED]
  docs/REDESIGN_PLAN.md → lib/seo.ts

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **v2 pilot rebuild in new design system** — docs_project_context_v2_rebuild, design_map_diagram, design_quote_led, design_n5_floating_pill_nav, design_ft5_statement_footer [EXTRACTED 1.00]
- **Anti-AI-slop design decisions (Aurora, eyebrows, column footer removed)** — docs_project_context_aurora_removed, docs_project_context_eyebrows_removed, docs_project_context_statement_footer_decision, design_light_pool, design_section_labels_off, design_ft5_statement_footer [INFERRED 0.85]
- **Differentiation from sister brand Vistrow** — claude_not_like_vistrow_rule, design_positioning_guardrail, docs_project_context_keyword_territory_split, docs_project_context_unpublish_vistrow_blog, docs_project_context_rejected_vistrow_copy [INFERRED 0.85]

## Communities (49 total, 5 thin omitted)

### Community 0 - "chat-knowledge.ts"
Cohesion: 0.23
Nodes (10): GET(), line(), revalidate, locationList, serviceList, servicesOverview, chatPuneAreas, keyPages (+2 more)

### Community 1 - "accent-switcher.tsx"
Cohesion: 0.20
Nodes (13): choose(), Bounds, DragState, Side, ThemeToggle(), toggle(), ACCENT_KEY, AccentKey (+5 more)

### Community 2 - "content-types.ts"
Cohesion: 0.11
Nodes (16): TODO: photo not found on the live site under the expected filename - send it…, team, teamBySlug, toolList, tools, toolSlugs, toolsOverview, BlogSection (+8 more)

### Community 3 - "growth-audit-form.tsx"
Cohesion: 0.06
Nodes (39): ContactForm(), Errors, nextSteps, services, Status, Field(), Input(), Select() (+31 more)

### Community 4 - "blog/[slug]/page.tsx"
Cohesion: 0.21
Nodes (12): generateMetadata(), Page(), generateMetadata(), generateStaticParams(), Page(), revalidate, sitemap(), archivedVistrowPosts (+4 more)

### Community 5 - "review/route.ts"
Cohesion: 0.12
Nodes (18): hits, POST(), rateLimited(), runtime, ReviewGenerator(), Status, reviewClientList, reviewClients (+10 more)

### Community 6 - "buildMetadata"
Cohesion: 0.40
Nodes (3): CUSTOM_PAGES, generateMetadata(), buildMetadata()

### Community 7 - "structured-data.ts"
Cohesion: 0.09
Nodes (26): include, metadata, metadata, Page(), who, initials(), metadata, Page() (+18 more)

### Community 8 - "components.json"
Cohesion: 0.11
Nodes (18): aliases, components, hooks, lib, ui, utils, registries, @react-bits (+10 more)

### Community 9 - "package.json"
Cohesion: 0.05
Nodes (41): dependencies, @anthropic-ai/sdk, cobe, framer-motion, gsap, lucide-react, motion, next (+33 more)

### Community 10 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 11 - "next"
Cohesion: 0.05
Nodes (40): metadata, metadata, metadata, NotFound(), routes, metadata, metadata, metadata (+32 more)

### Community 12 - "google-ads-ppc/page.tsx"
Cohesion: 0.13
Nodes (27): answer, audiences, faqs, hero, metadata, Page(), hero, metadata (+19 more)

### Community 13 - "design.md (locked design system)"
Cohesion: 0.13
Nodes (17): design.md (locked design system), Atmospheric genre, CTA voice (dark pill + accent ring + arrow circle), Hallmark gate 22, Honest content rule (overrides every skill), Live-site elements not to carry over, No gradient text / accent on one word, Plus Jakarta Sans only typography (+9 more)

### Community 14 - "reveal.tsx"
Cohesion: 0.22
Nodes (5): SummaryGroup, Outcome, Reveal(), RevealProps, SectionHeading()

### Community 15 - "CLAUDE.md (project instructions)"
Cohesion: 0.14
Nodes (15): .claude/CLAUDE.md (graphify skill pointer), graphify skill (/graphify trigger), CLAUDE.md (project instructions), graphify query/path/explain usage rules, grep aliased to ugrep gotcha, marketix-dev launch config (port 3000), npm run build while dev corrupts .next, No hand-drawn browser/phone/dashboard chrome (+7 more)

### Community 16 - "README.md"
Cohesion: 0.15
Nodes (14): Content in code, no CMS, lib/blog.ts async blog API, Multi-tenant review tool /r/[client], WordPress 301 redirects (next.config.mjs), Claude API client review generator (app/api/review), content/ typed TS content directory, Framer Motion, lucide-react icons (+6 more)

### Community 17 - "emails.ts"
Cohesion: 0.08
Nodes (53): clean(), getSystemPrompt(), IncomingMessage, isRateLimited(), POST(), replySchema, requestLog, runtime (+45 more)

### Community 18 - "gmb-toolkit/page.tsx"
Cohesion: 0.17
Nodes (12): agreed, answer, metadata, Page(), principles, steps, countOf(), metadata (+4 more)

### Community 19 - "pune-areas.ts"
Cohesion: 0.24
Nodes (6): dynamicParams, generateMetadata(), PuneArea, puneAreaBySlug, puneAreas, s

### Community 20 - "work/[slug]/page.tsx"
Cohesion: 0.15
Nodes (12): generateMetadata(), isTodo(), livePreview, Page(), caseStudies, caseStudyIndustries, caseStudyList, caseStudySlugs (+4 more)

### Community 21 - "Positioning guardrail (Marketix vs Vistrow)"
Cohesion: 0.22
Nodes (11): Must not look or read like Vistrow rule, Positioning guardrail (Marketix vs Vistrow), Keyword territory split with Vistrow, Marketix Studio, NAP (Balewadi High Street, Pune), Rejected: copying Vistrow sections/chrome, Rebuild goal: SEO + AEO + GEO, not AI-looking, Marketix team (+3 more)

### Community 22 - "Macrostructure family"
Cohesion: 0.20
Nodes (11): Ft5 Statement footer, Long Document macrostructure (blog, legal), Macrostructure family, Map / Diagram macrostructure (google-ads-ppc), N5 Floating pill nav, Quote-Led macrostructure (local-seo-gmb), Split Studio macrostructure, Jay Ganesh Car Accessories (Maruti Kalbhor) (+3 more)

### Community 23 - "PROJECT_CONTEXT.md"
Cohesion: 0.31
Nodes (9): Hallmark slop test before shipping UI, Never fabricate metrics/testimonials/clients rule, Design system locked decision, Rejected: Editorial ledger (Specimen fall-through), Google Maps Ranking Toolkit, Hallmark skill (Nutlope), Hallmark audit 2026-09-23 (9 critical, 8 major, 7 minor), Site map (59 routes, 79 static pages) (+1 more)

### Community 24 - "industries.ts"
Cohesion: 0.22
Nodes (6): generateMetadata(), industries, industriesOverview, industryList, industrySlugs, IndustryContent

### Community 25 - "location-detail.tsx"
Cohesion: 0.17
Nodes (15): AreaGlobe(), facing(), Globe(), readColours(), framing, EASE, fmt(), HoursOverlap() (+7 more)

### Community 26 - "lucide-react"
Cohesion: 0.21
Nodes (9): metadata, CtaBand(), Faq(), LinkCardGrid(), CtaLink, PageHero(), Breadcrumb(), Crumb (+1 more)

### Community 27 - "(site)/page.tsx"
Cohesion: 0.08
Nodes (24): answer, faqs, groupIcons, industryIcons, industryMeasures, metadata, serviceBlurbs, serviceIcons (+16 more)

### Community 28 - "Overnight redesign plan (started 2026-09-24)"
Cohesion: 0.25
Nodes (7): Log, Morning summary (2026-09-24, ~07:00), Overnight redesign plan (started 2026-09-24), Phase 2: Pages (redesign each in the new system), Phase 3: Site-wide verification, Progress, The creative bar

### Community 29 - "Accent violet #C82AEF"
Cohesion: 0.33
Nodes (6): Card surface (radial gradient, 24px radius), Accent violet #C82AEF, Static violet light pool + grain, Neon ring (hover/focus only), Aurora hero removed (static light pool), Rejected: gold/yellow structural accent

### Community 30 - "vercel.json"
Cohesion: 0.40
Nodes (4): buildCommand, framework, installCommand, $schema

### Community 33 - "AccentSwitcher"
Cohesion: 0.47
Nodes (8): AccentSwitcher(), begin(), finish(), move(), onMouseDown(), onTouchStart(), snap(), clamp()

### Community 36 - "locations/page.tsx"
Cohesion: 0.18
Nodes (11): answer, goals, metadata, answer, metadata, zones, answer, metadata (+3 more)

### Community 37 - "react"
Cohesion: 0.25
Nodes (6): BlogIndex(), Card, formatDate(), ReadingProgress(), ShareRow(), react

### Community 38 - "sitemap.ts"
Cohesion: 0.40
Nodes (4): Entry, locationSlugs, serviceSlugs, publishedCaseStudySlugs

### Community 39 - "service-finder.tsx"
Cohesion: 0.40
Nodes (5): FinderCard, GoalId, goals, ServiceFinder(), slugOf()

### Community 40 - "locations.ts"
Cohesion: 0.15
Nodes (10): generateMetadata(), globalLocations, globalProcess, globalServices, indiaLocations, indiaProcess, indiaServices, locations (+2 more)

### Community 41 - "tools/[slug]/page.tsx"
Cohesion: 0.19
Nodes (8): generateMetadata(), FeatureCards(), Steps(), AdBudgetCalculator(), RoasCalculator(), slug(), SOURCE_PRESETS, UtmBuilder()

### Community 42 - "WebThreads.tsx"
Cohesion: 0.21
Nodes (10): HeroThreads(), toHex(), ctxMap, FAN_MODE, FanMode, hexToRgb(), WebThreads(), WebThreadsCtx (+2 more)

### Community 43 - "graph"
Cohesion: 0.24
Nodes (21): Page(), Page(), Page(), Page(), Page(), Page(), Page(), HomePage() (+13 more)

### Community 44 - "primitives.tsx"
Cohesion: 0.11
Nodes (29): answer, faqs, metadata, values, revalidate, faqs, metadata, routes (+21 more)

### Community 45 - "products-catalog.ts"
Cohesion: 0.20
Nodes (8): runtime, Feature, Step, DigitalProduct, productList, products, lib_content_types_feature, lib_content_types_step

### Community 46 - "app/layout.tsx"
Cohesion: 0.22
Nodes (8): app_globals, jakarta, metadata, RootLayout(), viewport, GoogleAnalytics(), organizationSchema, websiteSchema

### Community 47 - "buy-button.tsx"
Cohesion: 0.40
Nodes (3): BuyButton(), Props, Window

## Knowledge Gaps
- **283 isolated node(s):** `npx`, `metadata`, `answer`, `values`, `faqs` (+278 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 345 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `next` to `content-types.ts`, `growth-audit-form.tsx`, `blog/[slug]/page.tsx`, `review/route.ts`, `buildMetadata`, `structured-data.ts`, `package.json`, `google-ads-ppc/page.tsx`, `reveal.tsx`, `emails.ts`, `gmb-toolkit/page.tsx`, `pune-areas.ts`, `work/[slug]/page.tsx`, `industries.ts`, `location-detail.tsx`, `lucide-react`, `(site)/page.tsx`, `locations/page.tsx`, `react`, `sitemap.ts`, `service-finder.tsx`, `locations.ts`, `tools/[slug]/page.tsx`, `graph`, `primitives.tsx`, `app/layout.tsx`, `buy-button.tsx`, `industry-explorer.tsx`?**
  _High betweenness centrality (0.209) - this node is a cross-community bridge._
- **Why does `Multi-tenant review tool /r/[client]` connect `README.md` to `review/route.ts`, `Macrostructure family`, `PROJECT_CONTEXT.md`?**
  _High betweenness centrality (0.167) - this node is a cross-community bridge._
- **Why does `lucide-react` connect `lucide-react` to `chat-knowledge.ts`, `accent-switcher.tsx`, `content-types.ts`, `growth-audit-form.tsx`, `review/route.ts`, `structured-data.ts`, `package.json`, `next`, `google-ads-ppc/page.tsx`, `reveal.tsx`, `gmb-toolkit/page.tsx`, `work/[slug]/page.tsx`, `industries.ts`, `location-detail.tsx`, `(site)/page.tsx`, `locations/page.tsx`, `react`, `service-finder.tsx`, `locations.ts`, `tools/[slug]/page.tsx`, `graph`, `primitives.tsx`, `products-catalog.ts`, `buy-button.tsx`, `industry-explorer.tsx`?**
  _High betweenness centrality (0.139) - this node is a cross-community bridge._
- **What connects `npx`, `metadata`, `answer` to the rest of the system?**
  _283 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `content-types.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.11428571428571428 - nodes in this community are weakly interconnected._
- **Should `growth-audit-form.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.05725490196078432 - nodes in this community are weakly interconnected._
- **Should `review/route.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.1164021164021164 - nodes in this community are weakly interconnected._