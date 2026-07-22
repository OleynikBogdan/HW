"use strict";

// 2.1
console.log("Positive:", 42);
console.log("Negative:", -42);
console.log("Float:", 3.14);
console.log("Big:", 5e10);
console.log("Small:", 5e-10);
console.log("Separator:", 1_000_000);

// 2.2
console.log("Infinity:", 1 / 0);
console.log("-Infinity:", -1 / 0);
console.log("NaN:", "text" * 5);

// 2.3
console.log("0.1 + 0.2 =", 0.1 + 0.2);
// Очікував 0.3, але отримав 0.30000000000000004 як було на уроці.

// 2.4
console.log(Number.MAX_SAFE_INTEGER);

console.log(Number.MAX_SAFE_INTEGER + 1);
console.log(Number.MAX_SAFE_INTEGER + 2);
console.log(Number.MAX_SAFE_INTEGER + 3);
console.log(Number.MAX_SAFE_INTEGER + 4);
console.log(Number.MAX_SAFE_INTEGER + 5);

// Починаючи з певного моменту сусідні числа вже не відрізняються, більш конкретно, після Number.MAX_SAFE_INTEGER + 2.

// 2.5
const nan = NaN;

console.log(nan + 5);
console.log(nan - 5);
console.log(nan * 5);
console.log(nan / 5);

// Будь-яка операція з NaN повертає NaN.
