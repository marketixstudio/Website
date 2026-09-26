import { Reveal } from "@/components/ui/reveal";

/** Violet target-dot eyebrow, matching the marker used across the site. */
export function Eyebrow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p
      className={`inline-flex items-center gap-2.5 font-sans text-xs font-semibold uppercase tracking-[0.16em] text-ink ${className}`}
    >
      <span
        aria-hidden="true"
        className="relative inline-flex h-4 w-4 items-center justify-center rounded-full border border-accent shadow-[0_0_12px_rgb(var(--accent)/0.55)]"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
      </span>
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  const centered = align === "center";
  return (
    <Reveal
      className={`${centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} ${className}`}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-5 font-display text-h2 leading-[1.1] text-gradient-ink">{title}</h2>
      {description && (
        <p
          className={`mt-5 font-sans text-base leading-relaxed text-muted ${
            centered ? "mx-auto max-w-2xl" : "max-w-2xl"
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
