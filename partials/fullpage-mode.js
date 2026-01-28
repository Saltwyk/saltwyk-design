/**
 * Fullpage Mode - Renders mockup without design system UI
 *
 * Usage:
 *   page.html?fullpage          → Desktop view (default)
 *   page.html?fullpage&view=mobile  → Mobile view
 *   page.html?fullpage&view=desktop → Desktop view
 *
 * Astro-compatible: This is a framework-agnostic approach using
 * URL parameters and CSS classes. Can be replaced with server-side
 * detection when migrating to Astro.
 */

(function() {
  const params = new URLSearchParams(window.location.search);
  const isFullPage = params.has('fullpage');

  if (!isFullPage) return;

  const viewParam = params.get('view') || 'desktop';
  const root = document.documentElement;

  // Add mode classes
  root.classList.add('fullpage-mode');
  root.classList.add(viewParam === 'mobile' ? 'fullpage-mobile' : 'fullpage-desktop');

  // Set page title to indicate mode
  document.addEventListener('DOMContentLoaded', function() {
    const viewLabel = viewParam === 'mobile' ? 'Mobile' : 'Desktop';
    document.title = document.title.replace(' | ', ` (${viewLabel}) | `);
  });
})();
