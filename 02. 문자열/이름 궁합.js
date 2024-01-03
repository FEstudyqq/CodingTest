const fs = require('fs');
const [myName, herName] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const numberOfStrokes = {
  A: 3,
  B: 2,
  C: 1,
  D: 2,
  E: 3,
  F: 3,
  G: 2,
  H: 3,
  I: 3,
  J: 2,
  K: 2,
  L: 1,
  M: 2,
  N: 2,
  O: 1,
  P: 2,
  Q: 2,
  R: 2,
  S: 1,
  T: 2,
  U: 1,
  V: 1,
  W: 1,
  X: 2,
  Y: 2,
  Z: 1,
};

let cur = getInitialStrokes(myName, herName);
let result = getResult(cur, myName.length);
console.log(result);

function getResult(cur) {
  while (cur.length > 2) {
    let next = [];
    for (let j = 0; j < cur.length - 1; j++) {
      const sum = cur[j] + cur[j + 1];
      next.push(sum % 10);
    }
    cur = next;
  }

  if (cur.length === 1) {
    cur.unshift(0);
  }

  return cur.join('');
}

function getInitialStrokes(myName, herName) {
  const initialStrokes = [];

  Array.from(myName).map((char, idx) => {
    initialStrokes.push(numberOfStrokes[char]);
    initialStrokes.push(numberOfStrokes[herName[idx]]);
  });

  return initialStrokes;
}
