# Merchant App Design Plan

**Last Updated:** 2026-01-18
**Status:** Draft - Design Review Required
**Owner:** Tela

---

## Investigation Summary

### Documents Reviewed

| Document | Location | Key Findings |
|----------|----------|--------------|
| **Merchant Job Stories** | `merchant-app-jobs-to-be-done.md` | 31 jobs across 7 phases, MVP vs Post-MVP priorities defined |
| **Shopify Onboarding Flow** | `new-shopify-merchant-onboarding-flow.md` | 9-step onboarding with mermaid diagram, no screen designs yet |
| **Clearing Balance Management** | `merchant-clearing-balance-management-flow.md` | Detailed operational flow, screen narratives, 10 copy needs identified |
| **Merchant Dashboard Flow** | `merchant-dashboard-flow.md` | 30 screen references (M1-M30) defined |
| **Demo Conversion Flow** | `demo-to-production-conversion-flow.md` | Demo → Sandbox → Production progression mapped |
| **Brand Guidelines** | `brand.json` | Fire Opal (dark sidebar) for merchant surfaces, color semantics, terminology |
| **Design System** | `/saltwyk-design` repo | 19 component categories, design tokens, merchant rules defined |

### Design System Inventory

**Well-Developed (Ready to Use):**
- Buttons (all variants, sizes, states)
- Navigation (top nav, sidebar, bottom nav, breadcrumbs)
- Tables (sortable, selectable, expandable, 4 variants)
- Modals (dialog, bottom sheet, states)
- Forms/Inputs (text, phone, OTP, validation states)
- Badges (status, semantic colors)
- Toasts/Alerts (success, warning, error, info)
- Context Switcher (profile dropdown, role switching)
- Tabs, Dropdowns, Avatars, Progress, Tooltips, Popovers

**Needs Design for Merchant App:**
- KPI/Metric Cards (revenue, volume, conversion)
- Data Visualization (charts, graphs, sparklines beyond basic)
- Clearing Balance Display (status, coverage estimates)
- Onboarding Wizard (stepper, progress tracking)
- Cohort Selection Cards
- Transaction Detail Views
- Settings Sections (bank account, payout schedule)
- Alert Response Patterns (low balance, failures)

### Brand Guidelines Extracted

**Merchant Surface Identity:** "Fire Opal" - Professional, operational, confident

**Color Rules:**
- **Primary CTA:** Emerald Serial (`#008C45`) - interactive elements only (~5-10% of UI)
- **Interactive States:** Indigo for focus, selection, links
- **Success:** Lime Thread (`#CCFF00`)
- **Warning:** Orange Thread (`#FF5900`)
- **Error/Destructive:** Magenta Thread (`#FF0090`)
- **Background:** Dark intaglio sidebar + light ledger paper content

**Thread Treatment:** Cool gradient (Cyan → Magenta) for merchant surfaces

**Terminology:**
- Use "spend" not "redeem"
- Use "accept" not "enable redemption"
- Use "clearing balance" not "deposit"
- Use "points" for user-facing, "earned value" for investors

**Voice for Merchants:** ROI-focused, pragmatic, commercially grounded, plain language

---

## Screen Inventory by Journey Phase

### Phase 1: Discovery & Awareness

**Jobs:** 5 (Discovering Own-Points, Understanding Eligibility, Evaluating ROI, Discovering Network, Direct Network Discovery)

| Screen/Component | Purpose | Priority | Status |
|------------------|---------|----------|--------|
| Landing Page | Entry point from community/search | MVP | **Needs Design** |
| Eligibility Checker | Platform/tier compatibility | MVP | **Needs Design** |
| ROI Calculator Widget | Value proposition with numbers | MVP | **Needs Design** |
| Network Value Prop Modal | Explain cross-merchant benefits | Post-MVP | **Needs Design** |
| Platform Support List | Which rewards platforms work | MVP | **Needs Design** |

**Components Needed:**
- Hero section with value proposition
- Calculator/slider component
- Platform logo grid with status badges
- Comparison table (Current State vs Saltwyk)

**Edge Cases:**
- No Storeleads data available → Manual entry form
- Unsupported platform → "Vote for support" + alternative options

---

### Phase 2: Qualification & Eligibility

**Jobs:** 5 (Confirming Store Info, Verifying Platform, Checking Tier, Upgrading Tier, Network Pre-Qualification)

| Screen/Component | Purpose | Priority | Status |
|------------------|---------|----------|--------|
| Welcome Screen | Revenue/category confirmation | MVP | **Needs Design** |
| Store Info Edit Form | Correct pre-filled data | MVP | **Needs Design** |
| Platform Selection | Choose Smile.io/Yotpo | MVP | **Needs Design** |
| API Connection Screen | Enter credentials, test connection | MVP | **Needs Design** |
| Tier Verification Result | Success or upgrade needed | MVP | **Needs Design** |
| Upgrade Path Modal | Help with rewards platform upgrade | MVP | **Needs Design** |
| Network Eligibility Screen | Requirements for network | Post-MVP | **Needs Design** |

**Components Needed:**
- Pre-filled form with edit capability
- Platform card selector (with logos)
- Secure API key input (masked, with instructions)
- Connection test status (loading, success, failure)
- Tier requirement comparison card
- "Save & Exit" progress preservation

**Edge Cases:**
- Wrong API key format → Inline validation error
- Expired/revoked key → "Check if key was revoked" message
- Rate limited → "Retrying..." with spinner
- Platform downtime → "Try again in a few minutes"
- Legacy plan with API access → Allow even if plan name unexpected

---

### Phase 3: Installation & Setup (Own-Points)

**Jobs:** 6 (Getting Access, Installing App, Connecting Rewards Platform, Configuring Widget, Testing Flow, Launch Prep)

#### ✅ Already Built (Implemented)

| Screen/Component | Purpose | Priority | Implementation Status |
|------------------|---------|----------|----------------------|
| Onboarding Welcome | Educational intro with KYB explanation, video placeholder | MVP | **✅ Built** - Needs video content |
| Path Selection | Choose Go-Live or Launch Campaign | MVP | **✅ Built** |
| Business Information | Legal name, EIN, address, description | MVP | **✅ Built** - Missing delegation option |
| Account Representative | Personal info, SSN last 4, ownership % | MVP | **✅ Built** - Has delegation ✓ |
| Bank Account | Routing, account numbers with visual helpers | MVP | **✅ Built** - Has delegation ✓ |
| Review & Submit | Verification checklist, submit to Stripe | MVP | **✅ Built** - Needs expansion to show all steps |
| Progress Indicator | Visual progress: 33% → 50% → 67% → 83% → 100% | MVP | **✅ Built** |

**✅ Built Components:**
- Stepper/wizard progress indicator with percentage
- Form sections with validation
- Secure input fields (bank account with check diagram)
- Delegation pattern ("Send via SMS" buttons on representative & bank)
- Security messaging callouts (encryption, Stripe partnership)
- Back/Continue navigation
- Checklist with status icons (✓ Complete)
- Field-level help text
- Dropdown selects (Business Type, Account Type, State, etc.)
- Masked sensitive inputs (SSN, account numbers)

**✅ Built Patterns:**
- Two-button delegation ("Not the right person? Send to X via SMS")
- Visual education (bank check diagram showing routing/account/check numbers)
- Info callouts (light background boxes with security/explanation text)
- Confirmation fields (account number + confirm account number)
- Multi-column layouts (First/Last name, City/State/ZIP)

#### ❌ Missing Screens (Need Design)

| Screen/Component | Purpose | Priority | When in Flow |
|------------------|---------|----------|--------------|
| Store Confirmation | Revenue/category from Storeleads, allow edits | MVP | BEFORE path selection |
| API Key Connection | Smile.io/Yotpo credentials with instructions & delegation | MVP | AFTER KYB approval (1-2 days) |
| Tier Verification Result | Success or upgrade path modal | MVP | During API connection |
| Pricing Explanation | 2.9% own-points vs 2.4% network, promotional offers | MVP | After API connection |
| Fund Clearing Balance | Calculator, ACH/debit options, delegation to finance | MVP | After API connection - M8, M10 |
| Auto-Fund Setup | Threshold, replenishment amount, toggle ON/OFF | MVP | With clearing balance - M9, M11 |
| Payout Schedule | Daily/weekly/minimum selection | MVP | With clearing balance - M15, M16 |
| Exclude Merchants | Optional exclusion list (up to 10 merchants) | MVP | After clearing balance - M18 |
| Launch Campaign Cards | Cohort selection with theme, spots, launch date | MVP | If "Launch" path chosen |
| Setup Complete | Final checklist, go-live confirmation | MVP | After all steps |
| Post-KYB Waiting | Verification pending state, estimated timeline | MVP | Between KYB submit and approval |
| Test Mode Screen | Sandbox checkout testing | Post-MVP | After go-live |

**Out of Scope (Separate Efforts):**
- Install Link Generator (landing page, pre-app)
- Shopify Consent Screen (Shopify-controlled)
- Widget Config Screen (cart widget = mature, separate design process)
- Theme Editor Guide (cart widget = separate effort)

**Components Still Needed:**
- Store confirmation form with pre-filled data + edit capability
- API key secure input (masked, platform-specific instructions with screenshots)
- Connection test status indicators (loading, success, failure, retry)
- Tier comparison card (current tier vs required tier)
- Upgrade path modal (contact Smile.io/Yotpo, partnership benefits)
- Calculator with slider + coverage projections
- ACH vs Debit card selector with fee display
- Toggle switch for auto-fund
- Radio button groups for payout schedule
- Merchant exclusion list manager (search, add, remove, reason text)
- Cohort selection cards (theme, strategy, spots remaining, launch date, video)
- Pending status indicators (KYB processing, API verifying, funding in transit)
- Expanded final checklist (all 15+ steps, not just 3)
- Delegation buttons for business info and API keys
- Go-live confirmation with celebration moment

#### Corrected Onboarding Sequence

**Phase 1: Initial Onboarding (KYB Submission)**

1. ✅ Onboarding Welcome (video, KYB explanation, "What to expect")
2. ❌ Store Confirmation (show Storeleads revenue/category, allow edits)
3. ✅ Path Selection (Go-Live immediately vs Launch Campaign)
4. ✅ Business Information (EIN, address, description) - **needs delegation option**
5. ✅ Account Representative (personal info, SSN last 4, ownership) - **has delegation ✓**
6. ✅ Bank Account (routing, account numbers) - **has delegation ✓**
7. ✅ Review & Submit (checklist, certify accuracy) - **needs to show all steps, not just 3**

**↓ Wait 1-2 business days for KYB approval ↓**

8. ❌ KYB Pending State (show progress, estimated timeline, can access dashboard in read-only)

**Phase 2: Post-KYB Onboarding (After Verification Approved)**

9. ❌ API Key Connection (Smile.io/Yotpo selection, credential entry, test connection) - **needs delegation to technical team**
10. ❌ Tier Verification (automatic during connection test, upgrade modal if insufficient)
11. ❌ Pricing Explanation (2.9% own-points, 2.4% network, promotional offers if available)
12. ❌ Fund Clearing Balance (calculator, ACH vs debit, coverage estimates) - **needs delegation to finance team**
13. ❌ Auto-Fund Setup (threshold, replenishment amount, toggle, frequency estimate)
14. ❌ Payout Schedule (daily/weekly/minimum, impact on balance requirements)
15. ❌ Exclude Merchants (optional, up to 10, reason for exclusion)
16. ❌ Launch Campaign Selection (if "Launch" path: cohort cards, theme, strategy, spots, date)
17. ❌ Setup Complete & Go Live (final checklist, celebration, go-live button)

**Total Steps: 17 (7 built, 10 missing)**

#### Design Priority Order

**Immediate (Unblock MVP Launch):**
1. Store Confirmation - blocks start of flow
2. KYB Pending State - needed after step 7
3. API Key Connection - critical blocker
4. Tier Verification - part of API flow
5. Pricing Explanation - merchant needs to understand costs
6. Fund Clearing Balance - required to accept payments
7. Setup Complete - final go-live moment

**High Priority (Complete Core Flow):**
8. Auto-Fund Setup - reduces operational burden
9. Payout Schedule - cash flow management
10. Business Info Delegation - marketing users need this

**Medium Priority (Enhanced Experience):**
11. Exclude Merchants - competitive protection
12. Launch Campaign Cards - growth mechanic
13. Review & Submit Expansion - better progress visibility

**Edge Cases:**
- Store not found in Storeleads → Manual entry form
- KYB verification delays (>2 days) → Extended pending state with support contact
- KYB fails → Error message with reason, support contact, retry option
- API key wrong format → Inline validation error (e.g., "Smile.io private keys start with 'sk_'")
- API connection timeout → Retry with exponential backoff, show "This is taking longer than usual"
- Platform downtime → "Unable to connect to [Platform] - try again in a few minutes"
- Tier insufficient → Upgrade path modal with Smile.io/Yotpo contact info, partnership benefits
- Legacy plan with API access → Allow even if plan name doesn't match expected tiers
- ACH transfer fails → Show reason (insufficient funds, account closed), offer retry or debit alternative
- Delegation SMS not received → Resend button (after 30 seconds), alternative: "Copy link to share manually"
- Multiple users trying to complete same step → Show "Someone else is completing this step" with last updated timestamp
- User abandons mid-flow → Save progress, send follow-up email with resume link

---

### Phase 4: Going Live & Early Operations (Own-Points)

**Jobs:** 3 (Launching to Customers, Monitoring Redemptions, Troubleshooting Failed Redemptions)

| Screen/Component | Purpose | Priority | Status |
|------------------|---------|----------|--------|
| Launch Confirmation | Go-live toggle, announcement options | MVP | **Needs Design** |
| Operations Dashboard (M1) | Hero metric, balance, transactions | MVP | **Needs Design** |
| Transactions List (M3) | Filterable, searchable history | MVP | **Needs Design** - M13 referenced |
| Transaction Detail (M12) | Date, amount, programs, Shopify link | MVP | **Needs Design** |
| Balance Details (M2) | Current balance, status, coverage | MVP | **Needs Design** |
| Payout History (M4) | Settlement history, pending | MVP | **Needs Design** - M14 referenced |
| Reports Page (M6) | Date range, export options | MVP | **Needs Design** - M25, M26 referenced |
| Alert Center (M7) | Notifications list | MVP | **Needs Design** |
| Failed Redemption Detail | Diagnosis, resolution steps | MVP | **Needs Design** |
| Emergency Off Switch | Quick disable capability | MVP | **Needs Design** |

**Components Needed:**
- Hero metric card (large number, status indicator)
- Balance status display (Healthy/Low/Critical with colors)
- Coverage estimate display ("~15-20 transactions", "~3-4 days")
- Transaction list rows (filterable, sortable)
- Transaction detail modal/page
- Payout history table
- Alert/notification cards with actions
- Export button with format selection
- Date range picker (Stripe pattern)

**Edge Cases:**
- No redemptions yet → Empty state with encouragement
- First redemption → Celebration modal
- Redemption failure → Diagnosis flow
- Customer complaint → Support lookup by order

---

### Phase 5: Network Discovery & Decision

**Jobs:** 3 (Learning Network Benefits, Evaluating Network ROI, Deciding to Join)

| Screen/Component | Purpose | Priority | Status |
|------------------|---------|----------|--------|
| Network CTA Banner | In-app promotion | Post-MVP | **Needs Design** |
| Network Value Modal | Explain cross-merchant benefits | Post-MVP | **Needs Design** |
| Network ROI Calculator | Compare own-points vs network | Post-MVP | **Needs Design** |
| Join Network Confirmation | Toggle activation | Post-MVP | **Needs Design** |
| Transition Status | Own-points continues during setup | Post-MVP | **Needs Design** |

**Components Needed:**
- Promotional banner (dismissible)
- Value proposition modal with comparison
- ROI calculator with scenarios
- Pricing comparison (2.9% vs 2.4%)
- Network merchant count display
- Confirmation modal with implications

**Edge Cases:**
- Merchant not ready for network → "Revisit later" option
- Network not yet launched → Waitlist signup
- Already on network → Hide upgrade CTAs

---

### Phase 6: Network Onboarding

**Jobs:** 7 (Understanding Clearing Balance, Calculating Required Balance, Funding Balance, Auto-Fund Setup, Payout Config, Excluding Merchants, Launch Campaign Decision)

| Screen/Component | Purpose | Priority | Status |
|------------------|---------|----------|--------|
| Clearing Balance Explainer | Why it's needed, not a fee | Post-MVP | **Needs Design** |
| Balance Calculator | Recommended amount by volume | Post-MVP | **Needs Design** |
| Funding Screen | ACH vs debit, initiate transfer | Post-MVP | **Partially Spec'd** in flow |
| Auto-Fund Settings (M9) | Threshold, amount, toggle | Post-MVP | **Partially Spec'd** |
| Payout Schedule (M15) | Daily/weekly/minimum | Post-MVP | **Partially Spec'd** |
| Merchant Exclusion (M18) | Block list management | Post-MVP | **Needs Design** |
| Campaign Selection | Cohort options with details | Post-MVP | **Needs Design** |
| Campaign Detail | Theme, strategy, merchants, date | Post-MVP | **Needs Design** |
| Independent Launch Option | Skip cohort alternative | Post-MVP | **Needs Design** |

**Components Needed:**
- Educational explainer (clearing balance concept)
- Calculator with penetration rate slider
- Transfer method selector (ACH vs debit)
- Auto-fund configuration form
- Payout schedule radio group with implications
- Merchant search/select for exclusions
- Cohort cards with spots remaining
- Campaign detail modal

**Edge Cases:**
- Can't afford clearing balance → Lower amount option, payment plan?
- Auto-fund ACH fails → Alert + manual add funds
- Campaign fills up → Waitlist or next campaign
- Merchant changes mind about campaign → Switch option

---

### Phase 7: Network Operations

**Jobs:** 3 (Managing Clearing Balance, Understanding Cross-Merchant Transactions, Assessing Network ROI)

| Screen/Component | Purpose | Priority | Status |
|------------------|---------|----------|--------|
| Balance Dashboard | Current balance, status, alerts | Post-MVP | **Partially Spec'd** in flow |
| Add Funds Modal (M8) | Manual balance top-up | Post-MVP | **Partially Spec'd** |
| Auto-Fund Management (M9) | Settings, turn on/off | Post-MVP | **Partially Spec'd** |
| Network Transactions View | Cross-merchant breakdown | Post-MVP | **Needs Design** |
| Settlement Detail | By issuing merchant/program | Post-MVP | **Needs Design** |
| Network ROI Dashboard | New customers, revenue attribution | Post-MVP | **Needs Design** |
| Network vs Own-Points Comparison | Performance metrics | Post-MVP | **Needs Design** |
| Low Balance Alert (M27) | Warning with action | Post-MVP | **Partially Spec'd** |
| Auto-Fund Failed Alert (M28) | Error with resolution | Post-MVP | **Partially Spec'd** |
| Payment Reversal Alert (M29) | Transaction issue | Post-MVP | **Partially Spec'd** |
| Settlement Delayed Alert (M30) | Payout delay | Post-MVP | **Partially Spec'd** |

**Components Needed:**
- Balance hero card with status
- Balance history chart
- Add funds modal with calculator
- Auto-fund settings panel
- Transaction breakdown by program
- Settlement reconciliation view
- Network ROI metrics (new customers, attributed revenue)
- Alert cards with action buttons

**Edge Cases:**
- Balance hits zero → Critical alert, disable new transactions
- Repeated auto-fund failures → Escalation path
- Payout delays → Status explanation
- Unusual transaction spike → Fraud review trigger

---

## Critical User Flows

### Flow 1: Own-Points Installation to Go-Live (MVP)

**User Goal:** Install app, connect rewards platform, configure widget, launch

**Entry Point:** Landing page or Shopify admin

**Steps:**
1. Landing Page → Enter myshopify domain
2. Shopify OAuth → Grant permissions
3. Welcome Screen → Confirm store info
4. Connect Loyalty → Enter API key, verify tier
5. Business Info → KYB data entry
6. Banking Info → Connect bank account
7. Pricing → Accept terms
8. Fund Clearing Balance → Calculator, initiate transfer
9. Auto-Fund → Configure or skip
10. Payout Schedule → Select preference
11. Widget Config → Theme editor placement
12. Test Checkout → Sandbox verification
13. Go Live → Launch toggle

**Decision Points:**
- Tier incompatible → Upgrade path branch
- Promotional offer available → Accept/decline
- Auto-fund → Enable or manual management

**Success State:** Widget live on cart page, accepting point redemptions

**Failure States:**
- Tier upgrade blocked → Can complete setup but not launch
- KYB verification fails → Manual review required
- ACH transfer fails → Retry or alternative method

**Design Status:** Narrative flow documented, individual screens need design

**Design Gaps:**
- No stepper/wizard component designed
- Onboarding progress persistence UX undefined
- Test checkout experience not designed
- Go-live confirmation flow not designed

---

### Flow 2: Clearing Balance Management (MVP)

**User Goal:** Maintain adequate balance to avoid declined transactions

**Entry Point:** Dashboard or low balance alert

**Steps:**
1. Dashboard → View balance status
2. (If low) Alert → Click to add funds
3. Add Funds Modal → Enter amount, select method
4. Confirmation → Transfer initiated
5. (If auto-fund) Settings → Configure threshold/amount
6. Reports → View transaction/payout history

**Decision Points:**
- Manual vs auto-fund management
- ACH (free, slow) vs debit (fee, instant)
- Payout schedule (daily/weekly/minimum)

**Success State:** Balance healthy, auto-fund working, no declined transactions

**Failure States:**
- ACH fails → Notification, retry
- Balance hits zero → Critical alert, transactions declined
- Auto-fund can't keep up with volume → Increase amount

**Design Status:** Detailed narrative in flow doc, screens referenced (M2, M8, M9)

**Design Gaps:**
- Balance status visual treatment not designed
- Coverage estimate display not designed
- Auto-fund trigger explanation not designed
- Alert response patterns not designed

---

### Flow 3: Troubleshooting Failed Redemption (MVP)

**User Goal:** Quickly diagnose and resolve customer redemption issues

**Entry Point:** Customer complaint or dashboard alert

**Steps:**
1. Dashboard → See failed transaction alert
2. Transaction Detail → View failure reason
3. Diagnosis → Identify root cause (insufficient points, technical error, platform issue)
4. Resolution → Fix issue or manual override
5. Communication → Notify customer of resolution

**Decision Points:**
- Saltwyk issue vs rewards platform issue
- Manual discount override vs technical fix
- Escalate to support vs self-resolve

**Success State:** Issue resolved, customer satisfied

**Failure States:**
- Root cause unclear → Escalate to support
- No override capability → Customer disappointment

**Design Status:** Job story documented, no screens designed

**Design Gaps:**
- Failure reason taxonomy not defined
- Resolution action buttons not designed
- Manual override capability not specified
- Support escalation flow not designed

---

### Flow 4: Network Upgrade (Post-MVP)

**User Goal:** Upgrade from own-points to network participation

**Entry Point:** In-app CTA, email campaign, or dashboard

**Steps:**
1. Network CTA → Click to learn more
2. Value Prop Modal → Understand benefits
3. ROI Calculator → Compare economics
4. Join Decision → Click "Join Network"
5. Clearing Balance Education → Why it's needed
6. Balance Calculator → Determine amount
7. Fund Balance → Initiate transfer
8. Auto-Fund Config → Set threshold
9. Payout Schedule → Confirm or change
10. Merchant Exclusions → Optional blocklist
11. Campaign Selection → Cohort or independent
12. Ready Status → Wait for launch date

**Decision Points:**
- Join network or stay own-points
- Campaign cohort or independent launch
- Exclude competitors or accept all

**Success State:** Network active, accepting cross-merchant points

**Failure States:**
- Can't fund clearing balance → Stay on own-points
- Campaign fills → Next campaign or independent
- Own-points disrupted during transition → Trust broken

**Design Status:** Job stories documented, no screens designed

**Design Gaps:**
- Network CTA design not specified
- Transition state UX (own-points continues) not designed
- Campaign selection cards not designed
- Exclusion management UI not designed

---

### Flow 5: Campaign Participation (Post-MVP)

**User Goal:** Join coordinated cohort launch for maximum network effects

**Entry Point:** Network onboarding step or in-app CTA

**Steps:**
1. Campaign List → View available campaigns
2. Campaign Detail → Theme, merchants, date, strategy
3. Select Campaign → Reserve spot
4. Confirmation → Locked to launch date
5. Preparation → Complete all requirements
6. Preview Mode → Test before launch
7. Launch Day → Go live with cohort

**Decision Points:**
- Which campaign to join
- Independent launch instead
- Switch campaigns if needed

**Success State:** Launch with cohort, marketing materials, group momentum

**Failure States:**
- Not ready by launch date → Auto-move to independent
- Campaign fills → Waitlist or next campaign
- Campaign cancelled → Alternative offer

**Design Status:** Basic options in job stories, no screens designed

**Design Gaps:**
- Campaign card design not specified
- Strategy brief display not designed
- Merchant roster visualization not designed
- Launch day experience not designed

---

## Component Requirements

### Onboarding Components

| Component | Used In | Exists | Complexity | Priority |
|-----------|---------|--------|------------|----------|
| Stepper/Wizard | All onboarding flows | No | Medium | MVP |
| Progress Indicator | Onboarding, setup completion | Partial (progress ring exists) | Simple | MVP |
| Pre-filled Form | Welcome, business info | No | Simple | MVP |
| API Key Input | Rewards platform connection | No | Medium | MVP |
| Connection Test Status | Platform verification | No | Simple | MVP |
| Calculator with Slider | Balance, ROI | No | Medium | MVP |
| Cohort Selection Card | Campaign selection | No | Medium | MVP |

**Specs Needed:**
- States: default, active step, completed, error, disabled
- Responsive: Mobile stepper vs desktop sidebar
- Accessibility: Focus management between steps

---

### Dashboard Components

| Component | Used In | Exists | Complexity | Priority |
|-----------|---------|--------|------------|----------|
| Hero Metric Card | Dashboard M1 | No | Medium | MVP |
| Balance Status Display | M2, dashboard | No | Medium | MVP |
| Transaction List Row | M3, M13 | Partial (table exists) | Simple | MVP |
| Transaction Detail Card | M12 | No | Medium | MVP |
| Payout History Row | M4, M14 | Partial (table exists) | Simple | MVP |
| Alert Card with Action | M7, M27-M30 | Partial (toast exists) | Medium | MVP |
| Date Range Picker | M6 reports | No | Medium | MVP |
| Export Button | M25, M26 | No | Simple | MVP |

**Specs Needed:**
- Balance status: colors for Healthy (emerald), Low (orange), Critical (magenta)
- Coverage estimate: "~X transactions", "~Y days"
- Alert severity: info, warning, critical with appropriate colors
- Responsive: Dashboard cards stack on mobile

---

### Clearing Balance Components

| Component | Used In | Exists | Complexity | Priority |
|-----------|---------|--------|------------|----------|
| Add Funds Modal | M8 | No | Complex | MVP |
| Balance Calculator | Onboarding, add funds | No | Medium | MVP |
| Transfer Method Selector | Add funds | No | Medium | MVP |
| Auto-Fund Settings Panel | M9 | No | Medium | MVP |
| Payout Schedule Selector | M15 | No | Simple | MVP |
| Balance History Chart | Reports | No | Complex | Post-MVP |

**Specs Needed:**
- Calculator: Slider + text input, penetration assumptions toggle
- Transfer methods: ACH (free, slow) vs Debit (fee, instant) comparison
- Auto-fund: Threshold input, amount input, toggle, frequency estimate
- Payout options: Radio group with implications note

---

### Network Components (Post-MVP)

| Component | Used In | Exists | Complexity | Priority |
|-----------|---------|--------|------------|----------|
| Network CTA Banner | Dashboard | No | Simple | Post-MVP |
| Network Value Modal | Discovery | No | Medium | Post-MVP |
| Network ROI Calculator | Upgrade decision | No | Complex | Post-MVP |
| Campaign Card | Campaign selection | No | Medium | Post-MVP |
| Campaign Detail Modal | Campaign info | No | Complex | Post-MVP |
| Merchant Exclusion Manager | Exclusions | No | Medium | Post-MVP |
| Cross-Merchant Transaction View | Network ops | No | Complex | Post-MVP |
| Network ROI Dashboard | Assessment | No | Complex | Post-MVP |

**Specs Needed:**
- Campaign cards: Theme, date, spots remaining, CTA
- Exclusion manager: Search, add, remove, reason field
- Network transaction: Source merchant, program, amount, settlement timing

---

### Settings Components

| Component | Used In | Exists | Complexity | Priority |
|-----------|---------|--------|------------|----------|
| Bank Account Settings | M17 | No | Medium | MVP |
| Profile Settings | M19 | Partial (shopper settings) | Simple | MVP |
| User Management | M20 | No | Complex | Post-MVP |
| Notification Preferences | M19 | Partial (shopper comms) | Simple | MVP |

**Specs Needed:**
- Bank account: Masked display, update flow, verification
- User management: Add/remove users, permission roles
- Notifications: Email, SMS, Slack toggles

---

## Design Priorities & Sequencing

### Phase 1: MVP Onboarding Completion (Highest Priority)

**Goal:** Complete the onboarding flow from signup to first payment acceptance

**What's Already Built (Refinement Needed):**

| Screen | Implementation | Refinement Needed | Effort |
|--------|---------------|-------------------|---------|
| Onboarding Welcome | ✅ Built | Add video content, minor visual polish | 0.5 days |
| Path Selection | ✅ Built | Minor polish, ensure card links work | 0.25 days |
| Business Information | ✅ Built | **ADD delegation button** ("Send to owner via SMS") | 1 day |
| Account Representative | ✅ Built | Visual polish only (delegation works ✓) | 0.25 days |
| Bank Account | ✅ Built | Visual polish only (delegation works ✓) | 0.25 days |
| Review & Submit | ✅ Built | **EXPAND checklist** to show all 17 steps (not just 3) | 1 day |
| Progress Indicator | ✅ Built | **RECALCULATE** for 17-step flow (currently 6 steps) | 0.5 days |

**Subtotal Refinement: 3.75 design days**

**What Needs Design (Net New):**

| Screen | Purpose | Why Critical | Effort |
|--------|---------|--------------|---------|
| 1. Store Confirmation | Show Storeleads revenue/category, allow edits | **Unblocks flow start** | 1 day |
| 2. API Key Connection | Smile.io/Yotpo credential entry with delegation | **Critical path blocker** | 2 days |
| 3. Tier Verification | Success state or upgrade modal | Part of API connection | 1 day |
| 4. Pricing Explanation | 2.9% vs 2.4%, promotional offers | Commercial understanding | 1 day |
| 5. Fund Clearing Balance | Calculator, ACH/debit, delegation to finance | **Required for payments** | 3 days |
| 6. Auto-Fund Setup | Threshold, amount, toggle | Reduces operational burden | 1 day |
| 7. Payout Schedule | Daily/weekly/minimum selection | Cash flow management | 1 day |
| 8. KYB Pending State | What merchant sees during 1-2 day wait | Waiting experience | 1 day |
| 9. Setup Complete & Go Live | Final checklist, celebration | **Finish line moment** | 1 day |

**Subtotal New Design: 12 design days**

**Phase 1 Total: ~16 design days (3.75 refinement + 12 new)**

**Design in This Priority Order:**

1. **Store Confirmation** (1 day) - Unblocks flow, merchants need to verify their data
2. **Business Info Delegation** (1 day) - Marketing users lack EIN/tax info
3. **API Key Connection** (2 days) - Critical blocker, includes delegation pattern
4. **Tier Verification** (1 day) - Part of API flow, upgrade path needed
5. **Review & Submit Expansion** (1 day) - Better progress visibility
6. **Progress Recalculation** (0.5 day) - Accurate % for 17 steps
7. **Fund Clearing Balance** (3 days) - Complex calculator, dual payment methods
8. **Auto-Fund Setup** (1 day) - Leverage balance funding patterns
9. **Payout Schedule** (1 day) - Leverage existing form patterns
10. **Pricing Explanation** (1 day) - Commercial clarity
11. **KYB Pending State** (1 day) - Waiting experience
12. **Setup Complete** (1 day) - Celebration moment
13. **Polish Pass** (1.5 days) - All built screens get visual refinement

**Dependencies:**
- Store Confirmation needs Storeleads API integration spec (data shape)
- API Connection needs Smile.io/Yotpo field requirements documented
- Tier Verification needs partnership pricing/upgrade paths defined
- Fund Clearing Balance needs calculator algorithm (coverage formula)
- Business Info Delegation needs SMS template and delivery mechanism
- Progress Recalculation needs final step count confirmed (currently planning 17)

**Reuse Opportunities:**
- Delegation pattern from Account Representative & Bank Account → Business Info & API Keys
- Form patterns from Business/Representative/Bank → API Connection
- Security callouts from Bank Account → API Connection, Clearing Balance
- Visual helpers (bank check diagram) → API connection could show screenshot
- Progress indicator → Just recalculate, don't redesign
- Calculator → Could reuse in ROI calculator later

---

### Phase 2: MVP Operations (High Priority)

**Goal:** Enable merchant to manage ongoing operations and troubleshoot issues

**Design in Order:**
1. **Add Funds Modal (M8)** - Critical for balance management
2. **Auto-Fund Settings (M9)** - Reduce manual intervention
3. **Payout History (M4)** - Cash flow visibility
4. **Alert Cards (M27-M30)** - Proactive issue notification
5. **Reports Page (M6)** - Data export capability
6. **Settings Screens (M17-M19)** - Configuration management

**Dependencies:**
- Balance display patterns inform add funds modal
- Alert patterns inform all error states

---

### Phase 3: Network Features (Post-MVP)

**Goal:** Enable merchant to upgrade to network participation

**Design in Order:**
1. **Network CTA Banner** - Discovery trigger
2. **Network Value Modal** - Education and persuasion
3. **Campaign Selection Cards** - Cohort choice
4. **Merchant Exclusion Manager** - Competitive protection
5. **Cross-Merchant Transaction View** - Network operations
6. **Network ROI Dashboard** - Value assessment

**Dependencies:**
- Own-points dashboard patterns inform network views
- Balance management patterns reused for network funding

---

## Open Questions & Blockers

### Design Decisions Needed

| Question | Why It Blocks Design | Who Decides |
|----------|---------------------|-------------|
| What are the balance thresholds (Healthy/Low/Critical)? | Determines color treatment and alert triggers | Founder + Product |
| Fixed thresholds or percentage of volume? | Affects calculator logic and display | Founder |
| How is "coverage estimate" calculated? | Determines dashboard display | Product + Engineering |
| What penetration rate assumptions to show? | Affects calculator defaults | Product |
| Is there a minimum clearing balance? | Affects funding flow | Founder |
| What happens to own-points during network transition? | Determines transition state UX | Founder |
| Can merchants switch cohorts after selecting? | Affects campaign UI flexibility | Founder |

### Missing Specifications

| Gap | What Design Needs | Job Story Reference |
|-----|------------------|---------------------|
| Emergency "off switch" implementation | How to quickly disable without breaking | Phase 4: Launching |
| Manual discount override for support | Capability to resolve failed redemptions | Phase 4: Troubleshooting |
| Test checkout experience | How sandbox mode differs visually | Phase 3: Testing |
| Network activation mechanics | Toggle behavior and state transitions | Open Questions in job doc |
| Clearing balance zero behavior | What happens to transactions | Open Questions in job doc |

### Technical Constraints

| Constraint | Design Impact |
|------------|---------------|
| Custom app (not App Store) | Trust indicators needed, "not from App Store" messaging |
| Cart page only (not checkout) | Widget placement guidance, not checkout extension patterns |
| 7-day install link expiration | Immediate redirect from landing page, no saved links |
| No Shopify Billing API | External payment handling, Stripe integration |
| Embedded app in Shopify admin | Must follow Shopify Polaris patterns where appropriate |

### Content Needs

| Copy Needed | Screen/Component | Status |
|-------------|------------------|--------|
| Balance status labels (Healthy, Low, Critical) | Balance display | Not written |
| Auto-fund trigger notification email | Auto-fund feature | Not written |
| Transfer complete email | Funding flow | Not written |
| Low balance warning email | Alerts | Not written |
| Critical balance urgent alert (SMS + email) | Alerts | Not written |
| Payout processed email | Payouts | Not written |
| Calculator helper explanatory text | Balance calculator | Not written |
| Coverage estimate disclaimer | Balance display | Not written |
| Permission explanations (why each scope) | Install consent | Not written |
| Upgrade path messaging (Smile.io Enterprise) | Tier verification | Not written |

---

## Next Steps

### Immediate Actions (Design Team)

1. **Review this plan** - Validate screen inventory completeness
2. **Design Onboarding Stepper** - Foundation component needed first
3. **Design Dashboard Hero (M1)** - Core merchant experience
4. **Design Balance Display** - Status visualization pattern
5. **Create component spec template** - Standardize documentation

### Dependencies (Founder/Product)

1. **Resolve balance threshold question** - Required for status colors
2. **Confirm coverage estimate calculation** - Required for dashboard
3. **Clarify network transition behavior** - Required for Post-MVP planning
4. **Write notification copy** - Required for alert designs

### Future Work (After MVP)

1. **Network upgrade flow design** - Full journey mapping
2. **Campaign selection experience** - Cohort card design
3. **Advanced analytics** - Charts, trends, ROI
4. **Multi-user/permissions** - User management UI

---

## Appendix: Screen Reference Map

### From merchant-dashboard-flow.md

| Ref | Screen Name | Description | Priority |
|-----|-------------|-------------|----------|
| M1 | Dashboard Home | Hero metric, balance, payout, transactions | MVP |
| M2 | Balance Details | Current balance, status, auto-fund | MVP |
| M3 | Transactions List | Filterable, searchable | MVP |
| M4 | Payout History | Past settlements | MVP |
| M5 | Settings Menu | Navigation hub | MVP |
| M6 | Reports | Date range, export | MVP |
| M7 | Alert Center | Notifications list | MVP |
| M8 | Increase Balance Modal | Enter target amount | MVP |
| M9 | Auto-Fund Settings | Threshold, replenish, ON/OFF | MVP |
| M10 | Balance Increase Confirmed | Success state | MVP |
| M11 | Auto-Fund Updated | Success state | MVP |
| M12 | Transaction Detail | Date, amount, programs, Shopify link | MVP |
| M13 | Filtered Transactions | Search/filter results | MVP |
| M14 | Payout Detail | Single payout breakdown | MVP |
| M15 | Payout Schedule Settings | Daily/weekly/minimum | MVP |
| M16 | Payout Schedule Updated | Success state | MVP |
| M17 | Bank Account Settings | View/update account | MVP |
| M18 | Excluded Merchants | Manage list | MVP |
| M19 | Profile Settings | Contact, notifications | MVP |
| M20 | User Management | Add/remove users | Post-MVP |
| M21-M24 | Various Updated States | Success confirmations | MVP |
| M25 | Generate CSV | Download file | MVP |
| M26 | Generate Excel | Download file | MVP |
| M27 | Low Balance Alert | Details + action | MVP |
| M28 | Auto-Fund Failed Alert | Details + action | MVP |
| M29 | Payment Reversal Alert | Details + action | MVP |
| M30 | Settlement Delayed Alert | Details + action | MVP |

### Onboarding Steps (from onboarding flow)

| Step | Screen Name | Description | Priority |
|------|-------------|-------------|----------|
| 0 | Welcome Screen | Revenue/category confirmation | MVP |
| 1 | Connect Loyalty | Platform selection + OAuth | MVP |
| 2 | Business Info | KYB data collection | MVP |
| 3 | Banking Info | Bank account for funding + settlements | MVP |
| 4 | Pricing | Rates, promotional offers | MVP |
| 5 | Fund Clearing Balance | Calculator, transfer | MVP |
| 6 | Auto-Fund Setup | Threshold, amount, toggle | MVP |
| 7 | Payout Schedule | Daily/weekly/minimum | MVP |
| 8 | Exclude Merchants | Optional blocklist | MVP |
| 9 | Launch Cohort | Campaign selection | MVP |
| 10 | Setup Complete | Pending verification status | MVP |

---

**Document Status:** Draft complete. Ready for founder review and design team planning.

**Critical Success Factors:**
1. Every merchant job has corresponding screens identified
2. Design gaps clearly called out (what exists vs needs design)
3. MVP scope separated from post-MVP
4. Open questions prevent wasted design effort
5. Plan is actionable (designer can pick up and start work)
