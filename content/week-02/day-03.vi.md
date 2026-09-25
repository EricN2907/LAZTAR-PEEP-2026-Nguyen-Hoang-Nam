+++
title = "Ngày 03 - 24/09/2026 (Remote)"
weight = 3
+++

## Việc đã làm

### 1. Bắt đầu làm các phần trong WMS Sprint 0

Nhận tài liệu kế hoạch Sprint 0 ([WMS_Sprint0_Ke_hoach](https://docs.google.com/document/d/1kbCaedgvxKkD5ANrLZXGp9Nv4GatrFvv/edit)) và bắt đầu thiết kế các domain được phân công trong hệ thống mini Warehouse Management System (WMS).

#### 1.1. Phân công domain

Hệ thống được chia thành 5 domain. Tôi phụ trách **Domain A** và **Domain E**:

| Domain | Phạm vi | Người phụ trách |
| :--- | :--- | :--- |
| A — Authentication & RBAC | User, Role, Permission, phân quyền theo kho | Nam Nguyen |
| B — Warehouse Structure | Kho hàng, Vị trí (Zone → Aisle → Rack → BIN) | Vy Tran |
| C — Product & Supplier | SKU, UOM, Barcode, Nhà cung cấp | Trung Pham |
| D — Inventory Model | Tồn kho on-hand, Reserved, Available theo vị trí | Thuan Le |
| E — Stock Ledger & Movement | Sổ cái tồn kho, Loại biến động, Loại chứng từ | Nam Nguyen |

#### 1.2. Quy ước chung đã thống nhất

Trước khi thiết kế, nhóm thống nhất các quy ước đặt tên và kiểu dữ liệu:

| Quy ước | Quy tắc |
| :--- | :--- |
| Tên bảng | `snake_case`, số nhiều, tiếng Anh (vd: `users`, `stock_ledger`) |
| Tên cột | `snake_case`; PK = `id`; FK = `<tên bảng số ít>_id` |
| Mã trạng thái / loại | Chữ HOA (vd: `ACTIVE`, `RECEIPT`) |
| Cột boolean | Bắt đầu bằng `is_` hoặc `has_` (vd: `is_active`) |
| Kiểu khóa chính | `BIGINT` (đồng bộ với Domain C và D) |
| Cột số lượng | `DECIMAL(18,4)` — hỗ trợ đơn vị lẻ (kg, mét) |
| Timestamp | Lưu theo UTC |
| Cột audit | Mọi bảng master có `created_at`, `created_by`, `updated_at`, `updated_by` |
| Audit `stock_ledger` | Chỉ `created_at`, `created_by` — append-only, không bao giờ update |
| Xóa dữ liệu | Dùng `is_active = false` hoặc `status = INACTIVE`; không xóa cứng sau khi đã phát sinh giao dịch |

#### 1.3. Domain A — Authentication & RBAC

Thiết kế toàn bộ cấu trúc xác thực và phân quyền theo vai trò.

**Các bảng thiết kế:**

| Bảng | Cột chính | Ghi chú |
| :--- | :--- | :--- |
| `users` | `id`, `username` (UK), `email` (UK), `password_hash`, `status` | `status`: ACTIVE / LOCKED / INACTIVE |
| `roles` | `id`, `code` (UK), `name`, `is_active` | Codes: ADMIN, WH_MANAGER, SUPERVISOR, RECEIVER, PICKER, INSPECTOR, VIEWER |
| `permissions` | `id`, `code` (UK), `module`, `action` | Format: `MODULE.ACTION` vd: `INBOUND.RECEIVE` |
| `role_permissions` | `role_id`, `permission_id` | Bảng join N–N; chỉ insert |
| `user_roles` | `user_id`, `role_id`, `warehouse_id` (nullable) | `warehouse_id = NULL` = quyền toàn hệ thống (ADMIN) |

Quyết định thiết kế quan trọng: `user_roles.warehouse_id` cho phép cùng một người có vai trò khác nhau ở từng kho — ví dụ PICKER ở Kho A và SUPERVISOR ở Kho B.

#### 1.4. Domain E — Stock Ledger & Movement

Thiết kế sổ cái bất biến để ghi lại toàn bộ biến động tồn kho.

**Các bảng thiết kế:**

| Bảng | Cột chính | Ghi chú |
| :--- | :--- | :--- |
| `movement_types` | `id`, `code` (UK), `sign` (+1 / -1), `is_active` | Codes: RECEIPT, PUTAWAY\_IN/OUT, PICK, SHIP, TRANSFER\_IN/OUT, ADJUST\_IN/OUT, REVERSAL |
| `reference_types` | `id`, `code` (UK), `is_active` | Codes: RECEIPT, SHIPMENT, TRANSFER, ADJUSTMENT, CYCLE\_COUNT, REVERSAL |
| `stock_ledger` | `id`, `warehouse_id`, `location_id`, `sku_id`, `lot_no`, `movement_type_id`, `qty_change`, `qty_before`, `qty_after`, `reference_type_id`, `reference_id`, `reversal_of_id`, `note`, `created_at`, `created_by` | APPEND-ONLY; sai sót sửa bằng cách insert dòng REVERSAL |

Quy tắc quan trọng: `stock_ledger` là bảng **chỉ được INSERT** — không bao giờ `UPDATE` hoặc `DELETE`. Mọi sai sót phải được sửa bằng cách insert một dòng REVERSAL mới với `qty_change = -1 × qty_change gốc`.

### 2. Họp nhóm buổi tối — Rà soát và chốt phân công

- Tham gia họp online buổi tối với cả nhóm.
- Lần lượt trình bày ERD nháp và Data Dictionary của từng domain.
- Thống nhất các FK xuyên domain:
  - `user_roles.warehouse_id → warehouses.id` (Domain B)
  - `stock_ledger.created_by → users.id` (Domain A)
  - `inventory` (Domain D) và `stock_ledger` (Domain E) phải được cập nhật trong **cùng một transaction ACID**.
- Xác nhận dùng `BIGINT` làm PK thống nhất trên tất cả domain (điều chỉnh so với quy ước UUID ban đầu, đồng bộ với Domain C và D đã triển khai trước).
- Phân công review chéo: mỗi người phụ trách domain sẽ kiểm tra FK của domain liền kề.

## Bài học rút ra

- Thống nhất quy ước đặt tên **trước** khi thiết kế bảng giúp tránh hàng giờ sửa lại; chỉ cần không nhất quán nhỏ (UUID vs BIGINT) là gây lỗi khi JOIN.
- Pattern sổ cái append-only (`stock_ledger`) là kỹ thuật audit phổ biến — đổi lấy lịch sử đầy đủ, không thể giả mạo bằng cách chấp nhận chỉ ghi thêm, không sửa.
- RBAC theo phạm vi kho (`user_roles.warehouse_id`) linh hoạt hơn hệ thống vai trò phẳng; cùng một người có thể có quyền khác nhau ở từng kho mà không cần tạo tài khoản riêng.
- Họp chốt cuối ngày thiết kế là bước quan trọng để phát hiện mismatch FK trước khi lỗi lan sang các domain khác.
