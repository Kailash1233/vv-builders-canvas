import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { Reveal, Eyebrow } from "./Reveal";

export function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Thanks — we'll be in touch within one working day.");
    }, 600);
  };

  const field =
    "w-full border border-background/20 bg-background/5 px-4 py-3 text-sm text-background placeholder:text-background/40 outline-none transition-colors focus:border-background/60";

  return (
    <section id="contact" className="mt-24 bg-ink text-ink-foreground md:mt-36">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-5 py-20 md:grid-cols-2 md:gap-20 md:px-10 md:py-28">
        <div>
          <Reveal>
            <Eyebrow className="text-ink-foreground/60">Contact</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 text-[clamp(2rem,4vw,3.5rem)] font-extrabold uppercase leading-[1] tracking-[-0.03em]">
              Let&apos;s discuss your next project
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-md text-sm leading-[1.6] text-ink-foreground/70">
              Tell us about the space, the timeline and roughly what you have in mind. We&apos;ll
              come back with honest advice and a site visit date.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 space-y-2 text-sm">
              <a href="mailto:hello@vvbuilders.co.uk" className="block hover:underline">
                hello@vvbuilders.co.uk
              </a>
              <a href="tel:+442071234567" className="block hover:underline">
                +44 20 7123 4567
              </a>
              <p className="pt-3 text-ink-foreground/55">Mon–Fri, 8am–6pm · North & West London</p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <form
            onSubmit={onSubmit}
            className="space-y-4 border border-background/12 bg-background/5 p-6 md:p-8"
          >
            <input required name="name" placeholder="Name*" className={field} />
            <input required type="email" name="email" placeholder="Email*" className={field} />
            <input required name="phone" placeholder="Phone Number*" className={field} />
            <textarea required name="message" rows={5} placeholder="Message*" className={field} />
            <button type="submit" disabled={sending} className="btn-light group w-full">
              {sending ? "Sending…" : "Send Enquiry"}
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1.5"
              />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
