import UserCard from "@/components/UserCard";

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* Left */}
      <div className="w-full lg:w-2/3">
        {/* USER CARDS */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
      </div>
      {/* Right */}
      <div className="w-full lg:w-1/3">r</div>
    </div>
  );
};
export default AdminPage;

/*
p-4 flex gap-4 flex-col md:flex-row: padding 4 hướng 8px flex thì nằm trên 1 hàng mỗi phần tử bên trong cách nhau 16px flex-col ám chỉ mặc định flex-direction column từ màn hình md trở lên thì nằm ngang

Bên trong chia làm 2 trái và phải

Trái: 

w-full lg:w-2/3 - chiều rộng chiếm hết - màn honhf lg trở lên chiếm 2/3 phần còn lại

flex gap-4 justify-between flex-wrap: - Mọi thứ nằm hàng ngang khoanghr cách giữa các item 16px canh theo trục chính x space-between flex-wrap có nghĩa là tự dộng xuống hàng nếu cảm giác các item bị chật chội chạm đến ngưỡng

*/
