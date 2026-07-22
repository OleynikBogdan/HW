"use strict";

/*Exersice number 3 */
const name = "Bogdan"; // const тому що це факт і поки не збираюсь змінювати ім'я
const secondName = "Oliinyk"; // const для прізвища як й ім'я (поки що)
let age = 23; // let тому що данні будуть змінюватись з кожним роком
let city = "Kyiv"; // let тому що данні будуть змінюватись кожного разу коли буду міняти місто
let hobby = "playing videogame and basketball"; // let нічого не вічно усе змінюється, як цей текст так і мої поточні хобі :)
const birthday = new Date(2002, 8, 11); // const тому що дані не зміняться ніколи, це факт
let favoriteColor = "#a600f4"; // див. пункт про хоббі :) так і тут з кольором
//-----------------------------------------------
let error = "";

setTimeout(() => {
  console.log("js file with fix type and  'Exersice №3' ");
  console.log(
    `My name is ${name} ${secondName}, i'm ${age} years old, i was borne in ${birthday.toLocaleDateString("uk-UA")} and i living in ${city}-city right now, my hobby is ${hobby}`,
  );

  console.log(
    `also my favorite color is: %cviolet`,
    `background: ${favoriteColor}; color: white; padding: 2px 8px;`,
  );
}, 2000);

setTimeout(() => {
  console.log(`Еxercise number 3.1 - 3.3 
some experiments
`);
}, 4000);

//-----------------------------------------------

setTimeout(() => {
  console.log("№3.1===============");

  console.log("current age:", age); //23

  age += 1;

  console.log("modify age:", age); //24
}, 5000);
//висновок: змінну було успішно модифіковано.

setTimeout(() => {
  console.log("№3.2===============");
}, 6000);

setTimeout(() => {
  // birthday = new Date(2001, 3, 5);
  error = "Uncaught TypeError: Assignment to constant variable.";
  console.log(
    birthday,
    "помилка після спробі переписати константні данні змінної",
    error,
  ); //текст помилки:  Uncaught TypeError: Assignment to constant variable.
}, 7000);

setTimeout(() => {
  console.log("№3.3===============");
}, 8000);
//let name = "alex";
//текст помилки: Uncaught SyntaxError: Identifier 'name' has already been declared

setTimeout(() => {
  error = "Uncaught SyntaxError: Identifier 'name' has already been declared";
  console.log(`після переоголошення зміннох видає помилку:`, error);
}, 10000);

let user = {
  name: "Богдан",
  secondName: "Олйіник",
  city: "Києві",
};

setTimeout(() => {
  console.log(
    "Привіт! Мене звати " + user.name,
    user.secondName + ", мені " + age + " роки, живу у " + user.city + ".",
  );
}, 11000);
