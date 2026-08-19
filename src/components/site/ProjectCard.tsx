import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectCard({
  project,
  priority = false,
  index,
  ratio = "4/3",
}: {
  project: Project;
  priority?: boolean;
  index?: number;
  ratio?: "4/3" | "3/4" | "1/1";
}) {
  const aspect =
    ratio === "3/4" ? "aspect-[3/4]" : ratio === "1/1" ? "aspect-square" : "aspect-[4/3]";

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
          className={`${aspect} w-full object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035]`}
        />
      </div>

      <div className="mt-7 flex items-baseline gap-5 border-t border-foreground/12 pt-6">
        {typeof index === "number" && (
          <span className="text-[0.7rem] tabular-nums tracking-[0.2em] text-foreground/35">
            {String(index + 1).padStart(2, "0")}
          </span>
        )}
        <div className="min-w-0 flex-1">
          <h3 className="text-[clamp(1.5rem,2.6vw,2.3rem)] font-extrabold uppercase leading-[1.02] tracking-[-0.03em]">
            {project.title}
          </h3>
          <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.7rem] uppercase tracking-[0.2em] text-foreground/50">
            <span>{project.location}</span>
            <span aria-hidden className="h-px w-4 bg-foreground/25" />
            <span className="text-navy">{project.category}</span>
          </div>
          <p className="mt-5 max-w-lg text-sm leading-[1.7] text-foreground/70">
            {project.description}
          </p>
          <span className="mt-6 inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-foreground">
            View project
            <ArrowRight
              size={14}
              className="transition-transform duration-500 group-hover:translate-x-1.5"
            />
          </span>
        </div>
      </div>
    </Link>
  );
}
