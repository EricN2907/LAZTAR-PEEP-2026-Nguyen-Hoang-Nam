+++
title = "Ghi chú về Git & Version Control"
weight = 1
+++

### 1. Phân biệt `git fetch`, `git merge` và `git pull`

| Khái niệm | Định nghĩa | Cơ chế hoạt động | Khi nào nên dùng |
| :--- | :--- | :--- | :--- |
| **`git fetch`** | Tải về các thay đổi (commits, branches, tags) từ remote repository về máy local nhưng **không tự động gộp (merge)** vào code hiện tại. | Chỉ cập nhật các tracking branch (dạng `origin/main` hoặc `origin/feature`), không làm thay đổi thư mục làm việc của bạn. | Dùng khi muốn kiểm tra xem trên remote có gì mới trước khi tích hợp vào code local. Rất an toàn. |
| **`git merge`** | Gộp lịch sử commits của một nhánh khác vào nhánh hiện tại của bạn. | Tạo ra một commit gộp (merge commit) nếu có xung đột, hoặc tua nhanh (Fast-forward) nếu không có thay đổi rẽ nhánh. | Dùng sau khi `git fetch` để gộp thay đổi từ nhánh remote tracker, hoặc gộp nhánh tính năng (`feature`) vào nhánh chính (`main`). |
| **`git pull`** | Tải về các thay đổi từ remote và **tự động gộp** trực tiếp vào nhánh local hiện tại. | Thực tế là viết tắt của: **`git fetch` + `git merge`** (mặc định) hoặc **`git fetch` + `git rebase`** (nếu cấu hình `--rebase`). | Dùng khi chắc chắn nhánh local và remote không có xung đột nghiêm trọng và muốn cập nhật nhanh code mới nhất. |

#### Công thức liên hệ:
> **`git pull`** = **`git fetch`** + **`git merge`**

---

### 2. Tìm hiểu toàn bộ câu lệnh của `git stash`

`git stash` được sử dụng để tạm thời lưu trữ (cất đi) các thay đổi chưa commit (cả staged và unstaged) để ta có thể chuyển nhánh làm việc khác mà không bị mất hoặc phải commit code dang dở.

#### Các câu lệnh cơ bản & nâng cao:

* **Tạm cất code:**
  ```bash
  # Cất toàn bộ thay đổi chưa commit kèm mô tả (Khuyên dùng)
  git stash save "Mô tả nội dung code đang làm dở"
  # Hoặc câu lệnh ngắn gọn mới hơn
  git stash push -m "Mô tả nội dung"
  
  # Cất cả các file mới tạo chưa được add (untracked files)
  git stash -u
  # Hoặc bao gồm cả các file bị bỏ qua trong .gitignore
  git stash -a
  ```

* **Xem danh sách các stash đang có:**
  ```bash
  git stash list
  # Kết quả trả về dạng: stash@{0}: On main: Mô tả nội dung
  ```

* **Xem nội dung thay đổi của một stash:**
  ```bash
  # Xem tóm tắt các file thay đổi trong stash gần nhất (stash@{0})
  git stash show
  # Xem chi tiết code thay đổi bên trong một stash cụ thể
  git stash show -p stash@{1}
  ```

* **Lấy lại code đã cất:**
  ```bash
  # Áp dụng thay đổi từ stash gần nhất và XÓA stash đó khỏi danh sách
  git stash pop
  # Áp dụng thay đổi từ stash cụ thể (ví dụ stash@{1}) và XÓA nó
  git stash pop stash@{1}
  
  # Áp dụng thay đổi từ stash gần nhất nhưng GIỮ LẠI stash trong danh sách
  git stash apply
  # Áp dụng thay đổi từ stash cụ thể và GIỮ LẠI
  git stash apply stash@{2}
  ```

* **Xóa stash:**
  ```bash
  # Xóa một stash cụ thể
  git stash drop stash@{0}
  # Xóa toàn bộ danh sách stash đang cất giữs
  git stash clear
  ```

* **Tạo nhánh mới từ một stash:**
  ```bash
  # Tạo nhánh mới và tự động apply code từ stash vào nhánh đó, đồng thời drop stash
  git stash branch <ten-nhanh-moi> stash@{0}
  ```
