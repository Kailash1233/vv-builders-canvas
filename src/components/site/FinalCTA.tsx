import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function FinalCTA({
  title = "Building in Tambaram? Let's talk.",
  body = "Tell us about the plot, the house you have in mind and roughly when you want to start. We will come back with a practical view of what the project involves.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="mt-24 bg-navy text-navy-foreground md:mt-36">
      <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
        <Reveal>
          <h2 className="max-w-4xl text-[clamp(2rem,4.6vw,4rem)] font-extrabold uppercase leading-[1] tracking-[-0.035em]">
            {title}
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-7 max-w-xl text-base leading-[1.65] text-navy-foreground/75">{body}</p>
        </Reveal>
        <Reveal delay={0.25}>
          <Link
            to="/contact"
            className="group mt-10 inline-flex items-center gap-3 rounded-full bg-background px-7 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-foreground transition-colors hover:bg-gold hover:text-foreground"
          >
            Start a conversation
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
