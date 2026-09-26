import Link from "next/link";
import Image from "next/image";

/** Official lockup: violet monogram + "marketix" + "Marketing That Clicks" (511×111). */
const LOGO = { src: "/brand/marketix-logo.png", width: 511, height: 111 } as const;
/** Light-mode lockup, cropped from the user's supplied "Light mode.png" (Favicon.zip, 2026-09-25). */
const LOGO_LIGHT = { src: "/brand/marketix-logo-light.png", width: 990, height: 211 } as const;

/**
 * The brand logo as supplied: light text for dark mode, black text for light
 * mode. CSS shows the right one for the current theme. `height` is the whole lockup.
 */
export function Wordmark({
  className = "",
  height = 40,
  priority = false,
}: {
  className?: string;
  height?: number;
  priority?: boolean;
  /** @deprecated The supplied logo always includes the tagline. */
  showTagline?: boolean;
}) {
  const width = Math.round((height * LOGO.width) / LOGO.height);
  const lightWidth = Math.round((height * LOGO_LIGHT.width) / LOGO_LIGHT.height);
  return (
    <Link href="/" aria-label="Marketix Studio home" className={`inline-flex shrink-0 items-center ${className}`}>
      <Image
        src={LOGO.src}
        alt="Marketix, Marketing That Clicks"
        width={width}
        height={height}
        priority={priority}
        style={{ width, height }}
        className="hidden dark:block"
      />
      <Image
        src={LOGO_LIGHT.src}
        alt="Marketix, Marketing That Clicks"
        width={lightWidth}
        height={height}
        priority={priority}
        style={{ width: lightWidth, height }}
        className="block dark:hidden"
      />
    </Link>
  );
}
