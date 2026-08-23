const characters = "abcdefghijklmnopqrstuvwxyz0123456789";

const generateKey = (val, charSet) => {
  let res = "";
  for (let i = 0; i < val; i++) {
    res += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }
  return res;
};

const key = generateKey(16, characters);
console.log(key); // Example output: "u5lrt0504ysb58el"
