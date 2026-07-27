"use strict";

// ===== Task 2 =====

console.log(typeof 42);
console.log(typeof 42n);
console.log(typeof "hello");
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof NaN);
console.log(typeof Infinity);
console.log(typeof Symbol("id"));
console.log(typeof {});
console.log(typeof []);
console.log(typeof [1, 2, 3]);
console.log(typeof function () {});
console.log(typeof (() => {}));
console.log(typeof (2 + 2));
console.log(typeof ("2" + 2));
console.log(typeof ("foo" - "bar"));

let x;
console.log(typeof x);

console.log(typeof nonExistentVariable);

console.log(typeof typeof 42);

// ===== Task 4 =====

function isReallyArray(value) {
  return Array.isArray(value);
}

console.log(isReallyArray([1, 2, 3]));
console.log(isReallyArray("hello"));
console.log(isReallyArray({ length: 3 }));
console.log(isReallyArray(null));
console.log(isReallyArray("123".split("")));

// ===== Task 5 =====

function whatIsIt(value) {
  if (value === null) return "null";

  if (Array.isArray(value)) return "array";

  return typeof value;
}

console.log(whatIsIt(42));
console.log(whatIsIt("hi"));
console.log(whatIsIt(null));
console.log(whatIsIt([1, 2]));
console.log(whatIsIt({}));
console.log(whatIsIt(() => {}));
console.log(whatIsIt(undefined));
console.log(whatIsIt(NaN));
