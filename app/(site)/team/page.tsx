/* Hallmark · genre: atmospheric · template: company · centrepiece: founder lead card + team grid of real people
 * honest: pass (46: names, roles and photos from the live site; missing photo shown as a placeholder, not a stock face)
 */
import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";
import { IndexHero } from "@/components/v2/index-hero";
import { Cta, TextLink } from "@/components/v2/primitives";
import { team } from "@/content/team";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, graph, personSchema } from "@/lib/structured-data";
import ChromaGrid, { type ChromaItem } from "@/components/ui/bits/ChromaGrid";

export const metadata: Metadata = buildMetadata({
  title: "Our Team in Pune",
  description:
    "Meet the Marketix Studio team in Pune: the people who plan and run your paid ads, SEO, creative, social media and client reporting.",
  path: "/team",
});

const initials = (name: string) =>
  name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);


/** Violet-family shades so the colour reveal stays on brand. */
const shades = ["#C82AEF", "#9425E4", "#D66CF5", "#7C3AED", "#E040FB", "#A855F7"];

/** Initials card for members whose photo is still to come. */
const initialsImage = (name: string) =>
  `data:image/svg+xml;charset=utf-8,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="500" viewBox="0 0 400 500"><rect width="400" height="500" fill="#161616"/><text x="200" y="285" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="120" font-weight="700" fill="#D66CF5">${initials(name)}</text></svg>`,
  )}`;

const chromaItems: ChromaItem[] = team.map((m, i) => {
  const shade = shades[i % shades.length];
  return {
    image: m.image ?? initialsImage(m.name),
    title: m.name,
    subtitle: m.role,
    location: "Pune",
    description: m.bio,
    borderColor: shade,
    gradient: `linear-gradient(${145 + i * 15}deg, ${shade}, #000)`,
    url: m.linkedin,
  };
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={graph([breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Team", path: "/team" }]), ...team.map(personSchema)])}
      />

      <IndexHero
        crumbs={[{ name: "Home", path: "/" }, { name: "Team", path: "/team" }]}
        label="Team, Marketix Studio Pune"
        title="The people who do"
        accent="the work"
        lede="A small team in Pune. Strategy, ads, SEO, creative, social and client success, all under one roof."
        cta={{ label: "Work with us", href: "/contact" }}
        secondary={{ label: "About the studio", href: "/about" }}
      />

      {/* Team: React Bits ChromaGrid (user request). Every member gets the same card; the
          photos are greyscale until the cursor passes, revealing each card's violet shade. */}
      <section aria-label="Team members" className="pb-24">
        <div className="container-edge">
          <ChromaGrid items={chromaItems} radius={300} damping={0.45} fadeOut={0.6} ease="power3.out" />
        </div>
      </section>

      <section className="border-t border-line py-24 sm:py-28">
        <div className="container-edge flex flex-col items-start gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="max-w-[20ch] font-display text-h2 font-bold leading-[1.18] tracking-[-0.01em] text-ink">
              Want to meet the team?
            </h2>
            <p className="mt-5 max-w-[50ch] text-[1.0625rem] leading-relaxed text-muted">
              Start with a free growth audit, or get in touch.
            </p>
          </div>
          <div className="flex flex-col items-start gap-5">
            <Cta href="/growth-audit">Get a free growth audit</Cta>
            <TextLink href="/contact">Contact us</TextLink>
          </div>
        </div>
      </section>
    </>
  );
}
