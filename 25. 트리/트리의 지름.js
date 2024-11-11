const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const inputs = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((it) => it.split(' ').map(Number));
const [n] = inputs[0];
const tree = Array.from({ length: n + 1 }, () => []);
let visited = Array(n + 1).fill(0);

for (let i = 1; i < inputs.length; i++) {
  let front = 0;
  const startNode = inputs[i][front++];

  while (inputs[i][front] !== -1) {
    const endNode = inputs[i][front++];
    const cost = inputs[i][front++];
    tree[startNode].push([endNode, cost]);
  }
}

const farthestNode = [0, 0];
const dfs = (node, cost) => {
  visited[node] = true;

  if (cost > farthestNode[1]) {
    farthestNode[0] = node;
    farthestNode[1] = cost;
  }

  for (let i = 0; i < tree[node].length; i++) {
    const [nextNode, nextCost] = tree[node][i];
    if (!visited[nextNode]) dfs(nextNode, nextCost + cost);
  }
};

dfs(1, 0);
visited = Array(n + 1).fill(0);
dfs(farthestNode[0], 0);
console.log(farthestNode[1]);
