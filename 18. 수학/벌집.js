const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const inputs = fs.readFileSync(path).toString();
const n = Number(inputs);

let room = 1;
let cnt = 1;

while (n > room) {
  room += cnt * 6;
  cnt += 1;
}

console.log(cnt);
