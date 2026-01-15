# Design System Inventory

**Generated:** January 2026
**Source of Truth:** `core-*.html` files (per DESIGN_SYSTEM_OPS.md)

---

## Component Specs

All `core-*.html` files in the repository root. These are the **canonical component specifications**.

| Filename | MD Spec Exists | Status |
|----------|----------------|--------|
| `core-animation.html` | No | HTML only |
| `core-avatars.html` | Yes (`core-avatars-spec.md`) | Both |
| `core-badges.html` | No | HTML only |
| `core-buttons.html` | No | HTML only |
| `core-cards.html` | No | HTML only |
| `core-colors.html` | Yes (`core-colors-page-spec.md`) | Both |
| `core-context-switcher.html` | Yes (`context-switcher-spec.md`) | Both |
| `core-dropdowns.html` | Yes (`core-dropdowns-spec.md`) | Both |
| `core-gradients.html` | No | HTML only |
| `core-inputs.html` | No | HTML only |
| `core-logos.html` | No | HTML only |
| `core-modals.html` | Yes (`core-modals-spec.md`) | Both |
| `core-navigation.html` | Yes (`core-navigation-spec.md`) | Both |
| `core-popovers.html` | Yes (`core-popovers-spec.md`) | Both |
| `core-progress.html` | Yes (`core-progress-spec.md`) | Both |
| `core-responsive.html` | No | HTML only |
| `core-spacing.html` | No | HTML only |
| `core-states.html` | No | HTML only |
| `core-tables.html` | Yes (`core-tables-spec.md`) | Both |
| `core-tabs.html` | Yes (`core-tabs-spec.md`) | Both |
| `core-threads.html` | No | HTML only |
| `core-toasts.html` | No | HTML only |
| `core-tooltips.html` | Yes (`core-tooltips-spec.md`) | Both |
| `core-typography.html` | No | HTML only |

**Total:** 24 component HTML files
**With MD specs:** 11
**HTML only:** 13

---

## Surface Documentation

### Shopper (`shopper/`)

| File | Purpose |
|------|---------|
| `shopper/index.html` | Surface entry point |
| `shopper/showcase.html` | Component showcase |
| `shopper/color-strategy.html` | Color strategy documentation |

### Merchant (`merchant/`)

| File | Purpose |
|------|---------|
| `merchant/index.html` | Surface entry point |
| `merchant/showcase.html` | Component showcase |
| `merchant/dashboard.html` | Dashboard example/reference |

### Marketing (`marketing/`)

| File | Purpose |
|------|---------|
| `marketing/index.html` | Surface entry point |
| `marketing/showcase.html` | Component showcase |

### Products (`products/`)

| File | Purpose |
|------|---------|
| `products/index.html` | Products entry point |
| `products/docs/color-strategy.html` | Docs surface color strategy |
| `products/marketing/color-strategy.html` | Marketing surface color strategy |
| `products/merchant/color-strategy.html` | Merchant surface color strategy |
| `products/shopper/color-strategy.html` | Shopper surface color strategy |
| `products/shopper/patterns.html` | Shopper UI patterns |

---

## Foundation Files

### Configuration (`assets/config/`)

| File | Purpose |
|------|---------|
| `assets/config/tailwind.config.js` | Token definitions (colors, spacing, typography) |
| `assets/config/design-tokens.css` | CSS utilities (gradients, threads, custom classes) |

### Root Documentation

| File | Purpose |
|------|---------|
| `DESIGN_SYSTEM.md` | Philosophy, visual language, token documentation |
| `DESIGN_SYSTEM_OPS.md` | Operational workflows and AI integration |
| `README.md` | Repository overview |

---

## Spec Files (`docs/`)

### Component Specs (Deprecated)

These MD files are being deprecated in favor of HTML specs:

| File | Corresponding HTML | Action |
|------|-------------------|--------|
| `core-avatars-spec.md` | `core-avatars.html` | Review for unique content, then delete |
| `core-colors-page-spec.md` | `core-colors.html` | Review for unique content, then delete |
| `core-dropdowns-spec.md` | `core-dropdowns.html` | Review for unique content, then delete |
| `core-modals-spec.md` | `core-modals.html` | Review for unique content, then delete |
| `core-navigation-spec.md` | `core-navigation.html` | Review for unique content, then delete |
| `core-popovers-spec.md` | `core-popovers.html` | Review for unique content, then delete |
| `core-progress-spec.md` | `core-progress.html` | Review for unique content, then delete |
| `core-tables-spec.md` | `core-tables.html` | Review for unique content, then delete |
| `core-tabs-spec.md` | `core-tabs.html` | Review for unique content, then delete |
| `core-tooltips-spec.md` | `core-tooltips.html` | Review for unique content, then delete |
| `context-switcher-spec.md` | `core-context-switcher.html` | Review for unique content, then delete |

### Other Documentation

| File | Type | Purpose |
|------|------|---------|
| `docs/index.html` | HTML | Documentation site entry point |
| `docs/showcase.html` | HTML | Overall component showcase |
| `docs/design-principles.md` | Markdown | Design principles documentation |
| `docs/saltwyk-component-plan.md` | Markdown | Component implementation plan |
| `docs/surface-shopper-color-strategy.md` | Markdown | Shopper color strategy (see also `shopper/color-strategy.html`) |

### Additional Files

| File | Purpose |
|------|---------|
| `assets/fonts/README.md` | Font asset documentation |

---

## Summary Table

| Component | HTML Spec | MD Spec | Storybook | Status |
|-----------|-----------|---------|-----------|--------|
| animation | ✓ | ✗ | Unknown | HTML is source |
| avatars | ✓ | ✓ | Unknown | Needs reconciliation |
| badges | ✓ | ✗ | Unknown | HTML is source |
| buttons | ✓ | ✗ | Unknown | HTML is source |
| cards | ✓ | ✗ | Unknown | HTML is source |
| colors | ✓ | ✓ | Unknown | Needs reconciliation |
| context-switcher | ✓ | ✓ | Unknown | Needs reconciliation |
| dropdowns | ✓ | ✓ | Unknown | Needs reconciliation |
| gradients | ✓ | ✗ | Unknown | HTML is source |
| inputs | ✓ | ✗ | Unknown | HTML is source |
| logos | ✓ | ✗ | Unknown | HTML is source |
| modals | ✓ | ✓ | Unknown | Needs reconciliation |
| navigation | ✓ | ✓ | Unknown | HTML is source |
| popovers | ✓ | ✓ | Unknown | Needs reconciliation |
| progress | ✓ | ✓ | Unknown | Needs reconciliation |
| responsive | ✓ | ✗ | N/A | HTML is source (foundation) |
| spacing | ✓ | ✗ | N/A | HTML is source (foundation) |
| states | ✓ | ✗ | N/A | HTML is source (foundation) |
| tables | ✓ | ✓ | Unknown | Needs reconciliation |
| tabs | ✓ | ✓ | Unknown | Needs reconciliation |
| threads | ✓ | ✗ | N/A | HTML is source (foundation) |
| toasts | ✓ | ✗ | Unknown | HTML is source |
| tooltips | ✓ | ✓ | Unknown | Needs reconciliation |
| typography | ✓ | ✗ | N/A | HTML is source (foundation) |

**Legend:**
- ✓ = Exists
- ✗ = Does not exist
- Unknown = Storybook access not available; needs verification against turborepo UI package
- N/A = Foundation/utility spec, not a component

---

## Recommendations

### 1. MD Spec Files to Delete

The following 11 MD spec files should be reviewed and deleted once confirmed that all unique content has been migrated to the HTML specs:

1. `docs/core-avatars-spec.md`
2. `docs/core-colors-page-spec.md`
3. `docs/core-dropdowns-spec.md`
4. `docs/core-modals-spec.md`
5. `docs/core-navigation-spec.md`
6. `docs/core-popovers-spec.md`
7. `docs/core-progress-spec.md`
8. `docs/core-tables-spec.md`
9. `docs/core-tabs-spec.md`
10. `docs/core-tooltips-spec.md`
11. `docs/context-switcher-spec.md` (note: missing `core-` prefix)

**Process:** Before deleting each file, diff against the HTML spec to ensure no unique information is lost.

### 2. Missing Surface Rules

Per `DESIGN_SYSTEM_OPS.md`, surface rules should exist at `surfaces/{surface}.rules.json`. The `surfaces/` directory does not exist yet. Create:

- `surfaces/shopper.rules.json`
- `surfaces/merchant.rules.json`
- `surfaces/docs.rules.json`
- `surfaces/marketing.rules.json`

These can be extracted from the existing color-strategy HTML pages.

### 3. Duplicate Color Strategy Documentation

There appear to be two sets of color strategy files:

- `shopper/color-strategy.html` and `docs/surface-shopper-color-strategy.md`
- `products/*/color-strategy.html` files

**Recommendation:** Consolidate color strategy documentation. The `products/*/color-strategy.html` files appear to be the canonical location. Consider removing `docs/surface-shopper-color-strategy.md` after extracting to JSON rules.

### 4. Storybook Verification Needed

All 24 components have "Unknown" Storybook status. To complete this inventory:

1. Access the turborepo UI package
2. Cross-reference each `core-*.html` with Storybook stories
3. Update this inventory with actual Storybook coverage

### 5. Documentation Gaps

Components with HTML specs but no deeper documentation (may be intentional for simple components):

- `core-animation.html` - Animation utilities/tokens
- `core-badges.html` - Badge component
- `core-buttons.html` - Button component
- `core-cards.html` - Card component
- `core-gradients.html` - Gradient utilities
- `core-inputs.html` - Input component
- `core-logos.html` - Logo assets
- `core-toasts.html` - Toast component

**Note:** This may be acceptable if the HTML specs are comprehensive. No action required unless gaps are discovered during implementation.

### 6. File Naming Inconsistency

`docs/context-switcher-spec.md` is missing the `core-` prefix that other spec files have. If keeping (not recommended), rename to `docs/core-context-switcher-spec.md` for consistency.

---

## Next Steps

1. **Immediate:** Create `surfaces/` directory and extract rules from color-strategy pages
2. **Short-term:** Review each MD spec file against HTML, migrate unique content, delete duplicates
3. **Ongoing:** Verify Storybook coverage when turborepo access is available
4. **Maintenance:** Update this inventory when files are added/removed (see DESIGN_SYSTEM_OPS.md maintenance checklist)
