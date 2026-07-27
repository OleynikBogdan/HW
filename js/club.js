"use strict";

//=====================
// Task 2
//=====================

const member1 = {
  id: Symbol("member"),
  name: "William",
  joinDate: "2026-07-27",
};

const member2 = {
  id: Symbol("member"),
  name: "Arthur",
  joinDate: "2026-06-10",
};

const member3 = {
  id: Symbol("member"),
  name: "Merlin",
  joinDate: "2026-05-01",
};

console.log(member1);
console.log(member2);
console.log(member3);

//=====================
// Task 3
//=====================

const twin1 = {
  id: Symbol("twin"),
  name: "Marpha",
  joinDate: "2024-01-15",
};

const twin2 = {
  id: Symbol("twin"),
  name: "Marpha",
  joinDate: "2024-01-15",
};

console.log(twin1 === twin2); // false
console.log(twin1.id === twin2.id); // false
console.log(twin1.name === twin2.name); // true
console.log(twin1.id.description === twin2.id.description); // true

// Symbol завжди унікальний.
// description лише текстова підказка, а не ідентифікатор.

//=====================
// Task 4
//=====================

// 4.1

const s1 = Symbol("secret");
const s2 = Symbol(s1.description);

console.log(s1 === s2); // false

// 4.2

const s3 = Symbol("id");
const s4 = Symbol("id");

console.log(s3 == s4); // false

// 4.3

const s = Symbol("id");

// alert(s); // TypeError
// alert(String(s)); // Symbol(id)
// alert(s.toString()); // Symbol(id)
// alert(s.description); // id

// alert(Symbol) працювати не буде.
// Потрібно явно привести до рядка.

// 4.4

const uniqueKey = Symbol("meta");

const data = {
  publicName: "Alice",
  [uniqueKey]: "секретна інформація",
};

console.log(data);
console.log(data[uniqueKey]);
console.log(data.uniqueKey); // undefined
console.log(Object.keys(data)); // ['publicName']

// Symbol-ключі не входять до Object.keys(),
// тому їх зручно використовувати для прихованих властивостей.

//=====================
// Task 5
//=====================

const club = [
  member1,
  member2,
  member3,
  {
    id: Symbol("member"),
    name: "John",
    joinDate: "2025-11-11",
  },
  {
    id: Symbol("member"),
    name: "Alice",
    joinDate: "2025-09-15",
  },
];

function findMember(memberSymbol) {
  return (
    club.find((member) => member.id === memberSymbol) || "Member not found"
  );
}

console.log(findMember(member1.id));
console.log(findMember(Symbol("member")));

//=====================
// Task 6
//=====================

const a = Symbol("shared");
const b = Symbol("shared");

console.log(a === b); // false

const c = Symbol.for("shared");
const d = Symbol.for("shared");

console.log(c === d); // true

// Symbol() створює новий символ кожного разу.
// Symbol.for() використовує глобальний реєстр.
// Підходить, коли різні модулі повинні отримувати один і той самий Symbol.
