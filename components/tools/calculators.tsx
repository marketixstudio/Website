"use client";

import { useMemo, useState } from "react";
import { Check, Copy } from "lucide-react";

const fieldClass =
  "mt-2 w-full rounded-lg border border-line bg-card px-4 py-3 font-sans text-[15px] text-ink placeholder:text-muted focus:border-accent focus:outline-none";
const labelClass = "font-sans text-sm font-semibold text-ink";
const shellClass = "rounded-xl border border-line bg-card p-6 sm:p-8";

function Result({ items }: { items: { label: string; value: string; hint?: string }[] }) {
  return (
    <dl className="mt-8 grid gap-4 border-t border-line pt-8 sm:grid-cols-3">
      {items.map((item) => (
        <div key={item.label}>
          <dt className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-muted">
            {item.label}
          </dt>
          <dd className="mt-1.5 font-display text-2xl font-extrabold tracking-tight text-accent-strong">
            {item.value}
          </dd>
          {item.hint && <p className="mt-1 font-sans text-xs text-muted">{item.hint}</p>}
        </div>
      ))}
    </dl>
  );
}

export function RoasCalculator() {
  const [price, setPrice] = useState(2000);
  const [cogs, setCogs] = useState(800);
  const [shipping, setShipping] = useState(120);
  const [returnRate, setReturnRate] = useState(8);
  const [fees, setFees] = useState(2.5);
  const [targetMargin, setTargetMargin] = useState(20);

  const result = useMemo(() => {
    if (price <= 0) return null;
    const feeCost = price * (fees / 100);
    const grossPerOrder = price - cogs - shipping - feeCost;
    // A returned order refunds revenue but the fulfilment cost is already spent.
    const lossPerReturn = cogs + shipping;
    const netPerOrder = grossPerOrder - (returnRate / 100) * lossPerReturn;
    const marginPct = netPerOrder / price;
    if (marginPct <= 0) return { breakEven: null, target: null, marginPct };
    return {
      breakEven: 1 / marginPct,
      target: 1 / Math.max(marginPct - targetMargin / 100, 0.0001),
      marginPct,
    };
  }, [price, cogs, shipping, returnRate, fees, targetMargin]);

  return (
    <div className={shellClass}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="roas-price">Average order value</label>
          <input id="roas-price" type="number" min={0} value={price} onChange={(e) => setPrice(+e.target.value)} className={fieldClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="roas-cogs">Cost of goods per order</label>
          <input id="roas-cogs" type="number" min={0} value={cogs} onChange={(e) => setCogs(+e.target.value)} className={fieldClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="roas-ship">Shipping cost per order</label>
          <input id="roas-ship" type="number" min={0} value={shipping} onChange={(e) => setShipping(+e.target.value)} className={fieldClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="roas-returns">Return rate (%)</label>
          <input id="roas-returns" type="number" min={0} max={100} value={returnRate} onChange={(e) => setReturnRate(+e.target.value)} className={fieldClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="roas-fees">Payment gateway fees (%)</label>
          <input id="roas-fees" type="number" min={0} max={100} step={0.1} value={fees} onChange={(e) => setFees(+e.target.value)} className={fieldClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="roas-target">Target profit margin (%)</label>
          <input id="roas-target" type="number" min={0} max={100} value={targetMargin} onChange={(e) => setTargetMargin(+e.target.value)} className={fieldClass} />
        </div>
      </div>

      {result && result.breakEven ? (
        <Result
          items={[
            { label: "Contribution margin", value: `${(result.marginPct * 100).toFixed(1)}%`, hint: "After COGS, shipping, returns and fees" },
            { label: "Break-even ROAS", value: `${result.breakEven.toFixed(2)}x`, hint: "Below this you lose money on every sale" },
            { label: "Target ROAS", value: `${result.target!.toFixed(2)}x`, hint: `To hit ${targetMargin}% profit margin` },
          ]}
        />
      ) : (
        <p className="mt-8 border-t border-line pt-8 font-sans text-sm text-muted">
          At these numbers each order loses money before any ad spend. Reduce costs or raise
          price before scaling advertising.
        </p>
      )}
    </div>
  );
}

export function AdBudgetCalculator() {
  const [leads, setLeads] = useState(50);
  const [cpc, setCpc] = useState(40);
  const [conversionRate, setConversionRate] = useState(5);
  const [testingBuffer, setTestingBuffer] = useState(25);

  const result = useMemo(() => {
    if (conversionRate <= 0 || cpc <= 0 || leads <= 0) return null;
    const clicks = leads / (conversionRate / 100);
    const base = clicks * cpc;
    const total = base * (1 + testingBuffer / 100);
    return { clicks, base, total, cpl: total / leads };
  }, [leads, cpc, conversionRate, testingBuffer]);

  const money = (n: number) => `₹${Math.round(n).toLocaleString("en-IN")}`;

  return (
    <div className={shellClass}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="ab-leads">Leads needed per month</label>
          <input id="ab-leads" type="number" min={1} value={leads} onChange={(e) => setLeads(+e.target.value)} className={fieldClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="ab-cpc">Expected cost per click</label>
          <input id="ab-cpc" type="number" min={1} value={cpc} onChange={(e) => setCpc(+e.target.value)} className={fieldClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="ab-cvr">Landing page conversion rate (%)</label>
          <input id="ab-cvr" type="number" min={0.1} max={100} step={0.1} value={conversionRate} onChange={(e) => setConversionRate(+e.target.value)} className={fieldClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="ab-buffer">Testing buffer (%)</label>
          <input id="ab-buffer" type="number" min={0} max={100} value={testingBuffer} onChange={(e) => setTestingBuffer(+e.target.value)} className={fieldClass} />
        </div>
      </div>

      {result && (
        <Result
          items={[
            { label: "Clicks required", value: Math.ceil(result.clicks).toLocaleString("en-IN"), hint: "To produce your lead target" },
            { label: "Monthly budget", value: money(result.total), hint: `Includes ${testingBuffer}% testing allowance` },
            { label: "Cost per lead", value: money(result.cpl), hint: "All-in, including testing" },
          ]}
        />
      )}

      <p className="mt-6 font-sans text-sm leading-relaxed text-muted">
        Raising conversion rate is usually cheaper than raising budget. At{" "}
        {(conversionRate * 2).toFixed(1)}% conversion, the same {leads} leads would cost
        roughly {result ? money(result.total / 2) : "half"} per month.
      </p>
    </div>
  );
}

const SOURCE_PRESETS = [
  { source: "google", medium: "cpc" },
  { source: "facebook", medium: "paid_social" },
  { source: "instagram", medium: "paid_social" },
  { source: "linkedin", medium: "paid_social" },
  { source: "newsletter", medium: "email" },
  { source: "whatsapp", medium: "referral" },
];

const slug = (value: string) =>
  value.trim().toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9_\-.]/g, "");

export function UtmBuilder() {
  const [url, setUrl] = useState("");
  const [source, setSource] = useState("google");
  const [medium, setMedium] = useState("cpc");
  const [campaign, setCampaign] = useState("");
  const [term, setTerm] = useState("");
  const [content, setContent] = useState("");
  const [copied, setCopied] = useState(false);

  const built = useMemo(() => {
    if (!url.trim()) return { link: "", error: "" };
    let parsed: URL;
    try {
      parsed = new URL(url.trim());
    } catch {
      return { link: "", error: "Enter a full URL including https://" };
    }
    const params = parsed.searchParams;
    if (slug(source)) params.set("utm_source", slug(source));
    if (slug(medium)) params.set("utm_medium", slug(medium));
    if (slug(campaign)) params.set("utm_campaign", slug(campaign));
    if (slug(term)) params.set("utm_term", slug(term));
    if (slug(content)) params.set("utm_content", slug(content));
    return { link: parsed.toString(), error: "" };
  }, [url, source, medium, campaign, term, content]);

  async function copy() {
    if (!built.link) return;
    try {
      await navigator.clipboard.writeText(built.link);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable - the field is selectable */
    }
  }

  return (
    <div className={shellClass}>
      <div>
        <label className={labelClass} htmlFor="utm-url">Destination URL</label>
        <input id="utm-url" type="url" inputMode="url" placeholder="https://www.example.com/landing-page" value={url} onChange={(e) => setUrl(e.target.value)} className={fieldClass} />
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {SOURCE_PRESETS.map((preset) => (
          <button
            key={preset.source}
            type="button"
            onClick={() => { setSource(preset.source); setMedium(preset.medium); }}
            className={`rounded-full border px-3.5 py-1.5 font-sans text-xs font-semibold transition-colors ${
              source === preset.source
                ? "border-accent bg-accent/12 text-accent-strong"
                : "border-line text-muted hover:border-accent/40 hover:text-ink"
            }`}
          >
            {preset.source}
          </button>
        ))}
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="utm-source">Source <span className="font-normal text-muted">(required)</span></label>
          <input id="utm-source" value={source} onChange={(e) => setSource(e.target.value)} className={fieldClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="utm-medium">Medium <span className="font-normal text-muted">(required)</span></label>
          <input id="utm-medium" value={medium} onChange={(e) => setMedium(e.target.value)} className={fieldClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="utm-campaign">Campaign</label>
          <input id="utm-campaign" placeholder="diwali-sale-2026" value={campaign} onChange={(e) => setCampaign(e.target.value)} className={fieldClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="utm-content">Content <span className="font-normal text-muted">(optional)</span></label>
          <input id="utm-content" placeholder="carousel-v2" value={content} onChange={(e) => setContent(e.target.value)} className={fieldClass} />
        </div>
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="utm-term">Term <span className="font-normal text-muted">(paid search keyword)</span></label>
          <input id="utm-term" placeholder="performance-marketing-agency" value={term} onChange={(e) => setTerm(e.target.value)} className={fieldClass} />
        </div>
      </div>

      <div className="mt-8 border-t border-line pt-8">
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-muted">
          Your tagged URL
        </p>
        {built.error ? (
          <p className="mt-3 font-sans text-sm text-error">{built.error}</p>
        ) : (
          <>
            <p className="mt-3 break-all rounded-lg bg-surface p-4 font-mono text-[13px] leading-relaxed text-ink-2">
              {built.link || "Enter a destination URL to build your link."}
            </p>
            {built.link && (
              <button type="button" onClick={copy} className="btn-primary mt-4">
                {copied ? (<><Check className="h-4 w-4" strokeWidth={2.5} /> Copied</>) : (<><Copy className="h-4 w-4" strokeWidth={2} /> Copy link</>)}
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}
