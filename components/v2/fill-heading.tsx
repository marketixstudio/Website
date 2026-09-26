/**
 * Section heading. It used to light up word by word on scroll; the user read the
 * dim-to-bright words as gradient text, so it now renders as a plain heading.
 * The component stays so call sites don't change.
 */
export function FillHeading({
  children,
  as: Tag = "h2",
  className = "",
  id,
}: {
  children: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
  id?: string;
}) {
  return (
    <Tag id={id} className={`mx-display ${className}`}>
      {children}
    </Tag>
  );
}
