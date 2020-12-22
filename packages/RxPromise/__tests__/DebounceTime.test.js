import { initDebounceTime } from "./__help";

describe("Test DebounceTime", () => {
  beforeEach(() => jest.useFakeTimers());
  it("DebounceTime  0 & return 0", () => {
    const target = initDebounceTime(0);
    return target.then((num) => expect(num).toEqual(0));
  });
});
