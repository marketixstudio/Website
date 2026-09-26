/**
 * Branded HTML emails sent by the site (via Resend): enquiry and growth-audit
 * leads to the team, the visitor's confirmation, Shalz chat leads and newsletter
 * sign-ups. One shared layout so every email looks the same.
 *
 * Email-client rules followed: tables for layout, inline styles, web-safe font
 * stack, 600px max width, a dark header band with the light-text logo (safe when
 * Gmail/Outlook force dark mode), bulletproof buttons, a plain-text part for every
 * email, and a hidden preheader. Copy follows the site rules: no dashes, no
 * invented promises (no reply-time guarantees).
 *
 * Preview locally at /api/dev/email-preview (development only).
 */
import { business } from "@/lib/site-config";
import { siteUrl } from "@/lib/seo";
import { EMAIL_LOGO_PNG_BASE64, EMAIL_WA_ICON_PNG_BASE64 } from "@/lib/email-logo";

const C = {
  violet: "#C82AEF",
  violetDeep: "#9425E4",
  violetText: "#8E16AC",
  ink: "#0A0A0C",
  body: "#2A2730",
  muted: "#6C6973",
  line: "#E7E3EC",
  soft: "#F7F5FA",
  page: "#F1EEF4",
  dark: "#0A090B",
};
const FONT = "'Plus Jakarta Sans',-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif";

export type Detail = [label: string, value: string];
export type Turn = { role: "user" | "assistant"; content: string };
type Email = { subject: string; html: string; text: string };

export function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[c] || c);
}
const esc = (v: string) => escapeHtml(v).replace(/\n/g, "<br>");
const firstNameOf = (name: string) => name.trim().split(/\s+/)[0] || name;
const digits = (phone: string) => phone.replace(/\D/g, "");
/** Indian numbers typed without the country code get +91 for WhatsApp links. */
const waNumber = (phone: string) => {
  const d = digits(phone);
  return d.length === 10 ? `91${d}` : d;
};

/**
 * Who receives lead notifications: CONTACT_TO_EMAIL, which may list several
 * addresses separated by commas. Falls back to the public business email.
 */
export function leadRecipients(): string[] {
  const list = (process.env.CONTACT_TO_EMAIL || "")
    .split(",")
    .map((s) => s.trim())
    .filter((s) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s));
  return list.length ? list : [business.email];
}

/**
 * The logo travels inside every email as an inline attachment (cid:marketix-logo),
 * so it shows even before marketixstudio.com serves it. Pass with every send.
 */
export const emailAttachments = [
  { filename: "marketix-logo.png", content: EMAIL_LOGO_PNG_BASE64, content_id: "marketix-logo" },
  { filename: "whatsapp.png", content: EMAIL_WA_ICON_PNG_BASE64, content_id: "wa-icon" },
];

/** Where images come from: embedded attachments when sent, URLs in the local preview. */
let assetBaseForRender: string | undefined;
const img = (cid: string, file: string) => (assetBaseForRender ? `${assetBaseForRender}/brand/${file}` : `cid:${cid}`);

/* ---------- building blocks ---------- */

/** Gmail auto-links bare domains in bright blue; link them ourselves in brand colour. */
const linkSite = (html: string) =>
  html.replace(/marketixstudio\.com/g, `<a href="${siteUrl}" style="color:${C.violetText};text-decoration:none;">marketixstudio.com</a>`);


type ButtonKind = "primary" | "gradient" | "whatsapp" | "ghost";

/** Pill button. Gradients get a solid fallback colour for clients that drop background-image. */
function button(href: string, text: string, kind: ButtonKind = "primary") {
  const styles: Record<ButtonKind, { bg: string; image?: string; fg: string; border: string }> = {
    primary: { bg: C.violet, fg: "#FFFFFF", border: C.violet },
    gradient: { bg: C.violet, image: `linear-gradient(135deg,${C.violet},${C.violetDeep})`, fg: "#FFFFFF", border: C.violetDeep },
    whatsapp: { bg: "#25D366", fg: "#FFFFFF", border: "#25D366" },
    ghost: { bg: "#FFFFFF", fg: C.ink, border: C.line },
  };
  const s = styles[kind];
  const icon =
    kind === "whatsapp"
      ? `<img src="${img("wa-icon", "whatsapp-white.png")}" width="18" height="18" alt="" style="display:inline-block;width:18px;height:18px;border:0;vertical-align:-4px;margin-right:8px;">`
      : "";
  return `<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="display:inline-table;margin:0 8px 10px 0;"><tr><td style="border-radius:999px;background-color:${s.bg};${s.image ? `background-image:${s.image};` : ""}border:1px solid ${s.border};">
<a href="${href}" style="display:inline-block;padding:12px 22px;font-family:${FONT};font-size:14px;font-weight:700;line-height:18px;color:${s.fg};text-decoration:none;border-radius:999px;">${icon}${text}</a>
</td></tr></table>`;
}

function label(text: string) {
  return `<p style="margin:0 0 8px;font-family:${FONT};font-size:13px;font-weight:700;color:${C.muted};">${escapeHtml(text)}</p>`;
}

function detailTable(rows: Detail[]) {
  if (!rows.length) return "";
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid ${C.line};border-radius:14px;border-collapse:separate;">
${rows
  .map(
    ([k, v], i) => `<tr>
<td class="mx-cell" style="padding:12px 16px;${i ? `border-top:1px solid ${C.line};` : ""}width:150px;vertical-align:top;font-family:${FONT};font-size:13px;font-weight:600;color:${C.muted};">${escapeHtml(k)}</td>
<td class="mx-cell" style="padding:12px 16px;${i ? `border-top:1px solid ${C.line};` : ""}vertical-align:top;font-family:${FONT};font-size:14px;color:${C.ink};line-height:1.5;word-break:break-word;">${esc(v)}</td>
</tr>`,
  )
  .join("")}
</table>`;
}

function quote(text: string) {
  return `<div style="background:${C.soft};border-left:3px solid ${C.violet};border-radius:10px;padding:16px 18px;font-family:${FONT};font-size:15px;line-height:1.7;color:${C.body};">${esc(text)}</div>`;
}

function transcript(turns: Turn[], botName: string) {
  return turns
    .map((t) => {
      const visitor = t.role === "user";
      return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 10px;"><tr><td align="${visitor ? "right" : "left"}">
<p style="margin:0 0 4px;font-family:${FONT};font-size:12px;font-weight:700;color:${visitor ? C.muted : C.violetText};">${visitor ? "Visitor" : escapeHtml(botName)}</p>
<div style="display:inline-block;max-width:85%;text-align:left;border-radius:14px;padding:10px 14px;font-family:${FONT};font-size:14px;line-height:1.6;${visitor ? `background:${C.violet};color:#FFFFFF;` : `background:${C.soft};color:${C.body};border:1px solid ${C.line};`}">${esc(t.content)}</div>
</td></tr></table>`;
    })
    .join("");
}

const section = (inner: string, pad = "28px 40px 0") => `<tr><td class="mx-pad" style="padding:${pad};">${inner}</td></tr>`;

/** The shared shell: dark logo band, white card, contact footer. */
function layout({ preheader, body, footerNote, assetBase }: { preheader: string; body: string; footerNote: string; assetBase?: string }) {
  // Sent emails use the embedded logo; the local preview page passes assetBase to load it by URL.
  const logo = assetBase ? `${assetBase}/brand/marketix-logo.png` : "cid:marketix-logo";
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="color-scheme" content="light only">
<meta name="supported-color-schemes" content="light only">
<title>Marketix Studio</title>
<style>
  @media (max-width:620px){ .mx-pad{padding-left:22px!important;padding-right:22px!important} .mx-cell{display:block!important;width:auto!important} }
</style>
</head>
<body style="margin:0;padding:0;background:${C.page};">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">${escapeHtml(preheader)}&#8199;&#65279;&#847;&#8199;&#65279;&#847;&#8199;&#65279;&#847;</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${C.page};">
<tr><td align="center" style="padding:28px 12px;">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px;max-width:100%;background:#FFFFFF;border-radius:20px;overflow:hidden;border:1px solid ${C.line};">
<tr><td class="mx-pad" style="background:${C.dark};padding:22px 40px;">
<a href="${siteUrl}" style="text-decoration:none;"><img src="${logo}" width="148" height="32" alt="Marketix Studio" style="display:block;width:148px;height:32px;border:0;font-family:${FONT};font-size:18px;font-weight:700;color:#FFFFFF;"></a>
</td></tr>
<tr><td style="height:3px;line-height:3px;font-size:0;background:${C.violet};background-image:linear-gradient(90deg,${C.violet},${C.violetDeep});">&nbsp;</td></tr>
${body}
<tr><td class="mx-pad" style="padding:32px 40px 0;"><div style="height:1px;background:${C.line};line-height:1px;font-size:0;">&nbsp;</div></td></tr>
<tr><td class="mx-pad" style="padding:20px 40px 30px;font-family:${FONT};font-size:13px;line-height:1.7;color:${C.muted};">
<strong style="color:${C.ink};">${business.name}</strong><br>

<a href="tel:${business.phone}" style="color:${C.violetText};text-decoration:none;">${business.phoneDisplay}</a> &nbsp;·&nbsp; <a href="mailto:${business.email}" style="color:${C.violetText};text-decoration:none;">${business.email}</a> &nbsp;·&nbsp; <a href="${siteUrl}" style="color:${C.violetText};text-decoration:none;">marketixstudio.com</a>
<p style="margin:12px 0 0;font-size:12px;color:${C.muted};">${linkSite(escapeHtml(footerNote))}</p>
</td></tr>
</table>
</td></tr>
</table>
</body>
</html>`;
}

function heading(kicker: string, title: string, intro?: string) {
  return section(
    `<p style="margin:0;font-family:${FONT};font-size:13px;font-weight:700;color:${C.violetText};">${escapeHtml(kicker)}</p>
<h1 style="margin:8px 0 0;font-family:${FONT};font-size:26px;font-weight:700;line-height:1.25;color:${C.ink};">${escapeHtml(title)}</h1>
${intro ? `<p style="margin:12px 0 0;font-family:${FONT};font-size:15px;line-height:1.7;color:${C.body};">${linkSite(escapeHtml(intro))}</p>` : ""}`,
    "34px 40px 0",
  );
}

function contactButtons(name: string, email: string, phone: string) {
  const first = escapeHtml(firstNameOf(name));
  return [
    email ? button(`mailto:${encodeURIComponent(email)}`, `Reply to ${first}`) : "",
    phone ? button(`tel:${encodeURIComponent(phone)}`, `Call ${escapeHtml(phone)}`, "gradient") : "",
    phone ? button(`https://wa.me/${waNumber(phone)}`, "WhatsApp", "whatsapp") : "",
  ].join("");
}

/* ---------- emails ---------- */

/** To the team: a contact-form enquiry or growth-audit request. */
export function leadEmail(opts: {
  type: "contact" | "growth-audit";
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  details: Detail[];
  assetBase?: string;
}): Email {
  assetBaseForRender = opts.assetBase;
  const audit = opts.type === "growth-audit";
  const who = opts.company ? `${opts.name}, ${opts.company}` : opts.name;
  const subject = audit ? `Growth audit request: ${opts.company || opts.name}` : `New enquiry: ${opts.company || opts.name}`;
  const body =
    heading(audit ? "Growth audit request" : "Website enquiry", who, `Sent from the ${audit ? "growth audit" : "contact"} form on marketixstudio.com. Replying to this email goes straight to ${firstNameOf(opts.name)}.`) +
    section(contactButtons(opts.name, opts.email, opts.phone), "22px 40px 0") +
    (opts.message ? section(label(audit ? "Main challenge" : "Message") + quote(opts.message)) : "") +
    section(label("Details") + detailTable(opts.details));
  const text = [
    subject,
    "",
    `Name: ${opts.name}`,
    ...opts.details.map(([k, v]) => `${k}: ${v}`),
    "",
    `${audit ? "Main challenge" : "Message"}:`,
    opts.message,
  ].join("\n");
  return {
    subject,
    html: layout({ preheader: opts.message.slice(0, 120) || subject, body, footerNote: "Lead notification from the website. Reply-to is set to the enquirer.", assetBase: opts.assetBase }),
    text,
  };
}

/** To the visitor: confirmation after a contact or growth-audit form. Short and useful: how to reach us now, a copy of what they sent, and (audits) what helps us start sooner. */
export function confirmationEmail(opts: { type: "contact" | "growth-audit"; name: string; company: string; message?: string; assetBase?: string }): Email {
  assetBaseForRender = opts.assetBase;
  const audit = opts.type === "growth-audit";
  const first = firstNameOf(opts.name);
  // Prefilled so the team knows the chat came from this email, who it is and which form they used.
  const waText = `Hi Marketix Studio, this is ${opts.name}${opts.company ? ` from ${opts.company}` : ""}. I just sent a ${audit ? "growth audit request" : "contact form enquiry"} on your website and I'm messaging from your confirmation email.`;
  const whatsapp = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(waText)}`;
  const subject = audit ? "Your growth audit request is in" : "We've got your message";
  const intro = audit
    ? `Your growth audit request${opts.company ? ` for ${opts.company}` : ""} has reached our team. We'll look at your ads, website, Google Maps listing and how enquiries are followed up, and come back with what to fix first.`
    : "Your message has reached our team and someone will get back to you soon.";
  const prepare: string[] = [
    "Your website link",
    "Your Google Maps (Business Profile) link",
    "Which ads you run now, if any: Google, Meta or both",
  ];
  const links: [string, string, string][] = [
    ["Case study", "How a Pune car accessories shop turns happy customers into Google reviews", `${siteUrl}/work/jayganesh-review-system`],
    ["Guide", "How to rank higher on Google Maps", `${siteUrl}/blog/how-to-rank-higher-on-google-maps`],
  ];
  const linkCards = links
    .map(
      ([kicker, title, href]) => `<tr><td style="padding:0 0 10px;"><a href="${href}" style="display:block;text-decoration:none;border:1px solid ${C.line};border-radius:14px;padding:14px 16px;">
<span style="display:block;font-family:${FONT};font-size:12px;font-weight:700;color:${C.violetText};">${kicker}</span>
<span style="display:block;margin-top:4px;font-family:${FONT};font-size:15px;font-weight:700;line-height:1.4;color:${C.ink};">${escapeHtml(title)} &rarr;</span>
</a></td></tr>`,
    )
    .join("");

  const body =
    heading(audit ? "Growth audit requested" : "Message received", `Thanks, ${first}. We've got it.`, intro) +
    section(
      `<p style="margin:0 0 14px;font-family:${FONT};font-size:15px;line-height:1.7;color:${C.body};">In a hurry? WhatsApp or call us, Monday to Saturday, ${business.openingHours.opens} to ${business.openingHours.closes} IST.</p>` +
        button(whatsapp, "WhatsApp us", "whatsapp") +
        button(`tel:${business.phone}`, `Call ${business.phoneDisplay}`, "gradient"),
      "22px 40px 0",
    ) +
    (audit
      ? section(
          label("Want us to start sooner? Reply with") +
            `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${C.soft};border-radius:14px;"><tr><td style="padding:14px 18px;">${prepare
              .map((p) => `<p style="margin:6px 0;font-family:${FONT};font-size:14px;line-height:1.6;color:${C.body};"><span style="color:${C.violet};font-weight:700;">&#10003;</span>&nbsp; ${escapeHtml(p)}</p>`)
              .join("")}</td></tr></table>`,
        )
      : "") +
    (opts.message ? section(label("What you sent us") + quote(opts.message)) : "") +
    section(label("While you wait") + `<table role="presentation" width="100%" cellpadding="0" cellspacing="0">${linkCards}</table>`);

  const text = [
    `Thanks, ${first}. We've got it.`,
    "",
    intro,
    "",
    `In a hurry? WhatsApp or call ${business.phoneDisplay}, Monday to Saturday, ${business.openingHours.opens} to ${business.openingHours.closes} IST.`,
    ...(audit ? ["", "Want us to start sooner? Reply with:", ...prepare.map((p) => `- ${p}`)] : []),
    ...(opts.message ? ["", "What you sent us:", opts.message] : []),
    "",
    "While you wait:",
    ...links.map(([, title, href]) => `${title}: ${href}`),
    "",
    business.name,
  ].join("\n");
  return {
    subject,
    html: layout({ preheader: intro, body, footerNote: "You're receiving this because you submitted a form on marketixstudio.com. Reply to this email to reach the team.", assetBase: opts.assetBase }),
    text,
  };
}

/** To the team: a lead captured by the Shalz chat assistant. */
export function chatLeadEmail(opts: { botName: string; name: string; phone: string; email: string; summary: string; transcript: Turn[]; assetBase?: string }): Email {
  assetBaseForRender = opts.assetBase;
  const subject = `Chat lead from ${opts.botName}: ${opts.name}`;
  const details: Detail[] = (
    [
      ["Name", opts.name],
      ["Phone", opts.phone],
      ["Email", opts.email],
      ["What they need", opts.summary],
    ] as Detail[]
  ).filter(([, v]) => v);
  const body =
    heading(`Chat lead from ${opts.botName}`, opts.name, opts.summary || "A visitor left their details in the website chat.") +
    section(contactButtons(opts.name, opts.email, opts.phone), "22px 40px 0") +
    section(label("Details") + detailTable(details)) +
    section(label("Conversation") + transcript(opts.transcript, opts.botName));
  const text = [
    subject,
    "",
    ...details.map(([k, v]) => `${k}: ${v}`),
    "",
    "Conversation:",
    ...opts.transcript.map((t) => `${t.role === "user" ? "Visitor" : opts.botName}: ${t.content}`),
  ].join("\n");
  return {
    subject,
    html: layout({ preheader: opts.summary || subject, body, footerNote: `Captured by ${opts.botName}, the AI assistant on marketixstudio.com. Check the details before calling.`, assetBase: opts.assetBase }),
    text,
  };
}

/** To the team: someone joined the newsletter from the footer. */
export function newsletterSignupEmail(opts: { email: string; assetBase?: string }): Email {
  assetBaseForRender = opts.assetBase;
  const subject = `Newsletter sign-up: ${opts.email}`;
  const body =
    heading("Newsletter sign-up", opts.email, "Someone joined the marketing notes list from the website footer.") +
    section(detailTable([["Email", opts.email], ["Source", "Website footer"]]));
  return {
    subject,
    html: layout({ preheader: `${opts.email} joined the newsletter`, body, footerNote: "Newsletter notification from the website. Reply-to is set to the subscriber.", assetBase: opts.assetBase }),
    text: `New newsletter sign-up from the website footer.\n\nEmail: ${opts.email}`,
  };
}
