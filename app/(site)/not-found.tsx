import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Cta } from "@/components/v2/primitives";
import { ElectricMonogram } from "@/components/v2/electric-monogram";

/* A lost visitor is still a visitor: offer the three routes most people want. */
const routes = [
  { title: "Services", body: "Ads, SEO, websites and creative.", href: "/services" },
  { title: "Case studies", body: "The work and what it changed.", href: "/work" },
  { title: "Contact", body: "Call, WhatsApp or send a note.", href: "/contact" },
];

export default function NotFound() {
  return (
    <section className="mx-pool pb-24 pt-36 sm:pt-44">
      <div className="container-edge">
        <div className="grid grid-cols-[minmax(0,1fr)] items-center gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div>
            <p className="font-display text-[clamp(4.5rem,14vw,10rem)] font-bold leading-none tracking-[-0.01em] text-accent">404</p>
            <h1 className="mt-6 max-w-[18ch] font-display text-h2 font-bold leading-[1.18] tracking-[-0.01em] text-ink">
              This page doesn&apos;t exist, or it has moved.
            </h1>
            <p className="mt-5 max-w-[48ch] text-[1.0625rem] leading-relaxed text-muted">
              Try one of these instead, or start from the home page.
            </p>
          </div>
          <ElectricMonogram className="h-[220px] w-full sm:h-[320px]" />
        </div>
        <ul className="mt-12 grid grid-cols-[minmax(0,1fr)] gap-3 md:grid-cols-3">
          {routes.map((r) => (
            <li key={r.href} className="mx-card group relative p-6 transition-colors hover:border-accent/60 focus-within:border-accent/60">
              <Link href={r.href} className="font-display text-xl font-bold text-ink after:absolute after:inset-0 after:rounded-[24px] after:content-['']">
                {r.title}
              </Link>
              <p className="mt-1.5 text-sm text-muted">{r.body}</p>
              <span className="mx-row-go mt-4 ml-0" aria-hidden="true">
                <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <Cta href="/">Back to the home page</Cta>
        </div>
      </div>
    </section>
  );
}
