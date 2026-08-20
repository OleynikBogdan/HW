const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(array);

let removeElement = (arr, item) => {
  let index = arr.indexOf(item);
  return arr.splice(index, 1);
};
removeElement(array, 3);
console.log(array);
