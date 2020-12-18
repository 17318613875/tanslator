# `RxPromise`

> 魔改 Promise 使其支持 `.retry` `.retryWhen` 链式调用

## Features

- **重试次数** `retry` : 当源头 Promise 触发了 **_reject_** , 该方法不会继续传播失败而是重新执行源头直到达到最大重试次数(_由数字参数指定_).

---

- **重试函数** `retryWhen` : 当源头 Promise 触发了 **_resolve_** , 该方法会将 resolve 的结果为参数传入计算(_支持异步_)直到计算的结果符合预期才继续传播. **_注意: 该方法不会截断源头和计算的错误异常,而是直接终止重试并将错误继续传递._**

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
  .retry(3)
  .retryWhen(resolveValue => retryFunction)
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
  .retryWhen(resolveValue => {
    // retry method
    if (flag) {
      return true
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
