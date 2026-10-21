"use strict";

const input = document.querySelector("#item-input");
const addBtn = document.querySelector("#add-btn");
const list = document.querySelector(".list");

addBtn.addEventListener("click", () => {
  const text = input.value.trim();

  if (text === "") {
    return;
  }

  const li = document.createElement("li");
  li.textContent = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "✖";

  li.append(deleteBtn);
  list.append(li);

  input.value = "";
});

list.addEventListener("click", (event) => {
  const deleteBtn = event.target.closest("button");

  if (deleteBtn) {
    const li = deleteBtn.closest("li");
    li.remove();
    return;
  }

  const li = event.target.closest("li");

  if (li && list.contains(li)) {
    li.classList.toggle("selected");
  }
});
