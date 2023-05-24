// falsy value hay còn gọi là các giá trị giả mạo ( không trung thực )
// 0 , Nan, undefined , '', null -> đây là các giá trị giả mạo (falsy value)

// trả về false vì đều chứa các giá trị không trung thực
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(''));
console.log(Boolean(null));

const myMoney = 0;

if (myMoney) {
  console.log('Bạn đã có tiền, đừng tiêu nó hết nhé');
} else {
  console.log('Bạn nghèo vl, chả nổi 1 đồng trong người');
}

let height;
if (height) {
  console.log('ok');
} else {
  console.log('sai');
}
console.log(typeof height);

let money = '';
if (money) {
  console.log('ok');
} else {
  console.log('sai');
}
console.log(typeof money);
