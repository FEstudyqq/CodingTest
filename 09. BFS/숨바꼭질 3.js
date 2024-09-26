const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [n, k] = fs.readFileSync(path).toString().trim().split(' ').map(Number);
const SIZE = 100001;
const map = Array.from({ length: SIZE }).fill(-1);

const q = [n];
let front = 0;
map[n] = 0;
while (front < q.length) {
  const x = q[front++];

  if (x === k) {
    map[k] = map[x];
    break;
  }

  if (x * 2 < SIZE && map[x * 2] === -1) {
    q.push(x * 2);
    map[x * 2] = map[x];
  }
  if (x - 1 >= 0 && map[x - 1] === -1) {
    q.push(x - 1);
    map[x - 1] = map[x] + 1;
  }
  if (x + 1 < SIZE && map[x + 1] === -1) {
    q.push(x + 1);
    map[x + 1] = map[x] + 1;
  }
}

console.log(map[k]);
