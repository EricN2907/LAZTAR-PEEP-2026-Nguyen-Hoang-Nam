+++
title = "Ghi chú về Giao diện & Kiến trúc Web"
weight = 4
+++

### 1. So sánh Flexbox và Grid Layout

| Đặc điểm | Flexbox | CSS Grid |
| :--- | :--- | :--- |
| **Chiều bố cục** | **1-Dimensional (1 Chiều):** Bố cục theo hàng ngang **hoặc** cột dọc tại một thời điểm. | **2-Dimensional (2 Chiều):** Bố cục theo cả hàng ngang **và** cột dọc đồng thời. |
| **Thiết kế** | Content-first: Nội dung bên trong tự quyết định kích thước và khoảng cách. | Layout-first: Định hình khung lưới (grid) trước, sau đó đặt nội dung vào các ô lưới. |
| **Ưu điểm** | - Dễ căn chỉnh các phần tử theo trục chính/trục phụ.<br>- Phù hợp với giao diện đơn giản, co giãn linh hoạt (như Navbar, danh sách liên tiếp). | - Dễ dàng dựng các bố cục trang phức tạp (nhiều hàng, cột chồng xếp lên nhau).<br>- Hỗ trợ đặt khoảng cách giữa các ô (`gap`) dễ dàng hơn. |
| **Nhược điểm** | Khó căn chỉnh các phần tử ở các hàng khác nhau thẳng hàng nhau. | Hơi phức tạp hơn để học ban đầu; code dài hơn cho các trường hợp đơn giản. |

* **Quy tắc chọn lựa:**
  * Chọn **Flexbox** cho các component nhỏ lẻ, phân bố theo một hướng (ví dụ: thanh menu ngang, danh sách bài viết dọc, nút bấm nằm ngang).
  * Chọn **Grid** cho cấu trúc layout tổng thể của cả trang web (ví dụ: layout chia 3 cột chính, dashboard, thư viện ảnh).

---

### 2. Phân biệt Thư viện (Library) và Khung phát triển (Framework)

Điểm khác biệt cốt lõi nhất giữa Library và Framework là **Inversion of Control (Sự đảo ngược quyền điều khiển)**.

* **Library (Thư viện):**
  * **Định nghĩa:** Là một tập hợp các chức năng được viết sẵn để bạn gọi ra sử dụng khi cần.
  * **Cơ chế:** **Bạn điều khiển Thư viện.** Bạn quyết định khi nào gọi thư viện, gọi ở đâu và gọi như thế nào.
  * *Ví dụ:* `React`, `Lodash`, `Axios`.
* **Framework (Khung làm việc):**
  * **Định nghĩa:** Là một bộ khung sườn hoàn chỉnh cho toàn bộ dự án, định sẵn quy tắc cấu trúc thư mục, luồng chạy.
  * **Cơ chế:** **Framework điều khiển bạn.** Bạn phải viết code tuân thủ theo các quy định, cấu trúc của Framework. Framework sẽ tự động gọi code của bạn khi chạy.
  * *Ví dụ:* `Next.js`, `Angular`, `NestJS`.

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

#### Mở rộng: So sánh Next.js và NestJS

Mặc dù có tên gọi khá giống nhau và đều chạy trong hệ sinh thái JavaScript/TypeScript, Next.js và NestJS được phát triển cho hai mục đích hoàn toàn khác biệt:

| Tiêu chí | Next.js | NestJS |
| :--- | :--- | :--- |
| **Mục đích chính** | **Frontend & Fullstack Framework** (xây dựng giao diện UI và luồng ứng dụng client-side). | **Backend Framework** (xây dựng hệ thống API, dịch vụ xử lý dữ liệu server-side). |
| **Thư viện nền tảng** | Xây dựng dựa trên **React**. | Xây dựng dựa trên **Express** hoặc **Fastify** (sử dụng cấu trúc Modular hướng đối tượng giống Angular). |
| **Cơ chế render** | Hỗ trợ SSR (Server-Side Rendering), SSG (Static Site Generation), CSR (Client-Side Rendering). | Chỉ chạy thuần backend, xử lý nghiệp vụ, không chịu trách nhiệm hiển thị giao diện UI trực tiếp. |
| **Kiến trúc** | File-system Routing (Định tuyến tự động dựa trên cấu trúc thư mục file). | Module, Controller, Provider/Service (áp dụng chặt chẽ Dependency Injection và Decorators). |

---

### 3. Các mã trạng thái HTTP (HTTP Status Codes)

Các mã này được gửi từ máy chủ (Server) về trình duyệt (Client) để thông báo kết quả của một HTTP Request.

| Nhóm mã                | Mã    | Ý nghĩa (Name)        | Định nghĩa ngắn gọn                       | Ví dụ thực tế                                                     |
| :-----------------------| :------| :----------------------| :------------------------------------------| :------------------------------------------------------------------|
| **1xx** (Info)         | `101` | Switching Protocols   | Nâng cấp giao thức kết nối.               | Chuyển HTTP sang WebSocket để làm chat real-time.                 |
| **2xx** (Success)      | `200` | OK                    | Yêu cầu được xử lý thành công.            | Lấy danh sách bài viết (GET) hoặc cập nhật profile (PUT).         |
|                        | `201` | Created               | Tạo mới tài nguyên thành công.            | Đăng ký tài khoản mới hoặc tạo hóa đơn (POST).                    |
|                        | `202` | Accepted              | Yêu cầu được nhận và xử lý ngầm.          | Gửi video lên để hệ thống nén (sử dụng hàng đợi/queue).           |
|                        | `204` | No Content            | Thành công nhưng không trả về data.       | Xóa một bài viết khỏi hệ thống (DELETE).                          |
| **3xx** (Redirect)     | `301` | Moved Permanently     | Chuyển hướng vĩnh viễn sang URL mới.      | Đổi địa chỉ trang web cũ sang tên miền mới.                       |
|                        | `302` | Found (Temp Redirect) | Chuyển hướng tạm thời.                    | Chưa đăng nhập thì tự động bị đẩy về trang `/login`.              |
|                        | `304` | Not Modified          | Tài nguyên không đổi, sử dụng cache.      | Trình duyệt tải lại ảnh cũ từ Cache giúp tiết kiệm băng thông.    |
| **4xx** (Client Error) | `400` | Bad Request           | Yêu cầu gửi lên không hợp lệ.             | Gửi chuỗi JSON sai cú pháp (thiếu ngoặc, thừa dấu phẩy).          |
|                        | `401` | Unauthorized          | Chưa xác thực danh tính.                  | Gọi API cần đăng nhập nhưng thiếu token hoặc token hết hạn.       |
|                        | `403` | Forbidden             | Không có quyền truy cập tài nguyên.       | Tài khoản User thường cố tình vào API xóa bài viết của Admin.     |
|                        | `404` | Not Found             | Không tìm thấy tài nguyên.                | Gọi sai đường dẫn API hoặc tài nguyên đã bị xóa vĩnh viễn.        |
|                        | `405` | Method Not Allowed    | Sai phương thức HTTP.                     | Route định nghĩa nhận POST nhưng client lại gọi bằng GET.         |
|                        | `409` | Conflict              | Xung đột trạng thái dữ liệu.              | Đăng ký tài khoản mới bằng email đã tồn tại trong DB.             |
|                        | `422` | Unprocessable Entity  | Lỗi validate dữ liệu đầu vào.             | Gửi mật khẩu quá ngắn, thiếu ký tự hoặc email sai định dạng.      |
|                        | `429` | Too Many Requests     | Gọi API quá nhiều lần liên tiếp.          | Spam gọi API liên tục (bị chặn bởi Rate Limiting).                |
| **5xx** (Server Error) | `500` | Internal Server Error | Lỗi hệ thống bên trong server.            | Code backend bị crash do lỗi logic hoặc DB mất kết nối.           |
|                        | `502` | Bad Gateway           | Lỗi cổng kết nối trung gian.              | Nginx không kết nối được tới Node.js (do server app bị die).      |
|                        | `503` | Service Unavailable   | Dịch vụ tạm thời không sẵn sàng.          | Hệ thống bị quá tải lượng truy cập hoặc đang bảo trì định kỳ.     |
|                        | `504` | Gateway Timeout       | Hết thời gian chờ phản hồi từ server gốc. | Backend xử lý tác vụ quá lâu (ví dụ xuất excel lớn) vượt timeout. |
