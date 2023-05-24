//4.Let,const and var ?

//1. Let

// Khi nào thì cần sử dụng let ? :
// Nếu cần thay đổi giá trị của 1 biến thì sử dụng let

let myAge; // let có thể khai báo là 1 biến rỗng
myAge = 22;
console.log(myAge); // = 22


const constMyAge; // lỗi const không thể là 1 biến rỗng 'const' declarations must be initialized.
const constMyAge = 19;
constMyAge = 22; // lỗi
console.log(constMyAge); // lỗi không thể in ra

var myFirstName = 'Khoa'
myFullName = 'Nguyen'
console.log(myFullName); // = Nguyen


