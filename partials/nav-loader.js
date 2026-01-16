/**
 * Saltwyk Design System - Navigation Loader
 *
 * Handles dynamic loading of navigation partials and active state management.
 * This script should be included at the end of the body in all HTML files.
 */

(function() {
    'use strict';

    // Get the base path for loading partials
    // This handles both local file:// and deployed http(s):// environments
    function getBasePath() {
        const path = window.location.pathname;

        // For GitHub Pages or similar deployments with a base path
        // e.g., https://saltwyk.github.io/saltwyk-design/
        const match = path.match(/^(\/[^\/]+)/);
        if (window.location.hostname.includes('github.io') && match) {
            return match[1];
        }

        return '';
    }

    const basePath = getBasePath();

    // Normalize path for comparison (remove trailing slashes, handle index.html)
    function normalizePath(path) {
        let normalized = path
            .replace(/\/index\.html$/, '/')
            .replace(/\/$/, '');
        if (normalized === '') normalized = '/';
        return normalized;
    }

    // Foundation token pages (at root level)
    const foundationPages = [
        'core-colors', 'core-typography', 'core-logos', 'core-threads',
        'core-gradients', 'core-spacing', 'core-buttons', 'core-inputs',
        'core-animation', 'core-responsive'
    ];

    // Component pages (at root level)
    const componentPages = [
        'core-states', 'core-tables', 'core-modals', 'core-dropdowns',
        'core-tabs', 'core-badges', 'core-toasts', 'core-cards',
        'core-navigation', 'core-avatars', 'core-tooltips', 'core-popovers',
        'core-progress', 'core-context-switcher'
    ];

    // Product pages (at root level) - includes product-*, marketing-* files
    const productPages = [
        'product-checkout-widget', 'product-components', 'product-shopper-passport', 'product-surfaces',
        'marketing-components', 'marketing-heroes', 'marketing-illustration-system', 'marketing-illustrations'
    ];

    // Product subdirectories
    const productDirectories = ['/shopper/', '/merchant/', '/marketing/', '/docs/'];

    // Determine which section we're in based on path
    function getCurrentSection() {
        const path = window.location.pathname;
        const filename = path.split('/').pop().replace('.html', '');

        // Check directory-based sections first
        if (path.includes('/foundation/')) return 'foundation';
        if (path.includes('/components/')) return 'components';
        if (path.includes('/products/')) return 'products';

        // Check for split component subdirectories
        if (path.includes('/core-dropdowns/')) return 'components';
        if (path.includes('/core-navigation/')) return 'components';
        if (path.includes('/core-tables/')) return 'components';

        // Check product subdirectories (shopper, merchant, marketing, docs)
        for (const dir of productDirectories) {
            if (path.includes(dir)) return 'products';
        }

        // Check filename-based sections for root-level pages
        if (foundationPages.includes(filename)) return 'foundation';
        if (componentPages.includes(filename)) return 'components';
        if (productPages.includes(filename)) return 'products';

        return null;
    }

    // Load HTML partial and inject into container
    async function loadPartial(url, containerId) {
        const container = document.getElementById(containerId);
        if (!container) return null;

        try {
            const response = await fetch(basePath + url);
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            const html = await response.text();
            container.innerHTML = html;
            return container;
        } catch (error) {
            console.error(`Failed to load ${url}:`, error);
            return null;
        }
    }

    // Highlight active item in top navigation
    function highlightTopNav() {
        const currentPath = normalizePath(window.location.pathname.replace(basePath, ''));
        const currentSection = getCurrentSection();

        // Handle section links (Foundation, Components, Products)
        const sectionLinks = ['foundation', 'components', 'products'];
        sectionLinks.forEach(section => {
            const link = document.querySelector(`#top-nav a[data-nav="${section}"]`);
            if (link && currentSection === section) {
                link.classList.add('nav-link-active');
                link.classList.remove('text-warm-600');
                link.classList.add('text-ink', 'font-medium');
            }
        });

        // Handle dropdown menu items
        const navLinks = document.querySelectorAll('#top-nav .nav-dropdown-menu a');
        navLinks.forEach(link => {
            const linkPath = normalizePath(link.getAttribute('href'));

            // Check for exact match
            if (currentPath === linkPath) {
                link.classList.add('nav-active');

                // Also highlight the parent dropdown trigger
                const dropdown = link.closest('.nav-dropdown');
                if (dropdown) {
                    const trigger = dropdown.querySelector('.nav-dropdown-trigger');
                    if (trigger) {
                        trigger.classList.add('text-ink', 'font-medium');
                        trigger.classList.remove('text-warm-600');
                    }
                }
            }
        });
    }

    // Highlight active item in side navigation
    function highlightSideNav() {
        const currentPath = normalizePath(window.location.pathname.replace(basePath, ''));
        const sideLinks = document.querySelectorAll('#side-nav .sidebar-link');

        sideLinks.forEach(link => {
            const linkPath = normalizePath(link.getAttribute('href'));

            if (currentPath === linkPath) {
                // Don't activate disabled links
                if (!link.classList.contains('sidebar-link-disabled')) {
                    link.classList.add('sidebar-link-active');

                    // If this link is inside a nav-group, expand the group and highlight parent
                    const navGroup = link.closest('.nav-group');
                    if (navGroup) {
                        navGroup.classList.add('expanded');
                        const header = navGroup.querySelector('.nav-group-header');
                        if (header && !link.classList.contains('nav-group-header')) {
                            header.classList.add('has-active-child');
                        }
                    }
                }
            }
        });

        // Also check if we're on a nav-group index page (expand that group)
        const navGroups = document.querySelectorAll('#side-nav .nav-group');
        navGroups.forEach(group => {
            const header = group.querySelector('.nav-group-header');
            if (header) {
                const headerPath = normalizePath(header.getAttribute('href'));
                if (currentPath === headerPath) {
                    group.classList.add('expanded');
                    header.classList.add('sidebar-link-active');
                }
            }
        });
    }

    // Initialize nav group toggle behavior
    function initNavGroups() {
        const navGroups = document.querySelectorAll('#side-nav .nav-group');

        navGroups.forEach(group => {
            const header = group.querySelector('.nav-group-header');
            if (!header) return;

            // Add click handler to toggle expansion (but allow navigation)
            const chevron = header.querySelector('.nav-group-chevron');
            if (chevron) {
                chevron.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    group.classList.toggle('expanded');
                });

                // Make chevron area larger for easier clicking
                chevron.style.cursor = 'pointer';
                chevron.style.padding = '4px';
                chevron.style.margin = '-4px';
            }
        });
    }

    // Initialize dropdown behavior (CSS handles most, but we add keyboard support)
    function initDropdowns() {
        const dropdowns = document.querySelectorAll('.nav-dropdown');

        dropdowns.forEach(dropdown => {
            const trigger = dropdown.querySelector('.nav-dropdown-trigger');
            if (!trigger) return;

            // Make trigger focusable
            trigger.setAttribute('tabindex', '0');

            // Handle keyboard navigation
            trigger.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    const menu = dropdown.querySelector('.nav-dropdown-menu');
                    const isVisible = menu.style.opacity === '1';

                    if (!isVisible) {
                        menu.style.opacity = '1';
                        menu.style.visibility = 'visible';
                        menu.style.transform = 'translateY(0)';

                        // Focus first link
                        const firstLink = menu.querySelector('a');
                        if (firstLink) firstLink.focus();
                    }
                }

                if (e.key === 'Escape') {
                    const menu = dropdown.querySelector('.nav-dropdown-menu');
                    menu.style.opacity = '';
                    menu.style.visibility = '';
                    menu.style.transform = '';
                    trigger.focus();
                }
            });
        });
    }

    // Add CSS styles for navigation, active states, and sidebar
    function injectActiveStyles() {
        const style = document.createElement('style');
        style.textContent = `
            /* Navigation dropdown styles */
            .nav-dropdown {
                position: relative;
            }
            .nav-dropdown-trigger {
                cursor: pointer;
                display: flex;
                align-items: center;
                gap: 0.25rem;
                white-space: nowrap;
            }
            .nav-dropdown-menu {
                position: absolute;
                top: 100%;
                left: 0;
                min-width: 200px;
                background: white;
                border: 2px solid hsl(30 5% 88%);
                border-radius: 8px;
                box-shadow: 0 4px 12px -2px rgba(26, 15, 10, 0.1);
                padding: 0.5rem 0;
                opacity: 0;
                visibility: hidden;
                transform: translateY(-4px);
                transition: opacity 0.15s ease, transform 0.15s ease, visibility 0.15s;
                z-index: 100;
            }
            .nav-dropdown:hover .nav-dropdown-menu,
            .nav-dropdown:focus-within .nav-dropdown-menu {
                opacity: 1;
                visibility: visible;
                transform: translateY(0);
            }
            .nav-dropdown-menu a {
                display: block;
                padding: 0.5rem 1rem;
                color: hsl(30 8% 35%);
                font-size: 0.875rem;
                transition: background-color 0.1s ease, color 0.1s ease;
            }
            .nav-dropdown-menu a:hover {
                background-color: hsl(150 45% 97%);
                color: hsl(150 100% 27%);
            }
            .nav-dropdown-menu .divider {
                height: 1px;
                background: hsl(30 5% 90%);
                margin: 0.5rem 0;
            }
            .nav-dropdown-trigger svg {
                transition: transform 0.15s ease;
                flex-shrink: 0;
            }
            .nav-dropdown:hover .nav-dropdown-trigger svg {
                transform: rotate(180deg);
            }

            /* Active state for top nav dropdown items */
            .nav-active {
                background-color: hsl(150 45% 97%) !important;
                color: hsl(150 100% 27%) !important;
                font-weight: 500;
            }

            /* Active state for top nav link */
            .nav-link-active {
                color: hsl(150 100% 27%) !important;
            }

            /* Sidebar link styles - Bright Opal treatment */
            .sidebar-link {
                display: block;
                padding: 8px 12px;
                font-size: 14px;
                color: hsl(24 29% 8%);
                border-radius: 6px;
                transition: background-color 150ms;
            }

            .sidebar-link:hover:not(.sidebar-link-disabled) {
                background-color: hsl(30 15% 96%);
            }

            .sidebar-link-active {
                background-color: hsl(150 45% 97%);
                color: hsl(150 100% 27%);
                font-weight: 500;
            }

            .sidebar-link-disabled {
                color: hsl(30 5% 62%);
                pointer-events: none;
            }

            /* Nav group styles for expandable sections */
            .nav-group {
                list-style: none;
            }

            .nav-group-header {
                display: flex;
                align-items: center;
                justify-content: space-between;
            }

            .nav-group-chevron {
                width: 16px;
                height: 16px;
                color: hsl(30 5% 55%);
                transition: transform 150ms ease;
                flex-shrink: 0;
            }

            .nav-group.expanded .nav-group-chevron {
                transform: rotate(90deg);
            }

            .nav-group-items {
                display: none;
                padding-left: 12px;
                margin-top: 2px;
            }

            .nav-group.expanded .nav-group-items {
                display: block;
            }

            .nav-group-items .sidebar-link {
                font-size: 13px;
                padding: 6px 12px;
            }

            /* Active parent when child is active */
            .nav-group-header.has-active-child {
                color: hsl(150 100% 27%);
            }
        `;
        document.head.appendChild(style);
    }

    // Get the sidebar partial URL for the current section
    function getSidebarUrl() {
        const section = getCurrentSection();
        if (section === 'foundation') return '/partials/side-nav-foundation.html';
        if (section === 'components') return '/partials/side-nav-components.html';
        if (section === 'products') return '/partials/side-nav-products.html';
        return null;
    }

    // Main initialization
    async function init() {
        // Inject active state styles
        injectActiveStyles();

        // Load top navigation
        await loadPartial('/partials/top-nav.html', 'top-nav');
        highlightTopNav();
        initDropdowns();

        // Load side navigation based on current section
        const sidebarUrl = getSidebarUrl();
        if (sidebarUrl) {
            const sideNavContainer = document.getElementById('side-nav');
            if (sideNavContainer) {
                await loadPartial(sidebarUrl, 'side-nav');
                highlightSideNav();
                initNavGroups();
            }
        }
    }

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
