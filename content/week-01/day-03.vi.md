+++
title = "Ngày 03 - 17/09/2026"
weight = 3
+++

## Báo Cáo Công Việc Ngày 3

### Phần 1: Thiết lập & Xây dựng Landing Page (Task 1)

**1. Khởi tạo dự án Next.js**
Dự án được khởi tạo thành công bằng `pnpm` với các cấu hình tối ưu nhất của Next.js App Router.
- **Tên dự án:** `my-landing-page` (Chủ đề: VibeMatch - Tìm kiếm đồng điệu âm nhạc EDM/Lo-fi/Indie)
- **Công nghệ cốt lõi:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4.

**2. Cấu trúc thư mục & Phân chia Component**
Hệ thống được module hóa rõ ràng để dễ dàng mở rộng:
- `src/app/layout.tsx`: Layout tổng, bọc `Navbar` và `Footer`.
- `src/app/page.tsx`, `features/page.tsx`, `players/page.tsx`: Các trang chính.
- `src/data/mockData.ts`: Lưu trữ dữ liệu giả lập.

**3. Xây dựng Giao diện (UI) & Client-side Routing**
- Giao diện Dark Mode kết hợp Neon Glow cực kỳ hiện đại.
- Tích hợp **Lucide React** (icon) và **Framer Motion** (hiệu ứng mượt mà).
- Sử dụng `<Link>` để điều hướng trang tức thì không chớp màn hình (SPA).

**4. Triển khai (Deployment)**
- Push code hoàn tất lên GitHub repository cá nhân.
- Deploy thành công lên hệ thống máy chủ của **Vercel**.

---

### Phần 2: Lên ý tưởng & Kế hoạch cho Project Portfolio Cá nhân (Task 2)

Để chuẩn bị cho việc code trang Portfolio giới thiệu bản thân vào Ngày 4, những bước chuẩn bị sau đã được thực hiện:

**1. Liệt kê các mục nội dung cần có trên trang cá nhân**
- Giới thiệu bản thân (Hero section).
- Kỹ năng (Skills & Tech Stack).
- Dự án đã làm (Projects/Portfolio).
- Liên hệ (Contact form/Links).
- Link báo cáo PEEP.

**2. Tham khảo 2-3 trang cá nhân/portfolio mẫu**
- Tham khảo các mẫu do mentor gợi ý để lấy cảm hứng về bố cục và phong cách thiết kế chuyên nghiệp.

**3. Phác thảo Wireframe**
- Lên bản vẽ phác thảo đơn giản (trên giấy, Figma hoặc Excalidraw) để xác định vị trí các khối nội dung, hình ảnh và nút CTA trên trang.

**4. Chọn phong cách thiết kế**
- Lựa chọn bảng màu và font chữ chủ đạo phù hợp với phong cách cá nhân và định hướng của LAZTAR.

**5. Xác định công nghệ sử dụng**
- Quyết định sử dụng bộ khung hiện tại: Framework **Next.js** kết hợp với **Tailwind CSS** (đã trao đổi và thống nhất với mentor vì phù hợp với năng lực hiện tại).

> **🎯 Kết quả cần đạt trong Ngày 3:** Ý tưởng và nội dung trang cá nhân đã rõ ràng, hoàn toàn sẵn sàng để bắt tay vào code.
