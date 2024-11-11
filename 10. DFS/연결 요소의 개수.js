const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((it) => it.split(' ').map(Number));
const [n, m] = inputs.shift();
const map = Array.from({ length: n + 1 }, () => []);
const visited = Array.from({ length: n + 1 }, () => false);

for (const input of inputs) {
  const [u, v] = input;

  map[u].push(v);
  map[v].push(u);
}

const dfs = (node) => {
  visited[node] = true;

  for (let i = 0; i < map[node].length; i++) {
    if (!visited[map[node][i]]) dfs(map[node][i]);
  }
};

let ans = 0;
for (let i = 1; i <= n; i++) {
  if (!visited[i]) {
    dfs(i);
    ans += 1;
  }
}

console.log(ans);
