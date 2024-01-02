const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [A, B] = fs.readFileSync(path).toString().trim().split('\r\n');

const STROKES = {
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

function getCombinedName(A, B) {
  const combinedName = [];

  for (let i = 0; i < A.length; i++) {
    combinedName.push(A[i]);
    combinedName.push(B[i]);
  }

  return combinedName;
}

function getNameStroke(combinedName) {
  return combinedName.map((it) => STROKES[it]);
}

function getPercent(nameStroke) {
  const percent = [];

  if (nameStroke.length === 2) return nameStroke;

  for (i = 0; i < nameStroke.length - 1; i++) {
    percent.push((nameStroke[i] + nameStroke[i + 1]) % 10);
  }

  return getPercent(percent);
}

const combinedName = getCombinedName(A, B);
const nameStroke = getNameStroke(combinedName);
const percent = getPercent(nameStroke);

const result = percent
  .map((it) => it.toString())
  .map((it) => it.slice(-1))
  .join('');

console.log(result);
