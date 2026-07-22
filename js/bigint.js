"use strict";

// 3.1

const a = 123456789123456789n;
const b = BigInt("123456789123456789");

console.log(a, typeof a);
console.log(b, typeof b);

// 3.2

const max = BigInt(Number.MAX_SAFE_INTEGER);

console.log(max + 1n);
console.log(max + 2n);
console.log(max + 3n);
console.log(max + 4n);
console.log(max + 5n);

// BigInt не втрачає точність.

// 3.3

const x = 10n;
const y = 10;

console.log(x === y);
console.log(x == y);
console.log(typeof x);
console.log(typeof y);

// === перевіряє і значення, і тип.
// == приводить типи.

// 3.4

// console.log(10n + 5);

// TypeError: Cannot mix BigInt and other types.
