import Image from "next/image";
import Link from "next/link";

export type PostCardData = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categorySlug?: string;
  date: string;
  readTime: string;
  cover: string;
};

export const formatPostDate = (iso: string) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });

/** Grid card: cover, category and read time, title, excerpt. The whole card is one link. */
export function PostCard({ post, priority = false }: { post: PostCardData; priority?: boolean }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-line bg-[var(--color-paper-3)] transition-colors hover:border-accent/55 focus-within:border-accent/55">
      <div className="relative aspect-[16/9] overflow-hidden bg-[var(--color-paper-2)]">
        <Image src={post.cover} alt="" fill sizes="(min-width: 1024px) 300px, (min-width: 640px) 45vw, 92vw" priority={priority} className="object-cover" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-sm font-semibold text-ink-2">
          {post.category}
          <span className="font-medium text-muted"> · {post.readTime}</span>
        </p>
        <h3 className="mt-2 font-display text-lg font-bold leading-snug text-ink">
          <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0 focus-visible:outline-none">
            {post.title}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-3 text-[0.9375rem] leading-relaxed text-muted">{post.excerpt}</p>
        <p className="mt-auto pt-4 text-sm text-muted">
          <time dateTime={post.date}>{formatPostDate(post.date)}</time>
        </p>
      </div>
    </article>
  );
}
