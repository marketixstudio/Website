/**
 * Minimal Google API client for the blog automation (no dependencies): service-account login
 * signed with node:crypto, plus the few calls we need from Sheets, Search Console and GA4.
 *
 * Env: GOOGLE_SERVICE_ACCOUNT_JSON (the whole key file as one secret),
 *      Optional overrides: CALENDAR_SHEET_ID, GSC_SITE, GA4_PROPERTY_ID (defaults below).
 * The service account (marketix-automation-bot@marketix-automation.iam.gserviceaccount.com)
 * must be an Editor on the sheet, a user on the Search Console property and a Viewer on GA4.
 */
import { createSign } from "node:crypto";

// Marketix defaults (not secrets); env vars override them.
export const SHEET_ID = process.env.CALENDAR_SHEET_ID || "1-8DBggLs45yARz6OUlidLpDacXC1zOC_RfC4we4ySUU";
export const GSC_SITE = process.env.GSC_SITE || "https://www.marketixstudio.com/";
export const GA4_PROPERTY = process.env.GA4_PROPERTY_ID || "479854747";

const SCOPES = [
  "https://www.googleapis.com/auth/spreadsheets",
  "https://www.googleapis.com/auth/webmasters",
  "https://www.googleapis.com/auth/analytics.readonly",
];

let cached;
async function token() {
  if (cached && cached.exp > Date.now() + 60_000) return cached.token;
  const raw = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
  if (!raw) throw new Error("GOOGLE_SERVICE_ACCOUNT_JSON is not set");
  let key;
  try {
    key = JSON.parse(raw);
  } catch {
    throw new Error("GOOGLE_SERVICE_ACCOUNT_JSON is not the JSON key file. Paste the whole downloaded .json file (it starts with {\"type\": \"service_account\"), not the key ID.");
  }
  if (!key.private_key || !key.client_email) throw new Error("GOOGLE_SERVICE_ACCOUNT_JSON is missing private_key/client_email: paste the whole service account key file.");
  const now = Math.floor(Date.now() / 1000);
  const b64 = (o) => Buffer.from(JSON.stringify(o)).toString("base64url");
  const unsigned = `${b64({ alg: "RS256", typ: "JWT" })}.${b64({ iss: key.client_email, scope: SCOPES.join(" "), aud: key.token_uri, iat: now, exp: now + 3600 })}`;
  const sig = createSign("RSA-SHA256").update(unsigned).sign(key.private_key, "base64url");
  const res = await fetch(key.token_uri, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer", assertion: `${unsigned}.${sig}` }),
  });
  if (!res.ok) throw new Error(`Google login failed: ${res.status} ${await res.text()}`);
  const data = await res.json();
  cached = { token: data.access_token, exp: Date.now() + data.expires_in * 1000 };
  return cached.token;
}

async function call(url, { method = "GET", body } = {}) {
  const res = await fetch(url, {
    method,
    headers: { Authorization: `Bearer ${await token()}`, "Content-Type": "application/json" },
    body: body ? JSON.stringify(body) : undefined,
  });
  const text = await res.text();
  if (!res.ok) throw new Error(`${method} ${url.split("?")[0]} -> ${res.status} ${text.slice(0, 300)}`);
  return text ? JSON.parse(text) : {};
}

export const googleConfigured = () => Boolean(process.env.GOOGLE_SERVICE_ACCOUNT_JSON);

// ---------- Sheets (content calendar; columns A..N, header in row 1) ----------
export const COLUMNS = ["Date", "Category", "Focus keyword", "Title", "Status", "PR link", "Live URL", "Indexed", "Clicks (28d)", "Impressions (28d)", "Avg position", "Views (28d)", "Last checked", "Notes"];
const sheetUrl = (path) => `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}${path}`;

export async function readRows() {
  const data = await call(sheetUrl(`/values/${encodeURIComponent("A2:N")}`));
  return (data.values ?? []).map((v, i) => ({ row: i + 2, values: COLUMNS.map((_, c) => v[c] ?? "") }));
}

export async function appendRow(values) {
  await call(sheetUrl(`/values/${encodeURIComponent("A:N")}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`), {
    method: "POST",
    body: { values: [values] },
  });
}

export async function updateRow(row, values) {
  await call(sheetUrl(`/values/${encodeURIComponent(`A${row}:N${row}`)}?valueInputOption=USER_ENTERED`), {
    method: "PUT",
    body: { values: [values] },
  });
}

// ---------- Search Console ----------
const site = () => encodeURIComponent(GSC_SITE);

/** Tell Google the sitemap changed (the supported way to get new blog posts crawled). */
export const submitSitemap = (sitemapUrl) =>
  call(`https://www.googleapis.com/webmasters/v3/sites/${site()}/sitemaps/${encodeURIComponent(sitemapUrl)}`, { method: "PUT" });

/** Google's own verdict on one URL: indexed or not, and why. */
export async function inspectUrl(url) {
  const data = await call("https://searchconsole.googleapis.com/v1/urlInspection/index:inspect", {
    method: "POST",
    body: { inspectionUrl: url, siteUrl: GSC_SITE },
  });
  const r = data.inspectionResult?.indexStatusResult ?? {};
  return { verdict: r.verdict ?? "UNKNOWN", coverage: r.coverageState ?? "", lastCrawl: r.lastCrawlTime ?? "" };
}

/** Clicks, impressions and average position per page over the last 28 days. */
export async function pageSearchStats() {
  const end = new Date(Date.now() - 2 * 864e5).toISOString().slice(0, 10); // GSC data lags ~2 days
  const start = new Date(Date.now() - 30 * 864e5).toISOString().slice(0, 10);
  const data = await call(`https://www.googleapis.com/webmasters/v3/sites/${site()}/searchAnalytics/query`, {
    method: "POST",
    body: { startDate: start, endDate: end, dimensions: ["page"], rowLimit: 1000 },
  });
  return new Map((data.rows ?? []).map((r) => [r.keys[0], { clicks: r.clicks, impressions: r.impressions, position: r.position }]));
}

// ---------- GA4 ----------
/** Page views per path over the last 28 days. */
export async function pageViews() {
  const data = await call(`https://analyticsdata.googleapis.com/v1beta/properties/${GA4_PROPERTY}:runReport`, {
    method: "POST",
    body: {
      dateRanges: [{ startDate: "28daysAgo", endDate: "yesterday" }],
      dimensions: [{ name: "pagePath" }],
      metrics: [{ name: "screenPageViews" }],
      dimensionFilter: { filter: { fieldName: "pagePath", stringFilter: { matchType: "BEGINS_WITH", value: "/blog/" } } },
      limit: 1000,
    },
  });
  return new Map((data.rows ?? []).map((r) => [r.dimensionValues[0].value, Number(r.metricValues[0].value)]));
}
