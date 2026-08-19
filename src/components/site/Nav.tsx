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
            ? "border-b border-foreground/10 bg-background/85 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <nav className="flex items-center justify-between px-5 py-5 md:px-10 md:py-8">
          <a
            href="#top"
            className={`text-lg font-extrabold tracking-tight text-foreground transition-opacity duration-300 ${
              scrolled ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            VV Builders
          </a>


          <div
            className={`hidden items-center gap-1 rounded-full p-1 transition-all duration-300 md:flex ${
              scrolled ? "bg-transparent" : "bg-black/25 backdrop-blur-sm"
            }`}
          >
            {links.slice(0, 3).map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  scrolled
                    ? "text-foreground/70 hover:bg-foreground/5 hover:text-foreground"
                    : "text-white/85 hover:bg-white/15 hover:text-white"
                }`}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className={`ml-1 rounded-full px-5 py-2 text-sm font-semibold tracking-[0.06em] transition-colors ${
                scrolled
                  ? "bg-foreground text-background hover:bg-accent"
                  : "bg-background text-foreground hover:bg-accent hover:text-accent-foreground"
              }`}
            >
              Contact
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="text-sm font-semibold uppercase tracking-[0.14em] text-foreground md:hidden"
          >
            Menu
          </button>
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
