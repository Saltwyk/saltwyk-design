# Shopper Components Specification

**Purpose:** Define shopper-specific components composed from core design system elements  
**Location:** `/products/shopper/components/`  
**Status:** Active Development  
**Last Updated:** 2026-01-16

---

## Overview

Shopper components are **compositions** built from core foundation and component primitives. They implement the "Bright Opal" design philosophy: warm, approachable, trustworthy surfaces for consumer-facing experiences.

### Design Philosophy

**Bright Opal Treatment:**
- Ledger background (hsl 48 29% 95%) - warm, light
- Fresh gradient (cyan→lime) for positive states
- Paper surfaces (hsl 43 27% 99%) for cards
- Warm typography hierarchy
- Thread gradients at 20% saturation for subtle accents

**Color Semantics (STRICT):**
- **Emerald:** ONE primary CTA per screen ONLY
- **Indigo:** All interactive UI elements (links, secondary actions)
- **Cyan:** ONLY in thread gradients, NEVER standalone
- **Fresh gradient:** Success states, high buying power

---

## Component Priority

### P0 - Dashboard Required (Build First)
1. BuyingPowerCard
2. WishlistItem  
3. MerchantAvatarRow

### P1 - Enhanced Experience
4. CampaignBanner
5. PersonProfileMenu
6. ConnectionCelebration

### P2 - Checkout Widget
7. OTPInput
8. PaymentBucketSelector

---

## 1. BuyingPowerCard

**File:** `buying-power-card.html`  
**Priority:** P0  
**Purpose:** Hero card displaying shopper's buying power status with appropriate visual treatment and call-to-action

### Design Requirements

**Uses Core Components:**
- Card pattern from `/components/cards/`
- Button from `/components/buttons/`
- Badge from `/components/badges/`

**States:** Low, Building, Ready

**Color Treatment by State:**
- **Low:** Ledger background (no gradient), magenta status dot, ONE emerald CTA
- **Building:** Fresh gradient at 20% saturation (subtle), indigo status dot, indigo link
- **Ready:** Fresh gradient at 40% saturation (confident), emerald status dot, indigo link

**Typography:**
- Status label: `.serial` class (uppercase, tracked, 11px)
- Headline: `font-display` (Fraunces), 2xl on mobile, 3xl on desktop
- Body: `font-sans` (Inter), text-sm, warm-600

### Visual Specifications

#### State: Low (DEFAULT)
```
┌─────────────────────────────────────────────┐
│ [Fresh thread - 3px at top]                 │
│                                             │
│ ⦿ LOW BUYING POWER         [📉 sparkline]  │
│                                             │
│ Let's build it up     [gradient headline]  │
│                                             │
│ Connect merchants or shop to earn more     │
│ points.               [sans, sm, warm-600] │
│                                             │
│ [Connect Merchants]   [emerald CTA]        │
└─────────────────────────────────────────────┘
```

**Specifications:**
- Thread accent: `h-[3px] w-full thread-fresh rounded-t-2xl` (at very top of card)
- Container: `max-w-full rounded-2xl p-6 bg-ledger shadow-sm overflow-hidden`
- Header row: `flex items-start justify-between mb-3`
- Status dot: `w-2 h-2 rounded-full bg-magenta-500` with pulse animation
- Status label: `serial text-magenta-500`
- Sparkline: `w-16 h-8` SVG, magenta/warm stroke, downward/flat trend
- Headline: `font-display text-2xl lg:text-3xl font-bold mb-2 bg-gradient-to-r from-intaglio-900 to-intaglio-700 bg-clip-text text-transparent`
- Description: `text-sm text-warm-600 mb-6`
- CTA: `bg-emerald-500 text-white hover:bg-emerald-600` (use button component)

#### State: Building
```
┌─────────────────────────────────────────────┐
│ [Fresh thread - 3px at top]                 │
│ Fresh gradient (20% sat), rounded-2xl      │
│                                             │
│ ⦿ BUILDING BUYING POWER  [📈 sparkline]    │
│                                             │
│ You're on your way    [gradient headline]  │
│                                             │
│ 3 merchants connected                      │
│ Connect more to increase power             │
│                                             │
│ View Merchants →      [indigo link]        │
└─────────────────────────────────────────────┘
```

**Specifications:**
- Thread accent: `h-[3px] w-full thread-fresh rounded-t-2xl`
- Container: Add `bg-gradient-to-br from-[hsl(170_70%_97%)] to-[hsl(90_70%_97%)]`
- Status dot: `bg-indigo-500`
- Status label: `serial text-indigo-600`
- Sparkline: `w-16 h-8` SVG, indigo stroke, upward trend
- Headline: `font-display text-2xl lg:text-3xl font-bold mb-2 bg-gradient-to-r from-intaglio-900 to-intaglio-700 bg-clip-text text-transparent`
- Link: `text-indigo-500 hover:text-indigo-600 underline`

#### State: Ready
```
┌─────────────────────────────────────────────┐
│ [Fresh thread - 3px at top]                 │
│ Fresh gradient (40% sat), rounded-2xl      │
│                                             │
│ ⦿ READY TO SHOP       [━━ sparkline]       │
│                                             │
│ Your buying power is strong                │
│                    [gradient headline]      │
│                                             │
│ 7 merchants connected • Active             │
│                                             │
│ Browse Wishlist →     [indigo link]        │
└─────────────────────────────────────────────┘
```

**Specifications:**
- Thread accent: `h-[3px] w-full thread-fresh rounded-t-2xl`
- Container: Add `bg-gradient-to-br from-[hsl(170_70%_92%)] to-[hsl(90_70%_92%)]`
- Status dot: `bg-emerald-500`
- Status label: `serial text-emerald-600`
- Sparkline: `w-16 h-8` SVG, emerald stroke, stable high line
- Headline: `font-display text-2xl lg:text-3xl font-bold mb-2 bg-gradient-to-r from-intaglio-900 to-intaglio-700 bg-clip-text text-transparent`

### Props API (for React implementation)

```typescript
interface BuyingPowerCardProps {
  status: 'low' | 'building' | 'ready';
  headline: string;
  description: string;
  connectedMerchantsCount?: number;
  primaryAction?: {
    label: string;
    onClick: () => void;
  };
  secondaryAction?: {
    label: string;
    onClick: () => void;
  };
}
```

### Mobile Responsive

- Mobile (< 768px): Full width, text-2xl headline
- Desktop (≥ 768px): Max width container, text-3xl headline

---

## 2. WishlistItem

**File:** `wishlist-item.html`  
**Priority:** P0  
**Purpose:** Display wishlist item with merchant avatar, title, and progress toward affordability

### Design Requirements

**Uses Core Components:**
- Avatar from `/components/avatars/`
- Progress ring from `/components/progress/`
- Button from `/components/buttons/`

**States:** Ready to Snag, Saving For

**Visual Treatment:**
- Paper background (white/warm-50)
- Merchant avatar: Initials in colored circle (48px)
- Product placeholder: Warm-200 square with "?" icon
- Progress ring: Emerald when ready, indigo when saving

### Visual Specifications

#### State: Ready to Snag
```
┌─────────────────────────────────────────────┐
│ [Fresh thread - 3px at top]                 │
│ bg-white, rounded-xl, p-4, border-warm-200 │
│                                             │
│ ✓ READY TO SNAG!      [emerald badge]      │
│                                             │
│ ┌────┐  Spa Gift Set                       │
│ │ ?  │  Sephora       [merchant logo]      │
│ └────┘                                      │
│         [Snag It Now!]  [emerald button]   │
└─────────────────────────────────────────────┘
```

**Specifications:**
- Thread accent: `h-[3px] w-full thread-fresh` at top of card
- Container: `bg-white rounded-xl overflow-hidden shadow-sm border border-warm-200`
- Inner content: `p-4`
- Status badge: `serial text-emerald-600 text-xs font-bold flex items-center gap-1` with ✓ icon
- Product placeholder: `w-16 h-16 bg-warm-200 rounded-lg flex items-center justify-center`
- Merchant logo: `w-8 h-8 rounded-full object-cover` using logo.dev API
- Product title: `text-base font-semibold text-ink`
- Merchant name: `text-sm text-warm-600`
- Action button: **Emerald primary button** `bg-emerald-500 text-white hover:bg-emerald-600 font-semibold text-sm px-4 py-2 rounded-lg`

**Rationale:** This is a celebration moment - shopper unlocked buying power. Use emerald CTA.

#### State: Saving For
```
┌─────────────────────────────────────────────┐
│ bg-white, rounded-xl, p-4, border-warm-200 │
│                                             │
│ ◐ 75% there  Saving For   [progress ring]  │
│                                             │
│ ┌────┐  Roses Bouquet                      │
│ │ ?  │  1-800-Flowers [merchant logo]      │
│ └────┘                                      │
│                                             │
└─────────────────────────────────────────────┘
```

**Specifications:**
- Container: Same as Ready to Snag (no thread accent - not celebratory yet)
- Progress ring: `w-6 h-6` SVG circle, indigo stroke showing completion percentage
- Status text: `serial text-indigo-600 text-xs font-medium`
- Product placeholder: `w-16 h-16 bg-warm-200 rounded-lg`
- Merchant logo: `w-8 h-8 rounded-full object-cover` using logo.dev API
- Product title: `text-base font-semibold text-ink`
- Merchant name: `text-sm text-warm-600`
- NO price shown (can't guarantee accuracy without knowing clearing merchant)
- NO action button (building anticipation - not ready yet)

**Rationale:** Remove price/points because we can't know exact requirements without knowing which merchant will clear. Keep it simple: title + merchant only.

### Props API

```typescript
interface WishlistItemProps {
  status: 'ready' | 'saving';
  title: string;
  merchantName: string;
  merchantDomain: string; // e.g., "sephora.com" for logo.dev
  productImageUrl?: string; // null shows placeholder
  progress: number; // 0-100 for saving state
  onSnag?: () => void; // only for ready state
}
```

### Mobile Responsive

- Full width on mobile
- Stacks vertically: badge → product/merchant → action
- Horizontal layout on desktop (≥ 768px)

---

## 3. MerchantAvatarRow

**File:** `merchant-avatar-row.html`  
**Priority:** P0  
**Purpose:** Display row of connected merchant avatars with overflow indicator

### Design Requirements

**Uses Core Components:**
- Avatar from `/components/avatars/`

**Visual Treatment:**
- Avatar size: 48px circles
- Color: Based on merchant name hash (warm palette)
- Spacing: -8px overlap (stacked effect)
- Max visible: 5 avatars, then "+X more"

### Visual Specifications

```
[LOGO] [LOGO] [LOGO] [LOGO] [+3]
  ↑      ↑      ↑      ↑      ↑
  48px circles, -8px overlap, actual merchant logos
```

**Specifications:**
- Container: `flex items-center -space-x-2`
- Avatar: `w-12 h-12 rounded-full border-2 border-ledger object-cover`
- Logo image: Use logo.dev API: `https://img.logo.dev/{domain}?token={token}&size=48&format=png`
- Fallback: If logo.dev fails, show initials on colored background (see fallback pattern below)
- "+X more": `w-12 h-12 rounded-full bg-warm-300 text-warm-700 text-xs font-medium border-2 border-ledger`

### Logo.dev Integration

**API Pattern:**
```html
<img 
  src="https://img.logo.dev/sephora.com?token=YOUR_TOKEN&size=48&format=png" 
  alt="Sephora"
  class="w-12 h-12 rounded-full object-cover border-2 border-ledger"
  onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'"
/>
<!-- Fallback to initials if logo fails -->
<div class="w-12 h-12 rounded-full bg-sepia-400 text-white flex items-center justify-center text-sm font-semibold border-2 border-ledger" style="display:none">
  SE
</div>
```

**Token:** Use environment variable or config (not hardcoded in components)

**Fallback Colors:**
- Use merchant name hash to select from warm palette
- Sepia, sienna, slate, warm tones (400 weight)

### Color Assignment (Fallback Only)

Only used when logo.dev fails to load:
```javascript
// Hash merchant name to index
const hash = merchantName.split('').reduce((acc, char) => 
  acc + char.charCodeAt(0), 0);
const colors = ['sepia-400', 'sienna-400', 'slate-400', 'warm-400'];
const colorClass = colors[hash % colors.length];
```

### Props API

```typescript
interface MerchantAvatarRowProps {
  merchants: Array<{
    name: string;
    domain: string; // e.g., "sephora.com" for logo.dev
    initials: string; // fallback if logo fails
  }>;
  maxVisible?: number; // default 5
  logoToken?: string; // logo.dev API token (or from env)
  onViewAll?: () => void;
}
```

### Mobile Responsive

- Same size on all breakpoints (48px is touch-friendly)
- Ensure "+X more" is clickable

---

## 4. CampaignBanner

**File:** `campaign-banner.html`  
**Priority:** P1  
**Purpose:** Promotional banner for active launch campaigns

### Design Requirements

**Uses Core Components:**
- Card from `/components/cards/`
- Badge from `/components/badges/`
- Button from `/components/buttons/`

**Visual Treatment:**
- Gradient background themed to campaign
- Merchant logo lockup
- Subtle thread accent (NOT full intensity)
- Clear CTA

### Visual Specifications

```
┌─────────────────────────────────────────────┐
│ Gradient bg, rounded-xl, p-6, overflow     │
│                                             │
│ ⦿ ACTIVE CAMPAIGN     [badge, top-left]    │
│ ENDS FEB 14           [badge, top-right]   │
│                                             │
│ Valentine's Day Drop                        │
│ Earn 2X bonus points  [headline + desc]    │
│                                             │
│ [View Campaign →]     [indigo button]      │
└─────────────────────────────────────────────┘
```

**Specifications:**
- Use Flame gradient for romantic campaigns: `bg-gradient-to-br from-[hsl(20_70%_95%)] to-[hsl(330_70%_95%)]`
- Use Fresh gradient for growth campaigns: `bg-gradient-to-br from-[hsl(170_70%_95%)] to-[hsl(90_70%_95%)]`
- Badge: `bg-intaglio-900/80 text-ledger backdrop-blur-sm`
- Headline: `font-display text-xl text-ink`

### Props API

```typescript
interface CampaignBannerProps {
  theme: 'romantic' | 'fresh' | 'warm' | 'cool';
  title: string;
  description: string;
  endDate: string;
  merchantLogo?: string;
  onViewCampaign: () => void;
}
```

---

## 5. PersonProfileMenu

**File:** `person-profile-menu.html`  
**Priority:** P1  
**Purpose:** Universal person identity and role switcher

### Design Requirements

**Uses Core Components:**
- Popover from `/components/popovers/`
- Avatar from `/components/avatars/`
- Button from `/components/buttons/`

**Refer to:** `/uploads/universal-person-profile-component-spec.md`

### Visual Specifications

**Trigger (Collapsed):**
```
[JD]  ← 40px avatar circle, clickable
```

**Menu (Expanded):**
```
┌─────────────────────────────────────────┐
│ [JD] Sarah Jones                        │
│      sarah.jones@gmail.com              │
│                                         │
│ Current Role                            │
│ 🛍️ Shopping                             │
│    7 merchants • Ready                  │
│                                         │
│ ─────────────────────────────────────── │
│                                         │
│ ⚙️  Account Settings                    │
│ 🚪 Sign Out                             │
└─────────────────────────────────────────┘
```

**Specifications:**
- Dropdown: `min-w-[280px] bg-white border-2 border-warm-200 rounded-xl shadow-lg p-4`
- Avatar: `w-12 h-12 rounded-full`
- Role indicator: `flex items-center gap-2 text-indigo-600`
- Links: `text-warm-600 hover:text-indigo-600`

### Props API

```typescript
interface PersonProfileMenuProps {
  person: {
    firstName: string;
    lastName: string;
    email: string;
    initials: string;
  };
  currentRole: 'shopping' | 'business';
  shopperStats?: {
    merchantsConnected: number;
    buyingPowerStatus: 'low' | 'building' | 'ready';
  };
  onSwitchRole?: () => void;
  onAccountSettings: () => void;
  onSignOut: () => void;
}
```

---

## 6. ConnectionCelebration

**File:** `connection-celebration.html`  
**Priority:** P1  
**Purpose:** Celebration modal when merchant program connects successfully

### Design Requirements

**Uses Core Components:**
- Modal from `/components/modals/`
- Badge from `/components/badges/`
- Button from `/components/buttons/`

**Animation:** `animate-celebrate-pop` on icon reveal

### Visual Specifications

```
┌─────────────────────────────────────────┐
│           MODAL OVERLAY                 │
│                                         │
│   ┌─────────────────────────────────┐   │
│   │                                 │   │
│   │        [⚡]  [animated icon]    │   │
│   │                                 │   │
│   │   BONUS UNLOCKED                │   │
│   │   500 Bonus Points!             │   │
│   │   Added to Target               │   │
│   │                                 │   │
│   │   [Connect Another Program]     │   │
│   │   [Done]                        │   │
│   │                                 │   │
│   └─────────────────────────────────┘   │
└─────────────────────────────────────────┘
```

**Specifications:**
- Icon container: `w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center`
- Icon: `w-10 h-10 text-emerald-600` (lucide zap)
- Badge: `serial text-emerald-600`
- Headline: `font-display text-2xl text-ink font-bold`
- Primary CTA: Emerald button (if encouraging next connection)
- Secondary: Indigo link

### Props API

```typescript
interface ConnectionCelebrationProps {
  rewardType: 'bonus_points' | 'milestone';
  amount: number;
  merchantName: string;
  nextMerchantSuggestion?: {
    name: string;
    logo: string;
  };
  onConnectNext?: () => void;
  onDone: () => void;
}
```

---

## 7. OTPInput

**File:** `otp-input.html`  
**Priority:** P0 (Checkout Widget)  
**Purpose:** 6-digit code entry for phone verification

### Design Requirements

**Uses Core Components:**
- Input from `/components/inputs/`

**Visual Treatment:**
- 6 individual boxes
- Auto-focus progression
- Numeric input only
- Paste support

### Visual Specifications

```
[ 5 ] [ 8 ] [ 2 ] [ 0 ] [ 1 ] [ 6 ]
  ↑                               ↑
  48px squares, 8px gap
```

**Specifications:**
- Container: `flex items-center gap-2 justify-center`
- Input box: `w-12 h-12 text-center text-xl font-semibold border-2 border-warm-300 rounded-lg focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20`
- On fill: `border-indigo-500 bg-indigo-50`

### Props API

```typescript
interface OTPInputProps {
  length?: number; // default 6
  onComplete: (code: string) => void;
  onResend?: () => void;
  countdown?: number; // seconds until resend available
}
```

---

## 8. PaymentBucketSelector

**File:** `payment-bucket-selector.html`  
**Priority:** P0 (Checkout Widget)  
**Purpose:** Radio group for selecting payment allocation strategy

### Design Requirements

**Uses Core Components:**
- Radio inputs from `/components/inputs/`
- Card from `/components/cards/`

**Visual Treatment:**
- Vertical stack of radio cards
- Clear visual selected state
- One option pre-selected (Best Value)

### Visual Specifications

```
◉ Best Value
  Optimized for maximum purchasing power

◯ Expiring Soon
  Use points before they expire

◯ Most Available
  Your highest balance program
```

**Specifications:**
- Container: `space-y-3`
- Radio card: `border-2 border-warm-200 rounded-xl p-4 cursor-pointer hover:border-indigo-300`
- Selected: `border-indigo-500 bg-indigo-50`
- Radio icon: `w-5 h-5 text-indigo-600`
- Label: `text-base font-semibold text-ink`
- Description: `text-sm text-warm-600`

### Props API

```typescript
interface PaymentBucketSelectorProps {
  options: Array<{
    id: 'best_value' | 'expiring_soon' | 'most_available';
    label: string;
    description: string;
  }>;
  defaultSelected: string;
  onChange: (selected: string) => void;
}
```

---

## Component File Structure

Each component HTML file should follow this structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Standard head content -->
    <title>[Component Name] — Shopper Components — Saltwyk Design System</title>
    <!-- Fonts, Tailwind, Design Tokens -->
</head>
<body class="bg-ledger">
    <!-- Design System Navigation -->
    <div id="top-nav"></div>
    <div class="flex">
        <div id="side-nav"></div>
        <main class="flex-1">
            <!-- Fresh thread gradient header -->
            <div class="h-[3px] w-full thread-fresh"></div>
            
            <div class="max-w-6xl mx-auto p-8">
                <!-- Breadcrumb -->
                <nav class="breadcrumb">...</nav>
                
                <!-- Component Header -->
                <header class="mb-12">
                    <p class="serial text-intaglio-500 mb-2">Shopper Component</p>
                    <h1 class="font-display text-4xl mb-2">[Component Name]</h1>
                    <p class="text-warm-600">[Description]</p>
                </header>
                
                <!-- States Section -->
                <section class="mb-16">
                    <p class="serial text-emerald-600 mb-4">Component States</p>
                    <!-- Show each state/variant -->
                </section>
                
                <!-- Specifications Section -->
                <section class="mb-16">
                    <p class="serial text-emerald-600 mb-4">Specifications</p>
                    <!-- Props table, CSS classes, etc. -->
                </section>
                
                <!-- Usage Examples Section -->
                <section class="mb-16">
                    <p class="serial text-emerald-600 mb-4">Usage Examples</p>
                    <!-- Code examples -->
                </section>
            </div>
        </main>
    </div>
    <script src="/partials/nav-loader.js"></script>
</body>
</html>
```

---

## Design System Integration

**Core Components Used:**
- `/components/avatars/` - Merchant initials, profile avatars
- `/components/badges/` - Status indicators, campaign badges
- `/components/buttons/` - Primary emerald CTAs, secondary indigo actions
- `/components/cards/` - Container patterns
- `/components/progress/` - Progress rings for wishlist
- `/components/inputs/` - OTP entry, radio selectors
- `/components/modals/` - Celebration overlays
- `/components/popovers/` - Profile menu dropdown

**Foundation Elements Used:**
- `/foundation/colors.html` - Ledger, ink, warm palette
- `/foundation/typography.html` - Fraunces display, Inter body, serial class
- `/foundation/threads.html` - Fresh gradient
- `/foundation/spacing.html` - Consistent spacing scale

---

## Development Workflow

1. **Build component HTML file** with all states documented
2. **Test responsiveness** at 320px, 480px, 768px, 1024px
3. **Validate color usage** against semantic rules
4. **Update index.html** barrel file with new component
5. **Use component in screens** to validate composition

---

## Quality Checklist

Before marking component complete:

- [ ] Uses ONLY emerald for primary CTA (max 1 per component)
- [ ] Uses indigo for all interactive elements
- [ ] Cyan appears ONLY in thread gradients
- [ ] Fresh gradient applied at correct saturation
- [ ] Fraunces for headlines, Inter for body
- [ ] Serial class used for status labels
- [ ] All states documented with visual examples
- [ ] Props API defined for future React implementation
- [ ] Mobile responsive (320px minimum)
- [ ] Icons use Lucide library
- [ ] Follows component file structure template

---

## Related Documentation

- **Jobs to be Done:** `/uploads/shopper-passport-jobs-to-be-done.md`
- **Architecture:** `/uploads/shopper-passport-refined-architecture.md`
- **Universal Profile:** `/uploads/universal-person-profile-component-spec.md`
- **Color Strategy:** `/products/shopper/color-strategy.html`
- **Core Components:** `/components/`
- **Foundation:** `/foundation/`

---

**Next Steps:**
1. Build BuyingPowerCard (Low state first)
2. Build WishlistItem (Ready to Snag state)
3. Build MerchantAvatarRow
4. Compose Passport Dashboard screen using these components
