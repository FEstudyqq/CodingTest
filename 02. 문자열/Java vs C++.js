const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.on('line', function (input) {
  console.log(solution(input));
  readline.close();
});

function solution(input) {
  if (isCpp(input)) return convertToJava(input);
  if (isJava(input)) return convertToCpp(input);
  return 'Error!';
}

function isCpp(input) {
  const CPP = /^[a-z](_?[a-z]+)*$/;
  return CPP.test(input);
}

function isJava(input) {
  const JAVA = /^[a-z]+([A-Z][a-z]*)*$/;
  return JAVA.test(input);
}

function convertToCpp(java) {
  return java.replaceAll(/[A-Z]/g, (upper) => '_' + upper.toLowerCase());
}

function convertToJava(cpp) {
  return cpp.replaceAll(/_[a-z]/g, ([_, lower]) => lower.toUpperCase());
}
