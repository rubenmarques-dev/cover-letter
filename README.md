# Cover Letter — Personal Website

A personal cover-letter / portfolio site for **Ruben Marques**, built with React + Vite and Tailwind CSS. Includes sections for About, Experience, Education, Projects, Skills, and Contact, plus a downloadable PDF CV.

🌐 **Live site:** https://rubenmarques-dev.github.io/cover-letter/

## Tech Stack
- [React 19](https://react.dev/)
- [Vite 8](https://vite.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [ESLint](https://eslint.org/)

## Getting Started

```bash
npm install
npm run dev      # start dev server
npm run build    # production build to ./dist
npm run preview  # preview the production build locally
npm run lint     # run ESLint
```

## Project Structure
```
src/
├── components/   # About, Contact, Education, Experience, Footer, Hero, Navbar, Projects, Skills
├── assets/       # images
├── App.jsx
├── main.jsx
└── index.css
public/
└── ruben_marques.pdf   # downloadable CV
```

## Deployment

The site is automatically deployed to **GitHub Pages** via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) on every push to `main`.

Vite is configured with `base: '/cover-letter/'` in [`vite.config.js`](./vite.config.js) so all asset paths resolve correctly under the GitHub Pages subpath.
