const fs = require('fs');

const [first, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [K, _L] = first.split(' ').map((str) => Number.parseInt(str, 10));

let order = 1;

/**
 * @type {Map<string, number>}
 */
const registration = new Map();

input.forEach((student) => {
  registration.set(student, order);
  order += 1;
});

const result = [...registration.entries()];
result.sort((a, b) => a[1] - b[1]);

console.log(result.map(([student]) => student).slice(0, K).join('\n'));