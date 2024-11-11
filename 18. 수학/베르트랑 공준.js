const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = fs.readFileSync(path).toString().trim().split('\n').map(Number);

const size = 123457 * 2;
const map = Array(size).fill(false);

for (let i = 2; i < Math.sqrt(size, 2); i++) {
  if (map[i]) continue;

  for (let j = i * i; j < size; j += i) {
    map[j] = true;
  }
}

for (const input of inputs.slice(0, -1)) {
  let cnt = 0;

  for (let i = input + 1; i <= input * 2; i++) {
    if (!map[i]) cnt += 1;
  }
  console.log(cnt);
}
