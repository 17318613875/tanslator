"use strict";
import Retry from "./Retry";
import RetryWhen from "./RetryWhen";
import Delay from "./Delay";

/**
 * Class RxPromise
 * @see Retry
 * @see RetryWhen
 * @extends Promise
 */
class RxPromise extends Promise {
  /**
   * use for record the number of retries left
   * @static {Number} times
   */
  static times = -1;

  /**
   * Create a RxPromise.
   * @param {Function} ExecutorFunc - Executor Function
   */
  constructor(ExecutorFunc) {
    super(ExecutorFunc);
    this.ExecutorFunc = ExecutorFunc;
  }
}

/** @see Retry  */
RxPromise.prototype.retry = Retry;

/** @see RetryWhen */
RxPromise.prototype.retryWhen = RetryWhen;

/** @see Delay */
RxPromise.prototype.delay = Delay;

export default RxPromise;
