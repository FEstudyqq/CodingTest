/**
 * @param {string[]} first 
 * @param {string[]} second 
 */
function isEqual(first, second) {
  for (let i = 0; i < 8; i += 1) {
    if (first[i] !== second[i]) {
      return false;
    }
  }

  return true;
}

/**
 * @param {string[]} gear 
 * @param {1 | -1} direction 
 */
function rotate(gear, direction) {
  const result = [...gear];

  if (direction === 1) {
    result.splice(0, 0, result.pop());
  } else {
    result.push(result.shift());
  }

  return result;
}

/**
 * @param {string[]} first 
 * @param {string[]} second 
 * @param {'1' | '-1'} direction 
 */
function check(first, second, direction) {
  if (direction === 1) {
    return first[2] !== second[6];
  } else {
    return first[6] !== second[2];
  }
}

/**
 * @param {string[][]} gears 
 */
function calculate(gears) {
  let result = 0;

  for (let i = 0; i < gears.length; i += 1) {
    if (gears[i][0] === '1') {
      result += Math.pow(2, i);
    }
  }

  return result;
}

const fs = require('fs');

const [first, second, third, fourth, K, ...rotation] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const gears = [first.split(''), second.split(''), third.split(''), fourth.split('')];

rotation.forEach((data) => {
  const [index, dir] = data.split(' ').map((num) => Number.parseInt(num, 10));

  const stack = [[index - 1, dir]];
  const indices = [];
  const rotated = [];

  while (stack.length > 0) {
    const [index, dir] = stack.pop();
    indices.push(index);
    rotated.push([index, dir]);

    if (index - 1 >= 0) {
      if (!indices.includes(index - 1)) {
        if (check(gears[index], gears[index - 1], -1)) {
          stack.push([index - 1, -dir]);
        }
      }
    }

    if (index + 1 < 4) {
      if (!indices.includes(index + 1)) {
        if (check(gears[index], gears[index + 1], 1)) {
          stack.push([index + 1, -dir]);
        }
      }
    }
  }

  rotated.forEach(([num, dir]) => {
    gears[num] = rotate(gears[num], dir);
  });
});

console.log(calculate(gears));