# Merchant Settings & Navigation - Requirements (Corrected)

**Last Updated:** 2026-01-19  
**Status:** Draft - Strategic Requirements  
**Owner:** Tela  
**Context:** Merchant account experience at app.saltwyk.com

---

## Critical Clarifications

**What we're designing:** MERCHANT account management at app.saltwyk.com
- Business operations settings
- Integration management
- Team member management
- Settlement configuration

**What we're NOT designing:** Personal/shopper profile (that's my.saltwyk.com)

---

## Terminology Corrections

| ❌ Wrong | ✅ Correct |
|---------|-----------|
| Loyalty Program | **Rewards Platform** |
| Payout | **Settlement** |
| Clearing Balance | **Clearing Balance** (correct) |

---

## Core Requirements

### 1. Embedded App Support

**Critical constraint:** Must work fully embedded in commerce platforms

**States to support:**
- Embedded in Shopify app
- Embedded in WooCommerce plugin
- Embedded in BigCommerce app
- Standalone (app.saltwyk.com directly)

**Implication:** Commerce platform connection section adapts:
- When embedded in Shopify → Don't show "Connect Shopify" (already connected)
- Standalone → Show connection options for all platforms
- When embedded → OAuth already handled by platform

---

### 2. Settings Access Pattern

**Question for Tela:** When merchant clicks Settings (lower-left nav), how should it present?

**Option A: Full Page**
```
Dashboard → Settings (page navigation)
Content area replaces dashboard content
Uses full layout width
Settings sections as tabs or sidebar
```

**Option B: Overlay Modal**
```
Dashboard (visible behind) → Settings Overlay
Modal covers content with backdrop
Settings sections within modal
Close returns to dashboard
```

**Option C: Drawer (Mobile-style)**
```
Dashboard (visible) → Settings Drawer (slides from right)
Pushes or overlays content
Full-height drawer
Swipe/click to dismiss
```

**Considerations:**
- Settings has substantial content (5+ sections)
- Some flows require multi-step (OAuth reconnection)
- Mobile vs desktop patterns

**Tela's decision needed:** A, B, or C?

---

### 3. Context Switcher Theme

**Question for Tela:** Context switcher theme rules?

**Hypothesis:** Theme follows WHERE you are, not where you came from
- In merchant dashboard → Fire Opal theme (dark)
- In shopper wallet → Bright Opal theme (light)

**Is this correct?**

---

## Merchant Settings Structure (MVP)

### Section 1: Account
**Merchant business identity**
- Business name (read-only after verification)
- Business email
- Business phone number
- Verification status badge

### Section 2: Integrations

**2A: Rewards Platform**
- Current platform (Smile.io, Yotpo, etc.)
- Connection status
- OAuth expiration warning
- Actions: Test Connection | Reconnect | Change Platform

**2B: Commerce Platform**
- **If embedded:** Show "Connected via [Shopify App]" (read-only)
- **If standalone:** Show platform options + OAuth connect
- OAuth refresh/manage for standalone only

**OAuth Flow Design Needed:**
- Reconnection when token expires
- Platform switching (migration scenario)
- Error states and troubleshooting

### Section 3: Settlement
**Bank account and schedule**
- Bank account (masked) - *Uses Stripe Connect*
- Update bank account - *Research Stripe Connect verification flow*
- Settlement schedule - *Depends on Stripe Connect capabilities*

**Note:** Don't over-design schedule options until we know Stripe constraints

### Section 4: Notifications
**Per-merchant email preferences**
- Transaction alerts
- Balance warnings  
- Settlement receipts
- Marketing/product updates

**Scope:** Per-merchant (not global)

### Section 5: Team Management
**Basic multi-user support**
- List team members
- Invite user (email invitation)
- Roles: Admin | User
- Remove team member

**Admin capabilities:**
- Full access to all settings
- Can invite/remove users
- Can manage integrations

**User capabilities:**
- View dashboard, transactions
- Cannot change settings
- Cannot invite users

### Section 6: Support
**Access to help resources**
- Contact support link
- Help documentation
- Status page (system health)

---

## Global Operations (MVP Scope)

**Requirement:** Design for global without overbuilding

**Strategy:** Leverage commerce platform data
- Currency → From commerce platform
- Tax jurisdiction → From commerce platform  
- Locale/language → From commerce platform
- Regional compliance → Defer to post-MVP

**MVP Decisions:**
- Show currency from platform (USD, EUR, GBP, etc.)
- Don't build currency conversion
- Don't build multi-currency settlement
- Don't build region-specific features

**What we DO need:**
- Display amounts in merchant's currency
- Handle currency symbols correctly
- Don't assume USD

---

## Navigation & Access Points

### Lower-Left Menu (Sidebar)

**Confirmed pattern:**
- Settings link at bottom of left nav
- Clicking opens... [Page | Overlay | Drawer - TBD]

**Additional nav needed:**
- Support/Help access point
- Context indicator (top of sidebar - for multi-merchant)

**Structure:**
```
Sidebar:
├─ [Context Indicator]     ← Top
├─ Dashboard
├─ Transactions
├─ Clearing Balance
├─ [Divider]
├─ Setup (if incomplete)
├─ Settings                 ← Bottom area
└─ Support                  ← Bottom area
```

---

## OAuth Flow Design Requirements

**Rewards Platform Reconnection:**
1. User sees "OAuth expires in 3 days" warning
2. Clicks "Reconnect"
3. Opens rewards platform in new window (OAuth)
4. After authorization → Returns to Saltwyk
5. Shows "Connected" confirmation
6. No page reload (seamless)

**Commerce Platform Switching (Standalone only):**
1. User clicks "Change Platform"
2. Warning modal: "This will disconnect [Current]. Continue?"
3. If yes → Platform selection screen
4. Choose platform → OAuth flow
5. Complete → New platform connected

**Error States:**
- OAuth denied → Show error, retry option
- OAuth timeout → Retry with troubleshooting link
- Platform API down → Status indicator, support link

---

## Context Persistence

**Decision:** Remember last-used merchant globally per user
- Sarah switches from Joe Coffee to Liquid Death
- Logs out
- Logs back in → Loads Liquid Death (last used)
- Persists across devices

---

## Design Deliverables Needed

After Tela answers open questions:

1. **Settings Page/Overlay/Drawer Design Spec**
   - Layout pattern
   - Section organization
   - Navigation within settings
   - Mobile adaptation

2. **OAuth Reconnection Flows**
   - Rewards platform reconnection
   - Commerce platform switching (standalone)
   - Error handling patterns

3. **Team Management Interface**
   - User list display
   - Invite flow
   - Role management
   - Remove user confirmation

4. **Context Indicator Component** (if multi-merchant)
   - Placement in sidebar
   - Organization picker
   - "Back to Shopping" link

5. **Support Access Points**
   - Where support link lives
   - Support modal/page pattern
   - Help resources structure

---

## Open Questions for Tela

### Critical Decisions:
1. **Settings presentation:** Page | Overlay | Drawer?
2. **Context switcher theme:** Follows current location (merchant=dark, shopper=light)?

### Research Needed:
3. **Stripe Connect verification:** What's supported for bank updates?
4. **Stripe Connect settlement:** What schedule options are available?

### Design Scope:
5. **OAuth flows:** Full design specs for reconnection + switching?
6. **Team management:** Full UI or just requirements for now?

---

## What's Next

**Immediate:**
- Tela answers open questions above
- Research Stripe Connect capabilities

**Then:**
- Create detailed design spec for Settings (page/overlay/drawer)
- Design OAuth reconnection flows
- Design team management interface
- Design support access pattern

**Goal:** Complete merchant settings design spec for implementation
