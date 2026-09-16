# VV Builders Showcase

Build a modern, minimalist one-page marketing website for VV Builders, a construction and home renovation company. The tone is premium, confident, and clean — lots of whitespace, oversized typography, full-bleed photography, and smooth scroll-triggered animations. Think "boutique architecture studio" more than "traditional contractor site."

Tech / Stack Notes

Single-page React app, section-based, smooth-scroll anchor navigation

Framer Motion (or equivalent) for scroll-reveal and hover animations

Fully responsive (desktop, tablet, mobile) — stack image/text pairs vertically on mobile

Use placeholder interior/exterior renovation photography (kitchens, lofts, extensions, bathrooms) throughout

Color Palette (original — do not use maroon/brick red from any reference)

Background (primary): warm off-white #F5F3EF

Text (primary): near-black #141414

Accent color: deep forest green #2B4536 (used for active states, buttons, small labels) — alternate accent panel color: charcoal #2A2A28

Dark section background (footer/contact): near-black #101010 with off-white text

Cards/testimonials: white #FFFFFF with soft shadow

Typography

Headings: a bold, tight-tracking grotesk sans-serif (e.g. "Neue Montreal", "General Sans", or "Inter" at 700–800 weight) — headline sizes should be huge (clamp 3rem–7rem) and stack on multiple lines

Body: same font family, regular weight, comfortable line-height (1.5–1.6)

Small eyebrow labels (e.g. "SERVICES", "OUR WORK") in uppercase, letter-spaced, accent color, small size

Global Animation Language

On scroll, each section's content fades in and slides up ~20–30px, staggered slightly between child elements (headline first, then supporting text, then image)

Nav bar is sticky/fixed at top, stays visible on scroll, subtle background blur or solid off-white

Buttons have a hover state: background/text color inversion or a sliding arrow icon that shifts right on hover

Horizontal image galleries auto-scroll slowly (marquee-style, looping, pause on hover)

Accordion (FAQ) items expand/collapse height smoothly with a rotating chevron icon

Testimonial carousel: quote text does a soft fade/word-reveal transition when switching slides, with prev/next arrow buttons

Section-by-Section Structure

1. Navigation Bar (sticky)

Left: "VV Builders" wordmark/logo

Center or right-of-center: nav links — About / Services / Projects

Far right: Contact link (styled distinctly, e.g. bold or button-like)

Off-white background, black text, becomes slightly opaque/blurred on scroll

2. Hero Section

Two-column layout: left ~45% width off-white panel, right ~55% full-bleed photo (interior renovation shot)

Left panel: massive bold headline stacked across 3–4 lines (e.g. "BUILT TO LAST, DESIGNED TO IMPRESS" or similar original tagline for VV Builders), all caps, tight line-height

Below headline: short 1–2 sentence supporting paragraph

Small down-arrow scroll indicator at bottom of left panel

Right panel: full-height photo, no overlay text

3. About / Intro Text Block

Two-column: left a paragraph of body text introducing VV Builders' mission and experience; right a single large photo

Reverse this layout in a later section for variety if desired

4. Horizontal Auto-Scrolling Image Strip

A row of 6–8 renovation photos (kitchens, bathrooms, living spaces) in a continuous slow auto-scroll marquee, looping infinitely

Images are uniform height, varied width, small gap between them

5. Stats Row

4-column row, each with a large bold number (e.g. "12+", "400+", "75%", "40+") and a two-line uppercase label underneath (Years of Experience / Projects Completed / Client Satisfaction / Skilled Professionals)

Numbers can count up/animate when scrolled into view

6. Services — Tabbed Section

Eyebrow label "SERVICES" centered above

4 horizontal tab buttons: Kitchens / Bathrooms / Loft Conversions / Extensions

Active tab has accent-color (forest green) filled background, inactive tabs are white/outlined

Clicking a tab swaps the content below with a fade transition:

Left: paragraph description + 4-item bullet list (each bullet prefixed with a circular arrow icon)

Right: relevant photo

Default active tab: Kitchens

7. Featured Projects (repeat this pattern 2–3 times, one per major project)

Full-width photo (16:5 aspect) with a large white bold title overlaid near the bottom of the image (e.g. "Kitchen Renovation", "Loft Conversion", "Home Extension")

Below the photo, two side-by-side cards:

Left card: solid accent-color background (alternate between forest green and charcoal across projects) containing a white descriptive paragraph about the project

Right card: white background with a client testimonial quote, small circular client photo, name, and role

Eyebrow label "OUR WORK" appears once above the first project

8. Process — 3 Steps

3-column row, each card containing:

Large outline/bold number (01, 02, 03)

Step title (Consultation / Design & Build / Final Handover)

Short description paragraph

White or off-white cards with subtle border

9. Testimonials Carousel

Eyebrow "TESTIMONIALS" + large centered heading (e.g. "Real stories from clients who transformed their homes with us")

Below: large square client photo on the left, quote text on the right (larger serif or bold sans, fades in word-by-word or line-by-line)

Client name + role/company beneath quote

Prev/next circular arrow buttons

10. Mid-Page Statement / Inline CTA

One large centered sentence (headline-sized) that includes one small inline photo embedded directly within the text flow (e.g. "Your dream home starts with a conversation. Let's create a space that combines [small inline photo] function, style, and lasting quality.")

11. Full-Bleed CTA Banner

Large full-width photo section (renovated living/kitchen space)

Centered button overlaid on the image: "Get Started →" in accent color, with arrow that slides right on hover

12. FAQ Accordion

Eyebrow "FAQ" centered above

5–6 expandable rows (e.g. "Can you work with my existing plans or architect?", "How much does a renovation project cost?", "Do you manage all trades and suppliers?", "What areas do you cover?", plus 1–2 more relevant to VV Builders)

Chevron icon rotates 180° on expand, content height animates smoothly

13. Contact Section (dark background)

Full-width near-black background, white/off-white text

Left: heading ("Let's Discuss Your Next Project" or similar) + supporting paragraph + contact details (email/phone)

Right: contact form card (semi-transparent/grey card) with fields: Name*, Email*, Phone Number*, Message* and a submit button

14. Footer

Off-white background

Top row: short tagline paragraph on the left; two link columns on the right — "Nav" (About, Services, Projects, Contact) and "Socials" (Instagram, X/Twitter, Facebook)

Below: oversized wordmark "VV Builders" spanning most of the width, in bold black, with a registered trademark ® symbol if desired

Bottom row: copyright line ("© 2026 VV Builders") left, small credit/attribution text right

Copy Guidance

Write all headline, body, and testimonial copy original for VV Builders — do not reuse text from any reference site. Keep tone confident, warm, and craftsmanship-focused.

Responsive Behavior

Below ~768px: all two-column layouts stack vertically (text above image)

Tab buttons in Services section wrap or become a horizontal scroll on mobile

Stats row becomes 2x2 grid on mobile

Footer wordmark scales down proportionally, never wraps awkwardly

Reference site: https://rebuildrenovation.framer.website/
Reference image added.

But the scroll effects are given as prompt.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://vv-builders-canvas.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/91c53269-6dc9-4e07-a0b7-14174ede54a7).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
