import { createHmac, randomBytes, scryptSync, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import { isReviewAdmin } from "@/lib/review-admin";

/**
 * Email + password sign-in for the private review tools (/r/login).
 *
 * REPORT_LOGINS holds "email:salt.hash" entries, comma separated, written by
 * `npm run report-login` (scripts/report-login.mjs). Passwords are never stored, only a
 * scrypt hash. A sign-in sets a signed, httpOnly cookie for 30 days, signed with
 * REVIEW_ADMIN_KEY (changing that key signs everyone out). The ?key= link still works.
 */

export const SESSION_COOKIE = "mx_review_session";
export const SESSION_DAYS = 30;

function logins() {
  const out = new Map<string, { salt: string; hash: string }>();
  for (const entry of (process.env.REPORT_LOGINS ?? "").split(",")) {
    const i = entry.lastIndexOf(":");
    if (i < 1) continue;
    const [salt, hash] = entry.slice(i + 1).trim().split(".");
    if (salt && hash) out.set(entry.slice(0, i).trim().toLowerCase(), { salt, hash });
  }
  return out;
}

export const loginConfigured = () => logins().size > 0 && Boolean(process.env.REVIEW_ADMIN_KEY);

export function checkPassword(email: string, password: string) {
  const user = logins().get(email.trim().toLowerCase());
  // Hash even for an unknown email so the response time does not reveal which emails exist.
  const salt = user?.salt ?? "0000000000000000";
  const actual = scryptSync(password, Buffer.from(salt, "base64url"), 32);
  if (!user) return false;
  const expected = Buffer.from(user.hash, "base64url");
  return expected.length === actual.length && timingSafeEqual(expected, actual);
}

const sign = (value: string) => createHmac("sha256", process.env.REVIEW_ADMIN_KEY ?? "").update(`session:${value}`).digest("base64url");

export function createSession(email: string) {
  const value = Buffer.from(JSON.stringify({ e: email.trim().toLowerCase(), x: Date.now() + SESSION_DAYS * 864e5 })).toString("base64url");
  return `${value}.${sign(value)}`;
}

/** The signed-in email, or null. Also rejects sessions for emails removed from REPORT_LOGINS. */
export function sessionEmail(): string | null {
  const raw = cookies().get(SESSION_COOKIE)?.value;
  if (!raw || !process.env.REVIEW_ADMIN_KEY) return null;
  const [value, sig] = raw.split(".");
  if (!value || !sig) return null;
  const a = Buffer.from(sign(value));
  const b = Buffer.from(sig);
  if (a.length !== b.length || !timingSafeEqual(a, b)) return null;
  try {
    const { e, x } = JSON.parse(Buffer.from(value, "base64url").toString()) as { e: string; x: number };
    return x > Date.now() && logins().has(e) ? e : null;
  } catch {
    return null;
  }
}

/** Signed in, or holding the admin key. Use in pages and API routes for the private tools. */
export const hasAdminAccess = (key?: unknown) => isReviewAdmin(key) || sessionEmail() !== null;

/** "email:salt.hash" entry for REPORT_LOGINS (same format as scripts/report-login.mjs). */
export function loginEntry(email: string, password: string) {
  const salt = randomBytes(16);
  return `${email.trim().toLowerCase()}:${salt.toString("base64url")}.${scryptSync(password, salt, 32).toString("base64url")}`;
}

/**
 * First sign-in can be created from the browser only on a local dev server with no
 * sign-in yet. On the live site this is always off (use npm run report-login + Vercel).
 */
export const canCreateFirstLogin = () => process.env.NODE_ENV === "development" && logins().size === 0 && Boolean(process.env.REVIEW_ADMIN_KEY);
