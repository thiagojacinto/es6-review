// REST

const arr = [1, 2, 3, 4, 5, 6];

const [x, ...y] = arr;
console.group("5.1 - array destructuring");
console.log(x);
console.log(y);
console.groupEnd();

const soma = (...args) => {
  return args.reduce((total, item) => total + item);
};

console.group("5.1 - sum function");
console.log(soma(1, 2, 3, 4, 5, 6));
console.log(soma(1, 2));
console.groupEnd();

const usuario = {
  nome: "Diego",
  idade: 23,
  endereco: { cidade: "Rio do Sul", uf: "SC", pais: "Brasil" },
};

const usuario2 = {
  ...usuario,
  nome: "Gabriel",
};

const usuario3 = {
  ...usuario,
  endereco: {
    ...usuario.endereco,
    cidade: "Lontras",
  },
};

console.group("5.2 - SPREAD");
console.log("Original object: ", usuario);
console.log("Changing name: ", usuario2);
console.log("Changing city: ", usuario3);
console.groupEnd();
