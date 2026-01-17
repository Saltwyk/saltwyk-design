# Saltwyk Design System

Design system documentation for Saltwyk products.

## Viewing the Site

This site uses JavaScript to load navigation components. To view it locally, you need to run a web server.

### Quick Start (Python)

From the project root directory:

```bash
# 1. Set up environment (first time only)
cp .env.example .env
# Edit .env and add your LOGO_DEV_TOKEN and LOGO_DEV_SECRET

# 2. Start the development server
python3 serve.py
```

Then open [http://localhost:8000](http://localhost:8000) in your browser.

The `serve.py` script:
- Reads API keys from `.env`
- Generates `assets/config/env.js` (gitignored)
- Starts an HTTP server on port 8000

### Simple Server (no API keys)

If you don't need logo.dev API support:

```bash
python3 -m http.server 8000
```

### Alternative Servers

**Node.js (npx):**
```bash
npx serve
```

**PHP:**
```bash
php -S localhost:8000
```

**Ruby:**
```bash
ruby -run -e httpd . -p 8000
```
