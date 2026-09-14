+++
title = "Ngày 02 - 24/06/2026"
weight = 2
+++

## Việc đã làm

Triển khai tính năng **Authentication** cho app Mobile **Teezy** trên nhánh `project-2/feat/authentication`:

### 1. Cấu hình dự án & Tài nguyên
- Thêm Google Fonts mới (`Roboto`, `Barlow Condensed`), logo ứng dụng, ảnh nền onboarding và cập nhật app icons.
- Cập nhật thông tin dự án, đổi tên app thành **Teezy** (`app.json`, `app.config.ts`).
- Thiết lập Auth Stack routing, định nghĩa theme tokens, các khóa dịch thuật và khởi tạo global stores (`authStore`, `appSettingsStore`).

### 2. Xây dựng UI/UX
- Làm trang Onboarding (`OnboardingScreen`).
- Làm modal Auth (`AuthModal`) hỗ trợ chuyển đổi các tab Đăng nhập, Đăng ký, Quên mật khẩu.
- Tách các component dùng chung: `AuthActionButton`, `AuthTextField`, `AuthProviderIcon`, `SocialAuthButtons`.
- Cài đặt validate form (`authValidation.ts`).
- Viết custom hook `useSocialAuth` xử lý logic đăng nhập mạng xã hội.

### 3. Tích hợp API & Firebase
- Liên kết API Đăng nhập, Đăng ký, Lấy thông tin profile, Xóa tài khoản.
- Khai báo các endpoints và keys cho `react-query` để quản lý state & caching.

### 4. Tối ưu hóa & Refactor
- Refactor stylesheet, chỉnh sửa `button prop` và cấu trúc `AUTH_COLORS` theo feedback từ anh Phong.

---

## Kiến thức đã tìm hiểu

Dưới đây là chi tiết các nội dung kiến thức được anh Tuấn dặn cần tìm hiểu:

1. **[Git & Version Control:](./git/)** So sánh `git fetch`/`merge`/`pull` và các câu lệnh `git stash`.
2. **[Chất lượng mã nguồn (Code Quality):](./code-quality/)** Khái niệm Clean Code, Naming Convention, Code Smell, SOLID và cách viết Comments.
3. **[Kỹ năng gỡ lỗi (Debugging):](./debugging/)** Gỡ lỗi bằng AI, Console log, Breakpoints và Stack trace.
4. **[Giao diện & Kiến trúc web:](./web-basics/)** Flexbox vs Grid, Library vs Framework và HTTP Status Codes.
5. **[Bảo mật ứng dụng (Security):](./security/)** SQL Injection, XSS, CSRF và cơ chế xác thực JWT.
