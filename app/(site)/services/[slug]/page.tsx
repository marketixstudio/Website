import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetail } from "@/components/v2/service-detail";
import { services } from "@/content/services";
import { buildMetadata } from "@/lib/seo";

/** Services with their own hand-built page (app/(site)/services/<slug>) are skipped here. */
const CUSTOM_PAGES = new Set(["google-ads-ppc", "local-seo-gmb"]);

export function generateStaticParams() {
  return Object.keys(services)
    .filter((slug) => !CUSTOM_PAGES.has(slug))
    .map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const content = services[params.slug];
  if (!content) return {};
  return buildMetadata({
    title: content.metaTitle,
    description: content.metaDescription,
    path: `/services/${content.slug}`,
  });
}

export default function Page({ params }: { params: { slug: string } }) {
  const content = services[params.slug];
  if (!content) notFound();
  return <ServiceDetail content={content} />;
}
