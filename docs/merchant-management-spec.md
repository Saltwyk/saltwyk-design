# Merchant Management Feature Specification

**Last Updated:** 2026-01-17  
**Status:** Ready for Implementation  
**Owner:** Tela

---

## Overview

**Purpose:** Enable shoppers to discover, connect, and manage merchant rewards accounts within the Saltwyk network.

**Scope:** Merchants screen with search, favorites, connection management, and the merchant card component that displays merchants across the shopper passport.

**Key Insight:** Merchants are either on the Saltwyk network or not. No "coming soon" states. No category complexity. Shoppers search by merchant name or domain, connect accounts via email/phone OTP, and favorite merchants to prevent point usage even when points are expiring.

---

## Core User Jobs

From the shopper's perspective:

1. **Discover merchants** - "What merchants can I shop at with my points?"
2. **Connect accounts** - "How do I link my Target rewards to Saltwyk?"
3. **Manage connections** - "Which accounts are connected and working?"
4. **Protect favorites** - "Don't use my Sephora points even if they're expiring"
5. **Find specific merchant** - "Is Nordstrom on the network?"
6. **Understand buying power** - "Do I have enough points to shop here?"

---

## Components to Build

### 1. Empty State Component (`empty-state.html`)

**Purpose:** Reusable component for empty/zero states across the shopper passport

**Structure:**
```html
<div class="flex flex-col items-center justify-center py-12 px-6 text-center">
  <!-- Icon Circle -->
  <div class="w-16 h-16 rounded-full bg-warm-100 flex items-center justify-center mb-4">
    <svg class="w-8 h-8 text-warm-400"><!-- Icon --></svg>
  </div>
  
  <!-- Heading -->
  <h3 class="text-lg font-semibold text-ink mb-2">
    {heading}
  </h3>
  
  <!-- Description -->
  <p class="text-warm-600 mb-6 max-w-sm">
    {description}
  </p>
  
  <!-- CTA Button -->
  <button class="btn-primary-emerald">
    {cta_text}
  </button>
</div>
```

**Props:**
- `icon` - SVG icon to display
- `heading` - Main heading text (text-ink, font-semibold, text-lg)
- `description` - Supporting text (text-warm-600, max-w-sm)
- `cta_text` - Button label
- `cta_action` - Button click handler

**Usage Examples:**
- No connected merchants yet
- No search results found
- No favorites added yet
- No transactions in history

---

### 2. Merchant Card Component (`merchant-card.html`)

**Purpose:** Display merchant with connection status, buying power, and actions

**Variants:**
- `connected` - Shows buying power, connected badge, favorite star
- `available` - Shows "Connect Account" CTA
- `disconnected` - Shows "Reconnect" warning

**Data Attributes:**
```html
data-variant="connected|available|disconnected"
data-favorited="true|false"
data-buying-power="low|medium|high"
data-merchant-id="{uuid}"
data-merchant-name="{name}"
data-merchant-domain="{domain}"
```

#### Connected Variant

**Layout (Mobile):**
```
┌─────────────────────────────────────────────┐
│ [Logo]  Merchant Name              [★]      │
│         merchantdomain.com                  │
│                                             │
│         ● Connected    •  High Buying Power │
└─────────────────────────────────────────────┘
```

**Layout (Desktop - adds hover states):**
- Hover: border changes to indigo-200, subtle lift
- Favorite star always visible (not just on hover)
- Cursor: pointer (entire card is clickable)

**Tap/Click Behavior:**
- Opens history view filtered to this merchant
- Shows all transactions (snagged items) from this merchant
- Uses existing history-card component
- Mobile: New screen or drawer
- Desktop: Could be same screen with filtered view or modal

**Structure:**
```html
<div class="merchant-card" data-variant="connected" data-favorited="false">
  <!-- Card Container -->
  <div class="flex items-center gap-4 p-4 bg-white border border-warm-200 rounded-lg hover:border-indigo-200 transition-colors">
    
    <!-- Merchant Logo -->
    <div class="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-warm-100">
      <img src="{logo_url}" alt="{merchant_name}" class="w-full h-full object-cover">
      <!-- If no logo: Use existing avatar component with merchant initials -->
      <!-- Example: Target → "T" in colored circle, Whole Foods → "WF" -->
    </div>
    
    <!-- Merchant Info -->
    <div class="flex-1 min-w-0">
      <!-- Name & Domain -->
      <div class="flex items-start justify-between gap-2 mb-1">
        <div class="flex-1 min-w-0">
          <h3 class="text-base font-semibold text-ink truncate">{merchant_name}</h3>
          <p class="text-sm text-warm-500 truncate">{merchant_domain}</p>
        </div>
        <!-- Favorite Star -->
        <button class="favorite-toggle flex-shrink-0 w-6 h-6 text-warm-300 hover:text-orange-500" aria-label="Toggle favorite">
          <svg><!-- Star icon - filled if favorited --></svg>
        </button>
      </div>
      
      <!-- Status & Buying Power -->
      <div class="flex items-center gap-3 text-sm">
        <!-- Connected Badge -->
        <div class="flex items-center gap-1.5 text-emerald-600">
          <div class="w-2 h-2 rounded-full bg-emerald-600"></div>
          <span class="font-medium">Connected</span>
        </div>
        
        <!-- Buying Power Indicator -->
        <div class="flex items-center gap-1.5 text-warm-600">
          <svg class="w-4 h-4"><!-- Lightning bolt or similar --></svg>
          <span class="buying-power-high">High Buying Power</span>
        </div>
      </div>
    </div>
  </div>
</div>
```

**Buying Power Indicator:**
- `low` - text-warm-600, warning-style icon
- `medium` - text-indigo-600, moderate icon
- `high` - text-emerald-600, success-style icon

**Favorited State:**
- Star icon filled with orange-500
- Does NOT change buying power logic (backend handles this)

#### Available Variant

**Layout:**
```
┌─────────────────────────────────────────────┐
│ [Logo]  Merchant Name                       │
│         merchantdomain.com                  │
│                                             │
│                       [Connect Account]     │
└─────────────────────────────────────────────┘
```

**Structure:**
```html
<div class="merchant-card" data-variant="available">
  <div class="flex items-center gap-4 p-4 bg-white border border-warm-200 rounded-lg hover:border-indigo-200 transition-colors">
    
    <!-- Logo -->
    <div class="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-warm-100">
      <img src="{logo_url}" alt="{merchant_name}">
    </div>
    
    <!-- Info & CTA -->
    <div class="flex-1 min-w-0 flex items-center justify-between gap-4">
      <div class="flex-1 min-w-0">
        <h3 class="text-base font-semibold text-ink truncate">{merchant_name}</h3>
        <p class="text-sm text-warm-500 truncate">{merchant_domain}</p>
      </div>
      
      <!-- Connect CTA -->
      <button class="btn-primary-emerald flex-shrink-0">
        Connect Account
      </button>
    </div>
  </div>
</div>
```

**On Click:**
- Mobile: Opens bottom sheet with OTP flow
- Desktop: Opens modal with OTP flow

#### Disconnected Variant

**When to Show:**
- Connection authentication expired
- Merchant requires re-authentication for fraud prevention
- Connection error needs shopper attention

**Layout:**
```
┌─────────────────────────────────────────────┐
│ [Logo]  Merchant Name                       │
│         merchantdomain.com                  │
│                                             │
│         ⚠ Reconnection Required  [Reconnect]│
└─────────────────────────────────────────────┘
```

**Structure:**
```html
<div class="merchant-card" data-variant="disconnected">
  <div class="flex items-center gap-4 p-4 bg-white border border-orange-200 rounded-lg">
    
    <!-- Logo (slightly faded) -->
    <div class="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-warm-100 opacity-75">
      <img src="{logo_url}" alt="{merchant_name}">
    </div>
    
    <!-- Info & Warning -->
    <div class="flex-1 min-w-0">
      <h3 class="text-base font-semibold text-ink truncate">{merchant_name}</h3>
      <p class="text-sm text-warm-500 truncate mb-2">{merchant_domain}</p>
      
      <div class="flex items-center justify-between gap-4">
        <!-- Warning Badge -->
        <div class="flex items-center gap-1.5 text-orange-600 text-sm">
          <svg class="w-4 h-4"><!-- Alert icon --></svg>
          <span class="font-medium">Reconnection Required</span>
        </div>
        
        <!-- Reconnect Button -->
        <button class="btn-secondary-indigo text-sm">
          Reconnect
        </button>
      </div>
    </div>
  </div>
</div>
```

**On Click "Reconnect":**
- Same OTP flow as initial connection
- Pre-fills email from existing connection

---

### 3. Buying Power Indicator Component

**Purpose:** Visual representation of low/medium/high buying power tiers using battery metaphor

**Design:**
```html
<!-- Low Buying Power -->
<div class="flex items-center gap-1.5 text-warm-600">
  <svg class="w-4 h-4"><!-- Battery icon ~20% filled --></svg>
  <span>Low Buying Power</span>
</div>

<!-- Medium Buying Power -->
<div class="flex items-center gap-1.5 text-indigo-600">
  <svg class="w-4 h-4"><!-- Battery icon ~60% filled --></svg>
  <span>Medium Buying Power</span>
</div>

<!-- High Buying Power -->
<div class="flex items-center gap-1.5 text-emerald-600">
  <svg class="w-4 h-4"><!-- Battery icon ~90% filled --></svg>
  <span>High Buying Power</span>
</div>
```

**Battery Icon Specifications:**
- Outline: Current color (warm-600, indigo-600, or emerald-600)
- Fill: Matches outline color with 20%/60%/90% fill
- Size: 16×16px (w-4 h-4)
- Style: Rounded rectangle with terminal on right side

---

## Merchants Screen Layout

### Mobile Layout

```
┌─────────────────────────────────────────┐
│ [S Logo] Saltwyk              [Profile] │ ← Top Nav
├─────────────────────────────────────────┤
│                                         │
│ My Merchants                            │
│ Connect rewards accounts to unlock      │
│ buying power                            │
│                                         │
│ ┌─────────────────────────────────────┐ │
│ │ 🔍 Search merchants...              │ │
│ └─────────────────────────────────────┘ │
│                                         │
│ Connected  ★ Favorites  Available       │ ← Filter Tabs
│ ─────────                               │
│                                         │
│ [Merchant Card - Connected]             │
│ [Merchant Card - Connected]             │
│ [Merchant Card - Disconnected]          │
│                                         │
├─────────────────────────────────────────┤
│ Dashboard  Merchants  Wishlist Profile  │ ← Bottom Nav
└─────────────────────────────────────────┘
```

**Filter Tabs:**
- Mobile: Horizontal scroll if needed
- Active tab: text-indigo-700 font-semibold + 2px bottom border (indigo-500)
- Inactive: text-warm-600 font-medium

**Filter Behavior:**
- "Connected" - Shows only merchants with active connections
- "★ Favorites" - Shows favorited merchants (any connection status)
- "Available" - Shows merchants on network, not yet connected

### Desktop Layout

```
┌─────────────────────────────────────────────────────────────┐
│ [S] Dashboard  Merchants  Wishlist            [Profile ▼]   │ ← Top Nav (indigo underline on active)
├─────────────────────────────────────────────────────────────┤
│                                                             │
│         My Merchants                                        │
│         Connect rewards accounts to unlock buying power     │
│                                                             │
│         ┌─────────────────────────────────────────────────┐ │
│         │ 🔍 Search merchants...                          │ │
│         └─────────────────────────────────────────────────┘ │
│                                                             │
│         Connected    ★ Favorites    Available               │ ← Filter Tabs
│         ─────────                                           │
│                                                             │
│         [Merchant Card - Connected]                         │
│         [Merchant Card - Connected]                         │
│         [Merchant Card - Disconnected]                      │
│         [Merchant Card - Connected]                         │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Desktop-specific behaviors:**
- Cards show hover states (border → indigo-200, subtle shadow)
- Profile menu in top-right (context switcher component)
- No bottom nav (desktop uses top nav only)

---

## User Flows

### Flow 1: First-Time Visit (No Merchants Connected)

**Mobile:**
1. Shopper taps "Merchants" in bottom nav
2. Screen loads with header + search + filter tabs
3. Shows empty state:
   - Icon: Link/connection icon in warm-100 circle
   - Heading: "No connected merchants yet"
   - Description: "Connect your first rewards account to start shopping with points"
   - CTA: "Connect Your First Merchant" (emerald button)
4. Tap CTA → Opens merchant search (see Flow 3)

**Desktop:**
- Same flow, modal instead of bottom sheet

### Flow 2: Browse Connected Merchants

**Starting State:**
- "Connected" tab active by default
- Shows list of merchant cards (connected variant)
- Sorted by: Most recently synced (or alphabetical)

**Actions:**
1. **View buying power** - Each card shows low/medium/high indicator
2. **Toggle favorite** - Tap star icon
   - Star fills with orange-500 (or unfills if removing)
   - No toast notification (MVP: visual feedback only)
   - Backend: Mark merchant as favorited
3. **Tap merchant card** - Opens history view filtered to this merchant
4. **Handle disconnected** - Card shows "Reconnection Required"
   - Tap "Reconnect" → Opens OTP flow (see Flow 4)

**Filter Switching:**
- Tap "★ Favorites" → Shows only favorited merchants
- Tap "Available" → Shows merchants on network, not connected

### Flow 3: Search & Connect New Merchant

**Step 1: Initiate Search**
- Tap search bar
- Keyboard opens
- Type merchant name or domain
  - "target"
  - "sephora.com"
  - "whole foods"

**Autocomplete Behavior:**
- Shows suggestions as you type (after 2+ characters)
- Suggestions appear below search bar as dropdown/list
- Tapping suggestion populates search and shows results
- Backend provides autocomplete endpoint

**Step 2: Search Results**
- Results appear as list of merchant cards (available variant)
- Each shows:
  - Merchant logo
  - Merchant name
  - Domain
  - "Connect Account" button (emerald)

**Step 3: No Results**
- Empty state:
  - Icon: Search icon
  - Heading: "No merchants found"
  - Description: "We couldn't find any merchants matching '{query}'. Try a different name or domain."
  - CTA: "Clear Search"

**Step 4: Connect Merchant**
- Tap "Connect Account" → Opens OTP flow (see Flow 4)

### Flow 4: OTP Verification Flow (Merchant Connection)

**Trigger:** Tapping "Connect Account" or "Reconnect" on merchant card

**Delivery Method:** Email or phone (backend determines based on shopper's preference/merchant requirements)

**Critical Note:** The user experience is IDENTICAL whether code is sent via email or SMS. Only the delivery mechanism differs. The UI does not need variants.

#### Mobile: Bottom Sheet

**Step 1: Email Entry**

Bottom sheet slides up (height: 50vh):
```
┌─────────────────────────────────────────┐
│           [Drag Handle]                 │
│                                         │
│ [Target Logo]                           │
│                                         │
│ Connect Your Target Rewards             │
│ Enter the email for your rewards account│
│                                         │
│ ┌─────────────────────────────────────┐ │
│ │ Email Address                       │ │
│ │ you@example.com                     │ │
│ └─────────────────────────────────────┘ │
│                                         │
│ We'll send a verification code to       │
│ confirm your account                    │
│                                         │
│ [Cancel]              [Send Code]       │
│                                         │
└─────────────────────────────────────────┘
```

**Validation:**
- Email format checked on blur
- Error state: border-magenta-500 + error text below input
- "Send Code" disabled until valid email

**On Submit:**
- Loading state on "Send Code" button
- Backend: Look up merchant account by email, send OTP
- Sheet transitions to Step 2

**Step 2: OTP Code Entry**

Sheet updates (same height, content swaps):
```
┌─────────────────────────────────────────┐
│           [Drag Handle]                 │
│                                         │
│ Check your email                        │
│ We sent a 6-digit code to               │
│ you@example.com                         │
│ (or phone number if SMS delivery)       │
│                                         │
│ ┌──┐ ┌──┐ ┌──┐ ┌──┐ ┌──┐ ┌──┐         │
│ │  │ │  │ │  │ │  │ │  │ │  │         │
│ └──┘ └──┘ └──┘ └──┘ └──┘ └──┘         │
│                                         │
│ Didn't receive it? [Resend Code]       │
│                                         │
│ [Cancel]                                │
│                                         │
└─────────────────────────────────────────┘
```

**OTP Input Behavior:**
- 6 single-digit boxes (48×56px each)
- Auto-focus on first box
- Auto-advance on digit entry
- Auto-submit when all 6 filled
- Error state: All boxes get red border + shake animation
  - Error message: "Invalid code. Please try again."

**Resend Code:**
- Disabled for 30 seconds after initial send
- Shows countdown: "Resend Code (28s)"
- After 30s: "Resend Code" becomes active link

**On Verification Success:**
- Sheet dismisses
- Toast appears: "Target connected!" (emerald success toast)
- Merchant card updates to connected variant
- Buying power calculated in background

**On Verification Failure:**
- Error message under OTP boxes
- Boxes reset (cleared)
- Can retry 3 times before requiring new code

#### Desktop: Modal

Same flow as mobile, but:
- Modal size: `md` (500px width)
- No drag handle
- Close button (X) in top-right
- Otherwise identical UI and behavior

---

## Empty States

### No Connected Merchants
- Icon: Link icon in warm-100 circle
- Heading: "No connected merchants yet"
- Description: "Connect your first rewards account to start shopping with points"
- CTA: "Connect Your First Merchant"

### No Favorites
- Icon: Star icon in warm-100 circle
- Heading: "No favorite merchants yet"
- Description: "Star merchants to protect their points from being used, even when expiring"
- CTA: "Browse Merchants"

### No Search Results
- Icon: Search icon in warm-100 circle
- Heading: "No merchants found"
- Description: "We couldn't find any merchants matching '{query}'. Try a different name or domain."
- CTA: "Clear Search"

### Connection Error
- Shows on merchant card as disconnected variant
- Toast on reconnection attempt failure:
  - Type: Error (magenta)
  - Message: "Unable to connect. Please try again."

---

## Design System Compliance

### Colors

**Primary Actions (Emerald):**
- "Connect Account" button: bg-emerald-500
- "Send Code" button: bg-emerald-500
- Connected status dot: bg-emerald-600
- Success toasts: emerald

**Interactive Elements (Indigo):**
- Active filter tab: text-indigo-700, border-indigo-500
- "Reconnect" button: border-indigo-500, text-indigo-600
- Card hover: border-indigo-200
- Medium buying power: text-indigo-600

**Favorites (Orange):**
- Filled star: text-orange-500
- Star hover: hover:text-orange-500

**Warnings (Orange):**
- "Reconnection Required" badge: text-orange-600
- Disconnected card border: border-orange-200

**Errors (Magenta):**
- Invalid email input: border-magenta-500
- Invalid OTP: border-magenta-500
- Error toasts: magenta

**Neutral (Warm):**
- Inactive text: text-warm-600, text-warm-500, text-warm-400
- Default borders: border-warm-200
- Empty state icons: bg-warm-100, text-warm-400

**Text (Ink):**
- Headings: text-ink
- Body text: text-warm-600

**Backgrounds:**
- Page: bg-ledger
- Cards: bg-white

### Typography

**Headings:**
- Screen title: text-2xl font-bold text-ink
- Card merchant name: text-base font-semibold text-ink
- OTP heading: text-lg font-semibold text-ink

**Body:**
- Description: text-warm-600 text-base
- Domain: text-sm text-warm-500
- Status labels: text-sm font-medium

**Buttons:**
- Primary: text-sm font-semibold
- Secondary: text-sm font-medium

### Spacing

**Card Padding:** p-4 (16px all sides)  
**Card Gap (logo to content):** gap-4 (16px)  
**Stack Gap (cards):** space-y-3 (12px between cards)  
**Header Padding:** px-6 py-8  
**Bottom Nav Height:** h-16 (64px)  
**Top Nav Height:** h-14 (56px)

### Touch Targets

**Minimum:** 44×44px (iOS HIG)  
**Preferred:** 48×48px  
**Bottom nav items:** 64px height

### Threads

**Merchants screen thread:**
- Position: Top edge, full-bleed
- Gradient: Fresh (cyan → lime)
- Height: 3px

---

## Technical Requirements

### Backend API Expectations

**Endpoints Needed:**

1. **GET /api/v1/merchants**
   - Query params: `status=connected|available`, `search={query}`, `favorited=true`
   - Response: Array of merchant objects

2. **GET /api/v1/merchants/:id**
   - Response: Single merchant with connection details

3. **POST /api/v1/merchants/:id/connect**
   - Body: `{email: "user@example.com"}`
   - Response: `{otp_session_id: "uuid"}`

4. **POST /api/v1/merchants/:id/verify**
   - Body: `{otp_session_id: "uuid", code: "123456"}`
   - Response: `{success: true, connection_id: "uuid"}`

5. **POST /api/v1/merchants/:id/favorite**
   - Body: `{favorited: true|false}`
   - Response: `{success: true}`

6. **GET /api/v1/merchants/search**
   - Query params: `q={query}`
   - Response: Array of merchant objects (available only)

### Frontend State Management

**Local State:**
- Active filter tab (connected|favorites|available)
- Search query string
- OTP flow state (email entry → code entry → success)
- Loading states (search, connection, verification)

**Server State (cache/query):**
- Connected merchants list
- Favorited merchants list
- Available merchants list
- Search results

### Real-time Updates

**Toast Notifications:**
- Connection success: "Target connected!"
- Reconnection needed: "Target requires reconnection"
- Connection failed: "Unable to connect. Please try again."

**Visual Feedback Only (No Toast):**
- Favorite toggled: Star fills/unfills with orange-500

**Background Sync:**
- After successful connection, trigger buying power calculation
- Update merchant card with buying power indicator once calculated

---

## Success Metrics

**Engagement:**
- % of shoppers with 1+ merchant connected (target: 80%+)
- % of shoppers with 3+ merchants connected (target: 50%+)
- Average merchants per shopper (target: 5+)
- % of shoppers using search (vs scrolling available list)

**Connection Flow:**
- Email entry → OTP send success rate (target: 95%+)
- OTP verification success rate (target: 85%+)
- Time to connect first merchant (target: <2 minutes)
- Connection abandonment rate (target: <30%)

**Favorites Feature:**
- % of shoppers using favorites (target: 40%+)
- Average favorited merchants per shopper (target: 2-3)

**Reconnection:**
- % of disconnected merchants successfully reconnected (target: 70%+)
- Time to notice disconnection (via shopper or system prompt)

**Search:**
- Search usage rate (% of sessions using search)
- Search success rate (query → connection)
- Top searched merchants (identify expansion opportunities)

---

## Resolved Decisions

All key decisions have been made and incorporated into this specification:

### User Experience Decisions:

✅ **Favorites Feature:** Yes - prevents point usage even when expiring  
✅ **Categories:** No - search by name/domain only (millions of merchants in backend DB)  
✅ **Technical Details:** Hide - only show reconnection when needed  
✅ **Bulk Connection:** No - one at a time for MVP  
✅ **Coming Soon Status:** No - merchants are on network or not  
✅ **OAuth:** No - phone OTP exists, email OTP to be built  
✅ **Vote Counts:** No visible counts for MVP  
✅ **Search Scope:** Merchant name or domain name  
✅ **Balance Display:** Never - only buying power tiers (low/medium/high)  
✅ **Component Structure:** Single merchant-card with variants

### Design Decisions:

✅ **Buying Power Indicator:** Battery metaphor (20%/60%/90% filled states)  
✅ **Merchant Card Tap:** Opens history view filtered to that merchant  
✅ **Logo Fallback:** Use existing avatar component with merchant initials  
✅ **OTP Delivery:** Email and SMS have identical UX (only delivery differs)  
✅ **Search Behavior:** Show autocomplete suggestions as you type  
✅ **Favoriting Feedback:** Visual only (star fill/unfill), no toast notification

### Technical Decisions:

✅ **OTP Component:** Adapt existing checkout OTP for merchant connection  
✅ **Backend:** Millions of merchants from Shopify/WooCommerce/BigCommerce/Magento  
✅ **Autocomplete:** Requires backend autocomplete endpoint  
✅ **History Integration:** Reuse existing history-card component

---

## Related Documentation

**User Flows:**
- `new-shopper-checkout-flow.md` - OTP verification pattern (phone)
- `returning-shopper-checkout-flow.md` - Multi-program allocation (references merchant connections)

**Component Dependencies:**
- `wishlist-item.html` - Similar variant pattern
- `merchant-avatar-row.html` - Shows merchant logos in groups
- `buying-power-card.html` - Displays aggregate buying power
- `history-card.html` - Shows transaction history

**Design System:**
- `/components/modals/index.html` - Modal system
- `/components/context-switcher/index.html` - Bottom sheet pattern
- `/components/toasts/index.html` - Toast notifications
- `/components/buttons/index.html` - Button hierarchy
- `/components/inputs/index.html` - Input validation
- `/components/avatars/index.html` - Avatar system

**Product Context:**
- Merchant connection enables rewards commerce transactions
- Favorites override expiration-based point usage in allocation engine
- Buying power aggregates across all connected merchants
- Reconnection preserves shopper convenience while maintaining security

---

## Implementation Order

### Phase 1: Foundation Components
1. Empty State component (`empty-state.html`) - 30 min
2. Buying Power Indicator design decision + implementation - 30 min
3. OTP component variant for merchant connection - 1 hour

### Phase 2: Merchant Card
1. Merchant Card - Connected variant - 1 hour
2. Merchant Card - Available variant - 30 min
3. Merchant Card - Disconnected variant - 30 min
4. Favorite toggle functionality - 30 min

### Phase 3: Merchants Screen
1. Screen layout (header, search, filters) - 1 hour
2. Filter tab functionality - 30 min
3. Search integration - 1 hour
4. Empty states (all variants) - 30 min

### Phase 4: OTP Flow
1. Email entry screen (bottom sheet + modal) - 1 hour
2. OTP code entry screen - 1 hour
3. Success/error handling - 30 min
4. Toast notifications - 30 min

**Total Estimated Time:** 10 hours

---

## Next Steps

**Status:** ✅ Specification approved and ready for implementation

### Build Order:

**Phase 1: Foundation Components** (2 hours)
1. Empty State component (`empty-state.html`) - 30 min
2. Buying Power Indicator with battery design - 30 min
3. OTP component merchant connection variant - 1 hour

**Phase 2: Merchant Card** (2.5 hours)
1. Merchant Card - Connected variant (with tap → history) - 1.5 hours
2. Merchant Card - Available variant - 30 min
3. Merchant Card - Disconnected variant - 30 min

**Phase 3: Merchants Screen** (3 hours)
1. Screen layout (header, search with autocomplete, filters) - 1.5 hours
2. Filter tab functionality - 30 min
3. Search integration with autocomplete - 1 hour

**Phase 4: Integration** (1 hour)
1. Empty states (all variants) - 30 min
2. Toast notifications - 15 min
3. History view integration (filtered by merchant) - 15 min

**Total Estimated Time:** 8.5 hours

### Claude Code Prompts Ready:

Once you say "let's build it," I'll generate prompts for:
1. `empty-state.html` - Reusable empty state component
2. `merchant-card.html` - Card with three variants
3. `merchants.html` - Complete screen with search/filters
4. OTP merchant connection flow adaptation

---

**This specification is complete and approved for implementation.**
