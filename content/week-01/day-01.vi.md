+++
title = "Ngày 01 - 15/06/2026"
weight = 1
+++

## Chủ đề được học

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

#### Tái hiện các đoạn code github

---

##### `git init` — Khởi tạo kho lưu trữ Git mới

Chạy `git init` bên trong thư mục `demo-git` để khởi tạo kho lưu trữ Git trống. Git sẽ tạo thư mục `.git/` bên trong.

![Hình 1 – git init tạo repo trống tại D:/LazTar/demo-git](/images/day1/image1.png)

---

##### `git remote` — Quản lý kết nối kho lưu trữ từ xa

Gọi `git remote` khi chưa có remote nào → kết quả trống. Sau đó dùng `git remote add origin <url>` để thêm remote, rồi gọi lại `git remote` → xuất hiện tên `origin`.

![Hình 2 – git remote trước và sau khi thêm origin](/images/day1/image2.png)

---

##### `git remote -v` — Xem chi tiết địa chỉ remote

`git remote -v` hiển thị đầy đủ địa chỉ fetch và push của remote `origin`.

![Hình 3 – git remote add origin và git remote -v](/images/day1/image3.png)
![Hình 4 – git remote -v xem fetch/push URL](/images/day1/image4.png)

---

##### `git clone` — Sao chép kho lưu trữ từ xa về máy cục bộ

Chạy `git clone <url>` để tải toàn bộ kho lưu trữ từ GitHub về. Git tự tạo thư mục `LAZTAR-PEEP-2026-Nguyen-Hoang-Nam/` bên trong `demo-git/`.

![Hình 5 – git clone repo về máy cục bộ](/images/day1/image5.png)

---

##### `git fetch` — Tải thay đổi từ xa nhưng chưa hợp nhất

**Flow minh họa:**

- **Hình 6**: Chạy `git log --oneline -3` — local đang có 3 commit mới nhất, `HEAD` và `origin/main` đang đồng bộ với nhau tại commit `f5373ea (Fix name)`.

![Hình 6 – git log --oneline -3: local đang đồng bộ với remote](/images/day1/image6.png)

- **Hình 7**: Vào GitHub tạo commit mới tên **"Add instructions for building production site"** (hash `2855f46`). Lúc này remote đã có commit mà local chưa hay biết.

![Hình 7 – GitHub đã có commit mới "Add instructions for building production site"](/images/day1/image7.png)

- **Hình 8**: Sau khi chạy `git fetch origin` → Git tải thông tin về, cập nhật `origin/main` lên `2855f46`. Chạy `git log main..origin/main --oneline` → thấy commit mới trên remote. Chạy `git diff main origin/main` → thấy nội dung thay đổi trong README. Nhưng nhánh `main` local vẫn chưa có commit đó.

![Hình 8 – git fetch origin: thấy diff nhưng local chưa merge](/images/day1/image8.png)

> **Kết luận:** `git fetch` chỉ tải thông tin, **không** tự động hợp nhất vào nhánh đang làm việc.

![Hình 9 – git log --oneline -3 sau fetch: local vẫn ở f5373ea, chưa có 2855f46](/images/day1/image9.png)

---

##### `git pull` — Tải và hợp nhất thay đổi từ xa

`git pull origin main` = `git fetch` + `git merge`. Lệnh tải commit `2855f46` về và hợp nhất ngay vào nhánh `main` local theo kiểu **Fast-forward** (1 file changed, 1 insertion).

![Hình 10 – git pull origin main: Fast-forward, README.md được cập nhật](/images/day1/image10.png)

---

##### `git merge` — Kết hợp thay đổi từ nhánh khác

Chạy riêng `git fetch` rồi `git merge origin/main` để hợp nhất thủ công. Kết quả tương tự pull: Fast-forward, `README.md | 1 +`.

![Hình 11 – git fetch + git merge origin/main: Fast-forward thủ công](/images/day1/image11.png)

---

##### `git status` — Hiển thị trạng thái kho lưu trữ

Sau khi sửa file `content/week-01/day-01.vi.md` nhưng chưa `add`, `git status` báo:
- `modified: content/week-01/day-01.vi.md` (unstaged)
- `Untracked files: static/images/day1/` (chưa track)

![Hình 12 – git status: thấy file modified và untracked](/images/day1/image12.png)

---

##### `git commit` — Ghi lại thay đổi vào kho lưu trữ

Sau khi `git add .`, chạy `git commit -m "message"` → Git ghi nhận staged changes thành một commit mới trong lịch sử.

![Hình 13 – git status sau pull: "nothing to commit, working tree clean"](/images/day1/image13.png)
![Hình 14 – git status sạch sau khi commit xong](/images/day1/image14.png)

---

##### `git branch` — Liệt kê, tạo hoặc xóa nhánh

`git branch` liệt kê tất cả các nhánh. Nhánh đang đứng được đánh dấu `*` và tô màu. Ví dụ đang ở `* feature/be-foundation-review`, có thêm các nhánh `develop`, `main`, v.v.

![Hình 15 – git branch: liệt kê nhánh, dấu * là nhánh hiện tại](/images/day1/image15.png)
![Hình 16 – git branch + git switch: thấy danh sách rồi switch về main](/images/day1/image16.png)

---

##### `git switch` — Chuyển sang nhánh khác

`git switch <tên-nhánh>` để chuyển nhánh (cú pháp hiện đại). Ví dụ `git switch main` → "Switched to branch 'main'".

![Hình 17 – git checkout: "Your branch is up to date with 'origin/main'"](/images/day1/image17.png)

---

##### `git checkout` — Chuyển nhánh hoặc khôi phục tệp

`git checkout` (không tham số) → báo trạng thái nhánh hiện tại. Dùng `git checkout <branch>` để chuyển nhánh tương tự `git switch`.

![Hình 18 – git checkout: thấy "Your branch is up to date with 'origin/main'"](/images/day1/image18.png)

---

##### `git add` + `git commit` + `git push` — Combo cơ bản

Quy trình đầy đủ khi làm việc trên nhánh mới:

```bash
git switch -c feature-demo     # tạo và chuyển sang nhánh mới
git add .                       # stage tất cả thay đổi
git commit -m "Add feature demo"
git switch main                 # quay lại main
git add .
git commit -m "Update main content"
git push origin main            # đẩy lên remote
```

![Hình 19 – git switch -c, git add, git commit, git switch main, git push](/images/day1/image19.png)

---

##### `git commit --amend` — Sửa đổi commit cuối cùng

`git commit --amend -m "message mới"` thay thế commit cuối. Ví dụ: commit cũ là `887d8aa (Add image)` → sau amend đổi thành `1d481b8 (Add 2 image)` — **hash thay đổi** nhưng chỉ có 1 commit thay vì tạo thêm commit mới.

```bash
git log --oneline -1             # xem commit cuối: 887d8aa Add image
git commit --amend -m "Add 2 image"
git log --oneline -1             # hash mới: 1d481b8 Add 2 image
```

![Hình 20 – git commit --amend: hash thay đổi từ 887d8aa sang 1d481b8](/images/day1/image20.png)

---

##### `git reset` — Bỏ staged hoặc đặt lại commit

`git reset --soft HEAD~1` xóa commit cuối khỏi lịch sử nhưng giữ lại thay đổi ở vùng staged. Ví dụ: commit `1d481b8 (Add 2 image)` bị xóa, `HEAD` quay về `2855f46`. Sau đó `git status` cho thấy các file vẫn còn ở trạng thái "Changes to be committed".

```bash
git log --oneline -2             # thấy: 1d481b8 Add 2 image, 2855f46 Add instructions...
git reset --soft HEAD~1          # xóa commit Add 2 image, giữ staged
git log --oneline -2             # HEAD giờ là 2855f46
git status                       # thấy file vẫn staged (Changes to be committed)
```

![Hình 21 – git switch -c feature-demo + git add + git commit "Add feature demo"](/images/day1/image21.png)
![Hình 22 – git log + git reset --soft HEAD~1 + git log + git status](/images/day1/image22.png)

---

##### `git rebase` — Áp dụng lại commit lên nhánh khác

Khi `feature-demo` và `main` đã phân kỳ (mỗi nhánh có commit riêng), `git rebase main` áp dụng lại commit của `feature-demo` lên đầu `main`, tạo lịch sử tuyến tính.

**Trạng thái trước rebase** (hình 23–24): `feature-demo` tách ra từ `main` — hai nhánh chạy song song.

![Hình 23 – git switch -c feature-demo + commit "Add feature demo": lịch sử bắt đầu tách](/images/day1/image23.png)
![Hình 24 – Sơ đồ lịch sử: main và feature-demo đang phân kỳ](/images/day1/image24.png)

**Sau rebase** (hình 25): Chạy `git switch feature-demo` rồi `git rebase main` → lịch sử `feature-demo` được đặt lại lên đầu `main`, tuyến tính và gọn hơn.

```bash
git switch feature-demo
git rebase main
```

![Hình 25 – git rebase main: feature-demo "Current branch feature-demo is up to date"](/images/day1/image25.png)

---

##### `git stash` — Lưu thay đổi chưa commit tạm thời

`git stash` lưu toàn bộ thay đổi đang làm dở vào một ngăn tạm, giúp working tree trở nên sạch để có thể chuyển nhánh hoặc làm việc khác mà không cần commit.

- **Hình 26**: Sau khi `echo "# WIP note" >> README.md`, chạy `git status` → thấy `modified: README.md`. Đây là trạng thái **trước khi stash**.

![Hình 26 – git status: README.md bị modified trước khi stash](/images/day1/image26.png)

- **Hình 27**: Chạy `git stash` → Git lưu thay đổi vào stash (`Saved working directory... WIP on feature-demo`). Sau đó `git stash pop` → thay đổi được khôi phục lại, `README.md` quay về trạng thái `modified`.

![Hình 27 – git stash + git stash pop: lưu rồi khôi phục thay đổi](/images/day1/image27.png)

---

##### `git rebase -i` — Rebase tương tác để chỉnh sửa commit

`git rebase -i HEAD~3` mở editor cho phép chỉnh sửa, gộp (squash), xóa hoặc đổi thứ tự các commit. Dùng để dọn dẹp lịch sử trước khi push.

**Flow minh họa:**

- **Hình 28**: Tạo nhánh `rebase-demoo` và tạo 3 commit liên tiếp (`fix A`, `fix B`, `fix C`) vào `README.md`. Chạy `git log --oneline -4` → thấy 3 commit rời nhau.

![Hình 28 – tạo 3 commit fix A, fix B, fix C trên nhánh rebase-demoo](/images/day1/image28.png)

- **Hình 29**: Kết quả `git log --oneline -4` trên nhánh `rebase-demooo` — `HEAD` là commit `squash fix A B C` (đã gộp), bên dưới là commit gốc `fix C`, `fix B`, `fix A`.

![Hình 29 – git log sau rebase -i: HEAD là "squash fix A B C"](/images/day1/image29.png)

- **Hình 30**: Màn hình Vim editor của `git rebase -i` — thấy 3 dòng `pick` với 3 commit. Đổi dòng 2 và 3 từ `pick` → `s` (squash) để gộp vào commit đầu.

![Hình 30 – git rebase -i editor: pick/squash 3 commit](/images/day1/image30.png)

---

##### `git cherry-pick` — Áp dụng commit cụ thể từ nhánh khác

`git cherry-pick <hash>` sao chép một commit cụ thể từ nhánh khác và áp dụng vào nhánh hiện tại mà không cần merge toàn bộ nhánh đó.

**Flow minh họa:**

- **Hình 31**: Chuyển về `main` rồi chạy `git cherry-pick a9c80b8` → commit `squash fix A B C` được copy sang `main` với hash mới `1d93759`. Chạy `git log --oneline -3` → thấy commit đó xuất hiện trên `main`.

```bash
git cherry-pick --skip            # hủy cherry-pick dở
git switch main                   # chuyển về main
git cherry-pick a9c80b8           # copy commit từ rebase-demooo
git log --oneline -3              # xác nhận commit xuất hiện trên main
```

![Hình 31 – git cherry-pick: commit "squash fix A B C" xuất hiện trên nhánh main](/images/day1/image31.png)

