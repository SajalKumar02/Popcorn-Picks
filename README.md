# Popcorn-Picks

A movie discovery UI built with **React + Vite**, **React Router**, and **Tailwind CSS v4**.

Right now the project is mainly **UI + routing scaffolding** (sidebar layout, navbar with search input, placeholder pages). The TMDB API integration and favorites system are listed in the roadmap and can be implemented next.

## Tech stack

- **React 19**
- **Vite**
- **React Router**
- **Tailwind CSS v4** (via `@tailwindcss/vite`)
- **ESLint** (flat config)

## Getting started

### Prerequisites

- Node.js (LTS recommended)
- npm (ships with Node)

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Then open the local URL shown in the terminal (Vite default is typically `http://localhost:5173`).

### Other scripts

```bash
npm run build
npm run preview
npm run lint
```

## App routes

Defined in `src/App.jsx`:

- **`/`**: Home page
- **`/favourites`**: Favorites page (placeholder)
- **`/movie/:id`**: Movie details page (placeholder)
- **`/already-watched`**: Already-watched page (placeholder)

## Project structure

High-level layout:

```
.
├─ public/                 # Static assets (logos, sample images)
├─ src/
│  ├─ api/                 # API layer (currently empty placeholders)
│  ├─ components/
│  │  ├─ Home/             # Navbar + home components
│  │  └─ Sidebar/          # Sidebar + mini-cards
│  ├─ hooks/               # Custom hooks (currently empty placeholder)
│  ├─ layout/              # App layout (Sidebar + Outlet)
│  ├─ pages/               # Route pages (Home/Favourites/MovieDetails)
│  ├─ App.jsx              # Router config
│  └─ main.jsx             # React entry
└─ vite.config.js
```

## UI notes

- **Sidebar**: `src/components/Sidebar/Sidebar.jsx` (shows a “Watched” list using images in `public/`)
- **Layout**: `src/layout/Layout.jsx` wraps routes with Sidebar + `<Outlet />`
- **Styling**: Tailwind v4 with a couple of global utility classes in `src/index.css`

## Environment variables (planned)

TMDB is referenced in `features.txt`, but there is **no API integration yet** (`src/api/movieApi.js` is currently empty).

When you implement TMDB requests, a typical Vite env var setup would be:

- `VITE_TMDB_API_KEY=...`

If you add this, also add a `.env.example` file and update this section with the exact required variables.

## Roadmap (from `features.txt`)

- **Phase 1**: Trending movies (cards, loading/error states)
- **Phase 2**: Search + debounced input (300–500ms)
- **Phase 3**: Routing for details page (`/movie/:id`)
- **Phase 4**: Favorites (localStorage persistence, custom hooks)
- **Phase 5**: Pagination or infinite scroll

## Assets

The `public/` folder includes:

- `logo-light.svg`, `logo-dark.svg`
- `MovieImage1.jpeg`, `MovieImage2.jpeg`, `MovieImage3.jpeg` (used in the sidebar watched list)
