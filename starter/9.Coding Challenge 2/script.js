//       Use the BMI example from Challenge #1, and the code you already wrote, and

//       Your tasks:
//       1. Print a nice output to the console, saying who has the higher BMI. The
//       message is either "Mark's BMI is higher than John's!" or "John's BMI is
//       higher than Mark's!"

//       2. Use a template literal to include the BMI values in the outputs.
//       Example: "Mark's BMI (28.3) is higher than John's (23.9)!" <br />
//       Hint: Use an if/else statement GOOD LUCK

// Lời giải

// 1. Store Mark's and John's mass and height in variables
const markMass = 95; // 78kg
const johnMass = 85; // 92kg
const markHeight = 188; // 169cm
const johnHeight = 176; // 195cm

// 2. Calculate both their BMIs using the formula (you can even implement both versions)
//BMI = mass / height ** 2 = mass / (height * height)
const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;

const markHigherBMI = markBMI > johnBMI;

if (markHigherBMI) {
  console.log(`BMI của Mark(${markBMI}) lớn hơn BMI của John(${johnBMI})`);
} else {
  console.log(`BMI của Mark(${markBMI}) nhỏ hơn BMI của John(${johnBMI})`);
}
