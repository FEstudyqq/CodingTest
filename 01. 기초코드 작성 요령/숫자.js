// const fs = require('fs');
// const input = fs
//   .readFileSync('Wiki\\input.txt')
//   .toString()
//   .trim()
//   .split(' ')
//   .map((it) => BigInt(it));

// let a, b;

// if (input[0] < input[1]) {
//   a = input[0];
//   b = input[1];
// } else {
//   a = input[1];
//   b = input[0];
// }

// const answer = [];
// for (let i = a + 1n; i < b; i++) answer.push(i.toString());

// if (a !== b) {
//   console.log((b - a - 1n).toString());
//   console.log(...answer);
// } else {
//   console.log(0);
// }

const input = require('fs')
  .readFileSync('Wiki\\input.txt')
  .toString()
  .split(' ');

const [a, b] = input.map(Number).sort((a, b) => a - b);
const abs = Math.abs(b - a);
console.log(a, b);
const arr = Array.from({ length: abs + 1 }, (_, i) => i + a + 1);
console.log(abs - 1);
console.log(arr.join(' '));
