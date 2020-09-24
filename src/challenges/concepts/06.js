const usuario = "Diego";
const idade = 23;

console.group("6 - TEMPLATE LITERALS");
console.log("O usuário " + usuario + " possui " + idade + " anos");
console.log(`O usuário ${usuario} possui ${idade} anos`);
console.groupEnd();

// 7 - Object short syntax
const nome = "Diego";

const user = { nome: nome, idade: idade, cidade: "Rio do Sul" };

const user2 = { nome, idade, cidade: "Rio do Sul" };

console.group("7 - OBJECT SHORT SYNTAX");
console.log(user);
console.log(user2);
console.groupEnd();
