/**
 * Access check for the private review tools (reply helper, Google sign-in, location list).
 * The key lives in REVIEW_ADMIN_KEY; without it the tools are closed to everyone.
 */
export function isReviewAdmin(key: unknown) {
  const expected = process.env.REVIEW_ADMIN_KEY;
  return Boolean(expected) && typeof key === "string" && key.length >= 16 && key === expected;
}

/** Signed "state" for the Google sign-in, so only a sign-in started with the admin key completes. */
export function adminState() {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { createHmac } = require("node:crypto") as typeof import("node:crypto");
  return createHmac("sha256", process.env.REVIEW_ADMIN_KEY ?? "").update("gbp-connect").digest("hex").slice(0, 32);
}
