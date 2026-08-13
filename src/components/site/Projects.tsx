import { Reveal, Eyebrow } from "./Reveal";
import wideKitchen from "@/assets/wide-kitchen.jpg";
import wideLoft from "@/assets/wide-loft.jpg";
import wideLiving from "@/assets/wide-living.jpg";
import c1 from "@/assets/client-1.jpg";
import c2 from "@/assets/client-2.jpg";
import c3 from "@/assets/client-3.jpg";

const projects = [
  {
    title: "Kitchen Renovation",
    image: wideKitchen,
    alt: "Deep green kitchen with marble island",
    panel: "accent" as const,
    text: "A dark, tactile kitchen in a Victorian terrace. We removed the rear wall, installed a concealed steel and rebuilt the space around a single ten-foot island with honed marble and hand-painted joinery.",
    quote:
      "They opened up the back of the house without a single surprise on the invoice. The kitchen is the room we now live in.",
    name: "Helena Marsh",
    role: "Homeowner, Kingsbury",
    avatar: c1,
  },
  {
    title: "Loft Conversion",
    image: wideLoft,
    alt: "Loft conversion living space with timber beams",
    panel: "charcoal" as const,
    text: "A rear dormer conversion turning an unused attic into a bedroom suite and study. Structural steels, insulation upgrades and a bespoke oak staircase, all signed off in nine weeks.",
    quote:
      "Precise, tidy and genuinely pleasant to have in the house. The staircase joinery alone was worth it.",
    name: "David Okonjo",
    role: "Homeowner, Harrow",
    avatar: c2,
  },
  {
    title: "Home Extension",
    image: wideLiving,
    alt: "Wide living room extension with full-height glazing",
    panel: "accent" as const,
    text: "A wrap-around extension with structural glazing that pulls the garden into the living space. Underfloor heating, oak flooring and a flush threshold detail throughout.",
    quote:
      "Weekly updates, a spotless site and a finish that still looks new two years on. We'd use them again tomorrow.",
    name: "Mei Lin Tan",
    role: "Homeowner, Pinner",
    avatar: c3,
  },
];

export function Projects() {
  return (
    <section id="projects" className="mt-24 md:mt-36">
      <Reveal className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Eyebrow>Our Work</Eyebrow>
      </Reveal>
      <Reveal delay={0.1} className="mx-auto max-w-[1400px] px-5 md:px-10">
        <h2 className="mt-5 max-w-2xl text-[clamp(2rem,4vw,3.5rem)] font-extrabold uppercase leading-[1] tracking-[-0.03em]">
          Recent projects
        </h2>
      </Reveal>

      <div className="mt-12 space-y-20 md:space-y-28">
        {projects.map((p, i) => (
          <div key={p.title}>
            <Reveal className="mx-auto max-w-[1400px] px-5 md:px-10">
              <div className="relative">
                <img
                  src={p.image}
                  alt={p.alt}
                  loading="lazy"
                  className="aspect-[16/9] w-full object-cover md:aspect-[16/6]"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/60 to-transparent p-5 pt-20 md:p-10">
                  <h3 className="text-[clamp(1.75rem,4vw,3.25rem)] font-extrabold uppercase leading-none tracking-[-0.03em] text-background">
                    {p.title}
                  </h3>
                </div>
              </div>
            </Reveal>


            <div className="mx-auto mt-4 grid max-w-[1400px] grid-cols-1 gap-4 px-5 md:grid-cols-2 md:px-10">
              <Reveal delay={0.1}>
                <div
                  className={`h-full p-7 md:p-10 ${
                    p.panel === "accent"
                      ? "bg-accent text-accent-foreground"
                      : "bg-charcoal text-charcoal-foreground"
                  }`}
                >
                  <span className="text-[0.7rem] uppercase tracking-[0.2em] opacity-70">
                    Project 0{i + 1}
                  </span>
                  <p className="mt-5 text-base leading-[1.6] opacity-95">{p.text}</p>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="flex h-full flex-col justify-between bg-card p-7 shadow-[0_18px_50px_-30px_rgba(20,20,20,0.45)] md:p-10">
                  <p className="text-lg leading-[1.5] text-foreground">“{p.quote}”</p>
                  <div className="mt-8 flex min-w-0 items-center gap-4">
                    <img
                      src={p.avatar}
                      alt={p.name}
                      loading="lazy"
                      className="h-12 w-12 shrink-0 rounded-full object-cover"
                    />
                    <div className="min-w-0">
                      <div className="truncate text-sm font-semibold">{p.name}</div>
                      <div className="truncate text-xs text-foreground/55">{p.role}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
