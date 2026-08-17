import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
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
    <section
      id="services"
      className="mt-24 md:mt-36 md:bg-[#F5F1EA] md:py-20 md:[font-family:'Poppins',var(--font-display)]"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
      <Reveal className="text-center">
        <span className="inline-block text-[0.7rem] font-bold uppercase tracking-[0.22em] text-accent md:text-[#7B2D3B]">
          Services
        </span>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mx-auto mt-6 max-w-3xl text-center text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-[1.08] tracking-[-0.01em]">
          Quality building work, shaped around your home
        </h2>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="mt-12 flex w-full flex-col gap-3 md:flex-row md:gap-4">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`w-full rounded-xl px-6 py-5 text-center text-sm font-semibold no-underline transition-colors md:flex-1 md:rounded-md ${
                active === t.id
                  ? "bg-accent text-accent-foreground md:bg-[#7B2D3B] md:text-white"
                  : "bg-card text-foreground hover:bg-foreground/5"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="mt-6 w-full overflow-hidden rounded-xl border border-foreground/15 bg-card p-8 md:mt-4 md:rounded-md md:p-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 items-stretch gap-12 md:grid-cols-2 md:gap-0"
          >
            <div className="md:flex md:flex-col md:justify-center md:p-12">
              <p className="max-w-xl text-base leading-[1.6] text-foreground/70">
                {current.body}
              </p>
              <ul className="mt-10 space-y-5">
                {current.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3 text-sm text-foreground/85"
                  >
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground md:bg-[#7B2D3B] md:text-white">
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
              className="h-[300px] w-full rounded-xl object-cover md:h-full md:min-h-[460px] md:rounded-none"
            />
          </motion.div>
        </AnimatePresence>
      </div>
      </div>
    </section>
  );
}
