const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let x = Number(fs.readFileSync(path));
let line = 1;

while (x > line) {
  x -= line;
  line += 1;
}

let a = x;
let b = line - x + 1;

if (line % 2 === 0) console.log(`${a}/${b}`);
else console.log(`${b}/${a}`);
