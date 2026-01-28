# Marketing Component Audit Report

**Date:** 2026-01-28
**Auditor:** Claude Code
**Scope:** All components in `/saltwyk-design/components/` + marketing needs assessment

---

## Executive Summary

The Saltwyk design system contains **18 comprehensive core components** with excellent documentation, complete light/dark mode support, and consistent API patterns. These components were designed primarily for **product UI** (merchant dashboards, shopper apps) and use appropriately scaled typography (14-16px body, 32-48pt headlines) and utilitarian sizing.

For marketing use under the **Galaxy Opal** design language, significant gaps exist. Marketing requires larger typography scales (up to 96pt headlines), more dramatic spacing, expressive gradient treatments, and several component patterns that don't exist in the product system (hero sections, testimonial cards, pricing displays, stats bars).

The marketing components catalog (`/marketing/components/components.html`) defines **35+ marketing-specific components** across 9 categories, but these are currently **documented as patterns** rather than implemented as reusable component code. The showcase (`/marketing/showcase.html`) demonstrates 20+ compositions using these patterns.

**Key findings:**
- **18** core components exist, all complete and well-documented
- **5** components can work as-is for marketing with minimal changes
- **6** components need marketing-specific variants (size, scale, styling)
- **7** components are product-specific and not applicable to marketing
- **24+** marketing components are missing entirely or only exist as pattern documentation

---

## Component Inventory

### Buttons

**Status:** EXISTS
**Location:** `/saltwyk-design/components/buttons/index.html`
**Current state:** Complete 5-tier hierarchy (Primary, Secondary, Tertiary, Ghost, Destructive) with 3 sizes, icon support, loading states, light/dark modes

| Size | Padding | Font Size | Approx Height |
|------|---------|-----------|---------------|
| Small | 6px 12px | 13px | ~32px |
| Medium | 10px 20px | 14px | ~40px |
| Large | 14px 28px | 16px | ~48px |

**Marketing assessment:**
- Works as-is: **Partially** - Core hierarchy and styling is excellent
- Needs variant: **Yes** - Marketing needs 56px height CTAs with 18px font
- Gap analysis: Missing XL/marketing size, missing outline-on-dark variant optimized for hero sections

**Recommendation:** Shared component with marketing size variant (`btn-xl` or `btn-marketing`)
**Priority:** P0 - Blocking

**Notes:** Add `btn-xl` size (padding: 16px 32px, font-size: 18px, min-height: 56px). Consider `btn-secondary-marketing` for white outline on dark backgrounds.

---

### Cards

**Status:** EXISTS
**Location:** `/saltwyk-design/components/cards/index.html`
**Current state:** 9 variants (default, elevated, subtle, outlined, ghost + dark versions), 4 padding levels, thread accent support

**Marketing assessment:**
- Works as-is: **Yes** for basic structure
- Needs variant: **Yes** - Thread on top edge pattern needs formalization for marketing use
- Gap analysis: Marketing cards need larger padding, thread-spectrum accent, specific shadow treatment

**Recommendation:** Use existing card base with marketing-specific utility classes for scale
**Priority:** P1 - High

**Notes:** The `card-elevated` variant with `thread-spectrum` top accent covers 80% of marketing card needs. May need `card-marketing` preset with larger padding (p-8 to p-12).

---

### Inputs

**Status:** EXISTS
**Location:** `/saltwyk-design/components/inputs/index.html`
**Current state:** Complete with text, email, password, number, textarea. 3 sizes (32px, 40px, 48px). Checkbox, radio, toggle. Full state coverage.

**Marketing assessment:**
- Works as-is: **Partially** - Form logic and states are solid
- Needs variant: **Yes** - Marketing needs larger inputs for email capture forms
- Gap analysis: Current max height is 48px; marketing email capture forms typically use 56px+ inputs

**Recommendation:** Shared component with XL size variant
**Priority:** P1 - High

**Notes:** Add `input-xl` size (56px height, 18px font) for newsletter signup and email capture forms. Current validation states and focus rings work well.

---

### Navigation

**Status:** EXISTS
**Location:** `/saltwyk-design/components/navigation/`
**Current state:** 4 types - Sidebar, Top Nav, Breadcrumbs, Bottom Nav. Designed for product UI dashboards.

**Marketing assessment:**
- Works as-is: **No** - Product nav patterns don't fit marketing pages
- Needs variant: **No** - Requires separate marketing implementation
- Gap analysis: Missing marketing navbar (horizontal with CTAs), sticky header behavior, mobile drawer, marketing footer

**Recommendation:** Separate marketing components
**Priority:** P0 - Blocking

**Notes:** Marketing navigation has fundamentally different requirements: logo + horizontal links + CTA button layout, sticky behavior with scroll effects, mobile hamburger menu with full-screen drawer. The product topnav is dashboard-oriented with active tab indicators - not suitable for marketing.

---

### Badges

**Status:** EXISTS
**Location:** `/saltwyk-design/components/badges/index.html`
**Current state:** 15+ variants including status, outline, subtle, dark, count badges. 3 sizes.

**Marketing assessment:**
- Works as-is: **Yes** for informational badges
- Needs variant: **Possibly** - "Featured" or "Recommended" badges for pricing cards
- Gap analysis: May need larger badge size for marketing callouts

**Recommendation:** Use as-is with potential size variant
**Priority:** P2 - Medium

**Notes:** Works well for pricing card "Recommended" badges. Consider adding `badge-lg` for marketing emphasis.

---

### Accordions

**Status:** EXISTS
**Location:** `/saltwyk-design/components/accordion/index.html`
**Current state:** 3 variants (basic, bordered, warning). Chevron animation, nested support.

**Marketing assessment:**
- Works as-is: **Mostly** - Good for FAQ sections
- Needs variant: **Yes** - Marketing FAQs need larger typography scale
- Gap analysis: Current font sizes are product-scale; marketing needs 18-20px question text, 16px answer text

**Recommendation:** Shared component with marketing typography preset
**Priority:** P1 - High

**Notes:** Core interaction works; add `accordion-marketing` class that overrides typography scale. Used heavily in FAQ and pricing pages.

---

### Modals

**Status:** EXISTS
**Location:** `/saltwyk-design/components/modals/index.html`
**Current state:** 5 sizes (400-1000px), light/dark, complete structure (header, body, footer).

**Marketing assessment:**
- Works as-is: **Yes** - Works for contact forms, demo requests
- Needs variant: **No**
- Gap analysis: None significant

**Recommendation:** Use as-is
**Priority:** P3 - Low

**Notes:** Large/XL modal sizes work well for marketing contact forms and video embeds.

---

### Progress

**Status:** EXISTS
**Location:** `/saltwyk-design/components/progress/index.html`
**Current state:** Linear bars, circular progress, spinners, skeleton loaders. Multiple sizes and colors.

**Marketing assessment:**
- Works as-is: **Yes** for loading states
- Needs variant: **No**
- Gap analysis: None

**Recommendation:** Use as-is
**Priority:** P3 - Low

**Notes:** Spinners useful for form submissions. Not a core marketing need.

---

### Tooltips

**Status:** EXISTS
**Location:** `/saltwyk-design/components/tooltips/index.html`
**Current state:** Single/multi-line, all placements, light/dark.

**Marketing assessment:**
- Works as-is: **Yes**
- Needs variant: **No**
- Gap analysis: None

**Recommendation:** Use as-is
**Priority:** P3 - Low

---

### Toasts

**Status:** EXISTS
**Location:** `/saltwyk-design/components/toasts/index.html`
**Current state:** 5 semantic types, action support, dismiss button, light/dark.

**Marketing assessment:**
- Works as-is: **Yes** for form feedback
- Needs variant: **No**
- Gap analysis: None

**Recommendation:** Use as-is
**Priority:** P2 - Medium

**Notes:** Used for newsletter signup success/error feedback.

---

### Popovers

**Status:** EXISTS
**Location:** `/saltwyk-design/components/popovers/index.html`
**Current state:** Header, body, footer structure. All placements.

**Marketing assessment:**
- Works as-is: **Yes** - Potential use for feature explanations
- Needs variant: **No**
- Gap analysis: None

**Recommendation:** Use as-is
**Priority:** P3 - Low

---

### Tabs

**Status:** EXISTS
**Location:** `/saltwyk-design/components/tabs/index.html`
**Current state:** Underline and pill variants, light/dark.

**Marketing assessment:**
- Works as-is: **Yes** - For feature comparison, pricing tiers
- Needs variant: **Possibly** - Marketing may need larger variant
- Gap analysis: Minor - current sizing is adequate

**Recommendation:** Use as-is
**Priority:** P2 - Medium

---

### Dropdowns

**Status:** EXISTS
**Location:** `/saltwyk-design/components/dropdowns/`
**Current state:** 5 types (select, multiselect, combobox, action menu).

**Marketing assessment:**
- Works as-is: **Yes** for contact forms
- Needs variant: **Possibly** - Larger size for marketing forms
- Gap analysis: Minor

**Recommendation:** Use as-is, potentially add size variant
**Priority:** P2 - Medium

---

### Tables

**Status:** EXISTS
**Location:** `/saltwyk-design/components/tables/`
**Current state:** Comprehensive - base variants, interactive, responsive, states.

**Marketing assessment:**
- Works as-is: **N/A** - Not typical for marketing pages
- Needs variant: **No**
- Gap analysis: N/A

**Recommendation:** Not applicable to marketing
**Priority:** N/A

**Notes:** Tables are product-oriented (data display). Marketing uses comparison grids (see Feature Comparison component) instead.

---

### Avatars

**Status:** EXISTS
**Location:** `/saltwyk-design/components/avatars/index.html`
**Current state:** 4 types, 5 sizes, status indicators, stacking.

**Marketing assessment:**
- Works as-is: **Yes** for testimonials
- Needs variant: **Possibly** - Larger avatar for featured testimonials
- Gap analysis: Current XL may be sufficient

**Recommendation:** Use as-is
**Priority:** P2 - Medium

---

### Context-Switcher

**Status:** EXISTS
**Location:** `/saltwyk-design/components/context-switcher/index.html`
**Current state:** Product-specific (switch between merchant/shopper contexts).

**Marketing assessment:**
- Works as-is: **N/A** - Product-specific component
- Needs variant: **No**
- Gap analysis: N/A

**Recommendation:** Not applicable to marketing
**Priority:** N/A

---

### Logos

**Status:** EXISTS
**Location:** `/saltwyk-design/components/logos/index.html`
**Current state:** Full lockup, logomark, 4 color variants.

**Marketing assessment:**
- Works as-is: **Yes**
- Needs variant: **No**
- Gap analysis: None

**Recommendation:** Use as-is
**Priority:** P0 - Blocking (required for nav, footer)

---

### Utilities (Countdown Timer)

**Status:** EXISTS
**Location:** `/saltwyk-design/components/utilities/countdown-timer.html`
**Current state:** Button with countdown state.

**Marketing assessment:**
- Works as-is: **Yes** - Useful for limited-time offers
- Needs variant: **No**
- Gap analysis: None

**Recommendation:** Use as-is
**Priority:** P3 - Low

---

## Missing Components

### Component: Hero Sections

**Description:** Full-width hero sections with dramatic typography, thread accents, and CTA buttons
**Use cases:** Homepage, landing pages, feature pages - always the first section after navigation
**Priority:** P0 - Blocking
**Dependencies:** Buttons (marketing variant), Thread gradients
**Design considerations:**
- HeroDark: Intaglio-900 background, white text, 96pt headlines, sepia illustration frame
- HeroLight: Ledger background, white card with thread top, 72pt headlines
- HeroSplit: 50/50 content + illustration layout
- All heroes: Thread line at section top, Serial label, 56px CTAs

**Patterns documented in:** `/marketing/showcase.html` Compositions 1, 2, 10

---

### Component: Marketing Navigation (NavBar)

**Description:** Horizontal navigation bar with logo, nav links, and CTA button
**Use cases:** All marketing pages - sticky header at top
**Priority:** P0 - Blocking
**Dependencies:** Logos, Buttons (marketing variant)
**Design considerations:**
- Light variant (white bg) for light pages
- Dark variant (intaglio-900 bg) matching hero
- Sticky behavior with scroll shadow
- Mobile: Hamburger menu + full-screen drawer
- CTA button in nav (emerald primary or white outline on dark)

---

### Component: Mobile Navigation Drawer

**Description:** Full-screen mobile navigation drawer with slide animation
**Use cases:** All marketing pages on mobile (<1024px)
**Priority:** P0 - Blocking
**Dependencies:** Marketing NavBar
**Design considerations:**
- Full viewport height
- Stacked nav links (24px+ tap targets)
- Close button
- CTA buttons at bottom
- Background blur on content behind

---

### Component: Marketing Footer

**Description:** Multi-column footer with nav links, logo, legal info
**Use cases:** All marketing pages - bottom of page
**Priority:** P0 - Blocking
**Dependencies:** Logos
**Design considerations:**
- 3 or 4-column layout for link sections
- Thread line at top of footer
- Logo + tagline
- Serial labels for sections
- Bottom bar: Copyright, email, social links
- Dark (intaglio-900) or light variants

---

### Component: Feature Grid

**Description:** 2 or 3-column grid of feature cards with icons
**Use cases:** "How it works" sections, feature highlights
**Priority:** P1 - High
**Dependencies:** Cards (marketing variant)
**Design considerations:**
- 3-column max (wider breaks scanability)
- Centered icon + headline + description per card
- White cards on ledger background
- 56pt section header, 24pt card headlines
- Optional: Thread accent on card top

**Patterns documented in:** `/marketing/showcase.html` Composition 3

---

### Component: Feature With Illustration

**Description:** 50/50 split with content on one side, illustration on other
**Use cases:** Alternating content sections, "How it works" with steps
**Priority:** P1 - High
**Dependencies:** Illustration Frame
**Design considerations:**
- Content: Serial label, 48pt headline, body text, optional numbered steps
- Illustration: Sepia frame, 400-500px height
- Alternates left/right for visual rhythm
- Thread accent on illustration frame optional

**Patterns documented in:** `/marketing/showcase.html` Compositions 7, 15, 16

---

### Component: Stats Bar / Stats Display

**Description:** Row of large statistics with labels
**Use cases:** Social proof sections, metrics display
**Priority:** P1 - High
**Dependencies:** None
**Design considerations:**
- 64pt Fraunces numbers with gradient-text-emerald
- 14px Inter labels below
- 4-column typical layout
- Subtle background gradient optional
- tabular-nums font variant for alignment

**Patterns documented in:** `/marketing/showcase.html` Composition 4

---

### Component: Testimonial Card

**Description:** Customer quote with attribution and optional avatar
**Use cases:** Social proof, customer stories
**Priority:** P1 - High
**Dependencies:** Avatars
**Design considerations:**
- 28pt Fraunces italic for quote text
- Large quote mark decoration (72pt, emerald, 20% opacity)
- Attribution: Name, role/context, thread accent below
- White card on ledger background
- Avatar: 14px width, gradient placeholder

**Patterns documented in:** `/marketing/showcase.html` Composition 6

---

### Component: Pricing Card

**Description:** Plan pricing display with features list and CTA
**Use cases:** Pricing page, plan comparison
**Priority:** P1 - High
**Dependencies:** Buttons (marketing variant), Badges
**Design considerations:**
- 64pt Fraunces for price number
- Serial label for plan name
- Feature list with checkmarks
- "Recommended" badge variant
- CTA button at bottom
- Optional thread accent for featured plan

---

### Component: CTA Section

**Description:** Full-width conversion section with gradient background
**Use cases:** Mid-page CTA, final page CTA before footer
**Priority:** P1 - High
**Dependencies:** Buttons (marketing variant), Thread gradients
**Design considerations:**
- Dark variants: 20% flame gradient overlay on intaglio, solid emerald, 40% dark overlay on vibrant
- 64pt headline, 20px subhead
- Centered layout
- Dual CTAs: Primary (white bg) + Secondary (white outline)
- Use sparingly: 1-2 per page max

**Patterns documented in:** `/marketing/showcase.html` Compositions 5, 12, 13, 14

---

### Component: Email Capture / Newsletter Signup

**Description:** Email input + submit button inline form
**Use cases:** Newsletter signup, early access signup
**Priority:** P1 - High
**Dependencies:** Inputs (marketing variant), Buttons (marketing variant)
**Design considerations:**
- Inline layout: Input + button side by side
- Stacked layout for mobile
- 56px height for both elements
- Success/error state handling
- Privacy text below (12px, warm-500)

---

### Component: Illustration Frame

**Description:** Container for sepia intaglio-style illustrations
**Use cases:** Hero sections, feature sections
**Priority:** P1 - High
**Dependencies:** None
**Design considerations:**
- Sepia gradient background (sepia-50 to sepia-100)
- Optional: 3px sepia-300 border
- Optional: Thread accent on left edge
- Placeholder text for design stage
- Aspect ratios: Hero (16:9), Feature (4:3), Accent (1:1)

**Patterns documented in:** `/marketing/showcase.html` Compositions 15, 16

---

### Component: Logo Cloud

**Description:** Grid of partner/customer logos
**Use cases:** Trust building, "Trusted by" sections
**Priority:** P2 - Medium
**Dependencies:** None
**Design considerations:**
- 4-6 logos in row
- Grayscale filter (reduced opacity)
- Hover: Full color
- "Trusted by" serial label above

---

### Component: Pull Quote

**Description:** Large inline quote with thread accent
**Use cases:** Editorial content, blog posts, long-form pages
**Priority:** P2 - Medium
**Dependencies:** Thread gradients
**Design considerations:**
- 32-40pt Fraunces italic
- Thread accent (20px width, vertical)
- Used inline in prose content

---

### Component: Case Study Card

**Description:** Card linking to customer case study
**Use cases:** Case studies grid, customer stories
**Priority:** P2 - Medium
**Dependencies:** Cards (marketing variant)
**Design considerations:**
- Company logo
- Quote snippet
- Results metrics (optional)
- "Read case study" link

---

### Component: Blog Post Card

**Description:** Card for blog post preview
**Use cases:** Blog listing, "Latest posts" section
**Priority:** P2 - Medium
**Dependencies:** Cards (marketing variant), Badges
**Design considerations:**
- Featured image placeholder
- Category badge
- Title (24pt)
- Date/author
- Excerpt

---

### Component: Comparison Table / Feature Comparison

**Description:** Multi-column feature comparison grid
**Use cases:** Pricing page, product comparison
**Priority:** P2 - Medium
**Dependencies:** None
**Design considerations:**
- Sticky column headers
- Checkmark/X icons for features
- Row striping
- "Recommended" column highlight

---

### Component: FAQ Accordion

**Description:** Marketing-styled accordion for FAQs
**Use cases:** FAQ page, pricing FAQ section
**Priority:** P2 - Medium
**Dependencies:** Accordion (marketing variant)
**Design considerations:**
- 20px question text (medium weight)
- 16px answer text (regular weight, warm-600)
- Plus/minus icons
- Optional category grouping

---

### Component: Contact/Demo Form

**Description:** Multi-field contact or demo request form
**Use cases:** Contact page, demo request modal
**Priority:** P2 - Medium
**Dependencies:** Inputs (marketing variant), Buttons (marketing variant), Dropdowns
**Design considerations:**
- Name, email, company, message fields
- Department dropdown (optional)
- Submit button
- Success state
- Error handling

---

### Component: Video Embed

**Description:** Responsive video player container
**Use cases:** Product demos, explainer videos
**Priority:** P2 - Medium
**Dependencies:** None
**Design considerations:**
- 16:9 aspect ratio
- Play button overlay
- Sepia frame styling option
- Caption support

---

### Component: Team Member Card

**Description:** Card for team/about page
**Use cases:** About page, team section
**Priority:** P3 - Low
**Dependencies:** Avatars, Cards
**Design considerations:**
- Large avatar/photo
- Name, role
- Bio (optional)
- Social links

---

### Component: Resource Card

**Description:** Card for downloadable resources
**Use cases:** Resources page, documentation
**Priority:** P3 - Low
**Dependencies:** Cards (marketing variant), Badges
**Design considerations:**
- Resource type badge (PDF, Video, Guide)
- Title
- Description
- Download/view CTA

---

### Component: Code Block

**Description:** Syntax-highlighted code display
**Use cases:** Documentation, API reference
**Priority:** P3 - Low (docs-specific)
**Dependencies:** None
**Design considerations:**
- Intaglio-900 background
- Syntax highlighting (emerald for code)
- Copy button
- Language label

---

### Component: API Endpoint Card

**Description:** Card showing API endpoint details
**Use cases:** API documentation
**Priority:** P3 - Low (docs-specific)
**Dependencies:** Code Block, Badges
**Design considerations:**
- Method badge (GET, POST, etc.)
- Endpoint path
- Description
- Parameters table

---

### Component: Callout

**Description:** Information/warning callout box
**Use cases:** Documentation, important notes
**Priority:** P3 - Low
**Dependencies:** None
**Design considerations:**
- Info variant (indigo accent)
- Warning variant (orange accent)
- Icon + text
- Background tint

---

## Variant Strategy Recommendations

### Shared Components (Single implementation, style variants)

| Component | Variant Name | Changes from Base |
|-----------|--------------|-------------------|
| Buttons | `btn-xl` / `btn-marketing` | 56px height, 18px font, 16px 32px padding |
| Buttons | `btn-outline-white` | White border/text for dark backgrounds |
| Inputs | `input-xl` | 56px height, 18px font |
| Cards | `card-marketing` | p-8 to p-12 padding, thread-spectrum accent |
| Accordions | `accordion-marketing` | 20px question, 16px answer text |
| Badges | `badge-lg` | Larger for marketing callouts |

**Rationale:** These components have identical structure and behavior to product versions. Only sizing/styling differs. Maintaining a single component with variant classes reduces duplication and ensures consistency. The existing class-based system (e.g., `btn-sm`, `btn-lg`) naturally extends to marketing variants.

### Separate Marketing Components

| Component | Rationale |
|-----------|-----------|
| Marketing NavBar | Fundamentally different layout (horizontal + CTA) vs product sidebar/dashboard nav |
| Mobile Nav Drawer | Marketing-specific interaction pattern |
| Marketing Footer | Different structure than product footers |
| Hero Sections | Marketing-specific composition; no product equivalent |
| Feature Grid | Marketing layout pattern; not used in product |
| Stats Bar | Marketing-specific typography scale and layout |
| Testimonial Card | Marketing composition with specific styling |
| Pricing Card | Marketing-specific layout and emphasis patterns |
| CTA Section | Marketing-specific gradient treatments and layout |
| Email Capture | Marketing-specific inline form pattern |
| Illustration Frame | Marketing-only (sepia intaglio style) |

**Rationale:** These components either don't exist in the product system or have fundamentally different structures, layouts, or purposes. Trying to share code would create complexity without benefit.

---

## Priority Action Plan

### Phase 1: P0 Components (Blocking)

Required before any marketing page can ship:

1. **Buttons - Add XL variant** - Add marketing size to existing component
2. **Marketing NavBar** - Create new (light/dark variants)
3. **Mobile Nav Drawer** - Create new
4. **Marketing Footer** - Create new (3/4-column variants)
5. **Hero Sections** - Create new (HeroDark, HeroLight, HeroSplit)
6. **Logos** - Use as-is (already complete)

### Phase 2: P1 Components (High priority)

Required for complete marketing page functionality:

1. **Inputs - Add XL variant** - For email capture forms
2. **Cards - Add marketing preset** - Larger padding, thread accent
3. **Feature Grid** - Create new
4. **Feature With Illustration** - Create new
5. **Stats Bar** - Create new
6. **Testimonial Card** - Create new
7. **Pricing Card** - Create new
8. **CTA Section** - Create new (3 gradient variants)
9. **Email Capture Form** - Create new
10. **Illustration Frame** - Create new (3 variants)
11. **Accordions - Add marketing variant** - For FAQ sections

### Phase 3: P2 Components (Medium priority)

Enhances marketing pages:

1. **Logo Cloud** - Create new
2. **Pull Quote** - Create new
3. **Case Study Card** - Create new
4. **Blog Post Card** - Create new
5. **Comparison Table** - Create new
6. **FAQ Accordion** - Extend from base accordion
7. **Contact/Demo Form** - Create new
8. **Video Embed** - Create new
9. **Toasts** - Use as-is
10. **Tabs** - Use as-is with optional size variant
11. **Dropdowns** - Use as-is with optional size variant
12. **Badges** - Add large variant
13. **Avatars** - Use as-is

### Phase 4: P3 Components (Low priority)

Edge cases and documentation-specific:

1. **Team Member Card** - Create new
2. **Resource Card** - Create new
3. **Code Block** - Create new (docs)
4. **API Endpoint Card** - Create new (docs)
5. **Callout** - Create new (docs)
6. **Modals** - Use as-is
7. **Tooltips** - Use as-is
8. **Progress** - Use as-is
9. **Popovers** - Use as-is
10. **Countdown Timer** - Use as-is

---

## Design System Implications

### File Structure Recommendations

```
/saltwyk-design/
├── components/              # Core product components (existing)
│   ├── buttons/
│   ├── cards/
│   ├── inputs/
│   └── ...
├── marketing/
│   ├── components/          # Marketing-specific components
│   │   ├── navigation/
│   │   │   ├── navbar.html
│   │   │   ├── mobile-drawer.html
│   │   │   └── footer.html
│   │   ├── heroes/
│   │   │   ├── hero-dark.html
│   │   │   ├── hero-light.html
│   │   │   └── hero-split.html
│   │   ├── sections/
│   │   │   ├── feature-grid.html
│   │   │   ├── feature-illustration.html
│   │   │   ├── stats-bar.html
│   │   │   └── cta-section.html
│   │   ├── social-proof/
│   │   │   ├── testimonial-card.html
│   │   │   ├── logo-cloud.html
│   │   │   └── pull-quote.html
│   │   ├── pricing/
│   │   │   ├── pricing-card.html
│   │   │   └── comparison-table.html
│   │   ├── forms/
│   │   │   ├── email-capture.html
│   │   │   └── contact-form.html
│   │   └── media/
│   │       ├── illustration-frame.html
│   │       └── video-embed.html
│   ├── showcase.html        # Composition examples (existing)
│   ├── components.html      # Component catalog (existing)
│   └── pages/               # Sample page implementations
```

### Naming Conventions

**Shared variants (applied to existing components):**
- Size variants: `btn-xl`, `input-xl`, `badge-lg`
- Context variants: `btn-outline-white`, `card-marketing`, `accordion-marketing`

**Marketing-specific components:**
- Prefix-free: `navbar`, `footer`, `hero-dark` (marketing context implied by directory)
- Descriptive: `feature-grid`, `stats-bar`, `testimonial-card`

**CSS classes:**
- Marketing variants: `.marketing-*` or context-specific (`.hero-*`, `.cta-*`)
- Thread utilities: `.thread-spectrum`, `.thread-cool`, `.thread-fresh`, `.thread-flame`
- Typography: `.opsz-144`, `.gradient-text-emerald`

### Documentation Needs

1. **Marketing Component Library** - Dedicated documentation for marketing components
2. **Composition Guidelines** - How to combine components into pages
3. **Galaxy Opal Quick Reference** - Typography scales, spacing, thread usage
4. **Migration Guide** - When to use product vs marketing components
5. **Responsive Patterns** - Breakpoint behavior for each marketing component

### Integration Considerations

1. **Shared Design Tokens** - Both systems use same `/assets/config/design-tokens.css`
2. **Shared Tailwind Config** - Same `tailwind.config.js` with marketing extensions
3. **Partial Reuse** - Marketing components should import/extend product components where sensible (e.g., button base styles)
4. **Independent Testing** - Marketing components need their own visual regression tests
5. **Page Templates** - Create marketing page templates that compose components correctly

---

## Appendix: Detailed Component Specifications

### Button Marketing Variant Specification

```css
.btn-xl {
    padding: 16px 32px;
    font-size: 18px;
    min-height: 56px;
    border-radius: 8px;  /* Slightly larger than default 6px */
}

.btn-outline-white {
    background-color: transparent;
    border: 2px solid white;
    color: white;
}
.btn-outline-white:hover {
    background-color: rgba(255, 255, 255, 0.1);
}
```

### Marketing Typography Scale Reference

| Element | Font | Size | Weight | Line Height | Letter Spacing |
|---------|------|------|--------|-------------|----------------|
| Hero Headline (max) | Fraunces | 96px | 300 | 1.05 | -0.025em |
| Hero Headline (secondary) | Fraunces | 72px | 400 | 1.1 | -0.02em |
| Section Headline | Fraunces | 56px | 600 | 1.1 | -0.015em |
| Card Headline | Fraunces | 24px | 600 | 1.2 | 0 |
| Stat Number | Fraunces | 64px | 700 | 1 | 0 |
| Quote Text | Fraunces | 28px | 400 italic | 1.4 | 0 |
| Body (large) | Inter | 20px | 400 | 1.6 | 0 |
| Body (default) | Inter | 16px | 400 | 1.6 | 0 |
| Serial Label | Outfit | 11px | 600 | 1 | 0.12em |

### Thread Gradient Definitions

```css
.thread-spectrum {
    background: linear-gradient(90deg,
        hsl(170 100% 50%) 0%,      /* cyan */
        hsl(74 100% 60%) 25%,      /* lime */
        hsl(28 100% 55%) 50%,      /* orange */
        hsl(330 100% 50%) 75%,     /* magenta */
        hsl(170 100% 50%) 100%     /* cyan */
    );
}
.thread-cool { background: linear-gradient(90deg, hsl(170 100% 50%), hsl(330 100% 50%)); }
.thread-fresh { background: linear-gradient(90deg, hsl(170 100% 50%), hsl(74 100% 60%)); }
.thread-flame { background: linear-gradient(90deg, hsl(28 100% 55%), hsl(330 100% 50%)); }
```

---

## Summary Table: Component Status

| Component | Status | Marketing Fit | Action | Priority |
|-----------|--------|---------------|--------|----------|
| Buttons | EXISTS | Needs variant | Add XL size | P0 |
| Cards | EXISTS | Works + variant | Add marketing preset | P1 |
| Inputs | EXISTS | Needs variant | Add XL size | P1 |
| Navigation | EXISTS | Not applicable | Create marketing nav | P0 |
| Badges | EXISTS | Works | Optional large variant | P2 |
| Accordions | EXISTS | Needs variant | Add marketing typography | P1 |
| Modals | EXISTS | Works | Use as-is | P3 |
| Progress | EXISTS | Works | Use as-is | P3 |
| Tooltips | EXISTS | Works | Use as-is | P3 |
| Toasts | EXISTS | Works | Use as-is | P2 |
| Popovers | EXISTS | Works | Use as-is | P3 |
| Tabs | EXISTS | Works | Use as-is | P2 |
| Dropdowns | EXISTS | Works | Use as-is | P2 |
| Tables | EXISTS | Not applicable | Skip | N/A |
| Avatars | EXISTS | Works | Use as-is | P2 |
| Context-Switcher | EXISTS | Not applicable | Skip | N/A |
| Logos | EXISTS | Works | Use as-is | P0 |
| Utilities | EXISTS | Works | Use as-is | P3 |
| Hero Sections | MISSING | Required | Create new | P0 |
| Marketing NavBar | MISSING | Required | Create new | P0 |
| Mobile Nav Drawer | MISSING | Required | Create new | P0 |
| Marketing Footer | MISSING | Required | Create new | P0 |
| Feature Grid | MISSING | Required | Create new | P1 |
| Stats Bar | MISSING | Required | Create new | P1 |
| Testimonial Card | MISSING | Required | Create new | P1 |
| Pricing Card | MISSING | Required | Create new | P1 |
| CTA Section | MISSING | Required | Create new | P1 |
| Email Capture | MISSING | Required | Create new | P1 |
| Illustration Frame | MISSING | Required | Create new | P1 |
| Logo Cloud | MISSING | Nice to have | Create new | P2 |
| Pull Quote | MISSING | Nice to have | Create new | P2 |
| Comparison Table | MISSING | Nice to have | Create new | P2 |
| Video Embed | MISSING | Nice to have | Create new | P2 |
| Blog/Resource Cards | MISSING | Future | Create new | P3 |
| Docs Components | MISSING | Future | Create new | P3 |

---

*Report generated by Claude Code audit tool. This report should serve as the source of truth for marketing component decisions.*
