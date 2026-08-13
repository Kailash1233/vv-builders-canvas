import { Reveal, Eyebrow } from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Consultation",
    body: "We visit, measure and listen. You get a clear scope, a realistic budget range and an honest view of what your home can take.",
  },
  {
    n: "02",
    title: "Design & Build",
    body: "Drawings, approvals and trades are coordinated by one project lead. Weekly updates, a protected site and no hidden extras.",
  },
  {
    n: "03",
    title: "Final Handover",
    body: "Snagging, certification and a full walkthrough. We hand back a finished space with a two-year workmanship guarantee.",
  },
];

export function Process() {
  return (
    <section className="mx-auto mt-24 max-w-[1400px] px-5 md:mt-36 md:px-10">
      <Reveal className="text-center">
        <Eyebrow>Process</Eyebrow>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mx-auto mt-5 max-w-2xl text-center text-[clamp(2rem,4vw,3.5rem)] font-extrabold uppercase leading-[1] tracking-[-0.03em]">
          Three steps behind every build
        </h2>
      </Reveal>
      <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
        {steps.map((s, i) => (
          <Reveal key={s.n} delay={i * 0.1}>
            <div className="h-full border border-foreground/12 bg-card p-8 md:p-10">
              <div className="text-5xl font-extrabold tracking-[-0.04em] text-accent">{s.n}</div>
              <h3 className="mt-6 text-xl font-bold tracking-tight">{s.title}</h3>
              <p className="mt-3 text-sm leading-[1.6] text-foreground/65">{s.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
