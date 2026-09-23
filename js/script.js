"use strict";

const listItems = document.querySelectorAll("li");

for (const item of listItems) {
  console.log(item);
}

console.log(`total elements: ${listItems.length}`);

const textArray = [];

for (const item of listItems) {
  textArray.push(item.textContent.trim());
}

console.log(textArray);
