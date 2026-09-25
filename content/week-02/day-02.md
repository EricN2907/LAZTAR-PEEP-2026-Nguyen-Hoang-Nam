+++
title = "Day 02 - 22/09/2026 (On-site)"
weight = 2
+++

## Completed Tasks

### 1. Received and Studied the Week 2 Assignment

- Was assigned the Week 2 guide document ([Tuan_2_Huong_dan](https://docs.google.com/document/d/1Yo8XS6WUZKKJs2tFK2X9mZQDf6Oab_co/edit)) by the supervisor.
- Read through the full assignment to understand the scope, requirements, and deliverables for the week.

### 2. Explored the Tech Stack and System Flow

#### 2.1. Language and Framework Overview

Spent time researching and understanding the core technologies used in the project.

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Backend** | Java / Spring Boot | REST API, business logic, data access |
| **Frontend** | Next.js (React) | UI rendering, routing, SSR/SSG |
| **Database** | PostgreSQL / MySQL | Relational data storage |
| **ORM** | Spring Data JPA / Hibernate | Object-relational mapping |
| **Auth** | Spring Security + JWT | Authentication and authorization |
| **Build** | Maven / Gradle | Dependency and build management |

#### 2.2. System Flow Understanding

Studied the high-level request-response flow of the system:

```
Client (Browser / Mobile)
    │
    ▼
Next.js Frontend
    │  API call (REST / JSON)
    ▼
Spring Boot Backend (Controller → Service → Repository)
    │
    ▼
Database (PostgreSQL)
```

Key concepts explored:
- **Controller layer**: receives HTTP requests, delegates to service.
- **Service layer**: handles business logic, validates input, coordinates repositories.
- **Repository layer**: performs CRUD operations via JPA/Hibernate.
- **DTO (Data Transfer Object)**: separates internal entity structure from the API response shape.
- **JWT flow**: client logs in → server issues a JWT token → client sends token in `Authorization: Bearer <token>` header for subsequent requests.

#### 2.3. Key Questions Raised

| # | Question | Current Understanding |
| :--- | :--- | :--- |
| 1 | When should logic go in the Service vs Controller? | Business logic → Service. HTTP handling (status codes, request parsing) → Controller. |
| 2 | How does JPA handle relationships (1-N, N-N)? | Via `@OneToMany`, `@ManyToMany` annotations with `mappedBy` and join tables. |
| 3 | How does JWT token refresh work? | Short-lived access token + long-lived refresh token; refresh endpoint issues a new access token. |

## Lessons Learned

- Reading a technical specification before writing any code helps identify dependencies and potential design conflicts early.
- Understanding the layered architecture (Controller → Service → Repository) is essential before diving into feature implementation.
- JWT-based auth requires careful handling of token expiry on both the frontend and backend.
