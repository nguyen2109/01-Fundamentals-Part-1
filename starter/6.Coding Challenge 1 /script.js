// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula: BMI = mass / height ** 2 = mass / (height *
// height) (mass in kg and height in meter).

// 1. Store Mark's and John's mass and height in variables
const markMass = 95; // 78kg
const johnMass = 85; // 92kg
const markHeight = 188; // 169cm
const johnHeight = 176; // 195cm

// 2. Calculate both their BMIs using the formula (you can even implement both versions)
//BMI = mass / height ** 2 = mass / (height * height)
const markBMI = markMass / markHeight ** 2;
console.log(`Mark BMI : ${markBMI}`); // Mark BMI : 0.0024691358024691358
const johnBMI = johnMass / johnHeight ** 2;
console.log(`John BMI : ${johnBMI}`); //John BMI : 0.0027548209366391185

//3. Create a Boolean variable 'markHighaerBMI' containing information about
//whether Mark has a higher BMI than John.

const markHigherBMI = markBMI > johnBMI;
console.log(`BMI của Mark có cao hơn không ? : ${markHigherBMI}`); // true

// Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall. -> true

//Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall. -> false
