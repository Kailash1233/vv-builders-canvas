import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { FinalCTA } from "@/components/site/FinalCTA";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { SITE_URL } from "@/data/site";

const title = "Construction Services in Tambaram, Chennai | V.V Builders";
const description =
  "House construction, villa construction, renovation, home extensions and civil works in Tambaram and South Chennai by V.V Builders, Padappai.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/services` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/services` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: services.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "Service",
              name: s.title,
              description: s.summary,
              serviceType: s.title,
              areaServed: "Tambaram, Chennai, Tamil Nadu",
              provider: { "@type": "LocalBusiness", name: "V.V Builders" },
            },
          })),
        }),
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Services"
        crumb="Services"
        title="Construction work, handled properly"
        intro="From a new independent house in Tambaram to a first floor extension in Mudichur — here is the work we take on, and what each scope actually includes."
      />

      <section className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid grid-cols-1 gap-px border border-foreground/12 bg-foreground/12 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="group bg-background p-7 transition-colors hover:bg-card"
            >
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-lg font-bold tracking-tight">{s.title}</h2>
                <ArrowUpRight
                  size={18}
                  className="mt-1 shrink-0 text-foreground/35 transition-colors group-hover:text-navy"
                />
              </div>
              <p className="mt-3 text-sm leading-[1.6] text-foreground/60">{s.summary}</p>
            </a>
          ))}
        </div>
      </section>

      <div className="mt-20 space-y-24 md:mt-28 md:space-y-36">
        {services.map((s, i) => (
          <section
            key={s.id}
            id={s.id}
            className="mx-auto max-w-[1400px] scroll-mt-28 px-5 md:px-10"
          >
            <div
              className={`grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16 ${
                i % 2 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <Reveal>
                <img
                  src={s.image}
                  alt={s.alt}
                  width={1600}
                  height={1104}
                  loading="lazy"
                  className="h-[300px] w-full object-cover md:h-[520px]"
                />
              </Reveal>
              <div>
                <Reveal delay={0.1}>
                  <span className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-navy">
                    0{i + 1} — Service
                  </span>
                </Reveal>
                <Reveal delay={0.15}>
                  <h2 className="mt-5 text-[clamp(1.8rem,3.4vw,2.8rem)] font-extrabold uppercase leading-[1.03] tracking-[-0.03em]">
                    {s.title}
                  </h2>
                </Reveal>
                <Reveal delay={0.25}>
                  <p className="mt-6 max-w-xl text-base leading-[1.7] text-foreground/70">
                    {s.body}
                  </p>
                </Reveal>
                <Reveal delay={0.3}>
                  <ul className="mt-8 space-y-3">
                    {s.points.map((p) => (
                      <li
                        key={p}
                        className="border-b border-foreground/10 pb-3 text-sm text-foreground/80"
                      >
                        {p}
                      </li>
                    ))}
                  </ul>
                </Reveal>
                <Reveal delay={0.35}>
                  <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm font-semibold uppercase tracking-[0.14em]">
                    <Link to="/contact" className="text-navy underline-offset-8 hover:underline">
                      Enquire about this
                    </Link>
                    {projects.find((p) => p.relatedService.hash === s.id) && (
                      <Link
                        to="/projects/$slug"
                        params={{
                          slug: projects.find((p) => p.relatedService.hash === s.id)!.slug,
                        }}
                        className="text-foreground/60 underline-offset-8 hover:underline"
                      >
                        Related project
                      </Link>
                    )}
                  </div>
                </Reveal>
              </div>
            </div>
          </section>
        ))}
      </div>

      <FinalCTA title="Planning a build in Tambaram or South Chennai?" />
    </PageShell>
  );
}
