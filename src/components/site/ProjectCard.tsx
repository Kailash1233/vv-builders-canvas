import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectCard({ project, priority = false }: { project: Project; priority?: boolean }) {
  return (
    <Link
      to="/projects/$slug"
      params={{ slug: project.slug }}
      className="group block"
      aria-label={`View project: ${project.title}`}
    >
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.imageAlt}
          width={1600}
          height={1104}
          loading={priority ? "eager" : "lazy"}
          className="aspect-[4/3] w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
        />
      </div>
      <div className="mt-6 flex items-start justify-between gap-6">
        <div className="min-w-0">
          <div className="text-[0.7rem] uppercase tracking-[0.2em] text-navy">
            {project.category}
            {project.year ? ` · ${project.year}` : ""}
          </div>
          <h3 className="mt-3 text-[clamp(1.4rem,2.4vw,2.1rem)] font-extrabold leading-[1.05] tracking-[-0.02em]">
            {project.title}
          </h3>
          <p className="mt-2 text-sm text-foreground/55">{project.location}</p>
          <p className="mt-4 max-w-lg text-sm leading-[1.65] text-foreground/70">
            {project.description}
          </p>
        </div>
        <span className="mt-1 grid h-11 w-11 shrink-0 place-items-center rounded-full border border-foreground/15 transition-colors group-hover:border-navy group-hover:bg-navy group-hover:text-navy-foreground">
          <ArrowUpRight size={18} />
        </span>
      </div>
    </Link>
  );
}
