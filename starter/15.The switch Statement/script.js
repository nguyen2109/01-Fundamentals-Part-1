const number = 'four';

switch (number) {
  case 'one':
    console.log('1');
    break;
  case 'two':
    console.log('2');
    break;
  case 'three':
    console.log('3');
  case 'four':
  case 'five':
    console.log('4 and 5 ');
    break;

  default:
    console.log('Not a number!');
    break;
}
