# Graph Report - MARKETIX WEBSITE  (2026-09-26)

## Corpus Check
- 147 files · ~113,501 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 5 file(s) not represented in the graph (top: (none) 2, .example 1, .ico 1)

## Summary
- 869 nodes · 2259 edges · 47 communities (42 shown, 5 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 34 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `5dcfe8b9`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- ElectricLogo.tsx
- accent-switcher.tsx
- content-types.ts
- chat-widget.tsx
- blog/[slug]/page.tsx
- review-clients.ts
- contact-form.tsx
- team/page.tsx
- components.json
- package.json
- compilerOptions
- footer.tsx
- lucide-react
- design.md (locked design system)
- tools/[slug]/page.tsx
- CLAUDE.md (project instructions)
- README.md
- emails.ts
- growth-audit-form.tsx
- chat-knowledge.ts
- work/[slug]/page.tsx
- Positioning guardrail (Marketix vs Vistrow)
- Macrostructure family
- PROJECT_CONTEXT.md
- blog-post-page.tsx
- market-visuals.tsx
- pricing/page.tsx
- (site)/page.tsx
- framer-motion
- Accent violet #C82AEF
- vercel.json
- ref_node_fs
- next.config.mjs
- trackLead
- shadcn
- postcss.config.mjs
- industries/page.tsx
- react
- sitemap.ts
- service-finder.tsx
- locations/page.tsx
- search-journey.tsx
- checkout/route.ts
- graph
- structured-data.ts
- local-seo-gmb/page.tsx
- next

## God Nodes (most connected - your core abstractions)
1. `next` - 69 edges
2. `lucide-react` - 62 edges
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
- `Non-negotiable rules` --references--> `FillHeading()`  [INFERRED]
  docs/REDESIGN_PLAN.md → components/v2/fill-heading.tsx
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

## Communities (47 total, 5 thin omitted)

### Community 0 - "ElectricLogo.tsx"
Cohesion: 0.15
Nodes (19): blurGrid(), blurLine(), ElectricLogo(), ElectricLogoProps, Focus, hexToRgb(), Point, Pulse (+11 more)

### Community 1 - "accent-switcher.tsx"
Cohesion: 0.07
Nodes (39): HeroThreads(), toHex(), ctxMap, FAN_MODE, FanMode, hexToRgb(), WebThreads(), WebThreadsCtx (+31 more)

### Community 2 - "content-types.ts"
Cohesion: 0.15
Nodes (12): toolList, tools, toolSlugs, toolsOverview, BlogSection, BlogSeoImage, CaseStudy, CaseStudyResult (+4 more)

### Community 3 - "chat-widget.tsx"
Cohesion: 0.15
Nodes (11): ChatMessage, fallback, greeting, LinkAction, Prompt, questions, topics, GtagCommand (+3 more)

### Community 4 - "blog/[slug]/page.tsx"
Cohesion: 0.21
Nodes (12): generateMetadata(), Page(), generateMetadata(), generateStaticParams(), Page(), revalidate, sitemap(), archivedVistrowPosts (+4 more)

### Community 5 - "review-clients.ts"
Cohesion: 0.18
Nodes (6): ReviewGenerator(), Status, reviewClientList, reviewClients, reviewClientSlugs, ReviewClient

### Community 6 - "contact-form.tsx"
Cohesion: 0.25
Nodes (8): Errors, nextSteps, services, Status, Field(), Input(), Select(), Textarea()

### Community 7 - "team/page.tsx"
Cohesion: 0.25
Nodes (9): initials(), metadata, Page(), Portrait(), TODO: photo not found on the live site under the expected filename - send it…, team, teamBySlug, TeamMember (+1 more)

### Community 8 - "components.json"
Cohesion: 0.11
Nodes (18): aliases, components, hooks, lib, ui, utils, registries, @react-bits (+10 more)

### Community 9 - "package.json"
Cohesion: 0.05
Nodes (40): dependencies, @anthropic-ai/sdk, cobe, framer-motion, gsap, lucide-react, motion, next (+32 more)

### Community 10 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 11 - "footer.tsx"
Cohesion: 0.05
Nodes (40): metadata, NotFound(), routes, LOGO, LOGO_LIGHT, Wordmark(), CardSpotlight(), ElectricMonogram() (+32 more)

### Community 12 - "lucide-react"
Cohesion: 0.15
Nodes (25): revalidate, metadata, who, answer, audiences, faqs, hero, metadata (+17 more)

### Community 13 - "design.md (locked design system)"
Cohesion: 0.13
Nodes (17): design.md (locked design system), Atmospheric genre, CTA voice (dark pill + accent ring + arrow circle), Hallmark gate 22, Honest content rule (overrides every skill), Live-site elements not to carry over, No gradient text / accent on one word, Plus Jakarta Sans only typography (+9 more)

### Community 14 - "tools/[slug]/page.tsx"
Cohesion: 0.07
Nodes (24): generateMetadata(), SummaryGroup, CtaBand(), Faq(), Feature, FeatureCards(), LinkCardGrid(), Outcome (+16 more)

### Community 15 - "CLAUDE.md (project instructions)"
Cohesion: 0.14
Nodes (15): .claude/CLAUDE.md (graphify skill pointer), graphify skill (/graphify trigger), CLAUDE.md (project instructions), graphify query/path/explain usage rules, grep aliased to ugrep gotcha, marketix-dev launch config (port 3000), npm run build while dev corrupts .next, No hand-drawn browser/phone/dashboard chrome (+7 more)

### Community 16 - "README.md"
Cohesion: 0.15
Nodes (14): Content in code, no CMS, lib/blog.ts async blog API, Multi-tenant review tool /r/[client], WordPress 301 redirects (next.config.mjs), Claude API client review generator (app/api/review), content/ typed TS content directory, Framer Motion, lucide-react icons (+6 more)

### Community 17 - "emails.ts"
Cohesion: 0.07
Nodes (64): clean(), getSystemPrompt(), IncomingMessage, isRateLimited(), POST(), replySchema, requestLog, runtime (+56 more)

### Community 18 - "growth-audit-form.tsx"
Cohesion: 0.20
Nodes (7): auditSteps, budgets, channelOptions, industries, serviceOptions, confettiDots, SuccessCelebration()

### Community 19 - "chat-knowledge.ts"
Cohesion: 0.15
Nodes (13): GET(), line(), revalidate, dynamicParams, generateMetadata(), industryList, PuneArea, puneAreaBySlug (+5 more)

### Community 20 - "work/[slug]/page.tsx"
Cohesion: 0.11
Nodes (20): metadata, generateMetadata(), isTodo(), livePreview, Page(), Step, StepRail(), clientLogos (+12 more)

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
Cohesion: 0.36
Nodes (6): ReadingProgress(), ShareRow(), BlogPostPage(), headingId(), renderInlineLinks(), articleSchema()

### Community 25 - "market-visuals.tsx"
Cohesion: 0.39
Nodes (7): EASE, fmt(), HoursOverlap(), MarketBoard(), overlap(), Span, wrap()

### Community 26 - "pricing/page.tsx"
Cohesion: 0.32
Nodes (6): answer, drivers, faqs, metadata, ScopeBuilder(), ScopeOption

### Community 27 - "(site)/page.tsx"
Cohesion: 0.15
Nodes (13): answer, faqs, groupIcons, industryIcons, industryMeasures, metadata, serviceBlurbs, serviceIcons (+5 more)

### Community 28 - "framer-motion"
Cohesion: 0.25
Nodes (6): DemandMap(), EASE, sources, Funnel(), Step, framer-motion

### Community 29 - "Accent violet #C82AEF"
Cohesion: 0.33
Nodes (6): Card surface (radial gradient, 24px radius), Accent violet #C82AEF, Static violet light pool + grain, Neon ring (hover/focus only), Aurora hero removed (static light pool), Rejected: gold/yellow structural accent

### Community 30 - "vercel.json"
Cohesion: 0.40
Nodes (4): buildCommand, framework, installCommand, $schema

### Community 33 - "trackLead"
Cohesion: 0.38
Nodes (6): ContactForm(), GrowthAuditForm(), ChatWidget(), onSubmit(), send(), trackLead()

### Community 36 - "industries/page.tsx"
Cohesion: 0.17
Nodes (11): agreed, answer, metadata, principles, steps, answer, goals, metadata (+3 more)

### Community 37 - "react"
Cohesion: 0.17
Nodes (9): BlogIndex(), Card, formatDate(), ExplorerItem, IndustryExplorer(), BuyButton(), Props, Window (+1 more)

### Community 38 - "sitemap.ts"
Cohesion: 0.22
Nodes (8): Entry, industriesOverview, industrySlugs, legalSlugs, locationSlugs, serviceSlugs, publishedCaseStudySlugs, IndustryContent

### Community 39 - "service-finder.tsx"
Cohesion: 0.40
Nodes (5): FinderCard, GoalId, goals, ServiceFinder(), slugOf()

### Community 40 - "locations/page.tsx"
Cohesion: 0.21
Nodes (10): answer, metadata, zones, globalLocations, globalProcess, globalServices, indiaLocations, indiaProcess (+2 more)

### Community 41 - "search-journey.tsx"
Cohesion: 0.33
Nodes (5): loops, queries, SearchJourney(), Stage, stages

### Community 43 - "graph"
Cohesion: 0.19
Nodes (31): Page(), Page(), Page(), Page(), Page(), Page(), Page(), Page() (+23 more)

### Community 44 - "structured-data.ts"
Cohesion: 0.09
Nodes (31): answer, faqs, metadata, values, include, metadata, faqs, metadata (+23 more)

### Community 45 - "local-seo-gmb/page.tsx"
Cohesion: 0.17
Nodes (12): countOf(), metadata, Page(), hero, metadata, workGroups, DigitalProduct, productList (+4 more)

### Community 46 - "next"
Cohesion: 0.06
Nodes (31): app_globals, jakarta, metadata, RootLayout(), viewport, metadata, metadata, generateMetadata() (+23 more)

## Knowledge Gaps
- **292 isolated node(s):** `npx`, `metadata`, `answer`, `values`, `faqs` (+287 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 354 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `next` to `content-types.ts`, `chat-widget.tsx`, `blog/[slug]/page.tsx`, `review-clients.ts`, `team/page.tsx`, `package.json`, `footer.tsx`, `lucide-react`, `tools/[slug]/page.tsx`, `emails.ts`, `chat-knowledge.ts`, `work/[slug]/page.tsx`, `blog-post-page.tsx`, `market-visuals.tsx`, `pricing/page.tsx`, `(site)/page.tsx`, `industries/page.tsx`, `react`, `sitemap.ts`, `service-finder.tsx`, `locations/page.tsx`, `search-journey.tsx`, `graph`, `structured-data.ts`, `local-seo-gmb/page.tsx`?**
  _High betweenness centrality (0.202) - this node is a cross-community bridge._
- **Why does `Multi-tenant review tool /r/[client]` connect `README.md` to `review-clients.ts`, `Macrostructure family`, `PROJECT_CONTEXT.md`?**
  _High betweenness centrality (0.163) - this node is a cross-community bridge._
- **Why does `lucide-react` connect `lucide-react` to `accent-switcher.tsx`, `content-types.ts`, `chat-widget.tsx`, `review-clients.ts`, `contact-form.tsx`, `team/page.tsx`, `package.json`, `footer.tsx`, `tools/[slug]/page.tsx`, `growth-audit-form.tsx`, `work/[slug]/page.tsx`, `blog-post-page.tsx`, `pricing/page.tsx`, `(site)/page.tsx`, `framer-motion`, `industries/page.tsx`, `react`, `sitemap.ts`, `service-finder.tsx`, `locations/page.tsx`, `search-journey.tsx`, `structured-data.ts`, `local-seo-gmb/page.tsx`?**
  _High betweenness centrality (0.134) - this node is a cross-community bridge._
- **What connects `npx`, `metadata`, `answer` to the rest of the system?**
  _292 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `ElectricLogo.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.14736842105263157 - nodes in this community are weakly interconnected._
- **Should `accent-switcher.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.07030527289546716 - nodes in this community are weakly interconnected._
- **Should `components.json` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._