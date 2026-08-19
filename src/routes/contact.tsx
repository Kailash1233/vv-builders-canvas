import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { ContactForm } from "@/components/site/ContactForm";
import { SITE_URL, business, serviceAreas } from "@/data/site";

const title = "Contact V.V Builders | Builders in Tambaram, Chennai";
const description =
  "Planning to build, renovate or extend a home in Tambaram or South Chennai? Send V.V Builders, Padappai, the details of your project and we will get back to you.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/contact` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/contact` }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Contact"
        crumb="Contact"
        title="Start your home project"
        intro="Planning to build, renovate or extend a home in Tambaram or the surrounding areas? Tell us about the plot and what you have in mind, and we will come back with a practical view of the work."
      />

      <section className="mx-auto max-w-[1400px] px-5 pb-24 md:px-10 md:pb-36">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_1.3fr] md:gap-20">
          <div>
            <Reveal>
              <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-navy">
                Where we are
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-lg font-semibold leading-[1.5]">{business.addressLine}</p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-5 max-w-sm text-sm leading-[1.7] text-foreground/65">
                We work across {serviceAreas.slice(0, 8).join(", ")} and surrounding South Chennai
                areas. Site visits are arranged after an initial conversation about the project.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="mt-8 max-w-sm text-sm leading-[1.7] text-foreground/55">
                Prefer to look at our work first? See the{" "}
                <Link to="/projects" className="text-navy underline-offset-4 hover:underline">
                  projects
                </Link>{" "}
                or the{" "}
                <Link to="/services" className="text-navy underline-offset-4 hover:underline">
                  services
                </Link>{" "}
                we take on.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="border border-foreground/12 bg-card p-6 md:p-10">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
