# Merchant App Jobs to Be Done

**Last Updated:** 2025-01-18  
**Status:** Draft - In Progress  
**Owner:** Tela

---

## Purpose

This document defines what merchants are trying to accomplish during onboarding from their perspective. Each job story follows the format:

```
When [context/situation]
I want to [motivation/action]
So that [expected outcome]
```

These jobs drive:
- **UX Design:** What UI components and flows are needed
- **Component Inventory:** What building blocks we need to create
- **Section Specifications:** How conversation and cards support each job
- **Implementation Priorities:** What's critical vs. nice-to-have

---

## How to Use This Document

**For Design:** Each job story reveals a UI need. "I want to see if my program is supported" → Program selection interface with support indicators

**For Implementation:** Jobs map to components. Multiple jobs needing "status visibility" → Shared status card component

**For Prioritization:** Jobs tagged with blocking priority guide MVP scope decisions

---

## Persona Definitions

### Business Owner
- **Primary concern:** Strategic fit, ROI, launch timeline
- **Typical user:** Founder, CEO, GM
- **Engagement pattern:** Makes go/no-go decisions, delegates details
- **Success metric:** Can we do this? Is it worth it?

### Finance
- **Primary concern:** Cash flow, costs, financial risk
- **Typical user:** CFO, Controller, Accountant
- **Engagement pattern:** Evaluates numbers, sets up banking/funding
- **Success metric:** Do the economics work? Is our money safe?

### Operations
- **Primary concern:** Day-to-day management, reliability, support needs
- **Typical user:** Operations Manager, Customer Success
- **Engagement pattern:** Configures ongoing processes, manages exceptions
- **Success metric:** Can we operate this smoothly?

### Technical
- **Primary concern:** Integration complexity, data security, technical risk
- **Typical user:** CTO, Developer, IT Manager
- **Engagement pattern:** Evaluates technical requirements, handles integrations
- **Success metric:** Will this work with our systems? Is it secure?

### Strategy
- **Primary concern:** Competitive positioning, network effects, market timing
- **Typical user:** VP Marketing, Growth Lead, Strategic Planning
- **Engagement pattern:** Considers launch timing, partnership strategy
- **Success metric:** How does this position us competitively?

---

## Phase 1: Loyalty Program Connection (Step 1)

### Job 1.1: Understand Program Support
**Persona:** Business Owner (primary), Technical (secondary)  
**Blocking:** High - Cannot proceed without supported program  
**Frequency:** Once, at start

**Job Story:**
```
When I'm evaluating whether Saltwyk fits my business
I want to quickly see if my loyalty program is supported
So I can decide if I can proceed or need to explore alternatives
```

**UI Needs:**
- Clear program selection dropdown/search
- Support status indicators (Supported ✓, Upgrade Required ⚠️, Not Supported ✗)
- Prominent display of blocker status
- Path forward for each status

**Success Criteria:**
- Merchant understands their situation within 30 seconds
- No confusion about "is my program supported?"
- Clear next steps regardless of answer

---

### Job 1.2: Handle Unsupported Program Gracefully
**Persona:** Business Owner (primary)  
**Blocking:** High - Hard blocker for launch  
**Frequency:** ~40% of merchants (estimate)

**Job Story:**
```
When my loyalty program isn't Enterprise Smile.io
I want clear guidance on my upgrade path
So I'm not permanently blocked and know how to proceed
```

**UI Needs:**
- Non-shaming messaging ("Upgrade needed" not "You can't use this")
- Direct path to upgrade assistance
- Ability to continue setup (not hard-blocked from exploring)
- Clear indication that launch is blocked until resolved

**Success Criteria:**
- Merchant understands upgrade is possible
- Has clear next step (contact Smile.io via Saltwyk partnership)
- Doesn't abandon entirely
- Can complete rest of setup to understand full picture

---

### Job 1.3: Influence Future Roadmap
**Persona:** Business Owner (primary)  
**Blocking:** Low - Nice to have  
**Frequency:** ~10% of merchants

**Job Story:**
```
When I don't see my loyalty program in the supported list
I want to vote for future support or request consideration
So I feel heard and can potentially influence roadmap priorities
```

**UI Needs:**
- "Request Support for My Program" option
- Text input for program name
- Optional: Email notification when program is added
- Feedback confirmation ("We've received your request")

**Success Criteria:**
- Merchant feels request was captured
- Saltwyk gains intelligence on demand
- Merchant opts in for updates on roadmap

---

### Job 1.4: Connect Without Manual Work
**Persona:** Operations (primary), Technical (secondary)  
**Blocking:** Medium - Required for launch, but supported programs have OAuth  
**Frequency:** 100% of merchants with supported programs

**Job Story:**
```
When connecting my supported loyalty program
I want OAuth to handle authentication automatically
So I don't have to find API credentials or manually configure integrations
```

**UI Needs:**
- One-click "Connect [Program]" button
- Clear OAuth authorization flow
- Scope visibility (what Saltwyk will access)
- Success confirmation with connection status

**Success Criteria:**
- Connection completes in <2 minutes
- No manual credential entry needed
- Merchant trusts the authorization scope
- Connection status is clear (connected vs. pending vs. failed)

---

### Job 1.5: Recover from Connection Failures
**Persona:** Operations (primary), Technical (secondary)  
**Blocking:** Medium - Blocks launch  
**Frequency:** ~5-10% of connection attempts

**Job Story:**
```
When OAuth connection fails or times out
I want clear error information and retry options
So I can troubleshoot or get help without starting over
```

**UI Needs:**
- Specific error messaging (not generic "Something went wrong")
- Retry button (immediate)
- "Contact Support" option with error context pre-filled
- Status preservation (don't lose other completed steps)

**Success Criteria:**
- Merchant understands why it failed
- Can retry without full restart
- Can escalate to support if needed
- Doesn't abandon onboarding due to temporary failure

---

## Phase 2: Business Information (Step 2)

### Job 2.1: Understand Why KYB Is Needed
**Persona:** Business Owner (primary), Finance (secondary)  
**Blocking:** High - Required for launch  
**Frequency:** 100% of merchants

**Job Story:**
```
When providing business information for verification
I want to understand why Saltwyk needs this data
So I trust the process and feel confident sharing sensitive details
```

**UI Needs:**
- Clear explanation before form ("Why we need this")
- Security/privacy assurances
- Mention of regulatory compliance (not sketchy)
- One-time process messaging (not recurring)

**Success Criteria:**
- Merchant understands purpose (settlements, compliance)
- Feels data is handled securely
- Knows this is standard practice
- Willing to provide accurate information

---

### Job 2.2: Provide Information Once
**Persona:** Business Owner (primary), Finance (delegate)  
**Blocking:** High - Required for launch  
**Frequency:** 100% of merchants

**Job Story:**
```
When entering business details for KYB
I want pre-filled data from Shopify where possible
So I don't have to re-enter information Saltwyk already knows
```

**UI Needs:**
- Pre-populate from Shopify (business name, address)
- Clear indication of what's pre-filled vs. what needs input
- Edit capability for incorrect pre-fills
- Validation that catches errors before submission

**Success Criteria:**
- Minimal manual entry required
- Pre-fills are accurate >90% of the time
- Merchant can correct mistakes easily
- Form completion takes <3 minutes

---

### Job 2.3: Delegate to Finance Team
**Persona:** Business Owner (primary)  
**Blocking:** Low - Delegation is optional  
**Frequency:** ~30% of merchants (estimate)

**Job Story:**
```
When I reach business/banking sections that my finance team handles
I want to delegate these steps to the right person
So I don't become a bottleneck and the expert completes them correctly
```

**UI Needs:**
- "Delegate to Finance" button prominently available
- Email input or team member selection
- Unique delegation link generation
- Status visibility ("Pending Finance Team" vs. "Completed by Sarah")

**Success Criteria:**
- Delegation link sent successfully
- Business Owner can continue exploring other sections
- Delegated person can complete without Business Owner involvement
- Business Owner can see progress/completion status

---

### Job 2.4: Track Verification Status
**Persona:** Business Owner (primary), Finance (secondary)  
**Blocking:** High - Blocks launch  
**Frequency:** 100% of merchants

**Job Story:**
```
When my business information is submitted for verification
I want real-time status updates on progress
So I know what's happening and when I can expect completion
```

**UI Needs:**
- Clear status indicators (Submitted → In Review → Verified / Failed)
- Time estimates ("Usually completes in 1-2 business days")
- Email notification when status changes
- Next steps if verification fails

**Success Criteria:**
- Merchant knows current status at a glance
- Doesn't need to contact support for updates
- Receives proactive notification on completion
- Understands timeline expectations

---

### Job 2.5: Recover from Verification Failure
**Persona:** Business Owner (primary), Finance (secondary)  
**Blocking:** High - Blocks launch  
**Frequency:** ~5% of merchants (estimate)

**Job Story:**
```
When my business verification fails
I want specific feedback on what's wrong and how to fix it
So I can resolve issues and proceed without delay
```

**UI Needs:**
- Specific failure reasons (mismatched EIN, unverifiable address, etc.)
- Actionable next steps (correct EIN, provide different documentation)
- "Contact Support" with context pre-filled
- Ability to resubmit after corrections

**Success Criteria:**
- Merchant understands exact issue
- Has clear path to resolution
- Can resubmit without starting over
- Support escalation is easy if self-service fails

---

## Phase 3: Banking Information (Step 3)

### Job 3.1: Understand Single Account Purpose
**Persona:** Finance (primary), Business Owner (secondary)  
**Blocking:** High - Required for launch  
**Frequency:** 100% of merchants

**Job Story:**
```
When providing bank account information
I want to understand how this account will be used
So I can provide the right account and set appropriate expectations
```

**UI Needs:**
- Clear explanation: "Used for both funding clearing balance AND receiving settlements"
- Visual diagram of money flow (optional)
- Security assurances (encrypted, Stripe processing)
- Future flexibility messaging (can add multiple accounts later)

**Success Criteria:**
- Merchant understands dual purpose
- Chooses appropriate business account
- Feels secure about data handling
- Knows this won't require multiple accounts now

---

### Job 3.2: Enter Banking Securely
**Persona:** Finance (primary)  
**Blocking:** High - Required for launch  
**Frequency:** 100% of merchants

**Job Story:**
```
When entering sensitive bank account details
I want strong security indicators and validation
So I trust my financial data is protected and entered correctly
```

**UI Needs:**
- HTTPS indicator / security badge
- "Powered by Stripe" trust signal
- Routing number validation (9 digits, valid format)
- Account number confirmation field (prevent typos)
- Clear privacy policy link

**Success Criteria:**
- Merchant trusts security measures
- No data entry errors (validation catches mistakes)
- Feels comparable to direct bank login security
- Completes without abandonment due to security concerns

---

### Job 3.3: Delegate Banking Setup
**Persona:** Business Owner (primary)  
**Blocking:** Low - Delegation optional  
**Frequency:** ~40% of merchants (estimate)

**Job Story:**
```
When I don't have banking details readily available
I want to delegate this step to my CFO or finance team
So setup doesn't stall waiting for information I don't have
```

**UI Needs:**
- Same delegation pattern as Business Info step
- Clear scope: "Delegate banking information entry"
- Delegation link with secure access
- Status tracking for Business Owner

**Success Criteria:**
- Delegation works seamlessly
- Finance team can complete independently
- No security concerns about delegation link
- Business Owner can monitor progress

---

## Phase 4: Pricing (Step 4)

### Job 4.1: Understand True Cost
**Persona:** Business Owner (primary), Finance (secondary)  
**Blocking:** Medium - Important for go/no-go decision  
**Frequency:** 100% of merchants

**Job Story:**
```
When reviewing Saltwyk pricing
I want transparent fee structure without hidden costs
So I can accurately assess financial impact and ROI
```

**UI Needs:**
- Clear fee display: "3% per transaction"
- Comparison to credit card fees (for context)
- Example calculations based on merchant's volume
- No surprises messaging ("No monthly fees, no setup fees")

**Success Criteria:**
- Merchant understands exact cost
- Can calculate expected fees for their volume
- No hidden fees discovered later
- Feels pricing is fair and transparent

---

### Job 4.2: Evaluate Promotional Offer
**Persona:** Business Owner (primary), Finance (secondary)  
**Blocking:** Low - Optional promotional offer  
**Frequency:** Variable (depends on active promotions)

**Job Story:**
```
When presented with a promotional offer (zero fees for 60 days)
I want to understand terms, constraints, and long-term implications
So I can make an informed decision without feeling pressured
```

**UI Needs:**
- Clear promotional terms (duration, launch deadline, standard pricing after)
- Urgency indicator (spots remaining) if applicable
- Easy acceptance OR decline (no dark patterns)
- What happens after promotion (auto-transition to standard pricing)

**Success Criteria:**
- Merchant understands full promotion terms
- Doesn't feel manipulated by false urgency
- Makes informed accept/decline decision
- Knows what to expect after promotional period

---

## Phase 5: Clearing Balance (Step 5)

### Job 5.1: Understand Clearing Balance Concept
**Persona:** Finance (primary), Business Owner (secondary)  
**Blocking:** High - Critical for launch  
**Frequency:** 100% of merchants

**Job Story:**
```
When learning about clearing balance requirements
I want to understand what it is and why it's needed
So I can make informed funding decisions and plan cash flow
```

**UI Needs:**
- Clear explanation: "Working capital for rewards commerce"
- Visual diagram of transaction flow (shopper → merchant → payout)
- "Not a fee" messaging (you get this money back)
- Examples showing how balance is used and replenished

**Success Criteria:**
- Merchant understands it's not a cost
- Grasps the working capital concept
- Knows money comes back via settlements
- Can explain to stakeholders confidently

---

### Job 5.2: Calculate Appropriate Amount
**Persona:** Finance (primary), Operations (secondary)  
**Blocking:** High - Required for launch  
**Frequency:** 100% of merchants

**Job Story:**
```
When deciding how much to fund my clearing balance
I want realistic estimates based on my business metrics
So I don't underfund (run out) or overfund (tie up unnecessary capital)
```

**UI Needs:**
- Interactive calculator with merchant's revenue data
- Penetration rate slider (conservative to optimistic)
- Transaction coverage estimate ("Covers ~50 transactions")
- Days of coverage estimate ("~7 days at current rate")
- Recommendation based on category/volume

**Success Criteria:**
- Merchant feels confident in amount chosen
- Calculator uses realistic assumptions
- Recommendation feels appropriate for their business
- Can adjust as they learn actual penetration rates

---

### Job 5.3: Choose Funding Method
**Persona:** Finance (primary)  
**Blocking:** High - Required for launch  
**Frequency:** 100% of merchants

**Job Story:**
```
When funding my clearing balance
I want to choose between free (slow) and instant (fee) options
So I can balance urgency against cost based on my launch timeline
```

**UI Needs:**
- Clear comparison: ACH (free, 1-2 days) vs. Debit (1.5% fee, instant)
- Launch urgency context (cohort launch date, can I wait?)
- Fee calculator for debit option
- Default recommendation based on timeline

**Success Criteria:**
- Merchant understands trade-off
- Chooses appropriate method for their situation
- No surprise fees if they choose debit
- ACH timing doesn't derail launch plans

---

### Job 5.4: Track Funding Status
**Persona:** Finance (primary), Business Owner (secondary)  
**Blocking:** High - Blocks launch  
**Frequency:** 100% of merchants

**Job Story:**
```
When my ACH transfer is in progress
I want to see real-time status and expected arrival
So I can plan launch timing and know when I'm ready to go live
```

**UI Needs:**
- Clear status indicators (Initiated → Processing → Complete)
- Expected arrival date/time
- Email notification when funds arrive
- "What if it's late?" help option

**Success Criteria:**
- Merchant knows exactly when funds will arrive
- Doesn't need to contact support for status updates
- Receives proactive notification on completion
- Can plan launch accordingly

---

### Job 5.5: Understand Ongoing Balance Management
**Persona:** Operations (primary), Finance (secondary)  
**Blocking:** Medium - Important for ongoing operations  
**Frequency:** 100% of merchants

**Job Story:**
```
When setting up initial clearing balance
I want to understand how ongoing balance management works
So I'm not surprised later and can plan for operational needs
```

**UI Needs:**
- Preview of balance management dashboard
- Explanation of auto-fund option (coming in next step)
- Low balance alert thresholds
- Link to detailed balance management flow doc

**Success Criteria:**
- Merchant understands this isn't one-time
- Knows about auto-fund option
- Feels prepared for ongoing management
- Not overwhelmed by future complexity

---

## Phase 6: Auto-Fund Settings (Step 6)

### Job 6.1: Set Up Autopilot Funding
**Persona:** Finance (primary), Operations (secondary)  
**Blocking:** Low - Auto-fund is optional  
**Frequency:** ~80% of merchants (expected)

**Job Story:**
```
When configuring ongoing balance management
I want to set thresholds that auto-fund my clearing balance
So I never run out and don't have to manually monitor constantly
```

**UI Needs:**
- Clear auto-fund concept explanation
- Threshold input (trigger amount)
- Replenishment amount input
- Frequency estimate based on current volume
- Can configure now or skip for later

**Success Criteria:**
- Merchant understands auto-fund benefits
- Sets appropriate thresholds for their volume
- Feels confident they won't run out
- Can skip if they prefer manual control

---

### Job 6.2: Choose Manual Management
**Persona:** Finance (primary)  
**Blocking:** Low - Manual is valid choice  
**Frequency:** ~20% of merchants (expected)

**Job Story:**
```
When I prefer to manually manage clearing balance
I want to opt out of auto-fund without penalty or pressure
So I maintain control over cash flow timing
```

**UI Needs:**
- Clear "Skip Auto-Fund" option (no dark patterns)
- Explanation of manual management implications
- Low balance alert configuration (since manual)
- No judgment messaging (manual is valid)

**Success Criteria:**
- Merchant can skip without feeling "wrong"
- Understands they'll need to monitor manually
- Alert configuration catches low balance
- Can enable auto-fund later if they change mind

---

## Phase 7: Payout Schedule (Step 7)

### Job 7.1: Optimize Cash Flow
**Persona:** Finance (primary), Operations (secondary)  
**Blocking:** Medium - Important for cash flow planning  
**Frequency:** 100% of merchants

**Job Story:**
```
When setting payout schedule
I want to choose frequency that matches my cash flow needs
So settlements arrive when I need them without excessive transaction overhead
```

**UI Needs:**
- Clear schedule options (Daily, Weekly, Minimum Amount)
- Trade-off explanation (frequency vs. clearing balance needs)
- Default recommendation based on volume
- Can change later messaging (not locked in)

**Success Criteria:**
- Merchant chooses schedule that fits their business
- Understands implications for clearing balance requirements
- Knows they can adjust later
- Feels in control of cash flow timing

---

### Job 7.2: Understand Settlement Timing
**Persona:** Finance (primary)  
**Blocking:** Low - Informational  
**Frequency:** 100% of merchants

**Job Story:**
```
When configuring payouts
I want to understand exact timing and delays
So I can accurately forecast cash flow and reconcile accounts
```

**UI Needs:**
- Clear timing explanation (settlement processed at X time, arrives Y days later)
- ACH timing details (business days, not calendar days)
- Holiday/weekend handling
- Example timeline visual

**Success Criteria:**
- Merchant can accurately forecast settlement arrival
- No surprises about timing delays
- Understands business days vs. calendar days
- Can explain to accounting team

---

## Phase 8: Merchant Exclusions (Step 8)

### Job 8.1: Control Competitive Relationships
**Persona:** Strategy (primary), Business Owner (secondary)  
**Blocking:** Low - Exclusions are optional  
**Frequency:** ~30% of merchants (estimate)

**Job Story:**
```
When setting up network participation
I want to block specific competitors from my exclusion list
So I don't fund purchases at merchants I compete directly with
```

**UI Needs:**
- Clear exclusion concept explanation
- Search/input for merchant names
- Limit enforcement (up to 10 exclusions)
- Rationale capture (optional: why excluding?)
- Bidirectional blocking confirmation

**Success Criteria:**
- Merchant understands exclusion mechanics
- Can add competitors without guilt
- Knows this is bidirectional (they can't use competitor points either)
- Respects 10-exclusion limit

---

### Job 8.2: Skip Exclusions Gracefully
**Persona:** Business Owner (primary)  
**Blocking:** Low - Optional feature  
**Frequency:** ~70% of merchants (estimate)

**Job Story:**
```
When I don't want to exclude any merchants
I want to skip this step without feeling like I'm missing something
So I can maintain full network participation without second-guessing
```

**UI Needs:**
- "Skip - I don't want to exclude anyone" option (prominent)
- Positive framing ("Full network participation")
- Can add exclusions later messaging
- No pressure to use feature

**Success Criteria:**
- Merchant can skip without feeling wrong
- Understands full participation is default/encouraged
- Knows they can add exclusions later if needed
- Doesn't feel FOMO about not excluding

---

## Phase 9: Launch Cohort (Step 9)

### Job 9.1: Choose Strategic Launch Timing
**Persona:** Strategy (primary), Business Owner (secondary)  
**Blocking:** Medium - Required for launch coordination  
**Frequency:** 100% of merchants

**Job Story:**
```
When selecting launch cohort
I want to understand thematic strategy and network effects
So I can align with merchants targeting similar customer segments
```

**UI Needs:**
- Cohort theme explanation (Holiday Rush, New Year, Valentine's)
- Strategy brief for each cohort
- Video or visual of cohort strategy
- Confirmed merchant list (who else is launching)
- Recommended promotional balance for cohort

**Success Criteria:**
- Merchant understands cohort strategy
- Chooses cohort aligned with their business calendar
- Sees value in coordinated launch
- Feels part of strategic network, not just tech integration

---

### Job 9.2: Evaluate Go-Independent Option
**Persona:** Business Owner (primary)  
**Blocking:** Low - Cohort is recommended but optional  
**Frequency:** ~20% of merchants (estimate)

**Job Story:**
```
When cohort timing doesn't align with my needs
I want option to launch independently on my schedule
So I'm not blocked by cohort availability or timing
```

**UI Needs:**
- "Launch Independently" option clearly available
- Trade-offs explanation (cohort benefits vs. immediate launch)
- Marketing resource differences (cohort materials vs. generic)
- No penalty messaging (independent is valid)

**Success Criteria:**
- Merchant can choose independent path without penalty
- Understands what they're giving up (cohort benefits)
- Knows they can still succeed independently
- Makes informed decision based on timing needs

---

### Job 9.3: Understand Pre-Launch Preparation
**Persona:** Operations (primary), Business Owner (secondary)  
**Blocking:** Medium - Important for successful launch  
**Frequency:** 100% of merchants

**Job Story:**
```
When my cohort launch date is approaching
I want checklist of pre-launch tasks and marketing resources
So I'm fully prepared to maximize launch impact
```

**UI Needs:**
- Pre-launch checklist (inventory clearing balance, test checkout, etc.)
- Marketing resources (email templates, social posts, blog content)
- Timeline leading up to launch
- Support access during launch period

**Success Criteria:**
- Merchant feels prepared for launch
- Has marketing materials ready
- Knows what to expect on launch day
- Feels supported, not abandoned

---

## Cross-Phase Jobs (Edge Cases & Support)

### Job CP.1: Navigate After Browser Refresh
**Persona:** All  
**Blocking:** Medium - Affects completion rate  
**Frequency:** ~40% of onboarding sessions (estimate)

**Job Story:**
```
When I refresh my browser or return to onboarding later
I want to resume exactly where I left off
So I don't lose progress or have to re-enter information
```

**UI Needs:**
- State persistence (completed steps stay completed)
- Return to current section automatically
- Unsaved changes warning (if mid-edit)
- Progress preservation confirmation

**Success Criteria:**
- No data loss on refresh
- Clear indication of progress preserved
- Can resume editing where left off
- Doesn't feel like starting over

---

### Job CP.2: Get Help When Stuck
**Persona:** All  
**Blocking:** High - Prevents abandonment  
**Frequency:** ~25% of merchants need help at some point

**Job Story:**
```
When I'm confused or stuck on a step
I want contextual help and easy support access
So I can get unstuck quickly without leaving the flow
```

**UI Needs:**
- Persistent "Help" button
- Contextual help per step (FAQ, tips)
- "Contact Support" with pre-filled context
- Live chat option (if available)

**Success Criteria:**
- Help is always accessible
- Support context includes current step (no re-explaining)
- Can get unstuck without abandoning
- Response time expectations clear

---

### Job CP.3: Understand Overall Progress
**Persona:** Business Owner (primary), All (secondary)  
**Blocking:** Low - UX quality  
**Frequency:** 100% of merchants

**Job Story:**
```
When onboarding across multiple sessions
I want clear visibility of what's done, what's pending, and what's blocked
So I can prioritize next steps and understand path to launch
```

**UI Needs:**
- Progress sidebar (5 sections with completion status)
- Overall completion percentage
- Blocker indicators (what's preventing launch)
- Estimated time to completion

**Success Criteria:**
- Always know where you are in the process
- Can see blockers at a glance
- Understands how much is left
- Feels progress, not overwhelm

---

### Job CP.4: Recover from Delegation Issues
**Persona:** Business Owner (primary)  
**Blocking:** Medium - Affects delegation success  
**Frequency:** ~10% of delegations (estimate)

**Job Story:**
```
When my delegated teammate hasn't completed their section
I want to view progress, send reminders, or revoke and do it myself
So delegation doesn't become a blocker instead of accelerator
```

**UI Needs:**
- Delegation status visibility (sent, opened, in progress, completed)
- "Resend Link" option
- "Revoke & Complete Myself" option
- Non-confrontational messaging (no blaming delegate)

**Success Criteria:**
- Can monitor delegation without nagging
- Easy to reclaim if needed
- No hard feelings (design encourages completion, not blame)
- Delegation doesn't slow overall progress

---

### Job CP.5: Preview Experience Before Launch
**Persona:** Business Owner (primary), Technical (secondary)  
**Blocking:** Low - Quality assurance  
**Frequency:** ~60% of merchants (estimate)

**Job Story:**
```
When setup is complete but before going live
I want to preview checkout experience in sandbox mode
So I can verify everything works and train my team
```

**UI Needs:**
- "Preview Checkout" button (when all sections complete)
- Sandbox mode indicator (not live transactions)
- Test transaction capability
- Training mode for team onboarding

**Success Criteria:**
- Can test without risk
- Preview reflects actual experience
- Can train team before launch
- Feels confident in experience

---

## Appendix A: Persona Priority Matrix

### Business Owner Priorities Across Phases

**High Priority Jobs:**
- Understand program support (Phase 1)
- Understand why KYB is needed (Phase 2)
- Understand true cost (Phase 4)
- Choose strategic launch timing (Phase 9)

**Medium Priority Jobs:**
- Understand clearing balance concept (Phase 5)
- Delegate to Finance (Phases 2-3)
- Understand overall progress (Cross-Phase)

**Low Priority Jobs:**
- Influence future roadmap (Phase 1)
- Control competitive relationships (Phase 8)

---

### Finance Priorities Across Phases

**High Priority Jobs:**
- Understand single account purpose (Phase 3)
- Enter banking securely (Phase 3)
- Understand clearing balance concept (Phase 5)
- Calculate appropriate amount (Phase 5)
- Choose funding method (Phase 5)
- Optimize cash flow (Phase 7)

**Medium Priority Jobs:**
- Understand why KYB is needed (Phase 2)
- Track funding status (Phase 5)
- Understand settlement timing (Phase 7)

**Low Priority Jobs:**
- Evaluate promotional offer (Phase 4)

---

### Operations Priorities Across Phases

**High Priority Jobs:**
- Connect without manual work (Phase 1)
- Understand ongoing balance management (Phase 5)
- Set up autopilot funding (Phase 6)
- Optimize cash flow (Phase 7)
- Understand pre-launch preparation (Phase 9)

**Medium Priority Jobs:**
- Recover from connection failures (Phase 1)
- Track verification status (Phase 2)
- Calculate appropriate amount (Phase 5)

**Low Priority Jobs:**
- Choose manual management (Phase 6)

---

### Technical Priorities Across Phases

**High Priority Jobs:**
- Connect without manual work (Phase 1)
- Understand program support (Phase 1)

**Medium Priority Jobs:**
- Recover from connection failures (Phase 1)
- Enter banking securely (Phase 3)
- Preview experience before launch (Cross-Phase)

**Low Priority Jobs:**
- Influence future roadmap (Phase 1)

---

### Strategy Priorities Across Phases

**High Priority Jobs:**
- Choose strategic launch timing (Phase 9)
- Control competitive relationships (Phase 8)

**Medium Priority Jobs:**
- Evaluate promotional offer (Phase 4)
- Understand pre-launch preparation (Phase 9)

**Low Priority Jobs:**
- Evaluate go-independent option (Phase 9)

---

## Jobs Summary

**Total Jobs: 38**

**By Phase:**
- Phase 1 (Loyalty): 5 jobs
- Phase 2 (Business Info): 5 jobs
- Phase 3 (Banking): 3 jobs
- Phase 4 (Pricing): 2 jobs
- Phase 5 (Clearing Balance): 5 jobs
- Phase 6 (Auto-Fund): 2 jobs
- Phase 7 (Payout): 2 jobs
- Phase 8 (Exclusions): 2 jobs
- Phase 9 (Launch Cohort): 3 jobs
- Cross-Phase: 5 jobs

**By Blocking Priority:**
- High: 17 jobs (45%)
- Medium: 12 jobs (32%)
- Low: 9 jobs (24%)

**By Persona (Primary):**
- Business Owner: 11 jobs
- Finance: 11 jobs
- Operations: 6 jobs
- Strategy: 3 jobs
- Technical: 2 jobs
- All: 5 jobs (cross-phase)

---

## Next Steps

After this Jobs to Be Done document:

1. **Component Inventory:** Map jobs to UI building blocks needed
2. **Section Specifications:** Design conversation flows and card interactions per section
3. **Implementation with Claude Code:** Build components and sections

**Questions or feedback?** Reference this document when designing components to ensure each job has appropriate UI support.
