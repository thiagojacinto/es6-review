/**
 * DESTRUCTURING
 */

// 4.1
const empresa = {
  nome: "Rocketseat",
  endereco: { cidade: "Rio do Sul", estado: "SC" },
};

const { nome } = empresa;
const { cidade, estado } = empresa.endereco;

console.group("4.1");
console.log(nome);
console.log(cidade);
console.log(estado);
console.groupEnd();

// 4.2
function mostraInfo(usuario) {
  return `${usuario.nome} tem ${usuario.idade} anos.`;
}
mostraInfo({ nome: "Diego", idade: 23 });

const arrowMostraInfo = ({ nome, idade }) => {
  return `${nome} tem ${idade} anos.`;
};

const example = { nome: "Diego", idade: 23 };
console.group("4.2");
console.log(mostraInfo(example));
console.log(arrowMostraInfo(example));
console.assert(mostraInfo(example) === arrowMostraInfo(example));
console.groupEnd();
