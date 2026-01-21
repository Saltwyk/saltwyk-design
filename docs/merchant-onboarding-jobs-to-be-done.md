# Jobs to Be Done: Merchant Onboarding

**Last Updated:** 2025-01-20  
**Status:** Updated Based on Settings Analysis  
**Owner:** Tela

---

## Updates from Settings Analysis

**Key Changes:**
1. ✅ **Phase 8 (Exclusions) removed from onboarding** - Deferred to Settings > Network section (post-MVP)
2. ✅ **Phase 9 (Launch Cohort) simplified** - Campaign registration only, detailed management in Campaigns nav section
3. ✅ **Phase 4 (Pricing) updated** - Must show in Settings > Plan section with link to pricing page
4. ✅ **Phase 5 (Clearing Balance) updated** - Debit card funding removed, ACH only
5. ✅ **Phase 10 (Pre-Launch) updated** - Marketing resources deferred to post-launch
6. ✅ **Terminology corrected** - "Loyalty program" → "Rewards platform" throughout

**Settings Updates Required:**
- Add **Plan** section to Settings (current plan, pricing, upgrade path)
- Add **Network** section to Settings (merchant exclusions management)
- Add **Campaigns** to left navigation (campaign registration and management)
- Add **Manual Funding** to Finance tab (ACH only, one-time top-ups)
- Ensure **Clearing Balance Calculator** is reusable component across app

---

## Purpose of This Document

This document defines the merchant's jobs to be done at each phase of the Saltwyk onboarding experience. These jobs drive:

- **Component design** - What UI elements are needed to accomplish these jobs
- **Interaction patterns** - How merchants move through the flow
- **Error handling** - What happens when jobs can't be completed
- **Technical requirements** - What APIs, integrations, and data are needed

**Job Story Format:**
```
When [situation/context]
I want to [motivation/action]
So I can [expected outcome]
```

Each job includes:
- **Blocking Priority:** High (must complete to proceed), Medium (important but not blocking), Low (nice-to-have)
- **Primary Persona:** Who cares most about this job
- **Secondary Persona(s):** Who else is affected
- **UI Needs:** What components/interactions enable this job

---

## Persona Definitions

**Business Owner**
- Strategic decision maker
- Cares about: ROI, competitive advantage, brand alignment
- Questions: "Is this worth it? Will this help my business?"

**Finance**
- Controls cash flow and P&L
- Cares about: Fees, cash flow impact, accounting integration
- Questions: "What does this cost? How does money flow?"

**Operations**
- Manages day-to-day execution
- Cares about: Ease of management, reliability, support
- Questions: "Will this create work for me? Can I manage this?"

**Technical**
- Implements and maintains integrations
- Cares about: Integration complexity, data security, API reliability
- Questions: "How hard is this to set up? Is it secure?"

**Strategy**
- Thinks about partnerships and market positioning
- Cares about: Network effects, merchant partnerships, competitive dynamics
- Questions: "Who else is in the network? How do I position myself?"

---

## Phase 0: Welcome & Context Setting

### Job: Confirm My Business Profile
**When** I first open the Saltwyk app after installation  
**I want to** verify that Saltwyk correctly understands my business (revenue, category)  
**So I can** trust that recommendations and settings will be appropriate for my business size and type

- **Blocking:** Medium
- **Primary Persona:** Business Owner
- **Secondary Persona:** Finance, Operations
- **UI Needs:** Welcome screen with pre-filled revenue (from Storeleads) and category, easy correction if wrong

### Job: Understand What I'm Signing Up For
**When** I'm seeing the onboarding flow for the first time  
**I want to** understand the high-level value proposition and what commitment I'm making  
**So I can** decide if this is worth my time to complete

- **Blocking:** Medium
- **Primary Persona:** Business Owner
- **Secondary Persona:** Strategy
- **UI Needs:** Clear value prop messaging, time estimate for onboarding, overview of steps

---

## Phase 1: Rewards Platform Connection (Step 1) ← BLOCKER

### Job: Discover Platform Support
**When** I'm choosing my rewards platform provider  
**I want to** see immediately if my platform is supported  
**So I know** whether I can proceed or need to take action

- **Blocking:** High
- **Primary Persona:** Technical
- **Secondary Persona:** Business Owner, Operations
- **UI Needs:** Clear list of supported platforms (Smile.io Enterprise, Yotpo), search/filter capability

### Job: Understand Upgrade Path
**When** I have Smile.io but not Enterprise tier  
**I want to** understand my options for upgrading  
**So I can** decide whether to pursue this now or wait

- **Blocking:** High (for launch, not for setup continuation)
- **Primary Persona:** Business Owner
- **Secondary Persona:** Finance (cost implications)
- **UI Needs:** Clear upgrade messaging, partnership assistance offer, ability to continue setup anyway

### Job: Connect Platform Securely
**When** I'm ready to connect my supported rewards platform  
**I want to** provide API credentials securely without manual entry of sensitive data  
**So I can** trust the integration is safe and will work reliably

- **Blocking:** High
- **Primary Persona:** Technical
- **Secondary Persona:** Operations
- **UI Needs:** Secure API key input form, clear instructions for finding keys in platform admin, connection verification

### Job: Influence Future Support
**When** my rewards platform isn't currently supported  
**I want to** vote for future support and see what others have requested  
**So I can** feel heard and potentially influence roadmap

- **Blocking:** Low
- **Primary Persona:** Business Owner
- **Secondary Persona:** Strategy
- **UI Needs:** Voting interface, visibility into popular requests, ability to suggest new platforms

### Job: Verify Connection Success
**When** I've submitted my API credentials  
**I want to** see immediate confirmation that the connection works  
**So I can** proceed with confidence or troubleshoot if there's an issue

- **Blocking:** High
- **Primary Persona:** Technical
- **Secondary Persona:** Operations
- **UI Needs:** Real-time connection verification, clear success/error states, troubleshooting guidance

---

## Phase 2: Business Information (Step 2) ← KYB

### Job: Understand Verification Purpose
**When** I'm asked to provide business information  
**I want to** understand why this is required and what it enables  
**So I can** feel confident this isn't just bureaucracy

- **Blocking:** Medium
- **Primary Persona:** Business Owner
- **Secondary Persona:** Finance
- **UI Needs:** Clear explanation of KYB requirement (regulatory compliance, settlement enablement), one-time process messaging

### Job: Provide Details Efficiently
**When** I'm entering business information  
**I want to** have fields pre-filled where possible and clear labels for required data  
**So I can** complete this quickly without hunting for information

- **Blocking:** High
- **Primary Persona:** Operations
- **Secondary Persona:** Finance
- **UI Needs:** Pre-filled legal name and address (from Shopify if available), clear field labels, inline validation, EIN/Tax ID format help

### Job: Know Verification Timeline
**When** I submit my business information  
**I want to** know how long verification will take and what happens next  
**So I can** set appropriate expectations and plan accordingly

- **Blocking:** Medium
- **Primary Persona:** Business Owner
- **Secondary Persona:** Operations
- **UI Needs:** Clear timeline (1-2 business days), notification plan, ability to continue setup while pending

### Job: Continue Despite Pending Verification
**When** my verification is in progress  
**I want to** continue configuring other settings  
**So I can** make progress even while waiting for external verification

- **Blocking:** High
- **Primary Persona:** Operations
- **Secondary Persona:** Business Owner
- **UI Needs:** Clear separation between "can configure now" vs "blocked until verified," progress tracking dashboard

---

## Phase 3: Banking Information (Step 3)

### Job: Understand Dual Purpose
**When** I'm asked for bank account information  
**I want to** understand that this one account serves both funding (clearing balance) and settlements (payouts)  
**So I can** choose the right account and understand the cash flow

- **Blocking:** High
- **Primary Persona:** Finance
- **Secondary Persona:** Business Owner
- **UI Needs:** Clear explanation of dual purpose, visual diagram of money flow, reassurance this can be changed later if needed

### Job: Trust Data Security
**When** I'm entering sensitive banking information  
**I want to** see security indicators and understand how data is protected  
**So I can** feel safe providing account details

- **Blocking:** High
- **Primary Persona:** Finance
- **Secondary Persona:** Technical
- **UI Needs:** Security badges (Stripe processing, encryption), clear privacy policy link, industry-standard security messaging

### Job: Provide Account Details Easily
**When** I need to input routing and account numbers  
**I want to** either link my bank automatically or enter manually with confidence I'm doing it right  
**So I can** avoid errors that would delay setup

- **Blocking:** High
- **Primary Persona:** Finance
- **Secondary Persona:** Operations
- **UI Needs:** Clear input fields with format validation, confirmation field for account number, potentially Plaid integration for automatic linking

### Job: Verify Account Correctness
**When** I've entered my bank account information  
**I want to** see confirmation that details are valid  
**So I can** catch errors before they cause funding or payout issues

- **Blocking:** High
- **Primary Persona:** Finance
- **Secondary Persona:** Operations
- **UI Needs:** Instant validation where possible, clear confirmation screen, ability to edit before finalizing

---

## Phase 4: Pricing (Step 4)

### Job: Understand Fee Structure
**When** I'm reviewing Saltwyk pricing  
**I want to** clearly understand the 3% transaction fee and when it applies  
**So I can** evaluate ROI and avoid surprise costs later

- **Blocking:** High
- **Primary Persona:** Finance
- **Secondary Persona:** Business Owner
- **UI Needs:** Clear fee breakdown, examples of fee calculation, comparison to credit card fees (implicit), note that this will be visible in Settings > Plan

### Job: Evaluate Promotional Offer
**When** a promotional offer is available (zero fees for 60 days)  
**I want to** understand the terms, deadlines, and what happens after  
**So I can** decide if I want to take advantage of it

- **Blocking:** Medium
- **Primary Persona:** Business Owner
- **Secondary Persona:** Finance
- **UI Needs:** Clear promo terms, launch deadline, scarcity indicators (spots remaining), easy accept/decline

### Job: Accept Terms Confidently
**When** I'm agreeing to Saltwyk's pricing  
**I want to** review terms of service and feel I understand what I'm committing to  
**So I can** proceed without worry about hidden surprises

- **Blocking:** High
- **Primary Persona:** Business Owner
- **Secondary Persona:** Finance
- **UI Needs:** Clear ToS link, summary of key terms, explicit acceptance checkbox

### Job: Know Where to Find Pricing Later
**When** I've accepted pricing during onboarding  
**I want to** know I can reference my plan and pricing anytime in Settings  
**So I can** verify my rate or review upgrade options in the future

- **Blocking:** Low
- **Primary Persona:** Finance
- **Secondary Persona:** Business Owner
- **UI Needs:** Messaging that plan details will be available in Settings > Plan, link to pricing page

---

## Phase 5: Fund Clearing Balance (Step 5) ← COMPLEX

### Job: Understand Clearing Balance Concept
**When** I'm learning about clearing balance for the first time  
**I want to** understand what it is, why it's needed, and how it works  
**So I can** make informed decisions about funding amounts

- **Blocking:** High
- **Primary Persona:** Finance
- **Secondary Persona:** Business Owner, Operations
- **UI Needs:** Clear explanation (working capital for rewards commerce), visual diagram, reassurance about safety and payouts

### Job: Calculate Appropriate Amount
**When** I'm deciding how much to fund  
**I want to** see category-specific guidance based on my business size and type  
**So I can** fund the right amount (not too much/too little)

- **Blocking:** High
- **Primary Persona:** Finance
- **Secondary Persona:** Operations
- **UI Needs:** Interactive calculator (reusable component), industry benchmarks, scenario modeling (penetration rate assumptions), recommended minimum

### Job: Initiate ACH Transfer
**When** I'm ready to fund my clearing balance  
**I want to** initiate an ACH transfer from my connected bank account  
**So I can** start building my clearing balance for launch

- **Blocking:** High
- **Primary Persona:** Finance
- **Secondary Persona:** Operations
- **UI Needs:** Clear ACH timeline (1-2 business days, free), amount input, transfer initiation, confirmation with expected arrival date

### Job: See Fund Availability Timeline
**When** I initiate a clearing balance transfer  
**I want to** know exactly when funds will be available  
**So I can** plan my launch and avoid being blocked by pending transfers

- **Blocking:** High
- **Primary Persona:** Finance
- **Secondary Persona:** Operations
- **UI Needs:** Clear timeline (1-2 business days), calendar integration showing when funds arrive relative to launch date, notification plan

### Job: Validate Amount is Sufficient
**When** I've selected a funding amount  
**I want to** see confirmation that this amount will support my expected transaction volume  
**So I can** avoid running out of balance during early operations

- **Blocking:** Medium
- **Primary Persona:** Finance
- **Secondary Persona:** Operations
- **UI Needs:** Coverage estimate (transactions supported, days at current rate), warning if amount seems low, encouragement if amount seems good

### Job: Add More Funds Later
**When** I need to add funds after initial setup  
**I want to** know I can manually add funds in Settings beyond auto-fund  
**So I can** feel confident I have control over my clearing balance

- **Blocking:** Low
- **Primary Persona:** Finance
- **Secondary Persona:** Operations
- **UI Needs:** Messaging that manual funding is available in Settings > Finance, mention of auto-fund as automation option

---

## Phase 6: Auto-Fund Settings (Step 6)

### Job: Understand Auto-Fund Mechanism
**When** I'm setting up auto-fund for the first time  
**I want to** understand how it works, when it triggers, and what control I have  
**So I can** decide if I want automation or manual management

- **Blocking:** Medium
- **Primary Persona:** Finance
- **Secondary Persona:** Operations
- **UI Needs:** Clear explanation of trigger threshold and replenishment amount, frequency estimate, opt-in/opt-out choice

### Job: Set Appropriate Thresholds
**When** I'm configuring auto-fund settings  
**I want to** see recommended thresholds based on my business and have flexibility to adjust  
**So I can** balance automation convenience with cash flow control

- **Blocking:** Medium
- **Primary Persona:** Finance
- **Secondary Persona:** Operations
- **UI Needs:** Recommended settings based on clearing balance and volume, editable fields, preview of trigger frequency

### Job: Trust Automated Management
**When** I enable auto-fund  
**I want to** see what will happen when it triggers and how I'll be notified  
**So I can** feel confident I won't be surprised by unexpected transfers

- **Blocking:** Medium
- **Primary Persona:** Finance
- **Secondary Persona:** Operations
- **UI Needs:** Clear explanation of notification plan (email before transfer), example scenario, reassurance about control

---

## Phase 7: Payout Schedule (Step 7)

### Job: Choose Payout Frequency
**When** I'm selecting how often I receive settlements  
**I want to** understand the options (daily, weekly, minimum amount) and their cash flow implications  
**So I can** choose what works best for my business

- **Blocking:** High
- **Primary Persona:** Finance
- **Secondary Persona:** Operations
- **UI Needs:** Clear options with explanations, cash flow impact examples, default recommendation

### Job: Understand Settlement Timing
**When** I've selected a payout schedule  
**I want to** know exactly when settlements will hit my bank account  
**So I can** plan cash flow and reconcile accounting

- **Blocking:** Medium
- **Primary Persona:** Finance
- **Secondary Persona:** Operations
- **UI Needs:** Clear timeline (payouts process at 11 PM EST, arrive in 1-2 business days via ACH), calendar view option

---

## Phase 8: Campaign Interest Registration (Step 8) ← OPTIONAL

### Job: Learn About Launch Campaigns
**When** I'm nearing the end of setup  
**I want to** understand what launch campaigns are and why they matter  
**So I can** decide if I want to participate in coordinated launches

- **Blocking:** Low
- **Primary Persona:** Strategy
- **Secondary Persona:** Business Owner
- **UI Needs:** Brief explanation of campaign benefits (network effects, marketing support, themed promotions), examples of past campaigns

### Job: Register Campaign Interest
**When** I'm interested in joining future campaigns  
**I want to** express interest without committing to specific details  
**So I can** be notified when relevant campaigns are forming

- **Blocking:** Low
- **Primary Persona:** Strategy
- **Secondary Persona:** Business Owner
- **UI Needs:** Simple opt-in checkbox or button, clear messaging that campaign management happens in Campaigns section post-launch, no complex configuration during onboarding

### Job: Skip Campaigns if Not Relevant
**When** campaigns don't align with my business strategy  
**I want to** easily skip this step and launch independently  
**So I can** complete onboarding without unnecessary friction

- **Blocking:** Low
- **Primary Persona:** Business Owner
- **Secondary Persona:** Operations
- **UI Needs:** Clear "Skip" or "Launch Independently" option, no pressure or friction for skipping

---

## Phase 9: Setup Complete - Pre-Launch Dashboard

### Job: Track Setup Progress
**When** I've completed onboarding steps but am waiting for verification and funding  
**I want to** see a clear dashboard of what's complete, what's pending, and what's blocking launch  
**So I can** know my status at a glance

- **Blocking:** High
- **Primary Persona:** Operations
- **Secondary Persona:** Business Owner
- **UI Needs:** Status dashboard with checklist (✓ completed, ⏳ pending, ✗ blocked), estimated time to completion, next actions

### Job: Preview Checkout Experience
**When** I'm waiting for launch  
**I want to** see what the shopper checkout experience will look like  
**So I can** validate that everything is configured correctly and feel confident about launch

- **Blocking:** Low
- **Primary Persona:** Business Owner
- **Secondary Persona:** Operations, Technical
- **UI Needs:** Sandbox/preview mode via Apps tab, test transaction capability, clear "this is preview" messaging

### Job: Understand Launch Readiness
**When** my verification is complete and clearing balance is funded  
**I want to** see clear confirmation that I'm ready to launch  
**So I can** feel excited and prepared for go-live

- **Blocking:** Medium
- **Primary Persona:** Operations
- **Secondary Persona:** Business Owner
- **UI Needs:** "Ready to launch" confirmation, launch activation control, final pre-launch checklist

---

## Cross-Phase Jobs (Edge Cases & Recovery)

### Job: Recover from Errors Gracefully
**When** an error occurs during any step  
**I want to** see clear error messaging and know how to resolve it  
**So I can** continue without frustration or abandonment

- **Blocking:** High
- **Primary Persona:** Operations
- **Secondary Persona:** Technical
- **UI Needs:** Clear error messages, troubleshooting guidance, support contact, ability to retry

### Job: Save Progress and Return Later
**When** I need to pause onboarding  
**I want to** have my progress saved and easy re-entry  
**So I can** complete setup across multiple sessions without re-doing work

- **Blocking:** High
- **Primary Persona:** Operations
- **Secondary Persona:** Business Owner
- **UI Needs:** Auto-save functionality, clear progress indicators, easy re-entry from Shopify admin

### Job: Get Help When Stuck
**When** I don't understand something or can't proceed  
**I want to** access help resources or contact support  
**So I can** get unstuck quickly

- **Blocking:** Medium
- **Primary Persona:** Operations
- **Secondary Persona:** Business Owner, Technical
- **UI Needs:** Contextual help links, support chat, FAQ access, clear contact options

### Job: Understand Waiting Periods
**When** I've completed my part but am waiting for external processes (KYB, funding)  
**I want to** see realistic timelines and know what's happening  
**So I can** set appropriate expectations and not worry

- **Blocking:** Medium
- **Primary Persona:** Operations
- **Secondary Persona:** Business Owner
- **UI Needs:** Clear status indicators, progress updates, estimated completion times, notification plan

### Job: Change Decisions Before Launch
**When** I realize I want to modify something I configured earlier  
**I want to** easily navigate back to that step and make changes  
**So I can** ensure everything is correct before going live

- **Blocking:** Medium
- **Primary Persona:** Operations
- **Secondary Persona:** Finance
- **UI Needs:** Clear navigation to all completed steps, edit capabilities, change confirmation, understanding of implications

### Job: Know When I'm Ready
**When** all prerequisites are met (verified, funded, cohort date arrived)  
**I want to** receive clear notification that I'm launching  
**So I can** be prepared and excited for go-live

- **Blocking:** High
- **Primary Persona:** Business Owner
- **Secondary Persona:** Operations
- **UI Needs:** Launch notification (email + in-app), clear "you're live" confirmation, what to expect on launch day

---

## Job Count Summary

**By Phase:**
- Phase 0 (Welcome): 2 jobs
- Phase 1 (Rewards Platform): 5 jobs
- Phase 2 (KYB): 4 jobs
- Phase 3 (Banking): 4 jobs
- Phase 4 (Pricing): 4 jobs (added Plan visibility job)
- Phase 5 (Clearing Balance): 6 jobs (removed debit funding, added manual funding awareness)
- Phase 6 (Auto-Fund): 3 jobs
- Phase 7 (Payout): 2 jobs
- Phase 8 (Campaign Interest): 3 jobs (simplified from cohort selection)
- Phase 9 (Pre-Launch): 3 jobs (removed marketing resources)
- Cross-Phase: 6 jobs

**Total: 42 job stories** (down from 45)

**By Priority:**
- High Blocking: 24 jobs (57%)
- Medium: 12 jobs (29%)
- Low: 6 jobs (14%)

**By Persona (Primary):**
- Finance: 11 jobs (26%)
- Operations: 9 jobs (21%)
- Business Owner: 8 jobs (19%)
- Technical: 5 jobs (12%)
- Strategy: 3 jobs (7%) - reduced with removal of exclusions/cohorts
- Multiple: 6 jobs (15%)

---

## Appendix: Persona-Specific Concerns Across All Phases

### Business Owner Priority Jobs
1. Understand value proposition and commitment (Welcome)
2. Discover platform support (Rewards Platform)
3. Understand upgrade path (Rewards Platform)
4. Understand verification purpose (KYB)
5. Evaluate promotional offer (Pricing)
6. Accept terms confidently (Pricing)
7. Know where to find pricing later (Pricing)
8. Understand clearing balance concept (Clearing Balance)
9. Learn about launch campaigns (Campaign Interest - optional)

**Key Concerns:** ROI, strategic fit, commitment clarity, pricing transparency

---

### Finance Priority Jobs
1. Understand dual purpose of bank account (Banking)
2. Trust data security (Banking)
3. Provide account details easily (Banking)
4. Verify account correctness (Banking)
5. Understand fee structure (Pricing)
6. Know where to find pricing later (Pricing)
7. Calculate appropriate clearing balance amount (Clearing Balance)
8. Initiate ACH transfer (Clearing Balance)
9. See fund availability timeline (Clearing Balance)
10. Add more funds later (Clearing Balance - awareness of Settings capability)
11. Set appropriate auto-fund thresholds (Auto-Fund)
12. Choose payout frequency (Payout)
13. Understand settlement timing (Payout)
14. Change decisions before launch (Cross-Phase)

**Key Concerns:** Cash flow management, fee transparency, financial control, bank security, ACH timing

---

### Operations Priority Jobs
1. Provide business details efficiently (KYB)
2. Continue despite pending verification (KYB)
3. Understand clearing balance concept (Clearing Balance)
4. Validate clearing balance amount is sufficient (Clearing Balance)
5. Trust automated management (Auto-Fund)
6. Commit to launch date (Cohort)
7. Track setup progress (Pre-Launch)
8. Understand launch readiness (Pre-Launch)
9. Recover from errors gracefully (Cross-Phase)
10. Save progress and return later (Cross-Phase)
11. Get help when stuck (Cross-Phase)

**Key Concerns:** Ease of management, reliability, clear status, error recovery

---

### Technical Priority Jobs
1. Discover program support (Loyalty)
2. Connect program securely (Loyalty)
3. Verify connection success (Loyalty)
4. Trust data security (Banking)
5. Preview checkout experience (Pre-Launch)
6. Recover from errors gracefully (Cross-Phase)

**Key Concerns:** Integration security, API reliability, connection validation, technical correctness

---

### Strategy Priority Jobs
1. Understand what I'm signing up for (Welcome)
2. Influence future platform support (Rewards Platform)
3. Learn about launch campaigns (Campaign Interest - optional)
4. Register campaign interest (Campaign Interest - optional)

**Key Concerns:** Network quality, partnership opportunities, platform roadmap influence

**Note:** Merchant exclusions and detailed campaign management are now post-onboarding features available in Settings > Network and left navigation > Campaigns respectively.

---

## Next Steps

**After Founder Review:**
1. ✅ Scope decisions made - simplified onboarding (exclusions, campaigns, marketing deferred)
2. ✅ Terminology corrected - "Rewards platform" not "loyalty program"
3. ✅ Funding method simplified - ACH only, no debit cards
4. → Create Component Inventory based on UI needs and Settings reuse opportunities
5. → Develop investigation prompts for technical unknowns
6. → Begin section-by-section design specifications starting with Phase 1

**Settings Updates Required (Parallel Track):**
1. **Add Plan Section:**
   - Current plan display
   - Pricing/fee rate visibility
   - Promotional status (if applicable)
   - Link to pricing page
   - Terms of Service reference

2. **Add Network Section:**
   - Merchant exclusions management
   - Bidirectional blocking explanation
   - Add/remove exclusion actions
   - View who has excluded this merchant

3. **Add Campaigns to Left Navigation:**
   - Campaign registration and management
   - Campaign history
   - Upcoming campaigns
   - Campaign participation status

4. **Update Finance Tab:**
   - Add manual funding capability (ACH only, one-time)
   - Ensure clearing balance calculator is accessible for planning

**Technical Investigation Needed:**
- Rewards platform API key collection best practices (UI patterns, security)
- Stripe Connect account creation timing and data requirements
- Bank account collection methods (Plaid integration vs manual entry)
- Clearing balance calculator data model and algorithm (must be reusable component)
- Campaign registration system requirements
- Network/exclusions data model

---

**This Jobs to Be Done document serves as the foundation for all subsequent design and implementation work on merchant onboarding.**
