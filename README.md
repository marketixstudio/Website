# Marketix Studio

Website for **Marketix Studio**, a performance marketing agency in Balewadi, Pune,
serving real estate, eCommerce and D2C brands across India, the UAE, the UK and the US.
Replaces the WordPress site at marketixstudio.com.

Project decisions and history: [`docs/PROJECT_CONTEXT.md`](docs/PROJECT_CONTEXT.md).
Design system: [`design.md`](design.md).

## Stack

- [Next.js 14](https://nextjs.org/) (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) with CSS-variable design tokens (`app/globals.css`)
- [Framer Motion](https://www.framer.com/motion/) and a few [React Bits](https://reactbits.dev) components (`components/ui/bits/`)
- [lucide-react](https://lucide.dev/) icons
- Content as typed TypeScript in `content/` — no CMS
- Claude API for the client review generator (`app/api/review`)
- Razorpay + Stripe over REST for the Google Maps Ranking Toolkit (`app/api/checkout`)

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Copy `.env.example` to `.env.local` and fill in the keys you need. Every integration
degrades to a clear "not configured" message when its key is missing.

## Layout

| Path | What lives there |
|---|---|
| `app/(site)/` | Marketing pages, wrapped in the site header and footer |
| `app/r/[client]/` | Client-facing review tool, rendered without site chrome |
| `app/api/` | Contact/audit inquiries, review generation, checkout |
| `content/` | Services, industries, locations, tools, case studies, team, testimonials, legal |
| `lib/` | SEO metadata, JSON-LD schema, navigation, site config (NAP) |
| `design.md` | Locked design system — read before any UI change |
| `.claude/skills/` | Hallmark and Taste-Skill design skills, Graphify |

## Deploy

Built for Vercel. Old WordPress URLs are 301-redirected in `next.config.mjs`.
