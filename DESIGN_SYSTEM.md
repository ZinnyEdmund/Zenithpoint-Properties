# Zenith Point — Design System

This document explains the design tokens and reusable primitives this codebase
now runs on. **Nothing here changes how the site looks.** Every value below was
reverse-engineered from what the codebase was already doing repeatedly — this
is a record of the existing design made consistent and reusable, not a new one.

If you're extending the site, this is the reference for "what already exists"
before reaching for a new arbitrary Tailwind value.

---

## 1. Colors

Defined in `tailwind.config.ts`. Unchanged from the original palette.

| Token | Value | Use |
|---|---|---|
| `zenith` | `#1237A6` | Accent only — primary buttons, links, active states. Never a background wash. |
| `secondary` | `#1D4ED8` | Hover state for the zenith accent. |
| `navy` | `#0B1F5E` | Large dark brand blocks (hero overlay, footer, a few full-bleed sections). |
| `ink` | `#0B1220` | Default body text color. |
| `muted` | `#5F6675` | Secondary/supporting text. |
| `offwhite` | `#F7F8FA` | Section background alternate to white. |
| `line` | `#E6E9EF` | The one border color used almost everywhere (borders on white/light backgrounds). On dark backgrounds, borders use `white/10`–`white/25` instead — this is a deliberate, existing pattern, not an inconsistency. |

**Principle:** blue is an accent, not a wash. If you're about to add a new
`bg-zenith` or `bg-navy` block, ask whether the page already has one nearby —
most sections should be white/off-white/ink.

---

## 2. Typography

Font families (unchanged): `font-sans` = Manrope (UI, body, nav, forms, buttons),
`font-serif` = DM Serif Display (headlines and editorial moments only — never
body copy, never buttons).

### The scale

All defined in `tailwind.config.ts` under `theme.extend.fontSize`. Each token
below merges 2–3 near-duplicate pixel values that had drifted apart by
accident (e.g. `13px` and `13.5px` used interchangeably for the same role).

| Token | Size | Role |
|---|---|---|
| `text-display` / `-md` / `-lg` | 40 / 56 / 88px | The homepage hero headline. Used nowhere else. |
| `text-hero-h1` / `-lg` | 34 / 52px | Full-bleed image hero page titles (currently: Project detail hero). |
| `text-h1` / `-lg` | 32 / 44px | Flat page-intro headings (About, Properties, Projects, Services, Contact, Property detail name, the "big statement" mid-page headings). |
| `text-h2` / `-lg` | 28 / 38px | Primary homepage section headings ("What We Do", "Featured Properties", etc.) |
| `text-h3` / `-lg` | 26 / 32px | Sub-section serif headings (card/detail-page group headers). |
| `text-h4` | 24px | Detail-page sub-section headers ("Overview", "Gallery", "Documentation"). |
| `text-h5` | 19px | List-item emphasis headings (active service name, form confirmation heading). |
| `text-h6` | 16px | Small **bold** sub-headings — card titles, sidebar box headings. Not for paragraphs. |
| `text-body` | 17px | Standard paragraph copy / section intro lead-ins. |
| `text-body-sm` | 15px | Narrative copy in tighter contexts; also the button label size. |
| `text-small` | 14px | Compact UI text: nav links, form labels, footer links. |
| `text-caption` | 13px | Secondary meta text: locations, small notes, the eyebrow label. |
| `text-label` | 12px | Uppercase micro-labels: quick-fact labels, badge text (md size). |
| `text-micro` | 11px | The smallest badge/pill text (sm size). |

**The h6-vs-body distinction matters.** Several places in the original code
used the same pixel value (16/17px) for both a bold card heading and a
regular-weight paragraph — these are different semantic roles even at the
same size. `text-h6` is always paired with `font-bold`; `text-body` is
regular weight. Don't reuse `text-h6` for paragraph text just because the
number is convenient.

### Accepted one-off exceptions

A few distinctive "moment" typography choices were deliberately **not**
folded into the scale, because doing so would have visibly changed them:

- **The brand-statement section** ("ZenithPoint is the right choice...") reuses
  `text-h1`/`text-h1-lg` for its first two breakpoints, then adds one genuine
  one-off `lg:text-[54px]` for its third, biggest breakpoint. This is the only
  three-breakpoint headline on the site.
- **The italic sub-line under it** (`text-[20px] sm:text-h3`) and the
  **testimonial quote** (`text-[20px] sm:text-h4`) both start from an
  intentionally distinct 20px base not shared by anything else.
- **The nav wordmark** (`text-[22px]`, in `Navbar.tsx`/`MobileMenu.tsx`) is a
  one-off tied to the logo, not a reusable text style.

If you need a genuinely new one-off size for a similarly singular moment,
that's fine — just don't reach for an existing token if the role doesn't
actually match, the way `text-h6` and `text-body` were being confused before.

---

## 3. Spacing

Two fractional steps were already in heavy, repeated use as raw arbitrary
values (`px-[18px]`, `py-[15px]`, etc.) scattered across a dozen files.
They're now real entries in `theme.extend.spacing`:

| Token | Value | Typical use |
|---|---|---|
| `4.5` (e.g. `px-4.5`, `mb-4.5`) | 18px | Card interior padding, badge offset from image edge. |
| `3.75` (e.g. `py-3.75`) | 15px | Standard button vertical padding (the `Button` primitive's `md` size). |

Everything else uses Tailwind's default spacing scale. **This is the fix for
the bug that motivated this whole cleanup:** `px-4.5` used to silently do
nothing because `4.5` wasn't a real Tailwind key — the padding was just
missing, with no error. It's now a real, catalogued value.

Content-width "measure" tokens (`theme.extend.maxWidth`):

| Token | Value | Use |
|---|---|---|
| `max-w-wrap` | 1280px | The page's outer content width (used via the `Container` component). |
| `max-w-measure-lg` | 640px | Section heading block width. |
| `max-w-measure` | 520px | Section description/paragraph width. |

A long tail of other one-off `max-w-[…]` values (480px, 720px, 820px, etc.)
remain as arbitrary values — they're genuinely contextual (this specific
paragraph, this specific card) rather than a repeated pattern, so tokenizing
them would have added config bloat without removing real duplication.

---

## 4. Border radius

`theme.extend.borderRadius` now defines:

| Token | Value | Use |
|---|---|---|
| `rounded-sm` | 3px | Buttons, pills, form inputs. |
| `rounded` (default) | 4px | Cards, images, standard containers — the most common radius on the site. |
| `rounded-lg` | 6px | Larger feature elements (the photo-frame treatment in "Development Story", modals). |
| `rounded-full` | — | Unchanged, Tailwind's built-in — pills and badges. |

These are exact renames of what `rounded-[3px]` / `rounded-[4px]` /
`rounded-[6px]` already meant — no visual change, just named instead of
repeated as brackets 70+ times.

---

## 5. Borders

No token changes needed here — the existing pattern was already consistent
and is just documented, not altered:

- **On light backgrounds:** `border-line` is the default and covers the vast
  majority of borders on the site.
- **On dark backgrounds:** `border-white/10` through `border-white/25`
  (opacity varies slightly by context — hairline dividers use a lower
  opacity than badge outlines).
- **Active/interactive states:** `border-zenith` (hover) or `border-navy`
  (selected pill/tab).
- **Width:** almost always the default 1px (`border`). A couple of
  intentional exceptions carry more visual weight on purpose: `border-2` on
  the active gallery thumbnail, `border-4` on the photo-frame treatment in
  "Development Story."

---

## 6. Reusable primitives

All in `src/components/ui/` unless noted.

### `Container`
The page's single content-width wrapper (`mx-auto max-w-wrap px-6 md:px-10
lg:px-14`). This exact string was hand-copied into ~28 places; now it's one
component. Accepts `className` for any extra layout classes a specific
section needs (flex direction, alignment, etc.) on top of the base width.

### `SectionLabel`
The small uppercase eyebrow that opens most sections ("What We Do",
"Featured Properties"...). Takes `tone="dark"` for use on navy/image
backgrounds, defaults to the standard muted tone otherwise.

*Not* used for the hero's location tag (`Zenith Point Properties · Enugu,
Nigeria`) or the About hero's tag — those use a distinct wider letter-spacing
(`tracking-[0.12em]` vs `0.08em`) and are a different, singular pattern.

### `Badge`
The small uppercase pill for status/featured/category labels. Five tones:

- `light` — white background, navy text (default)
- `navy` — solid navy background, white text
- `zenith` — solid brand-blue background, white text
- `glass-navy` — translucent navy over an image, white text
- `glass-light` — translucent white over an image, white text
- `custom` — no built-in color classes; pass your own via `className` (used
  when colors come from a lookup table, like property status)

Two sizes: `sm` (11px text, tighter padding — property/project cards) and
`md` (12px text, more padding — hero/detail-page badges).

### `Button`
Polymorphic — renders as whichever element fits the job:

- `<Button to="/properties">` → renders a React Router `Link` (internal navigation)
- `<Button href={waLink} target="_blank">` → renders a plain `<a>` (external links, WhatsApp, mailto, tel)
- `<Button type="submit">` → renders a native `<button>` (forms)

Three variants (`primary` / `ghost` / `outline`) and two sizes (`md` default,
`sm` for tighter contexts like inline service CTAs). Blue (`primary`) is
reserved for the one action that matters most in a given section — most
buttons on the site are `outline` or `ghost` on purpose.

Fixing this consolidation surfaced a real bug: three internal links (on the
homepage) were using `href="/properties"` instead of React Router's `to`,
which meant clicking them triggered a full page reload instead of
client-side navigation. Now fixed as part of routing them through `Button`.

### `SampleTag`
Unchanged from before this refactor — the small "Sample content" label used
above placeholder listings/testimonials/copy.

### `Reveal`
Unchanged — the scroll-triggered fade-and-rise wrapper used for section
entrances.

### Icons — `src/components/icons/`
`WhatsAppIcon` is the only extracted icon, because it's the only one that was
genuinely duplicated (it appeared identically in `WhatsAppButton.tsx` and
`DevelopmentStory.tsx`). The checkmark icon (process checklist), play icon
(video cards), and the four "Why Zenith Point" icons are each used exactly
once and were deliberately left inline — extracting a component for
something used once adds an indirection without removing any duplication.
If a second use case for any of them comes up, extract it then.

### `src/lib/statusColors.ts`
Single source of truth for how a `PropertyStatus` maps to a color. Before
this, the mapping was defined twice — once for the card badge
(`PropertyCard`), once for the plain-text price/status pairing
(`PropertyDetail`) — with nothing guaranteeing the two stayed in sync.
Both now import from here.

---

## 7. What deliberately stayed as one-off arbitrary values

Per the instruction not to force everything into the system: form control
padding (`px-3.5 py-3` on every `<input>`/`<select>`/`<textarea>`) is already
internally consistent across `PropertySearch` and `Contact`, but wasn't
turned into its own component — there's exactly one visual treatment for form
controls and it's already applied uniformly, so a wrapper component would add
a layer without solving a real inconsistency problem.

Similarly, the Navbar's own CTA button and the floating WhatsApp card in
"Development Story" have their own bespoke sizing tied tightly to their
specific context (nav bar height constraints; an icon+two-line-text layout
that doesn't fit the plain-text `Button` primitive) — both are intentional
exceptions, not oversights.

---

## 8. General principle for future work

Before adding a new arbitrary value (`text-[17.5px]`, `p-[22px]`, etc.), check:

1. Does an existing token already cover this role? (See the tables above.)
2. Is this genuinely a new, singular "moment" (like the brand-statement
   headline), or is it actually the fourth or fifth instance of a pattern
   that should be a token?
3. If it's the latter, add it to `tailwind.config.ts` with a comment
   explaining what it consolidates — the same way every token above is
   documented — rather than leaving it as a bracket value for the next person
   to accidentally duplicate.
