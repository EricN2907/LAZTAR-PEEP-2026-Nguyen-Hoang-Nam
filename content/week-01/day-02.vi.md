+++
title = "Ngày 02 - 16/09/2026(Remote)"
weight = 2
+++

## Tổng hợp Lý Thuyết: React & Next.js

*Quy ước: “React thuần” trong bảng là cách làm phổ biến React + Vite, chủ yếu render trên trình duyệt. React bản thân vẫn có khả năng render trên server khi được tích hợp với công cụ phù hợp.*

---

### Phần 1 — React cơ bản

| STT | Câu hỏi | Trả lời và ví dụ |
| :---: | :--- | :--- |
| 1 | **React là gì?** | React là thư viện JavaScript dùng để xây dựng giao diện người dùng, được tổ chức thành các thành phần nhỏ gọi là component. Bạn mô tả giao diện dựa trên dữ liệu; khi dữ liệu thay đổi, React tính toán cách cập nhật giao diện tương ứng.<br><br>**Ví dụ:** Trang cá nhân có Header, AboutMe, ProjectList, ContactForm. Bạn xây dựng từng phần rồi ghép chúng thành trang hoàn chỉnh. React chủ yếu giải quyết việc xây dựng UI; các chức năng khác như routing cần thêm công cụ. [Tài liệu React](https://react.dev/learn/describing-the-ui?utm_source=chatgpt.com). |
| 2 | **Component trong React là gì? Có mấy loại component?** | Component là một phần giao diện có thể tái sử dụng, chứa cách hiển thị và có thể chứa logic xử lý.<br>Nếu phân loại theo cách viết, có 2 loại chính: Function Component, viết bằng hàm JavaScript; Class Component, viết bằng class kế thừa React.Component. Dự án mới thường dùng Function Component và Hooks.<br><br>**Ví dụ:** ProjectCard hiển thị một dự án. Bạn có thể dùng component đó nhiều lần để hiển thị nhiều dự án khác nhau. Server/Client Component là một cách phân loại khác, sẽ học ở phần Next.js. [Function Component](https://react.dev/learn/describing-the-ui?utm_source=chatgpt.com), [Class Component](https://react.dev/reference/react/Component?utm_source=chatgpt.com). |
| 3 | **JSX là gì?** | JSX là cú pháp mở rộng của JavaScript, cho phép viết cấu trúc giao diện trông gần giống HTML ngay trong JavaScript. Công cụ build sẽ chuyển JSX thành JavaScript để chạy.<br><br>**Ví dụ:** `return <h1>Xin chào, {name}</h1>;`. Phần `{name}` đưa giá trị JavaScript vào giao diện.<br><br>**Điểm cần nhớ:** dùng `className` thay cho `class`; đóng đầy đủ thẻ như `<img />`; nhiều phần tử trả về cần được bọc bằng một phần tử cha hoặc Fragment `<>...</>`. JSX giống HTML nhưng có quy tắc riêng. [Tài liệu JSX](https://react.dev/learn/writing-markup-with-jsx?utm_source=chatgpt.com). |
| 4 | **Props là gì?** | Props, viết tắt của properties, là dữ liệu component nhận từ component cha. Props có thể là chuỗi, số, object, array, function hoặc nội dung giao diện.<br><br>**Ví dụ:** `<ProjectCard title="Football Booking" />` truyền prop title vào ProjectCard.<br><br>Component con không được sửa trực tiếp props. Nếu muốn thay đổi dữ liệu do cha quản lý, con thường gọi một callback được cha truyền xuống. Props có thể thay đổi khi cha truyền giá trị mới; “chỉ đọc” không có nghĩa là “không bao giờ thay đổi”. [Tài liệu Props](https://react.dev/learn/passing-props-to-a-component?utm_source=chatgpt.com). |
| 5 | **State là gì? State khác Props như thế nào?** | State là dữ liệu React ghi nhớ cho một component giữa các lần render. Nó thường thể hiện trạng thái hiện tại của giao diện: menu đang mở, nội dung ô nhập, tab đang chọn.<br><br>**Khác biệt:** Props là dữ liệu nhận từ bên ngoài; state là dữ liệu component quản lý. Component đọc props và cập nhật state bằng hàm như `setState` của `useState`.<br><br>**Ví dụ:** ProjectCard nhận tên dự án qua props, nhưng quản lý trạng thái “đang mở phần mô tả” bằng state. State của cha cũng có thể được truyền xuống con dưới dạng props. [State](https://react.dev/learn/state-a-components-memory?utm_source=chatgpt.com), [Props](https://react.dev/learn/passing-props-to-a-component?utm_source=chatgpt.com). |
| 6 | **Virtual DOM là gì? Vì sao React sử dụng Virtual DOM?** | Virtual DOM là cách gọi phổ biến cho biểu diễn giao diện trong bộ nhớ. Khi render, React tính toán giao diện mới, đối chiếu với giao diện trước đó, rồi cập nhật những phần DOM thực cần thay đổi. DOM thực là cấu trúc trang mà trình duyệt sử dụng.<br><br>**Ví dụ:** Số lượt thích đổi từ 5 sang 6; React có thể chỉ cập nhật phần văn bản đó thay vì dựng lại toàn bộ trang.<br><br>Cách này giúp bạn viết UI theo dữ liệu và để React quản lý cập nhật. Virtual DOM không bảo đảm mọi chương trình React đều nhanh hơn JavaScript thao tác DOM trực tiếp. [Render và Commit](https://react.dev/learn/render-and-commit?utm_source=chatgpt.com). |
| 7 | **Hooks là gì? Kể tên một số Hook phổ biến.** | Hooks là các hàm cho phép Function Component sử dụng những khả năng của React như state, context và đồng bộ với hệ thống bên ngoài.<br><br>**Hook phổ biến:** `useState` quản lý state; `useEffect` xử lý việc đồng bộ; `useContext` đọc context; `useRef` giữ tham chiếu hoặc giá trị không cần làm UI render lại; `useReducer` quản lý cập nhật state theo action; `useMemo` lưu kết quả tính toán; `useCallback` lưu tham chiếu hàm.<br><br>Các Hook này phải được gọi ở cấp cao nhất của Function Component hoặc custom Hook, không đặt trong if, vòng lặp hoặc event handler. [Danh sách Hooks](https://react.dev/reference/react?utm_source=chatgpt.com), [Quy tắc Hooks](https://react.dev/reference/rules/rules-of-hooks?utm_source=chatgpt.com). |
| 8 | **`useState` dùng để làm gì?** | `useState` dùng để khai báo state và lấy hàm cập nhật state.<br><br>**Ví dụ:** `const [isOpen, setIsOpen] = useState(false);`. `isOpen` là giá trị hiện tại; `setIsOpen` cập nhật giá trị; `false` là giá trị ban đầu.<br><br>Khi người dùng bấm mở menu, gọi `setIsOpen(true)`. React lên lịch render lại với state mới. Hàm cập nhật không đổi ngay giá trị trong đoạn code đang chạy. Khi giá trị mới phụ thuộc giá trị cũ, có thể viết `setIsOpen(prev => !prev)`. [Tài liệu useState](https://react.dev/reference/react/useState?utm_source=chatgpt.com). |
| 9 | **`useEffect` dùng để làm gì?** | `useEffect` dùng để đồng bộ component với một hệ thống bên ngoài, ví dụ timer, sự kiện trình duyệt, kết nối mạng hoặc thư viện bên thứ ba. Có thể dùng để gọi API ở client, nhưng framework/thư viện lấy dữ liệu thường cung cấp cách quản lý tốt hơn.<br><br>Effect chạy sau khi React commit cập nhật giao diện, tùy dependencies. Nó có thể trả về cleanup để dừng timer, bỏ đăng ký sự kiện hoặc ngắt kết nối.<br><br>**Ví dụ:** Khi component đồng hồ xuất hiện, tạo timer; khi bị gỡ khỏi trang, xóa timer. Không cần Effect chỉ để tính fullName từ firstName và lastName. [Tài liệu useEffect](https://react.dev/reference/react/useEffect?utm_source=chatgpt.com). |
| 10 | **Lifecycle của một React Component gồm những giai đoạn nào?** | Có 3 giai đoạn chính: **Mount** — component xuất hiện; **Update** — component được cập nhật; **Unmount** — component bị gỡ khỏi cây giao diện.<br><br>Trong Class Component, các phương thức tương ứng thường là `componentDidMount`, `componentDidUpdate`, `componentWillUnmount`.<br><br>Function Component không dùng các phương thức đó; Hooks giúp xử lý những nhu cầu tương ứng. Tuy nhiên, vòng đời của Effect không hoàn toàn giống vòng đời component: Effect có thể cleanup và chạy lại nhiều lần khi dependencies thay đổi, dù component vẫn đang tồn tại. [Component lifecycle](https://react.dev/reference/react/Component?utm_source=chatgpt.com), [Effect lifecycle](https://react.dev/learn/lifecycle-of-reactive-effects?utm_source=chatgpt.com). |
| 11 | **Client-Side Rendering — CSR là gì?** | CSR là cách trình duyệt chạy JavaScript để tạo hoặc cập nhật nội dung giao diện.<br><br>Với ứng dụng React + Vite thông thường, trình duyệt nhận HTML ban đầu chứa vùng gắn ứng dụng, tải JavaScript, chạy React rồi dựng nội dung. Nếu cần dữ liệu API, nội dung đó có thể xuất hiện sau khi tải dữ liệu.<br><br>**Ví dụ:** Khi mở portfolio, trình duyệt chạy React để hiển thị danh sách dự án. Nội dung chính phụ thuộc vào việc JavaScript được tải và chạy thành công. [Tài liệu CSR](https://nextjs.org/docs/pages/building-your-application/rendering/client-side-rendering?utm_source=chatgpt.com). |
| 12 | **React Router là gì?** | React Router là công cụ routing cho ứng dụng React, giúp ánh xạ URL với trang/component, quản lý chuyển trang, route lồng nhau và tham số URL.<br><br>**Ví dụ:** `/` hiển thị trang chủ, `/about` hiển thị giới thiệu, `/projects/:id` hiển thị dự án theo ID.<br><br>Trong cách dùng SPA phổ biến, chuyển trang bằng Link sẽ cập nhật URL và nội dung mà không tải lại toàn bộ tài liệu HTML. React Router hiện có nhiều chế độ sử dụng, gồm cả các khả năng dành cho framework; nó không chỉ giới hạn ở SPA đơn giản. [Tài liệu routing](https://reactrouter.com/start/declarative/routing?utm_source=chatgpt.com). |
| 13 | **React thuần có hỗ trợ Routing, SEO và API Server không?** | **Routing:** React core không tích hợp router; thường thêm React Router hoặc công cụ khác.<br>**SEO:** React không tự cung cấp một giải pháp SEO hoàn chỉnh. Website React vẫn có thể được lập chỉ mục, nhưng SPA phụ thuộc JavaScript cần chú ý nội dung HTML ban đầu, metadata và khả năng crawler chạy JavaScript.<br>**API Server:** React không phải server backend. Bạn có thể gọi API ASP.NET Core bằng fetch, nhưng muốn cung cấp API cần backend hoặc framework có khả năng server.<br><br>React có API render trên server, nhưng việc tích hợp hạ tầng đó cần thêm công cụ. [Xây dựng ứng dụng React](https://react.dev/learn/build-a-react-app-from-scratch?utm_source=chatgpt.com). |
| 14 | **Context API là gì? Khi nào nên sử dụng?** | Context API giúp cung cấp dữ liệu cho các component bên dưới mà không phải truyền props qua từng tầng trung gian. Thường dùng `createContext`, một provider và `useContext` để đọc dữ liệu.<br><br>**Ví dụ:** Theme sáng/tối cần được dùng ở Header, Footer và nhiều trang. Bạn cung cấp theme từ một provider chung.<br><br>Phù hợp với theme, ngôn ngữ hoặc thông tin người dùng hiện tại. Không phải mọi state đều cần Context. Khi giá trị context thay đổi, các component đọc context đó có thể render lại, nên cần cân nhắc dữ liệu thay đổi thường xuyên. [Tài liệu Context](https://react.dev/learn/passing-data-deeply-with-context?utm_source=chatgpt.com). |
| 15 | **SPA — Single Page Application là gì?** | SPA là ứng dụng web tải một tài liệu HTML làm nền, sau đó dùng JavaScript thay đổi nội dung khi người dùng tương tác hoặc chuyển trang, thay vì tải lại toàn bộ tài liệu cho mỗi lần điều hướng nội bộ.<br><br>**Ví dụ:** Bạn chuyển từ `/about` sang `/projects`; giao diện đổi nhưng trình duyệt không tải lại cả trang.<br><br>“Single Page” không có nghĩa là chỉ có một màn hình hoặc một URL. SPA có thể có rất nhiều trang logic. SPA nói về kiến trúc điều hướng; CSR nói về nơi dựng giao diện. [SPA trong ứng dụng React](https://react.dev/learn/build-a-react-app-from-scratch?utm_source=chatgpt.com). |

#### Phân biệt Props và State

| Tiêu chí | Props | State |
| :--- | :--- | :--- |
| **Nguồn dữ liệu** | Component cha truyền xuống | Component quản lý |
| **Mục đích** | Cấu hình component, truyền dữ liệu và callback | Ghi nhớ trạng thái hiện tại |
| **Component đang dùng có sửa trực tiếp được không?** | Không | Cập nhật bằng hàm do React cung cấp; không sửa trực tiếp |
| **Có thể thay đổi theo thời gian không?** | Có, khi cha truyền giá trị mới | Có, khi được cập nhật |
| **Ví dụ trong portfolio** | Tên, ảnh, mô tả dự án | Menu đang mở, tab đang chọn |
| **Quan hệ giữa hai loại** | Có thể nhận state của cha dưới dạng props | Có thể được truyền xuống con dưới dạng props |

*(Các đặc điểm này dựa trên cách React quản lý [Props](https://react.dev/learn/passing-props-to-a-component?utm_source=chatgpt.com) và [State](https://react.dev/learn/state-a-components-memory?utm_source=chatgpt.com).)*

#### Ví dụ kết hợp Component, JSX, Props, State và Hook

```jsx
import { useState } from "react"; 

function ProjectCard({ title, description }) { 
  const [showDetails, setShowDetails] = useState(false); 
  
  function toggleDetails() { 
    setShowDetails(previous => !previous); 
  } 
  
  return ( 
    <article className="project-card"> 
      <h2>{title}</h2> 
      <button onClick={toggleDetails}> 
        {showDetails ? "Ẩn mô tả" : "Xem mô tả"} 
      </button> 
      {showDetails && <p>{description}</p>} 
    </article> 
  ); 
} 

export default function App() { 
  return ( 
    <ProjectCard 
      title="Football Booking" 
      description="Ứng dụng đặt sân bóng với backend ASP.NET Core." 
    /> 
  ); 
}
```

| Thành phần trong ví dụ | Bạn cần hiểu |
| :--- | :--- |
| `ProjectCard` | Function Component hiển thị một dự án |
| `title`, `description` | Props do App truyền xuống |
| `showDetails` | State ghi nhớ mô tả đang được mở hay đóng |
| `useState(false)` | Hook khởi tạo state bằng false |
| `setShowDetails(...)` | Yêu cầu cập nhật state |
| `onClick={toggleDetails}` | Truyền hàm xử lý cho sự kiện bấm nút |
| `{showDetails && ...}` | Chỉ hiển thị mô tả khi điều kiện đúng |
| Phần trong `return` | JSX mô tả giao diện |

*(Ví dụ minh họa cách dùng [JSX](https://react.dev/learn/writing-markup-with-jsx?utm_source=chatgpt.com) và [useState](https://react.dev/reference/react/useState?utm_source=chatgpt.com).)*

#### Cách hiểu dependencies của useEffect

| Cách viết | Khi nào Effect chạy? |
| :--- | :--- |
| `useEffect(() => { ... })` | Sau mỗi lần commit của component |
| `useEffect(() => { ... }, [])` | Khi mount; không chạy lại do props/state thay đổi trong cùng lần mount |
| `useEffect(() => { ... }, [userId])` | Khi mount và sau các commit mà userId thay đổi |
| Có `return () => { ... }` | Cleanup chạy trước khi Effect chạy lại do dependencies đổi và khi unmount |

*Lưu ý: Trong môi trường phát triển với Strict Mode, React có thể chạy thêm chu kỳ setup → cleanup → setup để kiểm tra. Vì vậy, câu “dependencies rỗng thì chạy đúng một lần” cần hiểu trong ngữ cảnh. Dependencies phải chứa các giá trị phản ứng mà Effect sử dụng; không chọn tùy ý chỉ để ép thời điểm chạy. [Tài liệu useEffect](https://react.dev/reference/react/useEffect?utm_source=chatgpt.com).*

---

### Phần 2 — So sánh React và Next.js

| STT | Câu hỏi | Trả lời và ví dụ |
| :---: | :--- | :--- |
| 1 | **Next.js là gì?** | Next.js là framework xây dựng ứng dụng web dựa trên React. Bạn vẫn viết React Component, nhưng Next.js cung cấp thêm routing, rendering trên server, tạo trang tĩnh, xử lý request phía server và các công cụ tối ưu.<br><br>**Ví dụ:** Khi xây portfolio, Next.js giúp tổ chức `/about`, `/projects`, metadata từng trang và tối ưu ảnh mà không phải tự ghép tất cả công cụ từ đầu. [Tài liệu Next.js](https://nextjs.org/docs?utm_source=chatgpt.com). |
| 2 | **Điểm khác biệt cốt lõi giữa React và Next.js là gì?** | **React** là thư viện UI: tập trung vào component và cập nhật giao diện.<br>**Next.js** là framework dùng React: cung cấp cấu trúc và công cụ cho nhiều phần của ứng dụng web.<br><br>**Ví dụ:** React giúp bạn viết ProjectCard; Next.js giúp quyết định component đó nằm ở URL nào, nội dung được dựng lúc build hay khi có request, và metadata của trang là gì. [React](https://react.dev/learn/describing-the-ui?utm_source=chatgpt.com), [Next.js](https://nextjs.org/docs?utm_source=chatgpt.com). |
| 3 | **Routing trong React và Next.js khác nhau như thế nào?** | **React thuần:** thường cài router và khai báo route bằng code, chẳng hạn ánh xạ `/about` với `<AboutPage />`.<br>**Next.js:** có routing tích hợp theo cấu trúc thư mục/file. Trong App Router, `app/about/page.tsx` tạo trang `/about`.<br><br>React core không quy định cách routing. Next.js đưa ra các quy ước như `page.tsx`, `layout.tsx`, thư mục `[id]` để xây dựng route. [React Router](https://reactrouter.com/start/declarative/routing?utm_source=chatgpt.com), [Layouts và Pages](https://nextjs.org/docs/app/getting-started/layouts-and-pages?utm_source=chatgpt.com). |
| 4 | **Rendering trong React và Next.js khác nhau ra sao?** | **React + Vite thông thường:** chủ yếu CSR, trình duyệt chạy JavaScript để dựng UI.<br>**Next.js:** tích hợp nhiều cách dựng nội dung như SSR, SSG, ISR, cùng Server/Client Components. Một ứng dụng có thể kết hợp các cách phù hợp với từng phần hoặc route.<br><br>Không nên hiểu rằng “React chỉ render trên client” hoặc “Next.js chỉ render trên server”. React có khả năng server rendering, còn Next.js vẫn dùng client rendering cho tương tác. [Rendering với React](https://react.dev/learn/build-a-react-app-from-scratch?utm_source=chatgpt.com), [Next.js App Router](https://nextjs.org/docs/app?utm_source=chatgpt.com). |
| 5 | **Vì sao Next.js hỗ trợ SEO tốt hơn React thuần?** | So với SPA chỉ dùng CSR, Next.js có thể cung cấp HTML chứa nội dung được dựng sẵn, giúp crawler tiếp cận nội dung mà ít phụ thuộc hơn vào việc chạy JavaScript. Nó còn có Metadata API và quy ước cho sitemap, robots, ảnh chia sẻ.<br><br>**Ví dụ:** Trang `/projects/football-booking` có nội dung, tiêu đề và mô tả riêng.<br><br>Next.js giúp triển khai SEO thuận tiện hơn, nhưng không tự bảo đảm thứ hạng tìm kiếm. Bạn vẫn cần nội dung và cấu trúc trang tốt. [Metadata và SEO](https://nextjs.org/docs/app/getting-started/metadata-and-og-images?utm_source=chatgpt.com). |
| 6 | **Hiệu năng tải trang đầu tiên (First Load) khác nhau thế nào?** | **SPA dùng CSR:** thường cần tải/chạy JavaScript rồi có thể chờ API mới hiển thị nội dung chính.<br>**Next.js:** HTML dựng sẵn có thể giúp người dùng thấy nội dung sớm hơn; Server Components giúp giảm JavaScript gửi xuống trình duyệt. Phần tương tác vẫn cần JavaScript và hydration.<br><br>Không phải Next.js luôn nhanh hơn. SSR phải chờ server/API chậm vẫn có thể tải chậm. Cần phân biệt thấy nội dung với nội dung đã tương tác được, và đo hiệu năng thực tế. [CSR](https://nextjs.org/docs/pages/building-your-application/rendering/client-side-rendering?utm_source=chatgpt.com), [Lần tải đầu trong Next.js](https://nextjs.org/docs/app/getting-started/server-and-client-components?utm_source=chatgpt.com). |
| 7 | **Cấu trúc dự án React và Next.js khác nhau ra sao?** | **React + Vite:** thường có `src/main.tsx`, `src/App.tsx`, `components/`; bạn tự tổ chức `pages/`, `services` và routing. Tên thư mục `pages` tự nó không tạo route.<br>**Next.js App Router:** dùng các quy ước như `app/page.tsx`, `app/layout.tsx`, `app/about/page.tsx`, `app/api/contact/route.ts`.<br><br>Next.js cũng có thể đặt `app` dưới `src`. Điểm chính là các file đặc biệt có ý nghĩa mà framework hiểu. [Cấu trúc Next.js](https://nextjs.org/docs/app/getting-started/project-structure?utm_source=chatgpt.com). |
| 8 | **Next.js có thay thế React không? Vì sao?** | Không. Next.js được xây dựng trên React và sử dụng React để xây dựng giao diện. Khi dùng Next.js, bạn vẫn cần hiểu component, JSX, props, state và Hooks.<br><br>Next.js có thể thay thế cách bạn tự ghép React với routing và hạ tầng rendering, nhưng không thay thế nền tảng React bên dưới. Học React giúp bạn hiểu code; học Next.js giúp bạn hiểu cách tổ chức và vận hành ứng dụng. [Next.js App Router](https://nextjs.org/docs/app?utm_source=chatgpt.com). |
| 9 | **Khi nào nên dùng React thuần và khi nào nên dùng Next.js?** | **React + Vite:** phù hợp khi học nền tảng React, xây ứng dụng tương tác phía client hoặc dashboard nội bộ có backend riêng và không đặt nặng nội dung tìm kiếm công khai.<br>**Next.js:** phù hợp khi cần nội dung công khai, routing tích hợp, metadata, dựng trang trước hoặc xử lý một phần công việc phía server.<br><br>**Áp dụng bài trainee:** Nếu mục tiêu là portfolio nhiều trang với SEO, mình chọn Next.js App Router. Nếu yêu cầu chính là luyện React và SPA, React + Vite vẫn đáp ứng được. Đây là lựa chọn theo nhu cầu, không phải quy tắc bắt buộc. [Tự xây ứng dụng React](https://react.dev/learn/build-a-react-app-from-scratch?utm_source=chatgpt.com), [Next.js](https://nextjs.org/docs?utm_source=chatgpt.com). |

---

### Phần 3 — Next.js

| STT | Câu hỏi | Trả lời và ví dụ |
| :---: | :--- | :--- |
| 1 | **App Router và Pages Router trong Next.js là gì?** | Đây là hai hệ thống routing của Next.js.<br>**Pages Router:** dùng thư mục `pages`; ví dụ `pages/about.tsx` tạo `/about`. Nó gắn với các API như `getStaticProps` và `getServerSideProps`.<br>**App Router:** dùng thư mục `app`; ví dụ `app/about/page.tsx` tạo `/about`. Nó hỗ trợ Server Components, nested layouts và streaming.<br><br>Pages Router vẫn được hỗ trợ. Với dự án mới, bạn thường học và dùng App Router. Cần đọc đúng nhóm tài liệu vì API giữa hai router khác nhau. [App Router](https://nextjs.org/docs/app?utm_source=chatgpt.com), [Pages Router](https://nextjs.org/docs/pages?utm_source=chatgpt.com). |
| 2 | **Server Component và Client Component khác nhau như thế nào?** | **Server Component:** chạy ở môi trường server, có thể đọc dữ liệu phía server; không dùng `useState`, `useEffect` hay event handler của trình duyệt. Code component đó không được gửi xuống client để chạy.<br>**Client Component:** được khai báo qua ranh giới `'use client'`, dùng khi cần state, sự kiện và API trình duyệt.<br><br>**Ví dụ:** Phần lấy dữ liệu dự án có thể là Server Component; nút mở mô tả là Client Component.<br><br>Client Component vẫn có thể được dựng HTML ban đầu trên server, rồi được hydrate trên trình duyệt để tương tác. [Server và Client Components](https://nextjs.org/docs/app/getting-started/server-and-client-components?utm_source=chatgpt.com). |
| 3 | **SSR — Server-Side Rendering là gì?** | SSR là việc server dựng giao diện thành HTML tại thời điểm xử lý request. Trong mô hình SSR thông thường, mỗi request cần render sẽ lấy dữ liệu cần thiết và tạo HTML trả về.<br><br>**Ví dụ:** Trang tài khoản dựng nội dung dựa trên người đang đăng nhập.<br><br>SSR phù hợp với nội dung cần thông tin request hoặc dữ liệu cập nhật lúc truy cập. Đổi lại, thời gian phản hồi có thể phụ thuộc tốc độ xử lý server và nguồn dữ liệu. SSR không đồng nghĩa với Server Component. [Tài liệu SSR](https://nextjs.org/docs/pages/building-your-application/rendering/server-side-rendering?utm_source=chatgpt.com). |
| 4 | **SSG — Static Site Generation là gì?** | SSG là việc tạo HTML trước khi người dùng truy cập, thông thường ở bước build. HTML đã tạo có thể được phục vụ lại cho nhiều người và phân phối qua CDN.<br><br>**Ví dụ:** Trang giới thiệu bản thân, kỹ năng và dự án có thể được dựng sẵn.<br><br>Ưu điểm là không cần dựng lại trang cho mỗi request. Với SSG thuần, khi nội dung thay đổi, thường phải build/deploy lại. Nếu cần cập nhật trang tĩnh sau deploy, xem ISR. [Tài liệu SSG](https://nextjs.org/docs/pages/building-your-application/rendering/static-site-generation?utm_source=chatgpt.com). |
| 5 | **ISR — Incremental Static Regeneration là gì?** | ISR cho phép cập nhật nội dung được tạo tĩnh sau deploy mà không build lại toàn bộ website. Việc cập nhật có thể dựa trên thời gian hoặc được kích hoạt theo yêu cầu.<br><br>**Ví dụ:** Danh sách dự án được phép giữ bản cache trong một khoảng thời gian rồi tạo lại khi cần.<br><br>Với cơ chế revalidation theo thời gian, trang không nhất thiết tự cập nhật đúng từng phút khi không có truy cập. Request sau khi dữ liệu hết hạn có thể nhận bản cũ trong lúc hệ thống tạo bản mới. [Tài liệu ISR](https://nextjs.org/docs/app/guides/incremental-static-regeneration?utm_source=chatgpt.com). |
| 6 | **File-based Routing trong Next.js hoạt động như thế nào?** | Next.js xác định route dựa trên cấu trúc thư mục và những file theo quy ước.<br>**App Router:** `app/page.tsx` → `/`; `app/about/page.tsx` → `/about`; `app/projects/page.tsx` → `/projects`.<br>**Pages Router:** `pages/index.tsx` → `/`; `pages/about.tsx` → `/about`.<br><br>Trong App Router, thư mục xác định các đoạn URL, còn `page.tsx` cung cấp UI của trang. Không phải mọi file nằm trong `app` đều tự tạo một trang truy cập được. [Layouts và Pages](https://nextjs.org/docs/app/getting-started/layouts-and-pages?utm_source=chatgpt.com). |
| 7 | **Dynamic Route trong Next.js là gì?** | Dynamic Route là route có một phần URL thay đổi, thường dùng để xem chi tiết tài nguyên theo ID hoặc slug.<br><br>**Ví dụ:** `app/projects/[slug]/page.tsx` khớp với `/projects/football-booking` và `/projects/travel-platform`. Giá trị slug giúp xác định dự án cần hiển thị.<br><br>`[slug]` nhận một đoạn; `[...slug]` nhận nhiều đoạn; `[[...slug]]` nhận nhiều đoạn và cho phép thiếu đoạn đó. Trong App Router hiện tại, params được cung cấp dưới dạng Promise và cần được đọc phù hợp. [Dynamic Segments](https://nextjs.org/docs/app/api-reference/file-conventions/dynamic-routes?utm_source=chatgpt.com). |
| 8 | **`layout.tsx` trong App Router dùng để làm gì?** | `layout.tsx` định nghĩa giao diện dùng chung cho các trang/route bên dưới. Nó nhận `children`, là nội dung của trang hoặc layout con.<br><br>**Ví dụ:** Root layout chứa Header và Footer; trang About hay Projects được đặt vào `{children}`.<br><br>Layout dùng chung được giữ lại khi điều hướng giữa các route nằm trong layout đó, giúp bảo toàn giao diện và state phù hợp. Trong cấu trúc App Router thông thường, root layout chứa `<html>` và `<body>`. Bạn cũng có thể tạo layout riêng cho khu vực dashboard. [Tài liệu Layout](https://nextjs.org/docs/app/api-reference/file-conventions/layout?utm_source=chatgpt.com). |
| 9 | **API Routes — Route Handlers trong Next.js là gì?** | Chúng cho phép viết endpoint HTTP chạy phía server trong dự án Next.js.<br>**Pages Router:** API Routes nằm ở `pages/api/...`.<br>**App Router:** Route Handlers dùng file `route.ts`, export các hàm như GET, POST, PUT, DELETE.<br><br>**Ví dụ:** `app/api/contact/route.ts` xử lý POST `/api/contact` từ form liên hệ.<br><br>Next.js có thể đảm nhiệm một số chức năng backend, nhưng bạn vẫn có thể dùng ASP.NET Core làm backend riêng. Route Handler có thể đóng vai trò trung gian gọi backend đó. [Route Handlers](https://nextjs.org/docs/app/getting-started/route-handlers?utm_source=chatgpt.com), [Pages Router](https://nextjs.org/docs/pages?utm_source=chatgpt.com). |
| 10 | **`getStaticProps` và `getServerSideProps` là gì? Dùng khi nào?** | Đây là các hàm lấy dữ liệu của Pages Router và chạy phía server.<br>**getStaticProps:** lấy dữ liệu để dựng trang tĩnh ở build; có thể tham gia ISR khi cấu hình revalidate. Phù hợp dữ liệu công khai có thể dùng chung.<br>**getServerSideProps:** lấy dữ liệu lúc request để render trang. Phù hợp khi cần thông tin request hoặc nội dung riêng cho người truy cập.<br><br>Không dùng hai hàm này trong `app/.../page.tsx`. App Router sử dụng Server Components và các cơ chế rendering/cache tương ứng. [getStaticProps](https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-props?utm_source=chatgpt.com), [getServerSideProps](https://nextjs.org/docs/pages/building-your-application/data-fetching/get-server-side-props?utm_source=chatgpt.com). |
| 11 | **`next/image` giúp tối ưu hình ảnh như thế nào?** | `next/image` cung cấp component Image, hỗ trợ ảnh theo kích thước phù hợp, định dạng được cấu hình như WebP/AVIF, và lazy loading cho ảnh thông thường. Kích thước hoặc cấu hình fill phù hợp giúp dành sẵn vùng hiển thị, hạn chế bố cục bị nhảy.<br><br>**Ví dụ:** Avatar dùng `width={200}` và `height={200}`; ảnh dự án có cấu hình responsive.<br><br>Ảnh quan trọng ở đầu trang cần chiến lược tải phù hợp. Bạn vẫn phải khai báo alt, kích thước và sizes hợp lý; component không thể tự biết mọi nhu cầu trình bày. [Tài liệu Image](https://nextjs.org/docs/app/api-reference/components/image?utm_source=chatgpt.com). |
| 12 | **Middleware trong Next.js là gì?** | Middleware xử lý request trước khi request hoàn tất, có thể redirect, rewrite, thay đổi headers hoặc trả response trực tiếp.<br><br>**Ví dụ:** Người chưa đăng nhập truy cập khu vực quản trị được chuyển tới trang đăng nhập.<br><br>Từ Next.js 16, quy ước Middleware được đổi tên thành Proxy, dùng `proxy.ts`; tài liệu cũ thường dùng `middleware.ts`.<br>Việc chặn/điều hướng tại đây không thay thế kiểm tra xác thực và quyền truy cập ở nơi đọc hoặc sửa dữ liệu. [Tài liệu Proxy](https://nextjs.org/docs/app/api-reference/file-conventions/proxy?utm_source=chatgpt.com). |
| 13 | **Làm thế nào để điều hướng giữa các trang trong Next.js?** | **Qua liên kết:** dùng Link từ `next/link`, ví dụ `<Link href="/about">Giới thiệu</Link>`.<br>**Qua code trong Client Component:** App Router dùng `useRouter` từ `next/navigation`, rồi `router.push("/projects")` hoặc `router.replace(...)`.<br>**Phía server:** có thể dùng `redirect()` cho chuyển hướng phù hợp.<br><br>Trong Pages Router, `useRouter` được import từ `next/router`. Link hỗ trợ điều hướng phía client và prefetch tùy route/cấu hình. [Linking và Navigating](https://nextjs.org/docs/app/getting-started/linking-and-navigating?utm_source=chatgpt.com). |
| 14 | **Metadata và SEO trong Next.js được xử lý như thế nào?** | **App Router:** export `metadata` cho thông tin tĩnh hoặc `generateMetadata` cho thông tin phụ thuộc dữ liệu/route trong Server Component của page/layout.<br>Metadata có thể gồm title, description, Open Graph và canonical. Các file như `robots.ts`, `sitemap.ts`, `opengraph-image` hỗ trợ những nhu cầu SEO khác.<br>**Pages Router:** thường dùng `Head` từ `next/head`.<br><br>**Ví dụ:** Trang dự án có title “Football Booking — Nam” và mô tả riêng. SEO còn phụ thuộc nội dung, headings, links và khả năng truy cập. [Metadata và OG images](https://nextjs.org/docs/app/getting-started/metadata-and-og-images?utm_source=chatgpt.com). |
| 15 | **Next.js có hỗ trợ TypeScript không?** | Có, Next.js tích hợp hỗ trợ TypeScript. Bạn có thể chọn TypeScript khi tạo dự án bằng `create-next-app`.<br><br>File có JSX thường dùng `.tsx`; file TypeScript không chứa JSX dùng `.ts`. TypeScript giúp phát hiện các lỗi kiểu dữ liệu trước khi chạy, chẳng hạn truyền số vào prop yêu cầu chuỗi.<br>**Ví dụ:** Khai báo `type Project = { id: string; title: string }` giúp kiểm tra dữ liệu dự án. TypeScript không thay thế việc kiểm tra dữ liệu API ở runtime. [Tài liệu TypeScript](https://nextjs.org/docs/app/api-reference/config/typescript?utm_source=chatgpt.com). |
| 16 | **Có thể deploy Next.js lên những nền tảng nào?** | Có thể deploy lên Vercel, server hỗ trợ Node.js, hoặc môi trường chạy Docker. Một số nền tảng khác hỗ trợ qua adapter; cần kiểm tra mức hỗ trợ tính năng.<br><br>Nếu dùng static export, có thể đưa output lên hosting tĩnh, nhưng không có đầy đủ các tính năng cần server runtime như SSR hay ISR.<br>Với bài trainee yêu cầu Vercel, bạn dùng Vercel để build/deploy dự án. Next.js không bắt buộc phải chạy trên Vercel. [Deploying](https://nextjs.org/docs/app/getting-started/deploying?utm_source=chatgpt.com), [Static Export](https://nextjs.org/docs/app/guides/static-exports?utm_source=chatgpt.com). |

#### Phân biệt CSR, SSR, SSG và ISR

*Điểm khác nhau chính là giao diện được dựng ở đâu, vào lúc nào và được cập nhật theo cách nào.*

| Cách render | Nơi dựng nội dung chính | Thời điểm | Cách nhận nội dung mới | Ví dụ dễ hiểu |
| :--- | :--- | :--- | :--- | :--- |
| **CSR** | Trình duyệt | Sau khi tải và chạy JavaScript | Client lấy dữ liệu rồi cập nhật UI | Dashboard tương tác |
| **SSR** | Server | Khi xử lý request cần render | Render theo request với dữ liệu cần thiết | Trang dựa trên người đang đăng nhập |
| **SSG** | Môi trường build | Trước khi có truy cập | Với SSG thuần, build/deploy lại | Trang giới thiệu ít thay đổi |
| **ISR** | Server phục vụ và tái tạo nội dung tĩnh | Sau deploy, theo cơ chế revalidation | Tái tạo nội dung khi đủ điều kiện hoặc được kích hoạt | Nội dung công khai thay đổi định kỳ |

*(Đây là mô hình cơ bản để học; hệ thống thực tế có thể kết hợp nhiều cách và thêm các tầng cache. [CSR](https://nextjs.org/docs/pages/building-your-application/rendering/client-side-rendering?utm_source=chatgpt.com), [SSR](https://nextjs.org/docs/pages/building-your-application/rendering/server-side-rendering?utm_source=chatgpt.com), [SSG](https://nextjs.org/docs/pages/building-your-application/rendering/static-site-generation?utm_source=chatgpt.com), [ISR](https://nextjs.org/docs/app/guides/incremental-static-regeneration?utm_source=chatgpt.com).)*

#### Các file App Router bạn sẽ gặp trong bài portfolio

| File/thư mục | Vai trò | URL tương ứng |
| :--- | :--- | :--- |
| `app/layout.tsx` | Layout dùng chung: khung trang, Header, Footer | Không tự tạo trang |
| `app/page.tsx` | Trang chủ | `/` |
| `app/about/page.tsx` | Trang giới thiệu | `/about` |
| `app/projects/page.tsx` | Danh sách dự án | `/projects` |
| `app/projects/[slug]/page.tsx` | Chi tiết dự án theo slug | `/projects/football-booking` |
| `app/contact/page.tsx` | Trang liên hệ | `/contact` |
| `app/api/contact/route.ts` | Endpoint xử lý form liên hệ | `/api/contact` |
| `app/loading.tsx` | UI loading theo quy ước của route | Không tự tạo trang |
| `app/error.tsx` | UI xử lý lỗi của route; là Client Component | Không tự tạo trang |
| `public/avatar.jpg` | File ảnh tĩnh | `/avatar.jpg` |

*(Các tên file đặc biệt và cách tổ chức route được mô tả trong [Project Structure](https://nextjs.org/docs/app/getting-started/project-structure?utm_source=chatgpt.com).)*

#### Ví dụ Server Component kết hợp Client Component

Trang dự án không cần tương tác có thể giữ là Server Component. Chỉ nút thích được tách thành Client Component.

**File `app/projects/page.tsx`:**
```tsx
import LikeButton from "@/components/LikeButton"; 

// Trong App Router, component này mặc định là Server Component. 
export default function ProjectsPage() { 
  return ( 
    <main> 
      <h1>Dự án của tôi</h1> 
      <article> 
        <h2>Football Booking</h2> 
        <p>Ứng dụng đặt sân bóng với backend ASP.NET Core.</p> 
        <LikeButton /> 
      </article> 
    </main> 
  ); 
}
```

**File `components/LikeButton.tsx`:**
```tsx
"use client"; 
import { useState } from "react"; 

export default function LikeButton() { 
  const [likes, setLikes] = useState(0); 
  
  return ( 
    <button onClick={() => setLikes(previous => previous + 1)}> 
      Thích: {likes} 
    </button> 
  ); 
}
```

*LikeButton cần `'use client'` vì có state và sự kiện bấm nút. Không cần thêm chỉ thị đó cho toàn bộ trang. Số lượt thích trong ví dụ chỉ được lưu tạm trong state; tải lại trang sẽ trở về 0. Việc kết hợp này dựa trên cơ chế [Server và Client Components](https://nextjs.org/docs/app/getting-started/server-and-client-components?utm_source=chatgpt.com).*

#### Những câu dễ trả lời sai khi được hỏi lại

| Cách hiểu sai | Cách hiểu đúng |
| :--- | :--- |
| **“Props không thay đổi được.”** | Component con không sửa props; cha có thể truyền props mới. |
| **“Đổi một biến thường thì React tự cập nhật UI.”** | Biến thường không tự yêu cầu render lại như cập nhật state. |
| **“State được lưu lâu dài.”** | State là bộ nhớ của component đang tồn tại; lưu lâu dài cần cơ chế khác. |
| **“useEffect là chỗ viết mọi logic.”** | Effect phục vụ đồng bộ với bên ngoài; tính toán UI và xử lý sự kiện thường đặt ở nơi phù hợp riêng. |
| **“useEffect([]) luôn chạy đúng một lần.”** | Component có thể mount lại; Strict Mode ở development có chu kỳ kiểm tra bổ sung. |
| **“SPA chỉ có một URL.”** | SPA có thể có nhiều URL và màn hình. |
| **“React không thể render trên server.”** | React có khả năng đó; cần tích hợp hạ tầng phù hợp. |
| **“Next.js thay thế React.”** | Next.js sử dụng React. |
| **“Client Component chỉ chạy trên trình duyệt.”** | Nó có thể được dựng HTML ban đầu trên server, rồi hydrate ở client. |
| **“Server Component chính là SSR.”** | Một khái niệm nói về nơi thực thi component; một khái niệm nói về thời điểm dựng HTML. |
| **“App Router dùng getServerSideProps.”** | Hàm này thuộc Pages Router. |
| **“ISR tự chạy đúng mỗi 60 giây.”** | Revalidation phụ thuộc cơ chế và request; không đơn giản là timer định kỳ. |