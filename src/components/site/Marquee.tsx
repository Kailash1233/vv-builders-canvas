import bathroom from "@/assets/bathroom.jpg";
import loft from "@/assets/loft.jpg";
import extension from "@/assets/extension.jpg";
import living from "@/assets/living.jpg";
import stairs from "@/assets/stairs.jpg";
import craft from "@/assets/craft.jpg";
import wideKitchen from "@/assets/wide-kitchen.jpg";

const images: { src: string; alt: string; w: string }[] = [
  { src: bathroom, alt: "Minimal renovated bathroom", w: "w-[300px] md:w-[420px]" },
  { src: loft, alt: "Loft conversion bedroom", w: "w-[240px] md:w-[320px]" },
  { src: extension, alt: "Rear glass extension dining area", w: "w-[320px] md:w-[460px]" },
  { src: living, alt: "Renovated living room", w: "w-[260px] md:w-[340px]" },
  { src: stairs, alt: "Oak staircase renovation", w: "w-[240px] md:w-[300px]" },
  { src: craft, alt: "Joinery being installed on site", w: "w-[300px] md:w-[400px]" },
  { src: wideKitchen, alt: "Green kitchen with marble worktops", w: "w-[340px] md:w-[520px]" },
];

export function Marquee() {
  return (
    <section className="overflow-hidden py-14 md:py-20">
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
