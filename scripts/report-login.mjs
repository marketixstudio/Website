#!/usr/bin/env node
/**
 * Adds or updates a sign-in for the private review report (/r/login).
 *   npm run report-login
 * Asks for an email and a password (typed hidden), then writes only a scrypt hash into
 * REPORT_LOGINS in .env.local. Run it again with the same email to change the password.
 * Copy the REPORT_LOGINS line into Vercel too. Restart `npm run dev` afterwards.
 */
import { randomBytes, scryptSync } from "node:crypto";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import readline from "node:readline";

const ENV = ".env.local";

function ask(question, hidden = false) {
  return new Promise((resolve) => {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout, terminal: true });
    if (hidden) {
      rl._writeToOutput = (s) => {
        if (s.includes(question)) rl.output.write(s);
        else if (s.includes("\n") || s.includes("\r")) rl.output.write("\n");
        else rl.output.write("*");
      };
    }
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer.trim());
    });
  });
}

const email = (await ask("Email: ")).toLowerCase();
if (!/^[^\s@,:]+@[^\s@,:]+\.[^\s@,:]+$/.test(email)) {
  console.error("That doesn't look like an email.");
  process.exit(1);
}
const password = await ask("Password (at least 10 characters): ", true);
if (password.length < 10) {
  console.error("Use at least 10 characters.");
  process.exit(1);
}
if ((await ask("Type it again: ", true)) !== password) {
  console.error("The two passwords don't match. Nothing was saved.");
  process.exit(1);
}

const salt = randomBytes(16);
const entry = `${email}:${salt.toString("base64url")}.${scryptSync(password, salt, 32).toString("base64url")}`;

const env = existsSync(ENV) ? readFileSync(ENV, "utf8") : "";
const current = env.match(/^REPORT_LOGINS=(.*)$/m)?.[1] ?? "";
const kept = current.split(",").map((s) => s.trim()).filter((s) => s && !s.toLowerCase().startsWith(`${email}:`));
const line = `REPORT_LOGINS=${[...kept, entry].join(",")}`;
const next = /^REPORT_LOGINS=.*$/m.test(env) ? env.replace(/^REPORT_LOGINS=.*$/m, line) : `${env.replace(/\n?$/, "\n")}${line}\n`;
writeFileSync(ENV, next);

console.log(`\nSaved sign-in for ${email} in ${ENV} (the password itself is not stored).`);
console.log("Restart npm run dev, then open /r/login. For the live site, copy the REPORT_LOGINS line into Vercel.");
