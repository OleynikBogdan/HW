"use strict";

const input = prompt("Введіть ваш вік");
const age = Number(input);
const isValidAge =
  input !== null &&
  input.trim() !== "" &&
  !Number.isNaN(age) &&
  Number.isFinite(age) &&
  Number.isInteger(age);

if (!isValidAge) {
  alert("Некоректний ввід");
} else {
  if (input < 0) {
    alert("Такого віку не існує!");
  }

  if (0 <= input && input <= 6) {
    alert("Ви тільки Дошкільник, йдіть подивіться мультики!");
  }

  if (7 <= input && input <= 17) {
    alert("Ви ще Неповнолітній, йдіть почитайте книжки!");
  }

  if (18 <= input && input <= 64) {
    alert(`Ви вже Дорослий!
    Ви як? 
    Коліна не болять ?`);
  }

  if (65 <= input && input <= 120) {
    alert(`Ого, ви вже Пенсіонер!`);
  }

  if (input > 120) {
    alert("А ви точно не бот?");
  }

  if (!isValidAge) {
    alert("Ви ввели не коректний вік!");
  }
}

const canDrive = 18;

age >= canDrive
  ? alert("Ви можете водити авто!")
  : alert("Ви ще не можете водити авто!");

let ticket;
age < 7
  ? console.log("Квиток: 0грн")
  : (7 <= age && age < 18) || age >= 65
    ? console.log("Квиток: 50грн")
    : console.log("Квиток: 100грн");
