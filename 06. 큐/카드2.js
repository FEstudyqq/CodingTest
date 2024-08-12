const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const n = Number(fs.readFileSync(path));

const cards = Array.from({ length: n }, (_, i) => i + 1);

let front = 0;
let cnt = 0;

while (cnt !== n - 1) {
  cards[front++] = 0;
  cnt += 1;
  cards.push(cards[front]);
  cards[front++] = 0;
}

console.log(cards[cards.length - 1]);
