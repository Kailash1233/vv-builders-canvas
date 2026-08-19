import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal, Eyebrow } from "./Reveal";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function SelectedProjects() {
  const [first, second] = projects;

  return (
    <section id="projects" className="mx-auto mt-24 max-w-[1500px] px-5 md:mt-36 md:px-10">
      <Reveal>
        <Eyebrow>Selected projects</Eyebrow>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-5 max-w-3xl text-[clamp(2rem,4vw,3.5rem)] font-extrabold uppercase leading-[1] tracking-[-0.03em]">
          Houses we have built across South Chennai
        </h2>
      </Reveal>

      <div className="mt-16 grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-x-10 md:gap-y-28">
        {first && (
          <Reveal className="md:col-span-7">
            <ProjectCard project={first} index={0} priority />
          </Reveal>
        )}
        {second && (
          <Reveal className="md:col-span-5 md:col-start-8 md:mt-28" delay={0.08}>
            <ProjectCard project={second} index={1} ratio="3/4" />
          </Reveal>
        )}
      </div>

      <Reveal delay={0.1}>
        <Link
          to="/projects"
          className="group mt-16 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-navy"
        >
          View all projects
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </Reveal>
    </section>
  );
}
