# Astro Migration Evaluation

**Date:** January 2026
**Status:** Under consideration

---

## Current Architecture

The Saltwyk Design System is a static HTML site with no build step:

- **~90 files:** 60+ HTML pages, CSS design tokens, 2 JS files
- **Styling:** Tailwind CDN + custom config (`tailwind.config.js`) + CSS custom properties (`design-tokens.css`)
- **Navigation:** JavaScript-based partial loading via `nav-loader.js` using fetch()
- **Dev Server:** Python `serve.py` generates `env.js` from `.env`
- **API Integration:** Logo.dev for merchant avatars

This approach is simple and works well - files can be opened directly in a browser, and there's no build step to manage.

---

## Goals Driving Migration Consideration

### 1. More Control Over Navigation Behavior

**Current state:** `nav-loader.js` (432 lines) handles all navigation - loading partials, active states, expandable groups, keyboard accessibility. Modifying behavior requires editing this monolithic file.

**With Astro:** Navigation becomes declarative components. Adding features like icons, role-based items, or custom collapse behavior becomes straightforward component composition rather than DOM manipulation.

### 2. Embedding Actual Components

**Current state:** Component documentation shows HTML/CSS examples, but can't render live interactive components.

**With Astro:** The "islands" architecture allows mixing static documentation with interactive component demos. Supports React, Vue, Svelte, or Web Components - whatever stack the production components use.

```astro
---
import { Button } from '@saltwyk/components';
---

<article>
  <h2>Button Component</h2>
  <p>Documentation text...</p>

  <!-- Live component demo -->
  <Button variant="primary" client:load>
    Click me
  </Button>
</article>
```

### 3. Authentication via Clerk

**Current state:** No way to protect static HTML files without a server layer.

**With Astro:** Native Clerk integration via `@clerk/astro`. Requires SSR mode:

```javascript
// astro.config.mjs
import clerk from '@clerk/astro';

export default defineConfig({
  output: 'server',
  integrations: [clerk()],
});
```

**Implication:** Moves from static hosting to Node.js hosting (Vercel, Netlify Functions, Railway, etc.).

---

## Migration Effort

### Scope

| Category | Count |
|----------|-------|
| HTML pages to convert | ~75 |
| Navigation partials to convert | 4 |
| New layouts to create | 2-3 |
| New components to create | ~10 |

### Work Breakdown

**Phase 1: Project Setup**
- Initialize Astro project
- Configure Tailwind integration
- Convert `tailwind.config.js` to ES module
- Set up environment variables

**Phase 2: Infrastructure**
- Create `BaseLayout.astro` and `DocsLayout.astro`
- Convert navigation partials to Astro components
- Implement active state logic using `Astro.url.pathname`
- Create shared UI components (ThreadLine, Breadcrumb, etc.)

**Phase 3: Page Migration**
- Convert pages section by section
- Mostly mechanical: wrap existing HTML in layout, update imports

**Phase 4: Auth & Components**
- Integrate Clerk
- Set up component library integration
- Create interactive demo patterns

**Estimated effort:** 20-30 hours for a developer familiar with Astro

---

## Trade-offs

### What We Gain

| Benefit | Description |
|---------|-------------|
| **Declarative navigation** | Edit nav as components, not DOM manipulation |
| **Live component demos** | Embed actual components in documentation |
| **Authentication** | Protect design system behind Clerk |
| **Better DX** | Hot module reloading, proper imports, TypeScript support |
| **Component reuse** | Edit once, applies everywhere |
| **Future flexibility** | MDX support, content collections, easy deployment |

### What We Lose

| Cost | Description |
|------|-------------|
| **Simplicity** | Current setup is dead simple - just HTML files |
| **Zero build step** | Can no longer open files directly in browser |
| **Static hosting** | SSR mode (for Clerk) requires Node.js hosting |
| **Migration risk** | Things could break during conversion |

---

## Alternatives Considered

### Keep Current Setup + Clerk Frontend SDK

Use Clerk's client-side JavaScript SDK to add auth without changing architecture.

**Pros:** No migration needed
**Cons:** Client-side auth only (less secure), can't protect at server level, still can't embed live components

### Static Site Generator (11ty, Jekyll)

Simpler than Astro, still provides templating.

**Pros:** Lighter weight, stays static
**Cons:** No component framework integration, no SSR for auth

### Next.js

Full React framework with SSR.

**Pros:** Large ecosystem, good Clerk support
**Cons:** Heavier, requires React for everything, overkill for docs site

---

## Recommendation

**Proceed with Astro migration** - the goals (navigation control, component embedding, authentication) are concrete requirements that the current architecture cannot satisfy.

Astro is the right choice because:
1. It's designed for content-heavy sites with selective interactivity
2. Component framework agnostic - works with whatever stack components are built in
3. Native Clerk support with SSR
4. Preserves the "mostly static" nature while enabling dynamic features

The migration effort is real but bounded, and the payoff addresses actual needs rather than hypothetical improvements.

---

## Next Steps

1. Decide on component framework for production components (React, Vue, Svelte, Web Components)
2. Confirm hosting platform that supports Node.js (Vercel recommended for Clerk)
3. Schedule migration work
4. Begin with Phase 1 (project setup) to validate approach before full conversion
