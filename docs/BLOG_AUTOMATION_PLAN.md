# Blog page, categories and daily-post automation (plan, 2026-11-02)

Status: plan only. Nothing here is built yet.

## Blog page layout (/blog)

1. **Hero:** the newest post, large: image, category, title, excerpt, date, read time.
2. **Latest:** the next 12 posts in a 3-column grid (1 column on phones) with a sticky
   category sidebar on desktop. On phones the categories become a horizontal row of chips
   above the grid.
3. **Featured:** 3 to 4 hand-picked posts (a `featured: true` flag), the best-performing guides.
4. **By category:** one row per category with its 3 newest posts and a "See all" link to
   `/blog/category/<slug>`.
5. **Get a growth audit** CTA, then the footer.

Category pages (`/blog/category/<slug>`) are indexable, each with a short intro written for
that topic, so they rank for the topic itself.

## Categories (from real searches)

Source: docs/SEARCH_DEMAND.md (Google autocomplete, India, 2026-09-27, ~5,800 searches).
Autocomplete gives what people ask, not how many people ask it, so the order below needs
search volumes from Keyword Planner or Search Console before it is final.

| Category | Built from | Example real searches |
|---|---|---|
| Google Ads | google-ads-ppc, performance-marketing | google ads cost per month in india; how long do google ads take to work; google ads vs meta ads |
| Meta & Instagram Ads | meta-ads | facebook ads cost in india per day; is facebook ads worth it; facebook ads vs boosted posts |
| SEO & Google Maps | seo-services, local-seo-gmb | seo cost per month in india; how long does seo take; is google business profile worth it |
| Websites & Landing Pages | web-design-development, landing-pages-funnels, conversion-rate-optimisation | website design cost in india; landing page vs website; how long should a landing page be |
| Social Media & Content | social-media-marketing, content-marketing, branding-design | social media marketing cost per month in india; does content marketing still work |
| WhatsApp & Email | whatsapp-marketing, email-marketing-automation | whatsapp business api cost per message; does email marketing still work |
| Industry Playbooks | real-estate, ecommerce-d2c, saas-startups, healthcare, hospitality, interior-architecture, automotive, education | google ads vs meta ads for real estate; how to get interior design leads in india |
| Costs & Budgets | the "how much / cost / price" question on every topic | how much should a startup spend on marketing; digital marketing cost for small business in india |

"Costs & Budgets" exists because cost is the most-asked question on every service. Answers
explain what the cost depends on and never invent prices or results (CLAUDE.md hard rule).

## Daily post automation

Flow: a scheduled job (GitHub Actions, daily 07:00 IST) picks the next unused real search
question from a topic queue, writes a draft with OpenAI, makes a cover image, and opens a
pull request. A person approves it (one tap on GitHub, phone works). The merge deploys on
Vercel, then the social posts go out.

Why a human approval step: Google's spam policy targets content mass-produced to rank
("scaled content abuse"); one AI post a day with nobody reading it is that pattern, and an
unchecked draft could state a made-up figure, which the project never allows.

### APIs and accounts

| Purpose | API / account | Have it? |
|---|---|---|
| Write drafts | OpenAI API | Yes (`OPENAI_API_KEY`) |
| Cover images | OpenAI image API, same key | Yes |
| Commit post, open PR, schedule | GitHub Actions + repo token | Yes (repo exists) |
| Deploy | Vercel (deploys on merge to main) | Yes |
| Real search volumes | Google Ads API Keyword Planner (needs a Google Ads account + developer token), or DataForSEO (paid per request) | No |
| What the site already ranks for | Google Search Console API | No (needs a Google Cloud project) |
| Traffic per post | GA4 Data API | No (needs a Google Cloud project) |
| Faster indexing | Sitemap ping via Search Console; IndexNow for Bing | No |
| Google Business Profile posts | Business Profile API | Requested earlier for review replies; check approval |
| Instagram + Facebook Page posts | Meta Graph API: Meta developer app, Instagram Business account linked to the Facebook Page, app review for `instagram_content_publish` and `pages_manage_posts` | No |
| LinkedIn company page posts | LinkedIn developer app with Community Management API access (`w_organization_social`), needs LinkedIn approval | No |
| YouTube Shorts (optional) | YouTube Data API v3 | No (Google Cloud project) |

A Google Cloud project covers Search Console, GA4, Business Profile, YouTube and Google Ads
API access. It does not post to Instagram, Facebook or LinkedIn; those need a Meta developer
app and a LinkedIn developer app.

Google's Indexing API is only for job postings and livestreams, so it is not used for blog posts.
