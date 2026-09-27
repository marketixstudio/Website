# Graph Report - MARKETIX WEBSITE  (2026-09-27)

## Corpus Check
- 176 files · ~130,703 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 5 file(s) not represented in the graph (top: (none) 2, .example 1, .ico 1)

## Summary
- 1062 nodes · 2719 edges · 73 communities (68 shown, 5 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 36 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `37b679be`
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
- nav.ts
- design.md (locked design system)
- reveal.tsx
- CLAUDE.md (project instructions)
- README.md
- emails.ts
- contact-form.tsx
- LogoLoop.tsx
- review-autoreply.ts
- Positioning guardrail (Marketix vs Vistrow)
- Macrostructure family
- PROJECT_CONTEXT.md
- footer.tsx
- locations/page.tsx
- app/not-found.tsx
- (site)/page.tsx
- content-types.ts
- Accent violet #C82AEF
- vercel.json
- review-report.ts
- next.config.mjs
- chat-knowledge.ts
- shadcn
- postcss.config.mjs
- Overnight redesign plan (started 2026-09-24)
- primitives.tsx
- contact/page.tsx
- chat-widget.tsx
- blog/page.tsx
- blog-post-page.tsx
- tools/[slug]/page.tsx
- reports/page.tsx
- locations.ts
- lucide-react
- next
- react
- seo.ts
- market-visuals.tsx
- products-catalog.ts
- pune-areas.ts
- QueueItem
- AccentSwitcher
- globe.tsx
- sitemap.ts
- hasAdminAccess
- callback/route.ts
- Google review replies and the review report
- report-login.mjs
- reply-helper.tsx
- demand-map.tsx
- analytics.ts
- trackLead
- location-detail.tsx
- framer-motion
- growth-audit-form.tsx
- dependencies
- structured-data.ts
- devDependencies
- scripts
- blog-index.tsx
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

## Communities (73 total, 5 thin omitted)

### Community 0 - "ElectricLogo.tsx"
Cohesion: 0.15
Nodes (19): blurGrid(), blurLine(), ElectricLogo(), ElectricLogoProps, Focus, hexToRgb(), Point, Pulse (+11 more)

### Community 1 - "accent-switcher.tsx"
Cohesion: 0.23
Nodes (11): choose(), Bounds, DragState, Side, ThemeToggle(), toggle(), ACCENT_KEY, AccentKey (+3 more)

### Community 2 - "admin-auth.ts"
Cohesion: 0.18
Nodes (18): attempts, createFirstLogin(), signIn(), startSession(), LoginForm(), dynamic, metadata, Page() (+10 more)

### Community 3 - "graph"
Cohesion: 0.20
Nodes (31): Page(), Page(), Page(), Page(), Page(), Page(), Page(), Page() (+23 more)

### Community 4 - "review-generator.tsx"
Cohesion: 0.14
Nodes (10): ReviewGenerator(), Status, clamp(), GestureState, PeekRating(), PeekRatingProps, PeekRatingShape, reducedMotion() (+2 more)

### Community 5 - "review/route.ts"
Cohesion: 0.16
Nodes (25): POST(), runtime, hits, pickStyle(), POST(), rateLimited(), recentReviews, remember() (+17 more)

### Community 6 - "gmb-toolkit/page.tsx"
Cohesion: 0.19
Nodes (11): agreed, answer, metadata, principles, steps, countOf(), metadata, Page() (+3 more)

### Community 7 - "team/page.tsx"
Cohesion: 0.20
Nodes (12): chromaItems, initials(), initialsImage(), metadata, Page(), shades, ChromaGrid(), ChromaGridProps (+4 more)

### Community 8 - "components.json"
Cohesion: 0.11
Nodes (18): aliases, components, hooks, lib, ui, utils, registries, @react-bits (+10 more)

### Community 9 - "package.json"
Cohesion: 0.13
Nodes (14): name, private, version, @anthropic-ai/sdk, autoprefixer, gsap, motion, postcss (+6 more)

### Community 10 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 11 - "nav.tsx"
Cohesion: 0.18
Nodes (10): LOGO, LOGO_LIGHT, Wordmark(), aboutLinks, aboutMatch, industriesNav, PanelId, plainLinks (+2 more)

### Community 12 - "nav.ts"
Cohesion: 0.33
Nodes (5): footerNav, NavChild, NavGroup, NavItem, NavLinkRow

### Community 13 - "design.md (locked design system)"
Cohesion: 0.13
Nodes (17): design.md (locked design system), Atmospheric genre, CTA voice (dark pill + accent ring + arrow circle), Hallmark gate 22, Honest content rule (overrides every skill), Live-site elements not to carry over, No gradient text / accent on one word, Plus Jakarta Sans only typography (+9 more)

### Community 14 - "reveal.tsx"
Cohesion: 0.16
Nodes (9): SummaryGroup, Feature, FeatureCards(), LinkCardGrid(), Outcome, Reveal(), RevealProps, SectionHeading() (+1 more)

### Community 15 - "CLAUDE.md (project instructions)"
Cohesion: 0.14
Nodes (15): .claude/CLAUDE.md (graphify skill pointer), graphify skill (/graphify trigger), CLAUDE.md (project instructions), graphify query/path/explain usage rules, grep aliased to ugrep gotcha, marketix-dev launch config (port 3000), npm run build while dev corrupts .next, No hand-drawn browser/phone/dashboard chrome (+7 more)

### Community 16 - "README.md"
Cohesion: 0.15
Nodes (14): Content in code, no CMS, lib/blog.ts async blog API, Multi-tenant review tool /r/[client], WordPress 301 redirects (next.config.mjs), Claude API client review generator (app/api/review), content/ typed TS content directory, Framer Motion, lucide-react icons (+6 more)

### Community 17 - "emails.ts"
Cohesion: 0.09
Nodes (51): clean(), getSystemPrompt(), IncomingMessage, isRateLimited(), POST(), replySchema, requestLog, runtime (+43 more)

### Community 18 - "contact-form.tsx"
Cohesion: 0.25
Nodes (8): Errors, nextSteps, services, Status, Field(), Input(), Select(), Textarea()

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
Cohesion: 0.17
Nodes (10): routes, currentAccent(), ELECTRIC, ElectricMonogram(), columns, icons, NewsletterForm(), Status (+2 more)

### Community 25 - "locations/page.tsx"
Cohesion: 0.17
Nodes (16): answer, goals, metadata, answer, metadata, zones, answer, metadata (+8 more)

### Community 26 - "app/not-found.tsx"
Cohesion: 0.18
Nodes (11): metadata, NotFound(), CardSpotlight(), group(), SiteFooter(), SiteNav(), topics, waLink() (+3 more)

### Community 27 - "(site)/page.tsx"
Cohesion: 0.10
Nodes (18): answer, faqs, metadata, values, answer, faqs, groupIcons, industryIcons (+10 more)

### Community 28 - "content-types.ts"
Cohesion: 0.13
Nodes (14): TODO: photo not found on the live site under the expected filename - send it…, teamBySlug, toolList, tools, toolSlugs, toolsOverview, BlogSection, BlogSeoImage (+6 more)

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
Cohesion: 0.17
Nodes (14): GET(), line(), revalidate, industriesOverview, industryList, industrySlugs, locationList, serviceList (+6 more)

### Community 36 - "Overnight redesign plan (started 2026-09-24)"
Cohesion: 0.25
Nodes (7): Log, Morning summary (2026-09-24, ~07:00), Overnight redesign plan (started 2026-09-24), Phase 2: Pages (redesign each in the new system), Phase 3: Site-wide verification, Progress, The creative bar

### Community 37 - "primitives.tsx"
Cohesion: 0.11
Nodes (23): groups, metadata, checks, faqs, metadata, steps, answer, drivers (+15 more)

### Community 38 - "contact/page.tsx"
Cohesion: 0.18
Nodes (11): include, metadata, faqs, metadata, routes, whatsappText, metadata, who (+3 more)

### Community 39 - "chat-widget.tsx"
Cohesion: 0.22
Nodes (8): ChatMessage, fallback, greeting, LinkAction, Prompt, questions, topics, assistant

### Community 40 - "blog/page.tsx"
Cohesion: 0.22
Nodes (12): generateMetadata(), Page(), revalidate, generateMetadata(), generateStaticParams(), Page(), revalidate, archivedVistrowPosts (+4 more)

### Community 41 - "blog-post-page.tsx"
Cohesion: 0.36
Nodes (6): ReadingProgress(), ShareRow(), BlogPostPage(), headingId(), renderInlineLinks(), articleSchema()

### Community 42 - "tools/[slug]/page.tsx"
Cohesion: 0.23
Nodes (6): generateMetadata(), AdBudgetCalculator(), RoasCalculator(), slug(), SOURCE_PRESETS, UtmBuilder()

### Community 43 - "reports/page.tsx"
Cohesion: 0.16
Nodes (10): Chart(), chip(), dynamic, metadata, Page(), ReplyQueue(), parsePeriod(), Report (+2 more)

### Community 44 - "locations.ts"
Cohesion: 0.15
Nodes (10): generateMetadata(), globalLocations, globalProcess, globalServices, indiaLocations, indiaProcess, indiaServices, locations (+2 more)

### Community 45 - "lucide-react"
Cohesion: 0.23
Nodes (8): metadata, CtaBand(), Faq(), CtaLink, PageHero(), Breadcrumb(), Crumb, lucide-react

### Community 46 - "next"
Cohesion: 0.07
Nodes (28): app_globals, jakarta, metadata, RootLayout(), viewport, metadata, metadata, metadata (+20 more)

### Community 47 - "react"
Cohesion: 0.13
Nodes (15): HeroThreads(), toHex(), ExplorerItem, IndustryExplorer(), Magnet(), MagnetProps, ctxMap, FAN_MODE (+7 more)

### Community 48 - "seo.ts"
Cohesion: 0.11
Nodes (16): generateMetadata(), CUSTOM_PAGES, generateMetadata(), generateMetadata(), isTodo(), livePreview, Page(), cardBody (+8 more)

### Community 49 - "market-visuals.tsx"
Cohesion: 0.39
Nodes (7): EASE, fmt(), HoursOverlap(), MarketBoard(), overlap(), Span, wrap()

### Community 50 - "products-catalog.ts"
Cohesion: 0.18
Nodes (7): runtime, Step, Steps(), DigitalProduct, productList, lib_content_types_feature, lib_content_types_step

### Community 51 - "pune-areas.ts"
Cohesion: 0.24
Nodes (6): dynamicParams, generateMetadata(), PuneArea, puneAreaBySlug, puneAreas, s

### Community 52 - "QueueItem"
Cohesion: 0.83
Nodes (4): QueueItem(), call(), draft(), post()

### Community 53 - "AccentSwitcher"
Cohesion: 0.47
Nodes (8): AccentSwitcher(), begin(), finish(), move(), onMouseDown(), onTouchStart(), snap(), clamp()

### Community 54 - "globe.tsx"
Cohesion: 0.33
Nodes (7): facing(), Globe(), readColours(), cityCoords, LatLng, PUNE, cobe

### Community 55 - "sitemap.ts"
Cohesion: 0.14
Nodes (11): Entry, sitemap(), legalSlugs, locationSlugs, serviceSlugs, caseStudyIndustries, caseStudyList, caseStudySlugs (+3 more)

### Community 56 - "hasAdminAccess"
Cohesion: 0.21
Nodes (9): POST(), runtime, dynamic, metadata, Page(), reviewClientList, reviewClients, reviewClientSlugs (+1 more)

### Community 57 - "callback/route.ts"
Cohesion: 0.20
Nodes (14): esc(), GET(), page(), runtime, GET(), runtime, exchangeCode(), oauthUrl() (+6 more)

### Community 58 - "Google review replies and the review report"
Cohesion: 0.33
Nodes (5): Google review replies and the review report, Rules the replies follow (lib/review-reply.ts), Setup, once, Signing in, What runs

### Community 59 - "report-login.mjs"
Cohesion: 0.25
Nodes (6): ref_node_crypto, ref_node_fs, ref_node_readline, email, kept, salt

### Community 61 - "demand-map.tsx"
Cohesion: 0.25
Nodes (8): DemandMap(), EASE, Method, methods, SourceCard(), sources, START_MS, useTypingLoop()

### Community 62 - "analytics.ts"
Cohesion: 0.50
Nodes (3): GtagCommand, LeadSource, Window

### Community 63 - "trackLead"
Cohesion: 0.38
Nodes (6): ContactForm(), GrowthAuditForm(), ChatWidget(), onSubmit(), send(), trackLead()

### Community 64 - "location-detail.tsx"
Cohesion: 0.18
Nodes (13): hero, metadata, workGroups, AreaGlobe(), framing, AnswerCard(), framing, ind (+5 more)

### Community 65 - "framer-motion"
Cohesion: 0.20
Nodes (8): Funnel(), Step, loops, queries, SearchJourney(), Stage, stages, framer-motion

### Community 66 - "growth-audit-form.tsx"
Cohesion: 0.20
Nodes (7): auditSteps, budgets, channelOptions, industries, serviceOptions, confettiDots, SuccessCelebration()

### Community 67 - "dependencies"
Cohesion: 0.18
Nodes (11): dependencies, @anthropic-ai/sdk, cobe, framer-motion, gsap, lucide-react, motion, next (+3 more)

### Community 68 - "structured-data.ts"
Cohesion: 0.20
Nodes (7): businessAddress, businessGeo, businessPhone, JsonLdValue, openingHoursSchema, serviceLocalities, softwareAppSchema()

### Community 69 - "devDependencies"
Cohesion: 0.22
Nodes (9): devDependencies, autoprefixer, postcss, shadcn, tailwindcss, @types/node, @types/react, @types/react-dom (+1 more)

### Community 70 - "scripts"
Cohesion: 0.33
Nodes (6): scripts, build, dev, lint, report-login, start

### Community 71 - "blog-index.tsx"
Cohesion: 0.67
Nodes (3): BlogIndex(), Card, formatDate()

## Knowledge Gaps
- **340 isolated node(s):** `npx`, `metadata`, `answer`, `values`, `faqs` (+335 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 412 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `next` to `admin-auth.ts`, `review-generator.tsx`, `gmb-toolkit/page.tsx`, `team/page.tsx`, `package.json`, `nav.tsx`, `reveal.tsx`, `emails.ts`, `LogoLoop.tsx`, `footer.tsx`, `locations/page.tsx`, `app/not-found.tsx`, `(site)/page.tsx`, `content-types.ts`, `primitives.tsx`, `contact/page.tsx`, `chat-widget.tsx`, `blog/page.tsx`, `blog-post-page.tsx`, `tools/[slug]/page.tsx`, `reports/page.tsx`, `locations.ts`, `lucide-react`, `react`, `seo.ts`, `market-visuals.tsx`, `pune-areas.ts`, `sitemap.ts`, `hasAdminAccess`, `demand-map.tsx`, `location-detail.tsx`, `framer-motion`, `blog-index.tsx`?**
  _High betweenness centrality (0.260) - this node is a cross-community bridge._
- **Why does `lucide-react` connect `lucide-react` to `accent-switcher.tsx`, `admin-auth.ts`, `review-generator.tsx`, `gmb-toolkit/page.tsx`, `package.json`, `nav.tsx`, `reveal.tsx`, `contact-form.tsx`, `footer.tsx`, `locations/page.tsx`, `app/not-found.tsx`, `(site)/page.tsx`, `content-types.ts`, `chat-knowledge.ts`, `primitives.tsx`, `contact/page.tsx`, `chat-widget.tsx`, `blog/page.tsx`, `blog-post-page.tsx`, `tools/[slug]/page.tsx`, `reports/page.tsx`, `locations.ts`, `next`, `react`, `seo.ts`, `products-catalog.ts`, `reply-helper.tsx`, `demand-map.tsx`, `location-detail.tsx`, `framer-motion`, `growth-audit-form.tsx`, `blog-index.tsx`?**
  _High betweenness centrality (0.113) - this node is a cross-community bridge._
- **Why does `Multi-tenant review tool /r/[client]` connect `README.md` to `hasAdminAccess`, `Macrostructure family`, `PROJECT_CONTEXT.md`?**
  _High betweenness centrality (0.105) - this node is a cross-community bridge._
- **What connects `npx`, `metadata`, `answer` to the rest of the system?**
  _340 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `ElectricLogo.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.14736842105263157 - nodes in this community are weakly interconnected._
- **Should `review-generator.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.13725490196078433 - nodes in this community are weakly interconnected._
- **Should `components.json` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._