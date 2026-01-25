# Clearing Balance Calculator Component Specification

> Implementation guide extracted from `/merchant/components/clearing-balance-calculator.html`

---

## Component Overview

### Purpose
Interactive calculator helping merchants determine the appropriate clearing balance funding amount. Provides a single clear recommendation with adjustment capability, real-time coverage estimates, and validation warnings.

### Used in
- **Onboarding Phase 5** - Initial clearing balance funding
- **Settings > Finance** - Top-up existing balance

### Dependencies
- Lucide icons (`alert-triangle`, `info`, `clock`, `alert-circle`)
- Range slider (native HTML input)
- Category benchmark data (onboarding) or transaction history (settings)

---

## Visual Structure

### Layout

| Context | Description |
|---------|-------------|
| Onboarding | Uses category benchmarks, no current balance display |
| Settings | Shows current balance + runway, uses actual transaction history |

### Main Sections
1. **Header** - Title and description
2. **Current Balance Display** (Settings only) - Balance + runway indicator
3. **Recommendation Box** - Large amount display + slider + custom input
4. **Validation Messages** - Warnings for edge amounts
5. **Coverage Box** - What the amount covers (calculations)
6. **Info Notice** - "Add more anytime" reassurance
7. **Continue Button** - Primary action with amount

### Spacing

| Property | Value | Notes |
|----------|-------|-------|
| Container max-width | `600px` | Centered |
| Recommendation box padding | `32px` (desktop), `24px 16px` (mobile) | Internal spacing |
| Coverage box padding | `24px` (desktop), `16px` (mobile) | — |
| Section divider margin | `16px 0` | Between coverage sections |
| Slider margin-bottom | `20px` | Before custom input |
| Validation warning margin-bottom | `24px` | Before coverage box |
| Info notice margin-bottom | `24px` | Before button |

---

## Design Tokens Used

### Colors

#### Recommendation Box
| State | Background | Border |
|-------|------------|--------|
| Default | `emerald-50` | `emerald-200` (2px) |
| Warning (low amount) | `emerald-50` | `orange-300` |

#### Amount Display
| State | Color |
|-------|-------|
| Default | `emerald-600` |
| Warning | `orange-500` |

#### Slider
| Element | Color |
|---------|-------|
| Track | `warm-200` |
| Thumb | `emerald-500` |
| Thumb hover | `emerald-600` |
| Thumb active | `emerald-700` |
| Focus ring | `emerald-500` (30% opacity) |

#### Validation Messages
| Type | Background | Border | Icon | Text |
|------|------------|--------|------|------|
| Warning | `orange-50` | `orange-200` | `orange-500` | `orange-700` |
| Info | `indigo-50` | `indigo-200` | `indigo-500` | `indigo-700` |

#### Runway Indicator (Settings)
| State | Background | Text |
|-------|------------|------|
| Low (<14 days) | `orange-100` | `orange-700` |
| Good (14+ days) | `emerald-100` | `emerald-700` |

### Typography

| Element | Size | Weight | Color |
|---------|------|--------|-------|
| Calculator title | `24px` | 700 | `warm-900` |
| Description | `16px` | 400 | `warm-600` |
| Recommendation label | `14px` | 600 | `warm-700` |
| Amount display | `48px` (desktop), `40px` (mobile) | 700 | `emerald-600` |
| Slider labels | `12px` | 500 | `warm-500` |
| Custom input label | `14px` | 500 | `warm-700` |
| Coverage title | `16px` | 600 | `warm-900` |
| Coverage section header | `14px` | 600 | `warm-900` |
| Coverage list items | `14px` | 400 | `warm-700` |
| Coverage highlight | `14px` | 500 | `emerald-600` |
| Validation text | `13px` | 400 | See type above |
| Info notice | `13px` | 400 | `warm-600` |
| Button text | `16px` | 600 | white |

### Fire Opal Specific
- Primary actions in `emerald-600`
- Warning states use `orange-*` family
- Info states use `indigo-*` family

---

## Interactive States

### Slider
- **Default**: `emerald-500` thumb, white border, subtle shadow
- **Hover**: `emerald-600` thumb, 1.1x scale
- **Active**: `emerald-700` thumb
- **Focus**: `0 0 0 3px emerald-500/30%` ring

### Custom Input
- **Default**: `warm-300` border (1px)
- **Focus**: `emerald-500` border (2px), padding adjusts 1px, `0 0 0 3px emerald-500/10%` shadow
- **Error**: `orange-400` border

### Validation States
- **Below minimum (<$500)**: Warning message shown, box border changes to orange
- **Very high (>$50,000)**: Info message shown (soft guidance, not error)

### Continue Button
- **Default**: `emerald-600` bg
- **Hover**: `emerald-700` bg

---

## Props Interface

```typescript
interface CategoryBenchmark {
  categoryId: string;
  categoryName: string;
  penetrationRate: number;    // 0.08-0.15 (8%-15%)
  averageTransaction: number; // e.g., 75
  monthlyRevenue: number;     // From merchant profile
}

interface TransactionHistory {
  dailyAverageUsage: number;  // e.g., 238
  currentBalance: number;     // e.g., 1900
  currentRunwayDays: number;  // e.g., 8
  penetrationRate: number;    // Actual observed rate
  averageTransaction: number; // Actual observed
}

// Onboarding context
interface ClearingBalanceCalculatorOnboardingProps {
  context: 'onboarding';

  /** Category benchmark data */
  benchmark: CategoryBenchmark;

  /** Minimum allowed amount */
  minAmount?: number;  // Default: 500

  /** Maximum allowed amount */
  maxAmount?: number;  // Default: 50000

  /** Step size for slider */
  step?: number;       // Default: 100

  /** Called when user confirms amount */
  onContinue: (amount: number) => void;

  /** Slider max (may differ from maxAmount) */
  sliderMax?: number;  // Default: 10000
}

// Settings context
interface ClearingBalanceCalculatorSettingsProps {
  context: 'settings';

  /** Transaction history data */
  history: TransactionHistory;

  /** Minimum top-up amount */
  minAmount?: number;  // Default: 500

  /** Maximum top-up amount */
  maxAmount?: number;  // Default: 50000

  /** Step size for slider */
  step?: number;       // Default: 100

  /** Called when user confirms amount */
  onContinue: (amount: number) => void;

  /** Slider max (may differ from maxAmount) */
  sliderMax?: number;  // Default: 20000
}

type ClearingBalanceCalculatorProps =
  | ClearingBalanceCalculatorOnboardingProps
  | ClearingBalanceCalculatorSettingsProps;
```

---

## Behavioral Requirements

### Calculation Logic

#### Onboarding (No History)
1. Get monthly revenue from profile
2. Apply category penetration rate (8-15%)
3. Add 25% risk buffer
4. Round to nearest $500
5. Enforce min $500, max $50,000

```typescript
function calculateOnboardingRecommendation(benchmark: CategoryBenchmark): number {
  const monthlyRewardsVolume = benchmark.monthlyRevenue * benchmark.penetrationRate;
  const withBuffer = monthlyRewardsVolume * 1.25;
  const rounded = Math.round(withBuffer / 500) * 500;
  return Math.max(500, Math.min(50000, rounded));
}
```

#### Settings (With History)
1. Calculate daily average usage (30 days)
2. Target: 30 days runway
3. Top-up = (daily × 30) - current balance
4. Round to nearest $500
5. Minimum $500 top-up

```typescript
function calculateSettingsRecommendation(history: TransactionHistory): number {
  const targetRunwayDays = 30;
  const targetBalance = history.dailyAverageUsage * targetRunwayDays;
  const topUp = targetBalance - history.currentBalance;
  return Math.max(500, Math.round(topUp / 500) * 500);
}
```

### Category Benchmarks

| Category | Penetration Rate | Avg Transaction |
|----------|------------------|-----------------|
| Home & Garden | 10% | $75 |
| Apparel | 15% | $60 |
| Beauty | 12% | $50 |
| Food & Beverage | 8% | $40 |

### Slider Sync
- Moving slider updates input and amount display
- Typing in input updates slider (clamped to slider range)
- Both update coverage calculations in real-time

### Validation Rules
- **Below $500**: Warning shown, amount still allowed
- **Above $50,000**: Info message (not blocking)
- **On blur with <$500**: Reset to $500

### Responsive Behavior
- **Mobile (<640px)**:
  - Recommendation box padding: `24px 16px`
  - Amount display: `40px`
  - Coverage box padding: `16px`
  - Custom input stacks below label
  - Slider thumb: `32px` (larger touch target)

### Keyboard Navigation
- **Arrow keys**: ±$100 (step)
- **Page Up/Down**: ±$1,000
- **Home/End**: Min/Max

---

## Implementation Notes

### Complexity Estimate
**Medium** - Calculation logic, bidirectional input sync, real-time updates

### Reusable Patterns from @repo/ui
- `Input` with prefix ($)
- `Button` primary variant
- Alert/Warning message components

### Custom Logic Needed
- Calculation functions (per context)
- Coverage estimate calculations
- Slider/input bidirectional sync
- Currency formatting/parsing
- Validation state management

### Accessibility Considerations
- Slider: `aria-valuemin`, `aria-valuemax`, `aria-valuenow`, `aria-valuetext` (formatted currency)
- Tab order: Slider -> Input -> Button
- Keyboard: Arrow keys for fine adjustment, Page Up/Down for larger jumps
- Input has descriptive `aria-describedby` hint
- Validation warnings announced via `aria-live="polite"` region
- Coverage updates debounced (300ms) to avoid excessive announcements

---

## Design Spec Code Samples

### CSS - Recommendation Box
```css
.recommendation-box {
  background: hsl(var(--emerald-50));
  border: 2px solid hsl(var(--emerald-200));
  border-radius: 12px;
  padding: 32px;
  text-align: center;
  margin-bottom: 32px;
}

.recommendation-box.warning {
  border-color: hsl(var(--orange-300));
}
```

### CSS - Amount Display
```css
.amount-display {
  font-size: 48px;
  font-weight: 700;
  color: hsl(var(--emerald-600));
  letter-spacing: -0.02em;
  margin-bottom: 24px;
  transition: color 0.15s ease;
}

.amount-display.warning {
  color: hsl(var(--orange-500));
}
```

### CSS - Slider
```css
.balance-slider {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 6px;
  background: hsl(var(--warm-200));
  border-radius: 3px;
  outline: none;
  cursor: pointer;
}

.balance-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 24px;
  height: 24px;
  background: hsl(var(--emerald-500));
  border-radius: 50%;
  cursor: pointer;
  border: 2px solid white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  transition: background 0.15s ease, transform 0.1s ease;
}

.balance-slider::-webkit-slider-thumb:hover {
  background: hsl(var(--emerald-600));
  transform: scale(1.1);
}

.balance-slider:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 3px hsl(var(--emerald-500) / 30%),
              0 2px 4px rgba(0, 0, 0, 0.15);
}
```

### CSS - Custom Input
```css
.custom-input {
  width: 100%;
  padding: 12px 16px 12px 32px;
  font-size: 16px;
  font-weight: 500;
  color: hsl(var(--warm-900));
  background: white;
  border: 1px solid hsl(var(--warm-300));
  border-radius: 6px;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
}

.custom-input:focus {
  outline: none;
  border-color: hsl(var(--emerald-500));
  border-width: 2px;
  padding: 11px 15px 11px 31px;
  box-shadow: 0 0 0 3px hsl(var(--emerald-500) / 10%);
}

.custom-input-prefix {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 16px;
  font-weight: 500;
  color: hsl(var(--warm-500));
  pointer-events: none;
}
```

### CSS - Validation Messages
```css
.validation-warning {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 12px 16px;
  background: hsl(var(--orange-50));
  border: 1px solid hsl(var(--orange-200));
  border-radius: 6px;
  margin-bottom: 24px;
}

.validation-warning-icon {
  width: 18px;
  height: 18px;
  color: hsl(var(--orange-500));
  flex-shrink: 0;
  margin-top: 2px;
}

.validation-warning-text {
  font-size: 13px;
  color: hsl(var(--orange-700));
  line-height: 1.4;
}
```

### CSS - Coverage Box
```css
.coverage-box {
  background: white;
  border: 1px solid hsl(var(--warm-200));
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  margin-bottom: 24px;
}

.coverage-list li {
  font-size: 14px;
  color: hsl(var(--warm-700));
  line-height: 1.6;
  padding-left: 16px;
  position: relative;
  margin-bottom: 4px;
}

.coverage-list .highlight {
  color: hsl(var(--emerald-600));
  font-weight: 500;
}
```

### CSS - Runway Indicator (Settings)
```css
.runway-indicator {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
}

.runway-indicator.low {
  background: hsl(var(--orange-100));
  color: hsl(var(--orange-700));
}

.runway-indicator.good {
  background: hsl(var(--emerald-100));
  color: hsl(var(--emerald-700));
}
```

---

## Design Decisions

### Why single recommendation (not multiple scenarios)?
MVP simplicity. Merchant just wants to know "how much?" - not evaluate 3 options. Single strong recommendation with adjustment capability is clearer.

### Why include slider AND custom input?
Flexibility. Slider is intuitive for browsing ranges, custom input for precision. Some merchants know exactly what they want, others want guidance.

### Why 25% risk buffer?
Safety. Merchants shouldn't run out of balance. Better to start slightly high than run dry and create anxiety.

### Why round to nearest $500?
Cleaner numbers. $5,000 feels better than $4,847.32. Psychological preference for round numbers.
