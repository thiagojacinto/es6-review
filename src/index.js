import {
  onePerSecond,
  asyncOnePerSecond,
} from "./challenges/async-await/index";

console.group("1.1 - Regular Promise");
onePerSecond();
asyncOnePerSecond();
console.groupEnd();

import {
  getUserFromGithub,
  asyncGetUserFromGithub,
} from "./challenges/async-await/index";

console.group("1.2 - Axios GET");
getUserFromGithub();
asyncGetUserFromGithub();
console.groupEnd();

import { Github } from "./challenges/async-await/index";

console.group("1.3 - Class static async");

Github.getRepositories();
Github.getRepositories("rocketseat/dslkvmskv");

Github.asyncGetRepositories();
Github.asyncGetRepositories("rocketseat/dslkvmskv");

console.groupEnd();

import {
  buscaUsuario,
  asyncBuscaUsuario,
} from "./challenges/async-await/index";

console.group("1.4 - Arrow function async/await");

buscaUsuario("diego3g");
asyncBuscaUsuario("diego3g");
console.groupEnd();