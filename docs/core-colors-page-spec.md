# Core Colors Page Enhancement Spec

**Status:** Draft  
**Last Updated:** 2025-01-14  
**Owner:** Tela

---

## Problem Statement

The current color system has:
- **Warm Gray** — UI workhorse (borders, muted text, backgrounds)
- **Intaglio** — Dark mode surfaces (brown-based)
- **Emerald** — Interactive elements only
- **Thread Colors** (Cyan, Magenta, Lime, Orange) — Semantic meanings assigned, high saturation

**What's missing:** Mid-saturation, rich colors for general UI use that don't conflict with thread semantics or interactive emerald. The result is designers reaching for thread colors inappropriately, or everything looking beige.

---

## Solution: Intaglio-Inspired Color Families

Add color scales inspired by historical intaglio printing (certificates, bonds, currency). These colors are:
- **Rich but not fluorescent** — Distinct from thread colors
- **Authoritative** — Evoke trust, finance, permanence
- **Versatile** — Can be used for illustrations, UI accents, documentation, marketing
- **Non-semantic** — Do not imply info/error/warning/success

---

## New Color Scales

### Sepia (Warm Brown)

**Inspiration:** Aged paper, antique documents, sepia-toned engravings  
**Character:** Warm, nostalgic, scholarly  
**Primary Use:** Documentation, illustration frames, marketing imagery

| Step | HSL Value | Description |
|------|-----------|-------------|
| 50 | hsl(40 25% 96%) | Aged paper background |
| 100 | hsl(38 30% 92%) | Light parchment |
| 200 | hsl(36 35% 85%) | Soft tan |
| 300 | hsl(34 32% 72%) | Medium sepia |
| 400 | hsl(32 28% 58%) | Strong sepia |
| 500 | hsl(30 25% 45%) | Core sepia |
| 600 | hsl(28 22% 35%) | Dark sepia |
| 700 | hsl(26 20% 25%) | Deep sepia |
| 800 | hsl(24 18% 18%) | Very dark |
| 900 | hsl(22 15% 12%) | Near black |

---

### Sienna (Burnt Orange-Brown)

**Inspiration:** Terra cotta, burnt sienna pigment, autumn leaves  
**Character:** Earthy, warm, grounded  
**Primary Use:** Illustrations, accent colors, warmth without triggering orange-thread semantics

| Step | HSL Value | Description |
|------|-----------|-------------|
| 50 | hsl(20 30% 96%) | Very light |
| 100 | hsl(18 35% 90%) | Light |
| 200 | hsl(16 40% 80%) | Soft |
| 300 | hsl(14 42% 65%) | Medium |
| 400 | hsl(12 45% 52%) | Strong |
| 500 | hsl(10 48% 42%) | Core sienna |
| 600 | hsl(8 50% 34%) | Dark |
| 700 | hsl(6 52% 26%) | Deep |
| 800 | hsl(4 50% 18%) | Very dark |
| 900 | hsl(2 45% 12%) | Near black |

---

### Slate (Blue-Gray)

**Inspiration:** Steel engravings, formal certificates, government bonds  
**Character:** Cool, authoritative, institutional  
**Primary Use:** Professional UI elements, documentation, technical content

| Step | HSL Value | Description |
|------|-----------|-------------|
| 50 | hsl(210 15% 96%) | Very light |
| 100 | hsl(210 18% 90%) | Light |
| 200 | hsl(210 20% 82%) | Soft |
| 300 | hsl(210 18% 68%) | Medium |
| 400 | hsl(210 16% 54%) | Strong |
| 500 | hsl(210 14% 42%) | Core slate |
| 600 | hsl(210 16% 32%) | Dark |
| 700 | hsl(210 18% 24%) | Deep |
| 800 | hsl(210 20% 16%) | Very dark |
| 900 | hsl(210 22% 10%) | Near black |

---

### Indigo (Deep Blue)

**Inspiration:** Navy blue stock certificates, formal financial documents  
**Character:** Deep, trustworthy, classic finance  
**Primary Use:** Alternative dark surfaces, professional accents, documentation headers

| Step | HSL Value | Description |
|------|-----------|-------------|
| 50 | hsl(230 25% 96%) | Very light |
| 100 | hsl(230 30% 92%) | Light |
| 200 | hsl(230 32% 82%) | Soft |
| 300 | hsl(230 28% 68%) | Medium |
| 400 | hsl(230 26% 54%) | Strong |
| 500 | hsl(230 28% 42%) | Core indigo |
| 600 | hsl(230 32% 32%) | Dark |
| 700 | hsl(230 36% 24%) | Deep |
| 800 | hsl(230 40% 16%) | Very dark |
| 900 | hsl(230 45% 10%) | Near black |

---

### Burgundy (Deep Red)

**Inspiration:** Official seals, wax stamps, formal documents  
**Character:** Serious, authoritative, distinguished  
**Primary Use:** Illustrations, accent for important callouts (non-error), marketing

| Step | HSL Value | Description |
|------|-----------|-------------|
| 50 | hsl(350 25% 96%) | Very light |
| 100 | hsl(350 30% 92%) | Light |
| 200 | hsl(350 32% 82%) | Soft |
| 300 | hsl(350 28% 68%) | Medium |
| 400 | hsl(350 26% 54%) | Strong |
| 500 | hsl(350 30% 42%) | Core burgundy |
| 600 | hsl(350 35% 32%) | Dark |
| 700 | hsl(350 40% 24%) | Deep |
| 800 | hsl(350 45% 16%) | Very dark |
| 900 | hsl(350 50% 10%) | Near black |

---

## Revised Guidance Statements

### Named Surfaces

**Ledger**  
*Primary background. Warm off-white reminiscent of aged paper.*

**Ink**  
*Primary text color. Deep brown-black like aged ink.*

---

### Neutral Scales

**Warm Gray Scale**  
*UI workhorse. Use for borders, backgrounds, muted text, and dividers. The default choice when no semantic meaning is needed.*

**Intaglio Scale**  
*Brand brown. Rich, warm tones for dark surfaces, emphasis, and brand moments. Use for dark mode backgrounds (800-950), card accents, and professional depth.*

---

### Interactive Color

**Emerald Scale**  
*Interactive elements ONLY. Emerald signals "you can click this." Use exclusively for buttons, text links, focus rings, toggle-on states, and the Saltwyk logomark. Never use for decorative borders, card accents, or non-interactive elements.*

---

### Intaglio Palette (NEW SECTION)

**Section Introduction:**  
*Rich colors inspired by historical financial printing—stock certificates, bonds, currency engravings. These colors carry authority without the fluorescent quality of security threads. Use for illustrations, documentation, UI accents, and anywhere you need color without semantic meaning.*

**Sepia Scale**  
*Warm brown tones for documentation and illustration. Evokes aged paper and antique engravings. Use for illustration frames, doc backgrounds, and scholarly content.*

**Sienna Scale**  
*Earthy burnt orange-brown. Adds warmth without triggering warning semantics. Use for illustrations, warm accents, and grounded visual elements.*

**Slate Scale**  
*Cool blue-gray for professional, technical content. Evokes steel engravings and formal certificates. Use for documentation, technical UI, and institutional contexts.*

**Indigo Scale**  
*Deep trustworthy blue. Classic financial authority. Use for alternative dark surfaces, formal headers, and professional accents.*

**Burgundy Scale**  
*Distinguished deep red. Evokes official seals and formal documents. Use for illustrations, important callouts (non-error), and marketing accents.*

---

### Thread Colors (Semantic)

**Section Introduction:**  
*Security thread colors with fixed semantic meanings. Full saturation values (500+) are reserved for semantic states. Tints (50-300) may be used for subtle backgrounds in semantic contexts only. Do not use thread colors decoratively—use Intaglio Palette colors instead.*

**Cyan Thread Scale**  
*Info and in-progress states. Use for informational badges, new indicators, and loading states. "Connected" status uses cyan (it's info, not success).*

**Magenta Thread Scale**  
*Error and destructive actions. Use for error messages, validation failures, and destructive action buttons. The only appropriate "red" in the system.*

**Orange Thread Scale**  
*Warning and attention states. Use for warning badges, pending states, and elements requiring user attention before proceeding.*

**Lime Thread Scale**  
*Reserved for Fresh thread gradient (Cyan → Lime) in Fire Opal contexts. Not used as a standalone semantic color—success states use Emerald.*

---

## Page Structure

### Section 1: Named Surfaces
- Ledger
- Ink
- Large swatches with HSL values

### Section 2: Neutral Scales
- Warm Gray (full scale with usage)
- Intaglio (full scale with usage)

### Section 3: Interactive Color
- Emerald (full scale)
- Prominent warning box: "Interactive elements ONLY"
- Highlight key values: 500 (light mode), 400 (dark mode)

### Section 4: Intaglio Palette
- Section intro explaining the concept
- Sepia scale
- Sienna scale
- Slate scale
- Indigo scale
- Burgundy scale
- Each with description and example uses

### Section 5: Thread Colors (Semantic)
- Section intro with semantic warning
- Cyan scale
- Magenta scale
- Orange scale
- Lime scale
- Table showing semantic mappings

### Section 6: Semantic Token Mappings
- Table mapping abstract tokens to concrete values
- Light mode and dark mode columns
- Usage column

---

## Elements to Remove or Relocate

- **Dark Mode Preview section** — Remove from colors page. Dark mode treatment belongs on surface-specific pages (Merchant color strategy) or a dedicated "Dark Mode" page, not core color definitions.

---

## Open Questions

1. **HSL value refinement:** The specific values above are starting points. Need to verify they render well alongside existing colors.

2. **Lime's role:** With success using Emerald, lime only appears in the Fresh thread gradient. Should we document it differently or consider removing as a standalone scale?

3. **Scale depth:** Do all Intaglio Palette colors need full 50-900 scales? Some (like burgundy) might work fine with fewer steps.

4. **Naming:** "Intaglio Palette" as a section name—does this resonate, or is there a better term?

---

## Implementation Checklist

- [ ] Add Sepia scale to tailwind.config.js
- [ ] Add Sienna scale to tailwind.config.js
- [ ] Add Slate scale to tailwind.config.js
- [ ] Add Indigo scale to tailwind.config.js
- [ ] Add Burgundy scale to tailwind.config.js
- [ ] Add all scales to design-tokens.css
- [ ] Update core-colors.html page structure
- [ ] Update guidance text for all existing scales
- [ ] Remove dark mode preview section
- [ ] Add Intaglio Palette section
- [ ] Update semantic mappings table
- [ ] Test all colors in context

---

## Related Documents

- `design-principles.md` — Overall design principles
- `core-gradients.html` — Thread gradient definitions
- `products/merchant/color-strategy.html` — Fire Opal application
- `products/shopper/color-strategy.html` — Bright Opal application
