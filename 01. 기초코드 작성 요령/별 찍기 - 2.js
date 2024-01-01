const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const n = Number(fs.readFileSync(path).toString());

for (let i = 1; i <= n; i++) {
  console.log(' '.repeat(n - i) + '*'.repeat(i));
}

// for (let j = n - 1; j > i; j--) {
//   process.stdout.write(' ');
// }
// for (let j = 0; j <= i; j++) {
//   process.stdout.write('*');
// }
// console.log();
