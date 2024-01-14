const fs = require('fs');
const N = Number(fs.readFileSync('/dev/stdin').toString().trim());

const cards = Array.from({ length: N }).map((_, i) => i + 1);
let start = 0;
let popTime = true; // pop할 차례면 true, pop&push할 차례면 false

while (cards.length - start > 1) {
  popTime ? popCard() : popAndPushCard();
  popTime = !popTime;
}

function popCard() {
  start++;
}

function popAndPushCard() {
  cards.push(cards[start]);
  start++;
}

console.log(cards);
console.log(cards[cards.length - 1]);
