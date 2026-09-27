/**
 * Access check for the private review tools (reply helper, Google sign-in, location list).
 * The key lives in REVIEW_ADMIN_KEY; without it the tools are closed to everyone.
 */
export function isReviewAdmin(key: unknown) {
  const expected = process.env.REVIEW_ADMIN_KEY;
  return Boolean(expected) && typeof key === "string" && key.length >= 16 && key === expected;
}
