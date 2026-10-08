/* Hallmark · genre: atmospheric · design-system: design.md · designed-as-app
 * theme: studied-DNA (source: url https://marketixstudio.com + screenshot rhythm pass, 2026-09-23)
 * studied: yes · observed-fonts: Plus Jakarta Sans · observed-accent: #C82AEF
 */

# Design — Marketix Studio

A locked design system for marketixstudio.com. Every page redesign reads this
file before emitting code. Do not regenerate per page — extend or amend this
file when the system needs to grow.

Approved by the user on 2026-09-23 (hero: static glow, labels: removed,
footer: statement, blog: Vistrow posts unpublished).

## Genre
atmospheric — dark canvas, violet light pools, confident sans, pill CTAs.
Chosen because it is what the live site already is, not a catalog pick.

## Positioning guardrail
Marketix must not look or read like Vistrow (a sister brand built from the same
codebase). No Vistrow chrome, section rhythm, copy, or blog content. Marketix
owns performance marketing + creative for real estate / eCommerce / D2C,
Pune (including neighbourhood pages, added 2026-09-25 at the user's request) + metros +
international. Vistrow owns AI automation.

## Macrostructure family
Pages share the system; they vary macrostructure within their family.
Every page has ONE designed centrepiece (the page's single orchestrated entrance).

Heroes (only two kinds):
- `components/v2/service-hero.tsx` for service, industry and location DETAIL pages
  (label, H1 with one accent phrase, lede, CTA + text link, and a card with two
  lists; card headings are configurable via includedLabel / bestForLabel).
- `components/v2/index-hero.tsx` for index and company pages (services, industries,
  about, contact, pricing, FAQ...). Accent phrases of 14 chars or fewer stay on
  one line from `sm` up; longer ones wrap.

Centrepieces in use (reuse before inventing new ones):
- Home: `components/home/demand-map.tsx` (search, social, maps converge on an enquiry)
- Services index: `components/services/service-finder.tsx` (goal filter)
- Service detail: `components/v2/step-rail.tsx`; google-ads-ppc has
  `search-journey.tsx`; local-seo-gmb shows the live /r/jayganesh page
- Industries index: `components/industries/industry-explorer.tsx` (tabs)
- Industry detail: `components/v2/funnel.tsx` (sector workflow as a funnel)
- Locations index: `MarketBoard`; Indian city: `AreaMap` (schematic, says so);
  international: `HoursOverlap` (computed from real UTC offsets). All in
  `components/v2/market-visuals.tsx`
- Case study: approach beside the live client page (inert iframe) or StepRail
- About: "studio at a glance" board, every number counted from content files
- Pricing: `components/services/scope-builder.tsx` (no invented prices)
- FAQ: `components/v2/faq-explorer.tsx` (search + topic filters)
- Contact: three-route chooser; Growth audit: "what the audit checks" beside the form
- Content (blog, legal): Long Document, typography only, sticky contents on legal

Rules: NO testimonials on service pages; client quotes live on case studies and
the /work hub (/testimonials redirects to /work). Grids always declare a mobile
column (`grid-cols-[minmax(0,1fr)]`) so nowrap links can't force overflow.

## Theme (studied DNA, neutrals tinted toward accent hue 318 per gate 22)
- `--color-paper`       oklch(12.5% 0.007 318)   #070608   page background (live: #040404)
- `--color-paper-3`     oklch(17.5% 0.008 318)   #120F13   card base (live: #0E0E0E)
- `--color-paper-2`     oklch(25.5% 0.010 318)   #252126   card light corner (live: #1F1F1F)
- `--color-rule`        oklch(30.0% 0.012 318)   #302C32
- `--color-muted`       oklch(66.0% 0.010 318)   #959096   body (live: #8B8B8B) — 6.46:1 on paper
- `--color-ink-2`       oklch(87.0% 0.007 318)   #D6D3D7   subheads (live: #D1D1D1)
- `--color-ink`         oklch(96.5% 0.005 318)   #F5F2F6   headings — never pure #fff
- `--color-accent`      oklch(62.3% 0.278 318)   #C82AEF
- `--color-accent-deep` oklch(54.3% 0.258 305)   #9425E4   pressed / second gradient stop
- `--color-accent-ink`  = `--color-ink`          3.76:1 on accent → icons & ≥24px text ONLY
- `--color-focus`       = `--color-accent`        4.85:1 on paper

Accent footprint ≤ 5 % per viewport, except the page's single light pool.

## Surfaces (the live site's signature — keep)
- Card: `radial-gradient(at top left, paper-2 0%, paper-3 70%)`, radius 24px.
  Elevation comes from LIGHTNESS, never from a coloured halo (Shadow-glow on dark).
- Light pool: ONE `radial-gradient(accent @ ~35% alpha → transparent)` per page
  region, fixed, not animated, plus SVG feTurbulence grain < 0.08 opacity.
  Replaces the WebGL Aurora (banned: Aurora-blob background).
- Neon ring (the live site's ±3px violet double shadow) is allowed ONLY on
  interactive elements in :hover / :focus-visible — never static on cards/icons.

## Typography (matched to the live site after user review, 2026-09-24)
- Headings: Plus Jakarta Sans 700 (NOT 800), tracking -0.01em (near normal), line-height
  1.14 display / 1.18 to 1.2 section, `text-wrap: balance` on h1 to h3 (set in globals.css).
- Heading colour: `--ink` #D8D5D9 (live #D1D1D1). Emphasised phrase: `text-ink-hi` #F7F5F8,
  a brighter white. NEVER violet or gradient in headings.
- Body: 500 weight globally, 17 to 18px, line-height 1.6, `--muted` for paragraphs.
- Violet (accent) is for buttons, icons, links, small markers only.
- Home hero = the live site's composition: ONE large rounded card with a violet wave field
  (`components/home/wave-field.tsx`, canvas, replaces the theme's demo video), the live H1
  "Performance Marketing Agency for Real Estate, Startups & eCommerce" wide and LEFT-aligned,
  lede + CTA offset to the right column below. The user rejected: a centred headline +
  paragraph + two buttons template, and any pill/badge above a heading ("AI slop").
  Inner-page heroes stay split (ServiceHero/IndexHero).
- Type scale anchor: `text-display` = clamp(2.6rem, 5vw + 0.5rem, 5.25rem)
  (live: 100 / 64 / 46 / 28 px desktop)
- No mono, no second family, never italic.
- Gradients: user rejected "too many gradients". Allowed: the subtle `.mx-card` surface,
  a very faint `.mx-pool` (accent 0.08), and `.mx-glow` ONLY on the home service cards.
  No scroll-fill headings (FillHeading is now static), no radial accent fills on cards.

## Spacing
4-point named scale (`--space-3xs` … `--space-3xl`). Section padding VARIES
by role — hero bottom ≥ 1.3× top; proof sections tighter; closing sections looser.
Never one padding value for every section.

## Motion
- Easing: `--ease-out: cubic-bezier(0.16, 1, 0.3, 1)`; durations 220ms UI, 700ms entrance
- ONE orchestrated entrance per page (hero). Everything else is simply present.
- Signature: scroll-linked heading fill — words step from muted → ink as the
  heading crosses the viewport (per-word colour, NOT background-clip gradient).
  Max 2 per page.
- Count-up only on REAL numbers supplied by the client.
- All JS animation checks `prefers-reduced-motion` and renders final state instantly.
- Banned: fade-up on every block, hover-scale, transition-all, bouncy easing, WebGL aurora.

## Microinteractions stance
- Silent success; toasts only for failures.
- Hover affordance = one effect (colour or ring), not translate+scale+shadow together.
- Focus ring appears instantly: `outline: 2px solid var(--color-focus); outline-offset: 2px`.

## CTA voice
- Primary: dark pill (paper-3) + 1px accent ring, label in ink, trailing 40px accent
  circle holding an arrow icon (the live site's button). Ring glows on hover/focus.
- Secondary: text link in ink-2 with accent arrow; no box.
- Copy: verb-first and specific ("Get a free audit", "See Jay Ganesh's result").

## Chrome
- Nav: N5 Floating pill (desktop), live-site bar + left drawer (mobile/tablet).
  Order: Services ▾ · Industries ▾ · About ▾ · Blog · Contact · "Free audit".
  About ▾ = About us, Our team, Our approach, Case studies, Careers, Partners, plus a
  featured case study card. Services panel = four service groups; Industries = 8 sectors.
  No Tools item (there are no tools yet).
- Mobile + tablet (< lg): the LIVE SITE's pattern, not the pill — full-width bar
  (16px inset, 20px radius, card @ 90% + blur), logo left, solid violet 44px
  menu button right (10px radius). Drawer slides in from the LEFT (≤ 22rem, 88vw),
  backdrop closes it; Home · Services ▾ · Industries ▾ · Case Studies · About ·
  Contact, chevrons in violet-outline pills, current page in violet, CTA pinned
  at the bottom.
- Logo: always the supplied lockup `public/brand/marketix-logo.png` (monogram +
  "marketix" + "Marketing That Clicks") via `components/ui/wordmark.tsx`. Never
  re-typeset it in live text. Heights: 34 desktop pill, 40 mobile bar, 36 drawer/footer.
- Footer (user review 2026-09-24): compact CTA card (audit button, Call, WhatsApp), then a
  brand column (logo, one-line description, address, hours, phone, email, socials,
  newsletter) and THREE short link columns: Services (6 main + All services), Company
  (About, Case Studies, Team, Careers, Contact), Resources (Free growth audit, Pricing, FAQ,
  Industries, Locations, Google Maps toolkit); legal row at the bottom. User rejected: a
  giant statement sentence, and listing every page in the footer.
- No announcement bar, no theme toggle, no scroll-progress bar (all Vistrow).
- Breadcrumbs: schema only; no visible trail on hero sections.

## Section labels (eyebrows)
OFF. Allowed only on genuinely ordinal content (process steps). Never beside a heading.

## Honest content (overrides every skill)
No metric, testimonial, client name, logo, price, or result unless Marketix
Studio supplied it and can evidence it. Unknown values render as "metric to
confirm" in a labelled grey block. Real proof available now:
Jay Ganesh (Maruti Kalbhor), PIBM, ReviveUp Drinks — see content/testimonials.ts.

## Imagery
Real work only: client creatives, real screenshots in `<figure>` with at most a
hairline border. No stock photos. No re-drawn browser/phone/dashboard chrome.
Hand-built SVG diagrams are allowed (they explain, they don't impersonate UI).

## Per-page allowances
- Marketing pages MAY use enrichment: Tier-A CSS art, Tier-B hand-built SVG.
- Content pages: typography only.

## What pages MUST share
Wordmark, accent + its ≤5 % placement, Plus Jakarta Sans, CTA voice, card surface,
nav + footer.

## What pages MAY differ on
Macrostructure within family (not service heroes — those are fixed), enrichment (marketing only).

## Exports

### tokens.css
```css
:root {
  --color-paper:       oklch(12.5% 0.007 318);
  --color-paper-3:     oklch(17.5% 0.008 318);
  --color-paper-2:     oklch(25.5% 0.010 318);
  --color-rule:        oklch(30% 0.012 318);
  --color-muted:       oklch(66% 0.010 318);
  --color-ink-2:       oklch(87% 0.007 318);
  --color-ink:         oklch(96.5% 0.005 318);
  --color-accent:      oklch(62.3% 0.278 318);
  --color-accent-deep: oklch(54.3% 0.258 305);
  --color-accent-ink:  var(--color-ink);
  --color-focus:       var(--color-accent);

  --font-display: "Plus Jakarta Sans", system-ui, sans-serif;
  --font-body:    "Plus Jakarta Sans", system-ui, sans-serif;

  --space-3xs: 0.25rem; --space-2xs: 0.5rem; --space-xs: 0.75rem;
  --space-sm: 1rem;     --space-md: 1.5rem;  --space-lg: 2rem;
  --space-xl: 3rem;     --space-2xl: 4.5rem; --space-3xl: 7rem;

  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --dur-short: 220ms; --dur-entrance: 700ms;
  --radius-card: 24px; --radius-pill: 999px; --radius-input: 999px;
}
```

## Provenance
Extracted from https://marketixstudio.com on 2026-09-23 — user-owned source.
Tokens and fonts are exact (from the Elementor kit CSS, post-13.css). Rhythm is
from a screenshot pass at 1440px. Neutrals were tinted toward the accent hue to
satisfy Hallmark gate 22; hex values in brackets show the live originals.

## Notes — do NOT carry over from the live site
- 52 entrance animations (fadeInUp/Left/Right/Down) — content invisible until scrolled
- "Marko Video Background" theme label in the hero; the theme's demo video (licence unclear)
- Six identical "View Details" icon-tile cards
- An h2 (off-canvas panel) rendered before the h1
- 40 stylesheets + jQuery + WooCommerce assets on a marketing page
- Theme demo testimonials ("Marko", Emma Richard / Nexatech) and Lorem ipsum on /about-us
- Unverified counters: "2.7k Positive Reviews", "95% Client Satisfaction", "25+ Brands"

## Floating WhatsApp widget (2026-09-25, user request)
Bottom left, every site page. WhatsApp green is allowed here only (recognisable third-party mark).
The idle float is the one sanctioned looping motion; it is motion-safe and pauses on hover. Prefilled
messages never include the page URL (user rejected it).

## AI assistant (2026-09-25, user request)
Bottom right, every site page: pill with "Ask Riya / AI assistant" and the avatar. Panel is a plain
card (no glass, no eyebrows); violet only on the visitor's bubbles and actions. Always labelled as an
AI assistant; "Talk to a person" (WhatsApp) sits in the header. No idle motion on this trigger, so
only the WhatsApp button floats.

## Theme and accent (2026-09-25, user request, reverses "dark-only")
Dark stays the default and the reference for all design review. Visitors can switch to light mode
(header toggle) and pick an accent (floating palette button, Violet default). Every new component
must use tokens (`--accent`, `--accent-ink`, `--ink`, `--card`...) and never hard-code violet, white
or black, so it works in both themes and all six accents. Logos: dark mode uses marketix-logo.png,
light mode uses marketix-logo-light.png (Wordmark handles this).

## Cards (2026-09-26, user request; values read from the live site's CSS)
`.mx-card` = the live marketixstudio.com container: `radial-gradient(at 0% 0%, #1F1F1F 0%, #0E0E0E 60%)`,
1px #1F1F1F border, 24px radius, on a #040404 page. No glow at rest. On hover or keyboard focus:
violet border (accent at 55%) plus the live site's violet glow `0 0 10px rgba(200,42,239,0.44)`.
The old always-on corner glow (`.mx-glow`) stays disabled.

## Headings (2026-09-26, user request; reverses "no gradient text")
Page titles (h1) and section headings (`text-h2`, `text-display`) use the live site's heading
treatment: Plus Jakarta Sans 700, normal letter spacing, 1.2 line height, silver #D1D1D1 fading
toward the bottom-right (`linear-gradient(322deg, …18% floor…, #D1D1D1 70%)`, clipped to text).
Card titles and small headings stay solid. Inner pages show a visible breadcrumb trail
(Home in violet, underlined) built from the same list as the BreadcrumbList schema.


## Light mode (2026-09-27)

Dark is the reference; light is tuned separately, never a straight inversion.
- Page `#F7F6F9`, cards pure white, raised by a soft shadow (`0 1px 2px / .04`, `0 14px 34px -18px / .14`), no corner light.
- Heading fade is only a whisper (floor 0.62); the dark silver fade reads as greyed-out text on white.
- Shadows written for dark (black 50-80%) need a light twin: `shadow-[...rgb(10_10_12/0.12-0.16)] dark:shadow-[...]`.
- Canvas effects use the accent and its deep shade on white; pale or white strokes vanish.

## Row buttons (2026-09-27)

Lists of links (service groups and similar) use `.mx-row` with the arrow in `.mx-row-go`, never a bare icon + text + arrow line, which reads as a bullet list. Labels wrap; don't truncate.

Exception: the footer. Its link columns are a directory to scan, so they stay plain text links (arrow appears on hover/focus, 40px tap height). Boxing all 18 footer links was tried on 2026-09-27 and read as a wall of buttons.
