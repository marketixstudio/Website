# Graph Report - MARKETIX WEBSITE  (2026-09-24)

## Corpus Check
- 127 files · ~85,180 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 4 file(s) not represented in the graph (top: (none) 2, .example 1, .css 1)

## Summary
- 713 nodes · 1832 edges · 32 communities (29 shown, 3 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 34 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- next
- graph
- reveal.tsx
- growth-audit-form.tsx
- structured-data.ts
- review-clients.ts
- (site)/page.tsx
- industries/page.tsx
- components.json
- package.json
- compilerOptions
- seo.ts
- content-types.ts
- design.md (locked design system)
- lucide-react
- CLAUDE.md (project instructions)
- README.md
- inquiries/route.ts
- buy-button.tsx
- about/page.tsx
- tools/[slug]/page.tsx
- Positioning guardrail (Marketix vs Vistrow)
- Macrostructure family
- PROJECT_CONTEXT.md
- blog-post-page.tsx
- locations/page.tsx
- service-finder.tsx
- Accent violet #C82AEF
- vercel.json
- next.config.mjs
- shadcn
- postcss.config.mjs

## God Nodes (most connected - your core abstractions)
1. `next` - 64 edges
2. `lucide-react` - 58 edges
3. `graph()` - 55 edges
4. `breadcrumbSchema()` - 52 edges
5. `buildMetadata()` - 40 edges
6. `faqSchema()` - 36 edges
7. `answerSchema()` - 30 edges
8. `JsonLd()` - 28 edges
9. `TextLink()` - 25 edges
10. `Cta()` - 24 edges

## Surprising Connections (you probably didn't know these)
- `Phase 2: Pages (redesign each in the new system)` --references--> `ServiceHero()`  [INFERRED]
  docs/REDESIGN_PLAN.md → components/v2/service-hero.tsx
- `Phase 1: Chrome and routing` --references--> `serviceHref()`  [INFERRED]
  docs/REDESIGN_PLAN.md → components/v2/primitives.tsx
- `Non-negotiable rules` --references--> `TextLink()`  [INFERRED]
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

## Communities (32 total, 3 thin omitted)

### Community 0 - "next"
Cohesion: 0.06
Nodes (34): metadata, NotFound(), routes, LOGO, Wordmark(), columns, group(), icons (+26 more)

### Community 1 - "graph"
Cohesion: 0.08
Nodes (61): Page(), Page(), Page(), Page(), Page(), countOf(), metadata, Page() (+53 more)

### Community 2 - "reveal.tsx"
Cohesion: 0.24
Nodes (4): SummaryGroup, Reveal(), RevealProps, SectionHeading()

### Community 3 - "growth-audit-form.tsx"
Cohesion: 0.08
Nodes (29): ContactForm(), Errors, nextSteps, services, Status, Field(), Input(), Select() (+21 more)

### Community 4 - "structured-data.ts"
Cohesion: 0.08
Nodes (25): app_globals, jakarta, metadata, RootLayout(), viewport, initials(), metadata, Page() (+17 more)

### Community 5 - "review-clients.ts"
Cohesion: 0.13
Nodes (11): hits, POST(), rateLimited(), runtime, ReviewGenerator(), Status, reviewClientList, reviewClients (+3 more)

### Community 6 - "(site)/page.tsx"
Cohesion: 0.06
Nodes (34): answer, faqs, groupIcons, industryIcons, industryMeasures, metadata, serviceBlurbs, serviceIcons (+26 more)

### Community 7 - "industries/page.tsx"
Cohesion: 0.06
Nodes (34): GET(), line(), revalidate, Page(), generateMetadata(), generateStaticParams(), Page(), revalidate (+26 more)

### Community 8 - "components.json"
Cohesion: 0.11
Nodes (18): aliases, components, hooks, lib, ui, utils, registries, @react-bits (+10 more)

### Community 9 - "package.json"
Cohesion: 0.05
Nodes (38): dependencies, @anthropic-ai/sdk, framer-motion, gsap, lucide-react, motion, next, react (+30 more)

### Community 10 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 11 - "seo.ts"
Cohesion: 0.13
Nodes (15): metadata, metadata, metadata, metadata, metadata, formatDate(), LegalPage(), slugify() (+7 more)

### Community 12 - "content-types.ts"
Cohesion: 0.14
Nodes (13): Feature, Outcome, Step, toolList, tools, toolSlugs, BlogSection, CaseStudy (+5 more)

### Community 13 - "design.md (locked design system)"
Cohesion: 0.13
Nodes (17): design.md (locked design system), Atmospheric genre, CTA voice (dark pill + accent ring + arrow circle), Hallmark gate 22, Honest content rule (overrides every skill), Live-site elements not to carry over, No gradient text / accent on one word, Plus Jakarta Sans only typography (+9 more)

### Community 14 - "lucide-react"
Cohesion: 0.19
Nodes (10): metadata, CtaBand(), Faq(), LinkCardGrid(), CtaLink, PageHero(), Breadcrumb(), Crumb (+2 more)

### Community 15 - "CLAUDE.md (project instructions)"
Cohesion: 0.14
Nodes (15): .claude/CLAUDE.md (graphify skill pointer), graphify skill (/graphify trigger), CLAUDE.md (project instructions), graphify query/path/explain usage rules, grep aliased to ugrep gotcha, marketix-dev launch config (port 3000), npm run build while dev corrupts .next, No hand-drawn browser/phone/dashboard chrome (+7 more)

### Community 16 - "README.md"
Cohesion: 0.15
Nodes (14): Content in code, no CMS, lib/blog.ts async blog API, Multi-tenant review tool /r/[client], WordPress 301 redirects (next.config.mjs), Claude API client review generator (app/api/review), content/ typed TS content directory, Framer Motion, lucide-react icons (+6 more)

### Community 17 - "inquiries/route.ts"
Cohesion: 0.27
Nodes (12): clean(), cleanList(), escapeHtml(), Inquiry, isRateLimited(), POST(), renderConfirmationEmail(), renderInternalEmail() (+4 more)

### Community 18 - "buy-button.tsx"
Cohesion: 0.40
Nodes (3): BuyButton(), Props, Window

### Community 19 - "about/page.tsx"
Cohesion: 0.07
Nodes (48): runtime, answer, faqs, metadata, values, agreed, answer, metadata (+40 more)

### Community 20 - "tools/[slug]/page.tsx"
Cohesion: 0.17
Nodes (9): generateMetadata(), FeatureCards(), Steps(), AdBudgetCalculator(), RoasCalculator(), slug(), SOURCE_PRESETS, UtmBuilder() (+1 more)

### Community 21 - "Positioning guardrail (Marketix vs Vistrow)"
Cohesion: 0.22
Nodes (11): Must not look or read like Vistrow rule, Positioning guardrail (Marketix vs Vistrow), Keyword territory split with Vistrow, Marketix Studio, NAP (Balewadi High Street, Pune), Rejected: copying Vistrow sections/chrome, Rebuild goal: SEO + AEO + GEO, not AI-looking, Marketix team (+3 more)

### Community 22 - "Macrostructure family"
Cohesion: 0.20
Nodes (11): Ft5 Statement footer, Long Document macrostructure (blog, legal), Macrostructure family, Map / Diagram macrostructure (google-ads-ppc), N5 Floating pill nav, Quote-Led macrostructure (local-seo-gmb), Split Studio macrostructure, Jay Ganesh Car Accessories (Maruti Kalbhor) (+3 more)

### Community 23 - "PROJECT_CONTEXT.md"
Cohesion: 0.31
Nodes (9): Hallmark slop test before shipping UI, Never fabricate metrics/testimonials/clients rule, Design system locked decision, Rejected: Editorial ledger (Specimen fall-through), Google Maps Ranking Toolkit, Hallmark skill (Nutlope), Hallmark audit 2026-09-23 (9 critical, 8 major, 7 minor), Site map (59 routes, 79 static pages) (+1 more)

### Community 24 - "blog-post-page.tsx"
Cohesion: 0.23
Nodes (10): BlogExplorer(), ExplorerPost, HeadingLink, ReadingProgress(), ShareRow(), BlogPostPage(), headingId(), renderInlineLinks() (+2 more)

### Community 25 - "locations/page.tsx"
Cohesion: 0.11
Nodes (21): answer, metadata, zones, generateMetadata(), AreaMap(), EASE, fmt(), HoursOverlap() (+13 more)

### Community 28 - "service-finder.tsx"
Cohesion: 0.40
Nodes (5): FinderCard, GoalId, goals, ServiceFinder(), slugOf()

### Community 29 - "Accent violet #C82AEF"
Cohesion: 0.33
Nodes (6): Card surface (radial gradient, 24px radius), Accent violet #C82AEF, Static violet light pool + grain, Neon ring (hover/focus only), Aurora hero removed (static light pool), Rejected: gold/yellow structural accent

### Community 30 - "vercel.json"
Cohesion: 0.40
Nodes (4): buildCommand, framework, installCommand, $schema

## Knowledge Gaps
- **250 isolated node(s):** `npx`, `metadata`, `answer`, `values`, `faqs` (+245 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 307 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Multi-tenant review tool /r/[client]` connect `README.md` to `review-clients.ts`, `Macrostructure family`, `PROJECT_CONTEXT.md`?**
  _High betweenness centrality (0.191) - this node is a cross-community bridge._
- **Why does `next` connect `next` to `graph`, `reveal.tsx`, `growth-audit-form.tsx`, `structured-data.ts`, `review-clients.ts`, `(site)/page.tsx`, `industries/page.tsx`, `package.json`, `seo.ts`, `content-types.ts`, `lucide-react`, `inquiries/route.ts`, `buy-button.tsx`, `about/page.tsx`, `tools/[slug]/page.tsx`, `blog-post-page.tsx`, `locations/page.tsx`, `service-finder.tsx`?**
  _High betweenness centrality (0.189) - this node is a cross-community bridge._
- **Why does `lucide-react` connect `lucide-react` to `next`, `graph`, `reveal.tsx`, `growth-audit-form.tsx`, `structured-data.ts`, `review-clients.ts`, `(site)/page.tsx`, `industries/page.tsx`, `package.json`, `content-types.ts`, `buy-button.tsx`, `about/page.tsx`, `tools/[slug]/page.tsx`, `blog-post-page.tsx`, `locations/page.tsx`, `service-finder.tsx`?**
  _High betweenness centrality (0.140) - this node is a cross-community bridge._
- **What connects `npx`, `metadata`, `answer` to the rest of the system?**
  _250 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `next` be split into smaller, more focused modules?**
  _Cohesion score 0.06183574879227053 - nodes in this community are weakly interconnected._
- **Should `graph` be split into smaller, more focused modules?**
  _Cohesion score 0.0821917808219178 - nodes in this community are weakly interconnected._
- **Should `growth-audit-form.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.07557354925775979 - nodes in this community are weakly interconnected._