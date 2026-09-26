import type { Metadata } from "next";
import { LegalPage } from "@/components/templates/legal-page";
import { legalPages } from "@/content/legal";
import { buildMetadata } from "@/lib/seo";

const content = legalPages["refund-policy"];
export const metadata: Metadata = buildMetadata({
  title: content.title,
  description:
    "When refunds are available for Marketix Studio retainers, project work and digital products, and how to request one.",
  path: "/refund-policy",
});

export default function Page() {
  return <LegalPage content={content} />;
}
