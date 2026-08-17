import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown } from "lucide-react";
import heroImg from "@/assets/hero-living.jpg";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section ref={ref} id="top" className="sticky top-0 z-0">
      <div className="grid grid-cols-1 md:min-h-[100dvh] md:grid-cols-[45fr_55fr]">
        <div className="flex flex-col bg-background px-5 pt-6 pb-4 md:min-h-[100dvh] md:justify-between md:px-10 md:py-10">
          <a href="#top" className="text-lg font-extrabold tracking-tight text-foreground">
            VV Builders
          </a>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease }}
            className="mt-6 text-[clamp(3rem,7.6vw,7.5rem)] font-black uppercase leading-[0.86] tracking-[-0.045em] md:mt-4"
          >
            Built
            <br />
            to last,
            <br />
            designed to
            <br />
            impress
          </motion.h1>

          <div className="md:mt-0">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.32, ease }}
              className="mt-4 max-w-md text-base leading-[1.55] text-foreground/70 md:mt-10"
            >
              VV Builders is a family-run construction and renovation studio crafting kitchens,
              lofts and extensions with the precision of a workshop and the calm of a well-run site.
            </motion.p>
            <motion.a
              href="#about"
              aria-label="Scroll to next section"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-4 inline-flex w-fit items-center gap-3 text-xs uppercase tracking-[0.2em] text-foreground/60 transition-colors hover:text-accent md:mt-10"
            >
              <ArrowDown size={20} strokeWidth={1.5} />
              <span className="hidden md:inline">Scroll</span>
            </motion.a>
          </div>
        </div>

        <motion.div
          style={{ scale, opacity }}
          className="relative aspect-[4/3] origin-top md:aspect-auto md:min-h-[100dvh]"
        >
          <motion.img
            src={heroImg}
            alt="Warm, furnished open-plan living room after a full renovation"
            width={1200}
            height={1600}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease }}
            className="h-full w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-x-0 top-0 hidden h-[120px] bg-gradient-to-b from-black/45 to-transparent md:block" />
        </motion.div>
      </div>
    </section>
  );
}
