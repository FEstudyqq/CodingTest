const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, K] = input.shift().split(' ').map(Number);
const coins = input.map((coin) => Number(coin)).reverse();

let cnt = 0;
let value = K;
for (let coin of coins) {
  if (value >= coin) {
    cnt += Math.floor(value / coin);
    value %= coin;
  }
}

console.log(cnt);
