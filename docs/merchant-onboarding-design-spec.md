# Merchant Onboarding Design Specification

**Last Updated:** 2026-01-18  
**Status:** Draft - Design Ready  
**Owner:** Tela  
**Purpose:** Complete design specification for chat+cards onboarding experience

---

## Executive Summary

This document specifies the design for Saltwyk's merchant onboarding experience using a **conversational confirmation pattern** - a hybrid of chat guidance and structured data cards that reduces cognitive load while maintaining clear progress visibility.

**Key Innovation:** Instead of a 17-step wizard, we organize onboarding into **5 persona-based sections** where a conversational interface guides merchants through data capture using editable cards. Delegation is built into the pattern - marketing users can send specific sections to technical or finance team members.

**Design Scope:** This is pure design work - creating HTML/CSS component specifications following Saltwyk's existing design system (Fire Opal merchant identity). No React or Go implementation.

---

## Design Goals

1. **Journey to a reward** - Onboarding is a quest to unlock lower fees (2.4% network vs 2.9% own-points) and new customer acquisition channel. Should feel fun, not bureaucratic.
2. **Celebrate milestones** - Mark progress with celebration moments at key achievements (installed, connected rewards, funded balance, go-live)
3. **Reduce cognitive load** - 5 sections feel manageable, 17 steps feel overwhelming
4. **Persona-appropriate** - Marketing users handle what they can, delegate what they can't
5. **Visual confirmation** - Cards show accumulated progress, agent (not bot) guides attention
6. **Easy error correction** - Edit any card inline without "going back"
7. **Modern & differentiated** - Chat feels approachable vs sterile wizard forms
8. **Brand consistency** - Fire Opal merchant identity throughout

---

## Section Breakdown (5 Persona-Based Sections)

### Visual Progress Representation

Instead of "Step 4 of 17", merchant sees:

```
Progress Sidebar:

☑ Your Store (2 min)
   3 quick confirmations
   
☑ Business Verification (5-7 min)  
   May need business owner
   
⏳ Waiting for Approval...
   1-2 business days
   
── After Verification ──

○ Rewards Program (3-5 min)
   Technical team can help
   
○ Payment Setup (5-7 min)
   Finance team can help
   
○ Launch Strategy (3-5 min)
   You're back in control
```

### Section 1: "Your Store" (Marketing User)

**Steps:** Welcome → Store Confirmation → Path Selection  
**Persona:** Marketing/operations person (primary user)  
**Time:** 1-2 minutes  
**Delegation:** None needed  
**Goal:** Quick wins, build momentum

**What it covers:**
- Welcome message and expectation setting
- Confirm Storeleads data (revenue, category)
- Choose Go-Live immediately or Launch Campaign

**Why this first:**
- Marketing user can complete independently
- Fast (builds confidence)
- No sensitive data required
- Sets context for rest of onboarding

---

### Section 2: "Business Verification" (Owner/Finance)

**Steps:** Business Info → Representative → Bank Account → Review & Submit  
**Persona:** Business owner or finance team  
**Time:** 5-7 minutes  
**Delegation:** All 3 data collection steps can be delegated  
**Goal:** Submit KYB to Stripe

**What it covers:**
- Legal business name, EIN, address
- Account representative details (owner info, SSN last 4)
- Bank account for settlement payouts
- Review all data before submission

**Why this second:**
- Required for payment processing (regulatory)
- Can be delegated if marketing user doesn't have info
- Natural stopping point (submit then wait 1-2 days)

**Delegation flow:**
- Marketing user can click "Send to business owner via SMS"
- Owner receives link directly to that specific card
- Marketing user sees "Pending - sent to [phone]" state
- Can continue other sections while waiting

---

### Section 3: "Rewards Program" (Technical Team)

**Steps:** KYB Pending State → API Connection → Tier Verification  
**Persona:** Technical team member (or marketing with credentials)  
**Time:** 3-5 minutes  
**Delegation:** API connection can be delegated  
**Goal:** Connect Smile.io/Yotpo API

**What it covers:**
- Waiting experience while KYB processes (1-2 days)
- API credential entry (Smile.io private key or Yotpo GUID + API key)
- Automatic tier verification (upgrade path if needed)

**Why this third:**
- Can't proceed until KYB approved
- Requires technical credentials (marketing user often doesn't have)
- Blocking requirement for any redemption functionality

**Delegation flow:**
- "Don't have API credentials? Send to technical team"
- Tech person gets link to API connection card only
- Marketing user sees pending state, can proceed to next section

---

### Section 4: "Payment Setup" (Finance Team)

**Steps:** Pricing Explanation → Fund Clearing Balance → Auto-Fund → Payout Schedule  
**Persona:** Finance team (or marketing with payment authority)  
**Time:** 5-7 minutes  
**Delegation:** Clearing balance funding can be delegated  
**Goal:** Fund account and configure cash flow

**What it covers:**
- Understand 2.9% transaction pricing
- Calculate and fund clearing balance (ACH or debit)
- Set up auto-fund (optional but recommended)
- Configure payout schedule (daily/weekly/minimum)

**Why this fourth:**
- Can't accept payments without clearing balance
- Requires payment authority (finance decision)
- Cash flow configuration affects operations

**Delegation flow:**
- "Need finance approval? Send to finance team"
- Finance person sees clearing balance calculator and payment options
- Marketing user can configure auto-fund and payout while waiting

---

### Section 5: "Launch Strategy" (Marketing User)

**Steps:** Exclude Merchants → Campaign Selection → Setup Complete & Go Live  
**Persona:** Marketing/operations person (back in control)  
**Time:** 3-5 minutes  
**Delegation:** None needed  
**Goal:** Configure launch and go live

**What it covers:**
- Optionally exclude competing merchants (up to 10)
- If "Launch Campaign" path: select cohort (theme, date, spots)
- Review complete checklist
- Go live!

**Why this last:**
- Marketing owns launch strategy decisions
- Competitor exclusions are business strategy (not technical)
- Campaign selection is marketing domain
- Final "ship it" moment should be marketing user (who started flow)

---

## Layout Specification

### Desktop Layout (≥1024px)

```
┌────────────────────────────────────────────────────────────────┐
│ [Top Nav: Saltwyk logo, merchant name, help]                   │
├─────────────┬───────────────────────────────────────────────────┤
│             │                                                    │
│  Progress   │  Chat + Cards Area                                │
│  Sidebar    │  (Scrollable)                                     │
│  240px      │                                                    │
│             │  ┌──────────────────────────────────────────────┐ │
│ ☑ Your      │  │ Bot Avatar | Saltwyk                         │ │
│   Store     │  │                                              │ │
│             │  │ Hi! I'm here to help you get verified...     │ │
│ ☑ Business  │  └──────────────────────────────────────────────┘ │
│   Verif.    │                                                    │
│             │  ┌──────────────────────────────────────────────┐ │
│ ⏳ Waiting  │  │ Store Information                      [Edit] │ │
│             │  │                                              │ │
│ ── After ── │  │ Store: Liquid Death                          │ │
│             │  │ Revenue: ~$5.25M/month                       │ │
│ ○ Rewards   │  │ Category: Food & Drink                       │ │
│   Program   │  │                                              │ │
│             │  │ ☑ This is correct                            │ │
│ ○ Payment   │  └──────────────────────────────────────────────┘ │
│   Setup     │                                                    │
│             │  ┌──────────────────────────────────────────────┐ │
│ ○ Launch    │  │ Bot Avatar | Saltwyk                         │ │
│   Strategy  │  │                                              │ │
│             │  │ Great! Now, how would you like to launch?    │ │
│             │  └──────────────────────────────────────────────┘ │
│             │                                                    │
│             │  [Path selection cards appear here...]            │
│             │                                                    │
└─────────────┴───────────────────────────────────────────────────┘
```

**Key Dimensions:**
- Sidebar: 240px fixed width
- Chat area: Fluid (remaining width)
- Max chat area width: 800px (for readability)
- Cards max width: 600px (centered if wider area)

---

### Mobile Layout (<1024px)

```
┌────────────────────────────────┐
│ [☰] Saltwyk     [?] Help       │
├────────────────────────────────┤
│ Progress: Business Verification│
│ ▓▓▓▓▓▓░░░░░░░░░░ 40%          │
├────────────────────────────────┤
│                                │
│ Chat + Cards                   │
│ (Stacked vertically)           │
│                                │
│ ┌────────────────────────────┐ │
│ │ Saltwyk                    │ │
│ │                            │ │
│ │ Hi! Let me help you...     │ │
│ └────────────────────────────┘ │
│                                │
│ ┌────────────────────────────┐ │
│ │ Store Information   [Edit] │ │
│ │                            │ │
│ │ Store: Liquid Death        │ │
│ │ Revenue: ~$5.25M/month     │ │
│ │ ☑ Correct                  │ │
│ └────────────────────────────┘ │
│                                │
└────────────────────────────────┘
```

**Mobile Behavior:**
- Sidebar collapses to hamburger menu (tap to see progress)
- Progress bar at top shows section + percentage
- Chat and cards stack vertically (full width)
- Cards always full width on mobile
- Sticky "Continue" button at bottom when card is complete

---

## Design System Integration

### Existing Components to Leverage

From review of existing implementation (`/saltwyk-design` repo):

**✅ Can Reuse:**
- Form inputs (text, email, phone, number)
- Dropdowns/selects
- Buttons (primary emerald, secondary gray)
- Validation states (error text, success checkmarks)
- Secure input patterns (masked fields)
- Date pickers (month/day/year dropdowns)
- Progress indicators
- Badges (status colors)
- Context switcher (profile dropdown)

**❌ Need to Design:**
- Chat message bubbles (bot, user, system)
- Conversational card component (collapsed/expanded states)
- Delegation button pattern ("Send to X via SMS")
- Pending state indicators (for delegated cards)
- Section progress indicators (checkmarks, current, pending)
- Bot avatar/icon
- Edit overlay pattern (inline card editing)

---

## Milestone Celebrations

### Celebration Moments

Four key achievements should be celebrated with visual delight:

1. **App Installed** - After first login
2. **Rewards Program Connected** - After API connection succeeds
3. **Clearing Balance Funded** - After first funding completes
4. **Go-Live** - When merchant launches

### Celebration Pattern Specification

**Visual Treatment Options** (Designer chooses based on context):

**Option A: Celebration Card**
```html
<div class="celebration-card bg-gradient-to-br from-lime-thread/20 to-emerald-serial/20 border-2 border-lime-thread rounded-lg p-6 mb-4">
  <div class="text-center">
    <div class="celebration-icon text-6xl mb-3">🎉</div>
    <h2 class="text-2xl font-bold text-ledger-paper mb-2">
      Rewards Program Connected!
    </h2>
    <p class="text-ledger-paper-muted mb-4">
      You're one step closer to accepting point redemptions
    </p>
    <div class="progress-indicator flex items-center justify-center gap-2 mb-4">
      <span class="dot complete">●</span>
      <span class="dot complete">●</span>
      <span class="dot current">●</span>
      <span class="dot">○</span>
    </div>
    <button class="btn-primary bg-emerald-serial text-white px-6 py-2 rounded-lg">
      Continue Setup
    </button>
  </div>
</div>
```

**Option B: Inline Success Message**
```html
<div class="success-message flex items-start gap-3 bg-lime-thread/10 border border-lime-thread rounded-lg p-4 mb-4">
  <span class="icon text-2xl">✨</span>
  <div>
    <h3 class="font-medium text-ledger-paper mb-1">
      Milestone Unlocked: Clearing Balance Funded
    </h3>
    <p class="text-sm text-ledger-paper-muted">
      You can now accept point redemptions. Just 1 more step to go live!
    </p>
  </div>
</div>
```

**Option C: Confetti Animation + Toast** (Most Delightful)
- Brief confetti animation (CSS or Lottie)
- Toast notification in top-right
- Doesn't block flow, just adds delight

**Recommended:** Option C for major milestones (connected, funded, go-live), Option B for minor wins (cards completed)

---

## Component Specifications

### Component 1: Progress Sidebar

**Purpose:** Show merchant their progress through 5 sections

**States:**
- Complete (☑ green checkmark)
- Current (► blue indicator)
- Pending/Locked (○ gray circle)
- Waiting (⏳ orange hourglass)

**HTML Structure:**

```html
<aside class="progress-sidebar bg-intaglio-dark w-60 h-screen p-6">
  <nav class="space-y-6">
    <!-- Section: Complete -->
    <div class="section-item complete">
      <div class="flex items-start gap-3">
        <span class="icon text-lime-thread">☑</span>
        <div>
          <h3 class="text-ledger-paper font-medium">Your Store</h3>
          <p class="text-sm text-ledger-paper-muted">2 minutes</p>
        </div>
      </div>
    </div>
    
    <!-- Section: Current -->
    <div class="section-item current">
      <div class="flex items-start gap-3">
        <span class="icon text-indigo-focus">►</span>
        <div>
          <h3 class="text-ledger-paper font-medium">Business Verification</h3>
          <p class="text-sm text-ledger-paper-muted">5-7 minutes</p>
          <p class="text-xs text-emerald-serial mt-1">In progress</p>
        </div>
      </div>
    </div>
    
    <!-- Section: Waiting -->
    <div class="section-item waiting">
      <div class="flex items-start gap-3">
        <span class="icon text-orange-thread">⏳</span>
        <div>
          <h3 class="text-ledger-paper font-medium">Waiting for Approval</h3>
          <p class="text-sm text-ledger-paper-muted">1-2 business days</p>
        </div>
      </div>
    </div>
    
    <!-- Divider -->
    <div class="border-t border-ledger-paper/20 pt-4">
      <p class="text-xs text-ledger-paper-muted uppercase tracking-wide">After Verification</p>
    </div>
    
    <!-- Section: Pending/Locked -->
    <div class="section-item pending opacity-60">
      <div class="flex items-start gap-3">
        <span class="icon text-ledger-paper-muted">○</span>
        <div>
          <h3 class="text-ledger-paper font-medium">Rewards Program</h3>
          <p class="text-sm text-ledger-paper-muted">3-5 minutes</p>
        </div>
      </div>
    </div>
    
    <!-- Repeat for remaining sections -->
  </nav>
</aside>
```

**Color Semantics:**
- Complete: Lime Thread (`#CCFF00`)
- Current: Indigo Focus (from design system)
- Waiting: Orange Thread (`#FF5900`)
- Pending: Muted ledger paper
- Background: Intaglio Dark (from Fire Opal)

**Mobile Transform:**
- Collapses to top bar with section name + progress percentage
- Hamburger menu expands to overlay with full progress view

---

### Component 2: Agent Message Bubble

**Purpose:** Display agent messages in conversational flow (helpful guide, not chatbot)

**Agent Personality:**
- Enthusiastic about rewards and network benefits
- Celebrates merchant wins ("You're crushing it!")
- Empathetic when delegating ("No worries, I'll send this to them")
- Explains the "why" behind requirements
- Uses "I" language ("I'll help you...", "Let me show you...")

**Variants:**
- Agent message (Saltwyk agent speaking)
- System message (status updates like "Card saved")
- User response (if needed, though most interaction is via cards)

**HTML Structure (Agent Message):**

```html
<div class="chat-message agent flex items-start gap-3 mb-4">
  <div class="avatar flex-shrink-0">
    <div class="w-8 h-8 rounded-full bg-emerald-serial/10 flex items-center justify-center">
      <!-- TODO: Agent character avatar goes here -->
      <svg class="w-5 h-5 text-emerald-serial"><!-- Placeholder --></svg>
    </div>
  </div>
  
  <div class="message-content max-w-[600px]">
    <div class="text-sm text-ledger-paper-muted mb-1">[Agent Name]</div>
    <div class="bg-ledger-paper/5 rounded-2xl rounded-tl-sm px-4 py-3">
      <p class="text-ledger-paper">
        Hi! I'm here to help you unlock rewards commerce. This should be fun - let's get started! 🚀
      </p>
    </div>
  </div>
</div>
```

**HTML Structure (System Message - Success):**

```html
<div class="chat-message system flex justify-center my-3">
  <div class="bg-lime-thread/10 text-lime-thread text-sm px-3 py-1 rounded-full">
    ✓ Business information saved
  </div>
</div>
```

**HTML Structure (System Message - Milestone):**

```html
<div class="chat-message milestone flex justify-center my-4">
  <div class="bg-gradient-to-r from-lime-thread/20 to-emerald-serial/20 border-2 border-lime-thread rounded-full px-4 py-2">
    <span class="text-lg mr-2">🎉</span>
    <span class="text-sm font-medium text-ledger-paper">
      Milestone: Rewards Program Connected!
    </span>
  </div>
</div>
```

**Styling Notes:**
- Agent avatar: Dedicated character design (not just logo)
- Message bubble: Subtle background, rounded corners, tail on top-left
- System messages (regular): Centered, success color (lime thread)
- System messages (milestone): Gradient background, celebration emoji
- Max width: 600px (readability)
- Spacing: 16px between messages
- Agent name displayed above bubble

**Voice Examples:**

**Enthusiastic:**
- "Amazing! You're one step closer to rewards commerce 🎯"
- "Let's do this! Just a few quick confirmations..."
- "You're crushing it! 2 sections down, 3 to go 💪"

**Empathetic (delegation):**
- "No worries! I'll send this part to your finance team"
- "Totally understand - not everyone has their EIN memorized! 😄"
- "I've got you covered - sending this to [name] now"

**Explanatory:**
- "Here's why we need this: payment regulations require..."
- "This clearing balance is your working capital - think of it like..."
- "By connecting your rewards program, you unlock..."

---

### Component 3: Data Card (Collapsed State)

**Purpose:** Show completed section data in collapsed summary view

**HTML Structure:**

```html
<div class="data-card collapsed bg-ledger-paper border border-ledger-paper-muted rounded-lg p-4 mb-4 max-w-[600px]">
  <div class="flex items-start justify-between">
    <div class="flex items-start gap-3 flex-1">
      <span class="icon text-lime-thread text-xl">☑</span>
      <div>
        <h3 class="font-medium text-ledger-paper mb-1">Store Information</h3>
        <p class="text-sm text-ledger-paper-muted">
          Liquid Death • $5.25M/month • Food & Drink
        </p>
      </div>
    </div>
    <button class="text-sm text-emerald-serial hover:text-emerald-serial-dark">
      Edit
    </button>
  </div>
</div>
```

**States:**
- Complete: Green checkmark, can edit
- Pending/Delegated: Orange hourglass, shows status
- In Progress: Blue indicator, expandable

---

### Component 4: Data Card (Expanded State)

**Purpose:** Show editable fields for data entry or editing

**HTML Structure:**

```html
<div class="data-card expanded bg-ledger-paper border border-indigo-focus rounded-lg p-6 mb-4 max-w-[600px]">
  <div class="flex items-start justify-between mb-4">
    <h3 class="font-medium text-ledger-paper">Business Information</h3>
    <button class="text-sm text-ledger-paper-muted hover:text-ledger-paper">
      [Edit]
    </button>
  </div>
  
  <!-- Delegation Option (if applicable) -->
  <div class="delegation-option bg-ledger-paper-muted/20 border border-ledger-paper-muted rounded-lg p-3 mb-4">
    <p class="text-sm text-ledger-paper mb-2">
      Don't have this information?
    </p>
    <button class="text-sm text-emerald-serial hover:text-emerald-serial-dark font-medium">
      Send to business owner via SMS
    </button>
  </div>
  
  <!-- Form Fields -->
  <div class="space-y-4">
    <div class="form-field">
      <label class="block text-sm font-medium text-ledger-paper mb-1">
        Legal Business Name *
      </label>
      <input 
        type="text" 
        class="w-full px-3 py-2 border border-ledger-paper-muted rounded-lg focus:border-indigo-focus focus:ring-1 focus:ring-indigo-focus"
        placeholder="Acme Corporation, LLC"
      />
    </div>
    
    <div class="form-field">
      <label class="block text-sm font-medium text-ledger-paper mb-1">
        EIN / Tax ID *
      </label>
      <input 
        type="text" 
        class="w-full px-3 py-2 border border-ledger-paper-muted rounded-lg focus:border-indigo-focus focus:ring-1 focus:ring-indigo-focus"
        placeholder="XX-XXXXXXX"
      />
      <p class="text-xs text-ledger-paper-muted mt-1">
        Required for companies and non-profits
      </p>
    </div>
    
    <!-- Additional fields... -->
  </div>
  
  <!-- Security Callout (if applicable) -->
  <div class="security-note bg-indigo-focus/10 border border-indigo-focus/20 rounded-lg p-3 mt-4">
    <p class="text-sm text-ledger-paper">
      <strong>Security:</strong> Your information is encrypted and transmitted securely to our payment processor. We never store your full account number.
    </p>
  </div>
  
  <!-- Actions -->
  <div class="flex gap-3 mt-6">
    <button class="btn-secondary px-4 py-2 text-sm">
      Back
    </button>
    <button class="btn-primary bg-emerald-serial hover:bg-emerald-serial-dark text-white px-6 py-2 text-sm rounded-lg flex-1">
      Save & Continue
    </button>
  </div>
</div>
```

**Styling Notes:**
- Active border: Indigo focus (indicates current card)
- Delegation: Light background callout above fields
- Security notes: Indigo tint background
- Primary action: Emerald serial (brand CTA color)
- Field focus: Indigo focus ring

---

### Component 6: Campaign Marketing Card

**Purpose:** Compel merchant to click and learn more about launch campaign

**Based on:** Existing marketing card pattern from shopper components

**Key Characteristics:**
- Gradient background (compelling, energetic)
- Bold headline (benefit-driven)
- Supporting copy (social proof, urgency, value)
- Clear CTA button
- Visual elements (emoji, icons, or illustrations)
- Card should feel like an opportunity, not a form

**HTML Structure:**

```html
<div class="campaign-card group cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
  <!-- Gradient Background -->
  <div class="bg-gradient-to-br from-emerald-500 via-emerald-600 to-cyan-500 p-6 text-white">
    
    <!-- Badge/Urgency Indicator -->
    <div class="inline-block bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium mb-3">
      🔥 12/20 merchants confirmed
    </div>
    
    <!-- Headline -->
    <h3 class="text-2xl font-bold mb-2">
      Holiday Rush Campaign
    </h3>
    
    <!-- Launch Date -->
    <p class="text-sm opacity-90 mb-3">
      Launch December 15, 2025
    </p>
    
    <!-- Value Proposition -->
    <p class="text-sm opacity-90 mb-4 line-clamp-2">
      Join 11 other merchants launching together with coordinated marketing, shared audiences, and 2x the network effects.
    </p>
    
    <!-- Benefits -->
    <ul class="space-y-2 mb-4 text-sm">
      <li class="flex items-center gap-2">
        <span>✓</span>
        <span>Co-marketing materials provided</span>
      </li>
      <li class="flex items-center gap-2">
        <span>✓</span>
        <span>Launch day promotion across network</span>
      </li>
      <li class="flex items-center gap-2">
        <span>✓</span>
        <span>Higher initial transaction volume</span>
      </li>
    </ul>
    
    <!-- CTA -->
    <button class="w-full bg-white text-emerald-600 font-medium py-2 px-4 rounded-lg hover:bg-white/90 transition-colors">
      Join This Campaign →
    </button>
  </div>
</div>
```

**Gradient Options** (Based on Campaign Theme):

**Holiday Rush:** 
```css
bg-gradient-to-br from-red-500 via-green-600 to-emerald-500
```

**New Year Fresh Start:**
```css
bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-500
```

**Valentine's Romance:**
```css
bg-gradient-to-br from-pink-500 via-rose-600 to-red-500
```

**Styling Notes:**
- Card should pop visually (gradients, shadows)
- Hover state: Elevate shadow, slight scale
- CTA button: High contrast (white on gradient)
- Benefits: Checkmarks, concise value props
- Urgency indicator: Spots remaining, launch date
- Theme-appropriate emoji in badge

**Copy Pattern:**

**Headline:** [Action-oriented + Benefit]
- "Holiday Rush Campaign" ✓
- "Launch with 20+ Merchants" ✓
- "Valentine's Romance Network" ✓

**Supporting Copy:** [Social proof + Value]
- "Join 11 other merchants..." ✓
- "2x the network effects..." ✓
- "Coordinated marketing..." ✓

**CTA:** [Action verb + Direction]
- "Join This Campaign →" ✓
- "See Campaign Details →" ✓
- "Reserve Your Spot →" ✓

**Visual Hierarchy:**
1. Badge (urgency/scarcity)
2. Headline (what it is)
3. Date (when)
4. Value prop (why)
5. Benefits (how)
6. CTA (action)

---

### Component 7: Delegation Pending State

**Purpose:** Show card waiting for someone else to complete

**Updated with SMS disclaimer:**

```html
<div class="data-card delegated bg-ledger-paper border border-orange-thread/40 rounded-lg p-4 mb-4 max-w-[600px]">
  <div class="flex items-start gap-3">
    <span class="icon text-orange-thread text-xl">⏳</span>
    <div class="flex-1">
      <h3 class="font-medium text-ledger-paper mb-1">Bank Account</h3>
      <p class="text-sm text-ledger-paper-muted mb-2">
        Waiting for account holder to complete
      </p>
      <p class="text-xs text-ledger-paper-muted mb-2">
        Sent to: (555) 123-4567
      </p>
      <div class="bg-indigo-focus/10 border border-indigo-focus/20 rounded p-2 mb-3">
        <p class="text-xs text-ledger-paper-muted">
          <strong>SMS sent:</strong> "[Name] asked you to complete Saltwyk [Platform] onboarding financial information. Follow this link to complete onboarding: [link]
          
          For your security, we encourage you to verify this request with [Name] before completing."
        </p>
      </div>
    </div>
  </div>
  
  <div class="flex gap-2 mt-3">
    <button class="text-sm text-emerald-serial hover:text-emerald-serial-dark">
      Resend
    </button>
    <span class="text-ledger-paper-muted">•</span>
    <button class="text-sm text-emerald-serial hover:text-emerald-serial-dark">
      I'll do it myself
    </button>
  </div>
</div>
```

**Delegation SMS Template Variables:**
- `{name}` - Person who initiated delegation (e.g., "Sarah from Liquid Death")
- `{platform}` - "Shopify" (or WooCommerce, BigCommerce, Magento)
- `{information_type}` - "financial", "business", "technical"
- `{link}` - Unique delegation link with token

**Security Note Styling:**
- Light info callout (not alarming, just prudent)
- Shows actual SMS content for transparency
- Merchant can see what was sent

---

**Purpose:** Show card waiting for someone else to complete

**HTML Structure:**

```html
<div class="data-card delegated bg-ledger-paper border border-orange-thread/40 rounded-lg p-4 mb-4 max-w-[600px]">
  <div class="flex items-start gap-3">
    <span class="icon text-orange-thread text-xl">⏳</span>
    <div class="flex-1">
      <h3 class="font-medium text-ledger-paper mb-1">Bank Account</h3>
      <p class="text-sm text-ledger-paper-muted mb-2">
        Waiting for account holder to complete
      </p>
      <p class="text-xs text-ledger-paper-muted">
        Sent to: (555) 123-4567
      </p>
    </div>
  </div>
  
  <div class="flex gap-2 mt-3">
    <button class="text-sm text-emerald-serial hover:text-emerald-serial-dark">
      Resend
    </button>
    <span class="text-ledger-paper-muted">•</span>
    <button class="text-sm text-emerald-serial hover:text-emerald-serial-dark">
      I'll do it myself
    </button>
  </div>
</div>
```

**Styling Notes:**
- Border: Orange thread (waiting state)
- Icon: Hourglass emoji or icon
- Actions: Allow resend or take over

---

## Conversation Flows by Section

### Section 1: Your Store

**Agent Messages:**

```
Agent: Hey there! 👋 I'm here to help you unlock rewards commerce.

Here's what you're working toward:
• Lower transaction fees (2.4% on network vs 2.9% own-points)
• New customer acquisition channel (shoppers from other merchants)
• Network growth opportunities

This journey takes about 10 minutes. Ready to get started?

[Let's go!] [Show me the full path first]

---

[If "Let's go!"]

Agent: Love the enthusiasm! 🎯

First, let me confirm what I know about your store from public data:

[Store Information Card appears - collapsed initially, then expands]

Card shows:
- Store Name: Liquid Death
- Monthly Revenue: ~$5,251,778
- Category: Food & Drink / Beverages
- Country: United States
- [Edit if wrong] or [☑ This is correct]

---

[After confirmation]

Agent: Perfect! ✓ Store confirmed

Now, here's an important choice - how would you like to launch?

You can go live immediately OR join a co-marketing campaign with other merchants for bigger impact.

[Two option cards appear]

Card 1: Go-Live Now
Start accepting payments as soon as verification completes
→ Faster time to market
→ Full control of timing

Card 2: Join Launch Campaign
Launch together with 10-20 other merchants
→ Coordinated marketing
→ Shared audiences
→ 2x network effects

[Continue with selection]

---

[After path selection - if Go-Live]

Agent: Got it - you're going for speed! 🚀

As soon as verification completes, you'll be live.

---

[After path selection - if Launch Campaign]

Agent: Excellent choice! Campaign launches have 2x the initial traction 📈

I'll show you available campaigns after we complete verification.

---

Agent: Next up: business verification

This is required by payment regulations (I know, paperwork 😅), but it's what unlocks the good stuff - accepting point redemptions!

Takes 1-2 business days to process. Let's knock it out.

[Continue to Section 2]
```

---

### Section 2: Business Verification

**Bot Messages:**

```
Bot: I need your business information for verification. This is required by federal regulations for payment processing.

Don't have this handy? [Send to business owner via SMS]

[Business Information Card expands with fields:]
- Legal Business Name *
- EIN / Tax ID *
- Business Type (dropdown) *
- Business Description (optional)
- Business Address *
  - Street, Suite, City, State, ZIP
- Contact Information
  - Business Phone, Email, Website

[Save & Continue button]

---

[After save]

Bot: Thanks! That's saved.

☑ Business Information
   Acme Corporation, LLC • XX-XXX7890
   [Edit]

---

Bot: Next, I need details about an authorized representative - typically the business owner.

This person must own 25% or more of the business.

Not you? [Send to business owner via SMS]

[Account Representative Card expands with fields:]
- First Name *, Last Name *
- Title / Role *
- Ownership Percentage *
- Date of Birth * (Month, Day, Year)
- Last 4 digits of SSN *
  Help text: "For identity verification only"
- Contact Information
  - Email *, Phone *
- Home Address *
  - Street, Apt/Unit, City, State, ZIP

[Save & Continue button]

---

[After save]

Bot: Perfect! Last step for verification: your bank account for receiving payouts.

🔒 Your bank account information is encrypted and sent securely to Stripe. We never store your full account number.

Need someone else to provide this? [Send to account holder via SMS]

[Bank Account Card expands with fields:]
- Account Holder Name *
- Account Holder Type * (Business/Personal)
- Routing Number * (9 digits)
- Account Number *
- Confirm Account Number *

[Visual helper: Check image showing routing/account/check numbers]

[Save & Continue button]

---

[After save]

Bot: Excellent! Let me show you everything before we submit for verification.

[Review checklist appears showing all 3 cards collapsed]

☑ Business Information
   Acme Corporation, LLC • XX-XXX7890
   [Edit]

☑ Account Representative
   John Doe • CEO
   [Edit]

☑ Bank Account
   Business Account • ...4567
   [Edit]

────────────────────────────

Bot: By submitting, you confirm this information is accurate. Stripe will verify your business information to comply with regulatory requirements.

This process typically takes 1-2 business days. You'll receive an email when verification is complete.

[Back] [Submit for Verification]

---

[After submission]

Bot: ✓ Submitted for verification!

Stripe is now reviewing your information. This typically takes 1-2 business days.

I'll email you at [email] when verification is complete. You can also check back here anytime.

[Go to Dashboard] [Continue exploring]
```

---

### Section 3: Rewards Program (After KYB Approval)

**KYB Pending State Messages:**

```
[Dashboard shows during 1-2 day wait]

Progress Sidebar:
☑ Your Store
☑ Business Verification
⏳ Waiting for Approval...
   Check back in 1-2 business days

[Main area shows:]

Bot: Your business verification is being reviewed by Stripe.

This typically takes 1-2 business days. You'll receive an email when complete.

In the meantime, you can:
• Explore the dashboard
• Learn about rewards commerce
• [Watch: How Saltwyk Works] (video)

We'll send you an email at [email] when verification is complete.

[Go to Dashboard]
```

**After KYB Approved:**

```
[Email received: "Saltwyk Verification Complete - Finish Your Setup"]

[Merchant returns to app]

Bot: 🎉 Great news! Your business is verified.

Now let's connect your rewards program so you can start accepting point redemptions.

Which rewards platform do you use?

[Platform selector cards:]
○ Smile.io
○ Yotpo
○ Other (vote for support)

[Continue]

---

[After Smile.io selected]

Bot: I'll need your Smile.io API credentials to connect your account.

Don't have these? [Send to technical team via SMS]

[Where to find your API keys - expandable help:]

Log into your Smile.io admin panel:
1. Navigate to Settings → Developer Tools
2. Copy your Private API Key (starts with "sk_")
3. Paste it below

🔒 Your API key is encrypted and stored securely.

[API Connection Card expands:]

Smile.io Private API Key *
[                                    ] (masked input)

[Test Connection button]

---

[After clicking Test Connection]

Agent: Testing connection...

[3 seconds later - success case]

🎉 MILESTONE #2: REWARDS CONNECTED! 🎉
[Celebration moment - confetti or success card]

Agent: Yes! That's what I'm talking about! 🎊

Account: Liquid Death Rewards
Plan: Smile.io Enterprise ✓
API Access: Enabled

You just unlocked point redemptions. One step closer to network access and that 2.4% rate!

☑ Rewards Program Connected
   Smile.io Enterprise
   [Edit]

[Continue]

---

[Alternative - tier insufficient]

Agent: Hmm, connection worked but there's a small hiccup... ⚠️

Your Smile.io plan doesn't include API access yet. You'll need Enterprise tier to unlock this.

Current Plan: Growth
Required Plan: Enterprise
Why: API access = real-time point balance checks

What to do:
• Contact Smile.io to upgrade (mention Saltwyk partnership for priority!)
• Estimated cost: $299/month (confirm with Smile.io)

Or:
• Vote for other platforms we should support
• I'll notify you when we add more options

[Contact Smile.io] [Vote for other platforms]
Required Plan: Enterprise
Why: API access is required for real-time point balance checking

What to do:
• Contact Smile.io to upgrade (mention Saltwyk partnership for priority support)
• Estimated cost: $299/month (confirm with Smile.io)

[Contact Smile.io] [Vote for other platforms]

[Save progress and we'll notify you when ready]
```

---

### Section 4: Payment Setup

**Bot Messages:**

```
Bot: Now let's set up payments. Here's how Saltwyk pricing works:

💰 Transaction Fee: 2.9%

You pay 2.9% per transaction when customers use points to purchase from your store.

Example: Customer redeems $100 in points
• You pay: $2.90
• You receive: $97.10 (after settlement)

This is our only fee - no monthly charges, setup fees, or hidden costs.

[Continue to Funding]

---

Bot: To accept payments, you'll need to fund a "clearing balance."

Think of this as working capital for point redemptions:
• You fund it upfront (via bank transfer)
• Saltwyk uses it to clear customer transactions
• You get paid back on your schedule

How much you need depends on your expected redemption volume.

Let me help you calculate...

[Clearing Balance Calculator Card appears:]

Expected monthly sales: [$______]
Redemption rate: [10% ▼] (typical range: 5-15%)

Estimated weekly redemptions: $2,500

Recommended balance: $5,000
• Covers ~2 weeks of redemptions
• Buffer for peak days

[Adjust assumptions ▼]

─────────────────────────

How would you like to add funds?

○ ACH Transfer (Free, arrives in 1-2 business days)
  From: Bank of America (...4567)
  [Change bank]

○ Debit Card (1.5% fee = $75, instant)
  [Add debit card]

[Continue]

---

[If needs delegation]

Bot: Need finance approval for this transfer?

[Send to finance team via SMS]

---

[After funding initiated]

Bot: ✓ Transfer initiated!

$5,000 ACH transfer from Bank of America (...4567)

Expected arrival: 1-2 business days
We'll notify you when funds are available.

☑ Clearing Balance Funded
   $5,000 pending
   [View details]

---

Bot: Want me to automatically add funds when your balance runs low?

Auto-fund helps ensure you never run out of clearing balance.

How it works:
• Set a threshold (e.g., $2,000)
• When balance drops below threshold, we automatically transfer funds
• Uses your linked bank account (free ACH)

[Set up auto-fund] [Skip - I'll manage manually]

---

[If set up auto-fund]

Bot: Great! Let's configure your auto-fund settings.

[Auto-Fund Settings Card:]

Trigger: When balance drops below
[$2,000]

Transfer amount
[$3,000]

Payment method
ACH from Bank of America (...4567)

Estimated frequency: ~1x per week
(Based on your expected volume)

[Save Settings] [Cancel]

---

[After auto-fund saved]

Bot: ✓ Auto-fund is now active.

When your balance drops below $2,000, we'll automatically transfer $3,000 from your bank account.

☑ Auto-Fund Configured
   Threshold: $2,000 → Add $3,000
   [Edit]

---

Bot: Last question for payment setup: how often do you want to receive payouts?

Payouts return your cleared balance back to your bank account.

Choose a schedule:

○ Daily (Recommended)
  Receive payouts every night at 11 PM EST
  Better cash flow, smaller amounts

○ Weekly
  Receive payouts every Monday at 11 PM EST
  Fewer transactions, requires higher balance

○ Minimum Amount
  Receive payout when cleared funds reach $[____]
  Maximum control

[Continue]

---

[After payout selection]

Bot: ✓ Payout schedule saved!

You'll receive daily payouts at 11 PM EST to your bank account.

☑ Payout Schedule Set
   Daily at 11 PM EST
   [Edit]
```

---

### Section 5: Launch Strategy

**Bot Messages:**

```
Bot: Almost done! Just a couple more decisions about your launch.

First: do you want to exclude any competing merchants?

You can prevent up to 10 merchants from accepting your points or you accepting theirs.

This is optional - most merchants don't exclude anyone.

[Exclude merchants] [Skip this step]

---

[If exclude merchants]

Bot: Which merchants would you like to exclude?

[Merchant Exclusion Card:]

Search for merchants:
[Search by name...          ]

Excluded merchants (0/10):
[Empty state]

For each merchant you exclude:
• Your customers can't spend their points at that merchant
• Their customers can't spend their points at your store

[Add merchant] [Done]

---

[After exclusions (or skip)]

Bot: Perfect! Here's what happens next:

[If Go-Live path]

✓ Business verified
✓ Rewards program connected
✓ Payment setup complete

You're ready to go live!

When you click "Go Live," customers will immediately see the "Pay with Points" option on your cart page.

[Review setup] [Go Live Now!]

---

[If Launch Campaign path]

Bot: You chose to join a launch campaign. Let me show you available cohorts:

[Campaign Selection Cards appear - 3 options]

Card 1:
🎄 Holiday Rush Campaign
Launch Date: December 15, 2025
Merchants: 12/20 confirmed
Theme: "Gift yourself with points this holiday season"

[View Details] [Join This Campaign]

Card 2:
🌟 New Year Fresh Start
Launch Date: January 15, 2026
Merchants: 8/20 confirmed
Theme: "Start the year right - shop with your rewards"

[View Details] [Join This Campaign]

Card 3:
💕 Valentine's Romance
Launch Date: February 1, 2026
Merchants: 3/20 confirmed
Theme: "Treat yourself and others with points"

[View Details] [Join This Campaign]

---

[After campaign selection]

Bot: ✓ You're in! Welcome to [Campaign Name].

Launch Date: [Date]
Your cohort: 12 merchants

What happens next:
• You'll receive campaign marketing materials
• We'll coordinate launch timing
• You go live on [Date] with the full cohort

Until then, your setup is complete. You can:
• Preview your cart widget
• Configure your preferences
• Prepare your customers

[Go to Dashboard]

---

[Final success screen - either path]

🎉 Setup Complete!

You're all set to accept rewards commerce.

☑ Store verified
☑ Business approved by Stripe  
☑ Rewards program connected
☑ Clearing balance funded
☑ Launch strategy configured

[If Go-Live: "You're now live!"]
[If Campaign: "You'll go live on [Date]"]

[Go to Dashboard]
```

---

## State Management Specification

### Onboarding State Object

```typescript
{
  // Progress tracking
  currentSection: 'business_verification',
  completedSections: ['store_confirmation'],
  
  // Section 1: Store
  storeInfo: {
    name: 'Liquid Death',
    revenue: 5251778,
    category: 'Food & Drink / Beverages',
    country: 'United States',
    confirmed: true
  },
  pathSelection: 'go_live' | 'launch_campaign',
  
  // Section 2: Business Verification
  businessInfo: {
    legalName: 'Acme Corporation, LLC',
    ein: 'XX-XXX7890',
    businessType: 'llc',
    address: { street, city, state, zip },
    description: '...',
    status: 'complete' | 'pending' | 'delegated'
  },
  representativeInfo: {
    firstName: 'John',
    lastName: 'Doe',
    title: 'CEO',
    ownershipPercent: 100,
    dob: { month, day, year },
    ssnLast4: '1234',
    email: '...',
    phone: '...',
    address: { ... },
    status: 'complete' | 'pending' | 'delegated'
  },
  bankAccount: {
    accountHolderName: '...',
    accountType: 'business',
    routingNumber: '...',
    accountNumber: '...',
    status: 'complete' | 'pending' | 'delegated'
  },
  kybStatus: 'submitted' | 'pending' | 'approved' | 'failed',
  
  // Section 3: Rewards Program
  rewardsProgram: {
    platform: 'smile_io' | 'yotpo',
    credentials: { apiKey: '...' },
    tier: 'enterprise',
    status: 'connected' | 'pending' | 'failed'
  },
  
  // Section 4: Payment Setup
  pricing: {
    rate: 0.029,
    acknowledged: true
  },
  clearingBalance: {
    amount: 5000,
    method: 'ach' | 'debit',
    bankAccount: 'ref...',
    status: 'pending' | 'complete'
  },
  autoFund: {
    enabled: true,
    threshold: 2000,
    amount: 3000,
    method: 'ach'
  },
  payoutSchedule: 'daily' | 'weekly' | { minimumAmount: number },
  
  // Section 5: Launch Strategy
  excludedMerchants: ['merchant_id_1', ...],
  launchCampaign: {
    id: 'holiday_rush_2025',
    name: 'Holiday Rush Campaign',
    launchDate: '2025-12-15'
  },
  
  // Delegation tracking
  delegations: {
    businessInfo: { phone: '...', status: 'pending' | 'complete' },
    representative: { phone: '...', status: 'pending' | 'complete' },
    bankAccount: { phone: '...', status: 'pending' | 'complete' },
    apiConnection: { phone: '...', status: 'pending' | 'complete' },
    clearingBalance: { phone: '...', status: 'pending' | 'complete' }
  },
  
  // Chat history (for persistence/resume)
  chatHistory: [
    { type: 'bot', content: '...', timestamp: '...' },
    { type: 'system', content: 'Card saved', timestamp: '...' },
    ...
  ],
  
  // Metadata
  createdAt: '...',
  updatedAt: '...',
  completedAt: null | '...'
}
```

---

## Mobile Responsive Behavior

### Breakpoints

- **Desktop:** ≥1024px (sidebar + chat area side-by-side)
- **Tablet:** 768px - 1023px (sidebar collapses, top progress bar)
- **Mobile:** <768px (stacked, full-width)

### Mobile Transformations

**Progress Sidebar → Top Bar:**
```html
<div class="mobile-progress-bar fixed top-0 left-0 right-0 bg-intaglio-dark p-4 z-50">
  <div class="flex items-center justify-between mb-2">
    <button class="hamburger">
      <svg><!-- Menu icon --></svg>
    </button>
    <h2 class="text-sm font-medium text-ledger-paper">Business Verification</h2>
    <button class="help">
      <svg><!-- Question mark icon --></svg>
    </button>
  </div>
  <div class="progress-bar bg-ledger-paper/20 h-2 rounded-full overflow-hidden">
    <div class="bg-emerald-serial h-full" style="width: 40%"></div>
  </div>
</div>
```

**Cards → Full Width:**
- All cards expand to 100% width (minus padding)
- Form fields stack vertically (no side-by-side on mobile)
- Buttons stack or go full-width

**Chat Messages → Full Width:**
- Bot avatar shrinks to 32px
- Message bubbles expand to use available space
- System messages remain centered

**Sticky Continue Button:**
```html
<div class="mobile-continue-button fixed bottom-0 left-0 right-0 p-4 bg-ledger-paper border-t border-ledger-paper-muted">
  <button class="btn-primary w-full bg-emerald-serial text-white py-3 rounded-lg">
    Save & Continue
  </button>
</div>
```

---

## Design Tokens

### Colors (Fire Opal Merchant Identity)

**From brand.json:**
- **Primary CTA:** Emerald Serial `#008C45`
- **Interactive States:** Indigo (focus, selection)
- **Success:** Lime Thread `#CCFF00`
- **Warning:** Orange Thread `#FF5900`
- **Error:** Magenta Thread `#FF0090`
- **Background Sidebar:** Intaglio Dark (from design system)
- **Background Content:** Ledger Paper (light, off-white)
- **Text Primary:** Ledger Paper (dark shade)
- **Text Muted:** Ledger Paper (60% opacity)

### Typography

**Headings:**
- Section titles: `text-base font-medium` (16px, medium weight)
- Card titles: `text-base font-medium`
- Bot name: `text-sm text-muted`

**Body:**
- Bot messages: `text-base` (16px)
- Form labels: `text-sm font-medium` (14px, medium)
- Help text: `text-xs text-muted` (12px)
- System messages: `text-sm`

### Spacing

**Padding:**
- Cards: `p-6` (24px) desktop, `p-4` (16px) mobile
- Form fields: `px-3 py-2` (12px horizontal, 8px vertical)
- Buttons: `px-6 py-2` (24px horizontal, 8px vertical)

**Margins:**
- Between chat messages: `mb-4` (16px)
- Between form fields: `space-y-4` (16px vertical)
- Between sections: `space-y-6` (24px)

### Border Radius

- Cards: `rounded-lg` (8px)
- Buttons: `rounded-lg` (8px)
- Form inputs: `rounded-lg` (8px)
- Chat bubbles: `rounded-2xl` (16px)
- Small elements: `rounded-full` (pills, badges)

---

## Implementation Sequence for Designer

### Phase 1: Foundation Components (Days 1-2)

**Priority 1:**
1. Progress Sidebar component (all states)
2. Chat message bubble (bot, system, user variants)
3. Data card (collapsed state)
4. Data card (expanded state)

**Deliverables:**
- HTML/CSS specs for each component
- All states documented (default, hover, focus, error)
- Responsive behavior specified

---

### Phase 2: Section 1 Design (Day 3)

**Priority 2:**
1. Welcome message with options
2. Store confirmation card
3. Path selection cards (Go-Live vs Launch Campaign)
4. Conversation flow copy

**Deliverables:**
- Complete Section 1 visual design
- All bot messages written
- Card specifications with fields

---

### Phase 3: Section 2 Design (Days 4-5)

**Priority 3:**
1. Business information card (with delegation)
2. Representative card (with delegation)
3. Bank account card (with delegation + visual helper)
4. Review & submit screen
5. Delegation button pattern
6. Pending/delegated states

**Deliverables:**
- Complete Section 2 visual design
- Delegation UX pattern documented
- All form validation states

---

### Phase 4: Section 3-5 Design (Days 6-7)

**Priority 4:**
1. KYB pending state screen
2. API connection card (platform selection + credentials)
3. Tier verification modal/card
4. Clearing balance calculator
5. Auto-fund settings
6. Payout schedule selector
7. Campaign selection cards
8. Final go-live screen

**Deliverables:**
- Complete Sections 3-5 visual design
- Calculator component spec
- Campaign card design
- Success/celebration screen

---

### Phase 5: Mobile Responsive (Days 8-9)

**Priority 5:**
1. Mobile progress bar transformation
2. Mobile card layouts
3. Mobile form stacking
4. Mobile sticky buttons
5. Hamburger menu for progress

**Deliverables:**
- Complete mobile specifications
- Responsive breakpoint documentation
- Mobile-specific component variants

---

### Phase 6: Polish & Documentation (Day 10)

**Priority 6:**
1. Error states for all components
2. Loading states
3. Empty states
4. Accessibility annotations
5. Developer handoff documentation

**Deliverables:**
- Complete design system integration guide
- Edge case visual specifications
- Developer-ready component library

---

## Edge Cases & Error States

### Error State Specifications

**Form Validation Errors:**
```html
<div class="form-field error">
  <label class="block text-sm font-medium text-ledger-paper mb-1">
    EIN / Tax ID *
  </label>
  <input 
    type="text" 
    class="w-full px-3 py-2 border border-magenta-thread rounded-lg focus:border-magenta-thread focus:ring-1 focus:ring-magenta-thread"
    value="123"
  />
  <p class="text-xs text-magenta-thread mt-1 flex items-center gap-1">
    <svg class="w-4 h-4"><!-- Error icon --></svg>
    Please enter a valid EIN (XX-XXXXXXX)
  </p>
</div>
```

**API Connection Failure:**
```html
<div class="error-card bg-magenta-thread/10 border border-magenta-thread rounded-lg p-4">
  <div class="flex items-start gap-3">
    <svg class="w-5 h-5 text-magenta-thread flex-shrink-0"><!-- X icon --></svg>
    <div>
      <h4 class="font-medium text-ledger-paper mb-1">Connection Failed</h4>
      <p class="text-sm text-ledger-paper-muted mb-3">
        Unable to connect to Smile.io. This could be because:
      </p>
      <ul class="text-sm text-ledger-paper-muted space-y-1 mb-3">
        <li>• Invalid API key</li>
        <li>• API key was revoked</li>
        <li>• Smile.io is temporarily unavailable</li>
      </ul>
      <div class="flex gap-2">
        <button class="text-sm text-emerald-serial hover:text-emerald-serial-dark font-medium">
          Try Again
        </button>
        <button class="text-sm text-emerald-serial hover:text-emerald-serial-dark font-medium">
          Contact Support
        </button>
      </div>
    </div>
  </div>
</div>
```

**KYB Verification Failed:**
```html
<div class="kyb-failed-card bg-orange-thread/10 border border-orange-thread rounded-lg p-6">
  <div class="flex items-start gap-3 mb-4">
    <svg class="w-6 h-6 text-orange-thread flex-shrink-0"><!-- Warning icon --></svg>
    <div>
      <h3 class="font-medium text-ledger-paper mb-1">Verification Issue</h3>
      <p class="text-sm text-ledger-paper-muted">
        Stripe was unable to verify your business information.
      </p>
    </div>
  </div>
  
  <div class="bg-ledger-paper/50 rounded-lg p-3 mb-4">
    <p class="text-sm text-ledger-paper mb-2">
      <strong>Reason:</strong> EIN doesn't match business name in IRS records
    </p>
  </div>
  
  <p class="text-sm text-ledger-paper-muted mb-4">
    Please review your business information and try again. If you believe this is an error, contact support.
  </p>
  
  <div class="flex gap-3">
    <button class="btn-secondary px-4 py-2 text-sm">
      Contact Support
    </button>
    <button class="btn-primary bg-emerald-serial text-white px-4 py-2 text-sm rounded-lg">
      Edit Business Info
    </button>
  </div>
</div>
```

---

## Accessibility Requirements

### Keyboard Navigation

- **Tab order:** Progress sidebar → Chat area → Cards (top to bottom)
- **Enter key:** Activates primary action (Save, Continue)
- **Escape key:** Closes expanded card (collapses to summary)
- **Arrow keys:** Navigate between form fields within card

### Screen Reader Support

**ARIA Labels:**
```html
<div 
  class="data-card expanded" 
  role="region" 
  aria-labelledby="card-title-business"
  aria-expanded="true"
>
  <h3 id="card-title-business">Business Information</h3>
  ...
</div>
```

**Progress Sidebar:**
```html
<nav aria-label="Onboarding progress">
  <div 
    class="section-item complete" 
    role="status" 
    aria-label="Your Store: Complete"
  >
    ...
  </div>
</nav>
```

**Form Fields:**
```html
<div class="form-field">
  <label for="ein-input" class="...">
    EIN / Tax ID *
  </label>
  <input 
    id="ein-input"
    type="text"
    aria-required="true"
    aria-describedby="ein-help"
  />
  <p id="ein-help" class="text-xs text-muted">
    Required for companies and non-profits
  </p>
</div>
```

### Focus States

**All interactive elements must have visible focus:**
```css
.btn-primary:focus {
  outline: 2px solid theme('colors.indigo.focus');
  outline-offset: 2px;
}

.form-input:focus {
  border-color: theme('colors.indigo.focus');
  ring: 1px solid theme('colors.indigo.focus');
}
```

---

## Developer Handoff Documentation

### Component Library Structure

```
/components/merchant-onboarding/
  /layout/
    ProgressSidebar.html
    ChatArea.html
    MobileProgressBar.html
  
  /chat/
    BotMessage.html
    SystemMessage.html
    UserMessage.html
  
  /cards/
    DataCard-Collapsed.html
    DataCard-Expanded.html
    DataCard-Pending.html
    DataCard-Delegated.html
  
  /forms/
    BusinessInfoForm.html
    RepresentativeForm.html
    BankAccountForm.html
    APIConnectionForm.html
    ClearingBalanceForm.html
  
  /patterns/
    DelegationButton.html
    SecurityCallout.html
    ErrorCard.html
    SuccessCard.html
  
  /sections/
    Section1-Store.html (complete example)
    Section2-BusinessVerification.html
    Section3-RewardsProgram.html
    Section4-PaymentSetup.html
    Section5-LaunchStrategy.html
```

### Usage Examples in Documentation

Each component HTML file should include:
1. **Component description**
2. **Usage example**
3. **Available variants**
4. **Required props/attributes**
5. **Accessibility notes**
6. **Responsive behavior**

**Example format:**

```html
<!-- components/cards/DataCard-Expanded.html -->

<!--
  DataCard (Expanded State)
  
  Purpose: Editable form for capturing merchant data
  
  Variants:
  - with-delegation: Shows delegation button
  - with-security-note: Shows security callout
  
  Usage:
  <div class="data-card expanded" data-card-type="business-info">
    ...
  </div>
  
  Accessibility:
  - Use aria-labelledby for card title
  - Mark required fields with aria-required
  - Provide aria-describedby for help text
  
  Responsive:
  - Full width on mobile (<768px)
  - Max 600px on desktop
  - Fields stack vertically on mobile
-->

<div class="data-card expanded ...">
  <!-- Component markup here -->
</div>
```

---

## Design Decisions (Finalized)

**Layout:** Sidebar + unified area ✅

**Mobile progress:** Use established mobile progress pattern from existing design system ✅

**Agent character:** Dedicated agent avatar (not just Saltwyk logo) ✅
- Should feel like a helpful guide, not a chatbot
- Personality: Enthusiastic about rewards, celebrates wins, empathetic when delegating

**Campaign cards:** Use marketing card pattern (see design system examples) ✅
- Gradient backgrounds with compelling visuals
- Strong headline + benefit copy
- Clear CTA button
- Job: Compel click → Campaign detail screen (out of scope for this design)

**Delegation SMS template:**
```
[Name] asked you to complete Saltwyk [Platform] onboarding [financial/business] information. Follow this link to complete onboarding: [link]

For your security, we encourage you to verify this request with [Name] before completing.
```

**Error recovery:** Context-dependent (inline edit for data errors, contact support for verification failures)

**Milestone Celebrations:** 🎉
1. App installed
2. Rewards program connected
3. Clearing balance funded
4. Go-live

---

## Open Questions Remaining

Before finalizing designs, need:

1. **Agent character design:** Name? Visual style? (Friendly mascot vs professional avatar?)

2. **Celebration moments:** Modal overlays, confetti animation, or inline success cards?

3. **Mobile progress pattern:** What's the exact existing pattern to reuse? (Need reference)

4. **Phishing security:** Should delegation SMS include additional verification step? Or is disclaimer sufficient?

---

## Success Criteria

Design is complete when:

✅ All 5 sections have complete visual specifications  
✅ All components exist in HTML/CSS with states  
✅ Mobile responsive behavior is documented  
✅ Accessibility requirements are annotated  
✅ Conversation copy is written for all bot messages  
✅ Error states are designed for all failure scenarios  
✅ Developer handoff docs are ready  
✅ Design integrates with existing Fire Opal system

---

**Next Step:** Answer open questions, then Claude Code Designer can begin implementation following this spec.

