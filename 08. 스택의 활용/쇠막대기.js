const fs = require('fs');
const string = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .replaceAll('()', '.');

const [cnt, _] = Array.from(string).reduce(
  ([cnt, pipes], char) => {
    if (char === '.') cnt += pipes;
    else if (char === '(') pipes++;
    else if (char === ')') pipes--, cnt++;

    return [cnt, pipes];
  },
  [0, 0],
);

console.log(cnt);
