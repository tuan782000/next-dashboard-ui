"use client";

import Image from "next/image";
import { useState } from "react";
import TeacherForm from "./forms/TeacherForm";

const FormModal = ({
  table,
  data,
  type,
  id,
}: {
  table:
    | "teacher"
    | "student"
    | "parent"
    | "subject"
    | "class"
    | "lesson"
    | "exam"
    | "assignment"
    | "result"
    | "attendance"
    | "event"
    | "announcement";
  type: "create" | "update" | "delete";
  data?: any;
  id?: number;
}) => {
  const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
  const bgColor =
    type === "create"
      ? "bg-lamaYellow"
      : type === "update"
      ? "bg-lamaSky"
      : "bg-lamaPurple";

  // đóng mở modal
  const [open, setOpen] = useState(false);

  // Form thì phải chia ra form xoá và form tạo form update khác nhau
  // form xoá khác 2 form còn lại
  // form update khác 1 ít forn điền thông tin tạo là nó điền đầy đủ thông tin - còn form tạo trống không
  // chia ra ra form xoá làm chỉ cần nút xoá và còn lại mình sẽ làm form cập nhật và và form tạo giống nhau
  const Form = () => {
    return type === "delete" && id ? (
      <form action="" className="p-4 flex flex-col gap-4">
        <span className="text-center font-medium">
          All data will be lost. Are you sure you want delete this {table}?
        </span>
        <button className="bg-red-700 text-white px-4 py-2 rounded-md border-none w-max self-center">
          Delete
        </button>
      </form>
    ) : (
      <TeacherForm type="create" />
    );
  };

  return (
    <>
      <button
        className={`${size} flex items-center justify-center rounded-full ${bgColor}`}
        onClick={() => setOpen(true)}
      >
        <Image src={`/${type}.png`} alt="" width={16} height={16} />
      </button>
      {open && (
        <div className="w-screen h-screen absolute left-0 top-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]">
            <Form />
            <div
              className="absolute top-4 right-4 cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              <Image src="/close.png" alt="" width={14} height={14} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default FormModal;

/*
truyền vào table, datam type, id

table: để biết thuộc bảng nào - tạo 1 form thôi nhưng làm được nhiều
type: form này tạo, chỉnh sửa hay xoá
data: dữ liệu nhập từ form
id: là phục vụ cho xoá và sửa


Định nghĩa FormModal như sau - ta thấy cần có cái form để tạo sửa hoặc xoá - mục đích tạo ra để phục vụ điều này

Như đã biết form đó là form của phần chức năng nào? ví dụ của teacher, student, parent,... thì buộc phải có cái phân biệt mình gọi đó là "table"

Rồi khi đã phân biệt form đó đến từ phần chức năng nào thì phải hiểu nhiệm vụ cái form đó sẽ làm gì 3 nhiệm vụ chính "Thêm xoá sửa" - cho nên làm ra cái "type" phân biệt

Nếu là form tạo dữ liệu hoặc sửa dữ liệu cần phải truyền nội dung mới cần tạo hoặc thay thế lên - mình đặt đó là data. Nhưng nếu là xoá thì không cần truyền data vì xoá chỉ cần mỗi id. Chính vì vậy "data" là 1 optional "data?"

id: khi sửa hoặc xoá cần phải truyền id thì mới biết sửa hay xoá thằng nào - nhưng create không cần truyền id nên id nó là optional id?


Bên cạnh đó size và màu sắc của create khác với delete update nên dựa vào đó để làm css khác nhau
*/
