import { useEffect, useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-foreground/10 bg-background/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="grid grid-cols-1 items-center px-5 py-5 md:grid-cols-[45fr_55fr] md:px-0">
        <div className="flex items-center justify-end gap-8 md:px-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hidden text-sm text-foreground/70 transition-colors hover:text-accent md:inline"
            >
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex justify-end md:px-10">
          <a
            href="#contact"
            className={`text-sm font-semibold uppercase tracking-[0.14em] transition-colors hover:text-accent ${
              scrolled ? "text-foreground" : "text-white md:text-white"
            }`}
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
