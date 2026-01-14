# Tooltip Component Specification

## Philosophy

- Tooltips provide contextual information on hover or focus
- They should be brief, helpful, and non-essential (info should be discoverable elsewhere)
- Tooltips must not block important content or require precise mouse positioning

---

## Anatomy

- **Trigger** — Element that shows tooltip on hover/focus
- **Container** — The tooltip box
- **Arrow** — Pointer connecting tooltip to trigger
- **Content** — Text (and optionally small icons)

---

## Base Specifications

| Property | Value |
|----------|-------|
| Background (light) | `intaglio-900` |
| Background (dark) | `intaglio-700` |
| Text color | `white` |
| Font size | 12px |
| Font weight | 400 |
| Line height | 1.4 |
| Padding | 6px 10px |
| Border radius | 6px |
| Max width | 240px |
| Arrow size | 6px |

---

## Tooltip Variants

### Simple Tooltip

Single line of text.

| Property | Value |
|----------|-------|
| Content | Text only, single line |
| Max width | 240px (wraps if longer) |

### Multi-line Tooltip

Longer explanatory text.

| Property | Value |
|----------|-------|
| Content | 2-3 lines of text |
| Max width | 280px |
| Text align | Left |

### Tooltip with Title

Title + description pattern.

| Property | Value |
|----------|-------|
| Title | 12px, font-weight 600, `white` |
| Description | 12px, font-weight 400, `warm-300` |
| Gap | 4px between title and description |

### Tooltip with Shortcut

Shows keyboard shortcut.

| Property | Value |
|----------|-------|
| Layout | Label + shortcut inline |
| Shortcut style | `warm-400`, monospace font |
| Example | "Save ⌘S" |

---

## Positioning

### Placement Options

| Position | Arrow Location |
|----------|----------------|
| Top | Arrow points down, centered |
| Top-start | Arrow points down, left-aligned |
| Top-end | Arrow points down, right-aligned |
| Bottom | Arrow points up, centered |
| Bottom-start | Arrow points up, left-aligned |
| Bottom-end | Arrow points up, right-aligned |
| Left | Arrow points right, centered |
| Right | Arrow points left, centered |

### Auto-positioning

- Default: top
- If insufficient space, flip to opposite side
- Stay within viewport with 8px minimum margin

### Offset

- Distance from trigger: 8px (including arrow)

---

## Arrow Specifications

| Property | Value |
|----------|-------|
| Size | 6px |
| Shape | Equilateral triangle |
| Color | Matches tooltip background |

---

## Behavior

### Show Delay

- Hover: 300ms delay before showing
- Focus: Immediate (0ms)

### Hide Delay

- Hover out: 100ms delay before hiding
- Allows moving mouse to tooltip if needed

### Duration

- No auto-dismiss (stays while hovering)

### Interactions

- Tooltip is not interactive by default
- Mouse can pass over tooltip to reach elements behind
- For interactive tooltips (with links), use Popover instead

---

## Animation

### Enter

```css
@keyframes tooltip-enter {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
```

Duration: 100ms, ease-out

### Exit

```css
@keyframes tooltip-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
```

Duration: 75ms, ease-in

---

## Accessibility

### Trigger Requirements

- Focusable element (button, link, input)
- `aria-describedby` pointing to tooltip id
- OR `aria-label` containing tooltip text

### Tooltip Requirements

- `role="tooltip"`
- `id` matching trigger's `aria-describedby`

### Keyboard

- Shows on focus
- Hides on blur
- ESC dismisses tooltip

### Screen Readers

- Tooltip content announced when trigger focused
- Content should be supplementary, not essential

---

## Contextual Examples to Build

1. **Icon Button Tooltip** — Tooltip on icon-only button explaining action
2. **Truncated Text Tooltip** — Shows full text when content is truncated
3. **Disabled Button Tooltip** — Explains why button is disabled
4. **Keyboard Shortcut** — Action label with shortcut hint
5. **Info Icon Tooltip** — Small (i) icon with explanatory tooltip

---

## Code Reference

### Tooltip Container

```css
.tooltip {
  @apply absolute z-50;
  @apply px-2.5 py-1.5 rounded-md;
  @apply bg-intaglio-900 text-white;
  @apply text-xs leading-snug;
  @apply max-w-[240px];
  @apply pointer-events-none;
}

.tooltip-dark {
  @apply bg-intaglio-700;
}
```

### Tooltip Arrow

```css
.tooltip-arrow {
  @apply absolute w-0 h-0;
  border: 6px solid transparent;
}

/* Top placement - arrow points down */
.tooltip[data-side="top"] .tooltip-arrow {
  @apply -bottom-3 left-1/2 -translate-x-1/2;
  border-top-color: theme('colors.intaglio.900');
  border-bottom: none;
}

/* Bottom placement - arrow points up */
.tooltip[data-side="bottom"] .tooltip-arrow {
  @apply -top-3 left-1/2 -translate-x-1/2;
  border-bottom-color: theme('colors.intaglio.900');
  border-top: none;
}

/* Left placement - arrow points right */
.tooltip[data-side="left"] .tooltip-arrow {
  @apply -right-3 top-1/2 -translate-y-1/2;
  border-left-color: theme('colors.intaglio.900');
  border-right: none;
}

/* Right placement - arrow points left */
.tooltip[data-side="right"] .tooltip-arrow {
  @apply -left-3 top-1/2 -translate-y-1/2;
  border-right-color: theme('colors.intaglio.900');
  border-left: none;
}
```

### Tooltip with Title

```css
.tooltip-title {
  @apply font-semibold text-white;
}

.tooltip-description {
  @apply text-warm-300 mt-1;
}
```

### Tooltip Shortcut

```css
.tooltip-shortcut {
  @apply text-warm-400 font-mono ml-2;
}
```

### Animation

```css
.tooltip-enter {
  animation: tooltip-enter 100ms ease-out;
}

.tooltip-exit {
  animation: tooltip-exit 75ms ease-in forwards;
}

@keyframes tooltip-enter {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes tooltip-exit {
  from { opacity: 1; }
  to { opacity: 0; }
}
```

---

## Implementation Checklist

### Container

- [ ] Background: intaglio-900 (light page) / intaglio-700 (dark page)
- [ ] Text: white, 12px
- [ ] Padding: 6px 10px
- [ ] Border radius: 6px
- [ ] Max width: 240px

### Arrow

- [ ] Size: 6px
- [ ] Matches background color
- [ ] Positioned based on placement

### Behavior

- [ ] Show delay: 300ms (hover), 0ms (focus)
- [ ] Hide delay: 100ms
- [ ] Auto-positioning to stay in viewport

### Animation

- [ ] Enter: 100ms scale + fade
- [ ] Exit: 75ms fade

### Accessibility

- [ ] role="tooltip"
- [ ] aria-describedby on trigger
- [ ] Shows on focus
- [ ] ESC dismisses
