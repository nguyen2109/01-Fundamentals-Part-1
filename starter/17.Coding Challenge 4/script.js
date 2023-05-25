//Steven muốn xây dựng một máy tính tiền boa rất đơn giản cho bất cứ khi nào anh ấy đi ăn ở nhà hàng.
// Ở đất nước của anh ấy, người ta thường boa 15% nếu giá trị hóa đơn từ 50 đến 300.
// Nếu giá trị khác, tiền boa là 20%.

//1. Tính tiền tip, tùy theo giá trị hóa đơn.
// Tạo một biến gọi là 'tip' cho việc này.
// Không được phép sử dụng câu lệnh if/else
// (Nếu dễ dàng hơn đối với bạn, bạn có thể bắt đầu bằng câu lệnh if/else,
// sau đó thử chuyển đổi nó thành toán tử bậc ba!)
const hoaDon = 40;
let tip;

hoaDon >= 50 && hoaDon <= 300
  ? (tip = hoaDon * (15 / 100))
  : (tip = hoaDon * (20 / 100));
console.log(
  `Bill là ${hoaDon} và tiền tip là ${tip}\nVậy tổng hóa đơn là ${
    hoaDon + tip
  }`,
);
