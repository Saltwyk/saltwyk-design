# Fee Structure Display Component Specification

> Implementation guide extracted from `/merchant/components/fee-structure-display.html`

---

## Component Overview

### Purpose
Display Saltwyk's transaction fee structure in a clear, trust-building format. Shows standard pricing (3%) or promotional pricing (0% for 60 days) with calculation examples, terms, and relevant links.

### Used in
- **Onboarding Phase 4** - Pricing acceptance step
- **Settings > Plan** - Current plan display and management

### Dependencies
- Lucide icons (`external-link`, `clock`, `alert-triangle`, `info`, `check-circle`, `x-circle`)

---

## Visual Structure

### Layout

| Context | Description |
|---------|-------------|
| Onboarding | Full card with examples and links |
| Settings | Compact with "Your Current Plan" label |

### Main Sections
1. **Header** - Title + promo badge (if applicable)
2. **Feature Box** - Large rate display (3% or 0%)
3. **Secondary Info Box** - Standard rate preview (promo only)
4. **Promotional Terms** - Launch deadline, spots remaining (promo only)
5. **How It Works** - Calculation examples
6. **Fine Print** - "No hidden charges" reassurance
7. **Links** - Pricing page, terms

### Spacing

| Property | Value | Notes |
|----------|-------|-------|
| Card max-width | `600px` | — |
| Card padding | `32px` (desktop), `24px` (mobile) | — |
| Header margin-bottom | `24px` | — |
| Feature box padding | `32px 48px` (desktop), `24px` (mobile) | — |
| Feature box margin-bottom | `24px` | — |
| Section header margin-bottom | `12px` | — |
| Example list margin-bottom | `20px` | — |
| Links gap | `20px` | — |
| Links padding-top | `20px` | With 1px border-top |

---

## Design Tokens Used

### Colors

#### Card
| Element | Color |
|---------|-------|
| Background | white |
| Border | `warm-200` (1px) |
| Shadow | `0 1px 3px rgba(0,0,0,0.05)` |

#### Feature Box (Rate Display)
| State | Background | Border | Rate Color |
|-------|------------|--------|------------|
| Standard | `emerald-50` | `emerald-200` (1px) | `emerald-600` |
| Promotional | `emerald-50` | `emerald-300` (2px) | `emerald-500` |
| Error | `warm-100` | `warm-300` (1px) | `warm-400` |

#### Promo Badge
- Background: `emerald-500`
- Text: white
- Border-radius: `12px`

#### Secondary Info Box
- Background: `warm-50`
- Border: `warm-200` (1px)

#### Validation/Edge States
| Type | Background | Border | Icon Color | Text Color |
|------|------------|--------|------------|------------|
| Expiring Warning | `orange-50` | `orange-200` | `orange-500` | `orange-700` |
| Expired Info | `warm-50` | `warm-200` | `warm-500` | `warm-600` |

#### Days Remaining Badge
- Background: `emerald-50`
- Border: `emerald-200`
- Text: `emerald-700`

### Typography

| Element | Size | Weight | Color |
|---------|------|--------|-------|
| Title | `18px` | 600 | `ink` |
| Current plan label | `12px` | 600 | `warm-500`, uppercase |
| Rate display | `48px` (desktop), `40px` (mobile) | 700 | See states above |
| Rate label | `16px` | 400 | `warm-600` |
| Rate note | `14px` | 400 | `warm-500` |
| Deadline text | `14px` | 500 | `warm-700` |
| Section header | `14px` | 600 | `warm-900` |
| Example text | `14px` | 400 | `warm-700` |
| Fine print | `13px` | 400 | `warm-500` |
| Links | `14px` | 500 | `indigo-600` |
| Promo badge | `12px` | 600 | white |

### Fire Opal Specific
- Primary rate color: `emerald-600/500`
- Warning states: `orange-*` family
- Links: `indigo-600`
- Scarcity text: `orange-600`
- Highlight text: `emerald-600`

---

## Interactive States

### Default
- Static card display, no hover states on card itself
- Links have standard hover behavior

### Link Hover
- Color: `indigo-700`
- Text decoration: underline

### Edge States

#### Promo Expiring Soon (<7 days)
- Warning box appears above feature box
- Shows days remaining + standard rate start date

#### Promo Just Expired
- Info box appears above feature box
- Shows "promotional period ended on [date]"
- Feature box shows standard 3% rate

#### Error State
- Feature box shows "—" instead of rate
- Gray styling (`warm-100/300/400`)
- Shows "Pricing information unavailable"

---

## Props Interface

```typescript
type PricingContext = 'onboarding' | 'settings';

type StandardPricing = {
  type: 'standard';
  rate: number;           // 0.03 for 3%
  pricingPageUrl: string;
  tosUrl: string;
};

type PromotionalPricing = {
  type: 'promotional';
  promoRate: number;      // 0.00 for 0%
  promoDuration: number;  // 60 (days)
  launchDeadline: string; // '2026-02-15'
  standardRate: number;   // 0.03 for 3%
  spotsRemaining?: number;
  pricingPageUrl: string;
  promoTermsUrl: string;
};

// For settings context with active promo
type ActivePromoPricing = PromotionalPricing & {
  promoStartDate: string;    // When promo started
  promoEndDate: string;      // When promo ends
  daysRemaining: number;     // Computed days left
};

// For settings context when promo just expired
type ExpiredPromoPricing = {
  type: 'expired';
  expiredDate: string;
  standardRate: number;
  pricingPageUrl: string;
  tosUrl: string;
};

type ErrorPricing = {
  type: 'error';
  pricingPageUrl: string;
};

interface FeeStructureDisplayProps {
  pricing: StandardPricing | PromotionalPricing | ActivePromoPricing | ExpiredPromoPricing | ErrorPricing;
  context: PricingContext;
}

// Helper for formatting
interface CalculationExample {
  purchaseAmount: number;
  feeAmount: number;
  netAmount: number;
}

function calculateExamples(rate: number): CalculationExample[] {
  const amounts = [100, 500];
  return amounts.map(purchaseAmount => ({
    purchaseAmount,
    feeAmount: purchaseAmount * rate,
    netAmount: purchaseAmount * (1 - rate)
  }));
}
```

---

## Behavioral Requirements

### Onboarding Context
- Show full pricing card with all examples
- Include launch deadline for promotional pricing
- Show "spots remaining" scarcity indicator (if provided)
- Must accept pricing to continue onboarding

### Settings Context
- Show "Your Current Plan" label above title
- Compact display without all examples
- Show days remaining for active promotions
- Show expiration notice if promo ended recently
- Link to detailed pricing page

### Promotional Pricing Rules
- Must launch by deadline to qualify for promo
- Promo period starts from actual launch date (not signup)
- Standard rate begins automatically after promo ends
- Spots remaining should be real (not fake scarcity)

### Responsive Behavior
- **Mobile (<768px)**:
  - Card padding: `24px`
  - Feature box padding: `24px`
  - Rate size: `40px`
  - Links stack vertically with `12px` gap
  - Header stacks (title above badge)

---

## Implementation Notes

### Complexity Estimate
**Simple** - Mostly presentational with straightforward conditional logic

### Reusable Patterns from @repo/ui
- `Card` component for container
- `Badge` for promo badge and days remaining
- `Link` for external links
- Alert components for warnings

### Custom Logic Needed
- Rate percentage formatting (0.03 -> "3%")
- Days remaining calculation
- Example calculations
- Date formatting for deadlines

### Accessibility Considerations
- Use `role="region"` with `aria-labelledby` on card
- Rate display: `aria-label="3 percent per transaction"` or similar
- External links: Include `rel="noopener noreferrer"` and external-link icon
- Use semantic list markup for examples and terms
- Warning/info boxes use appropriate roles

---

## Design Spec Code Samples

### CSS - Card Container
```css
.fee-structure-card {
  background: white;
  border: 1px solid hsl(var(--warm-200));
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  max-width: 600px;
  position: relative;
}
```

### CSS - Feature Box
```css
.fee-feature-box {
  background: hsl(var(--emerald-50));
  border: 1px solid hsl(var(--emerald-200));
  border-radius: 8px;
  padding: 32px 48px;
  text-align: center;
  margin-bottom: 24px;
}

.fee-feature-box.promo {
  border: 2px solid hsl(var(--emerald-300));
}

.fee-feature-box.error {
  background: hsl(var(--warm-100));
  border: 1px solid hsl(var(--warm-300));
}
```

### CSS - Rate Display
```css
.fee-rate {
  font-size: 48px;
  font-weight: 700;
  color: hsl(var(--emerald-600));
  line-height: 1;
  letter-spacing: -0.02em;
}

.fee-rate.promo {
  color: hsl(var(--emerald-500));
}

.fee-rate.error {
  color: hsl(var(--warm-400));
  font-size: 24px;
}

.fee-rate-label {
  font-size: 16px;
  font-weight: 400;
  color: hsl(var(--warm-600));
  margin-top: 8px;
}
```

### CSS - Promo Badge
```css
.promo-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: hsl(var(--emerald-500));
  color: white;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.05em;
}
```

### CSS - Secondary Info Box
```css
.fee-secondary-box {
  background: hsl(var(--warm-50));
  border: 1px solid hsl(var(--warm-200));
  border-radius: 6px;
  padding: 16px;
  margin-bottom: 20px;
  font-size: 14px;
  color: hsl(var(--warm-700));
}
```

### CSS - Promotional Terms
```css
.promo-terms {
  list-style: disc;
  padding-left: 20px;
  margin-bottom: 20px;
}

.promo-terms li {
  font-size: 14px;
  color: hsl(var(--warm-700));
  line-height: 1.5;
  margin-bottom: 6px;
}

.promo-terms .highlight {
  color: hsl(var(--emerald-600));
  font-weight: 500;
}

.promo-terms .scarcity {
  color: hsl(var(--orange-600));
  font-weight: 500;
}
```

### CSS - Links
```css
.fee-links {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 24px;
  padding-top: 20px;
  border-top: 1px solid hsl(var(--warm-200));
}

.fee-link {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  font-weight: 500;
  color: hsl(var(--indigo-600));
  text-decoration: none;
}

.fee-link:hover {
  color: hsl(var(--indigo-700));
  text-decoration: underline;
}
```

### CSS - Edge State Warnings
```css
.promo-expiring-warning {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  background: hsl(var(--orange-50));
  border: 1px solid hsl(var(--orange-200));
  padding: 12px 16px;
  border-radius: 8px;
  margin-bottom: 20px;
}

.promo-expiring-warning svg {
  width: 16px;
  height: 16px;
  color: hsl(var(--orange-500));
  flex-shrink: 0;
  margin-top: 2px;
}

.promo-expiring-warning-text {
  font-size: 13px;
  color: hsl(var(--orange-700));
  line-height: 1.5;
}
```

### CSS - Days Remaining Badge
```css
.promo-days-remaining {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: hsl(var(--emerald-50));
  border: 1px solid hsl(var(--emerald-200));
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 500;
  color: hsl(var(--emerald-700));
  margin-top: 12px;
}
```

---

## Design Decisions

### Why center the rate?
Creates focal point, mirrors how merchants think ("what's the bottom line?"). The rate is the most important information.

### Why two examples?
Shows consistency across order sizes, helps merchants mentally calculate. $100 and $500 cover small and medium values.

### Why Emerald for the rate?
Emerald is the primary CTA color in Fire Opal. Green has positive association (money, growth). Differentiates from warning (orange) or error (magenta).

### Why show standard rate on promo display?
Prevents sticker shock when promo ends. Sets clear expectations from day one. Builds trust through transparency.

---

## Usage Guidelines

### Do
- Always show calculation examples
- Use round numbers ($100, $500)
- Include "No hidden charges" reassurance
- Show standard rate on promo display
- Display promo deadline clearly

### Don't
- Explicitly compare to credit cards
- Use jargon ("processing fee")
- Hide the standard rate on promo
- Use fake scarcity numbers
- Skip the math examples
