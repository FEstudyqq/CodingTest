const fs = require("fs");

/**
 * @param {[number, number, number]} testCase
 */
function solve(testCase) {
  const [L, P, V] = testCase;

  const first = Math.floor(V / P) * L;
  const second = V % P >= L ? L : V % P;

  return first + second;
}

const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .slice(0, -1)
  .map((line) => line.split(" ").map((num) => Number.parseInt(num)));

input.forEach((testCase, index) =>
  console.log(`Case ${index + 1}: ${solve(testCase)}`),
);
