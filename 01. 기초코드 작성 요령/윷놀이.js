const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const backCount = [];
const YUT = ['D', 'C', 'B', 'A', 'E'];

readline
  .on('line', function (line) {
    const cnt = line.split(' ').reduce((cnt, state) => cnt + Number(state), 0);
    backCount.push(cnt);
  })
  .on('close', solution);

function solution() {
  backCount.forEach((cnt) => {
    console.log(YUT[cnt]);
  });
}
