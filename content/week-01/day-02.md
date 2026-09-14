+++
title = "Day 02 - 16/06/2026"
weight = 2
+++

## Completed Work

Today I focused on cloning the source code, reading the README/instruction files across the project, and running the main parts of the system. The goal was to make sure the local setup works, confirm the connection between Backend, Mobile, and Web Admin, and understand the team workflow before starting feature development.

### Setup Results

| Completed | Item |
| --- | --- |
| [x] | Cloned the source code to my local machine. |
| [x] | Read the README and instruction files in the main project folders. |
| [x] | Successfully ran the Backend. |
| [x] | Successfully ran the Frontend/Web Admin. |
| [x] | Successfully ran the Mobile app on Android. |
| [x] | Successfully ran the Mobile app on iOS. |
| [x] | Checked the initial connection between Backend, Mobile, and Web Admin. |
| [x] | Noted important setup steps for future development. |

## Understanding From Project

### Project Overview

- The project is a monorepo with `backend/`, `mobile/`, `frontend/`, and `specs/`.
- Backend and Mobile are the main parts of the system.
- Web Admin only needs to be basic, mainly for internal management and statistics.
- Each package is independent, so dependencies should be installed inside each package folder.
- Bun is the main package manager.
- The root guide should be read first, then each package guide should be checked for detailed commands and conventions.

### Backend

- Backend uses NestJS v11, TypeScript strict mode, Prisma v7, PostgreSQL, and Redis.
- Backend provides APIs for Mobile and Web Admin.
- API routes use the `/api/v1` prefix, so Mobile/Web API configuration must match it.
- Important modules include auth, users, user settings, subscription, IAP, notifications, file upload, AWS S3, Redis, Firebase, and Prisma.
- Auth supports JWT, refresh token rotation, Google Sign-In, and Apple Sign-In.
- Redis is used for refresh tokens, rate limiting, and session-related logic.
- Prisma manages the database schema, migrations, and seed data.
- Database changes must use new migrations instead of editing committed migrations.
- Required environment variables include `DATABASE_URL`, `JWT_SECRET`, `ENCRYPTION_KEY`, `REDIS_URL`, and S3 config.
- The backend has commands for typecheck, build, lint, and test.

### Mobile

- Mobile uses Expo v54, React Native 0.81, TypeScript strict mode, and NativeWind.
- Expo Go is not supported because the app uses native modules; a development build is required.
- The app can run on both Android and iOS.
- The source structure includes API client, navigation, screens, store, theme, hooks, services, and shared components.
- Mobile uses TanStack Query and Axios for API requests.
- Zustand is used for local state such as auth session, tokens, theme, and locale.
- Sensitive tokens are stored in SecureStore; less sensitive data can use AsyncStorage.
- `EXPO_PUBLIC_API_URL` must point to the backend and end with `/api`; endpoints add `/v1`.
- The app already has scaffolding for Google Sign-In, Apple Sign-In, and Firebase config.
- Existing components, theme tokens, and helpers should be reused to keep UI consistent.

### Web Admin / Frontend

- Frontend is the basic Web Admin and follows a Next.js structure.
- The frontend README is still simple and mainly explains how to run the development server.
- The frontend instruction file notes that the current Next.js version may have API and convention changes, so related docs should be checked before editing.
- Web Admin should focus on internal features such as data lists, user management, dashboards, and basic admin actions.
- Complex Web Admin features should not be prioritized in the first stage.

### Specs and Development Workflow

- The `specs/` folder supports spec-driven development.
- For larger features, requirements and UI materials should be placed in `specs/<feature>/inputs/`.
- `spec.md` describes requirements, API, UI, edge cases, and test direction.
- `testcases.md` records manual QC test cases.
- This flow helps the team understand requirements clearly before coding.
- When scope changes, specs and test cases should be updated too.

### Firebase and Assets

- Mobile Firebase config is organized by environment and platform, such as development/staging/production and Android/iOS.
- Real Firebase config files are ignored by Git, so they must be added correctly during setup.
- `app.config.ts` can auto-detect Firebase files when they are placed in the expected folders.
- Mobile local images are organized in separate folders for each asset.
- Icons and UI images should provide `1x`, `2x`, and `3x` densities when possible.
- After adding or renaming images, the image index should be regenerated.

### Team Workflow

- Tasks should be split into small, clear items.
- Before coding, the related README and package conventions should be checked.
- Commits should have clear messages.
- Pull Requests should be created for team review before merging.
- Typecheck, build, lint, and test should be run before commit/push when possible.
- Setup issues or missing README information should be reported early.
- Clear communication with UI/UX helps avoid misunderstanding screens and user flows.


## Lessons Learned

- Before developing features, the whole project should run successfully.
- README files help explain the tech stack, folder structure, setup steps, run commands, and contribution workflow.
- Backend, Mobile, and Web Admin must use the correct API URL to connect with each other.
- Common setup issues can come from missing environment variables, wrong ports, inactive database/Redis, or using the wrong run command.
- Simple and practical features should be prioritized over complex or research-heavy features.
- Getting familiar with tasks, commits, PRs, and review early helps the team collaborate better.
