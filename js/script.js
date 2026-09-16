"use strict";

const user = {
  name: "Bogdan",
};

function greet(age, city) {
  return `${this.name}, ${age}, ${city}`;
}

Function.prototype.myCall = function (context, ...args) {
  context.fn = this;

  const result = context.fn(...args);

  delete context.fn;

  return result;
};

console.log(greet.myCall(user, 23, "Kyiv"));

Function.prototype.myApply = function (context, args) {
  context.fn = this;

  const result = context.fn(...args);

  delete context.fn;

  return result;
};

console.log(greet.myApply(user, [23, "Kyiv"]));

Function.prototype.myBind = function (context, ...args) {
  const originalFunction = this;

  return function (...newArgs) {
    context.fn = originalFunction;

    const result = context.fn(...args, ...newArgs);

    delete context.fn;

    return result;
  };
};

const boundGreet = greet.myBind(user, 23);

console.log(boundGreet("Kyiv"));
