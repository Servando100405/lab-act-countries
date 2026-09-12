# Countries of the World — Router Starter (NO ROUTING YET)

Starter project for **Lab Activity 07**. Four page components are pre-built with real content, but **React Router is not installed and not wired up**. Your job in the lab is to install `react-router` and turn this into a real multi-page app.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

You'll see the Home page rendered inside the Layout. Clicking any nav link (`Countries`, `Bucket List`, `About`) will trigger a full-page reload and land you on a browser 404 — because those URLs aren't wired up on the client. **That's expected. Your lab task is to fix this.**

## Current State

- `main.jsx` — renders `<App />` (no `<BrowserRouter>`)
- `App.jsx` — renders `<Layout><HomePage /></Layout>` (no route table)
- `Layout.jsx` — accepts `{ children }`; nav uses `<a href>` (full reloads)
- Pages — `HomePage`, `CountriesPage`, `BucketListPage`, `AboutPage`, `NotFoundPage` all exist with full content
- `NotFoundPage` — styled 404 with two intentional JSX bugs for you to fix

## Stack

- React 19
- Vite 6
- Tailwind CSS 4 (via `@tailwindcss/vite`)
- DaisyUI 5

## What You'll Add in Lab 07

- Install `react-router`
- Wrap the app in `<BrowserRouter>`
- Build a route table with `<Routes>` + `<Route>`
- Refactor `Layout` to a layout route with `<Outlet />`
- Convert `<a href>` → `<Link>` for client-side navigation
- Add a catch-all `path="*"` for the 404 page
- Fix the two JSX bugs in `NotFoundPage`

See `Lab Activity 07_ Countries of the World with React Router.md` for the full task list.
