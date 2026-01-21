# Saltwyk Design System: Component Inventory for Onboarding

This document provides a complete inventory of all available components for creating merchant onboarding screen specifications. Components are organized in three layers: Core Design System, Merchant-Specific, and New Onboarding Components.

---

## Quick Reference Table

| Component | Layer | Primary Use | File Path |
|-----------|-------|-------------|-----------|
| Buttons | Core | Actions, CTAs | `/core/components/buttons/` |
| Cards | Core | Content containers | `/core/components/cards/` |
| Inputs | Core | Form fields | `/core/components/inputs/` |
| Modals | Core | Dialogs, confirmations | `/core/components/modals/` |
| Progress | Core | Stepper, bars, spinners | `/core/components/progress/` |
| Tabs | Core | Navigation, sections | `/core/components/tabs/` |
| Badges | Core | Status indicators | `/core/components/badges/` |
| Toasts | Core | Notifications | `/core/components/toasts/` |
| Tooltips | Core | Help text, hints | `/core/components/tooltips/` |
| Accordion | Core | Expandable sections | `/core/components/accordion/` |
| Avatars | Core | User/entity display | `/core/components/avatars/` |
| Setup Progress | Merchant | Onboarding step indicator | `/merchant/components/setup-progress.html` |
| Metric Card | Merchant | Financial data display | `/merchant/components/metric-card.html` |
| Transaction Components | Merchant | Tables, filters, status | `/merchant/components/transaction-components.html` |
| Fee Structure Display | Onboarding | Pricing transparency | `/merchant/components/fee-structure-display.html` |
| Platform List with Search | Onboarding | Platform selection | `/merchant/components/platform-list-search.html` |
| Money Flow Diagram | Onboarding | Educational illustrations | `/merchant/components/money-flow-diagram.html` |
| Clearing Balance Calculator | Onboarding | Funding calculator | `/merchant/components/clearing-balance-calculator.html` |

---

## Layer 1: Core Design System Components

### Buttons
**File:** `/core/components/buttons/index.html`

**Variants:**
- **Primary** (`bg-emerald-600`): Main CTAs, form submissions
- **Secondary** (`border-warm-300, bg-white`): Alternative actions
- **Tertiary/Ghost**: Minimal emphasis actions
- **Danger** (`bg-magenta-600`): Destructive actions

**Sizes:** `xs`, `sm`, `md`, `lg`, `xl`

**States:** Default, Hover, Active, Disabled, Loading (with spinner)

**Icon Support:** Left icon, right icon, icon-only

**Example Usage:**
```html
<button class="btn-primary btn-lg">
  Continue
  <i data-lucide="arrow-right"></i>
</button>
```

---

### Cards
**File:** `/core/components/cards/index.html`

**Variants:**
- **Basic Card**: White background, `warm-200` border, 12px radius
- **Elevated Card**: With subtle shadow
- **Interactive Card**: Hover state with border color change
- **Bordered Card**: Thicker 2px border
- **Card with Header**: Includes title section

**Key Styles:**
- Background: `white`
- Border: `1px solid warm-200`
- Border Radius: `12px`
- Padding: `20px` (desktop), `16px` (mobile)

---

### Inputs
**File:** `/core/components/inputs/index.html`

**Types:**
- Text input
- Email input
- Password input (with show/hide toggle)
- Number input
- Search input
- Textarea
- Select dropdown

**Variants:**
- Default (light)
- With label
- With helper text
- With error state
- With prefix/suffix icons
- With character count

**States:**
- Default: `border-warm-300`
- Focus: `border-indigo-500` (2px), `box-shadow: 0 0 0 3px indigo-500/10%`
- Error: `border-magenta-500`
- Disabled: `bg-warm-100`, reduced opacity

**Sizes:** `sm`, `md`, `lg`

---

### Modals
**File:** `/core/components/modals/index.html`

**Variants:**
- **Small Modal**: 400px max-width, simple content
- **Medium Modal**: 600px max-width, forms
- **Large Modal**: 800px max-width, complex content
- **Full-screen Modal**: Mobile pattern
- **Confirmation Modal**: Action confirmation with danger option
- **Alert Modal**: Information display

**Structure:**
- Header (title, close button)
- Body (scrollable content)
- Footer (action buttons)

**Backdrop:** Semi-transparent dark overlay (`bg-ink/50`)

---

### Progress Indicators
**File:** `/core/components/progress/index.html`

**Types:**

**1. Progress Bar**
- Default, Success, Warning, Error variants
- Sizes: `sm` (4px), `md` (8px), `lg` (12px)
- Optional percentage label
- Animated fill

**2. Stepper**
- Horizontal and Vertical orientation
- States: Completed (emerald), Active (emerald border), Pending (warm)
- Step numbers or icons
- Connecting lines

**3. Spinner**
- Sizes: `xs` (16px), `sm` (24px), `md` (32px), `lg` (48px)
- Colors: emerald, indigo, warm

---

### Tabs
**File:** `/core/components/tabs/index.html`

**Variants:**
- **Underline Tabs**: Default, underline indicator
- **Pill Tabs**: Rounded pill background
- **Boxed Tabs**: Bordered container
- **Vertical Tabs**: Stacked navigation

**Features:**
- Tab badges (counts, notifications)
- Close buttons on tabs
- Focus states
- Compact size option

**Themes:** Light and Dark

---

### Badges
**File:** `/core/components/badges/index.html`

**Semantic Colors:**
- **Success** (`emerald`): Completed, verified, active
- **Warning** (`orange`): Pending, attention needed
- **Error** (`magenta`): Failed, error
- **Info** (`indigo`): Informational
- **Neutral** (`warm`): Default, inactive

**Variants:**
- Filled (solid background)
- Outlined (border only)
- Subtle (light background)
- Dot indicator

**Sizes:** `xs`, `sm`, `md`

---

### Toasts
**File:** `/core/components/toasts/index.html`

**Types:** Success, Warning, Error, Info, Neutral

**Styles:**
- **Default**: Left border accent
- **Filled**: Full color background
- **Minimal**: Subtle styling
- **Dark**: Dark background
- **Bright**: Vibrant colors

**Features:**
- Icon, title, message
- Action link
- Dismiss button
- Auto-dismiss progress bar
- Enter/exit animations

---

### Tooltips
**File:** `/core/components/tooltips/index.html`

**Placements:** top, bottom, left, right, top-start, top-end

**Features:**
- Arrow pointer
- Multiline support
- Title/description structure
- Keyboard shortcut display
- Delay on show/hide

**Animations:** Scale and fade on enter/exit

---

### Accordion
**File:** `/core/components/accordion/index.html`

**Variants:**
- **Basic**: Simple expand/collapse
- **Bordered**: With border around each item
- **Warning** (`orange`): Attention-drawing sections

**Features:**
- Chevron rotation animation (0° → 90°)
- ARIA expanded/controls for accessibility
- Single or multiple open items

---

### Avatars
**File:** `/core/components/avatars/index.html`

**Sizes:**
- `xs`: 24px
- `sm`: 32px
- `md`: 40px
- `lg`: 48px
- `xl`: 64px
- `2xl`: 96px

**Content Types:**
- Image
- Initials (colored backgrounds)
- Fallback icon

**Color Variants:** emerald, indigo, orange, magenta, neutral

**Features:**
- Status indicators (online/away/busy/offline)
- Badges (notification dots)
- Avatar groups (overlapping)

---

## Layer 2: Merchant-Specific Components

### Setup Progress
**File:** `/merchant/components/setup-progress.html`

**Purpose:** Compact progress indicator for merchant onboarding flows.

**Variants:**

**1. Inline Dots (Default)**
- 10px dots connected by 2px lines
- Ideal for mobile headers
- Maximum 7 steps recommended

**2. Labeled Steps**
- Dots with labels below
- Best for desktop layouts

**3. Vertical Steps**
- Stacked with descriptions
- Used in sidebars or detail views

**States:**
- **Pending**: `warm-300` dot
- **Active**: `indigo-500` dot with 4px ring (`indigo-100`)
- **Completed**: `emerald-500` dot
- **Error**: `magenta-500` dot with 4px ring

**Lines:**
- Pending: `warm-200`
- Completed: `emerald-500`

**Example:**
```html
<div class="progress-steps">
  <div class="step-dot completed"></div>
  <div class="step-line completed"></div>
  <div class="step-dot active"></div>
  <div class="step-line"></div>
  <div class="step-dot"></div>
</div>
```

---

### Metric Card
**File:** `/merchant/components/metric-card.html`

**Purpose:** Display key financial metrics with semantic color coding.

**Structure:**
- Label (12px, `warm-500`)
- Value (28px desktop / 24px mobile, bold, tabular-nums)
- Subtext (12px, `warm-500`)

**Value Colors:**
- **Positive** (`emerald-600`): Available funds, earned amounts
- **Neutral** (`ink`): Pending amounts, dates, counts
- **Negative** (`magenta-600`): Errors, losses

**Optional Icon:**
- 40px container with colored background
- Positioned top-right of content

**States:**
- Default, Hover (border change + shadow)
- Loading (skeleton with pulse animation)
- Error (`magenta-50` background)

**Grid Layout:**
- Desktop: 3-4 columns (`grid grid-cols-3 gap-4`)
- Mobile: Stacked (`space-y-3`)

---

### Transaction Components
**File:** `/merchant/components/transaction-components.html`

**Components:**

**1. Filter Tabs**
- Pill-style tabs for status filtering
- Active: `emerald-500` fill
- Shows count in parentheses
- Border radius: `rounded-full`

**2. Status Badges**
- **Completed**: `emerald-50` bg, `emerald-700` text
- **Pending**: `orange-50` bg, `orange-700` text
- **Failed**: `magenta-50` bg, `magenta-600` text
- Lowercase text, pill-shaped

**3. Transaction Table**
- High-density data table
- Header: `bg-warm-50`, uppercase, tracking-wide
- Row hover: `bg-warm-50`
- ID column: `font-mono`
- Amount column: `tabular-nums`
- Date format: `Mon DD, H:MM AM/PM`

**Screen States:**
- Empty state (icon + message + action link)
- Filtered empty state
- Loading (skeleton rows with pulse)
- Error state (retry button)

---

## Layer 3: New Onboarding Components

### Fee Structure Display
**File:** `/merchant/components/fee-structure-display.html`

**Purpose:** Display Saltwyk's transaction fee structure transparently.

**Contexts:**
- Onboarding Phase 4
- Settings > Plan section

**Variants:**

**1. Standard Rate Display**
```
┌──────────────────────────────────┐
│    Transaction Fee               │
│  ┌───────────────────────────┐   │
│  │         3%                │   │
│  │   per transaction         │   │
│  │   (calculated on total)   │   │
│  └───────────────────────────┘   │
│                                  │
│  How it works:                   │
│  • $100 purchase → $3 fee        │
│  • $500 purchase → $15 fee       │
│                                  │
│  No hidden charges               │
│  [View Pricing] [Terms]          │
└──────────────────────────────────┘
```

**2. Promotional Rate Display**
- 0% rate with promo badge
- Launch deadline displayed
- Standard rate preview ("After promo: 3%")
- Scarcity indicator ("12 spots remaining")

**Visual Specs:**
- Rate: 48px, bold, `emerald-600`
- Feature box: `emerald-50` bg, `emerald-200` border
- Promo badge: `emerald-500` bg, white text
- Links: `indigo-600`

**Edge Cases:**
- Promo expiring soon (<7 days): Warning banner
- Promo just expired: Info banner
- Error state: Dash display with fallback link

---

### Platform List with Search
**File:** `/merchant/components/platform-list-search.html`

**Purpose:** Enable merchants to discover and connect rewards platforms.

**Contexts:**
- Onboarding Phase 6 (platform selection)
- Settings > Apps tab (manage connections)

**Sections:**
1. **Supported Platforms**: Connect button available
2. **Tier Required**: Warning state with upgrade guidance
3. **Coming Soon**: Vote button with count

**Card Variants:**

**Supported Card:**
- White bg, `warm-200` border
- Hover: `warm-50` bg, `warm-300` border
- Action: `btn-connect` (emerald)

**Tier Required Card:**
- `orange-50` bg, `orange-200` border
- Warning icon (`orange-500`)
- Actions: "Learn About Tiers", "Continue Anyway"

**Coming Soon Card:**
- `warm-50` bg, dashed `warm-300` border
- Vote count display
- Action: Vote button (`indigo-500`)

**Connected Card (Settings):**
- `emerald-50` bg, `emerald-200` border (2px)
- Connected badge with checkmark
- Last synced timestamp
- Actions: Test Connection, Reconnect, Change Platform

**Search:**
- Live filtering with debounce (150ms)
- Matches: name, description, search terms
- No results state with request link
- Clear button (X) when text present

---

### Money Flow Diagram
**File:** `/merchant/components/money-flow-diagram.html`

**Purpose:** Static SVG illustrations explaining money flow through Saltwyk.

**Variant A: Dual-Purpose Bank Account**
- Used in: Phase 3 (Banking)
- Shows: One bank account → funding + settlements
- Key question answered: "Why do you need my bank account?"

**Variant B: Full Transaction Flow**
- Used in: Phase 5 (Clearing Balance)
- Shows: 3-step lifecycle (Fund → Shopper Buys → Settlement)
- Key question answered: "What is a clearing balance?"

**Visual Specs:**
- Funding arrow: `emerald-500`, 2px stroke
- Settlement arrow: `indigo-500`, 2px stroke
- Transaction arrow: `amber-500`, 2px stroke
- Box: White bg, `warm-200` border, 8px radius
- Container: `warm-50` bg, 12px radius

**Accessibility:**
- `role="img"` on figure
- Screen reader description in `figcaption`
- Expandable text alternative (`<details>`)

---

### Clearing Balance Calculator
**File:** `/merchant/components/clearing-balance-calculator.html`

**Purpose:** Interactive calculator for determining clearing balance funding amount.

**Contexts:**

**1. Onboarding Context (Phase 5)**
- Uses category benchmarks (no transaction history)
- Penetration rates by category:
  - Home & Garden: 10%
  - Apparel: 15%
  - Beauty: 12%
  - Food & Beverage: 8%

**2. Settings Context**
- Uses actual transaction history
- Shows current balance and runway
- Recommends top-up amount

**Components:**

**Recommendation Box:**
- Large amount display (48px, bold)
- `emerald-50` bg, `emerald-200` border
- Interactive slider (range: $500-$10,000 onboarding, $500-$20,000 settings)
- Custom input with $ prefix

**Coverage Box:**
- Transaction capacity estimate
- Days of runway at expected volume
- Penetration assumption display
- Risk buffer explanation (25%)

**Validation:**
- Amount too low (<$500): Orange warning
- Amount very high (>$50,000): Indigo info notice

**Accessibility:**
- Slider: `aria-valuemin/max/now/text`
- Keyboard: Arrow keys (±$100), Page Up/Down (±$1,000)
- Live region for value changes

---

## Design Tokens Reference

### Typography
| Font | Family | Usage |
|------|--------|-------|
| Body | Inter | All body text, UI elements |
| Display | Fraunces | Headlines, page titles |
| Brand | Outfit | Logo, brand elements |

### Colors (Semantic)
| Color | Token | Usage |
|-------|-------|-------|
| Emerald | `emerald-500/600` | Success, positive actions, available funds |
| Indigo | `indigo-500/600` | Selection, focus, settlements |
| Orange | `orange-500/600` | Warning, pending, attention |
| Magenta | `magenta-500/600` | Error, danger, failed states |
| Warm | `warm-100-900` | Neutral, borders, backgrounds, body text |
| Ink | `ink` | Primary text color |

### Thread Gradients
| Theme | Gradient |
|-------|----------|
| Fire Opal (Merchant) | `cyan-thread → magenta-thread` |

### Spacing Scale
| Token | Value |
|-------|-------|
| `p-4` | 16px |
| `p-6` | 24px |
| `p-8` | 32px |
| `gap-2` | 8px |
| `gap-3` | 12px |
| `gap-4` | 16px |
| `gap-6` | 24px |

### Border Radius
| Token | Value |
|-------|-------|
| `rounded` | 4px |
| `rounded-md` | 6px |
| `rounded-lg` | 8px |
| `rounded-xl` | 12px |
| `rounded-full` | 9999px |

---

## Component Combinations for Onboarding Phases

### Phase 1: Account Creation
- **Core**: Inputs (email, password), Buttons (primary)
- **Merchant**: Setup Progress (inline dots)

### Phase 2: Business Information
- **Core**: Inputs (text, select), Cards (form container), Buttons
- **Merchant**: Setup Progress

### Phase 3: Banking
- **Core**: Inputs, Cards, Modals (confirmation)
- **Merchant**: Setup Progress
- **Onboarding**: Money Flow Diagram (Variant A)

### Phase 4: Pricing Review
- **Core**: Cards, Buttons, Badges (promo)
- **Merchant**: Setup Progress
- **Onboarding**: Fee Structure Display

### Phase 5: Clearing Balance
- **Core**: Inputs (custom amount), Cards, Buttons, Tooltips
- **Merchant**: Setup Progress
- **Onboarding**: Money Flow Diagram (Variant B), Clearing Balance Calculator

### Phase 6: Platform Integration
- **Core**: Inputs (search), Cards, Badges, Buttons
- **Merchant**: Setup Progress
- **Onboarding**: Platform List with Search

### Phase 7: Identity Verification
- **Core**: Inputs (file upload), Cards, Progress (upload bar), Modals
- **Merchant**: Setup Progress

### Phase 8: Review
- **Core**: Cards, Accordion (section review), Badges (status), Buttons
- **Merchant**: Setup Progress, Metric Card (summary)

### Phase 9: Launch
- **Core**: Cards, Buttons (primary CTA), Toasts (success)
- **Merchant**: Metric Card (dashboard preview)

---

## Missing Components / Gaps

Based on the 9-phase onboarding flow, the following components may need to be created:

1. **File Upload Component** - For identity verification documents (Phase 7)
2. **Bank Account Input** - Specialized input for routing/account numbers (Phase 3)
3. **Address Autocomplete** - For business address entry (Phase 2)
4. **Review Summary Card** - For displaying submitted information (Phase 8)
5. **Celebration/Success Animation** - For launch completion (Phase 9)
6. **OAuth Connection Flow** - For platform authentication (Phase 6)

---

## File Path Reference

```
/core/components/
├── accordion/index.html
├── avatars/index.html
├── badges/index.html
├── buttons/index.html
├── cards/index.html
├── inputs/index.html
├── modals/index.html
├── progress/index.html
├── tabs/index.html
├── toasts/index.html
└── tooltips/index.html

/merchant/components/
├── clearing-balance-calculator.html  (NEW)
├── fee-structure-display.html        (NEW)
├── metric-card.html
├── money-flow-diagram.html           (NEW)
├── platform-list-search.html         (NEW)
├── setup-progress.html
└── transaction-components.html

/merchant/screens/
├── clearing-balance.html
├── dashboard.html
├── get-verified.html
├── settings.html
└── transactions.html
```

---

*Document generated for Saltwyk Design System v0.6.0*
*Last updated: January 2026*
