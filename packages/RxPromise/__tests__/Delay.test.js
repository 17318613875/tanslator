import { initDelay } from "./__help";
jest.useFakeTimers();

describe("Test Delay", () => {
  it("Delay -1 & return a pending promise", async () => {
    const callback = jest.fn();
    const target = initDelay(callback);
    target.delay(-1).then((cf) => cf());
    jest.advanceTimersByTime(1 * 1000);
    expect(callback).not.toBeCalled();
  });
  it("Delay  0 & return 0", () => {
    const target = initDelay(0);
    return target.retry(0).then((num) => expect(num).toEqual(0));
  });
  it("Delay  2 & 2 second callBack", () => {
    const callback = jest.fn();
    const target = initDelay(callback);
    target.delay(2).then((cf) => cf());
    expect(callback).not.toBeCalled();
    jest.advanceTimersByTime(1000);
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 2000);
  });
});
