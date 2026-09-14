+++
title = "Ghi chú về Chất lượng mã nguồn (Code Quality)"
weight = 2
+++

### 1. Clean Code & Naming Conventions

#### Clean Code là gì?
Clean Code là mã nguồn dễ đọc, dễ hiểu, dễ sửa đổi và bảo trì. Code chạy được là chưa đủ; code cần phải viết sao cho người khác (hoặc chính mình trong tương lai) có thể hiểu được ngay lập tức.

#### Quy tắc đặt tên (Naming Conventions)
Đặt tên đúng giúp code tự giải thích nghĩa mà không cần ghi chú (self-documenting code).

* **camelCase:** Chữ cái đầu viết thường, các từ tiếp theo viết hoa chữ cái đầu.
  * *Dùng cho:* Tên biến, tên hàm, tên thuộc tính trong JS/TS.
  * *Ví dụ:* `userId`, `getUserProfile()`, `isEmailValid`.
* **PascalCase:** Viết hoa chữ cái đầu của tất cả các từ.
  * *Dùng cho:* Tên Class, Component (React/React Native), Type, Interface.
  * *Ví dụ:* `AuthModal`, `Button`, `UserType`.
* **snake_case:** Tất cả viết thường, phân tách bằng dấu gạch dưới `_`.
  * *Dùng cho:* Cột trong Database (SQL), trường dữ liệu trong API response, file cấu hình Python.
  * *Ví dụ:* `user_id`, `created_at`.
* **kebab-case:** Tất cả viết thường, phân tách bằng dấu gạch ngang `-`.
  * *Dùng cho:* Tên file, tên thư mục, class CSS, URL path.
  * *Ví dụ:* `code-quality.vi.md`, `btn-primary`.
* **UPPER_CASE (Screaming Snake Case):** Viết hoa tất cả, phân tách bằng dấu gạch dưới.
  * *Dùng cho:* Hằng số (Constants).
  * *Ví dụ:* `API_URL`, `MAX_RETRIES`, `AUTH_COLORS`.

**Lưu ý khi đặt tên:**
- **Biến Boolean:** Nên bắt đầu bằng tiền tố: `is`, `has`, `should`, `can`.
  * *Ví dụ:* `isLoading`, `hasToken`, `shouldRedirect`.
- **Hàm/Phương thức:** Bắt đầu bằng một động từ thể hiện hành động.
  * *Ví dụ:* `fetchData()`, `deleteAccount()`, `validateInput()`.

---

### 2. Code Smell là gì? Các dạng phổ biến và ví dụ

**Code Smell** là những dấu hiệu trong mã nguồn cho thấy code có thể đang được thiết kế chưa tốt và có nguy cơ phát sinh lỗi hoặc gây khó khăn cho việc bảo trì trong tương lai.

#### Dạng 1: Magic Numbers / Strings (Ký tự / Số "ma thuật")
Là việc sử dụng các con số hoặc chuỗi trực tiếp trong code mà không giải thích ý nghĩa của chúng.

* **Tệ (Code Smell):**
  ```typescript
  if (user.role === 3) {
    sendNotification();
  }
  ```
* **Tốt (Cleaned):**
  ```typescript
  const ROLE_ADMIN = 3;
  if (user.role === ROLE_ADMIN) {
    sendNotification();
  }
  ```

#### Dạng 2: Duplicate Code (Trùng lặp code)
Một đoạn logic xuất hiện lặp đi lặp lại ở nhiều nơi.

* **Tệ (Code Smell):**
  ```typescript
  // Trong Login.tsx
  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  
  // Trong Register.tsx
  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  ```
* **Tốt (Cleaned):** Tách ra file util dùng chung.
  ```typescript
  // validation.ts
  export const isValidEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  ```

#### Dạng 3: Long Method (Hàm quá dài và ôm đồm)
Một hàm thực hiện quá nhiều nhiệm vụ khác nhau, khiến nó dài hàng trăm dòng.

* **Cách khắc phục:** Áp dụng nguyên lý Single Responsibility, chia nhỏ hàm đó thành các hàm con có nhiệm vụ riêng biệt.

---

### 3. Nguyên lý SOLID

SOLID là bộ 5 nguyên lý thiết kế hướng đối tượng giúp hệ thống phần mềm linh hoạt, dễ mở rộng và bảo trì.

| Nguyên lý                     | Định nghĩa ngắn gọn                                                                                                       | Ví dụ thực tế                                                                                                                                 |
| :------------------------------| :--------------------------------------------------------------------------------------------------------------------------| :----------------------------------------------------------------------------------------------------------------------------------------------|
| **S** - Single Responsibility | Một Class/Module chỉ nên làm **đúng 1 nhiệm vụ**.                                                                         | Class `Auth` chỉ xử lý đăng nhập/đăng ký, không kiêm luôn việc gửi email chào mừng hay lưu log vào Database.                                  |
| **O** - Open/Closed           | Dễ dàng **mở rộng** (viết thêm code mới), nhưng hạn chế **sửa đổi** code cũ đang chạy ổn định.                            | Thay vì vào hàm cũ thêm `if/else` khi có cổng thanh toán mới, ta tạo class thanh toán mới kế thừa từ Interface thanh toán chung.              |
| **L** - Liskov Substitution   | Class con phải kế thừa và thay thế được class cha mà **không làm lỗi** chương trình.                                      | Class cha là `Bird` có hàm `fly()`, class con là `Ostrich` (Đà điểu không biết bay) mà kế thừa `Bird` là vi phạm nguyên lý này.               |
| **I** - Interface Segregation | Chia nhỏ Interface lớn thành nhiều **Interface nhỏ chuyên biệt** để class con không phải viết code cho hàm nó không dùng. | Chia interface `Worker` thành `Workable` và `Eatable`, tránh việc bắt class `Robot` (chỉ làm việc) phải viết code cho hàm `eat()`.            |
| **D** - Dependency Inversion  | Các module không gọi trực tiếp nhau mà giao tiếp qua **Interface trung gian (Abstraction)**.                              | Class `PaymentService` không gọi trực tiếp class `MomoPayment`, mà gọi qua Interface `IPaymentGateway` để dễ dàng đổi sang `ZaloPay` sau này. |


---

### 4. Cách viết Comments (Ghi chú) hiệu quả

* **Quy tắc vàng:** Đừng giải thích code đang làm **CÁI GÌ** (code nên tự giải thích), hãy giải thích **TẠI SAO** lại chọn cách viết đó.
* **Tệ (Comment thừa):**
  ```typescript
  // Tăng i lên 1 đơn vị
  i++;
  ```
* **Tốt (Comment giải thích nguyên nhân/quyết định):**
  ```typescript
  // Cần delay 300ms để tránh xung đột hiệu ứng đóng modal trong Expo
  setTimeout(() => {
    setModalVisible(false);
  }, 300);
  ```
* **Nên tránh:** Tránh để lại code thừa đã bị comment (hãy dùng Git để lưu trữ lịch sử, xóa thẳng tay code thừa).
