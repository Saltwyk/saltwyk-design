# Claude Code Implementation: Phase 1 Rewards Platform Connection Screen

## Objective

Implement the Phase 1 Rewards Platform Connection screen based on the comprehensive design specification at `/mnt/user-data/outputs/phase-1-rewards-platform-connection-screen-spec.md`.

This is the first screen in the 9-phase merchant onboarding flow.

## CRITICAL: Implementation Approach

**DO:**
- ✅ Create ONE HTML page demonstrating the complete screen
- ✅ Use components from the inventory at `/mnt/user-data/uploads/component-inventory-onboarding.md`
- ✅ Follow the detailed design spec exactly
- ✅ Include working JavaScript for search and interactions
- ✅ Reference existing component patterns

**DO NOT:**
- ❌ Create new navigation or modify existing nav
- ❌ Build production React/Vue components (this is HTML demonstration)
- ❌ Over-engineer with frameworks
- ❌ Modify files outside `/merchant/screens/`

## What You're Building

**File to create:** `/merchant/screens/onboarding-wizard-phase-1-platform-connection.html`

This is a complete, working demonstration screen showing:
- Setup progress indicator (Step 1 of 9)
- Platform List with Search component (fully functional)
- All platform card variants (supported, tier required, coming soon)
- Interactive search filtering
- Modal patterns for tier requirements and platform requests
- Responsive design

## Step 1: Read the Design Specification

**Before writing any code, thoroughly read:**
- `/mnt/user-data/outputs/phase-1-rewards-platform-connection-screen-spec.md`

**Key sections to focus on:**
- Screen Layout (overall structure)
- Component Breakdown (each component's specs)
- States & Interactions (how it behaves)
- Responsive Behavior (mobile/desktop)
- Accessibility Requirements
- Content & Copy (exact text to use)

## Step 2: Review Available Components

**Check the component inventory:**
- `/mnt/user-data/uploads/component-inventory-onboarding.md`

**Components you'll use:**
1. **Setup Progress** - `/merchant/components/setup-progress.html`
2. **Platform List with Search** - `/merchant/components/platform-list-search.html`
3. **Core Buttons** - Primary, Secondary, Text variants
4. **Core Modals** - For tier requirements, platform requests
5. **Core Search Input** - With icon and clear button
6. **Core Cards** - Platform card containers

**Reuse existing patterns:**
- Check `/merchant/components/platform-list-search.html` for platform card HTML/CSS
- Check `/merchant/components/setup-progress.html` for progress indicator pattern
- Check `/core/components/modals/` for modal structure

## Step 3: Screen Structure

Create the HTML structure following this outline:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Connect Rewards Platform - Saltwyk Onboarding</title>
  
  <!-- Include existing stylesheets -->
  <link rel="stylesheet" href="../styles/merchant-design-system.css">
  
  <!-- Include Lucide icons -->
  <script src="https://unpkg.com/lucide@latest"></script>
  
  <style>
    /* Page-specific styles */
  </style>
</head>
<body>
  <!-- Shopify Embed Header (simulated) -->
  <header class="shopify-embed-header">
    <div class="header-left">
      <img src="/logos/saltwyk-logo.svg" alt="Saltwyk" class="logo">
    </div>
    <div class="header-right">
      <button class="btn-text">Help</button>
      <button class="btn-text" aria-label="Close">×</button>
    </div>
  </header>
  
  <!-- Main Content -->
  <main class="onboarding-container">
    
    <!-- Setup Progress Component -->
    <div class="setup-progress">
      <!-- Include setup progress HTML from component -->
    </div>
    
    <!-- Page Content Card -->
    <div class="page-content">
      
      <!-- Page Header -->
      <div class="page-header">
        <h1 class="page-title">Connect Your Rewards Platform</h1>
        <p class="page-description">
          Saltwyk integrates with your existing rewards platform 
          to enable cross-merchant shopping.
        </p>
      </div>
      
      <!-- Platform List with Search Component -->
      <div class="platform-list-container">
        
        <!-- Search Input -->
        <div class="search-wrapper">
          <!-- Search input HTML from component -->
        </div>
        
        <!-- Supported Platforms Section -->
        <section aria-labelledby="supported-platforms">
          <h2 id="supported-platforms" class="section-label">
            SUPPORTED PLATFORMS
          </h2>
          <div class="platform-cards">
            <!-- Platform cards for Smile.io Enterprise, Yotpo -->
          </div>
        </section>
        
        <!-- Tier Required Section -->
        <section aria-labelledby="tier-required">
          <h2 id="tier-required" class="section-label">
            TIER REQUIRED
          </h2>
          <div class="platform-cards">
            <!-- Platform cards for Smile.io Starter/Growth, Shopify -->
          </div>
        </section>
        
        <!-- Coming Soon Section -->
        <section aria-labelledby="coming-soon">
          <h2 id="coming-soon" class="section-label">
            COMING SOON
          </h2>
          <div class="platform-cards">
            <!-- Platform cards for LoyaltyLion, Kangaroo -->
          </div>
        </section>
        
        <!-- Footer Link -->
        <div class="platform-list-footer">
          <p class="footer-text">Don't see your platform?</p>
          <a href="#" class="footer-link" id="request-platform">
            Request Platform Support
            <i data-lucide="arrow-right"></i>
          </a>
        </div>
        
        <!-- No Results State (hidden by default) -->
        <div class="no-results" style="display: none;">
          <p class="no-results-text">
            No platforms found for "<strong id="search-query-display"></strong>"
          </p>
          <p class="no-results-help">
            Don't see your platform? 
            <a href="#" class="request-platform-link">Request Platform Support</a>
          </p>
        </div>
        
      </div>
    </div>
  </main>
  
  <!-- Modals -->
  
  <!-- Tier Requirement Modal -->
  <div id="tier-modal" class="modal-overlay" style="display: none;">
    <div class="modal-content modal-md">
      <div class="modal-header">
        <h2>Upgrade to <span id="tier-platform-name"></span> <span id="tier-required-tier"></span></h2>
        <button class="modal-close" aria-label="Close">×</button>
      </div>
      <div class="modal-body">
        <!-- Tier requirement content from spec -->
      </div>
      <div class="modal-footer">
        <button class="btn-secondary">Cancel</button>
        <button class="btn-text">Continue Setup Anyway</button>
        <a href="#" class="btn-primary" id="tier-pricing-link" target="_blank">
          View <span id="tier-platform-name-2"></span> Pricing
          <i data-lucide="external-link"></i>
        </a>
      </div>
    </div>
  </div>
  
  <!-- Platform Request Modal -->
  <div id="request-modal" class="modal-overlay" style="display: none;">
    <div class="modal-content modal-md">
      <div class="modal-header">
        <h2>Request Platform Support</h2>
        <button class="modal-close" aria-label="Close">×</button>
      </div>
      <div class="modal-body">
        <form id="platform-request-form">
          <div class="form-field">
            <label for="platform-name">Platform Name *</label>
            <input type="text" id="platform-name" required>
          </div>
          <div class="form-field">
            <label for="platform-website">Platform Website</label>
            <input type="url" id="platform-website" placeholder="https://">
          </div>
          <div class="form-field">
            <label for="platform-reason">Why do you need this platform?</label>
            <textarea id="platform-reason" rows="3"></textarea>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button class="btn-secondary modal-close">Cancel</button>
        <button class="btn-primary" id="submit-request">Submit Request</button>
      </div>
    </div>
  </div>
  
  <script>
    // Initialize Lucide icons
    lucide.createIcons();
    
    // JavaScript for interactions
  </script>
</body>
</html>
```

## Step 4: Implement Platform Cards

For each platform card variant, follow the exact HTML structure from the design spec.

**Example: Supported Platform Card**

```html
<div class="platform-card platform-card--supported" 
     data-platform-id="smile-enterprise"
     data-name="smile.io"
     data-description="full api access with enterprise tier"
     data-search-terms="smile,smile.io">
  
  <div class="platform-card__logo">
    <img src="/logos/smile-io.png" alt="Smile.io logo" 
         onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
    <div class="platform-logo-fallback" style="display:none;">LL</div>
  </div>
  
  <div class="platform-card__content">
    <h3 class="platform-card__name">Smile.io</h3>
    <p class="platform-card__description">
      Full API access with Enterprise tier
    </p>
  </div>
  
  <div class="platform-card__actions">
    <button class="btn-primary btn-md" onclick="connectPlatform('smile-enterprise')">
      Connect
      <i data-lucide="arrow-right"></i>
    </button>
  </div>
</div>
```

**Include all 6 platforms from the spec:**
1. Smile.io (supported)
2. Yotpo Loyalty & Referrals (supported)
3. Smile.io Starter/Growth (tier required)
4. Shopify Basic/Advanced (tier required)
5. LoyaltyLion (coming soon)
6. Kangaroo Rewards (coming soon)

## Step 5: Implement Search Functionality

**JavaScript for search filtering:**

```javascript
// Search functionality
const searchInput = document.getElementById('platform-search');
const clearBtn = document.getElementById('search-clear');
const platformCards = document.querySelectorAll('.platform-card');
const sections = document.querySelectorAll('.platform-list-container section');
const noResults = document.querySelector('.no-results');

let searchTimeout;

searchInput.addEventListener('input', (e) => {
  clearTimeout(searchTimeout);
  const query = e.target.value.toLowerCase().trim();
  
  // Show/hide clear button
  clearBtn.style.display = query ? 'block' : 'none';
  
  // Debounce search
  searchTimeout = setTimeout(() => {
    filterPlatforms(query);
  }, 150);
});

clearBtn.addEventListener('click', () => {
  searchInput.value = '';
  clearBtn.style.display = 'none';
  filterPlatforms('');
  searchInput.focus();
});

// Escape key clears search
searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    searchInput.value = '';
    clearBtn.style.display = 'none';
    filterPlatforms('');
  }
});

function filterPlatforms(query) {
  if (!query) {
    // Show all
    platformCards.forEach(card => card.style.display = '');
    sections.forEach(section => section.style.display = '');
    noResults.style.display = 'none';
    return;
  }
  
  let anyVisible = false;
  
  sections.forEach(section => {
    const cards = section.querySelectorAll('.platform-card');
    let sectionHasVisible = false;
    
    cards.forEach(card => {
      const name = card.dataset.name;
      const description = card.dataset.description;
      const searchTerms = card.dataset.searchTerms || '';
      
      const matches = name.includes(query) || 
                     description.includes(query) ||
                     searchTerms.includes(query);
      
      card.style.display = matches ? '' : 'none';
      if (matches) {
        sectionHasVisible = true;
        anyVisible = true;
      }
    });
    
    section.style.display = sectionHasVisible ? '' : 'none';
  });
  
  // Show/hide no results
  noResults.style.display = anyVisible ? 'none' : 'block';
  document.getElementById('search-query-display').textContent = query;
}
```

## Step 6: Implement Interactions

**Connect Platform Button:**

```javascript
function connectPlatform(platformId) {
  console.log('Connecting to platform:', platformId);
  
  // In real implementation: POST to API, navigate to API key input
  // For demo: Show alert
  alert(`Connecting to ${platformId}... (Demo - would navigate to API key input)`);
}
```

**Learn About Tiers Button:**

```javascript
function openTierModal(platformName, currentTier, requiredTier, pricingUrl) {
  const modal = document.getElementById('tier-modal');
  document.getElementById('tier-platform-name').textContent = platformName;
  document.getElementById('tier-platform-name-2').textContent = platformName;
  document.getElementById('tier-required-tier').textContent = requiredTier;
  document.getElementById('tier-pricing-link').href = pricingUrl;
  
  modal.style.display = 'flex';
}
```

**Vote for Platform:**

```javascript
const votedPlatforms = new Set();

function votePlatform(platformId, button) {
  if (votedPlatforms.has(platformId)) return;
  
  // Simulate vote
  votedPlatforms.add(platformId);
  
  // Update button
  button.innerHTML = '✓ Voted';
  button.disabled = true;
  button.classList.add('voted');
  
  // Increment vote count
  const voteCount = button.parentElement.parentElement
    .querySelector('.vote-count span');
  if (voteCount) {
    voteCount.textContent = parseInt(voteCount.textContent) + 1;
  }
  
  console.log('Voted for platform:', platformId);
}
```

**Request Platform Modal:**

```javascript
document.getElementById('request-platform').addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('request-modal').style.display = 'flex';
});

document.getElementById('submit-request').addEventListener('click', () => {
  const form = document.getElementById('platform-request-form');
  if (form.checkValidity()) {
    const platformName = document.getElementById('platform-name').value;
    alert(`Request submitted for ${platformName}! (Demo)`);
    document.getElementById('request-modal').style.display = 'none';
    form.reset();
  } else {
    form.reportValidity();
  }
});
```

**Modal Close Buttons:**

```javascript
document.querySelectorAll('.modal-close').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.modal-overlay').style.display = 'none';
  });
});

// Close on overlay click
document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.style.display = 'none';
    }
  });
});
```

## Step 7: Implement Responsive Styles

**CSS for responsive behavior:**

```css
/* Desktop (default) */
.platform-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px;
}

.platform-card__logo {
  width: 48px;
  height: 48px;
  flex-shrink: 0;
}

/* Tablet */
@media (max-width: 767px) {
  .platform-card {
    gap: 12px;
    padding: 16px;
  }
}

/* Mobile */
@media (max-width: 639px) {
  .platform-card {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .platform-card__logo {
    width: 40px;
    height: 40px;
  }
  
  .platform-card__actions {
    width: 100%;
  }
  
  .platform-card__actions button {
    width: 100%;
  }
  
  .section-label {
    font-size: 12px;
  }
}
```

## Step 8: Add Accessibility Features

**Ensure all requirements from spec are met:**

- [ ] ARIA labels on search and sections
- [ ] Keyboard navigation works (Tab, Escape)
- [ ] Screen reader friendly
- [ ] Focus indicators visible
- [ ] Color contrast ≥4.5:1

**Test with:**
- Tab through all interactive elements
- Use screen reader (VoiceOver/NVDA)
- Check focus rings are visible
- Verify ARIA announcements

## Testing Checklist

**Visual:**
- [ ] Matches design spec layout exactly
- [ ] Setup Progress shows "Step 1 of 9"
- [ ] All 6 platform cards render correctly
- [ ] Colors match Fire Opal (Emerald, Indigo, Orange, Warm)
- [ ] Spacing matches spec (use devtools to verify)
- [ ] Mobile responsive (<640px)

**Functional:**
- [ ] Search filters platforms correctly
- [ ] Search clear button works
- [ ] Escape clears search
- [ ] Section headers hide when empty
- [ ] No results state shows correctly
- [ ] Connect buttons clickable
- [ ] Tier modal opens/closes
- [ ] Vote buttons work and disable
- [ ] Request modal opens/closes

**Accessibility:**
- [ ] Tab order logical
- [ ] ARIA labels present
- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] Screen reader tested

## Deliverable

One file: `/merchant/screens/onboarding-wizard-phase-1-platform-connection.html`

**This file should:**
- Be a complete, working HTML page
- Show all states (default, search, modals)
- Include all 6 platforms from spec
- Have working JavaScript for all interactions
- Be responsive (desktop, tablet, mobile)
- Meet accessibility requirements
- Follow the design spec exactly

## Success Criteria

Complete when:
- [ ] Single HTML file created
- [ ] All components from spec included
- [ ] Search functionality works
- [ ] All interactions implemented
- [ ] Responsive on all screen sizes
- [ ] Accessible (ARIA, keyboard, screen reader)
- [ ] Can be viewed standalone in browser
- [ ] Visually matches design spec

---

**Report back with:**
1. File path created
2. Any design decisions where spec needed interpretation
3. Any challenges with component integration
4. Screenshot or description of the working screen

**Focus on accuracy to the spec - this sets the pattern for all remaining onboarding phases.**
