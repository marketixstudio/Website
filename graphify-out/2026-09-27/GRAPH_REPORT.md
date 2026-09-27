# Graph Report - MARKETIX WEBSITE  (2026-09-26)

## Corpus Check
- 149 files · ~115,474 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 5 file(s) not represented in the graph (top: (none) 2, .example 1, .ico 1)

## Summary
- 881 nodes · 2280 edges · 39 communities (35 shown, 4 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 34 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `3b99b206`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- ElectricLogo.tsx
- accent-switcher.tsx
- framer-motion
- contact-form.tsx
- blog/page.tsx
- review-clients.ts
- growth-audit-form.tsx
- team/page.tsx
- components.json
- package.json
- compilerOptions
- contact/page.tsx
- market-visuals.tsx
- design.md (locked design system)
- content-types.ts
- CLAUDE.md (project instructions)
- README.md
- emails.ts
- trackLead
- chat-knowledge.ts
- work/[slug]/page.tsx
- Positioning guardrail (Marketix vs Vistrow)
- Macrostructure family
- PROJECT_CONTEXT.md
- react
- (site)/page.tsx
- Accent violet #C82AEF
- vercel.json
- ref_node_fs
- next.config.mjs
- shadcn
- postcss.config.mjs
- blog-index.tsx
- sitemap.ts
- service-finder.tsx
- locations.ts
- structured-data.ts
- next
- Overnight redesign plan (started 2026-09-24)

## God Nodes (most connected - your core abstractions)
1. `next` - 69 edges
2. `lucide-react` - 62 edges
3. `graph()` - 57 edges
4. `breadcrumbSchema()` - 54 edges
5. `buildMetadata()` - 42 edges
6. `faqSchema()` - 40 edges
7. `answerSchema()` - 32 edges
8. `react` - 31 edges
9. `JsonLd()` - 29 edges
10. `TextLink()` - 27 edges

## Surprising Connections (you probably didn't know these)
- `Phase 2: Pages (redesign each in the new system)` --references--> `ServiceHero()`  [INFERRED]
  docs/REDESIGN_PLAN.md → components/v2/service-hero.tsx
- `Phase 1: Chrome and routing` --references--> `serviceHref()`  [INFERRED]
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

## Communities (39 total, 4 thin omitted)

### Community 0 - "ElectricLogo.tsx"
Cohesion: 0.15
Nodes (19): blurGrid(), blurLine(), ElectricLogo(), ElectricLogoProps, Focus, hexToRgb(), Point, Pulse (+11 more)

### Community 1 - "accent-switcher.tsx"
Cohesion: 0.07
Nodes (38): HeroThreads(), toHex(), ctxMap, FAN_MODE, FanMode, hexToRgb(), WebThreads(), WebThreadsCtx (+30 more)

### Community 2 - "framer-motion"
Cohesion: 0.20
Nodes (8): Funnel(), Step, loops, queries, SearchJourney(), Stage, stages, framer-motion

### Community 3 - "contact-form.tsx"
Cohesion: 0.25
Nodes (6): Errors, nextSteps, services, Status, confettiDots, SuccessCelebration()

### Community 4 - "blog/page.tsx"
Cohesion: 0.20
Nodes (13): generateMetadata(), Page(), revalidate, generateMetadata(), generateStaticParams(), Page(), revalidate, sitemap() (+5 more)

### Community 5 - "review-clients.ts"
Cohesion: 0.18
Nodes (6): ReviewGenerator(), Status, reviewClientList, reviewClients, reviewClientSlugs, ReviewClient

### Community 6 - "growth-audit-form.tsx"
Cohesion: 0.21
Nodes (9): Field(), Input(), Select(), Textarea(), auditSteps, budgets, channelOptions, industries (+1 more)

### Community 7 - "team/page.tsx"
Cohesion: 0.25
Nodes (9): initials(), metadata, Page(), Portrait(), TODO: photo not found on the live site under the expected filename - send it…, team, teamBySlug, TeamMember (+1 more)

### Community 8 - "components.json"
Cohesion: 0.11
Nodes (18): aliases, components, hooks, lib, ui, utils, registries, @react-bits (+10 more)

### Community 9 - "package.json"
Cohesion: 0.05
Nodes (41): dependencies, @anthropic-ai/sdk, cobe, framer-motion, gsap, lucide-react, motion, next (+33 more)

### Community 10 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 11 - "contact/page.tsx"
Cohesion: 0.05
Nodes (45): metadata, faqs, metadata, routes, whatsappText, NotFound(), routes, LOGO (+37 more)

### Community 12 - "market-visuals.tsx"
Cohesion: 0.39
Nodes (7): EASE, fmt(), HoursOverlap(), MarketBoard(), overlap(), Span, wrap()

### Community 13 - "design.md (locked design system)"
Cohesion: 0.13
Nodes (17): design.md (locked design system), Atmospheric genre, CTA voice (dark pill + accent ring + arrow circle), Hallmark gate 22, Honest content rule (overrides every skill), Live-site elements not to carry over, No gradient text / accent on one word, Plus Jakarta Sans only typography (+9 more)

### Community 14 - "content-types.ts"
Cohesion: 0.05
Nodes (39): runtime, metadata, SummaryGroup, CtaBand(), Faq(), Feature, FeatureCards(), LinkCardGrid() (+31 more)

### Community 15 - "CLAUDE.md (project instructions)"
Cohesion: 0.14
Nodes (15): .claude/CLAUDE.md (graphify skill pointer), graphify skill (/graphify trigger), CLAUDE.md (project instructions), graphify query/path/explain usage rules, grep aliased to ugrep gotcha, marketix-dev launch config (port 3000), npm run build while dev corrupts .next, No hand-drawn browser/phone/dashboard chrome (+7 more)

### Community 16 - "README.md"
Cohesion: 0.15
Nodes (14): Content in code, no CMS, lib/blog.ts async blog API, Multi-tenant review tool /r/[client], WordPress 301 redirects (next.config.mjs), Claude API client review generator (app/api/review), content/ typed TS content directory, Framer Motion, lucide-react icons (+6 more)

### Community 17 - "emails.ts"
Cohesion: 0.07
Nodes (62): clean(), getSystemPrompt(), IncomingMessage, isRateLimited(), POST(), replySchema, requestLog, runtime (+54 more)

### Community 18 - "trackLead"
Cohesion: 0.29
Nodes (6): ContactForm(), GrowthAuditForm(), GtagCommand, LeadSource, trackLead(), Window

### Community 19 - "chat-knowledge.ts"
Cohesion: 0.19
Nodes (12): GET(), line(), revalidate, locationList, PuneArea, puneAreas, s, serviceList (+4 more)

### Community 20 - "work/[slug]/page.tsx"
Cohesion: 0.14
Nodes (13): generateMetadata(), isTodo(), livePreview, Page(), caseStudies, caseStudyIndustries, caseStudyList, caseStudySlugs (+5 more)

### Community 21 - "Positioning guardrail (Marketix vs Vistrow)"
Cohesion: 0.22
Nodes (11): Must not look or read like Vistrow rule, Positioning guardrail (Marketix vs Vistrow), Keyword territory split with Vistrow, Marketix Studio, NAP (Balewadi High Street, Pune), Rejected: copying Vistrow sections/chrome, Rebuild goal: SEO + AEO + GEO, not AI-looking, Marketix team (+3 more)

### Community 22 - "Macrostructure family"
Cohesion: 0.20
Nodes (11): Ft5 Statement footer, Long Document macrostructure (blog, legal), Macrostructure family, Map / Diagram macrostructure (google-ads-ppc), N5 Floating pill nav, Quote-Led macrostructure (local-seo-gmb), Split Studio macrostructure, Jay Ganesh Car Accessories (Maruti Kalbhor) (+3 more)

### Community 23 - "PROJECT_CONTEXT.md"
Cohesion: 0.31
Nodes (9): Hallmark slop test before shipping UI, Never fabricate metrics/testimonials/clients rule, Design system locked decision, Rejected: Editorial ledger (Specimen fall-through), Google Maps Ranking Toolkit, Hallmark skill (Nutlope), Hallmark audit 2026-09-23 (9 critical, 8 major, 7 minor), Site map (59 routes, 79 static pages) (+1 more)

### Community 24 - "react"
Cohesion: 0.18
Nodes (7): ReadingProgress(), ShareRow(), ExplorerItem, IndustryExplorer(), Magnet(), MagnetProps, react

### Community 27 - "(site)/page.tsx"
Cohesion: 0.07
Nodes (33): answer, faqs, groupIcons, industryIcons, industryMeasures, metadata, serviceBlurbs, serviceIcons (+25 more)

### Community 29 - "Accent violet #C82AEF"
Cohesion: 0.33
Nodes (6): Card surface (radial gradient, 24px radius), Accent violet #C82AEF, Static violet light pool + grain, Neon ring (hover/focus only), Aurora hero removed (static light pool), Rejected: gold/yellow structural accent

### Community 30 - "vercel.json"
Cohesion: 0.40
Nodes (4): buildCommand, framework, installCommand, $schema

### Community 37 - "blog-index.tsx"
Cohesion: 0.67
Nodes (3): BlogIndex(), Card, formatDate()

### Community 38 - "sitemap.ts"
Cohesion: 0.22
Nodes (8): Entry, industries, industriesOverview, industryList, industrySlugs, serviceSlugs, IndustryContent, ServiceContent

### Community 39 - "service-finder.tsx"
Cohesion: 0.40
Nodes (5): FinderCard, GoalId, goals, ServiceFinder(), slugOf()

### Community 40 - "locations.ts"
Cohesion: 0.20
Nodes (9): globalLocations, globalProcess, globalServices, indiaLocations, indiaProcess, indiaServices, locationSlugs, locationsOverview (+1 more)

### Community 43 - "structured-data.ts"
Cohesion: 0.05
Nodes (115): answer, faqs, metadata, Page(), values, agreed, answer, metadata (+107 more)

### Community 46 - "next"
Cohesion: 0.05
Nodes (38): app_globals, jakarta, metadata, RootLayout(), viewport, metadata, metadata, generateMetadata() (+30 more)

### Community 49 - "Overnight redesign plan (started 2026-09-24)"
Cohesion: 0.25
Nodes (7): Log, Morning summary (2026-09-24, ~07:00), Overnight redesign plan (started 2026-09-24), Phase 2: Pages (redesign each in the new system), Phase 3: Site-wide verification, Progress, The creative bar

## Knowledge Gaps
- **296 isolated node(s):** `npx`, `metadata`, `answer`, `values`, `faqs` (+291 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 357 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `next` to `framer-motion`, `blog/page.tsx`, `review-clients.ts`, `sitemap.ts`, `team/page.tsx`, `blog-index.tsx`, `service-finder.tsx`, `package.json`, `contact/page.tsx`, `structured-data.ts`, `market-visuals.tsx`, `content-types.ts`, `emails.ts`, `work/[slug]/page.tsx`, `react`, `(site)/page.tsx`?**
  _High betweenness centrality (0.204) - this node is a cross-community bridge._
- **Why does `Multi-tenant review tool /r/[client]` connect `README.md` to `review-clients.ts`, `Macrostructure family`, `PROJECT_CONTEXT.md`?**
  _High betweenness centrality (0.161) - this node is a cross-community bridge._
- **Why does `lucide-react` connect `content-types.ts` to `accent-switcher.tsx`, `framer-motion`, `contact-form.tsx`, `blog/page.tsx`, `blog-index.tsx`, `growth-audit-form.tsx`, `team/page.tsx`, `service-finder.tsx`, `review-clients.ts`, `sitemap.ts`, `contact/page.tsx`, `structured-data.ts`, `locations.ts`, `next`, `package.json`, `work/[slug]/page.tsx`, `react`, `(site)/page.tsx`?**
  _High betweenness centrality (0.131) - this node is a cross-community bridge._
- **What connects `npx`, `metadata`, `answer` to the rest of the system?**
  _296 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `ElectricLogo.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.14736842105263157 - nodes in this community are weakly interconnected._
- **Should `accent-switcher.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.07246376811594203 - nodes in this community are weakly interconnected._
- **Should `components.json` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._