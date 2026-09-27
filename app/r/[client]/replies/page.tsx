import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { reviewClients } from "@/content/review-clients";
import { hasAdminAccess } from "@/lib/admin-auth";
import { ReplyHelper } from "@/components/tools/reply-helper";

export const metadata: Metadata = { title: "Review reply helper", robots: { index: false, follow: false } };
export const dynamic = "force-dynamic";

/** Private reply helper: /r/<client>/replies, after signing in at /r/login (or with ?key=<REVIEW_ADMIN_KEY>). */
export default function Page({ params, searchParams }: { params: { client: string }; searchParams: { key?: string } }) {
  const client = reviewClients[params.client];
  if (!client) notFound();
  if (!hasAdminAccess(searchParams.key)) redirect(`/r/login?next=/r/${client.slug}/replies`);
  return <ReplyHelper slug={client.slug} businessName={client.businessName} adminKey={searchParams.key ?? ""} />;
}
