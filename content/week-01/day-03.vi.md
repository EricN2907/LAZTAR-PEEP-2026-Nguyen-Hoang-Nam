+++
title = "Ngày 03 - 17/09/2026(Remote)"
weight = 3
+++

## A. Practical work

### 1. Objective
- Khởi tạo và thiết lập dự án thực tế đầu tiên sử dụng **Next.js (App Router)** và **Tailwind CSS**.
- Xây dựng hoàn chỉnh trang Landing Page "VibeMatch" - nền tảng kết nối người dùng thông qua gu âm nhạc.
- Lên kế hoạch ý tưởng (UI/UX và nội dung) chuẩn bị cho việc xây dựng trang Personal Portfolio vào Ngày 4.

### 2. Product definition and UI/UX planning
- **Định nghĩa sản phẩm (VibeMatch):** Nền tảng "hẹn hò/kết bạn" âm nhạc. Tính năng cốt lõi gồm: khám phá người dùng chung tần số (EDM, Lo-fi, Indie...), gợi ý Playlist theo tâm trạng và cập nhật Bảng xếp hạng nhạc thịnh hành.
- **Định hướng thiết kế (UI/UX):** 
  - Phong cách Dark Mode kết hợp đèn Neon (Cyan/Fuchsia) mang hơi hướng Cyberpunk và không khí Lễ hội âm nhạc.
  - Ứng dụng hiệu ứng Kính mờ (Glassmorphism) ở thanh Navbar để tạo độ sâu.
  - Chú trọng vào vi tương tác (Micro-interactions) như: phóng to ảnh bìa, đổ bóng Neon phát sáng, các nút bấm đập theo nhịp tim.
- **Chuẩn bị cho Portfolio (Ngày 4):** Xác định các phần nội dung cần có (Hero, Skills, Projects, Contact), thống nhất tone màu cá nhân và phác thảo wireframe trước khi code.

### 3. Landing page implementation
- **Cấu trúc & Routing:** Tổ chức thư mục chuẩn App Router với layout tổng (`layout.tsx`), trang chủ (`page.tsx`) và các trang phụ (`/players`, `/features`).
- **Tích hợp Animation (Framer Motion):** 
  - Tạo các hiệu ứng cuộn trang mượt mà (Fade-in, Slide-up).
  - Xây dựng khu vực tương tác "Fandom Spotlight: Alan Walker" đặc biệt với hiệu ứng vẽ tia đồ họa (SVG Path animation) tạo thành chữ "W" phát sáng.
- **Xử lý Âm thanh (Audio):** Cấy trình phát nhạc nền Lofi vào trang web, đồng thời tạo các đoạn nhạc động (chỉ phát khi người dùng di chuột vào các đỉnh của chữ W).

### 4. Verification and issues resolved
- **Vấn đề 1 (Xung đột luồng âm thanh):** Khi tương tác với chữ W, âm thanh bài hát EDM bị phát chồng lên nhạc nền Lofi gây khó chịu.
  - *Giải pháp:* Sử dụng `useRef` và `useState` để bắt sự kiện: Khi rê chuột vào đỉnh chữ W, chủ động gọi hàm `pause()` cho nhạc nền Lofi, sau khi thả chuột ra thì nhạc mới có thể tiếp tục.
- **Vấn đề 2 (Định vị tọa độ trên màn hình nhỏ):** Các điểm phát sáng (nodes) nằm lệch khỏi các đỉnh của chữ "W" khi co giãn thu nhỏ trang web trên điện thoại.
  - *Giải pháp:* Thay vì định vị bằng pixel cố định (px), tôi dùng tọa độ phần trăm (`%`) kết hợp với tỉ lệ khung hình `viewBox="0 0 100 100"` của SVG để mọi thứ luôn khớp nhau hoàn hảo ở mọi kích thước màn hình.

---

## B. Summary

### What I learned
- Nắm rõ luồng hoạt động Client-side Navigation của thẻ `<Link>` trong Next.js, giúp chuyển trang tức thì như một ứng dụng (SPA).
- Học được kỹ thuật kết hợp **Framer Motion** với hệ tọa độ **SVG** để tạo ra các hiệu ứng đồ họa hoạt ảnh tương tác phức tạp nhưng rất nhẹ nhàng cho trình duyệt.
- Nâng cao kỹ năng kiểm soát HTML5 `<audio>` trong React Functional Components.

### Challenges and how I addressed them
- **Khó khăn:** Quản lý mã nguồn Landing Page chung với kho tài liệu báo cáo (Hugo) dễ gây rối và gây lỗi đường dẫn khi tự động Deploy lên Vercel.
- **Khắc phục:** Tách toàn bộ Source Code của Landing Page ra một Repository GitHub hoàn toàn mới và độc lập. Điều này giúp hệ thống Vercel dễ dàng nhận diện trực tiếp dự án Next.js và tự động CI/CD mượt mà, không gặp bất cứ lỗi đụng độ file cấu hình nào.

### URL PAGE
- **Source Code (GitHub):** [https://github.com/EricN2907/my-landing-page](https://github.com/EricN2907/my-landing-page)
- **Live Site (Vercel):** [https://my-landing-page-mu-five.vercel.app/](https://my-landing-page-mu-five.vercel.app/)
