"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * REST OPERATOR
 */
var multiply = function multiply() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return a * b;
};

console.group(["Multiply simple version with defaut values", multiply(), "Multiply simple version 4 * 1", multiply(4), "Multiply simple version 4 * 5", multiply(4, 5)]);
/**
 * Using REST to handle function parameters.
 */

var multiply2 = function multiply2() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  for (var _len = arguments.length, params = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    params[_key - 2] = arguments[_key];
  }

  if (params) {
    return params.reduce(function (total, item) {
      return total * item;
    }, a * b);
  } else {
    return a * b;
  }
};

console.group(["Multiply simple version with defaut values", multiply2(), "Multiply simple version 4 * 1", multiply2(4), "Multiply simple version 4 * 5", multiply2(4, 5), "Multiply simple version 4 * 5 * [1,3,5]", multiply2(4, 5, 1, 3, 5)]);
/**
 * SPREAD OPERATOR
 */

var Address = {
  street: "Sir. James Arthur Baldwin",
  number: 12,
  state: "CA",
  zip: 1938592
};
console.table(Address);

var newAddress = _objectSpread(_objectSpread({}, Address), {}, {
  street: "Fela Kuti",
  zip: 4242424
});

console.table(newAddress);
