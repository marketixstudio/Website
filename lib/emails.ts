/**
 * Branded HTML emails sent by the site (via Resend): enquiry and growth-audit
 * leads to the team, the visitor's confirmation, Riya chat leads and newsletter
 * sign-ups. One shared layout so every email looks the same.
 *
 * Email-client rules followed: tables for layout, inline styles (plus bgcolor for
 * Outlook), web-safe font stack, 600px max width, a dark header band with the
 * light-text logo (safe when Gmail/Outlook force dark mode), bulletproof buttons,
 * a plain-text part for every email, and a hidden preheader. Images load from the
 * live site, so nothing shows up as a stray attachment. Copy follows the site
 * rules: no dashes, no invented promises (no reply-time guarantees).
 *
 * Preview locally at /api/dev/email-preview (development only).
 */
import { business, fullAddress } from "@/lib/site-config";
import { siteUrl } from "@/lib/seo";

const C = {
  violet: "#C82AEF",
  violetText: "#8E16AC",
  violetTint: "#F7EEFB",
  ink: "#141217",
  body: "#3A3640",
  muted: "#77727F",
  line: "#E8E4ED",
  soft: "#F8F7FA",
  page: "#EFEDF2",
  dark: "#0A090B",
  darkMuted: "#A39DAC",
  whatsapp: "#1FAF55",
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
 * Images now load from the live site, so emails carry no attachments. Kept as an
 * empty list so the API routes that pass it to Resend keep working unchanged.
 */
export const emailAttachments: { filename: string; content: string; content_id: string }[] = [];

/** Image URLs: the live site when sent, the dev server in the local preview. */
let assetBaseForRender: string | undefined;
const asset = (file: string) => `${assetBaseForRender || siteUrl}/brand/${file}`;

/** "13 Oct 2026, 11:34 PM IST" */
function receivedAtIST(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).formatToParts(date);
  const get = (t: string) => parts.find((p) => p.type === t)?.value || "";
  return `${get("day")} ${get("month")} ${get("year")}, ${get("hour")}:${get("minute")} ${get("dayPeriod").toUpperCase()} IST`;
}

/** Gmail auto-links bare domains in bright blue; link them ourselves in brand colour. */
const linkSite = (html: string) =>
  html.replace(/marketixstudio\.com/g, `<a href="${siteUrl}" style="color:${C.violetText};text-decoration:none;">marketixstudio.com</a>`);

const link = (href: string, text: string) =>
  `<a href="${href}" style="color:${C.violetText};text-decoration:none;font-weight:600;">${text}</a>`;

/* ---------- building blocks ---------- */

type ButtonKind = "primary" | "outline" | "whatsapp";

/** Bulletproof pill button: the coloured cell is the button, so it survives clients that strip padding on links. */
function button(href: string, text: string, kind: ButtonKind = "primary") {
  const s = {
    primary: { bg: C.violet, fg: "#FFFFFF", border: C.violet },
    outline: { bg: "#FFFFFF", fg: C.ink, border: "#D6D0DE" },
    whatsapp: { bg: C.whatsapp, fg: "#FFFFFF", border: C.whatsapp },
  }[kind];
  const icon =
    kind === "whatsapp"
      ? `<img src="${asset("whatsapp-white.png")}" width="16" height="16" alt="" style="display:inline-block;width:16px;height:16px;border:0;vertical-align:-3px;margin-right:7px;">`
      : "";
  return `<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="display:inline-table;margin:0 8px 10px 0;"><tr><td bgcolor="${s.bg}" style="border-radius:999px;background-color:${s.bg};border:1px solid ${s.border};">
<a href="${href}" style="display:inline-block;padding:11px 20px;font-family:${FONT};font-size:14px;font-weight:700;line-height:18px;color:${s.fg};text-decoration:none;border-radius:999px;">${icon}${text}</a>
</td></tr></table>`;
}

/** Small uppercase section label. */
function label(text: string) {
  return `<p style="margin:0 0 10px;font-family:${FONT};font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:${C.muted};">${escapeHtml(text)}</p>`;
}

const section = (inner: string, pad = "28px 40px 0") => `<tr><td class="mx-pad" style="padding:${pad};">${inner}</td></tr>`;

/** Label/value rows. Values may contain trusted HTML (links) when `html` is set. */
function keyValueTable(rows: { k: string; v: string; html?: boolean }[], tinted = false) {
  if (!rows.length) return "";
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" ${tinted ? `bgcolor="${C.soft}"` : ""} style="border:1px solid ${C.line};border-radius:12px;border-collapse:separate;${tinted ? `background:${C.soft};` : ""}">
${rows
  .map(
    ({ k, v, html }, i) => `<tr>
<td class="mx-cell mx-key" style="padding:13px 18px;${i ? `border-top:1px solid ${C.line};` : ""}width:140px;vertical-align:top;font-family:${FONT};font-size:13px;line-height:21px;color:${C.muted};">${escapeHtml(k)}</td>
<td class="mx-cell" style="padding:13px 18px;${i ? `border-top:1px solid ${C.line};` : ""}vertical-align:top;font-family:${FONT};font-size:14px;font-weight:600;color:${C.ink};line-height:21px;word-break:break-word;">${html ? v : esc(v)}</td>
</tr>`,
  )
  .join("")}
</table>`;
}

function detailTable(rows: Detail[]) {
  return keyValueTable(rows.map(([k, v]) => ({ k, v })));
}

/** A message the visitor wrote, set apart from our own copy. */
function quote(text: string) {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td bgcolor="${C.soft}" style="background:${C.soft};border-left:3px solid ${C.violet};border-radius:0 12px 12px 0;padding:16px 20px;font-family:${FONT};font-size:15px;line-height:1.7;color:${C.body};">${esc(text)}</td></tr></table>`;
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

/** Numbered steps, used for "what happens next". */
function steps(items: [title: string, body: string][]) {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0">${items
    .map(
      ([title, body], i) => `<tr>
<td width="44" style="width:44px;padding:0 0 ${i === items.length - 1 ? 0 : 16}px;vertical-align:top;">
<table role="presentation" cellpadding="0" cellspacing="0"><tr><td width="30" height="30" align="center" bgcolor="${C.violetTint}" style="width:30px;height:30px;border-radius:999px;background:${C.violetTint};font-family:${FONT};font-size:13px;font-weight:700;line-height:30px;color:${C.violetText};">${i + 1}</td></tr></table>
</td>
<td style="padding:4px 0 ${i === items.length - 1 ? 0 : 16}px;vertical-align:top;font-family:${FONT};">
<p style="margin:0;font-size:15px;font-weight:700;color:${C.ink};">${escapeHtml(title)}</p>
<p style="margin:3px 0 0;font-size:14px;line-height:1.6;color:${C.body};">${escapeHtml(body)}</p>
</td></tr>`,
    )
    .join("")}</table>`;
}

/** The shared shell: dark logo band with a short tag, white card, contact footer. */
function layout({ preheader, tag, body, footerNote }: { preheader: string; tag: string; body: string; footerNote: string }) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="color-scheme" content="light only">
<meta name="supported-color-schemes" content="light only">
<title>Marketix Studio</title>
<style>
  @media (max-width:620px){
    .mx-pad{padding-left:22px!important;padding-right:22px!important}
    .mx-cell{display:block!important;width:auto!important}
    .mx-key{padding-bottom:0!important}
    .mx-tag{display:none!important}
    .mx-h1{font-size:22px!important}
  }
</style>
</head>
<body style="margin:0;padding:0;background:${C.page};-webkit-text-size-adjust:100%;">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">${escapeHtml(preheader)}&#8199;&#65279;&#847;&#8199;&#65279;&#847;&#8199;&#65279;&#847;&#8199;&#65279;&#847;</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" bgcolor="${C.page}" style="background:${C.page};">
<tr><td align="center" style="padding:32px 12px;">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" bgcolor="#FFFFFF" style="width:600px;max-width:100%;background:#FFFFFF;border-radius:16px;overflow:hidden;border:1px solid ${C.line};">
<tr><td class="mx-pad" bgcolor="${C.dark}" style="background:${C.dark};padding:22px 40px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>
<td style="vertical-align:middle;"><a href="${siteUrl}" style="text-decoration:none;"><img src="${asset("marketix-logo.png")}" width="140" height="30" alt="Marketix Studio" style="display:block;width:140px;height:30px;border:0;font-family:${FONT};font-size:18px;font-weight:700;color:#FFFFFF;"></a></td>
<td class="mx-tag" align="right" style="vertical-align:middle;font-family:${FONT};font-size:12px;font-weight:600;color:${C.darkMuted};">${escapeHtml(tag)}</td>
</tr></table>
</td></tr>
<tr><td bgcolor="${C.violet}" style="height:3px;line-height:3px;font-size:0;background:${C.violet};">&nbsp;</td></tr>
${body}
<tr><td class="mx-pad" style="padding:36px 40px 0;"><div style="height:1px;background:${C.line};line-height:1px;font-size:0;">&nbsp;</div></td></tr>
<tr><td class="mx-pad" style="padding:22px 40px 32px;font-family:${FONT};font-size:13px;line-height:1.7;color:${C.muted};">
<p style="margin:0;font-size:14px;font-weight:700;color:${C.ink};">${business.name}</p>
<p style="margin:2px 0 0;">${escapeHtml(fullAddress)}</p>
<p style="margin:6px 0 0;">${link(`tel:${business.phone}`, business.phoneDisplay)} &nbsp;&middot;&nbsp; ${link(`mailto:${business.email}`, business.email)} &nbsp;&middot;&nbsp; ${link(siteUrl, "marketixstudio.com")}</p>
<p style="margin:14px 0 0;font-size:12px;line-height:1.6;color:${C.muted};">${linkSite(escapeHtml(footerNote))}</p>
</td></tr>
</table>
</td></tr>
</table>
</body>
</html>`;
}

/** Title block: a quiet meta line, the headline, then an optional subline and intro. */
function heading(meta: string, title: string, opts: { sub?: string; intro?: string } = {}) {
  return section(
    `${meta ? `<p style="margin:0 0 8px;font-family:${FONT};font-size:13px;color:${C.muted};">${escapeHtml(meta)}</p>` : ""}
<h1 class="mx-h1" style="margin:0;font-family:${FONT};font-size:26px;font-weight:700;line-height:1.25;color:${C.ink};">${escapeHtml(title)}</h1>
${opts.sub ? `<p style="margin:6px 0 0;font-family:${FONT};font-size:15px;font-weight:600;color:${C.body};">${escapeHtml(opts.sub)}</p>` : ""}
${opts.intro ? `<p style="margin:14px 0 0;font-family:${FONT};font-size:15px;line-height:1.7;color:${C.body};">${linkSite(escapeHtml(opts.intro))}</p>` : ""}`,
    "36px 40px 0",
  );
}

/** The lead's contact details with tappable links, then the quick actions. */
function contactBlock(opts: { name: string; email: string; phone: string; preferred?: string }) {
  const rows: { k: string; v: string; html?: boolean }[] = [];
  if (opts.email) rows.push({ k: "Email", v: link(`mailto:${encodeURIComponent(opts.email)}`, escapeHtml(opts.email)), html: true });
  if (opts.phone) rows.push({ k: "Phone", v: link(`tel:${encodeURIComponent(opts.phone)}`, escapeHtml(opts.phone)), html: true });
  if (opts.preferred) rows.push({ k: "Prefers", v: opts.preferred });
  const first = escapeHtml(firstNameOf(opts.name));
  const actions = [
    opts.email ? button(`mailto:${encodeURIComponent(opts.email)}`, `Reply to ${first}`) : "",
    opts.phone ? button(`tel:${encodeURIComponent(opts.phone)}`, "Call", "outline") : "",
    opts.phone ? button(`https://wa.me/${waNumber(opts.phone)}`, "WhatsApp", "whatsapp") : "",
  ].join("");
  return keyValueTable(rows, true) + (actions ? `<div style="margin-top:16px;font-size:0;">${actions}</div>` : "");
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
  const kind = audit ? "Growth audit request" : "Website enquiry";
  const subject = audit ? `Growth audit request: ${opts.company || opts.name}` : `New enquiry: ${opts.name}${opts.company ? `, ${opts.company}` : ""}`;
  const pick = (key: string) => opts.details.find(([k]) => k === key)?.[1] || "";
  const service = pick("Service") || pick("Industry");
  const sub = [opts.company, service].filter(Boolean).join("  ·  ");
  // Email, phone, company and preference are shown above, so the table only holds the rest.
  const shown = new Set(["Email", "Phone", "Company", "Preferred contact", "Name"]);
  const rest = opts.details.filter(([k]) => !shown.has(k));

  const body =
    heading(`${kind}  ·  ${receivedAtIST()}`, opts.name, { sub }) +
    section(contactBlock({ name: opts.name, email: opts.email, phone: opts.phone, preferred: pick("Preferred contact") }), "22px 40px 0") +
    (opts.message ? section(label(audit ? "Main challenge" : "Message") + quote(opts.message)) : "") +
    (rest.length ? section(label("Enquiry details") + detailTable(rest)) : "");

  const text = [
    subject,
    `Received ${receivedAtIST()}`,
    "",
    `Name: ${opts.name}`,
    ...opts.details.map(([k, v]) => `${k}: ${v}`),
    "",
    `${audit ? "Main challenge" : "Message"}:`,
    opts.message,
  ].join("\n");
  return {
    subject,
    html: layout({
      preheader: opts.message.slice(0, 120) || subject,
      tag: audit ? "New audit request" : "New enquiry",
      body,
      footerNote: `Sent automatically from the ${audit ? "growth audit" : "contact"} form on marketixstudio.com. Replying to this email goes straight to ${firstNameOf(opts.name)}.`,
    }),
    text,
  };
}

/** To the visitor: confirmation after a contact or growth-audit form. Warm, short and useful: what happens next, how to reach us now, a copy of what they sent. */
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
    : "Thank you for reaching out to Marketix Studio. Your message has reached our team, and the right person will get back to you.";
  const next: [string, string][] = audit
    ? [
        ["We review your marketing", "Ads, website, Google Maps listing and how enquiries are followed up."],
        ["You'll hear from us", "A reply by email or your preferred channel with what we found."],
        ["We agree what to fix first", "Practical priorities for your business, not a generic pitch."],
      ]
    : [
        ["We review your message", "Your enquiry goes to the person closest to what you described."],
        ["You'll hear from us", "A reply by email or your preferred channel."],
        ["We shape a plan", "Practical next steps for your goal, not a generic pitch."],
      ];
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
      ([kicker, title, href]) => `<tr><td style="padding:0 0 10px;"><a href="${href}" style="display:block;text-decoration:none;border:1px solid ${C.line};border-radius:12px;padding:14px 18px;">
<span style="display:block;font-family:${FONT};font-size:12px;font-weight:600;color:${C.muted};">${kicker}</span>
<span style="display:block;margin-top:3px;font-family:${FONT};font-size:15px;font-weight:700;line-height:1.4;color:${C.ink};">${escapeHtml(title)} <span style="color:${C.violetText};">&rarr;</span></span>
</a></td></tr>`,
    )
    .join("");
  const hours = `Monday to Saturday, ${business.openingHours.opens} to ${business.openingHours.closes} IST`;

  const body =
    heading("", `Thanks, ${first}. We've got it.`, { intro }) +
    section(label("What happens next") + steps(next)) +
    section(
      `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" bgcolor="${C.soft}" style="background:${C.soft};border:1px solid ${C.line};border-radius:12px;"><tr><td style="padding:20px 22px 12px;">
<p style="margin:0;font-family:${FONT};font-size:15px;font-weight:700;color:${C.ink};">Need to talk sooner?</p>
<p style="margin:4px 0 14px;font-family:${FONT};font-size:14px;line-height:1.6;color:${C.body};">WhatsApp or call us, ${hours}.</p>
<div style="font-size:0;">${button(whatsapp, "WhatsApp us", "whatsapp")}${button(`tel:${business.phone}`, `Call ${business.phoneDisplay}`, "outline")}</div>
</td></tr></table>`,
    ) +
    (audit
      ? section(
          label("Want us to start sooner? Reply with") +
            `<table role="presentation" width="100%" cellpadding="0" cellspacing="0">${prepare
              .map((p) => `<tr><td style="padding:4px 0;font-family:${FONT};font-size:14px;line-height:1.6;color:${C.body};"><span style="color:${C.violet};font-weight:700;">&#10003;</span>&nbsp;&nbsp;${escapeHtml(p)}</td></tr>`)
              .join("")}</table>`,
        )
      : "") +
    (opts.message ? section(label("Your message") + quote(opts.message)) : "") +
    section(label("While you wait") + `<table role="presentation" width="100%" cellpadding="0" cellspacing="0">${linkCards}</table>`) +
    section(
      `<p style="margin:0;font-family:${FONT};font-size:15px;line-height:1.7;color:${C.body};">Warm regards,<br><strong style="color:${C.ink};">Team ${business.name}</strong></p>`,
      "26px 40px 0",
    );

  const text = [
    `Thanks, ${first}. We've got it.`,
    "",
    intro,
    "",
    "What happens next:",
    ...next.map(([t, b], i) => `${i + 1}. ${t}: ${b}`),
    "",
    `Need to talk sooner? WhatsApp or call ${business.phoneDisplay}, ${hours}.`,
    ...(audit ? ["", "Want us to start sooner? Reply with:", ...prepare.map((p) => `- ${p}`)] : []),
    ...(opts.message ? ["", "Your message:", opts.message] : []),
    "",
    "While you wait:",
    ...links.map(([, title, href]) => `${title}: ${href}`),
    "",
    "Warm regards,",
    `Team ${business.name}`,
    fullAddress,
  ].join("\n");
  return {
    subject,
    html: layout({
      preheader: intro,
      tag: audit ? "Audit request received" : "Message received",
      body,
      footerNote: "You're receiving this because you submitted a form on marketixstudio.com. Reply to this email to reach the team.",
    }),
    text,
  };
}

/** To the team: a lead captured by the Riya chat assistant. */
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
    heading(`Chat lead from ${opts.botName}  ·  ${receivedAtIST()}`, opts.name, { intro: opts.summary || "A visitor left their details in the website chat." }) +
    section(contactBlock({ name: opts.name, email: opts.email, phone: opts.phone }), "22px 40px 0") +
    section(label("Conversation") + transcript(opts.transcript, opts.botName));
  const text = [
    subject,
    `Received ${receivedAtIST()}`,
    "",
    ...details.map(([k, v]) => `${k}: ${v}`),
    "",
    "Conversation:",
    ...opts.transcript.map((t) => `${t.role === "user" ? "Visitor" : opts.botName}: ${t.content}`),
  ].join("\n");
  return {
    subject,
    html: layout({
      preheader: opts.summary || subject,
      tag: "New chat lead",
      body,
      footerNote: `Captured by ${opts.botName}, the AI assistant on marketixstudio.com. Check the details before calling.`,
    }),
    text,
  };
}

/** To the team: someone joined the newsletter from the footer. */
export function newsletterSignupEmail(opts: { email: string; assetBase?: string }): Email {
  assetBaseForRender = opts.assetBase;
  const subject = `Newsletter sign-up: ${opts.email}`;
  const body =
    heading(`Newsletter sign-up  ·  ${receivedAtIST()}`, opts.email, { intro: "Someone joined the marketing notes list from the website footer." }) +
    section(detailTable([["Email", opts.email], ["Source", "Website footer"]]), "22px 40px 0");
  return {
    subject,
    html: layout({
      preheader: `${opts.email} joined the newsletter`,
      tag: "Newsletter",
      body,
      footerNote: "Newsletter notification from the website. Reply-to is set to the subscriber.",
    }),
    text: `New newsletter sign-up from the website footer.\n\nEmail: ${opts.email}`,
  };
}
