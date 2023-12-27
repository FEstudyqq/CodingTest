const fs = require('fs');
const input = fs.readFileSync('Wiki\\input.txt').toString().trim().split('\n');

let y = 0;
let m = 0;
// let [y,m] = [0.0]
const call = input[1].split(' ').map((it) => Number(it));

call.forEach((it) => {
  y += (parseInt(it / 30) + 1) * 10;
  m += (parseInt(it / 60) + 1) * 15;
});

if (y === m) {
  console.log(['Y M', y].join(' '));
} else if (y < m) {
  console.log(['Y', y].join(' '));
} else {
  console.log(['M', m].join(' '));
}
