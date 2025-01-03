const fs = require('fs');
const n = Number(fs.readFileSync('../input.txt').toString().trim());

const numbers = []; // 소수
for (let i = 2; i <= n; i++) {
  if (isPrime(i)) numbers.push(i);
}

function isPrime(num) {
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

let l = 0;
let r = 0;
let sum = numbers[l];
let answer = 0;

while (r < numbers.length) {
  if (sum === n) answer += 1;

  if (l === r || sum < n) {
    r += 1;
    sum += numbers[r];
  } else {
    sum -= numbers[l];
    l += 1;
  }
}

console.log(answer);
