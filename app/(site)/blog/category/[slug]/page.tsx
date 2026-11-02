import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogBrowser } from "@/components/blog/blog-browser";
import { JsonLd } from "@/components/seo/json-ld";
import { AuditCta, BlogHeader, toCard } from "@/components/templates/blog-index-page";
import { TextLink } from "@/components/v2/primitives";
import { categoriesWithCounts, getBlogCategory, getBlogPosts } from "@/lib/blog";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, collectionSchema, graph } from "@/lib/structured-data";

export const revalidate = 60;

/** Only categories with posts get a page; an empty category page would be thin content. */
export async function generateStaticParams() {
  return categoriesWithCounts(await getBlogPosts()).map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const category = getBlogCategory(params.slug);
  if (!category) return {};
  return buildMetadata({
    title: `${category.name} Guides | Marketix Studio Blog`,
    description: category.intro,
    path: `/blog/category/${category.slug}`,
  });
}

export default async function Page({ params }: { params: { slug: string } }) {
  const category = getBlogCategory(params.slug);
  const posts = await getBlogPosts();
  const inCategory = category ? posts.filter((p) => p.category === category.name) : [];
  if (!category || !inCategory.length) notFound();

  const path = `/blog/category/${category.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: category.name, path },
  ];

  return (
    <>
      <JsonLd
        data={graph([
          breadcrumbSchema(crumbs),
          collectionSchema({
            name: `${category.name}: Marketix Studio blog`,
            description: category.intro,
            path,
            items: inCategory.map((p) => ({ name: p.title, path: `/blog/${p.slug}` })),
          }),
        ])}
      />
      <BlogHeader crumbs={crumbs} title={category.name} lede={category.intro} />
      <section aria-label={`${category.name} posts`} className="pb-16">
        <div className="container-edge">
          <BlogBrowser posts={inCategory.map(toCard)} categories={categoriesWithCounts(posts)} activeSlug={category.slug} />
          <div className="mt-10">
            <TextLink href={category.service.href}>{category.service.label}</TextLink>
          </div>
        </div>
      </section>
      <AuditCta />
    </>
  );
}
