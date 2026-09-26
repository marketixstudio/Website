import Link from "next/link";

export type Crumb = { name: string; path: string };

/**
 * Visible breadcrumb trail, styled after the live marketixstudio.com page headers:
 * "Home" in violet and underlined, the rest muted, separated by slashes. Pages pass
 * the same list they give breadcrumbSchema(), so what visitors see matches what
 * Google reads.
 */
export function Breadcrumbs({ items, className = "" }: { items: Crumb[]; className?: string }) {
  if (items.length < 2) return null;
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.9375rem] text-muted sm:text-base">
        {items.map((c, i) => {
          const last = i === items.length - 1;
          return (
            <li key={`${c.path}-${i}`} className="flex items-center gap-x-2">
              {i > 0 && (
                <span aria-hidden="true" className="text-muted/70">
                  /
                </span>
              )}
              {last ? (
                <span aria-current="page" className="text-ink-2">
                  {c.name}
                </span>
              ) : (
                <Link
                  href={c.path}
                  className={
                    i === 0
                      ? "text-accent underline decoration-1 underline-offset-4 transition-colors hover:text-ink"
                      : "transition-colors hover:text-ink"
                  }
                >
                  {c.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
