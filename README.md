# Zenith Point Properties — Website

React + TypeScript + Tailwind CSS concept build for Zenith Point Properties Ltd
(Enugu, Nigeria).

## Run it

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

To produce a production build:

```bash
npm run build
npm run preview
```

## What's built

Every page in the site map is now real — not stubs:

| Route | Page |
|---|---|
| `/` | Homepage — hero, discovery search, services, featured project, featured properties, why-us, brand moment, process, walkthroughs, about, testimonials, final CTA |
| `/properties` | Full property listing grid |
| `/properties/:slug` | Property detail — gallery, quick facts, overview, why this property, documentation, location, enquiry sidebar, similar properties |
| `/projects` | Project listing |
| `/projects/:slug` | Project detail — hero, vision, gallery, progress, key facts, location, enquiry, related projects |
| `/services` | Editorial service-by-service breakdown |
| `/about` | Story, mission/vision, values, people, CTA |
| `/contact` | Enquiry form + phone/email/WhatsApp/office info |
| `*` | 404 page |

Every section is populated with **realistic sample content** (Nigerian
locations, ₦ pricing, believable property, project and testimonial copy)
so the design can be judged properly instead of looking like an empty
skeleton. Anything that isn't real Zenith Point information carries a
small "Sample content" tag in the UI (see `src/components/ui/SampleTag.tsx`)
so it's always obvious what to replace. Nothing about Zenith Point itself
(years of experience, numbers sold, awards) is fabricated or claimed.

The floating WhatsApp button is **context-aware**: it reads the current
route and swaps in the property or project name automatically on detail
pages, falling back to the general homepage message elsewhere — all
routed through the single `buildWhatsAppLink()` helper in `src/config/site.ts`.

### Navbar

Fixed and always legible in both states — no translucent middle-ground
that loses contrast against page content:
- **Top of page:** solid navy bar (`bg-navy/95`), matching the hero.
- **Scrolled:** solid white with a real shadow and hairline border.
- Active route gets a colored underline and a distinct text color in both states.

## Before this goes to the client

1. **Logo** — no logo file was supplied, so the nav and footer use a text
   wordmark (`Zenith` + `Point` in two weights). Replace it with the real
   mark in `src/components/layout/Navbar.tsx`,
   `src/components/layout/MobileMenu.tsx`, and `src/components/layout/Footer.tsx`.
2. **Content** — every placeholder is wrapped in `[Square Brackets]` and
   lives in `src/data/*.ts` or `src/config/site.ts`. Nothing has been
   invented: no fake properties, prices, projects, team members, or
   testimonials. Replace the data files with verified content and the UI
   updates everywhere automatically.
3. **WhatsApp number** — set once in `src/config/site.ts`
   (`siteConfig.whatsappNumber`), used everywhere via `buildWhatsAppLink()`.
4. **Photography** — all imagery is temporary stock photography (Unsplash)
   standing in for real Zenith Point property, site and team photos. Swap
   `images` arrays in `src/data/*.ts` and inline `src` props in the home
   components.

## Design system

See [`DESIGN_SYSTEM.md`](./DESIGN_SYSTEM.md) for the full token reference —
colors, the typography scale, spacing, radius, and every reusable UI
primitive (`Button`, `Badge`, `Container`, `SectionLabel`, etc.). Read that
before adding a new arbitrary Tailwind value.

## Project structure

```
src/
  config/site.ts          — single source of truth: WhatsApp, contact info, socials
  types/index.ts           — shared TypeScript types (Property, Project, Service, Testimonial, ...)
  data/                     — structured sample content (swap for real data / Supabase later)
  components/
    layout/                 — Navbar, MobileMenu, Footer, WhatsAppButton (context-aware)
    home/                   — every homepage section as its own component
    property/               — PropertyGallery (used on property detail)
    project/                — ProjectCard (used on projects list + detail)
    ui/                      — shared primitives (Button, Reveal, SampleTag)
  pages/
    Home.tsx, Properties.tsx, PropertyDetail.tsx,
    Projects.tsx, ProjectDetail.tsx, Services.tsx,
    About.tsx, Contact.tsx, NotFound.tsx
  App.tsx                    — routing
  main.tsx                   — app entry
```

## Color system

Blue (`zenith` / `secondary`) is used deliberately and sparingly — primary
buttons, links, and active/interactive states only. The dominant tones are
`navy` (large brand blocks: hero overlay, footer, two feature sections),
`ink`, `muted`, `offwhite`, and `white`. See `tailwind.config.ts` for the
full token list and the comment explaining the intent.

## Data architecture

`Property` and `Project` types in `src/types/index.ts` are shaped to make
a future Supabase integration straightforward — swap the static arrays in
`src/data/` for fetched rows without touching the components that render
them.
