const country = 'Viet Nam';
const continent = 'Asia';
let population = 10;

const isIsland = false;
let language;

console.log(typeof country);
console.log(typeof continent);
console.log(typeof population);
console.log(typeof isIsland);
console.log(typeof language);

language = 'Vietnamese';

//1. Nếu đất nước của bạn chia đôi, và mỗi nửa sẽ chứa một nửa dân số,
//sau đó có bao nhiêu người sẽ sống trong mỗi nửa?

if (population) {
  population = population / 2;
  console.log(`${population} sẽ sống trong 1 nửa`);
}

population = population + 1;
console.log(population);

let populationPhanLan = 6000000;
if (population > populationPhanLan) {
  console.log('Đất nước của tôi nhiều hơn Phần Lan');
} else {
  console.log('Đất nước của tôi ít hơn Phần Lan');
}

const description =
  country +
  ' ở ' +
  continent +
  ' và ' +
  population +
  ' người nói tiếng ' +
  language;
console.log(description);
