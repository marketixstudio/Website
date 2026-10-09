import type { LucideIcon } from "lucide-react";

const SIZES = { sm: "h-11 w-11", md: "h-14 w-14", lg: "h-16 w-16", xl: "h-20 w-20 sm:h-24 sm:w-24" } as const;

/** Our glossy 3D-style icon tile (see .mx-gloss in globals.css). Decorative. */
export function GlossIcon({ icon: Icon, size = "md", className = "" }: { icon: LucideIcon; size?: keyof typeof SIZES; className?: string }) {
  return (
    <span aria-hidden="true" className={`mx-gloss ${SIZES[size]} ${className}`}>
      <Icon strokeWidth={2.1} />
    </span>
  );
}
