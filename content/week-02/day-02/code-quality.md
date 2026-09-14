+++
title = "Code Quality Notes"
weight = 2
+++

### 1. Clean Code & Naming Conventions

#### What is Clean Code?
Clean Code is source code that is easy to read, understand, modify, and maintain. Writing code that simply works is not enough; code should be written in a way that others (or oneself in the future) can comprehend instantly.

#### Naming Conventions
Choosing correct names allows the code to explain itself without excessive comments (self-documenting code).

* **camelCase:** First letter lowercase, each subsequent word starts with an uppercase letter.
  * *Used for:* Variables, function names, properties in JS/TS.
  * *Example:* `userId`, `getUserProfile()`, `isEmailValid`.
* **PascalCase:** Capitalize the first letter of every word.
  * *Used for:* Classes, Components (React/React Native), Types, Interfaces.
  * *Example:* `AuthModal`, `Button`, `UserType`.
* **snake_case:** All lowercase, separated by underscores `_`.
  * *Used for:* Database columns (SQL), API response fields, Python configuration files.
  * *Example:* `user_id`, `created_at`.
* **kebab-case:** All lowercase, separated by hyphens `-`.
  * *Used for:* Filenames, directory names, CSS classes, URL paths.
  * *Example:* `code-quality.vi.md`, `btn-primary`.
* **UPPER_CASE (Screaming Snake Case):** All uppercase, separated by underscores.
  * *Used for:* Constants.
  * *Example:* `API_URL`, `MAX_RETRIES`, `AUTH_COLORS`.

**Important Naming Rules:**
- **Booleans:** Prefix with: `is`, `has`, `should`, `can`.
  * *Example:* `isLoading`, `hasToken`, `shouldRedirect`.
- **Functions/Methods:** Begin with a verb indicating an action.
  * *Example:* `fetchData()`, `deleteAccount()`, `validateInput()`.

---

### 2. Code Smells: Definition, Common Types & Examples

A **Code Smell** is a surface indication that usually corresponds to a deeper problem in the system. It suggests that code may be poorly designed, posing a risk of future bugs or maintenance issues.

#### Type 1: Magic Numbers / Strings
Hardcoding numbers or strings directly into the business logic without explaining their meaning.

* **Bad (Code Smell):**
  ```typescript
  if (user.role === 3) {
    sendNotification();
  }
  ```
* **Good (Cleaned):**
  ```typescript
  const ROLE_ADMIN = 3;
  if (user.role === ROLE_ADMIN) {
    sendNotification();
  }
  ```

#### Type 2: Duplicate Code
The same code/logic appears in multiple places.

* **Bad (Code Smell):**
  ```typescript
  // Inside Login.tsx
  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  
  // Inside Register.tsx
  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  ```
* **Good (Cleaned):** Extract into a shared utility.
  ```typescript
  // validation.ts
  export const isValidEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  ```

#### Type 3: Long Method
A method or function that has grown too long and is doing too many things.

* **Solution:** Extract nested logic into smaller helper functions (Single Responsibility Principle).

---

### 3. SOLID Principles

SOLID is a set of 5 object-oriented design principles to make software designs more understandable, flexible, and maintainable.

| Principle | Short Definition | Easy Real-World Example |
| :--- | :--- | :--- |
| **S** - Single Responsibility | A Class/Module should perform **only one task**. | An `Auth` class should only handle login/register, not welcome emails or saving DB logs. |
| **O** - Open/Closed | Software should be **open for extension** but **closed for modification**. | Instead of adding `if/else` inside an old function when a new payment method is added, create a new class extending a shared Payment Interface. |
| **L** - Liskov Substitution | Derived classes must be substitutable for their base classes **without breaking** the application. | If base class `Bird` has a `fly()` method, inheriting it in an `Ostrich` class (which can't fly) violates this principle. |
| **I** - Interface Segregation | Prefer multiple **small, specific interfaces** over a single large, generic one. | Split a `Worker` interface into `Workable` and `Eatable`, so a `Robot` class (which only works) doesn't have to implement `eat()`. |
| **D** - Dependency Inversion | High-level modules should depend on **abstractions (interfaces)**, not concrete classes. | a `PaymentService` should not import `MomoPayment` directly. It should reference an `IPaymentGateway` interface to easily switch to `ZaloPay` later. |


---

### 4. Writing Effective Comments

* **Golden Rule:** Do not explain **WHAT** the code is doing (the code should explain itself). Instead, explain **WHY** that implementation was chosen.
* **Bad (Redundant Comment):**
  ```typescript
  // Increment i by 1
  i++;
  ```
* **Good (Explaining Rationale):**
  ```typescript
  // A 300ms delay is required to prevent modal closing transition glitches in Expo
  setTimeout(() => {
    setModalVisible(false);
  }, 300);
  ```
* **Best Practice:** Avoid leaving commented-out code in your files. Trust Git history and delete dead code immediately.
