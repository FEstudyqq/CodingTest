const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [[n], ...inputs] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((it) => it.split(' ').map(Number));

const graph = Array.from({ length: n + 1 }, () => []);
const dp = Array.from({ length: n + 1 }, () => [0, 1]);
const visited = Array(n + 1).fill(false);

for (const [u, v] of inputs) {
  graph[u].push(v);
  graph[v].push(u);
}

const dfs = (node) => {
  visited[node] = true;

  for (const child of graph[node]) {
    if (!visited[child]) {
      dfs(child);

      dp[node][0] += dp[child][1];
      dp[node][1] += Math.min(dp[child][0], dp[child][1]);
    }
  }
};

dfs(1);
console.log(Math.min(dp[1][0], dp[1][1]));
