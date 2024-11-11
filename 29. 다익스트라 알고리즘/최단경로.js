const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [[v, _], s, ...inputs] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((it) => it.split(' ').map(Number));

const graph = Array.from({ length: v + 1 }, () => []);

for (const input of inputs) {
  const [u, v, w] = input;

  graph[u].push([v, w]);
}

const getMinNode = (distances, visited) => {
  let minDistance = Infinity;
  let minNode = -1;

  for (let i = 1; i <= v; i++) {
    if (!visited[i] && distances[i] < minDistance) {
      minDistance = distances[i];
      minNode = i;
    }
  }

  return minNode;
};

const dijkstra = (start) => {
  const distances = Array(v + 1).fill(Infinity);
  const visited = Array(v + 1).fill(false);

  distances[start] = 0;

  while (true) {
    const node = getMinNode(distances, visited);
    if (node === -1) break;
    visited[node] = true;

    for (const [v, w] of graph[node]) {
      if (distances[node] + w < distances[v]) {
        distances[v] = distances[node] + w;
      }
    }
  }

  return distances;
};

const ans = dijkstra(s)
  .slice(1)
  .map((it) => (it === Infinity ? 'INF' : it))
  .join('\n')
  .trim();
console.log(ans);
