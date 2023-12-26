const input = require('fs')
  .readFileSync('test.txt')
  .toString()
  .split(`\r\n`)
  .map(v => v.split(' '));

// /dev/stdin
const solution = input => {
  const yut = {
    4: 'E',
    0: 'D',
    1: 'C',
    2: 'B',
    3: 'A',
  };

  const arr = input.map(v => v.reduce((a, b) => a + +b, 0));
  console.log(input);

  // return arr.map(v => yut[v]);
  console.log(arr.map(v => yut[v]).join('\n'));
};

solution(input);
// console.log(solution(input));

// for (let i = 0; i < solution(input).length; i++) {
//   console.log(solution(input)[i]);
// }
