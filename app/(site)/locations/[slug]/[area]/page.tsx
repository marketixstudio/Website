import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PuneAreaDetail } from "@/components/v2/pune-area-detail";
import { puneAreaBySlug, puneAreas } from "@/content/pune-areas";
import { buildMetadata } from "@/lib/seo";

/** Neighbourhood pages exist for Pune only: /locations/pune/<area>. */
export const dynamicParams = false;

export function generateStaticParams() {
  return puneAreas.map((a) => ({ slug: "pune", area: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string; area: string } }): Metadata {
  const c = params.slug === "pune" ? puneAreaBySlug[params.area] : undefined;
  if (!c) return {};
  return buildMetadata({
    title: c.metaTitle,
    description: c.metaDescription,
    path: `/locations/pune/${c.slug}`,
  });
}

export default function Page({ params }: { params: { slug: string; area: string } }) {
  const content = params.slug === "pune" ? puneAreaBySlug[params.area] : undefined;
  if (!content) notFound();
  return <PuneAreaDetail content={content} />;
}
