import { sum as FunctionSum, showInfo } from "./ImportExport";
import isBlack from "./ImportExport";
import { showSolution as webpackChallengeSolution } from "./challenges/webpack/index";

console.log("Is orange == black?", isBlack("orange"));

console.log("2 + 2 =", FunctionSum(2, 2));
console.log("10 + 15 + 23 + 41 =", FunctionSum(10, 15, 23, 41));
console.log("13 + 55 + 10 =", FunctionSum(13, 55, 10));

showInfo();

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve(showInfo()), 1500);
});

const myAsyncFunction = async () => {
  await myPromise();
};

myAsyncFunction();

webpackChallengeSolution();