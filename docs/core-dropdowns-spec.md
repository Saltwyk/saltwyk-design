# Dropdown Component Specification

## Philosophy

- Dropdowns reveal options on demand, keeping interfaces clean
- They should feel responsive and lightweight—appear instantly, easy to dismiss
- Consistent trigger patterns help users recognize interactive elements

---

## Dropdown Types Overview

| Type | Trigger | Use Case |
|------|---------|----------|
| Select Menu | Input-style trigger | Form field selection |
| Action Menu | Button trigger | Actions on an item |
| Navigation Menu | Nav item or button | Site/app navigation |
| Context Menu | Right-click | Contextual actions |
| Combobox | Input with search | Filterable selection |

---

## Anatomy

- **Trigger** — Button, input, or custom element
- **Menu container** — The dropdown panel
- **Menu items** — Selectable options
- **Item icon** — Optional, leading
- **Item label** — Text
- **Item description** — Optional, secondary text
- **Item shortcut** — Optional, keyboard shortcut
- **Divider** — Between groups
- **Group header** — Optional, labels a group
- **Checkmark/radio** — For selected state

---

## Menu Container Specifications

| Property | Value |
|----------|-------|
| Background | `white` (light) / `intaglio-800` (dark) |
| Border | `warm-200` (light) / `intaglio-700` (dark) |
| Border radius | 8px |
| Shadow | `0 4px 16px rgba(0,0,0,0.12)` |
| Min width | 180px |
| Max width | 320px (or match trigger width) |
| Max height | 320px (scrollable if more) |
| Padding (y) | 4px |

---

## Menu Item Specifications

### Base item dimensions

| Property | Value |
|----------|-------|
| Height | 36px (default), 32px (compact) |
| Padding | 8px 12px |
| Font size | 14px |
| Font weight | 400 (normal), 500 (if selected) |
| Gap (icon to label) | 8px |
| Icon size | 16px |

### States — Light Mode

| State | Background | Text | Icon |
|-------|------------|------|------|
| Default | `transparent` | `ink` | `warm-500` |
| Hover | `warm-50` | `ink` | `warm-600` |
| Active | `warm-100` | `ink` | `warm-600` |
| Selected | `emerald-50` | `emerald-700` | `emerald-600` |
| Selected + Hover | `emerald-100` | `emerald-700` | `emerald-600` |
| Disabled | `transparent` | `warm-400` | `warm-300` |
| Focused | `warm-50` + focus ring | `ink` | `warm-600` |

### States — Dark Mode

| State | Background | Text | Icon |
|-------|------------|------|------|
| Default | `transparent` | `warm-200` | `warm-500` |
| Hover | `intaglio-700` | `warm-100` | `warm-400` |
| Active | `intaglio-600` | `warm-100` | `warm-400` |
| Selected | `emerald-500/15` | `emerald-400` | `emerald-400` |
| Selected + Hover | `emerald-500/25` | `emerald-400` | `emerald-400` |
| Disabled | `transparent` | `warm-600` | `warm-700` |
| Focused | `intaglio-700` + focus ring | `warm-100` | `warm-400` |

---

## Select Menu (Form Dropdown)

### Trigger styling

Follows input field specifications from `core-inputs.html`:
- Same height, padding, border, border-radius as text input
- Chevron-down icon on right (16px, `warm-400`)
- Placeholder or selected value as text

### Trigger states

| State | Light | Dark |
|-------|-------|------|
| Default | `warm-300` border | `intaglio-600` border |
| Hover | `warm-400` border | `intaglio-500` border |
| Open | `emerald-500` border + focus ring | `emerald-500` border + focus ring |
| Disabled | `warm-200` border, `warm-50` bg | `intaglio-700` border, `intaglio-900` bg |
| Error | `magenta-500` border | `magenta-500` border |

### Menu behavior

- Width: Match trigger width (min)
- Position: Below trigger, left-aligned
- Selected item: Checkmark on right OR highlighted background

---

## Action Menu (Button Dropdown)

### Trigger

- Ghost or Secondary button with chevron-down
- OR icon-only button (more options / ellipsis)

### Menu content

- Action items (Edit, Duplicate, Delete, etc.)
- Can include icons
- Destructive actions in `magenta` color
- Dividers to separate action groups

### Common patterns

- Table row actions (ellipsis trigger)
- Card actions menu
- User menu (avatar trigger)

---

## Combobox (Searchable Dropdown)

### Trigger

- Input field that doubles as search
- Chevron-down icon (or search icon)

### Behavior

- Type to filter options
- Options filter as user types
- Arrow keys navigate filtered results
- Enter selects highlighted item
- Escape closes without selection

### Empty state

- "No results found" message
- Optional: "Create new" action

### Loading state

- Spinner in menu while fetching results
- Or skeleton items

---

## Multi-Select Dropdown

### Trigger

- Shows selected count: "3 selected" or chips/tags
- Or shows first few selections: "Apple, Orange, +2 more"

### Menu behavior

- Checkboxes on each item
- Clicking item toggles selection (doesn't close menu)
- "Select all" / "Clear all" actions at top
- "Apply" or "Done" button at bottom (optional)

### Selected item display styles

| Style | Example |
|-------|---------|
| Count | "3 selected" |
| Tags | [Apple] [Orange] [+2] |
| List | "Apple, Orange, Banana" (truncated) |

---

## Menu Item Variants

### Standard item

- Icon (optional) + Label

### Item with description

- Label on first line
- Description below in `warm-500` / `warm-400`, 12px

### Item with shortcut

- Label on left
- Keyboard shortcut on right (`warm-400`, 12px, monospace)
- Example: "Save ⌘S"

### Item with badge

- Label on left
- Badge on right (status, count, "New")

### Item with avatar

- Avatar (24px) on left
- Label + optional description

### Destructive item

- Icon and label in `magenta-600` (light) / `magenta-400` (dark)
- Usually at bottom, separated by divider

### Disabled item

- Grayed out, no hover state
- Cursor: not-allowed
- Optional: tooltip explaining why disabled

---

## Dividers and Groups

### Divider

| Property | Light | Dark |
|----------|-------|------|
| Height | 1px | 1px |
| Color | `warm-200` | `intaglio-700` |
| Margin | 4px 0 | 4px 0 |

### Group header

| Property | Value |
|----------|-------|
| Font size | 11px |
| Font weight | 600 |
| Text transform | uppercase |
| Letter spacing | 0.05em |
| Color | `warm-500` |
| Padding | 8px 12px 4px |

---

## Positioning and Overflow

### Default position

- Below trigger, left-aligned
- Or right-aligned if trigger is on right side of screen

### Flip behavior

- If not enough space below, flip to above
- If not enough space on default side, flip horizontally

### Scroll behavior

- If menu exceeds max-height (320px), body scrolls
- Header (if any) stays fixed
- Footer (if any) stays fixed
- Scroll shadows at top/bottom when scrollable

### Edge detection

- Menu stays within viewport
- Minimum 8px from viewport edges

---

## Animation

### Open animation

```css
@keyframes dropdown-enter {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(-4px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
```

Duration: 150ms, ease-out
Transform origin: top (if below) or bottom (if above)

### Close animation

```css
@keyframes dropdown-exit {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.95);
  }
}
```

Duration: 100ms, ease-in

Reduced motion: Fade only, shorter duration

---

## Keyboard Navigation

| Key | Behavior |
|-----|----------|
| Enter / Space | Open menu (on trigger), select item (in menu) |
| Escape | Close menu, return focus to trigger |
| Arrow Down | Move to next item (open menu if closed) |
| Arrow Up | Move to previous item |
| Home | Move to first item |
| End | Move to last item |
| Type characters | Jump to item starting with typed characters |
| Tab | Move to next focusable (closes menu) |

### Focus behavior

- Opening menu focuses first item (or selected item)
- Focus ring visible on current item
- Disabled items are skipped

---

## Accessibility

### ARIA for Select

```html
<button aria-haspopup="listbox" aria-expanded="false">
  Select option
</button>
<ul role="listbox" aria-label="Options">
  <li role="option" aria-selected="true">Option 1</li>
  <li role="option" aria-selected="false">Option 2</li>
</ul>
```

### ARIA for Action Menu

```html
<button aria-haspopup="menu" aria-expanded="false">
  Actions
</button>
<ul role="menu" aria-label="Actions">
  <li role="menuitem">Edit</li>
  <li role="menuitem">Delete</li>
</ul>
```

### Requirements

- Trigger has `aria-haspopup` and `aria-expanded`
- Menu has appropriate `role` (listbox, menu)
- Items have appropriate `role` (option, menuitem)
- Selected items have `aria-selected="true"`
- Disabled items have `aria-disabled="true"`
- Focus management follows WAI-ARIA patterns

---

## Contextual Examples to Build

1. **Form Select** — Label "Country", select dropdown with placeholder, open state showing options
2. **Table Row Actions** — Ellipsis button, menu with Edit, Duplicate, divider, Delete (destructive)
3. **User Menu** — Avatar button trigger, menu with Profile, Settings, divider, Sign out
4. **Filter Multi-Select** — "Status" trigger showing "2 selected", checkboxes for All/Active/Pending/Completed
5. **Combobox Search** — Search input, filtered results, highlighted match text
6. **Dark Mode Action Menu** — Card with ellipsis on intaglio-900, dark styled menu

---

## Code Reference

### Menu Container (Light)

```css
.dropdown-menu {
  @apply absolute z-50;
  @apply bg-white border border-warm-200 rounded-lg shadow-lg;
  @apply py-1 min-w-[180px] max-w-[320px];
  @apply overflow-auto max-h-[320px];
}
```

### Menu Container (Dark)

```css
.dropdown-menu-dark {
  @apply absolute z-50;
  @apply bg-intaglio-800 border border-intaglio-700 rounded-lg;
  @apply py-1 min-w-[180px] max-w-[320px];
  @apply overflow-auto max-h-[320px];
  box-shadow: 0 4px 16px rgba(0,0,0,0.3);
}
```

### Menu Item (Light)

```css
.dropdown-item {
  @apply flex items-center gap-2 px-3 py-2;
  @apply text-sm text-ink;
  @apply cursor-pointer;
  @apply transition-colors duration-100;
}

.dropdown-item:hover {
  @apply bg-warm-50;
}

.dropdown-item-selected {
  @apply bg-emerald-50 text-emerald-700 font-medium;
}

.dropdown-item-disabled {
  @apply text-warm-400 cursor-not-allowed;
}

.dropdown-item-destructive {
  @apply text-magenta-600;
}

.dropdown-item-destructive:hover {
  @apply bg-magenta-50;
}
```

### Menu Item (Dark)

```css
.dropdown-item-dark {
  @apply text-warm-200;
}

.dropdown-item-dark:hover {
  @apply bg-intaglio-700 text-warm-100;
}

.dropdown-item-dark-selected {
  @apply bg-emerald-500/15 text-emerald-400 font-medium;
}

.dropdown-item-dark-destructive {
  @apply text-magenta-400;
}

.dropdown-item-dark-destructive:hover {
  @apply bg-magenta-500/15;
}
```

### Item Icon

```css
.dropdown-item-icon {
  @apply w-4 h-4 text-warm-500;
}

.dropdown-item:hover .dropdown-item-icon {
  @apply text-warm-600;
}

.dropdown-item-selected .dropdown-item-icon {
  @apply text-emerald-600;
}
```

### Divider

```css
.dropdown-divider {
  @apply h-px bg-warm-200 my-1;
}

.dropdown-divider-dark {
  @apply bg-intaglio-700;
}
```

### Group Header

```css
.dropdown-group-header {
  @apply px-3 py-2 pt-3;
  @apply text-[11px] font-semibold uppercase tracking-wide;
  @apply text-warm-500;
}
```

### Select Trigger

```css
.select-trigger {
  @apply flex items-center justify-between;
  @apply w-full px-3 py-2;
  @apply bg-white border-[1.5px] border-warm-300 rounded-md;
  @apply text-sm text-ink;
  @apply transition-colors duration-150;
}

.select-trigger:hover {
  @apply border-warm-400;
}

.select-trigger[data-state="open"] {
  @apply border-emerald-500 ring-2 ring-emerald-500 ring-offset-2;
}

.select-trigger-placeholder {
  @apply text-warm-400;
}

.select-trigger-icon {
  @apply w-4 h-4 text-warm-400;
  @apply transition-transform duration-150;
}

.select-trigger[data-state="open"] .select-trigger-icon {
  @apply rotate-180;
}
```

### Animation

```css
.dropdown-enter {
  animation: dropdown-enter 150ms ease-out;
  transform-origin: top;
}

.dropdown-exit {
  animation: dropdown-exit 100ms ease-in forwards;
}

@keyframes dropdown-enter {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(-4px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

@keyframes dropdown-exit {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.95);
  }
}

/* Flip to above */
.dropdown-enter-above {
  transform-origin: bottom;
}
```

---

## Implementation Checklist

### Menu container

- [ ] Border radius: 8px
- [ ] Shadow: 0 4px 16px rgba(0,0,0,0.12)
- [ ] Border: warm-200 (light) / intaglio-700 (dark)
- [ ] Max height: 320px with scroll
- [ ] Padding: 4px top/bottom

### Menu item

- [ ] Height: 36px default
- [ ] Padding: 8px 12px
- [ ] Hover: warm-50 (light) / intaglio-700 (dark)
- [ ] Selected: emerald-50 + emerald-700 text (light)
- [ ] Selected dark: emerald-500/15 + emerald-400 text

### Animation

- [ ] Enter: 150ms scale + fade
- [ ] Exit: 100ms scale + fade
- [ ] Transform origin based on position

### Keyboard

- [ ] Arrow keys navigate
- [ ] Enter/Space selects
- [ ] Escape closes
- [ ] Type-ahead supported

### Positioning

- [ ] Flip when insufficient space
- [ ] Stay within viewport
- [ ] 8px minimum from edges
