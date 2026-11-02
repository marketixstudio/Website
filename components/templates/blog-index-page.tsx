/* Hallmark · genre: atmospheric · template: blog hub
 * structure: header → newest post (centrepiece) → latest 12 + category sidebar → featured → by category → audit CTA
 * honest: featured and per-category rows only render once there are enough posts to fill them without repeats
 */
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BlogBrowser } from "@/components/blog/blog-browser";
import { PostCard, formatPostDate, type PostCardData } from "@/components/blog/post-card";
import { JsonLd } from "@/components/seo/json-ld";
import { Breadcrumbs, type Crumb } from "@/components/v2/breadcrumbs";
import { Cta } from "@/components/v2/primitives";
import { categoriesWithCounts, categoryOf, coverOf } from "@/lib/blog";
import type { BlogPost } from "@/lib/content-types";
import { breadcrumbSchema, collectionSchema, graph } from "@/lib/structured-data";

const LATEST = 12;

export const toCard = (p: BlogPost): PostCardData => ({
  slug: p.slug,
  title: p.title,
  excerpt: p.excerpt,
  category: p.category,
  categorySlug: categoryOf(p)?.slug,
  date: p.date,
  readTime: p.readTime,
  cover: coverOf(p),
});

/** Compact page header shared by /blog and the category pages: crumbs, H1, one-line lede. */
export function BlogHeader({ crumbs, title, lede }: { crumbs: Crumb[]; title: string; lede: string }) {
  return (
    <section className="mx-pool pb-10 pt-32 sm:pt-40">
      <div className="container-edge">
        <Breadcrumbs items={crumbs} />
        <h1 className="mt-5 max-w-[20ch] font-display text-h2 font-bold leading-[1.14] text-ink">{title}</h1>
        <p className="mt-4 max-w-[60ch] text-[1.0625rem] leading-relaxed text-muted sm:text-lg">{lede}</p>
      </div>
    </section>
  );
}

/** The newest post, large: the page's one centrepiece. */
function HeroPost({ post }: { post: BlogPost }) {
  const category = categoryOf(post);
  return (
    <article className="group relative grid grid-cols-[minmax(0,1fr)] overflow-hidden rounded-[24px] border border-line bg-[var(--color-paper-3)] transition-colors hover:border-accent/55 focus-within:border-accent/55 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
      <div className="relative aspect-[16/9] bg-[var(--color-paper-2)] lg:aspect-auto lg:min-h-[22rem]">
        <Image src={coverOf(post)} alt="" fill priority sizes="(min-width: 1024px) 640px, 100vw" className="object-cover" />
      </div>
      <div className="flex flex-col justify-center p-6 sm:p-9">
        <p className="text-sm font-semibold text-ink-2">
          {category ? (
            <Link href={`/blog/category/${category.slug}`} className="relative z-10 transition-colors hover:text-accent">
              {post.category}
            </Link>
          ) : (
            post.category
          )}
          <span className="font-medium text-muted"> · {post.readTime}</span>
        </p>
        <h2 className="mt-3 font-display text-h3 font-bold leading-[1.2] text-ink">
          <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0 focus-visible:outline-none">
            {post.title}
          </Link>
        </h2>
        <p className="mt-4 text-[1.0625rem] leading-relaxed text-muted">{post.excerpt}</p>
        <p className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted">
          <time dateTime={post.date}>{formatPostDate(post.date)}</time>
          <span className="inline-flex items-center gap-1.5 font-semibold text-accent">
            Read the guide
            <ArrowRight className="h-4 w-4" strokeWidth={2.25} aria-hidden="true" />
          </span>
        </p>
      </div>
    </article>
  );
}

export function AuditCta() {
  return (
    <section className="pb-24">
      <div className="container-edge">
        <div className="mx-card flex flex-col gap-6 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <div>
            <h2 className="font-display text-h3 font-bold leading-[1.2] text-ink">Want us to look at your marketing?</h2>
            <p className="mt-2 max-w-[56ch] text-[0.9375rem] leading-relaxed text-muted">
              We review your ads, website, Google Business Profile, tracking and follow-up, then tell you plainly what to fix
              first. Free, with no obligation.
            </p>
          </div>
          <div className="shrink-0">
            <Cta href="/growth-audit">Get a free growth audit</Cta>
          </div>
        </div>
      </div>
    </section>
  );
}

export function BlogIndexPage({ posts }: { posts: BlogPost[] }) {
  const [hero, ...rest] = posts;
  const categories = categoriesWithCounts(posts);
  const shownAbove = new Set([hero.slug, ...rest.slice(0, LATEST).map((p) => p.slug)]);
  const featured = posts.filter((p) => p.featured && p.slug !== hero.slug).slice(0, 3);
  // Rows only add something once there are older posts the hero and latest grid don't show.
  const showRows = posts.length > LATEST + 1;

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
            description: "Practical guides on Google Ads, Meta ads, SEO, Google Maps and websites from Marketix Studio in Pune.",
            path: "/blog",
            items: posts.map((p) => ({ name: p.title, path: `/blog/${p.slug}` })),
          }),
        ])}
      />

      <BlogHeader
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ]}
        title="Digital marketing blog"
        lede="Straight answers to what businesses in India ask about Google Ads, Meta ads, SEO, Google Maps and websites, from the work we do for clients."
      />

      <section aria-label="Newest post" className="pb-14">
        <div className="container-edge">
          <HeroPost post={hero} />
        </div>
      </section>

      {rest.length > 0 && (
        <section aria-labelledby="latest-heading" className="pb-20">
          <div className="container-edge">
            <h2 id="latest-heading" className="mb-6 font-display text-h3 font-bold leading-[1.2] text-ink">
              Latest posts
            </h2>
            <BlogBrowser posts={rest.map(toCard)} categories={categories} />
          </div>
        </section>
      )}

      {featured.length >= 3 && (
        <section aria-labelledby="featured-heading" className="pb-20">
          <div className="container-edge">
            <h2 id="featured-heading" className="mb-6 font-display text-h3 font-bold leading-[1.2] text-ink">
              Featured guides
            </h2>
            <div className="grid grid-cols-[minmax(0,1fr)] gap-5 md:grid-cols-3">
              {featured.map((p) => (
                <PostCard key={p.slug} post={toCard(p)} />
              ))}
            </div>
          </div>
        </section>
      )}

      {showRows &&
        categories.map((c) => {
          const inCat = posts.filter((p) => p.category === c.name);
          const older = inCat.filter((p) => !shownAbove.has(p.slug));
          if (!older.length) return null;
          return (
            <section key={c.slug} aria-labelledby={`cat-${c.slug}`} className="pb-16">
              <div className="container-edge">
                <div className="mb-6 flex items-baseline justify-between gap-4">
                  <h2 id={`cat-${c.slug}`} className="font-display text-h3 font-bold leading-[1.2] text-ink">
                    {c.name}
                  </h2>
                  <Link href={`/blog/category/${c.slug}`} className="mx-link shrink-0">
                    All {c.count}
                    <ArrowRight className="h-4 w-4" strokeWidth={2.25} aria-hidden="true" />
                  </Link>
                </div>
                <div className="grid grid-cols-[minmax(0,1fr)] gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {inCat.slice(0, 3).map((p) => (
                    <PostCard key={p.slug} post={toCard(p)} />
                  ))}
                </div>
              </div>
            </section>
          );
        })}

      <AuditCta />
    </>
  );
}
