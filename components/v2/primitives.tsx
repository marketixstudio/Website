import Link from "next/link";
import { ArrowRight, Plus } from "lucide-react";
import type { AnswerBlock, QA } from "@/lib/content-types";
import Magnet from "@/components/ui/bits/Magnet";

/** Canonical URL for a service page. */
export function serviceHref(slug: string) {
  return `/services/${slug}`;
}

/** Main pill button. Gently pulls toward the cursor (React Bits Magnet, the user's settings). */
export function Cta({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Magnet padding={50} magnetStrength={50}>
      <Link href={href} className="mx-cta">
        {children}
        <span className="mx-cta__arrow" aria-hidden="true">
          <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
        </span>
      </Link>
    </Magnet>
  );
}

export function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="mx-link">
      {children}
      <ArrowRight className="h-4 w-4" strokeWidth={2.25} aria-hidden="true" />
    </Link>
  );
}

/**
 * The answer-first block for AI search engines, kept compact: one card, not a
 * full-width section with an eyebrow beside the heading (Hallmark gate 54).
 */
export function AnswerCard({ block, id }: { block: AnswerBlock; id?: string }) {
  return (
    <section id={id} aria-labelledby={id ? `${id}-q` : undefined} className="mx-card p-7 sm:p-9">
      <h2 id={id ? `${id}-q` : undefined} className="font-display text-2xl font-bold leading-tight tracking-tight text-ink sm:text-[1.75rem]">
        {block.question}
      </h2>
      <p className="mt-4 max-w-[65ch] text-[1.0625rem] leading-relaxed text-ink-2">{block.answer}</p>
      {block.keyFacts && (
        <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
          {block.keyFacts.map((fact) => (
            <li key={fact} className="flex gap-3 text-[0.9375rem] leading-relaxed text-muted">
              <span aria-hidden="true" className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {fact}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

/** Native disclosure elements: keyboard- and screen-reader-accessible with no JavaScript. */
export function FaqList({ items }: { items: QA[] }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item) => (
        <details key={item.q} className="group">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 text-left text-lg font-semibold text-ink marker:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent [&::-webkit-details-marker]:hidden">
            {item.q}
            <Plus
              className="mt-1 h-5 w-5 shrink-0 text-accent transition-transform duration-200 group-open:rotate-45"
              strokeWidth={2}
              aria-hidden="true"
            />
          </summary>
          <p className="max-w-[68ch] pb-7 text-base leading-relaxed text-muted">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
