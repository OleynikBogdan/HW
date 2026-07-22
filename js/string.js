"use strict";

// 4.1

const s1 = "Hello";
const s2 = "Hello";
const s3 = `Hello`;

console.log(s1, s2, s3);

// 4.2

const q1 = "Він сказав: \"Це — 'звичайна' помилка\".";
const q2 = `Він сказав: "Це — 'звичайна' помилка".`;

console.log(q1);
console.log(q2);

// Шаблонні літерали читаються простіше.

// 4.3

const name = "Bogdan";
const age = 23;
const city = "Kyiv";

const text = `Привіт! Мене звати ${name}, мені ${age} років, живу у ${city}. Це ${age * 12} місяців.`;

console.log(text);

// 4.4

console.log(text.length);
console.log(text[0]);
console.log(text[4]);
console.log(text[text.length - 1]);

// 4.5

const greeting = "Hello";

greeting[0] = "J";

console.log(greeting);

// Рядок не змінився, тому що String імутабельний.
