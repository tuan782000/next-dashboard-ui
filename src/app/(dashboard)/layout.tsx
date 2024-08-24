import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* LEFT */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] bg-red-50 p-4">
        <Link
          href="/"
          className="flex justify-center items-center gap-2 lg:justify-start"
        >
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          <span className="hidden lg:block">SchoolLama</span>
        </Link>
      </div>
      {/* RIGHT */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-blue-50">
        r
      </div>
    </div>
  );
}

/*
Giải thích:

h-screen flex: height: 100vh đối với h-screen div này chiếm hết chiều cao, flex: để cho các item bên trong nằm trên cùng 1 hàng

w-1/6: chiếm 1 trên 6 phần

w-5/6: chiếm 5 trên 6 phần

Điều này giúp cho giao diện co giản theo màn hình

Ngoài ra nếu tailwind chưa cung cấp bạn có thể tự custom

w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] bg-red-50 p-4

w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-blue-50

xs (Extra Small): <576px (Thường dành cho điện thoại di động)
sm (Small): ≥576px (Dành cho điện thoại di động lớn)
md (Medium): ≥768px (Dành cho tablet)
lg (Large): ≥992px (Dành cho màn hình laptop hoặc desktop)
xl (Extra Large): ≥1200px (Dành cho màn hình desktop lớn)
xxl (Extra Extra Large): ≥1400px (Dành cho màn hình rất lớn)

md: màn hình có kích thước lớn >= 768 thì sẽ áp dụng css này
lg: màn hình có kích thước lớn ≥992px thì sẽ áp dụng css này
xl: màn hình có kích thước lớn ≥1200px thì sẽ áp dụng css này

p-4: nội dung cách thẻ đó trên dưới trái phải 16px

flex justify-center items-center gap-2 lg:justify-start

flex các thằng item con nằm trên 1 hàng

lúc này trục chính nằm ngang trục phụ nằm dọc

justify-center canh them chiều ngang - trục chính ra giữa
items-center canh truc phụ nằm giữa

gap-2: khoảng cách giữa 2 item sẽ là 8px
lg:justify-start: đối với các màn hình lớn hơn lg >= 992px thì trục ngang canh theo bên trái


hidden lg:block - mặc định là ẩn text đó - nhưng với màn hình >= 992px thì hiển thị chữ đó
*/
