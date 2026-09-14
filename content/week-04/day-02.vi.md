+++
title = "Ngày 02 - 09/07/2026"
weight = 2
+++

## Công việc đã làm

- **Tính năng Sản phẩm yêu thích (Favorite Products)**:
  - Triển khai tính năng yêu thích sản phẩm và tích hợp API hooks.
  - Tạo mới component `FavoriteHeartButton` với giao diện theo system styles.
  - Tách `HeartIcon` thành icon component lõi và sử dụng asset icon chuẩn.
  - Điều chỉnh màu sắc giao diện chi tiết để đồng bộ với thiết kế (click-like spec) trên Figma.
- **Tính năng Xác thực & Đăng nhập (Auth Onboarding)**:
  - Thiết kế lại giao diện luồng đăng nhập/xác thực (auth onboarding).
  - Tích hợp Đăng nhập bằng Apple (Apple Sign-In) ở backend và mobile (với dev-mock fallback).
  - Cập nhật đồng bộ chuẩn dữ liệu (payload) cho Google và Apple login, dọn dẹp các client mocks không cần thiết.
  - Tách hàm tiện ích xử lý tên hiển thị (display name) và cấu hình email mock cho đăng nhập Apple.
  - Cập nhật chặn (guard) bảo vệ các hành động xác thực trong quá trình onboarding.
- **Giao diện & Trải nghiệm người dùng (UI/UX)**:
  - Bổ sung `StaticSplashOverlay` để che đi quá trình khởi chạy khởi tạo ứng dụng.
  - Cập nhật thiết kế cập nhật banner ở trang chủ.
  - Bổ sung cấu hình tính năng tải lên (upload config) cho tài khoản khách.
  - Khắc phục các lỗi giao diện khác.
- **Tính năng Đơn hàng (Orders)**:
  - Thêm tính năng xác thực tính hợp lệ (validate) của thông tin giao hàng khi đặt đơn hàng.
