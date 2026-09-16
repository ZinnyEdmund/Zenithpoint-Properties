import type { Property } from "@/types";

// ============================================================
// SAMPLE PROPERTY DATA
// Every listing below is illustrative — written to look and read
// like a real Enugu property so the design can be judged properly.
// None of it is verified Zenith Point data. Replace this array with
// real listings when available; keep the same Property shape and
// every component that consumes it keeps working unchanged.
// ============================================================
export const properties: Property[] = [
  {
    id: "p1",
    slug: "amara-residential-estate",
    name: "Amara Residential Estate",
    location: "GRA, Enugu",
    type: "Residential",
    price: "₦85,000,000",
    status: "Available",
    featured: true,
    size: "550 sqm",
    bedrooms: 4,
    bathrooms: 5,
    description:
      "A gated estate of modern detached duplexes finished to a high standard, with paved roads, perimeter fencing and 24-hour estate security.",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=900&auto=format&fit=crop",
    ],
    features: ["Gated estate", "24-hour security", "Paved access roads", "Borehole water supply"],
    documentation: ["Certificate of Occupancy", "Building approval", "Survey plan"],
    isSample: true,
  },
  {
    id: "p2",
    slug: "independence-layout-serviced-plots",
    name: "Independence Layout Serviced Plots",
    location: "Independence Layout, Enugu",
    type: "Land",
    price: "₦18,500,000",
    status: "Selling Fast",
    size: "648 sqm",
    description:
      "Dry, fenced serviced plots in a fast-developing residential layout, with governor's consent in progress and survey documents available on request.",
    images: [
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1500382017945-975d13e5c07e?q=80&w=900&auto=format&fit=crop",
    ],
    features: ["Dry land", "Fenced perimeter", "Survey available", "Governor's consent in progress"],
    documentation: ["Survey plan", "Deed of assignment", "Governor's consent (in progress)"],
    isSample: true,
  },
  {
    id: "p3",
    slug: "trans-ekulu-luxury-apartments",
    name: "Trans-Ekulu Luxury Apartments",
    location: "Trans-Ekulu, Enugu",
    type: "Residential",
    price: "₦42,000,000",
    status: "Available",
    size: "180 sqm",
    bedrooms: 3,
    bathrooms: 3,
    description:
      "Contemporary three-bedroom apartments within a serviced complex, built for professionals and families who want low-maintenance city living.",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=900&auto=format&fit=crop",
    ],
    features: ["Serviced complex", "Dedicated parking", "Standby power", "Modern fittings"],
    documentation: ["Certificate of Occupancy", "Deed of assignment", "Building approval"],
    isSample: true,
  },
  {
    id: "p4",
    slug: "abakpa-commercial-plaza",
    name: "Abakpa Commercial Plaza",
    location: "Abakpa Nike, Enugu",
    type: "Commercial",
    price: "Price on request",
    status: "Under Development",
    size: "1,200 sqm",
    description:
      "A multi-unit commercial plaza along a high-traffic corridor, designed for retail, office and showroom space with dedicated customer parking.",
    images: [
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=900&auto=format&fit=crop",
    ],
    features: ["High-traffic frontage", "Retail & office units", "Customer parking", "CCTV coverage"],
    documentation: ["Survey plan", "Building approval", "Deed of assignment"],
    isSample: true,
  },
  {
    id: "p5",
    slug: "akwuke-mixed-use-development",
    name: "Akwuke Mixed-Use Development",
    location: "Akwuke, Enugu",
    type: "Development",
    price: "From ₦25,000,000",
    status: "Under Development",
    size: "5 hectares",
    description:
      "A planned mixed-use community combining residential plots, a retail strip and shared green space, phased for delivery over two years.",
    images: [
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=900&auto=format&fit=crop",
    ],
    features: ["Phased development", "Retail strip", "Green/shared space", "Flexible payment plan"],
    documentation: ["Layout approval", "Survey plan", "Deed of assignment"],
    isSample: true,
  },
  {
    id: "p6",
    slug: "new-haven-family-duplex",
    name: "New Haven Family Duplex",
    location: "New Haven, Enugu",
    type: "Residential",
    price: "₦120,000,000",
    status: "Sold Out",
    size: "620 sqm",
    bedrooms: 5,
    bathrooms: 6,
    description:
      "A fully finished five-bedroom detached duplex on a quiet close, with a boys' quarters, compound parking for four cars and a landscaped garden.",
    images: [
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=900&auto=format&fit=crop",
    ],
    features: ["Boys' quarters", "4-car compound parking", "Landscaped garden", "Fully finished"],
    documentation: ["Certificate of Occupancy", "Deed of assignment", "Building approval"],
    isSample: true,
  },
];

export function getPropertyBySlug(slug: string) {
  return properties.find((p) => p.slug === slug);
}

export function getSimilarProperties(current: Property, limit = 3) {
  const sameType = properties.filter((p) => p.id !== current.id && p.type === current.type);
  const rest = properties.filter((p) => p.id !== current.id && p.type !== current.type);
  return [...sameType, ...rest].slice(0, limit);
}
