# Design System Spec Audit

**Generated:** January 2026
**Purpose:** Compare MD spec files against HTML spec files to identify content differences, conflicts, and migration needs.

---

## Summary

| Component | MD Spec | HTML Spec | Recommendation | Priority |
|-----------|---------|-----------|----------------|----------|
| avatars | `core-avatars-spec.md` | `core-avatars.html` | Needs reconciliation | High |
| colors | `core-colors-page-spec.md` | `core-colors.html` | Safe to delete | Low |
| context-switcher | `context-switcher-spec.md` | `core-context-switcher.html` | Safe to delete | Low |
| dropdowns | `core-dropdowns-spec.md` | `core-dropdowns.html` | Needs review (HTML too large) | Medium |
| modals | `core-modals-spec.md` | `core-modals.html` | Safe to delete | Low |
| navigation | `core-navigation-spec.md` | `core-navigation.html` | Needs review (HTML too large) | Medium |
| popovers | `core-popovers-spec.md` | `core-popovers.html` | Safe to delete | Low |
| progress | `core-progress-spec.md` | `core-progress.html` | Safe to delete | Low |
| tables | `core-tables-spec.md` | `core-tables.html` | Needs review (HTML too large) | Medium |
| tabs | `core-tabs-spec.md` | `core-tabs.html` | Needs reconciliation | High |
| tooltips | `core-tooltips-spec.md` | `core-tooltips.html` | Safe to delete | Low |

**Totals:**
- Safe to delete: 7
- Needs reconciliation: 2 (avatars, tabs)
- Needs review: 3 (dropdowns, navigation, tables - HTML files too large for full comparison)

---

## Critical Finding: Color Token Discrepancy

**Issue:** The MD specs and HTML specs use different colors for focus/selection states.

| Component | MD Spec Color | HTML Spec Color | Element |
|-----------|--------------|-----------------|---------|
| avatars | `emerald-500` | `indigo-500` | Focus ring, selected state |
| tabs | `emerald-500` | `indigo-500` | Active underline/background |
| context-switcher | `emerald-500` | `indigo-500` | Active option background |
| popovers | Not specified | `indigo-500` | Input focus ring |

**Resolution Required:** Determine canonical color for focus/selection states:
- **Emerald** = Interactive (buttons, links) — per `DESIGN_SYSTEM.md`
- **Indigo** = Focus/selection states — implemented in HTML specs

**Recommendation:** The HTML specs appear to correctly distinguish between:
- Emerald = Interactive action (clicking does something)
- Indigo = Selection/focus state (visual feedback)

Update MD specs to use indigo for focus/selection before deleting.

---

## Component-by-Component Analysis

### 1. Avatars

**Files:** `docs/core-avatars-spec.md` ↔ `core-avatars.html`

**Status:** ⚠️ Needs Reconciliation

#### Content Comparison

| Section | In MD | In HTML | Notes |
|---------|-------|---------|-------|
| Philosophy | ✓ | ✓ | Identical content |
| Anatomy | ✓ | ✓ | Identical |
| Base Specifications | ✓ | ✓ | Identical |
| Size Scale | ✓ | ✓ | Identical (24-96px) |
| Avatar Types (Image, Initials, Icon) | ✓ | ✓ | Identical |
| Initials Color Variants | ✓ | ✓ | Identical 5-color rotation |
| States | ✓ | ✓ | **CONFLICT: Different focus colors** |
| Status Indicator | ✓ | ✓ | Identical |
| Badge | ✓ | ✓ | Identical |
| Avatar Group | ✓ | ✓ | Identical |
| Contextual Examples | ✓ | ✓ | HTML has live demos |
| Code Reference | ✓ | ✓ | MD uses `@apply`, HTML inline |
| Implementation Checklist | ✓ | ✓ | Identical items |

#### Conflict Details

**MD Spec (lines 91-104):**
```
| Hover (interactive) | none | 0 0 0 2px warm-200 |
| Focus (interactive) | 2px emerald-500 ring | none |
| Selected | 2px emerald-500 | none |
```

**HTML Spec (lines 197-214):**
```css
.avatar-interactive:focus {
  box-shadow: 0 0 0 2px white, 0 0 0 4px hsl(var(--indigo-500));
}
.avatar-interactive.selected {
  box-shadow: 0 0 0 2px hsl(var(--indigo-500));
}
```

#### Recommendation

1. **Update MD spec** to use `indigo-500` for focus/selection states
2. **Delete MD spec** after update (HTML is more comprehensive with live demos)

---

### 2. Colors Page

**Files:** `docs/core-colors-page-spec.md` ↔ `core-colors.html`

**Status:** ✅ Safe to Delete

#### Content Comparison

| Section | In MD | In HTML | Notes |
|---------|-------|---------|-------|
| Problem Statement | ✓ | ✗ | Historical context only |
| Intaglio Palette Proposal | ✓ | ✓ | Fully implemented in HTML |
| Sepia Scale | ✓ | ✓ | In HTML |
| Sienna Scale | ✓ | ✓ | In HTML |
| Slate Scale | ✓ | ✓ | In HTML |
| Indigo Scale | ✓ | ✓ | In HTML |
| Burgundy Scale | ✓ | ✓ | In HTML |
| Revised Guidance | ✓ | ✓ | In HTML |
| Page Structure | ✓ | ✓ | HTML follows this structure |
| Implementation Checklist | ✓ | N/A | All items completed |
| Open Questions | ✓ | N/A | Historical; resolved |

#### Unique Content in MD (to review before deletion)

**Open Questions (lines 254-264):**
- HSL value refinement - values appear finalized in HTML
- Lime's role - documented in HTML
- Scale depth - full scales implemented
- "Intaglio Palette" naming - used in HTML

**None of these questions remain unresolved.**

#### Recommendation

**Safe to delete.** The MD file was an enhancement proposal; all proposed content has been implemented in the HTML spec.

---

### 3. Context Switcher

**Files:** `docs/context-switcher-spec.md` ↔ `core-context-switcher.html`

**Status:** ✅ Safe to Delete

#### Content Comparison

| Section | In MD | In HTML | Notes |
|---------|-------|---------|-------|
| Philosophy | ✓ | ✓ | Identical |
| Use Cases | ✓ | ✓ | Identical |
| Anatomy | ✓ | ✓ | Identical |
| Placement Options | ✓ | ✗ | General guidance only |
| Context Indicator Specs | ✓ | ✓ | Identical |
| Switcher Menu Specs | ✓ | ✓ | Identical |
| Visual Context Reinforcement | ✓ | ✓ | Live demos in HTML |
| Collapsed State | ✓ | ✓ | Live demos in HTML |
| Multi-Organization Switcher | ✓ | ✓ | Live demos in HTML |
| Mobile Behavior | ✓ | ✓ | Identical specs |
| Accessibility | ✓ | ✓ | Identical |
| Code Reference | ✓ | ✓ | Both have CSS |
| Implementation Checklist | ✓ | ✓ | Identical |

#### Unique Content in MD (to review before deletion)

**Placement Options (lines 39-58):**
```
### In Sidebar (Primary)
- Position: Top of sidebar, below logo

### In Header (Alternative)
- Position: Left side of header, after logo

### In User Menu (Compact)
- Position: Top of user menu dropdown
```

This is general guidance that doesn't need to be in the spec file.

**Transition Animation (lines 157-168):**
```
1. Menu closes
2. Brief loading state (if needed)
3. Full page transition (fade or slide)
4. New context loads
Duration: 300-400ms total
```

This is documented in HTML Section 9 (Mobile Behavior).

#### Recommendation

**Safe to delete.** All content is in HTML spec. The file naming inconsistency (`context-switcher-spec.md` missing `core-` prefix) is another reason to remove it.

---

### 4. Dropdowns

**Files:** `docs/core-dropdowns-spec.md` ↔ `core-dropdowns.html`

**Status:** ⚠️ Needs Review (HTML too large for full comparison)

#### Content in MD Spec (620 lines)

| Section | Lines | Description |
|---------|-------|-------------|
| Philosophy | 3-8 | Core principles |
| Dropdown Types Overview | 10-20 | Select, Action, Nav, Context, Combobox |
| Anatomy | 22-35 | All component parts |
| Menu Container Specs | 37-50 | Dimensions, colors |
| Menu Item Specs | 52-89 | States light/dark |
| Select Menu | 91-116 | Form dropdown details |
| Action Menu | 118-139 | Button dropdown |
| Combobox | 141-165 | Searchable dropdown |
| Multi-Select | 167-190 | Checkbox dropdown |
| Menu Item Variants | 192-229 | With icon, description, etc. |
| Dividers and Groups | 231-252 | Section styling |
| Positioning and Overflow | 254-278 | Flip behavior, scrolling |
| Animation | 280-319 | Enter/exit keyframes |
| Keyboard Navigation | 321-340 | All key bindings |
| Accessibility | 342-377 | ARIA patterns |
| Contextual Examples | 379-388 | 6 examples to build |
| Code Reference | 390-580 | Full CSS |
| Implementation Checklist | 582-620 | All checkpoints |

#### Recommendation

**Review HTML file in sections** to verify all content is present. Given the HTML file is 28,806 tokens, it likely contains all this content plus live demos. Recommend:

1. Spot-check key sections in HTML (keyboard nav, accessibility, multi-select)
2. If all present, safe to delete MD

---

### 5. Modals

**Files:** `docs/core-modals-spec.md` ↔ `core-modals.html`

**Status:** ✅ Safe to Delete

#### Content Comparison

| Section | In MD | In HTML | Notes |
|---------|-------|---------|-------|
| Philosophy | ✓ | ✓ | HTML has icon cards |
| Anatomy | ✓ | ✓ | Visual diagram in HTML |
| Base Specifications | ✓ | ✓ | Identical |
| Size Scale | ✓ | ✓ | 400-1000px |
| Modal Types | ✓ | ✓ | Alert, Confirmation, Form, Info |
| States Light/Dark | ✓ | ✓ | Identical |
| Header Patterns | ✓ | ✓ | Simple, with subtitle, icon, status, destructive |
| Footer Patterns | ✓ | ✓ | 1-3 actions, destructive, loading |
| Animation | ✓ | ✓ | Keyframes identical |
| Scrolling Behavior | ✓ | ✓ | Max-height 90vh |
| Focus Management | ✓ | ✓ | Trap, return, ESC |
| Backdrop Behavior | ✓ | ✓ | Click to close |
| Mobile Behavior | ✓ | ✓ | Bottom sheet option |
| Accessibility | ✓ | ✓ | ARIA patterns |
| Contextual Examples | ✓ | ✓ | HTML has live demos |
| Code Reference | ✓ | ✓ | Both have CSS |
| Implementation Checklist | ✓ | ✓ | Identical |

#### Recommendation

**Safe to delete.** HTML spec is comprehensive with live demos. No unique content in MD.

---

### 6. Navigation

**Files:** `docs/core-navigation-spec.md` ↔ `core-navigation.html`

**Status:** ⚠️ Needs Review (HTML too large for full comparison)

#### Content in MD Spec (546 lines)

| Section | Lines | Description |
|---------|-------|-------------|
| Philosophy | 3-8 | Core principles |
| Navigation Types | 10-20 | Sidebar, Top, Breadcrumbs, Bottom, Tabs |
| Sidebar Anatomy | 22-35 | All component parts |
| Sidebar Light Mode | 37-106 | Container, logo, section header, nav item states, divider, user area |
| Sidebar Dark Mode (Fire Opal) | 108-172 | Same for dark theme |
| Sidebar Collapsed | 174-207 | Width 64px, tooltips |
| Nav Item with Badge | 209-219 | Count, status, text badges |
| Nested Navigation | 221-234 | Parent/child items |
| Breadcrumbs | 236-261 | Light/dark specs |
| Top Navigation | 263-298 | Header nav pattern |
| Mobile Bottom Navigation | 300-329 | Fixed bottom bar |
| Accessibility | 331-358 | ARIA, keyboard |
| Contextual Examples | 360-368 | 5 examples |
| Code Reference | 370-505 | Full CSS |
| Implementation Checklist | 507-546 | All checkpoints |

#### Recommendation

**Review HTML file in sections.** Key items to verify:
- Thread line divider option below logo (lines 158-162)
- Nested navigation patterns (lines 221-234)
- Mobile bottom navigation (lines 300-329)

---

### 7. Popovers

**Files:** `docs/core-popovers-spec.md` ↔ `core-popovers.html`

**Status:** ✅ Safe to Delete

#### Content Comparison

| Section | In MD | In HTML | Notes |
|---------|-------|---------|-------|
| Philosophy | ✓ | ✓ | Identical |
| Anatomy | ✓ | ✓ | Visual diagram in HTML |
| Base Specifications | ✓ | ✓ | Identical (8px border-radius, 200-360px) |
| Popover Types | ✓ | ✓ | Simple, Header, Footer, Form |
| Positioning | ✓ | ✓ | Same as tooltip |
| Arrow Specs | ✓ | ✓ | 8px size |
| Behavior | ✓ | ✓ | Open/close, focus trap |
| Animation | ✓ | ✓ | Keyframes identical |
| States Light/Dark | ✓ | ✓ | Identical |
| Accessibility | ✓ | ✓ | ARIA patterns |
| Contextual Examples | ✓ | ✓ | HTML has live demos |
| Code Reference | ✓ | ✓ | Both have CSS |
| Implementation Checklist | ✓ | ✓ | Identical |

#### Note on Focus States

HTML uses `indigo-500` for input focus rings (lines 264-277):
```css
.demo-input:focus {
  border-color: hsl(var(--indigo-500));
  box-shadow: 0 0 0 3px hsl(var(--indigo-500) / 15%);
}
```

This is consistent with the HTML spec pattern of using indigo for focus.

#### Recommendation

**Safe to delete.** HTML spec is comprehensive with live demos.

---

### 8. Progress

**Files:** `docs/core-progress-spec.md` ↔ `core-progress.html`

**Status:** ✅ Safe to Delete

#### Content Comparison

| Section | In MD | In HTML | Notes |
|---------|-------|---------|-------|
| Philosophy | ✓ | ✓ | Identical |
| Progress Types | ✓ | ✓ | Bar, Circular, Spinner, Skeleton, Stepper |
| Progress Bar | ✓ | ✓ | Sizes 4/8/12px, variants |
| With Label | ✓ | ✓ | Position, text styles |
| Circular Progress | ✓ | ✓ | Sizes 32-96px |
| Spinner | ✓ | ✓ | Sizes 12-48px, 750ms rotation |
| Skeleton | ✓ | ✓ | Shimmer animation |
| Stepper | ✓ | ✓ | States, connectors |
| Contextual Examples | ✓ | ✓ | HTML has live demos |
| Code Reference | ✓ | ✓ | Both have CSS |
| Implementation Checklist | ✓ | ✓ | Identical |

#### Recommendation

**Safe to delete.** HTML spec is comprehensive with live demos. No unique content in MD.

---

### 9. Tables

**Files:** `docs/core-tables-spec.md` ↔ `core-tables.html`

**Status:** ⚠️ Needs Review (HTML too large for full comparison)

#### Content in MD Spec (423 lines)

| Section | Lines | Description |
|---------|-------|-------------|
| Philosophy | 3-8 | Core principles |
| Anatomy | 10-18 | Container, header, body, cells, footer |
| Base Specifications | 20-37 | Font sizes, heights, padding |
| Table Variants Light | 39-75 | Default, Striped, Bordered, Minimal |
| Table Variants Dark | 77-97 | Same for dark theme |
| Row States | 99-128 | Hover, Selected, Active, Disabled |
| Column Types | 130-171 | Text, Number, Currency, Date, Status, Actions |
| Sortable Columns | 173-188 | Sort indicators |
| Selectable Rows | 190-209 | Checkbox column, bulk actions |
| Expandable Rows | 211-227 | Chevron trigger, expanded content |
| Empty State | 229-238 | Message and action |
| Loading State | 240-255 | Skeleton rows, spinner |
| Pagination | 257-274 | Bar styles |
| Responsive Behavior | 276-294 | Scroll, priority columns, card transform |
| Contextual Examples | 296-304 | 5 examples |
| Code Reference | 306-388 | Full CSS |
| Implementation Checklist | 390-423 | All checkpoints |

#### Recommendation

**Review HTML file in sections.** Key items to verify:
- Currency column styling with +/- signs (lines 143-151)
- Expandable rows pattern (lines 211-227)
- Card transformation for mobile (lines 290-294)

---

### 10. Tabs

**Files:** `docs/core-tabs-spec.md` ↔ `core-tabs.html`

**Status:** ⚠️ Needs Reconciliation

#### Content Comparison

| Section | In MD | In HTML | Notes |
|---------|-------|---------|-------|
| Philosophy | ✓ | ✓ | Identical |
| Anatomy | ✓ | ✓ | Identical |
| Base Specifications | ✓ | ✓ | Identical |
| Underline Tabs | ✓ | ✓ | **CONFLICT: Different active colors** |
| Pill Tabs | ✓ | ✓ | **CONFLICT: Different active colors** |
| Boxed Tabs | ✓ | ✓ | Identical |
| Vertical Tabs | ✓ | ✓ | **CONFLICT: Different active colors** |
| Tab with Icon | ✓ | ✓ | Identical |
| Tab with Badge | ✓ | ✓ | Identical |
| Tab with Close | ✓ | ✓ | Identical |
| Scrollable Tabs | ✓ | ✓ | Identical |
| Animation | ✓ | ✓ | Identical |
| Keyboard Navigation | ✓ | ✓ | Identical |
| Accessibility | ✓ | ✓ | Identical |
| Code Reference | ✓ | ✓ | **CONFLICT: Different colors in CSS** |
| Implementation Checklist | ✓ | ✓ | **CONFLICT: Different colors** |

#### Conflict Details

**MD Spec - Underline Tabs (lines 45-46):**
```
| Active | `ink` | `emerald-500` (2px bottom) |
```

**HTML Spec uses `indigo` for active states:**
```css
.sidebar-item-active {
  background: hsl(var(--indigo-50));
  color: hsl(var(--indigo-600));
}
```

**MD Spec - Pill Tabs (lines 68-69):**
```
| Active | `emerald-100` | `emerald-700` |
```

**MD Spec - Vertical Tabs (lines 120-121):**
```
| Active | `emerald-50` | `emerald-700` | `emerald-500` left (3px) |
```

#### Recommendation

1. **Determine canonical color:**
   - If tabs use indigo for active state (selection), update MD
   - If tabs use emerald for active state (interactive), update HTML

2. **Resolution:** Based on the HTML implementation pattern where indigo = selection/focus state, the HTML appears correct. Update MD spec to use indigo, then delete.

---

### 11. Tooltips

**Files:** `docs/core-tooltips-spec.md` ↔ `core-tooltips.html`

**Status:** ✅ Safe to Delete

#### Content Comparison

| Section | In MD | In HTML | Notes |
|---------|-------|---------|-------|
| Philosophy | ✓ | ✓ | Identical |
| Anatomy | ✓ | ✓ | Visual diagram in HTML |
| Base Specifications | ✓ | ✓ | Minor difference in background |
| Tooltip Variants | ✓ | ✓ | Simple, Multi-line, Title, Shortcut |
| Positioning | ✓ | ✓ | All placements |
| Arrow Specs | ✓ | ✓ | 6px size |
| Behavior | ✓ | ✓ | Show/hide delays |
| Animation | ✓ | ✓ | Keyframes identical |
| Accessibility | ✓ | ✓ | ARIA patterns |
| Contextual Examples | ✓ | ✓ | HTML has live demos |
| Code Reference | ✓ | ✓ | Both have CSS |
| Implementation Checklist | ✓ | ✓ | Identical |

#### Minor Difference

**MD Spec (lines 24-25):**
```
| Background (light) | `intaglio-900` |
| Background (dark) | `intaglio-700` |
```

**HTML Spec (lines 52-53):**
```css
background: hsl(var(--ink));
```

The HTML uses `ink` which is effectively the same as `intaglio-900`. This is not a conflict, just a different token reference.

#### Recommendation

**Safe to delete.** HTML spec is comprehensive with live demos. The background color difference is semantic (both refer to the same dark color).

---

## Migration Tasks

### High Priority

1. **Resolve color token discrepancy** for focus/selection states
   - Decision: Use `indigo-500` for focus/selection (HTML pattern)
   - Update `core-avatars-spec.md` before deletion
   - Update `core-tabs-spec.md` before deletion

### Medium Priority

2. **Review large HTML files** to confirm MD content is present:
   - `core-dropdowns.html` vs `core-dropdowns-spec.md`
   - `core-navigation.html` vs `core-navigation-spec.md`
   - `core-tables.html` vs `core-tables-spec.md`

### Low Priority

3. **Delete confirmed safe-to-delete files:**
   - `docs/core-colors-page-spec.md`
   - `docs/context-switcher-spec.md`
   - `docs/core-modals-spec.md`
   - `docs/core-popovers-spec.md`
   - `docs/core-progress-spec.md`
   - `docs/core-tooltips-spec.md`

---

## Deletion Checklist

Before deleting each MD spec file:

- [ ] Confirm all unique content is in HTML spec
- [ ] Resolve any color token conflicts
- [ ] Update `docs/INVENTORY.md` to reflect deletion
- [ ] Commit with message: "Remove deprecated {component} MD spec"

| File | Reviewed | Conflicts Resolved | Deleted |
|------|----------|-------------------|---------|
| `core-avatars-spec.md` | ✓ | ○ | ○ |
| `core-colors-page-spec.md` | ✓ | N/A | ○ |
| `context-switcher-spec.md` | ✓ | N/A | ○ |
| `core-dropdowns-spec.md` | ○ | ○ | ○ |
| `core-modals-spec.md` | ✓ | N/A | ○ |
| `core-navigation-spec.md` | ○ | ○ | ○ |
| `core-popovers-spec.md` | ✓ | N/A | ○ |
| `core-progress-spec.md` | ✓ | N/A | ○ |
| `core-tables-spec.md` | ○ | ○ | ○ |
| `core-tabs-spec.md` | ✓ | ○ | ○ |
| `core-tooltips-spec.md` | ✓ | N/A | ○ |

**Legend:**
- ✓ = Complete
- ○ = Pending
- N/A = Not applicable

---

## Appendix: Color Token Reference

### Current Usage Pattern in HTML Specs

| Token | Usage |
|-------|-------|
| `emerald-500/600` | Interactive elements (buttons, links, CTAs) |
| `indigo-500` | Focus rings, selection states, active tab indicators |
| `magenta-500` | Error states, destructive actions |
| `orange-500` | Warning states |
| `cyan-500` | Info states |

### MD Specs (Pre-Update)

| Token | Usage |
|-------|-------|
| `emerald-500` | Interactive + Focus + Selection (conflated) |

### Recommendation

Adopt the HTML pattern to distinguish interactive (emerald) from selection (indigo) states. This provides clearer semantic meaning and better accessibility.
