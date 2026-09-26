import { SiteNav } from "@/components/v2/nav";
import { SiteFooter } from "@/components/v2/footer";
import { WhatsAppFloat } from "@/components/v2/whatsapp-float";
import { ChatWidget } from "@/components/v2/chat-widget";
import { AccentSwitcher } from "@/components/v2/accent-switcher";

/**
 * Marketing chrome (design.md: N5 nav, Ft5 footer). Client-facing tools under /r
 * live outside this group so they render standalone, without the site chrome.
 */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-card focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink focus:outline focus:outline-2 focus:outline-accent"
      >
        Skip to content
      </a>
      <SiteNav />
      <main id="main">{children}</main>
      <SiteFooter />
      <WhatsAppFloat />
      <ChatWidget />
      <AccentSwitcher />
    </>
  );
}
