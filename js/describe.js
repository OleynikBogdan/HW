"use strict";

function describe(value) {
  // String
  if (typeof value === "string") {
    return `Тип: string, Значення: ${value}, Довжина: ${value.length}`;
  }

  // null
  if (value === null) {
    return `Тип: null, Значення: ${value}`;
  }

  // Array
  if (Array.isArray(value)) {
    return `Тип: array, Значення: ${value}, Кількість елементів: ${value.length}`;
  }

  // NaN
  if (Number.isNaN(value)) {
    return `Тип: NaN, Значення: NaN`;
  }

  // Object
  if (typeof value === "object") {
    return `Тип: object, Значення: ${JSON.stringify(
      value,
    )}, Ключі: ${Object.keys(value).join(", ")}`;
  }

  // Function
  if (typeof value === "function") {
    return `Тип: function, Значення: <function>, Аргументів: ${value.length}`;
  }

  // BigInt
  if (typeof value === "bigint") {
    return `Тип: bigint, Значення: ${value}`;
  }

  // Symbol
  if (typeof value === "symbol") {
    return `Тип: symbol, Значення: ${value.description ?? "без опису"}`;
  }

  // number, boolean, undefined
  return `Тип: ${typeof value}, Значення: ${value}`;
}

console.log("============ Task 2 ============");

console.log(describe(42));
console.log(describe("hello"));
console.log(describe(true));
console.log(describe(undefined));

console.log("============ Task 3 ============");

console.log(describe(null));
console.log(describe([1, 2, 3]));
console.log(describe(NaN));
console.log(describe({ a: 1 }));

console.log("============ Task 4 ============");

console.log(describe("hello"));
console.log(describe([1, 2, 3]));
console.log(describe({ name: "Anna", age: 25 }));
console.log(
  describe(function (a, b, c) {
    return a + b + c;
  }),
);

console.log("============ Task 5 ============");

console.log(describe(100n));
console.log(describe(Symbol("user-id")));
console.log(describe(Symbol()));

console.log("============ Task 6 ============");

const testValues = [
  42,
  0.1 + 0.2,
  100n,
  "hello",
  "",
  true,
  false,
  null,
  undefined,
  NaN,
  Infinity,
  [1, 2, 3],
  [],
  { name: "Anna", age: 25 },
  {},
  Symbol("id"),
  function greet(name) {
    return `Hi ${name}`;
  },
  () => "arrow",
];

for (let value of testValues) {
  console.log(describe(value));
}

// Завдання 7.
// Намагався реалізувати рекурсивний describe()
// для вкладених об'єктів і масивів,
// але поки що не вдалося правильно оформити вивід.
// Планую повернутися до цього після вивчення рекурсії.
