const favouriteNumber = Number(prompt('Số yêu thích của bạn là gì ?'));

if (favouriteNumber === 18) {
  console.log('Số 18 thật tuyệt');
} else if (favouriteNumber === 21) {
  console.log('Số 21 thật tuyệt');
} else if (favouriteNumber === 23) {
  console.log('Số 23 thật tuyệt');
} else {
  console.log('Bạn đã không chọn số 18,21,23 mà đã chọn 1 số khác');
}

if (favouriteNumber != 18) {
  console.log('Tại sao bạn không chọn số 18 ?');
}
