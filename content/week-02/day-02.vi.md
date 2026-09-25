+++
title = "Ngày 02 - 22/09/2026 (On-site)"
weight = 2
+++

## Việc đã làm

### 1. Nhận và đọc tài liệu hướng dẫn Tuần 2

- Được supervisor giao tài liệu hướng dẫn tuần 2 ([Tuan_2_Huong_dan](https://docs.google.com/document/d/1Yo8XS6WUZKKJs2tFK2X9mZQDf6Oab_co/edit)).
- Đọc toàn bộ tài liệu để nắm rõ phạm vi, yêu cầu và các deliverable của tuần.

### 2. Tìm hiểu ngôn ngữ và luồng hệ thống

#### 2.1. Tổng quan tech stack

Dành thời gian nghiên cứu và hiểu các công nghệ cốt lõi được sử dụng trong dự án.

| Tầng | Công nghệ | Mục đích |
| :--- | :--- | :--- |
| **Backend** | Java / Spring Boot | REST API, business logic, truy cập dữ liệu |
| **Frontend** | Next.js (React) | Render giao diện, routing, SSR/SSG |
| **Database** | PostgreSQL / MySQL | Lưu trữ dữ liệu quan hệ |
| **ORM** | Spring Data JPA / Hibernate | Ánh xạ đối tượng - quan hệ |
| **Auth** | Spring Security + JWT | Xác thực và phân quyền |
| **Build** | Maven / Gradle | Quản lý dependency và build |

#### 2.2. Hiểu luồng hệ thống

Tìm hiểu luồng request-response tổng quát của hệ thống:

```
Client (Trình duyệt / Mobile)
    │
    ▼
Next.js Frontend
    │  Gọi API (REST / JSON)
    ▼
Spring Boot Backend (Controller → Service → Repository)
    │
    ▼
Database (PostgreSQL)
```

Các khái niệm chính được tìm hiểu:
- **Controller layer**: nhận HTTP request, chuyển tiếp xuống service.
- **Service layer**: xử lý business logic, validate đầu vào, phối hợp với repository.
- **Repository layer**: thực hiện CRUD thông qua JPA/Hibernate.
- **DTO (Data Transfer Object)**: tách biệt cấu trúc entity nội bộ với dạng dữ liệu trả về qua API.
- **JWT flow**: client đăng nhập → server cấp JWT token → client gửi token trong header `Authorization: Bearer <token>` cho các request tiếp theo.

#### 2.3. Các câu hỏi đặt ra

| # | Câu hỏi | Hiểu biết hiện tại |
| :--- | :--- | :--- |
| 1 | Logic nên đặt ở Service hay Controller? | Business logic → Service. Xử lý HTTP (status code, parse request) → Controller. |
| 2 | JPA xử lý quan hệ (1-N, N-N) như thế nào? | Dùng annotation `@OneToMany`, `@ManyToMany` với `mappedBy` và bảng join. |
| 3 | JWT token refresh hoạt động ra sao? | Access token ngắn hạn + refresh token dài hạn; endpoint refresh cấp access token mới. |

## Bài học rút ra

- Đọc kỹ tài liệu đặc tả trước khi viết code giúp phát hiện sớm các dependency và xung đột thiết kế.
- Hiểu kiến trúc phân tầng (Controller → Service → Repository) là nền tảng cần có trước khi triển khai tính năng.
- Auth dựa trên JWT đòi hỏi xử lý cẩn thận về token expiry ở cả frontend và backend.
