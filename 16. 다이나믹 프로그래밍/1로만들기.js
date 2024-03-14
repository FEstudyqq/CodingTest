const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const n = Number(fs.readFileSync(path));

const db = Array.from({ length: n + 1 }, (v) => 0);

for (let i = 2; i <= n; i++) {
  db[i] = db[i - 1] + 1;
  if (i % 3 === 0) db[i] = Math.min(db[i], db[i / 3] + 1);
  if (i % 2 === 0) db[i] = Math.min(db[i], db[i / 2] + 1);
}

console.log(db[n]);
