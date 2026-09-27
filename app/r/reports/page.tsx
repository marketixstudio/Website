import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { reviewClientList } from "@/content/review-clients";
import { hasAdminAccess, sessionEmail } from "@/lib/admin-auth";
import { buildReport, monthName, parsePeriod, shortDay, type Report } from "@/lib/review-report";
import { ReplyQueue } from "@/components/tools/reply-queue";

export const metadata: Metadata = { title: "Review report", robots: { index: false, follow: false } };
export const dynamic = "force-dynamic";

/**
 * Private review report: /r/reports?client=<slug>&period=7d|30d|YYYY-MM|all, after signing in
 * at /r/login (or with ?key=<REVIEW_ADMIN_KEY>). Drafts written on the review page, what came
 * in on Google, replies (automatic and manual), and the reviews still waiting for a reply.
 */
export default async function Page({ searchParams }: { searchParams: { key?: string; client?: string; period?: string } }) {
  if (!hasAdminAccess(searchParams.key)) redirect("/r/login?next=/r/reports");
  const key = searchParams.key ?? "";
  const email = sessionEmail();
  const client = reviewClientList.find((c) => c.slug === searchParams.client) ?? reviewClientList[0];
  if (!client) notFound();
  const report = await buildReport(client, parsePeriod(searchParams.period));
  const href = (o: { client?: string; period?: string }) =>
    `/r/reports?${new URLSearchParams({ ...(key ? { key } : {}), client: o.client ?? client.slug, period: o.period ?? report.period })}`;
  const g = report.google;

  return (
    <div className="min-h-screen bg-neutral-50 px-5 py-10 text-[#0A0A0C] sm:py-12">
      <div className="mx-auto w-full max-w-5xl">
        <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-neutral-500">
          <p className="font-semibold">Private report</p>
          {email && (
            <form action="/r/logout" method="post" className="flex items-center gap-3">
              <span>{email}</span>
              <button type="submit" className="font-semibold text-neutral-700 underline underline-offset-4 hover:text-black">Sign out</button>
            </form>
          )}
        </div>
        <h1 className="mt-1 text-2xl font-extrabold sm:text-3xl">Google reviews: {client.businessName}</h1>

        <nav aria-label="Business" className="mt-6 flex flex-wrap gap-2">
          {reviewClientList.map((c) => (
            <Link key={c.slug} href={href({ client: c.slug })} aria-current={c.slug === client.slug ? "page" : undefined} className={chip(c.slug === client.slug)}>
              {c.businessName}
            </Link>
          ))}
        </nav>

        <nav aria-label="Period" className="mt-3 flex flex-wrap items-center gap-2">
          {(["7d", "30d", "all"] as const).map((p) => (
            <Link key={p} href={href({ period: p })} className={chip(report.period === p, true)}>
              {p === "7d" ? "Last 7 days" : p === "30d" ? "Last 30 days" : "All time"}
            </Link>
          ))}
          <span className="mx-1 h-5 w-px bg-neutral-300" aria-hidden />
          {report.months.map((m) => (
            <Link key={m} href={href({ period: m })} className={chip(report.period === m, true)}>
              {monthName(m)}
            </Link>
          ))}
        </nav>

        {report.storage === "none" && (
          <Notice>Counting is off: add the Upstash Redis storage in Vercel (see docs/REVIEW_REPLIES.md). Google figures below still work.</Notice>
        )}

        <h2 className="mt-10 text-lg font-bold">{report.periodLabel}</h2>

        <Section title="Review page" note={`Customers using /r/${client.slug} to write their review.`}>
          <div className="grid gap-3 sm:grid-cols-3">
            <Stat label="Drafts written" value={report.page.generated} />
            <Stat label='Tapped "Post on Google"' value={report.page.googleClicks} />
            <Stat label="Replies sent" value={report.replies.auto + report.replies.manual} sub={`${report.replies.auto} automatic, ${report.replies.manual} from this page`} />
          </div>
          <StarBars title="Stars chosen on the review page" counts={report.page.byStars} />
        </Section>

        <Section title="On Google" note={g.connected ? `${g.total} reviews in total, ${g.average.toFixed(1)} average overall.` : undefined}>
          {g.connected ? (
            <>
              <div className="grid gap-3 sm:grid-cols-4">
                <Stat label="New reviews" value={g.received} />
                <Stat label="Average rating" value={g.received ? g.periodAverage.toFixed(1) : "–"} />
                <Stat label="Replied" value={g.replied} sub={g.received ? `${Math.round((g.replied / g.received) * 100)}% of new reviews` : undefined} />
                <Stat label="Waiting for a reply" value={g.waiting.length} warn={g.waiting.some((w) => w.rating <= 3)} />
              </div>
              <StarBars title="Stars on new Google reviews" counts={g.byStars} />
              {g.partial && <p className="mt-3 text-xs text-neutral-500">Showing the newest 300 reviews; older ones in this period are not counted.</p>}
            </>
          ) : (
            <Notice>{g.reason}</Notice>
          )}
        </Section>

        <Section title={report.period === "all" ? "By month" : "By day"} note="Drafts written on the review page against new reviews on Google.">
          <Chart report={report} />
        </Section>

        {g.connected && (
          <Section title="Waiting for a reply" note="1 to 3 stars are never answered automatically. Lowest ratings first.">
            <ReplyQueue slug={client.slug} adminKey={key} reviews={g.waiting} />
          </Section>
        )}

        <Section title="Replies sent">
          {report.replies.log.length ? (
            <ul className="divide-y divide-neutral-200 rounded-2xl border border-neutral-200 bg-white">
              {report.replies.log.map((l, i) => (
                <li key={i} className="p-4 text-sm">
                  <div className="flex flex-wrap items-center gap-2 text-neutral-500">
                    <span className="font-semibold text-[#0A0A0C]">{l.reviewer || "Google user"}</span>
                    <span className="text-amber-500">{"★".repeat(l.rating)}</span>
                    <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-xs font-semibold">{l.kind === "auto" ? "Automatic" : "Manual"}</span>
                    <span>{new Date(l.at).toLocaleString("en-IN", { timeZone: "Asia/Kolkata", dateStyle: "medium", timeStyle: "short" })}</span>
                  </div>
                  <p className="mt-1.5 text-neutral-700">{l.reply}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-neutral-500">No replies sent in this period.</p>
          )}
        </Section>
      </div>
    </div>
  );
}

const chip = (active: boolean, small = false) =>
  `rounded-full border ${small ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-sm"} font-semibold transition-colors ${
    active ? "border-[#0A0A0C] bg-[#0A0A0C] text-white" : "border-neutral-300 bg-white text-neutral-600 hover:border-neutral-500"
  }`;

function Section({ title, note, children }: { title: string; note?: string; children: React.ReactNode }) {
  return (
    <section className="mt-8">
      <h3 className="text-base font-bold">{title}</h3>
      {note && <p className="mt-0.5 text-sm text-neutral-500">{note}</p>}
      <div className="mt-4">{children}</div>
    </section>
  );
}

function Stat({ label, value, sub, warn }: { label: string; value: number | string; sub?: string; warn?: boolean }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-5">
      <p className="text-sm text-neutral-500">{label}</p>
      <p className={`mt-1 text-3xl font-extrabold tabular-nums ${warn ? "text-red-600" : ""}`}>{value}</p>
      {sub && <p className="mt-1 text-xs text-neutral-500">{sub}</p>}
    </div>
  );
}

function StarBars({ title, counts }: { title: string; counts: number[] }) {
  const max = Math.max(1, ...counts);
  return (
    <div className="mt-4 rounded-2xl border border-neutral-200 bg-white p-5">
      <p className="text-sm font-semibold">{title}</p>
      <div className="mt-3 space-y-2">
        {[5, 4, 3, 2, 1].map((s) => (
          <div key={s} className="flex items-center gap-3 text-sm">
            <span className="w-8 shrink-0 text-neutral-500">{s} ★</span>
            <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-neutral-100">
              <div className={`h-full rounded-full ${s <= 3 ? "bg-red-400" : "bg-[#C82AEF]"}`} style={{ width: `${(counts[s - 1] / max) * 100}%` }} />
            </div>
            <span className="w-8 shrink-0 text-right tabular-nums">{counts[s - 1]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Chart({ report }: { report: Report }) {
  const max = Math.max(1, ...report.bars.flatMap((b) => [b.drafts, b.google]));
  if (!report.bars.length) return <p className="text-sm text-neutral-500">Nothing recorded yet.</p>;
  const label = (l: string) => (report.period === "all" ? monthName(l).split(" ")[0].slice(0, 3) : shortDay(l));
  const every = report.bars.length > 16 ? 5 : 1;
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-5">
      <div className="flex gap-4 text-xs text-neutral-500">
        <span className="inline-flex items-center gap-1.5"><i className="h-2.5 w-2.5 rounded-sm bg-[#C82AEF]" /> Drafts written</span>
        {report.google.connected && <span className="inline-flex items-center gap-1.5"><i className="h-2.5 w-2.5 rounded-sm bg-neutral-800" /> New Google reviews</span>}
      </div>
      <div className="mt-4 flex h-40 items-end gap-1" role="img" aria-label="Drafts written and new Google reviews per period">
        {report.bars.map((b) => (
          <div key={b.label} className="flex h-full min-w-0 flex-1 items-end justify-center gap-px" title={`${label(b.label)}: ${b.drafts} drafts, ${b.google} Google reviews`}>
            <div className="w-full max-w-[14px] rounded-t bg-[#C82AEF]" style={{ height: `${(b.drafts / max) * 100}%` }} />
            {report.google.connected && <div className="w-full max-w-[14px] rounded-t bg-neutral-800" style={{ height: `${(b.google / max) * 100}%` }} />}
          </div>
        ))}
      </div>
      <div className="mt-2 flex gap-1 text-[10px] text-neutral-400">
        {report.bars.map((b, i) => (
          <span key={b.label} className="min-w-0 flex-1 overflow-visible whitespace-nowrap">{i % every === 0 ? label(b.label) : ""}</span>
        ))}
      </div>
    </div>
  );
}

function Notice({ children }: { children: React.ReactNode }) {
  return <p className="mt-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">{children}</p>;
}
