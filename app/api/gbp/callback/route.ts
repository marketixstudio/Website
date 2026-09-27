import { exchangeCode, listLocations } from "@/lib/gbp";
import { adminState } from "@/lib/review-admin";

export const runtime = "nodejs";

const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c] || c);
const page = (body: string) =>
  new Response(
    `<!doctype html><meta name="robots" content="noindex"><title>Google connection</title><body style="font-family:system-ui;max-width:760px;margin:40px auto;padding:0 20px;line-height:1.6">${body}</body>`,
    { headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" } },
  );

/**
 * Step 2 of the one-time Google sign-in. Shows the refresh token to save as GBP_REFRESH_TOKEN
 * and the account/location ids of every business the account manages. Shown once, never stored.
 */
export async function GET(request: Request) {
  const url = new URL(request.url);
  if (url.searchParams.get("state") !== adminState()) return new Response("Not found", { status: 404 });
  const code = url.searchParams.get("code");
  if (!code) return page(`<h1>Sign-in cancelled</h1><p>${esc(url.searchParams.get("error") ?? "No code returned.")}</p>`);
  try {
    const tokens = await exchangeCode(code, `${url.origin}/api/gbp/callback`);
    const locations = await listLocations(tokens.access_token).catch((e: Error) => {
      throw new Error(`Signed in, but listing businesses failed: ${e.message}. This usually means the Business Profile API access is not approved yet.`);
    });
    const rows = locations
      .map((l) => `<tr><td>${esc(l.title)}<br><small>${esc(l.address)}</small></td><td><code>${esc(l.accountId)}</code></td><td><code>${esc(l.locationId)}</code></td></tr>`)
      .join("");
    return page(`<h1>Connected to Google Business Profile</h1>
<p><strong>1. Save this as <code>GBP_REFRESH_TOKEN</code></strong> in <code>.env.local</code> and in Vercel. It is shown only once; keep it secret.</p>
<pre style="background:#f4f4f5;padding:12px;border-radius:8px;white-space:pre-wrap;word-break:break-all">${esc(tokens.refresh_token ?? "(no refresh token returned: remove the app's access at myaccount.google.com/permissions and sign in again)")}</pre>
<p><strong>2. Businesses this account manages</strong> (send these ids to add to content/review-clients.ts):</p>
<table border="1" cellpadding="8" style="border-collapse:collapse"><tr><th>Business</th><th>accountId</th><th>locationId</th></tr>${rows || "<tr><td colspan=3>None found</td></tr>"}</table>`);
  } catch (e) {
    return page(`<h1>Something went wrong</h1><p>${esc(e instanceof Error ? e.message : String(e))}</p>`);
  }
}
