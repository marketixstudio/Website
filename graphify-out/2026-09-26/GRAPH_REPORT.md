# Graph Report - MARKETIX WEBSITE  (2026-09-26)

## Corpus Check
- 139 files · ~102,975 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 5 file(s) not represented in the graph (top: (none) 2, .example 1, .ico 1)

## Summary
- 813 nodes · 2146 edges · 48 communities (45 shown, 3 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 34 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- nav.tsx
- accent-switcher.tsx
- reveal.tsx
- react
- site-config.ts
- chat/route.ts
- work/[slug]/page.tsx
- next
- components.json
- package.json
- compilerOptions
- legal-page.tsx
- graph
- design.md (locked design system)
- chat-knowledge.ts
- CLAUDE.md (project instructions)
- README.md
- emails.ts
- about/page.tsx
- footer.tsx
- (site)/page.tsx
- Positioning guardrail (Marketix vs Vistrow)
- Macrostructure family
- PROJECT_CONTEXT.md
- structured-data.ts
- locations/page.tsx
- app/not-found.tsx
- chat-widget.tsx
- Overnight redesign plan (started 2026-09-24)
- Accent violet #C82AEF
- vercel.json
- json-ld.tsx
- next.config.mjs
- faq/page.tsx
- shadcn
- postcss.config.mjs
- tools/[slug]/page.tsx
- review-clients.ts
- content-types.ts
- seo.ts
- sitemap.ts
- buildMetadata
- industries.ts
- pune-areas.ts
- blog-post-page.tsx
- pricing/page.tsx
- market-visuals.tsx
- lib/blog.ts

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
- `Phase 1: Chrome and routing` --references--> `serviceHref()`  [INFERRED]
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

## Communities (48 total, 3 thin omitted)

### Community 0 - "nav.tsx"
Cohesion: 0.18
Nodes (10): LOGO, LOGO_LIGHT, Wordmark(), aboutLinks, aboutMatch, industriesNav, PanelId, plainLinks (+2 more)

### Community 1 - "accent-switcher.tsx"
Cohesion: 0.14
Nodes (21): WaveField(), AccentSwitcher(), begin(), choose(), finish(), move(), onMouseDown(), onTouchStart() (+13 more)

### Community 2 - "reveal.tsx"
Cohesion: 0.14
Nodes (11): SummaryGroup, Feature, FeatureCards(), LinkCardGrid(), Outcome, Step, Steps(), Reveal() (+3 more)

### Community 3 - "react"
Cohesion: 0.06
Nodes (38): ContactForm(), Errors, nextSteps, services, Status, Field(), Input(), Select() (+30 more)

### Community 4 - "site-config.ts"
Cohesion: 0.31
Nodes (6): topics, waLink(), WhatsAppFloat(), onSubmit(), business, fullAddress

### Community 5 - "chat/route.ts"
Cohesion: 0.14
Nodes (24): clean(), getSystemPrompt(), IncomingMessage, isRateLimited(), POST(), replySchema, requestLog, runtime (+16 more)

### Community 6 - "work/[slug]/page.tsx"
Cohesion: 0.11
Nodes (20): metadata, generateMetadata(), isTodo(), livePreview, Page(), Step, StepRail(), clientLogos (+12 more)

### Community 7 - "next"
Cohesion: 0.15
Nodes (12): BlogIndex(), Card, formatDate(), CtaBand(), CtaLink, BuyButton(), Props, Window (+4 more)

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

### Community 12 - "graph"
Cohesion: 0.08
Nodes (69): Page(), Page(), Page(), Page(), Page(), countOf(), metadata, Page() (+61 more)

### Community 13 - "design.md (locked design system)"
Cohesion: 0.13
Nodes (17): design.md (locked design system), Atmospheric genre, CTA voice (dark pill + accent ring + arrow circle), Hallmark gate 22, Honest content rule (overrides every skill), Live-site elements not to carry over, No gradient text / accent on one word, Plus Jakarta Sans only typography (+9 more)

### Community 14 - "chat-knowledge.ts"
Cohesion: 0.26
Nodes (9): GET(), line(), revalidate, locationList, serviceList, servicesOverview, keyPages, VALID_CHAT_LINKS (+1 more)

### Community 15 - "CLAUDE.md (project instructions)"
Cohesion: 0.14
Nodes (15): .claude/CLAUDE.md (graphify skill pointer), graphify skill (/graphify trigger), CLAUDE.md (project instructions), graphify query/path/explain usage rules, grep aliased to ugrep gotcha, marketix-dev launch config (port 3000), npm run build while dev corrupts .next, No hand-drawn browser/phone/dashboard chrome (+7 more)

### Community 16 - "README.md"
Cohesion: 0.15
Nodes (14): Content in code, no CMS, lib/blog.ts async blog API, Multi-tenant review tool /r/[client], WordPress 301 redirects (next.config.mjs), Claude API client review generator (app/api/review), content/ typed TS content directory, Framer Motion, lucide-react icons (+6 more)

### Community 17 - "emails.ts"
Cohesion: 0.15
Nodes (35): GET(), clean(), cleanList(), Inquiry, isRateLimited(), POST(), requestLog, runtime (+27 more)

### Community 18 - "about/page.tsx"
Cohesion: 0.17
Nodes (12): answer, faqs, metadata, values, initials(), metadata, Portrait(), TODO: photo not found on the live site under the expected filename - send it… (+4 more)

### Community 19 - "footer.tsx"
Cohesion: 0.18
Nodes (9): columns, group(), icons, SiteFooter(), SiteNav(), NewsletterForm(), Status, Phase 1: Chrome and routing (+1 more)

### Community 20 - "(site)/page.tsx"
Cohesion: 0.10
Nodes (19): answer, faqs, groupIcons, industryIcons, industryMeasures, metadata, serviceBlurbs, serviceIcons (+11 more)

### Community 21 - "Positioning guardrail (Marketix vs Vistrow)"
Cohesion: 0.22
Nodes (11): Must not look or read like Vistrow rule, Positioning guardrail (Marketix vs Vistrow), Keyword territory split with Vistrow, Marketix Studio, NAP (Balewadi High Street, Pune), Rejected: copying Vistrow sections/chrome, Rebuild goal: SEO + AEO + GEO, not AI-looking, Marketix team (+3 more)

### Community 22 - "Macrostructure family"
Cohesion: 0.20
Nodes (11): Ft5 Statement footer, Long Document macrostructure (blog, legal), Macrostructure family, Map / Diagram macrostructure (google-ads-ppc), N5 Floating pill nav, Quote-Led macrostructure (local-seo-gmb), Split Studio macrostructure, Jay Ganesh Car Accessories (Maruti Kalbhor) (+3 more)

### Community 23 - "PROJECT_CONTEXT.md"
Cohesion: 0.31
Nodes (9): Hallmark slop test before shipping UI, Never fabricate metrics/testimonials/clients rule, Design system locked decision, Rejected: Editorial ledger (Specimen fall-through), Google Maps Ranking Toolkit, Hallmark skill (Nutlope), Hallmark audit 2026-09-23 (9 critical, 8 major, 7 minor), Site map (59 routes, 79 static pages) (+1 more)

### Community 24 - "structured-data.ts"
Cohesion: 0.12
Nodes (15): app_globals, jakarta, metadata, RootLayout(), viewport, GoogleAnalytics(), businessAddress, businessGeo (+7 more)

### Community 25 - "locations/page.tsx"
Cohesion: 0.13
Nodes (14): answer, metadata, zones, generateMetadata(), globalLocations, globalProcess, globalServices, indiaLocations (+6 more)

### Community 26 - "app/not-found.tsx"
Cohesion: 0.40
Nodes (3): metadata, NotFound(), routes

### Community 27 - "chat-widget.tsx"
Cohesion: 0.22
Nodes (8): ChatMessage, fallback, greeting, LinkAction, Prompt, questions, topics, assistant

### Community 28 - "Overnight redesign plan (started 2026-09-24)"
Cohesion: 0.25
Nodes (7): Log, Morning summary (2026-09-24, ~07:00), Overnight redesign plan (started 2026-09-24), Phase 2: Pages (redesign each in the new system), Phase 3: Site-wide verification, Progress, The creative bar

### Community 29 - "Accent violet #C82AEF"
Cohesion: 0.33
Nodes (6): Card surface (radial gradient, 24px radius), Accent violet #C82AEF, Static violet light pool + grain, Neon ring (hover/focus only), Aurora hero removed (static light pool), Rejected: gold/yellow structural accent

### Community 30 - "vercel.json"
Cohesion: 0.40
Nodes (4): buildCommand, framework, installCommand, $schema

### Community 31 - "json-ld.tsx"
Cohesion: 0.18
Nodes (12): agreed, answer, metadata, principles, steps, revalidate, include, metadata (+4 more)

### Community 33 - "faq/page.tsx"
Cohesion: 0.18
Nodes (11): runtime, groups, metadata, QA, FaqExplorer(), DigitalProduct, productList, products (+3 more)

### Community 36 - "tools/[slug]/page.tsx"
Cohesion: 0.17
Nodes (9): generateMetadata(), Faq(), PageHero(), AdBudgetCalculator(), RoasCalculator(), slug(), SOURCE_PRESETS, UtmBuilder() (+1 more)

### Community 37 - "review-clients.ts"
Cohesion: 0.18
Nodes (6): ReviewGenerator(), Status, reviewClientList, reviewClients, reviewClientSlugs, ReviewClient

### Community 38 - "content-types.ts"
Cohesion: 0.18
Nodes (10): toolList, tools, toolSlugs, toolsOverview, BlogSection, CaseStudy, CaseStudyResult, OverviewContent (+2 more)

### Community 39 - "seo.ts"
Cohesion: 0.18
Nodes (9): checks, faqs, metadata, steps, BlogSeoImage, SeoMetadata, siteName, siteTagline (+1 more)

### Community 40 - "sitemap.ts"
Cohesion: 0.22
Nodes (11): Page(), generateMetadata(), generateStaticParams(), Page(), revalidate, Entry, sitemap(), serviceSlugs (+3 more)

### Community 41 - "buildMetadata"
Cohesion: 0.18
Nodes (8): generateMetadata(), faqs, metadata, routes, whatsappText, CUSTOM_PAGES, generateMetadata(), buildMetadata()

### Community 42 - "industries.ts"
Cohesion: 0.22
Nodes (6): generateMetadata(), industries, industriesOverview, industryList, industrySlugs, IndustryContent

### Community 43 - "pune-areas.ts"
Cohesion: 0.22
Nodes (6): dynamicParams, generateMetadata(), PuneArea, puneAreaBySlug, s, AnswerBlock

### Community 44 - "blog-post-page.tsx"
Cohesion: 0.36
Nodes (6): ReadingProgress(), ShareRow(), BlogPostPage(), headingId(), renderInlineLinks(), articleSchema()

### Community 45 - "pricing/page.tsx"
Cohesion: 0.32
Nodes (6): answer, drivers, faqs, metadata, ScopeBuilder(), ScopeOption

### Community 46 - "market-visuals.tsx"
Cohesion: 0.46
Nodes (7): EASE, fmt(), HoursOverlap(), MarketBoard(), overlap(), Span, wrap()

### Community 47 - "lib/blog.ts"
Cohesion: 0.60
Nodes (3): archivedVistrowPosts, blogPosts, BlogPost

## Knowledge Gaps
- **274 isolated node(s):** `npx`, `metadata`, `answer`, `values`, `faqs` (+269 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 334 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `next` to `nav.tsx`, `reveal.tsx`, `react`, `site-config.ts`, `chat/route.ts`, `work/[slug]/page.tsx`, `package.json`, `legal-page.tsx`, `graph`, `emails.ts`, `about/page.tsx`, `footer.tsx`, `(site)/page.tsx`, `structured-data.ts`, `locations/page.tsx`, `app/not-found.tsx`, `chat-widget.tsx`, `json-ld.tsx`, `faq/page.tsx`, `tools/[slug]/page.tsx`, `review-clients.ts`, `content-types.ts`, `seo.ts`, `sitemap.ts`, `buildMetadata`, `industries.ts`, `pune-areas.ts`, `blog-post-page.tsx`, `pricing/page.tsx`, `market-visuals.tsx`?**
  _High betweenness centrality (0.210) - this node is a cross-community bridge._
- **Why does `Multi-tenant review tool /r/[client]` connect `README.md` to `review-clients.ts`, `Macrostructure family`, `PROJECT_CONTEXT.md`?**
  _High betweenness centrality (0.172) - this node is a cross-community bridge._
- **Why does `lucide-react` connect `next` to `nav.tsx`, `accent-switcher.tsx`, `reveal.tsx`, `react`, `site-config.ts`, `work/[slug]/page.tsx`, `package.json`, `graph`, `chat-knowledge.ts`, `about/page.tsx`, `footer.tsx`, `(site)/page.tsx`, `locations/page.tsx`, `app/not-found.tsx`, `chat-widget.tsx`, `json-ld.tsx`, `faq/page.tsx`, `tools/[slug]/page.tsx`, `review-clients.ts`, `content-types.ts`, `seo.ts`, `buildMetadata`, `industries.ts`, `blog-post-page.tsx`, `pricing/page.tsx`?**
  _High betweenness centrality (0.145) - this node is a cross-community bridge._
- **What connects `npx`, `metadata`, `answer` to the rest of the system?**
  _274 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `accent-switcher.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.14461538461538462 - nodes in this community are weakly interconnected._
- **Should `reveal.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.14 - nodes in this community are weakly interconnected._
- **Should `react` be split into smaller, more focused modules?**
  _Cohesion score 0.05877551020408163 - nodes in this community are weakly interconnected._