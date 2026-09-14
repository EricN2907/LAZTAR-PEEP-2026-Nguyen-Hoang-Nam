+++
title = "Ghi chú về Bảo mật ứng dụng (Security)"
weight = 5
+++

### 1. SQL Injection (Tấn công chèn mã SQL)

* **Khái niệm:** Là lỗ hổng xảy ra khi kẻ tấn công có thể chèn các câu lệnh SQL độc hại vào các trường nhập liệu của ứng dụng, nhằm thay đổi truy vấn cơ sở dữ liệu gốc và truy cập trái phép dữ liệu.
* **Cơ chế hoạt động:** Xảy ra khi code backend nối chuỗi trực tiếp dữ liệu do người dùng nhập vào câu lệnh SQL mà không kiểm duyệt.
  * *Ví dụ câu lệnh bị tiêm:* `SELECT * FROM users WHERE username = 'admin' OR '1'='1' AND password = ''` (vì `'1'='1'` luôn đúng nên câu lệnh sẽ bỏ qua kiểm tra password và đăng nhập thẳng).
* **Cách phòng chống:**
  * **Sử dụng Prepared Statements / Parameterized Queries:** Tách biệt hoàn toàn phần câu lệnh SQL và phần dữ liệu đầu vào.
  * **Sử dụng ORM/Query Builder:** Các thư viện như Prisma, TypeORM, Mongoose tự động hỗ trợ chống SQL Injection.
  * **Validate dữ liệu:** Kiểm tra nghiêm ngặt kiểu dữ liệu đầu vào trước khi truy vấn.

---

### 2. XSS (Cross-Site Scripting - Tấn công chèn mã kịch bản liên trang)

* **Khái niệm:** Là lỗ hổng bảo mật cho phép kẻ tấn công chèn mã JavaScript độc hại vào trang web để chạy trực tiếp trên trình duyệt của người dùng khác.
* **Các dạng XSS:**
  1. **Stored XSS (Persistent):** Mã độc được lưu trực tiếp vào cơ sở dữ liệu của server (ví dụ: viết mã độc trong phần bình luận bài viết), bất kỳ ai tải trang này đều bị nhiễm độc.
  2. **Reflected XSS (Non-persistent):** Mã độc đi kèm trong link URL gửi cho nạn nhân (ví dụ: qua ô tìm kiếm), khi click vào link sẽ kích hoạt chạy mã độc.
  3. **DOM-based XSS:** Lỗi xảy ra hoàn toàn ở phía client khi Javascript thay đổi DOM một cách thiếu an toàn (sử dụng `innerHTML` với biến đầu vào chưa được làm sạch).
* **Cách phòng chống:**
  * **Mã hóa đầu ra (Output Encoding/Escaping):** Chuyển đổi các ký tự đặc biệt như `<`, `>`, `&` thành thực thể HTML (`&lt;`, `&gt;`, `&amp;`) trước khi hiển thị.
  * **Lọc mã độc (Sanitization):** Sử dụng các thư viện như `DOMPurify` để lọc bỏ thẻ `<script>` khỏi nội dung HTML nhập vào.
  * **Cấu hình Content Security Policy (CSP):** Thiết lập HTTP Header quy định những nguồn tài nguyên/scripts nào được phép tải trên trang.

---

### 3. CSRF (Cross-Site Request Forgery - Tấn công giả mạo yêu cầu chéo trang)

* **Khái niệm:** Là kiểu tấn công ép buộc trình duyệt của nạn nhân gửi các yêu cầu độc hại (có kèm theo cookie định danh đang hợp lệ) tới một trang web mà nạn nhân đã đăng nhập trước đó.
* **Cơ chế hoạt động:** Lợi dụng việc trình duyệt tự động đính kèm cookie của trang mục tiêu khi gửi request từ bất kỳ trang nào khác. Kẻ tấn công tạo một trang web giả mạo chứa form tự động submit (ví dụ: chuyển tiền từ tài khoản của nạn nhân) và lừa nạn nhân truy cập trang giả mạo đó.
* **Cách phòng chống:**
  * **Sử dụng Anti-CSRF Token:** Server sinh ra một chuỗi ngẫu nhiên duy nhất khi người dùng mở trang và bắt buộc đính kèm token này trong mọi request thay đổi dữ liệu (POST, PUT, DELETE). Kẻ tấn công trên trang web khác không thể đọc được token này.
  * **Cấu hình SameSite Cookie:** Đặt thuộc tính cookie `SameSite=Strict` hoặc `SameSite=Lax` để chặn trình duyệt gửi cookie đi kèm khi có request xuất phát từ trang web khác.

---

### 4. JWT (JSON Web Token)

* **Khái niệm:** JWT là một phương thức nhỏ gọn để truyền tải thông tin an toàn giữa các bên dưới dạng một đối tượng JSON. Thông tin này có thể được xác thực và tin cậy vì nó được ký điện tử (digitally signed).
* **Cấu trúc:** JWT gồm 3 phần phân tách nhau bởi dấu chấm `.` (dạng `Header.Payload.Signature`):
  1. **Header:** Chứa loại token (JWT) và thuật toán mã hóa (ví dụ: HS256, RS256).
  2. **Payload:** Chứa các thông tin truyền tải (Claims) như `userId`, `role`, thời gian hết hạn (`exp`). **Lưu ý:** Payload chỉ được mã hóa Base64 chứ không bảo mật, tuyệt đối không lưu thông tin nhạy cảm như mật khẩu ở đây.
  3. **Signature:** Phần chữ ký được tạo ra bằng cách lấy (Header + Payload) kết hợp với một khóa bí mật (Secret Key) trên server chạy qua thuật toán mã hóa. Giúp server phát hiện nếu Payload bị sửa đổi.
* **Quy trình xác thực:**
  ```mermaid
  sequenceDiagram
    Client->>Server: Gửi credentials (Đăng nhập)
    Server-->>Client: Xác thực thành công & Trả về JWT
    Client->>Client: Lưu trữ JWT (LocalStorage hoặc Secure Cookie)
    Client->>Server: Gửi request kèm Header: Bearer <JWT>
    Server->>Server: Kiểm tra Chữ ký JWT (Signature)
    Server-->>Client: Trả về dữ liệu yêu cầu
  ```
* **Vấn đề bảo mật khi lưu JWT:**
  * **Lưu ở LocalStorage:** Dễ bị tấn công **XSS** đánh cắp token.
  * **Lưu ở HttpOnly Cookie:** Tránh được XSS nhưng có nguy cơ bị tấn công **CSRF** (cần bảo vệ bằng SameSite và Anti-CSRF token).
