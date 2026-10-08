/**
 * Every URL from the WordPress site maps to its Next.js equivalent so no
 * existing ranking or backlink lands on a 404 after the cutover.
 * Source paths are written without trailing slashes - Next normalises them.
 */
const legacyRedirects = [
  // Legacy service + city pages
  ["/digital-marketing-agency-pune", "/locations/pune"],
  ["/web-design-agency-in-pune", "/services/web-design-development"],
  ["/branding-agency-in-pune", "/services/branding-design"],
  ["/social-media-marketing-agency-pune", "/services/social-media-marketing"],
  ["/ppc-advertising-agency", "/services/google-ads-ppc"],
  ["/content-marketing-seo", "/services/content-marketing"],
  ["/email-marketing-automation", "/services/email-marketing-automation"],

  // Company pages
  ["/about-us", "/about"],
  ["/contact-us", "/contact"],
  ["/case-studies", "/work"],
  ["/partnership", "/partners"],
  ["/terms-and-conditions", "/terms"],

  // Tools and commerce
  ["/review", "/r/jayganesh"],
  ["/shop", "/gmb-toolkit"],
  ["/product/google-maps-ranking-toolkit", "/gmb-toolkit"],

  // WooCommerce routes that no longer exist
  ["/cart", "/gmb-toolkit"],
  ["/checkout", "/gmb-toolkit"],
  ["/my-account", "/gmb-toolkit"],

  // Stale WordPress artefacts
  ["/hello-world", "/blog"],
  ["/test", "/"],
  ["/category/blog", "/blog"],
  // Testimonials now live on the case studies hub (design.md: quotes belong with the work).
  ["/testimonials", "/work"],
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // `npm run preview` builds into its own folder, so it can run next to `npm run dev`
  // without corrupting the dev server's .next.
  distDir: process.env.NEXT_DIST_DIR || ".next",
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return legacyRedirects.map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }));
  },
  // Each demo is a static site in public/demo/<slug> (see scripts/import-demo-site.py); its
  // clean URL /demo/<slug> maps to index.html. Demos are for sharing by link, so they are
  // kept out of search (header below) and out of the sitemap.
  async rewrites() {
    return {
      beforeFiles: [{ source: "/demo/:slug", destination: "/demo/:slug/index.html" }],
    };
  },
  async headers() {
    return [
      {
        source: "/demo/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
      {
        source: "/preview/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
