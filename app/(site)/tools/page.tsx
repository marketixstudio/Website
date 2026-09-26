import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { LinkCardGrid } from "@/components/sections/link-card-grid";
import { Faq } from "@/components/sections/faq";
import { CtaBand } from "@/components/sections/cta-band";
import { JsonLd } from "@/components/seo/json-ld";
import { toolsOverview } from "@/content/tools";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, collectionSchema, faqSchema, graph } from "@/lib/structured-data";

// Not linked anywhere and kept out of search until the user decides whether tools ship.
export const metadata: Metadata = {
  ...buildMetadata({
    title: toolsOverview.metaTitle,
    description: toolsOverview.metaDescription,
    path: "/tools",
  }),
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={graph([
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Free Tools", path: "/tools" },
          ]),
          collectionSchema({
            name: "Free Marketing Tools",
            description: toolsOverview.metaDescription,
            path: "/tools",
            items: toolsOverview.cards.map((card) => ({ name: card.label, path: card.href })),
          }),
          ...(toolsOverview.faqs?.length ? [faqSchema(toolsOverview.faqs)] : []),
        ])}
      />

      <PageHero
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Free Tools" }]}
        eyebrow={toolsOverview.eyebrow}
        title={toolsOverview.title}
        highlight={toolsOverview.highlight}
        subtitle={toolsOverview.subtitle}
      />

      <LinkCardGrid
        eyebrow="Tools"
        title={toolsOverview.cardsTitle || "Pick a tool"}
        cards={toolsOverview.cards}
        surface
      />

      {toolsOverview.faqs && (
        <section className="py-section">
          <div className="container-edge">
            <Faq items={toolsOverview.faqs} />
          </div>
        </section>
      )}

      <CtaBand />
    </>
  );
}
