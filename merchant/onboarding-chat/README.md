# Conversational Onboarding Chat - Design System

**Location:** `/merchant/onboarding-chat/`
**Branch:** `feature/merchant-onboarding-ai`
**Status:** In Development
**Last Updated:** January 24, 2026

---

## Overview

This directory contains the complete design specification for Saltwyk's conversational merchant onboarding experience. The system uses a two-column layout (chat + form panel) with scripted conversation flow to guide merchants through 5 onboarding sections.

**Key Innovation:** Progressive disclosure through conversation, not traditional forms. Agent guides merchant through setup while building the onboarding artifact in real-time in a persistent form panel.

---

## Design Philosophy

### 1. Conversational-First
- Feel like talking to a guide, not filling out forms
- One question/decision at a time
- Agent provides context and explains "why" for each step

### 2. Respect Existing Data
- Confirm what we know from Storeleads (store name, revenue, category)
- Only collect what we don't have
- Show merchant we did our homework

### 3. Progressive Disclosure
- Don't overwhelm with all requirements at once
- Reveal complexity gradually as needed
- Section-by-section reveal

### 4. Multi-Modal Support
- Primary: Chat interface
- Secondary: Phone call option (persistent in top bar)
- Future: Voice input in chat

### 5. Visual Context
- Left: Chat guides the conversation
- Right: Form panel shows the artifact being built
- Merchant always sees progress and completed sections

---

## Component Foundation

**Built on:** [assistant-ui](https://www.assistant-ui.com/) - Production-ready React chat components

**Why assistant-ui:**
- Composable Radix-style primitives (not monolithic)
- Custom backend support (perfect for scripted onboarding)
- Built-in state management (Runtime system)
- Production-ready accessibility and UX
- Can render custom components inline

**Key Insight:** assistant-ui's runtime can handle scripted conversations (not just LLM streaming), making it perfect for guided onboarding flows.

See: `../docs/shadcn-ai-components-research.md` for full evaluation.

---

## Architecture

### Two-Column Layout

```
┌─────────────────────────────────────────────────────────────┐
│ Saltwyk  [Progress ○●○○○]  📞 Get Help   💾 Save & Exit    │ ← Top Bar
├───────────────────────────┬─────────────────────────────────┤
│ Chat Area (Left, 50-60%)  │ Form Panel (Right, 40-50%)      │
│                           │                                 │
│ Agent: "Confirm details"  │ ┌─────────────────────────────┐ │
│                           │ │ Your Store           [Edit] │ │
│ [Choice buttons]          │ │ ✓ Store: Acme Outdoor       │ │
│                           │ │ ✓ Category: Outdoor         │ │
│ Agent: "Great! Next..."   │ │ ✓ Revenue: $125,000         │ │
│                           │ └─────────────────────────────┘ │
│                           │                                 │
│                           │ ┌─────────────────────────────┐ │
│                           │ │ Rewards Platform    [Active]│ │
│                           │ │ → Selecting platform...     │ │
│                           │ └─────────────────────────────┘ │
└───────────────────────────┴─────────────────────────────────┘
```

**Chat area:** Guides conversation, shows agent messages, collects responses
**Form panel:** Shows onboarding artifact being built, persists across conversation

### Mobile Adaptation

```
┌────────────────────────────┐
│ [Progress] 📞  💾 Save     │ ← Top Bar
├────────────────────────────┤
│ Chat Area (Full Width)     │
│                            │
│ Agent: "Confirm details"   │
│                            │
│ [Choice buttons]           │
│                            │
│ [View Progress ↗]          │ ← Floating button
└────────────────────────────┘
```

Form panel accessible via Sheet overlay on mobile.

---

## File Structure

### Specifications

1. **`README.md`** (this file) - Overview and navigation
2. **`layout-spec.md`** - Complete layout specification
   - Top bar design
   - Two-column layout (desktop)
   - Mobile responsive behavior
   - Design tokens (Fire Opal application)

3. **`message-components-spec.md`** - Message types
   - Agent messages
   - User response messages
   - System messages
   - Milestone messages
   - Component mapping to assistant-ui primitives

4. **`interaction-patterns-spec.md`** - 5 interaction patterns
   - Pattern 1: Confirmation Card (pre-filled data)
   - Pattern 2: Choice Selection (buttons/chips)
   - Pattern 3: Single Input (text entry)
   - Pattern 4: Complex Component (calculator, search)
   - Pattern 5: Delegation Prompt (send to someone else)

5. **`section-flows/`** - Complete conversation scripts
   - `01-your-store.md` - Store confirmation
   - `02-rewards-program.md` - Platform connection
   - `03-business-verification.md` - KYB with delegation
   - `04-banking-payments.md` - Financial configuration
   - `05-launch-strategy.md` - Exclusions + Go-Live choice

6. **`component-mapping.md`** - Implementation guide
   - Maps each pattern to assistant-ui components
   - Code examples for custom transport
   - Integration with existing Saltwyk components

---

## The 5 Onboarding Sections

### Section 1: Your Store (2 min)
**Goal:** Confirm Storeleads data
**Patterns:** Confirmation Card
**Outcome:** Store name, category, revenue verified

### Section 2: Rewards Program (3-5 min)
**Goal:** Connect merchant's loyalty platform
**Patterns:** Choice Selection, Complex Component (PlatformListSearch)
**Outcome:** Platform connected, tier verified

### Section 3: Business Verification (5-7 min)
**Goal:** Complete KYB for Stripe Connect
**Patterns:** Delegation Prompt (key pattern), Single Input
**Outcome:** Business verified OR delegated to accountant

### Section 4: Banking & Payments (5-7 min)
**Goal:** Configure all financial aspects
**Sub-steps:**
- Connect bank account (Stripe Connect)
- Accept pricing (3% fee)
- Fund clearing balance
- Configure auto-fund
- Set payout schedule

**Patterns:** Complex Component (ClearingBalanceCalculator, FeeStructureDisplay), Choice Selection
**Outcome:** Fully configured for transactions

### Section 5: Launch Strategy (3-5 min)
**Goal:** Choose launch approach
**Patterns:** Choice Selection
**Outcome:** Go Live Now OR Join Campaign (with date)

**Total Time:** 18-26 minutes

---

## Key Design Decisions

### 1. Go-Live Choice at End (Not Beginning)
**Original:** Ask Go-Live vs Campaign at start
**New:** Ask at end after full configuration

**Rationale:** Merchant needs to understand what they're getting before choosing launch timing. After seeing clearing balance requirements, pricing, and platform connection, they can make informed decision.

### 2. No Nav During Onboarding
**Decision:** Hide primary nav completely
**Rationale:** Focused flow, no distractions. "Save & Exit" provides escape hatch.

### 3. Persistent Phone Option
**Decision:** Always visible in top bar (not a chat card)
**Rationale:** Available at any point when merchant gets stuck or prefers voice conversation.

### 4. Two Columns (Not Chat-Only)
**Decision:** Chat left, form panel right
**Rationale:** Merchant sees artifact being built. Persistent context. Mirrors Claude Code pattern.

### 5. Confirmation Over Re-entry
**Decision:** Show pre-filled data from Storeleads, ask for confirmation
**Rationale:** Respects merchant's time. Shows we did research. Quick if correct, easy to edit if wrong.

---

## Design Tokens (Fire Opal)

### Chat Area
- Background: `bg-background` (ledger warm)
- Agent messages: `bg-emerald-50` with `border-emerald-200`
- User messages: `bg-warm-100` with `border-warm-200`
- System messages: `bg-warm-50` with `border-warm-200`

### Form Panel
- Background: `bg-muted` (slightly darker than chat)
- Active card: `bg-background` (white/warm)
- Completed card: `bg-emerald-50` with checkmark
- Pending card: `bg-warm-50` with muted text

### Top Bar
- Background: `bg-intaglio-900` (dark brown)
- Text: `text-warm-100` (light)
- Progress dots: `emerald-500` (active), `warm-300` (pending)

### Interactive Elements
- Primary CTA: `bg-emerald-600` hover `emerald-700`
- Choice buttons: `bg-warm-50` hover `warm-100`, selected `emerald-50` with `border-emerald-500`
- Links: `text-indigo-600` hover `indigo-700`

---

## Success Metrics

### Completion Rate
- **Target:** 85%+ complete all 5 sections
- **Measure:** Section completion funnel
- **Critical:** Section 3 (KYB) - delegation should prevent drop-off

### Time to Complete
- **Target:** 18-26 minutes average
- **Measure:** Time from start to "Go Live" click
- **Track:** Time per section (identify bottlenecks)

### Delegation Usage
- **Target:** 40-50% delegate Section 3 (Business Verification)
- **Measure:** Delegation prompt conversion
- **Success:** Delegated tasks complete within 24-48 hours

### Phone Call Usage
- **Target:** 10-15% use phone option
- **Measure:** Click-through on "Get Help" button
- **Track:** Which sections trigger calls most

### Conversion by Section
- Section 1: >95% (should be quick confirmation)
- Section 2: >90% (platform connection)
- Section 3: >80% (KYB or delegate)
- Section 4: >85% (financial config)
- Section 5: >90% (final choice)

---

## Related Documentation

### Design System
- `/merchant/components/` - Fire Opal merchant component specs
- `/merchant/tokens.css` - Fire Opal design token definitions
- `/docs/design-principles.md` - Overall design philosophy

### User Flows
- `/mnt/project/new-shopify-merchant-onboarding-flow.md` - Original flow spec
- `/mnt/project/merchant-clearing-balance-management-flow.md` - Clearing balance UX

### Technical
- `/mnt/user-data/outputs/shadcn-ai-components-research.md` - Component evaluation
- `/mnt/user-data/outputs/conversational-onboarding-design-spec.md` - Original combined spec (deprecated, split into this directory)

### Implementation
- `/dev/saltwyk-web/packages/ui/` - Shared UI components
- `/dev/saltwyk-web/apps/merchant-dashboard/` - Merchant app

---

## Development Workflow

### Design Phase (Current)
1. ✅ Complete layout spec (`layout-spec.md`)
2. ⏳ Complete message components spec
3. ⏳ Complete interaction patterns spec
4. ⏳ Complete section flow scripts (5 files)
5. ⏳ Complete component mapping guide

### Prototype Phase
1. Install assistant-ui in merchant-dashboard
2. Build custom onboarding transport (non-LLM)
3. Implement two-column layout
4. Build one section end-to-end (Section 1)
5. Validate approach

### Implementation Phase
1. Build remaining 4 sections
2. Integrate with backend APIs
3. Add phone call integration
4. Polish and accessibility
5. User testing

---

## Open Questions

### Technical
1. **Custom Transport Architecture** - How to structure conversation state in assistant-ui runtime?
2. **Form Panel Sync** - Real-time updates to form panel as chat progresses - websocket or optimistic updates?
3. **Session Persistence** - Save conversation state for "Save & Exit" - localStorage or API?

### UX
1. **Edit Previous Answers** - Can merchant go back and change Section 1 answers while in Section 3?
2. **Phone Call Transition** - How to handle mid-conversation switch to phone? Pause chat? Continue after?
3. **Error Recovery** - If API call fails (e.g., platform connection), how does agent explain and retry?

### Content
1. **Agent Voice** - Professional? Friendly? Balance between helpful and efficient?
2. **Section Transitions** - Celebrate completion? Quick confirmation? Milestone message?
3. **Delegation Prompts** - How persuasive should agent be about delegation for KYB?

---

## Next Steps

**Immediate:**
1. Complete `layout-spec.md` (detailed two-column design)
2. Review with Tela
3. Iterate on layout before moving to message/pattern specs

**Then:**
1. Message components spec
2. Interaction patterns spec
3. Section flow scripts
4. Component mapping guide

**Finally:**
5. Prototype with assistant-ui
6. Validate approach
7. Full implementation

---

## Contact

**Owner:** Tela (Founder/CEO)
**Design System:** Fire Opal (merchant dark theme)
**Component Library:** assistant-ui + shadcn/ui + custom Saltwyk components

---

**This is a living document. Update as design decisions are made.**
