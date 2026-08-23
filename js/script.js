const characters = "abcdefghijklmnopqrstuvwxyz0123456789";

const generateKey = (val, charSet) => {
  let key = "";
  for (let i = 0; i < val; i++) {
    key += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }
  return key;
};

console.log(generateKey(16, characters)); // Example output: "52m35q5b87pi7wq3
