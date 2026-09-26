# Graph Report - MARKETIX WEBSITE  (2026-09-26)

## Corpus Check
- 143 files · ~105,507 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 5 file(s) not represented in the graph (top: (none) 2, .example 1, .ico 1)

## Summary
- 833 nodes · 2204 edges · 42 communities (38 shown, 4 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 34 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `4c7f62e2`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- about/page.tsx
- accent-switcher.tsx
- reveal.tsx
- contact/page.tsx
- blog/page.tsx
- review/route.ts
- content-types.ts
- react
- components.json
- package.json
- compilerOptions
- seo.ts
- tools/[slug]/page.tsx
- design.md (locked design system)
- cta-band.tsx
- CLAUDE.md (project instructions)
- README.md
- emails.ts
- sitemap.ts
- pune-areas.ts
- globe.tsx
- Positioning guardrail (Marketix vs Vistrow)
- Macrostructure family
- PROJECT_CONTEXT.md
- chat-knowledge.ts
- locations/page.tsx
- outcomes.tsx
- (site)/page.tsx
- Overnight redesign plan (started 2026-09-24)
- Accent violet #C82AEF
- vercel.json
- next.config.mjs
- market-visuals.tsx
- shadcn
- postcss.config.mjs
- site-config.ts
- nav.tsx
- app/not-found.tsx
- structured-data.ts
- faq/page.tsx
- next
- AccentSwitcher

## God Nodes (most connected - your core abstractions)
1. `next` - 69 edges
2. `lucide-react` - 62 edges
3. `graph()` - 57 edges
4. `breadcrumbSchema()` - 54 edges
5. `buildMetadata()` - 42 edges
6. `faqSchema()` - 40 edges
7. `answerSchema()` - 32 edges
8. `JsonLd()` - 29 edges
9. `TextLink()` - 27 edges
10. `react` - 27 edges

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

## Communities (42 total, 4 thin omitted)

### Community 0 - "about/page.tsx"
Cohesion: 0.17
Nodes (13): GET(), line(), revalidate, answer, faqs, metadata, values, industriesOverview (+5 more)

### Community 1 - "accent-switcher.tsx"
Cohesion: 0.18
Nodes (14): WaveField(), choose(), Bounds, DragState, Side, ThemeToggle(), toggle(), ACCENT_KEY (+6 more)

### Community 2 - "reveal.tsx"
Cohesion: 0.16
Nodes (11): SummaryGroup, Faq(), Feature, FeatureCards(), LinkCardGrid(), Step, Steps(), Reveal() (+3 more)

### Community 3 - "contact/page.tsx"
Cohesion: 0.05
Nodes (44): faqs, metadata, routes, whatsappText, ContactForm(), Errors, nextSteps, services (+36 more)

### Community 4 - "blog/page.tsx"
Cohesion: 0.29
Nodes (9): generateMetadata(), Page(), revalidate, generateMetadata(), generateStaticParams(), Page(), revalidate, getBlogPost() (+1 more)

### Community 5 - "review/route.ts"
Cohesion: 0.12
Nodes (18): hits, POST(), rateLimited(), runtime, ReviewGenerator(), Status, reviewClientList, reviewClients (+10 more)

### Community 6 - "content-types.ts"
Cohesion: 0.18
Nodes (10): toolList, tools, toolSlugs, toolsOverview, BlogSection, CaseStudy, CaseStudyResult, OverviewContent (+2 more)

### Community 7 - "react"
Cohesion: 0.33
Nodes (5): BlogIndex(), Card, formatDate(), ReadingProgress(), react

### Community 8 - "components.json"
Cohesion: 0.11
Nodes (18): aliases, components, hooks, lib, ui, utils, registries, @react-bits (+10 more)

### Community 9 - "package.json"
Cohesion: 0.05
Nodes (39): dependencies, @anthropic-ai/sdk, cobe, framer-motion, gsap, lucide-react, motion, next (+31 more)

### Community 10 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 11 - "seo.ts"
Cohesion: 0.07
Nodes (24): metadata, metadata, generateMetadata(), generateMetadata(), metadata, metadata, CUSTOM_PAGES, generateMetadata() (+16 more)

### Community 12 - "tools/[slug]/page.tsx"
Cohesion: 0.25
Nodes (5): AdBudgetCalculator(), RoasCalculator(), slug(), SOURCE_PRESETS, UtmBuilder()

### Community 13 - "design.md (locked design system)"
Cohesion: 0.13
Nodes (17): design.md (locked design system), Atmospheric genre, CTA voice (dark pill + accent ring + arrow circle), Hallmark gate 22, Honest content rule (overrides every skill), Live-site elements not to carry over, No gradient text / accent on one word, Plus Jakarta Sans only typography (+9 more)

### Community 14 - "cta-band.tsx"
Cohesion: 0.27
Nodes (5): CtaBand(), CtaLink, PageHero(), Breadcrumb(), Crumb

### Community 15 - "CLAUDE.md (project instructions)"
Cohesion: 0.14
Nodes (15): .claude/CLAUDE.md (graphify skill pointer), graphify skill (/graphify trigger), CLAUDE.md (project instructions), graphify query/path/explain usage rules, grep aliased to ugrep gotcha, marketix-dev launch config (port 3000), npm run build while dev corrupts .next, No hand-drawn browser/phone/dashboard chrome (+7 more)

### Community 16 - "README.md"
Cohesion: 0.15
Nodes (14): Content in code, no CMS, lib/blog.ts async blog API, Multi-tenant review tool /r/[client], WordPress 301 redirects (next.config.mjs), Claude API client review generator (app/api/review), content/ typed TS content directory, Framer Motion, lucide-react icons (+6 more)

### Community 17 - "emails.ts"
Cohesion: 0.09
Nodes (51): clean(), getSystemPrompt(), IncomingMessage, isRateLimited(), POST(), replySchema, requestLog, runtime (+43 more)

### Community 18 - "sitemap.ts"
Cohesion: 0.33
Nodes (5): Entry, sitemap(), locationSlugs, serviceSlugs, publishedCaseStudySlugs

### Community 19 - "pune-areas.ts"
Cohesion: 0.24
Nodes (6): dynamicParams, generateMetadata(), PuneArea, puneAreaBySlug, puneAreas, s

### Community 20 - "globe.tsx"
Cohesion: 0.32
Nodes (7): cityCoords, facing(), Globe(), LatLng, PUNE, readColours(), cobe

### Community 21 - "Positioning guardrail (Marketix vs Vistrow)"
Cohesion: 0.22
Nodes (11): Must not look or read like Vistrow rule, Positioning guardrail (Marketix vs Vistrow), Keyword territory split with Vistrow, Marketix Studio, NAP (Balewadi High Street, Pune), Rejected: copying Vistrow sections/chrome, Rebuild goal: SEO + AEO + GEO, not AI-looking, Marketix team (+3 more)

### Community 22 - "Macrostructure family"
Cohesion: 0.20
Nodes (11): Ft5 Statement footer, Long Document macrostructure (blog, legal), Macrostructure family, Map / Diagram macrostructure (google-ads-ppc), N5 Floating pill nav, Quote-Led macrostructure (local-seo-gmb), Split Studio macrostructure, Jay Ganesh Car Accessories (Maruti Kalbhor) (+3 more)

### Community 23 - "PROJECT_CONTEXT.md"
Cohesion: 0.31
Nodes (9): Hallmark slop test before shipping UI, Never fabricate metrics/testimonials/clients rule, Design system locked decision, Rejected: Editorial ledger (Specimen fall-through), Google Maps Ranking Toolkit, Hallmark skill (Nutlope), Hallmark audit 2026-09-23 (9 critical, 8 major, 7 minor), Site map (59 routes, 79 static pages) (+1 more)

### Community 24 - "chat-knowledge.ts"
Cohesion: 0.36
Nodes (5): archivedVistrowPosts, blogPosts, keyPages, VALID_CHAT_LINKS, BlogPost

### Community 25 - "locations/page.tsx"
Cohesion: 0.19
Nodes (11): answer, metadata, zones, globalLocations, globalProcess, globalServices, indiaLocations, indiaProcess (+3 more)

### Community 27 - "(site)/page.tsx"
Cohesion: 0.06
Nodes (35): answer, faqs, groupIcons, industryIcons, industryMeasures, metadata, serviceBlurbs, serviceIcons (+27 more)

### Community 28 - "Overnight redesign plan (started 2026-09-24)"
Cohesion: 0.25
Nodes (7): Log, Morning summary (2026-09-24, ~07:00), Overnight redesign plan (started 2026-09-24), Phase 2: Pages (redesign each in the new system), Phase 3: Site-wide verification, Progress, The creative bar

### Community 29 - "Accent violet #C82AEF"
Cohesion: 0.33
Nodes (6): Card surface (radial gradient, 24px radius), Accent violet #C82AEF, Static violet light pool + grain, Neon ring (hover/focus only), Aurora hero removed (static light pool), Rejected: gold/yellow structural accent

### Community 30 - "vercel.json"
Cohesion: 0.40
Nodes (4): buildCommand, framework, installCommand, $schema

### Community 33 - "market-visuals.tsx"
Cohesion: 0.39
Nodes (7): EASE, fmt(), HoursOverlap(), MarketBoard(), overlap(), Span, wrap()

### Community 40 - "site-config.ts"
Cohesion: 0.23
Nodes (7): columns, icons, NewsletterForm(), Status, business, fullAddress, socialProfiles

### Community 41 - "nav.tsx"
Cohesion: 0.18
Nodes (11): LOGO, LOGO_LIGHT, Wordmark(), aboutLinks, aboutMatch, industriesNav, PanelId, plainLinks (+3 more)

### Community 42 - "app/not-found.tsx"
Cohesion: 0.18
Nodes (11): metadata, NotFound(), CardSpotlight(), group(), SiteFooter(), SiteNav(), topics, waLink() (+3 more)

### Community 43 - "structured-data.ts"
Cohesion: 0.07
Nodes (62): app_globals, jakarta, metadata, RootLayout(), viewport, Page(), Page(), Page() (+54 more)

### Community 44 - "faq/page.tsx"
Cohesion: 0.13
Nodes (14): runtime, groups, metadata, checks, faqs, metadata, steps, QA (+6 more)

### Community 46 - "next"
Cohesion: 0.06
Nodes (71): agreed, answer, metadata, principles, steps, include, metadata, metadata (+63 more)

### Community 48 - "AccentSwitcher"
Cohesion: 0.47
Nodes (8): AccentSwitcher(), begin(), finish(), move(), onMouseDown(), onTouchStart(), snap(), clamp()

## Knowledge Gaps
- **278 isolated node(s):** `npx`, `metadata`, `answer`, `values`, `faqs` (+273 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 339 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `next` to `about/page.tsx`, `reveal.tsx`, `contact/page.tsx`, `blog/page.tsx`, `review/route.ts`, `content-types.ts`, `react`, `package.json`, `seo.ts`, `tools/[slug]/page.tsx`, `cta-band.tsx`, `emails.ts`, `sitemap.ts`, `pune-areas.ts`, `locations/page.tsx`, `(site)/page.tsx`, `market-visuals.tsx`, `site-config.ts`, `nav.tsx`, `app/not-found.tsx`, `structured-data.ts`, `faq/page.tsx`?**
  _High betweenness centrality (0.211) - this node is a cross-community bridge._
- **Why does `Multi-tenant review tool /r/[client]` connect `README.md` to `review/route.ts`, `Macrostructure family`, `PROJECT_CONTEXT.md`?**
  _High betweenness centrality (0.169) - this node is a cross-community bridge._
- **Why does `lucide-react` connect `next` to `about/page.tsx`, `accent-switcher.tsx`, `reveal.tsx`, `contact/page.tsx`, `blog/page.tsx`, `review/route.ts`, `content-types.ts`, `react`, `site-config.ts`, `nav.tsx`, `app/not-found.tsx`, `structured-data.ts`, `faq/page.tsx`, `tools/[slug]/page.tsx`, `cta-band.tsx`, `package.json`, `locations/page.tsx`, `(site)/page.tsx`?**
  _High betweenness centrality (0.140) - this node is a cross-community bridge._
- **What connects `npx`, `metadata`, `answer` to the rest of the system?**
  _278 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `contact/page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.05012531328320802 - nodes in this community are weakly interconnected._
- **Should `review/route.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.1164021164021164 - nodes in this community are weakly interconnected._
- **Should `components.json` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._