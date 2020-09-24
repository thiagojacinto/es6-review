/**
 * REST OPERATOR
 */

const multiply = (a = 1, b = 1) => {
  return a * b;
};

console.group([
  "Multiply simple version with defaut values",
  multiply(),
  "Multiply simple version 4 * 1",
  multiply(4),
  "Multiply simple version 4 * 5",
  multiply(4, 5),
]);

/**
 * Using REST to handle function parameters.
 */
const multiply2 = (a = 1, b = 1, ...params) => {
  if (params) {
    return params.reduce((total, item) => {
      return total * item;
    }, a * b);
  } else {
    return a * b;
  }
};

console.group([
  "Multiply simple version with defaut values",
  multiply2(),
  "Multiply simple version 4 * 1",
  multiply2(4),
  "Multiply simple version 4 * 5",
  multiply2(4, 5),
  "Multiply simple version 4 * 5 * [1,3,5]",
  multiply2(4, 5, 1, 3, 5),
]);

/**
 * SPREAD OPERATOR
 */

const Address = {
  street: "Sir. James Arthur Baldwin",
  number: 12,
  state: "CA",
  zip: 1938592,
};

console.table(Address);

let newAddress = {
  ...Address,
  street: "Fela Kuti",
  zip: 4242424,
};

console.table(newAddress);
