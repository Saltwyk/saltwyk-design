# Message Components Specification

**File:** `message-components-spec.md`
**Status:** Draft for Review
**Last Updated:** January 24, 2026

---

## Overview

This document specifies the four message component types used in Saltwyk's conversational merchant onboarding. Each message type serves a distinct purpose and has specific visual treatments using Fire Opal design tokens.

**Message types:**
1. **Agent Message** - Guide explains, asks questions, provides context
2. **User Response Message** - Shows what merchant said or selected
3. **System Message** - Status updates, confirmations, automated notices
4. **Milestone Message** - Section completion celebrations

---

## Message Type 1: Agent Message

### Purpose

The agent (Saltwyk guide) speaks to the merchant to:
- Greet and welcome
- Explain what's needed and why
- Ask questions
- Provide context for decisions
- Confirm understanding
- Encourage progress

### Visual Design

```
┌────────────────────────────────────────────────┐
│ [S] Agent                                      │ ← Avatar + label
├────────────────────────────────────────────────┤
│ Hi! I'm here to help you get verified and     │
│ connected to the Saltwyk network.             │
│                                                │
│ Let's start by confirming a few details about │
│ your store. This should only take a couple of │
│ minutes.                                       │
└────────────────────────────────────────────────┘
```

**Layout:**
- Avatar: Left-aligned, 32px circle
- Label: "Agent" or "Saltwyk" in small text above message
- Message bubble: Left-aligned, max-width 65ch
- Tail: Optional small triangle pointing to avatar

**Design Tokens:**
```css
.agent-message {
  background: var(--emerald-50);
  border: 1px solid var(--emerald-200);
  border-radius: 12px;
  padding: 16px;
  max-width: 65ch;
  margin-left: 48px; /* Space for avatar */
}

.agent-message__avatar {
  width: 32px;
  height: 32px;
  background: var(--emerald-500);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.agent-message__label {
  font-size: 12px;
  color: var(--emerald-700);
  font-weight: 500;
  margin-bottom: 4px;
}

.agent-message__content {
  color: var(--foreground);
  line-height: 1.6;
  font-size: 15px;
}
```

**Typography:**
- Font size: 15px (slightly larger than body text)
- Line height: 1.6 (comfortable reading)
- Font weight: 400 (regular)
- Paragraph spacing: 12px between paragraphs

**Avatar:**
- Background: `bg-emerald-500`
- Content: "S" letter or Saltwyk icon
- Fallback: User icon (Lucide `user`)

### Variants

#### Standard Agent Message
Default state shown above.

#### Agent Question
When asking a direct question, bold the question:

```
Agent: Let's start by confirming your store details.

Is this information correct?
```

**Bold the question line** to draw attention.

#### Agent with Context
When providing explanation before a choice:

```
Agent: To accept rewards from other merchants, you need
a loyalty platform.

Based on stores like yours, Smile.io or Yotpo work best.
Which do you use?
```

**Keep explanation regular weight**, question can be bold or followed by interaction component.

### Tone Guidelines

**Voice characteristics:**
- **Professional but friendly** - Not overly casual, not stiff
- **Helpful, not pushy** - Guide, don't pressure
- **Clear and direct** - No jargon, explain when necessary
- **Encouraging** - Celebrate progress, minimize anxiety
- **Concise** - Respect merchant's time

**Examples of good agent voice:**

✅ "Great! Your store is confirmed. Let's connect your rewards platform next."

✅ "This section takes about 10 minutes. Want to handle it yourself or delegate to your accountant?"

✅ "Perfect. Based on outdoor retailers like yours, I'd recommend starting with a $5,000 clearing balance."

**Examples to avoid:**

❌ "Awesome sauce! You're crushing it! 🎉" (too casual)

❌ "Please proceed to complete the KYB verification process by submitting the required documentation." (too formal/jargony)

❌ "You need to do this now or you can't continue." (pushy)

### assistant-ui Mapping

```tsx
import { MessagePrimitive, MessageContent } from "@assistant-ui/react";

<MessagePrimitive.Root from="assistant">
  <MessagePrimitive.Avatar>
    <div className="agent-message__avatar">S</div>
  </MessagePrimitive.Avatar>
  <MessageContent>
    <div className="agent-message">
      <div className="agent-message__label">Agent</div>
      <div className="agent-message__content">
        {message.content}
      </div>
    </div>
  </MessageContent>
</MessagePrimitive.Root>
```

---

## Message Type 2: User Response Message

### Purpose

Shows what the merchant said or selected. Creates conversation continuity and confirmation.

**When to show:**
- After text input (Pattern 3: Single Input)
- After choice selection (Pattern 2: Choice Selection) - optional
- NOT after button clicks in confirmation cards (redundant)

### Visual Design

```
                    ┌─────────────────────────────────┐
                    │ I'll do it myself               │
                    └─────────────────────────────────┘
                                                [M] You
```

**Layout:**
- Right-aligned
- Avatar: Right side, 32px circle
- Label: "You" in small text
- Message bubble: Max-width 55ch (slightly smaller than agent)
- Tail: Optional small triangle pointing to avatar

**Design Tokens:**
```css
.user-message {
  background: var(--warm-100);
  border: 1px solid var(--warm-200);
  border-radius: 12px;
  padding: 12px 16px;
  max-width: 55ch;
  margin-right: 48px; /* Space for avatar */
  margin-left: auto; /* Right align */
}

.user-message__avatar {
  width: 32px;
  height: 32px;
  background: var(--warm-400);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.user-message__label {
  font-size: 12px;
  color: var(--warm-600);
  font-weight: 500;
  margin-bottom: 4px;
  text-align: right;
}

.user-message__content {
  color: var(--foreground);
  line-height: 1.5;
  font-size: 14px;
}
```

**Typography:**
- Font size: 14px (slightly smaller than agent)
- Line height: 1.5
- Font weight: 400 (regular)

**Avatar:**
- Background: `bg-warm-400`
- Content: Merchant's initials or "M"
- Fallback: User icon (Lucide `user`)

### When to Show User Messages

**DO show for:**
- Text input responses: "My API key is sk-1234..."
- Free-form answers: "I'd like to add $7,500 to my clearing balance"

**DON'T show for:**
- Button clicks: "Looks good ✓" (redundant with agent confirmation)
- Choice selections: "Smile.io" (redundant, agent will confirm: "Great, connecting to Smile.io...")
- Component interactions: Adjusting slider (agent will summarize: "Perfect, $6,000 clearing balance set")

**Rationale:** Avoid chattiness. Only show user messages when they add clarity or context.

### Variants

#### Text Response
```
                    ┌─────────────────────────────────┐
                    │ sk-abc123def456                 │
                    └─────────────────────────────────┘
```

#### Long Text Response
If text wraps multiple lines, still use same styling:
```
                    ┌─────────────────────────────────┐
                    │ I'd like to exclude MerchantX   │
                    │ because they're a direct        │
                    │ competitor in our local market. │
                    └─────────────────────────────────┘
```

### assistant-ui Mapping

```tsx
<MessagePrimitive.Root from="user">
  <MessageContent>
    <div className="user-message">
      <div className="user-message__label">You</div>
      <div className="user-message__content">
        {message.content}
      </div>
    </div>
  </MessageContent>
  <MessagePrimitive.Avatar>
    <div className="user-message__avatar">M</div>
  </MessagePrimitive.Avatar>
</MessagePrimitive.Root>
```

---

## Message Type 3: System Message

### Purpose

Automated status updates, confirmations, or system-generated notices that aren't from the agent or user.

**Use cases:**
- "Connection verified ✓"
- "Verification pending... estimated 1-2 business days"
- "Payment processed successfully"
- "Error: Unable to connect. Please try again."

### Visual Design

```
        ┌──────────────────────────────────────┐
        │  ✓ Connection verified                │
        └──────────────────────────────────────┘
```

**Layout:**
- Center-aligned
- No avatar
- Compact padding
- Max-width: 50ch
- Icon before text (check, clock, warning, error)

**Design Tokens:**
```css
.system-message {
  background: var(--warm-50);
  border: 1px solid var(--warm-200);
  border-radius: 8px;
  padding: 8px 16px;
  max-width: 50ch;
  margin: 0 auto;
  text-align: center;
}

.system-message--success {
  background: var(--emerald-50);
  border-color: var(--emerald-200);
  color: var(--emerald-700);
}

.system-message--warning {
  background: var(--orange-50);
  border-color: var(--orange-200);
  color: var(--orange-700);
}

.system-message--error {
  background: var(--magenta-50);
  border-color: var(--magenta-200);
  color: var(--magenta-700);
}

.system-message--info {
  background: var(--cyan-50);
  border-color: var(--cyan-200);
  color: var(--cyan-700);
}

.system-message__icon {
  display: inline-block;
  margin-right: 8px;
}

.system-message__content {
  font-size: 13px;
  line-height: 1.4;
  font-weight: 500;
}
```

**Typography:**
- Font size: 13px (smaller, less prominent)
- Font weight: 500 (medium, slightly emphasized)
- Line height: 1.4

### Variants

#### Success
```
✓ Platform connected successfully
```
**Icon:** Check circle (Lucide `check-circle`)
**Color:** Emerald

#### Pending/Info
```
⏳ Verification in progress... estimated 1-2 business days
```
**Icon:** Clock (Lucide `clock`)
**Color:** Cyan

#### Warning
```
⚠️ This connection requires Enterprise plan
```
**Icon:** Alert triangle (Lucide `alert-triangle`)
**Color:** Orange

#### Error
```
✕ Connection failed. Please check your API key and try again.
```
**Icon:** X circle (Lucide `x-circle`)
**Color:** Magenta

### Usage Guidelines

**Use system messages for:**
- Status updates (connecting, processing, complete)
- Validation results (success, failure)
- Time estimates (processing time, wait times)
- Technical errors (API failures, timeouts)

**Don't use system messages for:**
- Agent explanations (use agent message)
- Merchant responses (use user message)
- Major transitions (use milestone message)

### assistant-ui Mapping

```tsx
<MessagePrimitive.Root from="system">
  <MessageContent>
    <div className={cn(
      "system-message",
      variant === "success" && "system-message--success",
      variant === "error" && "system-message--error"
    )}>
      <span className="system-message__icon">
        {getIcon(variant)}
      </span>
      <span className="system-message__content">
        {message.content}
      </span>
    </div>
  </MessageContent>
</MessagePrimitive.Root>
```

---

## Message Type 4: Milestone Message

### Purpose

Celebrates section completion and transitions to next section. Creates momentum and progress feeling.

**Use cases:**
- Section 1 complete → Section 2 starting
- Section 2 complete → Section 3 starting
- All sections complete → Ready to launch

### Visual Design

```
┌────────────────────────────────────────────────────────┐
│                                                        │
│  ✨ Great work! Section 1 complete.                   │
│                                                        │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━                        │
│                                                        │
│  Next: Let's connect your rewards platform            │
│                                                        │
└────────────────────────────────────────────────────────┘
```

**Layout:**
- Full width of chat area
- Centered text
- Gradient background or decorative element
- Icon at top (sparkles, check, trophy)
- Divider line
- Next step preview

**Design Tokens:**
```css
.milestone-message {
  background: linear-gradient(
    135deg,
    var(--emerald-50) 0%,
    var(--cyan-50) 100%
  );
  border: 2px solid var(--emerald-200);
  border-radius: 12px;
  padding: 24px;
  margin: 24px 0;
  text-align: center;
}

.milestone-message__icon {
  font-size: 32px;
  margin-bottom: 12px;
}

.milestone-message__title {
  font-size: 18px;
  font-weight: 600;
  color: var(--emerald-700);
  margin-bottom: 16px;
}

.milestone-message__divider {
  width: 60%;
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    var(--emerald-300) 50%,
    transparent 100%
  );
  margin: 16px auto;
}

.milestone-message__next {
  font-size: 14px;
  color: var(--muted-foreground);
  margin-top: 12px;
}
```

**Typography:**
- Title font size: 18px
- Title font weight: 600 (semibold)
- Next step font size: 14px
- Line height: 1.5

### Variants

#### Section Complete (1-4)
```
✨ Great work! Section 2 complete.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Next: Let's verify your business information
```

**Icon:** Sparkles (Lucide `sparkles`) or Check (Lucide `check-circle-2`)

#### All Sections Complete
```
🎉 Congratulations! Setup complete.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━

You're ready to launch on the Saltwyk network
```

**Icon:** Party popper (Lucide `party-popper`) or Trophy (Lucide `trophy`)

#### Mid-Section Milestone
For long sections with multiple steps (e.g., Section 4 has 5 sub-steps):

```
✓ Bank connected

━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Next: Let's set your clearing balance
```

**Simpler, lighter treatment:**
- Background: `bg-emerald-50` (no gradient)
- Border: 1px (not 2px)
- Padding: 16px (not 24px)
- Icon: Check (Lucide `check`)

### Usage Guidelines

**Use milestone messages for:**
- Major section transitions (always)
- Long section sub-step completions (optional)
- Final completion before launch (always)

**Don't use milestone messages for:**
- Every question completion (too frequent)
- Minor confirmations (use system message)
- Errors or warnings (use system message)

### Animation

**When milestone message appears:**
1. Fade in with slight scale (start at 0.95, end at 1.0)
2. Duration: 400ms
3. Easing: ease-out
4. Confetti effect (optional, for final completion only)

**Implementation:**
```css
@keyframes milestone-enter {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.milestone-message {
  animation: milestone-enter 400ms ease-out;
}
```

### assistant-ui Mapping

```tsx
<MessagePrimitive.Root from="system">
  <MessageContent>
    <div className="milestone-message">
      <div className="milestone-message__icon">✨</div>
      <div className="milestone-message__title">
        Great work! Section {section} complete.
      </div>
      <div className="milestone-message__divider" />
      <div className="milestone-message__next">
        Next: {nextSectionTitle}
      </div>
    </div>
  </MessageContent>
</MessagePrimitive.Root>
```

---

## Message Spacing & Flow

### Spacing Between Messages

```css
/* Base spacing between messages */
.message + .message {
  margin-top: 16px;
}

/* Less spacing between consecutive agent messages */
.agent-message + .agent-message {
  margin-top: 8px;
}

/* More spacing before milestone messages */
.milestone-message {
  margin-top: 32px;
  margin-bottom: 32px;
}

/* More spacing after user messages */
.user-message {
  margin-bottom: 20px;
}
```

### Message Flow Patterns

#### Agent Question → Interaction Component
```
Agent: "Which platform do you use?"
     ↓ (12px gap)
[Interaction Component: Choice buttons]
```

#### Agent Message → User Response → Agent Confirmation
```
Agent: "Is this information correct?"
     ↓ (16px)
User: "Looks good ✓"
     ↓ (20px)
Agent: "Perfect! Let's move on..."
```

#### System Message → Agent Message
```
System: "✓ Platform connected"
     ↓ (16px)
Agent: "Great! Now let's verify your business..."
```

---

## Mobile Adaptations

### Message Width

**Desktop:** Max-width 65ch (agent), 55ch (user)
**Mobile:** Max-width 85vw for both

### Typography

**Desktop:** 15px agent, 14px user
**Mobile:** 14px agent, 13px user

### Avatar Size

**Desktop:** 32px
**Mobile:** 28px

### Milestone Message

**Desktop:** Full gradient, 24px padding
**Mobile:** Simplified gradient, 16px padding, smaller icon

---

## Accessibility

### Screen Reader Announcements

**Agent messages:**
```html
<div role="log" aria-live="polite" aria-atomic="false">
  <div role="article" aria-label="Agent message">
    {content}
  </div>
</div>
```

**User messages:**
```html
<div role="article" aria-label="Your response">
  {content}
</div>
```

**System messages:**
```html
<div role="status" aria-live="polite" aria-atomic="true">
  {content}
</div>
```

**Milestone messages:**
```html
<div role="status" aria-live="assertive" aria-atomic="true">
  {content}
</div>
```

### Keyboard Navigation

- Messages themselves are not focusable
- Interactive elements within messages (buttons, inputs) are focusable
- Tab order: Top to bottom

### Color Contrast

All message types meet WCAG AA:
- Agent text on emerald-50: 7:1+
- User text on warm-100: 7:1+
- System text variants: 4.5:1+ minimum
- Milestone text on gradient: 7:1+

---

## Implementation Notes

### Custom Message Components

Create wrapper components for each message type:

```tsx
// components/onboarding/AgentMessage.tsx
export const AgentMessage = ({ content, avatar }) => {
  return (
    <MessagePrimitive.Root from="assistant">
      <MessagePrimitive.Avatar>
        <div className="agent-message__avatar">{avatar}</div>
      </MessagePrimitive.Avatar>
      <MessageContent>
        <div className="agent-message">
          <div className="agent-message__label">Agent</div>
          <div className="agent-message__content">
            <Markdown>{content}</Markdown>
          </div>
        </div>
      </MessageContent>
    </MessagePrimitive.Root>
  );
};
```

Similar wrappers for UserMessage, SystemMessage, MilestoneMessage.

### Markdown Support

Agent messages may contain:
- **Bold text** for emphasis
- Links with proper styling
- Line breaks

Use a markdown renderer (e.g., `react-markdown`) with custom components:

```tsx
<Markdown
  components={{
    strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
    a: ({ href, children }) => (
      <a href={href} className="text-indigo-600 hover:text-indigo-700 underline">
        {children}
      </a>
    ),
  }}
>
  {content}
</Markdown>
```

### Message History

assistant-ui handles message history automatically via `ThreadPrimitive`. Access messages via:

```tsx
const messages = useThreadMessages();
```

Filter by type:
```tsx
const agentMessages = messages.filter(m => m.from === 'assistant');
const userMessages = messages.filter(m => m.from === 'user');
```

---

## Testing Checklist

### Visual Testing
- [ ] Agent messages render correctly (avatar, label, bubble)
- [ ] User messages render correctly (right-aligned, avatar)
- [ ] System messages render correctly (all 4 variants)
- [ ] Milestone messages render correctly (gradient, animation)
- [ ] Spacing between message types is correct
- [ ] Mobile responsive behavior works

### Accessibility Testing
- [ ] Screen reader announces messages correctly
- [ ] ARIA labels are present and accurate
- [ ] Color contrast meets WCAG AA
- [ ] Focus management doesn't trap or skip
- [ ] Keyboard navigation works

### Content Testing
- [ ] Agent voice is consistent across messages
- [ ] User messages only show when appropriate
- [ ] System messages use correct variant for context
- [ ] Milestone messages appear at right times

---

## Open Questions

1. **Agent avatar:** Should we use "S" letter, Saltwyk icon, or a mascot character?

2. **User response display:** Should we EVER show user choices as messages? Or always implicit?

3. **System message timing:** Should system messages auto-dismiss after X seconds, or stay until next message?

4. **Milestone animation:** Should we use confetti animation for final completion? If so, which library?

5. **Message editing:** If we allow editing previous answers, how do we show edited messages? Strike-through old, show new?

---

## Related Specifications

- **Layout:** `layout-spec.md` - Where these messages appear
- **Next:** `interaction-patterns-spec.md` - Components that appear within/after messages
- **Next:** `section-flows/*.md` - Actual conversation scripts using these messages

---

**This specification is ready for review and implementation.**
