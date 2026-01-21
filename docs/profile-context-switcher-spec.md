# Profile & Context Switcher - Frontend Design Specification

**Last Updated:** 2026-01-17  
**Status:** Draft - Founder Review  
**Owner:** Tela

---

## Design Goals

1. **"We see you"** - Users feel recognized as whole humans, not just shoppers or employees
2. **Intentional transitions** - Switching contexts feels purposeful, not accidental
3. **Growth lever** - Clear CTAs for shoppers to add professional profile (key conversion point)
4. **No interstitials** - Switching is instant, no loading modals

---

## Core Components

### 1. Profile Dropdown Menu (Primary Pattern)

**Location:** Click profile avatar/name in top nav

**States:**
- **Shopper Only** - Show shopping context + CTA to add professional
- **Professional Only** - Show work context + CTA to add shopping
- **Both** - Show current context + option to switch

---

## Profile Dropdown - Shopper Only

**Current Implementation Reference:** Screenshot shows this pattern

```
┌─────────────────────────────────────────┐
│ +15551234567                            │
│                                         │
│ Current Role                            │
│ 🛍️  Shopping                            │
│ 0 merchants connected                   │
│                                         │
│ 💼 Use Saltwyk for Business             │
│ Manage merchant accounts                │
│ Learn more →                            │
│                                         │
│ ⚙️  Personal Settings                   │
│                                         │
│ 🚪 Sign Out                             │
└─────────────────────────────────────────┘
```

**Visual Design:**

**Header:**
- Phone number (masked): `+1 (555) 123-4567`
- Or email if that's primary identifier
- Text: `text-sm text-warm-600`

**Current Role Section:**
- Label: "Current Role"
- Icon + Context: `🛍️ Shopping` (or `💼 Work`)
- Stats: "5 merchants connected" or "Liquid Death • Marketing Manager"
- Background: `bg-warm-50` (light) or `bg-intaglio-800` (dark)
- Padding: `p-3 rounded-lg`
- Text: Shopping = `text-ink`, Work = `text-warm-100`

**Growth CTA Section (KEY!):**
- Icon: `💼` (briefcase) for business OR `🛍️` (wallet) for shopping
- **Shopper seeing this:** "Use Saltwyk for Business"
- **Professional seeing this:** "Use Saltwyk for Shopping"  
- Description: One-liner value prop
- Link: "Learn more →" in `text-indigo-600`
- Clickable area opens modal/flow to add other profile
- Background: `border border-warm-200` (subtle outline, not filled)
- Padding: `p-3 rounded-lg`

**Settings Link:**
- Icon: `⚙️`
- Text: "Personal Settings"
- Goes to `/settings` (the screen we just designed)

**Sign Out:**
- Icon: `🚪`
- Text: "Sign Out"
- Destructive action (confirmation needed)

---

## Profile Dropdown - Both Profiles

**When user has both shopper AND professional:**

```
┌─────────────────────────────────────────┐
│ +15551234567                            │
│ sarah@liquiddeath.com                   │
│                                         │
│ Current Context                         │
│ 🛍️  Shopping                            │
│ 5 merchants connected • $847            │
│                                         │
│ ────────────────────────────────        │
│                                         │
│ Switch to Work                          │
│ 💼 Liquid Death                         │
│ Marketing Manager                       │
│ [Switch Context →]                      │
│                                         │
│ ⚙️  Personal Settings                   │
│                                         │
│ 🚪 Sign Out                             │
└─────────────────────────────────────────┘
```

**Current Context Section:**
- Shows active context with stats
- Visual: `bg-warm-50` (shopping) or `bg-intaglio-800` (work)
- Padded card: `p-3 rounded-lg`

**Divider:**
- Horizontal line: `border-t border-warm-200`
- Small padding: `my-2`

**Switch Context Section:**
- Label: "Switch to Work" or "Switch to Shopping"
- Icon + Company/Context name
- Your role (if professional)
- Button: "Switch Context →" in `text-indigo-600 font-medium`
- Hover: `hover:bg-warm-50` entire section
- Click anywhere to switch (not just button)

**No interstitial modal** - Click → Instant transition:
1. Dropdown closes
2. Sidebar theme changes (light ↔ dark)
3. URL updates (`/passport/...` ↔ `/dashboard/...`)
4. Content loads
5. Done

---

## Profile Dropdown - Professional Only

```
┌─────────────────────────────────────────┐
│ sarah@liquiddeath.com                   │
│ +15551234567                            │
│                                         │
│ Current Role                            │
│ 💼 Liquid Death                         │
│ Marketing Manager                       │
│                                         │
│ 🛍️  Shop with Points                    │
│ Use your loyalty rewards                │
│ Connect accounts →                      │
│                                         │
│ ⚙️  Personal Settings                   │
│                                         │
│ 🚪 Sign Out                             │
└─────────────────────────────────────────┘
```

**Current Role:**
- Dark card styling: `bg-intaglio-800`
- Company name + your role
- Building/briefcase icon

**Growth CTA (Shopping):**
- Wallet icon
- "Shop with Points"
- "Use your loyalty rewards"
- "Connect accounts →"
- Opens shopper activation flow

---

## Context Switching - Visual Transition

**No modal, just smooth UI transition:**

### Switching Shopping → Work

**Before (Shopping Context):**
- Sidebar: Light background (`bg-warm-50`)
- Fresh thread: Cyan → Lime gradient
- Navigation: Light icons
- URL: `/passport/merchants`

**Transition (200ms):**
- Sidebar background crossfade: `bg-warm-50` → `bg-intaglio-800`
- Text colors update: `text-ink` → `text-warm-100`
- Icon colors update: cyan accent → emerald accent
- URL changes: `/passport/merchants` → `/dashboard/overview`

**After (Work Context):**
- Sidebar: Dark background (`bg-intaglio-800`)
- Fresh thread: ?? (need to define merchant gradient)
- Navigation: Dark icons
- URL: `/dashboard/overview`

### Switching Work → Shopping

Same transition in reverse.

**Animation:**
- CSS transitions on all color properties: `transition-colors duration-200`
- Smooth, not jarring
- No loading spinners
- No "Switching..." text

---

## Context Indicator in Sidebar

**Shows current context at top of sidebar (always visible)**

### Shopping Context (Light Sidebar)

```
┌─────────────────────────────────────┐
│  ╭────╮                              │
│  │ 🛍️ │  Shopping                    │
│  ╰────╯  5 merchants • $847          │
└─────────────────────────────────────┘
```

**Visual:**
- Icon: 32px circle, `bg-cyan-100 text-cyan-600`
- Label: `text-sm font-semibold text-ink`
- Stats: `text-xs text-warm-500`
- Background: `bg-warm-50 border border-warm-200 rounded-lg p-3`

### Work Context (Dark Sidebar)

```
┌─────────────────────────────────────┐
│  ╭────╮                              │
│  │ 💼 │  Liquid Death                │
│  ╰────╯  Marketing Manager           │
└─────────────────────────────────────┘
```

**Visual:**
- Icon: 32px circle, `bg-emerald-500/20 text-emerald-400`
- Label: `text-sm font-semibold text-warm-100`
- Role: `text-xs text-warm-400`
- Background: `bg-intaglio-800 border border-intaglio-700 rounded-lg p-3`

**NOT CLICKABLE** - This is just an indicator. To switch, use profile dropdown.

---

## Growth Lever Strategy

### Primary Path: Shopper → Add Professional

**Trigger Points:**
1. **Profile dropdown** - See "Use Saltwyk for Business" CTA
2. **Banner in Shopping context** - "Work for a merchant? Connect your business profile"
3. **After connecting 3+ merchants** - "Join merchants like Liquid Death on the platform"

**Flow:**
1. Click "Use Saltwyk for Business"
2. Modal: "Connect Your Work Profile"
3. Explain value: "Manage your merchant dashboard"
4. Input: Email (work email)
5. Send verification link
6. Verify email → Creates professional profile
7. Next login: Profile dropdown shows both contexts

### Secondary Path: Professional → Add Shopping

**Trigger Points:**
1. **Profile dropdown** - See "Shop with Points" CTA
2. **Banner in Dashboard** - "Shop with your rewards too"

**Flow:**
1. Click "Shop with Points"
2. Modal: "Activate Shopping"
3. Explain value: "Use loyalty points like money"
4. Input: Phone number (if not already on file)
5. OTP verification
6. Creates shopper profile
7. Next login: Profile dropdown shows both contexts

---

## Personal Settings Screen

**Navigation:** From profile dropdown → "Personal Settings"

**This is the Settings screen we already designed**, but renamed:
- **Was:** "Account Settings"
- **Now:** "Personal Settings"

**Contains:**
- Account tab (profile, security, danger zone)
- Communication tab (emails, notifications)

**URL:** `/settings`

---

## Mobile Behavior

### Profile Dropdown on Mobile

**Same dropdown structure**, but:
- Full width (not fixed 280px)
- Touch-friendly padding (`p-4` not `p-3`)
- Larger tap targets (min 48px height)
- Opens from top nav profile avatar

### Context Switch on Mobile

**Same instant transition:**
- No interstitial modal
- Sidebar drawer closes
- Theme transitions
- Content updates
- Bottom nav updates (if shown)

---

## Copy Guidelines

### Context Labels

**Shopping:**
- "Shopping" (not "Shopper Passport" in dropdown - too long)
- Stats: "5 merchants connected • $847"

**Work:**
- Company name (e.g., "Liquid Death")
- Your role (e.g., "Marketing Manager")

### Growth CTAs

**For Shoppers:**
- Headline: "Use Saltwyk for Business"
- Description: "Manage merchant accounts"
- Link: "Learn more →"

**For Professionals:**
- Headline: "Shop with Points"
- Description: "Use your loyalty rewards"
- Link: "Connect accounts →"

### Buttons

- **Switch context:** "Switch Context →" (action-oriented)
- **Settings:** "Personal Settings" (not "Account Settings")
- **Sign out:** "Sign Out" (simple, clear)

---

## Edge Cases

### Multiple Company Affiliations (Consultant)

If professional has 2+ active companies:

**Profile dropdown shows current one:**
```
Current Context
💼 Liquid Death
Marketing Manager
```

**To switch companies:**
- Go to Dashboard
- Company selector in dashboard header
- Or: Profile dropdown could show mini company picker

**Decision needed:** Handle in dropdown or dashboard?

### First Time Seeing Both Contexts

**After adding second profile:**
- Next time they open profile dropdown: See new section
- Small badge: "NEW" next to the new context option
- First click: Brief tooltip: "Switch between shopping and work anytime"
- After first switch: Badge disappears

---

## Visual Design Specifications

### Profile Dropdown

**Container:**
- Width: `280px`
- Padding: `p-2`
- Background: `bg-white`
- Border: `border border-warm-200`
- Shadow: `shadow-lg`
- Border radius: `rounded-xl`

**Header (Contact Info):**
- Text: `text-sm text-warm-600`
- Padding: `px-3 py-2`

**Current Context Card:**
- Background: Light = `bg-warm-50`, Dark = `bg-intaglio-900/50`
- Border: `border border-warm-200` or `border-intaglio-700`
- Padding: `p-3`
- Border radius: `rounded-lg`

**Growth CTA Card:**
- Background: `bg-white`
- Border: `border-2 border-warm-200` (thicker, outline style)
- Padding: `p-3`
- Border radius: `rounded-lg`
- Hover: `hover:border-indigo-200 hover:bg-indigo-50/50`
- Transition: `transition-colors duration-150`

**Switch Context Card:**
- Background: `bg-white`
- Hover: `hover:bg-warm-50`
- Padding: `p-3`
- Border radius: `rounded-lg`
- Cursor: `cursor-pointer`

**Menu Items (Settings, Sign Out):**
- Padding: `px-3 py-2`
- Hover: `hover:bg-warm-50`
- Border radius: `rounded-lg`
- Text: `text-sm text-ink`

**Icons:**
- Size: `w-5 h-5` for menu items
- Size: `w-8 h-8` in circles for context indicators
- Colors: Context-specific (cyan for shopping, emerald for work)

### Sidebar Context Indicator

**Container:**
- Padding: `p-3`
- Border radius: `rounded-lg`
- Not clickable (just indicator)

**Light (Shopping):**
- Background: `bg-warm-50`
- Border: `border border-warm-200`
- Icon bg: `bg-cyan-100`
- Icon color: `text-cyan-600`
- Text: `text-ink`
- Stats: `text-warm-500`

**Dark (Work):**
- Background: `bg-intaglio-800`
- Border: `border border-intaglio-700`
- Icon bg: `bg-emerald-500/20`
- Icon color: `text-emerald-400`
- Text: `text-warm-100`
- Stats: `text-warm-400`

---

## Component Breakdown for Implementation

### 1. Profile Dropdown Component

**Path:** `/components/profile-dropdown/index.html`

**Props:**
- `has_shopper_profile` (boolean)
- `has_professional_profile` (boolean)
- `current_context` ("shopping" | "professional")
- `contact_info` (object: phone, email)
- `shopper_stats` (object: merchants_count, buying_power)
- `professional_info` (object: company_name, role)

**Variants:**
- Shopper only
- Professional only
- Both (with context switch)

### 2. Context Indicator Component

**Path:** `/components/context-indicator/index.html`

**Props:**
- `context` ("shopping" | "professional")
- `label` (string: "Shopping" or company name)
- `subtitle` (string: stats or role)

**Variants:**
- Light (shopping)
- Dark (professional)

### 3. Context Switch Behavior

**JavaScript:**
- Click switch context → POST to `/api/v1/person/switch-context`
- Response includes: new JWT, redirect URL
- Update localStorage with new context
- Trigger UI transition (CSS class swap)
- Navigate to new URL

**No modal, no loading spinner** - just instant transition.

---

## User Flows

### Flow 1: Shopper Opens Profile Dropdown

1. In Shopping context (light sidebar)
2. Click profile avatar in top nav
3. Dropdown opens
4. See "Current Role: Shopping"
5. See "Use Saltwyk for Business" CTA
6. See "Personal Settings" link
7. See "Sign Out"

### Flow 2: Shopper Adds Professional Profile

1. Click "Use Saltwyk for Business" in dropdown
2. Modal: "Connect Your Work Profile"
3. Enter work email
4. Verify email via link
5. Professional profile created
6. Next time: Dropdown shows both contexts

### Flow 3: User with Both Profiles Switches

1. In Shopping context
2. Open profile dropdown
3. See "Switch to Work" section with Liquid Death
4. Click anywhere in that section
5. Dropdown closes
6. Sidebar transitions dark
7. Dashboard loads
8. Context indicator updates

### Flow 4: Professional Opens Personal Settings

1. In Work context (dark sidebar)
2. Open profile dropdown
3. Click "Personal Settings"
4. Settings screen opens with Account tab
5. Can edit name, phone, email
6. Can delete account, sign out

---

## Open Questions

### 1. Sidebar Context Indicator - Clickable or Not?

**Option A:** Just an indicator (current spec)
- Not clickable
- To switch, use profile dropdown
- Cleaner mental model

**Option B:** Clickable
- Click → Opens dropdown to switch
- More discoverable?
- But might be confusing (two places to do same thing)

**Recommendation:** Option A (not clickable)

### 2. Multiple Companies - Where to Handle?

**Option A:** In profile dropdown
- Show current company
- Mini picker to switch
- Switch company = reload dashboard

**Option B:** In dashboard header
- Profile dropdown shows "Professional (3 companies)"
- Dashboard has company selector
- Keeps dropdown simpler

**Recommendation:** Option B (dashboard handles it)

### 3. First-Time Switch - Tooltip or Not?

**Option A:** Show tooltip
- "Switch between shopping and work anytime"
- Appears first time they see both contexts
- Dismisses after first interaction

**Option B:** No tooltip
- Design is clear enough
- Don't add noise

**Recommendation:** Option A (helpful for first time)

### 4. Growth CTA Persistence

**When does "Use Saltwyk for Business" CTA disappear?**

**Option A:** Never (always visible)
- Keeps growth lever active
- But clutters dropdown once they have both

**Option B:** After adding profile
- Clean dropdown for dual-role users
- But lose growth lever for re-engagement

**Recommendation:** Option B (remove after activation)

---

## Success Metrics

**Context Switching:**
- % of dual-role users who switch contexts weekly
- Average switches per user per session
- Time from dropdown open to switch completion

**Growth Conversion:**
- % of shoppers who click "Use Saltwyk for Business"
- % who complete professional profile activation
- % of professionals who click "Shop with Points"
- % who complete shopper profile activation

**User Sentiment:**
- Post-switch satisfaction (does transition feel smooth?)
- Do users understand they have both contexts?
- Do users feel "seen" as whole people?

---

## Design System Compliance

**Colors:**
- Shopping context: Cyan accent (`cyan-600`)
- Professional context: Emerald accent (`emerald-500`)
- Indigo: Interactive elements (`indigo-600` links)
- Warm: Neutral text/borders

**Typography:**
- Context label: `text-sm font-semibold`
- Stats/role: `text-xs`
- Contact info: `text-sm text-warm-600`
- Links: `text-sm font-medium text-indigo-600`

**Spacing:**
- Dropdown padding: `p-2`
- Card padding: `p-3`
- Menu item padding: `px-3 py-2`

**Fresh Gradient:**
- Shopping: Cyan → Lime (existing)
- Professional: **TODO - Define merchant gradient**

---

## Next Steps

1. ✅ Spec complete
2. **Review with founder** - Confirm dropdown-first approach
3. **Resolve open questions** - Clickable indicator? Company picker location?
4. **Define merchant gradient** - What's the professional thread color?
5. **Build components** - Profile dropdown, context indicator
6. **Test growth CTAs** - Does "Use Saltwyk for Business" convert?

---

**This specification focuses ONLY on frontend design. Backend (person entity, profiles, affiliations) is already architected and built.**
