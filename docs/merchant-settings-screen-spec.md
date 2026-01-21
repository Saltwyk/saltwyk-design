# Merchant Settings Screen - Design Specification

**Last Updated:** 2026-01-20  
**Status:** Design Specification - Ready for Implementation  
**Owner:** Tela

---

## Overview

The Settings screen provides comprehensive account management for merchants at app.saltwyk.com. It presents as a full-page interface with tabbed navigation across six core sections, enabling merchants to manage their business identity, financial configuration, platform integrations, team members, preferences, and support access.

**URL Pattern:** `app.saltwyk.com/settings` or `app.saltwyk.com/settings/[section]`

**Access:** Click "Settings" from left navigation (bottom area)

---

## Page Layout Structure

### Full Page Layout (Option A)

```
┌─ Left Nav (240px) ─┬─ Content Area (remaining width) ────────────────────────┐
│                    │                                                          │
│  [Logo]            │  Settings                                               │
│  [Status Badge]    │  Manage your merchant account                           │
│                    │                                                          │
│  DASHBOARD         │  ┌──────────────────────────────────────────────────┐  │
│  • Home            │  │ Account │ Finance │ Apps │ Team │ Prefs │ Support │  │
│  • Apps            │  └──────────────────────────────────────────────────┘  │
│  • Transactions    │  ─────────────────────────────────────────────────────  │
│  • Clearing Balance│                                                          │
│                    │  [Active Section Content]                               │
│  ─────             │                                                          │
│  ⚙️ Settings ← active                                                        │
│  🆘 Support        │  Business Name                                          │
└────────────────────│  Kitsch                                                 │
                     │                                                          │
                     │  Business Email                                         │
                     │  contact@kitsch.com                                     │
                     │                                                          │
                     │  [Section-specific forms and content]                   │
                     │                                                          │
                     └──────────────────────────────────────────────────────────┘
```

**Key Characteristics:**
- Left nav remains visible with "Settings" active
- Settings uses full content area width
- Page header with title and subtitle
- Horizontal tab navigation
- Content scrolls vertically within section
- Tab state persists (URL-based: `/settings/finance`)

---

## Page Header

### Visual Design

```
Settings
Manage your merchant account
```

**Specs:**
- Title: "Settings"
  - Font: Fraunces (display)
  - Size: 36px (text-4xl)
  - Weight: 700
  - Color: `hsl(var(--ink))`
- Subtitle: "Manage your merchant account"
  - Font: Inter (body)
  - Size: 16px (text-base)
  - Weight: 400
  - Color: `hsl(var(--warm-600))`
- Padding: 32px 40px 24px
- Border-bottom: 1px solid `hsl(var(--warm-200))`
- Background: `hsl(var(--page-bg))` (warm-50)

---

## Tab Navigation

### Horizontal Tabs

```
┌──────────┬─────────┬──────┬──────┬───────────┬─────────┐
│ Account  │ Finance │ Apps │ Team │ Preferences │ Support │
└──────────┴─────────┴──────┴──────┴───────────┴─────────┘
────────────────────────────────────────────────────────────
        ↑ Active tab has bottom border
```

**Tab Structure:**
```html
<nav class="settings-tabs" role="tablist">
  <button role="tab" aria-selected="true" aria-controls="account-panel">
    Account
  </button>
  <button role="tab" aria-selected="false" aria-controls="finance-panel">
    Finance
  </button>
  <!-- etc -->
</nav>
```

**Specs:**

**Tab Container:**
- Padding: 0 40px
- Border-bottom: 2px solid `hsl(var(--warm-200))`
- Background: `hsl(var(--page-bg))`
- Position: Sticky top (if needed)

**Tab Button (Inactive):**
- Height: 48px
- Padding: 0 20px
- Font-size: 14px
- Font-weight: 500
- Color: `hsl(var(--warm-600))`
- Border-bottom: 2px solid transparent
- Cursor: pointer
- Transition: color 150ms, border-color 150ms

**Tab Button (Hover):**
- Color: `hsl(var(--ink))`

**Tab Button (Active):**
- Color: `hsl(var(--ink))`
- Font-weight: 600
- Border-bottom: 2px solid `hsl(var(--emerald-500))`
- Position: relative
- Margin-bottom: -2px (overlaps container border)

**Tab Labels:**
1. Account
2. Finance
3. Apps
4. Team
5. Preferences
6. Support

**Mobile (<768px):**
- Tabs become horizontal scrollable
- Arrows on sides to indicate scroll
- Touch/swipe to navigate
- Active tab scrolls into view

---

## Content Area

### Layout Pattern

**Each section follows this structure:**

```
┌─ Section Content ─────────────────────────────┐
│  Padding: 40px                                │
│                                               │
│  [Section Introduction] (optional)            │
│                                               │
│  ┌─ Subsection Card ────────────────────┐    │
│  │  Title                                │    │
│  │  Description                          │    │
│  │  ─────────────────────────────────    │    │
│  │  [Form fields / content]              │    │
│  │  [Actions]                            │    │
│  └───────────────────────────────────────┘    │
│                                               │
│  ┌─ Subsection Card ────────────────────┐    │
│  │  ...                                  │    │
│  └───────────────────────────────────────┘    │
│                                               │
└───────────────────────────────────────────────┘
```

**Subsection Card:**
- Background: White
- Border: 1px solid `hsl(var(--warm-200))`
- Border-radius: 12px
- Padding: 24px
- Margin-bottom: 24px
- Shadow: None (flat design)

**Card Title:**
- Font-size: 18px (text-lg)
- Font-weight: 600
- Color: `hsl(var(--ink))`
- Margin-bottom: 4px

**Card Description:**
- Font-size: 14px (text-sm)
- Color: `hsl(var(--warm-600))`
- Margin-bottom: 16px

**Divider (within card):**
- Height: 1px
- Background: `hsl(var(--warm-200))`
- Margin: 16px 0

---

## Section 1: Account

**Purpose:** Business identity and verification status

### Business Profile (Read-Only)

```
┌─ Business Profile ────────────────────────┐
│  Your verified business information      │
│  ─────────────────────────────────────    │
│                                           │
│  Business Name                            │
│  Kitsch                           ✓ Verified │
│                                           │
│  Business Address                         │
│  123 Main St, Los Angeles, CA 90012       │
│                                           │
│  Tax ID (EIN)                            │
│  ••-•••4567                              │
│                                           │
│  ℹ️ To update business information,       │
│     contact support                       │
└───────────────────────────────────────────┘
```

### Contact Information (Editable)

```
┌─ Contact Information ─────────────────────┐
│  How we reach you                         │
│  ─────────────────────────────────────    │
│                                           │
│  Business Email                           │
│  [contact@kitsch.com        ]             │
│                                           │
│  Business Phone                           │
│  [+1 (555) 123-4567         ] Verified   │
│  [Change Phone Number]                    │
│                                           │
│  [Save Changes]                           │
└───────────────────────────────────────────┘
```

---

## Section 2: Finance

**Purpose:** Settlement configuration and banking

### Bank Account

```
┌─ Bank Account ────────────────────────────┐
│  Where we send your settlements           │
│  ─────────────────────────────────────    │
│                                           │
│  Account ending in 4892                   │
│  Bank of America                          │
│  Verified via Stripe Connect              │
│                                           │
│  [Update Bank Account]                    │
└───────────────────────────────────────────┘
```

### Settlement Schedule

```
┌─ Settlement Schedule ─────────────────────┐
│  How often we pay you                     │
│  ─────────────────────────────────────    │
│                                           │
│  Current Schedule                         │
│  ○ Daily (every night at 11 PM EST)      │
│  ● Weekly (every Monday at 11 PM EST)    │
│  ○ Minimum Amount ($[____])              │
│                                           │
│  Next settlement: Monday, Jan 27          │
│  Estimated amount: $1,245.99              │
│                                           │
│  [Save Changes]                           │
└───────────────────────────────────────────┘
```

---

## Section 3: Apps

**Purpose:** Platform integrations and sandbox access

### Rewards Platform

```
┌─ Rewards Platform ────────────────────────┐
│  Your loyalty program integration         │
│  ─────────────────────────────────────    │
│                                           │
│  Smile.io Enterprise              ✓ Connected │
│  OAuth verified                            │
│  Last synced: 5 minutes ago               │
│                                           │
│  [Test Connection] [Reconnect] [Change]   │
└───────────────────────────────────────────┘
```

### Commerce Platform

**If Embedded (in Shopify app):**
```
┌─ Commerce Platform ───────────────────────┐
│  Connected via Shopify App        ✓ Active │
│  Store: kitsch.myshopify.com              │
│                                           │
│  You're using Saltwyk within Shopify.     │
│  Platform integration is automatic.        │
└───────────────────────────────────────────┘
```

### Developer Access (Sandbox)

```
┌─ Sandbox Environment ─────────────────────┐
│  Test your integration safely             │
│  ─────────────────────────────────────    │
│                                           │
│  Status: Active                           │
│  Last data refresh: 2 hours ago           │
│                                           │
│  Sandbox URL: try.saltwyk.com             │
│                                           │
│  [Open Sandbox] [Refresh from Production] │
│                                           │
│  ℹ️ Sandbox environment has no real        │
│     settlements or customer emails         │
└───────────────────────────────────────────┘
```

---

## Section 4: Team

**Purpose:** Multi-user account management

### Team Members List

```
┌─ Team Members ────────────────────────────┐
│  Manage who has access to this account   │
│  ─────────────────────────────────────    │
│                                           │
│  sarah@kitsch.com                  Admin │
│  Owner • Joined Jan 15, 2026             │
│                                           │
│  john@kitsch.com                    User │
│  Team Member • Joined Jan 18, 2026       │
│  [Remove]                                 │
│                                           │
│  [Invite Team Member]                     │
└───────────────────────────────────────────┘
```

---

## Section 5: Preferences

**Purpose:** Notification and communication settings

### Notification Settings

```
┌─ Email Notifications ─────────────────────┐
│  Control what emails you receive          │
│  ─────────────────────────────────────    │
│                                           │
│  Transaction Alerts                       │
│  [x] Email me when transactions complete  │
│                                           │
│  Balance Warnings                         │
│  [x] Email me when clearing balance is low│
│                                           │
│  Settlement Receipts                      │
│  [x] Email me when settlements process    │
│                                           │
│  Product & Marketing                      │
│  [ ] Email me about new features and tips │
│                                           │
│  [Save Preferences]                       │
└───────────────────────────────────────────┘
```

---

## Section 6: Support

**Purpose:** Help resources and contact

### Contact Support

```
┌─ Contact Support ─────────────────────────┐
│  Get help from the Saltwyk team           │
│  ─────────────────────────────────────    │
│                                           │
│  📧 Email Support                         │
│  support@saltwyk.com                      │
│  Response time: 1 business day            │
│  [Send Email]                             │
│                                           │
│  💬 Live Chat (Coming Soon)              │
│  Chat with our support team               │
│                                           │
└───────────────────────────────────────────┘
```

### Help Resources

```
┌─ Help Resources ──────────────────────────┐
│  Documentation and guides                 │
│  ─────────────────────────────────────    │
│                                           │
│  📚 Documentation                         │
│  [View Help Center →]                     │
│                                           │
│  📖 API Documentation                     │
│  [View API Docs →]                        │
│                                           │
│  ❓ FAQs                                  │
│  [Browse FAQs →]                          │
│                                           │
└───────────────────────────────────────────┘
```

---

This comprehensive specification provides everything needed to implement the merchant Settings screen with proper layout, interactions, and all six functional sections.
