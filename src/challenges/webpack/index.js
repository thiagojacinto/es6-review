import { idade } from "./01";
import { idade as age } from "./01";
import ClassUsuario from "./01";

export const showSolution = (message = "Solutions to webpack's challenge.") => {
  console.group(message);
  console.group("1.1");
  ClassUsuario.info();
  console.groupEnd();

  console.group("1.2");
  console.log("Idade:", idade);
  console.groupEnd();

  console.group("1.3");
  console.log("Idade as Age:", age);
  console.groupEnd();
  console.groupEnd();
};
