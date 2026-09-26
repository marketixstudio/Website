import { chatLeadEmail, confirmationEmail, leadEmail, newsletterSignupEmail } from "@/lib/emails";
import { assistant } from "@/lib/site-config";

/**
 * Development-only preview of the site's emails with sample data:
 * /api/dev/email-preview?t=lead|audit|confirm|confirm-audit|chat|newsletter
 * Returns 404 in production. Nothing is sent.
 */
export function GET(request: Request) {
  if (process.env.NODE_ENV === "production") return new Response("Not found", { status: 404 });
  const url = new URL(request.url);
  const assetBase = url.origin;
  const sample = { name: "Priya Kulkarni", email: "priya@example.com", phone: "98765 43210", company: "Sample Realty" };

  const emails = {
    lead: () =>
      leadEmail({
        type: "contact",
        ...sample,
        message: "We're launching a 2 and 3 BHK project in Wakad next month and want Google and Meta ads for site visits.",
        details: [["Email", sample.email], ["Phone", sample.phone], ["Company", sample.company], ["Service", "Google Ads & PPC"], ["Budget", "₹1 lakh to ₹3 lakh a month"]],
        assetBase,
      }),
    audit: () =>
      leadEmail({
        type: "growth-audit",
        ...sample,
        message: "Plenty of leads from Meta but very few site visits.",
        details: [["Email", sample.email], ["Phone", sample.phone], ["Website", "samplerealty.in"], ["Industry", "Real estate"], ["Channels", "Meta ads, Google Ads"]],
        assetBase,
      }),
    confirm: () => confirmationEmail({ type: "contact", name: sample.name, company: sample.company, message: "We're launching a 2 and 3 BHK project in Wakad next month and want Google and Meta ads for site visits.", assetBase }),
    "confirm-audit": () => confirmationEmail({ type: "growth-audit", name: sample.name, company: sample.company, message: "Plenty of leads from Meta but very few site visits.", assetBase }),
    chat: () =>
      chatLeadEmail({
        botName: assistant.name,
        name: "Rahul",
        phone: "98765 43210",
        email: "",
        summary: "Wants site visits for a residential project in Wakad and asked for a callback.",
        transcript: [
          { role: "user", content: "I run a real estate project in Wakad and need site visits. Can someone call me?" },
          { role: "assistant", content: "Happy to help. Could you share your name and phone number? The team will call you during office hours." },
          { role: "user", content: "Rahul, 98765 43210" },
        ],
        assetBase,
      }),
    newsletter: () => newsletterSignupEmail({ email: "reader@example.com", assetBase }),
  } as const;

  const key = (url.searchParams.get("t") || "") as keyof typeof emails;
  if (!emails[key]) {
    const links = Object.keys(emails).map((k) => `<li><a href="?t=${k}">${k}</a></li>`).join("");
    return new Response(`<!doctype html><title>Email previews</title><body style="font-family:system-ui;padding:32px"><h1>Email previews</h1><ul>${links}</ul></body>`, {
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  }
  const { subject, html } = emails[key]();
  return new Response(html.replace("<title>Marketix Studio</title>", `<title>${subject}</title>`), { headers: { "Content-Type": "text/html; charset=utf-8" } });
}
