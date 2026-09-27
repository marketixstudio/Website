"use server";

import { promises as fs } from "node:fs";
import path from "node:path";
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { canCreateFirstLogin, checkPassword, createSession, loginConfigured, loginEntry, SESSION_COOKIE, SESSION_DAYS } from "@/lib/admin-auth";

// 5 wrong tries per IP per 15 minutes (per server instance).
const attempts = new Map<string, { n: number; until: number }>();
const WINDOW = 15 * 60 * 1000;

export async function signIn(_prev: { error: string }, form: FormData): Promise<{ error: string }> {
  if (!loginConfigured()) return { error: "Sign-in isn't set up yet. Run npm run report-login first." };
  const ip = headers().get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  const now = Date.now();
  const a = attempts.get(ip);
  if (a && a.until > now && a.n >= 5) return { error: "Too many tries. Wait 15 minutes and try again." };

  const email = String(form.get("email") ?? "").slice(0, 200);
  const password = String(form.get("password") ?? "").slice(0, 200);
  if (!checkPassword(email, password)) {
    attempts.set(ip, { n: (a && a.until > now ? a.n : 0) + 1, until: a && a.until > now ? a.until : now + WINDOW });
    return { error: "Wrong email or password." };
  }
  attempts.delete(ip);
  startSession(email);
  const next = String(form.get("next") ?? "");
  redirect(next.startsWith("/r/") && !next.startsWith("//") ? next : "/r/reports");
}

function startSession(email: string) {
  cookies().set(SESSION_COOKIE, createSession(email), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_DAYS * 86400,
  });
}

/** Local dev only, when no sign-in exists: saves the first email + password hash to .env.local. */
export async function createFirstLogin(_prev: { error: string }, form: FormData): Promise<{ error: string }> {
  const host = (headers().get("host") ?? "").split(":")[0];
  if (!canCreateFirstLogin() || !["localhost", "127.0.0.1"].includes(host)) return { error: "Creating a sign-in here is switched off." };
  const email = String(form.get("email") ?? "").trim().toLowerCase().slice(0, 200);
  const password = String(form.get("password") ?? "");
  if (!/^[^\s@,:]+@[^\s@,:]+\.[^\s@,:]+$/.test(email)) return { error: "Enter a valid email." };
  if (password.length < 10 || password.length > 200) return { error: "Use a password of at least 10 characters." };
  if (password !== String(form.get("confirm") ?? "")) return { error: "The two passwords don't match." };

  const entry = loginEntry(email, password);
  const file = path.join(process.cwd(), ".env.local");
  const env = await fs.readFile(file, "utf8").catch(() => "");
  const line = `REPORT_LOGINS=${entry}`;
  await fs.writeFile(file, /^REPORT_LOGINS=.*$/m.test(env) ? env.replace(/^REPORT_LOGINS=.*$/m, line) : `${env.replace(/\n?$/, "\n")}${line}\n`);
  process.env.REPORT_LOGINS = entry; // live now, without waiting for the dev server to reload
  startSession(email);
  redirect("/r/reports");
}
