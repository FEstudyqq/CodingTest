const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const n = Number(fs.readFileSync(path));

const db = new Array(1001).fill(0);
db[1] = 1;
db[2] = 3;

for (let i = 3; i <= n; i++) {
  db[i] = (db[i - 1] + 2 * db[i - 2]) % 10007;
}
console.log(db[n]);
