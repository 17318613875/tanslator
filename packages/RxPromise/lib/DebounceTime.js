import { NUMB_ERROR_TEXT } from "./__help";

function DebounceTime(second = 0) {
  if (typeof second != "number") {
    throw new Error(NUMB_ERROR_TEXT);
  }
  if (second <= 0) {
    return this;
  } else {
    return this.delay(second);
  }
}

export default DebounceTime;
