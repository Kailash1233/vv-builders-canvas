import { Reveal, Eyebrow } from "./Reveal";

const points = [
  {
    title: "Planned for the climate",
    body: "Orientation, shading, ventilation and roof treatment are decided early — the things that keep a Chennai home comfortable long after handover.",
  },
  {
    title: "Practical construction",
    body: "Buildable details over showpiece ones. We choose materials and methods that local trades can execute well and that hold up to heat and monsoon.",
  },
  {
    title: "Clear communication",
    body: "One point of contact, decisions written down, and a straight answer when something on site needs to change.",
  },
  {
    title: "Attention to execution",
    body: "Levels, slopes, waterproofing, joinery lines. The unglamorous work that decides whether a house ages well.",
  },
  {
    title: "Residential focus",
    body: "Independent houses, villas, extensions and renovation — not a bit of everything. Our experience sits in homes.",
  },
  {
    title: "Local to South Chennai",
    body: "Based in Padappai and working across Tambaram and the surrounding corridor, so site supervision is close and regular.",
  },
];

export function WhyUs() {
  return (
    <section className="mx-auto mt-24 max-w-[1400px] px-5 md:mt-36 md:px-10">
      <Reveal>
        <Eyebrow>Why V.V Builders</Eyebrow>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-5 max-w-3xl text-[clamp(2rem,4vw,3.5rem)] font-extrabold uppercase leading-[1] tracking-[-0.03em]">
          What actually makes a difference on site
        </h2>
      </Reveal>
      <div className="mt-14 grid grid-cols-1 gap-px border border-foreground/12 bg-foreground/12 md:grid-cols-3">
        {points.map((p, i) => (
          <Reveal key={p.title} delay={(i % 3) * 0.08}>
            <div className="h-full bg-background p-8 transition-colors hover:bg-card md:p-10">
              <div className="text-sm font-semibold text-navy">0{i + 1}</div>
              <h3 className="mt-5 text-xl font-bold tracking-tight">{p.title}</h3>
              <p className="mt-3 text-sm leading-[1.65] text-foreground/65">{p.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
