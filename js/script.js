"use strict";
const arr = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];

console.log(arr);

const positiveNumbers = arr.filter((num) => num > 0);

const positiveCount = positiveNumbers.length;

const positiveSum = positiveNumbers.reduce((sum, number) => sum + number, 0);

console.log(`possible positive numbers in array is: ${positiveNumbers}`);
console.log(`and count of positive numbers in array: ${positiveCount}`);
console.log(`and sum of positive numbers in array: ${positiveSum}`);

let minNumber = arr.reduce((min, num) => {
  return num < min ? num : min;
});

console.log("minimal number is: " + minNumber);
console.log("and there index is: " + arr.indexOf(minNumber, 0));

let maxNumber = arr.reduce((max, num) => {
  return max > num ? max : num;
});

console.log(`maximum number is: ${maxNumber}`);

const negativeNumbers = arr.filter((num) => num < 0);

const negativeCounts = negativeNumbers.length;

console.log(negativeNumbers);
console.log(negativeCounts);

console.log(` negative numbers in array is: ${negativeNumbers}`);
console.log(`and count of negative numbers in array: ${negativeCounts}`);

const positiveOddNumbers = arr.filter((num) => num > 0 && num % 2 !== 0);

console.log(`positive odd numbers in array is: ${positiveOddNumbers}`);
console.log(
  `and count of positive odd numbers in array: ${positiveOddNumbers.length}`,
);

const positiveEvenNumbers = arr.filter((num) => num > 0 && num % 2 === 0);

console.log(`positive even numbers in array is: ${positiveEvenNumbers}`);
console.log(
  `and count of positive even numbers in array: ${positiveEvenNumbers.length}`,
);

const positiveEvenSum = positiveEvenNumbers.reduce((sum, num) => sum + num, 0);

console.log(`sum of positive even numbers: ${positiveEvenSum}`);

const positiveOddSum = positiveOddNumbers.reduce((sum, num) => sum + num, 0);

console.log(`sum of positive odd numbers: ${positiveOddSum}`);

const positiveProduct = positiveNumbers.reduce(
  (product, num) => product * num,
  1,
);

console.log(`product of positive numbers: ${positiveProduct}`);

const newArr = arr.map((num) => (num === maxNumber ? num : 0));

console.log(`new array with maximum number: ${newArr}`);
