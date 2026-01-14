# Progress Component Specification

## Philosophy

- Progress indicators communicate that something is happening and how far along it is
- They reduce perceived wait time and set expectations
- Determinate progress (known duration) is always preferred over indeterminate

---

## Progress Types

| Type | Use Case |
|------|----------|
| Progress Bar | File uploads, multi-step processes, known duration |
| Circular Progress | Loading states, compact spaces |
| Spinner | Indeterminate loading, button states |
| Skeleton | Content loading placeholders |
| Steps/Stepper | Multi-step wizards, onboarding flows |

---

## Progress Bar

### Base Specifications

| Property | Value |
|----------|-------|
| Height | 4px (slim), 8px (default), 12px (thick) |
| Border radius | Height / 2 (pill shape) |
| Track color (light) | `warm-200` |
| Track color (dark) | `intaglio-700` |
| Fill color | `emerald-500` (default) |
| Animation | Width transition, 300ms ease-out |

### Variants

**Default (Emerald)**
- Track: `warm-200` / `intaglio-700`
- Fill: `emerald-500`
- Use: General progress, success path

**Warning (Orange)**
- Fill: `orange-500`
- Use: Approaching limits, time running out

**Error (Magenta)**
- Fill: `magenta-500`
- Use: Over limit, error state

**Thread Gradient**
- Fill: Thread gradient (cool or full spectrum)
- Use: Celebratory, special moments

### With Label

| Element | Light | Dark |
|---------|-------|------|
| Label position | Above or beside bar | Same |
| Label text | 14px, `ink` | `warm-100` |
| Percentage | 14px, `warm-600` | `warm-400` |

### Sizes

| Size | Height | Label Size |
|------|--------|------------|
| Slim | 4px | 12px |
| Default | 8px | 14px |
| Thick | 12px | 14px |

---

## Circular Progress

### Base Specifications

| Property | Value |
|----------|-------|
| Stroke width | 10% of diameter |
| Track color (light) | `warm-200` |
| Track color (dark) | `intaglio-700` |
| Fill color | `emerald-500` |
| Rotation start | -90deg (12 o'clock) |

### Sizes

| Size | Diameter | Stroke Width |
|------|----------|--------------|
| SM | 32px | 3px |
| MD | 48px | 5px |
| LG | 64px | 6px |
| XL | 96px | 8px |

### With Center Content

- Percentage text centered
- Or icon centered
- Font size: ~25% of diameter

---

## Spinner

### Base Specifications

| Property | Value |
|----------|-------|
| Shape | Circle with partial stroke |
| Stroke | 2-3px depending on size |
| Color | `emerald-500` or inherit from text |
| Animation | Rotate 360deg, 750ms linear infinite |

### Sizes

| Size | Diameter | Use Case |
|------|----------|----------|
| XS | 12px | Inline with text |
| SM | 16px | Button loading state |
| MD | 24px | Card/section loading |
| LG | 32px | Page section loading |
| XL | 48px | Full page loading |

### Color Variants

| Context | Color |
|---------|-------|
| Default | `emerald-500` |
| On primary button | `white` |
| On dark background | `emerald-400` |
| Inherit | `currentColor` |

---

## Skeleton Loader

### Base Specifications

| Property | Value |
|----------|-------|
| Background (light) | `warm-100` |
| Background (dark) | `intaglio-700` |
| Shimmer | Animated gradient sweep |
| Border radius | 4px (text), 8px (cards), full (avatars) |

### Animation

```css
@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}
```

Duration: 1.5s, ease-in-out, infinite

### Shimmer Gradient

Light:
```css
background: linear-gradient(
  90deg,
  theme('colors.warm.100') 0%,
  theme('colors.warm.50') 50%,
  theme('colors.warm.100') 100%
);
background-size: 200% 100%;
```

Dark:
```css
background: linear-gradient(
  90deg,
  theme('colors.intaglio.700') 0%,
  theme('colors.intaglio.600') 50%,
  theme('colors.intaglio.700') 100%
);
```

### Common Skeleton Shapes

| Shape | Dimensions | Use Case |
|-------|------------|----------|
| Text line | 100% × 16px | Body text |
| Text line short | 60-80% × 16px | End of paragraph |
| Heading | 100% × 24px | Titles |
| Avatar | 40px circle | User avatars |
| Thumbnail | 48×48px or 64×64px | Image previews |
| Card | Full width × 120px+ | Card placeholders |

---

## Steps / Stepper

### Anatomy

- **Step indicator** — Number or icon in circle
- **Step label** — Text below or beside indicator
- **Connector** — Line between steps
- **Step description** — Optional secondary text

### Base Specifications

| Property | Value |
|----------|-------|
| Indicator size | 32px (default), 24px (compact) |
| Indicator shape | Circle |
| Connector height | 2px |
| Gap (indicator to label) | 8px |
| Gap (between steps) | 16px minimum |

### Step States

**Light Mode:**

| State | Indicator BG | Indicator Border | Indicator Text | Connector |
|-------|--------------|------------------|----------------|-----------|
| Completed | `emerald-500` | none | `white` (checkmark) | `emerald-500` |
| Current | `white` | `emerald-500` (2px) | `emerald-600` | `warm-200` |
| Upcoming | `white` | `warm-300` (2px) | `warm-500` | `warm-200` |
| Error | `magenta-500` | none | `white` (X icon) | `magenta-500` |

**Dark Mode:**

| State | Indicator BG | Indicator Border | Indicator Text | Connector |
|-------|--------------|------------------|----------------|-----------|
| Completed | `emerald-500` | none | `white` | `emerald-500` |
| Current | `intaglio-800` | `emerald-500` (2px) | `emerald-400` | `intaglio-600` |
| Upcoming | `intaglio-800` | `intaglio-600` (2px) | `warm-500` | `intaglio-600` |
| Error | `magenta-500` | none | `white` | `magenta-500` |

### Layouts

**Horizontal:**
- Steps in a row
- Labels below indicators
- Connectors between indicators

**Vertical:**
- Steps in a column
- Labels beside indicators
- Connectors between indicators (vertical lines)

---

## Contextual Examples to Build

1. **File Upload Progress** — Progress bar with filename and percentage
2. **Clearing Balance Progress** — Progress bar showing funding progress
3. **Button Loading State** — Button with spinner replacing text
4. **Card Skeleton** — Skeleton placeholder for a card component
5. **Table Skeleton** — Skeleton rows in a table
6. **Onboarding Stepper** — 4-step horizontal stepper with current step highlighted
7. **Progress on Dark** — All variants on intaglio-900 background

---

## Code Reference

### Progress Bar

```css
.progress-track {
  @apply w-full h-2 bg-warm-200 rounded-full overflow-hidden;
}

.progress-track-dark {
  @apply bg-intaglio-700;
}

.progress-fill {
  @apply h-full bg-emerald-500 rounded-full;
  @apply transition-all duration-300 ease-out;
}

.progress-fill-warning {
  @apply bg-orange-500;
}

.progress-fill-error {
  @apply bg-magenta-500;
}
```

### Spinner

```css
.spinner {
  @apply animate-spin rounded-full;
  @apply border-2 border-emerald-500 border-t-transparent;
}

.spinner-sm { @apply w-4 h-4; }
.spinner-md { @apply w-6 h-6; }
.spinner-lg { @apply w-8 h-8; }

.spinner-white {
  @apply border-white border-t-transparent;
}
```

### Skeleton

```css
.skeleton {
  @apply bg-warm-100 rounded;
  @apply animate-shimmer;
  background: linear-gradient(
    90deg,
    theme('colors.warm.100') 0%,
    theme('colors.warm.50') 50%,
    theme('colors.warm.100') 100%
  );
  background-size: 200% 100%;
}

.skeleton-dark {
  background: linear-gradient(
    90deg,
    theme('colors.intaglio.700') 0%,
    theme('colors.intaglio.600') 50%,
    theme('colors.intaglio.700') 100%
  );
}

.skeleton-text {
  @apply h-4 w-full rounded;
}

.skeleton-avatar {
  @apply w-10 h-10 rounded-full;
}

@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

.animate-shimmer {
  animation: shimmer 1.5s ease-in-out infinite;
}
```

### Stepper

```css
.stepper {
  @apply flex items-center;
}

.step {
  @apply flex flex-col items-center;
}

.step-indicator {
  @apply w-8 h-8 rounded-full;
  @apply flex items-center justify-center;
  @apply text-sm font-semibold;
}

.step-indicator-completed {
  @apply bg-emerald-500 text-white;
}

.step-indicator-current {
  @apply bg-white border-2 border-emerald-500 text-emerald-600;
}

.step-indicator-upcoming {
  @apply bg-white border-2 border-warm-300 text-warm-500;
}

.step-connector {
  @apply flex-1 h-0.5 bg-warm-200 mx-2;
}

.step-connector-completed {
  @apply bg-emerald-500;
}

.step-label {
  @apply mt-2 text-sm font-medium text-ink;
}

.step-label-upcoming {
  @apply text-warm-500;
}
```

---

## Implementation Checklist

### Progress Bar

- [ ] Heights: 4px, 8px, 12px
- [ ] Track: warm-200 (light) / intaglio-700 (dark)
- [ ] Fill: emerald-500 (default), orange-500 (warning), magenta-500 (error)
- [ ] Animation: 300ms width transition

### Spinner

- [ ] Sizes: 12px, 16px, 24px, 32px, 48px
- [ ] Color: emerald-500 default, white on buttons
- [ ] Animation: 750ms rotation

### Skeleton

- [ ] Background: warm-100 / intaglio-700
- [ ] Shimmer animation: 1.5s
- [ ] Common shapes: text, avatar, card

### Stepper

- [ ] Indicator size: 32px default
- [ ] States: completed, current, upcoming, error
- [ ] Completed: emerald-500 bg with checkmark
- [ ] Current: emerald-500 border
- [ ] Connector colors match state
