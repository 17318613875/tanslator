import { initRetry } from "./__help";
jest.setTimeout(10 * 1000);

describe("Test Retry", () => {
  it("Retry -1 faild   & account = 0", () => {
    const target = initRetry();
    expect.assertions(1);
    return target.retry(-1).catch((num) => expect(num.toString()).toMatch("0"));
  });
  it("Retry  0 faild   & account = 0", () => {
    const target = initRetry();
    expect.assertions(1);
    return target.retry(0).catch((num) => expect(num.toString()).toMatch("0"));
  });
  it("Retry  2 faild   & account = 2", () => {
    const target = initRetry();
    expect.assertions(1);
    return target.retry(2).catch((num) => expect(num.toString()).toMatch("2"));
  });
  it("Retry  3 success & account = 3", () => {
    const target = initRetry();
    return target.retry(3).then((num) => expect(num).toEqual(3));
  });
});
