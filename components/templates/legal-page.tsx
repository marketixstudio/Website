/* Hallmark · template: Long Document (design.md: content pages are typography only)
 * A sticky contents list on desktop; nothing decorative.
 */
import Link from "next/link";
import { JsonLd } from "@/components/seo/json-ld";
import type { LegalContent } from "@/lib/content-types";
import { breadcrumbSchema, graph } from "@/lib/structured-data";
import { business } from "@/lib/site-config";
import { legalPages } from "@/content/legal";

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const formatDate = (iso: string) => {
  const d = new Date(`${iso}T00:00:00`);
  return Number.isNaN(d.getTime())
    ? iso
    : d.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
};

export function LegalPage({ content }: { content: LegalContent }) {
  const path = `/${content.slug}`;

  return (
    <>
      <JsonLd
        data={graph([
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: content.title, path },
          ]),
        ])}
      />
      <article className="pb-24 pt-36 sm:pt-44">
        <div className="container-edge">
          <header className="max-w-[68ch]">
            <p className="text-base font-semibold text-ink-2">Legal</p>
            <h1 className="mt-4 font-display text-[clamp(2.25rem,4vw+0.5rem,3.75rem)] font-bold leading-[1.14] tracking-[-0.01em] text-ink">
              {content.title}
            </h1>
            <p className="mt-4 text-sm text-muted">
              Last updated <time dateTime={content.updated}>{formatDate(content.updated)}</time>
            </p>
            <p className="mt-8 text-lg leading-relaxed text-ink-2">{content.intro}</p>
          </header>

          <div className="mt-16 grid grid-cols-[minmax(0,1fr)] gap-12 lg:grid-cols-[14rem_minmax(0,1fr)]">
            <nav aria-label="Contents" className="hidden lg:block">
              <div className="sticky top-28">
                <p className="text-sm font-semibold text-muted">Contents</p>
                <ol className="mt-4 space-y-2 border-l border-line">
                  {content.sections.map((section) => (
                    <li key={section.heading}>
                      <a
                        href={`#${slugify(section.heading)}`}
                        className="-ml-px block border-l border-transparent py-1 pl-4 text-sm text-ink-2 transition-colors hover:border-accent hover:text-ink"
                      >
                        {section.heading}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            </nav>

            <div className="max-w-[68ch] space-y-12">
              {content.sections.map((section) => (
                <section key={section.heading} id={slugify(section.heading)} className="scroll-mt-28">
                  <h2 className="font-display text-2xl font-bold text-ink">{section.heading}</h2>
                  {section.body.map((para, i) => (
                    <p key={i} className="mt-4 text-[1.0625rem] leading-[1.75] text-ink-2">
                      {para}
                    </p>
                  ))}
                </section>
              ))}

              <nav aria-label="Other policies" className="border-t border-line pt-8">
                <p className="text-sm font-semibold text-muted">Other policies</p>
                <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
                  {Object.values(legalPages)
                    .filter((l) => l.slug !== content.slug)
                    .map((l) => (
                      <li key={l.slug}>
                        <Link href={`/${l.slug}`} className="text-[0.9375rem] text-ink-2 underline-offset-4 hover:text-accent hover:underline">
                          {l.title}
                        </Link>
                      </li>
                    ))}
                </ul>
              </nav>
              <p className="text-[0.9375rem] leading-relaxed text-muted">
                Questions about this page can be sent to{" "}
                <a className="font-semibold text-ink underline-offset-4 hover:text-accent hover:underline" href={`mailto:${business.email}`}>
                  {business.email}
                </a>{" "}
                or through our{" "}
                <Link className="font-semibold text-ink underline-offset-4 hover:text-accent hover:underline" href="/contact">
                  contact page
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
