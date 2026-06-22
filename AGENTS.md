# Agent Instructions

This file gives coding agents (GitHub Copilot, Claude Code, Codex, Cursor, etc.) the context they need to work effectively in this repo.

## Project
Personal cover-letter / portfolio site for **Ruben Marques**. Single-page React app deployed as a static site to GitHub Pages at https://rubenmarques-dev.github.io/cover-letter/.

## Tech stack
- **React 19** (function components + hooks only — no class components)
- **Vite 8** (build tool & dev server)
- **Tailwind CSS 4** via `@tailwindcss/vite` (utility-first; avoid custom CSS unless necessary)
- **ESLint 10** with `eslint-plugin-react-hooks` and `eslint-plugin-react-refresh`
- **Node 20+** (matches the CI workflow)
- Plain **JavaScript (JSX)** — no TypeScript. Do not introduce TS.

## Commands
```bash
npm install      # install deps
npm run dev      # local dev server (http://localhost:5173/cover-letter/)
npm run build    # production build → ./dist
npm run preview  # serve the production build locally
npm run lint     # ESLint — must pass before committing
```
Always run `npm run lint` and `npm run build` after non-trivial changes to verify nothing is broken.

## Repository layout
```
src/
├── components/   # one component per file: About, Contact, Education, Experience,
│                 # Footer, Hero, Navbar, Projects, Skills
├── assets/       # imported images (bundled by Vite)
├── App.jsx       # top-level layout, composes the section components
├── main.jsx      # React entry point
├── App.css       # minimal app-level styles
└── index.css     # Tailwind directives + global styles
public/           # static assets served as-is (e.g. ruben_marques.pdf, favicon.svg)
.github/workflows/deploy.yml  # GitHub Pages deploy on push to main
vite.config.js   # configures base path '/cover-letter/'
```

## Conventions
- **Components**: PascalCase filenames in `src/components/`, default-exported function components.
- **Styling**: Tailwind utility classes in JSX. Reach for `index.css` / `App.css` only for things Tailwind genuinely cannot express.
- **Imports**: relative imports within `src/`. No path aliases configured.
- **State**: local `useState` / `useReducer`. No global state library — keep it simple.
- **Assets**:
  - Files imported from `src/assets/` are hashed by Vite — use ES imports.
  - Files in `public/` are served verbatim. **Always reference them via `import.meta.env.BASE_URL`**, e.g.
    ```jsx
    href={`${import.meta.env.BASE_URL}ruben_marques.pdf`}
    ```
    Never hard-code a leading `/` — the site lives under `/cover-letter/` on GitHub Pages and links would 404.
- **Routing**: none. If routing is ever added, use a hash router or pass `basename={import.meta.env.BASE_URL}`.
- **Accessibility**: prefer semantic HTML (`<nav>`, `<section>`, `<button>`, etc.); always add `alt` text on images and `aria-label` on icon-only controls.
- **Comments**: only comment non-obvious logic. Avoid restating what the code says.

## Deployment
- `main` is the deploy branch. Every push triggers `.github/workflows/deploy.yml`, which runs `npm ci && npm run build` and publishes `dist/` to GitHub Pages.
- The repo Settings → Pages → Source must be set to **GitHub Actions**.
- If you change `vite.config.js`'s `base`, update the README live URL and any hard-coded references.

## Things to avoid
- Don't convert the codebase to TypeScript.
- Don't add heavy dependencies (state libraries, UI kits, CSS-in-JS) without a clear need.
- Don't commit the `dist/` folder or `node_modules/` (both are gitignored).
- Don't hard-code absolute paths to `public/` assets — use `import.meta.env.BASE_URL`.
- Don't introduce server-side code; this is a fully static site.

## When making changes
1. Make the smallest change that fully solves the task.
2. Run `npm run lint` and `npm run build`.
3. Use a concise commit message in imperative mood (e.g. `Fix CV download link`).
