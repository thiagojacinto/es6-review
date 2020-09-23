import {
  Admin,
  User,
} from "/Users/thiagojacinto/Documents/Dev/github/es6-review/src/challenges/concepts/01";

const User1 = new User("email@test.com", "anysecretpwd");
const Adm1 = new Admin("email@test.com", "anysecretpwd");

console.log(User1.isAdmin());
console.log(Adm1.isAdmin());
