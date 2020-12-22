"use strict";
import Retry from "./Retry.js";
import RetryWhen from "./RetryWhen.js";
import Delay from "./Delay.js";
import DebounceTime from "./DebounceTime.js";
import ThrottleTime from "./ThrottleTime";

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

/** @description 调用栈存储 */
RxPromise.prototype.stackPool = [];

/** @see DebounceTime */
RxPromise.prototype.debounceTime = DebounceTime;

/** @see ThrottleTime */
RxPromise.prototype.throttleTime = ThrottleTime;

Promise = RxPromise;

export default RxPromise;
