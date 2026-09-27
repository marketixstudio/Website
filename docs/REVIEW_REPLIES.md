# Google review replies and the review report

Covers Jay Ganesh Car Accessories and Marketix Studio (every `active` client in
`content/review-clients.ts`). One Google account that manages both listings connects once.

## What runs

| Piece | Where | What it does |
|---|---|---|
| Review page | `/r/<client>` | Customer drafts a review. Each draft and each "Post on Google" tap is counted. |
| Report | `/r/reports` (sign in at `/r/login`) | Per business, for last 7 days, last 30 days, any month or all time: drafts written, Google taps, stars chosen, new Google reviews, average rating, replied %, reviews waiting, replies sent (automatic and manual), a day or month chart. |
| Waiting for a reply | on the report | Every unreplied Google review in the period, lowest stars first. "Write a reply" drafts one, you edit it, "Post on Google" posts it. |
| Daily auto-reply | `/api/cron/review-replies`, 10:00 IST (`vercel.json`) | 4 and 5 star reviews from the last 7 days with no reply get a short, personal reply posted (max 10 per business per day). **1 to 3 stars are never answered automatically**; they wait on the report. |
| Reply helper | `/r/<client>/replies` (signed in) | Paste any review, get a reply to copy. Works without Google access. |

No emails are sent by any of this.

## Signing in

Run `npm run report-login` in the project folder. It asks for an email and a password
(typed hidden, at least 10 characters) and saves only a hash in `REPORT_LOGINS` in
`.env.local`. Run it again for a second person, or with the same email to change the
password. Copy the `REPORT_LOGINS` line into Vercel for the live site. Sign-in lasts 30
days; "Sign out" is at the top of the report. 5 wrong tries lock that connection for 15
minutes. The old `?key=<REVIEW_ADMIN_KEY>` link still works as a backup.

## Setup, once

1. **Storage for the counts.** Vercel > project > Storage > Create > Upstash Redis (free).
   Connect it to the project; Vercel adds `KV_REST_API_URL` and `KV_REST_API_TOKEN`.
2. **Google Cloud project.** console.cloud.google.com > new project "Marketix reviews".
3. **Ask Google for Business Profile API access.** Search "Business Profile APIs access
   request form", sign in with the account that manages both listings, give the project
   number. Approval takes a few days to a few weeks. Until then the API answers with a
   quota of 0 and everything below just reports "not connected".
4. **Turn on the APIs** (after approval): My Business Account Management API,
   My Business Business Information API, Google My Business API.
5. **OAuth consent screen**: External, app name "Marketix Studio", your email.
   Add the scope `.../auth/business.manage`. Then **Publish app** (In production).
   Left in "Testing", Google expires the sign-in after 7 days and replies stop.
   An unverified app shows a warning screen for you only; click Advanced > continue.
6. **OAuth client**: Credentials > Create > OAuth client ID > Web application.
   Authorised redirect URIs:
   - `https://www.marketixstudio.com/api/gbp/callback`
   - `http://localhost:3000/api/gbp/callback`
   Put the ID and secret in `.env.local` and in Vercel as `GOOGLE_CLIENT_ID`,
   `GOOGLE_CLIENT_SECRET`.
7. **Sign in once**: open `/api/gbp/connect?key=<REVIEW_ADMIN_KEY>`, choose the Google
   account that manages both listings, allow access. The page shows a refresh token:
   save it as `GBP_REFRESH_TOKEN` (local and Vercel). It also lists each business with
   its ids. Listings are matched by name automatically; if a name differs, add
   `gbp: { accountId, locationId }` to that client.
8. **Check** `/r/reports?key=...` (Google figures appear) and
   `/api/cron/review-replies?key=...` (a dry run: shows what it would post, posts nothing).
9. **Switch on**: set `CRON_SECRET` (any long random string) and `GBP_AUTO_REPLY=on` in
   Vercel, redeploy. From then on the daily run posts.

## Rules the replies follow (lib/review-reply.ts)

Short and personal, one detail from the review, in the reviewer's language, varied
openings, no stock phrases, no city or keyword stuffing, never an incentive. Low ratings:
apology, no excuses, the business phone number, and always a human click before posting.
