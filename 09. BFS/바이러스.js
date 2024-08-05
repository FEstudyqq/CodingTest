const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const inputs = fs.readFileSync(path).toString().trim().split('\n');

const networks = Array.from({ length: Number(inputs[0]) }, () => []); // 컴퓨터의 개수만큼 네트워크 정보를 저장할 배열
const computers = Array.from({ length: Number(inputs[0]) }).fill(false); // 바이러스 감염 여부 확인 배열
const q = [1]; // 1번 컴퓨터 시작

for (const input of inputs.splice(2, inputs.length - 2)) {
  const [a, b] = input.split(' ').map(Number);
  networks[a - 1].push(b);
  networks[b - 1].push(a);
}

while (q.length) {
  const target = q.shift() - 1;

  computers[target] = true;
  for (const network of networks[target]) {
    if (!computers[network - 1]) q.push(network);
  }
}

console.log(computers.filter((it) => it).length - 1);
