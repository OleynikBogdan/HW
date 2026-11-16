"use strict";

const form = document.querySelector("[data-form]");
const formValues = document.querySelector("[data-form-values]");

const STORAGE_KEY = "user-data";

function getFormData() {
  const formData = new FormData(form);

  return {
    email: formData.get("email").trim(),
    age: formData.get("age") ? Number(formData.get("age")) : "",
    message: formData.get("message").trim(),
  };
}

function displayData(data) {
  formValues.textContent = JSON.stringify(data, null, 2);
  formValues.style.whiteSpace = "pre-wrap";
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const userData = getFormData();

  localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));

  displayData(userData);
});

form.addEventListener("reset", () => {
  localStorage.removeItem(STORAGE_KEY);
  formValues.textContent = "";
});

function restoreData() {
  const savedData = localStorage.getItem(STORAGE_KEY);

  if (!savedData) {
    return;
  }

  try {
    const userData = JSON.parse(savedData);

    form.elements.email.value = userData.email ?? "";
    form.elements.age.value = userData.age ?? "";
    form.elements.message.value = userData.message ?? "";

    displayData(userData);
  } catch (error) {
    console.error("Failed to restore user data:", error);
    localStorage.removeItem(STORAGE_KEY);
  }
}

restoreData();
