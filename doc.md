Câu lệnh tạo dự án

npx create-next-app

---

Dự án chia ra 2 thành phần chính.

Navbar và Menu: Navbar thanh trên - Menu thanh bên trái

Main: chứa các content "chứa nội dung" - Nội dung này sẽ thay đổi

Ví dụ ta chọn một item bên thanh menu thì nội dung của Main sẽ thay đổi

---

src sẽ có 3 thư mục chính

app - Mục đích: Thư mục này chứa các thành phần liên quan đến việc cấu trúc và điều hướng trang của ứng dụng.

- bố cục bên trong app:

  (dashboard)

  - admin: page.tsx
  - parent: page.tsx
  - student: page.tsx
  - teacher: page.tsx
  - sign-in: page.tsx

Trước Next 13 thì app thay bằng folder page

components - Mục đích: Chứa các thành phần UI (User Interface) có thể tái sử dụng trong toàn bộ ứng dụng.

- Menu.tsx

lib - Mục đích: Chứa các hàm tiện ích, logic xử lý độc lập, hoặc các thư viện riêng do bạn tự viết để sử dụng trong ứng dụng.

- data.ts
