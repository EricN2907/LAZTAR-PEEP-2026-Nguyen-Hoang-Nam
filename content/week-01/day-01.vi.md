+++
title = "Ngày 01 - 15/09/2026"
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

---

#### Thực hành xử lý conflict — GitHub web và VS Code

Hai tình huống được thực hành trên repo **PRM393-SU26-GRP6/BE**, với `dev_1` là nhánh nhận Pull Request. Các file chính sách trong `docs/` là bản thảo phục vụ bài thực hành.

| Tình huống | Nhánh tính năng | Conflict | Công cụ xử lý |
| --- | --- | --- | --- |
| Cập nhật thời gian giữ chỗ | `feature/booking-timeout` | Một dòng: 10 phút hay 15 phút | GitHub web |
| Cập nhật chính sách đặt sân | `feature/booking-policy-update` | Hai file sửa cùng dòng và một file sửa/xóa | VS Code + Git |

**Luồng thực hành:** Kiểm tra nhánh → tạo PR → nhận diện conflict → thống nhất nội dung → ghi nhận kết quả → merge PR.

##### Chuẩn bị — Kiểm tra và push các nhánh

Trong thư mục `BE`, kiểm tra working tree và danh sách nhánh trước khi đưa các commit lên GitHub.

```bash
git status
git branch
git push origin dev_1
git push -u origin feature/booking-timeout
git push -u origin feature/booking-policy-update
```

**Hình 32:** Working tree sạch; tại thời điểm chụp, `dev_1` local đang hơn `origin/dev_1` 15 commit. Đây là số commit chưa push, không phải số phút trong chính sách giữ chỗ.

![Hình 32 – Kiểm tra working tree và các nhánh trong repo BE](/images/day1/image32.png)

**Hình 33:** Push `dev_1` và hai nhánh tính năng thành công; thiết lập upstream cho các nhánh mới.

![Hình 33 – Push nhánh đích và hai nhánh tính năng lên GitHub](/images/day1/image33.png)

---

##### Phần 1 — Giải quyết conflict trực tiếp trên GitHub web

**Tình huống:** Cùng dòng trong `docs/booking-policy.md` được sửa từ bản gốc **5 phút** thành **10 phút** trên nhánh tính năng và **15 phút** trên `dev_1`.

**Bước 1 — Đối chiếu file và chọn nhánh cho PR**

Mở file trên hai nhánh để đối chiếu. Khi tạo PR, chọn **base: `dev_1`** và **compare: `feature/booking-timeout`**.

![Hình 34 – Mở chính sách giữ chỗ trên nhánh tính năng và dev_1](/images/day1/image34.png)

**Hình 35:** GitHub báo **Can't automatically merge**. Diff bên dưới thể hiện thay đổi của nhánh tính năng từ bản gốc **5 → 10 phút**; đây không phải phép so sánh trực tiếp hai giá trị cuối **10 và 15 phút**.

![Hình 35 – Chọn base và compare, GitHub phát hiện không thể tự merge](/images/day1/image35.png)

**Bước 2 — Tạo Pull Request và xem file conflict**

Đặt tiêu đề **Update booking reservation timeout** và mô tả đề xuất tăng thời gian giữ chỗ, rồi chọn **Create pull request**.

![Hình 36 – Nhập tiêu đề cho Pull Request cập nhật thời gian giữ chỗ](/images/day1/image36.png)

**Hình 37:** PR **#12** liệt kê `docs/booking-policy.md` cần giải quyết. Nút **Resolve conflicts** khả dụng vì đây là conflict nội dung đơn giản.

![Hình 37 – PR số 12 báo conflict tại booking-policy.md](/images/day1/image37.png)

**Bước 3 — Chọn nội dung cuối cùng**

Nhấn **Resolve conflicts** để xem hai phiên bản:

```text
<<<<<<< feature/booking-timeout
Thời gian giữ chỗ: 10 phút.
=======
Thời gian giữ chỗ: 15 phút.
>>>>>>> dev_1
```

![Hình 38 – Web editor hiển thị hai giá trị 10 phút và 15 phút](/images/day1/image38.png)

Thống nhất giữ **15 phút**, chọn nội dung Incoming hoặc sửa toàn bộ vùng conflict thành dòng dưới đây. Giữ nguyên các dòng ngoài vùng conflict.

```text
Thời gian giữ chỗ: 15 phút.
```

Chọn **Mark as resolved**. Khi file có dấu kiểm xanh, nhấn **Commit merge**.

![Hình 39 – Giữ giá trị 15 phút và đánh dấu file đã giải quyết](/images/day1/image39.png)

**Bước 4 — Kiểm tra và merge PR**

PR chuyển sang **No conflicts with base branch**. Trong ảnh, **Files changed = 0** vì nội dung cuối cùng trùng với `dev_1`; lịch sử vẫn có commit đề xuất và commit giải quyết conflict.

![Hình 40 – PR hết conflict sau khi tạo commit giải quyết trên web](/images/day1/image40.png)

{{% notice note %}}
**Commit merge** trong conflict editor đưa nhánh đích vào nhánh tính năng để giải quyết conflict. **Merge pull request** là bước tiếp theo, đưa nhánh tính năng vào `dev_1`.
{{% /notice %}}

Chọn **Merge pull request** và xác nhận. PR **#12** chuyển sang **Merged**, hoàn thành phần thực hành trên web.

![Hình 41 – PR số 12 đã merge thành công vào dev_1](/images/day1/image41.png)

---

##### Phần 2 — Giải quyết conflict phức tạp trong VS Code

**Tình huống:** Nhánh `feature/booking-policy-update` đề xuất cập nhật ba tài liệu, trong khi `dev_1` đã sửa chính sách theo hướng khác và xóa hướng dẫn cũ.

| File trong `docs/` | Nhánh tính năng | `dev_1` | Loại conflict |
| --- | --- | --- | --- |
| `cancellation-policy.md` | Hủy trước 2 giờ | Hủy trước 4 giờ | Sửa cùng dòng |
| `payment-policy.md` | Đặt cọc 30% | Đặt cọc 50% | Sửa cùng dòng |
| `legacy-booking-flow.md` | Bổ sung mã đặt sân | Xóa file | Sửa/xóa file |

**Bước 1 — Tạo PR và nhận diện giới hạn của web editor**

Chọn **base: `dev_1`**, **compare: `feature/booking-policy-update`**. Trang so sánh liệt kê ba file được thay đổi trên nhánh tính năng.

![Hình 42 – So sánh nhánh cập nhật chính sách với dev_1](/images/day1/image42.png)

Tạo PR với tiêu đề **Update booking policies and legacy flow**, mô tả đề xuất hủy trước 2 giờ, đặt cọc 30% và cập nhật hướng dẫn xác nhận qua điện thoại.

![Hình 43 – Tạo Pull Request cập nhật chính sách đặt sân](/images/day1/image43.png)

**Hình 44:** PR **#13** báo ba file conflict. Khi di chuột vào nút **Resolve conflicts** bị vô hiệu hóa, GitHub hiển thị thông báo không thể giải quyết bằng web editor.

![Hình 44 – GitHub thông báo conflict quá phức tạp để xử lý trong web editor](/images/day1/image44.png)

{{% notice info %}}
Điểm quyết định ở đây là **conflict sửa/xóa file**, không chỉ là số lượng conflict. Cần dùng Git local để quyết định giữ hay xóa tài liệu, đồng thời xử lý các dòng xung đột.
{{% /notice %}}

**Bước 2 — Merge nhánh đích vào nhánh tính năng ở local**

Kiểm tra trạng thái rồi chuyển sang nhánh của PR:

```bash
git status
git switch feature/booking-policy-update
```

![Hình 45 – Working tree sạch trước khi chuyển sang nhánh cập nhật chính sách](/images/day1/image45.png)

Lấy thay đổi mới nhất, bao gồm PR #12 vừa merge, rồi merge `origin/dev_1`:

```bash
git fetch origin
git merge origin/dev_1
git status
```

Git báo `CONFLICT (content)` và `CONFLICT (modify/delete)`, sau đó dừng để chờ xử lý. File `booking-policy.md` được hợp nhất tự động; ba file còn lại cần quyết định thủ công.

![Hình 46 – Terminal báo conflict nội dung và conflict sửa/xóa sau lệnh merge](/images/day1/image46.png)

**Bước 3 — Đọc Current và Incoming trong VS Code**

Mở **Source Control → Merge Changes**. Với lệnh merge vừa chạy:

| Nhãn trong editor | Nhánh tương ứng | Chính sách hủy | Đặt cọc |
| --- | --- | --- | --- |
| Current / HEAD | `feature/booking-policy-update` | 2 giờ | 30% |
| Incoming | `origin/dev_1` | 4 giờ | 50% |

![Hình 47 – Conflict chính sách hủy: Current 2 giờ, Incoming 4 giờ](/images/day1/image47.png)

![Hình 48 – Conflict thanh toán: Current 30%, Incoming 50%](/images/day1/image48.png)

**Bước 4 — Thống nhất nội dung và đánh dấu đã giải quyết**

Ở hai file chính sách, chọn **Accept Incoming Change** để giữ **4 giờ** và **50%**, rồi lưu file. Với `legacy-booking-flow.md`, có hai cách quyết định:

| Quyết định | Lệnh đánh dấu giải quyết |
| --- | --- |
| Giữ bản tài liệu đã sửa trên nhánh tính năng | `git add docs/legacy-booking-flow.md` |
| Đồng ý xóa tài liệu theo nhánh đích | `git rm docs/legacy-booking-flow.md` |

**Trong lần thực hành này, bản tài liệu cũ đã được giữ lại.** Đối chiếu commit kết quả `bd6a9e1`, file vẫn chứa hướng dẫn gọi điện và cung cấp mã đặt sân. Vì vậy, các lệnh dưới đây minh họa lựa chọn giữ file:

```bash
git add docs/cancellation-policy.md docs/payment-policy.md
git add docs/legacy-booking-flow.md
git status
```

Conflict sửa/xóa không nhất thiết có dấu phân cách trong file. `git add` ở đây xác nhận giữ bản hiện có. Vì nội dung file được giữ nguyên so với HEAD, file có thể không xuất hiện trong danh sách **Staged Changes** sau khi đã giải quyết.

**Hình 49:** Chính sách hủy đã là **4 giờ**; Source Control không còn nhóm **Merge Changes**, các thay đổi nội dung đã được stage.

![Hình 49 – Nội dung sau khi giải quyết và các file trong Staged Changes](/images/day1/image49.png)

**Bước 5 — Kiểm tra diff, commit và push**

```bash
git diff --cached --check
git diff --cached
```

Lệnh đầu kiểm tra lỗi whitespace và dấu conflict còn sót trong diff; lệnh sau giúp đọc lại nội dung đã stage trước khi commit.

![Hình 50 – Kiểm tra diff đã stage trước khi hoàn tất merge](/images/day1/image50.png)

```bash
git commit -m "docs(booking): resolve policy conflicts and retire legacy flow"
git push origin feature/booking-policy-update
git status
```

**Hình 51:** Commit `bd6a9e1` được tạo và push thành công; working tree sạch. Lệnh commit trên được giữ đúng theo ảnh thực hành. Tuy tên commit có cụm `retire legacy flow`, nội dung commit thực tế vẫn giữ `legacy-booking-flow.md`.

![Hình 51 – Tạo merge commit, push lên GitHub và kiểm tra working tree sạch](/images/day1/image51.png)

**Bước 6 — Xác nhận trên GitHub và merge PR**

Tải lại PR **#13**: GitHub hiển thị **No conflicts with base branch** và nút **Merge pull request** khả dụng.

![Hình 52 – PR số 13 không còn conflict sau khi push kết quả từ local](/images/day1/image52.png)

Chọn **Merge pull request** và xác nhận. PR chuyển sang **Merged**, hoàn thành quy trình xử lý bằng VS Code và Git local.

![Hình 53 – PR số 13 đã merge thành công vào dev_1](/images/day1/image53.png)

{{% notice tip %}}
**Giải quyết conflict là quyết định nội dung cuối cùng:** đọc cả hai phía, chọn hoặc kết hợp thay đổi, xác nhận giữ/xóa file khi cần, rồi kiểm tra kết quả trước khi commit. Trạng thái hết conflict chỉ cho biết Git đã có kết quả hợp nhất; vẫn cần đọc lại nội dung đó.
{{% /notice %}}
