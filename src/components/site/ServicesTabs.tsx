import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal, Eyebrow } from "./Reveal";
import { services } from "@/data/services";

const tabs = services.slice(0, 4);

export function ServicesTabs() {
  const [active, setActive] = useState(tabs[0]!.id);
  const current = tabs.find((t) => t.id === active)!;

  return (
    <section id="services" className="mt-24 md:mt-36">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <Eyebrow>Services</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-5 max-w-3xl text-[clamp(2rem,4vw,3.5rem)] font-extrabold uppercase leading-[1] tracking-[-0.03em]">
            Residential construction, start to finish
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-12 flex w-full flex-col gap-2 md:flex-row md:gap-3">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={`w-full rounded-md px-6 py-4 text-center text-sm font-semibold transition-colors md:flex-1 ${
                  active === t.id
                    ? "bg-navy text-navy-foreground"
                    : "border border-foreground/12 bg-card text-foreground hover:bg-foreground/5"
                }`}
              >
                {t.title}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-3 w-full overflow-hidden rounded-md border border-foreground/12 bg-card">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 items-stretch md:grid-cols-2"
            >
              <div className="flex flex-col justify-center p-8 md:p-12">
                <p className="max-w-xl text-base leading-[1.65] text-foreground/70">{current.body}</p>
                <ul className="mt-8 space-y-4">
                  {current.points.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-foreground/85">
                      <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-navy text-navy-foreground">
                        <ArrowUpRight size={13} />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/services"
                  hash={current.id}
                  className="group mt-9 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-navy"
                >
                  All services
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
              <img
                src={current.image}
                alt={current.alt}
                loading="lazy"
                width={1600}
                height={1104}
                className="h-[300px] w-full object-cover md:h-full md:min-h-[460px]"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
