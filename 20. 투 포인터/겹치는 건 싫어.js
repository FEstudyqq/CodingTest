const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);

let left = 0;
let maxLength = 0;
const count = {};

for (let right = 0; right < N; right++) {
  count[A[right]] = (count[A[right]] || 0) + 1;

  while (count[A[right]] > K) {
    count[A[left]]--;
    left++;
  }

  maxLength = Math.max(maxLength, right - left + 1);
}

console.log(maxLength);
