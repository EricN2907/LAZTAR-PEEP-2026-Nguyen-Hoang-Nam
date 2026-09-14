+++
title = "Day 02 - 24/06/2026"
weight = 2
+++

## Tasks Completed

Implemented **Authentication** feature for **Teezy** Mobile app on `project-2/feat/authentication` branch:

### 1. Project Configuration & Resources
- Added new Google Fonts (`Roboto`, `Barlow Condensed`), Teezy brand logo, onboarding background image, and updated app icons.
- Updated project info, renaming the app to **Teezy** (`app.json`, `app.config.ts`).
- Configured Auth Navigation Stack (`AuthStack`), defined theme tokens, multi-language translation keys, and initialized global stores (`authStore`, `appSettingsStore`).

### 2. UI/UX Development
- Created the onboarding page (`OnboardingScreen`).
- Created the authentication modal (`AuthModal`) with support for Login, Register, and Forgot Password tabs.
- Created reusable components: `AuthActionButton`, `AuthTextField`, `AuthProviderIcon`, `SocialAuthButtons`.
- Added form validation (`authValidation.ts`).
- Created custom hook `useSocialAuth` to handle social login logic.

### 3. API & Firebase Integration
- Integrated APIs for Login, Register, Profile, and Account Deletion.
- Configured endpoints and keys for `react-query` to handle state & caching.

### 4. Code Optimization & Refactoring
- Refactored stylesheets, adjusted `button prop` and `AUTH_COLORS` structure based on feedback from Phong.

---

## Researched Knowledge

Below are the details of the knowledge topics assigned by Tuan:

1. **[Git & Version Control:](./git/)** Difference between `git fetch`/`merge`/`pull` and advanced `git stash` usage.
2. **[Code Quality:](./code-quality/)** Clean Code guidelines, Naming Conventions, Code Smells, SOLID principles, and Comments.
3. **[Debugging Skills:](./debugging/)** Debugging using AI, Console log, Breakpoints, and Stack trace analysis.
4. **[Frontend & Web Architecture:](./web-basics/)** Flexbox vs Grid, Library vs Framework, and HTTP Status Codes.
5. **[Application Security:](./security/)** SQL Injection, XSS, CSRF, and JWT authentication.
