import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Reveal, Eyebrow } from "./Reveal";
import kitchen from "@/assets/wide-kitchen.jpg";
import bathroom from "@/assets/bathroom.jpg";
import loft from "@/assets/loft.jpg";
import extension from "@/assets/extension.jpg";

const tabs = [
  {
    id: "kitchens",
    label: "Kitchens",
    image: kitchen,
    alt: "Deep green kitchen with marble worktops",
    body: "We plan kitchens around how you actually cook and gather — then build them to last decades. Cabinetry, stone, services and lighting are coordinated before the first wall comes down.",
    bullets: [
      "Bespoke and made-to-measure cabinetry",
      "Structural openings and steel work",
      "Stone, quartz and solid timber worktops",
      "Full electrics, plumbing and ventilation",
    ],
  },
  {
    id: "bathrooms",
    label: "Bathrooms",
    image: bathroom,
    alt: "Minimal bathroom with freestanding tub",
    body: "Calm, tanked and beautifully detailed. Our bathroom fit-outs are sequenced tightly so a family space is out of action for weeks, not months.",
    bullets: [
      "Wet rooms and fully tanked showers",
      "Large-format tiling and microcement",
      "Underfloor heating and towel circuits",
      "Concealed cistern and brassware detailing",
    ],
  },
  {
    id: "lofts",
    label: "Loft Conversions",
    image: loft,
    alt: "Loft bedroom under sloped ceiling with skylights",
    body: "An extra bedroom, studio or suite without moving house. We handle structure, insulation, escape routes and building control from survey to sign-off.",
    bullets: [
      "Dormer, hip-to-gable and rooflight schemes",
      "Steel and joist structural design",
      "Staircase design and joinery",
      "Fire, insulation and regs compliance",
    ],
  },
  {
    id: "extensions",
    label: "Extensions",
    image: extension,
    alt: "Rear glass extension with dining area",
    body: "Ground-floor and wrap-around extensions that connect the house to the garden. We build to programme with weekly updates and a clean, protected site.",
    bullets: [
      "Foundations, groundworks and drainage",
      "Sliding, bifold and structural glazing",
      "Roof lanterns and flat roof systems",
      "Full interior finishing and decoration",
    ],
  },
];

export function Services() {
  const [active, setActive] = useState(tabs[0]!.id);
  const current = tabs.find((t) => t.id === active)!;

  return (
    <section id="services" className="mx-auto mt-24 max-w-[1400px] px-5 md:mt-36 md:px-10">
      <Reveal className="text-center">
        <Eyebrow>Services</Eyebrow>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mx-auto mt-5 max-w-3xl text-center text-[clamp(2rem,4vw,3.5rem)] font-extrabold uppercase leading-[1] tracking-[-0.03em]">
          Quality building work, shaped around your home
        </h2>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="mt-10 flex gap-3 overflow-x-auto pb-2 md:justify-center md:overflow-visible md:pb-0">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`shrink-0 rounded-full border px-5 py-2.5 text-sm transition-colors ${
                active === t.id
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-foreground/15 bg-card text-foreground/70 hover:border-foreground/40"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="mt-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16"
          >
            <div>
              <p className="max-w-xl text-base leading-[1.6] text-foreground/70">{current.body}</p>
              <ul className="mt-8 space-y-4">
                {current.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-foreground/85">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground">
                      <ArrowUpRight size={13} />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <img
              src={current.image}
              alt={current.alt}
              loading="lazy"
              className="h-[300px] w-full object-cover md:h-[460px]"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
