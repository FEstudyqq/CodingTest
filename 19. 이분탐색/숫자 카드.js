const fs = require('fs');
const inputs = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((line) => line.split(' ').map(Number));

const cardsOwned = new Set(inputs[1]);
const cardsToCheck = inputs[3];

console.log(cardsToCheck.map((num) => (cardsOwned.has(num) ? 1 : 0)).join(' '));
