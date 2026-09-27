import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { reviewClients } from "@/content/review-clients";
import { isReviewAdmin } from "@/lib/review-admin";
import { ReplyHelper } from "@/components/tools/reply-helper";

export const metadata: Metadata = { title: "Review reply helper", robots: { index: false, follow: false } };
export const dynamic = "force-dynamic";

/** Private reply helper: /r/<client>/replies?key=<REVIEW_ADMIN_KEY>. Anyone without the key gets a 404. */
export default function Page({ params, searchParams }: { params: { client: string }; searchParams: { key?: string } }) {
  const client = reviewClients[params.client];
  if (!client || !isReviewAdmin(searchParams.key)) notFound();
  return <ReplyHelper slug={client.slug} businessName={client.businessName} adminKey={searchParams.key as string} />;
}
