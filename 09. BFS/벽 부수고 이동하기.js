class Node {
  constructor(data) {
    this.next = null;
    this.data = data;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(...data) {
    const node = new Node(data);

    if (this.head === null) this.head = node;
    else this.tail.next = node;

    this.tail = node;
    this.length++;
  }

  shift() {
    if (this.head === null) return;

    const data = this.head.data;
    this.head = this.head.next;
    this.length--;
    return data;
  }
}

function solution() {
  const queue = new Queue();
  queue.push(0, 0, 1, 1); // row, col, distance, canBreak
  const answer = bfs(queue); // it returns distance or -1
  console.log(answer);
}

function bfs(queue) {
  const dr = [1, -1, 0, 0];
  const dc = [0, 0, 1, -1];

  while (queue.length > 0) {
    const [r, c, d, canBreak] = queue.shift();
    if (r === H - 1 && c === W - 1) return d;

    for (let i = 0; i < 4; i++) {
      const nr = r + dr[i];
      const nc = c + dc[i];

      if (!isValidPosition(nr, nc) || visited[canBreak][nr][nc]) continue;

      if (map[nr][nc] === '0') {
        queue.push(nr, nc, d + 1, canBreak);
        visited[canBreak][nr][nc] = true;
      } else if (map[nr][nc] === '1' && canBreak) {
        queue.push(nr, nc, d + 1, 0); // canBreak = 0
        visited[0][nr][nc] = true;
      }
    }
  }
  return -1;
}

function isValidPosition(r, c) {
  return 0 <= r && r < H && 0 <= c && c < W;
}

const fs = require('fs');
const [size, ...lines] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [H, W] = size.split(' ').map(Number);
const map = lines.map((line) => [...line]);

// visited[hasBreak][row][column]
const visited = Array.from({ length: 2 }).map(() =>
  Array.from({ length: H }).map(() => Array.from({ length: W }).fill(false)),
);
solution();
