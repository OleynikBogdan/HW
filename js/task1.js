"use strict";

console.log("======= Task 1.2 =======");

let guessedCorrectly = false;
let attempts = 0;

const maxAttempts = 5;
const randomNumber = Math.floor(Math.random() * 10) + 1;

do {
  const userGuess = prompt("Вгадай число від 1 до 10:");

  if (userGuess === null) {
    alert("Гру завершено, ми не будемо більше грати(");
    break;
  } else if (userGuess.trim() === "") {
    alert("Ви нічого не ввели, так не можна...");
    continue;
  } else if (isNaN(userGuess)) {
    alert("Це не число");
    continue;
  } else if (Number(userGuess) % 1 !== 0) {
    alert("Введіть ціле число");
    continue;
  } else if (Number(userGuess) < 1 || Number(userGuess) > 10) {
    alert("Число має бути від 1 до 10");

    attempts++;

    if (attempts === maxAttempts) {
      alert(`Нажаль, це було число ${randomNumber}`);
      break;
    }

    continue;
  } else if (Number(userGuess) === randomNumber) {
    attempts++;

    alert(`Вітаю! Ви вгадали число за ${attempts} спроб!`);

    guessedCorrectly = true;
    break;
  } else if (Number(userGuess) < randomNumber) {
    attempts++;

    alert(`Замало, залишилось ${maxAttempts - attempts} спроб!`);
  } else if (Number(userGuess) > randomNumber) {
    attempts++;

    alert(`Забагато, залишилось ${maxAttempts - attempts} спроб!`);
  }

  if (attempts === maxAttempts) {
    alert(`Нажаль ващі спроби закінчились, і це було число ${randomNumber}`);
    break;
  }
} while (!guessedCorrectly);

// Варіант перевірки через Number():
// const numberGuess = Number(userGuess);
// if (!Number.isNaN(numberGuess) && Number.isInteger(numberGuess)) {
//   ...
// }
