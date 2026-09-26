import type { Metadata } from "next";
import { SiteNav } from "@/components/v2/nav";
import { SiteFooter } from "@/components/v2/footer";
import { WhatsAppFloat } from "@/components/v2/whatsapp-float";
import { ChatWidget } from "@/components/v2/chat-widget";
import { AccentSwitcher } from "@/components/v2/accent-switcher";
import { CardSpotlight } from "@/components/v2/card-spotlight";
import SiteNotFound from "@/app/(site)/not-found";

export const metadata: Metadata = { title: "Page not found", robots: { index: false, follow: true } };

/**
 * Unmatched URLs render here (outside the (site) layout), so this adds the
 * site chrome around the same 404 content that `notFound()` shows in-app.
 */
export default function NotFound() {
  return (
    <>
      <SiteNav />
      <main id="main">
        <SiteNotFound />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
      <ChatWidget />
      <AccentSwitcher />
      <CardSpotlight />
    </>
  );
}
