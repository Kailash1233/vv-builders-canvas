import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown } from "lucide-react";
import { Link } from "@tanstack/react-router";
import heroImg from "@/assets/vv-hero.jpg";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section ref={ref} id="top" className="sticky top-0 z-0">
      <div className="grid grid-cols-1 md:min-h-[100svh] md:grid-cols-[45fr_55fr]">
        <div className="flex flex-col justify-between gap-6 bg-background px-5 pb-6 pt-20 md:min-h-[100svh] md:gap-8 md:px-10 md:pb-8 md:pt-[clamp(5.5rem,10vh,9rem)]">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease }}
            className="text-[clamp(2.6rem,min(6.4vw,9.2svh),6.5rem)] font-black uppercase leading-[0.88] tracking-[-0.045em]"
          >
            Built
            <br />
            to last,
            <br />
            designed
            <br />
            to belong
          </motion.h1>

          <div className="flex flex-col gap-4 md:gap-[clamp(1rem,3vh,2.5rem)]">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease }}
              className="max-w-md text-[clamp(0.95rem,1.05vw,1.1rem)] leading-[1.55] text-foreground/70"
            >
              V.V Builders is a builders and construction company in Padappai, Tambaram — building
              independent houses, villas and home extensions across South Chennai, planned around
              the way families here actually live.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="flex flex-wrap items-center gap-x-6 gap-y-3"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-navy-foreground transition-colors hover:bg-foreground"
              >
                Start your home project
              </Link>
              <a
                href="#intro"
                aria-label="Scroll to the next section"
                className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-foreground/60 transition-colors hover:text-navy"
              >
                <ArrowDown size={18} strokeWidth={1.5} />
                Scroll
              </a>
            </motion.div>
          </div>
        </div>

        <motion.div
          style={{ scale, opacity }}
          className="relative aspect-[4/3] origin-top md:aspect-auto md:min-h-[100svh]"
        >
          <motion.img
            src={heroImg}
            alt="Naturally lit living room of a contemporary Chennai home with teak furniture and a jaali screen"
            width={1200}
            height={1504}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease }}
            className="h-full w-full object-cover md:absolute md:inset-0"
          />
        </motion.div>
      </div>
    </section>
  );
}
