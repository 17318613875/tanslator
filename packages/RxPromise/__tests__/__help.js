import RxPromise from "../lib/RxPromise";
export function initRetry() {
  let account = 0;
  return new RxPromise((resolve, reject) => {
    setTimeout(() => {
      if (account > 2) {
        resolve(account);
      } else {
        reject(account);
      }
      account++;
    }, 1 * 1000);
  });
}
export function initRetryWhen() {
  let account = 0;
  return new RxPromise((resolve, reject) => {
    setTimeout(() => {
      resolve(account);
      account++;
    }, 1 * 1000);
  });
}
export function initDelay(callback) {
  return new RxPromise((resolve, reject) => {
    resolve(callback);
  });
}
export function initDebounceTime(time) {
  return new RxPromise((resolve, reject) => {
    resolve(time);
  }).debounceTime(time);
}
export function initThrottleTime(time) {
  return new RxPromise((resolve, reject) => {
    resolve(time);
  }).throttleTime(time);
}
