/**
 * Saltwyk Design System - View Toggle
 *
 * Handles mobile/desktop view switching for spec pages.
 * Persists preference in sessionStorage for the current session.
 *
 * Include this script at the end of the body on pages with view toggles.
 *
 * TODO: Add viewport width constraint for mobile mode. When mobile is active,
 * constrain .viewport-content elements to max-width: 480px and center them.
 * When desktop is active, expand to max-width: 100%. See view-toggle.css.
 */

(function() {
    'use strict';

    var STORAGE_KEY = 'saltwyk-view-preference';
    var DESKTOP_CLASS = 'show-desktop';
    var DEFAULT_VIEW = 'mobile';

    function getSavedPreference() {
        try {
            var saved = sessionStorage.getItem(STORAGE_KEY);
            if (saved === 'mobile' || saved === 'desktop') {
                return saved;
            }
        } catch (e) {
            // sessionStorage not available
        }
        return DEFAULT_VIEW;
    }

    function savePreference(view) {
        try {
            sessionStorage.setItem(STORAGE_KEY, view);
        } catch (e) {
            // Silently fail if storage not available
        }
    }

    function getContentContainer() {
        var main = document.querySelector('main');
        if (main) return main;
        return document.body;
    }

    function setView(view, container, buttons) {
        if (view === 'desktop') {
            container.classList.add(DESKTOP_CLASS);
        } else {
            container.classList.remove(DESKTOP_CLASS);
        }

        buttons.forEach(function(btn) {
            var btnView = btn.getAttribute('data-view');
            if (btnView === view) {
                btn.classList.add('active');
                btn.setAttribute('aria-pressed', 'true');
            } else {
                btn.classList.remove('active');
                btn.setAttribute('aria-pressed', 'false');
            }
        });

        savePreference(view);
    }

    function handleClick(event, container, buttons) {
        var button = event.currentTarget;
        var view = button.getAttribute('data-view');

        if (view && !button.classList.contains('active')) {
            setView(view, container, buttons);
        }
    }

    function handleKeydown(event, buttons) {
        var buttonsArray = Array.from(buttons);
        var currentIndex = buttonsArray.indexOf(document.activeElement);

        if (currentIndex === -1) return;

        var newIndex = currentIndex;

        switch (event.key) {
            case 'ArrowLeft':
            case 'ArrowUp':
                event.preventDefault();
                newIndex = currentIndex > 0 ? currentIndex - 1 : buttonsArray.length - 1;
                break;
            case 'ArrowRight':
            case 'ArrowDown':
                event.preventDefault();
                newIndex = currentIndex < buttonsArray.length - 1 ? currentIndex + 1 : 0;
                break;
            case 'Home':
                event.preventDefault();
                newIndex = 0;
                break;
            case 'End':
                event.preventDefault();
                newIndex = buttonsArray.length - 1;
                break;
            default:
                return;
        }

        buttonsArray[newIndex].focus();
        buttonsArray[newIndex].click();
    }

    function initViewToggles() {
        var toggleContainers = document.querySelectorAll('.view-toggle');

        if (toggleContainers.length === 0) {
            return;
        }

        var container = getContentContainer();
        var savedView = getSavedPreference();

        toggleContainers.forEach(function(toggleContainer) {
            var buttons = toggleContainer.querySelectorAll('.toggle-btn');

            if (buttons.length === 0) return;

            setView(savedView, container, buttons);

            buttons.forEach(function(btn) {
                btn.addEventListener('click', function(e) {
                    handleClick(e, container, buttons);
                });
            });

            toggleContainer.addEventListener('keydown', function(e) {
                handleKeydown(e, buttons);
            });

            toggleContainer.setAttribute('role', 'group');
            toggleContainer.setAttribute('aria-label', 'View mode toggle');
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initViewToggles);
    } else {
        initViewToggles();
    }
})();
