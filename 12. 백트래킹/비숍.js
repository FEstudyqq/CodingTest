const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [[N], ...inputs] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((it) => it.split(' ').map(Number));

const map = Array.from({ length: 2 * N }, () => Array());
const visited = Array(2 * N).fill(false);

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (inputs[i][j]) map[i + j].push([i, j]);
  }
}

let ans = 0;
const bt = (n, cnt) => {
  if (ans >= cnt + 2 * N - 1 - n) return;

  if (n === 2 * N - 1) {
    ans = Math.max(ans, cnt);
    return;
  }

  for (const [ci, cj] of map[n]) {
    if (!visited[ci - cj]) {
      visited[ci - cj] = true;
      bt(n + 1, cnt + 1);
      visited[ci - cj] = false;
    }
  }

  bt(n + 1, cnt);
};

bt(0, 0);

console.log(ans);
