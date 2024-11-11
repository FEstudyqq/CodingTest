const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [head, tail] = fs.readFileSync(path).toString().trim().split('\n');
const n = Number(head);
const a = tail.split(' ').map(Number);
const db = tail.split(' ').map((it) => 1);

for (let i = 1; i < n; i++) {
  for (let j = 0; j < i; j++) {
    if (a[i] < a[j]) {
      db[i] = Math.max(db[j] + 1, db[i]);
    }
  }
}

console.log(Math.max(...db));
