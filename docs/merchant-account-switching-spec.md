# Merchant Account Switching & Context Management - Design Specification

**Last Updated:** 2026-01-19  
**Status:** Design Specification - Ready for Implementation  
**Owner:** Tela

---

## Overview

This specification defines how merchant users navigate between different contexts (production/sandbox), switch between multiple merchant accounts, and access their shopper profile. The design supports single-merchant users (99% case), multi-merchant consultants/agencies (edge case), and sandbox testing environments.

**Key URLs:**
- Production: `app.saltwyk.com`
- Sandbox: `try.saltwyk.com`
- Shopper: `my.saltwyk.com`

---

## Architecture Principles

### 1. Environment as Tenant

**Sandbox is not a context mode - it's a separate tenant attached to the merchant entity.**

- Production merchant: "Kitsch" at app.saltwyk.com
- Sandbox tenant: "Kitsch (Sandbox)" at try.saltwyk.com
- Enables data refresh: prod → sandbox
- Supports future: Multiple sandboxes for enterprises

### 2. Subdomain Pattern

**Different environments = Different subdomains**

**Rationale:**
- Clear visual distinction (URL bar shows where you are)
- Cookie/session isolation
- Analytics separation
- Future flexibility (staging, demo, enterprise sandboxes)

### 3. Landing Page Rule

**When switching environments/merchants: Always land on Dashboard**

- Production → Sandbox: Land on try.saltwyk.com/dashboard
- Sandbox → Production: Land on app.saltwyk.com/dashboard
- Merchant A → Merchant B: Land on Merchant B dashboard
- Merchant → Shopper: Land on my.saltwyk.com/passport

**Rationale:** Clean slate, clear context, predictable behavior

### 4. Highest Environment Access

**Users land in the highest environment they have access to**

Priority order:
1. Production (if merchant is live)
2. Trial (if merchant is in trial period)
3. Sandbox (if merchant only has sandbox access)

**Rationale:** Logic scales better, guides users to production

---

## Left Navigation Structure

### Fixed Sidebar (240px width, Fire Opal theme)

```
┌─ Sidebar ─────────────────────┐
│  [Saltwyk Logo - 64px]        │
│  ────── (thread line - 2px)   │
│                                │
│  STATUS                        │
│  ↗️ Live                       │ ← Environment badge
│                                │
│  SETUP (if incomplete)         │
│  🛡️ Join Saltwyk              │
│                                │
│  DASHBOARD                     │
│  🏠 Home                       │
│  🔗 Apps                       │ ← NEW
│  📊 Transactions               │
│  💰 Clearing Balance           │
│                                │
│  [Flex spacer]                │
│                                │
│  ────── (divider)             │
│  ⚙️ Settings                   │
│  🆘 Support                    │
└────────────────────────────────┘
```

### Status Badge

**Purpose:** Show current environment (not a control)

**Visual Design:**

**Live (Production):**
```css
background: hsl(var(--emerald-500) / 10%);
border: 1px solid hsl(var(--emerald-500) / 20%);
color: hsl(var(--emerald-400));
icon: ↗️ (or better: rocket/zap)
label: "Live"
```

**Trial (Pre-launch):**
```css
background: hsl(var(--orange-500) / 10%);
border: 1px solid hsl(var(--orange-500) / 20%);
color: hsl(var(--orange-400));
icon: ⏱️ (or better: clock/calendar)
label: "Trial"
```

**Sandbox (Testing):**
```css
background: hsl(var(--orange-400) / 10%);
border: 1px solid hsl(var(--orange-400) / 20%);
color: hsl(var(--orange-300));
icon: 🧪 (or better: flask/test-tube)
label: "Sandbox"
```

**Specs:**
- Height: Auto (min 28px)
- Padding: 6px 12px
- Margin: 0 12px 12px (below logo, above thread line)
- Border-radius: 6px
- Font-size: 11px
- Font-weight: 600
- Text-transform: uppercase
- Letter-spacing: 0.05em
- Not clickable (display only)

### Apps Navigation Item

**Rationale:** Platform positioning - Apps is core to growth strategy

**Future vision:**
- Integration marketplace
- Third-party app ecosystem
- Developer platform

**Current (MVP):** Links to Settings → Apps section

---

## Top-Right Context Switcher

### Location & Trigger

**Position:** Top-right of header area (currently empty in merchant screens)

**Trigger:** Click merchant name dropdown

**Visual (Collapsed):**
```
┌─────────────────┐
│  Kitsch      ▾  │
└─────────────────┘
```

**Specs:**
- Height: 40px
- Padding: 8px 12px
- Background: Transparent (hover: intaglio-800)
- Border: 1px solid intaglio-700
- Border-radius: 8px
- Font-size: 14px
- Font-weight: 600
- Color: warm-100
- Cursor: pointer
- Chevron: 16px, warm-500

### Dropdown Menu (Fire Opal Theme)

**Visual Design:**

```
┌────────────────────────────────┐
│  Current Context               │
│  Kitsch                        │
│  Employee                      │
│                                │
│  ──────────────────────────    │
│                                │
│  Switch to:                    │
│                                │
│  🏢 Liquid Death               │
│     Consultant              →  │
│                                │
│  🏢 Test Merchant              │
│     Developer               →  │
│                                │
│  ──────────────────────────    │
│                                │
│  🛍️ Back to Shopping           │
│     Personal wallet         →  │
│                                │
│  ──────────────────────────    │
│                                │
│  ⚙️ Settings                   │
│                                │
│  🚪 Sign Out                   │
└────────────────────────────────┘
```

**Specs:**
- Width: 280px
- Background: `hsl(var(--intaglio-900))`
- Border: 2px solid `hsl(var(--intaglio-700))`
- Border-radius: 12px
- Shadow: `0 4px 12px rgba(0, 0, 0, 0.4)`
- Padding: 8px (container)
- Position: Absolute, below trigger, align right

**Current Context Card:**
- Background: `hsl(var(--intaglio-800))`
- Border-radius: 8px
- Padding: 12px
- Label: 11px, uppercase, warm-500
- Name: 14px, font-weight 600, warm-100
- Role: 12px, warm-500

**Divider:**
- Height: 1px
- Background: `hsl(var(--intaglio-700))`
- Margin: 8px 0

**Section Labels:**
- Font-size: 11px
- Text-transform: uppercase
- Letter-spacing: 0.12em
- Color: warm-500
- Padding: 8px 12px 4px

**Merchant Items:**
- Padding: 12px
- Border-radius: 8px
- Hover: Background intaglio-800
- Cursor: pointer
- Transition: 150ms ease

**Item Structure:**
- Icon: 32px, building (lucide), emerald-500/20% bg, emerald-400 color
- Name: 14px, font-weight 600, warm-100
- Role badge: 10px, uppercase, font-weight 600
  - Admin: indigo-100 bg, indigo-600 text
  - User: warm-200 bg, warm-600 text
  - Consultant: cyan-100 bg, cyan-600 text
- Arrow: 16px ChevronRight, warm-500

**Back to Shopping:**
- Same structure as merchant items
- Icon: Wallet (lucide), indigo-100 bg, indigo-600 color
- Label: "Back to Shopping"
- Sublabel: "Personal wallet"
- No role badge

**Actions (Settings, Sign Out):**
- Padding: 12px
- Border-radius: 8px
- Hover: Background intaglio-800
- Icons: 16px, warm-400
- Text: 14px, warm-200 (hover: warm-100)

### Single Merchant Variant

**If user has only ONE merchant role:**

```
┌────────────────────────────────┐
│  Current Context               │
│  Kitsch                        │
│  Employee                      │
│                                │
│  ──────────────────────────    │
│                                │
│  🛍️ Back to Shopping           │
│     Personal wallet         →  │
│                                │
│  ──────────────────────────    │
│                                │
│  ⚙️ Settings                   │
│                                │
│  🚪 Sign Out                   │
└────────────────────────────────┘
```

**No "Switch to" section** - goes straight to Shopping/Settings/Sign Out

### Trial State Variant

**When merchant is in trial period:**

```
┌────────────────────────────────┐
│  Current Context               │
│  Kitsch (Trial)                │ ← Shows trial state
│  Employee                      │
│                                │
│  ──────────────────────────    │
│                                │
│  🚀 Go Live                    │ ← Special CTA
│     Complete setup          →  │
│                                │
│  ──────────────────────────    │
│                                │
│  🛍️ Back to Shopping           │
│                                │
│  ──────────────────────────    │
│                                │
│  ⚙️ Settings                   │
│                                │
│  🚪 Sign Out                   │
└────────────────────────────────┘
```

**Go Live CTA:**
- Prominent styling (emerald accent)
- Replaces "Switch to" section
- Links to setup completion flow
- Icon: Rocket (lucide)

---

## Sandbox Switching Pattern

### Access Point: Settings → Apps

**Navigation:**
```
Settings (click from left nav)
  → Apps section
    → Developer Access
      → Sandbox Environment
        → [Open Sandbox] button
```

**Sandbox Environment Card (in Apps):**
```
┌────────────────────────────────┐
│  Sandbox Environment           │
│                                │
│  Status: Active                │
│  Last data refresh: 2 hours ago│
│                                │
│  [Open Sandbox]                │
│  [Refresh from Production]     │
└────────────────────────────────┘
```

**Specs:**
- Background: warm-50
- Border: 1px solid warm-200
- Border-radius: 12px
- Padding: 20px

**Open Sandbox Button:**
- Opens try.saltwyk.com in same tab (full redirect)
- Primary button styling (emerald)

**Refresh from Production:**
- Secondary button styling (outlined)
- Confirmation modal before executing
- Shows progress indicator during refresh

### When IN Sandbox (try.saltwyk.com)

**Visual Indicators:**

**1. Status Badge (left nav):**
```
STATUS
🧪 Sandbox
```
- Amber background/border/text
- Icon: Flask or test-tube

**2. Environment Banner (top of page):**
```
┌────────────────────────────────────────────────────────────┐
│  ⚠️ SANDBOX ENVIRONMENT                                    │
│  You're in testing mode. No real settlements or emails.    │
│                                          [Back to Production] │
└────────────────────────────────────────────────────────────┘
```

**Banner Specs:**
- Height: 48px
- Background: `hsl(var(--orange-500) / 10%)`
- Border-bottom: 2px solid `hsl(var(--orange-500) / 30%)`
- Padding: 12px 24px
- Icon: 20px warning triangle
- Text: 14px, font-weight 500, orange-700
- Button: Secondary style, orange accent

**3. Theme Accent:**
- Sidebar active states: Orange instead of emerald
- Primary buttons: Orange instead of emerald
- Status indicators: Orange instead of emerald

**4. Top-Right Context Switcher:**
```
[Kitsch (Sandbox) ▾]
  ↓
┌────────────────────────────────┐
│  Current Context               │
│  Kitsch (Sandbox)              │
│  Testing Environment           │
│                                │
│  ──────────────────────────    │
│                                │
│  ← Back to Production          │ ← Prominent return option
│                                │
│  ──────────────────────────    │
│                                │
│  🛍️ Back to Shopping           │
│                                │
│  ──────────────────────────    │
│                                │
│  ⚙️ Settings                   │
│                                │
│  🚪 Sign Out                   │
└────────────────────────────────┘
```

**Back to Production:**
- Prominent placement (first option)
- Left arrow icon
- Links to app.saltwyk.com/dashboard
- Primary action styling (subtle orange emphasis)

### Sandbox Limitations

**What doesn't work in sandbox:**
- ❌ Real settlements to bank account
- ❌ Email notifications to customers
- ❌ Real rewards platform API calls (mocked)
- ❌ Real commerce platform webhooks (mocked)

**What does work:**
- ✅ All UI functionality
- ✅ Transaction simulation
- ✅ Data refresh from production
- ✅ Integration testing
- ✅ Team member access
- ✅ Settings management

**Future optional:** Mock settlement provider, test email delivery

---

## Environment Banners

### Banner System (Top of Content Area)

**Purpose:** Communicate important account states

**Variants:**

**1. Sandbox (Informational):**
```
⚠️ SANDBOX ENVIRONMENT
You're in testing mode. No real settlements or emails.
                                    [Back to Production]
```
- Background: orange-500/10%
- Border: orange-500/30%
- Icon: Warning triangle
- Text: orange-700
- Always visible in sandbox

**2. Trial (Action Required):**
```
⏱️ TRIAL PERIOD
You have 14 days remaining. Complete setup to go live.
                                    [Complete Setup →]
```
- Background: orange-500/15%
- Border: orange-500/40%
- Icon: Clock
- Text: orange-800
- CTA: Emerald button
- Dismissible: No (always visible during trial)

**3. Setup Incomplete (Action Required):**
```
🛡️ SETUP INCOMPLETE
Complete 2 more steps to start accepting payments.
                                    [Continue Setup →]
```
- Background: indigo-500/10%
- Border: indigo-500/30%
- Icon: Shield
- Text: indigo-700
- CTA: Emerald button
- Dismissible: No

**4. Verification Pending (Informational):**
```
⏳ VERIFICATION IN PROGRESS
Your business verification is being reviewed. This typically takes 1-2 business days.
                                    [Learn More]
```
- Background: cyan-500/10%
- Border: cyan-500/20%
- Icon: Clock
- Text: cyan-700
- Dismissible: Yes

**Banner Specs:**
- Height: Auto (min 48px)
- Padding: 12px 24px
- Position: Top of content area, below header
- Width: Full content width
- Border-bottom: 2px solid (matching color)
- Icon: 20px
- Text: 14px, font-weight 500
- Button: 14px, padding 8px 16px

**Stacking Rules:**
- Multiple banners stack vertically
- Priority order (top to bottom):
  1. Sandbox (if in sandbox)
  2. Trial (if in trial period)
  3. Setup Incomplete (if onboarding not done)
  4. Verification Pending (if applicable)

**Mobile Adaptation:**
- Button moves below text on mobile (<640px)
- Icon size: 18px
- Text: 13px
- Padding: 10px 16px

---

## Context Persistence

### Last-Used Merchant (Global)

**Rule:** Remember last-accessed merchant per user, globally across devices

**Storage:** Server-side user preference

**Behavior:**
```
Sarah works at Joe Coffee
  → Switches to Liquid Death
  → Logs out
  → Logs back in
  → Loads Liquid Death dashboard (last used)
```

**Scope:** Per-user, not per-device

### Environment Persistence

**Rule:** Production is default, sandbox is explicit choice

**Behavior:**
```
Working in Production (app.saltwyk.com)
  → Click "Open Sandbox"
  → Working in Sandbox (try.saltwyk.com)
  → Logs out
  → Logs back in
  → Loads Production (default)
```

**Rationale:** Prevent accidental sandbox work, encourage production usage

---

## Interaction Patterns

### Switching Between Merchants

**Flow:**
```
1. Click merchant name (top-right)
2. Dropdown opens
3. Click "Liquid Death"
4. Dropdown closes immediately
5. Page transitions to Liquid Death dashboard
6. No page reload (SPA navigation)
7. Data loads for new merchant context
```

**Timing:**
- Dropdown open: 150ms
- Context switch: <500ms (optimistic UI)
- Data load: 1-2 seconds (with loading indicators)

### Switching to Shopper

**Flow:**
```
1. Click merchant name (top-right)
2. Dropdown opens
3. Click "Back to Shopping"
4. Redirect to my.saltwyk.com/passport
5. Full page load (different domain)
```

**Timing:**
- Redirect: Immediate (no confirmation)
- Load: Standard page load time

### Switching to Sandbox

**Flow:**
```
1. Navigate to Settings
2. Click Apps
3. Find "Sandbox Environment"
4. Click [Open Sandbox]
5. Redirect to try.saltwyk.com/dashboard
6. Environment banner appears
7. Theme shifts to amber accents
```

**Timing:**
- Redirect: Immediate (no confirmation)
- Visual transition: <300ms
- Dashboard load: 1-2 seconds

### Returning from Sandbox

**Flow:**
```
1. Click "Back to Production" (banner or dropdown)
2. Redirect to app.saltwyk.com/dashboard
3. Environment banner disappears
4. Theme returns to emerald accents
```

**Timing:**
- Redirect: Immediate
- Visual transition: <300ms

---

## Mobile Adaptation

### Left Navigation

**Mobile (<768px):**
- Becomes drawer/overlay
- Slides in from left
- Full-width overlay
- Close button (top-right)
- Same structure as desktop
- Touch targets: min 48px

### Top-Right Context Switcher

**Mobile (<768px):**
- Dropdown becomes bottom sheet
- Slides up from bottom
- Max height: 60vh
- Drag handle: 4px × 32px
- Scrollable if content exceeds height
- Backdrop: rgba(0,0,0,0.5)
- Swipe down or tap backdrop to close

### Environment Banners

**Mobile (<768px):**
- Full-width
- Text wraps
- Button stacks below text
- Icon: 18px (smaller)
- Padding: 10px 16px (tighter)

---

## Accessibility

### Keyboard Navigation

**Context Switcher:**
- Tab: Focus merchant name trigger
- Enter/Space: Open dropdown
- Arrow Down: Navigate to first item
- Arrow Up/Down: Navigate between items
- Enter: Select item
- Escape: Close dropdown

**Focus Management:**
- Trap focus when dropdown open
- Return focus to trigger on close
- Clear focus indicators (indigo-400 ring)

### ARIA Labels

```html
<button 
  aria-label="Switch merchant account"
  aria-expanded="false"
  aria-haspopup="menu">
  Kitsch
</button>

<div role="menu" aria-label="Account switcher">
  <div role="group" aria-label="Current context">...</div>
  <div role="group" aria-label="Switch to">
    <button role="menuitem">Liquid Death</button>
  </div>
</div>
```

### Screen Reader Announcements

**On context switch:**
```
"Switched to Liquid Death. Loading dashboard."
```

**On environment change:**
```
"Entered sandbox environment. Testing mode active."
```

---

## Design Decisions

### Why Top-Right for Context Switcher?

**Rationale:** Consistency with shopper experience. "Personal actions must always be in the same location" - top-right is where shoppers switch contexts, should be where merchants do too.

### Why Subdomain for Sandbox?

**Rationale:** Clear visual distinction (URL bar), cookie isolation, future flexibility for multiple sandboxes, easier to support enterprise use cases.

### Why Status Badge Instead of Control?

**Rationale:** Environment is determined by URL (app vs try), not a setting to toggle. Badge is informational, reinforces where you are. Actual switching happens via Settings → Apps or context switcher.

### Why Apps in Main Nav?

**Rationale:** Platform positioning - Apps is core to growth strategy. Future vision: integration marketplace, third-party ecosystem. Elevating Apps signals its importance.

### Why Amber for Sandbox?

**Rationale:** Orange/amber signals "caution" or "testing" without being alarming (red). Distinct from emerald (production) and different enough to be noticeable. Matches "warning" color semantics.

### Why Environment Banner?

**Rationale:** Redundant reinforcement. Status badge (left nav) + banner (top of page) + theme accent ensures users never forget they're in sandbox. Critical for preventing production mistakes.

---

## Implementation Notes

### Phase 1 (Current)
- ✅ Fix left navigation structure
- ✅ Add status badge (Live only)
- ✅ Remove context indicator from sidebar

### Phase 2 (Next)
- Top-right context switcher (Fire Opal dropdown)
- Single merchant variant
- Multi-merchant variant
- Back to Shopping link

### Phase 3 (After Phase 2)
- Sandbox environment card (Settings → Apps)
- Open Sandbox flow
- Sandbox environment indicators (badge, banner, theme)
- Back to Production flow

### Phase 4 (Final)
- Trial state variant (Go Live CTA)
- Environment banner system
- Banner stacking logic
- Mobile adaptations

---

## Related Specifications

- Settings Screen Structure (separate spec)
- Shopper Context Switcher (reference: `/shopper/profile/profile-dropdown.html`)
- Fire Opal Design System (reference: `/docs/fire-opal-spec.md`)

---

## Open Implementation Questions

1. **Icon selection:** Need better icons than placeholders (↗️, 🧪, etc.)
2. **Animation timing:** Confirm 150ms dropdown, 300ms theme transition
3. **Loading states:** How to show loading during merchant switch?
4. **Error handling:** What if merchant switch fails?
5. **Data refresh:** How long does prod → sandbox refresh take?
