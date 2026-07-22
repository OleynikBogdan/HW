"use strict";

const API_URL = "https://api.myproject.com/v1";
const MAX_LOGIN_ATTEMPTS = 5;
const PRIMARY_COLOR = "#FFFFFF";
const PROJECT_NAME = "Hillel JavaScript Course";
const DATABASE_NAME = "users_db";

// Вивід у консоль

console.log("=== CONFIG ===");
console.log("API URL:", API_URL);
console.log("Max login attempts:", MAX_LOGIN_ATTEMPTS);
console.log(
  "%cPrimary color",
  `background:${PRIMARY_COLOR}; color:#000; padding:2px 8px;`,
);
console.log("Project name:", PROJECT_NAME);
console.log("Database name:", DATABASE_NAME);
