const inputYear = '1999'; // string

console.log(inputYear + 1); // string : 19991

console.log(Number(inputYear) + 1); // Number : 1999+1 = 2000

console.log(Number('Nguyen')); // Nan : Not a number
// ( vẫn là 1 số nhưng ko biết là số gì) sử dụng type of để in ra :
console.log(typeof Number('Nguyen')); // number

console.log(String(23)); // in ra 1 string là 23

//KIỂU CƯỠNG CHẾ
console.log('I am ' + 23 + 'years old'); // string + number + string -> kết quả là 1 string
// Với phép + thì string sẽ ép number thành string

console.log('12' - '2' + 6); // string - string - number -> kết quả là 1 number
// Với phép - thì string sẽ ép string thành number
// điều này cũng đúng với phép * và /

///Ví dụ thêm về kiểu cưỡng chế :

console.log(2 + 3 + 4 + '5'); // bị cưỡng chế thành string -> kết quả là string : 95
console.log(100 - 2 - 3 - '5' - 6 - 7); // bị cưỡng chế thành number -> kết quả là number : 77

console.log('100' - 1 - 1 + 1 + '1' - 1);
// 100 - 1 -1 = cưỡng chế với toán - là number : 98
//98 + 1 = number : 99
//99 + '1' = string : 991
//991-1 = number : 990
//kết quả là 990
