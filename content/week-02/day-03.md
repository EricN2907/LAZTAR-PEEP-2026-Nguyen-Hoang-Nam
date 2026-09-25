+++
title = "Day 03 - 24/09/2026 (Remote)"
weight = 3
+++

## Completed Tasks

### 1. Started Working on WMS Sprint 0 Deliverables

Received the Sprint 0 planning document ([WMS_Sprint0_Ke_hoach](https://docs.google.com/document/d/1kbCaedgvxKkD5ANrLZXGp9Nv4GatrFvv/edit)) and began designing the assigned domains for a mini Warehouse Management System (WMS).

#### 1.1. Domain Assignments

The system was divided into 5 domains. I was responsible for **Domain A** and **Domain E**:

| Domain | Scope | Assignee |
| :--- | :--- | :--- |
| A — Authentication & RBAC | Users, Roles, Permissions, warehouse-scoped role assignment | Nam Nguyen |
| B — Warehouse Structure | Warehouses, Locations (Zone → Aisle → Rack → BIN) | Vy Tran |
| C — Product & Supplier | SKU, UOM, Barcode, Supplier | Trung Pham |
| D — Inventory Model | On-hand stock, Reserved, Available per location | Thuan Le |
| E — Stock Ledger & Movement | Ledger entries, Movement types, Reference types | Nam Nguyen |

#### 1.2. Shared Conventions Established

Before designing, the team agreed on a set of naming and data-type conventions:

| Convention | Rule |
| :--- | :--- |
| Table names | `snake_case`, plural English (e.g. `users`, `stock_ledger`) |
| Column names | `snake_case`; PK = `id`; FK = `<singular_table>_id` |
| Status / type codes | UPPERCASE string (e.g. `ACTIVE`, `RECEIPT`) |
| Boolean columns | Prefixed with `is_` or `has_` (e.g. `is_active`) |
| Primary key type | `BIGINT` (aligned with Domain C and D) |
| Quantity columns | `DECIMAL(18,4)` — supports fractional units (kg, m) |
| Timestamps | `TIMESTAMP` stored in UTC |
| Audit columns | Every master table has `created_at`, `created_by`, `updated_at`, `updated_by` |
| `stock_ledger` audit | Only `created_at`, `created_by` — append-only, never updated |
| Soft delete | Use `is_active = false` or `status = INACTIVE`; no hard delete after transactions exist |

#### 1.3. Domain A — Authentication & RBAC

Designed the full authentication and role-based access control structure.

**Tables designed:**

| Table | Key columns | Notes |
| :--- | :--- | :--- |
| `users` | `id`, `username` (UK), `email` (UK), `password_hash`, `status` | `status`: ACTIVE / LOCKED / INACTIVE |
| `roles` | `id`, `code` (UK), `name`, `is_active` | Codes: ADMIN, WH_MANAGER, SUPERVISOR, RECEIVER, PICKER, INSPECTOR, VIEWER |
| `permissions` | `id`, `code` (UK), `module`, `action` | Format: `MODULE.ACTION` e.g. `INBOUND.RECEIVE` |
| `role_permissions` | `role_id`, `permission_id` | N–N join; append-only |
| `user_roles` | `user_id`, `role_id`, `warehouse_id` (nullable) | `warehouse_id = NULL` means system-wide (ADMIN) |

Key design decision: `user_roles.warehouse_id` allows the same user to hold different roles in different warehouses — e.g. PICKER at Warehouse A and SUPERVISOR at Warehouse B.

#### 1.4. Domain E — Stock Ledger & Movement

Designed the immutable audit trail for all inventory changes.

**Tables designed:**

| Table | Key columns | Notes |
| :--- | :--- | :--- |
| `movement_types` | `id`, `code` (UK), `sign` (+1 / -1), `is_active` | Codes: RECEIPT, PUTAWAY\_IN/OUT, PICK, SHIP, TRANSFER\_IN/OUT, ADJUST\_IN/OUT, REVERSAL |
| `reference_types` | `id`, `code` (UK), `is_active` | Codes: RECEIPT, SHIPMENT, TRANSFER, ADJUSTMENT, CYCLE\_COUNT, REVERSAL |
| `stock_ledger` | `id`, `warehouse_id`, `location_id`, `sku_id`, `lot_no`, `movement_type_id`, `qty_change`, `qty_before`, `qty_after`, `reference_type_id`, `reference_id`, `reversal_of_id`, `note`, `created_at`, `created_by` | APPEND-ONLY; errors corrected by inserting a REVERSAL row |

Critical rule: `stock_ledger` is **insert-only** — never `UPDATE` or `DELETE`. Corrections must be made by inserting a new REVERSAL entry where `qty_change = -1 × original qty_change`.

### 2. Evening Team Meeting — Review and Task Alignment

- Participated in an evening online meeting with the whole group.
- Walked through each domain's draft ERD and Data Dictionary.
- Agreed on final cross-domain FK references:
  - `user_roles.warehouse_id → warehouses.id` (Domain B)
  - `stock_ledger.created_by → users.id` (Domain A)
  - `inventory` (Domain D) and `stock_ledger` (Domain E) must be updated in the **same ACID transaction**.
- Confirmed that `BIGINT` is used as PK across all domains (overriding the original UUID convention in the shared doc, aligned with Domains C and D which were implemented first).
- Divided review responsibilities: each domain owner cross-checks the adjacent domain's FK references.

## Lessons Learned

- Agreeing on naming conventions **before** designing tables prevents hours of rework; even small inconsistencies (UUID vs BIGINT) cause join failures.
- The append-only ledger pattern (`stock_ledger`) is a common auditing technique — it trades write simplicity for a complete, tamper-proof history.
- Warehouse-scoped RBAC (`user_roles.warehouse_id`) is more flexible than a flat role system; the same user can have different permissions per warehouse without creating separate accounts.
- Standing meetings at the end of a design day are essential for catching FK mismatches before they propagate across domain boundaries.
