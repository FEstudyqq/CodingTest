const fs = require('fs');
const n = Number(fs.readFileSync('/dev/stdin').toString().trim());

const START = '어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.';
const QUESTION = '"재귀함수가 뭔가요?"';
const IN = [
  '"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.',
  '마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.',
  '그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."',
];
const ANSWER = '"재귀함수는 자기 자신을 호출하는 함수라네"';
const OUT = '라고 답변하였지.';
const DEPTH_PREFIX = '____';

function response(depth) {
  const indent = DEPTH_PREFIX.repeat(depth);
  console.log(indent + QUESTION);
  if (depth === n) {
    console.log(indent + ANSWER);
  } else {
    for (let i = 0; i < IN.length; i++) {
      console.log(indent + IN[i]);
    }
    response(depth + 1);
  }
  console.log(indent + OUT);
}

function solution() {
  console.log(START);
  response(0);
}

solution();
