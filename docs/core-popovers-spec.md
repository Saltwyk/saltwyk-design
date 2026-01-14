# Popover Component Specification

## Philosophy

- Popovers display rich, interactive content in a floating container
- Unlike tooltips, popovers are interactive and user-initiated (click, not hover)
- They're a lightweight alternative to modals for contextual actions or information

---

## Anatomy

- **Trigger** — Element that opens popover on click
- **Container** — The floating panel
- **Arrow** — Optional pointer connecting popover to trigger
- **Header** — Optional title area
- **Body** — Main content area
- **Footer** — Optional action area

---

## Base Specifications

| Property | Value |
|----------|-------|
| Background (light) | `white` |
| Background (dark) | `intaglio-800` |
| Border (light) | `warm-200` |
| Border (dark) | `intaglio-700` |
| Border radius | 8px |
| Shadow | `0 4px 16px rgba(0,0,0,0.12)` |
| Min width | 200px |
| Max width | 360px |
| Padding | 16px |

---

## Popover Types

### Simple Popover

Basic content popover.

| Property | Value |
|----------|-------|
| Content | Text, lists, small forms |
| Max width | 320px |
| Arrow | Optional |

### Popover with Header

Title bar with optional close button.

| Property | Light | Dark |
|----------|-------|------|
| Header padding | 12px 16px | 12px 16px |
| Header border | `warm-200` bottom | `intaglio-700` bottom |
| Title | 14px, font-weight 600, `ink` | `warm-100` |
| Close button | Ghost icon button | Ghost dark |

### Popover with Footer

Action buttons at bottom.

| Property | Light | Dark |
|----------|-------|------|
| Footer padding | 12px 16px | 12px 16px |
| Footer border | `warm-200` top | `intaglio-700` top |
| Footer background | `warm-50` | `intaglio-900` |
| Buttons | Right-aligned | Right-aligned |

### Form Popover

Contains form inputs.

| Property | Value |
|----------|-------|
| Width | 280-360px |
| Content | Label + input pairs |
| Footer | Cancel + Submit buttons |

---

## Positioning

### Placement Options

Same as tooltip:
- top, top-start, top-end
- bottom, bottom-start, bottom-end
- left, right

### Auto-positioning

- Flips to opposite side if insufficient space
- Stays within viewport with 8px margin
- Scrolls into view if needed

### Offset

- Distance from trigger: 8px

---

## Arrow Specifications

| Property | Value |
|----------|-------|
| Size | 8px |
| Color | Matches popover background |
| Border | 1px matching popover border |
| Position | Centered on alignment edge |

---

## Behavior

### Opening

- Click trigger to open
- Focus moves to first focusable element in popover
- OR focus moves to close button if no interactive content

### Closing

- Click trigger again (toggle)
- Click outside popover
- Press ESC
- Click close button (if present)
- Complete action in popover (optional auto-close)

### Focus Trap

- Tab cycles through focusable elements in popover
- Shift+Tab cycles backward
- Focus does not escape to page behind

---

## Animation

### Enter

```css
@keyframes popover-enter {
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

Duration: 150ms, ease-out

### Exit

```css
@keyframes popover-exit {
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

---

## Popover States — Light Mode

| Element | Style |
|---------|-------|
| Container | `white` background, `warm-200` border |
| Shadow | `0 4px 16px rgba(0,0,0,0.12)` |
| Header | `warm-200` bottom border |
| Footer | `warm-50` background, `warm-200` top border |
| Text | `ink` primary, `warm-600` secondary |

---

## Popover States — Dark Mode

| Element | Style |
|---------|-------|
| Container | `intaglio-800` background, `intaglio-700` border |
| Shadow | `0 4px 16px rgba(0,0,0,0.3)` |
| Header | `intaglio-700` bottom border |
| Footer | `intaglio-900` background, `intaglio-700` top border |
| Text | `warm-100` primary, `warm-400` secondary |

---

## Accessibility

### Trigger

- `aria-expanded="true/false"`
- `aria-haspopup="dialog"` or `aria-haspopup="true"`
- `aria-controls` pointing to popover id

### Popover

- `role="dialog"` or appropriate role
- `aria-labelledby` pointing to header title (if present)
- OR `aria-label` describing popover purpose

### Focus Management

- Focus moves to popover on open
- Focus returns to trigger on close
- Focus trapped within popover

### Keyboard

- ESC closes popover
- Tab/Shift+Tab navigate within popover

---

## Contextual Examples to Build

1. **User Profile Popover** — Avatar trigger, shows user info with View Profile / Sign Out
2. **Filter Popover** — Filter icon trigger, shows filter options with Apply / Clear
3. **Share Popover** — Share button, shows share options or copy link
4. **Date Picker Popover** — Input trigger, shows calendar (simplified)
5. **Confirmation Popover** — Delete icon, shows "Are you sure?" with Yes/No
6. **Popover on Dark** — Same examples on intaglio-900 background

---

## Code Reference

### Popover Container (Light)

```css
.popover {
  @apply absolute z-50;
  @apply bg-white border border-warm-200 rounded-lg;
  @apply min-w-[200px] max-w-[360px];
  box-shadow: 0 4px 16px rgba(0,0,0,0.12);
}
```

### Popover Container (Dark)

```css
.popover-dark {
  @apply bg-intaglio-800 border-intaglio-700;
  box-shadow: 0 4px 16px rgba(0,0,0,0.3);
}
```

### Popover Header

```css
.popover-header {
  @apply px-4 py-3 border-b border-warm-200;
  @apply flex items-center justify-between;
}

.popover-header-dark {
  @apply border-intaglio-700;
}

.popover-title {
  @apply text-sm font-semibold text-ink;
}

.popover-title-dark {
  @apply text-warm-100;
}
```

### Popover Body

```css
.popover-body {
  @apply p-4;
}

.popover-body-text {
  @apply text-sm text-warm-600;
}

.popover-body-text-dark {
  @apply text-warm-400;
}
```

### Popover Footer

```css
.popover-footer {
  @apply px-4 py-3 bg-warm-50 border-t border-warm-200;
  @apply flex justify-end gap-2;
  @apply rounded-b-lg;
}

.popover-footer-dark {
  @apply bg-intaglio-900 border-intaglio-700;
}
```

### Popover Arrow

```css
.popover-arrow {
  @apply absolute w-0 h-0;
}

/* Arrow with border effect */
.popover[data-side="bottom"] .popover-arrow {
  @apply -top-2 left-1/2 -translate-x-1/2;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 8px solid white;
  filter: drop-shadow(0 -1px 0 theme('colors.warm.200'));
}
```

### Animation

```css
.popover-enter {
  animation: popover-enter 150ms ease-out;
}

.popover-exit {
  animation: popover-exit 100ms ease-in forwards;
}

@keyframes popover-enter {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes popover-exit {
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

---

## Implementation Checklist

### Container

- [ ] Background: white (light) / intaglio-800 (dark)
- [ ] Border: warm-200 (light) / intaglio-700 (dark)
- [ ] Border radius: 8px
- [ ] Shadow: 0 4px 16px rgba(0,0,0,0.12)

### Header

- [ ] Padding: 12px 16px
- [ ] Border-bottom: warm-200 / intaglio-700
- [ ] Title: 14px, font-weight 600
- [ ] Close button: optional

### Footer

- [ ] Padding: 12px 16px
- [ ] Background: warm-50 / intaglio-900
- [ ] Border-top: warm-200 / intaglio-700
- [ ] Buttons: right-aligned

### Behavior

- [ ] Click to open/close
- [ ] Click outside closes
- [ ] ESC closes
- [ ] Focus trap

### Animation

- [ ] Enter: 150ms scale + fade
- [ ] Exit: 100ms scale + fade

### Accessibility

- [ ] aria-expanded on trigger
- [ ] role="dialog" on popover
- [ ] Focus management
