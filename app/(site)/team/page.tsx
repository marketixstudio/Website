/* Hallmark · genre: atmospheric · template: company · centrepiece: founder lead card + team grid of real people
 * honest: pass (46: names, roles and photos from the live site; missing photo shown as a placeholder, not a stock face)
 */
import type { Metadata } from "next";
import Image from "next/image";
import { Linkedin } from "lucide-react";
import { JsonLd } from "@/components/seo/json-ld";
import { IndexHero } from "@/components/v2/index-hero";
import { Cta, TextLink } from "@/components/v2/primitives";
import { team } from "@/content/team";
import type { TeamMember } from "@/lib/content-types";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, graph, personSchema } from "@/lib/structured-data";

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

function Portrait({ member, size }: { member: TeamMember; size: number }) {
  return member.image ? (
    <Image
      src={member.image}
      alt={member.name}
      width={size}
      height={size}
      className="rounded-full border border-line object-cover"
      style={{ width: size, height: size }}
    />
  ) : (
    <span
      role="img"
      aria-label={`${member.name}, photo to supply`}
      className="mx-todo inline-flex items-center justify-center rounded-full font-display text-xl font-bold"
      style={{ width: size, height: size }}
    >
      {initials(member.name)}
    </span>
  );
}

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

      {/* Every member, the founder included, gets the same card at the same size (user request). */}
      <section aria-label="Team members" className="pb-24">
        <ul className="container-edge grid grid-cols-[minmax(0,1fr)] gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <li key={member.slug} id={member.slug} className="mx-card mx-glare flex h-full flex-col p-7 sm:p-8">
              <Portrait member={member} size={112} />
              <h2 className="mt-6 font-display text-2xl font-bold text-ink">{member.name}</h2>
              <p className="mt-1 font-semibold text-accent">{member.role}</p>
              <p className="mt-4 flex-1 text-[0.9375rem] leading-relaxed text-muted">{member.bio}</p>
              {member.expertise && member.expertise.length > 0 && (
                <ul className="mt-5 flex flex-wrap gap-2">
                  {member.expertise.map((item) => (
                    <li key={item} className="rounded-full border border-line px-3 py-1 text-sm text-ink-2">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} on LinkedIn`}
                  className="mt-5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:text-ink"
                >
                  <Linkedin className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                </a>
              )}
            </li>
          ))}
        </ul>
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
