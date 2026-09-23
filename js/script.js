"use strict";

const input = document.querySelector("#input");
const message = document.querySelector("#message");

message.style.display = "none";

input.addEventListener("focus", () => {
  message.style.display = "block";
});

input.addEventListener("blur", () => {
  message.style.display = "none";
});
