# Merchant Context Switcher Architecture - Investigation Report

**Date:** 2026-01-19
**Status:** Investigation Complete
**Purpose:** Document existing patterns for designing the merchant-side context switcher

---

## Section 1: Shopper Context Switcher (Existing)

### Component Overview

| Attribute | Value |
|-----------|-------|
| **Component** | Profile Dropdown |
| **Location** | `/shopper/profile/profile-dropdown.html` |
| **Spec Document** | `/docs/profile-context-switcher-spec.md` |
| **Reference Implementation** | `/core/components/context-switcher/index.html` |
| **Purpose** | Switch between Shopper Passport and Merchant Dashboard contexts |

### Visual States

**State A: Shopper Only**
- Shows "Shopping" context with cyan icon (`bg-cyan-100`, `text-cyan-600`)
- Stats: "X merchants connected • $XXX"
- Growth CTA: "Use Saltwyk for Business" (prominent, bordered card)
- Menu items: Personal Settings, Sign Out

**State B: Professional Only**
- Shows company name + role with emerald icon (`bg-emerald-500/20`, `text-emerald-400`)
- Growth CTA: "Shop with Points"
- Menu items: Personal Settings, Sign Out

**State C: Both Profiles**
- Shows current context (Shopping or Work)
- "Switch to [Other]" section with company/context preview
- Click anywhere in switch section triggers instant transition
- No interstitial modal

### Key Patterns

```
Trigger:        Click profile avatar in top nav
Container:      280px width, white bg, 12px border-radius, shadow-lg
Padding:        8px container, 12px cards
Transition:     200ms CSS animation, no loading spinners
Icons:          Wallet (shopper/indigo), Building (merchant/emerald)
```

**Click Behavior:**
1. User clicks profile avatar → Dropdown opens
2. Click "Switch Context" → Dropdown closes instantly
3. Sidebar theme transitions (light ↔ dark)
4. URL changes (`/passport/...` ↔ `/dashboard/...`)
5. Content loads seamlessly

**Visual Treatment:**
- Shopping context: Bright Opal (light sidebar, cyan accents)
- Work context: Fire Opal (dark sidebar, emerald accents)

---

## Section 2: Merchant Navigation Context (Existing)

### Sidebar Structure

**Dark Sidebar (Merchant Dashboard)**
```
Location:       /merchant/screens/dashboard.html
Width:          240px
Background:     intaglio-900
Borders:        intaglio-700
```

**Sidebar Sections:**
1. **Logo Area** (64px height) - Brand identity + divider
2. **Navigation Items** - Dashboard, Transactions, Settlements, Settings
3. **User Area** (bottom) - Avatar, name, role

**Active State Styling:**
- Background: `indigo-500/15%`
- Text: `indigo-300`
- Left border: 3px solid `indigo-400`

### Header / Top Bar

**Current Implementation:**
- No persistent top nav in merchant dashboard screens
- Thread gradient at top of content area (Cool thread: cyan → magenta)
- Page header with title + subtitle inline with content

**Where Context Switcher Would Live:**

| Option | Location | Notes |
|--------|----------|-------|
| **A** | Top of sidebar (below logo) | Matches spec pattern - "Context Indicator" |
| **B** | User area (bottom of sidebar) | Integrated with profile avatar |
| **C** | Top nav (if added) | Would require adding top nav to merchant screens |

**Recommendation:** Option A - Top of sidebar below logo, matching the spec's "Context Indicator" pattern.

### Mobile Patterns

From spec:
- Bottom sheet instead of dropdown
- Slide up animation from bottom
- 48px minimum touch targets
- Max height: 60vh
- Drag handle: 4px × 32px

---

## Section 3: Multi-Merchant Patterns (Existing)

### Multi-Organization Switcher - FULLY DESIGNED

**Location:** `/core/components/context-switcher/index.html` (Section 7)

**Key Features:**
```
Section Label:  "YOUR ORGANIZATIONS"
Avatar:         32px, org logo or initials (bg varies by index)
Name:           14px, font-weight 600
Role Badge:     Admin/Viewer/Editor (10px, uppercase)
Active State:   Checkmark icon + indigo-50 background
Search:         Appears if >5 organizations
Add Action:     "Add organization" link at bottom
```

**Role Badge Styles:**
- Admin: `indigo-100` bg, `indigo-600` text
- Viewer: `warm-100` bg, `warm-500` text

### Decision: Where Does Company Switching Happen?

From spec (`profile-context-switcher-spec.md:371-375`):

> **Decision needed:** Handle in dropdown or dashboard?
>
> **Recommendation:** Option B (dashboard handles it)
> - Profile dropdown shows "Professional (3 companies)"
> - Dashboard has company selector
> - Keeps dropdown simpler

**Current spec position:**
- Profile dropdown → Role switching (shopper ↔ merchant)
- Dashboard → Company/organization switching (within merchant context)

### Edge Cases Documented

| Scenario | Handling |
|----------|----------|
| Consultant with 3+ merchants | Multi-org picker in dashboard header |
| Agency managing 10+ merchants | Search appears in org picker |
| First time seeing both contexts | "NEW" badge, tooltip on first switch |

---

## Section 4: Gaps & Questions

### What Exists (Settled Patterns)

- ✅ **Profile dropdown** - Full spec + implementation for all 3 states
- ✅ **Context indicator** - Light/dark variants for sidebar
- ✅ **Visual transition** - 200ms CSS, no loading spinners
- ✅ **Multi-org picker** - Full component spec with role badges
- ✅ **Mobile bottom sheet** - Spec for mobile context switching
- ✅ **Accessibility** - ARIA patterns, keyboard navigation
- ✅ **Icons** - Wallet (shopper), Building (merchant)
- ✅ **Color system** - Indigo (shopper), Emerald (merchant)

### What's Missing (Needs Design)

- ❌ **Merchant-side profile dropdown** - How does dropdown look IN merchant context?
  - Does it show "Switch to Shopping"?
  - Where does org picker appear if multiple merchants?
  - Is it dark-themed to match sidebar?

- ❌ **Context indicator placement** - Where exactly in merchant sidebar?
  - Spec shows it at top, but merchant dashboard doesn't have it yet
  - Need to add to `/merchant/screens/dashboard.html`

- ❌ **Merchant-to-merchant switching** - When user has 3+ merchant affiliations:
  - Is there a separate org picker?
  - Does it appear in sidebar or top header?
  - What's the trigger/entry point?

- ❌ **"Back to Shopping" flow** - From merchant dashboard:
  - Is it in profile dropdown?
  - Is there a persistent shortcut in sidebar?
  - What URL does it go to?

- ❌ **Sandbox mode indicator** - For testing/demo environments:
  - Spec mentions `context-icon-sandbox` (indigo-100, indigo-600)
  - How does this appear in merchant dashboard?

### Open Questions

| Question | Options | Recommendation |
|----------|---------|----------------|
| **Where does org picker live?** | A) Profile dropdown B) Sidebar below logo C) Dashboard header | B or C - Keep profile dropdown simple |
| **Is merchant dropdown dark-themed?** | A) Yes, match sidebar B) No, keep white | A - Visual consistency |
| **How to show "You're in Merchant mode"?** | A) Context indicator only B) Sidebar color only C) Both | C - Redundant reinforcement |
| **Multiple merchant shortcut?** | A) In dropdown B) Separate sidebar component C) Both | Depends on frequency of switching |

---

## Summary: Components to Build

### Priority 1: Merchant Context Indicator
- Add to sidebar (below logo)
- Dark variant (already spec'd)
- Shows: Company name + "Merchant" label
- Clickable → Opens context menu

### Priority 2: Merchant Profile Dropdown
- Triggered from: Profile avatar (sidebar bottom) OR context indicator
- Contents:
  - Current merchant context
  - "Switch to Shopping" (if has shopper profile)
  - Organization picker (if multiple merchants)
  - Personal Settings
  - Sign Out
- Theme: Dark to match sidebar

### Priority 3: Organization Picker (if multi-merchant)
- Decision: Inline in dropdown OR separate component
- Show current org + list of others
- Role badges (Admin/Viewer)
- Search if 5+

---

## File References

| File | Purpose |
|------|---------|
| `/docs/profile-context-switcher-spec.md` | Primary design spec |
| `/core/components/context-switcher/index.html` | Reference implementation |
| `/shopper/profile/profile-dropdown.html` | Shopper dropdown implementation |
| `/merchant/screens/dashboard.html` | Current merchant dashboard (needs context indicator) |
| `/docs/core-navigation-spec.md` | Navigation system patterns |

---

## Next Steps

1. **Confirm org picker location** - Dropdown vs. dashboard header
2. **Design merchant profile dropdown** - Dark variant for merchant context
3. **Add context indicator to merchant dashboard** - Update `/merchant/screens/dashboard.html`
4. **Define "Back to Shopping" flow** - Entry point + destination
5. **Build components** - Following existing pattern library
