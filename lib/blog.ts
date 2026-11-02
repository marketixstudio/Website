import { blogPosts } from "@/content/blog";
import { blogCategories, type BlogCategory } from "@/content/blog-categories";
import type { BlogPost } from "@/lib/content-types";

/**
 * Posts are authored in `content/blog.ts` rather than a CMS. The async shape is
 * kept so pages can stay server components and a CMS could be swapped in later
 * without touching the call sites.
 */
export async function getBlogPosts(): Promise<BlogPost[]> {
  return [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  return blogPosts.find((post) => post.slug === slug) || null;
}

export const categoryOf = (post: Pick<BlogPost, "category">): BlogCategory | undefined =>
  blogCategories.find((c) => c.name === post.category);

export const getBlogCategory = (slug: string) => blogCategories.find((c) => c.slug === slug);

/** Categories that have posts, in page order, with how many each has. */
export function categoriesWithCounts(posts: BlogPost[]) {
  return blogCategories
    .map((c) => ({ ...c, count: posts.filter((p) => p.category === c.name).length }))
    .filter((c) => c.count > 0);
}

/** Cover for a post: its own image, else its category's topic photo. */
export const coverOf = (post: BlogPost) => post.featuredImage?.url ?? categoryOf(post)?.image ?? "/heroes/performance-marketing.webp";
