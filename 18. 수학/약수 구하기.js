const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [n, k] = fs.readFileSync(path, 'utf-8').trim().split(' ').map(Number);
const ans = [];

for (let i = 1; i <= n; i++) {
  if (n % i === 0) ans.push(i);
}

console.log(ans[k - 1] || 0);
