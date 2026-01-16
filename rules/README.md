# Surface Rules Index

**Version:** 1.1.0  
**Last Updated:** January 2026

This directory contains machine-readable surface rules for AI-assisted design system enforcement.

## Repo Location

This `rules/` directory is at the root of the design system repo:
```
saltwyk-design/
├── rules/
│   ├── README.md
│   ├── shopper.rules.json
│   ├── merchant.rules.json
│   ├── marketing.rules.json
│   └── docs.rules.json (TODO)
├── assets/
│   ├── brand/
│   │   ├── brand.json
│   │   └── brand.txt
│   └── config/
├── products/
│   ├── shopper/
│   │   ├── index.html
│   │   ├── showcase.html
│   │   ├── color-strategy.html
│   │   └── screens/
│   ├── merchant/
│   │   └── screens/
│   └── marketing/
│       └── components/
├── core-*.html
└── ...
```

## Color Semantics (Universal Across All Surfaces)

| Color | Role | Allowed Usage | Forbidden Usage |
|-------|------|---------------|-----------------|
| **Emerald** | Primary CTA + Logo ONLY | Primary CTA button, logo | Links, focus rings, selection, secondary buttons, decoration |
| **Indigo** | UI Interactive + Info | Focus rings, selection, links, active states, info badges/toasts | Decorative threads |
| **Cyan** | Thread Gradients ONLY | Decorative spectrum/thread lines | Focus rings, links, buttons, badges, toasts, any UI element |
| **Magenta** | Error/Destructive | Error badges, error toasts, destructive actions | — |
| **Orange** | Warning | Warning badges, warning toasts, pending states | — |

**Key Principle:** Cyan is too searing for UI. It's reserved for decorative thread expression only. All info states use indigo.

## Thread Assignments (Confirmed from core-threads.html)

| Surface | Identity | Thread | Gradient Composition |
|---------|----------|--------|---------------------|
| Shopper | Bright Opal | Fresh | Cyan → Lime |
| Merchant | Fire Opal | Cool | Cyan → Magenta |
| Docs | Bright Opal | Ocean | Cyan → Indigo |
| Marketing | Full Spectrum | Spectrum | Cyan → Lime → Orange → Magenta → Cyan |

## Thread Placement Rules (Critical)

**Hero Threads:**
- Live at the **TOP EDGE** of the hero section, full-bleed
- NOT floating in the hero field
- Heroes use `rounded-b-lg` (square top corners, rounded bottom)

**Navigation Threads:**
- Below logo in sidebar
- 3px height, full-width
- Uses **Spectrum** gradient for brand expression (regardless of surface)

**Per-Page Limits:**
- Shopper: 1 hero thread, 2 accent elements max
- Merchant: 1 thread (sidebar accent)
- Docs: 0-1 (minimal)
- Marketing: 2 max

## Background Gradient Classes (from design-tokens.css)

| Class | Composition | Usage |
|-------|-------------|-------|
| `.gradient-brand` | emerald-500 → cyan-500 (135deg) | CTAs, hero accents |
| `.gradient-hero` | emerald-500 → emerald-700 → intaglio-900 | Full hero backgrounds |
| `.gradient-warm` | intaglio-900 → intaglio-500 | Dark sections, footers |
| `.gradient-subtle` | ledger → warm-100 (180deg) | Soft backgrounds |
| `.gradient-dark` | intaglio-900 → intaglio-950 | Footer, contrast |
| `.gradient-sepia` | sepia-50 → sepia-300 | Illustration frames |

## Usage

Load these files in AI prompts to enforce surface-specific design rules:

```
When building UI for [surface]:
1. Load rules/[surface].rules.json
2. Validate color usage against color_semantics
3. Check thread placement against thread_rules
4. Run validation_checklist before finalizing
```

## Common Violations to Watch For

1. **Cyan in UI elements** → Should be indigo
2. **Emerald for links or secondary buttons** → Should be indigo for links
3. **Emerald for selection states** → Should be indigo
4. **Thread floating in hero** → Should be at top edge with rounded-b-lg
5. **Info badges using cyan** → Should use indigo
6. **Hardcoded HSL values** → Should use CSS custom properties
