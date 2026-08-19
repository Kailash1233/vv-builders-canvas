import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { ProjectCard } from "@/components/site/ProjectCard";
import { FinalCTA } from "@/components/site/FinalCTA";
import { projects } from "@/data/projects";
import { SITE_URL } from "@/data/site";

const title = "Projects | House & Villa Construction in Tambaram | V.V Builders";
const description =
  "Residential construction projects by V.V Builders across Tambaram, Padappai, Selaiyur and Mudichur — independent houses, villas, renovation and home extensions in South Chennai.";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/projects` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/projects` }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Our work"
        crumb="Projects"
        title="Residential projects across South Chennai"
        intro="Independent houses, villas, renovations and extensions built in and around Tambaram. Each project page sets out the brief, the site constraints and how the work was executed."
      />

      <section className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-x-10 md:gap-y-24">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 0.08}>
              <ProjectCard project={p} priority={i === 0} />
            </Reveal>
          ))}
        </div>
      </section>

      <FinalCTA title="Planning a home in Tambaram or South Chennai?" />
    </PageShell>
  );
}
