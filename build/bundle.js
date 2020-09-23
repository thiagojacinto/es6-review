"use strict";

var array = [1, 2, 3, 1, 2, 8, 6, 5];
/**
 * MAP
 * Applies operations with every item of the array.
 */

/**
 * Maps an array just add item's value to its index number.
 */

var fromMapArray = array.map(function (item, index) {
  return item + index;
});
console.log("> Map: ");
console.log(fromMapArray);
/**
 * REDUCE
 * Loops and performes operations within array's item.
 */

/**
 * Reducing the array by division, with initial value of 100,000
 */

var fromReduceArray = array.reduce(function (total, item) {
  return total / item;
}, 100000);
console.log("> Reduce: ");
console.log(fromReduceArray);
/**
 * FILTER
 * Choose from all items those that meets some criterea.
 */

/**
 * Filters array in search of even indexes.
 */

var fromFilterArray = array.filter(function (item, index) {
  return index % 2 !== 0;
});
console.log("> Filter: ");
console.log(fromFilterArray);
/**
 * FIND
 * Loops the array in search of a true
 */

/**
 * Search inside the array that item that has index number equals to its value.
 */

var fromFindArray = array.find(function (item, index) {
  return index === item;
});
console.log("> Find: ");
console.log(fromFindArray);
