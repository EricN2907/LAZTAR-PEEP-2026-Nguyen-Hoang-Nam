+++
title = "Day 03 - Sep 17, 2026"
weight = 3
+++

## A. Practical work

### 1. Objective
- Initialize and configure the first practical project using **Next.js (App Router)** and **Tailwind CSS**.
- Build a complete "VibeMatch" Landing Page - a platform connecting users through musical preferences.
- Ideate and plan the UI/UX and content structure for the Personal Portfolio project scheduled for Day 4.

### 2. Product definition and UI/UX planning
- **Product Definition (VibeMatch):** A music "dating/matching" platform. Core features include: discovering vibe-mates across genres (EDM, Lo-fi, Indie), mood-based suggested playlists, and trending track leaderboards.
- **UI/UX Direction:** 
  - Dark Mode paired with Neon lights (Cyan/Fuchsia) to create a Cyberpunk and Nightlife/Festival atmosphere.
  - Implemented Glassmorphism on the Navbar for depth.
  - Focused heavily on micro-interactions (e.g., scaling album covers, glowing neon shadows, pulsating CTA buttons).
- **Portfolio Planning (Day 4):** Identified necessary sections (Hero, Skills, Projects, Contact), settled on a personal color palette, and sketched preliminary wireframes before coding.

### 3. Landing page implementation
- **Structure & Routing:** Organized standard App Router directories featuring a global `layout.tsx`, home `page.tsx`, and sub-pages (`/players`, `/features`).
- **Animation Integration (Framer Motion):** 
  - Created smooth scroll-triggered transitions (Fade-in, Slide-up).
  - Built an exclusive "Fandom Spotlight: Alan Walker" interactive section utilizing SVG Path animations to draw a glowing "W".
- **Audio Handling:** Embedded a continuous Lofi background audio player, and implemented dynamic audio snippets that play only when users hover over the vertices of the "W".

### 4. Verification and issues resolved
- **Issue 1 (Audio Stream Conflict):** When interacting with the "W", the EDM song would overlap with the Lofi background music, creating a messy audio experience.
  - *Resolution:* Used `useRef` and `useState` to catch hover events. Force-paused the background Lofi track while hovering over the "W" nodes, allowing only the EDM snippet to play.
- **Issue 2 (SVG Coordinates on Small Screens):** The glowing interactive nodes misaligned from the peaks of the "W" when the browser window was resized to mobile dimensions.
  - *Resolution:* Replaced fixed pixel (`px`) positioning with percentage-based (`%`) coordinates mapped directly over the SVG's `viewBox="0 0 100 100"`. This ensured perfect alignment across all responsive breakpoints.

---

## B. Summary

### What I learned
- Deepened understanding of Next.js Client-side Navigation via the `<Link>` tag to achieve a seamless Single Page Application (SPA) experience.
- Mastered the technique of combining **Framer Motion** with the **SVG** coordinate system to build complex, lightweight interactive graphic animations.
- Improved skills in managing and controlling HTML5 `<audio>` elements securely within React Functional Components.

### Challenges and how I addressed them
- **Challenge:** Managing the Landing Page source code within the same repository as the Hugo documentation caused file clutter and triggered deployment configuration errors on Vercel.
- **Resolution:** Extracted the entire Landing Page source code into a brand new, isolated GitHub repository. This allowed Vercel to instantly recognize the Next.js framework and automate the CI/CD pipeline flawlessly without configuration conflicts.

### URL PAGE
- **Source Code (GitHub):** [https://github.com/EricN2907/my-landing-page](https://github.com/EricN2907/my-landing-page)
- **Live Site (Vercel):** [https://my-landing-page.vercel.app](https://my-landing-page.vercel.app) *(Update this domain to your actual Vercel deployment link)*
