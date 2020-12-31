import { camelize } from "./format";
/**
 * @description 重写 Element.prototype.setAttribute
 */
function initSetAttribute() {
  const setAttribute = Element.prototype.setAttribute;
  Element.prototype.setAttribute = function SetAttribute(name, value) {
    let valueStr = value;
    const valueType = Object.prototype.toString.call(value);
    switch (valueType) {
      case "[object Object]":
      case "[object Array]":
        valueStr = JSON.stringify(value);
        break;
      case "[object String]":
      case "[object Number]":
      case "[object Boolean]":
      case "[object Undefined]":
      case "[object Null]":
        valueStr = value;
        break;
      default:
        console.error(new Error(`HTML标签属性不支持 ${valueType}`));
        break;
    }
    return setAttribute.call(this, camelize(name), valueStr);
  };
}

/**
 * @description 重写 Element.prototype.getAttribute
 */
function initGetAttribute() {
  const getAttribute = Element.prototype.getAttribute;
  Element.prototype.getAttribute = function GetAttribute(name) {
    const value = getAttribute.call(this, name);
    if (!value || value === "true" || value === "false") {
      return value !== "false";
    }
    if (value === "undefined") {
      return undefined;
    }
    if (value === "NaN") {
      return NaN;
    }
    try {
      const target = JSON.parse(value);
      return target;
    } catch (error) {
      return value;
    }
  };
}

export function init() {
  if (Element) {
    initSetAttribute();
    initGetAttribute();
  }
}
