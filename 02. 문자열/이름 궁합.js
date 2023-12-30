const fs = require('fs');

/**
 * @param {number[]} numbers 
 */
function calculate(numbers) {
  if (numbers.length == 2) {
    return numbers;
  }

  const result = [];
    
  for (let i = 0; i < numbers.length - 1; i++) {
    result.push((numbers[i] + numbers[i + 1]) % 10);
  }

  return calculate(result);
}

const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const strokes = [3, 2, 1, 2, 3, 3, 2, 3, 3, 2, 2, 1, 2, 2, 1, 2, 2, 2, 1, 2, 1, 1, 1, 2, 2, 1];

const strokeMap = new Map();
alphabets.forEach((value, index) => strokeMap.set(value, strokes[index]));

const [his, her] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const hisStroke = his.split('').map(letter => strokeMap.get(letter));
const herStroke = her.split('').map(letter => strokeMap.get(letter));

const test = hisStroke.map((stroke, index) => { return [stroke, herStroke[index]] }).flat();

console.log(calculate(test).join(''));