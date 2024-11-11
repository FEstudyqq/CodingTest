const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [, ...inputs] = fs.readFileSync(path).toString().trim().split('\n');

const db = new Array(41).fill(0);

db[0] = [1, 0];
db[1] = [0, 1];

function fibo(n) {
  if (db[n] !== 0) {
    return db[n];
  } else {
    const [left0, left1] = fibo(n - 1);
    const [right0, right1] = fibo(n - 2);
    db[n] = [left0 + right0, left1 + right1];
    return db[n];
  }
}

for (const n of inputs.map((it) => Number(it))) {
  fibo(n);
  console.log(...db[n]);
}
