import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { SmoothScroll } from "@/components/site/SmoothScroll";
import { Nav } from "@/components/site/Nav";

import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Marquee } from "@/components/site/Marquee";
import { Services } from "@/components/site/Services";
import { Projects } from "@/components/site/Projects";
import { Process } from "@/components/site/Process";
import { Testimonials } from "@/components/site/Testimonials";
import { Statement } from "@/components/site/Statement";
import { Faq } from "@/components/site/Faq";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VV Builders — Construction & Home Renovation in London" },
      {
        name: "description",
        content:
          "VV Builders designs and builds kitchens, bathrooms, loft conversions and extensions across North and West London. Fixed programmes, one project lead, immaculate detailing.",
      },
      { property: "og:title", content: "VV Builders — Built to Last, Designed to Impress" },
      {
        property: "og:description",
        content:
          "Boutique construction and renovation studio crafting kitchens, lofts and extensions across London.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <SmoothScroll />
      <Nav />
      <Hero />

      <About />
      <Marquee />
      <Services />
      <Projects />
      <Process />
      <Testimonials />
      <Statement />
      <Faq />
      <Contact />
      <Footer />
      <Toaster />
    </main>
  );
}
