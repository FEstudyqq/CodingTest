const fs = require('fs');
const input = fs.readFileSync('Wiki\\input.txt').toString().trim().split('\n');

for (const i of input) {
  let trimedI = i
    .split(' ')
    .map((it) => parseInt(it))
    .reduce((pre, cur, idx, arr) => {
      if (!arr[idx]) pre += 1;
      return pre;
    }, 0);

  console.log(trimedI, 'Ss');

  if (trimedI === 4) console.log('D');
  else if (trimedI === 3) console.log('C');
  else if (trimedI === 2) console.log('B');
  else if (trimedI === 1) console.log('A');
  else console.log('E');
}

for (const i of input) {
  let trimedI = i
    .split(' ')
    .map((it) => parseInt(it))
    .reduce((pre, cur) => pre + cur);

  if (trimedI === 4) console.log('E');
  else if (trimedI === 3) console.log('A');
  else if (trimedI === 2) console.log('B');
  else if (trimedI === 1) console.log('C');
  else console.log('D');
}
