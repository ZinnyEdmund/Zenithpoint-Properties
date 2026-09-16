import type { Config } from "tailwindcss";

// ZENITH POINT DESIGN SYSTEM
// This file is the single source of truth for the project's design tokens.
// Every value below was reverse-engineered from what the codebase was
// ALREADY using repeatedly — nothing here changes the visual design.
// See DESIGN_SYSTEM.md for the full rationale behind each token.
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Blue is an accent, not a wash — reserved for CTAs, links, and
        // active states. Ink/navy/off-white/gray carry the rest of the page.
        zenith: "#1237A6", // accent only: buttons, links, active states
        navy: "#0B1F5E", // used sparingly for large dark brand blocks
        secondary: "#1D4ED8", // hover state for the zenith accent
        ink: "#0B1220",
        muted: "#5F6675",
        offwhite: "#F7F8FA",
        line: "#E6E9EF",
      },
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
        serif: ["'DM Serif Display'", "serif"],
      },
      maxWidth: {
        wrap: "1280px", // the page's outer content width
        measure: "520px", // standard section description / paragraph width
        "measure-lg": "640px", // standard section heading block width
      },
      // Two fractional spacing steps that were already in heavy, repeated
      // use as raw arbitrary values (px-[18px], py-[15px], etc.) — adding
      // them here makes px-4.5 / py-3.75 real, catalogued utilities instead
      // of one-off brackets that are easy to mistype (see DESIGN_SYSTEM.md).
      spacing: {
        "3.75": "15px", // standard button vertical padding
        "4.5": "18px", // card padding / badge offset
      },
      borderRadius: {
        sm: "3px", // buttons, pills, form inputs
        DEFAULT: "4px", // cards, images, standard containers
        lg: "6px", // larger feature elements (photo frames, modals)
      },
      // Semantic type scale, consolidated from the sizes already used
      // throughout the project. Each step below merges 2-3 near-duplicate
      // pixel values that had drifted apart by accident (e.g. 13px/13.5px
      // used interchangeably) into one intentional value.
      fontSize: {
        micro: "11px", // smallest badge/pill text
        label: "12px", // uppercase micro-labels, quick-fact labels
        caption: "13px", // secondary meta text (locations, small notes)
        small: "14px", // compact UI text: nav links, form labels, footer
        "body-sm": "15px", // narrative copy in tighter contexts, button labels
        body: "17px", // standard paragraph copy / section intro lead-ins
        h6: "16px", // small bold sub-headings: card titles, sidebar headers
        h5: "19px", // list-item emphasis headings (active state, confirmations)
        h4: "24px", // detail-page sub-section headers
        h3: "26px",
        "h3-lg": "32px", // card/sub-section serif headings
        h2: "28px",
        "h2-lg": "38px", // primary homepage section headings
        h1: "32px",
        "h1-lg": "44px", // flat page-intro headings
        "hero-h1": "34px",
        "hero-h1-lg": "52px", // full-bleed image hero page titles
        display: "40px",
        "display-md": "56px",
        "display-lg": "88px", // homepage hero only
      },
    },
  },
  plugins: [],
} satisfies Config;
