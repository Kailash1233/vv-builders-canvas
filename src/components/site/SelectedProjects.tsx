import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal, Eyebrow } from "./Reveal";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function SelectedProjects() {
  return (
    <section id="projects" className="mx-auto mt-24 max-w-[1400px] px-5 md:mt-36 md:px-10">
      <Reveal>
        <Eyebrow>Selected projects</Eyebrow>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-5 max-w-3xl text-[clamp(2rem,4vw,3.5rem)] font-extrabold uppercase leading-[1] tracking-[-0.03em]">
          Houses we have built across South Chennai
        </h2>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-x-10 md:gap-y-24">
        {projects.slice(0, 2).map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.08}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <Link
          to="/projects"
          className="group mt-14 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-navy"
        >
          View all projects
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </Reveal>
    </section>
  );
}
