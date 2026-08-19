import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";

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

export function Stats() {
  return (
    <section className="mx-auto mt-20 max-w-[1400px] px-5 md:mt-28 md:px-10">
      <div className="grid grid-cols-2 gap-y-10 border-y border-foreground/10 py-12 md:grid-cols-4">
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
