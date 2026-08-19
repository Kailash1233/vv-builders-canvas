import exterior from "@/assets/vv-exterior.jpg";
import villa from "@/assets/vv-villa.jpg";
import renovation from "@/assets/vv-renovation.jpg";
import courtyard from "@/assets/vv-courtyard.jpg";
import kitchen from "@/assets/vv-kitchen.jpg";
import structure from "@/assets/vv-structure.jpg";
import verandah from "@/assets/vv-verandah.jpg";
import living from "@/assets/vv-hero.jpg";

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  location: string;
  category: string;
  year?: string;
  status?: string;
  area?: string;
  description: string;
  overview: { label: string; value: string }[];
  challenge?: string;
  approach?: string;
  outcome?: string;
  highlights: string[];
  materials?: { label: string; value: string }[];
  image: string;
  imageAlt: string;
  gallery: GalleryImage[];
  brochureUrl?: string;
  caseStudyUrl?: string;
  relatedService: { label: string; hash: string };
  seoTitle: string;
  seoDescription: string;
}

export const projects: Project[] = [
  {
    id: "p1",
    slug: "independent-house-tambaram",
    title: "Independent House, Tambaram",
    location: "Tambaram, Chennai",
    category: "New Home Construction",
    status: "Completed",
    description:
      "A two-storey independent house planned around shade, cross-ventilation and a family that lives across generations.",
    overview: [
      { label: "Location", value: "Tambaram, Chennai" },
      { label: "Project Type", value: "New Home Construction" },
      { label: "Scope", value: "Structure, civil works, finishes" },
      { label: "Status", value: "Completed" },
    ],
    challenge:
      "A narrow plot with a west-facing frontage — the side that takes the worst of the Chennai afternoon heat — and a brief that asked for a ground-floor bedroom for elderly parents without giving up the living area.",
    approach:
      "The plan pushes habitable rooms away from the west wall and puts services, staircase and storage along it as a thermal buffer. A deep verandah shades the entrance, louvered openings on opposite walls set up cross-ventilation, and the roof slab was insulated and finished with a reflective coat to cut heat gain.",
    outcome:
      "A house that stays comfortable for most of the year without leaning on air conditioning, with a ground-floor suite, a shaded sit-out and a compact service court for washing and utilities.",
    highlights: [
      "West-facing facade buffered by service spaces",
      "Cross-ventilated living and bedroom layout",
      "Deep verandah and shaded entrance",
      "Insulated roof slab with reflective finish",
      "Ground-floor bedroom for elderly parents",
      "Rainwater harvesting provision",
    ],
    image: exterior,
    imageAlt:
      "Contemporary independent house in Tambaram, Chennai with a shaded verandah and stone-clad entrance",
    gallery: [
      { src: exterior, alt: "Front elevation of the independent house in Tambaram", caption: "Exterior" },
      { src: living, alt: "Naturally lit living room with jaali screen and teak furniture", caption: "Living spaces" },
      { src: courtyard, alt: "Internal courtyard with brick jaali wall and staircase", caption: "Courtyard" },
      { src: kitchen, alt: "Kitchen with wood cabinetry and granite counter", caption: "Kitchen" },
      { src: verandah, alt: "Shaded verandah with swing and terracotta flooring", caption: "Outdoor areas" },
    ],
    relatedService: { label: "New Home Construction", hash: "new-home-construction" },
    seoTitle: "Independent House Construction in Tambaram | V.V Builders",
    seoDescription:
      "A completed independent house in Tambaram, Chennai built by V.V Builders — shaded west facade, cross-ventilated plan and a ground-floor bedroom suite.",
  },
  {
    id: "p2",
    slug: "contemporary-villa-padappai",
    title: "Contemporary Villa, Padappai",
    location: "Padappai, Chennai",
    category: "Villa Construction",
    status: "Completed",
    description:
      "A villa on an open plot near Padappai, built around a central courtyard that pulls daylight and air deep into the plan.",
    overview: [
      { label: "Location", value: "Padappai, Chennai" },
      { label: "Project Type", value: "Villa Construction" },
      { label: "Scope", value: "Full construction and finishing" },
      { label: "Status", value: "Completed" },
    ],
    challenge:
      "A wide plot with no immediate neighbours meant privacy was easy but glare and heat were not. The family wanted large openings without turning the house into a greenhouse.",
    approach:
      "Openings are recessed behind deep concrete reveals and timber screens so glass is never fully exposed. A double-height courtyard at the centre exhausts warm air, and the driveway, car porch and landscape were graded so monsoon runoff drains away from the plinth.",
    outcome:
      "A calm, well-shaded villa with generous glazing, a courtyard that works as the social heart of the house, and site levels that handle heavy Chennai rain.",
    highlights: [
      "Central double-height courtyard",
      "Timber screens over west and south glazing",
      "Exposed concrete and warm stone palette",
      "Site graded for monsoon drainage",
      "Covered car porch and landscaped frontage",
    ],
    image: villa,
    imageAlt: "Contemporary villa in Padappai at dusk with timber screen and landscaped garden",
    gallery: [
      { src: villa, alt: "Villa exterior at dusk with warm interior lighting", caption: "Exterior" },
      { src: courtyard, alt: "Double-height internal courtyard with jaali wall", caption: "Courtyard" },
      { src: living, alt: "Living area with cane furniture and garden view", caption: "Living spaces" },
      { src: kitchen, alt: "Villa kitchen with granite counters and garden window", caption: "Kitchen" },
    ],
    relatedService: { label: "Villa Construction", hash: "villa-construction" },
    seoTitle: "Villa Construction in Padappai, Chennai | V.V Builders",
    seoDescription:
      "A courtyard villa built by V.V Builders in Padappai, near Tambaram — shaded glazing, exposed concrete detailing and site levels planned for Chennai rain.",
  },
  {
    id: "p3",
    slug: "home-renovation-selaiyur",
    title: "Home Renovation, Selaiyur",
    location: "Selaiyur, Chennai",
    category: "Home Renovation",
    status: "Completed",
    description:
      "A dated independent house reworked into a brighter, better-ventilated home without touching the existing structural frame.",
    overview: [
      { label: "Location", value: "Selaiyur, Chennai" },
      { label: "Project Type", value: "Home Renovation" },
      { label: "Scope", value: "Interior rework, services, finishes" },
      { label: "Status", value: "Completed" },
    ],
    challenge:
      "Small, closed rooms, damp along one external wall and old plumbing that had been patched repeatedly. The family wanted to stay in the house for part of the work.",
    approach:
      "Non-structural partitions were removed to link living and dining, the damp wall was opened up, treated and re-plastered with a waterproof coat, and plumbing and electrical lines were replaced in one planned phase so disruption stayed in a fixed window.",
    outcome:
      "A brighter, connected ground floor, a dry external wall, and services that no longer need patching every monsoon.",
    highlights: [
      "Living and dining opened into one space",
      "Damp wall treated and waterproofed",
      "Full replacement of plumbing and wiring",
      "Oxide flooring restored and polished",
      "Phased work so the family could stay on site",
    ],
    image: renovation,
    imageAlt: "Renovated living and dining space with red oxide floor and louvered windows",
    gallery: [
      { src: renovation, alt: "Renovated open living and dining area", caption: "Living spaces" },
      { src: verandah, alt: "Restored verandah with terracotta tiles", caption: "Outdoor areas" },
      { src: kitchen, alt: "Rebuilt kitchen with new services", caption: "Kitchen" },
    ],
    relatedService: { label: "Home Renovation", hash: "home-renovation" },
    seoTitle: "Home Renovation in Selaiyur, Chennai | V.V Builders",
    seoDescription:
      "A house renovation in Selaiyur by V.V Builders — opened-up living areas, damp treatment and a full replacement of plumbing and electrical services.",
  },
  {
    id: "p4",
    slug: "first-floor-extension-mudichur",
    title: "First Floor Extension, Mudichur",
    location: "Mudichur, Chennai",
    category: "Home Extension",
    status: "Completed",
    description:
      "An added upper floor over an existing single-storey home, planned around what the original structure could safely carry.",
    overview: [
      { label: "Location", value: "Mudichur, Chennai" },
      { label: "Project Type", value: "Home Extension" },
      { label: "Scope", value: "Structural assessment, extension, finishes" },
      { label: "Status", value: "Completed" },
    ],
    challenge:
      "The existing house was built in stages, so the column grid was irregular and the load path had to be verified before anything was added above.",
    approach:
      "The existing structure was assessed and strengthened where required, the new floor was framed to follow the columns that could take the load, and a staircase was added along the side setback so the ground-floor plan stayed intact.",
    outcome:
      "Two additional bedrooms and a terrace above, with the ground floor left largely as it was and the new work tied cleanly into the old.",
    highlights: [
      "Structural assessment before design",
      "New floor framed to the existing column grid",
      "External staircase within the side setback",
      "Terrace with shaded sit-out",
      "Finishes matched to the existing house",
    ],
    image: structure,
    imageAlt: "RCC frame of a first floor extension under construction in Mudichur, Chennai",
    gallery: [
      { src: structure, alt: "Reinforced concrete frame during construction", caption: "Structural work" },
      { src: exterior, alt: "Completed house after the first floor extension", caption: "Exterior" },
      { src: living, alt: "New upper floor living space", caption: "Living spaces" },
    ],
    relatedService: { label: "Home Extensions", hash: "home-extensions" },
    seoTitle: "First Floor Extension in Mudichur, Chennai | V.V Builders",
    seoDescription:
      "A first floor home extension in Mudichur near Tambaram by V.V Builders — structural assessment, added bedrooms and a terrace tied into the existing house.",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
