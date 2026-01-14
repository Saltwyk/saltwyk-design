# Modal Component Specification

## Philosophy

- Modals interrupt the user to focus attention on a specific task or decision
- They should be used sparingly—only when context switching is necessary
- Every modal needs a clear exit path (close button, cancel action, or backdrop click)

---

## Anatomy

- **Backdrop** — Overlay behind modal
- **Container** — The modal box
- **Header** — Title, optional subtitle, close button
- **Body** — Content area
- **Footer** — Action buttons

---

## Base Specifications

| Property | Value |
|----------|-------|
| Backdrop color (light) | `intaglio-900` at 60% opacity |
| Backdrop color (dark) | `intaglio-950` at 80% opacity |
| Container background (light) | `white` |
| Container background (dark) | `intaglio-800` |
| Container border radius | 12px |
| Container shadow | `0 25px 50px -12px rgba(0,0,0,0.25)` |
| Header padding | 20px 24px |
| Body padding | 0 24px 20px |
| Footer padding | 16px 24px |
| Footer border (light) | 1px `warm-200` top |
| Footer border (dark) | 1px `intaglio-700` top |

### Size Scale

| Size | Width | Use Case |
|------|-------|----------|
| Small | 400px | Simple confirmations |
| Default | 500px | Standard dialogs, forms |
| Large | 640px | Complex forms, detail views |
| XLarge | 800px | Tables, rich content |
| Full | 90vw (max 1000px) | Full-page-like content |

**Max height:** 90vh with scrollable body

---

## Modal Types

### Alert Modal

Simple message with single action.

| Element | Specification |
|---------|---------------|
| Size | Small (400px) |
| Icon | Optional, centered above title (40px) |
| Title | Centered, 18px, font-weight 600 |
| Message | Centered, 14px, `warm-600` |
| Actions | Single centered button |

### Confirmation Modal

Decision requiring explicit choice.

| Element | Specification |
|---------|---------------|
| Size | Small (400px) |
| Title | Left-aligned, 18px |
| Message | Description of consequences |
| Actions | Ghost cancel + Primary/Destructive confirm |

### Form Modal

Input collection in modal context.

| Element | Specification |
|---------|---------------|
| Size | Default (500px) or Large (640px) |
| Body | Form fields with standard input styling |
| Actions | Ghost cancel + Primary submit |
| Validation | Inline errors, submit button disabled until valid |

### Information Modal

Content display without required action.

| Element | Specification |
|---------|---------------|
| Size | Default or Large |
| Body | Rich content (text, images, lists) |
| Actions | Single "Close" or "Got it" button |

---

## Modal States — Light Mode

| Element | Style |
|---------|-------|
| Backdrop | `intaglio-900/60` |
| Container | `white` background |
| Border | none (shadow provides edge) |
| Shadow | `0 25px 50px -12px rgba(0,0,0,0.25)` |
| Header title | `ink`, 18px, font-weight 600 |
| Header subtitle | `warm-500`, 14px |
| Close button | Ghost icon button, top-right |
| Body text | `ink` primary, `warm-600` secondary |
| Footer | `warm-100` background, `warm-200` top border |

---

## Modal States — Dark Mode (Fire Opal)

| Element | Style |
|---------|-------|
| Backdrop | `intaglio-950/80` |
| Container | `intaglio-800` background |
| Border | `intaglio-700` (1px) |
| Shadow | `0 25px 50px -12px rgba(0,0,0,0.5)` |
| Header title | `warm-100`, 18px, font-weight 600 |
| Header subtitle | `warm-400`, 14px |
| Close button | Ghost dark icon button |
| Body text | `warm-100` primary, `warm-400` secondary |
| Footer | `intaglio-900` background, `intaglio-700` top border |

---

## Header Patterns

### Simple Header

- Title only
- Close button right-aligned

### Header with Subtitle

- Title
- Subtitle below (14px, muted)
- Close button

### Header with Icon

- Icon left of title (24px)
- Title + optional subtitle

### Header with Status

- Title
- Badge/status indicator inline or below

### Destructive Header

- Warning icon in `magenta-500`
- Title in `magenta-700` (light) / `magenta-400` (dark)

---

## Footer Patterns

### Single Action

- One button, right-aligned
- Used for information modals, alerts

### Two Actions

- Cancel (Ghost) left-ish, Confirm (Primary) right
- Standard pattern for confirmations and forms

### Three Actions

- Cancel (Ghost) left
- Secondary action (Secondary button) center-right
- Primary action (Primary button) right
- Used when there's a "Save Draft" type option

### Destructive Actions

- Cancel (Ghost) left
- Delete/Remove (Destructive button) right

### Actions with Loading

- Primary button shows loading state
- Other buttons disabled during loading
- Modal cannot be closed during loading (optional)

---

## Animation

### Opening

1. Backdrop fades in (150ms, ease-out)
2. Modal scales up from 95% and fades in (200ms, ease-out)

### Closing

1. Modal scales down to 95% and fades out (150ms, ease-in)
2. Backdrop fades out (150ms, ease-in)

```css
@keyframes modal-enter {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes modal-exit {
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

## Scrolling Behavior

### Short content

- Modal height fits content
- No scrolling

### Tall content

- Modal max-height: 90vh
- Header and footer: fixed
- Body: scrollable with `overflow-y: auto`
- Scroll shadow at top/bottom when scrollable

### Scroll indicators

- Subtle shadow or gradient at body top when scrolled down
- Subtle shadow at body bottom when more content below

---

## Focus Management

### On open

- Focus moves to first focusable element in modal
- Or to close button if no other focusable elements

### Tab trapping

- Tab cycles through modal elements only
- Does not escape to page behind

### On close

- Focus returns to element that triggered modal

### Escape key

- Closes modal (unless during critical operation)

---

## Backdrop Behavior

### Click to close

- Default: Clicking backdrop closes modal
- Optional: Disable backdrop close for important forms

### Visual state

- Backdrop dims page content
- Page content should not be interactive

---

## Mobile Behavior

### Default (centered)

- Modal stays centered
- Width: 90vw (respecting max-width)
- Same animation

### Bottom sheet (alternative)

| Property | Value |
|----------|-------|
| Position | Fixed bottom |
| Width | 100% |
| Border radius | 12px 12px 0 0 |
| Max height | 90vh |
| Animation | Slide up from bottom |

---

## Accessibility

### ARIA requirements

- Modal container: `role="dialog"` and `aria-modal="true"`
- Title linked via `aria-labelledby`
- Description linked via `aria-describedby` (optional)

### Focus management

- Focus trapped within modal
- ESC key closes modal
- Focus returns to trigger on close

### Screen readers

- Modal announced when opened
- Content readable in logical order

---

## Contextual Examples to Build

1. **Delete Confirmation** — Destructive modal with warning icon, explanation, Cancel + Delete buttons
2. **Create Form** — Form modal with 4-5 fields, validation error on one field, Cancel + Create buttons
3. **Success Alert** — Success alert with checkmark icon in emerald, "Payment complete" message, single "Done" button
4. **Settings Form (Dark)** — Dark modal on dark page, form fields, toggle switches, Cancel + Save buttons
5. **Mobile Bottom Sheet** — Same form as #2 rendered as bottom sheet on mobile width

---

## Code Reference

### Modal Container (Light)

```css
.modal-backdrop {
  @apply fixed inset-0 bg-intaglio-900/60;
  @apply flex items-center justify-center;
}

.modal {
  @apply bg-white rounded-xl shadow-2xl;
  @apply w-full max-w-lg max-h-[90vh];
  @apply flex flex-col;
}

.modal-header {
  @apply px-6 py-5 flex items-start justify-between;
}

.modal-title {
  @apply text-lg font-semibold text-ink;
}

.modal-body {
  @apply px-6 pb-5 overflow-y-auto;
}

.modal-footer {
  @apply px-6 py-4 bg-warm-100 border-t border-warm-200;
  @apply flex justify-end gap-3;
}
```

### Modal Container (Dark)

```css
.modal-dark {
  @apply bg-intaglio-800 border border-intaglio-700 rounded-xl;
  box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5);
}

.modal-header-dark {
  @apply px-6 py-5;
}

.modal-title-dark {
  @apply text-lg font-semibold text-warm-100;
}

.modal-footer-dark {
  @apply px-6 py-4 bg-intaglio-900 border-t border-intaglio-700;
}
```

### Animation

```css
.modal-enter {
  animation: modal-enter 200ms ease-out;
}

.modal-exit {
  animation: modal-exit 150ms ease-in;
}

@keyframes modal-enter {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}

@keyframes modal-exit {
  from { opacity: 1; transform: scale(1); }
  to { opacity: 0; transform: scale(0.95); }
}
```

---

## Implementation Checklist

### Container

- [ ] Border radius: 12px
- [ ] Shadow: 0 25px 50px -12px rgba(0,0,0,0.25)
- [ ] Max height: 90vh
- [ ] Sizes: 400px, 500px, 640px, 800px, 90vw

### Backdrop

- [ ] Color: intaglio-900/60 (light) / intaglio-950/80 (dark)
- [ ] Click to close (default behavior)

### Header

- [ ] Padding: 20px 24px
- [ ] Title: 18px, font-weight 600
- [ ] Close button: top-right corner

### Footer

- [ ] Padding: 16px 24px
- [ ] Border-top: 1px warm-200 (light) / intaglio-700 (dark)
- [ ] Buttons: right-aligned, 12px gap

### Animation

- [ ] Enter: 200ms scale + fade
- [ ] Exit: 150ms scale + fade

### Accessibility

- [ ] Focus trap within modal
- [ ] ESC closes modal
- [ ] aria-modal="true"
- [ ] Focus returns to trigger on close

### Dark mode

- [ ] Container: intaglio-800
- [ ] Border: 1px intaglio-700
- [ ] Footer: intaglio-900 background
