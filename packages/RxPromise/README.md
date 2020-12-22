# `RxPromise`

> 魔改 Promise 使其支持 `.retry` `.retryWhen` 链式调用

## Features

- **重试次数** `retry` : 当源头 Promise 触发了 **_reject_** , 该方法不会继续传播失败而是重新执行源头直到达到最大重试次数(_由数字参数指定_).**_注意: 当参数为负数时,表示一直重试直到成功._**

---

- **重试函数** `retryWhen` : 当源头 Promise 触发了 **_resolve_** , 该方法会将 resolve 的结果为参数传入计算(_支持异步_)直到计算的结果符合预期才继续传播. **_注意: 该方法不会截断源头和计算的错误异常,而是直接终止重试并将错误继续传递._**

---

- **延时** `delay` : 根据给定时间(单位: 秒)延迟执行异步操作. **_注意: 当参数为负数时,将一直处于 pengding._**

---

- **防抖** `debounceTime` : 取消在两次(延时)执行之间小于指定时间的异步操作. **_注意: 当参数非正数,立即执行异步操作._**

---

- **节流** `throttleTime` : 当指定的持续时间经过后立即执行异步操作. **_注意: 当参数非正数,立即执行异步操作._**

## Usage

```shell
# install
yarn add rx-promise
# or
npm install rx-promise
```

```JavaScript
const RxPromise = require('RxPromise');
// or
import RxPromise from 'RxPromise';
// 根据业务场景是否需要替换Promise
Promise = RxPromise;

const target = new RxPromise((resolve, reject) => {
  // code
});

target
  .retry(-1) // 执行直到被resolve
  .retryWhen(async resolveValue => /* 判断 */) // 继续执行满足条件
  .then((value) => {
    // resolve value
  })
  .catch((err) => {
    // catch err code
  });
```

## Example

> `.retry`

```JavaScript
const target = new RxPromise((resolve, reject) => {
  // code
});
target
  .retry(3)
  .then((value) => {
    // resolve value
  })
  .catch((err) => {
    // catch err code
  });
```

> `.retryWhen`

```JavaScript
const target = new RxPromise((resolve, reject) => {
  // code
});
target
  .retryWhen(async resolveValue => {
    // retry method
    if (flag) {
      return await TrueFn
    } else {
      return false
    }
  })
  .then((value) => {
    // resolve value
  })
  .catch((err) => {
    // catch err code
  });
```

> `.delay`

```JavaScript
const target = new RxPromise((resolve, reject) => {
  // code
});
target
  .delay(0)
  .delay(1)
  .delay(2)
  .then((value) => {
    // delay time = 0 + 1 + 2 second
    // resolve value
  })
  .catch((err) => {
    // catch err code
  });
```

> `.debounceTime`

```JavaScript
const target = new RxPromise((resolve, reject) => {
  // code
});
target
  .debounceTime(0.3) // 0.3 second
  .then((value) => {
    // resolve value
  })
  .catch((err) => {
    // catch err code
  });
```

> `.throttleTime`

```JavaScript
const target = new RxPromise((resolve, reject) => {
  // code
});
target
  .throttleTime(1) // 1 second
  .then((value) => {
    // resolve value
  })
  .catch((err) => {
    // catch err code
  });
```
