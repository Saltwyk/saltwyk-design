# Design System Investigation Report

## 1. Structure & Organization

### Directory Structure
```
/saltwyk-design/
├── /shopper/              # Shopper Passport product (Bright Opal theme)
│   ├── /components/       # Shopper-specific components
│   ├── /merchant-management/  # Merchant connection UI
│   ├── /screens/          # Full page compositions
│   └── /settings/         # Settings pages
├── /merchant/             # Merchant Dashboard product (Fire Opal theme)
│   └── /screens/          # Dashboard screens
├── /core/                 # Core design system
│   ├── /components/       # Shared component library
│   └── /tokens/           # Design token documentation
├── /partials/             # Shared navigation HTML + JS
├── /assets/config/        # CSS tokens & Tailwind config
├── /docs/                 # Specifications & documentation
└── /marketing/            # Marketing pages
```

### File Naming Convention
- **Product pages:** `/[shopper|merchant]/[feature]/[page].html`
- **Components:** `/[shopper|core]/components/[type]/[variant].html`
- **Screens:** `/[product]/screens/[screen-name].html`
- **Specs:** `/docs/[surface]-[feature]-spec.md`

### HTML Template Pattern
All pages follow this consistent structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Fonts: Fraunces (display), Inter (body), Outfit (brand) -->
    <link href="https://fonts.googleapis.com/css2?family=Fraunces...&family=Inter...&family=Outfit..." rel="stylesheet">

    <!-- Tailwind CDN + Custom Config -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="/assets/config/tailwind.config.js"></script>
    <link rel="stylesheet" href="/assets/config/design-tokens.css">
</head>
<body>
    <!-- Navigation: Dynamically loaded -->
    <div id="top-nav"></div>

    <div class="flex">
        <div id="side-nav"></div>
        <main class="flex-1">
            <!-- Thread line divider -->
            <div class="h-[3px] w-full thread-line"></div>

            <!-- Breadcrumb -->
            <nav class="breadcrumb">...</nav>

            <!-- Content -->
            <main class="max-w-6xl mx-auto p-8">...</main>
        </main>
    </div>

    <!-- Navigation Script -->
    <script src="/partials/nav-loader.js"></script>
</body>
</html>
```

### Shared CSS/JS Files
| File | Purpose |
|------|---------|
| `/assets/config/design-tokens.css` | CSS custom properties (442 lines) |
| `/assets/config/tailwind.config.js` | Tailwind configuration (380 lines) |
| `/assets/config/view-toggle.css` | Light/dark mode toggle styles |
| `/partials/top-nav.html` | Horizontal navigation bar |
| `/partials/side-nav.html` | Sidebar navigation (unified) |
| `/partials/nav-loader.js` | Navigation initialization (429 lines) |

---

## 2. Existing Merchant Documentation

### What Exists

| File Path | Content | Status |
|-----------|---------|--------|
| `/merchant/index.html` | Product overview page | Complete |
| `/merchant/showcase.html` | Dashboard compositions | Complete |
| `/merchant/color-strategy.html` | Fire Opal strategy | Placeholder only |
| `/merchant/screens/dashboard.html` | Dashboard screen | Complete |

### Merchant Specification Docs
- `/docs/merchant-management-spec.md` - Merchant discovery/connection specs
- `/docs/merchant-app-design-plan.md` - High-level merchant app strategy
- `/docs/merchant-app-jobs-to-be-done (1).md` & `(2).md` - Feature prioritization
- `/docs/merchant-onboarding-design-spec.md` - Signup/onboarding flows

### What's Missing for Onboarding
1. **Onboarding Flow Pages** - No design system pages for:
   - Signup/registration screens
   - Business verification steps
   - Integration setup wizard
   - Welcome/getting started guide

2. **Merchant-Specific Components** - Not yet documented:
   - Onboarding stepper/progress
   - Verification status indicators
   - Setup checklist cards
   - Integration code snippets
   - API key management UI

3. **Fire Opal Color Strategy** - The `/merchant/color-strategy.html` is just a placeholder

---

## 3. Fire Opal Design Tokens

### Token Locations
- **Main file:** `/assets/config/design-tokens.css`
- **Tailwind config:** `/assets/config/tailwind.config.js`

### Core Colors for Merchant UI

**Base Colors:**
```css
--ledger: 48 29% 95%;     /* Light background */
--ink: 24 29% 8%;         /* Dark text / merchant background */
```

**Intaglio Scale (Merchant Dark Theme):**
```css
--intaglio-50: 24 20% 96%;
--intaglio-100: 24 20% 92%;
--intaglio-200: 24 20% 85%;
--intaglio-300: 24 20% 70%;
--intaglio-400: 24 22% 52%;
--intaglio-500: 24 25% 35%;
--intaglio-600: 24 27% 25%;
--intaglio-700: 24 28% 18%;
--intaglio-800: 24 29% 12%;
--intaglio-900: 24 29% 8%;   /* Primary merchant background */
--intaglio-950: 24 30% 5%;
```

**Primary Action (Emerald):**
```css
--emerald-500: 150 100% 27%;  /* Primary CTA */
--emerald-600: 150 100% 22%;  /* Hover state */
--emerald-700: 150 100% 18%;  /* Active state */
```

**Thread Colors (Decorative Only):**
```css
--cyan-thread: hsl(170 100% 50%);
--magenta-thread: hsl(330 100% 50%);
--lime-thread: hsl(74 100% 60%);
--orange-thread: hsl(20 100% 50%);
```

### Thread Gradient Definitions
```css
/* Full spectrum */
.thread-line {
  background: linear-gradient(90deg,
    hsl(170 100% 50%) 0%,   /* Cyan */
    hsl(74 100% 50%) 25%,    /* Lime */
    hsl(20 100% 50%) 50%,    /* Orange */
    hsl(330 100% 50%) 75%,   /* Magenta */
    hsl(170 100% 50%) 100%   /* Cyan */
  );
}

/* Named thread pairs */
.thread-fresh { /* Cyan → Lime */ }
.thread-cool { /* Cyan → Magenta */ }
.thread-flame { /* Orange → Magenta */ }
.thread-tropic { /* Orange → Cyan */ }
.thread-warm { /* Lime → Orange */ }
```

### Merchant Hero Gradient
```css
.gradient-hero-intaglio {
  background: linear-gradient(135deg,
    hsl(24 29% 12%) 0%,      /* intaglio-800 */
    hsl(24 28% 18%) 40%,     /* intaglio-700 */
    hsl(24 29% 8%) 100%      /* intaglio-900 */
  );
}
```

### Typography
| Role | Font | Weights |
|------|------|---------|
| Display | Fraunces (serif) | 100-900, italic |
| Body/UI | Inter (sans) | 400-700 |
| Brand | Outfit (sans) | 600 |

### Spacing & Radius
```css
--radius: 0.5rem;  /* 8px default */
/* Borders: 1px, 1.5px (default), 2px (emphasis) */
```

---

## 4. Navigation Architecture

### Top Navigation Structure
```
Home
├── Foundation (dropdown)
│   ├── Tokens → Colors, Typography, Spacing, Shadows, Borders
│   ├── Brand → Logo, Thread
│   └── Principles → Color Strategy, Accessibility
├── Components (link) → /core/components/
├── Products (dropdown)
│   ├── Shopper Passport
│   │   ├── Overview
│   │   ├── Color Strategy
│   │   └── Components
│   └── Merchant Dashboard
│       ├── Overview
│       ├── Color Strategy
│       └── Showcase
└── Resources (dropdown)
    ├── Getting Started
    ├── Changelog
    └── Figma
```

### Sidebar Navigation (Section-Based)
The sidebar uses `data-section` attributes and shows/hides based on URL path:
- `/shopper/*` → Shows shopper section
- `/merchant/*` → Shows merchant section
- `/core/*` → Shows components section

### Current Merchant Sidebar
```
Merchant Dashboard
├── Overview
├── Color Strategy
├── Showcase
└── Screens
    └── Dashboard
```

### Where Onboarding Would Fit
```
Merchant Dashboard
├── Overview
├── Color Strategy
├── Showcase
├── Onboarding (NEW)           ← New section
│   ├── Overview               ← Landing page
│   ├── Flow Documentation     ← Step-by-step flows
│   ├── Signup Components      ← Form patterns
│   ├── Verification States    ← Status indicators
│   ├── Integration Wizard     ← Setup UI
│   └── Getting Started        ← Welcome experience
└── Screens
    └── Dashboard
```

### URL Structure Pattern
Following existing conventions:
- `/merchant/onboarding/index.html` - Overview
- `/merchant/onboarding/signup.html` - Signup components
- `/merchant/onboarding/verification.html` - Verification states
- `/merchant/onboarding/integration.html` - Integration wizard
- `/merchant/onboarding/welcome.html` - Getting started

---

## 5. Reusable Component Patterns

### Can Reuse Directly (Already Built)

| Component | Location | Notes |
|-----------|----------|-------|
| Buttons | `/core/components/buttons/` | 5-tier hierarchy, all states |
| Inputs | `/core/components/inputs/` | Text, email, password, sizes |
| Cards | `/core/components/cards/` | Default, elevated, subtle, dark variants |
| Badges | `/core/components/badges/` | Success, warning, error, info |
| Progress | `/core/components/progress/` | Linear bars, circular, gradient |
| Modals | `/core/components/modals/` | Sizes sm→full, light/dark modes |
| Toasts | `/core/components/toasts/` | All notification types |
| Tabs | `/core/components/tabs/` | Horizontal with indicators |
| Breadcrumbs | `/core/components/navigation/breadcrumbs.html` | Arrow separator style |
| Accordion | `/core/components/accordion/` | Expandable sections |
| Dropdowns | `/core/components/dropdowns/` | Select, combobox, multi-select |
| Tables | `/core/components/tables/` | Base, interactive, responsive |
| Tooltips | `/core/components/tooltips/` | Hover hints |
| Avatars | `/core/components/avatars/` | Circular with fallback |

### Needs Merchant-Specific Variants

| Component | Existing | Merchant Variant Needed |
|-----------|----------|------------------------|
| Cards | Light theme | Dark theme with thread accents |
| Progress | Standard colors | Fire Opal gradient progress |
| Empty States | Shopper version | Merchant onboarding empty states |
| Filter Tabs | Indigo accent | Merchant color treatment |
| Form Groups | Basic styling | Merchant dark mode forms |

### Must Create New

| Component | Purpose | Priority |
|-----------|---------|----------|
| Onboarding Stepper | Multi-step progress indicator | High |
| Verification Badge | Business verification status | High |
| Setup Checklist | Integration task list | High |
| Code Snippet | API key display with copy | Medium |
| Integration Card | Service connection status | Medium |
| Welcome Hero | Getting started header | Medium |
| Milestone Marker | Onboarding progress milestone | Low |

---

## 6. Recommendations

### Build Order (Priority)

**Phase 1: Foundation**
1. Create `/merchant/onboarding/index.html` - Overview/landing page
2. Document Fire Opal dark theme patterns in `/merchant/color-strategy.html`
3. Add onboarding section to sidebar navigation

**Phase 2: Core Components**
4. Onboarding Stepper component - Multi-step progress
5. Verification Status badges - Business verification states
6. Dark mode form patterns - Input styling for merchant theme

**Phase 3: Flow Documentation**
7. Signup flow screens - Registration step-by-step
8. Verification flow screens - Document upload, status displays
9. Integration wizard screens - API setup, webhook config

**Phase 4: Polish**
10. Setup checklist component - Task completion tracking
11. Code snippet component - API key display
12. Welcome/getting started screen - First-time experience

### Key Patterns to Follow
1. Use existing `design-tokens.css` variables
2. Follow breadcrumb pattern: `Home → Merchant → Onboarding → [Page]`
3. Include thread line divider at top of content area
4. Use `data-section="merchant"` for sidebar visibility
5. Load navigation via `/partials/nav-loader.js`

### Files to Update
- `/partials/side-nav.html` - Add onboarding links to merchant section
- `/partials/top-nav.html` - Add onboarding to merchant dropdown (if desired)

---

## Appendix: Color Semantic Reference

| Color | Use For | Never Use For |
|-------|---------|---------------|
| Emerald | Primary CTAs, success | Info states |
| Indigo | Focus rings, links, info | Primary actions |
| Cyan | Thread gradients only | Interactive UI |
| Magenta | Error, destructive | Success states |
| Orange | Warning states | Info states |
| Warm Gray | Text, borders, backgrounds | Semantic meaning |
| Intaglio | Merchant dark surfaces | Shopper UI |
