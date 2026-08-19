import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { Reveal, Eyebrow } from "./Reveal";

const faqs = [
  {
    q: "Can you work with my existing plans or architect?",
    a: "Yes. If drawings are already in place we review them, flag anything that will be difficult to execute on site, and price against the same scope so comparisons stay honest.",
  },
  {
    q: "How is the cost of a project worked out?",
    a: "After a site visit we look at the plot, the structure, the specification and the scope of finishes, then share a stage-wise breakdown rather than a single lump-sum figure.",
  },
  {
    q: "Do you handle all the trades and material coordination?",
    a: "We do. Civil work, steel, plumbing, electrical, carpentry, painting and material supply are coordinated by us, so there is one point of contact for the whole build.",
  },
  {
    q: "Which areas do you work in?",
    a: "Tambaram and the surrounding South Chennai corridor — Padappai, Mudichur, Mannivakkam, Manimangalam, Perungalathur, Vandalur, Urapakkam, Guduvanchery, Selaiyur, Chromepet and Pallavaram.",
  },
  {
    q: "How do you plan for Chennai's climate?",
    a: "Orientation, shading, cross ventilation, roof treatment, waterproofing and rainwater management are decided early, because those are the details that keep a house comfortable and dry for years.",
  },
  {
    q: "How will I know what is happening on site?",
    a: "You get regular progress updates, decisions recorded in writing and a straight answer whenever something on site needs to change.",
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
          Questions we hear before a build starts
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
