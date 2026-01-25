# Platform List Search Component Specification

> Implementation guide extracted from `/merchant/components/platform-list-search.html`

---

## Component Overview

### Purpose
Enable merchants to discover, search, and select their rewards platform during onboarding and manage connections in Settings. Provides a filterable list of platforms grouped by status with appropriate actions for each.

### Used in
- **Merchant Onboarding** - Platform selection step
- **Settings > Apps tab** - Platform connection management
- **Future**: Platform marketplace/catalog

### Dependencies
- Lucide icons (`search`, `x`, `arrow-right`, `external-link`, `alert-triangle`, `vote`, `check`, `wifi-off`, `alert-circle`, `search-x`)
- Platform logos via logo.dev API
- Button components (Connect, Secondary, Text, Vote)

---

## Visual Structure

### Layout

| Context | Max Width | Layout |
|---------|-----------|--------|
| Onboarding | `600px` | Single column, grouped by status |
| Settings | `600px` | Connected platform card only |
| Mobile | Full width | Stacked buttons, smaller logos |

### Sections
1. **Header** - Title + description
2. **Search Input** - Filter platforms
3. **Supported Platforms** - Ready to connect
4. **Tier Required** - Need platform upgrade
5. **Coming Soon** - Vote for future support
6. **No Results** - Empty state when filtering
7. **Footer** - Request platform support link

### Spacing

| Property | Value | Notes |
|----------|-------|-------|
| Container max-width | `600px` | Centered in parent |
| Search margin-bottom | `24px` | Space before sections |
| Section label margin-top | `32px` | Between sections |
| Section label margin-bottom | `12px` | Before first card |
| Card padding | `20px` (desktop), `16px` (mobile) | Internal card spacing |
| Card margin-bottom | `12px` | Between cards |
| Card gap | `16px` | Logo to content |
| Logo size | `48px` (desktop), `40px` (mobile) | Square with 6px radius |
| Actions gap | `12px` | Between buttons |

---

## Design Tokens Used

### Colors

#### Platform Card States

| State | Background | Border | Border Style |
|-------|------------|--------|--------------|
| Supported | `white` | `warm-200` (1px) | solid |
| Supported:hover | `warm-50` | `warm-300` | solid |
| Tier Required | `orange-50` | `orange-200` (1px) | solid |
| Coming Soon | `warm-50` | `warm-300` (1px) | dashed |
| Connected | `emerald-50` | `emerald-200` (2px) | solid |

#### Buttons

| Button | Background | Text | Hover BG |
|--------|------------|------|----------|
| Connect (primary) | `emerald-600` | white | `emerald-700` |
| Secondary | white | `ink` | `warm-50` |
| Text | transparent | `warm-600` | `warm-700` |
| Vote | `indigo-500` | white | `indigo-600` |
| Vote (voted) | `indigo-300` | white | — (disabled) |

#### Other Elements

| Element | Color |
|---------|-------|
| Platform name | `warm-900` |
| Description | `warm-600` |
| Section label | `warm-700` |
| Tier badge | `warm-500` text, `warm-100` bg |
| Warning icon | `orange-500` |
| Vote count | `warm-700` |
| Connected badge | `emerald-500` bg, white text |
| Last synced | `warm-500` |
| Search placeholder | `warm-400` |
| Search focus border | `indigo-500` |

### Typography

| Element | Size | Weight | Other |
|---------|------|--------|-------|
| Platform name | `18px` (desktop), `16px` (mobile) | 600 | — |
| Description | `14px` | 400 | — |
| Section label | `14px` (desktop), `12px` (mobile) | 600 | uppercase, `tracking-wider` |
| Tier badge | `12px` | 500 | — |
| Buttons | `14px` | 500 | — |
| Connected badge | `12px` | 600 | — |
| Last synced | `13px` | 400 | — |
| Search input | `16px` | 400 | — |

### Fire Opal Specific
- Thread gradient in header: `linear-gradient(90deg, cyan-thread, magenta-thread)`
- Warning states use `orange-*` family
- Primary actions use `emerald-*` family
- Vote/selection uses `indigo-*` family

---

## Interactive States

### Search Input
- **Default**: `warm-300` border, `warm-400` placeholder
- **Focus**: `indigo-500` border (2px), padding adjusts by 1px, `box-shadow: 0 0 0 3px indigo-500/10%`
- **With value**: Clear button appears (20px circle, `warm-200` bg)
- **Clear hover**: `warm-300` bg

### Supported Card
- **Default**: White bg, `warm-200` border
- **Hover**: `warm-50` bg, `warm-300` border

### Connect Button
- **Default**: `emerald-600` bg
- **Hover**: `emerald-700` bg

### Vote Button
- **Default**: `indigo-500` bg
- **Hover**: `indigo-600` bg
- **Voted/Disabled**: `indigo-300` bg, shows check icon, cursor default

### No Results State
- Shown when search has no matches
- Icon: `search-x` (48px, `warm-300`)
- Title: `warm-700`, 16px, weight 600
- Text: `warm-500`, 14px

### Error State
- Shown when platform list fails to load
- Icon: `wifi-off` (48px, `orange-400`)
- `warm-50` bg, `warm-200` border
- Retry + Contact Support buttons

### Warning Box (Settings - No Platform)
- `orange-50` bg, `orange-200` border
- Icon: `alert-circle` (`orange-500`)
- Title: `orange-700`, weight 600
- Text: `orange-600`, 13px

---

## Props Interface

```typescript
type PlatformStatus = 'supported' | 'tier_required' | 'coming_soon';
type PlatformType = 'rewards' | 'commerce';

interface Platform {
  id: string;
  name: string;
  description: string;
  logoUrl: string;
  type: PlatformType;
  status: PlatformStatus;

  // For supported platforms
  apiKeyRequired?: boolean;

  // For tier_required
  currentTier?: string;    // e.g., "Starter", "Growth"
  requiredTier?: string;   // e.g., "Enterprise"
  tierInfoUrl?: string;    // Link to pricing page
  tierReason?: string;     // e.g., "API access"

  // For coming_soon
  estimatedLaunch?: string; // e.g., "Q1 2026"
  voteCount?: number;
  userHasVoted?: boolean;

  // Metadata
  searchTerms?: string[];  // Additional search keywords
  sortOrder?: number;
}

interface ConnectedPlatform extends Platform {
  connectionStatus: 'connected' | 'error' | 'syncing';
  lastSyncedAt?: Date;
}

interface PlatformListSearchProps {
  /** Available platforms to display */
  platforms: Platform[];

  /** Currently connected platform (for settings context) */
  connectedPlatform?: ConnectedPlatform;

  /** Context determines header text and behavior */
  context: 'onboarding' | 'settings';

  /** Called when Connect button is clicked */
  onConnect: (platformId: string) => void;

  /** Called when "Learn About Tiers" is clicked */
  onLearnTiers?: (platformId: string) => void;

  /** Called when "Continue Anyway" is clicked */
  onContinueAnyway?: (platformId: string) => void;

  /** Called when Vote is clicked */
  onVote?: (platformId: string) => void;

  /** Called when "Request Platform Support" is clicked */
  onRequestPlatform?: () => void;

  /** Loading state */
  isLoading?: boolean;

  /** Error state */
  error?: Error | null;

  /** Retry callback for error state */
  onRetry?: () => void;
}
```

---

## Behavioral Requirements

### Search Interactions
- **Live filtering** with 150ms debounce
- Searches: platform name, description, searchTerms
- Case-insensitive matching
- **Escape key**: Clears search, blurs input
- **Clear button**: Appears when input has value

### Section Visibility
- Hide section headers when all cards in section are filtered out
- Show "No Results" when all cards are hidden

### Vote Interaction
- Increment vote count immediately (optimistic update)
- Change button to "Voted" state with check icon
- Disable button after voting
- One vote per user per platform (persisted server-side)

### Settings Context
- Show only connected platform (if exists)
- Actions: Test Connection, Reconnect, Change Platform
- Show warning box if no platform connected
- Display "Last synced: X minutes ago" text

### Responsive Behavior
- **Mobile (<640px)**:
  - Card padding: `16px`
  - Logo size: `40px`
  - Platform name: `16px`
  - Section label: `12px`
  - Actions stack vertically, full width buttons

### Edge Cases
- **Logo fallback**: Show initials if logo fails to load
- **Long platform names**: Wrap, don't truncate
- **Many platforms**: Consider virtual scrolling if >20
- **Concurrent votes**: Debounce to prevent double-voting

---

## Implementation Notes

### Complexity Estimate
**Medium** - Search filtering logic, multiple card states, context switching

### Reusable Patterns from @repo/ui
- `Button` variants (primary, secondary, text, ghost)
- `Input` with icon and clear button
- `Badge` for tier/status indicators
- `Card` base styling

### Custom Logic Needed
- Search filtering with debounce
- Section grouping and visibility
- Vote count management (optimistic update + rollback)
- Logo fallback to initials

### Accessibility Considerations
- Search input: `role="search"`, `aria-label="Search rewards platforms"`
- Sections: `aria-labelledby` pointing to section headers
- Tab order: Search -> Cards -> Buttons (within card) -> Footer
- Escape: Clear search input
- Enter/Space: Activate focused button
- Screen reader announcements:
  - Supported: "Smile.io Enterprise. Full API access. Connect button."
  - Tier Required: "Smile.io. Enterprise tier required. Learn about tiers button."
  - Coming Soon: "LoyaltyLion. 23 votes. Vote button."
  - After vote: "Vote recorded. 24 votes total." (via `aria-live`)

---

## Design Spec Code Samples

### CSS - Search Input
```css
.platform-search-wrapper {
  position: relative;
  margin-bottom: 24px;
}

.platform-search-input {
  width: 100%;
  padding: 12px 44px 12px 44px;
  border: 1px solid hsl(var(--warm-300));
  border-radius: 8px;
  font-size: 16px;
  color: hsl(var(--warm-900));
  background: white;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
}

.platform-search-input:focus {
  outline: none;
  border-color: hsl(var(--indigo-500));
  border-width: 2px;
  padding: 11px 43px 11px 43px; /* Adjust for thicker border */
  box-shadow: 0 0 0 3px hsl(var(--indigo-500) / 10%);
}
```

### CSS - Platform Card Base
```css
.platform-card {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 12px;
  transition: background 0.15s ease, border-color 0.15s ease;
}

.platform-card.supported {
  background: white;
  border: 1px solid hsl(var(--warm-200));
}

.platform-card.supported:hover {
  background: hsl(var(--warm-50));
  border-color: hsl(var(--warm-300));
}
```

### CSS - Card Variants
```css
.platform-card.tier-required {
  background: hsl(var(--orange-50));
  border: 1px solid hsl(var(--orange-200));
}

.platform-card.coming-soon {
  background: hsl(var(--warm-50));
  border: 1px dashed hsl(var(--warm-300));
}

.platform-card.connected {
  background: hsl(var(--emerald-50));
  border: 2px solid hsl(var(--emerald-200));
}
```

### CSS - Platform Content
```css
.platform-logo {
  width: 48px;
  height: 48px;
  border-radius: 6px;
  background: hsl(var(--warm-50));
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;
}

.platform-name {
  font-size: 18px;
  font-weight: 600;
  color: hsl(var(--warm-900));
}

.platform-description {
  font-size: 14px;
  color: hsl(var(--warm-600));
  margin-bottom: 16px;
}
```

### CSS - Buttons
```css
.btn-connect {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  background: hsl(var(--emerald-600));
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.15s ease;
}

.btn-connect:hover {
  background: hsl(var(--emerald-700));
}

.btn-vote {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  background: hsl(var(--indigo-500));
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
}

.btn-vote.voted {
  background: hsl(var(--indigo-300));
  cursor: default;
}
```

### CSS - Mobile Responsive
```css
@media (max-width: 639px) {
  .platform-card { padding: 16px; }
  .platform-logo { width: 40px; height: 40px; }
  .platform-name { font-size: 16px; }
  .platform-section-label { font-size: 12px; }
  .platform-actions {
    flex-direction: column;
    align-items: stretch;
  }
  .platform-actions button {
    width: 100%;
    justify-content: center;
  }
}
```

---

## Design Decisions

### Why group by status?
Makes it clear which platforms work now vs. require action vs. are future options. Merchants can quickly find what they need.

### Why allow "Continue Anyway" for Tier Required?
Don't hard-block setup. Merchant can complete onboarding while working on their tier upgrade. Creates a softer conversion path.

### Why show vote counts?
Social proof drives platform prioritization. Transparency builds trust and shows Saltwyk listens to merchant needs.

### Why single column layout?
Each card has significant information (logo, name, description, actions). Single column is scannable and works well on mobile.
