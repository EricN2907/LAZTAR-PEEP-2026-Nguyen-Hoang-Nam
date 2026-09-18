+++
title = "Day 02 - 18/09/2026 (Remote)"
weight = 2
+++

## Theory & Q&A: React.js and Next.js Foundation

### React.js Fundamentals

| # | Question | Answer |
| :--- | :--- | :--- |
| 1 | **What is a Component in React?** | A Component is a reusable UI building block. It can be a function or a class that returns UI elements (JSX). Examples include a Header, Footer, or a Project Card. |
| 2 | **What is JSX?** | JSX is a syntax extension for JavaScript that looks like HTML. It allows you to write UI structures easily. JSX is eventually transformed into standard JavaScript objects (React elements). |
| 3 | **What are Props?** | Props (Properties) are read-only inputs passed from a parent component to a child component. They are used to configure the child component (e.g., passing a `title` or `imageURL`). |
| 4 | **What is State?** | State is a component's personal memory. It holds dynamic data that can change over time (e.g., user input, whether a modal is open). When state changes, React re-renders the component. |
| 5 | **What are React Hooks?** | Hooks are special functions (starting with `use`) that let you "hook into" React features like state and lifecycle within functional components. Examples: `useState`, `useEffect`. |
| 6 | **What is `useEffect`?** | `useEffect` is a hook used to handle side effects—operations that reach outside the React component, such as fetching data from an API, setting up subscriptions, or manually manipulating the DOM. |
| 7 | **Component Lifecycle Phases?** | The 3 main phases are: **Mounting** (added to the screen), **Updating** (re-rendering due to state/prop changes), and **Unmounting** (removed from the screen). |
| 8 | **What is Context API?** | Context API provides a way to pass data deeply through the component tree without having to manually pass props down at every level ("prop drilling"). Useful for global themes or user auth state. |
| 9 | **What is a Single Page Application (SPA)?** | An SPA is a web app that loads a single HTML document and dynamically updates its content via JavaScript as the user navigates, preventing full page reloads and providing a smoother experience. |

### Next.js Fundamentals

| # | Question | Answer |
| :--- | :--- | :--- |
| 10 | **What is Next.js?** | Next.js is a React framework that provides building blocks to create fast web applications. It handles routing, server-side rendering, data fetching, and optimizations out of the box. |
| 11 | **Why use Next.js instead of plain React?** | Plain React is primarily for Client-Side Rendering (CSR), which can be bad for SEO and initial load times. Next.js offers Server-Side Rendering (SSR), Static Site Generation (SSG), file-based routing, and built-in API routes. |
| 12 | **Pages Router vs App Router?** | **Pages Router:** The older routing system mapping the `pages/` directory to routes. <br>**App Router:** The modern, recommended system (`app/`) that supports React Server Components, nested layouts, and advanced streaming. |
| 13 | **How does routing work in Next.js?** | Next.js uses file-system based routing. A folder name becomes the URL path, and a `page.tsx` inside that folder represents the UI for that route (e.g., `app/about/page.tsx` maps to `/about`). |
| 14 | **Does Next.js support TypeScript?** | Yes, it has excellent built-in TypeScript support. Files ending in `.tsx` are used for React components, ensuring type safety for props and states. |

### Rendering Strategies: CSR vs SSR vs SSG vs ISR

| Strategy | Where is UI built? | When is it built? | Use Case |
| :--- | :--- | :--- | :--- |
| **CSR** (Client-Side) | Browser | After JavaScript loads | Highly interactive dashboards behind a login. |
| **SSR** (Server-Side) | Server | On every user request | Dynamic pages relying on real-time data or user sessions. |
| **SSG** (Static Generation) | Build Server | At build time (before deployment) | Marketing pages, blogs, or portfolios that rarely change. |
| **ISR** (Incremental) | Server | Background regeneration at set intervals | E-commerce product pages or public feeds needing periodic updates. |

### App Router File Conventions

| File/Folder | Purpose | URL Path |
| :--- | :--- | :--- |
| `app/layout.tsx` | The global or nested layout shell (Header, Footer). | Doesn't create a route. |
| `app/page.tsx` | The main UI for the route segment. | `/` (Home) |
| `app/projects/page.tsx` | UI for the projects page. | `/projects` |
| `app/projects/[slug]/page.tsx` | Dynamic route for a specific project. | `/projects/football-booking` |
| `app/loading.tsx` | Custom loading UI displayed while a route loads. | Doesn't create a route. |

### Server vs Client Components

By default, all components in the Next.js App Router are **Server Components**. They run on the server, cannot use hooks like `useState`, and send zero JS to the client.
To add interactivity, you must declare a **Client Component** using the `"use client"` directive at the top of the file.

**Example Implementation:**
```tsx
// app/projects/page.tsx (Server Component)
import LikeButton from "@/components/LikeButton"; 

export default function ProjectsPage() { 
  return ( 
    <main> 
      <h1>My Projects</h1> 
      <article> 
        <h2>Football Booking</h2> 
        <LikeButton /> 
      </article> 
    </main> 
  ); 
}
```

```tsx
// components/LikeButton.tsx (Client Component)
"use client"; 
import { useState } from "react"; 

export default function LikeButton() { 
  const [likes, setLikes] = useState(0); 
  
  return ( 
    <button onClick={() => setLikes(likes + 1)}> 
      Like: {likes} 
    </button> 
  ); 
}
```

### Props vs State Comparison

| Feature | Props | State |
| :--- | :--- | :--- |
| **Source** | Passed down from a parent component | Managed internally by the component itself |
| **Mutability** | Read-only (Cannot be changed by the child) | Mutable (Changed using state setter functions) |
| **Purpose** | To configure the component | To track interactive data changes |

### Common Misconceptions

| Misconception | Reality |
| :--- | :--- |
| *"Props cannot change."* | The receiving component cannot change them, but the parent can pass down new props, triggering a re-render. |
| *"useEffect is where all logic goes."* | It should only be used to synchronize with external systems (like APIs). Event handlers are better for user interactions. |
| *"Next.js replaces React."* | Next.js is built *on top* of React. You are still writing React code. |
| *"Client Components only run in the browser."* | They are actually pre-rendered on the server first (for initial HTML), then "hydrated" in the browser to become interactive. |
