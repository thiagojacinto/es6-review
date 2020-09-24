// Arrow function conversion

// 3.1
const arr = [1, 2, 3, 4, 5];
const ex31 = arr.map(function (item) {
  return item + 10;
});

const solution31 = arr.map((item) => item + 10);
console.log("Solution 3.1:", solution31, ex31);

const equalsArrays = (array1 = [], array2 = []) => {
  return (
    array1.length === array2.length &&
    array1.every((item, index) => item === array2[index])
  );
};

console.assert(equalsArrays(ex31, solution31));

// 3.2

const usuario = { nome: "Diego", idade: 23 };
function mostraIdade(usuario) {
  return usuario.idade;
}
mostraIdade(usuario);

const showAge = (usuario) => usuario.idade;
console.assert(mostraIdade(usuario) === showAge(usuario));

// 3.3

const nome = "Diego";
const idade = 23;
function mostraUsuario(nome = "Diego", idade = 18) {
  return { nome, idade };
}
mostraUsuario(nome, idade);
mostraUsuario(nome);

const showUser = (nome = "Diego", idade = 18) => {
  return { nome, idade };
};

console.assert(showUser(nome, idade), mostraUsuario(nome, idade));
console.assert(showUser(nome), mostraUsuario(nome));

// 3.4
const promise = function () {
  return new Promise(function (resolve, reject) {
    return resolve();
  });
};

const arrowPromise = () => {
  return new Promise(function (resolve, reject) {
    return resolve();
  });
};
