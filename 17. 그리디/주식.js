const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = fs.readFileSync(path).toString().trim().split('\r\n');
let t = Number(inputs.shift());

let front = 0;

function getMaxProfits(n, stock) {
  let profit = 0;

  let max = 0;
  for (let i = n - 1; i >= 0; i--) {
    if (max < stock[i]) max = stock[i];
    else profit += max - stock[i];
  }

  return profit;
}

while (t > 0) {
  const n = Number(inputs[front++]);
  const stock = inputs[front++].split(' ').map(Number);

  const profit = getMaxProfits(n, stock);
  console.log(profit);
  t -= 1;
}
