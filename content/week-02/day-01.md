+++
title = "Day 01 - 21/09/2026 (On-site)"
weight = 1
+++

## Completed Tasks

### 1. Revised and Updated the Landing Page

- Reviewed and improved the overall layout, content, and visual design of the existing landing page.
- Adjusted responsive breakpoints to ensure proper display across desktop and mobile screen sizes.
- Fixed UI inconsistencies including spacing, typography, and component alignment.

### 2. Migrated Personal Portfolio from HTML to Next.js

#### 2.1. Why migrate from plain HTML to Next.js?

| Aspect | Plain HTML | Next.js |
| :--- | :--- | :--- |
| **Routing** | Manual link management | File-system based routing |
| **Performance** | Static only | SSG / SSR / ISR supported |
| **SEO** | Limited meta control | Built-in `<head>` and metadata API |
| **Maintainability** | Hard to scale | Component-based, reusable |
| **Deployment** | Any static host | Vercel integration, CI/CD built-in |

#### 2.2. Migration steps

1. **Scaffolded a new Next.js project** using `create-next-app` with TypeScript and Tailwind CSS.
2. **Converted static HTML sections** (Hero, About, Skills, Projects, Contact) into individual React components under `components/`.
3. **Set up the App Router** — `app/layout.tsx` for shared layout (Navbar, Footer), `app/page.tsx` as the home entry point.
4. **Moved static assets** (images, fonts, icons) to the `public/` directory and updated all references.
5. **Applied Tailwind CSS** utility classes to replace inline styles and legacy CSS rules.
6. **Configured `next/image`** for optimized image loading with automatic `srcSet` and lazy loading.

#### 2.3. Project structure after migration

```
portfolio/
├── app/
│   ├── layout.tsx       # Global layout: Navbar, Footer, metadata
│   ├── page.tsx         # Home page (all sections combined)
│   └── globals.css      # Global Tailwind base styles
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   └── Contact.tsx
└── public/
    └── images/          # Profile photo, project thumbnails
```

## Lessons Learned

- Moving from plain HTML to Next.js requires thinking in **components and props** rather than duplicated markup.
- `next/image` requires explicit `width` and `height` or a `fill` prop — forgetting this causes build errors.
- Tailwind CSS class ordering matters for readability; using the **Prettier Tailwind plugin** keeps classes consistent.
- The App Router's `layout.tsx` is the right place for anything shared across all pages (Navbar, Footer, global fonts).
