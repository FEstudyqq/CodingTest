const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const inputs = fs.readFileSync(path).toString().trim().split('\n');

let t = Number(inputs[0]);
let front = 1;

while (t) {
  const n = Number(inputs[front++]);
  const numbers = inputs[front++].split(' ').map((it) => Number(it) - 1);

  let visited = Array.from({ length: n }).fill(false);

  let ans = 0;
  const dfs = (cur, start) => {
    const next = numbers[cur];

    if (visited[next]) {
      ans += 1;
      return;
    }
    visited[next] = true;
    dfs(next);
  };

  for (let i = 0; i < n; i++) {
    if (!visited[i]) dfs(i);
  }
  console.log(ans);

  t -= 1;
}
