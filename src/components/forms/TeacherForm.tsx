"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

// Đây là form giáo viên
// thì có tạo hoặc update - sẽ dùng type để phân biệt

// Nếu là form tạo cho người dùng nhập value
// Nếu là form update thì phải lấy giá trị ra - sau đó cho người dùng sửa các thông tin đó gọi là "defaultValue"

// cho nên data để là optional nên là data? - việc create không cần data

// sử dụng react-hook-form: nhẹ - có tính năng xác thực -

// Sử dụng thêm Zod

const schema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at leatest 3 characters long!" })
    .max(20, { message: "Username must be at most 20 characters long!" }),
  email: z.string().email({ message: "Invalid email address!" }),
  password: z
    .string()
    .min(8, { message: "Password must be at leatest 8 characters long!" }),
  firstName: z.string().min(1, { message: "First name is required!" }),
  lastName: z.string().min(1, { message: "Last name is required!" }),
  phone: z.string().min(1, { message: "Phone is required!" }),
  address: z.string().min(1, { message: "Address is required!" }),
  birthday: z.date({ message: "Birthday is required!" }),
  sex: z.enum(["male", "female"], { message: "Sex is required!!!" }),
  img: z.instanceof(File, { message: "Image is required" }),
});

const TeacherForm = ({
  type,
  data,
}: {
  type: "create" | "update";
  data?: any;
}) => {
  // useForm là custom hook - được tích hợp sẵn react-hook-form - zodResolver
  // sử dụng cú pháp destructuring lấy ra reigister - handleSubmit và cả cái errors bên trong formState
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">Create a new teacher</h1>
      <span className="text-xs text-gray-400 font-medium">
        Authentication Infomation
      </span>
      <div className="flex flex-col gap-2 w-full md:w-1/4">
        <label htmlFor="" className="text-xs text-gray-500">
          Username
        </label>
        <input
          type="text"
          {...register("username")}
          className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
        />
        {errors.username?.message && (
          <p className="text-xs text-red-400">
            {errors.username?.message.toString()}
          </p>
        )}
      </div>
      <span className="text-xs text-gray-400 font-medium">
        Personal Infomation
      </span>
      <button className="bg-blue-400 text-white p-2 rounded-md">
        {type === "create" ? "Create" : "Update"}
      </button>
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
