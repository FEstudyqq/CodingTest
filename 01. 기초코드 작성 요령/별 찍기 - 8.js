const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const n = Number(fs.readFileSync(path).toString());

for (let i = 1; i <= n; i++) {
  console.log('*'.repeat(i) + ' '.repeat((n - i) * 2) + '*'.repeat(i));
}
for (let i = n - 1; i > 0; i--) {
  console.log('*'.repeat(i) + ' '.repeat((n - i) * 2) + '*'.repeat(i));
}
