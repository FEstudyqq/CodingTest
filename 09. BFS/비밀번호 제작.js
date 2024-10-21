const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const inputs = fs.readFileSync(path, 'utf-8').trim().split('\n');
const n = Number(inputs[0]);
const m = Number(inputs[1]);
const logs = inputs[2].split(' ').map(Number);
const visited = new Array(n + 1).fill(false);

const q = logs.map((it) => [it, 0]);
let maxSafety = 0;
let front = 0;
logs.forEach((log) => (visited[log] = true));

while (front < q.length) {
  const [log, safety] = q[front++];

  if (maxSafety < safety) maxSafety = safety;

  for (let i = 0; i < 20; i++) {
    const nLog = log ^ (1 << i);

    if (nLog > n || visited[nLog]) continue;

    visited[nLog] = true;
    q.push([nLog, safety + 1]);
  }
}

console.log(maxSafety);
