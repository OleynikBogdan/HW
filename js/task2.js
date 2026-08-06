"use strict";

const celsius = Number(prompt("Введіть температуру в °C"));
const scale = prompt("Введіть шкалу (F, K або R)")?.toLowerCase();

if (celsius < -273.15) {
  alert("Нижче абсолютного нуля");
} else {
  let result = 0;

  switch (scale) {
    case "f":
      result = (celsius * 9) / 5 + 32;
      break;

    case "k":
      result = celsius + 273.15;
      break;

    case "r":
      result = ((celsius + 273.15) * 9) / 5;
      break;

    default:
      alert("Невідома шкала");
  }

  result = Math.round(result * 100) / 100;

  const scaleNames = {
    f: "Фаренгейт",
    k: "Кельвін",
    r: "Ранкін",
  };

  if (Object.hasOwn(scaleNames, scale)) {
    const description =
      celsius < -10
        ? "мороз"
        : celsius <= 0
          ? "холодно"
          : celsius <= 15
            ? "прохолодно"
            : celsius <= 25
              ? "комфортно"
              : "спека";

    console.log(
      `${celsius} °C = ${result} (${scaleNames[scale] ?? "Невідома шкала"}) — ${description}`,
    );
  } else {
    console.log("Невідома шкала");
  }
}
