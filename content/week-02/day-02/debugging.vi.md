+++
title = "Ghi chú về Kỹ năng gỡ lỗi (Debugging)"
weight = 3
+++

### 1. Gỡ lỗi bằng AI (AI-Assisted Debugging)

Sử dụng AI (như Antigravity, Gemini, ChatGPT...) giúp tăng tốc độ tìm lỗi rất nhanh:
- **Đưa lỗi trực tiếp:** Sao chép nguyên văn stack trace hoặc thông báo lỗi dán vào AI và yêu cầu giải thích nguyên nhân.
- **Giải thích ngữ cảnh:** Cung cấp file code chứa lỗi kèm theo lỗi đang gặp.
- **Hỏi cách sửa tối ưu:** Yêu cầu AI chỉ ra nguyên nhân gốc rễ (root cause) thay vì chỉ lấy code sửa tạm thời (quick fix).
- **Mẹo viết prompt:** "Giải thích lỗi sau: `[nội dung lỗi]`. Đoạn code liên quan: `[dán code]`. Hãy phân tích tại sao lỗi này xảy ra và đề xuất phương án giải quyết."

---

### 2. Sử dụng Console Log đúng cách

Ghi log ra console (`console.log`) là cách thủ công phổ biến nhất, nhưng cần lưu ý:
- **Ghi log có nhãn (Labeled Logs):** Nên thêm nhãn rõ ràng để biết dữ liệu từ đâu ra.
  * *Tệ:* `console.log(data);`
  * *Tốt:* `console.log(">>> Auth API Response:", data);`
- **Sử dụng các hàm log chuyên dụng:**
  * `console.error()`: Ghi nhận lỗi (hiển thị màu đỏ trong terminal/browser console).
  * `console.warn()`: Cảnh báo nguy cơ lỗi (hiển thị màu vàng).
  * `console.table()`: In mảng/đối tượng dưới dạng bảng cực kỳ trực quan.
- **Lưu ý quan trọng:** **Luôn xóa sạch `console.log` trước khi commit/push code lên production**, vì log thừa có thể làm giảm hiệu năng ứng dụng và rò rỉ thông tin bảo mật.

---

### 3. Đặt Breakpoint (Điểm dừng)

Sử dụng các công cụ Debugging chuyên nghiệp (trong VS Code, Chrome DevTools, Xcode...) để dừng chương trình tại dòng mong muốn:
- **Cách hoạt động:** Khi code chạy đến dòng có breakpoint, ứng dụng sẽ dừng lại. Bạn có thể kiểm tra giá trị của tất cả biến hiện tại (Scope/Variables) mà không cần viết `console.log`.
- **Chạy từng dòng (Stepping):**
  * *Step Over:* Chạy qua dòng tiếp theo.
  * *Step Into:* Nhảy vào bên trong hàm của dòng hiện tại để xem chi tiết.
  * *Step Out:* Chạy hết hàm hiện tại và quay ra ngoài.
- **Conditional Breakpoint (Điểm dừng có điều kiện):** Chỉ dừng lại khi biểu thức điều kiện thỏa mãn. Hữu dụng khi debug vòng lặp lớn (ví dụ: chỉ dừng khi `i === 99`).
- **Logpoint:** Cho phép ghi log ra console trực tiếp từ debugger mà không cần sửa đổi mã nguồn.

---

### 4. Cách đọc Stack Trace (Vết ngăn xếp)

Stack Trace là danh sách các hàm được gọi liên tiếp dẫn đến lỗi tại thời điểm ứng dụng bị sập.

* **Quy trình đọc:**
  1. **Xem dòng đầu tiên:** Thường chứa tên lỗi và mô tả lỗi (ví dụ: `TypeError: Cannot read properties of undefined (reading 'map')`).
  2. **Tìm file code dự án:** Bỏ qua các dòng trace thuộc thư viện (`node_modules`), tìm dòng đầu tiên chứa đường dẫn file của dự án bạn viết (ví dụ: `at OnboardingScreen.tsx:45:12`).
  3. **Lần theo chuỗi gọi hàm:** Đọc từ trên xuống dưới (đối với JS/TS) để biết hàm nào gọi hàm nào dẫn tới dòng bị lỗi đó.

---

## Debugging Tools theo từng tầng trong React Native Mobile App

### 1. UI / Component

Dùng khi giao diện sai, component không render, props/style/icon sai.
**Tool:** React Native DevTools → Components, Console, LogBox.

### 2. JavaScript Logic

Dùng khi bấm nút không chạy, hàm xử lý sai, biến sai, điều kiện sai.
**Tool:** React Native DevTools → Sources + Breakpoints, Console.

### 3. Local State / Hooks

Dùng khi `useState`, `useEffect`, props hoặc state hoạt động không đúng.
**Tool:** Components panel, Profiler, Breakpoints.

### 4. Global State

Dùng khi Redux/Zustand store sai, action chạy nhưng UI không đổi.
**Tool:** Redux DevTools, Zustand DevTools middleware, Expo Redux plugin nếu dùng Expo.

### 5. API / Network

Dùng khi gọi API sai URL, thiếu token, body sai, response sai format.
**Tool:** React Native DevTools → Network, Postman/Insomnia, backend logs.

### 6. Server State / Cache

Dùng khi API có data nhưng UI vẫn cũ, cache không update, loading/error sai.
**Tool:** React Query DevTools hoặc Expo React Query plugin.

### 7. Navigation

Dùng khi chuyển màn sai, params bị mất, tab/stack/back flow lỗi.
**Tool:** React Navigation DevTools, `useLogger`, navigation state logs.

### 8. Native Layer

Dùng khi lỗi permission, camera, push notification, deep link, native module, Android/iOS khác nhau.
**Tool:** Android Studio Logcat, Xcode Console, `npx react-native log-android`, `npx react-native log-ios`.

### 9. Performance

Dùng khi app lag, scroll giật, render chậm, mở màn hình chậm.
**Tool:** React Native DevTools → Profiler / Performance, Perf Monitor, Android Studio/Xcode profiler.

### 10. Memory

Dùng khi app càng dùng càng lag, crash sau khi dùng lâu, nghi memory leak.
**Tool:** React Native DevTools → Memory, native profiler.

### 11. Release / Production

Dùng khi debug build chạy được nhưng release build lỗi/crash.
**Tool:** release logs, source map, `metro-symbolicate`, Sentry hoặc Firebase Crashlytics.

## Flow debug nên dùng

1. Xem lỗi ở LogBox / Console.
2. Đặt breakpoint tại nơi user tương tác.
3. Kiểm tra props, state, route params bằng Components panel.
4. Kiểm tra Redux/Zustand nếu dùng global state.
5. Kiểm tra API bằng Network panel.
6. Nếu lỗi liên quan Android/iOS/native module thì dùng Android Studio hoặc Xcode.
7. Nếu chỉ lỗi ở release build thì kiểm tra release logs và symbolicate stack trace.
