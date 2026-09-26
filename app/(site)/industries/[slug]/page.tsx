import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IndustryDetail } from "@/components/v2/industry-detail";
import { industries } from "@/content/industries";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return Object.keys(industries).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const c = industries[params.slug];
  if (!c) return {};
  return buildMetadata({
    title: c.metaTitle,
    description: c.metaDescription,
    path: `/industries/${c.slug}`,
  });
}

export default function Page({ params }: { params: { slug: string } }) {
  const content = industries[params.slug];
  if (!content) notFound();
  return <IndustryDetail content={content} />;
}
