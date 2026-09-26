import { BlogIndex } from "@/components/blog/blog-index";
import { JsonLd } from "@/components/seo/json-ld";
import { IndexHero } from "@/components/v2/index-hero";
import type { BlogPost } from "@/lib/content-types";
import { breadcrumbSchema, collectionSchema, graph } from "@/lib/structured-data";

export function BlogIndexPage({ posts }: { posts: BlogPost[] }) {
  const cards = posts.map(({ slug, title, excerpt, category, date, readTime }) => ({ slug, title, excerpt, category, date, readTime }));

  return (
    <>
      <JsonLd
        data={graph([
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
          ]),
          collectionSchema({
            name: "Marketix Studio blog",
            description: "Practical guides on ads, SEO, Google Maps and eCommerce growth from Marketix Studio in Pune.",
            path: "/blog",
            items: posts.map((p) => ({ name: p.title, path: `/blog/${p.slug}` })),
          }),
        ])}
      />

      <IndexHero
        crumbs={[ { name: "Home", path: "/" }, { name: "Blog", path: "/blog" }, ]}
        label="Blog, Marketix Studio Pune"
        title="Marketing notes"
        accent="from Pune"
        lede="Practical guides on ads, SEO, Google Maps and eCommerce growth, written from the work we do for clients."
        cta={{ label: "Get a free growth audit", href: "/growth-audit" }}
      />

      <section aria-label="Articles" className="pb-24">
        <div className="container-edge">
          <BlogIndex posts={cards} />
        </div>
      </section>
    </>
  );
}
