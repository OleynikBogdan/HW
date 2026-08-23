"use strict";

const PadString = (str, num, sym, bool) => {
  if (str === undefined) {
    return "Error: string is missing";
  }

  if (num === undefined) {
    return "Error: number is missing";
  }

  if (sym === undefined) {
    return "Error: symbol is missing";
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

console.log(PadString("Hello", 3, ".", true));
console.log(PadString("Hello", 12, "*", false));
console.log(PadString(12, "*", false)); // res: 12
console.log(PadString(undefined, 12, "*", false)); // Error: string is missing
console.log(PadString("Hello", 12, false)); // res: Hellofalsefalse
console.log(PadString("Hello", 12, undefined, false)); // Error: sym is missing

// if we want to miss the argument and cath the error, We must explicitly pass `undefined` as the argument;
// otherwise, we will get an unexpected result, which counts as an error for us.
