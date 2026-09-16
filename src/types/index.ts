export type PropertyType = "Land" | "Residential" | "Commercial" | "Development";
export type PropertyStatus = "Available" | "Under Development" | "Selling Fast" | "Sold Out";

export interface Property {
  id: string;
  slug: string;
  name: string;
  location: string;
  type: PropertyType;
  price: string; // display string, e.g. "₦45,000,000" or "Price on request"
  status: PropertyStatus;
  featured?: boolean;
  size?: string;
  bedrooms?: number;
  bathrooms?: number;
  description: string;
  images: string[];
  features?: string[];
  documentation?: string[];
  coordinates?: { lat: number; lng: number };
  /** True for demo/sample data standing in for a verified listing. */
  isSample?: boolean;
}

export interface ProjectFact {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  slug: string;
  name: string;
  location: string;
  status: string;
  description: string;
  facts: ProjectFact[];
  images: string[];
  isSample?: boolean;
}

export interface Service {
  id: string;
  number: string;
  name: string;
  description: string;
  image: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface WhyPoint {
  title: string;
  description: string;
}

export interface WalkthroughVideo {
  id: string;
  category: string;
  title: string;
  thumbnail: string;
  isSample?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  quote: string;
  propertyReference?: string;
  isSample?: boolean;
}
