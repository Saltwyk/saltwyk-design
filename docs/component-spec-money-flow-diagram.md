# Money Flow Diagram Component

**Component Type:** Static Illustration (Educational)  
**Usage:** Onboarding Phase 3 (Banking), Phase 5 (Clearing Balance)  
**Status:** New Component - Design Spec  
**Last Updated:** 2025-01-20

---

## Purpose

Visually explain how money flows through Saltwyk's system - from merchant funding to shopper purchases to settlements. Demystifies the clearing balance concept and dual-purpose bank account, building merchant confidence through transparency.

**Approach:** Simple, static SVG illustration (not animated/interactive for MVP).

---

## User Jobs This Serves

**From JTBD:**
- Phase 3: "Understand Dual Purpose" - bank account serves funding + settlements
- Phase 5: "Understand Clearing Balance Concept" - what it is, why needed, how it works
- Phase 5: Cross-phase "Trust the System" - reassurance about safety

**Context:**
- Phase 3: Explaining why we need bank account info
- Phase 5: Explaining clearing balance before asking for initial funding

---

## Design Principles

1. **Simplicity First** - Clear visual flow, minimal text
2. **Directional Clarity** - Arrows show money movement
3. **Platform Consistency** - Matches Fire Opal (merchant) design system
4. **Trust Building** - Shows Stripe involvement, FDIC protection
5. **Reusable** - Works in onboarding, Settings, help docs

---

## Diagram Variants

### Variant A: Dual-Purpose Bank Account (Phase 3)

**Focus:** Shows single bank account serving two purposes

```
┌─────────────────────────────────────────────────────────────┐
│                                                              │
│                    Your Bank Account                         │
│                  ┌────────────────────┐                      │
│                  │                    │                      │
│                  │  Bank of America   │                      │
│                  │    (•••• 4567)     │                      │
│                  │                    │                      │
│                  └────────────────────┘                      │
│                           │                                  │
│                           │                                  │
│              ┌────────────┴────────────┐                     │
│              │                         │                     │
│              ▼                         ▼                     │
│    ┌─────────────────┐       ┌─────────────────┐            │
│    │   Funding →     │       │  ← Settlements  │            │
│    │                 │       │                 │            │
│    │ Add money to    │       │ Receive money   │            │
│    │ clearing        │       │ from completed  │            │
│    │ balance         │       │ transactions    │            │
│    └─────────────────┘       └─────────────────┘            │
│              │                         ▲                     │
│              │                         │                     │
│              ▼                         │                     │
│    ┌───────────────────────────────────────────┐            │
│    │                                            │            │
│    │      Your Clearing Balance Account        │            │
│    │         (Stripe Connected Account)        │            │
│    │              FDIC Insured                  │            │
│    │                                            │            │
│    └───────────────────────────────────────────┘            │
│                                                              │
└─────────────────────────────────────────────────────────────┘

One account. Two purposes. Complete transparency.
```

**Visual Elements:**
- Bank account: Icon (bank building), name, last 4 digits
- Arrows: Bi-directional (down for funding, up for settlements)
- Clearing balance: Stripe logo, "FDIC Insured" badge
- Colors: Emerald for funding arrow, Indigo for settlement arrow

---

### Variant B: Full Transaction Flow (Phase 5)

**Focus:** Shows complete lifecycle from funding through settlement

```
┌─────────────────────────────────────────────────────────────┐
│                                                              │
│  ①  You Fund               ②  Shopper Buys                  │
│      Clearing Balance          Using Points                 │
│                                                              │
│      Your Bank                 Shopper's                     │
│  ┌────────────┐            ┌────────────┐                   │
│  │            │            │            │                   │
│  │  $5,000    │            │  100,000   │                   │
│  │            │            │   points   │                   │
│  └────────────┘            └────────────┘                   │
│         │                         │                         │
│         │ ACH Transfer            │ Points redeemed         │
│         │ (1-2 days)              │ at your store           │
│         ▼                         ▼                         │
│  ┌─────────────────────────────────────┐                    │
│  │                                     │                    │
│  │    Your Clearing Balance            │                    │
│  │    $5,000 → $4,900                  │  ③  Settlement     │
│  │                                     │                    │
│  │    Saltwyk uses $100 to clear       │      Daily         │
│  │    transaction with other           │      Payout        │
│  │    merchant's clearing balance      │                    │
│  │                                     │         │          │
│  └─────────────────────────────────────┘         │          │
│                                                  ▼          │
│                                          Your Bank          │
│                                      ┌────────────┐         │
│                                      │            │         │
│                                      │  $4,900    │         │
│                                      │            │         │
│                                      └────────────┘         │
│                                                              │
│                                                              │
│  You fund it → Shoppers use it → You get settled            │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

**Visual Elements:**
- Step numbers: Circled ①②③
- Money amounts: Dollar signs, point values
- Flow arrows: Show direction and timing
- Clearing balance: Center element showing balance change
- Tagline: Simple summary at bottom

---

## Visual Specifications

### Typography

**Step Numbers (①②③):**
- Font size: 14px
- Font weight: 700 (font-bold)
- Color: Emerald-600
- Circle background: Emerald-100
- Circle size: 24px diameter

**Step Titles ("You Fund Clearing Balance"):**
- Font size: 14px (text-sm)
- Font weight: 600 (font-semibold)
- Color: Warm-900
- Margin bottom: 8px

**Account Labels ("Your Bank", "Shopper's Points"):**
- Font size: 12px (text-xs)
- Font weight: 500 (font-medium)
- Color: Warm-600
- Margin bottom: 4px

**Amount Values ("$5,000", "100,000 points"):**
- Font size: 18px (text-lg)
- Font weight: 700 (font-bold)
- Color: Warm-900

**Descriptive Text ("ACH Transfer (1-2 days)"):**
- Font size: 12px (text-xs)
- Font weight: 400 (font-normal)
- Color: Warm-600
- Italics: optional for timing

**Tagline ("One account. Two purposes."):**
- Font size: 14px (text-sm)
- Font weight: 500 (font-medium)
- Color: Warm-700
- Text align: center
- Margin top: 20px

### Colors

**Funding Flow:**
- Arrow: Emerald-500
- Arrow head: Emerald-600
- Highlight text: Emerald-700

**Settlement Flow:**
- Arrow: Indigo-500
- Arrow head: Indigo-600
- Highlight text: Indigo-700

**Transaction Flow:**
- Arrow: Warm-400 (neutral for internal movements)
- Step circles: Emerald-100 background, Emerald-600 text

**Boxes/Cards:**
- Background: White
- Border: Warm-200 (1px)
- Border radius: 8px (rounded-lg)
- Box shadow: sm (subtle)

**Special Badges:**
- "FDIC Insured": Emerald-600 text, Emerald-100 background
- "Stripe Connected Account": Indigo-600 text, Indigo-50 background

### Spacing

**Diagram Container:**
- Padding: 32px (p-8)
- Background: Warm-50
- Border radius: 12px (rounded-xl)
- Max width: 600px

**Between Elements:**
- Vertical spacing: 24px between steps
- Horizontal spacing: 32px between columns (if side-by-side)
- Arrow length: 40-60px

**Box Padding:**
- Bank account box: 20px
- Clearing balance box: 24px
- Step container: 16px

### Arrows

**Style:**
- Stroke width: 2px
- Stroke: Solid line
- Arrow head: Triangle (filled)
- Arrow head size: 8px × 6px
- Curve: Optional slight curve for visual interest

**Labels:**
- Positioned along arrow shaft
- Font size: 12px
- Color: matches arrow color
- Background: White (to not conflict with arrow)

### Icons

**Bank Icon:**
- Style: Outline (not filled)
- Size: 24px × 24px
- Color: Warm-600
- Position: Top of bank account box

**Stripe Logo:**
- Height: 16px
- Color: Indigo-600 (monochrome)
- Position: Next to "Stripe Connected Account" text

**FDIC Badge:**
- Icon: Shield or checkmark
- Size: 16px × 16px
- Color: Emerald-600

---

## Component States

### State 1: Static Display (MVP)
**Default:** Shows complete diagram with all elements visible

**No interactions** - purely illustrative

**Usage:**
- Onboarding: Inline during Phase 3 or Phase 5 explanation
- Settings: In help section or info modal
- Help docs: Educational content

### State 2: With Callouts (Future Enhancement)
**Optional:** Hover on elements reveals additional info

**Example:**
- Hover on "Clearing Balance" → tooltip: "Your working capital for rewards commerce"
- Hover on "FDIC Insured" → tooltip: "Funds protected up to $250,000"

**Not in MVP** - keep it simple for now

---

## Responsive Behavior

### Desktop (≥768px)
- Full diagram at 600px width
- Side-by-side layout for two-column flows
- All text readable at default sizes

### Tablet (≥640px, <768px)
- Slightly narrower (500px)
- Maintain side-by-side if possible
- Reduce padding to 24px

### Mobile (<640px)
- Stack elements vertically
- Single column layout
- Width: 100% (with padding)
- Font sizes scale down 1-2px
- Arrows: vertical instead of horizontal
- Diagram padding: 16px

---

## SVG Implementation

### Variant A (Dual Purpose) - SVG Structure

```svg
<svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="600" height="400" fill="#FEFCF9" rx="12"/>
  
  <!-- Bank Account -->
  <g id="bank-account">
    <rect x="200" y="40" width="200" height="80" 
          fill="#FFFFFF" stroke="#E5E1DA" rx="8"/>
    <text x="300" y="70" text-anchor="middle" 
          fill="#1F1A15" font-weight="600">Your Bank Account</text>
    <text x="300" y="95" text-anchor="middle" 
          fill="#6B5E52">Bank of America (•••• 4567)</text>
  </g>
  
  <!-- Arrows -->
  <g id="funding-arrow">
    <line x1="250" y1="120" x2="250" y2="200" 
          stroke="#10B981" stroke-width="2"/>
    <polygon points="250,205 245,195 255,195" 
             fill="#10B981"/>
    <text x="260" y="160" fill="#047857" font-size="12">Funding</text>
  </g>
  
  <g id="settlement-arrow">
    <line x1="350" y1="200" x2="350" y2="120" 
          stroke="#6366F1" stroke-width="2"/>
    <polygon points="350,115 345,125 355,125" 
             fill="#6366F1"/>
    <text x="360" y="160" fill="#4338CA" font-size="12">Settlements</text>
  </g>
  
  <!-- Clearing Balance -->
  <g id="clearing-balance">
    <rect x="150" y="220" width="300" height="100" 
          fill="#FFFFFF" stroke="#E5E1DA" rx="8"/>
    <text x="300" y="250" text-anchor="middle" 
          fill="#1F1A15" font-weight="600">Your Clearing Balance Account</text>
    <text x="300" y="270" text-anchor="middle" 
          fill="#6366F1" font-size="12">(Stripe Connected Account)</text>
    <rect x="260" y="280" width="80" height="20" 
          fill="#D1FAE5" rx="4"/>
    <text x="300" y="294" text-anchor="middle" 
          fill="#047857" font-size="11">FDIC Insured</text>
  </g>
  
  <!-- Tagline -->
  <text x="300" y="360" text-anchor="middle" 
        fill="#6B5E52" font-size="14">
    One account. Two purposes. Complete transparency.
  </text>
</svg>
```

### Export Formats
- **SVG:** Primary format (scales perfectly, small file size)
- **PNG:** Fallback for older browsers (2x retina, 1200px × 800px)
- **Inline:** Can be embedded directly in HTML for easy styling

---

## Accessibility

### Alternative Text

**Variant A:**
```html
<img 
  src="/diagrams/dual-purpose-bank.svg" 
  alt="Diagram showing how one bank account serves two purposes: funding your clearing balance and receiving settlements from completed transactions. Money flows down from your bank to the Stripe-powered clearing balance for funding, and flows back up for settlements."
/>
```

**Variant B:**
```html
<img 
  src="/diagrams/transaction-flow.svg" 
  alt="Three-step transaction flow: Step 1 - You fund clearing balance from your bank via ACH transfer. Step 2 - Shopper buys using loyalty points at your store. Step 3 - Saltwyk clears the transaction and settles funds back to your bank account daily."
/>
```

### Screen Reader

**Structured Content Alternative:**

For users who cannot see the diagram, provide equivalent text content:

```html
<div class="sr-only">
  <h3>How Money Flows Through Saltwyk</h3>
  <ol>
    <li>
      <strong>Funding:</strong> You transfer money from your bank account 
      to your Stripe-powered clearing balance (1-2 business days via ACH).
    </li>
    <li>
      <strong>Transactions:</strong> When shoppers use loyalty points at your store, 
      Saltwyk uses your clearing balance to facilitate the transaction.
    </li>
    <li>
      <strong>Settlements:</strong> Saltwyk automatically settles funds back 
      to your bank account daily (or on your chosen schedule).
    </li>
  </ol>
  <p>
    Your bank account serves both purposes: funding the clearing balance 
    and receiving settlements. All funds are held in FDIC-insured accounts 
    via Stripe.
  </p>
</div>
```

### Keyboard Navigation

**If diagram becomes interactive (future):**
- Tab: Focus on interactive elements (callout triggers)
- Enter/Space: Show callout
- Escape: Hide callout
- All interactive elements must have visible focus indicators

---

## Usage Contexts

### Onboarding Phase 3 (Banking)
**Placement:** Above bank account input form
**Purpose:** Explain why we need bank account (dual purpose)
**Variant:** Dual-Purpose Bank Account (Variant A)
**Paired with:** 
- Heading: "One Account, Two Purposes"
- Body text: Brief explanation
- Diagram (Variant A)
- Bank input form below

### Onboarding Phase 5 (Clearing Balance)
**Placement:** Above clearing balance calculator
**Purpose:** Explain what clearing balance is and how it works
**Variant:** Full Transaction Flow (Variant B)
**Paired with:**
- Heading: "How Clearing Balance Works"
- Body text: "Your clearing balance enables rewards commerce..."
- Diagram (Variant B)
- Calculator below

### Settings > Finance (Help Section)
**Placement:** In collapsible "How it works" section
**Purpose:** Educational reference for existing merchants
**Variant:** Either variant, based on context
**Paired with:** Link from "Learn more about clearing balance"

---

## Content Guidelines

### Text Labels in Diagram

**Be concise:**
- "You Fund Clearing Balance" not "You transfer money to fund your clearing balance account"
- "ACH (1-2 days)" not "ACH transfer typically takes 1-2 business days"
- "FDIC Insured" not "FDIC Insurance Protection"

**Be specific:**
- Show actual amounts when possible: "$5,000" not "Money"
- Show timing: "(1-2 days)" to set expectations
- Show account details: "Bank of America (•••• 4567)"

**Be reassuring:**
- "FDIC Insured" for safety
- "Stripe Connected Account" for credibility
- "Complete transparency" for trust

### Diagram Taglines

**Variant A:** "One account. Two purposes. Complete transparency."
**Variant B:** "You fund it → Shoppers use it → You get settled"

**Tone:**
- Clear, not clever
- Reassuring, not salesy
- Factual, not promotional

---

## Design Decisions & Rationale

### Why Static SVG (Not Animated)?
- MVP simplicity - faster to create and implement
- Works everywhere - no JS dependencies
- Accessible - easier to provide text alternatives
- Performant - small file size, instant load

### Why Two Variants?
- Different contexts need different focus
- Dual-purpose variant answers "Why do you need my bank account?"
- Full flow variant answers "What is clearing balance?"

### Why Emerald and Indigo Colors?
- Emerald = primary action color (funding is merchant's action)
- Indigo = informational color (settlements are system action)
- Matches Fire Opal design system
- Clear visual distinction between flows

### Why Include FDIC Badge?
- Addresses merchant anxiety about fund safety
- Builds trust in Stripe infrastructure
- Regulatory compliance visibility

### Why Show Stripe Branding?
- Credibility - Stripe is trusted financial infrastructure
- Transparency - merchants know who holds their money
- Differentiation - we're not a payment processor, we use Stripe

---

## Edge Cases

### Case 1: No Bank Account Yet
**When:** Showing diagram before bank account is connected

**Display:**
- Use placeholder: "Your Bank (to be connected)"
- Or generic bank icon without specific name
- Everything else identical

### Case 2: Multiple Bank Accounts (Future)
**When:** Merchant has separate accounts for funding vs. settlements

**Display:**
- Variant A shows "two purposes" but adjust arrows
- Left arrow from "Funding Account"
- Right arrow to "Settlement Account"
- Update tagline: "Clear separation. Complete control."

### Case 3: Print/PDF Export
**When:** Diagram needs to work in black & white

**Fallback:**
- Ensure text labels are clear without color
- Use different line styles (solid/dashed) instead of color
- Arrows have clear directional indicators
- All badges remain readable in grayscale

---

## Related Components

**Used With:**
- Info Box (surrounding context/explanation)
- Section Heading (diagram title)
- Body Text (description before/after diagram)

**Appears In:**
- Onboarding Phase 3 & 5
- Settings > Finance (help section)
- Help documentation
- Marketing materials (potentially)

---

## Open Questions for Founder

1. **Stripe branding:** Final approval on showing Stripe logo/name in diagram?
2. **FDIC messaging:** Legal review of "FDIC Insured" badge language?
3. **Amount examples:** Use realistic amounts ($5,000) or round ($10,000)?
4. **Bank name:** Show real bank names (Bank of America) or generic ("Your Bank")?
5. **Future animation:** Timeline for interactive/animated version (if ever)?

---

## Success Metrics

**Understanding:**
- Measure comprehension via post-diagram survey question
- "Do you understand how your bank account relates to your clearing balance?" (Yes/No)
- Target: >90% Yes

**Anxiety Reduction:**
- Measure via sentiment analysis or direct question
- "How confident do you feel about funding your clearing balance?" (1-5 scale)
- Target: Average >4.0

**Support Reduction:**
- Track support tickets about "where's my money" or "is this safe"
- Target: <5% of merchants ask about fund safety

---

## Next Steps

1. **Create SVG files:** Design both variants in Figma, export as SVG
2. **Review copy:** Confirm all labels and taglines with founder
3. **Legal review:** Validate FDIC and Stripe messaging
4. **Test rendering:** Ensure SVG works across browsers
5. **Accessibility audit:** Validate alt text and screen reader experience

---

**This component is ready for design creation once founder confirms branding and messaging decisions.**
