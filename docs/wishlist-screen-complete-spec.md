# Wishlist Screen Complete Specification

**Product Surface:** Shopper Passport - Wishlist  
**URL:** `my.saltwyk.com/wishlist`  
**Status:** Ready for Implementation  
**Last Updated:** 2026-01-16  
**Owner:** Tela

---

## Overview

The Wishlist screen is where shoppers set earning goals and track progress toward items they want to purchase with rewards. It drives the core behavior loop: Connect merchants → Build buying power → Shop with rewards.

**Purpose:**
- Set shopping goals (add items to wishlist)
- Track progress toward affordability
- Celebrate wins (snag ready items)
- View purchase history
- Access earning pathways when needed

**Key Insight:** This is a goal-setting and motivation surface, not just a list. Every element should drive earning behavior.

---

## Product Context

### Three Earning Pathways (MVP)
Shoppers earn buying power through:
1. **Connect** - Connect more merchants to increase point pools
2. **Shop** - Use shopping agent to earn while buying
3. **Invite** - Refer friends to earn bonus points

These pathways are revealed through the **"Ways to Earn More"** overlay (drawer/modal).

### Wishlist Strategy
- **Adding items = Setting goals** (motivates earning)
- **Ready to Snag = Celebration** (reward moment)
- **Saving For = Progress** (builds anticipation)
- **History = Proof** (social proof of value)

---

## Screen Layout

### Responsive Strategy

**Mobile (<768px):**
- Single column layout
- Bottom navigation visible
- Filters as menu/sheet (not tabs)
- Actions as drawers
- 320px minimum width

**Desktop (≥768px):**
- Two-column grid for wishlist items
- Side navigation visible
- Filters as tabs
- Actions as modals
- Max width 1024px

---

## Component Inventory

### ✅ Existing Components (Use As-Is)
Located in `/components/` and `/products/shopper/components/`:

1. **WishlistItem** - Ready to Snag, Saving For, Photo variant
2. **EmptyState** - Generic empty state component
3. **Modal** - Desktop overlay pattern
4. **Drawer** - Mobile sheet pattern
5. **Button** - Primary (emerald), Secondary (outlined indigo)
6. **Navigation** - Top nav, bottom nav, side nav
7. **ProfileMenu** - Universal person profile component

### 🆕 Components to Build

1. **HistoryCard** - Displays snagged items with transaction info
2. **EarningPathwaysOverlay** - Shows three ways to earn + shopping suggestions
3. **AddItemFlow** - URL input for adding wishlist items (MVP)
4. **FilterMenu** - Mobile filter selection (All/Ready/Saving)

---

## Section 1: Page Header

### Desktop Layout
```
┌────────────────────────────────────────────────────────┐
│ Saltwyk Logo    Dashboard  Merchants  Wishlist    [?] │
└────────────────────────────────────────────────────────┘
```

### Mobile Layout
```
┌────────────────────────────────────────┐
│ ←  My Wishlist              [?]  [+]  │
└────────────────────────────────────────┘
```

**Desktop Header:**
- Saltwyk logo (left)
- Navigation: Dashboard | Merchants | **Wishlist** (active)
- Profile avatar (right) with dropdown menu

**Mobile Header:**
- Back arrow (if came from dashboard)
- Title: "My Wishlist"
- Profile avatar (right)
- Add button [+] (right, before avatar)

**Profile Menu Contents:**
- Name and phone
- Current Role: Shopping (with merchant count)
- Role switcher (if has business role)
- Account Settings
- Sign Out

---

## Section 2: Wishlist Items

### Section Header

**Desktop:**
```
┌─────────────────────────────────────────────────┐
│ Your Wishlist        3 ready • 4 saving    [+]  │
│ ─────────────────────────────────────────────── │
│ [ All ] [ Ready ] [ Saving ]                    │
└─────────────────────────────────────────────────┘
```

**Mobile:**
```
┌──────────────────────────────────────┐
│ Your Wishlist         [Filter ▾] [+] │
│ 3 ready • 4 saving                   │
└──────────────────────────────────────┘
```

**Elements:**
- **Section title:** "Your Wishlist"
- **Count badge:** "3 ready • 4 saving" (or "7 items")
- **Add button:** [+] icon button (opens add item flow)
- **Filter tabs** (desktop): All | Ready | Saving
- **Filter menu** (mobile): "Filter ▾" button opens sheet

### Empty State

When wishlist is empty, show EmptyState component with:

**Icon:** 🎯 (target/goal icon)

**Headline:** "No items in your wishlist yet"

**Description:** "Add items you're working toward. We'll help you earn the points to get them."

**Primary CTA:** "Add Your First Item" (emerald button)

**Secondary action:** "Browse Merchants" (indigo link)

### Filter Behavior

**Three filter states:**
1. **All** - Show all items (Ready + Saving)
2. **Ready** - Only Ready to Snag items
3. **Saving** - Only Saving For items

**Default:** All (show everything)

**Mobile Filter Menu:**
Opens as bottom sheet with three options:
- ◉ All Items (7)
- ○ Ready to Snag (3)
- ○ Saving For (4)

### Wishlist Item Display

**Desktop:**
- Two-column grid
- Cards: 400px max width each
- Gap: 24px between cards
- Ready to Snag items appear first

**Mobile:**
- Single column
- Cards: Full width with 20px padding
- Gap: 16px between cards
- Ready to Snag items appear first

**Card Background:**
- Use **white background** variant (default)
- Clean, consistent appearance
- No gradients (per design decision)

**Card Actions:**

Each card needs:
1. **Primary action:** "Snag It Now!" (Ready) or "Ways to Earn More" (Saving)
2. **Context menu:** ⋮ (three dots) with:
   - Remove from Wishlist
   - Archive (moves to history without snagging)
   - Edit (future: change title, notes)

**Context Menu Implementation:**
- Mobile: Bottom sheet with options
- Desktop: Popover menu

---

## Section 3: History ("Snagged")

### Section Header

```
┌─────────────────────────────────────────────────┐
│ Snagged               2024  Recent              │
└─────────────────────────────────────────────────┘
```

**Elements:**
- **Section title:** "Snagged"
- **Tabs:** 2024 | Recent (or could be: This Year | All Time)

### History Card Component (NEW)

**Purpose:** Display items that were successfully purchased with rewards.

**Visual Design:**

```
┌─────────────────────────────────────────────┐
│  [?]  Apple AirPods Pro        EARNED       │
│       Earned with Target + Sephora  Mar 15  │
└─────────────────────────────────────────────┘
```

**Layout:**
- Product placeholder [?] (48px square, warm-200 background)
- Product title (text-base, font-semibold, ink)
- Merchant combination "Earned with Target + Sephora" (text-sm, warm-600)
- Status badge "EARNED" (emerald, serial caps)
- Date "Mar 15" (text-xs, warm-500)

**Interaction:**
- **Entire card is tappable/clickable**
- Opens transaction detail view (drawer on mobile, modal on desktop)

**Specifications:**

```html
<button class="w-full bg-white rounded-xl border-2 border-warm-200 hover:border-indigo-300 hover:shadow-md p-4 transition-all duration-200 text-left">
  <div class="flex items-center gap-4">
    <!-- Product placeholder -->
    <div class="w-12 h-12 flex-shrink-0 bg-warm-200 rounded-lg flex items-center justify-center">
      <span class="text-xl text-warm-400">?</span>
    </div>
    
    <!-- Content -->
    <div class="flex-1 min-w-0">
      <div class="flex items-start justify-between mb-1">
        <h3 class="text-base font-semibold text-ink">Apple AirPods Pro</h3>
        <span class="serial text-emerald-600 text-[9px] font-bold ml-2 flex-shrink-0">EARNED</span>
      </div>
      <div class="flex items-center justify-between">
        <p class="text-sm text-warm-600">Earned with Target + Sephora</p>
        <span class="text-xs text-warm-500 ml-2 flex-shrink-0">Mar 15</span>
      </div>
    </div>
  </div>
</button>
```

**States:**
- Default: white background, 2px warm border
- Hover: indigo border, shadow-md
- Active/Focus: indigo border, ring

**Mobile vs Desktop:**
- Same design both sizes
- Single column on mobile
- Two-column grid on desktop (matching wishlist items)

---

## Section 4: Transaction Detail View

**Trigger:** Tapping/clicking a History Card

**Display Method:**
- Mobile: Drawer (slides up from bottom)
- Desktop: Modal (centered overlay)

**Note:** Transaction detail modal already exists in merchant dashboard. Reference that implementation for consistency.

**Content Structure:**

**Header:**
- Product title (text-xl, font-bold)
- Close button [×]

**Transaction Info:**
- Order ID: #ORD-984723
- Amount: $110.57
- Date & Time: Mar 15, 2025 • 2:47 PM
- Status: Complete

**Merchants Used:**
- List of merchants whose points were used
- "Sephora Beauty Insider: 8,500 points"
- "Target Circle: 2,100 points"

**Allocation Details:**
- Show which merchant(s) cleared the transaction
- Percentage breakdown if multiple merchants

**Actions:**
- View Receipt (if available)
- Contact Support

---

## Section 5: Add Item Flow

**Trigger:** [+] button in header or "Add Your First Item" in empty state

**Display Method:**
- Mobile: Full-screen sheet or drawer
- Desktop: Modal (centered, ~500px width)

**MVP Implementation: URL Input**

**Content:**

```
┌──────────────────────────────────────┐
│  Add to Wishlist              [×]    │
├──────────────────────────────────────┤
│                                      │
│  Paste a product link                │
│                                      │
│  ┌────────────────────────────────┐ │
│  │ https://sephora.com/spa-gift   │ │
│  └────────────────────────────────┘ │
│                                      │
│  We'll fetch the product details    │
│  and add it to your wishlist.       │
│                                      │
│  [Cancel]  [Add to Wishlist]        │
└──────────────────────────────────────┘
```

**Form Fields:**
1. **URL input** (required)
   - Placeholder: "https://example.com/product"
   - Validation: Must be valid URL
   - Helper text: "We'll fetch the product details"

2. **Optional fields** (future):
   - Custom title override
   - Notes

**Buttons:**
- Cancel (secondary, outlined indigo)
- Add to Wishlist (primary, emerald)

**Behavior:**
- Fetch product metadata from URL (title, image, price)
- If fetch fails, allow manual title entry
- Add to wishlist with "Saving For" status
- Close modal/drawer
- Show success toast: "Added to your wishlist"
- Scroll to newly added item

**Error States:**
- Invalid URL: "Please enter a valid product link"
- Fetch failed: "Couldn't load product details. Add a title manually?"
- Already in wishlist: "This item is already in your wishlist"

---

## Section 6: Earning Pathways Overlay

**Trigger:** "Ways to Earn More" button (on Saving For cards)

**Display Method:**
- Mobile: Drawer (slides up from bottom, ~70% height)
- Desktop: Modal (centered, ~600px width)

**Purpose:** Show shopper how to increase buying power to afford wishlist items.

**Content Structure:**

### Header
```
Ways to Earn More
[Close ×]
```

### Earning Pathways (Three Cards)

**1. Connect Merchants**
```
┌─────────────────────────────────────┐
│  🔗 Connect Merchants                │
│                                     │
│  Link more loyalty programs to      │
│  increase your buying power.        │
│                                     │
│  [Connect Now →]                    │
└─────────────────────────────────────┘
```

**2. Shop with Saltwyk**
```
┌─────────────────────────────────────┐
│  🛍️ Shop with Saltwyk                │
│                                     │
│  Use our shopping agent to earn     │
│  while you buy what you need.       │
│                                     │
│  [Start Shopping →]                 │
└─────────────────────────────────────┘
```

**3. Invite Friends**
```
┌─────────────────────────────────────┐
│  🎁 Invite Friends                   │
│                                     │
│  Earn bonus points when friends     │
│  join and make their first purchase.│
│                                     │
│  [Get Invite Link →]                │
└─────────────────────────────────────┘
```

### Shopping Suggestions Section

**Header:** "Shop to Earn Points"

**Description:** "Based on your wishlist, here are items you can buy to build buying power:"

**Item Cards (2-3 shown):**
```
┌─────────────────────────────────────┐
│  [?] Coffee Beans                   │
│      Starbucks • $12.99             │
│      ~1,200 points earned           │
│      [Shop Now →]                   │
└─────────────────────────────────────┘
```

**Logic for Suggestions:**
- Pull from connected merchants
- Items that would earn points
- Estimate: "$12.99 purchase ≈ 1,200 points"
- Mix of categories (coffee, groceries, essentials)

**CTA Buttons:**
- Connect Now → Goes to merchant connection flow
- Start Shopping → Opens shopping agent
- Get Invite Link → Opens referral sheet/modal
- Shop Now → Deep link to merchant site/app

---

## Section 7: Remove/Archive Actions

**Trigger:** Context menu (⋮) on wishlist card

**Options:**

### Remove from Wishlist
- Immediately removes item
- Show undo toast: "Item removed" with [Undo] action (5 seconds)
- No confirmation dialog (fast action)

### Archive
- Moves to history section with "ARCHIVED" status
- Show toast: "Item archived"
- Appears in history with gray status badge

**Context Menu UI:**

**Mobile (Bottom Sheet):**
```
┌──────────────────────────────────────┐
│  Spa Gift Set                        │
├──────────────────────────────────────┤
│  Remove from Wishlist                │
│  Archive                             │
│  Cancel                              │
└──────────────────────────────────────┘
```

**Desktop (Popover):**
```
┌────────────────────────┐
│  Remove from Wishlist  │
│  Archive               │
└────────────────────────┘
```

---

## Section 8: Navigation Integration

### Bottom Navigation (Mobile Only)

```
┌──────────────────────────────────────┐
│  🏠        🏪        ⭐             │
│  Dashboard Merchants Wishlist       │
└──────────────────────────────────────┘
```

**Three tabs:**
1. Dashboard (home icon)
2. Merchants (store icon)
3. Wishlist (star icon) - **Active state**

**Active state styling:**
- Icon: emerald-600
- Label: emerald-600, font-semibold
- Indicator bar above icon

### Side Navigation (Desktop Only)

Standard passport side nav with:
- Dashboard
- Merchants
- **Wishlist** (active)

---

## User Flows

### Flow 1: First Visit (Empty Wishlist)
1. Land on wishlist page
2. See empty state with goal-setting message
3. Click "Add Your First Item"
4. Paste product URL
5. Saltwyk fetches details
6. Item added as "Saving For"
7. See item card with progress indicator

### Flow 2: Item Becomes Ready
1. Shopper connects more merchants
2. Buying power increases
3. Wishlist item automatically updates from "Saving For" → "Ready to Snag"
4. Card visual updates (emerald button appears)
5. Toast notification: "Spa Gift Set is ready to snag!"

### Flow 3: Snag an Item
1. Tap "Snag It Now!" on Ready card
2. Redirect to merchant checkout with Saltwyk pre-selected
3. Complete purchase
4. Item moves from wishlist → history
5. Appears in "Snagged" section with transaction details

### Flow 4: Need More Buying Power
1. On "Saving For" card, tap "Ways to Earn More"
2. Drawer/modal opens showing three pathways
3. Review shopping suggestions
4. Tap "Connect Now" to add merchants
5. Or tap "Shop Now" to earn through agent
6. Complete action
7. Return to wishlist with updated progress

### Flow 5: View Transaction History
1. Scroll to "Snagged" section
2. Tap history card
3. Drawer/modal opens with full transaction details
4. View which merchants were used
5. See allocation breakdown
6. Close to return to wishlist

---

## Build Order (Recommended Sequence)

### Phase 1: Component Inventory
1. Use Claude Code to audit existing components
2. Verify EmptyState, Modal, Drawer, Button specs
3. Confirm navigation patterns

### Phase 2: New Components
1. **HistoryCard** - Build standalone component spec
2. **FilterMenu** - Mobile sheet with three options
3. Test both in isolation

### Phase 3: Screen Composition (Mobile First)
1. Page header with back arrow, title, actions
2. Wishlist section with filters
3. Empty state (if no items)
4. Wishlist items (single column)
5. History section with cards
6. Bottom navigation

### Phase 4: Desktop Layout
1. Adapt header (horizontal nav)
2. Two-column grid for items
3. Side navigation
4. Filter tabs (not menu)
5. Modals (not drawers)

### Phase 5: Overlays & Flows
1. **Add Item Flow** - URL input modal/drawer
2. **Earning Pathways Overlay** - Three cards + suggestions
3. **Transaction Detail** - Reference merchant implementation
4. **Context Menu** - Remove/archive options

### Phase 6: Polish & Edge Cases
1. Loading states
2. Error states
3. Empty states for filtered views
4. Animations and transitions
5. Mobile responsive refinements

---

## Design System References

### Colors
- **Emerald** (primary CTA): `bg-emerald-500 hover:bg-emerald-600`
- **Indigo** (secondary): `border-2 border-indigo-500 text-indigo-600 hover:bg-indigo-50`
- **Warm** (neutral text): `text-warm-600`, `bg-warm-200`
- **Ink** (headings): `text-ink`

### Typography
- **Headlines:** `font-display` (Fraunces)
- **Body:** `font-sans` (Inter)
- **Status labels:** `.serial` (uppercase, tracked, 11px)

### Spacing
- **Mobile padding:** 20px
- **Desktop padding:** 40px
- **Card gaps:** 16px (mobile), 24px (desktop)
- **Section spacing:** 48px between major sections

### Backgrounds
- **Page:** `bg-ledger` (warm light background)
- **Cards:** `bg-white` (clean, consistent)
- **Surfaces:** `bg-warm-50` (subtle differentiation)

---

## Critical Design Rules

### One Emerald CTA Per Screen? (Special Case)
**Exception:** Wishlist allows multiple emerald "Snag It Now!" buttons because each is an equivalent celebration moment. However:
- Limit emerald to wishlist cards only
- Header actions (Add, Filter) use indigo
- History cards use indigo hover states
- Modal/drawer primary actions can be emerald if they're the main conversion point

### Thread Usage
- **Never use threads on secondary cards**
- Threads only on hero elements (not applicable to wishlist screen)
- All wishlist cards use white background (no gradients per design decision)

### Logo.dev Integration
- Use logo.dev API for merchant branding where applicable
- Fallback to initials with colored circles
- Token should be environment variable

---

## Open Questions for Implementation

1. **Real-time Updates:** How do we notify shoppers when items become "Ready to Snag"?
   - Push notification?
   - In-app toast on next visit?
   - Badge on wishlist tab?

2. **Progress Calculation:** How do we determine % progress for "Saving For" items?
   - Based on current total buying power vs item value?
   - Based on specific merchant balances?
   - Need backend API contract

3. **Shopping Suggestions:** Where do these come from?
   - Curated by Saltwyk?
   - Pulled from merchant APIs?
   - Personalized based on shopping history?

4. **Transaction Details:** What level of detail do we show?
   - Just which merchants were used?
   - Point-by-point breakdown?
   - Link to merchant receipt?

5. **Archive vs History:** Should archived items appear in "Snagged" section?
   - Or separate "Archived" section?
   - Different status badge treatment?

---

## Success Metrics

**Engagement:**
- Wishlist items added per shopper
- Time to first snag after adding item
- Repeat snag rate (do they keep using it?)

**Conversion:**
- "Ways to Earn More" overlay open rate
- Which pathway gets most clicks (Connect/Shop/Invite)
- Conversion from "Saving For" → "Ready to Snag" → "Snagged"

**Retention:**
- Weekly active wishlist users
- Average items per wishlist
- History section engagement (transaction details viewed)

---

## Related Documentation

- **Component Spec:** `/products/shopper/components/wishlist-item.html`
- **User Flows:** `/uploads/returning-shopper-checkout-flow.md`
- **Design System:** `/components/` and `/foundation/`
- **Navigation:** Bottom nav, side nav component specs
- **Profile Menu:** Universal person profile component spec

---

## Next Steps for Claude Code

1. **Component inventory check** - Audit design system components available
2. **Build HistoryCard component** - Standalone spec with mobile/desktop
3. **Build FilterMenu component** - Mobile bottom sheet
4. **Compose wishlist screen** - Mobile first, then desktop
5. **Build Add Item overlay** - URL input flow
6. **Build Earning Pathways overlay** - Three cards + suggestions
7. **Integrate transaction details** - Reference merchant implementation

---

## Notes for Implementation

**Mobile-First Strategy:**
- Build mobile layout completely first
- Then adapt for desktop (not separate builds)
- Use responsive utilities (`lg:`, `md:`)
- Test at 320px, 375px, 768px, 1024px breakpoints

**Component Reuse:**
- Leverage existing WishlistItem component (already perfect)
- Use EmptyState component as-is
- Reference existing Modal/Drawer patterns
- Follow existing navigation conventions

**Iteration Plan:**
- Build screen structure first (layout, sections)
- Add components incrementally
- Test interactions in browser
- Refine responsive behavior
- Polish animations last

**Quality Bar:**
- Every interaction should feel smooth
- No orphaned states (always path forward)
- Clear feedback for all actions
- Consistent with shopper design language (Bright Opal)

---

**This specification is complete and ready for implementation. Good luck with the build!**
