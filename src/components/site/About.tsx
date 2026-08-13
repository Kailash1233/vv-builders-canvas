import { useEffect, useRef, useState } from "react";
import { Reveal, Eyebrow } from "./Reveal";
import aboutImg from "@/assets/about-exterior.jpg";

const stats = [
  { value: 12, suffix: "+", label: ["Years of", "Experience"] },
  { value: 400, suffix: "+", label: ["Projects", "Completed"] },
  { value: 98, suffix: "%", label: ["Client", "Satisfaction"] },
  { value: 40, suffix: "+", label: ["Skilled", "Professionals"] },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const duration = 1400;
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          setDisplay(Math.round(value * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export function About() {
  return (
    <section id="about" className="mx-auto mt-24 max-w-[1400px] px-5 md:mt-32 md:px-10">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
        <div>
          <Reveal>
            <Eyebrow>About</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 text-[clamp(2rem,4vw,3.5rem)] font-extrabold uppercase leading-[0.98] tracking-[-0.03em]">
              Craftsmanship
              <br />
              you can live in
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl text-base leading-[1.6] text-foreground/70">
              We started VV Builders with one belief: a home should be built as carefully as it is
              drawn. Every project runs with a single point of contact, a fixed programme and trades
              we have worked with for years — so you always know what happens next.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-4 max-w-xl text-base leading-[1.6] text-foreground/70">
              From a single bathroom to a full rear extension, we handle design coordination,
              building control and finishing details with the same attention.
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.15}>
          <img
            src={aboutImg}
            alt="Modern brick and glass home extension with landscaped garden"
            width={1200}
            height={1400}
            loading="lazy"
            className="h-[420px] w-full object-cover md:h-[600px]"
          />
        </Reveal>
      </div>

      <div className="mt-20 grid grid-cols-2 gap-y-10 border-y border-foreground/10 py-12 md:mt-28 md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label.join()} delay={i * 0.08}>
            <div>
              <div className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold leading-none tracking-[-0.04em]">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-3 text-[0.7rem] uppercase leading-[1.5] tracking-[0.18em] text-foreground/55">
                {s.label[0]}
                <br />
                {s.label[1]}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
