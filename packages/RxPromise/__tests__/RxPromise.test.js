import RxPromise from "../lib/RxPromise";
import { initRetry } from "./__help";
jest.setTimeout(10 * 1000);
describe("Load RxPromise", () => {
  it("Load Success", () => {
    const flag = RxPromise !== undefined;
    expect(flag).toEqual(true);
  });
  it("Is RxPromise Extends Promise", () => {
    const flag = Object.getPrototypeOf(RxPromise) === Promise;
    expect(flag).toEqual(true);
  });
  it("Retry 3 Times and RetryWhen account >= 4 success & account = 4", () => {
    const target = initRetry();
    expect.assertions(1);
    return target
      .retry(3)
      .retryWhen((account) => account >= 4)
      .then((account) => {
        expect(account.toString()).toMatch("4");
      });
  });
});
