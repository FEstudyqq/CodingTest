/**
 * @param {number[][]} eggs 
 */
function getCracked(eggs) {
  return eggs.filter((egg) => egg[0] <= 0).length;
}

/**
 * @param {number[][]} eggs 
 */
function solve(eggs) {
  let result = 0;

  /**
   * @param {number[][]} eggs 
   * @param {number} current 
   * @param {number} next 
   */
  function isValid(eggs, current, next) {
    if (current === next) {
      return false;
    }

    if (eggs[next][0] <= 0) {
      return false;
    }

    return true;
  }

  /**
   * @param {number[][]} eggs 
   * @param {number} current
   */
  function backtrack(eggs, current) {
    if (current === eggs.length) {
      const cracked = getCracked(eggs);

      if (cracked > result) {
        result = cracked;
      }

      return;
    }

    if (eggs[current][0] <= 0) {
      backtrack(eggs, current + 1);
      return;
    }

    let flag = false;

    for (let i = 0; i < eggs.length; i += 1) {
      if (isValid(eggs, current, i)) {
        flag = true;

        const [frontDurability, frontWeight] = eggs[current];
        const [secondDurability, secondWeight] = eggs[i];

        eggs[current][0] = frontDurability - secondWeight;
        eggs[i][0] = secondDurability - frontWeight;

        backtrack(eggs, current + 1);

        eggs[current][0] = frontDurability;
        eggs[i][0] = secondDurability;
      }
    }

    if (!flag) {
      backtrack(eggs, current + 1);
    }
  }

  backtrack(eggs, 0);

  return result;
}

const fs = require('fs');
const [_length, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const eggs = input.map((line) => line.split(' ').map((num) => Number.parseInt(num, 10)));

console.log(solve(eggs));

/**
 * 1. 조건에 따라 백트래킹 수행 가짓수가 늘어날 수 있다!
 * 2. 결과를 모두 얻어놓고 max()하는 것이 불가능할 수 있다!
 * 3. 다 안 깨져도 결과를 얻게 별도로 처리해야 한다!
 */