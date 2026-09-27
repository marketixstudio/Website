# Graph Report - MARKETIX WEBSITE  (2026-09-27)

## Corpus Check
- 177 files · ~139,109 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 5 file(s) not represented in the graph (top: (none) 2, .example 1, .ico 1)

## Summary
- 1088 nodes · 2746 edges · 70 communities (63 shown, 7 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 36 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `49d72a8b`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- ElectricLogo.tsx
- accent-switcher.tsx
- admin-auth.ts
- graph
- review-generator.tsx
- review/route.ts
- gmb-toolkit/page.tsx
- team/page.tsx
- components.json
- package.json
- compilerOptions
- nav.tsx
- industries.ts
- design.md (locked design system)
- reveal.tsx
- CLAUDE.md (project instructions)
- README.md
- emails.ts
- growth-audit-form.tsx
- LogoLoop.tsx
- review-autoreply.ts
- Positioning guardrail (Marketix vs Vistrow)
- Macrostructure family
- PROJECT_CONTEXT.md
- footer.tsx
- next
- app/not-found.tsx
- work/[slug]/page.tsx
- content-types.ts
- Accent violet #C82AEF
- vercel.json
- review-report.ts
- next.config.mjs
- chat-knowledge.ts
- shadcn
- postcss.config.mjs
- Overnight redesign plan (started 2026-09-24)
- about/page.tsx
- electric-monogram.tsx
- chat-widget.tsx
- blog/[slug]/page.tsx
- structured-data.ts
- tools/[slug]/page.tsx
- reports/page.tsx
- locations.ts
- cta-band.tsx
- legal-page.tsx
- lucide-react
- Buyer questions by topic (as searched)
- buildMetadata
- checkout/route.ts
- pune-areas.ts
- QueueItem
- app/layout.tsx
- globe.tsx
- sitemap.ts
- hasAdminAccess
- callback/route.ts
- Google review replies and the review report
- service-finder.tsx
- (site)/page.tsx
- report-login.mjs
- ChromaGrid.tsx
- answer-summary.tsx
- ReplyHelper
- dependencies
- json-ld.tsx
- devDependencies
- scripts
- tailwind.config.ts

## God Nodes (most connected - your core abstractions)
1. `next` - 76 edges
2. `lucide-react` - 65 edges
3. `graph()` - 57 edges
4. `breadcrumbSchema()` - 54 edges
5. `buildMetadata()` - 42 edges
6. `faqSchema()` - 40 edges
7. `react` - 37 edges
8. `answerSchema()` - 32 edges
9. `JsonLd()` - 29 edges
10. `TextLink()` - 27 edges

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

## Communities (70 total, 7 thin omitted)

### Community 0 - "ElectricLogo.tsx"
Cohesion: 0.09
Nodes (29): HeroThreads(), toHex(), blurGrid(), blurLine(), ElectricLogo(), ElectricLogoProps, Focus, hexToRgb() (+21 more)

### Community 1 - "accent-switcher.tsx"
Cohesion: 0.17
Nodes (19): AccentSwitcher(), begin(), choose(), finish(), move(), onMouseDown(), onTouchStart(), snap() (+11 more)

### Community 2 - "admin-auth.ts"
Cohesion: 0.18
Nodes (18): attempts, createFirstLogin(), signIn(), startSession(), LoginForm(), dynamic, metadata, Page() (+10 more)

### Community 3 - "graph"
Cohesion: 0.22
Nodes (28): Page(), Page(), Page(), Page(), Page(), Page(), Page(), HomePage() (+20 more)

### Community 4 - "review-generator.tsx"
Cohesion: 0.15
Nodes (9): ReviewGenerator(), Status, clamp(), GestureState, PeekRating(), PeekRatingProps, PeekRatingShape, reducedMotion() (+1 more)

### Community 5 - "review/route.ts"
Cohesion: 0.16
Nodes (25): POST(), runtime, hits, pickStyle(), POST(), rateLimited(), recentReviews, remember() (+17 more)

### Community 6 - "gmb-toolkit/page.tsx"
Cohesion: 0.19
Nodes (11): agreed, answer, metadata, principles, steps, countOf(), metadata, Page() (+3 more)

### Community 7 - "team/page.tsx"
Cohesion: 0.36
Nodes (7): chromaItems, initials(), initialsImage(), metadata, Page(), shades, personSchema()

### Community 8 - "components.json"
Cohesion: 0.11
Nodes (18): aliases, components, hooks, lib, ui, utils, registries, @react-bits (+10 more)

### Community 9 - "package.json"
Cohesion: 0.14
Nodes (13): name, private, version, @anthropic-ai/sdk, autoprefixer, motion, postcss, react-dom (+5 more)

### Community 10 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 11 - "nav.tsx"
Cohesion: 0.18
Nodes (10): LOGO, LOGO_LIGHT, Wordmark(), aboutLinks, aboutMatch, industriesNav, PanelId, plainLinks (+2 more)

### Community 12 - "industries.ts"
Cohesion: 0.22
Nodes (6): generateMetadata(), industries, industriesOverview, industryList, industrySlugs, IndustryContent

### Community 13 - "design.md (locked design system)"
Cohesion: 0.13
Nodes (17): design.md (locked design system), Atmospheric genre, CTA voice (dark pill + accent ring + arrow circle), Hallmark gate 22, Honest content rule (overrides every skill), Live-site elements not to carry over, No gradient text / accent on one word, Plus Jakarta Sans only typography (+9 more)

### Community 14 - "reveal.tsx"
Cohesion: 0.26
Nodes (5): LinkCardGrid(), Outcome, Reveal(), RevealProps, SectionHeading()

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
Cohesion: 0.05
Nodes (44): ContactForm(), Errors, nextSteps, services, Status, Field(), Input(), Select() (+36 more)

### Community 19 - "LogoLoop.tsx"
Cohesion: 0.23
Nodes (11): ClientLogoLoop(), Logo, ANIMATION_CONFIG, cx(), LogoItem, LogoLoop, LogoLoopProps, toCssLength() (+3 more)

### Community 20 - "review-autoreply.ts"
Cohesion: 0.17
Nodes (23): dynamic, GET(), maxDuration, runtime, GET(), runtime, POST(), runtime (+15 more)

### Community 21 - "Positioning guardrail (Marketix vs Vistrow)"
Cohesion: 0.22
Nodes (11): Must not look or read like Vistrow rule, Positioning guardrail (Marketix vs Vistrow), Keyword territory split with Vistrow, Marketix Studio, NAP (Balewadi High Street, Pune), Rejected: copying Vistrow sections/chrome, Rebuild goal: SEO + AEO + GEO, not AI-looking, Marketix team (+3 more)

### Community 22 - "Macrostructure family"
Cohesion: 0.20
Nodes (11): Ft5 Statement footer, Long Document macrostructure (blog, legal), Macrostructure family, Map / Diagram macrostructure (google-ads-ppc), N5 Floating pill nav, Quote-Led macrostructure (local-seo-gmb), Split Studio macrostructure, Jay Ganesh Car Accessories (Maruti Kalbhor) (+3 more)

### Community 23 - "PROJECT_CONTEXT.md"
Cohesion: 0.31
Nodes (9): Hallmark slop test before shipping UI, Never fabricate metrics/testimonials/clients rule, Design system locked decision, Rejected: Editorial ledger (Specimen fall-through), Google Maps Ranking Toolkit, Hallmark skill (Nutlope), Hallmark audit 2026-09-23 (9 critical, 8 major, 7 minor), Site map (59 routes, 79 static pages) (+1 more)

### Community 24 - "footer.tsx"
Cohesion: 0.16
Nodes (10): columns, icons, NewsletterForm(), Status, footerNav, NavChild, NavGroup, NavItem (+2 more)

### Community 25 - "next"
Cohesion: 0.16
Nodes (27): answer, audiences, hero, metadata, hero, metadata, workGroups, answer (+19 more)

### Community 26 - "app/not-found.tsx"
Cohesion: 0.19
Nodes (10): metadata, CardSpotlight(), group(), SiteFooter(), SiteNav(), topics, waLink(), WhatsAppFloat() (+2 more)

### Community 27 - "work/[slug]/page.tsx"
Cohesion: 0.18
Nodes (11): generateMetadata(), isTodo(), livePreview, Page(), clientStats, NOTE: the old WordPress /testimonials/ page still carries the theme's demo, testimonials, caseStudies (+3 more)

### Community 28 - "content-types.ts"
Cohesion: 0.12
Nodes (17): Feature, Step, TODO: photo not found on the live site under the expected filename - send it…, team, teamBySlug, toolList, tools, toolSlugs (+9 more)

### Community 29 - "Accent violet #C82AEF"
Cohesion: 0.33
Nodes (6): Card surface (radial gradient, 24px radius), Accent violet #C82AEF, Static violet light pool + grain, Neon ring (hover/focus only), Aurora hero removed (static light pool), Rejected: gold/yellow structural accent

### Community 30 - "vercel.json"
Cohesion: 0.33
Nodes (5): buildCommand, crons, framework, installCommand, $schema

### Community 31 - "review-report.ts"
Cohesion: 0.16
Nodes (22): listReviews(), Bar, buildReport(), monthName(), Period, periodDays(), stars(), Counts (+14 more)

### Community 33 - "chat-knowledge.ts"
Cohesion: 0.23
Nodes (10): GET(), line(), revalidate, locationList, serviceList, servicesOverview, chatPuneAreas, keyPages (+2 more)

### Community 36 - "Overnight redesign plan (started 2026-09-24)"
Cohesion: 0.25
Nodes (7): Log, Morning summary (2026-09-24, ~07:00), Overnight redesign plan (started 2026-09-24), Phase 2: Pages (redesign each in the new system), Phase 3: Site-wide verification, Progress, The creative bar

### Community 37 - "about/page.tsx"
Cohesion: 0.11
Nodes (24): answer, faqs, metadata, values, faqs, metadata, routes, whatsappText (+16 more)

### Community 38 - "electric-monogram.tsx"
Cohesion: 0.32
Nodes (6): NotFound(), routes, currentAccent(), ELECTRIC, ElectricMonogram(), AccentKey

### Community 39 - "chat-widget.tsx"
Cohesion: 0.17
Nodes (11): ChatMessage, ChatWidget(), onSubmit(), send(), fallback, greeting, LinkAction, Prompt (+3 more)

### Community 40 - "blog/[slug]/page.tsx"
Cohesion: 0.23
Nodes (11): generateMetadata(), Page(), generateMetadata(), generateStaticParams(), Page(), revalidate, archivedVistrowPosts, blogPosts (+3 more)

### Community 41 - "structured-data.ts"
Cohesion: 0.13
Nodes (15): BlogPostPage(), headingId(), renderInlineLinks(), SeoMetadata, siteName, siteTagline, siteUrl, articleSchema() (+7 more)

### Community 42 - "tools/[slug]/page.tsx"
Cohesion: 0.17
Nodes (9): generateMetadata(), Faq(), FeatureCards(), Steps(), AdBudgetCalculator(), RoasCalculator(), slug(), SOURCE_PRESETS (+1 more)

### Community 43 - "reports/page.tsx"
Cohesion: 0.16
Nodes (10): Chart(), chip(), dynamic, metadata, Page(), ReplyQueue(), parsePeriod(), Report (+2 more)

### Community 44 - "locations.ts"
Cohesion: 0.15
Nodes (10): generateMetadata(), globalLocations, globalProcess, globalServices, indiaLocations, indiaProcess, indiaServices, locations (+2 more)

### Community 45 - "cta-band.tsx"
Cohesion: 0.27
Nodes (5): CtaBand(), CtaLink, PageHero(), Breadcrumb(), Crumb

### Community 46 - "legal-page.tsx"
Cohesion: 0.16
Nodes (11): metadata, metadata, metadata, metadata, metadata, formatDate(), LegalPage(), slugify() (+3 more)

### Community 47 - "lucide-react"
Cohesion: 0.09
Nodes (16): BlogIndex(), Card, formatDate(), ReadingProgress(), ShareRow(), ExplorerItem, IndustryExplorer(), ScopeBuilder() (+8 more)

### Community 48 - "Buyer questions by topic (as searched)"
Cohesion: 0.08
Nodes (25): automotive, branding-design, Buyer questions by topic (as searched), content-marketing, conversion-rate-optimisation, ecommerce-d2c, education, email-marketing-automation (+17 more)

### Community 49 - "buildMetadata"
Cohesion: 0.13
Nodes (14): answer, goals, metadata, answer, metadata, zones, CUSTOM_PAGES, generateMetadata() (+6 more)

### Community 51 - "pune-areas.ts"
Cohesion: 0.24
Nodes (6): dynamicParams, generateMetadata(), PuneArea, puneAreaBySlug, puneAreas, s

### Community 52 - "QueueItem"
Cohesion: 0.83
Nodes (4): QueueItem(), call(), draft(), post()

### Community 53 - "app/layout.tsx"
Cohesion: 0.22
Nodes (8): app_globals, jakarta, metadata, RootLayout(), viewport, GoogleAnalytics(), websiteSchema, themeScript

### Community 54 - "globe.tsx"
Cohesion: 0.29
Nodes (8): AreaGlobe(), facing(), Globe(), readColours(), cityCoords, LatLng, PUNE, cobe

### Community 55 - "sitemap.ts"
Cohesion: 0.14
Nodes (11): Entry, sitemap(), locationSlugs, reviewClientSlugs, serviceSlugs, caseStudyIndustries, caseStudyList, caseStudySlugs (+3 more)

### Community 56 - "hasAdminAccess"
Cohesion: 0.21
Nodes (9): POST(), runtime, dynamic, metadata, Page(), reviewClientList, reviewClients, hasAdminAccess() (+1 more)

### Community 57 - "callback/route.ts"
Cohesion: 0.20
Nodes (14): esc(), GET(), page(), runtime, GET(), runtime, exchangeCode(), oauthUrl() (+6 more)

### Community 58 - "Google review replies and the review report"
Cohesion: 0.33
Nodes (5): Google review replies and the review report, Rules the replies follow (lib/review-reply.ts), Setup, once, Signing in, What runs

### Community 59 - "service-finder.tsx"
Cohesion: 0.40
Nodes (5): FinderCard, GoalId, goals, ServiceFinder(), slugOf()

### Community 60 - "(site)/page.tsx"
Cohesion: 0.20
Nodes (9): answer, faqs, groupIcons, industryIcons, industryMeasures, metadata, serviceBlurbs, serviceIcons (+1 more)

### Community 61 - "report-login.mjs"
Cohesion: 0.25
Nodes (6): ref_node_crypto, ref_node_fs, ref_node_readline, email, kept, salt

### Community 62 - "ChromaGrid.tsx"
Cohesion: 0.33
Nodes (5): ChromaGrid(), ChromaGridProps, ChromaItem, SetterFn, gsap

### Community 67 - "dependencies"
Cohesion: 0.18
Nodes (11): dependencies, @anthropic-ai/sdk, cobe, framer-motion, gsap, lucide-react, motion, next (+3 more)

### Community 68 - "json-ld.tsx"
Cohesion: 0.16
Nodes (14): revalidate, include, metadata, Page(), checks, faqs, metadata, steps (+6 more)

### Community 69 - "devDependencies"
Cohesion: 0.22
Nodes (9): devDependencies, autoprefixer, postcss, shadcn, tailwindcss, @types/node, @types/react, @types/react-dom (+1 more)

### Community 70 - "scripts"
Cohesion: 0.29
Nodes (7): scripts, build, dev, lint, preview, report-login, start

## Knowledge Gaps
- **363 isolated node(s):** `npx`, `metadata`, `answer`, `values`, `faqs` (+358 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 436 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **7 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `next` to `admin-auth.ts`, `graph`, `review-generator.tsx`, `gmb-toolkit/page.tsx`, `team/page.tsx`, `package.json`, `nav.tsx`, `industries.ts`, `reveal.tsx`, `emails.ts`, `growth-audit-form.tsx`, `LogoLoop.tsx`, `footer.tsx`, `app/not-found.tsx`, `work/[slug]/page.tsx`, `about/page.tsx`, `electric-monogram.tsx`, `chat-widget.tsx`, `blog/[slug]/page.tsx`, `structured-data.ts`, `tools/[slug]/page.tsx`, `reports/page.tsx`, `locations.ts`, `cta-band.tsx`, `legal-page.tsx`, `lucide-react`, `buildMetadata`, `pune-areas.ts`, `app/layout.tsx`, `sitemap.ts`, `hasAdminAccess`, `service-finder.tsx`, `(site)/page.tsx`, `json-ld.tsx`?**
  _High betweenness centrality (0.266) - this node is a cross-community bridge._
- **Why does `lucide-react` connect `lucide-react` to `accent-switcher.tsx`, `admin-auth.ts`, `review-generator.tsx`, `gmb-toolkit/page.tsx`, `package.json`, `nav.tsx`, `industries.ts`, `reveal.tsx`, `growth-audit-form.tsx`, `footer.tsx`, `next`, `app/not-found.tsx`, `work/[slug]/page.tsx`, `content-types.ts`, `chat-knowledge.ts`, `about/page.tsx`, `electric-monogram.tsx`, `chat-widget.tsx`, `structured-data.ts`, `tools/[slug]/page.tsx`, `reports/page.tsx`, `locations.ts`, `cta-band.tsx`, `buildMetadata`, `service-finder.tsx`, `(site)/page.tsx`, `json-ld.tsx`?**
  _High betweenness centrality (0.103) - this node is a cross-community bridge._
- **Why does `Multi-tenant review tool /r/[client]` connect `README.md` to `hasAdminAccess`, `Macrostructure family`, `PROJECT_CONTEXT.md`?**
  _High betweenness centrality (0.103) - this node is a cross-community bridge._
- **What connects `npx`, `metadata`, `answer` to the rest of the system?**
  _363 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `ElectricLogo.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.08669354838709678 - nodes in this community are weakly interconnected._
- **Should `review-generator.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.14705882352941177 - nodes in this community are weakly interconnected._
- **Should `components.json` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._