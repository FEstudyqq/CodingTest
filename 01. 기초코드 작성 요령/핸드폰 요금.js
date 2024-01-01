// 1267

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', function (line) {
    input.push(line);
  })
  .on('close', function () {
    const cnt = Number(input[0]);
    const times = input[1].split(' ').map(Number);
    solution(cnt, times);
  });

function solution(cnt, times) {
  const YAmount = getYAmount(times);
  const MAmount = getMAmount(times);
  const Y = 'Y';
  const M = 'M';

  if (YAmount === MAmount) {
    console.log(Y, M, YAmount);
  } else {
    YAmount < MAmount ? console.log(Y, YAmount) : console.log(M, MAmount);
  }
}

function getYAmount(times) {
  return times.reduce((amt, time) => {
    amt += 10 * (Math.floor(time / 30) + 1);
    return amt;
  }, 0);
}

function getMAmount(times) {
  return times.reduce((amt, time) => {
    amt += 15 * (Math.floor(time / 60) + 1);
    return amt;
  }, 0);
}
