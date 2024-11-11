const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const n = Number(fs.readFileSync(path).toString());

for (let i = 1; i < n; i++) {
  console.log(' '.repeat(n - i) + '*'.repeat(i * 2 - 1));
}
for (let i = 0; i < n; i++) {
  console.log(' '.repeat(i) + '*'.repeat((n - i) * 2 - 1));
}
