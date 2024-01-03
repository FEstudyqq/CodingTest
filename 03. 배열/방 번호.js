const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('');

const arr = input.map(v => (v === '6' ? '9' : v));

const count = arr.reduce((acc, cur) => {
  acc[cur] = (acc[cur] || 0) + 1;
  return acc;
}, {});

if (count[9]) {
  count[9] = count[9] % 2 ? Math.floor(count[9] / 2 + 1) : Math.floor(count[9] / 2);
} else {
  count[9] = 0;
}
console.log(Math.max(...Object.values(count)));
