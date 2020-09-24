"use strict";

// Arrow function conversion
// 3.1
var arr = [1, 2, 3, 4, 5];
var ex31 = arr.map(function (item) {
  return item + 10;
});
var solution31 = arr.map(function (item) {
  return item + 10;
});
console.log("Solution 3.1:", solution31, ex31);

var equalsArrays = function equalsArrays() {
  var array1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var array2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return array1.length === array2.length && array1.every(function (item, index) {
    return item === array2[index];
  });
};

console.assert(equalsArrays(ex31, solution31)); // 3.2

var usuario = {
  nome: "Diego",
  idade: 23
};

function mostraIdade(usuario) {
  return usuario.idade;
}

mostraIdade(usuario);

var showAge = function showAge(usuario) {
  return usuario.idade;
};

console.assert(mostraIdade(usuario) === showAge(usuario)); // 3.3

var nome = "Diego";
var idade = 23;

function mostraUsuario() {
  var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Diego";
  var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;
  return {
    nome: nome,
    idade: idade
  };
}

mostraUsuario(nome, idade);
mostraUsuario(nome);

var showUser = function showUser() {
  var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Diego";
  var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;
  return {
    nome: nome,
    idade: idade
  };
};

console.assert(showUser(nome, idade), mostraUsuario(nome, idade));
console.assert(showUser(nome), mostraUsuario(nome)); // 3.4

var promise = function promise() {
  return new Promise(function (resolve, reject) {
    return resolve();
  });
};

var arrowPromise = function arrowPromise() {
  return new Promise(function (resolve, reject) {
    return resolve();
  });
};
