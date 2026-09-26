import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";
import { serviceSlugs } from "@/content/services";
import { industrySlugs } from "@/content/industries";
import { locationSlugs } from "@/content/locations";
import { puneAreas } from "@/content/pune-areas";
import { reviewClientSlugs } from "@/content/review-clients";
import { publishedCaseStudySlugs } from "@/content/work";
import { legalSlugs } from "@/content/legal";
import { getBlogPosts } from "@/lib/blog";

type Entry = MetadataRoute.Sitemap[number];

const entry = (
  path: string,
  priority: number,
  changeFrequency: Entry["changeFrequency"] = "monthly",
  lastModified: Date = new Date(),
): Entry => ({
  url: path === "/" ? siteUrl : `${siteUrl}${path}`,
  lastModified,
  changeFrequency,
  priority,
});

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getBlogPosts();

  const core: Entry[] = [
    entry("/", 1, "weekly"),
    entry("/services", 0.9, "weekly"),
    entry("/industries", 0.85),
    entry("/locations", 0.85),
    entry("/work", 0.8, "weekly"),
    entry("/about", 0.7),
    entry("/approach", 0.6),
    entry("/team", 0.6),
    entry("/pricing", 0.7),
    entry("/faq", 0.6),
    entry("/contact", 0.8),
    entry("/growth-audit", 0.85),
    entry("/gmb-toolkit", 0.75),
    entry("/careers", 0.5),
    entry("/partners", 0.5),
  ];

  const services = serviceSlugs.map((slug) => entry(`/services/${slug}`, 0.85, "weekly"));
  const industries = industrySlugs.map((slug) => entry(`/industries/${slug}`, 0.8));
  const locations = locationSlugs.map((slug) => entry(`/locations/${slug}`, 0.8));
  const puneAreaPages = puneAreas.map((a) => entry(`/locations/pune/${a.slug}`, 0.75));
  const work = publishedCaseStudySlugs.map((slug) => entry(`/work/${slug}`, 0.75));
  const legal = legalSlugs.map((slug) => entry(`/${slug}`, 0.3, "yearly"));

  // Client review pages are functional tools for that client's customers, not
  // content we want competing in search - excluded here and noindexed on-page.
  void reviewClientSlugs;

  const blog = posts
    .filter((post) => !post.excludeFromSitemap && !post.redirectUrl)
    .map((post) =>
      entry(
        `/blog/${post.slug}`,
        0.65,
        "monthly",
        new Date(post.dateModified || post.date),
      ),
    );

  // The blog index is listed only once it has posts (it is noindexed while empty).
  const blogIndex = blog.length ? [entry("/blog", 0.8, "weekly")] : [];

  return [...core, ...services, ...industries, ...locations, ...puneAreaPages, ...work, ...blogIndex, ...blog, ...legal];
}
