import type { Project } from "@/types";

// SAMPLE PROJECTS — illustrative only, written to show how real
// Zenith Point developments will eventually be presented. Replace
// with verified projects (name, location, facts, imagery) once
// approved for publishing; keep the same Project shape.
export const projects: Project[] = [
  {
    id: "proj-1",
    slug: "zenith-gardens-estate",
    name: "Zenith Gardens Estate",
    location: "Akwuke, Enugu",
    status: "Under Development",
    description:
      "A planned residential estate of serviced plots and detached homes on the growing Akwuke corridor, developed in phases with shared infrastructure — access roads, drainage and a perimeter fence — delivered ahead of individual builds.",
    facts: [
      { label: "Total land size", value: "12 hectares" },
      { label: "Planned units", value: "140 plots" },
      { label: "Current phase", value: "Phase 1 of 3" },
      { label: "Expected handover", value: "Q4 2027" },
    ],
    images: [
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=1400&auto=format&fit=crop",
    ],
    isSample: true,
  },
  {
    id: "proj-2",
    slug: "new-haven-green-court",
    name: "New Haven Green Court",
    location: "New Haven, Enugu",
    status: "Planning",
    description:
      "A smaller-scale infill development of terraced homes around a shared green court, aimed at young families wanting a managed, low-traffic residential setting close to the city centre.",
    facts: [
      { label: "Total land size", value: "1.4 hectares" },
      { label: "Planned units", value: "24 terraced homes" },
      { label: "Current phase", value: "Planning & approvals" },
      { label: "Expected handover", value: "To be confirmed" },
    ],
    images: [
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1400&auto=format&fit=crop",
    ],
    isSample: true,
  },
];

// Kept for the homepage feature block, which highlights a single project.
export const featuredProject = projects[0];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
