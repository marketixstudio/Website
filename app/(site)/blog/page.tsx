/* Hallmark · genre: atmospheric · template: index
 * honest: pass (no posts are published yet, so the page says so and stays out of search until there are)
 */
import { focusKeyword, pageSource, sentenceCase } from "@/lib/focus-keywords";
import type { Metadata } from "next";
import { PenLine } from "lucide-react";
import { BlogIndexPage } from "@/components/templates/blog-index-page";
import { IndexHero } from "@/components/v2/index-hero";
import { TextLink } from "@/components/v2/primitives";
import { buildMetadata } from "@/lib/seo";
import { getBlogPosts } from "@/lib/blog";

const path = "/blog";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const posts = await getBlogPosts();
  return buildMetadata({
    title: "Digital Marketing Blog: Guides and Insights",
    description:
      "The Marketix Studio digital marketing blog: practical guides on performance marketing, SEO, paid ads and conversion from our team in Pune.",
    path: "/blog",
    // Thin, empty index pages shouldn't be indexed; this lifts automatically once posts exist.
    robots: posts.length ? undefined : { index: false, follow: true },
  });
}

export default async function Page() {
  const posts = await getBlogPosts();
  if (posts.length) return <BlogIndexPage posts={posts} />;

  return (
    <>
      <IndexHero
        keyword={focusKeyword(path)}
        label="Blog, Marketix Studio Pune"
        title="Marketing notes"
        accent="from Pune"
        lede="Practical guides on ads, SEO, websites and Google Maps, written from the work we do for clients."
        cta={null}
        secondary={{ label: "Read our FAQ", href: "/faq" }}
      />
      <section className="pb-24">
        <div className="container-edge">
          <div className="mx-card flex flex-col items-start gap-5 p-8 sm:flex-row sm:items-center sm:p-10">
            <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-accent/50 text-accent">
              <PenLine className="h-6 w-6" strokeWidth={1.8} aria-hidden="true" />
            </span>
            <div className="flex-1">
              <h2 className="font-display text-2xl font-bold text-ink">The first articles are on the way</h2>
              <p className="mt-2 max-w-[60ch] text-[0.9375rem] leading-relaxed text-muted">
                Subscribe with the form at the bottom of this page to hear when they are published. Until then, our service
                pages answer the most common questions in detail.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <TextLink href="/services">Services</TextLink>
              <TextLink href="/work">Case studies</TextLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
