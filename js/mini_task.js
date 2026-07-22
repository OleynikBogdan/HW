"use strict";

function showPrice(price) {
  console.log(
    `Ціна товару: ${Math.floor(price / 100)} грн ${price % 100} коп.`,
  );
}

showPrice(19999);
showPrice(50);
showPrice(100000);
showPrice(7);
