"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var users = [{
  name: "Diego",
  age: 23,
  company: "Compasso"
}, {
  name: "Gabriel",
  age: 15,
  company: "Compasso"
}, {
  name: "Lucas",
  age: 30,
  company: "Diveo"
}]; // 2.1 - An array only with ages;

var ageArray = users.map(function (user) {
  return user.age;
});
console.log("2.1", ageArray); // 2.2 - Users with age higher than 18 and working at Compasso;

var filteredArray = users.filter(function (user) {
  return user.age > 18 && user.company === "Compasso";
});
console.log("2.2", filteredArray); // 2.3 - Users that works at Google;

var googlers = users.find(function (user) {
  return user.company === "Google";
});
console.log("2.3", googlers); // 2.4 - Multiply users' age by 2 and filter those below 50:

var notFifties = users.map(function (user) {
  return _objectSpread(_objectSpread({}, user), {}, {
    age: user.age * 2
  });
}).filter(function (user) {
  return user.age < 50;
});
console.log("2.4", notFifties);
