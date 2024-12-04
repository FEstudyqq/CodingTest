const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = fs.readFileSync(path).toString().trim().split('\n');

let idx = 0;
const T = Number(inputs[idx++]);

for (let _ = 0; _ < T; _++) {
  const [n, k] = inputs[idx++].split(' ').map(Number);
  const costs = [0, ...inputs[idx++].split(' ').map(Number)];
  const graph = Array.from({ length: n + 1 }, () => []);
  const inDegree = Array(n + 1).fill(0);

  for (let i = 0; i < k; i++) {
    const [x, y] = inputs[idx++].split(' ').map(Number);

    graph[x].push(y);
    inDegree[y] += 1;
  }

  const dp = Array(n + 1).fill(0);
  const q = [];

  for (let i = 1; i <= n; i++) {
    if (inDegree[i] === 0) {
      q.push(i);
      dp[i] = costs[i];
    }
  }

  while (q.length) {
    const current = q.shift();

    for (const next of graph[current]) {
      inDegree[next] -= 1;
      dp[next] = Math.max(dp[current] + costs[next], dp[next]);

      if (inDegree[next] === 0) q.push(next);
    }
  }

  const target = +inputs[idx++];
  console.log(dp[target]);
}
