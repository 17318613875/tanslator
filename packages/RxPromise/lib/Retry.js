import { NUMB_ERROR_TEXT } from "./__help";
/**
 * Retry Operator
 * @param {Function} onResolveHandle - Resolve Handle
 * @param {Function} onRejectHandle - Reject Handle
 * @this RxPromise
 */
function RetryOperator(onResolveHandle, onRejectHandle) {
  this.ExecutorFunc(onResolveHandle, (reject) => {
    --this.times;
    if (this.times > 0) {
      RetryOperator.call(this, onResolveHandle, onRejectHandle);
    } else {
      onRejectHandle(reject);
    }
  });
}

/**
 * Retry
 * @param {Number} times - Number of retry attempts before failing.
 * @this RxPromise
 * @return {Promise}
 * @method Retry
 * @owner RxPromise extends Promise
 */
function Retry(times = 0) {
  if (typeof second != "number") {
    throw new Error(NUMB_ERROR_TEXT);
  }
  if (times === 0) {
    return this;
  } else {
    this.times = times > 0 ? times : Infinity;
    /** @constructor RxPromise */
    return new this.__proto__.constructor((resolve, reject) => {
      this.then(resolve).catch((err) => {
        RetryOperator.call(this, resolve, reject);
      });
    });
  }
}

export default Retry;
