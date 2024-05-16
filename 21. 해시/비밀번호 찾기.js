const fs = require('fs');

const [first, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = first.split(' ').map((str) => Number.parseInt(str, 10));

const data = input.slice(0, N);
const sites = input.slice(N, N + M);

/**
 * @type {Map<string, string>}
 */
const memo = new Map();

data.forEach((datum) => {
  const [site, password] = datum.split(' ');
  memo.set(site, password);
});

/**
 * @type {string[]}
 */
const result = [];

sites.forEach((site) => {
  result.push(memo.get(site));
});

console.log(result.join('\n'));