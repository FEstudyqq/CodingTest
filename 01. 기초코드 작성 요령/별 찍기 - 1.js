const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const n = Number(fs.readFileSync(path).toString());

for (let i = 0; i < n; i++) {
  for (let j = 0; j <= i; j++) {
    process.stdout.write('*');
  }
  console.log();
}
