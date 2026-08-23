"use strict";

const padString = (str, num, sym, bool = false) => {
  if (str === undefined) {
    return "Error: str is missing";
  }

  if (num === undefined) {
    return "Error: num is missing";
  }

  if (sym === undefined) {
    return "Error: sym is missing";
  }

  let result = str;

  if (num < str.length) {
    return result.substring(0, num);
  }

  while (result.length < num) {
    if (bool === true) {
      result = sym + result;
    } else {
      result = result + sym;
    }
  }

  return result;
};

console.log(padString("hello", 8, "*"));
console.log(padString("hello", 6, "*", true));
console.log(padString("hello", 2, "*"));
console.log(padString("hello", 8));
console.log(padString("hello"));
