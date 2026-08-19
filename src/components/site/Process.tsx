import { Reveal, Eyebrow } from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Understand",
    body: "We walk the site and listen. Plot orientation, soil, access, water, budget range and how your family expects to use the house.",
  },
  {
    n: "02",
    title: "Plan",
    body: "Requirements become a practical construction approach — layout, structure, materials, sequence and what each stage will involve.",
  },
  {
    n: "03",
    title: "Build",
    body: "Execution with attention to workmanship, material quality and site coordination, with regular updates as the work progresses.",
  },
  {
    n: "04",
    title: "Complete",
    body: "Finishing, checks and handover of a home that is practical to live in, durable in Chennai conditions and built to last.",
  },
];

export function Process() {
  return (
    <section className="mx-auto mt-24 max-w-[1400px] px-5 md:mt-36 md:px-10">
      <Reveal>
        <Eyebrow>Our approach</Eyebrow>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-5 max-w-3xl text-[clamp(2rem,4vw,3.5rem)] font-extrabold uppercase leading-[1] tracking-[-0.03em]">
          How a project runs with us
        </h2>
      </Reveal>
      <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <Reveal key={s.n} delay={i * 0.08}>
            <div className="h-full border border-foreground/12 bg-card p-8 md:p-10">
              <div className="text-5xl font-extrabold tracking-[-0.04em] text-navy">{s.n}</div>
              <h3 className="mt-6 text-xl font-bold tracking-tight">{s.title}</h3>
              <p className="mt-3 text-sm leading-[1.65] text-foreground/65">{s.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
