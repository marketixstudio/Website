"use client";

import Image from "next/image";
import LogoLoop from "@/components/ui/bits/LogoLoop";

type Logo = { name: string; src: string };

/**
 * Client logo strip: React Bits LogoLoop (the user's settings: speed 120, leftward,
 * stops on hover, scale on hover, faded edges) with the site's chip design (logo in a
 * circle plus the company name). The edge fade uses the page background so it works in
 * light and dark mode. LogoLoop handles reduced motion itself.
 */
export function ClientLogoLoop({ logos }: { logos: Logo[] }) {
  return (
    <div className="relative overflow-hidden py-3">
      <LogoLoop
        logos={logos.map((l) => ({ src: l.src, alt: l.name, title: l.name }))}
        speed={120}
        direction="left"
        logoHeight={48}
        gap={24}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="rgb(var(--bg))"
        ariaLabel="Some of the businesses we work with"
        renderItem={(item) => {
          const logo = item as { src: string; alt?: string };
          return (
            <span className="mx-card flex items-center gap-4 rounded-full py-2.5 pl-2.5 pr-6 text-base transition-transform duration-300 group-hover/item:scale-[1.06] motion-reduce:transition-none">
              <Image src={logo.src} alt={logo.alt ?? ""} width={52} height={52} className="h-[52px] w-[52px] rounded-full object-cover" />
              <span className="whitespace-nowrap text-[0.9375rem] font-semibold text-ink-2">{logo.alt}</span>
            </span>
          );
        }}
      />
    </div>
  );
}
