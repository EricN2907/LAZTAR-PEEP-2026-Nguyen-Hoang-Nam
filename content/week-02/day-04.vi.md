+++
title = "Ngày 04 - 25/09/2026 (On-site)"
weight = 4
+++

## Việc đã làm

### 1. Hoàn thiện deliverable của Domain A và Domain E

Hoàn thành đầy đủ 3 deliverable cho cả hai domain được phân công theo kế hoạch Sprint 0:

| Deliverable | Domain A | Domain E |
| :--- | :--- | :--- |
| ERD (`.puml`) | `erd_domain_A.puml` | `erd_domain_E.puml` |
| Data Dictionary | `Data Dictionary domain A.xlsx` | `Data Dictionary domain E.xlsx` |
| Business Rules | `Business_Rules_Domain_A.xlsx` | `Business_Rules_Domain_E.xlsx` |

**Domain A — Authentication & RBAC** (5 bảng): `users`, `roles`, `permissions`, `role_permissions`, `user_roles`.
Thiết kế quan trọng: `user_roles.warehouse_id` có thể NULL — `NULL` nghĩa là quyền toàn hệ thống (ADMIN); có giá trị thì quyền chỉ áp dụng trong kho đó.

**Domain E — Stock Ledger & Movement** (3 bảng): `movement_types`, `reference_types`, `stock_ledger`.
Thiết kế quan trọng: `stock_ledger` là bảng **append-only** — chỉ được `INSERT`; sai sót phải sửa bằng cách insert dòng REVERSAL, tuyệt đối không `UPDATE` hay `DELETE`.

### 2. Họp tích hợp xuyên domain với cả nhóm

Nhóm tổ chức buổi review tích hợp để rà soát các điểm nối giữa 5 domain theo kế hoạch Sprint 0.

#### 2.1. Các FK xuyên domain đã được xác nhận

| Điểm nối | Kết quả thống nhất |
| :--- | :--- |
| `user_roles.warehouse_id → warehouses.id` | Domain B xác nhận `warehouses.id` là `BIGINT` |
| `stock_ledger.created_by → users.id` | Domain A xác nhận `users.id` là `BIGINT` |
| `inventory.sku_id → skus.id` | Domain C xác nhận `skus.id` là `BIGINT` |
| Cập nhật `inventory` ↔ insert `stock_ledger` | Phải thực hiện trong cùng một transaction ACID (D ↔ E) |
| `qty_available` trong inventory | Cột generated: `qty_on_hand − qty_reserved`; không được ghi trực tiếp |
| Nhất quán `lot_no` | Phải khớp giữa `inventory` và `stock_ledger` khi `skus.is_lot_tracked = true` |

#### 2.2. Chạy thử kịch bản nghiệp vụ trên giấy

Chạy qua 8 kịch bản kiểm thử từ kế hoạch Sprint 0 để kiểm tra thiết kế:

| # | Kịch bản | Kết quả |
| :--- | :--- | :--- |
| 1 | Nhập 10 BOX (1 BOX = 12 EA) → Ledger +120 EA RECEIPT | ✅ |
| 2 | Putaway 120 EA từ RECV-01 lên BIN A01-R03-B05 | ✅ 2 dòng ledger, tổng on-hand không đổi |
| 3 | Giữ chỗ 30 EA cho đơn xuất | ✅ `reserved = 30`, `available = 90` |
| 4 | Pick 30 EA và ship | ✅ `on_hand = 90`, `reserved = 0`, ghi PICK + SHIP |
| 5 | Kiểm kê phát hiện thiếu 2 EA | ✅ ADJUST_OUT –2 bởi người có quyền |
| 6 | Bước 1 nhập sai SKU → REVERSAL | ✅ Insert REVERSAL –120 rồi RECEIPT đúng SKU |
| 7 | Picker thử điều chỉnh tồn ở kho không được gán | ✅ Bị từ chối theo RBAC (`user_roles.warehouse_id`) |
| 8 | Hai người cùng giữ chỗ 90 EA cuối cùng đồng thời | ✅ Chỉ một người thành công nhờ optimistic locking (`version`) |

#### 2.3. Vấn đề phát hiện và giải quyết trong buổi review

| Vấn đề | Domain | Giải pháp |
| :--- | :--- | :--- |
| Chưa chốt danh sách `location_type` trong Domain B | B | Domain B cần xác nhận: `BIN`, `RECV`, `QC`, `DAMAGED`, `IN_TRANSIT` trước khi nộp cuối |
| Thao tác `reserve` có ghi ledger không? | D ↔ E | Thống nhất: **không ghi ledger khi reserve**; chỉ cập nhật `qty_reserved` trong `inventory` |
| Deactivate `location` hoặc `SKU` còn tồn kho | B, C, D | Thêm rule: không được deactivate khi `qty_on_hand > 0` |

### 3. Nộp deliverable lên Drive chung

- Toàn bộ 6 file (ERD, Data Dictionary, Business Rules cho Domain A và E) đã được nộp vào folder `24-9/` trên Drive chung của nhóm.
- Xác nhận tất cả FK type (`BIGINT`) nhất quán với Domain C và D.

## Bài học rút ra

- Chạy thử kịch bản nghiệp vụ **trên giấy** trước khi code là cách hiệu quả nhất để tìm lỗi thiết kế — cả 8 kịch bản đều pass mà không cần sửa schema.
- Quyết định không ghi ledger khi reserve là sự đánh đổi có chủ ý: lịch sử ledger đơn giản hơn, nhưng cần đối chiếu cẩn thận hơn trong quá trình kiểm kê.
- Buổi review tích hợp giúp lộ ra các giả định mà mỗi người tự đặt ra cho domain của mình — việc ghi chú "domain B assumed..." trong ERD giúp phát hiện nhanh các điểm chưa đồng thuận.
- Nộp đủ cả 3 artifact (ERD + Data Dictionary + Business Rules) cùng lúc giúp người review có đủ ngữ cảnh; chỉ nộp ERD thôi sẽ để lại quá nhiều câu hỏi bỏ ngỏ.
