# Saltwyk Component Plan

**Status:** Draft  
**Last Updated:** January 2026  
**Conventions:** shadcn/ui patterns with Saltwyk design tokens

---

## Document Organization

### Product Surfaces

| Surface | URL | Status |
|---------|-----|--------|
| **Shopper Passport** | my.saltwyk.com | ✅ Defined |
| **Merchant Dashboard** | app.saltwyk.com | 🔲 Placeholder |
| **Checkout Widget** | checkout.saltwyk.com | 🔲 Placeholder |
| **Demo Store** | store.saltwyk.com | 🔲 Placeholder |

### Component Categories

| Category | Scope |
|----------|-------|
| **Common** | Used across 2+ surfaces |
| **Shopper Passport** | Passport home, Merchant Detail, Program Connection |
| **Checkout** | Checkout widget embedded in merchant sites |

---

## Overview

This document catalogs UI components for Saltwyk product surfaces. Components follow shadcn/ui naming conventions and patterns, adapted for Saltwyk's visual language.

### Design Token Reference

| Token | Value | Usage |
|-------|-------|-------|
| `intaglio` | `#1A0F0A` | Primary dark, text, borders |
| `ledger` | `#F5F2EB` | Primary background |
| `ledger-dark` | `#EBE7DE` | Secondary background |
| `emerald` | `#008C45` | Success, positive states |
| `magenta` | `#FF0090` | Warning, urgent states |
| `gold` | `#D4AF37` | Highlight, medium states |

### Typography Classes

| Class | Usage |
|-------|-------|
| `.headline` | `letter-spacing: -0.02em` — Display headings |
| `.serial` | `letter-spacing: 0.12em; text-transform: uppercase` — Labels, badges |

---

## Common Components

Components used across 2+ product surfaces.

> **Note:** Common components are documented inline within Shopper Passport but will be extracted to a shared library during implementation.

**Common Component List:**
- Button (all variants)
- Avatar
- Icon
- Badge
- Alert
- Thumbnail
- ProgressRing
- EmptyState

---

# Shopper Passport Components

Components for my.saltwyk.com — the shopper wallet experience.

## Passport Home

### Priority Tiers

- **P0 (MVP Critical):** Required for February demo
- **P1 (Launch):** Required for April launch
- **P2 (Post-Launch):** Nice to have

---

## Layout Components

### PageContainer

**Priority:** P0  
**Description:** Mobile-first container for Shopper Passport pages

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | — | Page content |
| `className` | `string` | — | Additional classes |

**Specifications:**
- Max width: `480px`
- Padding: `px-5 py-6`
- Centered: `mx-auto`
- Background: `bg-ledger`

**Usage:**
```tsx
<PageContainer>
  <Header />
  <HeroCard status="high" />
  <SectionCard title="Your Merchants">...</SectionCard>
</PageContainer>
```

---

### Header

**Priority:** P0  
**Description:** Top navigation bar with wordmark and profile trigger

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `user` | `{ initials: string; name: string }` | — | Current user |
| `onProfileClick` | `() => void` | — | Profile menu trigger |

**Specifications:**
- Layout: `flex items-center justify-between`
- Margin bottom: `mb-8`
- Logo: `text-2xl font-extrabold headline`
- Avatar: `w-10 h-10 rounded-full bg-intaglio`

---

## Cards & Containers

### HeroCard

**Priority:** P0  
**Description:** Primary status card showing buying power state. Dark background, prominent CTA.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `status` | `'high' \| 'medium' \| 'low'` | `'high'` | Buying power level |
| `headline` | `string` | — | Main message |
| `description` | `string` | — | Supporting text |
| `primaryAction` | `{ label: string; icon?: IconName; onClick: () => void }` | — | Primary CTA |
| `secondaryAction` | `{ label: string; icon?: IconName; onClick: () => void }` | — | Secondary CTA |

**Variants:**

| Status | Indicator Color | Sparkline | Primary CTA |
|--------|-----------------|-----------|-------------|
| `high` | `emerald` | None | "Shop Now" |
| `medium` | `gold` | Upward trend | "Increase Buying Power" |
| `low` | `magenta` | Downward trend | "Increase Buying Power" |

**Specifications:**
- Background: `bg-intaglio`
- Padding: `p-6`
- Margin: `mb-6`
- Status indicator: Pulse dot + serial label
- Headline: `text-ledger text-2xl font-bold headline`
- Description: `text-ledger/60 text-sm`

**States:**
- Default: As designed
- Loading: Skeleton with pulse animation

---

### SectionCard

**Priority:** P0  
**Description:** Bordered container for content sections (Wishlist, Snagged, Merchants)

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | — | Section heading |
| `subtitle` | `string` | — | Optional subtitle |
| `action` | `ReactNode` | — | Header action (button, tabs) |
| `children` | `ReactNode` | — | Section content |
| `variant` | `'default' \| 'bordered'` | `'bordered'` | Visual style |

**Specifications:**
- Border: `border border-intaglio/20`
- Header: `px-5 py-4 border-b border-intaglio/15`
- Title: `text-intaglio text-base font-bold headline`
- Subtitle: `text-intaglio/50 text-xs mt-0.5`

**Usage:**
```tsx
<SectionCard 
  title="Your Merchants" 
  subtitle="4 connected accounts"
  action={<FilterTabs items={['All', 'Favorites']} />}
>
  <MerchantList merchants={merchants} />
</SectionCard>
```

---

### DropCard

**Priority:** P1  
**Description:** Featured campaign/drop card with ticker header and anchor merchant

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | — | Drop name |
| `description` | `string` | — | Drop description |
| `claimedPercent` | `number` | — | Claim progress (0-100) |
| `endsAt` | `Date` | — | End date |
| `pointsValue` | `number` | — | Total points available |
| `anchorMerchant` | `{ name: string; merchantCount: number; icon: IconName }` | — | Anchor merchant |
| `onShop` | `() => void` | — | Shop CTA handler |
| `onWatchTrailer` | `() => void` | — | Trailer link handler |

**Specifications:**
- Border: `border border-intaglio`
- Ticker header: Serial labels with pulse dot
- Anchor section: Nested bordered container

---

## List Components

### MerchantRow

**Priority:** P0  
**Description:** Connected merchant list item with avatar, details, and favorite toggle

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `merchant` | `Merchant` | — | Merchant data |
| `isFavorite` | `boolean` | `false` | Starred state |
| `onToggleFavorite` | `() => void` | — | Toggle handler |
| `onClick` | `() => void` | — | Row click handler |

**Merchant Type:**
```typescript
interface Merchant {
  id: string;
  name: string;
  programName: string;
  tierName?: string;
  brandColor: string;
  initials: string;
  logo?: string;
}
```

**States:**
| State | Background | Border |
|-------|------------|--------|
| Default | transparent | — |
| Hover | `rgba(0, 140, 69, 0.04)` | — |
| Saved/Favorite | `bg-ledger-dark` | — |

**Specifications:**
- Padding: `px-5 py-4`
- Border bottom: `border-b border-intaglio/10`
- Avatar: `w-10 h-10 rounded-full`
- Transition: `transition-colors 0.15s ease`

---

### SnaggedRow

**Priority:** P0  
**Description:** Transaction history item showing earned rewards

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `item` | `SnaggedItem` | — | Item data |
| `onClick` | `() => void` | — | Row click handler |

**SnaggedItem Type:**
```typescript
interface SnaggedItem {
  id: string;
  name: string;
  earnedWith: string; // "Target + Sephora"
  date: Date;
  icon: IconName;
}
```

**Specifications:**
- Padding: `px-5 py-4`
- Thumbnail: `w-12 h-12 rounded-lg bg-ledger-dark border border-intaglio/10`
- Status badge: `text-emerald text-xs font-semibold` "EARNED"
- Date: `text-intaglio/40 text-xs`

---

### WishlistCard

**Priority:** P0  
**Description:** Wishlist item card with progress indicator

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `item` | `WishlistItem` | — | Item data |
| `onClick` | `() => void` | — | Card click handler |

**WishlistItem Type:**
```typescript
interface WishlistItem {
  id: string;
  name: string;
  location: string; // "at Target"
  progress: number; // 0-100
  icon: IconName;
}
```

**States:**
| Progress | Ring Color | Center Content |
|----------|------------|----------------|
| 100% | `emerald` | Check icon |
| 1-99% | `intaglio` | Percentage text |
| 0% | `intaglio` | "0%" |

**Specifications:**
- Border: `border border-intaglio/15`
- Padding: `p-3`
- Hover: `border-color: rgba(26, 15, 10, 0.3)`
- Thumbnail: `w-12 h-12 rounded-lg bg-ledger-dark`

---

## Data Display

### ProgressRing

**Priority:** P0  
**Description:** Circular progress indicator with center content

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `number` | `0` | Progress 0-100 |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Ring size |
| `color` | `'default' \| 'success'` | `'default'` | Ring color |
| `children` | `ReactNode` | — | Center content |

**Sizes:**
| Size | Dimensions | Stroke Width |
|------|------------|--------------|
| `sm` | `w-8 h-8` | 3 |
| `md` | `w-10 h-10` | 3 |
| `lg` | `w-12 h-12` | 4 |

**Colors:**
| Color | Track | Progress |
|-------|-------|----------|
| `default` | `#E8E4DB` | `intaglio` |
| `success` | `#E8E4DB` | `emerald` |

**Specifications:**
- SVG viewBox: `0 0 36 36`
- Circle radius: 15
- Stroke dasharray: `94.2` (2πr)
- Transform: `rotate(-90deg)` for top start

---

### Sparkline

**Priority:** P1  
**Description:** Small inline trend visualization

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `data` | `number[]` | — | Data points |
| `color` | `'gold' \| 'magenta' \| 'emerald'` | `'gold'` | Line color |
| `trend` | `'up' \| 'down' \| 'flat'` | — | Trend direction (alternative to data) |

**Specifications:**
- Size: `w-16 h-8`
- Stroke: `stroke-width: 2`
- Line cap: `round`
- Line join: `round`
- Fill: `none`

---

### StatusIndicator

**Priority:** P0  
**Description:** Pulse dot with serial label for buying power status

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `status` | `'high' \| 'medium' \| 'low'` | — | Status level |
| `label` | `string` | — | Status text |
| `pulse` | `boolean` | `true` | Animate dot |

**Status Colors:**
| Status | Color |
|--------|-------|
| `high` | `emerald` |
| `medium` | `gold` |
| `low` | `magenta` |

**Specifications:**
- Dot: `w-2 h-2 rounded-full`
- Label: `serial text-[11px] font-semibold`
- Animation: `pulse-dot 1.5s ease-in-out infinite`

---

## Interactive Components

### Button

**Priority:** P0  
**Description:** Primary interactive element following shadcn/ui Button patterns

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'solid' \| 'ghost' \| 'outline' \| 'dashed' \| 'link'` | `'solid'` | Visual style |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Button size |
| `icon` | `IconName` | — | Leading icon |
| `iconPosition` | `'left' \| 'right'` | `'left'` | Icon placement |
| `fullWidth` | `boolean` | `false` | Full width |
| `disabled` | `boolean` | `false` | Disabled state |
| `loading` | `boolean` | `false` | Loading state |

**Variants:**

| Variant | Background | Border | Text | Hover |
|---------|------------|--------|------|-------|
| `solid` | `bg-intaglio` | none | `text-ledger` | `bg-[#2d1f18]` |
| `ghost` | transparent | `border-ledger` | `text-ledger` | `bg-ledger text-intaglio` |
| `outline` | transparent | `border-intaglio/20` | `text-intaglio` | `bg-intaglio/5` |
| `dashed` | transparent | `border-dashed border-intaglio/30` | `text-intaglio/60` | `border-intaglio text-intaglio` |
| `link` | transparent | none | `text-intaglio/50` | `text-intaglio` |

**Sizes:**
| Size | Padding | Font |
|------|---------|------|
| `sm` | `py-2 px-3` | `text-xs` |
| `md` | `py-3 px-4` | `text-sm font-semibold` |
| `lg` | `py-4 px-6` | `text-base font-semibold` |

**States:**
- Default, Hover, Active, Disabled, Loading
- Transition: `all 0.15s ease`

---

### FilterTabs

**Priority:** P0  
**Description:** Segmented control for filtering content

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `string[]` | — | Tab labels |
| `value` | `string` | — | Active tab |
| `onChange` | `(value: string) => void` | — | Change handler |
| `variant` | `'bordered' \| 'pills'` | `'bordered'` | Visual style |

**Variants:**

| Variant | Container | Active State |
|---------|-----------|--------------|
| `bordered` | `border border-intaglio/20 rounded overflow-hidden` | `bg-intaglio text-ledger` |
| `pills` | `flex gap-1` | `bg-intaglio text-ledger rounded` |

**Specifications:**
- Tab padding: `px-2 py-1`
- Font: `text-[10px] font-medium`
- Inactive: `text-intaglio/60`
- Divider (bordered): `border-l border-intaglio/20`

---

### StarToggle

**Priority:** P0  
**Description:** Favorite toggle button

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `starred` | `boolean` | `false` | Current state |
| `onChange` | `(starred: boolean) => void` | — | Change handler |
| `size` | `'sm' \| 'md'` | `'md'` | Icon size |

**States:**
| State | Fill | Color |
|-------|------|-------|
| Unstarred | `transparent` | `rgba(26, 15, 10, 0.2)` |
| Starred | `currentColor` | `intaglio` |

**Specifications:**
- Padding: `p-1.5`
- Hover: `transform: scale(1.1)`
- Transition: `all 0.15s ease`
- Icon sizes: sm = `w-3 h-3`, md = `w-4 h-4`

---

### Avatar

**Priority:** P0  
**Description:** User or merchant avatar with initials or image

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `initials` | `string` | — | Fallback initials |
| `src` | `string` | — | Image URL |
| `alt` | `string` | — | Alt text |
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Avatar size |
| `color` | `string` | `'intaglio'` | Background color |
| `variant` | `'circle' \| 'rounded'` | `'circle'` | Shape |

**Sizes:**
| Size | Dimensions | Font |
|------|------------|------|
| `sm` | `w-8 h-8` | `text-xs` |
| `md` | `w-10 h-10` | `text-sm` |
| `lg` | `w-12 h-12` | `text-base` |
| `xl` | `w-20 h-20` | `text-2xl` |

**Specifications:**
- Circle: `rounded-full`
- Rounded: `rounded-lg` (sm/md) or `rounded-2xl` (lg/xl)
- Text: `font-bold text-white` (or brand-appropriate)

---

## Feedback & Status

### Badge

**Priority:** P1  
**Description:** Status label or tag

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'success' \| 'warning' \| 'muted'` | `'default'` | Color scheme |
| `children` | `ReactNode` | — | Badge content |

**Variants:**
| Variant | Background | Text |
|---------|------------|------|
| `default` | `bg-intaglio` | `text-ledger` |
| `success` | `bg-emerald/10` | `text-emerald` |
| `warning` | `bg-magenta/10` | `text-magenta` |
| `muted` | `bg-intaglio/10` | `text-intaglio/60` |

**Specifications:**
- Padding: `px-2 py-0.5`
- Font: `serial text-[8px] font-semibold`
- Border radius: `rounded`

---

### Alert

**Priority:** P1  
**Description:** Inline notification banner

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'info' \| 'warning' \| 'success' \| 'protected'` | `'info'` | Alert type |
| `icon` | `IconName` | — | Leading icon |
| `children` | `ReactNode` | — | Alert content |

**Variants:**
| Variant | Background | Border | Icon Color |
|---------|------------|--------|------------|
| `info` | `bg-intaglio/5` | `border-intaglio/20` | `intaglio` |
| `warning` | `bg-magenta/5` | `border-magenta/20` | `magenta` |
| `success` | `bg-emerald/5` | `border-emerald/20` | `emerald` |
| `protected` | `bg-gold/10` | `border-gold/20` | `gold` |

**Specifications:**
- Padding: `px-4 py-3`
- Layout: `flex items-center gap-3`
- Icon: `w-4 h-4 flex-shrink-0`
- Text: `text-intaglio/80 text-sm`

---

## Empty States

### EmptyState

**Priority:** P1  
**Description:** Placeholder for empty lists or sections

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `icon` | `IconName` | — | Illustration icon |
| `title` | `string` | — | Empty state heading |
| `description` | `string` | — | Supporting text |
| `action` | `{ label: string; onClick: () => void }` | — | Optional CTA |

**Specifications:**
- Layout: `text-center py-8`
- Icon container: `w-16 h-16 rounded-full bg-intaglio/5 mx-auto mb-4`
- Icon: `w-8 h-8 text-intaglio/30`
- Title: `text-intaglio text-base font-semibold mb-1`
- Description: `text-intaglio/50 text-sm`

---

## Utility Components

### Thumbnail

**Priority:** P0  
**Description:** Product/item image placeholder with icon fallback

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string` | — | Image URL |
| `alt` | `string` | — | Alt text |
| `icon` | `IconName` | `'image'` | Fallback icon |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Thumbnail size |

**Sizes:**
| Size | Dimensions |
|------|------------|
| `sm` | `w-12 h-12` |
| `md` | `w-14 h-14` |
| `lg` | `w-20 h-20` |

**Specifications:**
- Border radius: `rounded-lg`
- Background: `bg-ledger-dark`
- Border: `border border-intaglio/10`
- Icon: `text-intaglio/20` (30% for larger)

---

### Icon

**Priority:** P0  
**Description:** Wrapper for Lucide icons with Saltwyk sizing

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `IconName` | — | Lucide icon name |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg'` | `'md'` | Icon size |
| `className` | `string` | — | Additional classes |

**Sizes:**
| Size | Dimensions |
|------|------------|
| `xs` | `w-3 h-3` |
| `sm` | `w-4 h-4` |
| `md` | `w-5 h-5` |
| `lg` | `w-6 h-6` |

---

## Merchant Detail

Components for the merchant detail view within Shopper Passport (e.g., viewing Target connection, wishlist at a specific merchant).

### BackLink

**Priority:** P0  
**Description:** Navigation link to return to previous view

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | `'Back'` | Link text |
| `href` | `string` | — | Navigation target |
| `onClick` | `() => void` | — | Click handler (alternative to href) |

**Specifications:**
- Layout: `flex items-center gap-1.5`
- Text: `text-intaglio/50 text-sm font-medium`
- Hover: `text-intaglio`
- Icon: `arrow-left` at `w-4 h-4`
- Margin: `mb-6`

---

### BrandIdentityHeader

**Priority:** P0  
**Description:** Large merchant brand display with logo, name, tier, and stats

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `merchant` | `MerchantDetail` | — | Merchant data |
| `isConnected` | `boolean` | `true` | Connection status |
| `isFavorite` | `boolean` | `false` | Starred state |
| `onToggleFavorite` | `() => void` | — | Star toggle handler |

**MerchantDetail Type:**
```typescript
interface MerchantDetail {
  id: string;
  name: string;
  programName: string;
  tierName?: string;
  tierIcon?: IconName;
  brandColor: string;
  initials: string;
  logo?: string;
  memberSince?: string; // "2016"
  totalPointsEarned?: number;
}
```

**States:**

| State | Logo Style | Text Style |
|-------|------------|------------|
| Connected | Full color, `shadow-sm` | Normal |
| Unconnected | `bg-intaglio/10`, muted initials | Muted name, lock icon |

**Specifications:**
- Layout: `flex items-start gap-4`
- Logo: `w-20 h-20 rounded-2xl`
- Name: `text-intaglio text-2xl font-bold headline`
- Tier: `text-intaglio/70 text-sm font-medium` with icon
- Stats: `text-intaglio/50 text-xs` with dot separator
- Star toggle positioned top-right of name

---

### MerchantWishlistCard

**Priority:** P0  
**Description:** Detailed wishlist item card with CTA for ready items

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `item` | `DetailedWishlistItem` | — | Item data |
| `onSnag` | `() => void` | — | "Snag it" handler (when ready) |
| `onClick` | `() => void` | — | Card click for editing |

**DetailedWishlistItem Type:**
```typescript
interface DetailedWishlistItem {
  id: string;
  name: string;
  subtitle?: string; // "40oz Adventure Quencher"
  progress: number; // 0-100
  icon: IconName;
  encouragement?: string; // "A couple more Target runs and it's yours"
}
```

**States:**

| Progress | Ring | CTA | Encouragement |
|----------|------|-----|---------------|
| 100% | `emerald` with check | "Snag it now!" button | Hidden |
| 1-99% | `intaglio` with % | None | Shown |
| 0% | `intaglio` with 0% | None | Shown |

**Specifications:**
- Border: `border border-intaglio/15`
- Padding: `p-4`
- Thumbnail: `w-20 h-20 rounded-lg`
- Progress ring: `w-10 h-10`
- Snag button: `bg-emerald text-white text-xs font-semibold py-2 rounded`
- Hover: `border-color: rgba(26, 15, 10, 0.3)`

---

### SnaggedCard

**Priority:** P0  
**Description:** Merchant-specific transaction history (same as SnaggedRow but in merchant context)

Reuses `SnaggedRow` component with merchant-specific filtering.

---

### ConnectionPitch

**Priority:** P0  
**Description:** CTA card for unconnected merchants

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `merchantName` | `string` | — | Merchant name |
| `onConnect` | `() => void` | — | Connect handler |
| `onJoinProgram` | `() => void` | — | "Not a member?" handler |

**Specifications:**
- Container: `border border-intaglio/15 p-5`
- Icon container: `w-16 h-16 rounded-full bg-intaglio/5 mx-auto mb-4`
- Icon: `gift` at `w-8 h-8 text-intaglio/30`
- Headline: `text-intaglio text-xl font-bold headline mb-2`
- Description: `text-intaglio/60 text-sm`
- Primary CTA: Button solid variant
- Secondary link: `text-intaglio/50 text-sm` with underline

---

### PreviewGrid

**Priority:** P1  
**Description:** Grid of possible items for unconnected merchants

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `PreviewItem[]` | — | Preview items |
| `columns` | `2 \| 3` | `3` | Grid columns |

**PreviewItem Type:**
```typescript
interface PreviewItem {
  icon: IconName;
}
```

**Specifications:**
- Grid: `grid grid-cols-3 gap-3`
- Item: `aspect-square rounded-lg bg-ledger-dark border border-intaglio/10`
- Icon: `w-8 h-8 text-intaglio/20`

---

## Overlays & Sheets

### BottomSheet

**Priority:** P0  
**Description:** Modal overlay that slides up from bottom

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | `false` | Visibility state |
| `onClose` | `() => void` | — | Close handler |
| `title` | `string` | — | Sheet header title |
| `children` | `ReactNode` | — | Sheet content |
| `maxHeight` | `string` | `'85vh'` | Maximum height |

**Specifications:**
- Overlay: `bg-intaglio/40 backdrop-blur-[2px]`
- Sheet: `bg-ledger rounded-t-2xl`
- Handle: `w-10 h-1 bg-intaglio/20 rounded-full mx-auto mb-6`
- Header: `flex items-center justify-between mb-6`
- Title: `text-intaglio text-lg font-bold headline`
- Close button: `text-intaglio/40 hover:text-intaglio` with X icon
- Animation: `slide-up 0.3s ease-out`
- Content max-width: `480px` centered

**Animation:**
```css
@keyframes slide-up {
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
}
```

---

### AddItemSheet

**Priority:** P0  
**Description:** Bottom sheet for adding wishlist items via URL

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | `false` | Visibility state |
| `onClose` | `() => void` | — | Close handler |
| `onAdd` | `(url: string) => void` | — | Add item handler |
| `preview` | `ItemPreview \| null` | — | Parsed URL preview |
| `isLoading` | `boolean` | `false` | URL parsing state |

**ItemPreview Type:**
```typescript
interface ItemPreview {
  name: string;
  subtitle?: string;
  merchants: string[]; // "Target, Best Buy"
  image?: string;
}
```

**Content:**
1. URL input with link icon prefix
2. Helper text: "Paste a link from any retailer in the Saltwyk network"
3. Preview card (when URL parsed)
4. Add button (solid variant)

**Specifications:**
- Uses `BottomSheet` as container
- Input: `TextInput` with `link` icon
- Preview: Bordered card with thumbnail, name, subtitle, merchants

---

### EditItemSheet

**Priority:** P0  
**Description:** Bottom sheet for viewing/editing wishlist item details

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | `false` | Visibility state |
| `onClose` | `() => void` | — | Close handler |
| `item` | `DetailedWishlistItem` | — | Item to edit |
| `availableAt` | `MerchantProgress[]` | — | Merchants with progress |
| `onArchive` | `() => void` | — | Archive handler |
| `onRemove` | `() => void` | — | Remove handler |

**MerchantProgress Type:**
```typescript
interface MerchantProgress {
  merchant: Merchant;
  progress: number;
  isBest: boolean;
}
```

**Content:**
1. Item detail card with progress
2. "Available at" merchant list with progress
3. Archive button (outline)
4. Remove button (destructive)

**Specifications:**
- Uses `BottomSheet` as container
- Merchant rows show progress and "Best progress" badge
- Remove button: `border-magenta/20 text-magenta hover:bg-magenta/5`

---

## Celebration States

### SuccessState

**Priority:** P1  
**Description:** Post-connection success screen with mystery box

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `merchantName` | `string` | — | Connected merchant |
| `merchantLogo` | `ReactNode` | — | Merchant avatar |
| `onReveal` | `() => void` | — | Mystery box tap handler |
| `onSkip` | `() => void` | — | Skip handler |

**Content:**
1. Merchant logo with celebrate-pop animation
2. "You're in!" headline
3. "[Merchant] is now part of your Passport" description
4. Mystery box with pulse-glow animation
5. Skip link

**Specifications:**
- Layout: `min-h-[80vh] flex flex-col items-center justify-center text-center`
- Logo: `w-24 h-24 rounded-2xl shadow-lg`
- Animations: Staggered `celebrate-pop` with `animation-delay`

**Animation:**
```css
@keyframes celebrate-pop {
  0% { transform: scale(0.8); opacity: 0; }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); opacity: 1; }
}
```

---

### MysteryBox

**Priority:** P1  
**Description:** Tappable reward reveal container

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `onClick` | `() => void` | — | Tap handler |
| `label` | `string` | `'You unlocked something!'` | Box label |
| `sublabel` | `string` | `'Tap to reveal'` | Helper text |

**Specifications:**
- Border: `border-2 border-gold/50`
- Background: `bg-gradient-to-b from-gold/10 to-transparent`
- Border radius: `rounded-lg`
- Icon container: `w-16 h-16 rounded-full bg-gold/20`
- Icon: `gift` at `w-8 h-8 text-gold`
- Animation: `pulse-glow 2s ease-in-out infinite`

**Animation:**
```css
@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 20px rgba(212, 175, 55, 0.3); }
  50% { box-shadow: 0 0 40px rgba(212, 175, 55, 0.6); }
}
```

---

### RevealState

**Priority:** P1  
**Description:** Revealed reward with next connection prompt

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `reward` | `Reward` | — | Revealed reward |
| `nextMerchant` | `Merchant \| null` | — | Suggested next connection |
| `onConnectNext` | `() => void` | — | Connect next handler |
| `onDone` | `() => void` | — | Done handler |

**Reward Type:**
```typescript
interface Reward {
  type: 'bonus_points' | 'mystery_reward';
  value: number; // points amount
  label: string; // "500 Bonus Points!"
  description: string; // "Added to your Target buying power"
}
```

**Content:**
1. Reward icon with celebrate-pop animation
2. "Bonus Unlocked" serial badge
3. Reward headline and description
4. "While you're on a roll..." next merchant card
5. Done link

**Specifications:**
- Icon container: `w-20 h-20 rounded-full bg-emerald/10`
- Icon: `zap` at `w-10 h-10 text-emerald`
- Serial badge: `text-emerald` variant
- Next merchant card: Bordered container with CTA

---

# Checkout Widget Components

Components for checkout.saltwyk.com — the embedded checkout experience on merchant sites.

## Widget Container

### CheckoutModal

**Priority:** P0  
**Description:** Main modal container for checkout widget, embedded in merchant checkout page

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | `false` | Visibility state |
| `onClose` | `() => void` | — | Close handler |
| `merchant` | `CheckoutMerchant` | — | Merchant context |
| `cartTotal` | `number` | — | Cart amount in cents |
| `currency` | `string` | `'USD'` | Currency code |
| `children` | `ReactNode` | — | Current step content |

**CheckoutMerchant Type:**
```typescript
interface CheckoutMerchant {
  id: string;
  name: string;
  logo?: string;
}
```

**Specifications:**
- Overlay: `bg-intaglio/40 backdrop-blur-[2px]`
- Modal: `bg-ledger rounded-lg` (desktop) or `rounded-t-2xl` (mobile bottom sheet)
- Max width: `400px` (desktop)
- Padding: `p-6`
- Header: Saltwyk logo + close button

**Responsive:**
- Desktop: Centered modal
- Mobile: Bottom sheet (same as `BottomSheet` component)

---

### CheckoutHeader

**Priority:** P0  
**Description:** Modal header with logo and close action

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `onClose` | `() => void` | — | Close handler |
| `showBack` | `boolean` | `false` | Show back arrow instead of close |
| `onBack` | `() => void` | — | Back handler |

**Specifications:**
- Layout: `flex items-center justify-between mb-6`
- Logo: Saltwyk wordmark or logomark
- Close: `text-intaglio/40 hover:text-intaglio` with X icon
- Back: `text-intaglio/50` with arrow-left icon

---

## First-Time Shopper Flow

### ValueProposition

**Priority:** P0  
**Description:** Initial screen explaining Saltwyk value to new shoppers

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `onContinue` | `(phone: string) => void` | — | Continue with phone handler |

**Content:**
1. Headline (TODO: Value prop headline)
2. Description: "Connect all your rewards accounts to Saltwyk so you can pay with points next time you shop."
3. Benefits list:
   - Setup takes about 5 minutes
   - Find your rewards programs
   - Connect your accounts securely
   - Start spending points like money
4. Phone input with label: "Phone is required for secure payments"
5. Continue button

**Specifications:**
- Headline: `text-intaglio text-xl font-bold headline mb-2`
- Description: `text-intaglio/60 text-sm mb-6`
- Benefits: `text-intaglio/70 text-sm` with check icons
- Phone input: `PhoneInput` component
- CTA: Button solid variant, full width

---

### PhoneInput

**Priority:** P0  
**Description:** Phone number input with US format validation and country code

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | `''` | Phone number value |
| `onChange` | `(value: string) => void` | — | Change handler |
| `error` | `string` | — | Validation error message |
| `disabled` | `boolean` | `false` | Disabled state |
| `autoFocus` | `boolean` | `false` | Auto focus on mount |

**Specifications:**
- Container: `relative`
- Prefix: `+1` country code, `text-intaglio/50`
- Input: `text-input` base styles
- Format: Auto-format as `(XXX) XXX-XXXX`
- Keyboard: `inputMode="tel"`
- Error: `text-magenta text-xs mt-1`

**Validation:**
- US format only for MVP
- 10 digits required
- Real-time format masking

**States:**
| State | Border | Background |
|-------|--------|------------|
| Default | `border-intaglio/20` | `white` |
| Focus | `border-intaglio` | `white` |
| Error | `border-magenta` | `white` |
| Disabled | `border-intaglio/10` | `bg-ledger-dark` |

---

### OTPInput

**Priority:** P0  
**Description:** 6-digit verification code input with auto-advance

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | `''` | Current code value |
| `onChange` | `(value: string) => void` | — | Change handler |
| `onComplete` | `(code: string) => void` | — | Called when all 6 digits entered |
| `error` | `string` | — | Validation error message |
| `disabled` | `boolean` | `false` | Disabled state |
| `autoFocus` | `boolean` | `true` | Auto focus first input |

**Specifications:**
- Layout: `flex gap-2 justify-center`
- Each digit: `w-12 h-14 text-center text-xl font-semibold`
- Border: `border border-intaglio/20 rounded`
- Focus: `border-intaglio`
- Keyboard: `inputMode="numeric"`
- Auto-advance: Focus moves to next input on entry
- Backspace: Focus moves to previous input

**Behavior:**
- Paste support: Handle full 6-digit paste
- Auto-submit: Call `onComplete` when 6th digit entered
- Clear on error: Option to clear all on invalid submission

**States:**
| State | Border | Background |
|-------|--------|------------|
| Default | `border-intaglio/20` | `white` |
| Focus | `border-intaglio` | `white` |
| Filled | `border-intaglio/30` | `white` |
| Error | `border-magenta` | `bg-magenta/5` |
| Disabled | `border-intaglio/10` | `bg-ledger-dark` |

---

### OTPVerification

**Priority:** P0  
**Description:** OTP entry screen with phone display and resend option

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `phone` | `string` | — | Phone number (masked display) |
| `onVerify` | `(code: string) => void` | — | Verify handler |
| `onResend` | `() => void` | — | Resend code handler |
| `error` | `string` | — | Verification error |
| `isLoading` | `boolean` | `false` | Verification in progress |
| `resendCooldown` | `number` | `0` | Seconds until resend available |

**Content:**
1. Headline: "Check your phone"
2. Description: "We sent a 6-digit code to (206) 555-****"
3. OTP input (6 digits)
4. Error message (if any)
5. Resend link with cooldown timer

**Specifications:**
- Headline: `text-intaglio text-xl font-bold headline mb-2`
- Phone display: Masked as `(XXX) XXX-****`
- Resend link: `text-intaglio/50 text-sm` → `text-intaglio` when available
- Cooldown: "Resend in 30s" countdown

**States:**
- Default: Waiting for input
- Loading: Spinner on verify
- Error: Red border on inputs, error message
- Resend cooldown: Disabled resend with timer

---

### NameCapture

**Priority:** P0  
**Description:** Name input after OTP verification with path selection

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `onSetupNow` | `(name: string) => void` | — | Immediate setup handler |
| `onTextMeLink` | `(name: string) => void` | — | SMS link handler |
| `isLoading` | `boolean` | `false` | Submission in progress |

**Content:**
1. Headline: "Your Name"
2. Name input field
3. Description: "You're all set! Choose how to continue:"
4. Two CTA buttons:
   - "Setup Now" — Primary, opens my.saltwyk.com
   - "Text Me the Link" — Secondary, sends SMS

**Specifications:**
- Name input: `TextInput` component
- Setup Now: Button solid variant
- Text Me Link: Button outline variant
- Both buttons: Full width, stacked with gap

---

### LeadCaptureSuccess

**Priority:** P0  
**Description:** Confirmation screen after lead capture (Text Me Link path)

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `onClose` | `() => void` | — | Close/done handler |
| `autoCloseDelay` | `number` | `3000` | Auto-close delay in ms |

**Content:**
1. Success icon (check in circle)
2. Headline: "Check your phone!"
3. Description: "We've sent you a link to complete your Saltwyk setup. It takes about 5 minutes to connect your accounts."
4. Subtext: "Once you're set up, you can use points at [Merchant] and thousands of other merchants."

**Specifications:**
- Icon container: `w-16 h-16 rounded-full bg-emerald/10 mx-auto mb-4`
- Icon: `check` at `w-8 h-8 text-emerald`
- Auto-close: Modal closes after 3 seconds
- Layout: `text-center`

---

## Returning Shopper Flow

### BalanceCheck

**Priority:** P0  
**Description:** Loading state while checking connected program balances

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `message` | `string` | `'Checking your buying power...'` | Loading message |

**Specifications:**
- Layout: `text-center py-8`
- Spinner: `Spinner` component, `w-8 h-8`
- Message: `text-intaglio/60 text-sm mt-4`
- Duration: Typically 2-5 seconds

---

### BucketSelection

**Priority:** P0  
**Description:** Payment strategy selection (Best Value, Expiring Soon, Most Available)

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `buckets` | `PaymentBucket[]` | — | Available payment strategies |
| `selected` | `string` | — | Selected bucket ID |
| `onChange` | `(bucketId: string) => void` | — | Selection handler |
| `cartTotal` | `number` | — | Cart amount for display |
| `onPay` | `() => void` | — | Pay button handler |
| `isLoading` | `boolean` | `false` | Payment in progress |

**PaymentBucket Type:**
```typescript
interface PaymentBucket {
  id: string;
  name: 'best_value' | 'expiring_soon' | 'most_available';
  label: string; // "Best Value"
  description: string; // "Optimized for maximum purchasing power"
  isRecommended?: boolean;
}
```

**Content:**
1. Headline (TODO: Compelling copy)
2. Radio button list of buckets
3. Pay button with cart total

**Bucket Display:**
- Radio button: Custom styled, `w-5 h-5`
- Label: `text-intaglio text-sm font-semibold`
- Description: `text-intaglio/50 text-xs`
- Recommended badge: `Badge` component, success variant

**Specifications:**
- Bucket container: `border border-intaglio/15 p-4 rounded cursor-pointer`
- Selected: `border-intaglio bg-intaglio/5`
- Pay button: Button solid variant, full width
- Pay button text: `Pay $110.57`

**Key Design Decision:**
- NO program names shown
- NO dollar amounts per bucket
- NO point counts
- Just strategic choices

---

### PaymentProcessing

**Priority:** P0  
**Description:** Transaction processing state

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `message` | `string` | `'Processing your payment...'` | Status message |

**Specifications:**
- Layout: `text-center py-8`
- Spinner: `Spinner` component, `w-10 h-10`
- Message: `text-intaglio text-base font-medium mt-4`
- Duration: Typically 1-3 seconds
- Note: Fallback logic is invisible to user

---

### PaymentSuccess

**Priority:** P0  
**Description:** Successful payment confirmation with program reveal

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `order` | `OrderConfirmation` | — | Order details |
| `program` | `RevealedProgram` | — | Program used for payment |
| `onDone` | `() => void` | — | Done handler |

**OrderConfirmation Type:**
```typescript
interface OrderConfirmation {
  orderId: string;
  amount: number; // cents
  merchantName: string;
  timestamp: Date;
}
```

**RevealedProgram Type:**
```typescript
interface RevealedProgram {
  name: string; // "Sephora Beauty Insider"
  logo?: string;
  brandColor: string;
  initials: string;
}
```

**Content:**
1. Success message (TODO: Profound value framing)
2. "This purchase courtesy of your [Program] account"
3. Program logo (large, prominent)
4. Order details:
   - Order ID
   - Total Amount
   - Merchant
   - Date & Time
5. Done button

**Specifications:**
- Headline: `text-intaglio text-xl font-bold headline`
- Program attribution: `text-intaglio/70 text-sm`
- Program logo: `Avatar` xl size with brand color
- Order details: `text-intaglio/50 text-xs` list
- Done button: Button solid variant

**Key Design Decision:**
- This is the FIRST TIME shopper sees which program was used
- Program logo is the hero element
- Marketing moment for the redeeming brand

---

### PaymentError

**Priority:** P0  
**Description:** Payment failure state with fallback options

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `message` | `string` | — | Error message |
| `onRetry` | `() => void` | — | Retry handler (if applicable) |
| `onUseCard` | `() => void` | — | Fallback to card handler |

**Content:**
1. Error icon
2. Headline: "Transaction failed"
3. Message: "Please use another payment method."
4. Actions:
   - Retry (if applicable)
   - Use Card/PayPal Instead

**Specifications:**
- Icon container: `w-16 h-16 rounded-full bg-magenta/10 mx-auto mb-4`
- Icon: `x` at `w-8 h-8 text-magenta`
- Headline: `text-intaglio text-xl font-bold headline`
- Message: `text-intaglio/60 text-sm`
- Primary action: Button outline variant
- Layout: `text-center`

---

### InsufficientPrograms

**Priority:** P1  
**Description:** State when shopper doesn't have enough connected programs

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `required` | `number` | — | Programs needed |
| `current` | `number` | — | Currently connected |
| `onConnect` | `() => void` | — | Connect more handler |
| `onUseCard` | `() => void` | — | Use card handler |

**Content:**
1. Icon
2. Headline: "Connect more programs to unlock"
3. Description: "Connect X more programs to start buying with rewards"
4. Actions:
   - Connect Programs (primary)
   - Use Card/PayPal Instead (secondary)

**Specifications:**
- Similar layout to `PaymentError`
- Icon: `lock` or `plus`
- Primary: Button solid variant
- Secondary: Button outline variant

---

## Shared Checkout Components

### Spinner

**Priority:** P0  
**Description:** Loading spinner for async states

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Spinner size |
| `color` | `'default' \| 'inverse'` | `'default'` | Color scheme |

**Sizes:**
| Size | Dimensions |
|------|------------|
| `sm` | `w-4 h-4` |
| `md` | `w-8 h-8` |
| `lg` | `w-12 h-12` |

**Colors:**
| Color | Stroke |
|-------|--------|
| `default` | `intaglio` |
| `inverse` | `ledger` |

**Specifications:**
- SVG-based spinner
- Animation: `spin 1s linear infinite`
- Stroke width: 2-3 depending on size

---

### TextInput

**Priority:** P0  
**Description:** Standard text input following Saltwyk styling

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | `''` | Input value |
| `onChange` | `(value: string) => void` | — | Change handler |
| `placeholder` | `string` | — | Placeholder text |
| `label` | `string` | — | Input label |
| `error` | `string` | — | Error message |
| `icon` | `IconName` | — | Leading icon |
| `disabled` | `boolean` | `false` | Disabled state |
| `type` | `'text' \| 'email' \| 'url'` | `'text'` | Input type |

**Specifications:**
- Border: `border border-intaglio/20`
- Background: `white`
- Padding: `py-3 px-4` (or `pl-11` with icon)
- Font: `text-intaglio text-sm`
- Placeholder: `text-intaglio/40`
- Focus: `border-intaglio outline-none`
- Error border: `border-magenta`
- Error message: `text-magenta text-xs mt-1`
- Label: `text-intaglio/70 text-sm font-medium mb-2`
- Icon: `absolute left-4 text-intaglio/30`

---

### RadioOption

**Priority:** P0  
**Description:** Custom styled radio button for bucket selection

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `selected` | `boolean` | `false` | Selection state |
| `label` | `string` | — | Option label |
| `description` | `string` | — | Option description |
| `badge` | `string` | — | Optional badge text |
| `onClick` | `() => void` | — | Click handler |
| `disabled` | `boolean` | `false` | Disabled state |

**Specifications:**
- Container: `border border-intaglio/15 p-4 rounded cursor-pointer`
- Selected: `border-intaglio bg-intaglio/5`
- Radio circle: `w-5 h-5 rounded-full border-2`
- Radio selected: `border-intaglio` with inner dot
- Radio unselected: `border-intaglio/30`
- Hover: `border-intaglio/30`
- Label: `text-intaglio text-sm font-semibold`
- Description: `text-intaglio/50 text-xs`

---

## Animation Tokens

### Transitions

```css
/* Standard transition */
.transition-default {
  transition: all 0.15s ease;
}

/* Hover scale */
.hover-scale:hover {
  transform: scale(1.1);
}
```

### Keyframes

```css
/* Pulse dot animation */
@keyframes pulse-dot {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

/* Celebration pop */
@keyframes celebrate-pop {
  0% { transform: scale(0.8); opacity: 0; }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); opacity: 1; }
}

/* Mystery box glow */
@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 20px rgba(212, 175, 55, 0.3); }
  50% { box-shadow: 0 0 40px rgba(212, 175, 55, 0.6); }
}
```

---

## Component Dependencies

### Passport Home
```
PageContainer
├── Header
│   └── Avatar
└── [Page Content]
    ├── HeroCard
    │   ├── StatusIndicator
    │   ├── Sparkline (medium/low states)
    │   └── Button (ghost variant)
    ├── DropCard
    │   ├── Badge
    │   ├── Avatar
    │   └── Button (solid variant)
    ├── SectionCard (Wishlist)
    │   ├── FilterTabs
    │   └── WishlistCard
    │       ├── Thumbnail
    │       └── ProgressRing
    ├── SectionCard (Snagged)
    │   ├── FilterTabs
    │   └── SnaggedRow
    │       ├── Thumbnail
    │       └── Badge
    └── SectionCard (Merchants)
        ├── FilterTabs
        ├── MerchantRow
        │   ├── Avatar
        │   └── StarToggle
        └── Button (dashed variant)
```

### Merchant Detail (Connected)
```
PageContainer
├── BackLink
├── BrandIdentityHeader
│   ├── Avatar (xl, rounded)
│   └── StarToggle
├── Alert (warning: expiration, protected: starred)
├── SectionCard (Wishlist at Merchant)
│   └── MerchantWishlistCard
│       ├── Thumbnail
│       ├── ProgressRing
│       └── Button (snag CTA)
├── SectionCard (Snagged)
│   └── SnaggedRow
└── Button (solid: Shop Merchant)
```

### Merchant Detail (Unconnected)
```
PageContainer
├── BackLink
├── BrandIdentityHeader (muted state)
├── ConnectionPitch
│   ├── EmptyState icon
│   └── Button (solid: Connect)
└── PreviewGrid
    └── Thumbnail (icon only)
```

### Bottom Sheets
```
BottomSheet
├── AddItemSheet
│   ├── TextInput (with icon)
│   ├── ItemPreview card
│   └── Button (solid)
└── EditItemSheet
    ├── MerchantWishlistCard
    ├── MerchantProgress list
    └── Button (outline, destructive)
```

### Celebration Flow
```
SuccessState
├── Avatar (xl, celebrate-pop)
├── MysteryBox (pulse-glow)
└── Button (link: Skip)

RevealState
├── Badge (success: Bonus Unlocked)
├── Reward display
├── NextMerchant card
│   ├── Avatar
│   └── Button (solid)
└── Button (link: Done)
```

### Checkout: First-Time Flow
```
CheckoutModal
├── CheckoutHeader
└── [Step Content]
    ├── ValueProposition
    │   ├── PhoneInput
    │   └── Button (solid)
    ├── OTPVerification
    │   ├── OTPInput
    │   └── Resend link
    ├── NameCapture
    │   ├── TextInput
    │   ├── Button (solid: Setup Now)
    │   └── Button (outline: Text Me Link)
    └── LeadCaptureSuccess
        └── Auto-close timer
```

### Checkout: Returning Shopper Flow
```
CheckoutModal
├── CheckoutHeader
└── [Step Content]
    ├── OTPVerification
    │   └── OTPInput
    ├── BalanceCheck
    │   └── Spinner
    ├── BucketSelection
    │   ├── RadioOption (Best Value)
    │   ├── RadioOption (Expiring Soon)
    │   ├── RadioOption (Most Available)
    │   └── Button (solid: Pay $X)
    ├── PaymentProcessing
    │   └── Spinner
    ├── PaymentSuccess
    │   ├── Avatar (program logo)
    │   └── Order details
    └── PaymentError
        └── Button (outline: Use Card)
```

---

## Implementation Checklist

### Phase 1: Foundation (P0)
- [ ] Icon wrapper component
- [ ] Avatar component
- [ ] Button (all variants)
- [ ] Thumbnail component
- [ ] Spinner component

### Phase 2: Form Inputs (P0)
- [ ] TextInput component
- [ ] PhoneInput component
- [ ] OTPInput component
- [ ] RadioOption component

### Phase 3: Data Display (P0)
- [ ] ProgressRing component
- [ ] StatusIndicator component
- [ ] Badge component

### Phase 4: Interactive (P0)
- [ ] FilterTabs component
- [ ] StarToggle component
- [ ] BackLink component

### Phase 5: List Items (P0)
- [ ] MerchantRow component
- [ ] SnaggedRow component
- [ ] WishlistCard component
- [ ] MerchantWishlistCard component

### Phase 6: Passport Containers (P0)
- [ ] PageContainer component
- [ ] Header component
- [ ] SectionCard component
- [ ] HeroCard component
- [ ] BrandIdentityHeader component
- [ ] ConnectionPitch component

### Phase 7: Passport Overlays (P0)
- [ ] BottomSheet component
- [ ] AddItemSheet component
- [ ] EditItemSheet component

### Phase 8: Checkout Container (P0)
- [ ] CheckoutModal component
- [ ] CheckoutHeader component

### Phase 9: Checkout First-Time Flow (P0)
- [ ] ValueProposition component
- [ ] OTPVerification component
- [ ] NameCapture component
- [ ] LeadCaptureSuccess component

### Phase 10: Checkout Returning Flow (P0)
- [ ] BalanceCheck component
- [ ] BucketSelection component
- [ ] PaymentProcessing component
- [ ] PaymentSuccess component
- [ ] PaymentError component

### Phase 11: Enhancement (P1)
- [ ] Sparkline component
- [ ] DropCard component
- [ ] Alert component
- [ ] EmptyState component
- [ ] PreviewGrid component
- [ ] InsufficientPrograms component

### Phase 12: Celebration (P1)
- [ ] SuccessState component
- [ ] MysteryBox component
- [ ] RevealState component

---

## Open Questions

1. **Icon library:** Continue with Lucide, or evaluate alternatives?
2. **Avatar images:** Support for merchant logos vs. always initials?
3. **Loading states:** Skeleton patterns for each component?
4. **Dark mode:** Is this planned? (Current design is light-only)
5. **Animation library:** Framer Motion for complex animations?
6. **Checkout modal vs bottom sheet:** Same component with responsive behavior, or separate?
7. **OTP auto-submit:** Submit automatically on 6th digit, or require button click?

---

## Next Steps

1. ✅ Shopper Passport Home components defined
2. ✅ Merchant Detail components defined
3. ✅ Checkout flow components defined
4. 🔲 Add Program Connection flow components
5. 🔲 Create visual HTML examples for design system
6. 🔲 Prioritize based on February demo requirements

---

**Document Status:** Draft  
**Completed:** Passport Home, Merchant Detail, Checkout Widget  
**Next Section:** Program Connection flow components
