import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      {/* SEARCH BAR */}
      <div className="hidden md:flex items-center gap-2 text-sx rounded-full ring-[1.5px] ring-gray-300 px-2">
        <Image src="/search.png" alt="Search" width={14} height={14} />
        <input
          type="text"
          placeholder="Search..."
          className="w-[200px] p-2 bg-transparent outline-none"
        />
      </div>
      {/* ICONS AND USER */}
      <div className="flex items-center gap-6 justify-end w-full">
        <div className="bg-white rounded-full h-7 w-7 flex items-center justify-center cursor-pointer">
          <Image src="/message.png" alt="Message" width={20} height={20} />
        </div>
        <div className="bg-white rounded-full h-7 w-7 flex items-center justify-center cursor-pointer relative">
          <Image
            src="/announcement.png"
            alt="Announcement"
            width={20}
            height={20}
          />
          <div className="absolute bg-purple-500 rounded-full text-white w-5 h-5 -top-3 -right-3 flex items-center justify-center text-xs">
            1
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium">John Doe</span>
          <span className="text-gray-500 text-[10px] text-right">Admin</span>
        </div>
        <Image
          width={36}
          height={36}
          src="/avatar.png"
          alt="Avatar"
          className="rounded-full"
        />
      </div>
    </div>
  );
};
export default Navbar;

/*
  flex items-center justify-between p-4

  flex nằm trên cùng 1 hàng
  items-center: canh trên dưới trục phục luôn giữa
  justify-between: canh sát ra 2 bên
  padding: trên dưới trái phải 16px

  bg-white rounded-full h-7 w-7 flex items-center justify-center cursor-pointer
  bg-white: nền màu trắng
  rounded: hình tròn
  height và width: 21px
  flex: nằm trên 1 hàng
  canh mọi thứ nằm giữa trục y và trục x
  hover vào bàn tay

  text-xs leading-3 font-medium: điều chỉnh font-size và line-height, chỉnh lại line-height, chỉnh lại kích cở hiển thị
  text-gray-500 text-[10px] text-right: màu sắc xám 500 mình tự custom kích cở chữ và bắt đầu từ bên phải

  hidden md:flex items-center gap-2 text-sx rounded-full ring-[1.5px] ring-gray-300 px-2

  Mặc định ẩn đi, md:flex đối với màn hình md trở lên thì flex canh mọi thứ giữa theo chiều dọc - truc phụ - gap-2 cách 8px - text-sx là small rounded-full thì bo tròn ring giúp ring-[1.5px]: Thêm một viền bao quanh (ring) phần tử với độ dày 1.5px. ring-gray-300: Màu của viền bao quanh sẽ là gray-300, một màu xám nhạt. px-2: Thêm khoảng đệm (padding) theo chiều ngang là 0.5rem (8px).

  w-[200px] p-2 bg-transparent outline-none - chiều rộng 200 padding 8px màu nền trong suốt và làm mất outline

*/
