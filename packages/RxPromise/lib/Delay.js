import { NUMB_ERROR_TEXT, FindStackIndex, isDef } from "./__help.js";

function DelayOperator(second) {
  const index = FindStackIndex.call(this, new Error().stack);
  const timeId = this.stackPool[index][2];
  isDef(timeId) && clearTimeout(timeId);
  return new this.__proto__.constructor((resolve, reject) => {
    this.stackPool[index][2] = setTimeout(() => {
      this.ExecutorFunc(resolve, reject);
    }, second * 1000);
  });
}

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
    return DelayOperator.call(this, time);
  }
}

export default Delay;
