import { blogPosts } from "@/content/blog";
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
