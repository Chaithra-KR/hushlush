# Hushlush Hospitality Dashboard

A sleek, production-grade, and highly responsive web application designed for modern digital hospitality interfaces. Built with fluid user experiences, type-safe workflows, and optimal UI performance in mind.

## 🚀 Key Features

- **Robust Authentication Flow:** Implements a type-safe context provider managing standard sign-in, multi-tier runtime form validations, and asynchronous error boundaries.
- **Guest Access Engine:** Seamless one-click bypass workflow mimicking immediate public viewing/guest state tokens.
- **Adaptive Restaurant Ecosystem:** Fully responsive digital menu grid system built to handle high-density layouts on cross-platform viewport sizes.
- **Micro-Interactions:** Smooth, hardware-accelerated transitions and subtle component animations built on core interaction design guidelines.

---

## 🛠️ Technology Ecosystem

- **Frontend Core:** React 19 (via Vite build toolchain)
- **Language Layer:** TypeScript (Strict type checking, strict props parsing)
- **Styling Architecture:** Tailwind CSS (Utility-first system configured for fast fluid layouts)
- **Navigation Graph:** React Router DOM v6 (Dynamic route guarding and path tables)

---

## 📂 System Architecture

The codebase strictly adheres to architectural separation of concerns (SoC), maintaining an absolute divide between layout representation matrices and state machinery:

```text
├── src/
│   ├── assets/          # High-resolution design tokens and vector placeholders
│   ├── components/      # Global atomic design systems (InputFields, Buttons, MenuCards)
│   ├── context/         # AuthContext.tsx (Centralized state engine for application sessions)
│   ├── pages/
│   │   ├── Login.tsx    # Single-instance interface layer for authentication and error-states
│   │   └── Home.tsx     # The unified dashboard displaying menu catalog systems
│   ├── routes/          # AppRoutes.tsx (Client-side routing engine and route barriers)
│   ├── App.tsx          # System-level initialization and context injectors
│   └── main.tsx         # High-performance Virtual DOM hydration node
└── README.md
```

---

## 🔒 Session & Security Management Note

To optimize performance and eliminate cross-origin backend roundtrip latency in decoupled environments, this application features a centralized **State Mock Authentication Service layer**. 

The validation logic is fully abstracted into isolated state contexts. If deployment requirements necessitate transitioning to a live Express/Node.js microservice architecture in the future, the local data service mock layer can be adapted to an asynchronous remote REST endpoint (`Axios` / `Fetch`) without changing a single line of component layout architecture.

### 🔑 Local Environment Sign-In Contexts
* **Default Profile:** `user@test.com`
* **Default Security Key:** `password123`
* **Public Pipeline:** Click *"Sign as Guest"* to step over authentication barriers instantly.
