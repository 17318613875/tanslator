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
  if (times > 0) {
    this.times = times;
    /** @constructor RxPromise */
    return new this.__proto__.constructor((resolve, reject) => {
      this.then(resolve).catch((err) => {
        RetryOperator.call(this, resolve, reject);
      });
    });
  } else {
    return this;
  }
}

export default Retry;
