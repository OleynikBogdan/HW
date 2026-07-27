"use strict";

//==========================
// Task 2
//==========================

// Scene 1
let name1;
console.log(name1);

// Scene 2
let name2 = null;
console.log(name2);

// Scene 3
function greet(user) {
  console.log("Hello,", user);
}
greet();

// Scene 4
function calculate1(a, b) {
  return a + b;
}
console.log(calculate1(2, 3));

// Scene 5
function calculate2(a, b) {
  let result = a + b;
}
console.log(calculate2(2, 3));

// Scene 6
function calculate3(a, b) {
  return;
}
console.log(calculate3(2, 3));

// Scene 7
const user1 = {
  firstName: "John",
  lastName: "Doe",
};

console.log(user1.age);

// Scene 8
const user2 = {
  firstName: "John",
  middleName: null,
  lastName: "Doe",
};

console.log(user2.middleName);

// Scene 9
const arr = [10, 20, 30];

console.log(arr[10]);

// Scene 10
const user3 = {
  name: "Anna",
  address: {
    city: "Kyiv",
  },
};

console.log(user3.address.street);

//==========================
// Task 3
//==========================

function describeEmpty(value) {
  if (value === undefined) {
    return "Це undefined — JavaScript сам поставив або значення не задано";
  }

  if (value === null) {
    return "Це null — розробник свідомо сказав, що тут порожньо";
  }

  return `Це не є порожнім значенням: ${typeof value}, ${value}`;
}

console.log(describeEmpty(null));
console.log(describeEmpty(undefined));
console.log(describeEmpty(0));
console.log(describeEmpty(""));
console.log(describeEmpty([]));
console.log(describeEmpty(false));

//==========================
// Task 4
//==========================

// Було:
// let userName;
// let userAge;

// Стало

const userName = "Anna";
const userAge = 20;

console.log("name:", userName);

function getGreeting(name) {
  return `Hello, ${name}`;
}

const message = getGreeting("World");

console.log(message);

/*
коментарі до 4 завдання
Замінив let на const,
одразу присвоїв значення змінним
та додав return у функцію getGreeting(),
щоб вона не повертала undefined.
*/

//==========================
// Task 5
//==========================

const userA = {
  name: "Anna",
  contact: {
    email: "anna@example.com",
  },
};

const userB = {
  name: "Bob",
};

console.log(userA.contact?.email);
console.log(userB.contact?.email);
