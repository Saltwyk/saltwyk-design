# Settings → Onboarding Mapping Analysis

**Last Updated:** 2026-01-20
**Status:** Investigation Complete - Ready for Review
**Owner:** Claude Code Analysis

---

## Executive Summary

The Settings screen provides comprehensive post-onboarding management across 6 tabs (Account, Finance, Apps, Team, Preferences, Support), with particularly strong coverage in the Finance section (two-account architecture with Settlement Account, External Bank, Auto-Fund, Payout Schedule, and Statements). However, **three critical gaps exist**: (1) Merchant Exclusions from Phase 8 have no Settings equivalent, (2) Launch Cohort from Phase 9 has no visibility post-onboarding, and (3) Fee structure from Phase 4 is not displayed in Settings. The Finance section components are highly reusable for onboarding, particularly the dollar input, toggle switch, and radio card patterns.

---

## Settings Capabilities Inventory

### Tab 1: Account

**Purpose:** Business identity and verification status

| Subsection | Capabilities | Editable? |
|------------|-------------|-----------|
| **Business Profile** | Name, address, EIN, verification badge | Read-only |
| **Contact Information** | Business email, phone with verified badge | Editable |

**Onboarding Jobs Satisfied:**
- Phase 2, Job: "Know Verification Timeline" → Verification status badge displayed
- Phase 2, Job: "Understand Verification Purpose" → "Verified" status confirms completion
- Cross-Phase, Job: "Change Decisions Before Launch" → Contact info editable

**Gap:** No way to view or re-initiate KYB verification process. Users must contact support.

---

### Tab 2: Finance

**Purpose:** Complete financial configuration with two-account architecture

| Subsection | Capabilities | Editable? |
|------------|-------------|-----------|
| **5.1 Settlement Account** | Balance, account ID, status, FDIC protection | Read-only |
| **5.2 External Bank Account** | Bank name, last 4 digits, verification status, update with warning | Editable |
| **5.3 Auto-Fund Settings** | Toggle on/off, threshold amount, replenishment amount, payment method, frequency estimate | Editable |
| **5.4 Payout Schedule** | Daily/Weekly/Minimum Amount options, next payout preview, clearing balance impact warning | Editable |
| **5.5 Statements** | Monthly statement cards with Settlements, Fees, Net; CSV download | Read-only |
| **5.6 Cross-Links** | Links to Finance Dashboard and Transactions | Navigation |

**Onboarding Jobs Satisfied:**
- Phase 3, Job: "Understand Dual Purpose" → Bank account card explains dual use (funding + payouts)
- Phase 3, Job: "Verify Account Correctness" → Verification status displayed
- Phase 5, Job: "See Fund Availability Timeline" → Auto-fund shows "1-2 days" for ACH
- Phase 6, Job: "Understand Auto-Fund Mechanism" → Toggle + explanation text
- Phase 6, Job: "Set Appropriate Thresholds" → Editable threshold/amount fields
- Phase 6, Job: "Trust Automated Management" → Frequency estimate provides transparency
- Phase 7, Job: "Choose Payout Frequency" → Radio card selection with 3 options
- Phase 7, Job: "Understand Settlement Timing" → "11 PM EST" timing and next payout preview

**Gap:**
- No clearing balance calculator (Phase 5, Job: "Calculate Appropriate Amount")
- No fee structure display (Phase 4, Job: "Understand Fee Structure")
- No initial funding history or one-time fund action for post-launch top-ups

---

### Tab 3: Apps

**Purpose:** Platform integrations and sandbox access

| Subsection | Capabilities | Editable? |
|------------|-------------|-----------|
| **Rewards Platform** | Connection status, last synced, Test/Reconnect/Change actions | Editable |
| **Commerce Platform** | OAuth connection, platform icon, store URL, Test/Disconnect | Editable |
| **Sandbox Environment** | Status, last refresh, Open Sandbox, Refresh from Production | Editable |

**Onboarding Jobs Satisfied:**
- Phase 1, Job: "Verify Connection Success" → Connection status and "Test Connection" button
- Phase 1, Job: "Connect Program Securely" → API key verified status
- Phase 10, Job: "Preview Checkout Experience" → Sandbox environment access

**Gap:**
- No "upgrade path" information for Smile.io non-Enterprise users
- No voting interface for unsupported programs
- No API key management UI (only shows "verified" status)

---

### Tab 4: Team

**Purpose:** Multi-user account management

| Subsection | Capabilities | Editable? |
|------------|-------------|-----------|
| **Team Members** | List with email, role (Admin/User), join date, Remove action | Editable |
| **Invite** | Invite Team Member button | Editable |

**Onboarding Jobs Satisfied:**
- None directly (Team setup is post-onboarding only)

**Gap:** This is a Settings-only feature not addressed in onboarding.

---

### Tab 5: Preferences

**Purpose:** Notification and communication settings

| Subsection | Capabilities | Editable? |
|------------|-------------|-----------|
| **Email Notifications** | Transaction alerts, balance warnings, settlement receipts, marketing | Editable |

**Onboarding Jobs Satisfied:**
- Cross-Phase, Job: "Know When I'm Ready" → Email notifications for launch alerts

**Gap:** Notification preferences not configured during onboarding (could be optional step).

---

### Tab 6: Support

**Purpose:** Help resources and contact

| Subsection | Capabilities | Editable? |
|------------|-------------|-----------|
| **Contact Support** | Email, response time, send email action | Read-only |
| **Help Resources** | Documentation, API docs, FAQs links | Read-only |

**Onboarding Jobs Satisfied:**
- Cross-Phase, Job: "Get Help When Stuck" → Support access point

**Gap:** No in-app chat (marked "Coming Soon").

---

## Onboarding → Settings Handoff Map

### Phase 0: Welcome & Context Setting

| Aspect | Details |
|--------|---------|
| **Onboarding configures** | Business profile confirmation (revenue, category from Storeleads) |
| **Settings manages** | N/A - Welcome is one-time context setting |
| **Handoff point** | No handoff needed |
| **Data preserved** | Revenue/category stored but not displayed in Settings |
| **Gap/Issue** | **MISSING:** No way to view or correct revenue/category post-onboarding |

---

### Phase 1: Loyalty Program Connection

| Aspect | Details |
|--------|---------|
| **Onboarding configures** | Select loyalty program, enter API key, verify connection |
| **Settings manages** | View connected program, test connection, reconnect, change program |
| **Handoff point** | Connection established → ongoing management |
| **Data preserved** | Program name, connection status, last sync time |
| **Gap/Issue** | API key not visible/editable in Settings (only "verified" status) |

**Onboarding Jobs → Settings Mapping:**
- "Discover Program Support" → Settings shows which program is connected
- "Connect Program Securely" → Reconnect/Change actions available
- "Verify Connection Success" → Test Connection button, sync status

---

### Phase 2: Business Information (KYB)

| Aspect | Details |
|--------|---------|
| **Onboarding configures** | Legal name, address, EIN submission for verification |
| **Settings manages** | View verified business info (read-only), verification badge |
| **Handoff point** | Verification complete → display status |
| **Data preserved** | Business name, address, masked EIN, verification status |
| **Gap/Issue** | No way to update business info or re-verify (must contact support) |

**Onboarding Jobs → Settings Mapping:**
- "Understand Verification Purpose" → Verification badge provides closure
- "Know Verification Timeline" → Status shows "Verified" (not timeline)
- "Continue Despite Pending Verification" → Settings only shows completed state

---

### Phase 3: Banking Information

| Aspect | Details |
|--------|---------|
| **Onboarding configures** | Bank account for funding + settlements (dual purpose) |
| **Settings manages** | View bank details, update bank account, verification status |
| **Handoff point** | Initial connection → ongoing management with change capability |
| **Data preserved** | Bank name, last 4 digits, verification date |
| **Gap/Issue** | Warning about verification pause when updating is good; no Plaid integration visible |

**Onboarding Jobs → Settings Mapping:**
- "Understand Dual Purpose" → Settings explains "funding + payouts" use
- "Trust Data Security" → Stripe branding, FDIC mention
- "Provide Account Details Easily" → Update Bank Account action (initiates flow)
- "Verify Account Correctness" → Verification badge displayed

---

### Phase 4: Pricing

| Aspect | Details |
|--------|---------|
| **Onboarding configures** | View and accept 3% fee structure, promotional offers |
| **Settings manages** | **NOTHING** - No fee visibility in Settings |
| **Handoff point** | Fee acceptance → ??? |
| **Data preserved** | Fees appear in Statements only (as deductions) |
| **Gap/Issue** | **CRITICAL GAP:** No fee schedule display, no promo status, no pricing transparency |

**Onboarding Jobs → Settings Mapping:**
- "Understand Fee Structure" → **NOT MAPPED** (Statements show fees but not rate)
- "Evaluate Promotional Offer" → **NOT MAPPED** (No promo status visibility)
- "Accept Terms Confidently" → **NOT MAPPED** (No ToS reference in Settings)

**Recommendation:** Add "Pricing & Fees" subsection to Finance tab showing:
- Current fee rate (3%)
- Promotional status if applicable
- Link to Terms of Service
- Fee history summary

---

### Phase 5: Fund Clearing Balance

| Aspect | Details |
|--------|---------|
| **Onboarding configures** | Initial funding amount, funding method (ACH vs debit card) |
| **Settings manages** | View current balance, auto-fund settings, but NOT one-time manual funding |
| **Handoff point** | Initial funding → balance monitoring + auto-fund |
| **Data preserved** | Current balance (in Settlement Account card) |
| **Gap/Issue** | **MISSING:** No manual "Add Funds" action for one-time top-ups |

**Onboarding Jobs → Settings Mapping:**
- "Understand Clearing Balance Concept" → Settlement Account info box explains it
- "Calculate Appropriate Amount" → **NOT MAPPED** (No calculator tool in Settings)
- "Choose Funding Method Strategically" → Auto-fund shows ACH method (no card option)
- "See Fund Availability Timeline" → "1-2 days" shown in auto-fund
- "Validate Amount is Sufficient" → **NOT MAPPED** (No coverage estimate)

**Recommendation:** Add to Finance tab:
- "Add Funds" one-time action (for manual top-ups)
- Balance calculator link or inline tool
- Coverage estimate based on transaction volume

---

### Phase 6: Auto-Fund Settings

| Aspect | Details |
|--------|---------|
| **Onboarding configures** | Enable/disable auto-fund, threshold, replenishment amount |
| **Settings manages** | Same configuration with full edit capability |
| **Handoff point** | Initial setup → ongoing management (seamless) |
| **Data preserved** | Toggle state, threshold, amount, payment method |
| **Gap/Issue** | No gap - **excellent handoff** |

**Onboarding Jobs → Settings Mapping:**
- "Understand Auto-Fund Mechanism" → Toggle + explanation text ✓
- "Set Appropriate Thresholds" → Editable fields with recommendations ✓
- "Trust Automated Management" → Frequency estimate + notification mention ✓

**This is a model handoff pattern.** Same component can be used in both contexts.

---

### Phase 7: Payout Schedule

| Aspect | Details |
|--------|---------|
| **Onboarding configures** | Choose payout frequency (daily/weekly/minimum) |
| **Settings manages** | Same configuration with full edit capability |
| **Handoff point** | Initial selection → ongoing management (seamless) |
| **Data preserved** | Selected schedule, next payout date, estimated amount |
| **Gap/Issue** | No gap - **excellent handoff** |

**Onboarding Jobs → Settings Mapping:**
- "Choose Payout Frequency" → Radio card selection ✓
- "Understand Settlement Timing" → "11 PM EST" + next payout preview ✓

**This is a model handoff pattern.** Same component can be used in both contexts.

---

### Phase 8: Exclude Merchants

| Aspect | Details |
|--------|---------|
| **Onboarding configures** | Optional exclusion of competitors/merchants |
| **Settings manages** | **NOTHING** - No exclusion management |
| **Handoff point** | Initial exclusions → ??? |
| **Data preserved** | Unknown |
| **Gap/Issue** | **CRITICAL GAP:** No way to view, add, or remove exclusions post-onboarding |

**Onboarding Jobs → Settings Mapping:**
- "Identify Competitors" → **NOT MAPPED**
- "Provide Exclusion Reasoning" → **NOT MAPPED**
- "Understand Bidirectional Blocking" → **NOT MAPPED**

**Recommendation:** Add "Network" or "Exclusions" tab/section with:
- View excluded merchants list
- Add new exclusion (with search)
- Remove exclusion
- Bidirectional blocking explanation

---

### Phase 9: Launch Cohort Selection

| Aspect | Details |
|--------|---------|
| **Onboarding configures** | Choose launch cohort, commit to launch date |
| **Settings manages** | **NOTHING** - No cohort visibility |
| **Handoff point** | Selection → ??? (historical record only?) |
| **Data preserved** | Unknown |
| **Gap/Issue** | **GAP:** No way to view cohort membership or launch history |

**Onboarding Jobs → Settings Mapping:**
- "Understand Cohort Strategy" → **NOT MAPPED** (post-launch, may not need)
- "Choose Aligned Cohort" → One-time decision, not editable
- "See Cohort Composition" → **NOT MAPPED** (could be valuable network info)
- "Commit to Launch Date" → **NOT MAPPED** (historical record)

**Recommendation:** Consider adding to Account tab:
- "Launch Info" read-only section showing cohort joined, launch date
- Or: Deprioritize if cohort is one-time and not ongoing value

---

### Phase 10: Setup Complete - Pre-Launch Dashboard

| Aspect | Details |
|--------|---------|
| **Onboarding configures** | N/A - this is the waiting/monitoring phase |
| **Settings manages** | All ongoing settings accessible during wait |
| **Handoff point** | Pre-launch → post-launch (Settings same in both) |
| **Data preserved** | All configuration |
| **Gap/Issue** | **MISSING:** Marketing resources access (onboarding mentions this) |

**Onboarding Jobs → Settings Mapping:**
- "Track Setup Progress" → Settings doesn't track onboarding progress (separate UI)
- "Preview Checkout Experience" → Sandbox in Apps tab ✓
- "Understand Launch Readiness" → No explicit "launch status" in Settings
- "Access Marketing Resources" → **NOT MAPPED** (no marketing materials in Settings)

**Recommendation:** Add to Support tab or new section:
- Marketing materials download
- Co-marketing assets and badges
- Launch announcement templates

---

## Settings-Only Features

These capabilities exist in Settings but are NOT configured during onboarding:

| Feature | Location | Notes |
|---------|----------|-------|
| **Team Management** | Team tab | Invite team members, manage roles, remove users |
| **Notification Preferences** | Preferences tab | Email alert configuration |
| **Monthly Statements** | Finance > Statements | Download historical settlement/fee reports |
| **Sandbox Refresh** | Apps > Sandbox | Refresh sandbox from production data |
| **Commerce Platform Disconnect** | Apps tab | Ability to disconnect platform integration |
| **Contact Email/Phone Update** | Account tab | Edit contact information post-verification |

---

## Onboarding-Only Elements

These get configured in onboarding but have NO Settings equivalent:

| Element | Onboarding Phase | Why No Settings? |
|---------|------------------|------------------|
| **Welcome/Revenue Confirmation** | Phase 0 | One-time context, stored but not displayed |
| **Loyalty Program Voting** | Phase 1 | Feature request, not account config |
| **KYB Re-verification** | Phase 2 | Compliance requirement, must contact support |
| **Fee Structure Acceptance** | Phase 4 | One-time legal acceptance |
| **Promotional Offer Acceptance** | Phase 4 | Time-limited, one-time decision |
| **Initial Clearing Balance Funding** | Phase 5 | Settings has auto-fund but not manual add |
| **Funding Method Choice (Card vs ACH)** | Phase 5 | Auto-fund only offers ACH |
| **Merchant Exclusions** | Phase 8 | **GAP** - should be in Settings |
| **Cohort Selection** | Phase 9 | One-time, not editable post-selection |
| **Marketing Resources** | Phase 10 | **GAP** - could be in Settings |

---

## Component Reuse Opportunities

| Component Name | Settings Location | Onboarding Use | Modifications Needed |
|----------------|-------------------|----------------|---------------------|
| **Toggle Switch** | Finance > Auto-Fund | Phase 6: Enable/disable auto-fund | None |
| **Dollar Input** | Finance > Auto-Fund, Payout | Phase 5: Funding amount, Phase 6: Thresholds | Add validation messaging for onboarding |
| **Radio Card Selection** | Finance > Payout Schedule | Phase 7: Choose payout frequency | None |
| **Bank Account Display** | Finance > External Bank | Phase 3: Confirm bank account | Add edit capability for onboarding |
| **Verified Badge** | Account > Business Profile | Phase 2: Verification status | Add "Pending" and "Failed" states |
| **Info Box** | Throughout | All phases: Contextual help | None |
| **Warning Box** | Finance > External Bank, Payout | Phase 3: Bank update warnings | None |
| **Connected Badge** | Apps > Platforms | Phase 1: Loyalty connection | Add "Connecting" and "Error" states |
| **Settings Card** | All tabs | All phases: Section containers | None |
| **Statement Card** | Finance > Statements | N/A (post-onboarding only) | N/A |
| **Cross-Link Card** | Finance > Cross-Links | Phase 10: Navigation to related areas | None |

### High-Value Reuse Components

**1. Auto-Fund Configuration Panel**
- Currently in: Finance > Auto-Fund Settings (5.3)
- Reuse for: Phase 6 onboarding step
- Contains: Toggle, threshold input, amount input, payment method display, frequency estimate
- Modification: Add "recommended" badges for default values during onboarding

**2. Payout Schedule Selector**
- Currently in: Finance > Payout Schedule (5.4)
- Reuse for: Phase 7 onboarding step
- Contains: Radio cards for Daily/Weekly/Minimum, next payout preview
- Modification: Add "most popular" or "recommended" tag for onboarding

**3. Bank Account Card**
- Currently in: Finance > External Bank Account (5.2)
- Reuse for: Phase 3 confirmation screen
- Contains: Bank icon, name, last 4, verification status
- Modification: Add Plaid integration for automatic linking during onboarding

**4. API/OAuth Connection Component**
- Currently in: Apps > Rewards Platform, Commerce Platform
- Reuse for: Phase 1 loyalty connection
- Already documented: `/merchant/components/oauth-connection.html`
- Contains: 5 states (Not Connected, Connecting, Connected, Error, Expired)

---

## Critical Gaps Identified

### 1. No Merchant Exclusions Management

**Problem:** Phase 8 allows merchants to exclude competitors during onboarding, but Settings provides no way to view, add, or remove exclusions afterward.

**Impact:**
- Merchants cannot see who they've excluded
- Cannot exclude new competitors discovered post-launch
- Cannot remove exclusions if relationship changes
- Network management is invisible

**Recommendation:**
- Add "Network" tab or "Exclusions" subsection to Settings
- Include: Excluded merchants list, add/remove actions, bidirectional blocking explanation
- Consider: Showing exclusions that affect this merchant (bidirectional visibility)

---

### 2. No Fee/Pricing Visibility

**Problem:** Phase 4 has merchants review and accept the 3% fee structure, but Settings shows no pricing information. Fees only appear as deductions in Statements.

**Impact:**
- Merchants cannot verify their fee rate
- Promotional status not visible post-acceptance
- No Terms of Service reference
- Financial transparency gap

**Recommendation:**
- Add "Pricing" subsection to Finance tab
- Include: Current fee rate, promotional status (if applicable), ToS link, fee calculator
- Consider: Fee comparison to credit card processing (value reinforcement)

---

### 3. No Manual Clearing Balance Funding

**Problem:** Phase 5 allows initial clearing balance funding with choice of ACH or debit card. Settings only has auto-fund (ACH only), no one-time manual funding action.

**Impact:**
- Merchants cannot add funds outside auto-fund cycle
- No instant funding option (debit card) post-onboarding
- Balance running low requires waiting for auto-fund trigger

**Recommendation:**
- Add "Add Funds" action to Settlement Account or separate subsection
- Include: Amount input, method choice (ACH free/1-2 days, Debit 1.5%/instant)
- Link to: Clearing Balance screen for detailed management

---

### 4. No Cohort/Launch History Visibility

**Problem:** Phase 9 cohort selection and launch commitment have no visibility in Settings.

**Impact:**
- Merchants cannot see which cohort they joined
- Launch date history not recorded
- Network composition not visible post-launch

**Recommendation (lower priority):**
- Consider: "Launch Info" read-only section in Account tab
- Or: Accept that cohort is one-time and not ongoing value
- Alternative: Show cohort info in dashboard, not Settings

---

### 5. No Marketing Resources Access

**Problem:** Phase 10 mentions marketing materials and co-marketing assets, but Settings Support tab only has documentation links.

**Impact:**
- Merchants cannot access marketing badges/assets
- No launch announcement templates
- Co-marketing opportunity missed

**Recommendation:**
- Add "Marketing" subsection to Support tab
- Include: Badge downloads, email templates, social assets
- Or: Separate "Resources" tab if content is substantial

---

## Recommendations

### For Onboarding Design

1. **Reuse Finance components directly:**
   - Auto-Fund panel (Phase 6)
   - Payout Schedule selector (Phase 7)
   - Dollar input pattern (Phase 5, 6)
   - Toggle switch pattern (Phase 6)

2. **Match Settings visual patterns:**
   - Use same Settings Card container style
   - Use same Info Box and Warning Box patterns
   - Use same Verified/Connected badge styles

3. **Prepare handoff messaging:**
   - Add "You can change this anytime in Settings > Finance" notes
   - Clear indication of what's editable post-onboarding

4. **Design for exclusions gap:**
   - If exclusions in onboarding → must add to Settings
   - Or: Defer exclusions to Settings-only (post-launch feature)

### For Settings Updates

1. **Add to Finance tab:**
   - Pricing/Fees subsection (fee rate, promo status, ToS)
   - Add Funds one-time action (ACH + debit options)

2. **Add Network/Exclusions section:**
   - View excluded merchants
   - Add/remove exclusions
   - Bidirectional blocking explanation

3. **Consider for Account tab:**
   - Launch Info section (cohort, launch date) - low priority

4. **Consider for Support tab:**
   - Marketing Resources subsection

### For Component Library

1. **Extract as standalone components:**
   - Toggle Switch (already documented in Settings HTML CSS)
   - Dollar Input (with prefix styling)
   - Radio Card (selection pattern)
   - Settings Card (container pattern)
   - Info/Warning Box (messaging patterns)
   - Connected/Verified Badge (status indicators)

2. **Extend existing components:**
   - OAuth Connection: Add API key variant for rewards platforms
   - Bank Account Card: Add Plaid integration state

3. **Create new components for onboarding:**
   - Clearing Balance Calculator (interactive estimator)
   - Fee Structure Display (rate + examples)
   - Cohort Selection Card (if cohort UX designed)

---

## Questions for Founder Review

### Critical Decisions

1. **Merchant Exclusions:** Should exclusion management be added to Settings? If not, should exclusions be removed from onboarding (Phase 8) and deferred to a future feature?

2. **Fee Transparency:** Should the current fee rate and promotional status be visible in Settings > Finance? This affects pricing transparency and trust.

3. **Manual Funding:** Should merchants be able to add funds to clearing balance manually (with instant debit card option) post-onboarding, or is auto-fund sufficient?

### Lower Priority

4. **Cohort Visibility:** Is there ongoing value in showing cohort membership in Settings, or is this truly a one-time onboarding decision?

5. **Marketing Resources:** Where should marketing materials live? Support tab, separate Resources section, or external link to marketing portal?

6. **Notification Setup:** Should notification preferences be configurable during onboarding as an optional step, or is Settings-only sufficient?

### Technical

7. **API Key Management:** For rewards platforms using API keys, should Settings allow viewing/rotating the API key, or just show "verified" status?

8. **Clearing Balance Calculator:** Should the onboarding calculator tool also be available in Settings for ongoing balance planning?

---

## Appendix: Job Coverage Matrix

| Phase | Total Jobs | Covered by Settings | Partially Covered | Not Covered |
|-------|-----------|---------------------|-------------------|-------------|
| Phase 0 | 2 | 0 | 0 | 2 |
| Phase 1 | 5 | 3 | 1 | 1 |
| Phase 2 | 4 | 2 | 1 | 1 |
| Phase 3 | 4 | 4 | 0 | 0 |
| Phase 4 | 3 | 0 | 1 | 2 |
| Phase 5 | 5 | 2 | 1 | 2 |
| Phase 6 | 3 | 3 | 0 | 0 |
| Phase 7 | 2 | 2 | 0 | 0 |
| Phase 8 | 3 | 0 | 0 | 3 |
| Phase 9 | 4 | 0 | 0 | 4 |
| Phase 10 | 4 | 1 | 1 | 2 |
| Cross-Phase | 6 | 2 | 2 | 2 |
| **Total** | **45** | **19 (42%)** | **7 (16%)** | **19 (42%)** |

**Key Insight:** Phases 6 and 7 (Auto-Fund and Payout) have 100% coverage - these are model handoff patterns. Phases 4, 8, and 9 have critical gaps requiring Settings updates or onboarding scope decisions.

---

*This analysis was generated by investigating the merchant Settings screen documentation (`/merchant/screens/settings.html`) and comparing against the Jobs to Be Done document (`/docs/merchant-onboarding-jobs-to-be-done.md`).*
