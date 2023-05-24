//Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110

//1. Calculate the average score for each team, using the test data below

let avgDolphins = (97 + 112 + 101) / 3;
let avgKoalas = (109 + 95 + 106) / 3;

//2. Compare the team's average scores to determine the winner of the competition, and print it to the console.
//Don't forget that there can be a draw, so test for that as well
//(draw means they have the same average score)

if (avgDolphins > avgKoalas) {
  console.log('Đội Dolphins chiến thắng');
} else if (avgDolphins < avgKoalas) {
  console.log('Đội Koalas chiến thắng');
} else if (avgDolphins === avgKoalas) {
  console.log('Trận đấu hòa!');
}

//3. Bonus 1: Include a requirement for a minimum score of 100.
// With this rule, a team only wins if it has a higher score than the other team, and the same time : score of at least 100 points.
// Hint: Use logical operator to test for minimum score, as well as multiple else-if blocks 6
if (avgDolphins > avgKoalas && avgDolphins >= 100) {
  console.log(
    'Đội Dolphins chiến thắng Koalas và có số điểm trung bình lớn hơn 100',
  );
} else if (avgKoalas > avgDolphins && avgKoalas >= 100) {
  console.log(
    'Đội Koalas chiến thắng Dolphins và có số điểm trung bình lớn hơn 100',
  );
} else if (avgDolphins <= 100) {
  console.log('Điểm của Dolphin đã nhỏ hơn 100 điểm');
} else if (avgKoalas <= 100) {
  console.log('Điểm của Koalas đã nhỏ hơn 100 điểm');
} else if (avgDolphins === avgKoalas) {
  console.log('Trận đấu hòa!');
}

//4.Bonus 2: Minimum score also applies to a draw!
// So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. O
// therwise, no team wins the trophy

if (avgDolphins === avgKoalas && avgDolphins >= 100) {
  console.log('Trận đấu hòa!');
} else {
  console.log('Không có đội thắng cuộc');
}
