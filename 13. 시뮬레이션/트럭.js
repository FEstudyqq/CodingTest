const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [NWL, trucks] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((it) => it.split(' '))
  .map((it) => it.map((it) => Number(it)));

// n : 개수
// w : 다리 길이
// l : 하중
const [n, w, l] = NWL;

const bridge = new Array(w).fill(0);
let time = 0;

function canTruckMove(targetTruckWeight) {
  const currentWeight = bridge.reduce((pre, cur) => pre + cur);

  return currentWeight + targetTruckWeight - bridge[0] <= l;
}

while (trucks.length) {
  const targetTruck = trucks[0];

  if (canTruckMove(targetTruck)) {
    bridge.shift();
    bridge.push(trucks.shift());
  } else {
    bridge.shift();
    bridge.push(0);
  }

  time++;
}

while (bridge.reduce((pre, cur) => pre + cur)) {
  bridge.shift();
  bridge.push(0);
  time++;
}
console.log(time);
