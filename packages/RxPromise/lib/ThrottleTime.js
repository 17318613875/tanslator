import { NUMB_ERROR_TEXT, FindStackIndex, isDef } from "./__help.js";

/**
 * Throttle Operator
 * @param {Number} second
 * @this RxPromise
 * @return {Promise}
 */
function ThrottleTimeOperator(second) {
  const index = FindStackIndex.call(this, new Error().stack);
  const oldTime = this.stackPool[index][1];
  const newTime = Date.now();
  if (newTime - oldTime >= second * 1000) {
    return new this.__proto__.constructor((resolve, reject) => {
      this.stackPool[index][1] = newTime;
      this.ExecutorFunc(resolve, reject);
    });
  } else {
    return new this.__proto__.constructor(() => {});
  }
}

/**
 * ThrottleTime
 * @param {Number} time - Every interval of this waiting time, the function must be executed once
 * @this RxPromise
 * @return {Promise}
 * @method ThrottleTime
 * @owner RxPromise extends Promise
 */
function ThrottleTime(time = 0) {
  if (typeof time != "number") {
    throw new Error(NUMB_ERROR_TEXT);
  }
  if (time === 0) {
    return this;
  } else if (time < 0) {
    return new this.__proto__.constructor(() => {});
  } else if (time > 0) {
    return ThrottleTimeOperator.call(this, time);
  }
}

export default ThrottleTime;
