/**
 * @param {number} disc 
 * @param {number} source 
 * @param {number} temp 
 * @param {number} destination 
 * @param {string[]} result 
 */
function hanoi(disc, source, temp, destination, result) {
  if (disc === 0) {
    return;
  }

  hanoi(disc - 1, source, destination, temp, result);
  result.push(`${source} ${destination}`);
  hanoi(disc - 1, temp, source, destination, result);
}

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim();
const N = Number.parseInt(input, 10);

const result = [];

hanoi(N, 1, 2, 3, result);

console.log(result.length);
console.log(result.join('\n'));