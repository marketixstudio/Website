import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/seo/json-ld";
import { buildMetadata, siteUrl } from "@/lib/seo";
import { graph, organizationSchema, websiteSchema } from "@/lib/structured-data";
import { GoogleAnalytics } from "@/components/analytics/google-analytics";
import { themeScript } from "@/lib/theme";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const defaultTitle = "Marketix Studio | Performance Marketing Agency in Pune, India";

export const metadata: Metadata = {
  ...buildMetadata({
    title: defaultTitle,
    description:
      "Marketix Studio is a performance marketing agency in Pune. We grow real estate, eCommerce and D2C brands with paid ads, SEO and conversion-led creative across India, the UAE, the UK and the US.",
    path: "/",
  }),
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s | Marketix Studio",
  },
  applicationName: "Marketix Studio",
  authors: [{ name: "Marketix Studio", url: siteUrl }],
  creator: "Marketix Studio",
  publisher: "Marketix Studio",
  formatDetection: { telephone: true, email: true, address: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#040404" },
  ],
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${jakarta.variable} dark`} suppressHydrationWarning>
      <head>
        {/* Applies the visitor's saved theme and accent before paint (lib/theme.ts). */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <JsonLd data={graph([websiteSchema, organizationSchema])} />
        <GoogleAnalytics />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
