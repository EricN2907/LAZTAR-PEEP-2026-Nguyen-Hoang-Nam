+++
title = "Application Security Notes"
weight = 5
+++

### 1. SQL Injection (SQLi)

* **Definition:** A vulnerability that occurs when an attacker can insert malicious SQL statements into entry fields, modifying the structure of the original database query to gain unauthorized access.
* **Mechanism:** Occurs when backend code concatenates raw user input directly into SQL queries without proper sanitization.
  * *Example of injected query:* `SELECT * FROM users WHERE username = 'admin' OR '1'='1' AND password = ''` (since `'1'='1'` is always true, the password check is bypassed, letting the attacker log in).
* **Prevention:**
  * **Prepared Statements / Parameterized Queries:** Fully separate SQL query structure from input data.
  * **Use ORMs / Query Builders:** Libraries like Prisma, TypeORM, and Mongoose natively prevent SQL injection by parameterizing queries under the hood.
  * **Input Validation:** Enforce strict type validation on all incoming query values.

---

### 2. XSS (Cross-Site Scripting)

* **Definition:** A security flaw that allows attackers to inject malicious client-side JavaScript code into web pages viewed by other users.
* **Types of XSS:**
  1. **Stored XSS (Persistent):** The malicious script is permanently stored in the database (e.g., in a comment field). Any user loading the page executes the script.
  2. **Reflected XSS (Non-persistent):** The script is embedded in a malicious link (e.g., search queries). Clicking the link runs the script on the victim's browser.
  3. **DOM-based XSS:** The vulnerability exists entirely in client-side code where JavaScript modifies the DOM unsafely (e.g., using `innerHTML` with unsanitized user inputs).
* **Prevention:**
  * **Output Encoding/Escaping:** Convert special characters like `<`, `>`, `&` into HTML entities (`&lt;`, `&gt;`, `&amp;`) before rendering them.
  * **Sanitization:** Use specialized libraries (like `DOMPurify`) to strip out script tags and attributes from rich text HTML inputs.
  * **Content Security Policy (CSP):** Configure HTTP headers specifying which script/resource sources are allowed to run on your domain.

---

### 3. CSRF (Cross-Site Request Forgery)

* **Definition:** An attack that forces an end-user to execute unwanted actions (accompanied by valid authentication cookies) on a web application where they're currently logged in.
* **Mechanism:** Exploits the browser's behavior of automatically appending cookies of a target site to outgoing requests originating from a third-party site. The attacker hosts a page with a hidden form that auto-submits a POST request to the victim's banking/service endpoint, executing actions in the background.
* **Prevention:**
  * **Anti-CSRF Tokens:** The server generates a unique, random token for the session. Every state-changing request (POST, PUT, DELETE) must include this token. Third-party sites cannot read this token.
  * **SameSite Cookie Attribute:** Set cookies to `SameSite=Strict` or `SameSite=Lax` to prevent browsers from sending cookies on cross-site requests.

---

### 4. JWT (JSON Web Token)

* **Definition:** A compact, URL-safe means of representing claims to be transferred between two parties. The claims are digitally signed, making them verifiable and trustworthy.
* **Structure:** Consists of three parts separated by dots `.` (format: `Header.Payload.Signature`):
  1. **Header:** Details the token type (JWT) and the signing algorithm (e.g., HS256, RS256).
  2. **Payload:** Contains the claims (information like `userId`, `role`, expiration `exp`). **Crucial:** The payload is only Base64-encoded, not encrypted. Never store sensitive credentials (like passwords) here.
  3. **Signature:** Created by hashing the encoded Header and Payload along with a secret key known only to the server. Ensures that the payload hasn't been altered.
* **Authentication Flow:**
  ```mermaid
  sequenceDiagram
    Client->>Server: Send Credentials (Login)
    Server-->>Client: Authenticated & Respond with JWT
    Client->>Client: Store JWT (LocalStorage or Secure Cookie)
    Client->>Server: Send request with Header: Bearer <JWT>
    Server->>Server: Verify JWT Signature
    Server-->>Client: Respond with requested data
  ```
* **Storage Options & Security Trade-offs:**
  * **LocalStorage:** Vulnerable to **XSS** stealing the token.
  * **HttpOnly Cookie:** Safe from XSS, but vulnerable to **CSRF** (requires SameSite and Anti-CSRF token configurations).
