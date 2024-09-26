const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [n, ...string] = fs.readFileSync(path).toString().trim().split('\n');

for (const s of string) {
  console.log(s[0] + s.at(-1));
}
