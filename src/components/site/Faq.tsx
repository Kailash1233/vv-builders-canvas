import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { Reveal, Eyebrow } from "./Reveal";

const faqs = [
  {
    q: "Can you work with my existing plans or architect?",
    a: "Yes. Around half our projects arrive with drawings already in place. We review them, flag anything that will cause trouble on site, and price transparently against the same scope.",
  },
  {
    q: "How much does a renovation project cost?",
    a: "Kitchens typically start around £25k, loft conversions £45k and rear extensions £70k, depending on structure and specification. After a site visit you get a line-by-line quote with no provisional guesswork.",
  },
  {
    q: "Do you manage all trades and suppliers?",
    a: "We do. Electricians, plumbers, plasterers, joiners and suppliers are all coordinated by your project lead, so you have one number to call for the whole build.",
  },
  {
    q: "What areas do you cover?",
    a: "North and West London plus surrounding Hertfordshire and Middlesex. We keep our radius tight so our teams are on site early and stay to the end of the day.",
  },
  {
    q: "How long will my home be a building site?",
    a: "A bathroom takes two to three weeks, a kitchen four to six, a loft eight to ten and an extension twelve to sixteen. You get a dated programme before we start and weekly progress updates.",
  },
  {
    q: "Is your work guaranteed?",
    a: "Every project carries a two-year workmanship guarantee alongside manufacturer warranties, and we handle building control certification as part of the job.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="mx-auto mt-24 max-w-[900px] px-5 md:mt-36 md:px-10">
      <Reveal className="text-center">
        <Eyebrow>FAQ</Eyebrow>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-5 text-center text-[clamp(2rem,4vw,3.25rem)] font-extrabold uppercase leading-[1] tracking-[-0.03em]">
          Making your renovation journey simple
        </h2>
      </Reveal>

      <div className="mt-12 border-t border-foreground/12">
        {faqs.map((f, i) => (
          <Reveal key={f.q} delay={i * 0.05}>
            <div className="border-b border-foreground/12">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
                aria-expanded={open === i}
              >
                <span className="text-base font-semibold md:text-lg">{f.q}</span>
                <motion.span
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="shrink-0 text-accent"
                >
                  <ChevronDown size={20} />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="max-w-2xl pb-6 text-sm leading-[1.6] text-foreground/65">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
