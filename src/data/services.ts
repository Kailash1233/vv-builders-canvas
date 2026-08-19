import exterior from "@/assets/vv-exterior.jpg";
import villa from "@/assets/vv-villa.jpg";
import renovation from "@/assets/vv-renovation.jpg";
import verandah from "@/assets/vv-verandah.jpg";
import structure from "@/assets/vv-structure.jpg";
import kitchen from "@/assets/vv-kitchen.jpg";

export interface Service {
  id: string;
  title: string;
  summary: string;
  body: string;
  points: string[];
  image: string;
  alt: string;
}

export const services: Service[] = [
  {
    id: "new-home-construction",
    title: "New Home Construction",
    summary: "Independent houses built end to end, from planning coordination to handover.",
    body: "We take a plot in Tambaram or the surrounding South Chennai areas from setting-out to a finished, liveable home — structure, masonry, services, finishes and site coordination handled as one continuous scope.",
    points: [
      "Site study, orientation and layout planning",
      "Foundation, RCC structure and masonry",
      "Plumbing, electrical and sanitary works",
      "Flooring, joinery, painting and handover",
    ],
    image: exterior,
    alt: "Newly built independent house in Tambaram with a shaded verandah",
  },
  {
    id: "villa-construction",
    title: "Villa Construction",
    summary: "Villas executed with attention to layout, materials, detailing and finish.",
    body: "Larger plots allow more generous planning — courtyards, verandahs, car porches and landscape. We build them with detailing that suits Chennai's heat and monsoon rather than imported finishes that struggle here.",
    points: [
      "Courtyard and verandah planning",
      "Exposed concrete, stone and timber detailing",
      "Shaded glazing and screen systems",
      "Landscape, driveway and boundary works",
    ],
    image: villa,
    alt: "Contemporary villa exterior at dusk in Padappai, Chennai",
  },
  {
    id: "home-renovation",
    title: "Home Renovation",
    summary: "Upgrading existing homes for better light, ventilation and long-term usability.",
    body: "Older houses in Chennai often need the same things: more daylight, better airflow, dry walls and services that no longer need patching. We rework what is there without disturbing what does not need touching.",
    points: [
      "Layout rework within the existing structure",
      "Damp treatment and waterproofing",
      "Replacement of plumbing and electrical lines",
      "Flooring, kitchen and bathroom upgrades",
    ],
    image: renovation,
    alt: "Renovated Indian home living and dining space with louvered windows",
  },
  {
    id: "home-extensions",
    title: "Home Extensions",
    summary: "New rooms, floors and verandahs added with respect for the existing structure.",
    body: "Extensions start with an honest look at what the existing building can carry. Only then do we plan the added floor, room or covered space, and tie the new work into the old cleanly.",
    points: [
      "Assessment of existing structure and load path",
      "Additional floors, rooms and terraces",
      "Verandah, sit-out and car porch additions",
      "Finishes matched to the existing house",
    ],
    image: verandah,
    alt: "Shaded verandah extension with terracotta flooring and swing",
  },
  {
    id: "structural-civil-works",
    title: "Structural & Civil Works",
    summary: "Core construction and civil execution for residential projects.",
    body: "Foundations, RCC framing, masonry, plastering, waterproofing, drainage and site levels — the work that decides how a home performs a decade from now.",
    points: [
      "Foundations and RCC framing",
      "Masonry, plastering and waterproofing",
      "Drainage, sumps and site grading",
      "Compound walls and external works",
    ],
    image: structure,
    alt: "Reinforced concrete frame of a residential building under construction",
  },
  {
    id: "construction-consultation",
    title: "Construction Consultation",
    summary: "Help with planning, execution approach, materials and project requirements.",
    body: "If you are still deciding how to approach a build, we can talk through the sequence, material choices, practical constraints of the plot and what the work realistically involves.",
    points: [
      "Plot and feasibility discussion",
      "Construction approach and sequencing",
      "Material and specification guidance",
      "Scope clarification before you commit",
    ],
    image: kitchen,
    alt: "Interior of a completed Indian home kitchen with granite counters",
  },
];
