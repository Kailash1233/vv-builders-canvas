export function Footer() {
  return (
    <footer className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-20">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_auto] md:gap-20">
        <p className="max-w-sm text-sm leading-[1.6] text-foreground/65">
          VV Builders is a construction and renovation studio building calm, well-detailed homes
          across North and West London.
        </p>
        <div className="flex gap-16">
          <div>
            <div className="text-[0.7rem] uppercase tracking-[0.2em] text-foreground/45">Nav</div>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-accent">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-accent">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-[0.7rem] uppercase tracking-[0.2em] text-foreground/45">
              Socials
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-accent">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent">
                  X / Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-16 flex items-start justify-between gap-2">
        <span className="text-[clamp(2.4rem,13vw,11rem)] font-extrabold leading-[0.85] tracking-[-0.05em] whitespace-nowrap">
          VV Builders
        </span>
        <span className="pt-2 text-xs text-foreground/50 md:text-base">®</span>
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-foreground/12 pt-6 text-xs text-foreground/50">
        <span>© 2026 VV Builders</span>
        <span>Built with care in London</span>
      </div>
    </footer>
  );
}
