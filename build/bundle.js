"use strict";

/**
 * DESTRUCTURING
 */
// 4.1
var empresa = {
  nome: "Rocketseat",
  endereco: {
    cidade: "Rio do Sul",
    estado: "SC"
  }
};
var nome = empresa.nome;
var _empresa$endereco = empresa.endereco,
    cidade = _empresa$endereco.cidade,
    estado = _empresa$endereco.estado;
console.group("4.1");
console.log(nome);
console.log(cidade);
console.log(estado);
console.groupEnd(); // 4.2

function mostraInfo(usuario) {
  return "".concat(usuario.nome, " tem ").concat(usuario.idade, " anos.");
}

mostraInfo({
  nome: "Diego",
  idade: 23
});

var arrowMostraInfo = function arrowMostraInfo(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  return "".concat(nome, " tem ").concat(idade, " anos.");
};

var example = {
  nome: "Diego",
  idade: 23
};
console.group("4.2");
console.log(mostraInfo(example));
console.log(arrowMostraInfo(example));
console.assert(mostraInfo(example) === arrowMostraInfo(example));
console.groupEnd();
