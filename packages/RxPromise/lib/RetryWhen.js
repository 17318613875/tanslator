/**
 * RetryWhen Operator
 * @param {Function} onResolveHandle - Resolve Handle
 * @param {Function} onRejectHandle - Reject Handle
 * @param {Function} RetryHandle - Retry function
 * @this RxPromise
 */
function RetryWhenOperator(onResolveHandle, onRejectHandle, RetryHandle) {
  this.ExecutorFunc(async (resolveValue) => {
    const result = await RetryHandle(resolveValue);
    result
      ? onResolveHandle(resolveValue)
      : RetryWhenOperator.call(
          this,
          onResolveHandle,
          onRejectHandle,
          RetryHandle
        );
  }, onRejectHandle);
}

/**
 * RetryWhen
 * @param {Function} RetryHandle - function of retry until of success.
 * @this RxPromise
 * @returns {Promise}
 * @method RetryWhen
 * @owner RxPromise extends Promise
 */
function RetryWhen(RetryHandle) {
  if (RetryHandle) {
    return new this.__proto__.constructor((resolve, reject) => {
      this.then(async (resolveValue) => {
        const result = await RetryHandle(resolveValue);
        result
          ? resolve(resolveValue)
          : RetryWhenOperator.call(this, resolve, reject, RetryHandle);
      }).catch(reject);
    });
  }
  return this;
}

export default RetryWhen;
