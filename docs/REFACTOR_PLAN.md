# Design System Directory Refactor Plan

**Status:** Approved  
**Created:** January 2026  
**Goal:** Clean, scalable structure that supports product surface design work

---

## Phasing Overview

| Phase | Scope | Timing |
|-------|-------|--------|
| **Phase 1** | Products structure consolidation | Now (before shopper work) |
| **Phase 2** | Foundation & Components reorganization | After shopper screens complete |
| **Phase 3** | Cleanup & verification | After Phase 2 |

---

## Phase 1: Products Structure Consolidation (NOW)

### Objective
Consolidate all surface-related content under `/products/` so shopper screen design work has a clean home.

### Directory Changes

**Create:**
```
products/
├── shopper/
│   └── screens/          # NEW - for product screen designs
├── merchant/
│   └── screens/          # NEW - for product screen designs
├── marketing/
│   └── pages/            # NEW - for marketing page designs
│   └── components/       # NEW - for marketing-specific components
└── docs/
```

**Move:**
| From | To |
|------|-----|
| `shopper/index.html` | `products/shopper/index.html` (merge content) |
| `shopper/showcase.html` | `products/shopper/showcase.html` |
| `merchant/index.html` | `products/merchant/index.html` (merge content) |
| `merchant/showcase.html` | `products/merchant/showcase.html` |
| `merchant/dashboard.html` | `products/merchant/screens/dashboard.html` |
| `marketing/index.html` | `products/marketing/index.html` (merge content) |
| `marketing/showcase.html` | `products/marketing/showcase.html` |
| `marketing-heroes.html` | `products/marketing/components/heroes.html` |
| `marketing-illustrations.html` | `products/marketing/components/illustrations.html` |
| `marketing-illustration-system.html` | `products/marketing/components/illustration-system.html` |
| `marketing-components.html` | `products/marketing/components/components.html` |
| `product-checkout-widget.html` | `products/shopper/screens/checkout-widget.html` |
| `product-shopper-passport.html` | `products/shopper/screens/passport.html` |
| `product-surfaces.html` | `products/index.html` (merge content) |
| `product-components.html` | DELETE (content merged or obsolete) |

**Delete directories:**
- `shopper/` (root level)
- `merchant/` (root level)
- `marketing/` (root level)

**Rename:**
| From | To |
|------|-----|
| `surfaces/` | `rules/` |

**Move brand files:**
| From | To |
|------|-----|
| `brand.json` | `assets/brand/brand.json` |
| `brand.txt` | `assets/brand/brand.txt` |

### Navigation Updates

Update these files to reflect new paths:
- `partials/side-nav-products.html`
- `partials/top-nav.html`
- `assets/partials/nav.html`
- `products/index.html`
- Any cross-links in moved files

### Result After Phase 1

```
saltwyk-design/
├── index.html
├── sitemap.html
├── README.md
├── DESIGN_SYSTEM.md
├── DESIGN_SYSTEM_OPS.md
│
├── assets/
│   ├── brand/                    # NEW location
│   │   ├── brand.json
│   │   └── brand.txt
│   ├── config/
│   ├── fonts/
│   ├── logos/
│   └── partials/
│
├── rules/                        # RENAMED from surfaces/
│   ├── README.md
│   ├── shopper.rules.json
│   ├── merchant.rules.json
│   ├── marketing.rules.json
│   └── docs.rules.json
│
├── products/                     # CONSOLIDATED
│   ├── index.html
│   ├── shopper/
│   │   ├── index.html
│   │   ├── color-strategy.html
│   │   ├── patterns.html
│   │   ├── showcase.html
│   │   └── screens/              # NEW
│   │       ├── checkout-widget.html
│   │       └── passport.html
│   ├── merchant/
│   │   ├── index.html
│   │   ├── color-strategy.html
│   │   ├── showcase.html
│   │   └── screens/              # NEW
│   │       └── dashboard.html
│   ├── marketing/
│   │   ├── index.html
│   │   ├── color-strategy.html
│   │   ├── showcase.html
│   │   ├── pages/                # NEW (empty, ready for work)
│   │   └── components/           # NEW
│   │       ├── heroes.html
│   │       ├── illustrations.html
│   │       ├── illustration-system.html
│   │       └── components.html
│   └── docs/
│       ├── index.html
│       └── color-strategy.html
│
├── core-*.html                   # UNCHANGED (Phase 2)
├── core-dropdowns/               # UNCHANGED (Phase 2)
├── core-navigation/              # UNCHANGED (Phase 2)
├── core-tables/                  # UNCHANGED (Phase 2)
│
├── components/                   # UNCHANGED (Phase 2)
├── foundation/                   # UNCHANGED (Phase 2)
├── docs/                         # UNCHANGED (Phase 2)
├── partials/                     # Updated links only
└── refs/                         # UNCHANGED
```

---

## Phase 2: Foundation & Components Reorganization (LATER)

### Objective
Move all `core-*.html` files into proper directories, establish component folder structure.

### Foundation Directory

**Move to `foundation/`:**
| From | To |
|------|-----|
| `core-colors.html` | `foundation/colors.html` |
| `core-typography.html` | `foundation/typography.html` |
| `core-spacing.html` | `foundation/spacing.html` |
| `core-gradients.html` | `foundation/gradients.html` |
| `core-threads.html` | `foundation/threads.html` |
| `core-responsive.html` | `foundation/responsive.html` |
| `core-states.html` | `foundation/states.html` |
| `core-animation.html` | `foundation/animation.html` |

### Components Directory

**Structure:** Every component gets a folder, even if just one file.

```
components/
├── index.html
├── buttons/
│   └── index.html          # ← core-buttons.html
├── inputs/
│   └── index.html          # ← core-inputs.html
├── badges/
│   └── index.html          # ← core-badges.html
├── avatars/
│   └── index.html          # ← core-avatars.html
├── cards/
│   └── index.html          # ← core-cards.html
├── modals/
│   └── index.html          # ← core-modals.html
├── toasts/
│   └── index.html          # ← core-toasts.html
├── tooltips/
│   └── index.html          # ← core-tooltips.html
├── popovers/
│   └── index.html          # ← core-popovers.html
├── progress/
│   └── index.html          # ← core-progress.html
├── tabs/
│   └── index.html          # ← core-tabs.html
├── context-switcher/
│   └── index.html          # ← core-context-switcher.html
├── logos/
│   └── index.html          # ← core-logos.html
├── dropdowns/              # Already split
│   ├── index.html
│   ├── select.html
│   ├── multiselect.html
│   ├── combobox.html
│   └── action.html
├── navigation/             # Already split
│   ├── index.html
│   ├── topnav.html
│   ├── sidebar.html
│   ├── bottomnav.html
│   └── breadcrumbs.html
└── tables/                 # Already split
    ├── index.html
    ├── base.html
    ├── interactive.html
    ├── responsive.html
    └── states.html
```

### Docs Directory Cleanup

**Keep:**
- `docs/index.html` (landing page)
- `docs/design-principles.md`
- `docs/INVENTORY.md`
- `docs/CYAN_AUDIT.md`
- `docs/component-plan.md` (renamed from saltwyk-component-plan.md)

**Delete:**
- All `docs/core-*-spec.md` files (HTML is source of truth)
- `docs/context-switcher-spec.md`
- `docs/surface-shopper-color-strategy.md` (duplicate)
- `docs/showcase.html` (orphaned)

### Navigation Updates

- `partials/side-nav-foundation.html` → point to `foundation/*.html`
- `partials/side-nav-components.html` → point to `components/*/index.html`

---

## Phase 3: Cleanup & Verification (LATER)

### Tasks

1. **Delete empty root-level files:**
   - `core-dropdowns.html` (replaced by `components/dropdowns/index.html`)
   - `core-navigation.html` (replaced by `components/navigation/index.html`)
   - `core-tables.html` (replaced by `components/tables/index.html`)

2. **Consolidate partials:**
   - Move `assets/partials/nav.html` to `partials/nav.html`
   - Update any references

3. **Verify all navigation:**
   - Test every link in side navs
   - Test every link in top nav
   - Test sitemap links

4. **Update sitemap files:**
   - `sitemap.html`
   - `sitemap.json`
   - `sitemap.xml`

5. **Update operational docs:**
   - `DESIGN_SYSTEM_OPS.md` - reflect new paths
   - `rules/README.md` - reflect new paths
   - `docs/INVENTORY.md` - regenerate

---

## Final Structure (After All Phases)

```
saltwyk-design/
│
├── index.html
├── sitemap.html
├── README.md
├── DESIGN_SYSTEM.md
├── DESIGN_SYSTEM_OPS.md
│
├── assets/
│   ├── brand/
│   │   ├── brand.json
│   │   └── brand.txt
│   ├── config/
│   │   ├── design-tokens.css
│   │   └── tailwind.config.js
│   ├── fonts/
│   └── logos/
│
├── partials/
│   ├── nav.html
│   ├── nav-loader.js
│   ├── side-nav-foundation.html
│   ├── side-nav-components.html
│   ├── side-nav-products.html
│   └── top-nav.html
│
├── rules/
│   ├── README.md
│   ├── shopper.rules.json
│   ├── merchant.rules.json
│   ├── marketing.rules.json
│   └── docs.rules.json
│
├── foundation/
│   ├── index.html
│   ├── colors.html
│   ├── typography.html
│   ├── spacing.html
│   ├── gradients.html
│   ├── threads.html
│   ├── responsive.html
│   ├── states.html
│   └── animation.html
│
├── components/
│   ├── index.html
│   ├── buttons/
│   ├── inputs/
│   ├── badges/
│   ├── avatars/
│   ├── cards/
│   ├── modals/
│   ├── toasts/
│   ├── tooltips/
│   ├── popovers/
│   ├── progress/
│   ├── tabs/
│   ├── context-switcher/
│   ├── logos/
│   ├── dropdowns/
│   ├── navigation/
│   └── tables/
│
├── products/
│   ├── index.html
│   ├── shopper/
│   │   ├── index.html
│   │   ├── color-strategy.html
│   │   ├── patterns.html
│   │   ├── showcase.html
│   │   └── screens/
│   ├── merchant/
│   │   ├── index.html
│   │   ├── color-strategy.html
│   │   ├── showcase.html
│   │   └── screens/
│   ├── marketing/
│   │   ├── index.html
│   │   ├── color-strategy.html
│   │   ├── showcase.html
│   │   ├── pages/
│   │   └── components/
│   └── docs/
│       ├── index.html
│       └── color-strategy.html
│
├── docs/
│   ├── index.html
│   ├── design-principles.md
│   ├── INVENTORY.md
│   ├── CYAN_AUDIT.md
│   └── component-plan.md
│
└── refs/
    └── (archived test files)
```

---

## Success Criteria

**Phase 1 Complete When:**
- [ ] No `shopper/`, `merchant/`, `marketing/` directories at root
- [ ] All product screens in `products/{surface}/screens/`
- [ ] All marketing components in `products/marketing/components/`
- [ ] `surfaces/` renamed to `rules/`
- [ ] Brand files in `assets/brand/`
- [ ] All navigation links work
- [ ] Ready to build shopper screens in clean structure

**Phase 2 Complete When:**
- [ ] No `core-*.html` files at root
- [ ] All foundation content in `foundation/`
- [ ] All components in `components/{name}/`
- [ ] All spec.md files deleted from `docs/`
- [ ] Navigation updated and working

**Phase 3 Complete When:**
- [ ] All orphaned files deleted
- [ ] Partials consolidated
- [ ] Sitemaps updated
- [ ] Operational docs updated
- [ ] Full navigation test passed
