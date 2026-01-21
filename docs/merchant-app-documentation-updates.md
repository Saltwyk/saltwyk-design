# Merchant App Documentation Updates

**Date:** 2026-01-18  
**Purpose:** Reconcile design plan and job stories with actual implementation  
**Status:** Ready for Founder Review

---

## Executive Summary

After reviewing the actual implementation of the merchant app onboarding flow, significant portions have already been built. This document updates both the **Design Plan** and **Job Stories** to reflect:

1. **What's already built** (7 onboarding screens + delegation pattern)
2. **What needs design** (10 missing screens to complete MVP)
3. **Corrected onboarding sequence** (17 steps total, split across KYB and post-KYB phases)
4. **Where delegation is missing** (Business Information step)
5. **UX Pattern Decision:** Replacing wizard with **chat+cards conversational confirmation pattern** to reduce cognitive load

**⭐ Primary Design Artifact:** See `merchant-onboarding-design-spec.md` for complete specification of the chat+cards experience.

---

## Key Findings from Implementation Review

### ✅ Already Built & Working

**Onboarding Screens (7 of 17):**
1. **Onboarding Welcome** - Video placeholder, KYB explanation, "What to expect"
2. **Path Selection** - Go-Live immediately vs Launch Campaign choice
3. **Business Information** - EIN, address, business description (MISSING: delegation button)
4. **Account Representative** - Personal info, SSN last 4, ownership % (HAS delegation ✓)
5. **Bank Account** - Routing/account numbers with visual check diagram (HAS delegation ✓)
6. **Review & Submit** - Checklist showing 3 steps (NEEDS: expansion to show all 17)
7. **Progress Indicator** - 33% → 50% → 67% → 83% → 100% (NEEDS: recalculation for 17 steps)

**Dashboard Screens (4):**
- **Dashboard Home (M1)** - KPI cards, recent activity, clearing balance, issuers list
- **Transactions Page (M3)** - Filterable table, search, status tabs
- **Clearing Balance Page (M2)** - Balance display, coverage estimate, funding history
- **Trial Mode Banner** - Demo data indicator

**Key Patterns Implemented:**
- ✅ Delegation via SMS ("Send to X via SMS" buttons)
- ✅ Security callouts (encryption messaging, Stripe partnership)
- ✅ Visual education (bank check diagram)
- ✅ Field-level help text
- ✅ Progress tracking with percentages
- ✅ Back/Continue navigation
- ✅ Confirmation fields (account number validation)

### ❌ Missing from MVP (10 Screens)

**Pre-KYB (1 screen):**
1. **Store Confirmation** - Show Storeleads revenue/category, allow edits

**Post-KYB (9 screens):**
2. **KYB Pending State** - What merchant sees during 1-2 day approval wait
3. **API Key Connection** - Smile.io/Yotpo credentials with delegation to technical team
4. **Tier Verification** - Success state or upgrade path modal
5. **Pricing Explanation** - 2.9% own-points vs 2.4% network, promotional offers
6. **Fund Clearing Balance** - Calculator, ACH/debit, delegation to finance team
7. **Auto-Fund Setup** - Threshold, replenishment amount, toggle ON/OFF
8. **Payout Schedule** - Daily/weekly/minimum selection
9. **Exclude Merchants** - Optional list (up to 10 merchants)
10. **Launch Campaign Cards** - If "Launch" path: cohort details, spots, dates
11. **Setup Complete & Go Live** - Final checklist, celebration, go-live button

---

## Corrected Onboarding Sequence

### Current Implementation Sequence (Incorrect)

**What job stories said:**
1. Store confirmation → 2. Business info → 3. Banking → 4. Pricing → 5. Clearing balance → 6. Auto-fund → 7. Payout → 8. Exclusion → 9. Campaign

**What's actually built:**
1. (Missing store confirmation) → 2. Path selection → 3. Business → 4. Representative → 5. Bank → 6. Review & submit

**Problem:** Job stories assumed API connection happens during initial onboarding, but founder corrected: **API connection happens AFTER KYB approval** (1-2 days later)

### Corrected Sequence (17 Steps Total)

#### Phase 1: Initial Onboarding (KYB Submission)

| Step | Screen | Status | Notes |
|------|--------|--------|-------|
| 1 | Onboarding Welcome | ✅ Built | Needs video content |
| 2 | Store Confirmation | ❌ Missing | Show Storeleads data, allow edits |
| 3 | Path Selection | ✅ Built | Go-Live vs Launch Campaign |
| 4 | Business Information | ✅ Built | **NEEDS: delegation button** |
| 5 | Account Representative | ✅ Built | Has delegation ✓ |
| 6 | Bank Account | ✅ Built | Has delegation ✓ |
| 7 | Review & Submit | ✅ Built | **NEEDS: expansion to show all 17 steps** |

**↓ Merchant submits for KYB verification ↓**  
**↓ Wait 1-2 business days for Stripe approval ↓**

| Step | Screen | Status | Notes |
|------|--------|--------|-------|
| 8 | KYB Pending State | ❌ Missing | Dashboard in read-only, show progress |

**↓ KYB approved ↓**

#### Phase 2: Post-KYB Onboarding

| Step | Screen | Status | Notes |
|------|--------|--------|-------|
| 9 | API Key Connection | ❌ Missing | Smile.io/Yotpo, **NEEDS: delegation to technical team** |
| 10 | Tier Verification | ❌ Missing | Auto-check during connection, upgrade modal if fails |
| 11 | Pricing Explanation | ❌ Missing | 2.9% vs 2.4%, promotional offers |
| 12 | Fund Clearing Balance | ❌ Missing | Calculator, ACH/debit, **NEEDS: delegation to finance** |
| 13 | Auto-Fund Setup | ❌ Missing | Threshold, amount, toggle |
| 14 | Payout Schedule | ❌ Missing | Daily/weekly/minimum |
| 15 | Exclude Merchants | ❌ Missing | Optional, up to 10 |
| 16 | Launch Campaign | ❌ Missing | If "Launch" path: cohort selection |
| 17 | Setup Complete & Go Live | ❌ Missing | Final checklist, go-live button |

---

## Delegation Pattern Requirements

### ✅ Already Has Delegation

| Step | Delegation Button | SMS Template | Works |
|------|------------------|--------------|--------|
| Account Representative | "Send to business owner via SMS" | Placeholder text | ✅ Yes |
| Bank Account | "Send to account holder via SMS" | Placeholder text | ✅ Yes |

### ❌ Needs Delegation Added

| Step | Who Needs It | Why | Priority |
|------|-------------|-----|----------|
| Business Information | Business owner | Marketing user may not have EIN/tax info | High |
| API Key Connection | Technical team | Marketing user doesn't have Smile.io/Yotpo credentials | Critical |
| Clearing Balance Funding | Finance team | Marketing user doesn't have payment authority | High |

**Delegation Pattern Details:**
- Two-button UI: "Not the right person? Send to [role] via SMS"
- Sends SMS with direct link to specific step
- Original user can continue other steps while waiting
- Progress tracked separately for each delegated step
- Email alternative if SMS fails

---

## Design Plan Updates Required

### Phase 1 Priority Reordering

**OLD Priority (from design plan):**
1. Onboarding stepper → 2. Welcome → 3. API connection → 4. Business/banking → 5. Calculator → 6. Dashboard

**NEW Priority (reflects what's built):**

**Refinement (3.75 days):**
1. Business Information - ADD delegation button (1 day)
2. Review & Submit - EXPAND checklist to 17 steps (1 day)
3. Progress Indicator - RECALCULATE for 17 steps (0.5 days)
4. Welcome, Path, Representative, Bank - Visual polish only (1.25 days)

**Net New Design (12 days):**
1. Store Confirmation - First screen, Storeleads data (1 day)
2. API Key Connection - Critical blocker, has delegation (2 days)
3. Tier Verification - Upgrade path modal (1 day)
4. Pricing Explanation - Commercial clarity (1 day)
5. Fund Clearing Balance - Complex calculator, dual payment methods (3 days)
6. Auto-Fund Setup - Leverage balance patterns (1 day)
7. Payout Schedule - Form patterns (1 day)
8. KYB Pending State - Waiting experience (1 day)
9. Setup Complete - Finish line moment (1 day)

**Total Phase 1: ~16 design days**

### Component Inventory Updates

**Already Built (Don't Redesign):**
- ✅ Progress indicator with percentage
- ✅ Form sections with validation
- ✅ Secure inputs (masking, confirmation fields)
- ✅ Delegation buttons with SMS
- ✅ Security callout boxes
- ✅ Visual helpers (check diagram)
- ✅ Back/Continue navigation
- ✅ Dropdown selects
- ✅ Multi-column layouts (First/Last, City/State/ZIP)

**Still Need Design:**
- ❌ Store confirmation with pre-filled data
- ❌ API key input (platform-specific, masked, with screenshots)
- ❌ Connection test status (loading → success/failure)
- ❌ Tier comparison card (current vs required)
- ❌ Upgrade path modal (Smile.io/Yotpo contact, partnership benefits)
- ❌ Calculator with slider + coverage projections
- ❌ ACH vs Debit card selector with fee comparison
- ❌ Auto-fund threshold/amount inputs
- ❌ Payout schedule radio group
- ❌ Merchant exclusion list manager
- ❌ Cohort selection cards
- ❌ Go-live confirmation screen

---

## Job Stories Updates Required

### Onboarding Jobs Clarification

**Current job story sequence reflects incorrect flow.** Need to add:

1. **Clarifying note at Phase 3 header:**
   - "Onboarding is split: Initial = KYB submission (marketing user), Post-KYB = API/funding (technical/finance delegation)"

2. **Update "Connecting Rewards Platform" job:**
   - Change trigger: **AFTER KYB approval**, not during initial onboarding
   - Add delegation pattern to success criteria
   - Update friction: Marketing user doesn't have credentials

3. **New job: "Waiting for KYB Approval"**
   - When: Submitted KYB, waiting 1-2 days
   - Want to: Understand status, know what's next
   - So I can: Plan next steps, know when to check back

4. **Update "Getting Access to Custom App" job:**
   - Add step 0: Store confirmation with Storeleads data
   - Clarify install link generation happens pre-app (landing page)

5. **Delegation jobs - expand coverage:**
   - Business information delegation (currently missing)
   - API key delegation (marketing → technical)
   - Clearing balance delegation (marketing → finance)

### Sequence Numbers Need Updating

**Current numbering assumes 9 steps** (from old flow)  
**Actual implementation has 17 steps** (split across KYB and post-KYB)

Need to renumber all "Step X" references in job stories to match 17-step reality.

---

## Critical Questions for Founder

### 1. Store Confirmation Screen

**Question:** What data does Storeleads provide exactly?  
**Need:** API response shape to design pre-filled form
- Revenue (annual? monthly?)
- Category (dropdown options?)
- Store name?
- Other fields?

**Decision:** What if Storeleads has no data for a merchant?  
**Options:**
- A) Manual entry form (all fields)
- B) Skip step entirely
- C) Partial data + manual entry for missing

### 2. Business Information Delegation

**Question:** Should delegation be added to Business Information step?  
**Rationale:** Marketing users may not have EIN or tax documents  
**Recommendation:** Yes, add delegation ("Send to business owner via SMS")

**Implementation:** Same pattern as Account Representative and Bank Account

### 3. API Connection Timing

**Question:** Confirmed that API connection happens AFTER KYB approval?  
**Implication:** Merchant submits KYB → waits 1-2 days → then connects API  
**User experience:** Need KYB pending state screen, email when approved, "Complete setup" CTA

### 4. Progress Calculation

**Question:** Confirm 17 total steps is correct?  
**Current:** Progress bar shows 33%, 50%, 67%, 83%, 100% (assumes 6 steps)  
**Proposed:** Recalculate for 17 steps or use milestone-based progress (KYB submit = 30%, API connect = 60%, Funding = 80%, Go live = 100%)

### 5. Launch Campaign vs Go-Live

**Question:** What happens if merchant selects "Launch Campaign" path?  
**Current:** Path selection exists but no campaign selection screen built  
**Need:** Campaign cohort cards design (spots remaining, launch date, theme, video)

**Decision:** Can merchants switch from Launch to Go-Live later, or is choice locked?

### 6. Clearing Balance & Network Pricing

**Question:** During onboarding, do merchants see network pricing (2.4%) or only own-points (2.9%)?  
**Context:** Pricing Explanation screen (step 11) needs to know what to show  
**Options:**
- A) Show only own-points pricing during onboarding
- B) Show both, explain network upgrade available later
- C) Show network pricing IF they selected "Launch Campaign" path

---

## Out of Scope Clarifications

**Confirmed out of scope for this design effort:**
1. ❌ Cart page widget design (already mature, separate process)
2. ❌ Demo store experience (separate effort)
3. ❌ Demo-to-production conversion flow (separate effort)
4. ❌ Landing page / install link generator (pre-app, separate)
5. ❌ Shopify consent screen (Shopify-controlled, not customizable)

---

## Next Steps

### Immediate (Design Team)

1. **Review this document** - Validate findings match founder's understanding
2. **Answer critical questions** - Unblock design work
3. **Design Store Confirmation** - First missing screen (1 day)
4. **Add Business Info Delegation** - High priority gap (1 day)
5. **Design API Key Connection** - Critical path blocker (2 days)

### Short Term (Design Team)

6. **Expand Review & Submit** - Show all 17 steps (1 day)
7. **Recalculate Progress** - For 17-step flow (0.5 days)
8. **Design Fund Clearing Balance** - Complex calculator (3 days)
9. **Polish Built Screens** - Visual refinement pass (1.5 days)

### Documentation (Product)

10. **Update design plan** - Replace with corrected version (this document)
11. **Update job stories** - Add clarifications, correct sequence
12. **Create API integration specs** - For Storeleads, Smile.io, Yotpo
13. **Define calculator algorithm** - Coverage estimate formula

---

## Appendix: Screen Status Matrix

| # | Screen Name | Built | Needs Refinement | Needs Design | Priority | Effort |
|---|-------------|-------|-----------------|--------------|----------|---------|
| 1 | Onboarding Welcome | ✅ | Video content | - | MVP | 0.5d |
| 2 | Store Confirmation | ❌ | - | Full design | MVP | 1d |
| 3 | Path Selection | ✅ | Minor polish | - | MVP | 0.25d |
| 4 | Business Information | ✅ | **ADD delegation** | - | MVP | 1d |
| 5 | Account Representative | ✅ | Visual polish | - | MVP | 0.25d |
| 6 | Bank Account | ✅ | Visual polish | - | MVP | 0.25d |
| 7 | Review & Submit | ✅ | **EXPAND checklist** | - | MVP | 1d |
| 8 | KYB Pending | ❌ | - | Full design | MVP | 1d |
| 9 | API Key Connection | ❌ | - | Full design | MVP | 2d |
| 10 | Tier Verification | ❌ | - | Full design | MVP | 1d |
| 11 | Pricing Explanation | ❌ | - | Full design | MVP | 1d |
| 12 | Fund Clearing Balance | ❌ | - | Full design | MVP | 3d |
| 13 | Auto-Fund Setup | ❌ | - | Full design | MVP | 1d |
| 14 | Payout Schedule | ❌ | - | Full design | MVP | 1d |
| 15 | Exclude Merchants | ❌ | - | Full design | MVP | 1d |
| 16 | Launch Campaign | ❌ | - | Full design | MVP | 1d |
| 17 | Setup Complete | ❌ | - | Full design | MVP | 1d |

**Total Effort: ~16 design days (3.75 refinement + 12 new)**

---

**Document Status:** Draft complete, ready for founder review and design team planning.
