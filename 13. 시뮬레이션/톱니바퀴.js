const { ChildProcess } = require('child_process');
const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const inputs = fs.readFileSync(path).toString().trim().split('\n');
const wheels = inputs.splice(0, 4).map((it) => it.split('').map(Number));
const k = Number(inputs.splice(0, 1));

const printMap = (...param) => {
  const map = wheels;
  for (let i = 0; i < map.length; i++) console.log(map[i].join(' '));
  console.log(...param);
};

const isRotate = (w, d) => {
  if (d === -1) return wheels[w - 1][2] !== wheels[w][6];
  else return wheels[w][2] !== wheels[w + 1][6];
};

const rotate = (w, d) => {
  if (d === 1) wheels[w].unshift(wheels[w].pop());
  else wheels[w].push(wheels[w].shift());
};

for (const input of inputs) {
  let [w, d] = input.split(' ').map((it, idx) => (idx ? Number(it) : it - 1));
  let rotateQ = [false, false, false, false];

  rotateQ[w] = d;
  if (w === 0) {
    if (isRotate(1, -1)) {
      rotateQ[1] = d * -1;
      if (isRotate(2, -1)) {
        rotateQ[2] = d;
        if (isRotate(3, -1)) {
          rotateQ[3] = d * -1;
        }
      }
    }
  }

  if (w === 1) {
    if (isRotate(0, 1)) {
      rotateQ[0] = d * -1;
    }
    if (isRotate(2, -1)) {
      rotateQ[2] = d * -1;
      if (isRotate(3, -1)) {
        rotateQ[3] = d;
      }
    }
  }

  if (w === 2) {
    if (isRotate(1, 1)) {
      rotateQ[1] = d * -1;
      if (isRotate(0, 1)) {
        rotateQ[0] = d;
      }
    }
    if (isRotate(3, -1)) {
      rotateQ[3] = d * -1;
    }
  }

  if (w === 3) {
    if (isRotate(2, 1)) {
      rotateQ[2] = d * -1;
      if (isRotate(1, 1)) {
        rotateQ[1] = d;
        if (isRotate(0, 1)) {
          rotateQ[0] = d * -1;
        }
      }
    }
  }

  for (let i = 0; i < 4; i++) {
    if (!rotateQ[i]) continue;
    rotate(i, rotateQ[i]);
  }
}

let ans = 0;
for (let i = 0; i < 4; i++) {
  if (wheels[i][0]) ans += Math.pow(2, i);
}
console.log(ans);
