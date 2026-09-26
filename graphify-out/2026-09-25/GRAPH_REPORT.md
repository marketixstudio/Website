# Graph Report - MARKETIX WEBSITE  (2026-09-25)

## Corpus Check
- 134 files · ~99,930 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 4 file(s) not represented in the graph (top: (none) 2, .example 1, .css 1)

## Summary
- 764 nodes · 1993 edges · 38 communities (35 shown, 3 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 34 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- footer.tsx
- (site)/page.tsx
- content-types.ts
- contact-form.tsx
- primitives.tsx
- chat/route.ts
- work/[slug]/page.tsx
- react
- components.json
- package.json
- compilerOptions
- next
- google-ads-ppc/page.tsx
- design.md (locked design system)
- pricing/page.tsx
- CLAUDE.md (project instructions)
- README.md
- inquiries/route.ts
- structured-data.ts
- approach/page.tsx
- growth-audit-form.tsx
- Positioning guardrail (Marketix vs Vistrow)
- Macrostructure family
- PROJECT_CONTEXT.md
- graph
- locations/page.tsx
- lucide-react
- chat-widget.tsx
- framer-motion
- Accent violet #C82AEF
- vercel.json
- trackLead
- next.config.mjs
- service-finder.tsx
- shadcn
- postcss.config.mjs
- search-journey.tsx
- analytics.ts

## God Nodes (most connected - your core abstractions)
1. `next` - 68 edges
2. `lucide-react` - 60 edges
3. `graph()` - 57 edges
4. `breadcrumbSchema()` - 54 edges
5. `buildMetadata()` - 42 edges
6. `faqSchema()` - 40 edges
7. `answerSchema()` - 32 edges
8. `JsonLd()` - 29 edges
9. `TextLink()` - 27 edges
10. `Cta()` - 26 edges

## Surprising Connections (you probably didn't know these)
- `Phase 2: Pages (redesign each in the new system)` --references--> `ServiceHero()`  [INFERRED]
  docs/REDESIGN_PLAN.md → components/v2/service-hero.tsx
- `SEO / AEO / GEO checklist (every indexable page)` --references--> `AnswerCard()`  [INFERRED]
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

## Communities (38 total, 3 thin omitted)

### Community 0 - "footer.tsx"
Cohesion: 0.06
Nodes (37): metadata, NotFound(), LOGO, Wordmark(), columns, group(), icons, SiteFooter() (+29 more)

### Community 1 - "(site)/page.tsx"
Cohesion: 0.17
Nodes (10): answer, faqs, groupIcons, industryIcons, industryMeasures, metadata, serviceBlurbs, serviceIcons (+2 more)

### Community 2 - "content-types.ts"
Cohesion: 0.06
Nodes (37): metadata, generateMetadata(), SummaryGroup, CtaBand(), Faq(), Feature, FeatureCards(), LinkCardGrid() (+29 more)

### Community 3 - "contact-form.tsx"
Cohesion: 0.25
Nodes (8): Errors, nextSteps, services, Status, Field(), Input(), Select(), Textarea()

### Community 4 - "primitives.tsx"
Cohesion: 0.14
Nodes (20): answer, faqs, metadata, values, include, metadata, faqs, metadata (+12 more)

### Community 5 - "chat/route.ts"
Cohesion: 0.08
Nodes (32): clean(), escapeHtml(), getSystemPrompt(), IncomingMessage, isRateLimited(), POST(), renderChatLeadEmail(), replySchema (+24 more)

### Community 6 - "work/[slug]/page.tsx"
Cohesion: 0.12
Nodes (18): metadata, generateMetadata(), isTodo(), livePreview, Page(), clientLogos, clientStats, NOTE: the old WordPress /testimonials/ page still carries the theme's demo (+10 more)

### Community 7 - "react"
Cohesion: 0.25
Nodes (5): WaveField(), BuyButton(), Props, Window, react

### Community 8 - "components.json"
Cohesion: 0.11
Nodes (18): aliases, components, hooks, lib, ui, utils, registries, @react-bits (+10 more)

### Community 9 - "package.json"
Cohesion: 0.05
Nodes (39): dependencies, @anthropic-ai/sdk, framer-motion, gsap, lucide-react, motion, next, react (+31 more)

### Community 10 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 11 - "next"
Cohesion: 0.06
Nodes (40): app_globals, jakarta, metadata, RootLayout(), viewport, generateMetadata(), Page(), revalidate (+32 more)

### Community 12 - "google-ads-ppc/page.tsx"
Cohesion: 0.15
Nodes (26): answer, audiences, faqs, hero, metadata, hero, metadata, workGroups (+18 more)

### Community 13 - "design.md (locked design system)"
Cohesion: 0.13
Nodes (17): design.md (locked design system), Atmospheric genre, CTA voice (dark pill + accent ring + arrow circle), Hallmark gate 22, Honest content rule (overrides every skill), Live-site elements not to carry over, No gradient text / accent on one word, Plus Jakarta Sans only typography (+9 more)

### Community 14 - "pricing/page.tsx"
Cohesion: 0.13
Nodes (14): runtime, answer, drivers, faqs, metadata, ScopeBuilder(), ScopeOption, DigitalProduct (+6 more)

### Community 15 - "CLAUDE.md (project instructions)"
Cohesion: 0.14
Nodes (15): .claude/CLAUDE.md (graphify skill pointer), graphify skill (/graphify trigger), CLAUDE.md (project instructions), graphify query/path/explain usage rules, grep aliased to ugrep gotcha, marketix-dev launch config (port 3000), npm run build while dev corrupts .next, No hand-drawn browser/phone/dashboard chrome (+7 more)

### Community 16 - "README.md"
Cohesion: 0.15
Nodes (14): Content in code, no CMS, lib/blog.ts async blog API, Multi-tenant review tool /r/[client], WordPress 301 redirects (next.config.mjs), Claude API client review generator (app/api/review), content/ typed TS content directory, Framer Motion, lucide-react icons (+6 more)

### Community 17 - "inquiries/route.ts"
Cohesion: 0.27
Nodes (12): clean(), cleanList(), escapeHtml(), Inquiry, isRateLimited(), POST(), renderConfirmationEmail(), renderInternalEmail() (+4 more)

### Community 18 - "structured-data.ts"
Cohesion: 0.13
Nodes (15): initials(), metadata, Portrait(), TODO: photo not found on the live site under the expected filename - send it…, team, teamBySlug, TeamMember, siteName (+7 more)

### Community 19 - "approach/page.tsx"
Cohesion: 0.20
Nodes (9): agreed, answer, metadata, principles, steps, metadata, Step, StepRail() (+1 more)

### Community 20 - "growth-audit-form.tsx"
Cohesion: 0.20
Nodes (7): auditSteps, budgets, channelOptions, industries, serviceOptions, confettiDots, SuccessCelebration()

### Community 21 - "Positioning guardrail (Marketix vs Vistrow)"
Cohesion: 0.22
Nodes (11): Must not look or read like Vistrow rule, Positioning guardrail (Marketix vs Vistrow), Keyword territory split with Vistrow, Marketix Studio, NAP (Balewadi High Street, Pune), Rejected: copying Vistrow sections/chrome, Rebuild goal: SEO + AEO + GEO, not AI-looking, Marketix team (+3 more)

### Community 22 - "Macrostructure family"
Cohesion: 0.20
Nodes (11): Ft5 Statement footer, Long Document macrostructure (blog, legal), Macrostructure family, Map / Diagram macrostructure (google-ads-ppc), N5 Floating pill nav, Quote-Led macrostructure (local-seo-gmb), Split Studio macrostructure, Jay Ganesh Car Accessories (Maruti Kalbhor) (+3 more)

### Community 23 - "PROJECT_CONTEXT.md"
Cohesion: 0.31
Nodes (9): Hallmark slop test before shipping UI, Never fabricate metrics/testimonials/clients rule, Design system locked decision, Rejected: Editorial ledger (Specimen fall-through), Google Maps Ranking Toolkit, Hallmark skill (Nutlope), Hallmark audit 2026-09-23 (9 critical, 8 major, 7 minor), Site map (59 routes, 79 static pages) (+1 more)

### Community 24 - "graph"
Cohesion: 0.12
Nodes (42): Page(), Page(), Page(), Page(), Page(), countOf(), Page(), Page() (+34 more)

### Community 25 - "locations/page.tsx"
Cohesion: 0.05
Nodes (47): GET(), line(), revalidate, answer, metadata, zones, dynamicParams, generateMetadata() (+39 more)

### Community 26 - "lucide-react"
Cohesion: 0.27
Nodes (7): answer, goals, metadata, routes, ExplorerItem, IndustryExplorer(), lucide-react

### Community 27 - "chat-widget.tsx"
Cohesion: 0.22
Nodes (8): ChatMessage, fallback, greeting, LinkAction, Prompt, questions, topics, assistant

### Community 28 - "framer-motion"
Cohesion: 0.25
Nodes (6): DemandMap(), EASE, sources, Funnel(), Step, framer-motion

### Community 29 - "Accent violet #C82AEF"
Cohesion: 0.33
Nodes (6): Card surface (radial gradient, 24px radius), Accent violet #C82AEF, Static violet light pool + grain, Neon ring (hover/focus only), Aurora hero removed (static light pool), Rejected: gold/yellow structural accent

### Community 30 - "vercel.json"
Cohesion: 0.40
Nodes (4): buildCommand, framework, installCommand, $schema

### Community 31 - "trackLead"
Cohesion: 0.38
Nodes (6): ContactForm(), GrowthAuditForm(), ChatWidget(), onSubmit(), send(), trackLead()

### Community 33 - "service-finder.tsx"
Cohesion: 0.40
Nodes (5): FinderCard, GoalId, goals, ServiceFinder(), slugOf()

### Community 36 - "search-journey.tsx"
Cohesion: 0.33
Nodes (5): loops, queries, SearchJourney(), Stage, stages

### Community 37 - "analytics.ts"
Cohesion: 0.50
Nodes (3): GtagCommand, LeadSource, Window

## Knowledge Gaps
- **266 isolated node(s):** `npx`, `metadata`, `answer`, `values`, `faqs` (+261 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 325 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `next` to `footer.tsx`, `(site)/page.tsx`, `content-types.ts`, `primitives.tsx`, `chat/route.ts`, `work/[slug]/page.tsx`, `react`, `package.json`, `google-ads-ppc/page.tsx`, `pricing/page.tsx`, `inquiries/route.ts`, `structured-data.ts`, `approach/page.tsx`, `graph`, `locations/page.tsx`, `lucide-react`, `chat-widget.tsx`, `service-finder.tsx`, `search-journey.tsx`?**
  _High betweenness centrality (0.226) - this node is a cross-community bridge._
- **Why does `Multi-tenant review tool /r/[client]` connect `README.md` to `chat/route.ts`, `Macrostructure family`, `PROJECT_CONTEXT.md`?**
  _High betweenness centrality (0.181) - this node is a cross-community bridge._
- **Why does `lucide-react` connect `lucide-react` to `footer.tsx`, `(site)/page.tsx`, `content-types.ts`, `contact-form.tsx`, `primitives.tsx`, `chat/route.ts`, `work/[slug]/page.tsx`, `react`, `package.json`, `next`, `google-ads-ppc/page.tsx`, `pricing/page.tsx`, `structured-data.ts`, `approach/page.tsx`, `growth-audit-form.tsx`, `graph`, `locations/page.tsx`, `chat-widget.tsx`, `framer-motion`, `service-finder.tsx`, `search-journey.tsx`?**
  _High betweenness centrality (0.135) - this node is a cross-community bridge._
- **What connects `npx`, `metadata`, `answer` to the rest of the system?**
  _266 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `footer.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.05568627450980392 - nodes in this community are weakly interconnected._
- **Should `content-types.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.056535504296698326 - nodes in this community are weakly interconnected._
- **Should `primitives.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.14285714285714285 - nodes in this community are weakly interconnected._