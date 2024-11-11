const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
let n = Number(fs.readFileSync(path));

let ans = '';
while (true) {
  if (n === 0) {
    ans += 'int';
    break;
  } else {
    ans += 'long';
    n -= 4;
  }
  ans += ' ';
}

console.log(ans);
