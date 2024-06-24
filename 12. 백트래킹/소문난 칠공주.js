/**
 * @param {number} num 
 * @returns {[number, number]}
 */
function num2coords(num) {
  return [Math.floor(num / 5), num % 5];
}

/**
 * @param {string[][]} students 
 * @param {number} size 
 * @param {number} total
 */
function getCandidates(students, size, total) {
  /**
   * @type {number[][]}
   */
  const result = [];

  /**
   * @type {number[]}
   */
  const temp = [];

  /**
   * @param {number[]} temp 
   * @param {number} num 
   * @param {string[][]} students 
   */
  function isValid(temp, num) {
    let result = true;

    for (let i = 0; i < temp.length; i += 1) {
      if (temp[i] >= num) {
        result = false;
        break;
      }
    }

    return result;
  }

  /**
   * @param {number[]} temp 
   */
  function getYeon(temp) {
    const coords = temp.map((num) => num2coords(num));
    const parties = coords.map(([x, y]) => students[x][y]);
    
    return parties.filter((student) => student === 'Y');
  }
  
  /**
   * @param {number} N 
   * @param {number} M 
   * @param {number[]} temp 
   * @param {number[][]} result 
   */
  function backtrack(N, M, temp, result) {
    if (N === 0) {
      const coords = temp.map((num) => num2coords(num));
      const parties = coords.map(([x, y]) => students[x][y]);
      const som = parties.filter((student) => student === 'S');

      if (som.length >= 4) {
        result.push([...temp]);
        return;
      }
    }

    if (getYeon(temp).length >= 4) {
      return;
    }

    for (let i = 0; i < M; i += 1) {
      if (isValid(temp, i)) {
        temp.push(i);
        backtrack(N - 1, M, temp, result);
        temp.pop();
      }
    }
  }

  backtrack(size, total, temp, result);

  return result;
}

/**
 * @param {number[]} candidate 
 * @param {string[][]} students 
 * @param {number} size 
 */
function isValidParty(candidate, students, size) {
  /**
   * @param {number} x 
   * @param {number} y 
   */
  function isValidStudent(x, y) {
    const limit = students.length;

    return 0 <= x && x < limit && 0 <= y && y < limit;
  }

  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];

  /**
   * @type {number[]}
   */
  const queue = [];
  queue.push(candidate[0]);
  
  const visited = Array(size).fill(false);
  visited[0] = true;

  let connected = 1;

  while (queue.length !== 0) {
    const [x, y] = num2coords(queue.shift());

    for (let i = 0; i < 4; i += 1) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      const ni = nx * 5 + ny;

      if (!isValidStudent(nx, ny)) {
        continue;
      }

      for (let j = 0; j < size; j += 1) {
        if (!visited[j] && candidate[j] === ni) {
          queue.push(ni);
          visited[j] = true;
          connected += 1;
          break;
        }
      }
    }
  }

  return connected === 7;
}

const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim()

const students = input.split('\n').map((line) => line.split(''));
const total = students.length * students[0].length;
const size = 7;

const candidates = getCandidates(students, size, total);
const result = candidates.filter((candidate) => isValidParty(candidate, students, size));

console.log(result.length);