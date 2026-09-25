+++
title = "Day 04 - 25/09/2026 (On-site)"
weight = 4
+++

## Completed Tasks

### 1. Finalized Domain A and Domain E Deliverables

Completed all three deliverables for both assigned domains based on the Sprint 0 plan:

| Deliverable | Domain A | Domain E |
| :--- | :--- | :--- |
| ERD (`.puml`) | `erd_domain_A.puml` | `erd_domain_E.puml` |
| Data Dictionary | `Data Dictionary domain A.xlsx` | `Data Dictionary domain E.xlsx` |
| Business Rules | `Business_Rules_Domain_A.xlsx` | `Business_Rules_Domain_E.xlsx` |

**Domain A — Authentication & RBAC** (5 tables): `users`, `roles`, `permissions`, `role_permissions`, `user_roles`.
Key design: `user_roles.warehouse_id` is nullable — `NULL` means system-wide access (ADMIN), a non-null value scopes the role to a specific warehouse.

**Domain E — Stock Ledger & Movement** (3 tables): `movement_types`, `reference_types`, `stock_ledger`.
Key design: `stock_ledger` is **append-only** — only `INSERT` is allowed; errors are corrected by inserting a REVERSAL row, never by `UPDATE` or `DELETE`.

### 2. Cross-domain Integration Session with the Team

The team held a joint integration review covering the connection points defined in the Sprint 0 plan.

#### 2.1. FK references confirmed across all 5 domains

| Connection point | Agreed resolution |
| :--- | :--- |
| `user_roles.warehouse_id → warehouses.id` | Domain B confirms `warehouses.id` is `BIGINT` |
| `stock_ledger.created_by → users.id` | Domain A confirms `users.id` is `BIGINT` |
| `inventory.sku_id → skus.id` | Domain C confirms `skus.id` is `BIGINT` |
| `inventory` update ↔ `stock_ledger` insert | Must run in the same ACID transaction (D ↔ E) |
| `qty_available` in inventory | Generated column: `qty_on_hand − qty_reserved`; never written directly |
| `lot_no` consistency | Must match between `inventory` and `stock_ledger` when `skus.is_lot_tracked = true` |

#### 2.2. Business scenario walkthrough (on paper)

Ran through the 8 test scenarios from the Sprint 0 plan to verify the design holds:

| # | Scenario | Result |
| :--- | :--- | :--- |
| 1 | Receive 10 BOX (1 BOX = 12 EA) → Ledger +120 EA RECEIPT | ✅ |
| 2 | Putaway 120 EA from RECV-01 to BIN A01-R03-B05 | ✅ 2 ledger rows, total on-hand unchanged |
| 3 | Reserve 30 EA for an outbound order | ✅ `reserved = 30`, `available = 90` |
| 4 | Pick 30 EA and ship | ✅ `on_hand = 90`, `reserved = 0`, PICK + SHIP ledger rows |
| 5 | Cycle count finds 2 EA short | ✅ ADJUST_OUT –2 by authorized user |
| 6 | Step 1 had wrong SKU → REVERSAL | ✅ Insert REVERSAL –120, then RECEIPT with correct SKU |
| 7 | Picker tries to adjust stock in an unassigned warehouse | ✅ Rejected by RBAC (`user_roles.warehouse_id` check) |
| 8 | Two users simultaneously reserve the last 90 EA | ✅ Only one succeeds via optimistic locking (`version` column in `inventory`) |

#### 2.3. Issues found and resolved during review

| Issue | Domain | Resolution |
| :--- | :--- | :--- |
| `location_type` values not finalized in Domain B | B | Domain B to confirm `BIN`, `RECV`, `QC`, `DAMAGED`, `IN_TRANSIT` before final submission |
| `reserve` action — does it write a ledger row? | D ↔ E | Agreed: **no ledger row for reserve**; only `qty_reserved` in `inventory` changes |
| Deactivating a `location` or `SKU` that still has stock | B, C, D | Constraint rule added: cannot deactivate if `qty_on_hand > 0` |

### 3. Submitted Deliverables to the Shared Drive

- All 6 files (ERD, Data Dictionary, Business Rules for Domain A and E) submitted to the team's `24-9/` folder on the shared drive.
- Confirmed all FK types (`BIGINT`) are consistent with Domain C and D references.

## Lessons Learned

- Walking through business scenarios **on paper** before writing code is the most effective way to find design flaws — all 8 scenarios passed without schema changes.
- The `reserve` decision (no ledger row) is a meaningful trade-off: simpler ledger history, but requires careful reconciliation during cycle counts.
- Integration reviews expose assumptions that each domain owner made independently — writing "domain B assumed" comments in the ERD helped surface these gaps quickly.
- Delivering all three artifacts (ERD + Data Dictionary + Business Rules) together gives reviewers full context; an ERD alone leaves too many questions open.
