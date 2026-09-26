import Image from "next/image";

type Logo = { name: string; src: string };

/**
 * Two rows of real client logos drifting in opposite directions. Pure CSS
 * (see .mx-marquee in globals.css): pauses on hover, stops for reduced motion.
 * The track is rendered twice so the -50% loop is seamless; the copy is hidden
 * from assistive tech.
 */
function Row({ logos, reverse, duration }: { logos: Logo[]; reverse?: boolean; duration: string }) {
  const chip = (logo: Logo, hidden: boolean, key: string) => (
    <li
      key={key}
      aria-hidden={hidden || undefined}
      className="mx-card mx-3 flex shrink-0 items-center gap-4 rounded-full py-2.5 pl-2.5 pr-6 transition-colors hover:border-accent/60"
    >
      <Image
        src={logo.src}
        alt={hidden ? "" : logo.name}
        width={52}
        height={52}
        className="h-[52px] w-[52px] rounded-full object-cover"
      />
      <span className="whitespace-nowrap text-[0.9375rem] font-semibold text-ink-2">{logo.name}</span>
    </li>
  );

  return (
    <div
      className={`mx-marquee overflow-hidden py-1.5 ${reverse ? "mx-marquee--reverse" : ""}`}
      style={{ ["--mx-marquee-duration" as string]: duration }}
    >
      <ul className="mx-marquee__track">
        {logos.map((l) => chip(l, false, `a-${l.name}`))}
        {logos.map((l) => chip(l, true, `b-${l.name}`))}
      </ul>
    </div>
  );
}

export function LogoMarquee({ logos, rows = 2 }: { logos: Logo[]; rows?: 1 | 2 }) {
  if (rows === 1) return <Row logos={logos} duration="60s" />;
  const half = Math.ceil(logos.length / 2);
  const first = [...logos.slice(0, half), ...logos.slice(half)];
  const second = [...logos.slice(half), ...logos.slice(0, half)];
  return (
    <div className="space-y-3">
      <Row logos={first} duration="46s" />
      <Row logos={second} duration="52s" reverse />
    </div>
  );
}
