import {
  onePerSecond,
  asyncOnePerSecond,
} from "./challenges/async-await/index";

onePerSecond();
asyncOnePerSecond();

import {
  getUserFromGithub,
  asyncGetUserFromGithub,
} from "./challenges/async-await/index";

console.group("1.2 - Axios GET");
getUserFromGithub();
asyncGetUserFromGithub();
console.groupEnd();