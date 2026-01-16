# Shopper Surface Color Strategy

## Surface Identity

**Product:** Shopper Passport & Wallet
**Character:** Consumer-friendly, approachable, trustworthy
**Opal Treatment:** Bright Opal — warm paper, soft thread tints

---

## Thread Family: Cool (Cyan → Magenta)

The Cool thread family represents vibrant energy, celebration, and delight. It signals "your rewards are valuable" without the corporate weight of emerald.

### Thread Gradient

```css
--thread-cool: linear-gradient(90deg, hsl(170 100% 50%), hsl(330 100% 50%));
```

- **Start:** Cyan thread `hsl(170 100% 50%)`
- **End:** Magenta thread `hsl(330 100% 50%)`

---

## Color Palette

### Primary Accent: Cyan

Used for non-interactive emphasis, badges, icons, and decorative elements.

| Token | Value | Use |
|-------|-------|-----|
| `cyan-50` | `hsl(170 50% 96%)` | Card backgrounds, subtle fills |
| `cyan-100` | `hsl(170 55% 90%)` | Hover states, borders |
| `cyan-200` | `hsl(170 60% 80%)` | Soft accents |
| `cyan-400` | `hsl(170 85% 50%)` | Icons, badges |
| `cyan-500` | `hsl(170 100% 40%)` | Strong accents |
| `cyan-600` | `hsl(170 100% 32%)` | Text on light backgrounds |
| `cyan-700` | `hsl(170 100% 25%)` | Dark text |

### Secondary Accent: Magenta

Used sparingly for warmth, alerts, and complementary accents.

| Token | Value | Use |
|-------|-------|-----|
| `magenta-50` | `hsl(330 50% 97%)` | Subtle backgrounds |
| `magenta-100` | `hsl(330 55% 92%)` | Hover states |
| `magenta-400` | `hsl(330 80% 60%)` | Icons, accents |
| `magenta-500` | `hsl(330 85% 50%)` | Strong accents |
| `magenta-600` | `hsl(330 90% 42%)` | Error states, destructive |

### Interactive: Emerald (Restricted)

Emerald appears ONLY on interactive elements.

| Element | Token |
|---------|-------|
| Primary buttons | `emerald-500` background |
| Text links | `emerald-600` text |
| Focus rings | `emerald-500` ring |
| Active nav | `emerald-500` indicator |
| Selected states | `emerald-50` background, `emerald-600` border |

### Neutral: Warm Grays

| Token | Use |
|-------|-----|
| `ledger` | Page background |
| `white` | Card backgrounds |
| `warm-50` | Subtle backgrounds, hover |
| `warm-100` | Borders, dividers |
| `warm-200` | Stronger borders |
| `warm-300` | Input borders |
| `warm-400` | Placeholder text, icons |
| `warm-500` | Secondary text |
| `warm-600` | Body text |
| `ink` | Headlines, primary text |

---

## Thread Treatments

### Hero Thread (One per page max)

Full-strength Cool gradient for page headers and hero moments.

```css
.thread-hero {
  height: 3px;
  background: linear-gradient(90deg, hsl(170 100% 50%), hsl(330 100% 50%));
}
```

**Use for:**
- Page title underline
- Hero section accent
- Major celebration moments

### Accent Thread (Section emphasis)

Full-strength but thinner, for section headers.

```css
.thread-accent {
  height: 2px;
  background: linear-gradient(90deg, hsl(170 100% 50%), hsl(330 100% 50%));
}
```

**Use for:**
- Section dividers
- Card top borders (featured cards only)

### Tint Thread (Subtle emphasis)

Reduced saturation for quiet accents.

```css
.thread-tint {
  height: 2px;
  background: linear-gradient(90deg, hsl(170 60% 70%), hsl(330 60% 75%));
}
```

**Use for:**
- Standard card top borders
- Table section dividers
- Navigation group dividers

### Mono Thread (Single color)

When gradient feels too busy.

```css
.thread-mono-cyan {
  height: 2px;
  background: hsl(170 100% 40%);
}

.thread-mono-magenta {
  height: 2px;
  background: hsl(330 85% 50%);
}
```

**Use for:**
- Table header underlines
- Simple dividers
- Status-specific accents

---

## Component Color Mapping

### Cards

| Card Type | Border | Background | Thread |
|-----------|--------|------------|--------|
| Default | `warm-200` | `white` | None |
| Featured | `warm-200` | `white` | Tint thread top |
| Program card | `warm-200` | `white` | Accent thread top |
| Metric card | `warm-200` | `white` | None |
| Selected | `emerald-500` | `emerald-50` | None |

### Badges

| Badge Type | Background | Text |
|------------|------------|------|
| Info/New | `cyan-100` | `cyan-700` |
| Success | `emerald-100` | `emerald-700` |
| Warning | `orange-100` | `orange-700` |
| Error | `magenta-100` | `magenta-700` |
| Neutral | `warm-100` | `warm-700` |

### Navigation

| State | Background | Text | Indicator |
|-------|------------|------|-----------|
| Default | transparent | `warm-600` | None |
| Hover | `warm-50` | `ink` | None |
| Active | `emerald-50` | `emerald-700` | `emerald-500` left border |

### Tables

| Element | Treatment |
|---------|-----------|
| Header background | `warm-50` |
| Header text | `warm-600` |
| Header underline | Mono cyan thread OR `warm-200` |
| Row border | `warm-100` |
| Row hover | `warm-50` |
| Selected row | `emerald-50`, `emerald-500` left border |

### Buttons

| Variant | Shopper Treatment |
|---------|-------------------|
| Primary | `emerald-500` (standard) |
| Secondary | `warm-200` background, `warm-300` border |
| Ghost | transparent, `ink` text |
| Outline | transparent, `warm-300` border |
| Destructive | `magenta-500` background |

---

## Gradient Fills (Backgrounds & Surfaces)

### Tint Backgrounds

For hero sections and featured areas.

```css
.bg-cool-tint {
  background: linear-gradient(135deg, hsl(170 50% 96%), hsl(330 50% 97%));
}
```

### Surface Wash

Very subtle, for page sections.

```css
.bg-cool-wash {
  background: linear-gradient(180deg, hsl(170 30% 98%), hsl(48 29% 95%));
}
```

---

## Dark Mode (Shopper on Dark)

When shopper components appear on dark backgrounds (e.g., marketing pages):

| Element | Light Mode | Dark Mode |
|---------|------------|-----------|
| Card background | `white` | `intaglio-800` |
| Card border | `warm-200` | `intaglio-700` |
| Text primary | `ink` | `warm-100` |
| Text secondary | `warm-600` | `warm-400` |
| Cyan accent | `cyan-600` | `cyan-400` |
| Thread | 100% saturation | 100% saturation (glows) |
| Emerald interactive | `emerald-500` | `emerald-400` |

---

## Usage Examples

### Page Header with Hero Thread

```html
<header>
  <h1 class="text-2xl font-display text-ink">Your Rewards</h1>
  <div class="thread-hero mt-2 w-32"></div>
</header>
```

### Program Card with Accent Thread

```html
<div class="card">
  <div class="thread-accent"></div>
  <div class="p-4">
    <div class="flex items-center gap-3">
      <img src="program-logo.png" class="w-12 h-12 rounded-lg">
      <div>
        <p class="font-semibold text-ink">Target Circle</p>
        <p class="text-sm text-warm-500">Connected</p>
      </div>
    </div>
  </div>
</div>
```

### Info Badge

```html
<span class="px-2 py-1 text-xs font-medium bg-cyan-100 text-cyan-700 rounded-full">
  New
</span>
```

---

## What NOT to Use

| Element | Don't Use | Why |
|---------|-----------|-----|
| Decorative borders | Emerald | Reserved for interactive |
| Every card | Thread accent | Loses impact |
| Body text | Cyan/Magenta | Hard to read |
| Backgrounds | Full saturation colors | Too intense |
| Multiple threads | Full spectrum | Reserved for brand moments |

---

## Validation Checklist

- [ ] Emerald only appears on interactive elements
- [ ] Maximum one hero thread per page
- [ ] Thread accents used on 1-2 featured elements, not all
- [ ] Badges use cyan/magenta, not emerald (except success)
- [ ] Page feels warm and approachable, not corporate
- [ ] Cool thread family creates consistent identity
