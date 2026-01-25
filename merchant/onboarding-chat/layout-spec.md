# Layout Specification - Conversational Onboarding

**File:** `layout-spec.md`
**Status:** Draft for Review
**Last Updated:** January 24, 2026

---

## Overview

This document specifies the complete layout architecture for Saltwyk's conversational merchant onboarding experience. The design uses a two-column layout (chat + form panel) on desktop with mobile adaptation.

**Key Innovation:** Chat area guides conversation (left), form panel shows artifact being built (right).

---

## Top Bar

### Structure

```
┌─────────────────────────────────────────────────────────────────┐
│ [Logo] Saltwyk    [Progress: ○ ● ○ ○ ○]    📞 Get Help (5 min) │
│                                                    💾 Save & Exit │
└─────────────────────────────────────────────────────────────────┘
```

### Elements

#### 1. Logo + Brand
- **Position:** Left, 24px from edge
- **Component:** Saltwyk logo (32x32px) + wordmark
- **Color:** `text-warm-100` on `bg-intaglio-900`
- **Behavior:** Static, no click action (no nav during onboarding)

#### 2. Progress Indicator
- **Position:** Center (flex center)
- **Component:** 5 dots representing sections
- **States:**
  - Completed: `bg-emerald-500` (filled circle, 12px)
  - Active: `bg-indigo-500` with `ring-4 ring-indigo-100` (14px)
  - Pending: `bg-warm-300` (filled circle, 12px)
- **Spacing:** 16px between dots
- **Label:** Text above dots "Progress" in `text-warm-400` (12px)
- **Desktop only:** Show section names on hover (tooltip)
- **Mobile:** Dots only, no labels

#### 3. Get Help Button
- **Position:** Right side, before Save & Exit
- **Text:** "📞 Get Help (5 min)"
- **Style:** Button with `bg-indigo-600` hover `bg-indigo-700`
- **Behavior:** Opens dialog with call options:
  - "Call me now" (Twilio instant call)
  - "Schedule a call" (calendar picker)
  - "Cancel"
- **Icon:** Phone icon (Lucide `phone`)
- **Mobile:** Show icon only "📞" (no text)

#### 4. Save & Exit
- **Position:** Far right, 24px from edge
- **Text:** "💾 Save & Exit"
- **Style:** Ghost button with `text-warm-100` hover `text-warm-50`
- **Behavior:**
  - Saves conversation state
  - Returns to merchant dashboard
  - Shows confirmation: "Progress saved. You can resume anytime."
- **Icon:** Save icon (Lucide `save`)
- **Mobile:** Show icon only "💾"

### Design Tokens

```css
.top-bar {
  background: var(--intaglio-900);
  color: var(--warm-100);
  height: 64px;
  border-bottom: 1px solid var(--intaglio-700);
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.top-bar__progress {
  display: flex;
  gap: 16px;
  align-items: center;
}

.progress-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.progress-dot--active {
  width: 14px;
  height: 14px;
  box-shadow: 0 0 0 4px var(--indigo-100);
}
```

### Mobile Behavior

**Breakpoint:** < 768px

- Logo: Show icon only (32px)
- Progress: Dots only, reduce to 10px
- Get Help: Icon only "📞"
- Save & Exit: Icon only "💾"
- Spacing: Reduce to 16px from edges

---

## Desktop Layout (≥ 768px)

### Structure

```
┌──────────────────────────────────────────────────────────────────┐
│                          Top Bar (64px)                          │
├────────────────────────────┬─────────────────────────────────────┤
│ Chat Area                  │ Form Panel                          │
│ (50-60% width)             │ (40-50% width)                      │
│                            │                                     │
│ [Message stream]           │ [Section cards]                     │
│                            │                                     │
│ [Input area - bottom]      │ [Scrollable]                        │
└────────────────────────────┴─────────────────────────────────────┘
```

### Proportions

**Recommended:** 60% chat, 40% form panel

**Rationale:**
- Chat needs more width for readability (max 65ch)
- Form panel shows cards (doesn't need full width)
- Slightly asymmetric feels more dynamic

**Minimum widths:**
- Chat: 480px
- Form panel: 360px

**Breakpoint logic:**
```
if (screenWidth >= 1400px) {
  chat: 60%, panel: 40%
} else if (screenWidth >= 1024px) {
  chat: 55%, panel: 45%
} else if (screenWidth >= 768px) {
  chat: 50%, panel: 50%
} else {
  // Mobile: single column
}
```

---

## Chat Area (Left Column)

### Structure

```
┌────────────────────────────┐
│ Message Stream             │
│                            │
│ [Agent message]            │
│ [User response]            │
│ [Agent message]            │
│ [Interaction component]    │
│ ...                        │
│                            │
│ [Scroll to bottom button]  │ ← Appears when not at bottom
│                            │
├────────────────────────────┤
│ Input Area (if needed)     │ ← Conditional
└────────────────────────────┘
```

### Message Stream

**Container:**
- Background: `bg-background` (ledger warm)
- Padding: `32px` (left/right), `24px` (top)
- Scroll: Auto scroll to bottom on new message
- Max width: `65ch` centered (optimal readability)

**Scroll Behavior:**
- Auto-scroll to bottom when:
  - New agent message arrives
  - User sends response
  - Interaction component appears
- Show "↓ New message" button when user scrolls up
- Smooth scroll animation (not instant jump)

**Messages:**
- Spacing between messages: `16px`
- Agent messages: Left-aligned
- User responses: Right-aligned
- System messages: Center-aligned
- Milestone messages: Full-width with gradient

See `message-components-spec.md` for detailed message design.

### Input Area

**When shown:**
- Pattern 3: Single Input (text entry)
- Default state: Hidden (most interactions use buttons/components)

**When hidden:**
- Pattern 1: Confirmation Card (buttons in message)
- Pattern 2: Choice Selection (buttons in message)
- Pattern 4: Complex Component (interaction in message)
- Pattern 5: Delegation Prompt (buttons in message)

**Design:**
```
┌────────────────────────────────────────┐
│ [Textarea with auto-resize]            │
│ Placeholder: "Type your answer..."     │
│                                  [→]   │ ← Send button
└────────────────────────────────────────┘
```

- Background: `bg-warm-50`
- Border: `border-warm-200`, focus: `border-indigo-500`
- Padding: `16px`
- Min height: `56px`
- Max height: `200px` (then scroll)
- Send button: `bg-emerald-600` with arrow icon

### assistant-ui Mapping

**Chat Area uses:**
- `<ThreadPrimitive.Root>` - Container
- `<ThreadPrimitive.Viewport>` - Scrollable area
- `<ThreadPrimitive.Messages>` - Message list
- `<ThreadPrimitive.ScrollToBottom>` - Scroll button
- `<ComposerPrimitive.Root>` - Input area (conditional)
- `<ComposerPrimitive.Input>` - Textarea
- `<ComposerPrimitive.Send>` - Send button

**Custom:**
- Message components (agent/user/system)
- Interaction components (patterns 1-5)

---

## Form Panel (Right Column)

### Structure

```
┌─────────────────────────────┐
│ Onboarding Progress         │ ← Header (sticky)
├─────────────────────────────┤
│                             │
│ ┌─────────────────────────┐ │
│ │ Section 1: Your Store   │ │ ← Completed card
│ │ ✓ Store confirmed       │ │
│ └─────────────────────────┘ │
│                             │
│ ┌─────────────────────────┐ │
│ │ Section 2: Rewards      │ │ ← Active card
│ │ → Connecting platform.. │ │
│ └─────────────────────────┘ │
│                             │
│ ┌─────────────────────────┐ │
│ │ Section 3: Business     │ │ ← Pending card
│ │ Not started             │ │
│ └─────────────────────────┘ │
│                             │
│ ... (sections 4-5)          │
│                             │
└─────────────────────────────┘
```

### Header (Sticky)

**Content:** "Onboarding Progress"
**Position:** Sticky top
**Background:** `bg-muted` (matches panel)
**Border bottom:** `border-warm-200`
**Padding:** `24px` (left/right), `16px` (top/bottom)
**Typography:** `text-lg font-semibold text-foreground`

### Section Cards

**Card States:**

#### Completed
```
┌──────────────────────────────┐
│ ✓ Section 1: Your Store      │ ← Emerald checkmark
├──────────────────────────────┤
│ Store: Acme Outdoor Gear     │ ← Summary data
│ Category: Outdoor            │
│ Revenue: $125,000            │
├──────────────────────────────┤
│ [Edit] ←──────────────────── │ ← Edit button (right)
└──────────────────────────────┘
```

**Design tokens:**
- Background: `bg-emerald-50`
- Border: `2px solid` `border-emerald-200`
- Checkmark: `text-emerald-600` (Lucide `check-circle` icon)
- Text: `text-emerald-900`
- Edit button: `text-indigo-600` hover `text-indigo-700`

#### Active
```
┌──────────────────────────────┐
│ → Section 2: Rewards Program │ ← Indigo arrow
├──────────────────────────────┤
│ Connecting platform...       │ ← Status text
│ [Progress indicator]         │ ← Optional loading
└──────────────────────────────┘
```

**Design tokens:**
- Background: `bg-background` (white/warm)
- Border: `2px solid` `border-indigo-500`
- Arrow: `text-indigo-600` (Lucide `arrow-right` icon)
- Text: `text-foreground`
- Progress: Indigo spinner or bar

#### Pending
```
┌──────────────────────────────┐
│ ○ Section 3: Business        │ ← Empty circle
├──────────────────────────────┤
│ Not started                  │
└──────────────────────────────┘
```

**Design tokens:**
- Background: `bg-warm-50`
- Border: `1px solid` `border-warm-200`
- Circle: `text-warm-400` (Lucide `circle` icon)
- Text: `text-muted-foreground`

**Spacing:**
- Between cards: `16px`
- Card padding: `16px`
- Card border-radius: `8px`

### Scroll Behavior

- Auto-scroll to active section when new section starts
- Smooth scroll animation
- Maintain scroll position when cards update (don't jump)

### Interactive Behavior

**Edit Button (Completed Cards):**
- Clicking [Edit] on completed card:
  1. Opens edit mode in chat area
  2. Loads section context
  3. Allows merchant to update answers
  4. Saves changes and returns to current section

**Note:** May be v2 feature. MVP: No editing past sections.

### Design Tokens

```css
.form-panel {
  background: var(--muted);
  border-left: 1px solid var(--warm-200);
  overflow-y: auto;
  padding: 0 24px 24px;
}

.form-panel__header {
  position: sticky;
  top: 0;
  background: var(--muted);
  border-bottom: 1px solid var(--warm-200);
  padding: 16px 24px;
  z-index: 10;
}

.section-card {
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
}

.section-card--completed {
  background: var(--emerald-50);
  border: 2px solid var(--emerald-200);
}

.section-card--active {
  background: var(--background);
  border: 2px solid var(--indigo-500);
}

.section-card--pending {
  background: var(--warm-50);
  border: 1px solid var(--warm-200);
}
```

---

## Mobile Layout (< 768px)

### Structure

```
┌────────────────────────────┐
│ Top Bar (64px, compressed) │
├────────────────────────────┤
│ Chat Area (Full Width)     │
│                            │
│ [Message stream]           │
│                            │
│                            │
│ [Input if needed]          │
└────────────────────────────┘
              ↓
[View Progress] ← Floating action button
              ↓
┌────────────────────────────┐
│ Sheet Overlay (from right) │
├────────────────────────────┤
│ Onboarding Progress        │
│                            │
│ [Section cards]            │
│                            │
│ [Close button]             │
└────────────────────────────┘
```

### Chat Area (Full Width)

- Takes 100% viewport width
- Message max-width: `85vw` (better mobile readability)
- Padding: `16px` (reduced from desktop 32px)
- Messages slightly smaller typography

### Floating Action Button

**Position:** Bottom-right, 16px from edges
**Button:**
```
┌─────────────┐
│ 📊 Progress │
│   View (3/5)│
└─────────────┘
```

**Design:**
- Background: `bg-indigo-600`
- Color: `text-white`
- Size: `56px height` (standard FAB)
- Shadow: `shadow-lg`
- Icon: Chart icon (Lucide `bar-chart-3`)
- Badge: Shows "3/5" sections complete

**Behavior:**
- Always visible while onboarding active
- Bounces on section completion (celebrate!)
- Opens Sheet with form panel

### Sheet Overlay (Form Panel)

**Component:** shadcn Sheet (from right)
**Width:** `90vw` (most of screen)
**Height:** `100vh` (full height)
**Content:** Same section cards as desktop form panel
**Close:** X button top-right, swipe right, tap outside

**Design tokens:** Same as desktop form panel

### assistant-ui Mapping

Mobile uses same primitives, just different layout:
- `<ThreadPrimitive.Root>` - Full width
- Sheet for form panel (shadcn Sheet component, not assistant-ui)

---

## Transitions & Animations

### Section Transitions

**When moving to new section:**

1. **Chat area:**
   - Agent sends milestone message with gradient bg
   - Example: "✨ Great! Section 1 complete. Let's connect your rewards platform."
   - Smooth scroll to bottom

2. **Form panel:**
   - Previous section card: Collapse to completed state (slide + fade)
   - New section card: Expand to active state (slide + fade)
   - Auto-scroll to active card (smooth)

**Animation timing:**
- Collapse: 200ms ease-out
- Expand: 300ms ease-in-out
- Scroll: 400ms ease-in-out

### Message Animations

**New message appears:**
- Fade in + slight slide up
- Duration: 200ms
- Easing: ease-out

**Interaction component:**
- Fade in after message (100ms delay)
- Duration: 300ms
- Buttons/choices: Stagger appearance (50ms between each)

### Loading States

**Agent typing indicator:**
```
Agent is typing...
[● ● ●] ← Bouncing dots animation
```

**Pattern 4 (Complex Component) loading:**
- Skeleton placeholder
- Shimmer effect
- Duration: Until component ready

---

## Responsive Breakpoints

```javascript
const breakpoints = {
  mobile: '< 768px',       // Single column, sheet overlay
  tablet: '768px - 1024px', // Two column 50/50
  desktop: '1024px - 1400px', // Two column 55/45
  wide: '≥ 1400px'         // Two column 60/40
};
```

### Behavior by Breakpoint

| Element | Mobile | Tablet | Desktop | Wide |
|---------|--------|--------|---------|------|
| Chat width | 100% | 50% | 55% | 60% |
| Panel width | Sheet | 50% | 45% | 40% |
| Top bar | Icons only | Some text | Full text | Full text |
| Message max-width | 85vw | 55ch | 65ch | 65ch |
| Section card | Full width | Full width | Full width | Full width |
| FAB | Visible | Hidden | Hidden | Hidden |

---

## Accessibility

### Keyboard Navigation

**Chat area:**
- `Tab` - Focus next interactive element (buttons, input)
- `Shift + Tab` - Focus previous
- `Enter` - Activate focused button/submit input
- `Escape` - Blur focused element

**Form panel:**
- `Tab` - Navigate through Edit buttons
- `Enter` - Open edit mode
- `Escape` - Cancel edit mode

**Top bar:**
- `Tab` - Navigate: Get Help → Save & Exit
- `Enter` - Activate focused button

### Screen Reader

**ARIA labels:**
- Top bar: `role="banner"`
- Progress indicator: `aria-label="5 sections, section 2 active"`
- Chat area: `role="log"` `aria-live="polite"` `aria-atomic="false"`
- Form panel: `role="complementary"` `aria-label="Onboarding progress"`
- Section cards: `role="article"` with descriptive `aria-label`

**Focus management:**
- New message: Announce via aria-live (polite)
- Section transition: Announce "Section 2: Rewards Program now active"
- Form panel updates: Announce card state changes

### Color Contrast

All text meets WCAG AA standards:
- `text-foreground` on `bg-background`: 7:1+
- `text-emerald-900` on `bg-emerald-50`: 7:1+
- `text-indigo-600` on `bg-background`: 4.5:1+
- `text-warm-100` on `bg-intaglio-900`: 8:1+

---

## Implementation Notes

### assistant-ui Setup

```tsx
// Custom onboarding runtime
import { AssistantRuntimeProvider } from "@assistant-ui/react";
import { OnboardingTransport } from "@/lib/onboarding-transport";

const runtime = useOnboardingRuntime({
  transport: new OnboardingTransport(),
  initialState: {
    section: 1,
    completedSections: [],
    merchantData: {}
  }
});

return (
  <AssistantRuntimeProvider runtime={runtime}>
    <OnboardingLayout>
      <ChatArea />
      <FormPanel />
    </OnboardingLayout>
  </AssistantRuntimeProvider>
);
```

### State Management

**Runtime state:**
```typescript
type OnboardingState = {
  section: number; // 1-5
  completedSections: number[]; // [1, 2]
  merchantData: {
    store?: StoreData;
    platform?: PlatformData;
    business?: BusinessData;
    banking?: BankingData;
    launch?: LaunchData;
  };
  delegations?: Delegation[];
};
```

**Message state:**
- Handled by assistant-ui `ThreadPrimitive`
- Messages append to history
- Can access via `useThreadMessages()` hook

### Custom Components Integration

Our existing components (ClearingBalanceCalculator, FeeStructureDisplay, PlatformListSearch, SetupProgress) render inside assistant-ui messages:

```tsx
<MessagePrimitive.Root>
  <MessagePrimitive.Content>
    {message.type === 'complex' && (
      <ClearingBalanceCalculator
        {...message.props}
        onComplete={(value) => handleResponse(value)}
      />
    )}
  </MessagePrimitive.Content>
</MessagePrimitive.Root>
```

---

## Open Questions

### Layout
1. **Exact proportions:** 60/40 or 55/45? Test with real content.
2. **Form panel scroll:** Should active card stay visible (sticky scroll) or allow free scroll?
3. **Mobile FAB placement:** Bottom-right or bottom-center?

### Behavior
1. **Edit past sections:** MVP feature or v2? If MVP, how to handle dependencies (e.g., changing platform affects Section 4)?
2. **Section card expansion:** Do cards expand to show more detail when active? Or stay same size?
3. **Progress indicator interaction:** Click to jump to section (if completed)?

### Technical
1. **State persistence:** LocalStorage or API? Both?
2. **Optimistic updates:** Update form panel immediately or wait for confirmation?
3. **Error boundaries:** How to handle chat area crash without losing form panel state?

---

## Next Steps

1. **Review with Tela** - Validate layout decisions
2. **Prototype in Figma/code** - Visual validation
3. **Test on real devices** - Mobile breakpoints, FAB placement
4. **Complete message components spec** - Define message types using this layout
5. **Complete interaction patterns spec** - Define 5 patterns in this layout

---

**This specification is ready for review and iteration.**
