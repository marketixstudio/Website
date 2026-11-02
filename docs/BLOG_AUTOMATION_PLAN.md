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

## Built (2026-11-02)

- `scripts/blog/build-queue.py` turns docs/SEARCH_DEMAND.md into `content/blog-queue.json`
  (201 topics, one per distinct question, categories interleaved). Re-run after refreshing the
  research; drafted topics keep their status.
- `scripts/blog/draft-post.mjs` drafts the next topic with Claude (`BLOG_MODEL`, default
  claude-opus-5-5, structured output, server-side refusal fallback), checks links/dashes/stock phrases/length, saves `content/blog-posts/<slug>.json`
  and regenerates `content/blog-posts/index.ts`. `--dry` prints without writing.
- `.github/workflows/daily-blog.yml` runs it at 07:00 IST on GitHub's servers and opens a PR
  labelled `daily-blog` (max 3 open at once). Merge publishes; close skips the topic.
- Needs, once: repo secret `ANTHROPIC_API_KEY`, and "Allow GitHub Actions to create and approve
  pull requests" (Settings > Actions > General).

## Writing structure (2026-11-02)

From Google's helpful-content guidance, cross-checked with coreyhaines31/marketingskills (58k
stars), AgriciDaniel/claude-seo (26k) and TheCraigHewitt/seomachine (7.7k): answer first
(40 to 60 words), a "Key takeaways" block, headings phrased as the real searches with a short
answer opening each section, format by intent (cost / vs / how-to / worth it), 3 to 5 internal
links, official help pages cited where a platform fact is stated (checked to load), and one real
"From our work" note added by a person in PR review. Rejected from those repos: invented
mini-stories, unsourced statistics, keyword-density and word-count targets.

## Google Cloud (2026-11-02)

Project `marketix-automation` (number 134954999671) on marketixstudio@gmail.com. Enabled: Sheets,
Search Console, Analytics Data, My Business Account Management, My Business Business
Information. Service account `marketix-automation-bot@marketix-automation.iam.gserviceaccount.com`.

- `scripts/blog/google.mjs`: service-account login (node:crypto, no deps) + Sheets, Search
  Console (sitemap submit, URL inspection, page stats) and GA4 page views.
- `scripts/blog/sheet-log.mjs`: daily job logs each draft (status "Draft: PR open") in the
  Marketix Content Calender sheet (columns A..N).
- `scripts/blog/seo-sync.mjs` + `.github/workflows/blog-seo-sync.yml`: after a post merges and
  every Monday 08:00 IST: resubmit the sitemap, mark rows Published, indexed yes/no, clicks,
  impressions, position, views.

To switch on (GitHub repo > Settings > Secrets and variables > Actions):
- Secret `GOOGLE_SERVICE_ACCOUNT_JSON`: the service account's JSON key (Cloud console > IAM >
  Service accounts > the bot > Keys > Add key > JSON), pasted whole.
- Variable `CALENDAR_SHEET_ID` = `1-8DBggLs45yARz6OUlidLpDacXC1zOC_RfC4we4ySUU` (bot is Editor).
- Variable `GSC_SITE` = the Search Console property, e.g. `sc-domain:marketixstudio.com`
  (add the bot as a Full user in Search Console > Settings > Users and permissions).
- Variable `GA4_PROPERTY_ID` = the numeric GA4 property ID (add the bot as Viewer in
  GA4 > Admin > Property access management).

Google Business Profile (posts, edits, review replies): the APIs are enabled, but Google gives
new projects a quota of 0 until the "Business Profile APIs access request" form is approved for
project number 134954999671 (days to weeks). The "Google My Business API" (posts and reviews)
only becomes visible after approval. The existing review auto-reply code (lib/gbp.ts,
docs/REVIEW_REPLIES.md) uses OAuth as the owner account, which Business Profile requires; a
service account cannot be added to a Business Profile.
