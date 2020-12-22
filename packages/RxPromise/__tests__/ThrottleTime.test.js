import { initThrottleTime } from "./__help";
jest.setTimeout(10 * 1000);

describe("Test DebounceTime", () => {
  beforeEach(() => jest.useFakeTimers());
  it("DebounceTime  0 & return 0", () => {
    const target = initThrottleTime(0);
    return target.then((num) => expect(num).toEqual(0));
  });
  // it("DebounceTime  1s and setInterval with 0.5 & return 0", async () => {
  //   let account = 10;
  //   const callback = jest.fn();
  //   const interval = setInterval(() => {
  //     if (account > 0) {
  //       initThrottleTime(1).then(() => {
  //         callback();
  //       });
  //       account--;
  //     } else {
  //       clearInterval(interval);
  //     }
  //   }, 0.5 * 1000);
  //   expect(callback).not.toBeCalled();
  //   jest.advanceTimersByTime(10 * 0.5 * 1000);
  //   expect(callback).toBeCalled();
  //   expect(callback).toHaveBeenCalledTimes((10 * 0.5) / 1);
  // });
});
