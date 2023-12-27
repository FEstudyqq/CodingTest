const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline
  .on('line', (line) => {
    input = line.split(' ');
    readline.close();
  })
  .on('close', () => {
    solutiuon(input);
    process.exit();
  });

function solutiuon(input) {
  const a = input.map((it) => parseInt(it)).sort((a, b) => a - b);
  console.log(a.join(' '));
}
