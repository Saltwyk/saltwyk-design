# Platform List with Search Component

**Component Type:** Searchable Selection List  
**Usage:** Onboarding Phase 1 (Rewards Platform Connection), Settings > Apps Tab  
**Status:** New Component - Design Spec  
**Last Updated:** 2025-01-20

---

## Purpose

Enable merchants to discover, search, and select their rewards platform provider during onboarding and manage platform connections in Settings. Provides clear visibility into supported vs. upcoming platforms, with upgrade paths for non-Enterprise tiers.

**Critical Note:** This component must be reusable in both onboarding AND Settings > Apps tab (gap identified in analysis).

---

## User Jobs This Serves

**From JTBD:**
- Phase 1: "Discover Platform Support" (High priority)
- Phase 1: "Understand Upgrade Path" (High priority - for Smile.io non-Enterprise)
- Phase 1: "Influence Future Support" (Low priority - voting for unsupported platforms)

**Context:**
- Onboarding: First-time platform selection, critical blocker
- Settings: View connected platform, change platform, add additional platforms (future)

---

## Design Principles

1. **Supported First** - Show supported platforms prominently
2. **Clear Upgrade Path** - Don't block, guide toward solutions
3. **Future Transparency** - Show roadmap to build anticipation
4. **Search Efficiency** - Find platform quickly without scrolling
5. **Confidence Building** - Verified badges, clear status indicators

---

## Component Anatomy

### Full Component (Onboarding Context)

```
┌─────────────────────────────────────────────────────────────┐
│ Connect Your Rewards Platform                               │
│                                                              │
│ Saltwyk integrates with your existing rewards platform      │
│ to enable cross-merchant shopping.                          │
│                                                              │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ 🔍  Search platforms...                                 │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                              │
│ Supported Platforms                                         │
│                                                              │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │  [Logo]  Smile.io Enterprise                            │ │
│ │          Full API access with Enterprise tier            │ │
│ │                                                          │ │
│ │                                        [Connect →]       │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                              │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │  [Logo]  Yotpo Loyalty & Referrals                      │ │
│ │          Complete rewards program integration            │ │
│ │                                                          │ │
│ │                                        [Connect →]       │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                              │
│                                                              │
│ Tier Required                                               │
│                                                              │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │  [Logo]  Smile.io (Starter, Growth)           ⚠️        │ │
│ │          Enterprise tier required for API access         │ │
│ │                                                          │ │
│ │  [Learn About Tiers →]      [Continue Setup Anyway]     │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                              │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │  [Logo]  Shopify (Basic, Shopify, Advanced)   ⚠️        │ │
│ │          Shopify Plus required for custom apps           │ │
│ │                                                          │ │
│ │  [Learn About Tiers →]      [Continue Setup Anyway]     │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                              │
│                                                              │
│ Coming Soon                                                 │
│                                                              │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │  [Logo]  LoyaltyLion                          🗳️  23    │ │
│ │          Launching Q1 2026                               │ │
│ │                                                          │ │
│ │                              [Vote for This Platform]    │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                              │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │  [Logo]  Kangaroo Rewards                     🗳️  18    │ │
│ │          Under consideration                             │ │
│ │                                                          │ │
│ │                              [Vote for This Platform]    │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                              │
│                                                              │
│ Don't see your platform?                                    │
│ [Request Platform Support →]                                │
└─────────────────────────────────────────────────────────────┘
```

### Settings Context (Post-Onboarding)

```
┌─────────────────────────────────────────────────────────────┐
│ Rewards Platform                                            │
│                                                              │
│ Connected Platform                                          │
│                                                              │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │  [Logo]  Smile.io Enterprise              ✓ Connected   │ │
│ │          Last synced: 2 minutes ago                      │ │
│ │                                                          │ │
│ │  [Test Connection]  [Reconnect]  [Change Platform]      │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                              │
│ Available Platforms                                         │
│                                                              │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ 🔍  Search platforms...                                 │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                              │
│ [Platform cards similar to onboarding, but with            │
│  "Switch to This Platform" actions instead of "Connect"]    │
└─────────────────────────────────────────────────────────────┘
```

---

## Visual Specifications

### Typography

**Section Header ("Connect Your Rewards Platform"):**
- Font size: 24px (text-2xl)
- Font weight: 700 (font-bold)
- Color: Warm-900
- Margin bottom: 8px

**Description Text:**
- Font size: 16px (text-base)
- Font weight: 400 (font-normal)
- Color: Warm-600
- Line height: 1.5
- Margin bottom: 24px

**Section Labels ("Supported Platforms", "Coming Soon"):**
- Font size: 14px (text-sm)
- Font weight: 600 (font-semibold)
- Color: Warm-700
- Text transform: uppercase
- Letter spacing: 0.05em (tracking-wider)
- Margin bottom: 12px
- Margin top: 32px (except first)

**Platform Name:**
- Font size: 18px (text-lg)
- Font weight: 600 (font-semibold)
- Color: Warm-900

**Platform Description:**
- Font size: 14px (text-sm)
- Font weight: 400 (font-normal)
- Color: Warm-600
- Margin top: 4px

**Vote Count:**
- Font size: 14px (text-sm)
- Font weight: 600 (font-semibold)
- Color: Warm-700

**Footer Link ("Don't see your platform?"):**
- Font size: 14px (text-sm)
- Font weight: 400 (font-normal)
- Color: Warm-600

### Colors

**Search Input:**
- Background: White
- Border: Warm-300 (1px)
- Focus border: Indigo-500 (2px)
- Icon: Warm-400
- Text: Warm-900
- Placeholder: Warm-400

**Platform Cards:**

**Supported:**
- Background: White
- Border: Warm-200 (1px)
- Hover: Warm-50 background, Warm-300 border
- Logo area background: Warm-50

**Upgrade Required:**
- Background: Orange-50
- Border: Orange-200 (1px)
- Warning icon: Orange-500

**Coming Soon:**
- Background: Warm-50
- Border: Warm-200 (1px, dashed)
- Vote icon: Indigo-500

**Connected (Settings):**
- Background: Emerald-50
- Border: Emerald-200 (2px)
- Badge background: Emerald-500
- Badge text: White

### Spacing

**Card:**
- Padding: 20px (p-5)
- Gap between cards: 12px
- Border radius: 8px (rounded-lg)

**Card Content Layout:**
- Logo: 48px × 48px, flex-shrink-0
- Logo margin right: 16px
- Content: flex-1 (takes remaining space)
- Actions: margin-top 16px OR flex-row aligned right

**Search Input:**
- Padding: 12px 16px 12px 44px (p-3 pl-11)
- Border radius: 8px (rounded-lg)
- Icon: absolute left 16px, size 20px
- Margin bottom: 24px

**Section Spacing:**
- Gap between sections: 32px
- Last card to footer link: 32px

### Platform Logo

**Display:**
- Size: 48px × 48px
- Border radius: 6px (rounded-md)
- Background: Warm-50 (if logo has transparency)
- Object fit: contain
- Padding: 8px (if needed for small logos)

**Fallback (No Logo):**
- Initials in Warm-700 on Warm-100 background
- Font size: 20px, font weight: 600

### Status Indicators

**Connected Badge (Settings):**
- Background: Emerald-500
- Color: White
- Padding: 4px 10px
- Border radius: 12px (rounded-full)
- Font size: 12px (text-xs)
- Font weight: 600 (font-semibold)
- Icon: ✓ (checkmark)

**Warning Badge (Upgrade Required):**
- Icon: ⚠️ (warning triangle)
- Color: Orange-500
- Size: 20px
- Position: aligned with platform name

**Vote Count:**
- Icon: 🗳️ (ballot box)
- Size: 16px
- Text: vote count (e.g., "23")
- Color: Warm-700
- Layout: icon + text, inline-flex

---

## Component States

### State 1: Initial Load (No Search)
**Display:**
- All platforms visible in sections
- Supported → Upgrade Required → Coming Soon
- Search input empty, ready for input
- All platform cards render

### State 2: Search Active (Filtering)
**When:** User types in search input

**Behavior:**
- Filter platforms by name (case-insensitive)
- Hide section headers if section has no matches
- Show "No platforms found" if zero results
- Clear search button (X) appears in input
- Highlight matched text in platform name (optional)

**Example:**
- User types: "smile"
- Shows: Smile.io Enterprise, Smile.io (Starter, Growth)
- Hides: All other platforms and empty sections

### State 3: Platform Selected (Onboarding)
**When:** User clicks [Connect →] on supported platform

**Behavior:**
- Advance to API key input step (next phase)
- OR: Show confirmation modal before proceeding
- Selected platform stored in onboarding state

### State 4: Upgrade Path (Tier Requirements)
**When:** User clicks [Learn About Upgrade →]

**Behavior:**
- Open modal with:
  - Platform tier comparison (e.g., Starter/Growth vs. Enterprise)
  - Required tier explanation: "Enterprise tier required for API access"
  - Link to platform's pricing page: "View Smile.io pricing →"
  - Instructions: "Contact Smile.io to upgrade your plan"
  - No partnership messaging (MVP has no partnerships)

**When:** User clicks [Continue Setup Anyway]

**Behavior:**
- Allow onboarding to proceed
- Platform marked as "pending upgrade"
- Warning banner in dashboard: "Complete upgrade to launch"
- Blocker: Cannot launch until platform tier verified

### State 5: Vote Cast
**When:** User clicks [Vote for This Platform]

**Behavior:**
- Vote count increments by 1
- Button changes to [✓ Voted] (disabled state)
- Button background: Indigo-500, color: White
- Vote persisted (cannot un-vote in this flow)

### State 6: Platform Request
**When:** User clicks [Request Platform Support →]

**Behavior:**
- Open modal with form:
  - Platform name (text input)
  - Platform website (URL input)
  - Why you need this platform (textarea, optional)
  - Submit button
- On submit: Thank you message, vote count = 1

---

## Interaction Patterns

### Search Input

**Focus:**
- Border color changes to Indigo-500
- 2px border width
- Placeholder fades

**Typing:**
- Debounced filtering (300ms delay)
- Results update live
- Empty state shows if no matches

**Clear Search:**
- X button appears when text entered
- Click X → clear input and reset filter

**Keyboard:**
- Tab: Move to first platform card
- Escape: Clear search input

### Platform Cards (Supported)

**Hover:**
- Background: Warm-50
- Border: Warm-300
- Cursor: default (card itself not clickable)
- Button: shows hover state

**Button Hover:**
- Background: Emerald-600 (from Emerald-500)
- Cursor: pointer

**Click [Connect →]:**
- Proceed to API key input
- OR: Confirmation modal (TBD)

### Platform Cards (Upgrade Required)

**[Learn About Upgrade →]:**
- Opens: Modal OR new tab with upgrade information
- Button style: Secondary (Indigo-600 text)

**[Continue Setup Anyway]:**
- Allows proceeding with warning
- Button style: Text button (Warm-600)
- Shows confirmation modal:
  - "You can complete setup now, but must upgrade Smile.io before launching."
  - [Cancel] [Continue Anyway]

### Platform Cards (Coming Soon)

**[Vote for This Platform]:**
- Primary action button (Indigo background)
- Click: Vote increments, button disabled
- Button text changes to [✓ Voted]
- Disabled state: Indigo-300 background, no hover

### Footer Link

**[Request Platform Support →]:**
- Opens: Modal with platform request form
- Form fields: name, website, why needed
- Submit: Shows thank you, adds to "Coming Soon" with vote = 1

---

## Responsive Behavior

**Desktop (≥768px):**
- Platform cards: single column, max-width 600px
- Search input: max-width 600px
- Logo: 48px × 48px
- Actions: flex-row, right-aligned

**Tablet (≥640px, <768px):**
- Same as desktop, slightly narrower max-width

**Mobile (<640px):**
- Full width cards
- Logo: 40px × 40px
- Actions: stacked (flex-col), full width buttons
- Padding reduced to 16px
- Section labels: text-xs

---

## Data Structure

### Platform Object

```typescript
interface Platform {
  id: string;
  name: string;
  description: string;
  logoUrl: string;
  type: 'rewards' | 'commerce'; // rewards platform or commerce platform
  status: 'supported' | 'tier_required' | 'coming_soon';
  
  // For supported platforms
  apiKeyRequired?: boolean;
  
  // For tier_required (replaces upgrade_required)
  currentTier?: string; // e.g., "Starter", "Growth", "Shopify Basic"
  requiredTier?: string; // e.g., "Enterprise", "Shopify Plus"
  tierInfoUrl?: string; // Link to platform's pricing page
  tierReason?: string; // e.g., "API access", "Custom apps"
  
  // For coming soon
  estimatedLaunch?: string; // e.g., "Q1 2026"
  voteCount?: number;
  userHasVoted?: boolean;
  
  // Metadata
  searchTerms?: string[]; // alternative names for search
  sortOrder?: number; // display order within section
}
```

### Example Data

```typescript
const platforms: Platform[] = [
  // Rewards platforms - supported
  {
    id: 'smile-enterprise',
    name: 'Smile.io',
    description: 'Full API access with Enterprise tier',
    logoUrl: '/logos/smile-io.png',
    type: 'rewards',
    status: 'supported',
    apiKeyRequired: true,
    sortOrder: 1
  },
  {
    id: 'yotpo-loyalty',
    name: 'Yotpo Loyalty & Referrals',
    description: 'Complete rewards program integration',
    logoUrl: '/logos/yotpo.png',
    type: 'rewards',
    status: 'supported',
    apiKeyRequired: true,
    sortOrder: 2
  },
  
  // Rewards platforms - tier required
  {
    id: 'smile-starter-growth',
    name: 'Smile.io',
    description: 'Enterprise tier required for API access',
    logoUrl: '/logos/smile-io.png',
    type: 'rewards',
    status: 'tier_required',
    currentTier: 'Starter or Growth',
    requiredTier: 'Enterprise',
    tierInfoUrl: 'https://smile.io/pricing',
    tierReason: 'API access',
    sortOrder: 1
  },
  
  // Commerce platforms - tier required
  {
    id: 'shopify-basic',
    name: 'Shopify',
    description: 'Shopify Plus required for custom apps',
    logoUrl: '/logos/shopify.png',
    type: 'commerce',
    status: 'tier_required',
    currentTier: 'Basic, Shopify, Advanced',
    requiredTier: 'Shopify Plus',
    tierInfoUrl: 'https://www.shopify.com/plus',
    tierReason: 'Custom app installation',
    sortOrder: 1
  },
  
  // Rewards platforms - coming soon
  {
    id: 'loyaltylion',
    name: 'LoyaltyLion',
    description: 'Launching Q1 2026',
    logoUrl: '/logos/loyaltylion.png',
    type: 'rewards',
    status: 'coming_soon',
    estimatedLaunch: 'Q1 2026',
    voteCount: 23,
    userHasVoted: false,
    sortOrder: 1
  }
];
```

---

## Search Algorithm

**Basic Implementation:**
```typescript
function filterPlatforms(platforms: RewardsPlatform[], query: string) {
  if (!query.trim()) return platforms;
  
  const lowerQuery = query.toLowerCase();
  
  return platforms.filter(platform => {
    // Match on name
    if (platform.name.toLowerCase().includes(lowerQuery)) return true;
    
    // Match on description
    if (platform.description.toLowerCase().includes(lowerQuery)) return true;
    
    // Match on search terms
    if (platform.searchTerms?.some(term => 
      term.toLowerCase().includes(lowerQuery)
    )) return true;
    
    return false;
  });
}
```

**Search Terms Examples:**
- Smile.io: ["smile", "smile.io"]
- Yotpo: ["yotpo", "loyalty", "referrals"]
- LoyaltyLion: ["loyalty lion", "loyaltylion", "lion"]
- Kangaroo: ["kangaroo", "kangaroo rewards"]

---

## Accessibility

### ARIA Labels

```html
<div role="search">
  <label for="platform-search" class="sr-only">Search rewards platforms</label>
  <input 
    id="platform-search"
    type="search"
    placeholder="Search platforms..."
    aria-describedby="search-help"
  />
  <span id="search-help" class="sr-only">
    Start typing to filter platforms by name
  </span>
</div>

<section aria-labelledby="supported-platforms">
  <h2 id="supported-platforms">Supported Platforms</h2>
  <!-- platform cards -->
</section>
```

### Keyboard Navigation

**Search Input:**
- Tab: Focus search
- Type: Filter results
- Escape: Clear search
- Tab: Move to first result

**Platform Cards:**
- Tab: Focus [Connect] button
- Enter/Space: Activate button
- Tab: Next button or next card

**Vote Buttons:**
- Tab: Focus
- Enter/Space: Cast vote
- After vote: Focus stays, button disabled

### Screen Reader

**Platform Card Announcement:**
- "Smile.io Enterprise. Full API access with Enterprise tier. Supported platform. Connect button."
- "Smile.io Starter Growth. Enterprise tier required. Upgrade required. Learn about upgrade button. Continue setup anyway button."
- "LoyaltyLion. Launching Q1 2026. Coming soon. 23 votes. Vote for this platform button."

**Vote Confirmation:**
- After clicking vote: "Vote recorded. Thank you. 24 votes total."

### Color Contrast

- All text on white: ≥4.5:1 contrast
- Connected badge (White on Emerald-500): ≥4.5:1
- Vote button (White on Indigo-500): ≥4.5:1
- Warning badge: Ensure emoji/icon has text alternative

---

## Edge Cases

### Case 1: Zero Search Results

**When:** User searches for platform that doesn't exist

**Display:**
```
┌─────────────────────────────────────────┐
│ 🔍  "salesforce"                [X]     │
└─────────────────────────────────────────┘

No platforms found for "salesforce"

Don't see your platform?
[Request Platform Support →]
```

### Case 2: All Platforms Voted

**When:** User has voted for all "Coming Soon" platforms

**Display:**
- All vote buttons show [✓ Voted] (disabled)
- Vote counts reflect user's votes
- [Request Platform Support →] remains available

### Case 3: No Logo Available

**Fallback:**
- Show platform initials (first letter of each word)
- Example: "LoyaltyLion" → "LL"
- Background: Warm-100, Text: Warm-700
- Same 48px × 48px size, centered

### Case 4: Platform API Failure

**When:** Cannot load platform list

**Display:**
```
Unable to load platforms

We're having trouble connecting. Please try again.

[Retry] [Contact Support]
```

### Case 5: Settings - No Platform Connected

**When:** Merchant removed platform or connection failed

**Display:**
- "No platform connected" warning box
- [Connect Platform] CTA
- Show full platform list below

---

## Usage Contexts

### Onboarding Phase 1
**Placement:** After welcome screen
**Required Action:** Select platform (blocker)
**Next Step:** API key input for selected platform

### Settings > Apps Tab
**Placement:** Top section of Apps tab
**Current State:** Show connected platform
**Actions:** Test, Reconnect, Change platform
**Below:** Available platforms list (for switching)

---

## Related Components

**Used With:**
- Search Input (core component)
- Button Primary/Secondary/Text
- Badge (Connected, Warning)
- Modal (upgrade info, platform request)
- Info Box (zero results state)

**Leads To:**
- API Key Input Form (next step after selection)
- OAuth Connection (if platform supports it in future)

---

## Design Decisions & Rationale

### Why Group by Status?
Makes it clear which platforms work now vs. require action vs. are future options

### Why Allow "Continue Anyway" for Upgrade Required?
Don't want to hard-block setup; merchant can complete onboarding while working with Smile.io on upgrade

### Why Show Vote Counts?
Social proof drives platform prioritization requests; transparency builds trust

### Why Single Column Layout?
Each card has significant information (logo, name, description, actions); single column is scannable

### Why Debounced Search?
Prevents excessive filtering on every keystroke; 300ms feels instant but reduces processing

### Why Show Coming Soon Platforms?
Builds anticipation, allows merchants to influence roadmap, demonstrates growth

---

## Open Questions for Founder

1. **Vote persistence:** Where is vote data stored? Per-merchant or per-user-email?
2. **Platform request:** Who receives these requests? Goes to feature request backlog?
3. **Coming Soon timeline:** How do we determine "Q1 2026" vs. "Under consideration"?
4. **Multiple platforms:** Will merchants ever connect multiple rewards platforms? (Affects Settings UI)
5. **Tier verification:** How do we verify when merchant has upgraded to required tier?

---

## Success Metrics

**Onboarding:**
- Platform selection rate: Should be ~100% for supported platforms
- Search usage: Track % who use search vs. scroll
- Upgrade path: Track how many select non-Enterprise Smile.io
- Vote engagement: Track votes per "Coming Soon" platform

**Settings:**
- Platform change rate: How often merchants switch platforms
- Test connection usage: Indicates troubleshooting frequency
- Search usage: Are merchants finding platforms easily?

---

## Next Steps

1. **Confirm platform list:** Finalize supported, upgrade, and coming soon platforms
2. **Design upgrade flow:** Spec out "Learn About Upgrade" modal content
3. **Build vote system:** Backend for storing/retrieving vote counts
4. **Create mockups:** High-fidelity designs with real platform logos
5. **Test search:** User test to validate search terms and filter logic

---

**This component is ready for design mockup and implementation once founder decisions are confirmed.**
