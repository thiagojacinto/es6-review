export const showInfo = () => {
  console.table({
    id: 1,
    name: "Thiago",
    stage: "developing",
    workAt: "QA Testing and Automation",
    since: 2020,
    ready: true,
  });
};

export function sum(...args) {
  return args.reduce((total, value) => total + value);
}

const isBlack = (color = "") => {
  return color === "black";
};

export default isBlack;
