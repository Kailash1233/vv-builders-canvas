import { Link } from "@tanstack/react-router";
import { Reveal, Eyebrow } from "./Reveal";

export function PageHero({
  eyebrow,
  title,
  intro,
  crumb,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  crumb: string;
}) {
  return (
    <section className="mx-auto max-w-[1400px] px-5 pb-10 pt-28 md:px-10 md:pb-16 md:pt-40">
      <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-[0.18em] text-foreground/45">
        <Link to="/" className="hover:text-navy">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground/70">{crumb}</span>
      </nav>
      <Reveal className="mt-8">
        <Eyebrow>{eyebrow}</Eyebrow>
      </Reveal>
      <Reveal delay={0.1}>
        <h1 className="mt-5 max-w-4xl text-[clamp(2.2rem,5.2vw,4.5rem)] font-black uppercase leading-[0.92] tracking-[-0.04em]">
          {title}
        </h1>
      </Reveal>
      <Reveal delay={0.2}>
        <p className="mt-7 max-w-2xl text-base leading-[1.65] text-foreground/70 md:text-lg">
          {intro}
        </p>
      </Reveal>
    </section>
  );
}
