# Context Switcher Component Specification

## Philosophy

- Context switchers help users navigate between distinct product areas (Shopper Passport vs Merchant Dashboard)
- They must provide clear wayfinding—users should always know where they are
- Transitions should feel intentional, not accidental
- Visual treatment must reinforce the context (Bright Opal for Shopper, Fire Opal for Merchant)

---

## Use Cases

### Primary Use Case: Shopper ↔ Merchant

Users who are both shoppers and merchants need to switch between:
- **Shopper Passport** — Personal rewards wallet, point balances, transaction history
- **Merchant Dashboard** — Business operations, clearing balance, settlements

### Secondary Use Cases

- **Multi-merchant access** — Consultants/agencies managing multiple merchants
- **Organization switcher** — Switching between different merchant accounts
- **Role switcher** — Different permission levels within same organization

---

## Anatomy

- **Current context indicator** — Shows which context you're in
- **Context label** — Name of current context (Shopper/Merchant/Org name)
- **Context icon** — Visual identifier for context type
- **Switcher trigger** — Clickable element to open switcher
- **Switcher menu** — Dropdown/popover with available contexts
- **Context preview** — Brief info about each context option

---

## Placement Options

### In Sidebar (Primary)

- Position: Top of sidebar, below logo
- Replaces or augments logo area
- Always visible, prominent

### In Header (Alternative)

- Position: Left side of header, after logo
- Or: Right side near user menu
- Compact format

### In User Menu (Compact)

- Position: Top of user menu dropdown
- Less prominent but discoverable
- Good for secondary switching

---

## Context Indicator Specifications

### Current Context Display

**In Sidebar (Expanded):**

| Element | Light (Shopper) | Dark (Merchant) |
|---------|-----------------|-----------------|
| Container | `warm-50` background, `warm-200` border | `intaglio-800` background, `intaglio-700` border |
| Icon | 24px, `emerald-600` | 24px, `emerald-400` |
| Label | 14px, font-weight 600, `ink` | 14px, font-weight 600, `warm-100` |
| Sublabel | 12px, `warm-500` | 12px, `warm-400` |
| Chevron | 16px, `warm-400`, down arrow | 16px, `warm-500` |
| Border radius | 8px | 8px |
| Padding | 12px | 12px |

**In Sidebar (Collapsed):**

| Element | Specification |
|---------|---------------|
| Icon only | 24px, centered |
| Tooltip | Shows full context on hover |
| Indicator dot | Small colored dot showing context type |

### Context Type Icons

| Context | Icon | Color |
|---------|------|-------|
| Shopper Passport | Wallet / Credit card | `cyan-500` |
| Merchant Dashboard | Storefront / Building | `emerald-500` |
| Agency/Consultant | Briefcase | `orange-500` |

---

## Switcher Menu Specifications

### Menu Container

| Property | Light | Dark |
|----------|-------|------|
| Background | `white` | `intaglio-800` |
| Border | `warm-200` | `intaglio-700` |
| Border radius | 12px | 12px |
| Shadow | `0 8px 24px rgba(0,0,0,0.15)` | `0 8px 24px rgba(0,0,0,0.4)` |
| Width | 280px | 280px |
| Padding | 8px | 8px |

### Context Option Item

| Element | Light | Dark |
|---------|-------|------|
| Container | Hover: `warm-50` | Hover: `intaglio-700` |
| Padding | 12px | 12px |
| Border radius | 8px | 8px |
| Icon | 32px, in colored circle | Same |
| Label | 14px, font-weight 600, `ink` | `warm-100` |
| Description | 12px, `warm-500` | `warm-400` |
| Active indicator | `emerald-500` checkmark or left border | Same |

### Context Option States

| State | Treatment |
|-------|-----------|
| Default | Standard styling |
| Hover | Background tint |
| Active (current) | Checkmark icon, slightly different background |
| Disabled | 50% opacity, no hover |

### Section Divider

When showing multiple context types (e.g., Shopper section + Merchant section):

| Element | Light | Dark |
|---------|-------|------|
| Label | 11px, uppercase, `warm-500` | `warm-500` |
| Divider line | `warm-200` | `intaglio-700` |
| Padding | 12px 12px 8px | Same |

---

## Visual Context Reinforcement

### When in Shopper Context

- Sidebar: Light background (Bright Opal)
- Context indicator: Cyan icon accent
- Page content: Light surfaces
- URL: `/passport/...` or similar

### When in Merchant Context

- Sidebar: Dark background (Fire Opal)
- Context indicator: Emerald icon accent
- Page content: Can be light (ledger) with dark sidebar
- URL: `/dashboard/...` or similar

### Transition Animation

When switching contexts:

1. Menu closes
2. Brief loading state (if needed)
3. Full page transition:
   - Option A: Fade out → Fade in
   - Option B: Slide transition (direction based on "weight" of contexts)
4. New context loads with appropriate visual treatment

Duration: 300-400ms total

---

## Shopper Passport Indicator (In Merchant)

When merchant user has shopper passport linked:

### Minimal Indicator

Small link in sidebar footer or user menu:
- "View as Shopper" link
- Or small wallet icon with "Passport" tooltip

### Status Badge

In user area of sidebar:
- Small badge showing shopper status
- Click to switch to shopper view

---

## Merchant Dashboard Indicator (In Shopper)

When shopper has merchant account:

### Minimal Indicator

In user menu or footer:
- "Merchant Dashboard" link
- Building/storefront icon

### Multi-Merchant Selector

If user manages multiple merchants:
- Shows current merchant name
- Dropdown to switch merchants
- "All merchants" summary view option

---

## Multi-Organization Switcher

For users with access to multiple merchants (agencies, consultants):

### Organization List

| Element | Specification |
|---------|---------------|
| Avatar/logo | 32px, organization logo or initials |
| Name | 14px, font-weight 600 |
| Role | 12px, `warm-500`, e.g., "Admin", "Viewer" |
| Status | Badge showing org status if relevant |

### Search (if many orgs)

- Search input at top of menu
- Filters org list as user types
- Show if >5 organizations

### Add Organization

- "Add organization" link at bottom
- Or "Request access" if applicable

---

## Mobile Behavior

### In Mobile Sidebar/Drawer

- Full-width context indicator at top
- Tap to open switcher sheet (bottom sheet on mobile)

### In Mobile Header

- Compact icon-only indicator
- Tap for bottom sheet with context options

### Bottom Sheet Switcher

| Property | Value |
|----------|-------|
| Max height | 60vh |
| Handle | 4px × 32px, `warm-300`, top center |
| Animation | Slide up from bottom |

---

## Accessibility

### ARIA Structure

```html
<button 
  aria-haspopup="true" 
  aria-expanded="false"
  aria-label="Switch context, currently viewing Merchant Dashboard"
>
  <span class="context-icon"><!-- icon --></span>
  <span class="context-label">Merchant Dashboard</span>
  <span class="context-chevron"><!-- chevron --></span>
</button>

<div role="menu" aria-label="Available contexts">
  <div role="menuitemradio" aria-checked="false">
    Shopper Passport
  </div>
  <div role="menuitemradio" aria-checked="true">
    Merchant Dashboard
  </div>
</div>
```

### Keyboard Navigation

| Key | Behavior |
|-----|----------|
| Enter/Space | Open menu, select item |
| Arrow Up/Down | Navigate options |
| Escape | Close menu |
| Tab | Move to next focusable |

### Screen Reader Announcements

- Current context announced when focus enters area
- Context change announced on switch
- Loading state announced during transition

---

## Contextual Examples to Build

1. **Sidebar Context Switcher** — Full switcher in dark merchant sidebar, showing shopper option
2. **Sidebar Context Switcher (Light)** — Same in light shopper sidebar
3. **Collapsed Sidebar** — Icon-only with tooltip
4. **Multi-Merchant Selector** — Dropdown showing 3 merchant organizations
5. **Mobile Bottom Sheet** — Context switcher as bottom sheet
6. **Context Transition** — Visual showing before/after of context switch

---

## Code Reference

### Context Indicator (Dark/Merchant)

```css
.context-indicator {
  @apply flex items-center gap-3 p-3;
  @apply bg-intaglio-800 border border-intaglio-700 rounded-lg;
  @apply cursor-pointer;
  @apply transition-colors duration-150;
}

.context-indicator:hover {
  @apply bg-intaglio-700;
}

.context-icon {
  @apply w-8 h-8 rounded-lg;
  @apply bg-emerald-500/20 text-emerald-400;
  @apply flex items-center justify-center;
}

.context-label {
  @apply flex-1;
}

.context-name {
  @apply text-sm font-semibold text-warm-100;
}

.context-type {
  @apply text-xs text-warm-400;
}

.context-chevron {
  @apply w-4 h-4 text-warm-500;
}
```

### Context Indicator (Light/Shopper)

```css
.context-indicator-light {
  @apply bg-warm-50 border-warm-200;
}

.context-indicator-light:hover {
  @apply bg-warm-100;
}

.context-indicator-light .context-icon {
  @apply bg-cyan-100 text-cyan-600;
}

.context-indicator-light .context-name {
  @apply text-ink;
}

.context-indicator-light .context-type {
  @apply text-warm-500;
}
```

### Switcher Menu

```css
.context-menu {
  @apply absolute z-50 mt-2;
  @apply w-[280px] p-2;
  @apply bg-white border border-warm-200 rounded-xl;
  box-shadow: 0 8px 24px rgba(0,0,0,0.15);
}

.context-menu-dark {
  @apply bg-intaglio-800 border-intaglio-700;
  box-shadow: 0 8px 24px rgba(0,0,0,0.4);
}
```

### Context Option

```css
.context-option {
  @apply flex items-center gap-3 p-3 rounded-lg;
  @apply cursor-pointer;
  @apply transition-colors duration-150;
}

.context-option:hover {
  @apply bg-warm-50;
}

.context-option-dark:hover {
  @apply bg-intaglio-700;
}

.context-option-active {
  @apply bg-emerald-50;
}

.context-option-icon {
  @apply w-10 h-10 rounded-lg;
  @apply flex items-center justify-center;
}

.context-option-icon-shopper {
  @apply bg-cyan-100 text-cyan-600;
}

.context-option-icon-merchant {
  @apply bg-emerald-100 text-emerald-600;
}

.context-option-info {
  @apply flex-1;
}

.context-option-name {
  @apply text-sm font-semibold text-ink;
}

.context-option-description {
  @apply text-xs text-warm-500;
}

.context-option-check {
  @apply w-5 h-5 text-emerald-500;
}
```

### Section Divider

```css
.context-section {
  @apply pt-3 mt-1 border-t border-warm-200;
}

.context-section-label {
  @apply px-3 py-2 text-[11px] font-semibold uppercase tracking-wide text-warm-500;
}
```

---

## Implementation Checklist

### Context Indicator

- [ ] Shows current context name and type
- [ ] Icon matches context (wallet for shopper, building for merchant)
- [ ] Chevron indicates expandable
- [ ] Hover state
- [ ] Light variant for shopper, dark variant for merchant

### Switcher Menu

- [ ] Lists available contexts
- [ ] Current context marked with checkmark
- [ ] Hover state on options
- [ ] Section dividers if multiple context types
- [ ] Search if >5 options

### Visual Reinforcement

- [ ] Sidebar changes from light to dark on switch
- [ ] Icon colors match context type
- [ ] URL reflects current context
- [ ] Transition animation on switch

### Collapsed State

- [ ] Icon-only display
- [ ] Tooltip shows context name
- [ ] Menu still accessible

### Mobile

- [ ] Bottom sheet for switcher
- [ ] Touch-friendly targets (48px min)
- [ ] Swipe to dismiss

### Accessibility

- [ ] aria-haspopup and aria-expanded on trigger
- [ ] role="menu" on dropdown
- [ ] Keyboard navigation
- [ ] Screen reader announcements
