# Graph Report - MARKETIX WEBSITE  (2026-09-27)

## Corpus Check
- 161 files · ~122,169 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 5 file(s) not represented in the graph (top: (none) 2, .example 1, .ico 1)

## Summary
- 951 nodes · 2432 edges · 41 communities (37 shown, 4 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 35 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `3bf84620`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- ElectricLogo.tsx
- accent-switcher.tsx
- gbp.ts
- graph
- pricing/page.tsx
- review/route.ts
- gmb-toolkit/page.tsx
- team/page.tsx
- components.json
- package.json
- compilerOptions
- nav.tsx
- footer.tsx
- design.md (locked design system)
- content-types.ts
- CLAUDE.md (project instructions)
- README.md
- emails.ts
- growth-audit-form.tsx
- LogoLoop.tsx
- electric-monogram.tsx
- Positioning guardrail (Marketix vs Vistrow)
- Macrostructure family
- PROJECT_CONTEXT.md
- react
- primitives.tsx
- app/not-found.tsx
- structured-data.ts
- contact/page.tsx
- Accent violet #C82AEF
- vercel.json
- ref_node_fs
- next.config.mjs
- locations/page.tsx
- shadcn
- postcss.config.mjs
- Overnight redesign plan (started 2026-09-24)
- (site)/page.tsx
- chat-widget.tsx
- json-ld.tsx
- next

## God Nodes (most connected - your core abstractions)
1. `next` - 70 edges
2. `lucide-react` - 63 edges
3. `graph()` - 57 edges
4. `breadcrumbSchema()` - 54 edges
5. `buildMetadata()` - 42 edges
6. `faqSchema()` - 40 edges
7. `react` - 35 edges
8. `answerSchema()` - 32 edges
9. `JsonLd()` - 29 edges
10. `TextLink()` - 27 edges

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

## Communities (41 total, 4 thin omitted)

### Community 0 - "ElectricLogo.tsx"
Cohesion: 0.15
Nodes (19): blurGrid(), blurLine(), ElectricLogo(), ElectricLogoProps, Focus, hexToRgb(), Point, Pulse (+11 more)

### Community 1 - "accent-switcher.tsx"
Cohesion: 0.07
Nodes (38): HeroThreads(), toHex(), ctxMap, FAN_MODE, FanMode, hexToRgb(), WebThreads(), WebThreadsCtx (+30 more)

### Community 2 - "gbp.ts"
Cohesion: 0.11
Nodes (23): esc(), GET(), page(), runtime, GET(), runtime, GET(), runtime (+15 more)

### Community 3 - "graph"
Cohesion: 0.20
Nodes (30): Page(), Page(), Page(), Page(), Page(), Page(), Page(), Page() (+22 more)

### Community 4 - "pricing/page.tsx"
Cohesion: 0.18
Nodes (12): groups, metadata, answer, drivers, faqs, metadata, QA, ScopeBuilder() (+4 more)

### Community 5 - "review/route.ts"
Cohesion: 0.08
Nodes (38): POST(), runtime, hits, pickStyle(), POST(), rateLimited(), recentReviews, remember() (+30 more)

### Community 6 - "gmb-toolkit/page.tsx"
Cohesion: 0.19
Nodes (11): agreed, answer, metadata, principles, steps, countOf(), metadata, Page() (+3 more)

### Community 7 - "team/page.tsx"
Cohesion: 0.14
Nodes (16): chromaItems, initials(), initialsImage(), metadata, Page(), shades, ChromaGrid(), ChromaGridProps (+8 more)

### Community 8 - "components.json"
Cohesion: 0.11
Nodes (18): aliases, components, hooks, lib, ui, utils, registries, @react-bits (+10 more)

### Community 9 - "package.json"
Cohesion: 0.05
Nodes (40): dependencies, @anthropic-ai/sdk, cobe, framer-motion, gsap, lucide-react, motion, next (+32 more)

### Community 10 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 11 - "nav.tsx"
Cohesion: 0.18
Nodes (10): LOGO, LOGO_LIGHT, Wordmark(), aboutLinks, aboutMatch, industriesNav, PanelId, plainLinks (+2 more)

### Community 12 - "footer.tsx"
Cohesion: 0.15
Nodes (12): columns, group(), icons, SiteFooter(), NewsletterForm(), Status, footerNav, NavChild (+4 more)

### Community 13 - "design.md (locked design system)"
Cohesion: 0.13
Nodes (17): design.md (locked design system), Atmospheric genre, CTA voice (dark pill + accent ring + arrow circle), Hallmark gate 22, Honest content rule (overrides every skill), Live-site elements not to carry over, No gradient text / accent on one word, Plus Jakarta Sans only typography (+9 more)

### Community 14 - "content-types.ts"
Cohesion: 0.05
Nodes (41): runtime, generateMetadata(), SummaryGroup, CtaBand(), Faq(), Feature, FeatureCards(), LinkCardGrid() (+33 more)

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
Nodes (39): ContactForm(), Errors, nextSteps, services, Status, Field(), Input(), Select() (+31 more)

### Community 19 - "LogoLoop.tsx"
Cohesion: 0.23
Nodes (11): ClientLogoLoop(), Logo, ANIMATION_CONFIG, cx(), LogoItem, LogoLoop, LogoLoopProps, toCssLength() (+3 more)

### Community 20 - "electric-monogram.tsx"
Cohesion: 0.38
Nodes (5): NotFound(), routes, currentAccent(), ELECTRIC, ElectricMonogram()

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

### Community 25 - "primitives.tsx"
Cohesion: 0.13
Nodes (32): answer, goals, metadata, answer, audiences, faqs, hero, metadata (+24 more)

### Community 26 - "app/not-found.tsx"
Cohesion: 0.21
Nodes (8): metadata, CardSpotlight(), SiteNav(), topics, waLink(), WhatsAppFloat(), onSubmit(), Phase 1: Chrome and routing

### Community 27 - "structured-data.ts"
Cohesion: 0.09
Nodes (26): answer, faqs, metadata, values, metadata, Page(), generateMetadata(), isTodo() (+18 more)

### Community 28 - "contact/page.tsx"
Cohesion: 0.24
Nodes (7): faqs, metadata, routes, whatsappText, assistant, business, fullAddress

### Community 29 - "Accent violet #C82AEF"
Cohesion: 0.33
Nodes (6): Card surface (radial gradient, 24px radius), Accent violet #C82AEF, Static violet light pool + grain, Neon ring (hover/focus only), Aurora hero removed (static light pool), Rejected: gold/yellow structural accent

### Community 30 - "vercel.json"
Cohesion: 0.40
Nodes (4): buildCommand, framework, installCommand, $schema

### Community 33 - "locations/page.tsx"
Cohesion: 0.05
Nodes (46): GET(), line(), revalidate, answer, metadata, zones, dynamicParams, generateMetadata() (+38 more)

### Community 36 - "Overnight redesign plan (started 2026-09-24)"
Cohesion: 0.25
Nodes (7): Log, Morning summary (2026-09-24, ~07:00), Overnight redesign plan (started 2026-09-24), Phase 2: Pages (redesign each in the new system), Phase 3: Site-wide verification, Progress, The creative bar

### Community 37 - "(site)/page.tsx"
Cohesion: 0.22
Nodes (8): answer, faqs, groupIcons, industryIcons, industryMeasures, metadata, serviceBlurbs, serviceIcons

### Community 39 - "chat-widget.tsx"
Cohesion: 0.18
Nodes (10): ChatMessage, ChatWidget(), onSubmit(), send(), fallback, greeting, LinkAction, Prompt (+2 more)

### Community 42 - "json-ld.tsx"
Cohesion: 0.20
Nodes (10): include, metadata, checks, faqs, metadata, steps, metadata, who (+2 more)

### Community 46 - "next"
Cohesion: 0.06
Nodes (39): app_globals, jakarta, metadata, RootLayout(), viewport, generateMetadata(), Page(), revalidate (+31 more)

## Knowledge Gaps
- **315 isolated node(s):** `npx`, `metadata`, `answer`, `values`, `faqs` (+310 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 382 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `next` to `gbp.ts`, `graph`, `pricing/page.tsx`, `review/route.ts`, `gmb-toolkit/page.tsx`, `team/page.tsx`, `package.json`, `nav.tsx`, `footer.tsx`, `content-types.ts`, `emails.ts`, `growth-audit-form.tsx`, `LogoLoop.tsx`, `electric-monogram.tsx`, `react`, `primitives.tsx`, `app/not-found.tsx`, `structured-data.ts`, `contact/page.tsx`, `locations/page.tsx`, `(site)/page.tsx`, `chat-widget.tsx`, `json-ld.tsx`?**
  _High betweenness centrality (0.229) - this node is a cross-community bridge._
- **Why does `Multi-tenant review tool /r/[client]` connect `README.md` to `review/route.ts`, `Macrostructure family`, `PROJECT_CONTEXT.md`?**
  _High betweenness centrality (0.151) - this node is a cross-community bridge._
- **Why does `lucide-react` connect `content-types.ts` to `accent-switcher.tsx`, `gbp.ts`, `pricing/page.tsx`, `review/route.ts`, `gmb-toolkit/page.tsx`, `package.json`, `nav.tsx`, `footer.tsx`, `growth-audit-form.tsx`, `electric-monogram.tsx`, `react`, `primitives.tsx`, `app/not-found.tsx`, `structured-data.ts`, `contact/page.tsx`, `locations/page.tsx`, `(site)/page.tsx`, `chat-widget.tsx`, `json-ld.tsx`, `next`?**
  _High betweenness centrality (0.124) - this node is a cross-community bridge._
- **What connects `npx`, `metadata`, `answer` to the rest of the system?**
  _315 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `ElectricLogo.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.14736842105263157 - nodes in this community are weakly interconnected._
- **Should `accent-switcher.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.07246376811594203 - nodes in this community are weakly interconnected._
- **Should `gbp.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.10588235294117647 - nodes in this community are weakly interconnected._