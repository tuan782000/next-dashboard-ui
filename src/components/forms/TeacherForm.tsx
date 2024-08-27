"use client";

// Đây là form giáo viên
// thì có tạo hoặc update - sẽ dùng type để phân biệt

// Nếu là form tạo cho người dùng nhập value
// Nếu là form update thì phải lấy giá trị ra - sau đó cho người dùng sửa các thông tin đó gọi là "defaultValue"

// cho nên data để là optional nên là data? - việc create không cần data

// sử dụng react-hook-form: nhẹ - có tính năng xác thực -

const TeacherForm = ({
  type,
  data,
}: {
  type: "create" | "update";
  data?: any;
}) => {
  return (
    <form className="">
      <input type="text" />
    </form>
  );
};
export default TeacherForm;

/*
Lý do tạo folder forms bên trong có các form nhỏ

Vì form tạo giáo viên sẽ khác

form tạo học sinh sẽ khác

form tạo parent sẽ khác, ...
*/
