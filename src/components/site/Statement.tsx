import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import inlineImg from "@/assets/inline-detail.jpg";
import ctaImg from "@/assets/cta-banner.jpg";

export function Statement() {
  return (
    <>
      <section className="mx-auto mt-24 max-w-[1100px] px-5 md:mt-36 md:px-10">
        <Reveal>
          <p className="text-[clamp(1.6rem,3.6vw,3.25rem)] font-extrabold uppercase leading-[1.1] tracking-[-0.03em]">
            Your dream home starts with a conversation. Let&apos;s create a space that combines
            <img
              src={inlineImg}
              alt="Close detail of a stone kitchen worktop"
              loading="lazy"
              className="mx-3 inline-block h-[0.85em] w-[2.4em] translate-y-[0.05em] rounded-full object-cover align-middle"
            />
            function, style, and lasting quality.
          </p>
        </Reveal>
      </section>

      <section className="relative mt-16 md:mt-24">
        <img
          src={ctaImg}
          alt="Renovated open-plan living and kitchen space at golden hour"
          loading="lazy"
          className="h-[380px] w-full object-cover md:h-[560px]"
        />
        <div className="absolute inset-0 grid place-items-center bg-foreground/20">
          <a href="#contact" className="btn-accent group">
            Get Started
            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1.5"
            />
          </a>
        </div>
      </section>
    </>
  );
}
