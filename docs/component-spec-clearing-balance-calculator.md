# Clearing Balance Calculator Component

**Component Type:** Interactive Calculator  
**Usage:** Onboarding Phase 5 (Clearing Balance Funding), Settings > Finance Tab  
**Status:** New Component - Design Spec  
**Last Updated:** 2025-01-20

---

## Purpose

Help merchants calculate the appropriate clearing balance funding amount based on their business size, category, and expected transaction volume. Provides confidence through data-driven recommendations while allowing merchant control over final amount.

**MVP Approach:** Single recommendation (not multiple scenarios) with simple adjustment capability.

**Critical:** Must be reusable component across onboarding AND Settings > Finance for ongoing planning.

---

## User Jobs This Serves

**From JTBD:**
- Phase 5: "Calculate Appropriate Amount" (High priority)
- Phase 5: "Validate Amount is Sufficient" (Medium priority)
- Settings: Manual funding planning (when adding more funds)

**Context:**
- Onboarding: First-time funding decision, no transaction history
- Settings: Top-up planning, has transaction history for better estimates

---

## Design Principles

1. **Single Clear Recommendation** - One amount, not multiple scenarios (MVP simplicity)
2. **Adjustable Confidence** - Merchant can modify if they know better
3. **Category-Informed** - Use merchant's business category for baseline
4. **Transparent Math** - Show how recommendation is calculated
5. **Coverage Clarity** - Explain what the amount will support
6. **Reusable Logic** - Same component in onboarding and Settings

---

## Component Anatomy

### Full Component (Onboarding Context)

```
┌─────────────────────────────────────────────────────────────┐
│ Calculate Your Clearing Balance                             │
│                                                              │
│ Based on your business profile and category, we recommend   │
│ starting with the amount below. You can adjust as needed.   │
│                                                              │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │                                                          │ │
│ │              Recommended Amount                          │ │
│ │                                                          │ │
│ │                    $5,000                                │ │
│ │                                                          │ │
│ │         [──────────●────────────]                        │ │
│ │         $500           $5,000           $10,000          │ │
│ │                                                          │ │
│ │  Or enter custom amount: $[_________]                    │ │
│ │                                                          │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                              │
│ What this amount covers:                                    │
│                                                              │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │                                                          │ │
│ │  Transaction Capacity                                    │ │
│ │  • 50-100 transactions (at $50-$100 average)             │ │
│ │  • Approximately 10-15 days at current volume            │ │
│ │                                                          │ │
│ │  Penetration Assumption                                  │ │
│ │  • 10% of your customers will use rewards commerce       │ │
│ │  • Based on Home & Garden category benchmark             │ │
│ │                                                          │ │
│ │  Risk Buffer                                             │ │
│ │  • Includes 25% buffer for variability                   │ │
│ │  • Reduces chance of running out                         │ │
│ │                                                          │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                              │
│ ⓘ You can add more funds anytime in Settings > Finance      │
│                                                              │
│ [Continue with $5,000]                                       │
└─────────────────────────────────────────────────────────────┘
```

### Settings Context (With Transaction History)

```
┌─────────────────────────────────────────────────────────────┐
│ Clearing Balance Planning Calculator                        │
│                                                              │
│ Based on your recent transaction history, we recommend:     │
│                                                              │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │                                                          │ │
│ │              Recommended Top-Up                          │ │
│ │                                                          │ │
│ │                    $3,500                                │ │
│ │                                                          │ │
│ │         [──────────●────────────]                        │ │
│ │         $500           $3,500           $10,000          │ │
│ │                                                          │ │
│ │  Or enter custom amount: $[_________]                    │ │
│ │                                                          │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                              │
│ Based on your actual usage:                                 │
│                                                              │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │                                                          │ │
│ │  Recent Activity (Last 30 Days)                          │ │
│ │  • Average daily usage: $238                             │ │
│ │  • Current runway: 8 days at this rate                   │ │
│ │  • With $3,500 top-up: 22 days runway                    │ │
│ │                                                          │ │
│ │  Transaction Pattern                                     │ │
│ │  • 12% of customers use rewards commerce                 │ │
│ │  • Average reward transaction: $87                       │ │
│ │  • Higher than category benchmark (good!)                │ │
│ │                                                          │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                              │
│ [Add $3,500 to Clearing Balance]                            │
└─────────────────────────────────────────────────────────────┘
```

---

## Visual Specifications

### Typography

**Section Header ("Calculate Your Clearing Balance"):**
- Font size: 24px (text-2xl)
- Font weight: 700 (font-bold)
- Color: Warm-900
- Margin bottom: 8px

**Description Text:**
- Font size: 16px (text-base)
- Font weight: 400 (font-normal)
- Color: Warm-600
- Line height: 1.5
- Margin bottom: 24px

**"Recommended Amount" Label:**
- Font size: 14px (text-sm)
- Font weight: 600 (font-semibold)
- Color: Warm-700
- Text align: center
- Margin bottom: 16px

**Amount Display:**
- Font size: 48px (text-5xl)
- Font weight: 700 (font-bold)
- Color: Emerald-600
- Text align: center
- Letter spacing: -0.02em

**Slider Labels (min/max):**
- Font size: 12px (text-xs)
- Font weight: 500 (font-medium)
- Color: Warm-500

**Custom Input Label:**
- Font size: 14px (text-sm)
- Font weight: 500 (font-medium)
- Color: Warm-700

**Coverage Section Headers ("Transaction Capacity"):**
- Font size: 14px (text-sm)
- Font weight: 600 (font-semibold)
- Color: Warm-900
- Margin bottom: 8px

**Coverage Bullets:**
- Font size: 14px (text-sm)
- Font weight: 400 (font-normal)
- Color: Warm-700
- Line height: 1.6
- 16px left indent

**Info Notice:**
- Font size: 13px (text-xs)
- Font weight: 400 (font-normal)
- Color: Warm-600
- Icon: ⓘ (16px, Warm-500)

### Colors

**Recommendation Box:**
- Background: Emerald-50
- Border: Emerald-200 (2px)
- Border radius: 12px (rounded-xl)
- Padding: 32px

**Amount Display:**
- Color: Emerald-600
- Focus: Emerald-700 (when slider active)

**Slider:**
- Track background: Warm-200
- Track filled (left of thumb): Emerald-400
- Thumb: Emerald-500
- Thumb hover: Emerald-600
- Thumb active: Emerald-700
- Thumb size: 24px × 24px circle
- Track height: 6px

**Custom Input:**
- Background: White
- Border: Warm-300 (1px)
- Focus border: Emerald-500 (2px)
- Text color: Warm-900
- Prefix "$" color: Warm-500
- Padding: 12px 16px 12px 32px

**Coverage Box:**
- Background: White
- Border: Warm-200 (1px)
- Border radius: 8px (rounded-lg)
- Padding: 24px
- Box shadow: sm

**Section Dividers:**
- Border: Warm-200 (1px)
- Margin: 16px vertical

**Info Notice:**
- Background: Indigo-50
- Border: Indigo-200 (1px)
- Border radius: 6px (rounded-md)
- Padding: 12px 16px
- Icon color: Indigo-500

### Spacing

**Component Container:**
- Padding: 32px (p-8)
- Max width: 600px
- Margin: auto (centered)

**Between Sections:**
- Recommendation to Coverage: 32px
- Coverage sections: 16px
- Info notice to button: 24px

**Inside Recommendation Box:**
- Label to amount: 16px
- Amount to slider: 24px
- Slider to custom input: 20px

**Inside Coverage Box:**
- Section header to bullets: 8px
- Between sections: 20px
- Bullet line spacing: 8px

---

## Component States

### State 1: Initial Load (Onboarding - No History)
**When:** First-time merchant, no transaction data

**Calculation Basis:**
- Merchant category (from Storeleads)
- Reported revenue (from Storeleads)
- Industry benchmark penetration rate
- Risk buffer (25%)

**Display:**
- Single recommended amount (e.g., $5,000)
- Slider default to recommended amount
- Coverage based on category benchmarks
- Generic transaction estimates

**Example Math:**
```
Monthly revenue: $50,000 (from Storeleads)
Category: Home & Garden
Benchmark penetration: 10%
Expected monthly rewards volume: $5,000
Risk buffer: 25%
Recommended clearing balance: $5,000 × 1.25 = $6,250 → round to $5,000
```

### State 2: Slider Adjusted
**When:** Merchant drags slider to different amount

**Behavior:**
- Amount display updates in real-time
- Coverage estimates recalculate instantly
- Transaction capacity updates: "60-120 transactions" for $6K
- Days coverage updates: "12-18 days at current volume"
- No debounce - immediate feedback

### State 3: Custom Input Changed
**When:** Merchant types custom amount

**Behavior:**
- Slider thumb moves to match input amount
- If amount > max slider value: slider stays at max
- If amount < min slider value: slider stays at min
- Coverage estimates recalculate
- Format validation (numbers only, max 2 decimals)

### State 4: Settings Context (With Transaction History)
**When:** Merchant using calculator in Settings > Finance

**Calculation Basis:**
- Actual transaction history (last 30 days)
- Actual penetration rate (observed)
- Current clearing balance
- Current burn rate

**Display:**
- Recommended top-up amount (not total balance)
- "Based on your actual usage" heading
- Real metrics: daily usage, runway days
- Comparison to category benchmark
- More accurate coverage estimates

**Example Math:**
```
Current clearing balance: $1,900
Average daily usage: $238
Current runway: 8 days
Target runway: 30 days
Recommended top-up: ($238 × 30) - $1,900 = $5,240 → round to $5,000
```

### State 5: Validation Warnings

**Amount Too Low (<$500):**
- Warning box appears below slider
- Orange border on recommendation box
- "⚠️ This amount may not support many transactions. Minimum $500 recommended."

**Amount Very High (>$50,000):**
- Info box appears
- "ⓘ Large clearing balance. Most merchants start with $5,000-$10,000. You can always add more later."

**No warning for reasonable range** ($500-$50,000)

---

## Calculation Logic

### Onboarding Algorithm (No History)

```typescript
interface MerchantProfile {
  monthlyRevenue: number; // from Storeleads
  category: string; // from Storeleads
}

interface CategoryBenchmark {
  penetrationRate: number; // e.g., 0.10 for 10%
  avgTransactionSize: number; // e.g., 75
}

const categoryBenchmarks: Record<string, CategoryBenchmark> = {
  'home-garden': { penetrationRate: 0.10, avgTransactionSize: 75 },
  'apparel': { penetrationRate: 0.15, avgTransactionSize: 60 },
  'beauty': { penetrationRate: 0.12, avgTransactionSize: 50 },
  'food-beverage': { penetrationRate: 0.08, avgTransactionSize: 40 },
  'default': { penetrationRate: 0.10, avgTransactionSize: 65 }
};

function calculateRecommendedBalance(profile: MerchantProfile): number {
  const benchmark = categoryBenchmarks[profile.category] || categoryBenchmarks['default'];
  
  // Expected monthly rewards commerce volume
  const monthlyRewardsVolume = profile.monthlyRevenue * benchmark.penetrationRate;
  
  // Add 25% risk buffer
  const baseRecommendation = monthlyRewardsVolume * 1.25;
  
  // Round to nearest $500 for cleaner numbers
  const rounded = Math.round(baseRecommendation / 500) * 500;
  
  // Enforce minimum $500, maximum $50,000 for initial funding
  return Math.max(500, Math.min(50000, rounded));
}

function calculateCoverage(amount: number, benchmark: CategoryBenchmark) {
  const estimatedTransactionCount = Math.floor(amount / benchmark.avgTransactionSize);
  
  // Transaction count range (±50%)
  const minTransactions = Math.floor(estimatedTransactionCount * 0.5);
  const maxTransactions = Math.ceil(estimatedTransactionCount * 1.5);
  
  // Days coverage (assuming monthly revenue spread evenly)
  // If amount is 25% of monthly volume, that's ~7-8 days
  const daysMin = Math.floor((amount / (benchmark.penetrationRate * 30000)) * 20);
  const daysMax = Math.ceil((amount / (benchmark.penetrationRate * 30000)) * 30);
  
  return {
    transactions: `${minTransactions}-${maxTransactions} transactions`,
    days: `${daysMin}-${daysMax} days at current volume`,
    avgTransaction: `$${benchmark.avgTransactionSize}-$${benchmark.avgTransactionSize * 2}`,
    penetration: `${Math.round(benchmark.penetrationRate * 100)}%`
  };
}
```

### Settings Algorithm (With History)

```typescript
interface TransactionHistory {
  dailyAverageUsage: number; // last 30 days
  actualPenetrationRate: number; // observed
  avgTransactionSize: number; // actual
  currentBalance: number;
}

function calculateTopUpRecommendation(history: TransactionHistory): number {
  const TARGET_RUNWAY_DAYS = 30;
  
  // How much do we need for 30 days?
  const targetBalance = history.dailyAverageUsage * TARGET_RUNWAY_DAYS;
  
  // How much should we add?
  const topUpAmount = targetBalance - history.currentBalance;
  
  // Round to nearest $500
  const rounded = Math.round(topUpAmount / 500) * 500;
  
  // Minimum $500 top-up if below target
  return Math.max(500, rounded);
}

function calculateRunway(currentBalance: number, dailyUsage: number): number {
  return Math.floor(currentBalance / dailyUsage);
}
```

---

## Data Requirements

### Onboarding Context

**Required Data:**
```typescript
{
  merchantCategory: string; // from Storeleads
  monthlyRevenue: number; // from Storeleads
  categoryBenchmarks: CategoryBenchmark; // from backend config
}
```

**Source:**
- Storeleads integration (pre-populated)
- Category benchmarks (backend configuration, periodically updated)

### Settings Context

**Required Data:**
```typescript
{
  currentClearingBalance: number; // from Settlement Account
  transactionHistory: {
    last30Days: {
      totalVolume: number;
      transactionCount: number;
      avgTransactionSize: number;
      dailyAverageUsage: number;
    }
  };
  merchantCategory: string;
  categoryBenchmark: CategoryBenchmark;
}
```

**Source:**
- Live Settlement Account balance
- Transaction history from database
- Category from merchant profile

---

## Interaction Patterns

### Slider

**Drag Behavior:**
- Smooth continuous update
- No snapping (free movement)
- Amount display updates in real-time
- Coverage estimates recalculate instantly

**Keyboard:**
- Tab: Focus slider
- Arrow Left/Right: Adjust by $100
- Page Up/Down: Adjust by $1,000
- Home: Jump to minimum ($500)
- End: Jump to maximum ($10,000 or $50,000)

**Touch:**
- Thumb large enough for easy touch (24px min)
- Haptic feedback on value change (iOS/Android)

### Custom Input

**Focus:**
- Border changes to Emerald-500
- Show $ prefix
- Select all existing text

**Typing:**
- Numbers only (0-9)
- Decimal point allowed (max 2 places)
- Comma separator added automatically (e.g., "5,000")
- Invalid characters ignored

**Validation:**
- On blur: Validate range
- Too low (<$500): Warning appears
- Too high (>$50,000): Info appears
- Non-numeric: Clear field, show error

**Sync with Slider:**
- Input change updates slider position
- Slider change updates input value
- Two-way binding

### Coverage Estimates

**Real-Time Update:**
- Debounced by 200ms (to avoid excessive recalc)
- Smooth transition (fade old values out, new values in)
- Numbers animate slightly (optional enhancement)

**No Interaction:**
- Coverage box is informational only
- No clickable elements
- Values update automatically

---

## Responsive Behavior

### Desktop (≥768px)
- Full width calculator up to 600px max
- Slider comfortable length (400px+)
- Side-by-side layout for info sections (if space)
- All text readable at default sizes

### Tablet (≥640px, <768px)
- Slightly narrower max width (500px)
- Slider maintains usability
- Stacked layout for coverage sections

### Mobile (<640px)
- Full width with padding
- Amount display: 40px font size (scaled down)
- Slider: full width minus padding
- Stacked coverage sections
- Custom input: full width
- Thumb size: 32px for easier touch
- Reduce padding: 16px

---

## Accessibility

### ARIA Labels

```html
<div role="region" aria-labelledby="calculator-title">
  <h2 id="calculator-title">Calculate Your Clearing Balance</h2>
  
  <div role="group" aria-labelledby="recommended-amount">
    <div id="recommended-amount" class="sr-only">Recommended clearing balance amount</div>
    
    <label for="balance-slider" class="sr-only">
      Clearing balance amount slider, minimum $500, maximum $10,000
    </label>
    <input 
      type="range" 
      id="balance-slider"
      min="500" 
      max="10000" 
      step="100"
      value="5000"
      aria-valuemin="500"
      aria-valuemax="10000"
      aria-valuenow="5000"
      aria-valuetext="$5,000"
    />
    
    <label for="custom-amount">Or enter custom amount</label>
    <input 
      type="text" 
      id="custom-amount"
      inputmode="numeric"
      aria-describedby="amount-format-hint"
    />
    <span id="amount-format-hint" class="sr-only">
      Enter amount in dollars, minimum $500
    </span>
  </div>
  
  <div role="region" aria-labelledby="coverage-info">
    <h3 id="coverage-info">What this amount covers</h3>
    <!-- coverage content -->
  </div>
</div>
```

### Screen Reader Announcements

**Slider Movement:**
- Announce value on change: "$5,500. Covers 55 to 110 transactions."
- Debounce announcements (300ms) to avoid spam

**Custom Input:**
- Announce validation: "Amount updated to $6,000. Warning: This is higher than recommended."

**Coverage Updates:**
- Live region for coverage changes
- Announce when significant change (>20%): "Coverage updated: 60 to 120 transactions, 12 to 18 days"

### Keyboard Navigation

**Tab Order:**
1. Slider
2. Custom input field
3. Continue button

**Slider Keyboard:**
- Arrow keys: ±$100
- Page Up/Down: ±$1,000
- Home/End: Min/Max

**Input Keyboard:**
- Tab: Next element
- Enter: Accept value and move to button

### Color Contrast

- Amount display (Emerald-600 on Emerald-50): ≥4.5:1
- Slider thumb (Emerald-500): Focus ring (Emerald-700, 2px)
- Custom input: Border contrast ≥3:1
- Warning text (Orange-700): ≥4.5:1
- All body text: ≥4.5:1 contrast

---

## Edge Cases

### Case 1: Storeleads Data Unavailable
**When:** Merchant category or revenue not available

**Fallback:**
- Use "default" category benchmark
- Assume $50,000 monthly revenue
- Recommend $5,000 (safe middle ground)
- Show generic coverage: "50-100 transactions"

### Case 2: Invalid Input
**When:** User enters non-numeric or out-of-range value

**Behavior:**
- Show inline error: "Please enter amount between $500 and $50,000"
- Clear invalid input on blur
- Reset to last valid amount
- Warning styling on input field

### Case 3: Zero Transaction History (Settings)
**When:** Merchant has no transactions yet in Settings context

**Fallback:**
- Use category benchmark approach (same as onboarding)
- Show message: "Based on category estimates (no transaction history yet)"
- Maintain onboarding-style coverage display

### Case 4: Extremely High or Low Revenue
**When:** Revenue outliers (< $10K/mo or > $5M/mo)

**Guardrails:**
- Minimum recommendation: $500
- Maximum recommendation: $50,000 (for initial funding)
- Note: "Contact support for custom high-volume plans"

### Case 5: Slider at Max, Custom Input Higher
**When:** Merchant types $75,000 but slider max is $50,000

**Behavior:**
- Slider stays at max position
- Custom input accepts the value
- Coverage calculates for $75,000
- Info message: "Large amount. Consider starting smaller and adding more as needed."

---

## Component Props (Implementation)

```typescript
interface ClearingBalanceCalculatorProps {
  context: 'onboarding' | 'settings';
  
  // Onboarding props
  merchantProfile?: {
    category: string;
    monthlyRevenue: number;
  };
  
  // Settings props
  transactionHistory?: {
    dailyAverageUsage: number;
    currentBalance: number;
    last30Days: {
      totalVolume: number;
      transactionCount: number;
      avgTransactionSize: number;
    };
  };
  
  // Optional overrides
  minAmount?: number; // default 500
  maxAmount?: number; // default 10000 (onboarding) or 50000 (settings)
  defaultAmount?: number; // override calculation
  
  // Callbacks
  onAmountChange?: (amount: number) => void;
  onContinue?: (selectedAmount: number) => void;
  
  // UI customization
  className?: string;
  showContinueButton?: boolean; // default true
  buttonText?: string; // default "Continue with $X,XXX"
}
```

---

## Usage Contexts

### Onboarding Phase 5
**Placement:** After clearing balance explanation, before ACH initiation
**Required Action:** Select amount (blocker)
**Next Step:** Initiate ACH transfer with selected amount

**UI Flow:**
1. Money Flow Diagram (explains clearing balance)
2. Clearing Balance Calculator (this component)
3. ACH transfer confirmation
4. Proceed to Auto-Fund setup

### Settings > Finance Tab
**Placement:** Manual funding section or dedicated calculator panel
**Optional Action:** Planning tool, not required
**Next Step:** Initiate manual funding with calculated amount

**UI Flow:**
1. Current clearing balance display
2. [Open Calculator] button
3. Clearing Balance Calculator (modal or inline)
4. [Add Funds] initiates manual funding flow

---

## Related Components

**Used With:**
- Dollar Input (custom amount field)
- Slider/Range Input (amount selector)
- Info Box (coverage information)
- Warning Box (validation warnings)
- Button Primary (continue/add funds CTA)

**Leads To:**
- ACH Transfer Initiation (onboarding)
- Manual Funding Flow (Settings)

**Appears After:**
- Money Flow Diagram (onboarding Phase 5)

---

## Design Decisions & Rationale

### Why Single Recommendation (Not Multiple Scenarios)?
**MVP simplicity** - Merchant just wants to know "how much?" not evaluate 3 options. Single strong recommendation with adjustment capability is clearer.

### Why Include Slider AND Custom Input?
**Flexibility** - Slider is intuitive for browsing, custom input for precision. Some merchants know exactly what they want, others want guidance.

### Why Show Coverage in Ranges?
**Honesty** - We can't predict exactly, ranges set realistic expectations. "50-100 transactions" acknowledges variability.

### Why 25% Risk Buffer?
**Safety** - Merchants shouldn't run out of balance. Better to start slightly high than run dry and create anxiety.

### Why Different Logic for Onboarding vs. Settings?
**Data availability** - Onboarding has no history (use benchmarks), Settings has actual data (more accurate). Reusing component with different data sources.

### Why Round to Nearest $500?
**Cleaner numbers** - $5,000 feels better than $4,847.32. Psychological preference for round numbers.

### Why Max $50K for Initial Funding?
**Reasonable ceiling** - Very few merchants need more initially. Can always add more. Prevents accidental huge transfers.

---

## Open Questions for Founder

1. **Category benchmarks:** Do we have industry data, or should we start with estimates? How often update?
2. **Risk buffer:** Is 25% the right buffer, or should it vary by category? (High-value categories = higher buffer?)
3. **Target runway (Settings):** Is 30 days the right target for top-up recommendations?
4. **Minimum amount:** Enforce $500 hard minimum, or allow lower with strong warning?
5. **Settings placement:** Dedicated calculator panel, or inside manual funding flow?
6. **Real-time updates:** Should coverage estimates update instantly or with slight debounce (200ms)?

---

## Success Metrics

**Onboarding:**
- Calculator usage: % of merchants who adjust recommendation
- Average adjustment: How much do merchants change from recommendation?
- Sufficient funding: % who don't run out in first 30 days (target: >95%)
- Completion rate: % who proceed after seeing calculator (target: >98%)

**Settings:**
- Calculator usage: How often do merchants use planning tool?
- Top-up accuracy: Do merchants follow recommendation?
- Runway improvement: Does calculator help maintain target runway?

**Validation:**
- Warning trigger rate: % who see "too low" or "too high" warnings
- Override rate: % who proceed despite warnings

---

## Next Steps

1. **Finalize category benchmarks:** Gather or estimate data for top 10 categories
2. **Review calculation logic:** Validate math with founder, adjust buffer if needed
3. **Build calculator component:** Implement with real-time updates and validation
4. **Create mockups:** High-fidelity designs for both onboarding and Settings contexts
5. **User testing:** Validate merchants understand coverage estimates

---

**This component is ready for implementation once category benchmarks and calculation parameters are confirmed.**
