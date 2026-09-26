# Graph Report - MARKETIX WEBSITE  (2026-09-26)

## Corpus Check
- 149 files · ~109,431 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 5 file(s) not represented in the graph (top: (none) 2, .example 1, .ico 1)

## Summary
- 858 nodes · 2255 edges · 40 communities (36 shown, 4 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 34 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `cbdbe114`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- chat-knowledge.ts
- app/layout.tsx
- next
- growth-audit-form.tsx
- blog/page.tsx
- review/route.ts
- services/[slug]/page.tsx
- blog-post-page.tsx
- components.json
- package.json
- compilerOptions
- seo.ts
- content-types.ts
- design.md (locked design system)
- zoom-journey.tsx
- CLAUDE.md (project instructions)
- README.md
- emails.ts
- team/page.tsx
- pune-areas.ts
- sitemap.ts
- Positioning guardrail (Marketix vs Vistrow)
- Macrostructure family
- PROJECT_CONTEXT.md
- market-visuals.tsx
- locations.ts
- chat-widget.tsx
- (site)/page.tsx
- Overnight redesign plan (started 2026-09-24)
- Accent violet #C82AEF
- vercel.json
- ref_node_fs
- next.config.mjs
- shadcn
- postcss.config.mjs
- react
- nav.tsx
- app/not-found.tsx
- structured-data.ts
- products-catalog.ts

## God Nodes (most connected - your core abstractions)
1. `next` - 70 edges
2. `lucide-react` - 63 edges
3. `graph()` - 57 edges
4. `breadcrumbSchema()` - 54 edges
5. `buildMetadata()` - 42 edges
6. `faqSchema()` - 40 edges
7. `answerSchema()` - 32 edges
8. `JsonLd()` - 29 edges
9. `react` - 29 edges
10. `TextLink()` - 27 edges

## Surprising Connections (you probably didn't know these)
- `Phase 2: Pages (redesign each in the new system)` --references--> `ServiceHero()`  [INFERRED]
  docs/REDESIGN_PLAN.md → components/v2/service-hero.tsx
- `Phase 1: Chrome and routing` --references--> `SiteFooter()`  [INFERRED]
  docs/REDESIGN_PLAN.md → components/v2/footer.tsx
- `Phase 1: Chrome and routing` --references--> `serviceHref()`  [INFERRED]
  docs/REDESIGN_PLAN.md → components/v2/primitives.tsx
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

## Communities (40 total, 4 thin omitted)

### Community 0 - "chat-knowledge.ts"
Cohesion: 0.20
Nodes (12): GET(), line(), revalidate, industriesOverview, industryList, industrySlugs, locationList, serviceList (+4 more)

### Community 1 - "app/layout.tsx"
Cohesion: 0.09
Nodes (30): app_globals, jakarta, metadata, RootLayout(), viewport, GoogleAnalytics(), WaveField(), AccentSwitcher() (+22 more)

### Community 2 - "next"
Cohesion: 0.05
Nodes (40): metadata, generateMetadata(), BlogIndex(), Card, formatDate(), ExplorerItem, IndustryExplorer(), SummaryGroup (+32 more)

### Community 3 - "growth-audit-form.tsx"
Cohesion: 0.11
Nodes (19): ContactForm(), Errors, nextSteps, services, Status, Field(), Input(), Select() (+11 more)

### Community 4 - "blog/page.tsx"
Cohesion: 0.22
Nodes (12): generateMetadata(), Page(), revalidate, generateMetadata(), generateStaticParams(), Page(), revalidate, archivedVistrowPosts (+4 more)

### Community 5 - "review/route.ts"
Cohesion: 0.12
Nodes (18): hits, POST(), rateLimited(), runtime, ReviewGenerator(), Status, reviewClientList, reviewClients (+10 more)

### Community 6 - "services/[slug]/page.tsx"
Cohesion: 0.33
Nodes (3): CUSTOM_PAGES, generateMetadata(), services

### Community 7 - "blog-post-page.tsx"
Cohesion: 0.36
Nodes (6): ReadingProgress(), ShareRow(), BlogPostPage(), headingId(), renderInlineLinks(), articleSchema()

### Community 8 - "components.json"
Cohesion: 0.11
Nodes (18): aliases, components, hooks, lib, ui, utils, registries, @react-bits (+10 more)

### Community 9 - "package.json"
Cohesion: 0.04
Nodes (42): dependencies, @anthropic-ai/sdk, cobe, framer-motion, gsap, lucide-react, maplibre-gl, motion (+34 more)

### Community 10 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 11 - "seo.ts"
Cohesion: 0.09
Nodes (18): metadata, metadata, generateMetadata(), metadata, metadata, metadata, formatDate(), LegalPage() (+10 more)

### Community 12 - "content-types.ts"
Cohesion: 0.14
Nodes (13): Outcome, toolList, tools, toolSlugs, toolsOverview, BlogSection, CaseStudy, CaseStudyResult (+5 more)

### Community 13 - "design.md (locked design system)"
Cohesion: 0.13
Nodes (17): design.md (locked design system), Atmospheric genre, CTA voice (dark pill + accent ring + arrow circle), Hallmark gate 22, Honest content rule (overrides every skill), Live-site elements not to carry over, No gradient text / accent on one word, Plus Jakarta Sans only typography (+9 more)

### Community 14 - "zoom-journey.tsx"
Cohesion: 0.13
Nodes (20): AreaGlobe(), facing(), Globe(), readColours(), accentHex(), PuneStreetMap(), styleUrl(), mh() (+12 more)

### Community 15 - "CLAUDE.md (project instructions)"
Cohesion: 0.14
Nodes (15): .claude/CLAUDE.md (graphify skill pointer), graphify skill (/graphify trigger), CLAUDE.md (project instructions), graphify query/path/explain usage rules, grep aliased to ugrep gotcha, marketix-dev launch config (port 3000), npm run build while dev corrupts .next, No hand-drawn browser/phone/dashboard chrome (+7 more)

### Community 16 - "README.md"
Cohesion: 0.15
Nodes (14): Content in code, no CMS, lib/blog.ts async blog API, Multi-tenant review tool /r/[client], WordPress 301 redirects (next.config.mjs), Claude API client review generator (app/api/review), content/ typed TS content directory, Framer Motion, lucide-react icons (+6 more)

### Community 17 - "emails.ts"
Cohesion: 0.09
Nodes (51): clean(), getSystemPrompt(), IncomingMessage, isRateLimited(), POST(), replySchema, requestLog, runtime (+43 more)

### Community 18 - "team/page.tsx"
Cohesion: 0.25
Nodes (9): initials(), metadata, Page(), Portrait(), TODO: photo not found on the live site under the expected filename - send it…, team, teamBySlug, TeamMember (+1 more)

### Community 19 - "pune-areas.ts"
Cohesion: 0.24
Nodes (6): dynamicParams, generateMetadata(), PuneArea, puneAreaBySlug, puneAreas, s

### Community 20 - "sitemap.ts"
Cohesion: 0.14
Nodes (11): Entry, sitemap(), locationSlugs, serviceSlugs, caseStudies, caseStudyIndustries, caseStudyList, caseStudySlugs (+3 more)

### Community 21 - "Positioning guardrail (Marketix vs Vistrow)"
Cohesion: 0.22
Nodes (11): Must not look or read like Vistrow rule, Positioning guardrail (Marketix vs Vistrow), Keyword territory split with Vistrow, Marketix Studio, NAP (Balewadi High Street, Pune), Rejected: copying Vistrow sections/chrome, Rebuild goal: SEO + AEO + GEO, not AI-looking, Marketix team (+3 more)

### Community 22 - "Macrostructure family"
Cohesion: 0.20
Nodes (11): Ft5 Statement footer, Long Document macrostructure (blog, legal), Macrostructure family, Map / Diagram macrostructure (google-ads-ppc), N5 Floating pill nav, Quote-Led macrostructure (local-seo-gmb), Split Studio macrostructure, Jay Ganesh Car Accessories (Maruti Kalbhor) (+3 more)

### Community 23 - "PROJECT_CONTEXT.md"
Cohesion: 0.31
Nodes (9): Hallmark slop test before shipping UI, Never fabricate metrics/testimonials/clients rule, Design system locked decision, Rejected: Editorial ledger (Specimen fall-through), Google Maps Ranking Toolkit, Hallmark skill (Nutlope), Hallmark audit 2026-09-23 (9 critical, 8 major, 7 minor), Site map (59 routes, 79 static pages) (+1 more)

### Community 24 - "market-visuals.tsx"
Cohesion: 0.39
Nodes (7): EASE, fmt(), HoursOverlap(), MarketBoard(), overlap(), Span, wrap()

### Community 25 - "locations.ts"
Cohesion: 0.15
Nodes (10): generateMetadata(), globalLocations, globalProcess, globalServices, indiaLocations, indiaProcess, indiaServices, locations (+2 more)

### Community 26 - "chat-widget.tsx"
Cohesion: 0.14
Nodes (15): GrowthAuditForm(), ChatMessage, ChatWidget(), onSubmit(), send(), fallback, greeting, LinkAction (+7 more)

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

### Community 40 - "react"
Cohesion: 0.17
Nodes (10): columns, group(), icons, SiteFooter(), NewsletterForm(), Status, assistant, fullAddress (+2 more)

### Community 41 - "nav.tsx"
Cohesion: 0.18
Nodes (10): LOGO, LOGO_LIGHT, Wordmark(), aboutLinks, aboutMatch, industriesNav, PanelId, plainLinks (+2 more)

### Community 42 - "app/not-found.tsx"
Cohesion: 0.17
Nodes (10): metadata, NotFound(), routes, CardSpotlight(), SiteNav(), topics, waLink(), WhatsAppFloat() (+2 more)

### Community 43 - "structured-data.ts"
Cohesion: 0.05
Nodes (121): answer, faqs, metadata, Page(), values, agreed, answer, metadata (+113 more)

### Community 44 - "products-catalog.ts"
Cohesion: 0.20
Nodes (7): runtime, Feature, Step, DigitalProduct, productList, lib_content_types_feature, lib_content_types_step

## Knowledge Gaps
- **280 isolated node(s):** `npx`, `metadata`, `answer`, `values`, `faqs` (+275 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 346 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `next` to `app/layout.tsx`, `blog/page.tsx`, `review/route.ts`, `services/[slug]/page.tsx`, `blog-post-page.tsx`, `package.json`, `seo.ts`, `content-types.ts`, `zoom-journey.tsx`, `emails.ts`, `team/page.tsx`, `pune-areas.ts`, `sitemap.ts`, `market-visuals.tsx`, `locations.ts`, `chat-widget.tsx`, `(site)/page.tsx`, `react`, `nav.tsx`, `app/not-found.tsx`, `structured-data.ts`?**
  _High betweenness centrality (0.218) - this node is a cross-community bridge._
- **Why does `Multi-tenant review tool /r/[client]` connect `README.md` to `review/route.ts`, `Macrostructure family`, `PROJECT_CONTEXT.md`?**
  _High betweenness centrality (0.165) - this node is a cross-community bridge._
- **Why does `lucide-react` connect `next` to `chat-knowledge.ts`, `app/layout.tsx`, `growth-audit-form.tsx`, `blog/page.tsx`, `review/route.ts`, `blog-post-page.tsx`, `react`, `nav.tsx`, `app/not-found.tsx`, `structured-data.ts`, `content-types.ts`, `products-catalog.ts`, `zoom-journey.tsx`, `package.json`, `team/page.tsx`, `locations.ts`, `chat-widget.tsx`, `(site)/page.tsx`?**
  _High betweenness centrality (0.145) - this node is a cross-community bridge._
- **What connects `npx`, `metadata`, `answer` to the rest of the system?**
  _280 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `app/layout.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.09009009009009009 - nodes in this community are weakly interconnected._
- **Should `next` be split into smaller, more focused modules?**
  _Cohesion score 0.0528169014084507 - nodes in this community are weakly interconnected._
- **Should `growth-audit-form.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.1111111111111111 - nodes in this community are weakly interconnected._