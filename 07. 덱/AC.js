const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const inputs = fs.readFileSync(path).toString().trim().split('\n');
const T = Number(inputs[0]);

let f = 1;

for (let t = 0; t < T; t++) {
  const comments = inputs[f++];
  const n = Number(inputs[f++]);
  const arr = (inputs[f++].match(/\d+/g) ?? []).map(Number);
  let isReversed = false;
  let isTrigger = false;

  for (const c of comments) {
    if (c === 'R') {
      isReversed = !isReversed;
    } else if (arr.length && c === 'D' && isReversed) {
      arr.pop();
    } else if (arr.length && c === 'D' && !isReversed) {
      arr.shift();
    } else {
      isTrigger = true;
      break;
    }
  }

  if (isReversed) arr.reverse();

  console.log(
    isTrigger ? 'error' : arr.length ? '[' + arr.toString() + ']' : arr
  );
}
