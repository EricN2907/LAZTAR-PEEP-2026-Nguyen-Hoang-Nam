+++
title = "Ngày 02 - 16/06/2026"
weight = 2
+++

## Công việc đã hoàn thành

Hôm nay em tập trung clone source code, đọc các file README/hướng dẫn trong toàn bộ project và chạy các phần chính của hệ thống. Mục tiêu là đảm bảo môi trường local chạy được, kiểm tra kết nối giữa Backend, Mobile và Web Admin, đồng thời hiểu quy trình làm việc của team trước khi bắt đầu phát triển tính năng.

### Kết quả setup

| Hoàn thành | Nội dung |
| --- | --- |
| [x] | Đã clone source code về máy local. |
| [x] | Đã đọc README và các file hướng dẫn trong những thư mục chính của project. |
| [x] | Đã chạy thành công Backend. |
| [x] | Đã chạy thành công Frontend/Web Admin. |
| [x] | Đã chạy thành công Mobile app trên Android. |
| [x] | Đã chạy thành công Mobile app trên iOS. |
| [x] | Đã kiểm tra kết nối ban đầu giữa Backend, Mobile và Web Admin. |
| [x] | Đã ghi lại các bước setup quan trọng để phục vụ quá trình phát triển sau này. |

## Những nội dung hiểu được từ project

### Tổng quan project

- Project là một monorepo gồm backend/, mobile/, frontend/ và specs/.
- Backend và Mobile là hai phần chính của hệ thống.
- Web Admin chỉ cần ở mức cơ bản, chủ yếu phục vụ quản lý nội bộ và thống kê.
- Mỗi package hoạt động độc lập, vì vậy dependencies cần được cài trong từng thư mục package.
- Bun là package manager chính của project.
- Nên đọc hướng dẫn ở root trước, sau đó đọc hướng dẫn của từng package để nắm các command và convention chi tiết.

### Backend

- Backend dùng NestJS v11, TypeScript strict mode, Prisma v7, PostgreSQL và Redis.
- Backend cung cấp API cho Mobile và Web Admin.
- API routes dùng prefix /api/v1, vì vậy cấu hình API của Mobile/Web phải khớp với prefix này.
- Các module quan trọng gồm auth, users, user settings, subscription, IAP, notifications, file upload, AWS S3, Redis, Firebase và Prisma.
- Auth hỗ trợ JWT, refresh token rotation, Google Sign-In và Apple Sign-In.
- Redis được dùng cho refresh tokens, rate limiting và các logic liên quan đến session.
- Prisma quản lý database schema, migrations và seed data.
- Khi thay đổi database, cần tạo migration mới thay vì chỉnh sửa các migration đã commit.
- Các environment variables bắt buộc gồm DATABASE_URL, JWT_SECRET, ENCRYPTION_KEY, REDIS_URL và S3 config.
- Backend có các command để chạy typecheck, build, lint và test.

### Mobile

- Mobile dùng Expo v54, React Native 0.81, TypeScript strict mode và NativeWind.
- Expo Go không được hỗ trợ vì app dùng native modules; cần dùng development build.
- App có thể chạy trên cả Android và iOS.
- Cấu trúc source gồm API client, navigation, screens, store, theme, hooks, services và shared components.
- Mobile dùng TanStack Query và Axios cho API requests.
- Zustand được dùng cho local state như auth session, tokens, theme và locale.
- Sensitive tokens được lưu trong SecureStore; dữ liệu ít nhạy cảm hơn có thể dùng AsyncStorage.
- EXPO_PUBLIC_API_URL phải trỏ đến backend và kết thúc bằng /api; endpoints sẽ thêm /v1.
- App đã có scaffolding cho Google Sign-In, Apple Sign-In và Firebase config.
- Nên tái sử dụng các component, theme tokens và helpers hiện có để giữ UI nhất quán.

### Web Admin / Frontend

- Frontend là Web Admin cơ bản và theo cấu trúc Next.js.
- README của frontend hiện vẫn đơn giản, chủ yếu hướng dẫn cách chạy development server.
- File hướng dẫn của frontend lưu ý rằng version Next.js hiện tại có thể có thay đổi về API và convention, nên cần kiểm tra docs liên quan trước khi chỉnh sửa.
- Web Admin nên tập trung vào các tính năng nội bộ như danh sách dữ liệu, quản lý user, dashboards và các thao tác admin cơ bản.
- Không nên ưu tiên các tính năng Web Admin phức tạp trong giai đoạn đầu.

### Specs và quy trình phát triển

- Thư mục specs/ hỗ trợ quy trình spec-driven development.
- Với các tính năng lớn, requirements và tài liệu UI nên được đặt trong specs/<feature>/inputs/.
- spec.md mô tả requirements, API, UI, edge cases và định hướng test.
- testcases.md ghi lại các manual QC test cases.
- Quy trình này giúp team hiểu rõ requirements trước khi code.
- Khi scope thay đổi, specs và test cases cũng cần được cập nhật.

### Firebase và assets

- Mobile Firebase config được tổ chức theo environment và platform, ví dụ development/staging/production và Android/iOS.
- Các file Firebase config thật được Git ignore, vì vậy cần thêm đúng các file này trong quá trình setup.
- app.config.ts có thể tự phát hiện Firebase files khi chúng được đặt đúng thư mục yêu cầu.
- Mobile local images được tổ chức trong các thư mục riêng cho từng asset.
- Icons và UI images nên có đủ density 1x, 2x và 3x khi có thể.
- Sau khi thêm hoặc đổi tên images, cần regenerate image index.

### Quy trình làm việc của team

- Tasks nên được chia thành các đầu việc nhỏ và rõ ràng.
- Trước khi code, cần kiểm tra README liên quan và convention của package.
- Commits nên có message rõ ràng.
- Pull Requests nên được tạo để team review trước khi merge.
- Nên chạy typecheck, build, lint và test trước khi commit/push khi có thể.
- Cần báo sớm các vấn đề setup hoặc thông tin còn thiếu trong README.
- Giao tiếp rõ ràng với UI/UX giúp tránh hiểu sai màn hình và user flows.

### Bài học rút ra

- Trước khi phát triển tính năng, cần đảm bảo toàn bộ project chạy thành công.
- README giúp giải thích tech stack, cấu trúc thư mục, các bước setup, run commands và contribution workflow.
- Backend, Mobile và Web Admin phải dùng đúng API URL để kết nối với nhau.
- Các lỗi setup thường gặp có thể đến từ thiếu environment variables, sai ports, database/Redis chưa chạy hoặc dùng sai run command.
- Nên ưu tiên các tính năng đơn giản và thực tế thay vì các tính năng phức tạp hoặc cần nghiên cứu nhiều.
- Làm quen sớm với tasks, commits, PRs và review giúp team phối hợp tốt hơn.