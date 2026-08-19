import { useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Download, X } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Reveal, Eyebrow } from "@/components/site/Reveal";
import { getProject, projects } from "@/data/projects";
import { SITE_URL } from "@/data/site";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Project not found | V.V Builders" }, { name: "robots", content: "noindex" }],
      };
    }
    const p = loaderData.project;
    const url = `${SITE_URL}/projects/${params.slug}`;
    return {
      meta: [
        { title: p.seoTitle },
        { name: "description", content: p.seoDescription },
        { property: "og:title", content: p.seoTitle },
        { property: "og:description", content: p.seoDescription },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: p.title,
            description: p.description,
            locationCreated: { "@type": "Place", name: p.location },
            creator: { "@type": "LocalBusiness", name: "V.V Builders" },
            url,
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
              { "@type": "ListItem", position: 2, name: "Projects", item: `${SITE_URL}/projects` },
              { "@type": "ListItem", position: 3, name: p.title, item: url },
            ],
          }),
        },
      ],
    };
  },
  notFoundComponent: ProjectNotFound,
  component: ProjectPage,
});

function ProjectNotFound() {
  return (
    <PageShell>
      <div className="mx-auto max-w-[1400px] px-5 py-40 md:px-10">
        <h1 className="text-4xl font-extrabold uppercase tracking-[-0.03em]">Project not found</h1>
        <Link to="/projects" className="mt-6 inline-flex text-sm font-semibold uppercase tracking-[0.14em] text-navy">
          Back to projects
        </Link>
      </div>
    </PageShell>
  );
}

function ProjectPage() {
  const { project: p } = Route.useLoaderData();
  const [lightbox, setLightbox] = useState<number | null>(null);
  const others = projects.filter((x) => x.slug !== p.slug).slice(0, 2);
  const brochure = p.brochureUrl ?? p.caseStudyUrl;

  return (
    <PageShell>
      <article>
        <section className="mx-auto max-w-[1600px] px-5 pt-24 md:px-10 md:pt-32">
          <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-[0.18em] text-foreground/45">
            <Link to="/" className="hover:text-navy">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link to="/projects" className="hover:text-navy">
              Projects
            </Link>
            <span className="mx-2">/</span>
            <span className="text-foreground/70">{p.title}</span>
          </nav>
          <img
            src={p.image}
            alt={p.imageAlt}
            width={1600}
            height={1104}
            className="mt-6 h-[45svh] w-full object-cover md:h-[70svh]"
          />
        </section>

        <section className="mx-auto max-w-[1400px] px-5 pt-12 md:px-10 md:pt-16">
          <Reveal>
            <Eyebrow>{p.category}</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-5 max-w-4xl text-[clamp(2.2rem,5vw,4.2rem)] font-black uppercase leading-[0.94] tracking-[-0.04em]">
              {p.title}
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-sm uppercase tracking-[0.18em] text-foreground/55">
              {p.location}
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="mt-7 max-w-2xl text-base leading-[1.7] text-foreground/70 md:text-lg">
              {p.description}
            </p>
          </Reveal>

          {brochure && (
            <Reveal delay={0.3}>
              <a
                href={brochure}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-9 inline-flex items-center gap-3 rounded-full bg-navy px-7 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-navy-foreground transition-colors hover:bg-foreground"
              >
                <Download size={16} />
                Download brochure
              </a>
            </Reveal>
          )}
        </section>

        <section className="mx-auto mt-16 max-w-[1400px] px-5 md:mt-24 md:px-10">
          <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-navy">
            Project overview
          </h2>
          <dl className="mt-8 grid grid-cols-1 gap-px border border-foreground/12 bg-foreground/12 sm:grid-cols-2 lg:grid-cols-4">
            {p.overview.map((o) => (
              <div key={o.label} className="bg-background p-7">
                <dt className="text-[0.7rem] uppercase tracking-[0.2em] text-foreground/45">
                  {o.label}
                </dt>
                <dd className="mt-3 text-base font-semibold">{o.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mx-auto mt-24 max-w-[1400px] px-5 md:mt-36 md:px-10">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
            <h2 className="text-[clamp(1.8rem,3.4vw,2.8rem)] font-extrabold uppercase leading-[1.03] tracking-[-0.03em]">
              The project
            </h2>
            <div className="space-y-10">
              {p.challenge && (
                <Reveal>
                  <h3 className="text-[0.7rem] uppercase tracking-[0.22em] text-foreground/45">
                    The brief and the site
                  </h3>
                  <p className="mt-4 text-base leading-[1.7] text-foreground/75">{p.challenge}</p>
                </Reveal>
              )}
              {p.approach && (
                <Reveal delay={0.1}>
                  <h3 className="text-[0.7rem] uppercase tracking-[0.22em] text-foreground/45">
                    Design and construction approach
                  </h3>
                  <p className="mt-4 text-base leading-[1.7] text-foreground/75">{p.approach}</p>
                </Reveal>
              )}
              {p.outcome && (
                <Reveal delay={0.2}>
                  <h3 className="text-[0.7rem] uppercase tracking-[0.22em] text-foreground/45">
                    Outcome
                  </h3>
                  <p className="mt-4 text-base leading-[1.7] text-foreground/75">{p.outcome}</p>
                </Reveal>
              )}
            </div>
          </div>
        </section>

        {p.gallery.length > 0 && (
          <section className="mx-auto mt-24 max-w-[1600px] px-5 md:mt-36 md:px-10">
            <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-navy">
              Gallery
            </h2>
            <div className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
              {p.gallery.map((g, i) => (
                <button
                  key={g.src + i}
                  type="button"
                  onClick={() => setLightbox(i)}
                  className="group block w-full break-inside-avoid overflow-hidden text-left"
                  aria-label={`Open image: ${g.alt}`}
                >
                  <img
                    src={g.src}
                    alt={g.alt}
                    loading="lazy"
                    className="w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                  />
                  {g.caption && (
                    <span className="mt-2 block text-xs uppercase tracking-[0.18em] text-foreground/45">
                      {g.caption}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </section>
        )}

        {p.highlights.length > 0 && (
          <section className="mx-auto mt-24 max-w-[1400px] px-5 md:mt-36 md:px-10">
            <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-navy">
              Project highlights
            </h2>
            <ul className="mt-8 grid grid-cols-1 gap-px border border-foreground/12 bg-foreground/12 sm:grid-cols-2 lg:grid-cols-3">
              {p.highlights.map((h) => (
                <li key={h} className="bg-background p-7 text-sm leading-[1.6] text-foreground/80">
                  {h}
                </li>
              ))}
            </ul>
          </section>
        )}

        {p.materials && p.materials.length > 0 && (
          <section className="mx-auto mt-24 max-w-[1400px] px-5 md:mt-36 md:px-10">
            <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-navy">
              Materials and details
            </h2>
            <dl className="mt-8 grid grid-cols-1 gap-x-10 sm:grid-cols-2">
              {p.materials.map((m) => (
                <div key={m.label} className="flex justify-between gap-6 border-b border-foreground/12 py-5">
                  <dt className="text-[0.7rem] uppercase tracking-[0.2em] text-foreground/45">{m.label}</dt>
                  <dd className="text-right text-sm text-foreground/80">{m.value}</dd>
                </div>
              ))}
            </dl>
          </section>
        )}

        <section className="mx-auto mt-24 max-w-[1400px] px-5 md:mt-36 md:px-10">
          <div className="border-t border-foreground/12 pt-6">
            <Link to="/services" hash={p.relatedService.hash} className="text-sm font-semibold uppercase tracking-[0.14em] text-navy underline-offset-8 hover:underline">
              Service: {p.relatedService.label}
            </Link>
          </div>
        </section>

        {others.length > 0 && (
          <section className="mx-auto mt-20 max-w-[1500px] px-5 md:mt-28 md:px-10">
            <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-navy">
              Related projects
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-10">
              {others.map((o, i) => (
                <Reveal key={o.slug} delay={i * 0.08}>
                  <ProjectCard project={o} />
                </Reveal>
              ))}
            </div>
          </section>
        )}

        <section className="mt-24 bg-navy text-navy-foreground md:mt-36">
          <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
            <h2 className="max-w-3xl text-[clamp(2rem,4.4vw,3.6rem)] font-extrabold uppercase leading-[1] tracking-[-0.035em]">
              Planning a home in Tambaram or South Chennai?
            </h2>
            <Link
              to="/contact"
              className="group mt-10 inline-flex items-center gap-3 rounded-full bg-background px-7 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-foreground transition-colors hover:bg-gold"
            >
              Start a conversation
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1.5" />
            </Link>
          </div>
        </section>
      </article>

      {lightbox !== null && p.gallery[lightbox] && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/95 p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            aria-label="Close image"
            onClick={() => setLightbox(null)}
            className="absolute right-5 top-5 text-ink-foreground"
          >
            <X size={26} />
          </button>
          <img
            src={p.gallery[lightbox].src}
            alt={p.gallery[lightbox].alt}
            className="max-h-[88svh] w-auto max-w-full object-contain"
          />
        </div>
      )}
    </PageShell>
  );
}
