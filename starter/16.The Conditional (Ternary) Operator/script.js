const age = 15;

age >= 18
  ? console.log('Tôi được phép uống rượu')
  : console.log('Tôi không được uống rượu');

// if (age >= 18 ) {
//   console.log('Tôi được phép uống rượu')
// } else {
//   console.log('Tôi không được uống rượu');
// }

const drink = age >= 18 ? 'rượu' : 'nước lọc';
console.log(drink);

console.log(`Tôi thích uống ${age >= 18 ? 'rượu' : 'nước lọc'} `);
