+++
title = "Web Frontend & Architecture Notes"
weight = 4
+++

### 1. Flexbox vs Grid Layout

| Feature | Flexbox | CSS Grid |
| :--- | :--- | :--- |
| **Dimensions** | **1-Dimensional (1D):** Lays out elements in one direction at a time (rows **or** columns). | **2-Dimensional (2D):** Lays out elements in two directions simultaneously (rows **and** columns). |
| **Design Approach** | Content-first: Inner element contents determine their own size and layout space. | Layout-first: Define the structural grid first, then place elements inside the grid cells. |
| **Pros** | - Easy alignment of items along main/cross axes.<br>- Perfect for simpler, responsive linear components (e.g., Navbars, simple lists). | - Effortlessly handles complex layouts with overlapping items or multiple rows and columns.<br>- Built-in gap properties make spacing cells very easy. |
| **Cons** | Hard to align items across multiple distinct rows or columns. | Steeper initial learning curve; verbose code for simple designs. |

* **Decision Rule:**
  * Use **Flexbox** for individual components or layouts along a single axis (e.g., horizontal menu bars, vertical sidebars, inline buttons).
  * Use **Grid** for the overarching layout structure of the page or complex components (e.g., 3-column page layouts, dashboards, galleries).

---

### 2. Library vs Framework

The core difference between a Library and a Framework is **Inversion of Control (IoC)**.

* **Library:**
  * **Definition:** A collection of pre-written helper functions or modules that you call to perform specific tasks.
  * **Mechanism:** **You call the Library.** You control the flow, deciding when, where, and how to use it.
  * *Examples:* `React`, `Lodash`, `Axios`.
* **Framework:**
  * **Definition:** A pre-packaged scaffold or ecosystem with strict rules regarding folder structure, conventions, and runtime flow.
  * **Mechanism:** **The Framework calls you.** The framework dictates the structure, and it will execute your code at designated lifecycle hooks or routes.
  * *Examples:* `Next.js`, `Angular`, `NestJS`.

### Library thiếu gì để trở thành Framework?

Để một library trở thành framework, nó cần thêm các phần sau:

* **Routing:** Cách định nghĩa và chuyển trang trong ứng dụng.
* **Project structure:** Quy chuẩn tổ chức thư mục, file, page, layout, module.
* **Data fetching:** Cách lấy dữ liệu từ API/server, xử lý loading, error, cache.
* **Rendering strategy:** Cách render ứng dụng như CSR, SSR, SSG hoặc server rendering.
* **Build tooling:** Công cụ chạy dev server, build production, bundler, compiler, config mặc định.
* **Convention:** Bộ quy tắc và best practices mà developer phải tuân theo.
* **Inversion of Control:** Framework điều khiển luồng chạy và gọi code của developer, thay vì developer tự gọi library khi cần.
* **Integrated solutions:** Các giải pháp được tích hợp sẵn như routing, forms, HTTP client, validation, testing, deployment hoặc CLI.

Ví dụ: React là library vì chủ yếu lo phần UI component. Next.js là framework vì xây trên React và bổ sung routing, rendering, data fetching, build optimization và cấu trúc ứng dụng. Angular cũng là framework vì cung cấp một hệ sinh thái đầy đủ hơn gồm component model, routing, forms, HTTP, dependency injection và developer tools.

Tóm lại: **Library cung cấp công cụ để mình tự lắp ghép. Framework cung cấp cả bộ khung, quy tắc và luồng chạy để xây dựng ứng dụng hoàn chỉnh.**

#### Next.js vs NestJS Comparison

Although they share similar names and both run in the JavaScript/TypeScript ecosystem, Next.js and NestJS are built for completely different purposes:

| Criteria | Next.js | NestJS |
| :--- | :--- | :--- |
| **Primary Purpose** | **Frontend & Fullstack Framework** (building user interfaces and client-side application flows). | **Backend Framework** (building robust APIs, microservices, and server-side logic). |
| **Underlying Library** | Built on top of **React**. | Built on top of **Express** or **Fastify** (using an OOP Modular structure inspired by Angular). |
| **Rendering Mechanism** | Supports SSR (Server-Side Rendering), SSG (Static Site Generation), and CSR (Client-Side Rendering). | Runs purely on the server-side, handling business logic; does not manage user interface rendering. |
| **Architecture** | File-system Routing (automatic route creation based on files/directories). | Module, Controller, and Provider/Service architecture (strictly enforcing Dependency Injection and Decorators). |

---

### 3. HTTP Status Codes

These codes are returned by servers to inform clients about the result of their HTTP requests.

| Group | Code | Name | Definition | Real-world Example |
| :--- | :--- | :--- | :--- | :--- |
| **1xx** (Info) | `101` | Switching Protocols | Upgrades the communication protocol. | Swapping HTTP to WebSocket for a real-time chat application. |
| **2xx** (Success)| `200` | OK | Request was successfully processed. | Fetching article list (GET) or updating user profile (PUT). |
| | `201` | Created | Resource was successfully created. | Registering a new account or creating an invoice (POST). |
| | `202` | Accepted | Request accepted for asynchronous processing. | Uploading a video to be compressed by the backend queue. |
| | `204` | No Content | Request succeeded but returns no response body. | Deleting a post from the database (DELETE). |
| **3xx** (Redirect)| `301` | Moved Permanently | Permanent redirection to a new URL. | Redirecting an old domain name to a new one. |
| | `302` | Found (Temp Redirect) | Temporary redirection. | Redirecting unauthenticated users to the `/login` page. |
| | `304` | Not Modified | Resource unchanged; client uses cached version. | Browser loading cached images to save user bandwidth. |
| **4xx** (Client Error)| `400` | Bad Request | Request contains bad syntax or parameters. | Sending a malformed JSON payload (missing bracket or extra comma). |
| | `401` | Unauthorized | Client identity is not authenticated. | Calling a protected API route without sending a Bearer Token. |
| | `403` | Forbidden | Authenticated but lacks access permissions. | A standard User account attempting to call Admin DELETE APIs. |
| | `404` | Not Found | Requested resource or API path could not be found. | Calling a non-existent API path or a deleted database item. |
| | `405` | Method Not Allowed | Incorrect HTTP method used on the route. | Sending a GET request to an endpoint configured only for POST. |
| | `409` | Conflict | Resource state conflict. | Registering a new user with an email already taken in the DB. |
| | `422` | Unprocessable Entity | Request validation failed. | Submitting a password that is too short or an invalid email format. |
| | `429` | Too Many Requests | Too many requests sent in a short time frame. | Spamming an API endpoint (blocked by Rate Limiting). |
| **5xx** (Server Error)| `500` | Internal Server Error | Generic backend server error. | Server code crashing due to uncaught runtime errors or DB failure. |
| | `502` | Bad Gateway | Gateway or proxy error. | Nginx failing to proxy request because the Node.js process died. |
| | `503` | Service Unavailable | Server temporarily overloaded or offline. | Server down due to an active maintenance window or high traffic spike. |
| | `504` | Gateway Timeout | Upstream server timed out. | Backend taking too long (e.g. generating a massive report) past gateway limits. |
