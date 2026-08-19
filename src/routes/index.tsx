import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Intro } from "@/components/site/Intro";
import { Stats } from "@/components/site/Stats";
import { Marquee } from "@/components/site/Marquee";
import { ServicesTabs } from "@/components/site/ServicesTabs";
import { SelectedProjects } from "@/components/site/SelectedProjects";
import { WhyUs } from "@/components/site/WhyUs";
import { Process } from "@/components/site/Process";
import { Testimonials } from "@/components/site/Testimonials";
import { Statement } from "@/components/site/Statement";
import { Faq } from "@/components/site/Faq";
import { Locations } from "@/components/site/Locations";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";
import { SITE_URL } from "@/data/site";

const title = "V.V Builders | Builders & Construction Company in Tambaram, Chennai";
const description =
  "V.V Builders is a builders and construction company in Padappai, Tambaram, Chennai — independent house construction, villas, renovation and home extensions across South Chennai.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": `${SITE_URL}/#business`,
          name: "V.V Builders",
          description,
          url: SITE_URL,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Padappai, Tambaram",
            addressRegion: "Tamil Nadu",
            addressCountry: "IN",
},
          areaServed: ["Tambaram", "Padappai", "South Chennai", "Chennai"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <div className="relative z-10 bg-background">
          <Intro />
          <Stats />
          <Marquee />
          <ServicesTabs />
          <SelectedProjects />
          <WhyUs />
          <Process />
          <Testimonials />
          <Statement />
          <Locations />
          <Faq />
          <FinalCTA />
          <Footer />
        </div>
      </main>
      <Toaster />
    </>
  );
}
