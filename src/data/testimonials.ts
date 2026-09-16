import type { Testimonial } from "@/types";

// SAMPLE TESTIMONIALS — written to demonstrate the layout only.
// No real Zenith Point clients have been quoted. Replace every
// entry with a real name and quote once clients consent to being
// featured; delete this file's contents down to an empty array if
// none are available yet rather than leaving invented ones live.
export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Sample Client — Chidinma O.",
    role: "Homeowner, GRA Enugu",
    quote:
      "The team walked me through every stage of buying my land, from documentation to the final survey. I always knew what was happening next.",
    propertyReference: "Independence Layout Serviced Plots",
    isSample: true,
  },
  {
    id: "t2",
    name: "Sample Client — Emeka N.",
    role: "Investor",
    quote:
      "I was buying from outside Enugu, so I needed someone I could trust to verify everything on the ground. That's exactly what I got.",
    propertyReference: "Akwuke Mixed-Use Development",
    isSample: true,
  },
  {
    id: "t3",
    name: "Sample Client — Ngozi A.",
    role: "Family Buyer",
    quote:
      "Our new home was ready exactly as described. Every question we had before moving in was answered honestly and quickly.",
    propertyReference: "Amara Residential Estate",
    isSample: true,
  },
];
