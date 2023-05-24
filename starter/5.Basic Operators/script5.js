// Toán tử toán học
const thisYear = 2023;
const myYearBirthday = 1999;
const someBirthday = 1998;
const myAge = thisYear - myYearBirthday;
const someAge = thisYear - someBirthday;

console.log(myAge); // =24
console.log(2 ** 3); // 2 mũ 3 = 8
console.log((myAge * 2) / (someAge / 2) + thisYear); // =2026.84

const firstName = 'Đào';
const lastName = 'Nguyên';

console.log(firstName + ' ' + lastName); // = Đào Nguyên

// toán tử gán
let x = 10 + 5; // 15
x += 10; // x = x + 10
x -= 10; // x = x - 10
x /= 10; // x = x / 10
x *= 10; // x = x * 10
x **= 10; // x = x mũ 10 ( x = x ** 10)
x++; // x = x + 1
x--; // x = x - 1
console.log(x);

// toán tử so sánh
// >,<,>=,<=
console.log(myAge > someAge); // false
