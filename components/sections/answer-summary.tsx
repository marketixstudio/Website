import { Reveal } from "@/components/ui/reveal";

type SummaryGroup = {
  label: string;
  items: string[];
};

/**
 * Answer-first block, written to be lifted verbatim by AI answer engines.
 * Editorial treatment: the answer runs as a lead paragraph at reading width,
 * with the supporting groups as rule-separated columns underneath.
 */
export function AnswerSummary({
  question,
  answer,
  groups,
}: {
  question: string;
  answer: string;
  groups: SummaryGroup[];
}) {
  return (
    <section
      className="border-b border-line bg-surface py-section"
      aria-labelledby="answer-summary-title"
    >
      <div className="container-edge">
        <Reveal>
          <div className="grid gap-x-10 gap-y-6 lg:grid-cols-[auto_1fr] lg:items-start">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-accent-strong lg:pt-3 lg:w-40">
              Quick answer
            </p>
            <div>
              <h2
                id="answer-summary-title"
                className="max-w-3xl font-display text-h2 leading-tight text-ink"
              >
                {question}
              </h2>
              <p className="mt-6 max-w-3xl font-sans text-lg leading-[1.7] text-ink-2">
                {answer}
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-x-10 gap-y-10 border-t border-line pt-10 md:grid-cols-3">
          {groups.map((group, index) => (
            <Reveal key={group.label} delay={index * 0.06}>
              <div>
                <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                  {group.label}
                </h3>
                <ul className="mt-5 space-y-0">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="border-t border-line py-3.5 font-sans text-[15px] leading-relaxed text-ink-2 first:border-t-0 first:pt-0"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
