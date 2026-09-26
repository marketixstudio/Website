# Graph Report - MARKETIX WEBSITE  (2026-09-26)

## Corpus Check
- 144 files · ~105,645 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 5 file(s) not represented in the graph (top: (none) 2, .example 1, .ico 1)

## Summary
- 834 nodes · 2202 edges · 44 communities (41 shown, 3 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 34 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `075f75f7`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- chat-knowledge.ts
- accent-switcher.tsx
- content-types.ts
- growth-audit-form.tsx
- blog/[slug]/page.tsx
- chat/route.ts
- buildMetadata
- react
- components.json
- package.json
- compilerOptions
- legal-page.tsx
- next
- design.md (locked design system)
- lucide-react
- CLAUDE.md (project instructions)
- README.md
- emails.ts
- sitemap.ts
- pune-areas.ts
- gmb-toolkit/page.tsx
- Positioning guardrail (Marketix vs Vistrow)
- Macrostructure family
- PROJECT_CONTEXT.md
- work/[slug]/page.tsx
- location-detail.tsx
- site-config.ts
- (site)/page.tsx
- Overnight redesign plan (started 2026-09-24)
- Accent violet #C82AEF
- vercel.json
- industries.ts
- next.config.mjs
- industries/page.tsx
- shadcn
- postcss.config.mjs
- service-finder.tsx
- footer.tsx
- nav.tsx
- app/not-found.tsx
- structured-data.ts
- primitives.tsx
- google-ads-ppc/page.tsx
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

## Communities (44 total, 3 thin omitted)

### Community 0 - "chat-knowledge.ts"
Cohesion: 0.23
Nodes (11): GET(), line(), revalidate, industryList, locationList, puneAreas, serviceList, servicesOverview (+3 more)

### Community 1 - "accent-switcher.tsx"
Cohesion: 0.18
Nodes (14): WaveField(), choose(), Bounds, DragState, Side, ThemeToggle(), toggle(), ACCENT_KEY (+6 more)

### Community 2 - "content-types.ts"
Cohesion: 0.05
Nodes (38): metadata, generateMetadata(), SummaryGroup, CtaBand(), Faq(), Feature, FeatureCards(), LinkCardGrid() (+30 more)

### Community 3 - "growth-audit-form.tsx"
Cohesion: 0.07
Nodes (32): ContactForm(), Errors, nextSteps, services, Status, Field(), Input(), Select() (+24 more)

### Community 4 - "blog/[slug]/page.tsx"
Cohesion: 0.26
Nodes (10): Page(), generateMetadata(), generateStaticParams(), Page(), revalidate, archivedVistrowPosts, blogPosts, getBlogPost() (+2 more)

### Community 5 - "chat/route.ts"
Cohesion: 0.08
Nodes (30): clean(), getSystemPrompt(), IncomingMessage, isRateLimited(), POST(), replySchema, requestLog, runtime (+22 more)

### Community 6 - "buildMetadata"
Cohesion: 0.13
Nodes (14): answer, faqs, metadata, values, generateMetadata(), revalidate, CUSTOM_PAGES, generateMetadata() (+6 more)

### Community 7 - "react"
Cohesion: 0.33
Nodes (5): BlogIndex(), Card, formatDate(), ReadingProgress(), react

### Community 8 - "components.json"
Cohesion: 0.11
Nodes (18): aliases, components, hooks, lib, ui, utils, registries, @react-bits (+10 more)

### Community 9 - "package.json"
Cohesion: 0.05
Nodes (41): dependencies, @anthropic-ai/sdk, cobe, framer-motion, gsap, lucide-react, motion, next (+33 more)

### Community 10 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 11 - "legal-page.tsx"
Cohesion: 0.16
Nodes (11): metadata, metadata, metadata, metadata, metadata, formatDate(), LegalPage(), slugify() (+3 more)

### Community 12 - "next"
Cohesion: 0.14
Nodes (13): faqs, metadata, routes, whatsappText, checks, faqs, metadata, steps (+5 more)

### Community 13 - "design.md (locked design system)"
Cohesion: 0.13
Nodes (17): design.md (locked design system), Atmospheric genre, CTA voice (dark pill + accent ring + arrow circle), Hallmark gate 22, Honest content rule (overrides every skill), Live-site elements not to carry over, No gradient text / accent on one word, Plus Jakarta Sans only typography (+9 more)

### Community 14 - "lucide-react"
Cohesion: 0.22
Nodes (10): include, metadata, metadata, who, metadata, ShareRow(), JsonLd(), Breadcrumbs() (+2 more)

### Community 15 - "CLAUDE.md (project instructions)"
Cohesion: 0.14
Nodes (15): .claude/CLAUDE.md (graphify skill pointer), graphify skill (/graphify trigger), CLAUDE.md (project instructions), graphify query/path/explain usage rules, grep aliased to ugrep gotcha, marketix-dev launch config (port 3000), npm run build while dev corrupts .next, No hand-drawn browser/phone/dashboard chrome (+7 more)

### Community 16 - "README.md"
Cohesion: 0.15
Nodes (14): Content in code, no CMS, lib/blog.ts async blog API, Multi-tenant review tool /r/[client], WordPress 301 redirects (next.config.mjs), Claude API client review generator (app/api/review), content/ typed TS content directory, Framer Motion, lucide-react icons (+6 more)

### Community 17 - "emails.ts"
Cohesion: 0.13
Nodes (38): GET(), clean(), cleanList(), Inquiry, isRateLimited(), POST(), requestLog, runtime (+30 more)

### Community 18 - "sitemap.ts"
Cohesion: 0.33
Nodes (5): Entry, sitemap(), locationSlugs, serviceSlugs, publishedCaseStudySlugs

### Community 19 - "pune-areas.ts"
Cohesion: 0.25
Nodes (5): dynamicParams, generateMetadata(), PuneArea, puneAreaBySlug, s

### Community 20 - "gmb-toolkit/page.tsx"
Cohesion: 0.15
Nodes (12): agreed, answer, metadata, principles, steps, metadata, BuyButton(), Props (+4 more)

### Community 21 - "Positioning guardrail (Marketix vs Vistrow)"
Cohesion: 0.22
Nodes (11): Must not look or read like Vistrow rule, Positioning guardrail (Marketix vs Vistrow), Keyword territory split with Vistrow, Marketix Studio, NAP (Balewadi High Street, Pune), Rejected: copying Vistrow sections/chrome, Rebuild goal: SEO + AEO + GEO, not AI-looking, Marketix team (+3 more)

### Community 22 - "Macrostructure family"
Cohesion: 0.20
Nodes (11): Ft5 Statement footer, Long Document macrostructure (blog, legal), Macrostructure family, Map / Diagram macrostructure (google-ads-ppc), N5 Floating pill nav, Quote-Led macrostructure (local-seo-gmb), Split Studio macrostructure, Jay Ganesh Car Accessories (Maruti Kalbhor) (+3 more)

### Community 23 - "PROJECT_CONTEXT.md"
Cohesion: 0.31
Nodes (9): Hallmark slop test before shipping UI, Never fabricate metrics/testimonials/clients rule, Design system locked decision, Rejected: Editorial ledger (Specimen fall-through), Google Maps Ranking Toolkit, Hallmark skill (Nutlope), Hallmark audit 2026-09-23 (9 critical, 8 major, 7 minor), Site map (59 routes, 79 static pages) (+1 more)

### Community 24 - "work/[slug]/page.tsx"
Cohesion: 0.15
Nodes (12): generateMetadata(), isTodo(), livePreview, Page(), caseStudies, caseStudyIndustries, caseStudyList, caseStudySlugs (+4 more)

### Community 25 - "location-detail.tsx"
Cohesion: 0.08
Nodes (28): answer, metadata, zones, generateMetadata(), AreaGlobe(), facing(), Globe(), readColours() (+20 more)

### Community 26 - "site-config.ts"
Cohesion: 0.20
Nodes (10): ChatMessage, fallback, greeting, LinkAction, Prompt, questions, topics, assistant (+2 more)

### Community 27 - "(site)/page.tsx"
Cohesion: 0.10
Nodes (18): answer, faqs, groupIcons, industryIcons, industryMeasures, metadata, serviceBlurbs, serviceIcons (+10 more)

### Community 28 - "Overnight redesign plan (started 2026-09-24)"
Cohesion: 0.25
Nodes (7): Log, Morning summary (2026-09-24, ~07:00), Overnight redesign plan (started 2026-09-24), Phase 2: Pages (redesign each in the new system), Phase 3: Site-wide verification, Progress, The creative bar

### Community 29 - "Accent violet #C82AEF"
Cohesion: 0.33
Nodes (6): Card surface (radial gradient, 24px radius), Accent violet #C82AEF, Static violet light pool + grain, Neon ring (hover/focus only), Aurora hero removed (static light pool), Rejected: gold/yellow structural accent

### Community 30 - "vercel.json"
Cohesion: 0.40
Nodes (4): buildCommand, framework, installCommand, $schema

### Community 31 - "industries.ts"
Cohesion: 0.25
Nodes (5): generateMetadata(), industries, industriesOverview, industrySlugs, IndustryContent

### Community 33 - "industries/page.tsx"
Cohesion: 0.38
Nodes (5): answer, goals, metadata, ExplorerItem, IndustryExplorer()

### Community 36 - "service-finder.tsx"
Cohesion: 0.40
Nodes (5): FinderCard, GoalId, goals, ServiceFinder(), slugOf()

### Community 40 - "footer.tsx"
Cohesion: 0.17
Nodes (10): LOGO, LOGO_LIGHT, Wordmark(), columns, group(), icons, SiteFooter(), NewsletterForm() (+2 more)

### Community 41 - "nav.tsx"
Cohesion: 0.14
Nodes (14): aboutLinks, aboutMatch, industriesNav, PanelId, plainLinks, serviceGroups, servicesNav, serviceHref() (+6 more)

### Community 42 - "app/not-found.tsx"
Cohesion: 0.19
Nodes (9): metadata, NotFound(), CardSpotlight(), SiteNav(), topics, waLink(), WhatsAppFloat(), onSubmit() (+1 more)

### Community 43 - "structured-data.ts"
Cohesion: 0.08
Nodes (55): app_globals, jakarta, metadata, RootLayout(), viewport, Page(), Page(), Page() (+47 more)

### Community 44 - "primitives.tsx"
Cohesion: 0.14
Nodes (18): runtime, groups, metadata, answer, drivers, faqs, metadata, QA (+10 more)

### Community 46 - "google-ads-ppc/page.tsx"
Cohesion: 0.15
Nodes (23): answer, audiences, faqs, hero, metadata, hero, metadata, workGroups (+15 more)

### Community 48 - "AccentSwitcher"
Cohesion: 0.47
Nodes (8): AccentSwitcher(), begin(), finish(), move(), onMouseDown(), onTouchStart(), snap(), clamp()

## Knowledge Gaps
- **276 isolated node(s):** `npx`, `metadata`, `answer`, `values`, `faqs` (+271 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 337 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `next` to `content-types.ts`, `growth-audit-form.tsx`, `blog/[slug]/page.tsx`, `chat/route.ts`, `buildMetadata`, `react`, `package.json`, `legal-page.tsx`, `lucide-react`, `emails.ts`, `sitemap.ts`, `pune-areas.ts`, `gmb-toolkit/page.tsx`, `work/[slug]/page.tsx`, `location-detail.tsx`, `site-config.ts`, `(site)/page.tsx`, `industries.ts`, `industries/page.tsx`, `service-finder.tsx`, `footer.tsx`, `nav.tsx`, `app/not-found.tsx`, `structured-data.ts`, `primitives.tsx`, `google-ads-ppc/page.tsx`?**
  _High betweenness centrality (0.211) - this node is a cross-community bridge._
- **Why does `Multi-tenant review tool /r/[client]` connect `README.md` to `chat/route.ts`, `Macrostructure family`, `PROJECT_CONTEXT.md`?**
  _High betweenness centrality (0.169) - this node is a cross-community bridge._
- **Why does `lucide-react` connect `lucide-react` to `chat-knowledge.ts`, `accent-switcher.tsx`, `content-types.ts`, `growth-audit-form.tsx`, `chat/route.ts`, `buildMetadata`, `react`, `package.json`, `next`, `gmb-toolkit/page.tsx`, `work/[slug]/page.tsx`, `location-detail.tsx`, `site-config.ts`, `(site)/page.tsx`, `industries.ts`, `industries/page.tsx`, `service-finder.tsx`, `footer.tsx`, `nav.tsx`, `app/not-found.tsx`, `primitives.tsx`, `google-ads-ppc/page.tsx`?**
  _High betweenness centrality (0.141) - this node is a cross-community bridge._
- **What connects `npx`, `metadata`, `answer` to the rest of the system?**
  _276 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `content-types.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.05456095481670929 - nodes in this community are weakly interconnected._
- **Should `growth-audit-form.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.06866002214839424 - nodes in this community are weakly interconnected._
- **Should `chat/route.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.08170731707317073 - nodes in this community are weakly interconnected._