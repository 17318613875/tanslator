export function isDef(v) {
  return v !== undefined && v !== null;
}
export function isUndef(v) {
  return v === undefined || v === null;
}
export function isTrue(v) {
  return v === true;
}
export function isFalse(v) {
  return v === false;
}
export const NUMB_ERROR_TEXT = "Expected a number";
export const StackRgex = /[\w|\:|\.|\@]*\d+\:\d+/g;
export function FindStackIndex(stack = "") {
  const stackFile = (stack.match(StackRgex) || []).join(";");
  let index = this.stackPool.findIndex((item) => item[0] === stackFile);
  if (index < 0) {
    index = this.stackPool.push([stackFile, 0, undefined]) - 1;
  }
  return index;
}
export default {};
