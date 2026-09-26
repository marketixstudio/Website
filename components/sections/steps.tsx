import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export type Step = { title: string; body: string };

/** Numbered ledger rows - the process reads as a sequence, not four parallel cards. */
export function Steps({
  eyebrow = "How it works",
  title = "A clear, repeatable process",
  steps,
  surface = false,
}: {
  eyebrow?: string;
  title?: string;
  steps: Step[];
  surface?: boolean;
}) {
  return (
    <section className={`py-section ${surface ? "border-y border-line bg-surface" : ""}`}>
      <div className="container-edge">
        <SectionHeading eyebrow={eyebrow} title={title} className="mb-10" />
        <ol>
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.06}>
              <li className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 border-t border-line py-7 lg:grid-cols-[auto_0.85fr_1.15fr] lg:gap-x-10">
                <span
                  aria-hidden="true"
                  className="font-display text-xs font-bold tabular-nums text-accent-strong lg:pt-1.5"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-h3 leading-tight text-ink">{step.title}</h3>
                <p className="col-start-2 font-sans text-[15px] leading-relaxed text-muted lg:col-start-3 lg:pt-1">
                  {step.body}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
