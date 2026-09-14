+++
title = "Day 01 - 30/06/2026"
weight = 1
+++

## Topics Learned

Implement and refine the Teezy HomePage for the Teezy Mobile App on branch `project-2/feat/teezy-homepage`

### 1. Build the HomePage UI according to Figma

- **Key components completed:**
  - Header, search bar, sale banner, category pills, sort dropdown, and a 2-column product grid.
  - Align spacing, padding, border radius, product card dimensions, sale banner, and bottom tab according to Figma.
  - Login Required Modal when guest users perform actions that require authentication.

### 2. Integrate Real APIs for the HomePage
- **Integrate real APIs:**
  - Product list API (fetch from backend, no mock data).
  - Categories API (render category pills dynamically).
  - Current user API (display real user name in header after login).
  - Orders API (fetch orders data for badges/state).
- **Pagination/Load-more:** Implement pagination for the product list when the user scrolls down.
- **Discount Calculation:** Calculate the discount percentage using `originalPrice` and `price` returned from the backend.

### 3. Optimize UI/UX & User States
- Handle transition between **Guest** and **Authenticated** states on the HomePage.
- **Notification Bell:**
  - Guest state: Do not display the red dot (notification indicator).
  - Authenticated state: Only display the red dot when there are new notifications.
- Design a custom bottom tab consisting of 3 tabs: *Home*, *Orders*, and *Account*.
- Create initial shells for the *Orders* and *Account* tabs to ensure smooth navigation.
- Improve the sort dropdown UI to work exactly as designed.

### 4. Manage Assets & Fix Review Issues
- Export assets from Figma following the `@1x/@2x/@3x` workflow.
- Apply the project's asset pipeline to convert image formats from PNG/JPG to **WebP** to optimize size.
- Add missing `@2x` and `@3x` versions for the sale banner.
- **Mentor Review Fixes:**
  - Do not use `StyleSheet.create` in screen/local feature UIs.
  - Reorganize folder structure by moving all test files to `utils/__tests__`.
  - Reuse the `LocalImage` component if possible instead of manually handling native images to maintain consistency.
  - Ensure no raw PNG/JPG files remain in `assets/images`.

### 5. Collaborate on Teammate's Branch
- **Fix Auth Redirect on Branch `feat/mb-user-setting`:**
  - Refactor the sign-in/sign-up flow from the Account tab so that users remain on the authenticated Account page after a successful login.
  - Refactor the logout function to clear the session, auth state, and query cache.
  - Upon logout, redirect the user back to the Home tab in guest mode instead of forcing them back to the AuthStack or Onboarding flow.
  - Retain the teammate's Account page UI implementation.
