import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { projectTypes } from "@/data/site";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  phone: z.string().trim().min(6, "Please enter a valid phone number").max(20),
  email: z.string().trim().email("Please enter a valid email").max(255),
  location: z.string().trim().max(120).optional().or(z.literal("")),
  projectType: z.string().trim().max(60).optional().or(z.literal("")),
  budget: z.string().trim().max(60).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Tell us a little about the project").max(1500),
});

const field =
  "w-full rounded-md border border-foreground/15 bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-foreground/40 focus:border-navy";

export function ContactForm() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSending(true);
    setTimeout(() => {
      setSending(false);
      form.reset();
      toast.success("Thank you — your enquiry has been noted. We will get back to you shortly.");
    }, 600);
  };

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <input required name="name" placeholder="Name*" className={field} />
      <input required name="phone" placeholder="Phone*" className={field} />
      <input required type="email" name="email" placeholder="Email*" className={field} />
      <input name="location" placeholder="Location (e.g. Tambaram)" className={field} />
      <select name="projectType" defaultValue="" className={field}>
        <option value="">Project type</option>
        {projectTypes.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>
      <input name="budget" placeholder="Approximate budget" className={field} />
      <textarea
        required
        name="message"
        rows={5}
        placeholder="Tell us about the plot, the house and your timeline*"
        className={`${field} sm:col-span-2`}
      />
      <button
        type="submit"
        disabled={sending}
        className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy px-7 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-navy-foreground transition-colors hover:bg-foreground disabled:opacity-60 sm:col-span-2"
      >
        {sending ? "Sending…" : "Send enquiry"}
        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1.5" />
      </button>
    </form>
  );
}
