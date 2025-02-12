const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = fs.readFileSync(path).toString().trim().split('\r\n');
const [n, r, q] = inputs[0].split(' ').map(Number);
const graph = Array.from({ length: n + 1 }, () => []);
const dp = Array(n + 1).fill(1); // 각 노드 자체도 서브트리에 포함된다.
const visited = Array(n + 1).fill(false);

for (let i = 1; i < n; i++) {
  const [u, v] = inputs[i].split(' ').map(Number);

  graph[u].push(v);
  graph[v].push(u);
}

const dfs = (node) => {
  visited[node] = true;

  for (const child of graph[node]) {
    if (!visited[child]) {
      dfs(child);
      dp[node] += dp[child];
    }
  }
};

dfs(r);

for (let i = n; i < inputs.length; i++) {
  const [u] = inputs[i];

  console.log(dp[u]);
}
