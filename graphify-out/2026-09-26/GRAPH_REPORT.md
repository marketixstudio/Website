# Graph Report - MARKETIX WEBSITE  (2026-09-26)

## Corpus Check
- 141 files · ~103,808 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 5 file(s) not represented in the graph (top: (none) 2, .example 1, .ico 1)

## Summary
- 820 nodes · 2162 edges · 54 communities (51 shown, 3 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 34 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `04d1c87d`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- chat-knowledge.ts
- react
- content-types.ts
- growth-audit-form.tsx
- blog/[slug]/page.tsx
- review/route.ts
- (site)/page.tsx
- work.ts
- components.json
- package.json
- compilerOptions
- legal-page.tsx
- locations/page.tsx
- design.md (locked design system)
- trackLead
- CLAUDE.md (project instructions)
- README.md
- emails.ts
- industries.ts
- pune-areas.ts
- buy-button.tsx
- Positioning guardrail (Marketix vs Vistrow)
- Macrostructure family
- PROJECT_CONTEXT.md
- about/page.tsx
- locations.ts
- search-journey.tsx
- work/[slug]/page.tsx
- Overnight redesign plan (started 2026-09-24)
- Accent violet #C82AEF
- vercel.json
- contact-form.tsx
- next.config.mjs
- market-visuals.tsx
- shadcn
- postcss.config.mjs
- service-finder.tsx
- pricing/page.tsx
- service-detail.tsx
- next
- footer.tsx
- nav.tsx
- app/not-found.tsx
- structured-data.ts
- primitives.tsx
- seo.ts
- google-ads-ppc/page.tsx
- app/layout.tsx
- AccentSwitcher
- chat-widget.tsx
- sitemap.ts
- framer-motion
- industries/page.tsx
- analytics.ts

## God Nodes (most connected - your core abstractions)
1. `next` - 68 edges
2. `lucide-react` - 62 edges
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
- `Non-negotiable rules` --references--> `FillHeading()`  [INFERRED]
  docs/REDESIGN_PLAN.md → components/v2/fill-heading.tsx
- `Phase 1: Chrome and routing` --references--> `SiteFooter()`  [INFERRED]
  docs/REDESIGN_PLAN.md → components/v2/footer.tsx
- `Non-negotiable rules` --references--> `Cta()`  [INFERRED]
  docs/REDESIGN_PLAN.md → components/v2/primitives.tsx
- `Non-negotiable rules` --references--> `TextLink()`  [INFERRED]
  docs/REDESIGN_PLAN.md → components/v2/primitives.tsx

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **v2 pilot rebuild in new design system** — docs_project_context_v2_rebuild, design_map_diagram, design_quote_led, design_n5_floating_pill_nav, design_ft5_statement_footer [EXTRACTED 1.00]
- **Anti-AI-slop design decisions (Aurora, eyebrows, column footer removed)** — docs_project_context_aurora_removed, docs_project_context_eyebrows_removed, docs_project_context_statement_footer_decision, design_light_pool, design_section_labels_off, design_ft5_statement_footer [INFERRED 0.85]
- **Differentiation from sister brand Vistrow** — claude_not_like_vistrow_rule, design_positioning_guardrail, docs_project_context_keyword_territory_split, docs_project_context_unpublish_vistrow_blog, docs_project_context_rejected_vistrow_copy [INFERRED 0.85]

## Communities (54 total, 3 thin omitted)

### Community 0 - "chat-knowledge.ts"
Cohesion: 0.26
Nodes (10): GET(), line(), revalidate, industryList, locationList, puneAreas, serviceList, servicesOverview (+2 more)

### Community 1 - "react"
Cohesion: 0.21
Nodes (13): choose(), Bounds, DragState, Side, ThemeToggle(), toggle(), ACCENT_KEY, AccentKey (+5 more)

### Community 2 - "content-types.ts"
Cohesion: 0.05
Nodes (38): generateMetadata(), SummaryGroup, CtaBand(), Faq(), Feature, FeatureCards(), LinkCardGrid(), Outcome (+30 more)

### Community 3 - "growth-audit-form.tsx"
Cohesion: 0.20
Nodes (7): auditSteps, budgets, channelOptions, industries, serviceOptions, confettiDots, SuccessCelebration()

### Community 4 - "blog/[slug]/page.tsx"
Cohesion: 0.23
Nodes (11): Page(), generateMetadata(), generateStaticParams(), Page(), revalidate, sitemap(), archivedVistrowPosts, blogPosts (+3 more)

### Community 5 - "review/route.ts"
Cohesion: 0.12
Nodes (18): hits, POST(), rateLimited(), runtime, ReviewGenerator(), Status, reviewClientList, reviewClients (+10 more)

### Community 6 - "(site)/page.tsx"
Cohesion: 0.15
Nodes (11): answer, faqs, groupIcons, industryIcons, industryMeasures, metadata, serviceBlurbs, serviceIcons (+3 more)

### Community 7 - "work.ts"
Cohesion: 0.22
Nodes (6): caseStudies, caseStudyIndustries, caseStudyList, caseStudySlugs, publishedCaseStudies, workOverview

### Community 8 - "components.json"
Cohesion: 0.11
Nodes (18): aliases, components, hooks, lib, ui, utils, registries, @react-bits (+10 more)

### Community 9 - "package.json"
Cohesion: 0.05
Nodes (38): dependencies, @anthropic-ai/sdk, framer-motion, gsap, lucide-react, motion, next, react (+30 more)

### Community 10 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 11 - "legal-page.tsx"
Cohesion: 0.16
Nodes (11): metadata, metadata, metadata, metadata, metadata, formatDate(), LegalPage(), slugify() (+3 more)

### Community 12 - "locations/page.tsx"
Cohesion: 0.17
Nodes (13): include, metadata, faqs, metadata, routes, whatsappText, answer, metadata (+5 more)

### Community 13 - "design.md (locked design system)"
Cohesion: 0.13
Nodes (17): design.md (locked design system), Atmospheric genre, CTA voice (dark pill + accent ring + arrow circle), Hallmark gate 22, Honest content rule (overrides every skill), Live-site elements not to carry over, No gradient text / accent on one word, Plus Jakarta Sans only typography (+9 more)

### Community 14 - "trackLead"
Cohesion: 0.38
Nodes (6): ContactForm(), GrowthAuditForm(), ChatWidget(), onSubmit(), send(), trackLead()

### Community 15 - "CLAUDE.md (project instructions)"
Cohesion: 0.14
Nodes (15): .claude/CLAUDE.md (graphify skill pointer), graphify skill (/graphify trigger), CLAUDE.md (project instructions), graphify query/path/explain usage rules, grep aliased to ugrep gotcha, marketix-dev launch config (port 3000), npm run build while dev corrupts .next, No hand-drawn browser/phone/dashboard chrome (+7 more)

### Community 16 - "README.md"
Cohesion: 0.15
Nodes (14): Content in code, no CMS, lib/blog.ts async blog API, Multi-tenant review tool /r/[client], WordPress 301 redirects (next.config.mjs), Claude API client review generator (app/api/review), content/ typed TS content directory, Framer Motion, lucide-react icons (+6 more)

### Community 17 - "emails.ts"
Cohesion: 0.09
Nodes (52): clean(), getSystemPrompt(), IncomingMessage, isRateLimited(), POST(), replySchema, requestLog, runtime (+44 more)

### Community 18 - "industries.ts"
Cohesion: 0.25
Nodes (5): generateMetadata(), industries, industriesOverview, industrySlugs, IndustryContent

### Community 19 - "pune-areas.ts"
Cohesion: 0.25
Nodes (5): dynamicParams, generateMetadata(), PuneArea, puneAreaBySlug, s

### Community 20 - "buy-button.tsx"
Cohesion: 0.40
Nodes (3): BuyButton(), Props, Window

### Community 21 - "Positioning guardrail (Marketix vs Vistrow)"
Cohesion: 0.22
Nodes (11): Must not look or read like Vistrow rule, Positioning guardrail (Marketix vs Vistrow), Keyword territory split with Vistrow, Marketix Studio, NAP (Balewadi High Street, Pune), Rejected: copying Vistrow sections/chrome, Rebuild goal: SEO + AEO + GEO, not AI-looking, Marketix team (+3 more)

### Community 22 - "Macrostructure family"
Cohesion: 0.20
Nodes (11): Ft5 Statement footer, Long Document macrostructure (blog, legal), Macrostructure family, Map / Diagram macrostructure (google-ads-ppc), N5 Floating pill nav, Quote-Led macrostructure (local-seo-gmb), Split Studio macrostructure, Jay Ganesh Car Accessories (Maruti Kalbhor) (+3 more)

### Community 23 - "PROJECT_CONTEXT.md"
Cohesion: 0.31
Nodes (9): Hallmark slop test before shipping UI, Never fabricate metrics/testimonials/clients rule, Design system locked decision, Rejected: Editorial ledger (Specimen fall-through), Google Maps Ranking Toolkit, Hallmark skill (Nutlope), Hallmark audit 2026-09-23 (9 critical, 8 major, 7 minor), Site map (59 routes, 79 static pages) (+1 more)

### Community 24 - "about/page.tsx"
Cohesion: 0.20
Nodes (13): answer, faqs, metadata, values, metadata, who, initials(), metadata (+5 more)

### Community 25 - "locations.ts"
Cohesion: 0.15
Nodes (10): generateMetadata(), globalLocations, globalProcess, globalServices, indiaLocations, indiaProcess, indiaServices, locations (+2 more)

### Community 26 - "search-journey.tsx"
Cohesion: 0.33
Nodes (5): loops, queries, SearchJourney(), Stage, stages

### Community 27 - "work/[slug]/page.tsx"
Cohesion: 0.19
Nodes (11): generateMetadata(), isTodo(), livePreview, Page(), clientLogos, clientStats, NOTE: the old WordPress /testimonials/ page still carries the theme's demo, testimonials (+3 more)

### Community 28 - "Overnight redesign plan (started 2026-09-24)"
Cohesion: 0.22
Nodes (8): Log, Morning summary (2026-09-24, ~07:00), Non-negotiable rules, Overnight redesign plan (started 2026-09-24), Phase 2: Pages (redesign each in the new system), Phase 3: Site-wide verification, Progress, The creative bar

### Community 29 - "Accent violet #C82AEF"
Cohesion: 0.33
Nodes (6): Card surface (radial gradient, 24px radius), Accent violet #C82AEF, Static violet light pool + grain, Neon ring (hover/focus only), Aurora hero removed (static light pool), Rejected: gold/yellow structural accent

### Community 30 - "vercel.json"
Cohesion: 0.40
Nodes (4): buildCommand, framework, installCommand, $schema

### Community 31 - "contact-form.tsx"
Cohesion: 0.25
Nodes (8): Errors, nextSteps, services, Status, Field(), Input(), Select(), Textarea()

### Community 33 - "market-visuals.tsx"
Cohesion: 0.46
Nodes (7): EASE, fmt(), HoursOverlap(), MarketBoard(), overlap(), Span, wrap()

### Community 36 - "service-finder.tsx"
Cohesion: 0.40
Nodes (5): FinderCard, GoalId, goals, ServiceFinder(), slugOf()

### Community 37 - "pricing/page.tsx"
Cohesion: 0.14
Nodes (13): runtime, answer, drivers, faqs, metadata, ScopeBuilder(), ScopeOption, DigitalProduct (+5 more)

### Community 38 - "service-detail.tsx"
Cohesion: 0.17
Nodes (12): agreed, answer, metadata, principles, steps, metadata, AnswerCard(), framing (+4 more)

### Community 39 - "next"
Cohesion: 0.27
Nodes (10): routes, hero, metadata, workGroups, framing, AreaMap(), ServiceHero(), ServiceHeroContent (+2 more)

### Community 40 - "footer.tsx"
Cohesion: 0.15
Nodes (12): columns, group(), icons, SiteFooter(), NewsletterForm(), Status, footerNav, NavChild (+4 more)

### Community 41 - "nav.tsx"
Cohesion: 0.16
Nodes (13): LOGO, LOGO_LIGHT, Wordmark(), aboutLinks, aboutMatch, industriesNav, PanelId, plainLinks (+5 more)

### Community 42 - "app/not-found.tsx"
Cohesion: 0.22
Nodes (7): metadata, NotFound(), CardSpotlight(), topics, waLink(), WhatsAppFloat(), onSubmit()

### Community 43 - "structured-data.ts"
Cohesion: 0.08
Nodes (54): Page(), Page(), Page(), Page(), Page(), countOf(), Page(), Page() (+46 more)

### Community 44 - "primitives.tsx"
Cohesion: 0.25
Nodes (10): groups, metadata, checks, faqs, metadata, steps, QA, FaqExplorer() (+2 more)

### Community 45 - "seo.ts"
Cohesion: 0.21
Nodes (8): generateMetadata(), revalidate, CUSTOM_PAGES, generateMetadata(), services, buildMetadata(), SeoMetadata, siteTagline

### Community 46 - "google-ads-ppc/page.tsx"
Cohesion: 0.20
Nodes (9): answer, audiences, faqs, hero, metadata, answer, metadata, FillHeading() (+1 more)

### Community 47 - "app/layout.tsx"
Cohesion: 0.20
Nodes (9): app_globals, jakarta, metadata, RootLayout(), viewport, GoogleAnalytics(), organizationSchema, websiteSchema (+1 more)

### Community 48 - "AccentSwitcher"
Cohesion: 0.47
Nodes (8): AccentSwitcher(), begin(), finish(), move(), onMouseDown(), onTouchStart(), snap(), clamp()

### Community 49 - "chat-widget.tsx"
Cohesion: 0.22
Nodes (8): ChatMessage, fallback, greeting, LinkAction, Prompt, questions, topics, assistant

### Community 50 - "sitemap.ts"
Cohesion: 0.25
Nodes (5): Entry, locationSlugs, serviceSlugs, publishedCaseStudySlugs, siteUrl

### Community 51 - "framer-motion"
Cohesion: 0.25
Nodes (6): DemandMap(), EASE, sources, Funnel(), Step, framer-motion

### Community 52 - "industries/page.tsx"
Cohesion: 0.38
Nodes (5): answer, goals, metadata, ExplorerItem, IndustryExplorer()

### Community 53 - "analytics.ts"
Cohesion: 0.50
Nodes (3): GtagCommand, LeadSource, Window

## Knowledge Gaps
- **275 isolated node(s):** `npx`, `metadata`, `answer`, `values`, `faqs` (+270 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 335 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `next` to `content-types.ts`, `blog/[slug]/page.tsx`, `review/route.ts`, `(site)/page.tsx`, `package.json`, `legal-page.tsx`, `locations/page.tsx`, `emails.ts`, `industries.ts`, `pune-areas.ts`, `buy-button.tsx`, `about/page.tsx`, `locations.ts`, `search-journey.tsx`, `work/[slug]/page.tsx`, `market-visuals.tsx`, `service-finder.tsx`, `pricing/page.tsx`, `service-detail.tsx`, `footer.tsx`, `nav.tsx`, `app/not-found.tsx`, `structured-data.ts`, `primitives.tsx`, `seo.ts`, `google-ads-ppc/page.tsx`, `app/layout.tsx`, `chat-widget.tsx`, `sitemap.ts`, `industries/page.tsx`?**
  _High betweenness centrality (0.211) - this node is a cross-community bridge._
- **Why does `Multi-tenant review tool /r/[client]` connect `README.md` to `review/route.ts`, `Macrostructure family`, `PROJECT_CONTEXT.md`?**
  _High betweenness centrality (0.171) - this node is a cross-community bridge._
- **Why does `lucide-react` connect `next` to `chat-knowledge.ts`, `react`, `content-types.ts`, `growth-audit-form.tsx`, `review/route.ts`, `(site)/page.tsx`, `package.json`, `locations/page.tsx`, `industries.ts`, `buy-button.tsx`, `about/page.tsx`, `locations.ts`, `search-journey.tsx`, `work/[slug]/page.tsx`, `contact-form.tsx`, `service-finder.tsx`, `pricing/page.tsx`, `service-detail.tsx`, `footer.tsx`, `nav.tsx`, `app/not-found.tsx`, `structured-data.ts`, `primitives.tsx`, `seo.ts`, `google-ads-ppc/page.tsx`, `chat-widget.tsx`, `framer-motion`, `industries/page.tsx`?**
  _High betweenness centrality (0.143) - this node is a cross-community bridge._
- **What connects `npx`, `metadata`, `answer` to the rest of the system?**
  _275 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `content-types.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.05179982440737489 - nodes in this community are weakly interconnected._
- **Should `review/route.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.1164021164021164 - nodes in this community are weakly interconnected._
- **Should `components.json` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._