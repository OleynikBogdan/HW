"use strict";
console.log("======= Task 1 =======");
let result = "";

for (let i = 20; i <= 30; i += 0.5) {
  result += `${i} `;
}
console.log(result.trim());

console.log("======= Task 2 =======");

for (let i = 1; i <= 10; i++) {
  console.log(`${i * 10} USD it\`s ${i * 10 * 27} UAH`);
}

console.log("======= Task 3 =======");

const n = +prompt("Введіть число (Task 3)");
for (let i = 1; i <= 100; i++) {
  if (i ** 2 <= n) {
    console.log(`для числа ${i} квадрат ${i ** 2} <= ${n}`);
  }
}

console.log("======= Task 4 =======");

const num = +prompt("Введіть число (Task 4)");
let isPrime = num > 1;

for (let i = 2; i < num; i++) {
  if (num % i === 0) {
    isPrime = false;
    break;
  }
}

isPrime
  ? console.log(`число ${num} є простим`)
  : console.log(`число ${num} не є простим`);

console.log("======= Task 5 =======");

const number = +prompt("Введіть число (Task 5)");
let value = number;

while (value >= 1 && value % 3 === 0) {
  value = value / 3;
}

value === 1
  ? console.log(`число ${number} є степенем числа 3`)
  : console.log(`число ${number} не є степенем числа 3`);
