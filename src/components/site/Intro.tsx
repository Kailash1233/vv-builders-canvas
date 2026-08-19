import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal, Eyebrow } from "./Reveal";
import aboutImg from "@/assets/vv-courtyard.jpg";

export function Intro() {
  return (
    <section id="intro" className="relative z-10 -mt-px bg-background px-5 pt-24 md:px-10 md:pt-32">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <Reveal>
              <Eyebrow>About V.V Builders</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 text-[clamp(2rem,4vw,3.5rem)] font-extrabold uppercase leading-[0.98] tracking-[-0.03em]">
                Homes built for
                <br />
                Chennai, not for
                <br />
                a brochure
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-xl text-base leading-[1.65] text-foreground/70">
                We are a builders and construction company based in Padappai, Tambaram, working on
                residential construction and renovation across South Chennai. Every plan starts with
                the site — orientation, shade, water and how a family moves through the day — before
                a single line is drawn.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="mt-4 max-w-xl text-base leading-[1.65] text-foreground/70">
                Heat, monsoon rain and humidity decide what lasts here. So do the everyday details:
                a shaded sit-out, a service court that stays dry, ventilation that works without a
                switch. That is where our attention goes.
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <Link
                to="/about"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-navy"
              >
                More about us
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <img
              src={aboutImg}
              alt="Internal courtyard of a Chennai home with brick jaali wall and natural light"
              width={1408}
              height={1600}
              loading="lazy"
              className="h-[420px] w-full object-cover md:h-[620px]"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
