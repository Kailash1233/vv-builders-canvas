import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import inlineImg from "@/assets/vv-kitchen.jpg";
import ctaImg from "@/assets/vv-verandah.jpg";

export function Statement() {
  return (
    <>
      <section className="mx-auto mt-24 max-w-[1100px] px-5 md:mt-36 md:px-10">
        <Reveal>
          <p className="text-[clamp(1.6rem,3.6vw,3.25rem)] font-extrabold uppercase leading-[1.1] tracking-[-0.03em]">
            A home in Chennai has to handle heat, rain and daily family life. We build for
            <img
              src={inlineImg}
              alt="Detail of a warm timber and stone kitchen in a Chennai home"
              loading="lazy"
              className="mx-3 inline-block h-[0.85em] w-[2.4em] translate-y-[0.05em] rounded-full object-cover align-middle"
            />
            comfort, durability and long-term value.
          </p>
        </Reveal>
      </section>

      <section className="relative mt-16 md:mt-24">
        <img
          src={ctaImg}
          alt="Shaded verandah of a contemporary independent house in South Chennai"
          loading="lazy"
          className="h-[380px] w-full object-cover md:h-[560px]"
        />
        <div className="absolute inset-0 grid place-items-center bg-foreground/25">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 rounded-full bg-background px-7 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-foreground transition-colors hover:bg-gold"
          >
            Start your home project
            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1.5"
            />
          </Link>
        </div>
      </section>
    </>
  );
}
