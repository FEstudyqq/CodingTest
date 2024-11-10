const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = fs.readFileSync(path).toString().trim().split('\n');
const n = +inputs[0];
const m = +inputs[1];
const graph = Array.from({ length: n + 1 }, () => []);
const [start, end] = inputs.at(-1).split(' ').map(Number);

for (let i = 2; i < m + 2; i++) {
  const [s, e, c] = inputs[i].split(' ').map(Number);

  graph[s].push([e, c]);
}

const getMinNode = (distances, visited) => {
  let minDistance = Infinity;
  let minNode = -1;

  for (let i = 1; i <= n; i++) {
    if (!visited[i] && distances[i][0] < minDistance) {
      minDistance = distances[i][0];
      minNode = i;
    }
  }

  return minNode;
};

const dijkstra = (start, end) => {
  const distances = Array.from({ length: n + 1 }, () => [Infinity, Array()]);
  const visited = Array(n + 1).fill(false);
  distances[start][0] = 0;
  distances[start][1].push(start);

  for (let _ = 0; _ < n; _++) {
    const currentNode = getMinNode(distances, visited);

    if (currentNode === -1) break;
    visited[currentNode] = true;

    for (const [node, cost] of graph[currentNode]) {
      const distance = distances[currentNode][0] + cost;

      if (distance < distances[node][0]) {
        distances[node][0] = distance;
        distances[node][1] = [...distances[currentNode][1], node];
      }
    }
  }

  return distances[end];
};
const answer = dijkstra(start, end);
console.log(answer[0]);
console.log(answer[1].length);
console.log(...answer[1]);
