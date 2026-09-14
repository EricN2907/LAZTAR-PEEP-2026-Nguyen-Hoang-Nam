+++
title = "Ngày 01 - 23/06/2026"
weight = 1
+++

## Việc đã làm

### 1. Setup và cấu hình Jira Kanban Board để quản lý tiến độ dự án

- Xây dựng quy trình quản lý công việc theo mô hình Epic → Story → Task.
- Phân tích Use Case Diagram để xác định phạm vi chức năng và phân chia thành 7 Epic nghiệp vụ chính.
  - Đảm bảo mỗi Epic được phân rã thành các User Story và Task cụ thể, dễ theo dõi tiến độ thực hiện.
  - Tách riêng Epic E0 (SRS & Documentation) để quản lý các hoạt động phân tích yêu cầu và tài liệu dự án, tránh chồng chéo với các Epic phát triển tính năng.

### 2. The Basics of React Native

#### 2.1. Core Components and Native Components

[Nguồn tham khảo](https://reactnative.dev/docs/intro-react-native-components)

##### React Native sử dụng Native Components

- React Native không dùng HTML như ReactJS.
- Khi viết giao diện trong React Native, các component sẽ được chuyển thành các component native của nền tảng.
- React Native đóng vai trò là một lớp trung gian giúp mình viết bằng JavaScript nhưng vẫn tạo ra giao diện native.

##### Core Components

React Native có một tập hợp component cơ bản gọi là **Core Components**.

| React Native UI Component | Android View   | iOS View         | Tương đương trên Web      | Mô tả                                                                                                                                        |
| ---------------------------| ----------------| ------------------| ---------------------------| ----------------------------------------------------------------------------------------------------------------------------------------------|
| `<View>`                  | `<ViewGroup>`  | `<UIView>`       | Thẻ `<div>` không cuộn    | Một container hỗ trợ layout với flexbox, style, một số xử lý chạm (touch handling) và các chức năng hỗ trợ tiếp cận (accessibility controls) |
| `<Text>`                  | `<TextView>`   | `<UITextView>`   | Thẻ `<p>`                 | Hiển thị, định dạng (style), lồng ghép các chuỗi văn bản và xử lý các sự kiện chạm (touch events)                                            |
| `<Image>`                 | `<ImageView>`  | `<UIImageView>`  | Thẻ `<img>`               | Hiển thị các loại hình ảnh khác nhau                                                                                                         |
| `<ScrollView>`            | `<ScrollView>` | `<UIScrollView>` | Thẻ `<div>`               | Một container cuộn đa dụng, có thể chứa nhiều component và view khác nhau                                                                    |
| `<TextInput>`             | `<EditText>`   | `<UITextField>`  | Thẻ `<input type="text">` | Cho phép người dùng nhập văn bản (text)                                                                                                      |

Chi tiết tại [Core Components](https://reactnative.dev/docs/components-and-apis)

-> Kiến trúc cơ bản: **React Component → React Native Component → Native Component → Android/iOS UI**

#### 2.2. React Fundamentals

[Nguồn tham khảo](https://reactnative.dev/docs/intro-react)

##### React Native được xây dựng trên React

- Để học React Native tốt thì phải hiểu React trước.
- React Native không thay thế React mà sử dụng chính các nguyên lý của React để xây dựng giao diện mobile.

##### UI được tạo từ Components

- Trong React, mọi thứ đều là component.
- Một ứng dụng được tạo bằng cách ghép nhiều component nhỏ lại với nhau.
  
-> **Build UI bằng cách chia thành các khối độc lập, tái sử dụng được.**

##### Component nhận dữ liệu thông qua Props

- Props là viết tắt của "Properties".
- Đặc điểm:
  - Chỉ đọc (read-only)
  - Không được sửa trực tiếp bên trong component nhận

-> **Props giống như tham số của một hàm.**

##### Component có thể có State

- State là dữ liệu nội bộ của component

- Đặc điểm:
  - Có thể thay đổi thông qua `setState` hoặc `useState`
  - Khi state thay đổi → component tự động re-render

- Khi state thay đổi:
  - React tự động render lại giao diện
  - Không cần thao tác trực tiếp lên UI

-> **State là "bộ nhớ" của component.**

#### Key takeaway

> React Native = React (Components + Props + State + Hooks) + Native Components (View, Text, Image, ...)  