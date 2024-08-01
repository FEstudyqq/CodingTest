const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [nmxyk, ...inputs] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\r\n');
let [n, m, x, y, k] = nmxyk.split(' ').map(Number);
const comments = inputs[inputs.length - 1];
const map = inputs.splice(0, n).map((it) => it.split(' ').map(Number));
let dice = [0, 0, 0, 0, 0, 0];

const checkRange = (x, y) => {
  if (x < 0 || y < 0 || x >= n || y >= m) return false;
  return true;
};

const moveRight = () => {
  y += 1;
  const newDice = [...dice];
  dice = [
    newDice[3],
    newDice[1],
    newDice[0],
    newDice[5],
    newDice[4],
    newDice[2],
  ];

  if (map[x][y] === 0) {
    map[x][y] = dice[5];
  } else {
    dice[5] = map[x][y];
    map[x][y] = 0;
  }
  console.log(dice[0]);
};

const moveLeft = () => {
  y -= 1;
  const newDice = [...dice];
  dice = [
    newDice[2],
    newDice[1],
    newDice[5],
    newDice[0],
    newDice[4],
    newDice[3],
  ];

  if (map[x][y] === 0) {
    map[x][y] = dice[5];
  } else {
    dice[5] = map[x][y];
    map[x][y] = 0;
  }
  console.log(dice[0]);
};

const moveUp = () => {
  x -= 1;
  const newDice = [...dice];
  dice = [
    newDice[4],
    newDice[0],
    newDice[2],
    newDice[3],
    newDice[5],
    newDice[1],
  ];
  if (map[x][y] === 0) {
    map[x][y] = dice[5];
  } else {
    dice[5] = map[x][y];
    map[x][y] = 0;
  }
  console.log(dice[0]);
};

const moveDown = () => {
  x += 1;
  const newDice = [...dice];
  dice = [
    newDice[1],
    newDice[5],
    newDice[2],
    newDice[3],
    newDice[0],
    newDice[4],
  ];

  if (map[x][y] === 0) {
    map[x][y] = dice[5];
  } else {
    dice[5] = map[x][y];
    map[x][y] = 0;
  }
  console.log(dice[0]);
};

for (const c of comments.split(' ')) {
  if (c === '1' && checkRange(x, y + 1)) moveRight();
  if (c === '2' && checkRange(x, y - 1)) moveLeft();
  if (c === '3' && checkRange(x - 1, y)) moveUp();
  if (c === '4' && checkRange(x + 1, y)) moveDown();
}
