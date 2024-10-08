const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((it) => it.split(' ').map(Number));
const [n, m, k, x] = inputs.shift();
const map = Array.from({ length: n + 1 }, () => []);

for (const input of inputs) {
  const [a, b] = input;
  map[a].push(b);
}

const visited = Array.from({ length: n + 1 }, () => false);

const q = [x];
visited[x] = 0;

while (q.length) {
  const node = q.shift();

  for (let i = 0; i < map[node].length; i++) {
    if (visited[map[node][i]] === false) {
      visited[map[node][i]] = visited[node] + 1;
      q.push(map[node][i]);
    }
  }
}

const ans = [];
for (let i = 1; i <= n; i++) {
  if (visited[i] === k) ans.push(i);
}

console.log(ans.length ? ans.sort((a, b) => a - b).join('\n') : -1);
