const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\r\n')
  .map((it) => it.split(' ').map(Number));

const [n, m] = inputs[0];
const numbers = inputs[1].sort((a, b) => a - b);
const visited = Array.from({ length: numbers.length }).map(() => false);

let ans = '';

const bt = (selected, start) => {
  if (selected.length === m) {
    ans += selected.join(' ') + '\n';
    return;
  }

  let preNumber = -1;

  for (let i = start; i < n; i++) {
    if (visited[i] === false && preNumber !== numbers[i]) {
      visited[i] = true;
      bt([...selected, numbers[i]], i);
      visited[i] = false;
      preNumber = numbers[i];
    }
  }
};

bt([], 0);
console.log(ans);
