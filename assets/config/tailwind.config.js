/**
 * Saltwyk Design System - Tailwind CDN Configuration
 * Version: 0.5.0
 *
 * Load this AFTER the Tailwind CDN script:
 *   <script src="https://cdn.tailwindcss.com"></script>
 *   <script src="assets/config/tailwind.config.js"></script>
 */

tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      // ===========================================
      // COLORS (HSL values without wrapper)
      // ===========================================
      colors: {
        // Named surface colors
        ledger: "hsl(var(--ledger))",
        ink: "hsl(var(--ink))",

        // Warm Gray Scale (UI Workhorse)
        warm: {
          50: "hsl(var(--warm-50))",
          100: "hsl(var(--warm-100))",
          200: "hsl(var(--warm-200))",
          300: "hsl(var(--warm-300))",
          400: "hsl(var(--warm-400))",
          500: "hsl(var(--warm-500))",
          600: "hsl(var(--warm-600))",
          700: "hsl(var(--warm-700))",
          800: "hsl(var(--warm-800))",
          900: "hsl(var(--warm-900))",
        },

        // Intaglio Scale (Brand Brown)
        intaglio: {
          50: "hsl(var(--intaglio-50))",
          100: "hsl(var(--intaglio-100))",
          200: "hsl(var(--intaglio-200))",
          300: "hsl(var(--intaglio-300))",
          400: "hsl(var(--intaglio-400))",
          500: "hsl(var(--intaglio-500))",
          600: "hsl(var(--intaglio-600))",
          700: "hsl(var(--intaglio-700))",
          800: "hsl(var(--intaglio-800))",
          900: "hsl(var(--intaglio-900))",
          950: "hsl(var(--intaglio-950))",
        },

        // Emerald Scale (Primary Action)
        emerald: {
          50: "hsl(var(--emerald-50))",
          100: "hsl(var(--emerald-100))",
          200: "hsl(var(--emerald-200))",
          300: "hsl(var(--emerald-300))",
          400: "hsl(var(--emerald-400))",
          500: "hsl(var(--emerald-500))",
          600: "hsl(var(--emerald-600))",
          700: "hsl(var(--emerald-700))",
          800: "hsl(var(--emerald-800))",
          900: "hsl(var(--emerald-900))",
        },

        // Cyan Thread Scale (Info, Links)
        cyan: {
          50: "hsl(var(--cyan-50))",
          100: "hsl(var(--cyan-100))",
          200: "hsl(var(--cyan-200))",
          300: "hsl(var(--cyan-300))",
          400: "hsl(var(--cyan-400))",
          500: "hsl(var(--cyan-500))",
          600: "hsl(var(--cyan-600))",
          700: "hsl(var(--cyan-700))",
          800: "hsl(var(--cyan-800))",
          900: "hsl(var(--cyan-900))",
          thread: "hsl(var(--cyan-thread))",
        },

        // Magenta Thread Scale (Error, Destructive)
        magenta: {
          50: "hsl(var(--magenta-50))",
          100: "hsl(var(--magenta-100))",
          200: "hsl(var(--magenta-200))",
          300: "hsl(var(--magenta-300))",
          400: "hsl(var(--magenta-400))",
          500: "hsl(var(--magenta-500))",
          600: "hsl(var(--magenta-600))",
          700: "hsl(var(--magenta-700))",
          800: "hsl(var(--magenta-800))",
          900: "hsl(var(--magenta-900))",
          thread: "hsl(var(--magenta-thread))",
        },

        // Lime Thread Scale (Success, Positive)
        lime: {
          50: "hsl(var(--lime-50))",
          100: "hsl(var(--lime-100))",
          200: "hsl(var(--lime-200))",
          300: "hsl(var(--lime-300))",
          400: "hsl(var(--lime-400))",
          500: "hsl(var(--lime-500))",
          600: "hsl(var(--lime-600))",
          700: "hsl(var(--lime-700))",
          800: "hsl(var(--lime-800))",
          900: "hsl(var(--lime-900))",
          thread: "hsl(var(--lime-thread))",
        },

        // Orange Thread Scale (Warning, Attention)
        orange: {
          50: "hsl(var(--orange-50))",
          100: "hsl(var(--orange-100))",
          200: "hsl(var(--orange-200))",
          300: "hsl(var(--orange-300))",
          400: "hsl(var(--orange-400))",
          500: "hsl(var(--orange-500))",
          600: "hsl(var(--orange-600))",
          700: "hsl(var(--orange-700))",
          800: "hsl(var(--orange-800))",
          900: "hsl(var(--orange-900))",
          thread: "hsl(var(--orange-thread))",
        },

        // Sepia Scale (Illustrations)
        sepia: {
          50: "hsl(var(--sepia-50))",
          100: "hsl(var(--sepia-100))",
          200: "hsl(var(--sepia-200))",
          300: "hsl(var(--sepia-300))",
          400: "hsl(var(--sepia-400))",
          500: "hsl(var(--sepia-500))",
          600: "hsl(var(--sepia-600))",
          700: "hsl(var(--sepia-700))",
          800: "hsl(var(--sepia-800))",
          900: "hsl(var(--sepia-900))",
        },

        // shadcn semantic colors
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
      },

      // ===========================================
      // TYPOGRAPHY
      // ===========================================
      fontFamily: {
        display: ["'DM Serif Display'", "Georgia", "serif"],
        body: ["'Inter'", "system-ui", "sans-serif"],
        brand: ["'Outfit'", "system-ui", "sans-serif"],
        sans: ["'Inter'", "system-ui", "sans-serif"],
      },

      fontSize: {
        // Hero sizes for marketing
        "6xl": ["3.75rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "7xl": ["4.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "8xl": ["6rem", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "9xl": ["8rem", { lineHeight: "1", letterSpacing: "-0.03em" }],
      },

      // ===========================================
      // BORDERS
      // ===========================================
      borderWidth: {
        hairline: "1px",
        DEFAULT: "1.5px",
        emphasis: "2px",
        heavy: "3px",
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      // ===========================================
      // BACKGROUND IMAGES (Gradients)
      // ===========================================
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, hsl(var(--emerald-500)), hsl(var(--cyan-500)))",
        "gradient-brand-vertical": "linear-gradient(180deg, hsl(var(--emerald-500)), hsl(var(--cyan-500)))",
        "gradient-warm": "linear-gradient(135deg, hsl(var(--intaglio-900)), hsl(var(--intaglio-500)))",
        "gradient-hero": "linear-gradient(135deg, hsl(var(--emerald-500)), hsl(var(--emerald-700)) 50%, hsl(var(--intaglio-900)))",
        "gradient-subtle": "linear-gradient(180deg, hsl(var(--ledger)), hsl(var(--warm-100)))",
        "gradient-dark": "linear-gradient(180deg, hsl(var(--intaglio-900)), hsl(var(--intaglio-950)))",
        "gradient-thread-vibrant": "linear-gradient(135deg, hsl(var(--cyan-thread)), hsl(var(--magenta-thread)))",
        "gradient-thread-warm": "linear-gradient(135deg, hsl(var(--lime-thread)), hsl(var(--orange-thread)))",
        "gradient-sepia": "linear-gradient(180deg, hsl(var(--sepia-50)), hsl(var(--sepia-300)))",
      },

      // ===========================================
      // ANIMATIONS
      // ===========================================
      animation: {
        // Entrance animations
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "fade-in-down": "fadeInDown 0.6s ease-out forwards",
        "slide-in-left": "slideInLeft 0.5s ease-out forwards",
        "slide-in-right": "slideInRight 0.5s ease-out forwards",
        "scale-in": "scaleIn 0.3s ease-out forwards",
        "slide-up": "slideUp 0.3s ease-out forwards",
        "celebrate-pop": "celebratePop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",

        // Continuous animations
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        "pulse-dot": "pulseDot 1.5s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "spin": "spin 1s linear infinite",
      },

      keyframes: {
        // Entrance keyframes
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(100%)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        celebratePop: {
          "0%": { opacity: "0", transform: "scale(0.8)" },
          "70%": { opacity: "1", transform: "scale(1.05)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },

        // Continuous keyframes
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseDot: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(16, 185, 129, 0.4)" },
          "50%": { boxShadow: "0 0 20px 10px rgba(16, 185, 129, 0.2)" },
        },
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },

      // ===========================================
      // TIMING / EASING
      // ===========================================
      transitionDuration: {
        75: "75ms",
        100: "100ms",
        150: "150ms",
        200: "200ms",
        300: "300ms",
        400: "400ms",
        500: "500ms",
        700: "700ms",
        1000: "1000ms",
      },

      transitionTimingFunction: {
        "ease-out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "ease-out-back": "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
    },
  },
};
