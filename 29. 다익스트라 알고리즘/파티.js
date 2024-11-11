const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [[n, m, x], ...inputs] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((it) => it.split(' ').map(Number));

const graph = Array.from({ length: n + 1 }, () => []);

for (const [s, e, c] of inputs) {
  graph[s].push([e, c]);
}

const getMinNode = (distances, visited) => {
  let minDistance = Infinity;
  let minNode = -1;

  for (let i = 1; i <= n; i++) {
    if (minDistance > distances[i] && !visited[i]) {
      minDistance = distances[i];
      minNode = i;
    }
  }

  return minNode;
};

const dijkstra = (start) => {
  const distances = Array(n + 1).fill(Infinity);
  const visited = Array(n + 1).fill(false);

  distances[start] = 0;

  while (true) {
    const currentNode = getMinNode(distances, visited);

    if (currentNode === -1) break;
    visited[currentNode] = true;

    for (const [node, cost] of graph[currentNode]) {
      if (distances[currentNode] + cost < distances[node]) {
        distances[node] = distances[currentNode] + cost;
      }
    }
  }

  return distances;
};

let ans = -1;
const backDijkstra = dijkstra(x);

for (let i = 1; i <= n; i++) {
  if (i === x) continue;

  const goDijkstra = dijkstra(i);

  const totalDistance = goDijkstra[x] + backDijkstra[i];
  if (totalDistance > ans) ans = totalDistance;
}

console.log(ans);
