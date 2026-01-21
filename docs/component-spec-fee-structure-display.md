# Fee Structure Display Component

**Component Type:** Informational Card  
**Usage:** Onboarding Phase 4 (Pricing), Settings > Plan Section  
**Status:** New Component - Design Spec  
**Last Updated:** 2025-01-20

---

## Purpose

Display Saltwyk's transaction fee structure in a clear, trust-building format that helps merchants understand costs without creating anxiety. Used both during onboarding (pricing acceptance) and in Settings for ongoing reference.

---

## User Jobs This Serves

**From JTBD:**
- Phase 4: "Understand Fee Structure" (High priority)
- Phase 4: "Know Where to Find Pricing Later" (Low priority)

**Context:**
- Onboarding: Merchant is evaluating whether to proceed with Saltwyk
- Settings: Merchant wants to verify their current rate or review terms

---

## Design Principles

1. **Transparency First** - No hidden fees, all costs visible upfront
2. **Trust Building** - Professional presentation reinforces legitimacy
3. **Context Over Comparison** - Implicit value (vs. credit cards) without explicit comparison
4. **Simple Math** - Clear examples that anyone can verify
5. **Reference Ready** - Easy to find later in Settings > Plan

---

## Component Anatomy

### Standard Rate Display

```
┌─────────────────────────────────────────────────────────┐
│ Transaction Fee                                          │
│                                                          │
│ ┌─────────────────────────────────────────────────────┐ │
│ │                                                      │ │
│ │                        3%                            │ │
│ │                 per transaction                      │ │
│ │                                                      │ │
│ │   Calculated on the total purchase amount           │ │
│ │                                                      │ │
│ └─────────────────────────────────────────────────────┘ │
│                                                          │
│ How it works                                            │
│                                                          │
│ • Shopper buys $100 worth of products                   │
│ • Fee: $3.00 (3% of $100)                               │
│ • You receive: $97.00 via settlement                    │
│                                                          │
│ • Shopper buys $500 worth of products                   │
│ • Fee: $15.00 (3% of $500)                              │
│ • You receive: $485.00 via settlement                   │
│                                                          │
│ All fees are automatically deducted during settlement.  │
│ No hidden charges or monthly fees.                      │
│                                                          │
│ [View Detailed Pricing Page →]                          │
│ [Read Terms of Service →]                               │
└─────────────────────────────────────────────────────────┘
```

### Promotional Rate Display (When Applicable)

```
┌─────────────────────────────────────────────────────────┐
│ Your Promotional Pricing                     🎉 PROMO   │
│                                                          │
│ ┌─────────────────────────────────────────────────────┐ │
│ │                                                      │ │
│ │                        0%                            │ │
│ │              for the next 60 days                    │ │
│ │                                                      │ │
│ │     Launch by February 15, 2026 to qualify           │ │
│ │                                                      │ │
│ └─────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌─────────────────────────────────────────────────────┐ │
│ │ After promotional period: 3% per transaction        │ │
│ └─────────────────────────────────────────────────────┘ │
│                                                          │
│ Promotional terms:                                      │
│                                                          │
│ • Zero transaction fees for 60 days from launch         │
│ • Must launch by February 15, 2026                      │
│ • Standard 3% rate begins March 15, 2026                │
│ • 12 spots remaining in this cohort                     │
│                                                          │
│ How it works                                            │
│                                                          │
│ • Shopper buys $100 → Fee: $0.00 → You receive: $100   │
│ • After promo: $100 → Fee: $3.00 → You receive: $97    │
│                                                          │
│ [View Detailed Pricing Page →]                          │
│ [Read Promotional Terms →]                              │
└─────────────────────────────────────────────────────────┘
```

---

## Visual Specifications

### Typography

**Rate Display (Center Feature Box):**
- Font size: 48px (text-5xl)
- Font weight: 700 (font-bold)
- Color: Emerald-600 (standard) or Emerald-500 (promo 0%)
- Line height: 1
- Letter spacing: -0.02em

**"per transaction" / "for the next 60 days":**
- Font size: 16px (text-base)
- Font weight: 400 (font-normal)
- Color: Warm-600
- Margin top: 8px

**Calculated on / Launch by:**
- Font size: 14px (text-sm)
- Font weight: 400 (font-normal)
- Color: Warm-500
- Margin top: 12px

**Section Headers ("How it works", "Promotional terms"):**
- Font size: 14px (text-sm)
- Font weight: 600 (font-semibold)
- Color: Warm-900
- Margin bottom: 12px

**Example Calculations:**
- Font size: 14px (text-sm)
- Font weight: 400 (font-normal)
- Color: Warm-700
- Line height: 1.6
- Bullet points with 16px left indent

**Fine Print:**
- Font size: 13px (text-xs)
- Font weight: 400 (font-normal)
- Color: Warm-500
- Line height: 1.5

**Links:**
- Font size: 14px (text-sm)
- Font weight: 500 (font-medium)
- Color: Indigo-600
- Hover: Indigo-700, underline

### Colors

**Standard Rate:**
- Feature box background: Emerald-50
- Feature box border: Emerald-200 (1px)
- Rate number: Emerald-600
- Card background: White
- Card border: Warm-200

**Promotional Rate:**
- Feature box background: Emerald-50
- Feature box border: Emerald-300 (2px - slightly bolder)
- Rate number: Emerald-500
- Promo badge background: Emerald-500
- Promo badge text: White
- Secondary info box background: Warm-50
- Secondary info box border: Warm-200

### Spacing

**Card:**
- Padding: 32px (p-8)
- Border radius: 12px (rounded-xl)
- Box shadow: sm (subtle elevation)

**Feature Box (rate display):**
- Padding: 32px vertical, 48px horizontal
- Border radius: 8px (rounded-lg)
- Margin bottom: 24px
- Text align: center

**Secondary Info Box (after promo):**
- Padding: 16px (p-4)
- Border radius: 6px (rounded-md)
- Margin bottom: 20px

**Example List:**
- Gap between items: 8px
- Bullet indent: 16px
- Margin bottom: 20px

**Link Row:**
- Margin top: 24px
- Gap between links: 20px
- Links as inline-flex items

### Promotional Badge

**"PROMO" badge (top right):**
- Background: Emerald-500
- Color: White
- Padding: 4px 12px
- Border radius: 12px (rounded-full)
- Font size: 12px (text-xs)
- Font weight: 600 (font-semibold)
- Letter spacing: 0.05em (tracking-wide)
- Icon: 🎉 emoji (16px, left of text)

---

## Component States

### State 1: Standard Rate (No Promotion)
**When to show:**
- Merchant is not eligible for promotional pricing
- Promotional period has ended
- Viewing in Settings > Plan after promo expires

**Content:**
- 3% rate prominently displayed
- Two calculation examples ($100, $500)
- "No hidden charges or monthly fees" reassurance
- Links to pricing page and ToS

### State 2: Promotional Rate (Active Promo)
**When to show:**
- Merchant is eligible for 0% for 60 days offer
- Viewing during onboarding with active promotion
- Viewing in Settings > Plan while promo is active

**Content:**
- 0% prominently displayed with duration
- Launch deadline clearly stated
- Standard rate shown in secondary box
- Promotional terms bulleted
- Scarcity indicator (spots remaining) - optional
- Calculation example showing before/after
- Links to pricing page and promotional terms

### State 3: Settings Display (Post-Onboarding)
**When to show:**
- Merchant is viewing Settings > Plan section
- Already accepted pricing, just referencing

**Modifications:**
- Same visual structure as onboarding
- No acceptance actions required (already accepted)
- May show "Your current plan" header
- If promo active: show days remaining
- If promo expired: show only standard rate

---

## Interaction Patterns

### Links

**"View Detailed Pricing Page":**
- Opens: External link to https://saltwyk.com/pricing (or similar)
- Opens in: New tab
- Purpose: Full pricing details, volume discounts, enterprise plans

**"Read Terms of Service":**
- Opens: Terms of Service page
- Opens in: Modal overlay OR new tab (TBD)
- Purpose: Legal terms, acceptance conditions

**"Read Promotional Terms":**
- Opens: Promotional offer details
- Opens in: Modal overlay
- Purpose: Promo eligibility, expiration, conditions

### Responsive Behavior

**Desktop (≥768px):**
- Full width up to 600px
- Feature box with generous padding
- Two-column link layout (if space permits)

**Mobile (<768px):**
- Full width
- Reduced padding (24px card, 24px feature box)
- Rate font size: 40px (scaled down)
- Stacked links (vertical layout)
- Examples remain bulleted (easier to scan)

---

## Content Guidelines

### Voice & Tone
- **Transparent:** State fees clearly, no euphemisms
- **Reassuring:** "No hidden charges" builds trust
- **Simple:** Math anyone can verify
- **Professional:** Not salesy, just factual

### Copy Patterns

**Rate Description:**
- Always: "per transaction"
- Never: "per sale" or "processing fee"

**Examples:**
- Always use round numbers: $100, $500
- Always show math: "$100 → $3 fee → $97 received"
- Always show 2 examples (different scales)

**Reassurance Line:**
- Always include: "All fees are automatically deducted during settlement."
- Always include: "No hidden charges or monthly fees."

**Promotional Language:**
- Urgency without pressure: "Launch by [date] to qualify"
- Scarcity (if true): "X spots remaining in this cohort"
- Clear transition: "After promotional period: 3% per transaction"

### Localization Notes
- Currency symbol ($) should be localized if international expansion
- Percentage (%) is universal
- Date format should follow locale (US: MM/DD/YYYY)

---

## Accessibility

### ARIA Labels
```html
<div role="region" aria-labelledby="fee-structure-title">
  <h2 id="fee-structure-title">Transaction Fee</h2>
  <!-- content -->
</div>
```

### Screen Reader Considerations
- Rate announced as "3 percent per transaction"
- Examples read as bullet list
- Links have descriptive text (not "click here")
- Promotional badge announced before rate

### Keyboard Navigation
- All links keyboard accessible
- Logical tab order: rate → examples → links
- Focus indicators on interactive elements

### Color Contrast
- Rate text (Emerald-600) on Emerald-50: ≥4.5:1 contrast ratio
- Body text (Warm-700) on White: ≥4.5:1
- Links (Indigo-600) on White: ≥4.5:1
- Promotional badge (White on Emerald-500): ≥4.5:1

---

## Technical Implementation Notes

### Data Requirements
**Standard Rate:**
```typescript
{
  type: 'standard',
  rate: 0.03, // 3%
  currency: 'USD',
  pricingPageUrl: 'https://saltwyk.com/pricing',
  tosUrl: 'https://saltwyk.com/terms'
}
```

**Promotional Rate:**
```typescript
{
  type: 'promotional',
  promoRate: 0.00, // 0%
  promoDuration: 60, // days
  launchDeadline: '2026-02-15',
  standardRate: 0.03, // 3% after promo
  spotsRemaining: 12, // optional
  currency: 'USD',
  pricingPageUrl: 'https://saltwyk.com/pricing',
  promoTermsUrl: 'https://saltwyk.com/promo-terms',
  tosUrl: 'https://saltwyk.com/terms'
}
```

### Example Calculation Logic
```typescript
function calculateFeeExample(amount: number, rate: number) {
  const fee = amount * rate;
  const received = amount - fee;
  return {
    amount: formatCurrency(amount),
    fee: formatCurrency(fee),
    received: formatCurrency(received)
  };
}

// Examples
const example1 = calculateFeeExample(100, 0.03);
const example2 = calculateFeeExample(500, 0.03);
```

### Component Props (Example)
```typescript
interface FeeStructureDisplayProps {
  pricing: StandardPricing | PromotionalPricing;
  context: 'onboarding' | 'settings';
  className?: string;
}
```

---

## Usage Contexts

### Onboarding Phase 4
**Placement:** After banking information, before clearing balance
**Purpose:** Fee acceptance and transparency
**Paired with:** 
- Checkbox: "I understand and accept the pricing terms"
- Primary button: "Continue to Clearing Balance Setup"

### Settings > Plan Section
**Placement:** Top of Plan tab
**Purpose:** Current pricing reference
**Paired with:**
- Current plan name (e.g., "Standard Plan")
- Account status (Active, Trial, etc.)
- Upgrade options (if applicable)

---

## Edge Cases

### Case 1: Promotional Period About to Expire
**Scenario:** Merchant viewing Settings > Plan with 5 days left on promo

**Display:**
- Show promo rate with urgency indicator
- "5 days remaining at 0% rate"
- "Standard rate (3%) begins on [date]"
- Highlight upcoming transition

### Case 2: Promotional Period Just Expired
**Scenario:** Merchant viewing Settings > Plan on day promo ended

**Display:**
- Show standard rate (3%)
- Info box: "Your promotional period ended on [date]"
- No promo badge
- Standard examples only

### Case 3: No Pricing Data Available
**Scenario:** API fails or pricing not loaded

**Fallback Display:**
- Gray box instead of rate
- "Pricing information unavailable"
- Link: "View pricing page" (external)
- Error logged for ops team

---

## Related Components

**Used With:**
- Checkbox (ToS acceptance during onboarding)
- Info Box (additional pricing notes)
- Warning Box (if payment issues)
- Button Primary (acceptance CTA)
- External Link Icon (for pricing page links)

**Inspired By:**
- Statement Card (Settings > Finance) - card structure
- Cross-link Card (Settings) - link pattern

---

## Design Decisions & Rationale

### Why Center the Rate?
Creates focal point, mirrors how merchants think ("what's the bottom line?")

### Why Two Examples?
Shows consistency across order sizes, helps merchants mentally calculate

### Why "No Hidden Charges"?
Addresses common merchant anxiety about payment processing (looking at you, credit card processors)

### Why Link to External Pricing Page?
- Onboarding shouldn't be overwhelmed with all plan details
- External page can show volume discounts, enterprise plans
- Easier to update pricing marketing without code changes

### Why Show Standard Rate on Promo Display?
Prevents sticker shock when promo ends, sets clear expectations

### Why Emerald for Rate?
- Emerald = primary CTA color in Fire Opal (merchant) design system
- Positive association (green = go, money, growth)
- Differentiates from warning (orange) or error (magenta)

---

## Open Questions for Founder

1. **Promotional scarcity:** Real-time spots remaining, or static display? (Affects backend)
2. **Pricing page URL:** Final URL for external pricing page link?
3. **ToS display:** Modal overlay or new tab for Terms of Service?
5. **Enterprise pricing:** Include note about custom pricing for high-volume merchants?

---

## Success Metrics

**Onboarding Context:**
- ToS acceptance rate: >95% (high transparency should = high acceptance)
- Time on pricing page: <30 seconds (clear enough to not require study)
- Link clicks: <20% (most merchants understand without external links)

**Settings Context:**
- Reference frequency: Track how often merchants revisit Plan section
- Support tickets: Measure pricing-related questions (should be low)

---

## Next Steps

1. **Review with founder:** Confirm copy, promotional terms, external links
2. **Design mockup:** Create high-fidelity designs in Figma (or similar)
3. **Build component:** Implement in component library
4. **Test:** User testing with merchants to validate clarity
5. **Document:** Add to design system documentation

---

**This component is ready for design mockup and implementation once founder decisions are confirmed.**
