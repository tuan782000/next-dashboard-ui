import Image from "next/image";

const UserCard = ({ type }: { type: string }) => {
  return (
    <div className="rounded-2xl odd:bg-lamaPurple even:bg-lamaYellow p-4 flex-1 min-w-[130px]">
      <div className="flex justify-between items-center">
        <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600">
          2024/25
        </span>
        <Image src="/more.png" alt="" width={20} height={20} />
      </div>
      <h1 className="text-2xl font-semibold my-4">1,234</h1>
      <h2 className="capitalize text-sm font-medium text-gray-500">
        {type + "s"}
      </h2>
    </div>
  );
};
export default UserCard;

/*
rounded-2xl odd:bg-lamaPurple even:bg-lamaYellow p-4 flex-1 min-w-[130px]

rounded-2xl là giúp bo góc
odd: lẻ
even: chẳn

2 này màu được lấy theo trong tailwind.config

p-4: padding: 16px

flex-1 chiếm hết

min-w-[130px]: chiều rộng tối thiểu của mỗi thằng này 130px, và nội dung bên trong sẽ được lắp đầy flex 1
*/
