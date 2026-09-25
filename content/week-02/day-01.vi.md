+++
title = "Ngày 01 - 21/09/2026 (On-site)"
weight = 1
+++

## Việc đã làm

### 1. Sửa và cập nhật Landing Page

- Rà soát và cải thiện toàn bộ bố cục, nội dung và giao diện của landing page hiện có.
- Điều chỉnh responsive breakpoints để đảm bảo hiển thị đúng trên desktop và mobile.
- Sửa các lỗi UI bao gồm khoảng cách, typography và căn chỉnh các component.

### 2. Chuyển đổi Portfolio từ HTML thuần sang Next.js

#### 2.1. Vì sao chuyển từ HTML thuần sang Next.js?

| Khía cạnh | HTML thuần | Next.js |
| :--- | :--- | :--- |
| **Routing** | Quản lý link thủ công | Routing theo cấu trúc thư mục |
| **Hiệu năng** | Chỉ static | Hỗ trợ SSG / SSR / ISR |
| **SEO** | Kiểm soát meta hạn chế | API metadata tích hợp sẵn |
| **Khả năng bảo trì** | Khó mở rộng | Dựa trên component, tái sử dụng được |
| **Triển khai** | Mọi host static | Tích hợp Vercel, CI/CD có sẵn |

#### 2.2. Các bước chuyển đổi

1. **Khởi tạo dự án Next.js mới** bằng `create-next-app` với TypeScript và Tailwind CSS.
2. **Chuyển đổi các section HTML tĩnh** (Hero, About, Skills, Projects, Contact) thành từng React component riêng trong `components/`.
3. **Cấu hình App Router** — `app/layout.tsx` cho layout chung (Navbar, Footer), `app/page.tsx` là điểm vào của trang chủ.
4. **Di chuyển tài nguyên tĩnh** (ảnh, font, icon) vào thư mục `public/` và cập nhật lại tất cả đường dẫn tham chiếu.
5. **Áp dụng Tailwind CSS** để thay thế style inline và các quy tắc CSS cũ.
6. **Cấu hình `next/image`** để tối ưu hóa ảnh với `srcSet` tự động và lazy loading.

#### 2.3. Cấu trúc dự án sau khi chuyển đổi

```
portfolio/
├── app/
│   ├── layout.tsx       # Layout toàn cục: Navbar, Footer, metadata
│   ├── page.tsx         # Trang chủ (tổng hợp tất cả section)
│   └── globals.css      # Style Tailwind toàn cục
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   └── Contact.tsx
└── public/
    └── images/          # Ảnh đại diện, thumbnail dự án
```

## Bài học rút ra

- Chuyển từ HTML thuần sang Next.js đòi hỏi tư duy theo **component và props** thay vì HTML lặp lại.
- `next/image` yêu cầu khai báo `width` và `height` rõ ràng, hoặc dùng prop `fill` — bỏ sót sẽ gây lỗi build.
- Thứ tự class Tailwind ảnh hưởng đến khả năng đọc code; sử dụng **Prettier Tailwind plugin** giúp giữ class nhất quán.
- `layout.tsx` trong App Router là nơi phù hợp cho mọi thứ dùng chung giữa các trang (Navbar, Footer, font toàn cục).