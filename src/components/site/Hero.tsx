import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown } from "lucide-react";
import heroImg from "@/assets/hero-kitchen.jpg";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.88]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section ref={ref} id="top" className="relative">
      <div className="grid min-h-screen grid-cols-1 md:grid-cols-[45fr_55fr]">
        <div className="flex min-h-screen flex-col justify-between bg-background px-5 py-8 md:px-10 md:py-10">
          <a href="#top" className="text-lg font-extrabold tracking-tight text-foreground">
            VV Builders
          </a>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 text-[clamp(3rem,6.5vw,6.5rem)] font-extrabold uppercase leading-[0.92] tracking-[-0.04em]"
          >
            Built
            <br />
            to last,
            <br />
            designed to
            <br />
            impress
          </motion.h1>

          <div>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-md text-base leading-[1.6] text-foreground/70"
            >
              VV Builders is a family-run construction and renovation studio crafting kitchens,
              lofts and extensions with the precision of a workshop and the calm of a well-run site.
            </motion.p>
            <motion.a
              href="#about"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-10 inline-flex w-fit items-center gap-3 text-xs uppercase tracking-[0.2em] text-foreground/60 transition-colors hover:text-accent"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-foreground/25">
                <ArrowDown size={16} />
              </span>
              Scroll
            </motion.a>
          </div>
        </div>

        <motion.div
          style={{ scale, opacity }}
          className="relative min-h-[60vh] origin-top md:min-h-screen"
        >
          <img
            src={heroImg}
            alt="Renovated open-plan kitchen with oak cabinetry and garden doors"
            width={1200}
            height={1600}
            className="h-full w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
