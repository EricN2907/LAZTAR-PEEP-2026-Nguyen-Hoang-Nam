+++
title = "Ngày 01 - 30/06/2026"
weight = 1
+++

## Nội dung đã học

Triển khai và hoàn thiện Teezy HomePage cho app Mobile Teezy trên nhánh `project-2/feat/teezy-homepage`

### 1. Xây dựng giao diện HomePage theo Figma

**Các phần chính đã hoàn thiện:**
  - Header, thanh tìm kiếm, banner khuyến mãi, danh mục dạng nhãn, nút sắp xếp và lưới sản phẩm 2 cột.
  - Căn chỉnh khoảng cách, padding, border radius, kích thước product card, sale banner và bottom tab đúng theo Figma.
  - Modal yêu cầu đăng nhập khi user ở trạng thái guest thực hiện các hành động yêu cầu đăng nhập.

### 2. Tích hợp API thật cho HomePage
- **Tích hợp các API thật:**
  - API lấy danh sách sản phẩm từ backend (không dùng mock data).
  - API categories để hiển thị category pills động.
  - API current user để hiển thị tên user thật trên header sau khi đăng nhập.
  - API orders để phục vụ badge/trạng thái liên quan đến đơn hàng.
- **Phân trang (Pagination/Load-more):** Thêm tính năng tải thêm sản phẩm khi người dùng cuộn (scroll) xuống dưới cùng của danh sách.
- **Tính toán giảm giá:** Thực hiện tính phần trăm giảm giá từ `originalPrice` và `price` nhận về từ API backend.

### 3. Tối ưu UI/UX & trạng thái người dùng
- Xử lý chuyển đổi giữa trạng thái **Guest (khách)** và **Authenticated (đã đăng nhập)** tại màn hình HomePage.
- **Notification bell (chuông thông báo):**
  - Trạng thái guest: Không hiển thị dấu chấm đỏ (dấu hiệu có thông báo).
  - Trạng thái authenticated: Chỉ hiển thị dấu chấm đỏ khi có thông báo mới.
- Thiết kế custom bottom tab gồm 3 tab: *Home*, *Orders*, *Account*.
- Tạo khung vỏ ban đầu cho tab *Orders* và *Account* nhằm đảm bảo luồng điều hướng hoạt động trơn tru.
- Cải tiến sort dropdown hoạt động đúng như thiết kế.

### 4. Quản lý assets & review fixes
- Xuất lại toàn bộ assets từ Figma theo chuẩn tỉ lệ `@1x/@2x/@3x`.
- Áp dụng asset pipeline của dự án để chuyển đổi định dạng ảnh từ PNG/JPG sang **WebP** nhằm tối ưu dung lượng.
- Bổ sung các file ảnh `@2x` và `@3x` còn thiếu cho phần sale banner.
- **Sửa lỗi theo review của anh Phong:**
  - Không sử dụng `StyleSheet.create` tại các screen/local feature UI.
  - Tổ chức lại cấu trúc thư mục bằng việc chuyển toàn bộ các file test vào thư mục `utils/__tests__`.
  - Tái sử dụng component `LocalImage` nếu có thể thay vì tự xử lý native image thủ công nhằm giữ tính nhất quán.
  - Kiểm tra và đảm bảo không còn tệp ảnh dạng PNG/JPG dư thừa trong thư mục `assets/images`.

### 5. Làm việc trên nhánh của Teammate
- **Khắc phục lỗi redirect auth trên nhánh `feat/mb-user-setting`:**
  - Sửa đổi luồng đăng nhập/đăng ký từ tab Account để sau khi xác thực thành công, hệ thống sẽ giữ người dùng ở trạng thái đã đăng nhập của tab Account.
  - Sửa chức năng đăng xuất (logout) nhằm xoá sạch session, auth state và query cache.
  - Sau khi logout, điều hướng người dùng quay trở lại Home tab ở trạng thái guest, tránh việc ép chuyển hướng về AuthStack hoặc Onboarding.
  - Giữ nguyên phần code giao diện màn hình Account của teammate.