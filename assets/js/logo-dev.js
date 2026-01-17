/**
 * Logo.dev API helper
 * Requires env.js to be loaded first (window.ENV must exist)
 */

const LogoDev = {
    /**
     * Build a logo.dev URL for a given domain
     * @param {string} domain - e.g. "sephora.com"
     * @param {object} options - { size: 48, format: 'png' }
     * @returns {string} Full logo.dev URL with token
     */
    getUrl(domain, options = {}) {
        const token = window.ENV?.LOGO_DEV_TOKEN || '';
        const size = options.size || 48;
        const format = options.format || 'png';

        if (!token) {
            console.warn('LogoDev: No token found in window.ENV.LOGO_DEV_TOKEN');
        }

        return `https://img.logo.dev/${domain}?token=${token}&size=${size}&format=${format}`;
    },

    /**
     * Create an img element with fallback to initials
     * @param {object} merchant - { domain, name, initials, fallbackColor }
     * @param {object} options - { size: 48, imgClass: '', fallbackClass: '' }
     * @returns {HTMLElement} Container div with img and fallback
     */
    createAvatar(merchant, options = {}) {
        const size = options.size || 48;
        const imgClass = options.imgClass || `w-12 h-12 rounded-full object-cover border-2 border-ledger`;
        const fallbackClass = options.fallbackClass || `w-12 h-12 rounded-full text-white flex items-center justify-center text-sm font-semibold border-2 border-ledger`;
        const fallbackColor = merchant.fallbackColor || 'bg-warm-400';

        const container = document.createElement('div');
        container.className = 'relative';

        const img = document.createElement('img');
        img.src = this.getUrl(merchant.domain, { size, format: 'png' });
        img.alt = merchant.name;
        img.className = imgClass;
        img.onerror = function() {
            this.style.display = 'none';
            this.nextElementSibling.style.display = 'flex';
        };

        const fallback = document.createElement('div');
        fallback.className = `${fallbackClass} ${fallbackColor}`;
        fallback.style.display = 'none';
        fallback.textContent = merchant.initials;

        container.appendChild(img);
        container.appendChild(fallback);

        return container;
    },

    /**
     * Initialize all logo.dev images on the page
     * Replaces pk_YOUR_TOKEN placeholders with actual token
     */
    initPage() {
        const token = window.ENV?.LOGO_DEV_TOKEN || '';
        if (!token) {
            console.warn('LogoDev: No token found. Images will show fallbacks.');
            return;
        }

        // Find all img tags with logo.dev URLs (with placeholder OR already tokenized)
        document.querySelectorAll('img[src*="img.logo.dev"]').forEach(img => {
            // Check if this image needs token replacement
            if (img.src.includes('pk_YOUR_TOKEN')) {
                const newSrc = img.src.replace('pk_YOUR_TOKEN', token);

                // Get the fallback element (next sibling)
                const fallback = img.nextElementSibling;

                // Reset visibility - show image, hide fallback
                img.style.display = '';
                if (fallback) {
                    fallback.style.display = 'none';
                }

                // Set up handlers for the retry
                img.onload = function() {
                    this.style.display = '';
                    if (fallback) fallback.style.display = 'none';
                };
                img.onerror = function() {
                    this.style.display = 'none';
                    if (fallback) fallback.style.display = 'flex';
                };

                // Trigger new request with valid token
                img.src = newSrc;
            }
        });
    }
};

// Auto-init when DOM is ready (if env.js is loaded)
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => LogoDev.initPage());
} else {
    LogoDev.initPage();
}
