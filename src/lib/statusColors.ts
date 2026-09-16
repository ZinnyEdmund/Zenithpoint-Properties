import type { PropertyStatus } from "@/types";

// Single source of truth for how each property status is colored.
// Previously this mapping was defined twice — once for the card badge
// (PropertyCard) and once for the plain-text price/status pairing
// (PropertyDetail) — with no guarantee the two stayed in sync.
export const statusBadgeClasses: Record<PropertyStatus, string> = {
  Available: "bg-white text-navy",
  "Selling Fast": "bg-white text-zenith",
  "Under Development": "bg-white text-muted",
  "Sold Out": "bg-navy text-white",
};

export const statusTextClasses: Record<PropertyStatus, string> = {
  Available: "text-navy",
  "Selling Fast": "text-zenith",
  "Under Development": "text-muted",
  "Sold Out": "text-muted",
};
