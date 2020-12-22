require("../dist/main.js");

let oldTime = new Date().getTime();
function debounce(params) {
  return new Promise((resolve, reject) => {
    resolve();
  }).throttleTime(1);
}
let account = 10;
const interval = setInterval(() => {
  if (account > 0) {
    debounce().then(() => {
      console.log("success", new Date().getTime() - oldTime, account);
    });
    account--;
  } else {
    clearInterval(interval);
  }
}, 0.5 * 1000);
