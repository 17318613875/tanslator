require("../dist/main.js");

let oldTime = new Date().getTime();
const target = new Promise((resolve, reject) => {
  resolve();
});

target
  .delay(0)
  .delay(1)
  .delay(2)
  .then(() => {
    console.log(new Date().getTime() - oldTime); // (1 + 2) * 1000
  });
