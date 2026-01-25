# Setup Progress Component Specification

> Implementation guide extracted from `/merchant/components/setup-progress.html`

---

## Component Overview

### Purpose
A compact progress indicator used in merchant onboarding flows. Shows completion status through dots and connecting lines, optimized for multi-step setup wizards with 5-7 steps.

### Used in
- **Merchant Onboarding Flow** - "Get Verified" screen header
- **Mobile Headers** - Compact horizontal indicator
- **Desktop Sidebars** - Vertical variant with descriptions

### Dependencies
- None (standalone component)
- Uses Lucide icons for related screen navigation only

---

## Visual Structure

### Layout

| Context | Layout | Description |
|---------|--------|-------------|
| Mobile | Inline Dots | Compact horizontal, no labels |
| Desktop (form) | Labeled Steps | Horizontal with labels below |
| Desktop (sidebar) | Vertical Steps | Stacked with titles and descriptions |

### Variants

#### 1. Inline Dots (Default)
- Compact horizontal indicator
- Dots + connecting lines only
- No labels
- Ideal for mobile headers

#### 2. Labeled Steps
- Dots with labels below
- Horizontal layout with step names
- Best for desktop layouts with horizontal space
- Uses pseudo-element for connecting line behind steps

#### 3. Vertical Steps
- Stacked vertically with descriptions
- Used in sidebars or summary views
- Shows step title + description text

### Spacing

| Property | Value | Notes |
|----------|-------|-------|
| Gap (inline) | `8px` | Between dots and lines |
| Vertical gap | `12px` | Between indicator and content |
| Step content padding | `20px` (bottom) | Vertical variant only |
| Vertical line min-height | `24px` | Minimum connector height |
| Vertical line margin | `4px 0` | Top/bottom spacing |

---

## Design Tokens Used

### Colors

| State | Dot Color | Ring/Shadow | Label Color |
|-------|-----------|-------------|-------------|
| Pending | `warm-300` | — | `warm-500` |
| Active | `indigo-500` | `indigo-100` (4px ring) | `indigo-600` (weight 600) |
| Completed | `emerald-500` | — | `emerald-600` |
| Error | `magenta-500` | `magenta-100` (4px ring) | — |

### Line Colors

| State | Color |
|-------|-------|
| Pending Line | `warm-200` |
| Completed Line | `emerald-500` |

### Typography

| Element | Size | Weight | Color |
|---------|------|--------|-------|
| Step Label (labeled) | `11px` | 500 | `warm-500` / state color |
| Step Title (vertical) | `14px` | 600 | `ink` / `emerald-600` / `warm-400` |
| Step Description | `13px` | 400 | `warm-500` |
| Mobile Step Counter | `12px` | 400 | `warm-500` |
| Mobile Step Title | `18px` | 600 | `ink` |

### Fire Opal Specific
- Thread gradient in header: `linear-gradient(90deg, cyan-thread, magenta-thread)`
- Error state uses `magenta-500` (Fire Opal's attention color)

---

## Interactive States

### Default State (Pending)
- Dot: `warm-300` fill, no shadow
- Line: `warm-200` fill
- Label (if shown): `warm-500` text

### Active State
- Dot: `indigo-500` fill
- Ring: `4px box-shadow` with `indigo-100`
- Label: `indigo-600` text, `font-weight: 600`

### Completed State
- Dot: `emerald-500` fill
- Line to next completed: `emerald-500`
- Label: `emerald-600` text

### Error State
- Dot: `magenta-500` fill
- Ring: `4px box-shadow` with `magenta-100`
- Indicates step needs attention/correction

### Hover State
- N/A for dots (not interactive buttons)
- Related navigation links follow standard hover patterns

### Loading State
- Not explicitly defined; component shows static state

---

## Props Interface

```typescript
type StepStatus = 'pending' | 'active' | 'completed' | 'error';

interface Step {
  id: string;
  label?: string;           // For labeled variant
  title?: string;           // For vertical variant
  description?: string;     // For vertical variant
  status: StepStatus;
}

interface SetupProgressProps {
  /** Array of step definitions */
  steps: Step[];

  /** Visual variant */
  variant: 'inline' | 'labeled' | 'vertical';

  /** Current step index (0-based) - alternative to setting status on each step */
  currentStep?: number;

  /** Optional callback when a completed step is clicked */
  onStepClick?: (stepId: string, index: number) => void;

  /** Allow navigation to completed steps */
  allowNavigation?: boolean;

  /** Optional class name for styling */
  className?: string;
}

// Mobile step card companion component
interface MobileStepCardProps {
  currentStep: number;
  totalSteps: number;
  title: string;
  description?: string;
}
```

---

## Behavioral Requirements

### Interactions
- **Click on completed steps**: Navigate back (if `allowNavigation` enabled)
- **No forward navigation**: Cannot click pending/future steps
- **Active step**: Read-only indication, not clickable

### Validation
- Steps must be sequential (no skipping)
- At least one step required
- Maximum 7 steps recommended (consider grouping for more)

### Responsive Behavior
- **Mobile (<640px)**: Use inline dots + mobile step card
- **Desktop forms**: Use labeled variant
- **Desktop sidebars**: Use vertical variant

### Edge Cases
- **Single step**: Just show one active dot
- **All completed**: Last dot is active (review step)
- **Error on completed step**: Shows error state, can navigate back
- **Long labels**: Labels should be kept short (single word preferred)

---

## Implementation Notes

### Complexity Estimate
**Simple** - Pure presentational component with minimal logic

### Reusable Patterns from @repo/ui
- No direct dependencies on existing components
- Could use shared color token utilities
- May share with core `Stepper` component architecture (but different sizing)

### Custom Logic Needed
- Step status derivation from `currentStep` prop
- Connecting line status calculation (completed if both adjacent dots completed)

### Accessibility Considerations
- Use `role="list"` and `role="listitem"` for step containers
- `aria-current="step"` on active step
- `aria-label` on each dot describing step (e.g., "Step 1: Account, completed")
- For vertical variant, labels provide sufficient context
- Consider `aria-live` region for mobile step card when step changes

---

## Design Spec Code Samples

### CSS - Dot Base
```css
.step-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: hsl(var(--warm-300));
  flex-shrink: 0;
}
```

### CSS - Dot States
```css
.step-dot.completed {
  background: hsl(var(--emerald-500));
}

.step-dot.active {
  background: hsl(var(--indigo-500));
  box-shadow: 0 0 0 4px hsl(var(--indigo-100));
}

.step-dot.error {
  background: hsl(var(--magenta-500));
  box-shadow: 0 0 0 4px hsl(var(--magenta-100));
}
```

### CSS - Container
```css
.progress-steps {
  display: flex;
  align-items: center;
  gap: 8px;
}

.step-line {
  flex: 1;
  height: 2px;
  background: hsl(var(--warm-200));
}

.step-line.completed {
  background: hsl(var(--emerald-500));
}
```

### CSS - Labeled Variant
```css
.progress-steps-labeled {
  display: flex;
  justify-content: space-between;
  position: relative;
}

.progress-steps-labeled::before {
  content: '';
  position: absolute;
  top: 5px;
  left: 20px;
  right: 20px;
  height: 2px;
  background: hsl(var(--warm-200));
  z-index: 0;
}

.step-labeled {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  z-index: 1;
}

.step-labeled .step-label {
  font-size: 11px;
  font-weight: 500;
  color: hsl(var(--warm-500));
  text-align: center;
}
```

### CSS - Vertical Variant
```css
.progress-steps-vertical {
  display: flex;
  flex-direction: column;
}

.step-vertical {
  display: flex;
  gap: 12px;
  position: relative;
}

.step-vertical .step-line-vertical {
  width: 2px;
  flex: 1;
  min-height: 24px;
  background: hsl(var(--warm-200));
  margin: 4px 0;
}

.step-vertical:last-child .step-line-vertical {
  display: none;
}

.step-vertical .step-title {
  font-size: 14px;
  font-weight: 600;
  color: hsl(var(--ink));
  margin-bottom: 2px;
}

.step-vertical .step-description {
  font-size: 13px;
  color: hsl(var(--warm-500));
}
```

### HTML Structure (6-step at step 3)
```html
<div class="progress-steps">
  <div class="step-dot completed"></div>
  <div class="step-line completed"></div>
  <div class="step-dot completed"></div>
  <div class="step-line completed"></div>
  <div class="step-dot active"></div>
  <div class="step-line"></div>
  <div class="step-dot"></div>
  <div class="step-line"></div>
  <div class="step-dot"></div>
  <div class="step-line"></div>
  <div class="step-dot"></div>
</div>
```

---

## Design Decisions

### Why 10px dots instead of 32px?
Merchant onboarding often has 5-7 steps. At 32px per indicator, the stepper would dominate the mobile header. The 10px dot pattern stays compact while still clearly communicating progress.

### Why indigo for active (not emerald border)?
The core stepper uses emerald border for "current" state. Setup Progress uses `indigo-500` with a ring to better distinguish the active step from completed steps at small sizes. The ring adds visual weight and draws focus.

### When to use each variant?
- **Inline Dots**: Mobile headers, compact spaces
- **Labeled**: Desktop forms where step names add clarity
- **Vertical**: Sidebars, summary views, or when step descriptions are needed
