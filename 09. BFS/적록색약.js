const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [n, ...inputs] = fs.readFileSync(path).toString().trim().split('\n');
const graph = inputs.map((it) => it.split(''));
const graphBlind = graph.map((it) => it.map((it) => (it === 'R' ? 'G' : it)));

const nx = [1, -1, 0, 0];
const ny = [0, 0, 1, -1];

function bfs(x, y, map, target) {
  const q = [[x, y]];

  while (q.length != 0) {
    const [x, y] = q.shift();

    for (let i = 0; i < 4; i++) {
      const dx = x + nx[i];
      const dy = y + ny[i];

      if (dx < 0 || dy < 0 || dx >= n || dy >= n) continue;

      if (map[dx][dy] === target) {
        map[dx][dy] = false;
        q.push([dx, dy]);
      }
    }
  }
}

let count = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (graph[i][j]) {
      bfs(i, j, graph, graph[i][j]);
      count++;
    }
  }
}

console.log(count);

count = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (graphBlind[i][j]) {
      bfs(i, j, graphBlind, graphBlind[i][j]);
      count++;
    }
  }
}

console.log(count);
