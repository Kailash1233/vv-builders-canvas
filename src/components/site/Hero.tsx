import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import heroImg from "@/assets/hero-kitchen.jpg";

export function Hero() {
  return (
    <section id="top" className="pt-16">
      <div className="grid min-h-[88vh] grid-cols-1 md:grid-cols-[45fr_55fr]">
        <div className="flex flex-col justify-between px-5 py-14 md:px-10 md:py-20">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(3rem,7vw,7rem)] font-extrabold uppercase leading-[0.92] tracking-[-0.04em]"
            >
              Built to last,
              <br />
              designed
              <br />
              to impress
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 max-w-md text-base leading-[1.6] text-foreground/70"
            >
              VV Builders is a family-run construction and renovation studio crafting kitchens,
              lofts and extensions with the precision of a workshop and the calm of a well-run site.
            </motion.p>
          </div>
          <motion.a
            href="#about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-14 inline-flex w-fit items-center gap-3 text-xs uppercase tracking-[0.2em] text-foreground/60 transition-colors hover:text-accent"
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-foreground/25">
              <ArrowDown size={16} />
            </span>
            Scroll
          </motion.a>
        </div>
        <div className="relative min-h-[55vh] md:min-h-full">
          <img
            src={heroImg}
            alt="Renovated open-plan kitchen with oak cabinetry and garden doors"
            width={1200}
            height={1600}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
