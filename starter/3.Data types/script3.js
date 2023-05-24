// 1. Number: Floating point numbers 👉 Used for decimals and integers
// 2. String: Sequence of characters 👉 Used for text
// 3. Boolean: Logical type that can only be true or false 👉 Used for taking decisions
// 4. Undefined: Value taken by a variable that is not yet defined (‘empty value’)
// 5. Null: Also means ‘empty value’
// 6. Symbol (ES2015): Value that is unique and cannot be changed [Not useful for now]
// 7. BigInt (ES2020): Larger integers than the Number type can hold

//1.Number :
let myAge = 19;
console.log(myAge);

//2.String :
let myName = 'Nguyen';
console.log(myName);

//3.Boolean
let turnOn = true;
let turnOff = false;
console.log(true);
console.log(turnOn);
console.log(turnOff);

//4.Undefined
let iDontKnow;
console.log(iDontKnow);

//5.Null
let myMoney = null;
console.log(myMoney);

//type of
console.log({
  myAge: typeof myAge,
  myName: typeof myName,
  turnOn: typeof turnOn,
  iDontKnow: typeof iDontKnow,
  myMoney: typeof myMoney,
});

myName = 'Khoa';
console.log(`myName đã thay đổi thành ${myName}`);
