# Graph Report - MARKETIX WEBSITE  (2026-09-27)

## Corpus Check
- 150 files · ~116,237 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 5 file(s) not represented in the graph (top: (none) 2, .example 1, .ico 1)

## Summary
- 888 nodes · 2289 edges · 49 communities (45 shown, 4 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 34 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `dae75890`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- ElectricLogo.tsx
- app/layout.tsx
- framer-motion
- contact-form.tsx
- blog/page.tsx
- review-clients.ts
- growth-audit-form.tsx
- team/page.tsx
- components.json
- package.json
- compilerOptions
- footer.tsx
- market-visuals.tsx
- design.md (locked design system)
- content-types.ts
- CLAUDE.md (project instructions)
- README.md
- emails.ts
- analytics.ts
- chat-knowledge.ts
- structured-data.ts
- Positioning guardrail (Marketix vs Vistrow)
- Macrostructure family
- PROJECT_CONTEXT.md
- react
- location-detail.tsx
- lucide-react
- (site)/page.tsx
- gmb-toolkit/page.tsx
- Accent violet #C82AEF
- vercel.json
- ref_node_fs
- next.config.mjs
- buildMetadata
- shadcn
- postcss.config.mjs
- app/not-found.tsx
- nav.tsx
- industries/page.tsx
- chat-widget.tsx
- locations.ts
- trackLead
- seo.ts
- graph
- [area]/page.tsx
- nav.ts
- next
- (site)/not-found.tsx
- Overnight redesign plan (started 2026-09-24)

## God Nodes (most connected - your core abstractions)
1. `next` - 69 edges
2. `lucide-react` - 61 edges
3. `graph()` - 57 edges
4. `breadcrumbSchema()` - 54 edges
5. `buildMetadata()` - 42 edges
6. `faqSchema()` - 40 edges
7. `answerSchema()` - 32 edges
8. `react` - 32 edges
9. `JsonLd()` - 29 edges
10. `TextLink()` - 27 edges

## Surprising Connections (you probably didn't know these)
- `Phase 2: Pages (redesign each in the new system)` --references--> `ServiceHero()`  [INFERRED]
  docs/REDESIGN_PLAN.md → components/v2/service-hero.tsx
- `Phase 1: Chrome and routing` --references--> `SiteFooter()`  [INFERRED]
  docs/REDESIGN_PLAN.md → components/v2/footer.tsx
- `Phase 1: Chrome and routing` --references--> `SiteNav()`  [INFERRED]
  docs/REDESIGN_PLAN.md → components/v2/nav.tsx
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

## Communities (49 total, 4 thin omitted)

### Community 0 - "ElectricLogo.tsx"
Cohesion: 0.15
Nodes (19): blurGrid(), blurLine(), ElectricLogo(), ElectricLogoProps, Focus, hexToRgb(), Point, Pulse (+11 more)

### Community 1 - "app/layout.tsx"
Cohesion: 0.06
Nodes (46): app_globals, jakarta, metadata, RootLayout(), viewport, GoogleAnalytics(), HeroThreads(), toHex() (+38 more)

### Community 2 - "framer-motion"
Cohesion: 0.20
Nodes (8): Funnel(), Step, loops, queries, SearchJourney(), Stage, stages, framer-motion

### Community 3 - "contact-form.tsx"
Cohesion: 0.25
Nodes (8): Errors, nextSteps, services, Status, Field(), Input(), Select(), Textarea()

### Community 4 - "blog/page.tsx"
Cohesion: 0.22
Nodes (12): generateMetadata(), Page(), revalidate, generateMetadata(), generateStaticParams(), Page(), revalidate, archivedVistrowPosts (+4 more)

### Community 5 - "review-clients.ts"
Cohesion: 0.18
Nodes (6): ReviewGenerator(), Status, reviewClientList, reviewClients, reviewClientSlugs, ReviewClient

### Community 6 - "growth-audit-form.tsx"
Cohesion: 0.20
Nodes (7): auditSteps, budgets, channelOptions, industries, serviceOptions, confettiDots, SuccessCelebration()

### Community 7 - "team/page.tsx"
Cohesion: 0.15
Nodes (15): chromaItems, initials(), initialsImage(), metadata, Page(), shades, ChromaGrid(), ChromaGridProps (+7 more)

### Community 8 - "components.json"
Cohesion: 0.11
Nodes (18): aliases, components, hooks, lib, ui, utils, registries, @react-bits (+10 more)

### Community 9 - "package.json"
Cohesion: 0.05
Nodes (41): dependencies, @anthropic-ai/sdk, cobe, framer-motion, gsap, lucide-react, motion, next (+33 more)

### Community 10 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 11 - "footer.tsx"
Cohesion: 0.17
Nodes (10): LOGO, LOGO_LIGHT, Wordmark(), columns, group(), icons, SiteFooter(), NewsletterForm() (+2 more)

### Community 12 - "market-visuals.tsx"
Cohesion: 0.39
Nodes (7): EASE, fmt(), HoursOverlap(), MarketBoard(), overlap(), Span, wrap()

### Community 13 - "design.md (locked design system)"
Cohesion: 0.13
Nodes (17): design.md (locked design system), Atmospheric genre, CTA voice (dark pill + accent ring + arrow circle), Hallmark gate 22, Honest content rule (overrides every skill), Live-site elements not to carry over, No gradient text / accent on one word, Plus Jakarta Sans only typography (+9 more)

### Community 14 - "content-types.ts"
Cohesion: 0.05
Nodes (40): runtime, metadata, generateMetadata(), SummaryGroup, CtaBand(), Faq(), Feature, FeatureCards() (+32 more)

### Community 15 - "CLAUDE.md (project instructions)"
Cohesion: 0.14
Nodes (15): .claude/CLAUDE.md (graphify skill pointer), graphify skill (/graphify trigger), CLAUDE.md (project instructions), graphify query/path/explain usage rules, grep aliased to ugrep gotcha, marketix-dev launch config (port 3000), npm run build while dev corrupts .next, No hand-drawn browser/phone/dashboard chrome (+7 more)

### Community 16 - "README.md"
Cohesion: 0.15
Nodes (14): Content in code, no CMS, lib/blog.ts async blog API, Multi-tenant review tool /r/[client], WordPress 301 redirects (next.config.mjs), Claude API client review generator (app/api/review), content/ typed TS content directory, Framer Motion, lucide-react icons (+6 more)

### Community 17 - "emails.ts"
Cohesion: 0.07
Nodes (62): clean(), getSystemPrompt(), IncomingMessage, isRateLimited(), POST(), replySchema, requestLog, runtime (+54 more)

### Community 18 - "analytics.ts"
Cohesion: 0.50
Nodes (3): GtagCommand, LeadSource, Window

### Community 19 - "chat-knowledge.ts"
Cohesion: 0.22
Nodes (11): GET(), line(), revalidate, industryList, locationList, serviceList, servicesOverview, chatPuneAreas (+3 more)

### Community 20 - "structured-data.ts"
Cohesion: 0.09
Nodes (27): include, metadata, faqs, metadata, routes, whatsappText, checks, faqs (+19 more)

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
Cohesion: 0.08
Nodes (22): BlogIndex(), Card, formatDate(), ReadingProgress(), ShareRow(), ExplorerItem, IndustryExplorer(), FinderCard (+14 more)

### Community 25 - "location-detail.tsx"
Cohesion: 0.14
Nodes (24): answer, audiences, faqs, hero, metadata, hero, metadata, workGroups (+16 more)

### Community 26 - "lucide-react"
Cohesion: 0.14
Nodes (22): answer, faqs, metadata, values, groups, metadata, answer, drivers (+14 more)

### Community 27 - "(site)/page.tsx"
Cohesion: 0.06
Nodes (40): answer, faqs, groupIcons, industryIcons, industryMeasures, metadata, serviceBlurbs, serviceIcons (+32 more)

### Community 28 - "gmb-toolkit/page.tsx"
Cohesion: 0.16
Nodes (13): agreed, answer, metadata, principles, steps, countOf(), metadata, Page() (+5 more)

### Community 29 - "Accent violet #C82AEF"
Cohesion: 0.33
Nodes (6): Card surface (radial gradient, 24px radius), Accent violet #C82AEF, Static violet light pool + grain, Neon ring (hover/focus only), Aurora hero removed (static light pool), Rejected: gold/yellow structural accent

### Community 30 - "vercel.json"
Cohesion: 0.40
Nodes (4): buildCommand, framework, installCommand, $schema

### Community 33 - "buildMetadata"
Cohesion: 0.16
Nodes (6): generateMetadata(), generateMetadata(), CUSTOM_PAGES, generateMetadata(), locations, buildMetadata()

### Community 36 - "app/not-found.tsx"
Cohesion: 0.23
Nodes (7): metadata, CardSpotlight(), SiteNav(), topics, waLink(), WhatsAppFloat(), onSubmit()

### Community 37 - "nav.tsx"
Cohesion: 0.22
Nodes (9): aboutLinks, aboutMatch, industriesNav, PanelId, plainLinks, serviceGroups, servicesNav, serviceHref() (+1 more)

### Community 38 - "industries/page.tsx"
Cohesion: 0.32
Nodes (6): answer, goals, metadata, industries, industriesOverview, IndustryContent

### Community 39 - "chat-widget.tsx"
Cohesion: 0.22
Nodes (8): ChatMessage, fallback, greeting, LinkAction, Prompt, questions, topics, assistant

### Community 40 - "locations.ts"
Cohesion: 0.12
Nodes (15): Entry, sitemap(), industrySlugs, legalSlugs, globalLocations, globalProcess, globalServices, indiaLocations (+7 more)

### Community 41 - "trackLead"
Cohesion: 0.38
Nodes (6): ContactForm(), GrowthAuditForm(), ChatWidget(), onSubmit(), send(), trackLead()

### Community 42 - "seo.ts"
Cohesion: 0.40
Nodes (3): SeoMetadata, siteTagline, siteUrl

### Community 43 - "graph"
Cohesion: 0.19
Nodes (32): Page(), Page(), Page(), Page(), Page(), Page(), Page(), Page() (+24 more)

### Community 44 - "[area]/page.tsx"
Cohesion: 0.33
Nodes (3): dynamicParams, generateMetadata(), puneAreaBySlug

### Community 45 - "nav.ts"
Cohesion: 0.33
Nodes (5): footerNav, NavChild, NavGroup, NavItem, NavLinkRow

### Community 46 - "next"
Cohesion: 0.18
Nodes (11): metadata, metadata, metadata, metadata, metadata, formatDate(), LegalPage(), slugify() (+3 more)

### Community 47 - "(site)/not-found.tsx"
Cohesion: 0.50
Nodes (3): NotFound(), routes, ElectricMonogram()

### Community 49 - "Overnight redesign plan (started 2026-09-24)"
Cohesion: 0.25
Nodes (7): Log, Morning summary (2026-09-24, ~07:00), Overnight redesign plan (started 2026-09-24), Phase 2: Pages (redesign each in the new system), Phase 3: Site-wide verification, Progress, The creative bar

## Knowledge Gaps
- **298 isolated node(s):** `npx`, `metadata`, `answer`, `values`, `faqs` (+293 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 359 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `next` to `app/layout.tsx`, `framer-motion`, `blog/page.tsx`, `review-clients.ts`, `team/page.tsx`, `package.json`, `footer.tsx`, `market-visuals.tsx`, `content-types.ts`, `emails.ts`, `structured-data.ts`, `react`, `location-detail.tsx`, `lucide-react`, `(site)/page.tsx`, `gmb-toolkit/page.tsx`, `buildMetadata`, `app/not-found.tsx`, `nav.tsx`, `industries/page.tsx`, `chat-widget.tsx`, `locations.ts`, `seo.ts`, `graph`, `[area]/page.tsx`, `(site)/not-found.tsx`?**
  _High betweenness centrality (0.205) - this node is a cross-community bridge._
- **Why does `Multi-tenant review tool /r/[client]` connect `README.md` to `review-clients.ts`, `Macrostructure family`, `PROJECT_CONTEXT.md`?**
  _High betweenness centrality (0.160) - this node is a cross-community bridge._
- **Why does `lucide-react` connect `lucide-react` to `app/layout.tsx`, `framer-motion`, `contact-form.tsx`, `blog/page.tsx`, `review-clients.ts`, `growth-audit-form.tsx`, `package.json`, `footer.tsx`, `content-types.ts`, `chat-knowledge.ts`, `structured-data.ts`, `react`, `location-detail.tsx`, `(site)/page.tsx`, `gmb-toolkit/page.tsx`, `app/not-found.tsx`, `nav.tsx`, `industries/page.tsx`, `chat-widget.tsx`, `locations.ts`, `graph`, `(site)/not-found.tsx`?**
  _High betweenness centrality (0.127) - this node is a cross-community bridge._
- **What connects `npx`, `metadata`, `answer` to the rest of the system?**
  _298 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `ElectricLogo.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.14736842105263157 - nodes in this community are weakly interconnected._
- **Should `app/layout.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.05649350649350649 - nodes in this community are weakly interconnected._
- **Should `components.json` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._