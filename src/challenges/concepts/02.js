const users = [
  { name: "Diego", age: 23, company: "Compasso" },
  { name: "Gabriel", age: 15, company: "Compasso" },
  { name: "Lucas", age: 30, company: "Diveo" },
];

// 2.1 - An array only with ages;

let ageArray = users.map((user) => user.age);
console.log("2.1", ageArray);

// 2.2 - Users with age higher than 18 and working at Compasso;
let filteredArray = users.filter((user) => {
  return user.age > 18 && user.company === "Compasso";
});

console.log("2.2", filteredArray);

// 2.3 - Users that works at Google;
let googlers = users.find((user) => {
  return user.company === "Google";
});

console.log("2.3", googlers);

// 2.4 - Multiply users' age by 2 and filter those below 50:
let notFifties = users
  .map((user) => ({ ...user, age: user.age * 2 }))
  .filter((user) => user.age < 50);

console.log("2.4", notFifties);
