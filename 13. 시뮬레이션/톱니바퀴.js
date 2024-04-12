const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const cogWheels = input.splice(0, 4).map((line) => [...line].map(Number));
const LEFT = 2;
const RIGHT = 6;

function rotate(index, direction) {
  if (direction === 1) {
    const lastCog = cogWheels[index].pop();
    cogWheels[index].unshift(lastCog);
  } else {
    const firstCog = cogWheels[index].shift();
    cogWheels[index].push(firstCog);
  }
}

function checkLeft(index, direction) {
  if (
    index - 1 >= 0 &&
    cogWheels[index][RIGHT] !== cogWheels[index - 1][LEFT]
  ) {
    checkLeft(index - 1, direction * -1);
    rotate(index - 1, direction * -1);
  }
}

function checkRight(index, direction) {
  if (
    index + 1 < cogWheels.length &&
    cogWheels[index][LEFT] !== cogWheels[index + 1][RIGHT]
  ) {
    checkRight(index + 1, direction * -1);
    rotate(index + 1, direction * -1);
  }
}

function calculateScore() {
  return cogWheels.reduce((sum, wheel, i) => {
    return sum + wheel[0] * Math.pow(2, i);
  }, 0);
}

function solution() {
  input.shift();

  input.forEach((line) => {
    const [target, direction] = line.split(' ').map(Number);
    const index = target - 1;

    checkLeft(index, direction);
    checkRight(index, direction);
    rotate(index, direction);
  });

  const score = calculateScore();
  console.log(score);
}

solution();
