# Navigation Component Specification

## Philosophy

- Navigation provides wayfinding and access to product areas
- Sidebar navigation is the primary pattern for the merchant dashboard (Fire Opal)
- Navigation should feel stable, predictable, and quickly scannable

---

## Navigation Types Overview

| Type | Use Case | Primary Surface |
|------|----------|-----------------|
| Sidebar | Primary app navigation, persistent | Merchant Dashboard |
| Top Navigation | Marketing site, simpler apps | Marketing, Docs |
| Breadcrumbs | Location within hierarchy | All surfaces |
| Bottom Navigation | Mobile primary navigation | Shopper Passport (mobile) |
| Tabs | In-page section switching | All surfaces (see core-tabs.html) |

---

## Sidebar Navigation

### Anatomy

- **Container** — Fixed width, full height
- **Logo area** — Top, brand identity
- **Nav sections** — Grouped navigation items
- **Section headers** — Optional labels for groups
- **Nav items** — Icon + label + optional badge
- **Dividers** — Between sections
- **User area** — Bottom, profile/account
- **Collapse toggle** — Optional

### Sidebar — Light Mode (Traditional Opal)

**Container:**

| Property | Value |
|----------|-------|
| Width | 240px (expanded), 64px (collapsed) |
| Background | `white` |
| Border | `warm-200` right border (1px) |
| Shadow | none |

**Logo area:**

| Property | Value |
|----------|-------|
| Padding | 20px |
| Height | 64px |
| Logo | Saltwyk lockup, emerald variant |

**Section header:**

| Property | Value |
|----------|-------|
| Font size | 11px |
| Font weight | 600 |
| Text transform | uppercase |
| Letter spacing | 0.05em |
| Color | `warm-500` |
| Padding | 12px 16px 8px |

**Nav item states:**

| State | Background | Text | Icon | Border |
|-------|------------|------|------|--------|
| Default | `transparent` | `warm-600` | `warm-400` | none |
| Hover | `warm-50` | `ink` | `warm-500` | none |
| Active | `emerald-50` | `emerald-700` | `emerald-600` | `emerald-500` left (3px) |
| Focused | `warm-50` | `ink` | `warm-500` | focus ring |
| Disabled | `transparent` | `warm-300` | `warm-300` | none |

**Nav item dimensions:**

| Property | Value |
|----------|-------|
| Height | 40px |
| Padding | 12px 16px |
| Icon size | 20px |
| Gap (icon to label) | 12px |
| Font size | 14px |
| Font weight | 500 |
| Border radius | 6px (with 8px margin from edges) OR 0 (full bleed) |

**Divider:**

| Property | Value |
|----------|-------|
| Height | 1px |
| Color | `warm-200` |
| Margin | 8px 16px |

**User area:**

| Property | Value |
|----------|-------|
| Position | Bottom of sidebar |
| Border | `warm-200` top (1px) |
| Padding | 16px |
| Avatar | 32px, rounded-full |
| Name | 14px, `ink`, font-weight 500 |
| Email/role | 12px, `warm-500` |

### Sidebar — Dark Mode (Fire Opal)

*This is THE signature Fire Opal element for merchant dashboard.*

**Container:**

| Property | Value |
|----------|-------|
| Width | 240px (expanded), 64px (collapsed) |
| Background | `intaglio-900` |
| Border | none (darkness provides edge) |
| Shadow | optional subtle right shadow |

**Logo area:**

| Property | Value |
|----------|-------|
| Padding | 20px |
| Height | 64px |
| Logo | Saltwyk lockup, inverse (light on dark) |
| Divider below | Thread line (full spectrum) at 100% OR `intaglio-700` line |

**Section header:**

| Property | Value |
|----------|-------|
| Font size | 11px |
| Font weight | 600 |
| Text transform | uppercase |
| Letter spacing | 0.05em |
| Color | `warm-500` |
| Padding | 12px 16px 8px |

**Nav item states:**

| State | Background | Text | Icon | Border |
|-------|------------|------|------|--------|
| Default | `transparent` | `warm-400` | `warm-500` | none |
| Hover | `intaglio-800` | `warm-200` | `warm-300` | none |
| Active | `emerald-500/15` | `emerald-400` | `emerald-400` | `emerald-500` left (3px) |
| Focused | `intaglio-800` | `warm-200` | `warm-300` | focus ring |
| Disabled | `transparent` | `warm-700` | `warm-700` | none |

**Divider:**

| Property | Value |
|----------|-------|
| Height | 1px |
| Color | `intaglio-700` |
| Margin | 8px 16px |

**Alternative divider — Thread line:**
- 3px height
- Full spectrum gradient (cyan → lime → orange → magenta)
- Full width (no margin)
- Use sparingly (maybe once, below logo)

**User area:**

| Property | Value |
|----------|-------|
| Border | `intaglio-700` top (1px) |
| Avatar | 32px, rounded-full |
| Name | 14px, `warm-100`, font-weight 500 |
| Email/role | 12px, `warm-500` |

### Sidebar — Collapsed State

**Container:**

| Property | Collapsed Value |
|----------|-----------------|
| Width | 64px |
| Logo | Logomark only (no wordmark) |

**Nav item:**

| Property | Collapsed Value |
|----------|-----------------|
| Padding | 12px (centered) |
| Label | Hidden |
| Icon | Centered, 20px |
| Tooltip | Shows label on hover (appears to right) |

**Section headers:** Hidden in collapsed state.

**User area:** Avatar only, name/email hidden.

**Toggle button:**

| Property | Value |
|----------|-------|
| Position | Bottom of sidebar, above user area OR floating at edge |
| Icon | Chevron left (collapse) / Chevron right (expand) |
| Style | Ghost button |

**Animation:**
- Width transition: 200ms ease-out
- Labels fade out before width shrinks
- Labels fade in after width expands

### Nav Item with Badge

**Badge position:**
- Right side of nav item
- Vertically centered
- Right padding maintained

**Badge types:**
- Count badge: "5", "99+"
- Status dot: Colored dot indicator
- Text badge: "New", "Beta"

### Nested Navigation

**Parent item:**
- Chevron icon on right (rotates when expanded)
- Click toggles children visibility

**Child items:**
- Indented (add 24px left padding)
- Slightly smaller font (13px) optional
- Or same size with indent only

**Expanded state:**
- Parent stays highlighted if any child is active
- Children animate in (fade + slide down, 150ms)

---

## Breadcrumbs

### Specifications — Light Mode

| Element | Style |
|---------|-------|
| Container | Horizontal flex, 8px gap |
| Link | `warm-600`, 14px, hover: `ink`, underline on hover |
| Separator | `/` or chevron-right icon, `warm-400`, 12px |
| Current | `ink`, 14px, font-weight 500, not linked |

### Specifications — Dark Mode

| Element | Style |
|---------|-------|
| Link | `warm-400`, hover: `warm-200` |
| Separator | `warm-600` |
| Current | `warm-100`, font-weight 500 |

### Truncation

- If path is long, show: Home / ... / Parent / Current
- Middle items collapse to "..."
- Ellipsis is clickable, shows dropdown of hidden items

---

## Top Navigation

### Container

| Property | Light | Dark |
|----------|-------|------|
| Height | 64px | 64px |
| Background | `white` | `intaglio-900` |
| Border | `warm-200` bottom (1px) | `intaglio-700` bottom (1px) |
| Position | Fixed or sticky top | Fixed or sticky top |

### Layout

- Logo: Left
- Nav items: Center or right
- Actions: Right (buttons, user menu)

### Nav item states

| State | Light | Dark |
|-------|-------|------|
| Default | `warm-600` | `warm-400` |
| Hover | `ink` | `warm-100` |
| Active | `ink`, `emerald-500` underline (2px) | `warm-100`, `emerald-400` underline |

### Nav item dimensions

| Property | Value |
|----------|-------|
| Font size | 14px |
| Font weight | 500 |
| Padding | 8px 16px |
| Gap between items | 8px |
| Active underline | 2px, offset 4px below text |

---

## Mobile Bottom Navigation

### Container

| Property | Value |
|----------|-------|
| Position | Fixed bottom |
| Height | 64px + safe-area-inset-bottom |
| Background | `white` |
| Border | `warm-200` top (1px) |
| Shadow | `0 -4px 12px rgba(0,0,0,0.05)` |

### Nav item

| Property | Value |
|----------|-------|
| Width | Equal distribution (100% / item count) |
| Icon | 24px, centered above label |
| Label | 10px, centered below icon |
| Gap | 4px between icon and label |

### States

| State | Icon Color | Label Color |
|-------|------------|-------------|
| Default | `warm-400` | `warm-500` |
| Active | `emerald-600` | `emerald-700` |

**Maximum items:** 5 (ideally 3-4)

---

## Accessibility

### Sidebar

- `nav` element with `aria-label="Main navigation"`
- Active item has `aria-current="page"`
- Collapsed state: tooltips must be keyboard accessible
- Focus visible on all items

### Breadcrumbs

- `nav` element with `aria-label="Breadcrumb"`
- `ol` with `li` items
- Current page has `aria-current="page"`

### Bottom nav

- `nav` element with `aria-label="Primary navigation"`
- Active item has `aria-current="page"`

### Keyboard navigation

- Tab through nav items
- Enter/Space to activate
- Arrow keys within nav group (optional enhancement)

---

## Contextual Examples to Build

1. **Merchant Dashboard Shell** — Dark sidebar (Fire Opal) with logo, nav sections, user area, light content area with breadcrumbs
2. **Shopper Wallet (Desktop)** — Light sidebar, content area, Traditional Opal treatment
3. **Marketing Site Header** — Top navigation with logo, nav items, CTA button (light and dark)
4. **Mobile Shopper App** — Bottom navigation with 4 items (Home, Wallet, Activity, Profile)
5. **Nested Navigation Expanded** — Sidebar with nested section expanded, child item active

---

## Code Reference

### Sidebar Container (Dark)

```css
.sidebar {
  @apply fixed left-0 top-0 bottom-0 w-60;
  @apply bg-intaglio-900;
  @apply flex flex-col;
}

.sidebar-collapsed {
  @apply w-16;
}
```

### Sidebar Logo Area

```css
.sidebar-logo {
  @apply h-16 px-5 flex items-center;
  @apply border-b border-intaglio-700;
}

/* With thread line instead */
.sidebar-logo-thread {
  @apply h-16 px-5 flex items-center;
  @apply border-b-[3px];
  border-image: linear-gradient(90deg, var(--cyan-thread), var(--lime-thread), var(--orange-thread), var(--magenta-thread)) 1;
}
```

### Nav Section Header

```css
.nav-section-header {
  @apply px-4 py-2 pt-4;
  @apply text-[11px] font-semibold uppercase tracking-wide;
  @apply text-warm-500;
}
```

### Nav Item (Dark)

```css
.nav-item {
  @apply flex items-center gap-3 px-4 py-2 mx-2 rounded-md;
  @apply text-sm font-medium;
  @apply text-warm-400;
  @apply transition-colors duration-150;
}

.nav-item:hover {
  @apply bg-intaglio-800 text-warm-200;
}

.nav-item-active {
  @apply bg-emerald-500/15 text-emerald-400;
  @apply border-l-[3px] border-emerald-500;
  @apply -ml-[3px]; /* Compensate for border */
}

.nav-item-icon {
  @apply w-5 h-5 text-warm-500;
}

.nav-item-active .nav-item-icon {
  @apply text-emerald-400;
}
```

### Nav Item (Light)

```css
.nav-item-light {
  @apply text-warm-600;
}

.nav-item-light:hover {
  @apply bg-warm-50 text-ink;
}

.nav-item-light-active {
  @apply bg-emerald-50 text-emerald-700;
  @apply border-l-[3px] border-emerald-500;
}
```

### Breadcrumbs

```css
.breadcrumbs {
  @apply flex items-center gap-2 text-sm;
}

.breadcrumb-link {
  @apply text-warm-600 hover:text-ink hover:underline;
}

.breadcrumb-separator {
  @apply text-warm-400;
}

.breadcrumb-current {
  @apply text-ink font-medium;
}
```

### Bottom Nav

```css
.bottom-nav {
  @apply fixed bottom-0 left-0 right-0;
  @apply h-16 bg-white border-t border-warm-200;
  @apply flex items-center justify-around;
  @apply pb-safe; /* Safe area for iOS */
}

.bottom-nav-item {
  @apply flex flex-col items-center gap-1;
  @apply text-warm-400;
}

.bottom-nav-item-active {
  @apply text-emerald-600;
}

.bottom-nav-icon {
  @apply w-6 h-6;
}

.bottom-nav-label {
  @apply text-[10px] font-medium;
}
```

---

## Implementation Checklist

### Sidebar (light)

- [ ] Width: 240px expanded, 64px collapsed
- [ ] Background: white
- [ ] Border: warm-200 right (1px)
- [ ] Nav item height: 40px
- [ ] Active: emerald-50 bg, emerald-700 text, emerald-500 left border (3px)

### Sidebar (dark / Fire Opal)

- [ ] Background: intaglio-900
- [ ] Nav item default: warm-400 text, warm-500 icon
- [ ] Nav item hover: intaglio-800 bg, warm-200 text
- [ ] Nav item active: emerald-500/15 bg, emerald-400 text, emerald-500 left border
- [ ] Dividers: intaglio-700
- [ ] Thread line option below logo

### Collapse animation

- [ ] Width transition: 200ms ease-out
- [ ] Labels fade out/in
- [ ] Tooltip on hover when collapsed

### Breadcrumbs

- [ ] Separator: / or chevron, warm-400
- [ ] Links: warm-600, hover ink (light)
- [ ] Current: ink, font-weight 500

### Bottom nav (mobile)

- [ ] Height: 64px + safe area
- [ ] Icon: 24px
- [ ] Label: 10px
- [ ] Active: emerald-600 icon, emerald-700 label
