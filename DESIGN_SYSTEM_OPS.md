# Design System Operations

**Version:** 0.1.0  
**Last Updated:** January 2026  
**Status:** Draft

This document defines how to operate the Saltwyk design system—the workflows, tooling, and AI integration that enable consistent, scalable design execution.

For what the design system *is* (philosophy, tokens, visual language), see `DESIGN_SYSTEM.md`.

---

## Source of Truth Hierarchy

The design system has multiple artifacts serving different purposes. When in conflict, higher-numbered sources override lower:

1. **Tokens** → `tailwind.config.js` + `design-tokens.css`
2. **Component Specs** → `core-*.html` pages
3. **Surface Rules** → `surfaces/*.rules.json`
4. **Philosophy** → `DESIGN_SYSTEM.md`

Tokens define *what exists*. Component specs define *how things look*. Surface rules define *when and where to use them*. Philosophy defines *why*.

---

## What Lives Where

| Artifact | Location | Format | Purpose |
|----------|----------|--------|---------|
| Color tokens | `assets/config/tailwind.config.js` | JS | What colors exist, their values |
| CSS utilities | `assets/config/design-tokens.css` | CSS | Gradients, threads, utility classes |
| Component specs | `core-*.html` | HTML | How components look, behave, are built |
| Surface rules | `surfaces/*.rules.json` | JSON | Semantic rules per product surface |
| Design philosophy | `DESIGN_SYSTEM.md` | Markdown | Why we make these choices |
| Operations | `DESIGN_SYSTEM_OPS.md` | Markdown | How to work with the system |
| Inventory | `docs/INVENTORY.md` | Markdown | Current state of all artifacts |

---

## Product Surfaces

Saltwyk has four distinct product surfaces, each with its own visual treatment:

| Surface | Identity | Character | Key Differentiators |
|---------|----------|-----------|---------------------|
| **Shopper** | Traditional Opal | Warm, approachable, trustworthy | Light backgrounds, soft thread tints (100-300), cyan/magenta cool gradient |
| **Merchant** | Fire Opal | Professional, confident, operational | Dark sidebar (intaglio), light content, emerald accents |
| **Docs** | Neutral | Clear, readable, gets out of the way | Minimal decoration, functional, no thread flourishes |
| **Marketing** | Bold | Persuasive, brand-forward, distinctive | Full thread spectrum allowed, sepia illustrations, hero typography |

Surface rules are defined in `surfaces/{surface}.rules.json` and encode:
- Which thread colors/intensities are allowed
- Where emerald can appear
- Background treatments
- Decorative element constraints
- Validation checklists

---

## Workflow: Building New UI

### Step 1: Identify Surface Context

Before writing any code, determine which surface you're building for:
- Shopper product (passport, checkout widget)
- Merchant product (dashboard, onboarding)
- Documentation (help center, API docs)
- Marketing (landing pages, pitch decks)

### Step 2: Load Context

Reference the appropriate files:
```
surfaces/{surface}.rules.json  → Semantic rules
core-*.html                    → Component specs
tailwind.config.js             → Available tokens
```

### Step 3: Design/Generate

When working with AI:
```
"Build a [component/page] for the [surface] surface.
 It needs to [functional requirements].
 Reference the surface rules and component specs."
```

When working manually:
1. Check surface rules for constraints
2. Use only tokens from tailwind config
3. Follow component spec patterns

### Step 4: Validate

Before shipping, run through the surface validation checklist:
- [ ] Colors within allowed ranges for surface
- [ ] Thread usage follows surface rules
- [ ] Emerald only on interactive elements (if applicable)
- [ ] Decorative elements appropriately restrained
- [ ] Dark mode treatments correct (if applicable)

---

## Workflow: Auditing Existing UI

### Step 1: Identify What You're Auditing

- Single component → Compare against `core-{component}.html`
- Full page/flow → Compare against surface rules + all used components
- Storybook library → Systematic component-by-component audit

### Step 2: Gather Context

```
Target: [component or page name]
Surface: [shopper/merchant/docs/marketing]
Files to reference:
  - surfaces/{surface}.rules.json
  - core-{component}.html (for each component used)
```

### Step 3: Execute Audit

Check for:
1. **Token violations** — Colors/spacing/typography not from the system
2. **Surface rule violations** — Using treatments not allowed for this surface
3. **Component spec violations** — Deviating from documented component patterns
4. **Composition violations** — Combining components in undocumented ways

### Step 4: Document Findings

For each violation:
```
VIOLATION: [Description]
LOCATION: [File:line or component:variant]
RULE: [Reference to specific rule violated]
FIX: [Specific correction needed]
```

---

## Workflow: Updating the Design System

Changes to the design system itself require careful consideration.

### Token Changes (tailwind.config.js, design-tokens.css)

1. Document the change rationale
2. Check all surfaces for impact
3. Update any affected component specs
4. Update any affected surface rules
5. Audit existing implementations for breakage

### Component Spec Changes (core-*.html)

1. Document the change rationale
2. Update the HTML spec page
3. Update Storybook components to match
4. Check surface rules for any conflicts
5. Audit existing usage in products

### Surface Rule Changes (surfaces/*.rules.json)

1. Document the change rationale
2. Update the JSON rules file
3. Update the corresponding color-strategy.html page
4. Audit existing pages on that surface

### Philosophy Changes (DESIGN_SYSTEM.md)

These are rare and significant. They cascade through everything.

---

## AI Integration

This design system is structured for AI-assisted development.

### Claude Project Setup

Create a Claude project "Saltwyk Design System" containing:

**Project Files:**
- `DESIGN_SYSTEM.md` — Philosophy and token documentation
- `DESIGN_SYSTEM_OPS.md` — This operations document
- `assets/config/tailwind.config.js` — Token definitions
- `assets/config/design-tokens.css` — CSS utilities
- `surfaces/shopper.rules.json` — Shopper surface rules
- `surfaces/merchant.rules.json` — Merchant surface rules
- `surfaces/docs.rules.json` — Docs surface rules
- `surfaces/marketing.rules.json` — Marketing surface rules

**Project Instructions:**
```
When generating or reviewing Saltwyk UI:

1. Always identify the target surface (shopper/merchant/docs/marketing)
2. Load and follow the surface rules from surfaces/{surface}.rules.json
3. Use only tokens defined in tailwind.config.js
4. Follow component patterns from the design system
5. Validate against the surface checklist before finalizing
6. Flag any rule violations found in existing code

Never:
- Invent new tokens not in the config
- Use thread colors outside the allowed range for the surface
- Put emerald on non-interactive elements (except marketing)
- Apply decorative treatments inconsistent with surface identity
```

### Claude Code Usage

For mechanical tasks that benefit from file system access:

**Inventory & Audit:**
```
"Inventory all design system files and create docs/INVENTORY.md"
"Compare core-buttons.html with the Button Storybook component"
"Extract semantic rules from shopper/color-strategy.html to JSON"
```

**Generation:**
```
"Generate a merchant dashboard card component following core-cards.html"
"Create the clearing balance progress bar per core-progress.html for merchant surface"
```

**Validation:**
```
"Audit this component against shopper surface rules: [code]"
"Check this page for design system violations: [file path]"
```

### What AI Should NOT Do

- Change the design system itself without human review
- Make cross-surface decisions (which surface something belongs to)
- Override explicit design philosophy
- Invent "improvements" to established patterns

---

## Surface Rules JSON Schema

Each surface has a rules file following this structure:

```json
{
  "surface": "shopper",
  "identity": "Traditional Opal",
  "description": "Warm, approachable, trustworthy",
  
  "thread_rules": {
    "decorative": {
      "allowed_range": "100-300",
      "forbidden_range": "400-600",
      "note": "Tints only for decoration"
    },
    "semantic": {
      "allowed_range": "400-600",
      "use_for": ["status indicators", "alerts", "badges"]
    },
    "placement": {
      "hero_thread_max": 1,
      "accent_thread_max": 2,
      "per_element": false
    }
  },
  
  "color_rules": {
    "emerald": {
      "allowed_on": ["buttons", "links", "interactive elements"],
      "forbidden_on": ["decorative", "static content", "borders"]
    },
    "backgrounds": {
      "allowed": ["ledger", "white", "bg-cool-tint", "bg-cool-wash"],
      "forbidden": ["full saturation gradients"]
    }
  },
  
  "validation_checklist": [
    "Decorative threads use 100-300 range (tints only)",
    "Full saturation (400-600) only for semantic meaning",
    "Emerald only appears on interactive elements",
    "Maximum one hero thread per page",
    "Thread accents on 1-2 featured elements, not all",
    "Page feels warm and approachable, not corporate"
  ]
}
```

---

## Storybook Integration

Storybook components must match the design system specs.

### Component Organization

```
packages/ui/src/components/
  ├── Button/
  │   ├── Button.tsx        # Component implementation
  │   ├── Button.stories.tsx # Storybook stories
  │   └── Button.test.tsx   # Tests
  └── ...
```

### Story Requirements

Each component's stories should demonstrate:
1. All variants documented in `core-{component}.html`
2. Light and dark mode (where applicable)
3. All sizes
4. All states (default, hover, active, disabled, error)
5. Surface-specific variants (if component differs by surface)

### Audit Process

When auditing Storybook against specs:

1. Open `core-{component}.html` in browser
2. Open component stories in Storybook
3. Compare visually, variant by variant
4. Check token usage in component source
5. Document any deviations

---

## File Naming Conventions

| Type | Pattern | Example |
|------|---------|---------|
| Component spec | `core-{component}.html` | `core-buttons.html` |
| Surface rules | `surfaces/{surface}.rules.json` | `surfaces/shopper.rules.json` |
| Surface color strategy | `{surface}/color-strategy.html` | `shopper/color-strategy.html` |
| Spec file (deprecated) | `docs/core-{component}-spec.md` | `docs/core-buttons-spec.md` |

**Note:** Markdown spec files in `docs/` are being deprecated. The HTML pages are the canonical component specs.

---

## Maintenance Checklist

### Weekly
- [ ] Review any new components for design system compliance
- [ ] Check for token drift in product code

### Monthly
- [ ] Full Storybook audit against specs
- [ ] Update INVENTORY.md if files added/removed
- [ ] Review surface rules for any needed updates

### Quarterly
- [ ] Design system retrospective
- [ ] Philosophy review (is it still serving us?)
- [ ] Surface rules review (any new patterns emerging?)

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 0.1.0 | Jan 2026 | Initial operations document |
