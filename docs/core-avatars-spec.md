# Avatar Component Specification

## Philosophy

- Avatars represent people and entities in the interface
- They provide visual identity and recognition at a glance
- Fallbacks must be graceful—initials or generic icon when no image available

---

## Anatomy

- **Container** — Circular or rounded frame
- **Image** — User photo or logo
- **Fallback** — Initials or icon when no image
- **Status indicator** — Optional online/offline dot
- **Badge** — Optional count or notification

---

## Base Specifications

| Property | Value |
|----------|-------|
| Shape | Circle (default) or rounded square |
| Border radius (circle) | 9999px (full) |
| Border radius (square) | 20% of size |
| Border | Optional, 2px `white` or `intaglio-900` |
| Font family (initials) | Inter |
| Font weight (initials) | 600 |

---

## Size Scale

| Size | Dimensions | Font Size (initials) | Icon Size (fallback) | Use Case |
|------|------------|---------------------|---------------------|----------|
| XS | 24px | 10px | 12px | Dense lists, inline mentions |
| SM | 32px | 12px | 16px | Comments, compact lists |
| MD | 40px | 14px | 20px | Default, navigation, cards |
| LG | 48px | 16px | 24px | Profile headers, featured |
| XL | 64px | 20px | 28px | Profile pages, hero areas |
| 2XL | 96px | 28px | 40px | Account settings, large profiles |

---

## Avatar Types

### Image Avatar

- Display user-uploaded photo or logo
- Object-fit: cover
- Object-position: center

### Initials Avatar

When no image available, show initials.

**Initial generation:**
- Single name: First letter ("John" → "J")
- Two names: First letter of each ("John Doe" → "JD")
- Three+ names: First and last initials ("John Michael Doe" → "JD")
- Max characters: 2

**Background colors (rotate based on name hash):**

| Index | Light Background | Dark Background | Text Color |
|-------|------------------|-----------------|------------|
| 0 | `emerald-100` | `emerald-500/20` | `emerald-700` / `emerald-400` |
| 1 | `cyan-100` | `cyan-500/20` | `cyan-700` / `cyan-400` |
| 2 | `orange-100` | `orange-500/20` | `orange-700` / `orange-400` |
| 3 | `magenta-100` | `magenta-500/20` | `magenta-700` / `magenta-400` |
| 4 | `warm-200` | `warm-500/20` | `warm-700` / `warm-400` |

### Icon Avatar

Generic placeholder when no name available.

- Icon: User silhouette (16-40px based on avatar size)
- Background: `warm-100` (light) / `intaglio-700` (dark)
- Icon color: `warm-400` (light) / `warm-500` (dark)

---

## Avatar States — Light Mode

| State | Border | Shadow |
|-------|--------|--------|
| Default | none | none |
| Hover (interactive) | none | `0 0 0 2px warm-200` |
| Focus (interactive) | `2px emerald-500` ring | none |
| Selected | `2px emerald-500` | none |

---

## Avatar States — Dark Mode

| State | Border | Shadow |
|-------|--------|--------|
| Default | none | none |
| Hover (interactive) | none | `0 0 0 2px intaglio-600` |
| Focus (interactive) | `2px emerald-500` ring | none |
| Selected | `2px emerald-500` | none |

---

## Status Indicator

Small dot showing online/offline/busy status.

### Position

- Bottom-right corner of avatar
- Offset: 10% inward from edge

### Sizes (relative to avatar)

| Avatar Size | Indicator Size |
|-------------|----------------|
| XS (24px) | 6px |
| SM (32px) | 8px |
| MD (40px) | 10px |
| LG (48px) | 12px |
| XL (64px) | 14px |
| 2XL (96px) | 16px |

### Status Colors

| Status | Color |
|--------|-------|
| Online/Active | `emerald-500` |
| Away/Idle | `orange-500` |
| Busy/DND | `magenta-500` |
| Offline | `warm-400` |

### Border

- 2px border matching background (`white` on light, `intaglio-900` on dark)
- Creates visual separation from avatar

---

## Avatar with Badge

Notification count badge on avatar.

### Position

- Top-right corner
- Offset: Overlapping edge by 25%

### Badge Style

- Same as count badge from `core-badges.html`
- Min size: 16px
- Background: `magenta-500` (notifications) or semantic color
- Text: `white`, 10px font
- Border: 2px `white` / `intaglio-900`

---

## Avatar Group

Multiple avatars stacked/overlapping.

### Horizontal Stack

- Avatars overlap by 25-30% of width
- Later avatars appear on top (higher z-index)
- Border between avatars: 2px `white` / `intaglio-900`

### Maximum Display

- Show first N avatars (typically 3-5)
- Overflow indicator: "+3" in avatar-sized circle
- Overflow background: `warm-100` (light) / `intaglio-700` (dark)
- Overflow text: `warm-600` / `warm-300`

### Spacing

| Avatar Size | Overlap |
|-------------|---------|
| SM (32px) | -8px margin |
| MD (40px) | -10px margin |
| LG (48px) | -12px margin |

---

## Contextual Examples to Build

1. **User Navigation** — MD avatar with dropdown trigger in header/sidebar
2. **Comment Thread** — SM avatars with names and timestamps
3. **Team List** — Avatar group showing 4 members + "+3" overflow
4. **Profile Header** — XL avatar with name, role, status indicator
5. **Activity Feed** — SM avatars with action descriptions
6. **Avatar on Dark** — All sizes on intaglio-900 background

---

## Code Reference

### Base Avatar

```css
.avatar {
  @apply relative inline-flex items-center justify-center;
  @apply rounded-full overflow-hidden;
  @apply bg-warm-100;
}

.avatar-xs { @apply w-6 h-6; }
.avatar-sm { @apply w-8 h-8; }
.avatar-md { @apply w-10 h-10; }
.avatar-lg { @apply w-12 h-12; }
.avatar-xl { @apply w-16 h-16; }
.avatar-2xl { @apply w-24 h-24; }
```

### Avatar Image

```css
.avatar-image {
  @apply w-full h-full object-cover;
}
```

### Avatar Initials

```css
.avatar-initials {
  @apply font-semibold text-emerald-700;
}

.avatar-xs .avatar-initials { @apply text-[10px]; }
.avatar-sm .avatar-initials { @apply text-xs; }
.avatar-md .avatar-initials { @apply text-sm; }
.avatar-lg .avatar-initials { @apply text-base; }
.avatar-xl .avatar-initials { @apply text-xl; }
.avatar-2xl .avatar-initials { @apply text-[28px]; }

/* Color variants */
.avatar-initials-emerald { @apply bg-emerald-100 text-emerald-700; }
.avatar-initials-cyan { @apply bg-cyan-100 text-cyan-700; }
.avatar-initials-orange { @apply bg-orange-100 text-orange-700; }
.avatar-initials-magenta { @apply bg-magenta-100 text-magenta-700; }
.avatar-initials-neutral { @apply bg-warm-200 text-warm-700; }
```

### Avatar Fallback Icon

```css
.avatar-fallback {
  @apply bg-warm-100 text-warm-400;
}

.avatar-fallback-dark {
  @apply bg-intaglio-700 text-warm-500;
}
```

### Status Indicator

```css
.avatar-status {
  @apply absolute bottom-0 right-0;
  @apply rounded-full border-2 border-white;
}

.avatar-md .avatar-status { @apply w-2.5 h-2.5; }
.avatar-lg .avatar-status { @apply w-3 h-3; }

.avatar-status-online { @apply bg-emerald-500; }
.avatar-status-away { @apply bg-orange-500; }
.avatar-status-busy { @apply bg-magenta-500; }
.avatar-status-offline { @apply bg-warm-400; }
```

### Avatar Group

```css
.avatar-group {
  @apply flex -space-x-2;
}

.avatar-group .avatar {
  @apply border-2 border-white;
}

.avatar-group-overflow {
  @apply flex items-center justify-center;
  @apply bg-warm-100 text-warm-600 text-xs font-medium;
  @apply rounded-full border-2 border-white;
}
```

---

## Implementation Checklist

### Base

- [ ] Sizes: 24px, 32px, 40px, 48px, 64px, 96px
- [ ] Shape: Circle default, rounded square optional
- [ ] Object-fit: cover for images

### Initials

- [ ] Max 2 characters
- [ ] 5 color variants (emerald, cyan, orange, magenta, neutral)
- [ ] Deterministic color from name hash
- [ ] Font weight: 600

### Fallback

- [ ] Generic user icon
- [ ] Appropriate icon sizing per avatar size

### Status

- [ ] Position: bottom-right
- [ ] Colors: emerald (online), orange (away), magenta (busy), warm (offline)
- [ ] Border: 2px matching background

### Avatar group

- [ ] Overlap: 25-30%
- [ ] Border between avatars
- [ ] Overflow indicator: "+N"

### Dark mode

- [ ] Initials: semantic-500/20 backgrounds
- [ ] Fallback: intaglio-700 background
- [ ] Status border: intaglio-900
