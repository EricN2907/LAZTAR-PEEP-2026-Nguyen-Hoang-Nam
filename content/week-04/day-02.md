+++
title = "Day 02 - 09/07/2026"
weight = 2
+++

## Work Completed

- **Favorite Products Feature**:
  - Implemented the favorite products feature and integrated API hooks.
  - Created a new `FavoriteHeartButton` component with system styles.
  - Extracted `HeartIcon` into a core icon component and used standard asset icons.
  - Adjusted detailed UI colors to sync with the Figma click-like spec.
- **Auth Onboarding**:
  - Redesigned the auth onboarding flow.
  - Integrated Apple Sign-In on the backend and mobile (with dev-mock fallback).
  - Synchronized payload standards for Google and Apple logins, and cleaned up unnecessary client mocks.
  - Extracted the display name utility function and configured mock email for Apple login.
  - Updated guards to protect auth actions during the onboarding process.
- **UI/UX**:
  - Added `StaticSplashOverlay` to mask the app initialization process.
  - Updated the home page banner design.
  - Added upload configuration for guest accounts.
  - Fixed other UI bugs.
- **Orders**:
  - Added validation for shipping information when placing an order.
