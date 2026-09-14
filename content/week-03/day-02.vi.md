+++
title = "Ngày 02 - 03/07/2026"
weight = 2
+++

## Nội dung đã học

Triển khai luồng Product Detail và Order Confirm cho app Mobile Teezy.

### 1. Hoàn thiện Product Detail Screen

- Triển khai màn hình chi tiết sản phẩm bám sát Figma với đầy đủ trạng thái:
  - Chưa chọn đủ thông tin.
  - Đã chọn màu.
  - Đã chọn size.
  - Đã upload ảnh in áo.
- Tích hợp API lấy chi tiết sản phẩm và upload ảnh:
  - `GET /v1/products/:id`.
  - `POST /v1/file/upload-image`.
- Xử lý chọn biến thể sản phẩm theo cặp màu sắc và kích thước.
- Chỉ cho phép đặt hàng khi đã chọn đủ màu, size, ảnh in áo và biến thể còn hàng.
- Điều chỉnh phần chọn màu từ ô màu tròn sang ảnh swatch bo góc theo yêu cầu thiết kế.
- Bổ sung rating và trạng thái upload ảnh.

### 2. Tích hợp flow đăng nhập trong modal yêu cầu đăng nhập

- Modal yêu cầu đăng nhập hiện khi user chưa đăng nhập mà nhấn đặt hàng.
- Sau khi đăng nhập thành công, app ghi nhớ hành động đặt hàng trước đó và chuyển tiếp sang màn xác nhận đơn hàng.
- Với lỗi đăng nhập, chỉ hiển thị lỗi dạng text trực tiếp trong form.

### 3. Xây dựng màn Order Confirm

- Xây dựng màn xác nhận đơn hàng:
  - Product summary.
  - Thông tin giao hàng.
  - Phương thức thanh toán: COD và Mock payment success.
  - Giao hàng tiêu chuẩn.
  - Tổng tiền.
  - CTA đặt hàng.
- Tách UI thành các component nhỏ:
  - Header.
  - Product card.
  - Shipping form.
  - Payment method selector.
  - Delivery card.
  - Price summary.
  - Action bar.
  - Success state.

### 4. Tích hợp 2 luồng thanh toán

- Triển khai 2 flow đặt hàng:
  - **COD:** gọi `POST /v1/orders`, đơn ở trạng thái `Pending` và chờ admin xác nhận.
  - **Mock payment:** gọi `POST /v1/orders`, sau đó gọi `POST /v1/payments` để chuyển đơn sang trạng thái `Confirmed`.
- Chuẩn hóa các trạng thái đơn hàng:
  - `Pending`.
  - `Confirmed`.
  - `Shipping`.
  - `Completed`.
  - `Cancelled`.
- Thêm validation cho form xác nhận đơn hàng:
  - Tên người nhận bắt buộc.
  - Số điện thoại bắt buộc và đúng định dạng hợp lệ.
  - Địa chỉ giao hàng bắt buộc và không quá ngắn.
  - Ghi chú là optional.

### 5. Xây dựng màn Order Success

- Thiết kế lại màn đặt hàng thành công theo Figma.
- Sử dụng `LocalImage` và asset mapping của dự án.
- Tách logic hiển thị success thành view-model để hỗ trợ 2 luồng:
  - **COD:** tiến trình bắt đầu từ `Chờ xác nhận`.
  - **Mock payment:** tiến trình bắt đầu từ `Đã tiếp nhận`.
- Căn chỉnh lại khoảng cách để màn Order Success nằm gọn trong một màn hình, không còn cuộn dọc.
- Bổ sung CTA:
  - `Theo dõi đơn hàng` điều hướng tới screen Order Detail placeholder.
  - `Tiếp tục mua sắm` điều hướng về Home.


