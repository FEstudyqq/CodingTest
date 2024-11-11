const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const n = Number(fs.readFileSync(path));
const db = new Array(n).fill(0);
// 0 개수 , 1 개수
db[1] = [0n, 1n];

for (let i = 2; i <= n; i++) {
  const [cnt0, cnt1] = db[i - 1];
  db[i] = [cnt0 + cnt1, cnt0];
}

console.log((db[n][0] + db[n][1]).toString());
