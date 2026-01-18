/**
 * Saltwyk Design System - Navigation Loader
 *
 * Handles dynamic loading of navigation partials and active state management.
 * Uses a unified sidebar with section filtering based on current URL path.
 *
 * Sections:
 * - core: /core/* pages (tokens, components, brand)
 * - shopper: /shopper/* pages
 * - merchant: /merchant/* pages
 * - marketing: /marketing/* pages
 * - docs: /docs/* pages
 */

(function() {
    'use strict';

    // Get the base path for loading partials
    function getBasePath() {
        const path = window.location.pathname;
        const match = path.match(/^(\/[^\/]+)/);
        if (window.location.hostname.includes('github.io') && match) {
            return match[1];
        }
        return '';
    }

    const basePath = getBasePath();

    // Normalize path for comparison
    function normalizePath(path) {
        let normalized = path
            .replace(/\/index\.html$/, '/')
            .replace(/\/$/, '');
        if (normalized === '') normalized = '/';
        return normalized;
    }

    // Determine which section we're in based on path
    function getCurrentSection() {
        const path = window.location.pathname;

        // Check path-based sections (new structure)
        if (path.includes('/core/')) return 'core';
        if (path.includes('/shopper/')) return 'shopper';
        if (path.includes('/merchant/')) return 'merchant';
        if (path.includes('/marketing/')) return 'marketing';
        if (path.includes('/docs/')) return 'docs';

        // Legacy support: old paths during migration
        if (path.includes('/foundation/')) return 'core';
        if (path.includes('/components/')) return 'core';
        if (path.includes('/products/shopper/')) return 'shopper';
        if (path.includes('/products/merchant/')) return 'merchant';
        if (path.includes('/products/marketing/')) return 'marketing';
        if (path.includes('/products/docs/')) return 'docs';

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

    // Show only the relevant section in the unified sidebar
    function showCurrentSection() {
        const currentSection = getCurrentSection();
        if (!currentSection) return;

        // Hide all sections first
        const allSections = document.querySelectorAll('#side-nav [data-section]');
        allSections.forEach(section => {
            section.classList.add('hidden');
        });

        // Show the current section
        const activeSection = document.querySelector(`#side-nav [data-section="${currentSection}"]`);
        if (activeSection) {
            activeSection.classList.remove('hidden');
        }
    }

    // Highlight active item in top navigation
    function highlightTopNav() {
        const currentSection = getCurrentSection();

        // Handle Core dropdown activation
        if (currentSection === 'core') {
            const coreDropdown = document.querySelector('#top-nav [data-dropdown="core"]');
            if (coreDropdown) {
                const trigger = coreDropdown.querySelector('.nav-dropdown-trigger');
                if (trigger) {
                    trigger.classList.add('text-ink', 'font-medium');
                    trigger.classList.remove('text-warm-600');
                }
            }
        }

        // Handle Products dropdown activation
        if (['shopper', 'merchant', 'marketing', 'docs'].includes(currentSection)) {
            const productsDropdown = document.querySelector('#top-nav [data-dropdown="products"]');
            if (productsDropdown) {
                const trigger = productsDropdown.querySelector('.nav-dropdown-trigger');
                if (trigger) {
                    trigger.classList.add('text-ink', 'font-medium');
                    trigger.classList.remove('text-warm-600');
                }
            }
        }

        // Highlight specific dropdown menu items
        const currentPath = normalizePath(window.location.pathname.replace(basePath, ''));
        const navLinks = document.querySelectorAll('#top-nav .nav-dropdown-menu a');
        navLinks.forEach(link => {
            const linkPath = normalizePath(link.getAttribute('href'));
            if (currentPath === linkPath || currentPath.startsWith(linkPath.replace(/\/$/, '') + '/')) {
                link.classList.add('nav-active');
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
                if (!link.classList.contains('sidebar-link-disabled')) {
                    link.classList.add('sidebar-link-active');

                    // If inside a nav-group, expand it
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

        // Also expand nav-groups if we're on the header page
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

            const chevron = header.querySelector('.nav-group-chevron');
            if (chevron) {
                chevron.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    group.classList.toggle('expanded');
                });
                chevron.style.cursor = 'pointer';
                chevron.style.padding = '4px';
                chevron.style.margin = '-4px';
            }
        });
    }

    // Initialize dropdown behavior
    function initDropdowns() {
        const dropdowns = document.querySelectorAll('.nav-dropdown');

        dropdowns.forEach(dropdown => {
            const trigger = dropdown.querySelector('.nav-dropdown-trigger');
            if (!trigger) return;

            trigger.setAttribute('tabindex', '0');

            trigger.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    const menu = dropdown.querySelector('.nav-dropdown-menu');
                    const isVisible = menu.style.opacity === '1';

                    if (!isVisible) {
                        menu.style.opacity = '1';
                        menu.style.visibility = 'visible';
                        menu.style.transform = 'translateY(0)';
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

    // Inject CSS styles for navigation
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
            .nav-dropdown-menu .menu-label {
                padding: 0.5rem 1rem 0.25rem;
                font-size: 0.6875rem;
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 0.05em;
                color: hsl(30 5% 55%);
            }
            .nav-dropdown-trigger svg {
                transition: transform 0.15s ease;
                flex-shrink: 0;
            }
            .nav-dropdown:hover .nav-dropdown-trigger svg {
                transform: rotate(180deg);
            }

            /* Product surface indicators in dropdown */
            .nav-dropdown-menu .surface-indicator {
                display: inline-block;
                width: 8px;
                height: 8px;
                border-radius: 50%;
                margin-right: 8px;
            }
            .nav-dropdown-menu .surface-indicator.shopper { background: hsl(150 100% 27%); }
            .nav-dropdown-menu .surface-indicator.merchant { background: hsl(20 100% 50%); }
            .nav-dropdown-menu .surface-indicator.marketing { background: hsl(280 80% 50%); }
            .nav-dropdown-menu .surface-indicator.docs { background: hsl(30 5% 55%); }

            /* Active state for dropdown items */
            .nav-active {
                background-color: hsl(150 45% 97%) !important;
                color: hsl(150 100% 27%) !important;
                font-weight: 500;
            }

            /* Sidebar link styles */
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

            /* Nav group styles */
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

            .nav-group-header.has-active-child {
                color: hsl(150 100% 27%);
            }

            /* Section visibility */
            .nav-section.hidden {
                display: none;
            }
        `;
        document.head.appendChild(style);
    }

    // Main initialization
    async function init() {
        // Inject styles
        injectActiveStyles();

        // Load top navigation
        await loadPartial('/partials/top-nav.html', 'top-nav');
        highlightTopNav();
        initDropdowns();

        // Load unified side navigation
        const sideNavContainer = document.getElementById('side-nav');
        if (sideNavContainer) {
            await loadPartial('/partials/side-nav.html', 'side-nav');
            showCurrentSection();
            highlightSideNav();
            initNavGroups();
        }
    }

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
