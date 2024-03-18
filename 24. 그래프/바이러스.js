const fs = require('fs');
let [V, E, ...edges] = fs
  // .readFileSync('/dev/stdin')
  .readFileSync('../input.txt')
  .toString()
  .trim()
  .split('\n');
V = Number(V);
E = Number(E);

// 인접 리스트 구현
const adjList = Array.from({ length: V + 1 }).map(() => []);
edges.forEach((line) => {
  const [start, end] = line.split(' ').map(Number);
  adjList[start].push(end);
  adjList[end].push(start);
});

// 1번 컴퓨터부터 탐색(bfs)
let cnt = 0;
const queue = [1];
const visited = new Set(queue);

while (queue.length > 0) {
  const v = queue.shift();

  adjList[v].forEach((neighbor) => {
    if (!visited.has(neighbor)) {
      visited.add(neighbor);
      queue.push(neighbor);
      cnt += 1;
    }
  });
}

console.log(cnt);
