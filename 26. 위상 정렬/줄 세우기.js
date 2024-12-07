const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [[n, m], ...inputs] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((it) => it.split(' ').map(Number));

const graph = Array.from({ length: n + 1 }, () => []);
const inDegree = Array(n + 1).fill(0);

for (let i = 0; i < m; i++) {
  const [a, b] = inputs[i];

  graph[a].push(b);
  inDegree[b] += 1;
}

const q = [];
for (let i = 1; i <= n; i++) {
  if (inDegree[i] === 0) q.push(i);
}

let ans = '';
while (q.length) {
  const current = q.shift();
  ans += current + ' ';

  for (const next of graph[current]) {
    inDegree[next] -= 1;

    if (inDegree[next] === 0) q.push(next);
  }
}

console.log(ans.trim());
