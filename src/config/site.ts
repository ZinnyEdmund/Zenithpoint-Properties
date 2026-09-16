// ============================================================
// SINGLE SOURCE OF TRUTH — replace these values with verified
// company information. Nothing here is invented; placeholders
// are marked clearly with square brackets.
// ============================================================

export const siteConfig = {
  companyName: "Zenith Point Properties Ltd",
  shortName: "Zenith Point",
  tagline: "We make your dream come home.",
  location: "Enugu, Nigeria",

  // Digits only, country code included, no symbols. e.g. "2348012345678"
  whatsappNumber: "[ZENITH POINT WHATSAPP NUMBER]",

  contact: {
    phone: "[Phone Placeholder]",
    email: "[Email Placeholder]",
    address: "[Office Address Placeholder], Enugu, Nigeria",
  },

  social: {
    instagram: "#",
    facebook: "#",
    linkedin: "#",
  },
} as const;

/** Builds a wa.me link with a context-aware, pre-filled message. */
export function buildWhatsAppLink(message?: string): string {
  const defaultMessage = "Hello Zenith Point, I'd like to learn more about your properties.";
  const text = encodeURIComponent(message ?? defaultMessage);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
}
