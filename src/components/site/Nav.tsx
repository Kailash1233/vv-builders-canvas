import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { X, Menu } from "lucide-react";
import { navLinks } from "@/data/site";
import { Logo } from "./Logo";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  const overlay = isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          overlay ? "bg-transparent" : "border-b border-foreground/10 bg-background/85 backdrop-blur-md"
        }`}
      >
        <nav className="mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-5 py-3 md:px-10 md:py-4">
          <Logo className="h-8 md:h-10" />

          <div className="hidden items-center gap-1 rounded-full border border-foreground/10 bg-card/70 p-1 backdrop-blur-sm md:flex">
            {navLinks.slice(0, 3).map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeProps={{ className: "bg-foreground/5 text-foreground" }}
                className="rounded-full px-4 py-2 text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-1 rounded-full bg-navy px-5 py-2 text-sm font-semibold text-navy-foreground transition-colors hover:bg-foreground"
            >
              Contact
            </Link>
          </div>

          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-foreground md:hidden"
          >
            <Menu size={18} /> Menu
          </button>
        </nav>
      </header>

      {open && (
        <div className="fixed inset-0 z-[60] flex animate-fade-in flex-col bg-background px-5 py-4 md:hidden">
          <div className="flex items-center justify-between">
            <Logo className="h-8" />
            <button type="button" aria-label="Close menu" onClick={() => setOpen(false)}>
              <X size={24} />
            </button>
          </div>
          <div className="mt-14 flex flex-col gap-6">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-4xl font-extrabold uppercase tracking-[-0.03em]"
              >
                {l.label}
              </Link>
            ))}
          </div>
          <p className="mt-auto text-xs uppercase tracking-[0.2em] text-foreground/50">
            Padappai, Tambaram · Chennai
          </p>
        </div>
      )}
    </>
  );
}
