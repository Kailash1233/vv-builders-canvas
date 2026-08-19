import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Reveal, Eyebrow } from "./Reveal";
import c1 from "@/assets/client-1.jpg";
import c2 from "@/assets/client-2.jpg";
import c3 from "@/assets/client-3.jpg";

const items = [
  {
    quote:
      "They explained the structure and the sequence before talking about finishes. The house was handed over the way it was planned, and the detailing on site was careful throughout.",
    name: "Client name",
    role: "Independent house, Tambaram",
    photo: c1,
  },
  {
    quote:
      "Clear updates every week, one point of contact, and honest answers whenever something on site needed a decision. That made the whole build far less stressful.",
    name: "Client name",
    role: "Villa project, Padappai",
    photo: c2,
  },
  {
    quote:
      "The team worked alongside our architect without friction. Ventilation, light and water management were thought through properly for Chennai weather.",
    name: "Client name",
    role: "Home extension, Mudichur",
    photo: c3,
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const item = items[i]!;
  const go = (d: number) => setI((p) => (p + d + items.length) % items.length);

  return (
    <section className="mx-auto mt-24 max-w-[1400px] px-5 md:mt-36 md:px-10">
      <Reveal className="text-center">
        <Eyebrow>Testimonials</Eyebrow>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mx-auto mt-5 max-w-3xl text-center text-[clamp(1.8rem,3.4vw,3rem)] font-extrabold uppercase leading-[1.05] tracking-[-0.03em]">
          What it is like to build a home with us
        </h2>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 items-center gap-10 md:grid-cols-[minmax(0,380px)_minmax(0,1fr)] md:gap-16">
        <AnimatePresence mode="wait">
          <motion.img
            key={item.photo}
            src={item.photo}
            alt="V.V Builders client portrait"
            loading="lazy"
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45 }}
            className="aspect-square w-full object-cover"
          />
        </AnimatePresence>

        <div>
          <AnimatePresence mode="wait">
            <motion.div key={item.role}>
              <p className="text-[clamp(1.25rem,2.2vw,2rem)] font-medium leading-[1.35] tracking-[-0.01em]">
                {item.quote.split(" ").map((w, idx) => (
                  <motion.span
                    key={w + idx}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: idx * 0.018 }}
                    className="inline-block"
                  >
                    {w}&nbsp;
                  </motion.span>
                ))}
              </p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="mt-8"
              >
                <div className="text-sm font-semibold">{item.name}</div>
                <div className="text-xs text-foreground/55">{item.role}</div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 flex gap-3">
            <button
              aria-label="Previous testimonial"
              onClick={() => go(-1)}
              className="grid h-11 w-11 place-items-center rounded-full border border-foreground/25 transition-colors hover:bg-foreground hover:text-background"
            >
              <ArrowLeft size={17} />
            </button>
            <button
              aria-label="Next testimonial"
              onClick={() => go(1)}
              className="grid h-11 w-11 place-items-center rounded-full border border-foreground/25 transition-colors hover:bg-foreground hover:text-background"
            >
              <ArrowRight size={17} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
