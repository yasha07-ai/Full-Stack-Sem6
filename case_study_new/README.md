# E-Commerce SPA Case Study

A comprehensive demonstration of Single Page Application (SPA) architecture with two implementations:

1. **Vanilla JS SPA** — Pure JavaScript, HTML, CSS
2. **React + Vite SPA** — Modern React with component-based design (recommended)

Both showcase core SPA concepts: client-side routing, state management, responsive design, and persistent cart functionality using localStorage.

---

## Quick Start

### Vanilla JS (Root Directory)
```bash
npm install
npm run start
# Open http://localhost:8080
```

### React + Vite (Recommended)
```bash
cd react-app
npm install
npm run dev
# Open http://localhost:5173 (or displayed port)
```

---

## Screenshots

### Home Page
*Interactive home with search and featured products*
<img width="2533" height="1213" alt="Screenshot 2026-01-31 131215" src="https://github.com/user-attachments/assets/aeb0df36-7dac-450e-9bf8-4dbf4e649cc0" />


### Product Catalog
*Browse all products in responsive grid layout*
<img width="2504" height="1216" alt="Screenshot 2026-01-31 131112" src="https://github.com/user-attachments/assets/d5fbe7cc-aab2-418e-8a21-eacb784a8486" />

### Shopping Cart
*Cart with quantity controls and real-time totals*
<img width="2477" height="1209" alt="Screenshot 2026-01-31 131413" src="https://github.com/user-attachments/assets/da40c135-20af-420f-a5c6-1670aeb7a58b" />

### Checkout
*Order form and confirmation flow*
<img width="2511" height="1231" alt="Screenshot 2026-01-31 131459" src="https://github.com/user-attachments/assets/b3440271-c05e-46eb-8d8d-7075d4402181" />

---
## Features

✅ **Interactive Home** — Search & featured products  
✅ **Product Catalog** — Browse all products  
✅ **Product Details** — Full product information  
✅ **Shopping Cart** — Add/remove/update items  
✅ **Cart Persistence** — Data saved in localStorage  
✅ **Checkout Flow** — Demo order placement  
✅ **Responsive Design** — Mobile-first Bootstrap layout  
✅ **Client-Side Routing** — Fast navigation without reloads  
✅ **Real-Time Calculations** — Instant total updates  

---

## Project Structure

```
case_study/
├── index.html              # Vanilla SPA entry
├── src/
│   ├── app.js             # Router, state, logic
│   ├── styles.css         # Styles
│   └── api/products.json  # Product data
├── package.json
├── README.md
└── react-app/             # React implementation
    ├── src/
    │   ├── App.jsx
    │   ├── components/
    │   ├── context/CartContext.jsx
    │   └── data/products.json
    ├── vite.config.js
    └── package.json
```

---

## Technology Stack

**Vanilla SPA:**
- HTML5, CSS3, JavaScript (ES6+)
- Bootstrap 5, Material Icons
- Hash-based routing, localStorage

**React SPA:**
- React 18, React Router 6
- Vite 5 (build tool)
- Bootstrap 5, Material UI 5
- Context API for state

---


