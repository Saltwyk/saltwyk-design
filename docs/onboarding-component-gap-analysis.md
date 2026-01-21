# Onboarding Component Gap Analysis

**Last Updated:** 2026-01-20
**Status:** Investigation Complete - Ready for Review
**Owner:** Claude Code Analysis

---

## Executive Summary

After cross-referencing 42 JTBD job stories against existing merchant app components, **approximately 75% of onboarding UI needs can be satisfied by existing components** through direct reuse or minor adaptation. The design system provides strong coverage for form inputs, toggles, cards, progress indicators, badges, modals, and messaging boxes.

**4 critical gaps** require NEW design specifications:
1. **Clearing Balance Calculator** - Interactive estimator with category-specific guidance
2. **Fee Structure Display** - Pricing breakdown with calculation examples
3. **Platform List with Search** - Searchable rewards platform selection
4. **Money Flow Diagram** - Visual explanation of clearing balance mechanics

The highest-value components for direct reuse are: **Toggle Switch**, **Radio Card**, **Dollar Input**, **Setup Progress**, and **Info/Warning/Error Boxes** - all already documented in the Settings screen.

---

## Part 1: UI Needs Extracted from JTBD

### Phase 0: Welcome & Context Setting (2 jobs)
**UI Needs Identified:**
1. Welcome screen with pre-filled revenue (from Storeleads)
2. Category display with easy correction capability
3. Clear value proposition messaging
4. Time estimate for onboarding completion
5. Overview of setup steps

### Phase 1: Rewards Platform Connection (5 jobs)
**UI Needs Identified:**
1. Supported platforms list with search/filter capability
2. Upgrade path messaging for non-Enterprise Smile.io users
3. Secure API key input form with visibility toggle
4. Clear instructions for finding API keys in platform admin
5. Real-time connection verification (spinner → success/error)
6. Voting interface for unsupported platforms
7. Popular requests visibility

### Phase 2: Business Information/KYB (4 jobs)
**UI Needs Identified:**
1. Clear explanation of KYB requirement (regulatory compliance)
2. Pre-filled legal name and address (from Shopify if available)
3. Clear field labels with inline validation
4. EIN/Tax ID format help
5. Verification timeline display (1-2 business days)
6. Notification plan messaging
7. Progress tracking dashboard
8. Separation of "can configure now" vs "blocked until verified"

### Phase 3: Banking Information (4 jobs)
**UI Needs Identified:**
1. Clear explanation of dual purpose (funding + settlements)
2. Visual diagram of money flow
3. Reassurance messaging (can change later)
4. Security badges (Stripe processing, encryption)
5. Privacy policy link
6. Routing number input (9 digits, validation)
7. Account number input with confirmation field
8. Plaid integration option for automatic linking
9. Instant validation feedback
10. Confirmation screen with edit capability

### Phase 4: Pricing (4 jobs)
**UI Needs Identified:**
1. Clear fee breakdown (3% transaction fee)
2. Fee calculation examples
3. Implicit comparison to credit card fees
4. Note about Settings > Plan visibility
5. Promotional offer display (zero fees for 60 days)
6. Clear promo terms and deadlines
7. Scarcity indicators (spots remaining)
8. Easy accept/decline buttons
9. ToS link with summary of key terms
10. Explicit acceptance checkbox

### Phase 5: Fund Clearing Balance (6 jobs)
**UI Needs Identified:**
1. Clear explanation of clearing balance concept
2. Visual diagram of how it works
3. Reassurance about safety and payouts
4. Interactive calculator component
5. Category-specific guidance based on business size/type
6. Industry benchmarks display
7. Scenario modeling (penetration rate assumptions)
8. Recommended minimum amount
9. ACH timeline display (1-2 business days, free)
10. Amount input with $ prefix
11. Transfer initiation button
12. Confirmation with expected arrival date
13. Coverage estimate (transactions supported, days at current rate)
14. Warning if amount seems low
15. Encouragement if amount seems good
16. Messaging about Settings > Finance manual funding

### Phase 6: Auto-Fund Settings (3 jobs)
**UI Needs Identified:**
1. Clear explanation of how auto-fund works
2. Toggle on/off control
3. Trigger threshold amount input
4. Replenishment amount input
5. Recommended settings based on clearing balance
6. Editable fields with validation
7. Preview of trigger frequency
8. Notification plan explanation (email before transfer)
9. Example scenario display

### Phase 7: Payout Schedule (2 jobs)
**UI Needs Identified:**
1. Radio card options (Daily, Weekly, Minimum Amount)
2. Option explanations with cash flow implications
3. Default recommendation indicator
4. Clear timeline (payouts at 11 PM EST)
5. ACH arrival timing (1-2 business days)
6. Calendar view option (nice-to-have)

### Phase 8: Campaign Interest Registration (3 jobs)
**UI Needs Identified:**
1. Brief explanation of campaign benefits
2. Examples of past campaigns
3. Simple opt-in checkbox or button
4. Clear messaging about Campaigns section post-launch
5. Clear "Skip" or "Launch Independently" option

### Phase 9: Setup Complete - Pre-Launch Dashboard (3 jobs)
**UI Needs Identified:**
1. Status dashboard with checklist (✓ completed, ⏳ pending, ✗ blocked)
2. Estimated time to completion
3. Next actions guidance
4. Sandbox/preview mode access (via Apps tab)
5. Test transaction capability
6. Clear "this is preview" messaging
7. "Ready to launch" confirmation
8. Launch activation control
9. Final pre-launch checklist

### Cross-Phase Jobs (6 jobs)
**UI Needs Identified:**
1. Clear error messages with troubleshooting guidance
2. Support contact options
3. Ability to retry failed actions
4. Auto-save functionality
5. Clear progress indicators
6. Easy re-entry from Shopify admin
7. Contextual help links
8. Support chat access
9. FAQ access
10. Clear status indicators (pending, verified, etc.)
11. Progress updates and estimated completion times
12. Notification plan displays
13. Navigation to all completed steps
14. Edit capabilities with change implications
15. Launch notification (email + in-app)
16. "You're live" confirmation

---

## Part 2: Existing Component Inventory

### Core Design System Components

| Component | Location | Capabilities | Variants |
|-----------|----------|--------------|----------|
| **Input** | `/core/components/inputs/` | Text input with states | sm/md/lg, light/dark, error, disabled |
| **Checkbox** | `/core/components/inputs/` | Single/multi selection | light/dark, checked, disabled |
| **Radio** | `/core/components/inputs/` | Mutually exclusive selection | light/dark, checked, disabled |
| **Toggle** | `/core/components/inputs/` | On/off binary choice | light/dark, checked, disabled |
| **Button** | `/core/components/buttons/` | Primary/secondary/text actions | sizes, colors, disabled, loading |
| **Card** | `/core/components/cards/` | Container with variants | default/elevated/subtle/outlined, clickable, selectable |
| **Modal** | `/core/components/modals/` | Overlay dialogs | sm/md/lg/xl/full, light/dark, with header/body/footer |
| **Tabs** | `/core/components/tabs/` | Tab navigation | horizontal, with content panels |
| **Badge** | `/core/components/badges/` | Status indicators | colors, sizes |
| **Avatar** | `/core/components/avatars/` | User representation | sizes, with initials/image |
| **Toast** | `/core/components/toasts/` | Notifications | success/error/warning/info |
| **Tooltip** | `/core/components/tooltips/` | Hover information | positions |
| **Dropdown** | `/core/components/dropdowns/` | Selection menus | select/multiselect/combobox/action |
| **Progress** | `/core/components/progress/` | Progress indicators | stepper/bar/spinner |
| **Accordion** | `/core/components/accordion/` | Collapsible sections | single/multi expand |
| **Table** | `/core/components/tables/` | Data display | base/interactive/responsive |

### Merchant-Specific Components

#### Setup Progress
- **Documented:** `/merchant/components/setup-progress.html`
- **Currently used:** Get Verified screen, onboarding flows
- **Capabilities:** Multi-step progress with inline dots, labeled steps, vertical variant
- **Variants:** Pending (warm-300), Active (indigo-500 + ring), Completed (emerald-500), Error (magenta-500)
- **Reusable for:** Phase 2 KYB tracking, Phase 9 pre-launch dashboard

#### OAuth Connection
- **Documented:** `/merchant/components/oauth-connection.html`
- **Currently used:** Settings > Apps tab (Commerce Platform)
- **Capabilities:** 5-state lifecycle for OAuth connections
- **Variants:** Not Connected, Connecting, Connected, Error, Expired
- **Reusable for:** **Pattern inspiration** for API key connection (different flow)

#### Sidebar Navigation
- **Documented:** `/merchant/components/sidebar-nav.html`
- **Currently used:** All merchant screens
- **Capabilities:** Dark theme sidebar with status badges
- **Variants:** Trial (orange), Live (emerald), Sandbox (amber)
- **Reusable for:** Context display during onboarding

#### Context Switcher
- **Documented:** `/merchant/components/context-switcher.html`
- **Currently used:** Merchant header (top-right)
- **Capabilities:** Dropdown for switching merchant accounts
- **Reusable for:** Account selection in multi-merchant scenarios

### Settings Screen Components (Inline)

These components are documented inline in `/merchant/screens/settings.html`:

| Component | CSS Class | Capabilities | Reusable For |
|-----------|-----------|--------------|--------------|
| **Settings Card** | `.settings-card` | White card container with title/description | All onboarding sections |
| **Settings Tabs** | `.settings-tabs` | Horizontal tab navigation | Not needed (onboarding is linear) |
| **Form Field** | `.form-field`, `.form-label`, `.form-input`, `.form-hint` | Standard form pattern | All form inputs |
| **Radio Group** | `.radio-group`, `.radio-item`, `.radio-circle` | Stacked radio buttons | Phase 7 (if simpler option needed) |
| **Checkbox** | `.checkbox-item`, `.checkbox-box` | Styled checkbox | Phase 4 ToS, Phase 8 campaign opt-in |
| **Toggle Switch** | `.toggle-switch`, `.toggle-switch-knob` | On/off toggle | Phase 6 auto-fund enable |
| **Radio Card** | `.radio-card` | Card-style radio selection | Phase 7 payout schedule |
| **Dollar Input** | `.dollar-input-wrapper` | Currency input with $ prefix | Phase 5, 6 amounts |
| **Verified Badge** | `.verified-badge` | Green checkmark badge | Phase 1, 2, 3 status |
| **Connected Badge** | `.connected-badge` | Green pill badge | Phase 1 connection status |
| **Warning Badge** | `.warning-badge` | Orange pill badge | Phase 5 low balance |
| **Role Badge** | `.role-badge` | User role indicator | N/A (post-onboarding) |
| **Info Box** | `.info-box` | Neutral informational callout | All phases - explanations |
| **Warning Box** | `.warning-box` | Orange warning callout | Phase 5 low balance |
| **Error Box** | `.error-box` | Rose error callout | All phases - error states |
| **Modal** | `.modal-overlay`, `.modal-content` | Dialog pattern | Confirmations throughout |
| **Progress Bar** | `.progress-bar`, `.progress-bar-fill` | Horizontal progress | Phase 5 funding progress |
| **Spinner** | `.spinner` | Loading indicator | Phase 1 connection test |
| **Toast** | `.toast` | Notification popup | Phase 9 launch confirmation |
| **Bullet List** | `.bullet-list` | Styled list | Troubleshooting guides |
| **Statement Card** | `.statement-card` | Monthly statement display | N/A (post-onboarding) |
| **Cross-link Card** | `.cross-link-card` | Navigation link card | Phase 4 Settings > Plan link |
| **Support Card** | `.support-card` | Help resource card | Cross-phase support |

---

## Part 3: Reuse Mapping Table

| JTBD Phase | UI Need | Existing Component | Reusable? | Gap/Notes |
|------------|---------|-------------------|-----------|-----------|
| **Phase 0** | Welcome screen with pre-filled data | Settings Card + Form Input (readonly) | Yes | Add data source indicator |
| Phase 0 | Value prop messaging | Info Box | Yes | |
| Phase 0 | Time estimate | Embedded text | Yes | |
| Phase 0 | Steps overview | Setup Progress (labeled) | Yes | |
| **Phase 1** | Supported platforms list | ??? | **NO** | **NEW: Platform List with Search** |
| Phase 1 | Upgrade messaging | Info Box | Yes | |
| Phase 1 | API key input form | Form Input | **Minor** | Add visibility toggle |
| Phase 1 | Connection verification | Spinner + Connected Badge | Yes | |
| Phase 1 | Voting interface | ??? | **NO** | **NEW: Platform Voting** (Low priority) |
| **Phase 2** | KYB explanation | Info Box | Yes | |
| Phase 2 | Pre-filled form fields | Form Input (readonly) | Yes | |
| Phase 2 | Inline validation | Form Input + error state | Yes | |
| Phase 2 | EIN format help | Form Hint | Yes | |
| Phase 2 | Timeline display | Info Box | Yes | |
| Phase 2 | Progress tracking | Setup Progress (vertical) | Yes | |
| **Phase 3** | Dual purpose explanation | Info Box | Yes | |
| Phase 3 | Money flow diagram | ??? | **NO** | **NEW: Money Flow Diagram** |
| Phase 3 | Security badges | Badge | **Minor** | Add Stripe/lock icon variant |
| Phase 3 | Bank input fields | Form Input + validation | Yes | |
| Phase 3 | Account confirmation | Form Input (confirm pattern) | Yes | |
| Phase 3 | Plaid integration | ??? | **Maybe** | External widget, not component |
| **Phase 4** | Fee structure display | ??? | **NO** | **NEW: Fee Structure Display** |
| Phase 4 | Fee calculation examples | ??? | **NO** | Part of Fee Structure Display |
| Phase 4 | Promo offer display | ??? | **Maybe** | **NEW: Promo Offer Card** |
| Phase 4 | ToS link + checkbox | Checkbox + text link | Yes | |
| Phase 4 | Settings > Plan link | Cross-link Card | Yes | |
| **Phase 5** | Clearing balance explanation | Info Box | Yes | |
| Phase 5 | Money flow diagram | ??? | **NO** | Reuse from Phase 3 |
| Phase 5 | Interactive calculator | ??? | **NO** | **NEW: Clearing Balance Calculator** |
| Phase 5 | Amount input | Dollar Input | Yes | |
| Phase 5 | Transfer initiation | Button (primary) | Yes | |
| Phase 5 | Confirmation dialog | Modal | Yes | |
| Phase 5 | Coverage estimate | ??? | **NO** | Part of Calculator output |
| Phase 5 | Low balance warning | Warning Box | Yes | |
| **Phase 6** | Auto-fund explanation | Info Box | Yes | |
| Phase 6 | Toggle on/off | Toggle Switch | Yes | Direct reuse |
| Phase 6 | Threshold/amount inputs | Dollar Input | Yes | Direct reuse |
| Phase 6 | Recommended settings | Badge on form field | **Minor** | Add "Recommended" variant |
| Phase 6 | Frequency preview | Embedded text | Yes | |
| **Phase 7** | Payout options | Radio Card | Yes | Direct reuse |
| Phase 7 | Option explanations | Embedded in Radio Card | Yes | |
| Phase 7 | Default recommendation | Badge variant | **Minor** | Add to Radio Card |
| Phase 7 | Timeline display | Info Box | Yes | |
| **Phase 8** | Campaign explanation | Info Box | Yes | |
| Phase 8 | Opt-in checkbox | Checkbox | Yes | |
| Phase 8 | Skip option | Button (secondary) | Yes | |
| **Phase 9** | Status checklist | Setup Progress (vertical) | Yes | |
| Phase 9 | Sandbox preview | Existing Sandbox (Apps tab) | Yes | |
| Phase 9 | Ready confirmation | Modal + Toast | Yes | |
| Phase 9 | Launch button | Button (primary) | Yes | |
| **Cross** | Error messages | Error Box | Yes | |
| Cross | Troubleshooting guidance | Bullet List | Yes | |
| Cross | Support contact | Button (text) + Support Card | Yes | |
| Cross | Progress indicators | Setup Progress | Yes | |
| Cross | Help links | Button (text) | Yes | |
| Cross | Status badges | Verified/Connected Badge | Yes | |
| Cross | Launch notification | Toast (success) | Yes | |

---

## Part 4: Component Gaps Requiring NEW Design Specs

### HIGH Priority Gaps (Blocking Jobs)

---

#### Gap 1: Clearing Balance Calculator

**Needed for:** Phase 5 (Clearing Balance Funding), potentially Phase 6 (Auto-Fund)

**Functional Requirements:**
- Interactive amount slider or direct input
- Category-specific guidance (based on merchant's category from Storeleads)
- Penetration rate assumptions (adjustable, default 5-15%)
- Industry benchmarks display
- Output: Transaction coverage estimate
- Output: Days at current transaction rate
- Visual feedback as user adjusts amount
- Minimum amount recommendation with explanation
- Warning state for insufficient amounts
- Encouragement for appropriate amounts

**Why existing components don't work:**
- Settings has Dollar Input but no calculator logic
- Need dynamic calculation with multiple input variables
- Requires visual output (coverage estimates, scenario modeling)
- No existing component combines inputs with real-time computed output

**Reusability potential:** HIGH
- Settings > Finance (for planning future manual funding)
- Finance Dashboard (balance planning tools)
- Potentially shopper-facing (estimate shopping power from points)

**Design complexity:** Complex (interactive calculation, multiple inputs/outputs, category data)

**Priority:** HIGH (blocking job in Phase 5 - all merchants must fund clearing balance)

---

#### Gap 2: Fee Structure Display

**Needed for:** Phase 4 (Pricing)

**Functional Requirements:**
- Show 3% standard rate prominently
- Provide calculation examples (e.g., "On $100 sale → $3.00 Saltwyk fee")
- Compare favorably to credit card fees (implicit, not explicit comparison)
- Show transaction breakdown: Gross → Fee → Net
- Promotional rate display if applicable (0% for 60 days)
- Promotional deadline and urgency indicators
- Clear, trust-building presentation
- Link to full pricing page for details

**Why existing components don't work:**
- Settings has Statements showing fees as deductions, but no rate display
- No pricing-focused UI exists
- Info Box is too simple for fee breakdown with examples

**Reusability potential:** HIGH
- Settings > Plan section (showing current pricing)
- Upgrade/pricing comparison pages
- Partner/affiliate materials

**Design complexity:** Medium (informational display with examples, no complex interaction)

**Priority:** HIGH (blocking job in Phase 4 - merchants must accept pricing to proceed)

---

#### Gap 3: Platform List with Search/Filter

**Needed for:** Phase 1 (Rewards Platform Connection)

**Functional Requirements:**
- Display supported platforms (Smile.io Enterprise, Yotpo, etc.)
- Search/filter capability for quick finding
- Platform icons/logos
- Platform tier requirements (e.g., "Smile.io Enterprise required")
- Connection status if already connected
- Clear CTA to select and continue
- "Don't see your platform?" with voting/request option
- Upgrade path messaging for non-qualifying tiers

**Why existing components don't work:**
- OAuth Connection shows single platform, not selectable list
- Dropdown/Combobox is for form selection, not platform showcase
- Need card-based selection with platform branding

**Reusability potential:** MEDIUM
- Settings > Apps (if allowing additional platform connections)
- Potentially shopper-side (showing merchants by loyalty platform)

**Design complexity:** Medium (list with search, icons, selection state)

**Priority:** HIGH (blocking job in Phase 1 - first step of onboarding)

---

#### Gap 4: Money Flow Diagram

**Needed for:** Phase 3 (Banking), Phase 5 (Clearing Balance)

**Functional Requirements:**
- Visual representation of money flow
- Show: Bank Account → Clearing Balance → Cross-Merchant Transactions → Settlements → Bank Account
- Animated or step-by-step reveal option
- Labels for each stage
- Highlight dual-purpose nature of bank account
- Simple, non-technical visual language
- Mobile-responsive

**Why existing components don't work:**
- No existing diagram/illustration components
- Progress stepper is linear, not cyclic/flow-based
- Need custom visual asset

**Reusability potential:** HIGH
- Settings > Finance (educational reference)
- Help Center / FAQ pages
- Marketing materials
- Shopper-facing education (how points transfer works)

**Design complexity:** Medium-High (custom illustration, possibly animated)

**Priority:** HIGH (critical for understanding clearing balance concept)

---

### MEDIUM Priority Gaps

---

#### Gap 5: Promo Offer Card

**Needed for:** Phase 4 (Pricing)

**Functional Requirements:**
- Promotional headline (e.g., "Zero fees for 60 days")
- Clear terms and conditions
- Deadline display with urgency
- Scarcity indicators if applicable (e.g., "47 spots remaining")
- Accept/Decline buttons
- Visual distinction from regular pricing

**Why existing components don't work:**
- Statement Card is for historical data, not offers
- Card component doesn't have promotional styling
- Need urgency/scarcity visual treatment

**Reusability potential:** MEDIUM
- Other promotional offers in the app
- Campaign registration (Phase 8)

**Design complexity:** Medium (card with urgency styling)

**Priority:** MEDIUM (promotional offers are optional, not blocking)

---

#### Gap 6: API Key Input with Visibility Toggle

**Needed for:** Phase 1 (Rewards Platform Connection)

**Functional Requirements:**
- Standard text input with show/hide toggle
- Eye icon to toggle visibility
- Masked by default (dots/asterisks)
- Paste-friendly
- Validation feedback
- "Where do I find this?" help link

**Why existing components don't work:**
- Form Input exists but lacks visibility toggle
- Password inputs exist in authentication but not documented in design system

**Reusability potential:** HIGH
- Any API key entry across the app
- Settings > Apps when reconnecting
- Developer/sandbox settings

**Design complexity:** Low (input variant)

**Priority:** MEDIUM (can use standard input with workaround, but toggle improves UX)

---

### LOW Priority Gaps

---

#### Gap 7: Platform Voting Interface

**Needed for:** Phase 1 (Rewards Platform Connection) - for unsupported platforms

**Functional Requirements:**
- List of requested platforms with vote counts
- Upvote button
- "Request new platform" input
- Sort by popularity
- User's own votes highlighted

**Reusability potential:** LOW (specific to platform roadmap feature)

**Design complexity:** Medium

**Priority:** LOW (nice-to-have, not blocking)

---

#### Gap 8: Calendar View for Payout Schedule

**Needed for:** Phase 7 (Payout Schedule) - optional enhancement

**Functional Requirements:**
- Visual calendar showing when payouts will occur
- Highlight next payout date
- Show past payouts (post-launch)

**Reusability potential:** MEDIUM (Finance Dashboard, transaction history)

**Design complexity:** Medium-High

**Priority:** LOW (Radio Card options are sufficient; calendar is enhancement)

---

## Part 5: Reuse Categories

### Category A: Direct Reuse (No modifications needed)

| Component | Source Location | Onboarding Usage | Documentation |
|-----------|-----------------|------------------|---------------|
| **Toggle Switch** | Settings > Finance > Auto-Fund | Phase 6: Enable/disable auto-fund | `.toggle-switch` in settings.html |
| **Radio Card** | Settings > Finance > Payout Schedule | Phase 7: Choose payout frequency | `.radio-card` in settings.html |
| **Dollar Input** | Settings > Finance > Auto-Fund | Phase 5: Funding amount, Phase 6: Thresholds | `.dollar-input-wrapper` in settings.html |
| **Settings Card** | Settings (all tabs) | All phases: Section containers | `.settings-card` in settings.html |
| **Info Box** | Settings (various) | All phases: Explanatory text | `.info-box` in settings.html |
| **Warning Box** | Settings > Finance | Phase 5: Low balance warning | `.warning-box` in settings.html |
| **Error Box** | Settings > Finance | All phases: Error states | `.error-box` in settings.html |
| **Setup Progress** | Get Verified screen | Phase 2, 9: Progress tracking | `/merchant/components/setup-progress.html` |
| **Verified Badge** | Settings > Account | Phase 2, 3: Verification status | `.verified-badge` in settings.html |
| **Connected Badge** | Settings > Apps | Phase 1: Connection status | `.connected-badge` in settings.html |
| **Checkbox** | Settings > Preferences | Phase 4: ToS acceptance, Phase 8: Opt-in | `.checkbox-item` in settings.html |
| **Modal** | Settings > various | All phases: Confirmations | `.modal-overlay` in settings.html |
| **Toast** | Settings > various | Phase 9: Launch notification | `.toast` in settings.html |
| **Spinner** | Settings > Apps | Phase 1: Connection testing | `.spinner` in settings.html |
| **Progress Bar** | Settings > Apps > Sandbox | Phase 5: Funding progress | `.progress-bar` in settings.html |
| **Button Primary** | Settings (all) | All phases: Primary actions | `.btn-primary` in settings.html |
| **Button Secondary** | Settings (all) | All phases: Secondary actions | `.btn-secondary` in settings.html |
| **Button Text** | Settings (all) | All phases: Links, help | `.btn-text` in settings.html |
| **Cross-link Card** | Settings > Finance | Phase 4: Link to Settings > Plan | `.cross-link-card` in settings.html |
| **Support Card** | Settings > Support | Cross-phase: Help resources | `.support-card` in settings.html |
| **Bullet List** | Settings > various | Cross-phase: Troubleshooting | `.bullet-list` in settings.html |
| **Form Field Pattern** | Settings (all tabs) | All form inputs | `.form-field`, `.form-label`, `.form-input`, `.form-hint` |

### Category B: Minor Adaptation (Small tweaks needed)

| Component | Source | Adaptation Needed | Effort |
|-----------|--------|-------------------|--------|
| **Form Input** | Core Inputs | Add visibility toggle variant for API keys | Low - add eye icon toggle |
| **Badge** | Core Badges | Add "Stripe" and "Encrypted" security variants | Low - new color/icon |
| **Radio Card** | Settings | Add "Recommended" badge styling | Low - badge addition |
| **Connected Badge** | Settings | Add "Connecting" and "Error" variants | Low - color variants |

### Category C: Inspiration Only (Similar pattern, needs new spec)

| Component | Source | What to Extract | What's Different |
|-----------|--------|-----------------|------------------|
| **OAuth Connection** | `/merchant/components/oauth-connection.html` | 5-state lifecycle pattern | API keys have different flow (no redirect) |
| **Statement Card** | Settings > Finance | Card with amounts and download | Promo Offer needs urgency, not history |
| **Setup Progress** | Get Verified | Step indicator pattern | Calculator needs dynamic output, not static steps |

---

## Part 6: Component Development Recommendations

### Immediate Priorities (Create specs before onboarding design)

| Priority | Component | Why Urgent | Effort | Reusability |
|----------|-----------|------------|--------|-------------|
| 1 | **Clearing Balance Calculator** | Blocks Phase 5, complex logic | High | HIGH - multiple uses |
| 2 | **Fee Structure Display** | Blocks Phase 4, trust-critical | Medium | HIGH - Settings, pricing pages |
| 3 | **Platform List with Search** | Blocks Phase 1, first impression | Medium | MEDIUM |
| 4 | **Money Flow Diagram** | Blocks understanding of Phase 3, 5 | Medium-High | HIGH - education |

### Can Defer (Use during implementation)

| Component | Why Deferrable | Fallback |
|-----------|----------------|----------|
| **API Key Input Toggle** | Standard input works | User can copy-paste without seeing |
| **Promo Offer Card** | Promotional, not blocking | Use Info Box + buttons |
| **Platform Voting** | Nice-to-have | Text link to feature request |
| **Calendar View** | Enhancement only | Radio Card options sufficient |

### Settings Components Ready to Harvest

These components from Settings can be copy-pasted or imported directly:

```
/merchant/screens/settings.html (inline CSS):
├── .toggle-switch / .toggle-switch-knob
├── .radio-card
├── .dollar-input-wrapper
├── .info-box / .warning-box / .error-box
├── .verified-badge / .connected-badge / .warning-badge
├── .modal-overlay / .modal-content / .modal-header / .modal-body / .modal-footer
├── .progress-bar / .progress-bar-fill
├── .spinner
├── .toast
├── .settings-card (rename to .onboarding-card)
├── .form-field / .form-label / .form-input / .form-hint
├── .checkbox-item / .checkbox-box
└── .btn-primary / .btn-secondary / .btn-text
```

---

## Part 7: Questions for Founder/Designer

### Critical Decisions

1. **Clearing Balance Calculator Complexity:** Should the calculator show multiple scenarios (conservative, moderate, aggressive penetration rates), or just one recommended amount with adjustment capability?

2. **Money Flow Diagram Style:** Should this be a static illustration, or an interactive/animated diagram? Static is faster to create but animated may aid understanding.

3. **Fee Structure Comparison:** Is it acceptable to implicitly compare Saltwyk's 3% to credit card fees (2-3%), or should we avoid comparison entirely?

4. **Platform List Scope:** For Phase 1, should we show all potential platforms (with "coming soon" status) or only currently-supported platforms?

### Lower Priority

5. **API Key Visibility:** Some platforms (Smile.io) may have long API keys. Should we truncate display or use a reveal-on-hover pattern?

6. **Promo Offer Scarcity:** If spots are limited (e.g., "47 remaining"), is this real-time from backend or static display?

7. **Setup Progress Clickability:** Should completed steps in the Setup Progress be clickable to allow users to go back and edit, or is this Settings-only post-onboarding?

### Technical

8. **Calculator Data Sources:** The Clearing Balance Calculator needs category-specific benchmarks. Where does this data come from? Hardcoded tiers or dynamic API?

9. **Plaid Integration:** Is Plaid definitely in scope for Phase 3, or is manual entry the only option at launch?

---

## Appendix: Coverage Statistics

### By Phase

| Phase | Total UI Needs | Covered by Existing | New Specs Needed | Coverage % |
|-------|----------------|---------------------|------------------|------------|
| Phase 0 | 5 | 5 | 0 | 100% |
| Phase 1 | 7 | 4 | 3 | 57% |
| Phase 2 | 8 | 8 | 0 | 100% |
| Phase 3 | 10 | 8 | 2 | 80% |
| Phase 4 | 10 | 6 | 4 | 60% |
| Phase 5 | 16 | 11 | 5 | 69% |
| Phase 6 | 9 | 9 | 0 | 100% |
| Phase 7 | 6 | 6 | 0 | 100% |
| Phase 8 | 5 | 5 | 0 | 100% |
| Phase 9 | 9 | 9 | 0 | 100% |
| Cross | 16 | 16 | 0 | 100% |
| **Total** | **101** | **87** | **14** | **86%** |

### By Component Type

| Type | Existing | Gaps | Notes |
|------|----------|------|-------|
| **Form Inputs** | Toggle, Radio, Checkbox, Text, Dollar | API Key Toggle | Minor adaptation needed |
| **Cards/Containers** | Settings Card, Support Card, Cross-link | Promo Offer Card | Medium effort |
| **Messaging Boxes** | Info, Warning, Error | None | Fully covered |
| **Badges/Status** | Verified, Connected, Warning, Role | Security Badge | Minor adaptation |
| **Progress** | Setup Progress, Progress Bar, Spinner | None | Fully covered |
| **Buttons** | Primary, Secondary, Text, Orange | None | Fully covered |
| **Modals/Overlays** | Modal, Toast | None | Fully covered |
| **Interactive** | None | Calculator, Diagram, Platform List | Major new specs |

---

## Appendix: File References

### Existing Component Documentation

| Component Category | File Path |
|-------------------|-----------|
| Setup Progress | `/merchant/components/setup-progress.html` |
| OAuth Connection | `/merchant/components/oauth-connection.html` |
| Sidebar Navigation | `/merchant/components/sidebar-nav.html` |
| Context Switcher | `/merchant/components/context-switcher.html` |
| Settings Screen (inline components) | `/merchant/screens/settings.html` |
| Core Inputs | `/core/components/inputs/index.html` |
| Core Cards | `/core/components/cards/index.html` |
| Core Modals | `/core/components/modals/index.html` |
| Core Progress | `/core/components/progress/index.html` |
| Core Buttons | `/core/components/buttons/index.html` |
| Core Badges | `/core/components/badges/index.html` |

### Related Analysis Documents

| Document | Purpose |
|----------|---------|
| `/docs/merchant-onboarding-jobs-to-be-done.md` | Source JTBD with all 42 job stories |
| `/docs/settings-onboarding-mapping-analysis.md` | Settings ↔ Onboarding handoff analysis |
| `/docs/merchant-settings-screen-spec.md` | Original Settings design specification |

---

*This analysis was generated by cross-referencing the Jobs to Be Done document against all existing merchant app components in the design system.*
