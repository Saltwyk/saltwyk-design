# Saltwyk Design System Principles

## Brand Foundation

### The Creative Tension

Saltwyk's visual power comes from the tension between two aesthetics:

**Traditional Finance**
- Warm, cream-toned ledger paper from accounting books
- Dark intaglio ink used for permanent financial records
- The green of currency—U.S. greenbacks, the color of money

**Modern Finance**
- Bright fluorescent security threads embedded in modern banknotes
- Vibrant, energetic colors that prove authenticity
- The technological confidence of contemporary payment systems

These two forces—the permanence of traditional finance and the energy of modern security—create Saltwyk's distinctive visual language. The ledger grounds us in trust; the threads electrify with possibility.

---

## Three Opal Treatments

When ledger paper meets security threads, opal aesthetics emerge. Each product surface uses a specific opal treatment—a sub-system of the core ledger & thread concept.

### Bright Opal (Shopper)

- **Surface:** Warm ledger backgrounds, white cards
- **Character:** Approachable, consumer-friendly, vibrant
- **Thread treatment:** Cool family tints (cyan → magenta, 100-300 range)
- **Feeling:** "Your rewards are valuable and alive"

The shopper experience should feel like discovering hidden value—the bright flash of a security thread catching light on warm paper.

### Fire Opal (Merchant)

- **Surface:** Dark intaglio backgrounds, glowing thread accents
- **Character:** Professional, powerful, authoritative
- **Thread treatment:** Fresh family shades (cyan → lime, 300-500 range) that glow against dark
- **Feeling:** "Serious infrastructure that works for you"

The merchant experience evokes the weight of intaglio ink—permanent, trustworthy—with threads burning through the darkness like embedded authentication.

### Bright Opal (Documentation)

- **Surface:** Clean, minimal, highly readable
- **Character:** Clear, functional, quietly confident
- **Thread treatment:** Mono or no thread—occasional seams of color, not pervasive
- **Feeling:** "The information you need, without distraction"

Documentation is the common opal—not flashy, but genuine. Threads appear rarely, like natural color seams in stone, marking important moments without competing with content.

---

## Color Usage Principles

### Emerald is for Interaction Only

Emerald signals "you can do something here." It appears exclusively on:

- Primary buttons
- Text links
- Focus rings
- Active/selected states
- Toggle on states
- The Saltwyk logomark

Emerald does NOT appear on:

- Decorative borders
- Card accents
- Status badges (except Success)
- Background fills
- Non-interactive elements

**Why:** When emerald appears everywhere, it loses meaning. Restraint makes interaction obvious.

### Full Spectrum Thread is Reserved

The full spectrum thread (cyan → lime → orange → magenta) is the Saltwyk signature. Reserve it for:

- Saltwyk logo treatment
- Hero moments (ONE per page maximum)
- Major celebration states (transaction success, milestone)
- Marketing headlines

Full spectrum does NOT appear on:

- Component borders
- Table accents
- Navigation dividers
- Multiple elements on the same page

**Why:** Scarcity creates impact. The spectrum should feel special.

### Semantic Colors Have Fixed Meanings

Full-saturation thread colors carry semantic meaning across the entire system:

| Color | Meaning | Use Cases |
|-------|---------|-----------|
| Cyan (500+) | Info, new, in progress | Info badges, new indicators |
| Magenta (500+) | Error, destructive, failed | Error states, delete actions |
| Orange (500+) | Warning, pending, attention | Warning badges, pending states |
| Emerald (500+) | Success, active, interactive | Success badges, active states, buttons |

These meanings are **inviolable**. Never use magenta decoratively—it means error.

### Decorative Threads Use Tints and Shades

Surface-specific decorative threads use the softer ends of color scales to avoid semantic confusion:

**Light mode (on ledger/white):** 100-300 range
**Dark mode (on intaglio):** 300-500 range

This creates visual interest without triggering semantic associations.

---

## Thread Hierarchy

### One Hero Thread Per Page

Each page gets at most ONE full-strength decorative thread, typically in the header or hero area. This anchors the page without visual competition.

### Accent Threads for Emphasis

Secondary thread accents (slightly softer) can appear on:

- Featured cards (1-2 per view)
- Section dividers
- Important callouts

Not every card gets a thread. Threads are earned by importance.

### Most Elements Are Neutral

The majority of UI elements should use warm grays (light) or intaglio (dark). This creates breathing room and lets thread accents have impact.

---

## Surface-Specific Thread Families

Each opal treatment has a signature thread gradient:

| Surface | Opal Treatment | Thread Family | Gradient |
|---------|----------------|---------------|----------|
| Shopper | Bright Opal | Fresh | Cyan → Lime |
| Merchant | Fire Opal | Cool | Cyan → Magenta |
| Marketing | Mixed | Full Spectrum | All four thread colors |
| Docs | Bright Opal | Mono | Single color or none |

These families create instant recognition of context while maintaining the core ledger & thread aesthetic.

---

## Typography Principles

### Font Roles

| Font | Role | Use |
|------|------|-----|
| Fraunces | Headlines, display | Page titles, hero text, marketing (variable, 100-900 weights) |
| Inter | Body, UI | All body text, form labels, buttons |
| Outfit | Brand, wordmark | Logo wordmark only |

### Hierarchy Through Weight, Not Color

Establish hierarchy through:

1. Size differences
2. Font weight (400 vs 500 vs 600)
3. Font family (serif for headlines, sans for body)

Avoid using color to create hierarchy except for:

- Interactive elements (emerald)
- Semantic states (error, warning, success)
- Muted secondary text (warm-500/600)

---

## Component Principles

### Cards

- Default state: Neutral borders (warm-200), no thread
- Featured state: Thread accent on top (tint, not full strength)
- Selected state: Emerald border and tint (interactive state)

Not every card needs a thread. Reserve for featured content.

### Buttons

- Primary (emerald): One per page ideally, main CTA
- Secondary (warm): Supporting actions
- Ghost: Tertiary actions, navigation
- Destructive (magenta): Dangerous actions only

### Badges

Use semantic colors consistently:

- Success: Emerald
- Info: Cyan
- Warning: Orange
- Error: Magenta
- Neutral: Warm gray

"Connected" is info (cyan), not success (emerald)—it's a status, not an achievement.

### Navigation

Active states use emerald (interactive).
Decorative dividers use neutral or surface-specific thread tints.

---

## Dark Mode: Fire Opal Treatment

### Fire Opal is a Distinct Aesthetic

Fire Opal is not "dark mode" in the conventional sense—it's a complete visual treatment with its own character. The intaglio ink surface creates depth, and threads glow against it like embedded security features catching UV light.

**Surface layering:**
- Background: intaglio-900
- Elevated surfaces: intaglio-800
- Borders and dividers: intaglio-700

**Thread behavior:** Threads glow rather than tint. Use the 300-500 range for visibility.

**Text colors:**
- Primary: warm-100 (not pure white)
- Secondary: warm-400
- Interactive: emerald-400 (brighter for contrast)

### Contrast Requirements

All text must meet WCAG AA contrast ratios:

- Primary text on dark: warm-100 (4.5:1 minimum)
- Secondary text on dark: warm-400 (4.5:1 for body, 3:1 for large)
- Interactive elements: emerald-400 on intaglio backgrounds

---

## Restraint Principles

### Most Brands Are Restrained

Reference: Stripe, Linear, Notion, Apple—primary brand color appears on 5-10% of UI, not 30-40%.

Saltwyk should follow this pattern:

- Emerald: Interactive elements only
- Threads: Hero + 1-2 featured elements
- Everything else: Neutral warm/intaglio palette

### Visual Interest Through Typography and Space

Before adding color, try:

- Larger/bolder headlines
- More generous whitespace
- Subtle shadows and borders
- Typography contrast (serif vs sans)

Color should be the last tool, not the first.

---

## Anti-Patterns

### Don't Do This

| Anti-Pattern | Why It's Wrong |
|--------------|----------------|
| Emerald borders on non-interactive cards | Implies clickability |
| Full-strength thread on every card | Loses hierarchy and impact |
| "Connected" badge in emerald | It's info (cyan), not success |
| Multiple full-spectrum threads per page | Compete and dilute brand moment |
| Decorative use of magenta | Implies error state |
| Gradient text for body copy | Unreadable, gradients are for accents |
| Thread thickness varying randomly | Creates visual noise, not hierarchy |

---

## Decision Framework

When making visual decisions, ask in order:

1. **Is it interactive?** → Emerald
2. **Is it a semantic state?** → Use the correct semantic color
3. **Is it the most important thing on the page?** → Hero thread treatment
4. **Is it featured but not primary?** → Accent thread (tint/shade)
5. **Is it standard content?** → Neutral (warm/intaglio)

Default to neutral. Add color only with intention.

---

## Validation Checklist

Before shipping any page or component:

- [ ] Emerald appears ONLY on interactive elements
- [ ] Maximum ONE hero thread per page
- [ ] Semantic colors used correctly (cyan=info, magenta=error, etc.)
- [ ] Decorative threads use tints (light) or shades (dark), not full saturation
- [ ] Page has clear visual hierarchy (one primary focus)
- [ ] Dark mode uses Fire Opal treatment, not simple inversion
- [ ] Text meets contrast requirements
- [ ] Most elements are neutral—color is earned

---

## Living Document

These principles emerged from iterative design discussions and will evolve as Saltwyk grows. When in doubt:

1. Reference this document
2. Look at established patterns in the design system
3. Ask: "What does this color/treatment mean elsewhere?"
4. Default to restraint

The goal is a system where every visual choice has meaning, and users can trust what they see.
