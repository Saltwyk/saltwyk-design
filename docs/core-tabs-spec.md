# Tabs Component Specification

## Philosophy

- Tabs organize content into parallel views within the same context
- Only one tab panel is visible at a time
- Tabs should feel lightweight—switching is instant with no page reload

---

## Anatomy

- **Tab list** — Container for tab triggers
- **Tab trigger** — Clickable element for each tab
- **Tab indicator** — Visual marker for active tab (underline, background, etc.)
- **Tab panel** — Content area that changes based on selected tab

---

## Base Specifications

| Property | Value |
|----------|-------|
| Tab trigger height | 40px (default), 36px (compact) |
| Tab trigger padding | 12px 16px |
| Tab trigger font size | 14px |
| Tab trigger font weight | 500 |
| Gap between tabs | 0 (touching) or 4px |
| Tab panel margin-top | 16px |

---

## Tab Variants

### Underline Tabs (Default)

Most common style. Active tab has underline indicator.

**Light Mode:**

| State | Text Color | Underline |
|-------|------------|-----------|
| Default | `warm-600` | none |
| Hover | `ink` | none |
| Active | `ink` | `emerald-500` (2px bottom) |
| Disabled | `warm-400` | none |

**Dark Mode:**

| State | Text Color | Underline |
|-------|------------|-----------|
| Default | `warm-400` | none |
| Hover | `warm-200` | none |
| Active | `warm-100` | `emerald-400` (2px bottom) |
| Disabled | `warm-600` | none |

**Tab list border:** `warm-200` (light) / `intaglio-700` (dark) bottom border (1px) spanning full width

### Pill Tabs

Tabs with rounded background on active state.

**Light Mode:**

| State | Background | Text Color |
|-------|------------|------------|
| Default | `transparent` | `warm-600` |
| Hover | `warm-100` | `ink` |
| Active | `emerald-100` | `emerald-700` |
| Disabled | `transparent` | `warm-400` |

**Dark Mode:**

| State | Background | Text Color |
|-------|------------|------------|
| Default | `transparent` | `warm-400` |
| Hover | `intaglio-700` | `warm-200` |
| Active | `emerald-500/20` | `emerald-400` |
| Disabled | `transparent` | `warm-600` |

**Border radius:** 6px (rounded-md)

**No tab list border** (pills are self-contained)

### Boxed Tabs (Segmented Control)

Tabs contained in a background box, like iOS segmented control.

**Container:**
- Light: `warm-100` background, `rounded-lg`
- Dark: `intaglio-900` background, `rounded-lg`
- Padding: 4px

**Tab trigger:**

| State | Light | Dark |
|-------|-------|------|
| Default | `transparent` bg, `warm-600` text | `transparent` bg, `warm-400` text |
| Hover | `warm-50` bg | `intaglio-800` bg |
| Active | `white` bg, `ink` text, shadow | `intaglio-700` bg, `warm-100` text |

**Active tab shadow (light):** `0 1px 2px rgba(0,0,0,0.05)`

**Border radius:** 6px on individual tabs

### Vertical Tabs

Tabs stacked vertically, typically in a sidebar.

**Layout:**
- Tab list: vertical stack, fixed width (180-240px)
- Tab panel: adjacent, fills remaining space

**Light Mode:**

| State | Background | Text | Border |
|-------|------------|------|--------|
| Default | `transparent` | `warm-600` | none |
| Hover | `warm-50` | `ink` | none |
| Active | `emerald-50` | `emerald-700` | `emerald-500` left (3px) |

**Dark Mode:**

| State | Background | Text | Border |
|-------|------------|------|--------|
| Default | `transparent` | `warm-400` | none |
| Hover | `intaglio-800` | `warm-200` | none |
| Active | `emerald-500/15` | `emerald-400` | `emerald-500` left (3px) |

---

## Tab with Icon

**Icon position:** Left of label

**Icon size:** 16px (compact) or 18px (default)

**Gap:** 8px between icon and label

**Icon color:** Matches text color for each state

---

## Tab with Badge/Count

**Badge position:** Right of label

**Gap:** 8px between label and badge

**Badge style:** Count badge (small) or status dot

---

## Tab with Close Button

For closeable/removable tabs (like browser tabs).

**Close button:** 
- Position: Right of label (or badge if present)
- Size: 16px icon, 24px hit area
- Color: `warm-400`, hover `warm-600`
- Appears on hover (optional) or always visible

---

## Scrollable Tabs

When tabs overflow container width.

**Behavior:**
- Horizontal scroll enabled
- Scroll indicators (arrows or fade) at edges
- Active tab scrolls into view

**Scroll buttons:**
- Left/right chevron icons
- Appear when scrollable
- Disabled when at scroll limit

---

## Animation

### Tab indicator (underline style)

- Underline slides from previous tab to current tab
- Duration: 200ms
- Easing: ease-out

### Tab panel transition

- Fade out old panel, fade in new panel
- Duration: 150ms
- Or: No animation (instant switch)

---

## Keyboard Navigation

| Key | Behavior |
|-----|----------|
| Tab | Move focus to tab list, then to active panel |
| Arrow Left/Right | Move between tabs (horizontal) |
| Arrow Up/Down | Move between tabs (vertical tabs) |
| Home | Move to first tab |
| End | Move to last tab |
| Enter/Space | Activate focused tab |

**Automatic activation:** Focus change activates tab (default)
**Manual activation:** Focus change doesn't activate; Enter/Space required

---

## Accessibility

### ARIA structure

```html
<div role="tablist" aria-label="Settings tabs">
  <button role="tab" aria-selected="true" aria-controls="panel-1" id="tab-1">
    General
  </button>
  <button role="tab" aria-selected="false" aria-controls="panel-2" id="tab-2">
    Security
  </button>
</div>

<div role="tabpanel" id="panel-1" aria-labelledby="tab-1">
  <!-- Panel 1 content -->
</div>

<div role="tabpanel" id="panel-2" aria-labelledby="tab-2" hidden>
  <!-- Panel 2 content -->
</div>
```

### Requirements

- Tab list has `role="tablist"`
- Each tab has `role="tab"`
- Active tab has `aria-selected="true"`
- Each panel has `role="tabpanel"`
- Panel linked to tab via `aria-labelledby`
- Hidden panels have `hidden` attribute

---

## Contextual Examples to Build

1. **Settings Page (Underline)** — Horizontal underline tabs: General, Security, Notifications, Billing. Show active state and panel content.
2. **Dashboard Filters (Pill)** — Pill tabs: All, Active, Pending, Completed. Compact size.
3. **View Toggle (Boxed)** — Segmented control: List View, Grid View. Two options only.
4. **Settings Sidebar (Vertical)** — Vertical tabs on left, content panel on right. 4-5 tab options.
5. **Tabs with Icons** — Underline tabs with leading icons
6. **Tabs on Dark** — Show underline and pill variants on dark (Fire Opal) background

---

## Code Reference

### Underline Tabs (Light)

```css
.tab-list {
  @apply flex border-b border-warm-200;
}

.tab-trigger {
  @apply px-4 py-2 text-sm font-medium text-warm-600;
  @apply border-b-2 border-transparent -mb-px;
  @apply transition-colors duration-150;
}

.tab-trigger:hover {
  @apply text-ink;
}

.tab-trigger[data-state="active"] {
  @apply text-ink border-emerald-500;
}

.tab-trigger:disabled {
  @apply text-warm-400 cursor-not-allowed;
}
```

### Underline Tabs (Dark)

```css
.tab-list-dark {
  @apply flex border-b border-intaglio-700;
}

.tab-trigger-dark {
  @apply px-4 py-2 text-sm font-medium text-warm-400;
  @apply border-b-2 border-transparent -mb-px;
}

.tab-trigger-dark:hover {
  @apply text-warm-200;
}

.tab-trigger-dark[data-state="active"] {
  @apply text-warm-100 border-emerald-400;
}
```

### Pill Tabs (Light)

```css
.tab-list-pill {
  @apply flex gap-1;
}

.tab-trigger-pill {
  @apply px-3 py-1.5 text-sm font-medium text-warm-600 rounded-md;
  @apply transition-colors duration-150;
}

.tab-trigger-pill:hover {
  @apply bg-warm-100 text-ink;
}

.tab-trigger-pill[data-state="active"] {
  @apply bg-emerald-100 text-emerald-700;
}
```

### Pill Tabs (Dark)

```css
.tab-trigger-pill-dark {
  @apply text-warm-400;
}

.tab-trigger-pill-dark:hover {
  @apply bg-intaglio-700 text-warm-200;
}

.tab-trigger-pill-dark[data-state="active"] {
  @apply bg-emerald-500/20 text-emerald-400;
}
```

### Boxed Tabs (Light)

```css
.tab-list-boxed {
  @apply inline-flex p-1 bg-warm-100 rounded-lg;
}

.tab-trigger-boxed {
  @apply px-3 py-1.5 text-sm font-medium text-warm-600 rounded-md;
  @apply transition-all duration-150;
}

.tab-trigger-boxed:hover {
  @apply bg-warm-50;
}

.tab-trigger-boxed[data-state="active"] {
  @apply bg-white text-ink shadow-sm;
}
```

### Boxed Tabs (Dark)

```css
.tab-list-boxed-dark {
  @apply inline-flex p-1 bg-intaglio-900 rounded-lg;
}

.tab-trigger-boxed-dark {
  @apply text-warm-400;
}

.tab-trigger-boxed-dark:hover {
  @apply bg-intaglio-800;
}

.tab-trigger-boxed-dark[data-state="active"] {
  @apply bg-intaglio-700 text-warm-100;
}
```

### Vertical Tabs (Light)

```css
.tab-list-vertical {
  @apply flex flex-col w-48;
}

.tab-trigger-vertical {
  @apply px-4 py-2 text-sm font-medium text-warm-600 text-left;
  @apply border-l-[3px] border-transparent;
  @apply transition-colors duration-150;
}

.tab-trigger-vertical:hover {
  @apply bg-warm-50 text-ink;
}

.tab-trigger-vertical[data-state="active"] {
  @apply bg-emerald-50 text-emerald-700 border-emerald-500;
}
```

### Tab Panel

```css
.tab-panel {
  @apply mt-4;
}

.tab-panel[hidden] {
  @apply hidden;
}
```

---

## Implementation Checklist

### Underline tabs

- [ ] Tab list: border-b warm-200 (light) / intaglio-700 (dark)
- [ ] Active: emerald-500 underline (2px)
- [ ] Default text: warm-600 (light) / warm-400 (dark)
- [ ] Active text: ink (light) / warm-100 (dark)

### Pill tabs

- [ ] Border radius: 6px
- [ ] Active: emerald-100 bg (light) / emerald-500/20 (dark)
- [ ] No tab list border

### Boxed tabs

- [ ] Container: warm-100 bg (light) / intaglio-900 (dark), 4px padding
- [ ] Active: white bg with shadow (light) / intaglio-700 (dark)

### Vertical tabs

- [ ] Active: emerald-500 left border (3px)
- [ ] Fixed width: 180-240px

### Keyboard

- [ ] Arrow keys navigate
- [ ] Home/End jump to first/last
- [ ] Enter/Space activate (if manual activation)

### Accessibility

- [ ] role="tablist" on container
- [ ] role="tab" on triggers
- [ ] role="tabpanel" on panels
- [ ] aria-selected on active tab
- [ ] aria-controls linking tabs to panels
