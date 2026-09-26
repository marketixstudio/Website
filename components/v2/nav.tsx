"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { Wordmark } from "@/components/ui/wordmark";
import { Cta, serviceHref } from "@/components/v2/primitives";
import { primaryNav } from "@/lib/nav";
import { ThemeToggle } from "@/components/v2/theme-toggle";

type PanelId = "services" | "industries" | "about";

const servicesNav = primaryNav.find((item) => item.label === "Services");
const industriesNav = primaryNav.find((item) => item.label === "Industries");

/** Rebuilt service pages live under /v2 until rollout; everything else keeps its URL. */
const serviceGroups = (servicesNav?.groups ?? []).map((group) => ({
  title: group.title,
  items: group.items.map((item) => ({ ...item, href: serviceHref(item.href.replace("/services/", "")) })),
}));
const industries = industriesNav?.children ?? [];

/** About submenu: the company, its people, its proof and ways to join. */
const aboutLinks = [
  { label: "About us", href: "/about" },
  { label: "Our team", href: "/team" },
  { label: "Our approach", href: "/approach" },
  { label: "Case studies", href: "/work" },
  { label: "Careers", href: "/careers" },
  { label: "Partners", href: "/partners" },
];
const aboutMatch = ["/about", "/team", "/approach", "/work", "/careers", "/partners"];

const plainLinks = [
  { label: "Blog", href: "/blog", match: ["/blog"] },
  { label: "Contact", href: "/contact", match: ["/contact"] },
];

/**
 * Desktop (lg+): floating pill — Services ▾ · Industries ▾ · About ▾ · Blog ·
 * Contact · Free audit. About holds team, approach, case studies, careers, partners. Dropdowns open on hover or click; close on Escape or outside click.
 *
 * Mobile + tablet: the live site's pattern — a full-width rounded bar with the logo
 * left and a violet menu button right, opening a drawer that slides in from the left.
 */
export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState<PanelId | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout>>();
  /** How the open panel was opened: hover panels close when the pointer leaves;
   *  clicked panels stay until an outside click, Escape or a second click. */
  const openMode = useRef<"hover" | "click">("hover");

  useEffect(() => {
    setOpen(null);
    setDrawerOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open && !drawerOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpen(null);
      if (drawerOpen) {
        setDrawerOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const onClick = (e: MouseEvent) => {
      if (!navRef.current?.contains(e.target as Node)) setOpen(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open, drawerOpen]);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    if (drawerOpen) closeButtonRef.current?.focus();
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  const closeDrawer = () => {
    setDrawerOpen(false);
    menuButtonRef.current?.focus();
  };

  const hoverOpen = (id: PanelId) => {
    clearTimeout(closeTimer.current);
    if (open === id) return;
    openMode.current = "hover";
    setOpen(id);
  };
  const hoverClose = () => {
    if (openMode.current === "click") return;
    closeTimer.current = setTimeout(() => setOpen(null), 160);
  };
  const clickToggle = (id: PanelId) => {
    clearTimeout(closeTimer.current);
    // A click on a panel that hover just opened pins it instead of closing it.
    if (open === id && openMode.current === "hover") {
      openMode.current = "click";
      return;
    }
    openMode.current = "click";
    setOpen(open === id ? null : id);
  };

  const isActive = (prefixes: string[]) => prefixes.some((p) => pathname.startsWith(p));

  const trigger = (id: PanelId, label: string, active: boolean) => (
    <button
      type="button"
      aria-expanded={open === id}
      aria-controls={`nav-${id}`}
      onClick={() => clickToggle(id)}
      onMouseEnter={() => hoverOpen(id)}
      onMouseLeave={hoverClose}
      className={`inline-flex items-center gap-1 whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium transition-colors ${
        active || open === id ? "text-ink" : "text-ink-2 hover:text-ink"
      }`}
    >
      {label}
      <ChevronDown
        className={`h-4 w-4 transition-transform duration-200 ${open === id ? "rotate-180" : ""}`}
        strokeWidth={2}
        aria-hidden="true"
      />
    </button>
  );

  const panelClass =
    "mx-card absolute left-1/2 top-[calc(100%+0.75rem)] -translate-x-1/2 p-6 shadow-[0_24px_60px_-20px_rgb(0_0_0/0.8)]";

  /** Drawer accordion row, after the live site: label left, chevron in a violet pill right. */
  const drawerSection = (label: string, active: boolean, children: ReactNode) => (
    <details className="group" open={active || undefined}>
      <summary
        className={`flex cursor-pointer list-none items-center justify-between py-3.5 text-lg font-semibold [&::-webkit-details-marker]:hidden ${
          active ? "text-accent" : "text-ink"
        }`}
      >
        {label}
        <span className="inline-flex h-7 w-12 items-center justify-center rounded-full border border-accent/70 text-accent">
          <ChevronDown
            className="h-4 w-4 transition-transform duration-200 group-open:rotate-180"
            strokeWidth={2}
            aria-hidden="true"
          />
        </span>
      </summary>
      <div className="pb-4">{children}</div>
    </details>
  );

  const drawerLinkClass = (active: boolean) =>
    `block py-3.5 text-lg font-semibold ${active ? "text-accent" : "text-ink"}`;
  const drawerSubLinkClass = (active: boolean) =>
    `block py-1.5 text-[0.9375rem] ${active ? "text-accent" : "text-ink-2"}`;

  const menuButtonClass =
    "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] bg-accent text-accent-ink transition-colors hover:bg-accent-deep";

  return (
    <header className="pointer-events-none fixed inset-x-0 top-3 z-50 flex justify-center px-4 sm:top-4">
      {/* ── Desktop: floating pill ─────────────────────────────── */}
      <nav
        ref={navRef}
        aria-label="Primary"
        className="pointer-events-auto relative hidden items-center rounded-full border border-line bg-card/85 py-1.5 pl-5 pr-1.5 shadow-[0_10px_30px_-12px_rgb(0_0_0/0.7)] backdrop-blur-md lg:flex"
      >
        <Wordmark height={34} className="mr-5" priority />

        {trigger("services", "Services", isActive(["/services", "/v2/services"]))}
        {trigger("industries", "Industries", isActive(["/industries"]))}
        {trigger("about", "About", isActive(aboutMatch))}
        {plainLinks.map((link) => {
          const active = isActive(link.match);
          return (
            <Link
              key={link.href}
              href={link.href}
              aria-current={active ? "page" : undefined}
              className={`whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium transition-colors ${
                active ? "text-ink" : "text-ink-2 hover:text-ink"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
        <ThemeToggle className="ml-2" />
        <span className="ml-2">
          <Cta href="/growth-audit">Free audit</Cta>
        </span>

        {open === "services" && (
          <div
            id="nav-services"
            data-no-spot
            onMouseEnter={() => hoverOpen("services")}
            onMouseLeave={hoverClose}
            className={`${panelClass} w-[min(38rem,calc(100vw-2rem))] xl:w-[min(66rem,calc(100vw-2rem))]`}
          >
            <div className="grid grid-cols-2 gap-x-8 gap-y-6 xl:grid-cols-4">
              {serviceGroups.map((group) => (
                <div key={group.title}>
                  <p className="px-2 text-xs font-semibold text-muted">{group.title}</p>
                  <ul className="mt-2 space-y-0.5">
                    {group.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="block whitespace-nowrap rounded-lg px-2 py-1.5 text-[0.9375rem] leading-snug text-ink-2 transition-colors hover:bg-card-2 hover:text-ink"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-5 border-t border-line pt-4">
              <Link href="/services" className="mx-link text-sm">
                All services
              </Link>
            </div>
          </div>
        )}

        {open === "industries" && (
          <div
            id="nav-industries"
            data-no-spot
            onMouseEnter={() => hoverOpen("industries")}
            onMouseLeave={hoverClose}
            className={`${panelClass} w-[min(28rem,calc(100vw-2rem))]`}
          >
            <ul className="grid grid-cols-2 gap-x-6 gap-y-0.5">
              {industries.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block whitespace-nowrap rounded-lg px-2 py-1.5 text-[0.9375rem] leading-snug text-ink-2 transition-colors hover:bg-card-2 hover:text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-5 border-t border-line pt-4">
              <Link href="/industries" className="mx-link text-sm">
                All industries
              </Link>
            </div>
          </div>
        )}
        {open === "about" && (
          <div
            id="nav-about"
            data-no-spot
            onMouseEnter={() => hoverOpen("about")}
            onMouseLeave={hoverClose}
            className={`${panelClass} w-[min(34rem,calc(100vw-2rem))]`}
          >
            <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-6">
              <ul className="space-y-0.5">
                {aboutLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={pathname === item.href ? "page" : undefined}
                      className="block whitespace-nowrap rounded-lg px-2 py-1.5 text-[0.9375rem] leading-snug text-ink-2 transition-colors hover:bg-card-2 hover:text-ink"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/work/jayganesh-review-system"
                className="group flex flex-col justify-between rounded-2xl border border-line bg-bg/60 p-4 transition-colors hover:border-accent/60"
              >
                <span className="text-xs font-semibold text-muted">Featured case study</span>
                <span className="mt-2 text-[0.9375rem] font-semibold leading-snug text-ink">
                  A review page that turns happy customers into Google reviews
                </span>
                <span className="mx-link mt-3 text-sm">Read it</span>
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* ── Mobile + tablet: full-width bar, logo left, menu right ─ */}
      <div className="pointer-events-auto flex h-[4.25rem] w-full items-center justify-between rounded-[20px] border border-line bg-card/90 pl-5 pr-3 shadow-[0_10px_30px_-12px_rgb(0_0_0/0.7)] backdrop-blur-md sm:h-[4.75rem] sm:pl-6 sm:pr-4 lg:hidden">
        <Wordmark height={40} priority />
        <div className="flex items-center gap-2">
          <ThemeToggle className="hidden min-[360px]:inline-flex" />
          <button
            ref={menuButtonRef}
            type="button"
            aria-expanded={drawerOpen}
            aria-controls="nav-drawer"
            aria-label="Open menu"
            onClick={() => setDrawerOpen(true)}
            className={menuButtonClass}
          >
            <Menu className="h-5 w-5" strokeWidth={2.25} aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={closeDrawer}
        className={`fixed inset-0 bg-bg/70 backdrop-blur-sm transition-opacity duration-300 motion-reduce:transition-none lg:hidden ${
          drawerOpen ? "pointer-events-auto opacity-100" : "opacity-0"
        }`}
      />

      {/* Drawer — slides in from the left */}
      <div
        id="nav-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        {...(drawerOpen ? {} : ({ inert: "" } as object))}
        className={`pointer-events-auto fixed inset-y-0 left-0 flex w-[min(22rem,88vw)] flex-col border-r border-line bg-card shadow-[24px_0_60px_-20px_rgb(0_0_0/0.8)] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none lg:hidden ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between gap-4 border-b border-line px-6 py-4">
          <Wordmark height={36} />
          <button ref={closeButtonRef} type="button" aria-label="Close menu" onClick={closeDrawer} className={menuButtonClass}>
            <X className="h-5 w-5" strokeWidth={2.25} aria-hidden="true" />
          </button>
        </div>

        <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-6 pb-6 pt-2">
          <ul className="divide-y divide-line">
            <li>
              <Link href="/" className={drawerLinkClass(pathname === "/")}>
                Home
              </Link>
            </li>
            <li>
              {drawerSection(
                "Services",
                isActive(["/services", "/v2/services"]),
                serviceGroups.map((group) => (
                  <div key={group.title} className="mb-4 last:mb-0">
                    <p className="text-xs font-semibold text-muted">{group.title}</p>
                    <ul className="mt-1.5">
                      {group.items.map((item) => (
                        <li key={item.href}>
                          <Link href={item.href} className={drawerSubLinkClass(pathname === item.href)}>
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )),
              )}
            </li>
            <li>
              {drawerSection(
                "Industries",
                isActive(["/industries"]),
                <ul>
                  {industries.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className={drawerSubLinkClass(pathname === item.href)}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>,
              )}
            </li>
            <li>
              {drawerSection(
                "About",
                isActive(aboutMatch),
                <ul>
                  {aboutLinks.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className={drawerSubLinkClass(pathname === item.href)}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>,
              )}
            </li>
            {plainLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={drawerLinkClass(isActive(link.match))}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center justify-between gap-4 border-t border-line px-6 py-5">
          <Cta href="/growth-audit">Get a free audit</Cta>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
