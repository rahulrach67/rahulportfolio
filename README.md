# Aditya Pillai — Portfolio (Angular 9)

A clean, modern developer portfolio built with **Angular 9**, inspired by [aditya-pillai.vercel.app](https://aditya-pillai.vercel.app/).

## Features

- **Responsive** — fully mobile-optimised
- **Dark theme** — custom CSS variables with an accent green palette
- **Typing animation** — role cycling with cursor blink effect
- **Animated code card** — syntax-highlighted mock TypeScript in the hero
- **Skills filter** — category-based filtering with animated progress bars
- **Projects grid** — show/hide with smooth transition, live + GitHub links
- **Reactive contact form** — Angular Reactive Forms with validation + fake submission UX
- **Smooth scroll** — section-by-section navigation
- **Scroll-aware navbar** — glass blur on scroll

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── navbar/          # Fixed nav with mobile hamburger menu
│   │   ├── hero/            # Animated hero with typing effect & code card
│   │   ├── about/           # About section with stats grid
│   │   ├── skills/          # Skills with filter tabs & progress bars
│   │   ├── projects/        # Projects grid with show more/less
│   │   ├── contact/         # Reactive form with validation
│   │   └── footer/          # Footer with socials
│   ├── services/
│   │   └── portfolio.service.ts   # All data (projects, skills)
│   ├── app.module.ts
│   └── app-routing.module.ts
├── environments/
├── styles.scss              # Global design tokens & utilities
└── index.html
```

## Getting Started

### Prerequisites
- Node.js 12+
- Angular CLI 9

```bash
# Install Angular CLI globally
npm install -g @angular/cli@9

# Install dependencies
npm install

# Start dev server
ng serve

# Build for production
ng build --prod
```

Open [http://localhost:4200](http://localhost:4200) in your browser.

## Customization

### Update Your Info
Edit `src/app/services/portfolio.service.ts` to update:
- Projects list
- Skills & proficiency levels

Edit component templates to update:
- Name, bio, location
- Social media links
- Email address

### Theming
All design tokens are in `src/styles.scss` under `:root`. Change `--accent` to any color to retheme the entire site instantly.

```scss
:root {
  --accent: #00ff88;      /* Change this */
  --bg-primary: #0a0a0f;  /* Main background */
  --bg-secondary: #111118;
  --text-primary: #f0f0f5;
}
```

## Tech Stack
- **Angular 9** with Ivy renderer
- **TypeScript 3.8**
- **SCSS** with CSS custom properties
- **Angular Reactive Forms** for contact form
- **Google Fonts** — Syne (display) + Space Mono (code)

## License
MIT
