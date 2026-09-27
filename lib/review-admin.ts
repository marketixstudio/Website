import { createHmac, timingSafeEqual } from "node:crypto";

/**
 * Access check for the private review tools (reply helper, Google sign-in, location list).
 * The key lives in REVIEW_ADMIN_KEY; without it the tools are closed to everyone.
 */
export function isReviewAdmin(key: unknown) {
  const expected = process.env.REVIEW_ADMIN_KEY;
  return Boolean(expected) && typeof key === "string" && key.length >= 16 && key === expected;
}

const sign = (value: string) => createHmac("sha256", process.env.REVIEW_ADMIN_KEY ?? "").update(value).digest("hex").slice(0, 32);

/** Signed "state" for the Google sign-in, so only a sign-in started with the admin key completes. */
export const adminState = () => sign("gbp-connect");

/**
 * Signature for the "approve and post" link in a low-rating email, so the link works
 * without putting the admin key in an email. Tied to one review of one business.
 */
export const reviewSignature = (client: string, reviewId: string) => sign(`approve:${client}:${reviewId}`);

export function verifyReviewSignature(client: string, reviewId: string, sig: unknown) {
  if (!process.env.REVIEW_ADMIN_KEY || typeof sig !== "string") return false;
  const a = Buffer.from(reviewSignature(client, reviewId));
  const b = Buffer.from(sig);
  return a.length === b.length && timingSafeEqual(a, b);
}
