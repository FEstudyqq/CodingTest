const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [f, s, g, u, d] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const floors = new Array(f + 1).fill(false);

floors[s] = 1;

const q = [s];
let ans = 0;

while (q.length) {
  const s = q.shift();

  if (s === g) {
    ans = floors[s];
    break;
  }

  if (s + u <= f && !floors[s + u]) {
    floors[s + u] = floors[s] + 1;
    q.push(s + u);
  }

  if (s - d >= 1 && !floors[s - d]) {
    floors[s - d] = floors[s] + 1;
    q.push(s - d);
  }
}

if (ans) console.log(ans - 1);
else console.log('use the stairs');
