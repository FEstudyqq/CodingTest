const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [[n, _], ...inputs] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((it) => it.split(' ').map(Number));

const lightGraph = Array.from({ length: n + 1 }, () => []);
const heavyGraph = Array.from({ length: n + 1 }, () => []);

for (const [a, b] of inputs) {
  lightGraph[a].push(b);
  heavyGraph[b].push(a);
}

const countReachable = (graph, start) => {
  const visited = Array(n + 1).fill(false);
  visited[start] = true;

  const queue = [start];
  let count = 0;

  while (queue.length > 0) {
    const node = queue.shift();
    count += 1;

    for (const neighbor of graph[node]) {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        queue.push(neighbor);
      }
    }
  }

  return count - 1;
};

let lightCount = 0;
let heavyCount = 0;

for (let i = 1; i <= n; i++) {
  if (countReachable(lightGraph, i) > n / 2) lightCount++;
  if (countReachable(heavyGraph, i) > n / 2) heavyCount++;
}

console.log(lightCount + heavyCount);
