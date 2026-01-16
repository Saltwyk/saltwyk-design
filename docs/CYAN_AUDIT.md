# Cyan Color Usage Audit

**Audit Date:** 2026-01-15
**Auditor:** Claude Opus 4.5
**Rule:** Cyan is reserved for decorative thread elements only (spectrum gradient lines). It should NOT be used for focus rings, selection states, link colors, active/hover states, info badges, backgrounds, or any interactive UI element. Indigo is the correct color for these UI purposes.

---

## Summary

| Category | Count |
|----------|-------|
| **Total cyan usages found** | 224 |
| **VALID** (thread/decorative) | 68 |
| **VIOLATION** (should be indigo) | 134 |
| **REVIEW** (needs human decision) | 22 |

---

## VIOLATIONS (Should be Indigo)

### Focus Rings & States

| File | Line | Current Usage | Fix |
|------|------|---------------|-----|
| `core-inputs.html` | 617 | `focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2` | Change to indigo-500 |
| `core-inputs.html` | 2023 | `focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500` | Change to indigo-500 |
| `core-inputs.html` | 2052 | `focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400` (dark) | Change to indigo-400 |
| `core-inputs.html` | 2077 | `focus:ring-2 focus:ring-cyan-500` | Change to indigo-500 |
| `core-dropdowns.html` | 1851 | `border-cyan-500 ring-2 ring-cyan-500/20` | Change to indigo |
| `core-dropdowns/select.html` | 454 | `border-cyan-500 ring-2 ring-cyan-500/20` | Change to indigo |
| `core-dropdowns/select.html` | 481 | Focus ring: cyan-500/20 | Change to indigo |
| `core-buttons.html` | 705-706 | Focus ring `0 0 0 4px cyan` | Change to indigo |
| `core-tabs.html` | 1361 | Focus ring: `cyan-500` / `cyan-400` | Change to indigo |
| `core-navigation/topnav.html` | 525 | Focus visible ring (cyan-500) | Change to indigo |

### Info Boxes & Callouts (UI Elements)

| File | Line | Current Usage | Fix |
|------|------|---------------|-----|
| `core-inputs.html` | 406-408 | `bg-cyan-50 border-2 border-cyan-200` info box | Change to indigo |
| `core-inputs.html` | 481-483 | `bg-cyan-50 border-cyan-200` "Why This Separation" box | Change to indigo |
| `core-inputs.html` | 755-757 | `bg-cyan-50 border-cyan-200` Focus Behavior box | Change to indigo |
| `core-inputs.html` | 849-851 | `bg-cyan-50 border-cyan-200` Fire Opal box | Change to indigo |
| `core-inputs.html` | 1061-1063 | `bg-cyan-50 border-cyan-200` Icon Color States box | Change to indigo |
| `core-tables.html` | 1026-1028 | `bg-cyan-50 border-cyan-200` Design Note box | Change to indigo |
| `core-toasts.html` | 1614-1616 | `bg-cyan-50 border-2 border-cyan-200` "Use Modal when" box | Change to indigo |
| `core-threads.html` | 384-386 | `bg-cyan-50 border-2 border-cyan-200` warning box | Change to indigo |

### Info Badges & Status Indicators

| File | Line | Current Usage | Fix |
|------|------|---------------|-----|
| `core-badges.html` | 121-122 | `.badge-info { bg: cyan-100, color: cyan-700 }` | Change to indigo |
| `core-badges.html` | 149-150 | `.badge-info-outline { color: cyan-700, border: cyan-300 }` | Change to indigo |
| `core-badges.html` | 173-174 | `.badge-info-subtle { bg: cyan-50, color: cyan-700 }` | Change to indigo |
| `core-badges.html` | 197-198 | `.badge-info-dark { bg: cyan-500/20, color: cyan-400 }` | Change to indigo |
| `core-badges.html` | 225-226 | `.badge-info-outline-dark { border: cyan-500/50, color: cyan-400 }` | Change to indigo |
| `core-badges.html` | 250 | `.badge-info-solid { bg: cyan-500 }` | Change to indigo |
| `core-badges.html` | 272, 278 | `.dot-info` / `.dot-info-dark { bg: cyan-500/400 }` | Change to indigo |
| `core-badges.html` | 686 | Info semantic: Cyan | Change to indigo |
| `core-badges.html` | 754-755, 817-818, 876-877 | Info badge specs (cyan-*) | Change to indigo |
| `core-badges.html` | 942-943, 1007-1008, 1068 | Dark mode info badge specs | Change to indigo |
| `core-badges.html` | 1912, 1939 | Info badge color specs | Change to indigo |
| `core-badges.html` | 2045-2046, 2076-2077 | CSS code examples | Change to indigo |
| `core-cards.html` | 1347 | Status (pending) cyan badge | Change to indigo |
| `core-cards.html` | 1380 | `bg-cyan-100 text-cyan-700` Pending badge | Change to indigo |
| `core-cards.html` | 1431 | `bg-cyan-100 text-cyan-700` Processing badge | Change to indigo |
| `core-states.html` | 459 | `bg-cyan-500` indicator dot | Change to indigo |
| `core-modals.html` | 744 | `bg-cyan-500` indicator dot | Change to indigo |
| `core-tables.html` | 1767 | `bg-cyan-100 text-cyan-700` badge | Change to indigo |
| `core-tables/index.html` | 206 | `bg-cyan-500` bullet point | Change to indigo |
| `core-dropdowns/index.html` | 416 | `bg-cyan-500` bullet point | Change to indigo |

### Toast Info States

| File | Line | Current Usage | Fix |
|------|------|---------------|-----|
| `core-toasts.html` | 102 | `.toast-icon-info { color: cyan-600 }` | Change to indigo |
| `core-toasts.html` | 148 | `.toast-info { border-left: cyan-600 }` | Change to indigo |
| `core-toasts.html` | 177 | `.toast-progress-bar-info { bg: cyan-600/30 }` | Change to indigo |
| `core-toasts.html` | 217-222 | `.toast-filled-info` colors (cyan-100/700/900) | Change to indigo |
| `core-toasts.html` | 267, 273 | Dark mode toast info (cyan-500/400) | Change to indigo |
| `core-toasts.html` | 494, 529 | Info numbered badges (cyan-*) | Change to indigo |
| `core-toasts.html` | 700, 774-775, 875-878 | Toast spec tables (cyan-*) | Change to indigo |
| `core-toasts.html` | 1034-1035 | Dark mode toast specs | Change to indigo |
| `core-toasts.html` | 1794 | Info: cyan-500 left border | Change to indigo |
| `core-toasts.html` | 1861 | `.toast-info { border-l-cyan-500 }` | Change to indigo |
| `core-toasts.html` | 1894 | `.toast-icon-info { text-cyan-500 }` | Change to indigo |

### Context Switcher

| File | Line | Current Usage | Fix |
|------|------|---------------|-----|
| `core-context-switcher.html` | 80-81 | Shopper avatar `bg: cyan-100, color: cyan-600` | Change to indigo |
| `core-context-switcher.html` | 175-176 | Shopper avatar style | Change to indigo |
| `core-context-switcher.html` | 314 | `.org-dot { bg: cyan-500 }` | Change to indigo |
| `core-context-switcher.html` | 331 | `.org-avatar-2 { bg: cyan-100, color: cyan-600 }` | Change to indigo |
| `core-context-switcher.html` | 418 | `bg-cyan-500` indicator dot | Change to indigo |
| `core-context-switcher.html` | 567 | `24px, cyan-600` spec | Change to indigo |
| `core-context-switcher.html` | 956 | "cyan accent" description | Change to indigo |
| `core-context-switcher.html` | 1223-1224 | CSS code `cyan-100/600` | Change to indigo |

### Responsive Page (Info Boxes)

| File | Line | Current Usage | Fix |
|------|------|---------------|-----|
| `core-responsive.html` | 149 | `bg-cyan-50 border-b border-cyan-200` | Change to indigo |
| `core-responsive.html` | 154 | `bg-cyan-100 text-cyan-700` Mobile-First badge | Change to indigo |
| `core-responsive.html` | 168-169 | `bg-cyan-50` Mobile Design box, `text-cyan-800` | Change to indigo |
| `core-responsive.html` | 444 | `text-cyan-600` Shopper Profile text | Change to indigo |
| `core-responsive.html` | 566-567 | `bg-cyan-50 border-cyan-200` Shopper Surfaces box | Change to indigo |

### Animation Page

| File | Line | Current Usage | Fix |
|------|------|---------------|-----|
| `core-animation.html` | 132 | `bg-cyan-500` demo box | Change to indigo |
| `core-animation.html` | 277, 295, 320, 340, 358 | `bg-cyan-100 text-cyan-700` Auto-playing badges | Change to indigo |
| `core-animation.html` | 343 | `bg-cyan-500` floating demo | Change to indigo |
| `core-animation.html` | 396 | `bg-cyan-500` easing demo | Change to indigo |

### Card Icon Boxes

| File | Line | Current Usage | Fix |
|------|------|---------------|-----|
| `core-cards.html` | 367-368 | `bg-cyan-100` icon box, `text-cyan-600` icon | Change to indigo |
| `core-cards.html` | 406 | `bg-cyan-500` indicator dot | Change to indigo |
| `core-cards.html` | 454 | `bg-cyan-500` bullet point | Change to indigo |
| `core-tables/index.html` | 123-124 | `bg-cyan-100` icon box, `text-cyan-600` icon | Change to indigo |

### Navigation Bottom Nav

| File | Line | Current Usage | Fix |
|------|------|---------------|-----|
| `core-navigation/bottomnav.html` | 379-380 | `bg-cyan-100` icon, `text-cyan-600` | Change to indigo |

### Text/Labels

| File | Line | Current Usage | Fix |
|------|------|---------------|-----|
| `core-gradients.html` | 70 | `text-cyan-600` serial label | Change to emerald (section label) |
| `core-gradients.html` | 318 | `text-cyan-600` serial label | Change to emerald |
| `core-badges.html` | 498-499 | `text-cyan-600` annotation, `bg-cyan-400` line | Change to indigo |
| `core-inputs.html` | 500-501 | `border-cyan-300` dashed line, `text-cyan-600` label | Change to indigo |
| `core-inputs.html` | 527-528 | `text-cyan-600` label, `bg-cyan-400` line | Change to indigo |
| `core-inputs.html` | 1865, 1873 | Focus border/ring specs referencing cyan | Change to indigo |

---

## VALID (Thread/Decorative Usage)

### Thread Gradients (Spectrum)

| File | Line | Usage |
|------|------|-------|
| `core-threads.html` | 28, 91, 97, 103, 109, 115, 121, 128, 134 | Spectrum gradient with `--cyan-thread` |
| `core-threads.html` | 33, 38, 55, 139, 641 | Thread gradient/solid using `--cyan-thread` |
| `core-navigation.html` | 284, 288, 295, 299, 1706 | Spectrum/thread gradients |
| `core-navigation/sidebar.html` | 90, 94 | Spectrum gradient |
| `core-navigation/bottomnav.html` | 182 | Spectrum gradient |
| `core-cards.html` | 179, 182, 185, 188, 191, 199, 220, 223, 228-231 | Thread gradients |
| `core-avatars.html` | 757, 1439 | Decorative thread gradient backgrounds |
| `core-tooltips.html` | 1061 | Decorative thread gradient |

### Code Syntax Highlighting

| File | Line | Usage |
|------|------|-------|
| `core-navigation.html` | 26 | `.code-block .property { color: cyan-400 }` |
| `core-navigation/sidebar.html` | 26 | `.code-block .property` |
| `core-navigation/bottomnav.html` | 26 | `.code-block .property` |
| `core-cards.html` | 26 | `.code-block .property` |
| `core-avatars.html` | 26 | `.code-block .property` |
| `core-badges.html` | 26 | `.code-block .property` |
| `core-toasts.html` | 26 | `.code-block .property` |
| `core-tooltips.html` | 26 | `.code-block .property` |
| `core-context-switcher.html` | 26 | `.code-block .property` |
| `core-popovers.html` | 26 | `.code-block .property` |
| `core-responsive.html` | 642, 647, 652 | `text-cyan-300` for code highlighting in dark block |

### Color Documentation (Showing Palette)

| File | Line | Usage |
|------|------|-------|
| `core-colors.html` | 567-616 | Cyan color scale documentation/swatches |
| `core-tables/states.html` | 653, 690 | Documentation label "cyan tones" / "cyan 40%/15%" |

### Merchant/Shopper Decorative Thread Classes

| File | Line | Usage |
|------|------|-------|
| `merchant/index.html` | 56 | `.thread-cyan { bg: hsl(170 100% 50%) }` |
| `merchant/showcase.html` | 67 | `.thread-cyan` |
| `shopper/showcase.html` | 51 | `.thread-accent-cyan` |

---

## REVIEW (Needs Human Decision)

### Avatar Color Variants

These may be valid as distinct avatar color options separate from semantic meaning:

| File | Line | Current Usage | Question |
|------|------|---------------|----------|
| `core-avatars.html` | 87 | `.avatar-cyan { bg: cyan-100, color: cyan-700 }` | Is cyan a valid avatar palette color? |
| `core-avatars.html` | 94 | `.avatar-cyan-dark` | Same question for dark mode |
| `core-avatars.html` | 545, 614, 661, 714-719 | Avatar cyan examples | |
| `core-avatars.html` | 784, 788-789 | Dark mode cyan avatar specs | |
| `core-avatars.html` | 949, 994, 1098, 1140, 1158 | More cyan avatar examples | |
| `core-avatars.html` | 1197, 1215, 1287, 1302 | Cyan avatar variations | |
| `core-avatars.html` | 1365, 1402, 1452, 1553 | Additional cyan avatar uses | |
| `core-avatars.html` | 1645 | Mentions "5 color variants (emerald, cyan, orange, magenta, neutral)" | |

### Color Strategy Documentation

These files document when to use cyan vs other colors - they explain the rule rather than violate it:

| File | Line | Current Usage | Question |
|------|------|---------------|----------|
| `shopper/color-strategy.html` | 70 | `.thread-semantic-cyan` class definition | Documentation |
| `shopper/color-strategy.html` | 178-256 | Thread color scale documentation | Documentation |
| `shopper/color-strategy.html` | 339-387 | Cyan scale swatches | Documentation |
| `shopper/color-strategy.html` | 954 | Explains "Connected" should use cyan | **Contradicts new rule** |
| `shopper/color-strategy.html` | 1162-1199 | Semantic Badge (cyan-500) example | **Contradicts new rule** |
| `shopper/color-strategy.html` | 1353, 1394, 1486 | Guidelines about cyan usage | |
| `products/shopper/color-strategy.html` | (same lines) | Duplicate file | |

### Core States Documentation

| File | Line | Current Usage | Question |
|------|------|---------------|----------|
| `core-states.html` | 538 | "Use cyan ONLY for:" documentation | Update to reflect new rule |

### Typography Decorative

| File | Line | Current Usage | Question |
|------|------|---------------|----------|
| `core-typography.html` | 350 | `bg-gradient-to-br from-cyan-50 to-magenta-50` | Decorative gradient - valid? |

---

## Recommended Actions

### Priority 1: Focus Rings (Critical)
Update all focus ring definitions from cyan to indigo. This affects keyboard navigation accessibility UX.

**Files:** `core-inputs.html`, `core-dropdowns.html`, `core-dropdowns/select.html`, `core-buttons.html`, `core-tabs.html`, `core-navigation/topnav.html`

### Priority 2: Info Badges System
Rebrand entire info badge semantic from cyan to indigo across all variants (solid, outline, subtle, dark).

**Files:** `core-badges.html`, `core-toasts.html`, `core-cards.html`, `core-tables.html`

### Priority 3: Info Boxes/Callouts
Change all informational callout boxes from cyan to indigo backgrounds.

**Files:** `core-inputs.html`, `core-tables.html`, `core-toasts.html`, `core-threads.html`, `core-responsive.html`

### Priority 4: Context Switcher
Update shopper/cyan avatar styling to use indigo.

**File:** `core-context-switcher.html`

### Priority 5: Documentation Updates
Update `core-states.html` and color-strategy files to reflect the new rule that cyan is thread-only.

### Human Decision Required
- Avatar cyan variants: Should these change to indigo, or is cyan valid as one of 5 palette colors for avatars?
- Color strategy docs: Need update to remove cyan from "info semantic" recommendations
