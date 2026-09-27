import type { Metadata } from "next";
import { LegalPage } from "@/components/templates/legal-page";
import { legalPages } from "@/content/legal";
import { buildMetadata } from "@/lib/seo";

const content = legalPages["disclaimer"];
export const metadata: Metadata = buildMetadata({
  title: content.title,
  description: "Marketix Studio disclaimer: no guaranteed marketing outcomes, not professional advice, how we use AI, and third-party links and platforms.",
  path: "/disclaimer",
});

export default function Page() {
  return <LegalPage content={content} />;
}
