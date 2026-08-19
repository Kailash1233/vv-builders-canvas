import { Link } from "@tanstack/react-router";
import { navLinks, serviceAreas, business } from "@/data/site";
import { projects } from "@/data/projects";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-20">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.2fr_auto_auto] md:gap-16">
        <div>
          <Logo className="h-10" />
          <p className="mt-6 max-w-sm text-sm leading-[1.6] text-foreground/65">
            V.V Builders is a builders and construction company based in {business.addressLine},
            working on residential construction, villas, renovation and home extensions across
            South Chennai.
          </p>
        </div>

        <div>
          <div className="text-[0.7rem] uppercase tracking-[0.2em] text-foreground/45">Pages</div>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-navy">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-[0.7rem] uppercase tracking-[0.2em] text-foreground/45">Projects</div>
          <ul className="mt-4 space-y-2 text-sm">
            {projects.slice(0, 4).map((p) => (
              <li key={p.slug}>
                <Link
                  to="/projects/$slug"
                  params={{ slug: p.slug }}
                  className="hover:text-navy"
                >
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="mt-14 max-w-3xl text-xs leading-[1.8] text-foreground/45">
        Serving {serviceAreas.join(" · ")} and surrounding South Chennai areas.
      </p>

      <div className="mt-12 flex items-start justify-between gap-2">
        <span className="text-[clamp(2.4rem,12vw,10rem)] font-extrabold leading-[0.85] tracking-[-0.05em] whitespace-nowrap">
          V.V Builders
        </span>
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-foreground/12 pt-6 text-xs text-foreground/50">
        <span>© {new Date().getFullYear()} V.V Builders · Padappai, Tambaram, Chennai</span>
        <span>
          Built with ♥ by{" "}
          <a
            href="https://adszoo.in"
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-4 hover:text-navy hover:underline"
          >
            Adszoo
          </a>
        </span>
      </div>
    </footer>
  );
}
