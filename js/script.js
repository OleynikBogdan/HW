console.log("======== Task 1 ========");

const hasPromoCode = true;
const cartTotal = 150;
const isBlackFriday = false;

const isDiscountApplied = (cartTotal >= 100 && hasPromoCode) || isBlackFriday;

if (isDiscountApplied) {
  console.log("Знижка застосована");
} else {
  console.log("Знижка не застосована");
}

const noDiscount = !isDiscountApplied;

console.log("isDiscountApplied:", isDiscountApplied);
console.log("noDiscount:", noDiscount);

console.log("======== Task 2 ========");

const email = "bogdan@gmail.com";
const password = "1a86n32y1";
const isEmailVerified = true;

const hasEmail = email !== "";
const hasPassword = password !== "";

const canLogin = hasEmail && hasPassword && isEmailVerified;

if (canLogin) {
  console.log("Логін успішний");
} else {
  console.log("Перевірте дані");
}

console.log("canLogin:", canLogin);
