import { initRetryWhen } from "./__help";
jest.setTimeout(10 * 1000);

describe("Test RetryWhen", () => {
  it("RetryWhen account >= 2 success & account = 2", () => {
    const target = initRetryWhen();
    expect.assertions(1);
    return target
      .retryWhen((account) => account >= 2)
      .then((account) => {
        expect(account.toString()).toMatch("2");
      });
  });
});
