let user = {
  name: "Bogdan",
  age: 23,
  email: "standalone@gmail.com",
  isSubscribed: true,
  balance: "150.25",
  verified: "1",
};

console.log(" ======== task 1 ======== ");

let numberBalance = Number(user.balance);
console.log(numberBalance);

const verifiedBoolean = !!Number(user.verified);
console.log(verifiedBoolean);

const hasAccess =
  user.age >= 18 && verifiedBoolean && (user.isSubscribed || numberBalance > 0);

const ageEqual = user.age == "23";
const ageStrictEqual = user.age === "23";

let message = "";

if (user.age < 18) {
  message = "Access restricted due to age";
}

console.log(hasAccess);
console.log(ageEqual);
console.log(ageStrictEqual);
console.log(message);

console.log(" ======== task 2 ======== ");

const order = {
  total: "1250",
  currency: "USD",
  isPaid: false,
  delivery: "yes",
  priority: "1",
};

let numberTotal = Number(order.total);

const deliveryBoolean = order.delivery === "yes";

console.log(deliveryBoolean);

const priorityBoolean = !!Number(order.priority);

console.log(priorityBoolean);

const isBigOrder = numberTotal >= 1000;

console.log(isBigOrder);

let orderDescription = "";

if (!order.isPaid) {
  orderDescription = "Order is not paid";
}
if (order.isPaid && deliveryBoolean) {
  orderDescription = "Paid order with delivery";
}
if (isBigOrder && order.isPaid) {
  orderDescription = "High-value paid order";
}

if (order.isPaid && !deliveryBoolean) {
  orderDescription = "Paid order without delivery";
}

if (priorityBoolean) {
  orderDescription += " [PRIORITY]";
}

console.log(orderDescription);

const totalEqual = order.total == numberTotal;
const totalStrictEqual = order.total === numberTotal;

console.log(totalEqual);
console.log(totalStrictEqual);

console.log(" ======== task 3 ======== ");

const systemSettings = {
  darkMode: true,
  fontSize: "18",
  language: "en",
  betaAccess: "true",
};

const numberFontSize = Number(systemSettings.fontSize);
console.log(numberFontSize);

const betaAccessBoolean = systemSettings.betaAccess === "true";
console.log(betaAccessBoolean);

const isLargeFont = numberFontSize >= 18;
console.log(isLargeFont);

let settingsDescription = "";
if (systemSettings.darkMode && isLargeFont) {
  settingsDescription = "Dark mode + large font";
}

if (systemSettings.darkMode && !isLargeFont) {
  settingsDescription = "Dark mode";
}

if (!systemSettings.darkMode && isLargeFont) {
  settingsDescription = "Large font";
}

if (!systemSettings.darkMode && !isLargeFont) {
  settingsDescription = "Default settings";
}

console.log(settingsDescription);

if (betaAccessBoolean) {
  settingsDescription += " (Beta tester)";
}
console.log(settingsDescription);

console.log(" ======== task 4 ======== ");

let finalAccess = false;

const orderAccess = order.isPaid || numberBalance >= numberTotal;

const systemAccess =
  numberFontSize > 12 &&
  (systemSettings.language === "en" || systemSettings.language === "uk");

if (hasAccess && orderAccess && systemAccess) {
  finalAccess = true;
}

if (finalAccess) {
  console.log("Full access granted");
} else {
  console.log("Access denied");
}

if (!hasAccess) {
  console.log("Blocked: user");
}

if (!orderAccess) {
  console.log("Blocked: order");
}

if (!systemAccess) {
  console.log("Blocked: system");
}
