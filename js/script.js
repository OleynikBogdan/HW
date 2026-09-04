"use strict";

// const arr = [1, 2, 3, 4, 5];
const arr = [];

console.log(arr);

function myShift(arr) {
  if (arr === undefined || arr.length === 0) {
    return undefined;
  } else {
    const firstElement = arr[0];

    for (let i = 0; i < arr.length - 1; i++) {
      arr[i] = arr[i + 1];
    }

    arr.length = arr.length - 1;

    return firstElement;
  }
}

const firstElement = myShift(arr);

console.log(`first element is: ${firstElement}`);
console.log(`array after shift: ${arr}`);

function myReverse(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    const temp = arr[i];

    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }

  return arr;
}

myReverse(arr);

console.log(`array after reverse: ${arr}`);
