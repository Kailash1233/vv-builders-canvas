import { useEffect, useState } from "react";
import { X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-foreground/10 bg-background/80 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <nav className="grid grid-cols-1 items-center px-5 py-5 md:grid-cols-[45fr_55fr] md:px-0">
          <div className="hidden items-center justify-end gap-8 md:flex md:px-10">
            {links.slice(0, 3).map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  scrolled ? "text-foreground/70" : "text-white [text-shadow:0_1px_6px_rgba(0,0,0,0.45)]"
                }`}
              >
                {l.label}
              </a>
            ))}
          </div>
          <div className="flex justify-end md:px-10">
            <a
              href="#contact"
              className={`hidden text-sm font-semibold uppercase tracking-[0.14em] transition-colors hover:text-accent md:inline ${
                scrolled ? "text-foreground" : "text-white [text-shadow:0_1px_6px_rgba(0,0,0,0.45)]"
              }`}
            >
              Contact
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="text-sm font-semibold uppercase tracking-[0.14em] text-foreground md:hidden"
            >
              Menu
            </button>
          </div>
        </nav>
      </header>

      {open && (
        <div className="fixed inset-0 z-[60] flex animate-fade-in flex-col bg-background px-5 py-5 md:hidden">
          <div className="flex items-center justify-between">
            <span className="text-lg font-extrabold tracking-tight">VV Builders</span>
            <button type="button" aria-label="Close menu" onClick={() => setOpen(false)}>
              <X size={24} />
            </button>
          </div>
          <div className="mt-16 flex flex-col gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-4xl font-extrabold uppercase tracking-[-0.03em]"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
