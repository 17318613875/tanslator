import { NUMB_ERROR_TEXT } from "./__help";
/**
 * Delay
 * @param {Number} times - Number of delay attempts before failing.
 * @this RxPromise
 * @return {Promise}
 * @method Delay
 * @owner RxPromise extends Promise
 */
function Delay(time = 0) {
  if (typeof time != "number") {
    throw new Error(NUMB_ERROR_TEXT);
  }
  if (time === 0) {
    return this;
  } else if (time < 0) {
    return new this.__proto__.constructor(() => {});
  } else if (time > 0) {
    return new this.__proto__.constructor((resolve, reject) => {
      setTimeout(() => {
        this.ExecutorFunc(resolve, reject);
      }, time * 1000);
    });
  }
}

export default Delay;
