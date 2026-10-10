import { BlogIndex } from "@/components/blog/blog-index";
import { JsonLd } from "@/components/seo/json-ld";
import Link from "next/link";
import { Eyebrow } from "@/components/ui/section-heading";
import { IndexHero } from "@/components/v2/index-hero";
import { focusKeyword, pageSource, sentenceCase } from "@/lib/focus-keywords";
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
        keyword={focusKeyword("/blog")}
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

      {/* What the blog covers, with links into the matching services. */}
      <section className="pb-24">
        <div className="container-edge">
          <Eyebrow>About the blog</Eyebrow>
          <h2 className="mt-6 max-w-[22ch] font-display text-h2 font-bold leading-[1.18] tracking-[-0.01em] text-ink">
            {`${sentenceCase(focusKeyword("/blog") ?? "")}: what we write about`}
          </h2>
          <p className="mt-6 max-w-[64ch] text-[1.0625rem] leading-relaxed text-muted">
            Every article comes from work we do for clients: what a campaign needs before it can be measured, how a
            local business climbs Google Maps, and how real estate and eCommerce brands turn spend into enquiries and
            sales. We write about{" "}
            <Link href="/services/google-ads-ppc" className="font-semibold text-ink underline decoration-accent/50 underline-offset-4">Google Ads</Link>,{" "}
            <Link href="/services/seo-services" className="font-semibold text-ink underline decoration-accent/50 underline-offset-4">SEO</Link>,{" "}
            <Link href="/services/local-seo-gmb" className="font-semibold text-ink underline decoration-accent/50 underline-offset-4">local SEO and Google Maps</Link> and{" "}
            <Link href="/industries/real-estate" className="font-semibold text-ink underline decoration-accent/50 underline-offset-4">real estate marketing</Link>,
            with the numbers and checklists we use ourselves.
          </p>
          <p className="mt-5 text-sm text-muted">
            Official guide:{" "}
            <a href={pageSource("/blog").href} target="_blank" rel="noopener" className="font-semibold text-ink underline decoration-accent/50 underline-offset-4">
              {pageSource("/blog").label}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
