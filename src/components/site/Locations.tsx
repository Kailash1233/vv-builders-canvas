import { Link } from "@tanstack/react-router";
import { Reveal, Eyebrow } from "./Reveal";
import { serviceAreas } from "@/data/site";

export function Locations() {
  return (
    <section className="mx-auto mt-24 max-w-[1400px] px-5 md:mt-36 md:px-10">
      <div className="grid grid-cols-1 gap-10 border-y border-foreground/12 py-14 md:grid-cols-[1fr_1.2fr] md:gap-16 md:py-20">
        <div>
          <Reveal>
            <Eyebrow>Where we build</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 text-[clamp(1.9rem,3.6vw,3rem)] font-extrabold uppercase leading-[1.02] tracking-[-0.03em]">
              Tambaram and the
              <br />
              South Chennai corridor
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-md text-base leading-[1.65] text-foreground/70">
              Our office and yard are in Padappai, which keeps site visits short across the Tambaram
              belt. That matters more than it sounds — regular supervision is what keeps a
              residential build on track.
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.15}>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3">
            {serviceAreas.map((a) => (
              <li key={a} className="border-b border-foreground/10 pb-3 text-sm text-foreground/75">
                {a}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-foreground/60">
            Building somewhere else in South Chennai?{" "}
            <Link to="/contact" className="text-navy underline-offset-4 hover:underline">
              Ask us
            </Link>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
