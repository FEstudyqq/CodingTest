const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((it) => it.split(' ').map(Number));
const [n, m, v] = inputs.shift();
const info = Array.from({ length: n + 1 }, () => []);

for (const input of inputs.sort((a, b) => a[0] - b[0] || a[1] - b[1])) {
  const [a, b] = input;
  info[a].push(b);
  info[b].push(a);
}

for (let i = 1; i <= n; i++) {
  info[i].sort((a, b) => a - b);
}

let ans = '';
const visitedDFS = Array.from({ length: n + 1 }, () => false);

const dfs = (node) => {
  if (visitedDFS[node]) return;
  ans += node + ' ';

  for (let i = 0; i < info[node].length; i++) {
    visitedDFS[node] = true;
    dfs(info[node][i]);
  }
};

const visitedBFS = Array.from({ length: n + 1 }, () => false);
const bfs = (node) => {
  const q = [node];

  while (q.length) {
    const target = q.shift();
    if (visitedBFS[target]) continue;
    ans += target + ' ';

    visitedBFS[target] = true;

    q.push(...info[target]);
  }
};

visitedDFS[0] = true;
dfs(v);
console.log(ans.trim());

ans = '';

visitedBFS[0] = true;
bfs(v);
console.log(ans.trim());
