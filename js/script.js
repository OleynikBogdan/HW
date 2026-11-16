"use strict";

const form = document.querySelector("#registration-form");
const resetButton = document.querySelector("#reset-button");
const formResult = document.querySelector("#form-result");

const STORAGE_KEY = "registration-form-data";

const fields = {
  email: form.querySelector("#email"),
  password: form.querySelector("#password"),
  confirmPassword: form.querySelector("#confirm-password"),
  age: form.querySelector("#age"),
  city: form.querySelector("#city"),
  terms: form.querySelector("#terms"),
};

const errors = {
  email: form.querySelector("#email-error"),
  password: form.querySelector("#password-error"),
  confirmPassword: form.querySelector("#confirm-password-error"),
  age: form.querySelector("#age-error"),
  city: form.querySelector("#city-error"),
  terms: form.querySelector("#terms-error"),
};

function showError(fieldName, message) {
  const field = fields[fieldName];
  const error = errors[fieldName];

  error.textContent = message;
  field.classList.toggle("invalid", Boolean(message));
  field.setAttribute("aria-invalid", String(Boolean(message)));

  return !message;
}

function validateField(fieldName) {
  const field = fields[fieldName];

  const value =
    fieldName === "password" || fieldName === "confirmPassword"
      ? field.value
      : field.value.trim();

  let message = "";

  switch (fieldName) {
    case "email":
      if (!value) {
        message = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        message = "Please enter a valid email";
      }
      break;

    case "password":
      if (value.length < 8) {
        message = "Password must contain at least 8 characters";
      } else if (!/[a-zA-Z]/.test(value)) {
        message = "Password must contain at least one letter";
      } else if (!/[0-9]/.test(value)) {
        message = "Password must contain at least one number";
      }
      break;

    case "confirmPassword":
      if (!value) {
        message = "Please confirm your password";
      } else if (value !== fields.password.value) {
        message = "Passwords do not match";
      }
      break;

    case "age":
      if (value === "") {
        message = "Age is required";
      } else if (
        !Number.isInteger(Number(value)) ||
        Number(value) < 16 ||
        Number(value) > 120
      ) {
        message = "Age must be between 16 and 120";
      }
      break;

    case "city":
      if (!value) {
        message = "Please select a city";
      }
      break;

    case "terms":
      if (!field.checked) {
        message = "You must agree to the terms";
      }
      break;
  }

  return showError(fieldName, message);
}

function validateForm() {
  let isValid = true;
  let firstInvalidField = null;

  for (const fieldName of Object.keys(fields)) {
    const fieldValid = validateField(fieldName);

    if (!fieldValid) {
      isValid = false;

      if (!firstInvalidField) {
        firstInvalidField = fields[fieldName];
      }
    }
  }

  if (firstInvalidField) {
    firstInvalidField.focus();
  }

  return isValid;
}

function getFormData() {
  return {
    email: fields.email.value.trim(),
    password: fields.password.value,
    confirmPassword: fields.confirmPassword.value,
    age: fields.age.value ? Number(fields.age.value) : "",
    city: fields.city.value,
    terms: fields.terms.checked,
  };
}

function saveFormData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(getFormData()));
}

function restoreFormData() {
  const savedData = localStorage.getItem(STORAGE_KEY);

  if (!savedData) {
    return;
  }

  try {
    const data = JSON.parse(savedData);

    for (const fieldName of Object.keys(fields)) {
      if (!Object.hasOwn(data, fieldName)) {
        continue;
      }

      if (fieldName === "terms") {
        fields.terms.checked = data.terms === true;
      } else {
        fields[fieldName].value = data[fieldName] ?? "";
      }
    }
  } catch (error) {
    console.error("Failed to restore form data:", error);
    localStorage.removeItem(STORAGE_KEY);
  }
}

form.addEventListener("input", (event) => {
  const field = event.target;

  formResult.textContent = "";

  for (const fieldName of Object.keys(fields)) {
    if (fields[fieldName] === field) {
      validateField(fieldName);

      if (fieldName === "password") {
        validateField("confirmPassword");
      }

      break;
    }
  }

  saveFormData();
});

form.addEventListener("change", (event) => {
  const field = event.target;

  formResult.textContent = "";

  for (const fieldName of Object.keys(fields)) {
    if (fields[fieldName] === field) {
      validateField(fieldName);
      break;
    }
  }

  saveFormData();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const isValid = validateForm();

  if (!isValid) {
    formResult.textContent = "";
    return;
  }

  const data = getFormData();

  formResult.textContent = JSON.stringify(data, null, 2);

  saveFormData();

  console.log("Form submitted successfully");
});

resetButton.addEventListener("click", () => {
  form.reset();

  localStorage.removeItem(STORAGE_KEY);

  for (const fieldName of Object.keys(fields)) {
    showError(fieldName, "");
  }

  formResult.textContent = "";
});

restoreFormData();
