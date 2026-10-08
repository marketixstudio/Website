import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { Eyebrow } from "@/components/ui/section-heading";

type Step = { title: string; body: string; icon?: LucideIcon };

/**
 * Steps in the live site's process box (the home page's "4-step process"): one violet
 * bordered box, the steps as columns divided by violet lines, each led by a large outlined
 * number. No 3D tiles here: one set of 3D icons per page is enough (user, 2026-10-08).
 */
export function StepRail({ steps }: { steps: Step[] }) {
  const cols = steps.length >= 5 ? "lg:grid-cols-5" : steps.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4";

  return (
    <ol className={`relative grid grid-cols-[minmax(0,1fr)] gap-8 rounded-[24px] border border-accent/60 bg-bg/60 p-6 sm:p-8 md:grid-cols-2 lg:gap-0 ${cols}`}>
      {steps.map((step, i) => (
        <li
          key={step.title}
          className={`flex flex-col lg:px-7 ${i > 0 ? "lg:border-l lg:border-accent/35" : "lg:pl-0"} ${i === steps.length - 1 ? "lg:pr-0" : ""}`}
        >
          <span
            aria-hidden="true"
            className="font-display text-[3.25rem] font-bold leading-none text-transparent [-webkit-text-stroke:1.5px_rgb(var(--accent))]"
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-5 font-display text-xl font-bold leading-snug text-ink">
            <span className="sr-only">Step {i + 1}: </span>
            {step.title}
          </h3>
          <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">{step.body}</p>
        </li>
      ))}
    </ol>
  );
}

/**
 * The large panel the process sits in on the home page: label and heading on the left,
 * an intro and link on the right, the steps below, and a soft violet light at the base.
 */
export function ProcessPanel({
  eyebrow = "How it works",
  title,
  intro,
  aside,
  id,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  aside?: ReactNode;
  id?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28 py-16 sm:py-24">
      <div className="mx-auto w-full max-w-[1480px] px-4 sm:px-6 lg:px-8">
        <div className="mx-card relative overflow-hidden rounded-[32px] px-6 py-14 sm:px-12 sm:py-20 lg:px-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-[radial-gradient(45%_60%_at_50%_100%,rgb(var(--accent)/0.22),transparent_75%)]"
          />
          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end">
            <div>
              <Eyebrow>{eyebrow}</Eyebrow>
              <h2 className="mt-6 max-w-[16ch] font-display text-h2 font-bold tracking-[-0.01em] text-ink">{title}</h2>
            </div>
            {(intro || aside) && (
              <div className="lg:pb-2">
                {intro && <p className="max-w-[52ch] text-[1.0625rem] leading-relaxed text-muted">{intro}</p>}
                {aside && <div className="mt-6">{aside}</div>}
              </div>
            )}
          </div>
          <div className="relative mt-12">{children}</div>
        </div>
      </div>
    </section>
  );
}
