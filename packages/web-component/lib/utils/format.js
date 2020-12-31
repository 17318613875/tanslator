/**
 * @description 连字符转驼峰
 * @param {String} str
 */
export function camelize(str = "") {
  const camelizeRE = /\W(\w)/g;
  return str.replace(camelizeRE, (match, p1) => (p1 ? p1.toUpperCase() : ""));
}

/**
 * @description 驼峰转连字符
 * @param {String} str
 * @param {String} symbol 符号 etc. "-" "@" "_"
 */
export function hyphenate(str = "", symbol = "-") {
  const hyphenateRE = /\B([A-Z])/g;
  return str.replace(hyphenateRE, `${symbol}$1`).toLowerCase();
}
