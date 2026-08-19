import exterior from "@/assets/vv-exterior.jpg";
import villa from "@/assets/vv-villa.jpg";
import courtyard from "@/assets/vv-courtyard.jpg";
import renovation from "@/assets/vv-renovation.jpg";
import verandah from "@/assets/vv-verandah.jpg";
import kitchen from "@/assets/vv-kitchen.jpg";
import structure from "@/assets/vv-structure.jpg";

const images: { src: string; alt: string; w: string }[] = [
  { src: exterior, alt: "Independent house exterior in Tambaram, Chennai", w: "w-[320px] md:w-[460px]" },
  { src: courtyard, alt: "Internal courtyard with jaali screen in a Chennai home", w: "w-[240px] md:w-[320px]" },
  { src: villa, alt: "Contemporary villa in Padappai at dusk", w: "w-[320px] md:w-[460px]" },
  { src: renovation, alt: "Renovated living and dining space in a South Chennai house", w: "w-[300px] md:w-[420px]" },
  { src: verandah, alt: "Shaded verandah with terracotta flooring", w: "w-[260px] md:w-[360px]" },
  { src: kitchen, alt: "Kitchen with wood cabinetry and granite counters", w: "w-[300px] md:w-[420px]" },
  { src: structure, alt: "RCC structural frame of a residential project under construction", w: "w-[280px] md:w-[400px]" },
];

export function Marquee() {
  return (
    <section className="overflow-hidden py-14 md:py-20" aria-label="Recent work">
      <div className="marquee-track flex w-max gap-3 md:gap-4">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex gap-3 md:gap-4" aria-hidden={dup === 1}>
            {images.map((img) => (
              <div
                key={img.src + dup}
                className={`${img.w} h-[220px] shrink-0 overflow-hidden md:h-[300px]`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
