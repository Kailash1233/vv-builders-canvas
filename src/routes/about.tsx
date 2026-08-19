import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { Reveal, Eyebrow } from "@/components/site/Reveal";
import { FinalCTA } from "@/components/site/FinalCTA";
import { SITE_URL, business } from "@/data/site";
import courtyard from "@/assets/vv-courtyard.jpg";
import verandah from "@/assets/vv-verandah.jpg";

const title = "About V.V Builders | Builders in Padappai, Tambaram, Chennai";
const description =
  "V.V Builders is a builders and construction company in Padappai, Tambaram, Chennai, working on independent houses, villas, renovation and home extensions across South Chennai.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/about` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/about` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "About", item: `${SITE_URL}/about` },
          ],
        }),
      },
    ],
  }),
  component: AboutPage,
});

const considerations = [
  {
    title: "Heat and orientation",
    body: "West and south-west walls take the worst of the Chennai sun. Plans are arranged so habitable rooms are buffered, openings are shaded, and roof slabs get insulation or a reflective finish.",
  },
  {
    title: "Rain and water management",
    body: "Plinth levels, slopes, drainage lines, sump placement and terrace waterproofing are worked out before construction rather than corrected after the first monsoon.",
  },
  {
    title: "Ventilation and daylight",
    body: "Openings on opposite walls, courtyards and ventilators keep air moving. Good daylight reduces both electricity use and the damp that follows closed rooms.",
  },
  {
    title: "Materials that age well",
    body: "Humidity is hard on finishes and fittings. We prefer materials and specifications that local trades execute well and that stay serviceable for years.",
  },
  {
    title: "Family-oriented layouts",
    body: "A ground-floor bedroom for elders, a pooja space, a utility court that actually works, storage where it is needed — planned in, not squeezed in later.",
  },
  {
    title: "Maintenance in mind",
    body: "Accessible service lines, terraces that can be cleaned, and details that do not depend on constant upkeep to look right.",
  },
];

function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About"
        crumb="About"
        title="Building homes with practical craftsmanship"
        intro={`V.V Builders is a builders and construction company based in ${business.addressLine}, focused on residential construction and renovation across Tambaram and South Chennai.`}
      />

      <section className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <img
            src={courtyard}
            alt="Courtyard of a contemporary Chennai home with brick jaali screen and daylight"
            width={1408}
            height={1600}
            loading="lazy"
            className="h-[320px] w-full object-cover md:h-[560px]"
          />
        </Reveal>
      </section>

      <section className="mx-auto mt-20 max-w-[1400px] px-5 md:mt-28 md:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <Reveal>
              <Eyebrow>What we do</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 text-[clamp(1.9rem,3.6vw,3rem)] font-extrabold uppercase leading-[1.02] tracking-[-0.03em]">
                Residential construction, end to end
              </h2>
            </Reveal>
          </div>
          <div>
            <Reveal delay={0.15}>
              <p className="text-base leading-[1.7] text-foreground/70">
                Our work covers independent houses, villas, home extensions, renovation and
                structural improvements, along with interior execution where it forms part of the
                scope. On most projects we handle the full construction coordination — trades,
                materials, sequencing and site supervision — so there is one team accountable for
                the build.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <p className="mt-5 text-base leading-[1.7] text-foreground/70">
                We work the way a construction company should: quality workmanship, straightforward
                communication and a clear record of what has been agreed. Where a decision affects
                cost or programme, you hear it before it happens, not after.
              </p>
            </Reveal>
            <Reveal delay={0.35}>
              <Link
                to="/services"
                className="mt-7 inline-flex text-sm font-semibold uppercase tracking-[0.14em] text-navy underline-offset-8 hover:underline"
              >
                See our services
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-[1400px] px-5 md:mt-36 md:px-10">
        <Reveal>
          <Eyebrow>Built for Chennai</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-5 max-w-3xl text-[clamp(1.9rem,3.6vw,3rem)] font-extrabold uppercase leading-[1.02] tracking-[-0.03em]">
            What a home here has to deal with
          </h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-px border border-foreground/12 bg-foreground/12 md:grid-cols-3">
          {considerations.map((c) => (
            <Reveal key={c.title}>
              <div className="h-full bg-background p-8 md:p-10">
                <h3 className="text-lg font-bold tracking-tight">{c.title}</h3>
                <p className="mt-3 text-sm leading-[1.65] text-foreground/65">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-[1400px] px-5 md:mt-36 md:px-10">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
          <Reveal>
            <img
              src={verandah}
              alt="Shaded verandah of a South Chennai home with terracotta flooring"
              width={1600}
              height={1104}
              loading="lazy"
              className="h-[320px] w-full object-cover md:h-[480px]"
            />
          </Reveal>
          <div>
            <Reveal delay={0.1}>
              <h2 className="text-[clamp(1.7rem,3.2vw,2.6rem)] font-extrabold uppercase leading-[1.05] tracking-[-0.03em]">
                Based in Padappai, working across Tambaram
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-base leading-[1.7] text-foreground/70">
                Being local matters in construction. Our base in Padappai keeps us close to sites
                across Tambaram, Mudichur, Mannivakkam, Perungalathur, Vandalur, Urapakkam,
                Guduvanchery and the wider South Chennai corridor — which means regular supervision,
                faster decisions and better control over quality.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <Link
                to="/projects"
                className="mt-7 inline-flex text-sm font-semibold uppercase tracking-[0.14em] text-navy underline-offset-8 hover:underline"
              >
                Look at our projects
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <FinalCTA />
    </PageShell>
  );
}
