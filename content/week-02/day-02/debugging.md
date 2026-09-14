+++
title = "Debugging Skills Notes"
weight = 3
+++

### 1. AI-Assisted Debugging

Using AI tools (like Antigravity, Gemini, ChatGPT...) accelerates identifying and fixing bugs:
- **Share logs directly:** Paste the exact stack trace or error message into the AI prompt.
- **Provide context:** Share the file containing the error alongside the trace.
- **Ask for the root cause:** Ask the AI to analyze the underlying architecture issue rather than just a quick fix.
- **Prompt Example:** "Explain the following error: `[error message]`. Here is the related code: `[paste code]`. What is causing this and how do I resolve it?"

---

### 2. Best Practices for Console Logs

Console logging (`console.log`) is simple but needs discipline:
- **Use labeled logs:** Always add a clear label so you can track where the log is printed.
  * *Bad:* `console.log(data);`
  * *Good:* `console.log(">>> Auth API Response:", data);`
- **Use specialized console methods:**
  * `console.error()`: Highlights errors in red.
  * `console.warn()`: Displays warnings in yellow.
  * `console.table()`: Renders arrays or objects in a clean table view.
- **Production rule:** **Always remove console logs before pushing to production.** Leftover logs can cause performance degradation and leak sensitive credentials.

---

### 3. Breakpoints

Using debugger breakpoints (via VS Code, Chrome DevTools, Xcode) pauses execution to inspect the application state:
- **How it works:** When code execution hits a breakpoint, the engine pauses. You can inspect all active variables in the variables scope panel without adding logs.
- **Stepping through code:**
  * *Step Over:* Move to the next line.
  * *Step Into:* Enter the function call on the current line.
  * *Step Out:* Complete the current function and return to the caller.
- **Conditional Breakpoint:** Pauses execution only when a specified expression is true. Helpful for debugging loops (e.g., pause only when `index === 99`).
- **Logpoint:** Prints a message to the console without modifying your actual source files.

---

### 4. Reading a Stack Trace

A stack trace represents the active call stack when an unhandled exception occurs.

* **Steps to read:**
  1. **Identify the error type:** Look at the top line to understand what went wrong (e.g., `TypeError: Cannot read properties of undefined (reading 'map')`).
  2. **Find user-written files:** Ignore lines pointing to `node_modules` libraries. Look for the top-most line referencing your project files (e.g., `at OnboardingScreen.tsx:45:12`).
  3. **Trace the call flow:** Read the stack trace from top to bottom to follow the function call sequence leading to the crash.

---

## Debugging Tools by Layer in React Native Mobile App

### 1. UI / Component

Use when UI is wrong, component doesn't render, props/style/icon are incorrect.
**Tool:** React Native DevTools → Components, Console, LogBox.

### 2. JavaScript Logic

Use when button press doesn't work, handler function is wrong, variable is incorrect, condition is wrong.
**Tool:** React Native DevTools → Sources + Breakpoints, Console.

### 3. Local State / Hooks

Use when `useState`, `useEffect`, props or state behave incorrectly.
**Tool:** Components panel, Profiler, Breakpoints.

### 4. Global State

Use when Redux/Zustand store is wrong, action runs but UI doesn't change.
**Tool:** Redux DevTools, Zustand DevTools middleware, Expo Redux plugin if using Expo.

### 5. API / Network

Use when API call has wrong URL, missing token, wrong body, or response format is incorrect.
**Tool:** React Native DevTools → Network, Postman/Insomnia, backend logs.

### 6. Server State / Cache

Use when API returns data but UI is outdated, cache doesn't update, loading/error states are wrong.
**Tool:** React Query DevTools or Expo React Query plugin.

### 7. Navigation

Use when navigating to wrong screen, params are lost, tab/stack/back flow is broken.
**Tool:** React Navigation DevTools, `useLogger`, navigation state logs.

### 8. Native Layer

Use when encountering permission errors, camera, push notification, deep link, native module issues, or differences between Android/iOS.
**Tool:** Android Studio Logcat, Xcode Console, `npx react-native log-android`, `npx react-native log-ios`.

### 9. Performance

Use when app is laggy, scroll is choppy, rendering is slow, opening screen is slow.
**Tool:** React Native DevTools → Profiler / Performance, Perf Monitor, Android Studio/Xcode profiler.

### 10. Memory

Use when app gets laggy over time, crashes after long usage, suspecting memory leak.
**Tool:** React Native DevTools → Memory, native profiler.

### 11. Release / Production

Use when debug build works but release build errors/crashes.
**Tool:** release logs, source map, `metro-symbolicate`, Sentry or Firebase Crashlytics.

## Recommended Debug Flow

1. Check for errors in LogBox / Console.
2. Set breakpoint at user interaction point.
3. Inspect props, state, route params using Components panel.
4. Check Redux/Zustand if using global state.
5. Check API using Network panel.
6. If the error is related to Android/iOS/native modules, use Android Studio or Xcode.
7. If the error only happens on release build, check release logs and symbolicate stack trace.
