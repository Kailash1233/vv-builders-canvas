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

      <section className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="flex flex-col gap-24 md:gap-40">
          {projects.map((p, i) => {
            const flip = i % 2 === 1;
            return (
              <Reveal key={p.slug}>
                <div
                  className={`grid grid-cols-1 items-start gap-y-2 md:grid-cols-12 ${
                    flip ? "" : ""
                  }`}
                >
                  <div
                    className={
                      flip
                        ? "md:col-span-7 md:col-start-6"
                        : "md:col-span-8 md:col-start-1"
                    }
                  >
                    <ProjectCard
                      project={p}
                      index={i}
                      priority={i === 0}
                      ratio={flip ? "4/3" : "4/3"}
                    />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <FinalCTA title="Planning a home in Tambaram or South Chennai?" />
    </PageShell>
  );
}
