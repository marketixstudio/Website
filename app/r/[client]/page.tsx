import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ReviewGenerator } from "@/components/tools/review-generator";
import { reviewClients } from "@/content/review-clients";

export function generateStaticParams() {
  return Object.keys(reviewClients).map((client) => ({ client }));
}

export function generateMetadata({ params }: { params: { client: string } }): Metadata {
  const config = reviewClients[params.client];
  if (!config) return {};
  return {
    title: `Leave a review for ${config.businessName}`,
    description: config.subheadline,
    // These pages are a utility for that client's customers, not content we want
    // ranking - they would otherwise compete with the client's own listings.
    robots: { index: false, follow: false },
  };
}

export default function Page({ params }: { params: { client: string } }) {
  const config = reviewClients[params.client];
  if (!config || !config.active) notFound();
  return <ReviewGenerator config={config} />;
}
