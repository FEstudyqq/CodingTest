const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = fs.readFileSync(path).toString().trim();

let ans = 0;
for (const input of inputs) {
  if ('PQRS'.includes(input)) {
    ans += 8;
  } else if ('TUV'.includes(input)) {
    ans += 9;
  } else if ('WYXZ'.includes(input)) {
    ans += 10;
  } else {
    const alphaNum = Math.floor((input.charCodeAt() - 65) / 3) + 3;
    ans += alphaNum;
  }
}

console.log(ans);
