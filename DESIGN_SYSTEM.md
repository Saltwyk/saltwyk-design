# Saltwyk Design System

**Version:** 0.5.0  
**Last Updated:** January 2026  
**Status:** Production Draft

---

## Overview

The Saltwyk design system embodies **"Intaglio Ink + Ledger Paper + Security Threads"** — traditional financial gravitas meets modern currency security aesthetics. We mimic the visual language of money while operating fundamentally differently underneath.

### Design Principles

1. **Currency Aesthetic** — Visual cues from banknotes, ledgers, and security printing
2. **Earned Trust** — Traditional serif headlines + clean sans-serif UI convey reliability
3. **Restrained Vibrancy** — Thread colors used sparingly for maximum impact
4. **Warm Neutrality** — Brown-tinted grays create distinctive warmth without competing with brand colors

---

## Typography

### Font Stack

| Role | Font | Weight | Usage |
|------|------|--------|-------|
| Display / Headlines | Fraunces | 100–900, italic | Hero text, section headers, marketing (variable font with optical sizing) |
| Body / UI | Inter | 300–700 | Body copy, labels, buttons, forms |
| Brand / Logo | Outfit | 400–800 | Logo lockup, brand moments only |

### Type Scale (Product UI)

| Name | Size | Line Height | Font | Usage |
|------|------|-------------|------|-------|
| Display | 48px | 1.1 | Fraunces | Page heroes |
| H1 | 36px | 1.2 | Fraunces | Page titles |
| H2 | 30px | 1.2 | Fraunces | Section headers |
| H3 | 24px | 1.3 | Inter 600 | Card headers |
| H4 | 20px | 1.4 | Inter 600 | Subsections |
| Body Large | 18px | 1.6 | Inter 400 | Lead paragraphs |
| Body | 16px | 1.6 | Inter 400 | Default body |
| Body Small | 14px | 1.5 | Inter 400 | Secondary text |
| Caption | 12px | 1.4 | Inter 400 | Labels, timestamps |

### Hero Type Scale (Marketing)

| Name | Size | Line Height | Letter Spacing | Usage |
|------|------|-------------|----------------|-------|
| 6xl | 60px | 1.1 | -0.02em | Large headlines |
| 7xl | 72px | 1.1 | -0.02em | Hero headlines |
| 8xl | 96px | 1.05 | -0.03em | Statement text |
| 9xl | 128px | 1.0 | -0.03em | Maximum impact |

### Text Color Hierarchy

| Role | Token | Usage |
|------|-------|-------|
| Primary | `ink` | Headlines, body text |
| Strong Secondary | `warm-700` | Emphasized secondary |
| Secondary | `warm-600` | Supporting text |
| Muted | `warm-500` | Tertiary information |
| Placeholder | `warm-400` | Input placeholders, disabled |

---

## Color System

### Philosophy

- **Warm Gray (warm-*)**: UI workhorse — borders, backgrounds, muted text. Low saturation (3-8%) so it doesn't compete with brand colors.
- **Intaglio (intaglio-*)**: Brand brown — dark surfaces, sidebar, emphatic elements. Higher saturation (15-30%) for warmth.
- **Emerald (emerald-*)**: Primary action — use sparingly to maintain impact. The "serial green."
- **Thread Colors**: Decorative gradients only. Vibrant `thread` variants for gradient accents.
- **Sepia (sepia-*)**: Illustration style — warm browns for intaglio-style imagery.

### Color Semantics Quick Reference

| Color | Usage | Never Use For |
|-------|-------|---------------|
| **Emerald** | Primary CTA, logo, success states, progress | Info states, focus rings |
| **Indigo** | Focus rings, selection, links, active states, info badges, info boxes | Primary actions |
| **Cyan** | Thread gradients, spectrum lines, decorative accents | ANY UI interactive element |
| **Orange** | Warning states | Info states |
| **Magenta** | Error states, destructive actions | Success states |
| **Neutral (Warm)** | Text, borders, backgrounds | Semantic meaning |

### Warm Gray Scale

```
warm-50:  hsl(30 5% 98%)   // #FAFAF9
warm-100: hsl(30 5% 95%)   // #F3F2F1
warm-200: hsl(30 5% 88%)   // #E2E0DE
warm-300: hsl(30 5% 78%)   // #C9C6C3
warm-400: hsl(30 6% 62%)   // #A19C96
warm-500: hsl(30 6% 46%)   // #7A756E
warm-600: hsl(30 7% 35%)   // #5D5852
warm-700: hsl(30 8% 25%)   // #423E39
warm-800: hsl(30 8% 15%)   // #282522
warm-900: hsl(30 8% 10%)   // #1A1816
```

### Intaglio Scale (Brand Brown)

```
intaglio-50:  hsl(24 15% 96%)  // #F6F4F3
intaglio-100: hsl(24 18% 90%)  // #EBE6E2
intaglio-200: hsl(24 20% 80%)  // #D5CCC4
intaglio-300: hsl(24 22% 65%)  // #B5A594
intaglio-400: hsl(24 24% 50%)  // #9E8468
intaglio-500: hsl(24 26% 35%)  // #705A43
intaglio-600: hsl(24 27% 25%)  // #51402F
intaglio-700: hsl(24 28% 18%)  // #3B2E21
intaglio-800: hsl(24 29% 12%)  // #271E15
intaglio-900: hsl(24 29% 8%)   // #1A140D ← ink base
intaglio-950: hsl(24 30% 5%)   // #100C07
```

### Emerald Scale (Primary)

```
emerald-50:  hsl(150 40% 96%)   // #F0FAF5
emerald-100: hsl(150 45% 90%)   // #D6F3E4
emerald-200: hsl(150 50% 80%)   // #A8E6C8
emerald-300: hsl(150 60% 65%)   // #6DD4A3
emerald-400: hsl(150 80% 45%)   // #17B86B
emerald-500: hsl(150 100% 27%)  // #008C45 ← PRIMARY
emerald-600: hsl(150 100% 22%)  // #007038
emerald-700: hsl(150 100% 18%)  // #005C2E
emerald-800: hsl(150 100% 14%)  // #004724
emerald-900: hsl(150 100% 10%)  // #00331A
```

### Thread Colors

Each thread scale has 50-900 for UI usage, plus a `thread` variant for highlights.

#### Cyan (Decorative Thread Gradients ONLY)

> **Important:** Cyan is reserved for decorative thread gradients only. For info states, focus rings, and UI interactions, use **Indigo** instead.

```
cyan-thread: hsl(170 100% 50%)  // #00FFC0 — thread gradients only
cyan-500: hsl(170 100% 40%)     // Only for palette documentation
cyan-700: hsl(170 100% 25%)     // Never for UI elements
```

#### Indigo (Info, Selection, Focus)
```
indigo-500: hsl(239 84% 67%)    // Focus rings, selection states
indigo-600: hsl(239 84% 57%)    // Links, info badges
indigo-700: hsl(239 76% 48%)    // Accessible text on light
```

#### Magenta (Error, Destructive)
```
magenta-500: hsl(330 85% 50%)    // #EB1577 — destructive buttons
magenta-700: hsl(330 95% 35%)    // Accessible text
magenta-thread: hsl(330 100% 50%) // #FF0090 — urgent alerts only
```

#### Lime (Success, Positive)
```
lime-500: hsl(74 80% 45%)
lime-700: hsl(74 90% 30%)
lime-thread: hsl(74 100% 60%)    // #CCFF00
```

#### Orange (Warning, Attention)
```
orange-500: hsl(20 90% 45%)
orange-700: hsl(20 100% 30%)
orange-thread: hsl(20 100% 50%)  // #FF5900
```

### Sepia Scale (Illustrations)

```
sepia-50:  hsl(40 25% 96%)   // Lightest — paper highlight
sepia-100: hsl(38 30% 92%)   // Light paper
sepia-200: hsl(36 35% 85%)   // Warm cream
sepia-300: hsl(34 32% 72%)   // Tan
sepia-400: hsl(32 28% 58%)   // Medium sepia
sepia-500: hsl(30 25% 45%)   // Core sepia tone
sepia-600: hsl(28 22% 35%)   // Dark sepia
sepia-700: hsl(26 20% 25%)   // Deep brown
sepia-800: hsl(24 18% 18%)   // Near black
sepia-900: hsl(22 15% 12%)   // Darkest
```

### Named Surface Colors

| Token | Value | Usage |
|-------|-------|-------|
| `ledger` | hsl(48 29% 95%) / #F5F2EB | Warm paper background |
| `ink` | hsl(24 29% 8%) / #1A140D | Primary text color |

---

## Borders

### Thickness Scale

| Token | Value | Usage |
|-------|-------|-------|
| `hairline` | 1px | Subtle dividers, default input borders |
| `default` | 1.5px | Standard borders, button outlines, cards |
| `emphasis` | 2px | Selected states, focus rings, section dividers |
| `heavy` | 3px | Strong emphasis, active tabs, thread lines |

### Border Colors

- Default: `warm-200` or `warm-300`
- Selected/Focus: `emerald-500`
- Error: `magenta-500`
- On dark: `intaglio-700`

---

## Buttons

### Variants

| Variant | Background | Border | Text | Hover |
|---------|------------|--------|------|-------|
| Primary | emerald-500 | none | white | emerald-600 |
| Secondary | warm-200 | warm-300 (1.5px) | ink | warm-300 |
| Ghost | transparent | none | ink | warm-100 |
| Outline | transparent | warm-300 (1.5px) | ink | warm-50 |
| Outline Primary | transparent | emerald-500 (1.5px) | emerald-600 | emerald-50 |
| Destructive | magenta-500 | none | white | magenta-thread |

### Sizes

| Size | Padding | Font Size |
|------|---------|-----------|
| Small | 6px 12px | 14px |
| Default | 10px 20px | 16px |
| Large | 14px 28px | 18px |

---

## Gradients

### Brand Gradients

```css
/* Primary marketing gradient — CTAs, hero accents */
.gradient-brand {
  background: linear-gradient(135deg, var(--color-emerald-500) 0%, var(--color-cyan-500) 100%);
}

/* Dark sections, footers */
.gradient-warm {
  background: linear-gradient(135deg, var(--color-intaglio-900) 0%, var(--color-intaglio-500) 100%);
}

/* Full hero backgrounds with depth */
.gradient-hero {
  background: linear-gradient(135deg, var(--color-emerald-500) 0%, var(--color-emerald-700) 50%, var(--color-intaglio-900) 100%);
}

/* Soft background variation */
.gradient-subtle {
  background: linear-gradient(180deg, var(--color-ledger) 0%, var(--color-warm-100) 100%);
}

/* Footer/contrast sections */
.gradient-dark {
  background: linear-gradient(180deg, var(--color-intaglio-900) 0%, var(--color-intaglio-950) 100%);
}

/* High energy — use sparingly */
.gradient-thread-vibrant {
  background: linear-gradient(135deg, var(--color-cyan-thread) 0%, var(--color-magenta-thread) 100%);
}

/* Success moments */
.gradient-thread-warm {
  background: linear-gradient(135deg, var(--color-lime-thread) 0%, var(--color-orange-thread) 100%);
}

/* Illustration frames */
.gradient-sepia {
  background: linear-gradient(180deg, var(--color-sepia-50) 0%, var(--color-sepia-300) 100%);
}
```

### Gradient Text

```css
.gradient-text {
  background: linear-gradient(135deg, var(--color-emerald-500) 0%, var(--color-cyan-500) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

---

## Decorative Thread Lines

### Full Spectrum (Section Dividers)

```css
.thread-line {
  height: 3px;
  background: linear-gradient(90deg, 
    var(--color-cyan-thread) 0%, 
    var(--color-lime-thread) 25%, 
    var(--color-orange-thread) 50%, 
    var(--color-magenta-thread) 75%, 
    var(--color-cyan-thread) 100%
  );
}

.thread-line-vertical {
  width: 3px;
  background: linear-gradient(180deg, 
    var(--color-cyan-thread) 0%, 
    var(--color-lime-thread) 25%, 
    var(--color-orange-thread) 50%, 
    var(--color-magenta-thread) 75%, 
    var(--color-cyan-thread) 100%
  );
}
```

### Single Color Accents

Use individual thread colors (`bg-cyan-thread`, `bg-lime-thread`, etc.) with `h-1` or `w-1` for category-specific accents.

---

## Motion & Animation

### Duration Scale

| Token | Value | Usage |
|-------|-------|-------|
| `micro` | 75ms | Button press, toggle |
| `fast` | 150ms | Hover states, tooltips |
| `normal` | 200ms | Default transitions |
| `slow` | 300ms | Modals, drawers |
| `emphasis` | 500ms | Page transitions, reveals |

### Easing Curves

| Token | Value | Usage |
|-------|-------|-------|
| `ease-out` | cubic-bezier(0.0, 0.0, 0.2, 1) | Elements entering |
| `ease-in` | cubic-bezier(0.4, 0.0, 1, 1) | Elements leaving |
| `ease-out-expo` | cubic-bezier(0.16, 1, 0.3, 1) | Dramatic entrances (marketing) |
| `ease-out-back` | cubic-bezier(0.34, 1.56, 0.64, 1) | Playful overshoot |

### Animations

```css
@keyframes fadeIn { 0% { opacity: 0; } 100% { opacity: 1; } }
@keyframes fadeInUp { 0% { opacity: 0; transform: translateY(20px); } 100% { opacity: 1; transform: translateY(0); } }
@keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
```

---

## Sepia Illustration Style

### Characteristics

- **Currency engraving aesthetic** — Fine crosshatching, stippling, line work reminiscent of banknotes
- **Sepia/warm brown tones** — Monochromatic using sepia-100 through sepia-700
- **Ornate decorative borders** — Guilloche patterns, scrollwork frames
- **Allegorical subjects** — Scales, handshakes, commerce symbols, gift boxes, coins

### Usage

| Context | Appropriate |
|---------|-------------|
| Hero images | ✓ |
| Pitch deck illustrations | ✓ |
| Section dividers | ✓ |
| Marketing one-pagers | ✓ |
| Product UI | ✗ Too heavy |
| Checkout flow | ✗ |

### Frame Treatments

```css
/* Standard frame */
.illustration-frame {
  background: linear-gradient(180deg, var(--color-sepia-50) 0%, var(--color-sepia-200) 100%);
  border: 3px solid var(--color-sepia-300);
}

/* Vignette effect */
.illustration-vignette {
  background: var(--color-sepia-50);
  box-shadow: inset 0 0 40px rgba(139, 115, 85, 0.3);
}
```

---

## Surface Contexts

### Shopper Experience

- Background: `ledger`
- Cards: `white` with `border-2 border-warm-200`
- Text: `ink` primary, `warm-600` secondary

### Merchant Dashboard

- Sidebar: `intaglio-900`
- Active nav: `emerald-500/20` background, `emerald-400` text
- Inactive nav: `intaglio-300` text
- Main content: `ledger` background

---

## Logo Usage

### Variants

| Variant | Background | Usage |
|---------|------------|-------|
| lockup-emerald | Light | Primary, marketing |
| lockup-inverse | Dark | Dark backgrounds |
| logomark-emerald | Light/Dark | Compact spaces, favicons |
| logomark-mono-light | Dark | Subtle on dark backgrounds |

### Clear Space

Minimum clear space = height of logomark on all sides.

---

## Accessibility

### Color Contrast

- All text colors meet WCAG 2.1 AA (4.5:1 for body, 3:1 for large text)
- Thread `500-700` variants are accessible; `thread` variants are decorative only
- Never use thread colors for text on colored backgrounds

### Focus States

- Focus ring: `ring-2 ring-emerald-500 ring-offset-2`
- Visible on all interactive elements
- Never remove outline without replacement

---

## File Structure

```
/packages/ui/
  ├── tailwind.config.ts    # Shared Tailwind configuration
  ├── globals.css           # CSS custom properties + utilities
  └── components/           # Shared components using design system
```

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 0.5.0 | Jan 2026 | Complete system: core + marketing + sepia illustrations |
| 0.4.0 | Jan 2026 | Added marketing extensions (gradients, hero type, motion) |
| 0.3.0 | Jan 2026 | Added button variants, border scale, logo variants |
| 0.2.0 | Jan 2026 | Refined warm gray vs intaglio separation |
| 0.1.0 | Jan 2026 | Initial color system and typography |
