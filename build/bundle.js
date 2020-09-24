"use strict";

var usuario = "Diego";
var idade = 23;
console.group("6 - TEMPLATE LITERALS");
console.log("O usuário " + usuario + " possui " + idade + " anos");
console.log("O usu\xE1rio ".concat(usuario, " possui ").concat(idade, " anos"));
console.groupEnd(); // 7 - Object short syntax

var nome = "Diego";
var user = {
  nome: nome,
  idade: idade,
  cidade: "Rio do Sul"
};
var user2 = {
  nome: nome,
  idade: idade,
  cidade: "Rio do Sul"
};
console.group("7 - OBJECT SHORT SYNTAX");
console.log(user);
console.log(user2);
console.groupEnd();
