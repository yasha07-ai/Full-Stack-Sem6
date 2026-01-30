# E-Commerce SPA (Mini Amazon / Flipkart)

A simple Single Page Application demonstrating product browsing, product detail, cart management, and checkout flow using Bootstrap and Material icons. Uses static JSON for product data and client-side routing.

## Features
- Home, Products, Product Detail, Cart, Checkout (hash routing)
- Add / remove items from cart with real-time totals
- Persistent cart via localStorage
- Responsive layout with Bootstrap

## Run

Option A — Quick (no install):
1. Serve the folder with a static server (recommended) or open `index.html` directly.

Option B — Using Node (recommended):
1. Install dependencies:

```bash
npm install
```

2. Start the static server:

```bash
npm run start
```

3. Open `http://localhost:8080` in your browser.

## Files
- `index.html` — main SPA shell
- `src/app.js` — SPA logic, routing, and state
- `src/styles.css` — style overrides
- `src/api/products.json` — sample product data
- `package.json` — helper start script
