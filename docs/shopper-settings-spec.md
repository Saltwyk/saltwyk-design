# Shopper Settings Specification

**Last Updated:** 2026-01-17  
**Status:** Draft - Founder Review Required  
**Owner:** Tela

---

## Overview

**Purpose:** Enable shoppers to manage their account identity, security, email addresses, and communication preferences.

**Scope:** Settings screen with vertical tab navigation for two sections:
1. **Account** - Profile, security, danger zone
2. **Communication** - Primary email selection, email management, notifications

**Key Insight:** Phone is primary auth (OTP). Email is for failover and Saltwyk communications. Every email must be verified via OTP once (applies to all merchants using that email).

**Critical Difference:** No payment methods, no billing, no subscriptions. Shoppers use points, not money.

**Component Strategy:**
- ✅ **Reuse:** Vertical tabs, forms, OTP, merchant card pattern, modals
- 🔨 **Build:** Accordion (email groups), inline status badges, countdown timer, type-to-confirm modal

---

## Core User Jobs

**Account Tab:**
1. **Update name** - "I got married, need to change my last name"
2. **Change phone** - "New phone number for OTP login"
3. **Delete account** - "I'm done with Saltwyk"
4. **Sign out** - "Log out of this device"

**Communication Tab:**
5. **Set primary email** - "Which email should Saltwyk use?"
6. **Verify email** - "Need to verify this new email"
7. **View all emails** - "Which emails am I using across merchants?"
8. **Control notifications** - "Stop marketing emails"

**Note:** Merchant-specific actions (change email for Target, disconnect) live in Merchant Detail View when tapping merchant card.

---

## Settings Structure

### Vertical Tabs (Sidebar Navigation)

**Component:** `/components/tabs/index.html` - Vertical variant

**Two Tabs:**
1. **Account** (default active)
2. **Communication**

**Desktop Layout:** Sidebar (200px) + Content area (flex-1)  
**Mobile Layout:** Horizontal tabs above content

---

## Account Tab

### Section 1: Profile Information

**Purpose:** Basic identity (name only, no email)

**Fields:**
- First Name (editable)
- Last Name (editable)

**Component References:**
- Input: `/components/inputs/index.html` - `.input .input-md`
- Button: `/components/buttons/index.html` - `.btn .btn-primary`

**Layout:**
```html
<div class="bg-white border border-warm-200 rounded-lg p-6">
  <div class="flex items-center gap-2 mb-1">
    <svg class="w-5 h-5 text-warm-400"><!-- User icon --></svg>
    <h2 class="text-xl font-semibold text-ink">Profile Information</h2>
  </div>
  <p class="text-warm-600 text-sm mb-6">Update your personal details</p>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <div>
      <label class="block text-sm font-medium text-ink mb-2">First Name</label>
      <input type="text" value="John" class="input input-md">
    </div>
    <div>
      <label class="block text-sm font-medium text-ink mb-2">Last Name</label>
      <input type="text" value="Doe" class="input input-md">
    </div>
  </div>
  
  <button class="btn btn-primary">Save Changes</button>
</div>
```

**Flow:**
1. Edit name fields
2. Click "Save Changes"
3. Success toast: "Profile updated"

---

### Section 2: Security

**Purpose:** Phone number for authentication (primary OTP)

**Fields:**
- Phone Number (verified, display only)
- Change Phone action

**Component References:**
- Phone display: Pattern from `/products/shopper/merchant-management/merchants-screen.html`
- Status badge: Build inline (emerald "Verified")
- Button: `.btn .btn-secondary`
- Modal: `/components/modals/index.html` - `.modal-md`
- OTP: Reuse from `merchants-screen.html` - `.otp-input`

**Layout:**
```html
<div class="bg-white border border-warm-200 rounded-lg p-6">
  <div class="flex items-center gap-2 mb-1">
    <svg class="w-5 h-5 text-warm-400"><!-- Lock icon --></svg>
    <h2 class="text-xl font-semibold text-ink">Security</h2>
  </div>
  <p class="text-warm-600 text-sm mb-6">Manage your login and authentication</p>
  
  <div class="mb-4">
    <label class="block text-sm font-medium text-ink mb-2">Phone Number</label>
    <div class="flex items-center justify-between p-3 bg-warm-50 border border-warm-200 rounded-lg">
      <div class="flex items-center gap-2">
        <span class="text-ink">+15551234567</span>
        <span class="inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-50 text-emerald-700 text-xs font-medium rounded">
          <svg class="w-3 h-3"><!-- Checkmark --></svg>
          Verified
        </span>
      </div>
    </div>
    <p class="text-xs text-warm-500 mt-1">Used for login and verification codes</p>
  </div>
  
  <button class="btn btn-secondary">Change Phone Number</button>
</div>
```

**Change Phone Flow:**
1. Click "Change Phone Number"
2. Modal: Enter new phone (with validation)
3. Click "Send Verification Code"
4. OTP sent to NEW number
5. Enter 6-digit code (reuse OTP component)
6. Success toast: "Phone number updated"

---

### Section 3: Danger Zone

**Purpose:** Account deletion and sign out

**Component References:**
- Button: `.btn .btn-destructive` and `.btn .btn-secondary`
- Modal: `/components/modals/index.html`
- Alert icon: `.alert-icon-error`
- Type-to-confirm: NEW COMPONENT (build pattern matching input)

**Layout:**
```html
<div class="bg-white border-2 border-magenta-200 rounded-lg p-6">
  <div class="flex items-center gap-2 mb-6">
    <svg class="w-5 h-5 text-magenta-600"><!-- Alert triangle --></svg>
    <h2 class="text-xl font-semibold text-magenta-600">Danger Zone</h2>
  </div>
  
  <!-- Delete Account -->
  <div class="mb-6 pb-6 border-b border-warm-200">
    <h3 class="font-semibold text-ink mb-2">Delete Account</h3>
    <p class="text-sm text-warm-600 mb-4">
      Permanently delete your account and all data. This cannot be undone.
    </p>
    <button class="btn btn-destructive">Delete Account</button>
  </div>
  
  <!-- Sign Out -->
  <div>
    <h3 class="font-semibold text-ink mb-2">Sign Out</h3>
    <p class="text-sm text-warm-600 mb-4">
      Sign out of your Saltwyk account on this device.
    </p>
    <button class="btn btn-secondary">Sign Out</button>
  </div>
</div>
```

**Delete Account Flow (3-Step Confirmation):**

**Step 1: Warning Modal**
```html
<div class="modal modal-md">
  <div class="modal-header">
    <div class="alert-icon alert-icon-error"></div>
    <h3 class="text-lg font-semibold text-magenta-600">Delete Account?</h3>
  </div>
  <div class="modal-body">
    <p class="text-warm-600 mb-4">This will permanently delete:</p>
    <ul class="space-y-2 text-warm-600 mb-4">
      <li>• All connected merchant accounts</li>
      <li>• Your transaction history</li>
      <li>• All buying power access</li>
      <li>• Your wishlist</li>
    </ul>
    <p class="text-sm text-warm-600">
      <strong>This cannot be undone</strong>, but you can sign up again in the future.
    </p>
  </div>
  <div class="modal-footer">
    <button class="btn btn-secondary">Cancel</button>
    <button class="btn btn-destructive">Continue to Delete</button>
  </div>
</div>
```

**Step 2: Type-to-Confirm Modal** (NEW COMPONENT)
```html
<div class="modal modal-md">
  <div class="modal-header">
    <h3 class="text-lg font-semibold text-magenta-600">Confirm Account Deletion</h3>
  </div>
  <div class="modal-body">
    <p class="text-warm-600 mb-4">
      To confirm, type <strong class="text-ink">DELETE</strong> below:
    </p>
    <input type="text" 
           placeholder="Type DELETE" 
           class="input input-md mb-2"
           data-confirm-text="DELETE">
    <p class="text-xs text-warm-500">Case-sensitive</p>
  </div>
  <div class="modal-footer">
    <button class="btn btn-secondary">Cancel</button>
    <button class="btn btn-destructive" disabled>Delete My Account</button>
  </div>
</div>
```

**Type-to-Confirm Logic:**
- Button disabled until input === "DELETE" (case-sensitive)
- Real-time validation as user types
- NEW COMPONENT NEEDED

**Step 3: Feedback Modal** (Optional)
```html
<div class="modal modal-md">
  <div class="modal-header">
    <h3 class="text-lg font-semibold text-ink">Help us improve (optional)</h3>
  </div>
  <div class="modal-body">
    <p class="text-warm-600 mb-4">Why are you leaving Saltwyk?</p>
    <textarea class="input input-md" rows="4" placeholder="Your feedback helps us..."></textarea>
  </div>
  <div class="modal-footer">
    <button class="btn btn-secondary">Skip</button>
    <button class="btn btn-primary">Submit & Delete Account</button>
  </div>
</div>
```

**Final Step:**
- Account deleted
- Session cleared
- Redirect to goodbye page
- Toast: "Your account has been deleted"

**Sign Out Flow:**
- Click "Sign Out"
- No confirmation
- Session cleared
- Redirect to login
- Toast: "Signed out successfully"

---

## Communication Tab

### Section 1: Primary Email

**Purpose:** Select which email Saltwyk uses for communications and failover auth

**Key Rules:**
- Select from verified merchant emails OR add new email
- New emails must be verified via OTP before can be primary
- Default: First verified email from merchant connections

**Component References:**
- Radio: `/components/inputs/index.html` - `.radio`
- Status badge: Build inline (emerald "Verified", orange "Pending")
- Button: `.btn .btn-primary`

**Layout:**
```html
<div class="bg-white border border-warm-200 rounded-lg p-6">
  <div class="flex items-center gap-2 mb-1">
    <svg class="w-5 h-5 text-warm-400"><!-- Email icon --></svg>
    <h2 class="text-xl font-semibold text-ink">Primary Email</h2>
  </div>
  <p class="text-warm-600 text-sm mb-6">Choose which email we use to contact you</p>
  
  <p class="text-sm font-medium text-ink mb-3">Your Primary Email</p>
  
  <div class="space-y-3 mb-6">
    
    <!-- Option 1 -->
    <label class="flex items-start gap-3 p-3 border border-warm-200 rounded-lg cursor-pointer hover:border-indigo-200">
      <input type="radio" name="primary-email" class="radio mt-0.5">
      <div class="flex-1">
        <div class="flex items-center gap-2 mb-1">
          <span class="font-medium text-ink">john@personal.com</span>
          <span class="inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-50 text-emerald-700 text-xs font-medium rounded">
            <svg class="w-3 h-3"><!-- Checkmark --></svg>
            Verified
          </span>
        </div>
        <p class="text-xs text-warm-500">Used for Target, Sephora, Whole Foods</p>
      </div>
    </label>
    
    <!-- Option 2 (SELECTED) -->
    <label class="flex items-start gap-3 p-3 border-2 border-indigo-500 bg-indigo-50 rounded-lg cursor-pointer">
      <input type="radio" name="primary-email" class="radio mt-0.5" checked>
      <div class="flex-1">
        <div class="flex items-center gap-2 mb-1">
          <span class="font-medium text-ink">john@work.com</span>
          <span class="inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-50 text-emerald-700 text-xs font-medium rounded">
            <svg class="w-3 h-3"><!-- Checkmark --></svg>
            Verified
          </span>
        </div>
        <p class="text-xs text-warm-500">Used for Best Buy, Nordstrom</p>
      </div>
    </label>
    
    <!-- Option 3: Add New -->
    <label class="flex items-start gap-3 p-3 border border-warm-200 rounded-lg cursor-pointer hover:border-indigo-200">
      <input type="radio" name="primary-email" class="radio mt-0.5">
      <div class="flex-1">
        <span class="font-medium text-ink">Add a new email address</span>
      </div>
    </label>
    
  </div>
  
  <button class="btn btn-primary">Save Changes</button>
</div>
```

**Add New Email Flow:**
1. Select "Add a new email address"
2. Input field appears (collapsed/expanded)
3. Enter new email
4. Click "Send Verification Code"
5. OTP sent to new email
6. Enter 6-digit code
7. Email verified, added to list
8. Can now select as primary

---

### Section 2: Email Addresses

**Purpose:** View all emails used across merchants with verification status

**Key Rules:**
- One verification per email (applies to all merchants using that email)
- Grouped by merchant usage
- **Collapsed by default** (per founder feedback)
- Show pending verification status
- Can resend verification

**Component References:**
- Accordion: NEW COMPONENT (chevron rotation, expand/collapse, ARIA)
- Status badge: Build inline (emerald "Verified", orange "Pending")
- Countdown timer: NEW COMPONENT (for resend button)
- Button: `.btn .btn-secondary .btn-sm`

**Layout:**
```html
<div class="bg-white border border-warm-200 rounded-lg p-6">
  <div class="flex items-center gap-2 mb-1">
    <svg class="w-5 h-5 text-warm-400"><!-- List icon --></svg>
    <h2 class="text-xl font-semibold text-ink">Email Addresses</h2>
  </div>
  <p class="text-warm-600 text-sm mb-6">Manage emails used for merchant connections</p>
  
  <p class="text-sm text-warm-600 mb-4">
    You're using <strong class="text-ink">2 email addresses</strong> across <strong class="text-ink">5 merchants</strong>
  </p>
  
  <div class="space-y-3">
    
    <!-- Email Group 1 (Verified, COLLAPSED by default) -->
    <div class="border border-warm-200 rounded-lg">
      <button class="w-full flex items-center gap-3 p-4 hover:bg-warm-50 text-left">
        <svg class="w-4 h-4 text-warm-400 transition-transform"><!-- Chevron right (rotates 90° when expanded) --></svg>
        <span class="font-medium text-ink flex-1">john@personal.com</span>
        <span class="inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-50 text-emerald-700 text-xs font-medium rounded">
          <svg class="w-3 h-3"><!-- Checkmark --></svg>
          Verified
        </span>
        <span class="text-sm text-warm-500">(3 merchants)</span>
      </button>
      <!-- Merchant list hidden when collapsed -->
    </div>
    
    <!-- Email Group 2 (Verified, COLLAPSED) -->
    <div class="border border-warm-200 rounded-lg">
      <button class="w-full flex items-center gap-3 p-4 hover:bg-warm-50 text-left">
        <svg class="w-4 h-4 text-warm-400 transition-transform"><!-- Chevron --></svg>
        <span class="font-medium text-ink flex-1">john@work.com</span>
        <span class="inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-50 text-emerald-700 text-xs font-medium rounded">
          <svg class="w-3 h-3"><!-- Checkmark --></svg>
          Verified
        </span>
        <span class="text-sm text-warm-500">(2 merchants)</span>
      </button>
    </div>
    
    <!-- Email Group 3 (PENDING, EXPANDED to show resend) -->
    <div class="border border-orange-200 rounded-lg">
      <button class="w-full flex items-center gap-3 p-4 hover:bg-warm-50 text-left">
        <svg class="w-4 h-4 text-warm-400 transition-transform rotate-90"><!-- Chevron expanded --></svg>
        <span class="font-medium text-ink flex-1">sarah@example.com</span>
        <span class="inline-flex items-center gap-1 px-2 py-0.5 bg-orange-50 text-orange-700 text-xs font-medium rounded">
          <svg class="w-3 h-3"><!-- Clock icon --></svg>
          Pending
        </span>
        <span class="text-sm text-warm-500">(1 merchant)</span>
      </button>
      
      <!-- Expanded content -->
      <div class="border-t border-orange-200 px-4 py-3">
        <p class="text-sm text-warm-600 mb-2">This email needs verification before you can use it.</p>
        <button class="btn btn-secondary btn-sm">
          Resend Verification Email
        </button>
        <!-- After clicking, shows countdown: "Resend in 60s" (disabled) -->
      </div>
    </div>
    
  </div>
</div>
```

**Accordion Component (NEW - Must Build):**
- Click header → Toggle expand/collapse
- Chevron rotates 0° → 90°
- Smooth height animation
- ARIA: `aria-expanded`, `aria-controls`

**When Expanded (Verified Email):**
```html
<div class="border-t border-warm-200 px-4 py-3">
  <ul class="space-y-2 text-sm text-warm-600">
    <li class="flex items-center gap-2">
      <svg class="w-4 h-4"><!-- Dot --></svg>
      Target
    </li>
    <li class="flex items-center gap-2">
      <svg class="w-4 h-4"><!-- Dot --></svg>
      Sephora
    </li>
    <li class="flex items-center gap-2">
      <svg class="w-4 h-4"><!-- Dot --></svg>
      Whole Foods
    </li>
  </ul>
</div>
```

**Email Verification Flow:**
1. Shopper connects merchant with unverified email
2. OTP sent immediately
3. Email shows "⏳ Pending" in this list
4. Expand accordion → Click "Resend Verification Email"
5. Modal: Enter 6-digit code (reuse OTP component)
6. Success toast: "Email verified"
7. Badge changes to "✓ Verified"

**Countdown Timer (NEW - Must Build):**
- After clicking "Resend": Button disabled, shows "Resend in 60s"
- Counts down: 59s, 58s, ..., 1s
- At 0s: Button enabled, text "Resend Verification Email"

---

### Section 3: Notification Preferences

**Purpose:** Control what Saltwyk sends and how

**Key Rules:**
- Connection issues: REQUIRED (can't opt out)
- Verification codes: REQUIRED (can't opt out)
- Marketing: Per-channel (email/SMS)

**Component References:**
- Checkbox: `/components/inputs/index.html` - `.checkbox`
- Button: `.btn .btn-primary`

**Layout:**
```html
<div class="bg-white border border-warm-200 rounded-lg p-6">
  <div class="flex items-center gap-2 mb-1">
    <svg class="w-5 h-5 text-warm-400"><!-- Bell icon --></svg>
    <h2 class="text-xl font-semibold text-ink">Notification Preferences</h2>
  </div>
  <p class="text-warm-600 text-sm mb-6">Control what we send and how we send it</p>
  
  <!-- Email Notifications -->
  <div class="mb-6">
    <h3 class="font-semibold text-ink mb-3">Email Notifications</h3>
    <div class="space-y-3">
      
      <!-- Required (disabled checkbox) -->
      <label class="flex items-start gap-3 opacity-50 cursor-not-allowed">
        <input type="checkbox" checked disabled class="checkbox mt-0.5">
        <div class="flex-1">
          <div class="font-medium text-ink">Connection issues</div>
          <div class="text-sm text-warm-500">When a merchant requires reconnection (required)</div>
        </div>
      </label>
      
      <!-- Optional -->
      <label class="flex items-start gap-3 cursor-pointer">
        <input type="checkbox" checked class="checkbox mt-0.5">
        <div class="flex-1">
          <div class="font-medium text-ink">New merchant announcements</div>
          <div class="text-sm text-warm-500">When new merchants join the network</div>
        </div>
      </label>
      
      <label class="flex items-start gap-3 cursor-pointer">
        <input type="checkbox" checked class="checkbox mt-0.5">
        <div class="flex-1">
          <div class="font-medium text-ink">Point promotions</div>
          <div class="text-sm text-warm-500">Special offers and bonus opportunities</div>
        </div>
      </label>
      
    </div>
  </div>
  
  <!-- SMS Notifications -->
  <div class="mb-6">
    <h3 class="font-semibold text-ink mb-3">SMS Notifications</h3>
    <div class="space-y-3">
      
      <!-- Required (disabled) -->
      <label class="flex items-start gap-3 opacity-50 cursor-not-allowed">
        <input type="checkbox" checked disabled class="checkbox mt-0.5">
        <div class="flex-1">
          <div class="font-medium text-ink">Verification codes</div>
          <div class="text-sm text-warm-500">Required for login and security (required)</div>
        </div>
      </label>
      
      <!-- Optional -->
      <label class="flex items-start gap-3 cursor-pointer">
        <input type="checkbox" class="checkbox mt-0.5">
        <div class="flex-1">
          <div class="font-medium text-ink">Point promotions</div>
          <div class="text-sm text-warm-500">Special offers via text message</div>
        </div>
      </label>
      
    </div>
  </div>
  
  <button class="btn btn-primary">Save Preferences</button>
</div>
```

**Notification Types:**

**Email (3 types):**
- Connection issues (REQUIRED)
- New merchant announcements (OPTIONAL)
- Point promotions (OPTIONAL)

**SMS (2 types):**
- Verification codes (REQUIRED)
- Point promotions (OPTIONAL)

---

## Complete Screen Layout

### Mobile Layout

```
┌─────────────────────────────────────────┐
│ Fresh Thread (Cyan → Lime, 3px)         │
├─────────────────────────────────────────┤
│ [S Logo] Saltwyk              [Profile] │
├─────────────────────────────────────────┤
│                                         │
│ Settings                                │
│                                         │
│ [Account] [Communication]               │ ← Horizontal tabs
│ ─────────                               │
│                                         │
│ [Profile Information]                   │
│ [Security]                              │
│ [Danger Zone]                           │
│                                         │
├─────────────────────────────────────────┤
│ Dashboard  Merchants  Wishlist Profile  │
└─────────────────────────────────────────┘
```

### Desktop Layout

```
┌──────────────────────────────────────────────────────────────┐
│ Fresh Thread (Cyan → Lime, 3px)                               │
├──────────────────────────────────────────────────────────────┤
│ [S] Dashboard  Merchants  Wishlist            [Profile ▼]    │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌──────────┬─────────────────────────────────────────┐     │
│  │ Account  │ Settings                                │     │
│  │ ───────  │                                         │     │
│  │          │ [Profile Information]                   │     │
│  │ Communi- │ [Security]                              │     │
│  │ cation   │ [Danger Zone]                           │     │
│  │          │                                         │     │
│  └──────────┴─────────────────────────────────────────┘     │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

**Component:** `/components/tabs/index.html` - Vertical variant

**Desktop:**
- Sidebar: 200px wide
- Content: flex-1 (remaining width)
- Container: max-w-5xl centered

**Mobile:**
- Horizontal tabs (underline variant)
- Full width content

---

## New Components to Build

Based on component investigation:

### 1. Inline Status Badges

**Sizes & Colors:**
- Emerald: "✓ Verified" - `bg-emerald-50 text-emerald-700`
- Orange: "⏳ Pending" - `bg-orange-50 text-orange-700`  
- Magenta: "❌ Failed" - `bg-magenta-50 text-magenta-700`

**Structure:**
```html
<span class="inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-50 text-emerald-700 text-xs font-medium rounded">
  <svg class="w-3 h-3"><!-- Icon --></svg>
  Verified
</span>
```

### 2. Accordion/Collapsible

**Requirements:**
- Chevron rotates 0° → 90° when expanded
- Smooth height animation
- ARIA: `aria-expanded`, `aria-controls`, `aria-labelledby`
- Click header to toggle

**Structure:**
```html
<div class="accordion-item">
  <button class="accordion-trigger" aria-expanded="false" aria-controls="content-1">
    <svg class="accordion-chevron"><!-- Chevron --></svg>
    <span>Header text</span>
  </button>
  <div id="content-1" class="accordion-content" hidden>
    <!-- Content -->
  </div>
</div>
```

### 3. Countdown Timer

**Requirements:**
- Button disabled during countdown
- Text updates: "Resend in 60s" → "Resend in 1s" → "Resend Code"
- Re-enable button at 0

**Structure:**
```html
<button class="btn btn-secondary btn-sm" disabled data-countdown="60">
  Resend in <span class="countdown-value">60</span>s
</button>

<!-- After countdown -->
<button class="btn btn-secondary btn-sm">
  Resend Verification Email
</button>
```

### 4. Type-to-Confirm Modal

**Requirements:**
- Input with pattern matching ("DELETE")
- Case-sensitive comparison
- Real-time validation
- Button disabled until match

**Structure:**
```html
<input type="text" 
       class="input input-md" 
       placeholder="Type DELETE"
       data-confirm-text="DELETE"
       data-target="#delete-button">
<button id="delete-button" class="btn btn-destructive" disabled>
  Delete My Account
</button>
```

---

## Design System Compliance

### Colors

**Emerald (Primary Actions):**
- `.btn .btn-primary`
- Verified badges: `bg-emerald-50 text-emerald-700`
- OTP focus: `border-emerald-500`

**Indigo (Interactive):**
- Active tab: `border-indigo-500`
- Radio/checkbox checked: `indigo-500`
- Links: `text-indigo-600`

**Orange (Warning/Pending):**
- Pending badge: `bg-orange-50 text-orange-700`
- Pending border: `border-orange-200`

**Magenta (Destructive):**
- `.btn .btn-destructive`
- Danger zone: `border-magenta-200 text-magenta-600`

**Warm (Neutral):**
- Descriptions: `text-warm-600`
- Borders: `border-warm-200`
- Helper text: `text-warm-500`

**Ink:** Headings, labels
**Ledger:** Page background

### Typography

**Page Title:** `text-3xl font-bold text-ink`  
**Section Heading:** `text-xl font-semibold text-ink`  
**Subsection:** `font-semibold text-ink`  
**Label:** `text-sm font-medium text-ink`  
**Description:** `text-sm text-warm-600`  
**Helper:** `text-xs text-warm-500`

### Spacing

**Section padding:** `p-6`  
**Section gap:** `space-y-6`  
**Mobile:** `px-4`  
**Desktop:** `px-6`

### Threads

**Settings thread:**
- Position: Top, full-bleed
- Gradient: Fresh (cyan → lime)
- Height: 3px

---

## User Flows

### Flow 1: Change Phone Number

1. Account tab → Security → Click "Change Phone Number"
2. Modal: Enter new phone + validation
3. Send OTP to new number
4. Enter 6-digit code (reuse OTP component)
5. Success toast: "Phone number updated"

### Flow 2: Set Primary Email

1. Communication tab → Primary Email
2. Select radio for desired email OR "Add new"
3. If add new: Enter email → Verify via OTP → Added to list
4. Click "Save Changes"
5. Success toast: "Primary email updated"

### Flow 3: Verify Pending Email

1. Communication tab → Email Addresses
2. Find "⏳ Pending" email, expand accordion
3. Click "Resend Verification Email"
4. Countdown: Button disabled 60s
5. Modal: Enter 6-digit code
6. Success toast: "Email verified"
7. Badge → "✓ Verified"

### Flow 4: Update Notifications

1. Communication tab → Notification Preferences
2. Toggle checkboxes (skip disabled)
3. Click "Save Preferences"
4. Success toast: "Preferences saved"

### Flow 5: Delete Account

1. Account tab → Danger Zone → "Delete Account"
2. Modal 1: Warning → "Continue to Delete"
3. Modal 2: Type "DELETE" → "Delete My Account"
4. Modal 3: Optional feedback → Submit or Skip
5. Account deleted, redirect
6. Toast: "Your account has been deleted"

### Flow 6: Sign Out

1. Account tab → Danger Zone → "Sign Out"
2. Session cleared, redirect to login
3. Toast: "Signed out successfully"

---

## Backend API Requirements

**Account Tab:**
1. `PATCH /api/v1/shopper/profile` - Update name
2. `POST /api/v1/shopper/phone/change` - Initiate phone change
3. `POST /api/v1/shopper/phone/verify` - Verify new phone
4. `DELETE /api/v1/shopper/account` - Delete account
5. `POST /api/v1/shopper/signout` - Sign out

**Communication Tab:**
6. `GET /api/v1/shopper/emails` - List all emails with merchants
7. `POST /api/v1/shopper/emails/add` - Add new email
8. `POST /api/v1/shopper/emails/verify` - Verify email via OTP
9. `POST /api/v1/shopper/emails/resend` - Resend verification
10. `PATCH /api/v1/shopper/emails/primary` - Set primary email
11. `PATCH /api/v1/shopper/notifications` - Update preferences

---

## Success Metrics

**Profile:** % who update name  
**Phone:** Change frequency, completion rate  
**Primary Email:** % with custom (vs default)  
**Email Verification:** Completion rate (target: 90%+), resend frequency  
**Notifications:** % who customize (expect 20-30%)  
**Deletion:** Rate (<2% annually), completion through 3-step flow

---

## Next Steps

1. ✅ Specification complete
2. ✅ Component investigation complete
3. ✅ Open questions resolved
4. **Ready for:** Claude Code prompts to:
   - Build 4 new components (accordion, badges, countdown, type-to-confirm)
   - Build Settings screen with vertical tabs
   - Build Account tab sections
   - Build Communication tab sections

---

**This specification is complete and ready for implementation.**
