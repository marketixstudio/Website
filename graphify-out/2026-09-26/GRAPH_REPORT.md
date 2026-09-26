# Graph Report - MARKETIX WEBSITE  (2026-09-26)

## Corpus Check
- 148 files · ~115,047 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 5 file(s) not represented in the graph (top: (none) 2, .example 1, .ico 1)

## Summary
- 878 nodes · 2275 edges · 52 communities (47 shown, 5 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 34 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `214189e0`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- ElectricLogo.tsx
- accent-switcher.tsx
- location-detail.tsx
- chat-widget.tsx
- blog/page.tsx
- review/route.ts
- growth-audit-form.tsx
- team/page.tsx
- components.json
- package.json
- compilerOptions
- nav.tsx
- google-ads-ppc/page.tsx
- design.md (locked design system)
- content-types.ts
- CLAUDE.md (project instructions)
- README.md
- emails.ts
- WebThreads.tsx
- sitemap.ts
- work/[slug]/page.tsx
- Positioning guardrail (Marketix vs Vistrow)
- Macrostructure family
- PROJECT_CONTEXT.md
- lucide-react
- app/layout.tsx
- about/page.tsx
- (site)/page.tsx
- app/not-found.tsx
- Accent violet #C82AEF
- vercel.json
- ref_node_fs
- next.config.mjs
- contact/page.tsx
- shadcn
- postcss.config.mjs
- gmb-toolkit/page.tsx
- react
- industries.ts
- service-finder.tsx
- locations.ts
- footer.tsx
- checkout/route.ts
- graph
- structured-data.ts
- seo.ts
- next
- AccentSwitcher
- globe.tsx
- Overnight redesign plan (started 2026-09-24)
- buildMetadata
- (site)/not-found.tsx

## God Nodes (most connected - your core abstractions)
1. `next` - 69 edges
2. `lucide-react` - 62 edges
3. `graph()` - 57 edges
4. `breadcrumbSchema()` - 54 edges
5. `buildMetadata()` - 42 edges
6. `faqSchema()` - 40 edges
7. `answerSchema()` - 32 edges
8. `react` - 30 edges
9. `JsonLd()` - 29 edges
10. `TextLink()` - 27 edges

## Surprising Connections (you probably didn't know these)
- `Phase 2: Pages (redesign each in the new system)` --references--> `ServiceHero()`  [INFERRED]
  docs/REDESIGN_PLAN.md → components/v2/service-hero.tsx
- `Non-negotiable rules` --references--> `FillHeading()`  [INFERRED]
  docs/REDESIGN_PLAN.md → components/v2/fill-heading.tsx
- `Phase 1: Chrome and routing` --references--> `SiteFooter()`  [INFERRED]
  docs/REDESIGN_PLAN.md → components/v2/footer.tsx
- `Phase 1: Chrome and routing` --references--> `SiteNav()`  [INFERRED]
  docs/REDESIGN_PLAN.md → components/v2/nav.tsx
- `SEO / AEO / GEO checklist (every indexable page)` --references--> `AnswerCard()`  [INFERRED]
  docs/REDESIGN_PLAN.md → components/v2/primitives.tsx

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **v2 pilot rebuild in new design system** — docs_project_context_v2_rebuild, design_map_diagram, design_quote_led, design_n5_floating_pill_nav, design_ft5_statement_footer [EXTRACTED 1.00]
- **Anti-AI-slop design decisions (Aurora, eyebrows, column footer removed)** — docs_project_context_aurora_removed, docs_project_context_eyebrows_removed, docs_project_context_statement_footer_decision, design_light_pool, design_section_labels_off, design_ft5_statement_footer [INFERRED 0.85]
- **Differentiation from sister brand Vistrow** — claude_not_like_vistrow_rule, design_positioning_guardrail, docs_project_context_keyword_territory_split, docs_project_context_unpublish_vistrow_blog, docs_project_context_rejected_vistrow_copy [INFERRED 0.85]

## Communities (52 total, 5 thin omitted)

### Community 0 - "ElectricLogo.tsx"
Cohesion: 0.15
Nodes (19): blurGrid(), blurLine(), ElectricLogo(), ElectricLogoProps, Focus, hexToRgb(), Point, Pulse (+11 more)

### Community 1 - "accent-switcher.tsx"
Cohesion: 0.22
Nodes (12): choose(), Bounds, DragState, Side, ThemeToggle(), toggle(), ACCENT_KEY, AccentKey (+4 more)

### Community 2 - "location-detail.tsx"
Cohesion: 0.23
Nodes (11): answer, metadata, zones, Breadcrumbs(), Crumb, AreaGlobe(), framing, Cta() (+3 more)

### Community 3 - "chat-widget.tsx"
Cohesion: 0.22
Nodes (8): ChatMessage, fallback, greeting, LinkAction, Prompt, questions, topics, assistant

### Community 4 - "blog/page.tsx"
Cohesion: 0.30
Nodes (9): generateMetadata(), Page(), revalidate, generateMetadata(), generateStaticParams(), Page(), revalidate, getBlogPost() (+1 more)

### Community 5 - "review/route.ts"
Cohesion: 0.12
Nodes (18): hits, POST(), rateLimited(), runtime, ReviewGenerator(), Status, reviewClientList, reviewClients (+10 more)

### Community 6 - "growth-audit-form.tsx"
Cohesion: 0.06
Nodes (39): ContactForm(), Errors, nextSteps, services, Status, Field(), Input(), Select() (+31 more)

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

### Community 11 - "nav.tsx"
Cohesion: 0.16
Nodes (12): LOGO, LOGO_LIGHT, Wordmark(), aboutLinks, aboutMatch, industriesNav, PanelId, plainLinks (+4 more)

### Community 12 - "google-ads-ppc/page.tsx"
Cohesion: 0.12
Nodes (23): answer, audiences, faqs, hero, metadata, hero, metadata, workGroups (+15 more)

### Community 13 - "design.md (locked design system)"
Cohesion: 0.13
Nodes (17): design.md (locked design system), Atmospheric genre, CTA voice (dark pill + accent ring + arrow circle), Hallmark gate 22, Honest content rule (overrides every skill), Live-site elements not to carry over, No gradient text / accent on one word, Plus Jakarta Sans only typography (+9 more)

### Community 14 - "content-types.ts"
Cohesion: 0.06
Nodes (35): metadata, generateMetadata(), SummaryGroup, CtaBand(), Faq(), Feature, FeatureCards(), LinkCardGrid() (+27 more)

### Community 15 - "CLAUDE.md (project instructions)"
Cohesion: 0.14
Nodes (15): .claude/CLAUDE.md (graphify skill pointer), graphify skill (/graphify trigger), CLAUDE.md (project instructions), graphify query/path/explain usage rules, grep aliased to ugrep gotcha, marketix-dev launch config (port 3000), npm run build while dev corrupts .next, No hand-drawn browser/phone/dashboard chrome (+7 more)

### Community 16 - "README.md"
Cohesion: 0.15
Nodes (14): Content in code, no CMS, lib/blog.ts async blog API, Multi-tenant review tool /r/[client], WordPress 301 redirects (next.config.mjs), Claude API client review generator (app/api/review), content/ typed TS content directory, Framer Motion, lucide-react icons (+6 more)

### Community 17 - "emails.ts"
Cohesion: 0.09
Nodes (51): clean(), getSystemPrompt(), IncomingMessage, isRateLimited(), POST(), replySchema, requestLog, runtime (+43 more)

### Community 18 - "WebThreads.tsx"
Cohesion: 0.21
Nodes (10): HeroThreads(), toHex(), ctxMap, FAN_MODE, FanMode, hexToRgb(), WebThreads(), WebThreadsCtx (+2 more)

### Community 19 - "sitemap.ts"
Cohesion: 0.16
Nodes (10): dynamicParams, generateMetadata(), Entry, sitemap(), legalSlugs, PuneArea, puneAreaBySlug, puneAreas (+2 more)

### Community 20 - "work/[slug]/page.tsx"
Cohesion: 0.08
Nodes (25): metadata, generateMetadata(), isTodo(), livePreview, Page(), archivedVistrowPosts, blogPosts, clientLogos (+17 more)

### Community 21 - "Positioning guardrail (Marketix vs Vistrow)"
Cohesion: 0.22
Nodes (11): Must not look or read like Vistrow rule, Positioning guardrail (Marketix vs Vistrow), Keyword territory split with Vistrow, Marketix Studio, NAP (Balewadi High Street, Pune), Rejected: copying Vistrow sections/chrome, Rebuild goal: SEO + AEO + GEO, not AI-looking, Marketix team (+3 more)

### Community 22 - "Macrostructure family"
Cohesion: 0.20
Nodes (11): Ft5 Statement footer, Long Document macrostructure (blog, legal), Macrostructure family, Map / Diagram macrostructure (google-ads-ppc), N5 Floating pill nav, Quote-Led macrostructure (local-seo-gmb), Split Studio macrostructure, Jay Ganesh Car Accessories (Maruti Kalbhor) (+3 more)

### Community 23 - "PROJECT_CONTEXT.md"
Cohesion: 0.31
Nodes (9): Hallmark slop test before shipping UI, Never fabricate metrics/testimonials/clients rule, Design system locked decision, Rejected: Editorial ledger (Specimen fall-through), Google Maps Ranking Toolkit, Hallmark skill (Nutlope), Hallmark audit 2026-09-23 (9 critical, 8 major, 7 minor), Site map (59 routes, 79 static pages) (+1 more)

### Community 24 - "lucide-react"
Cohesion: 0.21
Nodes (11): answer, goals, metadata, ShareRow(), ExplorerItem, IndustryExplorer(), BlogPostPage(), headingId() (+3 more)

### Community 25 - "app/layout.tsx"
Cohesion: 0.20
Nodes (9): app_globals, jakarta, metadata, RootLayout(), viewport, GoogleAnalytics(), organizationSchema, websiteSchema (+1 more)

### Community 26 - "about/page.tsx"
Cohesion: 0.13
Nodes (22): answer, faqs, metadata, values, groups, metadata, answer, drivers (+14 more)

### Community 27 - "(site)/page.tsx"
Cohesion: 0.08
Nodes (28): answer, faqs, groupIcons, industryIcons, industryMeasures, metadata, serviceBlurbs, serviceIcons (+20 more)

### Community 28 - "app/not-found.tsx"
Cohesion: 0.27
Nodes (6): metadata, CardSpotlight(), SiteNav(), waLink(), WhatsAppFloat(), onSubmit()

### Community 29 - "Accent violet #C82AEF"
Cohesion: 0.33
Nodes (6): Card surface (radial gradient, 24px radius), Accent violet #C82AEF, Static violet light pool + grain, Neon ring (hover/focus only), Aurora hero removed (static light pool), Rejected: gold/yellow structural accent

### Community 30 - "vercel.json"
Cohesion: 0.40
Nodes (4): buildCommand, framework, installCommand, $schema

### Community 33 - "contact/page.tsx"
Cohesion: 0.24
Nodes (7): faqs, metadata, routes, whatsappText, topics, business, fullAddress

### Community 36 - "gmb-toolkit/page.tsx"
Cohesion: 0.19
Nodes (11): agreed, answer, metadata, principles, steps, countOf(), metadata, Page() (+3 more)

### Community 37 - "react"
Cohesion: 0.18
Nodes (8): BlogIndex(), Card, formatDate(), ReadingProgress(), BuyButton(), Props, Window, react

### Community 38 - "industries.ts"
Cohesion: 0.20
Nodes (7): generateMetadata(), industries, industriesOverview, industryList, industrySlugs, IndustryContent, OverviewContent

### Community 39 - "service-finder.tsx"
Cohesion: 0.40
Nodes (5): FinderCard, GoalId, goals, ServiceFinder(), slugOf()

### Community 40 - "locations.ts"
Cohesion: 0.14
Nodes (11): generateMetadata(), globalLocations, globalProcess, globalServices, indiaLocations, indiaProcess, indiaServices, locations (+3 more)

### Community 41 - "footer.tsx"
Cohesion: 0.24
Nodes (7): columns, group(), icons, SiteFooter(), NewsletterForm(), Status, socialProfiles

### Community 43 - "graph"
Cohesion: 0.21
Nodes (30): Page(), Page(), Page(), Page(), Page(), Page(), Page(), Page() (+22 more)

### Community 44 - "structured-data.ts"
Cohesion: 0.12
Nodes (17): include, metadata, checks, faqs, metadata, steps, metadata, who (+9 more)

### Community 45 - "seo.ts"
Cohesion: 0.27
Nodes (6): GET(), line(), revalidate, SeoMetadata, siteTagline, siteUrl

### Community 46 - "next"
Cohesion: 0.18
Nodes (11): metadata, metadata, metadata, metadata, metadata, formatDate(), LegalPage(), slugify() (+3 more)

### Community 47 - "AccentSwitcher"
Cohesion: 0.47
Nodes (8): AccentSwitcher(), begin(), finish(), move(), onMouseDown(), onTouchStart(), snap(), clamp()

### Community 48 - "globe.tsx"
Cohesion: 0.33
Nodes (7): facing(), Globe(), readColours(), cityCoords, LatLng, PUNE, cobe

### Community 49 - "Overnight redesign plan (started 2026-09-24)"
Cohesion: 0.25
Nodes (7): Log, Morning summary (2026-09-24, ~07:00), Overnight redesign plan (started 2026-09-24), Phase 2: Pages (redesign each in the new system), Phase 3: Site-wide verification, Progress, The creative bar

### Community 50 - "buildMetadata"
Cohesion: 0.40
Nodes (3): CUSTOM_PAGES, generateMetadata(), buildMetadata()

### Community 51 - "(site)/not-found.tsx"
Cohesion: 0.50
Nodes (3): NotFound(), routes, ElectricMonogram()

## Knowledge Gaps
- **295 isolated node(s):** `npx`, `metadata`, `answer`, `values`, `faqs` (+290 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 356 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `next` to `location-detail.tsx`, `chat-widget.tsx`, `blog/page.tsx`, `review/route.ts`, `growth-audit-form.tsx`, `team/page.tsx`, `package.json`, `nav.tsx`, `google-ads-ppc/page.tsx`, `content-types.ts`, `emails.ts`, `sitemap.ts`, `work/[slug]/page.tsx`, `lucide-react`, `app/layout.tsx`, `about/page.tsx`, `(site)/page.tsx`, `app/not-found.tsx`, `contact/page.tsx`, `gmb-toolkit/page.tsx`, `react`, `industries.ts`, `service-finder.tsx`, `locations.ts`, `footer.tsx`, `graph`, `structured-data.ts`, `seo.ts`, `buildMetadata`, `(site)/not-found.tsx`?**
  _High betweenness centrality (0.204) - this node is a cross-community bridge._
- **Why does `Multi-tenant review tool /r/[client]` connect `README.md` to `review/route.ts`, `Macrostructure family`, `PROJECT_CONTEXT.md`?**
  _High betweenness centrality (0.162) - this node is a cross-community bridge._
- **Why does `lucide-react` connect `lucide-react` to `accent-switcher.tsx`, `location-detail.tsx`, `chat-widget.tsx`, `blog/page.tsx`, `review/route.ts`, `growth-audit-form.tsx`, `team/page.tsx`, `package.json`, `nav.tsx`, `google-ads-ppc/page.tsx`, `content-types.ts`, `work/[slug]/page.tsx`, `about/page.tsx`, `(site)/page.tsx`, `contact/page.tsx`, `gmb-toolkit/page.tsx`, `react`, `industries.ts`, `service-finder.tsx`, `locations.ts`, `footer.tsx`, `graph`, `structured-data.ts`, `(site)/not-found.tsx`?**
  _High betweenness centrality (0.131) - this node is a cross-community bridge._
- **What connects `npx`, `metadata`, `answer` to the rest of the system?**
  _295 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `ElectricLogo.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.14736842105263157 - nodes in this community are weakly interconnected._
- **Should `review/route.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.1164021164021164 - nodes in this community are weakly interconnected._
- **Should `growth-audit-form.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.058069381598793365 - nodes in this community are weakly interconnected._