"use strict";

console.log("======= Task 2.1 =======");

const input = prompt("Введіть кількість секунд:");

if (
  input === null ||
  input.trim() === "" ||
  Number.isNaN(Number(input)) ||
  !Number.isFinite(Number(input)) ||
  Number(input) < 0 ||
  !Number.isInteger(Number(input))
) {
  alert("Некоректний ввід");
} else {
  const totalSeconds = Number(input);

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const result =
    String(hours).padStart(2, "0") +
    ":" +
    String(minutes).padStart(2, "0") +
    ":" +
    String(seconds).padStart(2, "0");

  console.log(result);
}

console.log("======= Task 2.2 =======");

const numberInput = prompt("Введіть ціле додатне число:");

if (
  numberInput === null ||
  numberInput.trim() === "" ||
  Number.isNaN(Number(numberInput)) ||
  !Number.isFinite(Number(numberInput)) ||
  Number(numberInput) <= 0 ||
  !Number.isInteger(Number(numberInput))
) {
  alert("Некоректний ввід");
} else {
  let number = Number(numberInput);
  let sum = 0;

  const originalNumber = number;
  let chain = String(originalNumber);

  while (number > 0) {
    const digit = number % 10;

    sum += digit;

    number = Math.floor(number / 10);
  }

  console.log(`Сума цифр: ${sum}`);

  number = sum;

  while (number >= 10) {
    sum = 0;

    while (number > 0) {
      const digit = number % 10;

      sum += digit;

      number = Math.floor(number / 10);
    }

    number = sum;

    chain += ` → ${number}`;
  }

  console.log(`Ланцюжок: ${chain}`);
  console.log(`Цифровий корінь: ${number}`);
}

console.log("=========== Task 2.3 ===========");

const amountInput = prompt("Введіть суму в гривнях:");

if (
  amountInput === null ||
  amountInput.trim() === "" ||
  Number.isNaN(Number(amountInput)) ||
  !Number.isFinite(Number(amountInput)) ||
  Number(amountInput) < 0 ||
  !Number.isInteger(Number(amountInput))
) {
  alert("Некоректний ввід");
} else {
  let amount = Number(amountInput);

  const nominals = [500, 200, 100, 50, 20, 10, 5, 2, 1];

  let totalPieces = 0;

  for (const nominal of nominals) {
    const count = Math.floor(amount / nominal);

    if (count === 0) {
      continue;
    }

    amount = amount % nominal;

    totalPieces += count;

    console.log(`${nominal} x ${count}`);

    if (amount === 0) {
      break;
    }
  }

  console.log(`Загальна кількість: ${totalPieces}`);
}
