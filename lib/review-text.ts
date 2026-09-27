/**
 * Shared text helpers for the review tools (customer review drafts and owner replies):
 * language detection for Pune customers, and the no-repeat similarity checks.
 */

export const pick = <T,>(items: T[]) => items[Math.floor(Math.random() * items.length)];

/** Word-trigram overlap between two drafts (0 = nothing shared, 1 = identical). */
export function similarity(a: string, b: string) {
  const grams = (s: string) => {
    // Any script (Latin, Devanagari...): keep letters, marks and digits, drop punctuation.
    const w = s.toLowerCase().replace(/[^\p{L}\p{M}\p{N}\s]/gu, " ").split(/\s+/).filter(Boolean);
    const set = new Set<string>();
    for (let i = 0; i + 2 < w.length; i++) set.add(`${w[i]} ${w[i + 1]} ${w[i + 2]}`);
    return set;
  };
  const A = grams(a);
  const B = grams(b);
  if (!A.size || !B.size) return 0;
  let shared = 0;
  A.forEach((g) => B.has(g) && shared++);
  return shared / Math.min(A.size, B.size);
}

/** First three words match (case-insensitive): reads as the same template. */
export function sameStart(a: string, b: string) {
  const start = (s: string) => s.toLowerCase().split(/\s+/).slice(0, 3).join(" ");
  return start(a) === start(b);
}

/**
 * Which language to write in, decided from the customer's own notes (Pune customers write in
 * English, Marathi, Hindi or a mix). Devanagari script, romanised Marathi/Hindi, or English.
 */
const ROMAN_INDIC = new Set(
  "ekdum ekdam bhari mast zala zali zhala jhala khup chan chhan changla pan ahe aahe nahi nahin kaam hota hoti thoda lagla lagli karava karaycha bahut bohot accha acha achha hai tha thi bhi sahi badhiya ekdum ekdm tumhi aamhi kharach kiti ata atta bara barobar jhakaas zakas jhakas".split(" "),
);
export function detectLanguage(notes: string) {
  if (/[\u0900-\u097F]/.test(notes)) {
    return { code: "devanagari", instruction: "The customer wrote in Devanagari script (Marathi or Hindi). Write the whole review in that same language, in Devanagari." };
  }
  const words = notes.toLowerCase().match(/[a-z]+/g) ?? [];
  const indic = words.filter((w) => ROMAN_INDIC.has(w)).length;
  if (indic >= 1) {
    return {
      code: "romanised",
      instruction: "The customer wrote Marathi or Hindi in English letters, possibly mixed with English. Keep their Marathi/Hindi words exactly as they wrote them (do not translate them into English), keep the same mix and proportion, in English letters. Do not switch to Devanagari and do not add extra English sentences.",
    };
  }
  return { code: "english", instruction: "The customer wrote in English. Write in natural, casual Indian English only." };
}
