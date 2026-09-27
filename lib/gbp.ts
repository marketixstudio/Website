/**
 * Google Business Profile API (REST, no SDK): sign-in helpers, reviews and replies.
 *
 * Setup (see docs/REVIEW_REPLIES.md):
 *   GOOGLE_CLIENT_ID / GOOGLE_CLIENT_SECRET  OAuth client from the approved Google Cloud project
 *   GBP_REFRESH_TOKEN                        from the one-time sign-in at /api/gbp/connect?key=...
 * Nothing here runs until those are set.
 */

const SCOPE = "https://www.googleapis.com/auth/business.manage";

export type GbpReview = {
  reviewId: string;
  name: string;
  reviewer?: { displayName?: string };
  starRating?: "ONE" | "TWO" | "THREE" | "FOUR" | "FIVE" | "STAR_RATING_UNSPECIFIED";
  comment?: string;
  createTime: string;
  updateTime?: string;
  reviewReply?: { comment: string; updateTime: string };
};

export const STARS: Record<string, number> = { ONE: 1, TWO: 2, THREE: 3, FOUR: 4, FIVE: 5 };

export function gbpConfigured() {
  return Boolean(process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET && process.env.GBP_REFRESH_TOKEN);
}

export function oauthUrl(redirectUri: string, state: string) {
  const params = new URLSearchParams({
    client_id: process.env.GOOGLE_CLIENT_ID ?? "",
    redirect_uri: redirectUri,
    response_type: "code",
    scope: SCOPE,
    access_type: "offline",
    prompt: "consent",
    state,
  });
  return `https://accounts.google.com/o/oauth2/v2/auth?${params}`;
}

async function tokenRequest(body: Record<string, string>) {
  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ client_id: process.env.GOOGLE_CLIENT_ID ?? "", client_secret: process.env.GOOGLE_CLIENT_SECRET ?? "", ...body }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(`Google token error: ${data.error_description || data.error || res.status}`);
  return data as { access_token: string; refresh_token?: string; expires_in: number };
}

export const exchangeCode = (code: string, redirectUri: string) =>
  tokenRequest({ code, redirect_uri: redirectUri, grant_type: "authorization_code" });

export async function accessToken(refreshToken = process.env.GBP_REFRESH_TOKEN ?? "") {
  const data = await tokenRequest({ refresh_token: refreshToken, grant_type: "refresh_token" });
  return data.access_token;
}

async function gget<T>(url: string, token: string): Promise<T> {
  const res = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
  const data = await res.json();
  if (!res.ok) throw new Error(`Google API ${res.status}: ${data.error?.message || "request failed"}`);
  return data as T;
}

/** Every business the signed-in account manages, with the ids the automatic replier needs. */
export async function listLocations(token: string) {
  const accounts = await gget<{ accounts?: { name: string; accountName?: string }[] }>(
    "https://mybusinessaccountmanagement.googleapis.com/v1/accounts",
    token,
  );
  const out: { accountId: string; locationId: string; title: string; address: string }[] = [];
  for (const acc of accounts.accounts ?? []) {
    let pageToken = "";
    do {
      const data = await gget<{ locations?: { name: string; title?: string; storefrontAddress?: { addressLines?: string[]; locality?: string } }[]; nextPageToken?: string }>(
        `https://mybusinessbusinessinformation.googleapis.com/v1/${acc.name}/locations?readMask=name,title,storefrontAddress&pageSize=100${pageToken ? `&pageToken=${pageToken}` : ""}`,
        token,
      );
      for (const loc of data.locations ?? []) {
        out.push({
          accountId: acc.name.replace("accounts/", ""),
          locationId: loc.name.replace("locations/", ""),
          title: loc.title ?? "",
          address: [...(loc.storefrontAddress?.addressLines ?? []), loc.storefrontAddress?.locality].filter(Boolean).join(", "),
        });
      }
      pageToken = data.nextPageToken ?? "";
    } while (pageToken);
  }
  return out;
}

/** Newest reviews first. One page (50) is plenty for a daily run; the report asks for more. */
export async function listReviews(token: string, accountId: string, locationId: string, maxPages = 1) {
  const reviews: GbpReview[] = [];
  let averageRating = 0;
  let totalReviewCount = 0;
  let pageToken = "";
  for (let page = 0; page < maxPages; page++) {
    const data = await gget<{ reviews?: GbpReview[]; averageRating?: number; totalReviewCount?: number; nextPageToken?: string }>(
      `https://mybusiness.googleapis.com/v4/accounts/${accountId}/locations/${locationId}/reviews?pageSize=50&orderBy=updateTime%20desc${pageToken ? `&pageToken=${pageToken}` : ""}`,
      token,
    );
    reviews.push(...(data.reviews ?? []));
    averageRating = data.averageRating ?? averageRating;
    totalReviewCount = data.totalReviewCount ?? totalReviewCount;
    pageToken = data.nextPageToken ?? "";
    if (!pageToken) break;
  }
  return Object.assign(reviews, { averageRating, totalReviewCount });
}

export async function postReply(token: string, accountId: string, locationId: string, reviewId: string, comment: string) {
  const res = await fetch(`https://mybusiness.googleapis.com/v4/accounts/${accountId}/locations/${locationId}/reviews/${reviewId}/reply`, {
    method: "PUT",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({ comment }),
  });
  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(`Reply failed ${res.status}: ${data.error?.message || ""}`);
  }
}

export function getReview(token: string, accountId: string, locationId: string, reviewId: string) {
  return gget<GbpReview>(`https://mybusiness.googleapis.com/v4/accounts/${accountId}/locations/${locationId}/reviews/${reviewId}`, token);
}
