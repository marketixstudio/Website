import type { Metadata } from "next";
import { LegalPage } from "@/components/templates/legal-page";
import { legalPages } from "@/content/legal";
import { buildMetadata } from "@/lib/seo";

const content = legalPages["cookie-policy"];
export const metadata: Metadata = buildMetadata({
  title: content.title,
  description: "How marketixstudio.com uses cookies and browser storage: essential preferences, analytics, and how to manage or turn them off.",
  path: "/cookie-policy",
});

export default function Page() {
  return <LegalPage content={content} />;
}
