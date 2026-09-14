+++
title = "Ngày 01 - 15/06/2026"
weight = 1
+++

## Topics Learned

### Git

#### Các câu lệnh phổ biến

| Lệnh               | Mô Tả                                            |
| ------------------ | ------------------------------------------------ |
| git init           | Khởi tạo kho lưu trữ Git mới                     |
| git remote         | Quản lý kết nối kho lưu trữ từ xa                |
| git clone          | Sao chép kho lưu trữ từ xa về máy cục bộ         |
| git fetch          | Tải các thay đổi từ xa mà không hợp nhất         |
| git pull           | Tải và hợp nhất các thay đổi từ xa               |
| git status         | Hiển thị trạng thái hiện tại của kho lưu trữ     |
| git branch         | Liệt kê, tạo hoặc xóa các nhánh                  |
| git switch         | Chuyển sang nhánh khác                           |
| git checkout       | Chuyển nhánh hoặc khôi phục tệp thư mục làm việc |
| git add            | Chuẩn bị các thay đổi để commit                  |
| git commit         | Ghi lại các thay đổi vào kho lưu trữ             |
| git commit --amend | Sửa đổi commit cuối cùng                         |
| git push           | Tải các commit cục bộ lên từ xa                  |
| git reset          | Bỏ chuẩn bị hoặc đặt lại các commit              |
| git rebase         | Áp dụng lại các commit trên một nhánh khác       |
| git rebase -i      | Rebase tương tác để chỉnh sửa các commit         |
| git stash          | Lưu các thay đổi chưa commit tạm thời            |
| git stash pop      | Khôi phục các thay đổi đã lưu trữ                |
| git merge          | Kết hợp các thay đổi từ nhánh khác               |
| git cherry-pick    | Áp dụng các commit cụ thể từ nhánh khác          |

#### Xử Lý Xung Đột Git

| Tình Huống                                | Giải Pháp (Source Control)                                                                         |
| ----------------------------------------- | -------------------------------------------------------------------------------------------------- |
| Giữ lại thay đổi từ cả hai nhánh          | Mở tệp trong trình soạn thảo, chỉnh sửa thủ công để bao gồm cả hai thay đổi, rồi nhập vào dấu ✓    |
| Giữ lại thay đổi từ nhánh hiện tại        | Di chuột qua dấu xung đột và nhập nút "Accept Current Change"                                      |
| Giữ lại thay đổi từ nhánh đến             | Di chuột qua dấu xung đột và nhập nút "Accept Incoming Change"                                     |
| Hủy hợp nhất và bắt đầu lại               | Nhập biểu tượng Source Control ở thanh bên, rồi nhập menu "..." và chọn "Abort Merge"              |
| Giải quyết xung đột trong trình soạn thảo | Xung đột được đánh dấu bằng màu sắc, chỉnh sửa thủ công hoặc sử dụng giao diện giải quyết xung đột |

---

### TypeScript

#### Interface vs Type

- `interface` chủ yếu dùng để định nghĩa cấu trúc object và hỗ trợ kế thừa thông qua `extends`.
- `type` linh hoạt hơn và có thể định nghĩa object, union, tuple, kiểu primitive và kiểu function.
- Cả hai đều có thể dùng để mô tả cấu trúc object trong TypeScript.

#### Union Type

- Cho phép một biến nhận nhiều kiểu hoặc nhiều giá trị khác nhau.
- Sử dụng toán tử `|` (OR).

#### Omit Utility Type

- Tạo một type mới bằng cách loại bỏ một hoặc nhiều thuộc tính từ type gốc.
- Thường dùng để tái sử dụng model hoặc ẩn các field không cần thiết.

#### Extends

- Dùng để kế thừa thuộc tính từ interface khác.
- Giúp tái sử dụng code và giảm lặp lại thuộc tính.

---

### ESLint

#### Purpose of ESLint

- Công cụ static code analysis cho JavaScript/TypeScript.
- Giúp phát hiện lỗi và cảnh báo trước khi chạy chương trình.
- Đảm bảo code tuân thủ coding convention của dự án.

#### Common Errors and Warnings

- `no-unused-vars`: Biến khai báo nhưng không sử dụng.
- `no-undef`: Sử dụng biến chưa khai báo.
- `react-hooks/rules-of-hooks`: Sử dụng Hook sai quy tắc.
- `react-hooks/exhaustive-deps`: Thiếu dependency trong `useEffect`.
- `no-magic-numbers`: Sử dụng số hard-code không có ý nghĩa rõ ràng.

## Lessons Learned

- Tránh **"magic number"**
- Tránh commit node_modules.
- Hiểu sự khác biệt giữa merge và rebase.
- Sử dụng git add <file> thay vì git add . khi có thể.

## Key Principles

- Tổ chức `src/` theo tính năng hoặc loại
- Tách các tệp cấu hình ở mức gốc
- Luôn thêm `node_modules/` và `dist/` vào `.gitignore`
- Sử dụng tên thư mục rõ ràng và mô tả
- Nhóm các tệp liên quan lại với nhau để dễ dàng điều hướng
