/* Hallmark · template: Long Document (blog post) · typography first, one sticky contents rail
 * Kept from the Vistrow structure: reading progress, share row, contents list, key-point boxes,
 * related posts, Article schema. Added: visible FAQ + FAQPage schema (answer engines).
 * Removed: category pill, visible breadcrumb, numbered headings, glass cards, eyebrows.
 */
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { JsonLd } from "@/components/seo/json-ld";
import { ReadingProgress } from "@/components/blog/reading-progress";
import { ShareRow } from "@/components/blog/share-row";
import { Cta, FaqList, TextLink } from "@/components/v2/primitives";
import type { BlogPost } from "@/lib/content-types";
import { siteUrl } from "@/lib/seo";
import { articleSchema, breadcrumbSchema, faqSchema, graph } from "@/lib/structured-data";

const MARKDOWN_LINK = /\[([^\]]+)\]\(([^)]+)\)/g;
const linkClass = "font-semibold text-ink underline decoration-accent/50 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent";

function renderInlineLinks(text: string) {
  const nodes: React.ReactNode[] = [];
  let lastIndex = 0;
  let key = 0;
  for (const match of text.matchAll(MARKDOWN_LINK)) {
    const [full, label, href] = match;
    const index = match.index ?? 0;
    if (index > lastIndex) nodes.push(text.slice(lastIndex, index));
    nodes.push(
      href.startsWith("/") ? (
        <Link key={key++} href={href} className={linkClass}>
          {label}
        </Link>
      ) : (
        <a key={key++} href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
          {label}
        </a>
      ),
    );
    lastIndex = index + full.length;
  }
  if (lastIndex < text.length) nodes.push(text.slice(lastIndex));
  return nodes;
}

function headingId(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function BlogPostPage({ post, morePosts }: { post: BlogPost; morePosts: BlogPost[]; allPosts: BlogPost[] }) {
  const path = `/blog/${post.slug}`;
  const displayDate = new Date(`${post.date}T00:00:00`).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const headings = post.sections
    .filter((s): s is typeof s & { heading: string } => Boolean(s.heading))
    .map((s) => ({ id: headingId(s.heading), label: s.heading }));
  if (post.faqs?.length) headings.push({ id: "faq", label: "Questions people ask" });

  return (
    <>
      <JsonLd
        data={graph([
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.breadcrumbTitle || post.title, path },
          ]),
          articleSchema({
            title: post.title,
            description: post.metaDescription,
            path,
            author: post.author,
            datePublished: post.date,
            dateModified: post.dateModified,
            schemaType: post.schemaType,
            image: post.featuredImage?.url,
            keywords: [post.focusKeyword, ...(post.secondaryKeywords || [])].filter((k): k is string => Boolean(k)),
            articleSection: post.category,
          }),
          ...(post.faqs?.length ? [faqSchema(post.faqs)] : []),
        ])}
      />

      <ReadingProgress targetId="article-body" />

      <article id="article-body" className="pb-24 pt-36 sm:pt-44">
        <div className="container-edge">
          {/* Header */}
          <header className="max-w-[48rem]">
            <p className="text-base font-semibold text-ink-2">
              <Link href="/blog" className="transition-colors hover:text-ink">
                Blog
              </Link>
              <span aria-hidden="true" className="mx-2 text-muted">/</span>
              <span className="text-muted">{post.category}</span>
            </p>
            <h1 className="mt-5 font-display text-[clamp(2rem,3.2vw+0.5rem,3.25rem)] font-bold leading-[1.16] tracking-[-0.01em] text-ink">
              {post.title}
            </h1>
            <p className="mt-6 text-lg leading-[1.6] text-muted">{post.excerpt}</p>
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-y border-line py-4">
              <p className="text-sm text-muted">
                <span className="font-semibold text-ink-2">{post.author}</span>
                <span aria-hidden="true"> · </span>
                <time dateTime={post.date}>{displayDate}</time>
                <span aria-hidden="true"> · </span>
                {post.readTime}
              </p>
              <ShareRow url={`${siteUrl}${path}`} title={post.title} />
            </div>
          </header>

          {post.featuredImage?.url && (
            <div className="relative mt-10 aspect-[16/9] w-full max-w-[48rem] overflow-hidden rounded-[24px] border border-line">
              <Image
                src={post.featuredImage.url}
                alt={post.featuredImage.alt || post.title}
                fill
                priority
                sizes="(min-width: 1024px) 768px, 100vw"
                className="object-cover"
              />
            </div>
          )}

          <div className="mt-12 grid grid-cols-[minmax(0,1fr)] gap-12 lg:grid-cols-[minmax(0,48rem)_minmax(0,1fr)] lg:gap-16">
            {/* Body */}
            <div className="min-w-0">
              {/* Contents, on small screens */}
              {headings.length > 2 && (
                <details className="group mb-10 rounded-[20px] border border-line p-5 lg:hidden">
                  <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold text-ink [&::-webkit-details-marker]:hidden">
                    In this article
                    <ArrowRight className="h-4 w-4 text-accent transition-transform group-open:rotate-90" strokeWidth={2} aria-hidden="true" />
                  </summary>
                  <ol className="mt-4 space-y-2 border-t border-line pt-4">
                    {headings.map((h) => (
                      <li key={h.id}>
                        <a href={`#${h.id}`} className="text-sm text-muted transition-colors hover:text-ink">
                          {h.label}
                        </a>
                      </li>
                    ))}
                  </ol>
                </details>
              )}

              <div className="space-y-12">
                {post.sections.map((section, i) => (
                  <section key={i} id={section.heading ? headingId(section.heading) : undefined} className="scroll-mt-28">
                    {section.heading && (
                      <h2 className="mb-5 font-display text-[clamp(1.5rem,2.2vw,1.9rem)] font-bold leading-[1.25] text-ink">
                        {section.heading}
                      </h2>
                    )}
                    <div className="space-y-5 text-[1.0625rem] leading-[1.8] text-ink-2 sm:text-lg">
                      {section.paragraphs.map((para, j) => (
                        <p key={j}>{renderInlineLinks(para)}</p>
                      ))}
                    </div>
                    {section.points && section.points.length > 0 && (
                      <ul className="mx-card mt-6 space-y-3 p-6">
                        {section.points.map((point) => (
                          <li key={point} className="flex gap-3 text-[0.9375rem] leading-relaxed text-ink-2">
                            <span aria-hidden="true" className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                            <span>{renderInlineLinks(point)}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}

                {post.faqs && post.faqs.length > 0 && (
                  <section id="faq" className="scroll-mt-28 border-t border-line pt-12">
                    <h2 className="mb-6 font-display text-[clamp(1.5rem,2.2vw,1.9rem)] font-bold leading-[1.25] text-ink">
                      Questions people ask
                    </h2>
                    <FaqList items={post.faqs} />
                  </section>
                )}
              </div>

              {/* Author note: honest about who wrote it and what it is */}
              <aside aria-label="About this article" className="mx-card mt-14 p-6 sm:p-7">
                <p className="font-semibold text-ink">Written by {post.author}</p>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">
                  Marketix Studio is a performance marketing agency on Balewadi High Street, Pune, working on ads, SEO,
                  websites and creative. Platform and regulatory facts are linked to their source. Examples are
                  illustrations, not client results. Articles are general guidance, not advice for your specific
                  business.
                </p>
              </aside>
            </div>

            {/* Sticky rail: contents + next step */}
            <aside aria-label="Article navigation" className="hidden lg:block">
              <div className="sticky top-28 space-y-5">
                {headings.length > 2 && (
                  <nav aria-label="In this article" className="border-l border-line pl-5">
                    <p className="text-sm font-semibold text-ink">In this article</p>
                    <ol className="mt-3 space-y-2">
                      {headings.map((h) => (
                        <li key={h.id}>
                          <a href={`#${h.id}`} className="block text-sm leading-snug text-muted transition-colors hover:text-ink">
                            {h.label}
                          </a>
                        </li>
                      ))}
                    </ol>
                  </nav>
                )}
                <div className="mx-card p-6">
                  <p className="font-display text-lg font-bold leading-snug text-ink">Want this done for your business?</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">A free growth audit shows where your enquiries are being lost.</p>
                  <div className="mt-5">
                    <Cta href="/growth-audit">Free audit</Cta>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>

      {/* Related posts */}
      {morePosts.length > 0 && (
        <section className="border-t border-line py-24 sm:py-28">
          <div className="container-edge">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="font-display text-h2 font-bold text-ink">Keep reading</h2>
              <TextLink href="/blog">All articles</TextLink>
            </div>
            <ul className="mt-10 grid grid-cols-[minmax(0,1fr)] gap-4 md:grid-cols-3">
              {morePosts.map((r) => (
                <li key={r.slug} className="mx-card group relative flex flex-col p-6 transition-colors hover:border-accent/60 focus-within:border-accent/60">
                  <p className="text-sm font-semibold text-muted">{r.category}</p>
                  <h3 className="mt-3 font-display text-xl font-bold leading-snug text-ink">
                    <Link href={`/blog/${r.slug}`} className="after:absolute after:inset-0 after:rounded-[24px] after:content-['']">
                      {r.title}
                    </Link>
                  </h3>
                  <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-muted">{r.excerpt}</p>
                  <p className="mt-5 flex items-center justify-between border-t border-line pt-4 text-sm text-muted">
                    {r.readTime}
                    <ArrowRight className="h-4 w-4 text-accent transition-transform duration-200 group-hover:translate-x-1" strokeWidth={2} aria-hidden="true" />
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
}
