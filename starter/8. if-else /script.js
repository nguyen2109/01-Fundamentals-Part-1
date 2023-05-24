const myYearBirthday = 2006;
const checkAge = 18;
const thisYear = 2023;

let waitYear;

if (thisYear - myYearBirthday >= checkAge) {
  console.log('Tôi đã đủ 18 tuổi 😆 ');
} else {
  waitYear = myYearBirthday + checkAge - thisYear;
  console.log(
    `Tôi chưa đủ 18 tuổi. cần phải chờ đợi thêm ${waitYear} năm nữa 🥲`,
  );
}
